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

import io.swagger.annotations.ApiOperation;


@CrossOrigin
@RestController
@RequestMapping("/api")
public class StaController {
	
	@Autowired
	private IStaService ser;

	@ExceptionHandler(Exception.class)
	public void ExceptionMethod(Exception e) {

	}
	
	@GetMapping("/statistics/1month")
	@ApiOperation(value = "오늘 날짜부터 1년 전까지의 통계 데이터")
	public @ResponseBody ResponseEntity<Map<String, Object>> yearSta() {
		ResponseEntity<Map<String, Object>> re = null;
		Calendar cal = Calendar.getInstance();
		DateFormat df = new SimpleDateFormat("YYYY-MM-dd HH");
		Date date = new Date();
		Map<String, Object> result = new HashMap<>();
		try {
			cal.setTime(date);
			df.format(date);
			String today = df.format(date);		
			cal.add(Calendar.MONTH, -11);
			String target = df.format(cal.getTime());

			Map<String, Object> map = new HashMap<>();
			map.put("today", today);
			map.put("target", target);
			List<Click> findList = ser.getDateList(map);
		
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
			List<Map<String, Object>> list = new LinkedList<>();
			int startIdx = Integer.parseInt(today.split("-")[1]);
			int year = Integer.parseInt(today.substring(0,4));
			for(int i=0; i<12; i++) {
				Map<String, Object> value = new HashMap<>();
				value.put("idx", i);
				value.put("month", year+"-"+startIdx);
				value.put("click", click[startIdx]);
				value.put("qr", qr[startIdx]);
				startIdx--;
				if(startIdx==0) {
					startIdx=12;
					year--;
				}
				list.add(value);
			}
			result.put("list", list);
			re = new ResponseEntity<>(result, HttpStatus.OK);
		} catch(Exception e) {
			result.put("resmsg", e.getMessage());
			System.out.println(e.getMessage());
			re = new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
		}
		return re;
	}
	
	@GetMapping("/statistics/15day")
	@ApiOperation(value = "오늘 날짜부터 15일 전까지의 통계 데이터")
	public @ResponseBody ResponseEntity<Map<String, Object>> monthSta() {
		ResponseEntity<Map<String, Object>> re = null;
		Calendar cal = Calendar.getInstance();
		DateFormat df = new SimpleDateFormat("YYYY-MM-dd HH");
		Date date = new Date();
		Map<String, Object> result = new HashMap<>();
		try {
			cal.setTime(date);
			df.format(date);
			String today = df.format(date);
			cal.add(Calendar.DAY_OF_MONTH, -14);
			String target = df.format(cal.getTime());
		
			Map<String, Object> map = new HashMap<>();
			map.put("today", today);
			map.put("target", target);
			List<Click> findList = ser.getDateList(map);
		
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
			result.put("list", list);
			re = new ResponseEntity<>(result, HttpStatus.OK);
		} catch(Exception e) {
			result.put("resmsg", e.getMessage());
			System.out.println(e.getMessage());
			re = new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
		}
		return re;
	}
	
	@GetMapping("/statistics/3hour")
	@ApiOperation(value = "오늘 날짜부터 1일 전까지의 데이터를 3시간씩 묶은 통계 데이터")
	public @ResponseBody ResponseEntity<Map<String, Object>> hourSta() {
		ResponseEntity<Map<String, Object>> re = null;
		Calendar cal = Calendar.getInstance();
		DateFormat df = new SimpleDateFormat("YYYY-MM-dd HH");
		Date date = new Date();
		Map<String, Object> result = new HashMap<>();
		try {
			cal.setTime(date);
			df.format(date);
			String today = df.format(date);
			cal.add(Calendar.DAY_OF_MONTH, -1);
			String target = df.format(cal.getTime());
		
			Map<String, Object> map = new HashMap<>();
			map.put("today", today);
			map.put("target", target);
			List<Click> findList = ser.getDateList(map);
		
			int[] click = new int[25];
			int[] qr = new int[25];
			int hours=Integer.parseInt(today.substring(11,13));
   
			for(int i=0; i<findList.size(); i++) {
				String hour = findList.get(i).getDate().substring(11,13);
				int c = Integer.parseInt(findList.get(i).getClick_cnt());
				int q = Integer.parseInt(findList.get(i).getQr_cnt());
				click[Integer.parseInt(hour)] +=c;
				qr[Integer.parseInt(hour)] +=q;
			}

			List<Map<String, Object>> list = new LinkedList<>();
			int startHour=hours;
			for(int i=1; i<=8; i++) {
				Map<String, Object> value = new HashMap<>();
				value.put("idx", i);
				int clickCnt=0;
				int qrCnt=0;
				for (int j = startHour; j >(startHour-3<0?0:startHour-3); j--) {
					if(startHour==1) {
						clickCnt+=click[1];
						clickCnt+=click[24];
						clickCnt+=click[23];
						qrCnt+=qr[1];
						qrCnt+=qr[24];
						qrCnt+=qr[23];
						break;
					}else if(startHour==2) {
						clickCnt+=click[2];
						clickCnt+=click[1];
						clickCnt+=click[24];
						qrCnt+=qr[2];
						qrCnt+=qr[1];
						qrCnt+=qr[24];
						break;
					}else {
						clickCnt+=click[j];
						qrCnt+=qr[j];
					}
				}
				value.put("end_hour", startHour);
				startHour=startHour==2?24:startHour==1?23:startHour-2;
				value.put("atart_hour", startHour);
				value.put("click", clickCnt);
				value.put("qr", qrCnt);
				list.add(value);
			}
			System.out.println(list.size());
			result.put("list", list);
			re = new ResponseEntity<>(result, HttpStatus.OK);
		} catch(Exception e) {
			result.put("resmsg", e.getMessage());
			System.out.println(e.getMessage());
			re = new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
		}
		return re;
	}
}