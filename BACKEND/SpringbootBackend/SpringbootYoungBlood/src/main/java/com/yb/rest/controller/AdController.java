package com.yb.rest.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.yb.rest.service.IAdService;
import com.yb.rest.vo.Receivefromsensor;
import com.yb.rest.vo.Sendtofront;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class AdController {
	
	@Autowired
	private IAdService ser;
	
	@ExceptionHandler(Exception.class)
	public void ExceptionMethod(Exception e) {

	}
	
	/** 센서값을 받는다. */
	@GetMapping("/sensor/{temp}/{hum}")
	public void sensor(@PathVariable String temp, @PathVariable String hum) {
		System.out.println(temp);
		System.out.println(hum);
		
		// INSERT
		
		//두개 받아서 계산해서 나라 인덱스를 뽑아내기
		List<Receivefromsensor> nation = new LinkedList<>();
		
		//계산 값 받기
		//nation = ser.~~;
		
		selectnation(nation);
	}
	 
	/** 센서값을 받아 거기에 맞는 추천 나라를 객체 배열로 전송한다. 
	 * @throws JsonProcessingException */
	public @ResponseBody ResponseEntity<Map<String, Object>> selectnation(List<Receivefromsensor> nation) throws JsonProcessingException {
		ResponseEntity<Map<String, Object>> re = null;
		Map<String, Object> result = new HashMap<>();
		List<Sendtofront> Countrylist = new LinkedList<>();
		for(int idx=0; idx<nation.size(); idx++) {
			
			int id = Countrylist.get(idx).getId();
			List<String> imgs = ser.getImgs(id);
			List<String> modalContents = ser.getModalcontents(id);
		
			//join
			Map<String, Integer> map = new HashMap<String, Integer>();
			map.put("nationidx", nation.get(idx).getNationidx());
			map.put("type",nation.get(idx).getType());
			Sendtofront stf = ser.getInfo(map);
			
			//setting & json(map)
			stf.setImgs(imgs);
			stf.setModalContents(modalContents);
			Countrylist.add(stf);
			
		}
		
		//send to front
		result.put("datas", Countrylist);
		re = new ResponseEntity<>(result, HttpStatus.OK);
		return re;
	}
}
