package com.yb.rest.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.yb.rest.service.IStaService;
import com.yb.rest.vo.Click;


@CrossOrigin
@RestController
@RequestMapping("/api")
public class StaController {
	
	@Autowired
	private IStaService ser;

	@ExceptionHandler(Exception.class)
	public void ExceptionMethod(Exception e) {

	}
	
	@GetMapping("/statistics/year")
	public @ResponseBody ResponseEntity<Map<String, Object>> date() {
		ResponseEntity<Map<String, Object>> re = null;
		Calendar cal = Calendar.getInstance();
		
		DateFormat df = new SimpleDateFormat("YYYY-MM-dd hh");
		Date date = new Date();

		cal.setTime(date);
		df.format(date);
		String today = df.format(date);
		System.out.println(today);
		
		cal.add(Calendar.YEAR, -1);
		
		String target = df.format(cal.getTime());
		System.out.println(target);
		
		Map<String, Object> map = new HashMap<>();
		map.put("today", today);
		map.put("target", target);
		
		List<Click> list = ser.getDateList(map);
		System.out.println(list);

		int[] click = new int[13];
		int[] qr = new int[13];
		for(int i=0; i<list.size(); i++) {
			String month = list.get(i).getDate().split("-")[1];
			int c = Integer.parseInt(list.get(i).getClick_cnt());
			int q = Integer.parseInt(list.get(i).getQr_cnt());
			
			if(month.equals(month)) {
				click[Integer.parseInt(month)] +=c;
				qr[Integer.parseInt(month)] +=q;
			}
		}
		Map<String, Object> res = new HashMap<>();
		for(int i=1; i<=10; i++) {
			Map<String, Object> value = new HashMap<>();
			value.put("click", click[i]);
			value.put("qr", qr[i]);
			res.put(i+"월", value);
		}
		
		return re = new ResponseEntity<>(res, HttpStatus.OK);
	}
}
