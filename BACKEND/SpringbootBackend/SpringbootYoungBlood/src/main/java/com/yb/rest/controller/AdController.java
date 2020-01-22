package com.yb.rest.controller;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yb.rest.service.IAdService;
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
	
	/** 센서값을 받아서 데이터베이스에 저장하여 해당되는 나라 리스트를 뽑아낸다. */
	@GetMapping("/sensor/{temp}/{hum}")
	public void sensor(@PathVariable String temp, @PathVariable String hum) {
		System.out.println(temp);
		System.out.println(hum);
		
		//두개 받아서 계산해서 나라 인덱스를 뽑아내기
		List<Integer> nation = new LinkedList<>();
		
		//계산 값 받기
		//nation = ser.~~;
		
		selectnation(nation);
	}
	 
	/** 센서값을 받아 거기에 맞는 추천 나라를 객체 배열로 전송한다. */
	public void selectnation(List<Integer> nation) {
		List<Sendtofront> Countrylist = new LinkedList<>();
//		for(int idx=0; idx<nation.size(); idx++) {
//			int id = Countrylist.get(idx).getId();
//			List<String> imgs = ser.getImgs(id);
//			List<String> modalContents = ser.getModalcontents(id);
//			
//			//avertb
//			float humid = 0;
//			float temp = 0;
//			
//			//nationtb
//			String name = null;
//			String thumbnail = null;
//			
//			//contents
//			String speechtext = null;
//			
//			Countrylist.add(new Sendtofront (id, temp, humid, name, speechtext, thumbnail, imgs, modalContents));
//		}
		
		//only test
		//List<String> imgs = ser.getImgs(1);
		List<String> modal = ser.getModalcontents(1);
		System.out.println(modal);
		
		//json 형식으로 바꾸고
		//프론트로 전송하기
		
	}
}
