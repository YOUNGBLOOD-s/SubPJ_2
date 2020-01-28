package com.yb.rest.controller;

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
import com.yb.rest.service.IAdService;
import com.yb.rest.vo.Nation;
import com.yb.rest.vo.QRcode;
import com.yb.rest.vo.Receivefromsensor;
import com.yb.rest.vo.Sendtofront;
import com.yb.rest.vo.Sensor;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class AdController {
	
	@Autowired
	private IAdService ser;
	
	@ExceptionHandler(Exception.class)
	public void ExceptionMethod(Exception e) {

	}
	
	/** 센서값을 받는다. 
	 * @throws JsonProcessingException */
	//희수 2020-01-23
	@GetMapping("/sensor/{temp}/{hum}")
	public void sensor(@PathVariable String temp, @PathVariable String hum) throws JsonProcessingException {
		System.out.println(temp);
		System.out.println(hum);
		Sensor sen=new Sensor(Float.parseFloat(temp), Float.parseFloat(hum));
		
		// sensor data INSERT
		ser.insertSensor(sen); 
		System.out.println("testing");
		List<Sendtofront> li=ser.selectAll();
		System.out.println(li.get(1));
		for(int i=0;i<li.size();i++) {
			System.out.println(li.get(i));
		}
		System.out.println("???");
		// INSERT
		//온도 22이도 이상일 경우 => 온도 미만 온도들에 가산점 부여
		
		//리스트들에게 습도로 점수
				
		//미세먼지로 점수화
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
			
			int id = Countrylist.get(idx).getIdx();
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
	
	@GetMapping("/detail/{id}")
	public @ResponseBody ResponseEntity<Map<String, Object>> selectnation(@PathVariable String id) {
		int idx = Integer.parseInt(id);
		ResponseEntity<Map<String, Object>> re = null;
		Map<String, Object> result = new HashMap<>();
		
		//type 계산하기
		int type = 1;
		List<QRcode> routelist = ser.getRoutes(idx);
		
		
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("nationidx", idx);
		map.put("type", type);
		Nation nation = ser.getNationdetail(map);
		System.out.println(nation);
		
		//send to front
		result.put("id", nation.getIdx());
		result.put("name", nation.getName());
		result.put("thumbnail", nation.getUrl());
		result.put("price", nation.getPrice());
		if(nation.getContinents().equals("1")) {
			result.put("category", "Europe");
		} else if(nation.getContinents().equals("2")) {
			result.put("category", "Africa");
		} else if(nation.getContinents().equals("3")) {
			result.put("category", "Asia");
		} else {
			result.put("category", "North America");
		}
		result.put("routes", routelist);
		re = new ResponseEntity<>(result, HttpStatus.OK);
		return re;
	}
}
