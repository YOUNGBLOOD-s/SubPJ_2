package com.yb.rest.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
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
	public @ResponseBody ResponseEntity<Map<String, Object>> yearSta() {
		ResponseEntity<Map<String, Object>> re = null;
		Calendar cal = Calendar.getInstance();
		
		DateFormat df = new SimpleDateFormat("YYYY-MM-dd HH");
		Date date = new Date();

		cal.setTime(date);
		df.format(date);
		String today = df.format(date);
		System.out.println(today);
		
		cal.add(Calendar.MONTH, -11);
		
		String target = df.format(cal.getTime());
		System.out.println(target);
		
		Map<String, Object> map = new HashMap<>();
		map.put("today", today);
		map.put("target", target);
		List<Click> findList = ser.getDateList(map);
		System.out.println(findList);
		
		int[] click = new int[13];
		int[] qr = new int[13];
		for(int i=0; i<findList.size(); i++) {
			String month = findList.get(i).getDate().split("-")[1];
			int c = Integer.parseInt(findList.get(i).getClick_cnt());
			int q = Integer.parseInt(findList.get(i).getQr_cnt());
			
			if(month.equals(month)) {
				click[Integer.parseInt(month)] +=c;
				qr[Integer.parseInt(month)] +=q;
			}
		}
		
		Map<String, Object> result = new HashMap<>();
		List<Map<String, Object>> list = new LinkedList<>();
		int startIdx = Integer.parseInt(today.split("-")[1]);
		for(int i=0; i<12; i++) {
			
			Map<String, Object> value = new HashMap<>();
			value.put("idx", i);
			value.put("month", startIdx);
			value.put("click", click[startIdx]);
			value.put("qr", qr[startIdx]);
			startIdx--;
			if(startIdx==0) startIdx=12;
			list.add(value);
			
		}
		System.out.println(list);
		result.put("list", list);
		return re = new ResponseEntity<>(result, HttpStatus.OK);
	}
	
	@GetMapping("/statistics/15day")
	public @ResponseBody ResponseEntity<Map<String, Object>> monthSta() {
		ResponseEntity<Map<String, Object>> re = null;
		Calendar cal = Calendar.getInstance();
		
		DateFormat df = new SimpleDateFormat("YYYY-MM-dd HH");
		Date date = new Date();

		cal.setTime(date);
		df.format(date);
		String today = df.format(date);
		System.out.println(today);
		
		cal.add(Calendar.DAY_OF_MONTH, -14);
		
		String target = df.format(cal.getTime());
		System.out.println(target);
		
		Map<String, Object> map = new HashMap<>();
		map.put("today", today);
		map.put("target", target);
		List<Click> findList = ser.getDateList(map);
		System.out.println(findList);
		
		int[] click = new int[32];
		int[] qr = new int[32];
		
		int year = Integer.parseInt(today.substring(0,4));
        int month = Integer.parseInt(today.substring(5,7));
        int days = Integer.parseInt(today.substring(8,10));

        Calendar cals = new GregorianCalendar(year, month, days);
        int daysOfMonth = cals.getActualMaximum(Calendar.DAY_OF_MONTH);
       
       
		for(int i=0; i<findList.size(); i++) {
			String day = findList.get(i).getDate().substring(8,10);
			int c = Integer.parseInt(findList.get(i).getClick_cnt());
			int q = Integer.parseInt(findList.get(i).getQr_cnt());
			
			click[Integer.parseInt(day)] +=c;
			qr[Integer.parseInt(day)] +=q;
		}
	
		Map<String, Object> result = new HashMap<>();
		List<Map<String, Object>> list = new LinkedList<>();
		int startIdx = days;
		for(int i=1; i<=15; i++) {
			Map<String, Object> value = new HashMap<>();
			value.put("idx", i);
			value.put("day", year+"-"+String.format("%02d", month)+"-"+String.format("%02d", startIdx));
			value.put("click", click[startIdx]);
			value.put("qr", qr[startIdx]);
			startIdx--;
			if(startIdx==0) {
				startIdx=daysOfMonth;
				year--;
			}
			list.add(value);
			
		}
		
		System.out.println(list.size());
		result.put("list", list);
		return re = new ResponseEntity<>(result, HttpStatus.OK);
	}
	
	@GetMapping("/statistics/hour")
	public @ResponseBody ResponseEntity<Map<String, Object>> hourSta() {
		ResponseEntity<Map<String, Object>> re = null;
		Calendar cal = Calendar.getInstance();
		
		DateFormat df = new SimpleDateFormat("YYYY-MM-dd HH");
		Date date = new Date();

		cal.setTime(date);
		df.format(date);
		String today = df.format(date);
		System.out.println(today);
		
		cal.add(Calendar.DAY_OF_MONTH, -1);
		
		String target = df.format(cal.getTime());
		System.out.println(target);
		
		Map<String, Object> map = new HashMap<>();
		map.put("today", today);
		map.put("target", target);
		List<Click> findList = ser.getDateList(map);
		System.out.println(findList);
		
		
		int[] click = new int[25];
		int[] qr = new int[25];
		
		System.out.println(today+"ㅋㅋ");
		int year = Integer.parseInt(today.substring(0,4));
        int month = Integer.parseInt(today.substring(5,7));
        int days = Integer.parseInt(today.substring(8,10));
        int hours=Integer.parseInt(today.substring(11,13));

        Calendar cals = new GregorianCalendar(year, month, days);
        int daysOfMonth = cals.getActualMaximum(Calendar.DAY_OF_MONTH);
        System. out.println("ㅋㅋ"+daysOfMonth);
       
       
		for(int i=0; i<findList.size(); i++) {
			String hour = findList.get(i).getDate().substring(11,13);
			int c = Integer.parseInt(findList.get(i).getClick_cnt());
			int q = Integer.parseInt(findList.get(i).getQr_cnt());
			
			click[Integer.parseInt(hour)] +=c;
			qr[Integer.parseInt(hour)] +=q;
		}
		
        System.out.println(Arrays.toString(click));
        System.out.println(Arrays.toString(qr));
	
		Map<String, Object> result = new HashMap<>();
		List<Map<String, Object>> list = new LinkedList<>();
		int startHour=hours;
		
//		for(int i=1; i<=15; i++) {
//			Map<String, Object> value = new HashMap<>();
//			value.put("idx", i);
//			for (int j = startHour; j >(startHour-3<0?24-startHour:startHour-3); j--) {
//				
//				
//			}
//			value.put("hours", year+"-"+String.format("%02d", month)+"-"+String.format("%02d", startIdx));
//			value.put("click", click[startIdx]);
//			value.put("qr", qr[startIdx]);
//			startIdx--;
//			if(startIdx==0) {
//				startIdx=daysOfMonth;
//				year--;
//			}
//			list.add(value);
//			
//		}
		
		System.out.println(list.size());
		result.put("list", list);
		return re = new ResponseEntity<>(result, HttpStatus.OK);
	}
}
