package com.yb.rest.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.yb.rest.service.IStaService;
import com.yb.rest.vo.Click;

import io.jsonwebtoken.Claims;
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
	
	@GetMapping("/statistics/1month/{nationIdx}")
	@ApiOperation(value = "오늘 날짜부터 1년 전까지의 통계 데이터")
	public @ResponseBody ResponseEntity<Map<String, Object>> yearSta(@RequestHeader(value="Authorization") String token, @PathVariable String nationIdx) {
		ResponseEntity<Map<String, Object>> re = null;
		Calendar cal = Calendar.getInstance();
		DateFormat df = new SimpleDateFormat("YYYY-MM-dd HH");
		Date date = new Date();
		Map<String, Object> result = new HashMap<>();
		if(token==null || token=="") return new ResponseEntity<Map<String, Object>>(result, HttpStatus.NOT_FOUND);
		Map<String, Object> map = new HashMap<>();
		try {
			Claims de = MemberController.verification(token);
			String username = (String) de.get("username");	
			
			if(!username.equals("admin")) {
				if(!ser.verUser(username)) {
					return new ResponseEntity<>(result, HttpStatus.FORBIDDEN);
				}
			} else {
				username = ser.selectUser(Integer.parseInt(nationIdx));
			}
			
			cal.setTime(date);
			df.format(date);
			String today = df.format(date);		
			cal.add(Calendar.MONTH, -11);
			String target = df.format(cal.getTime());
			
			//user의 기간 안에 있는 click객체 다 뽑앗슴
			Map<String, Object> f = new HashMap<>();
			f.put("today", today);
			f.put("target", target);
			f.put("username", username);
			List<Click> findList = ser.getDateList(f);
			System.out.println("--------");
			System.out.println(findList);
			System.out.println("--------");
			
			
			int[] click = new int[13];
			int[] qr = new int[13];
			for(int i=0; i<findList.size(); i++) {
				if(!findList.get(i).getNation().equals(nationIdx)) continue;
				
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
				value.put("name", year+"-"+startIdx);
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
	
	@GetMapping("/statistics/15day/{nationIdx}")
	@ApiOperation(value = "오늘 날짜부터 15일 전까지의 통계 데이터")
	public @ResponseBody ResponseEntity<Map<String, Object>> monthSta(@RequestHeader(value="Authorization") String token, @PathVariable String nationIdx) {
		ResponseEntity<Map<String, Object>> re = null;
		Calendar cal = Calendar.getInstance();
		DateFormat df = new SimpleDateFormat("YYYY-MM-dd HH");
		Date date = new Date();
		Map<String, Object> result = new HashMap<>();
		try {
			Claims de = MemberController.verification(token);
			String username = (String) de.get("username");	
			result.put("username", username);
			
			if(!username.equals("admin")) {
				if(!ser.verUser(username)) {
					return new ResponseEntity<>(result, HttpStatus.FORBIDDEN);
				}
			} else {
				username = ser.selectUser(Integer.parseInt(nationIdx));
			}
//			
//			Map<String, Object> map = new HashMap<>();
//			map.put("username", username);
//			map.put("nationIdx", nationIdx);
//			boolean flag = ser.vernation(map);
//			if(!flag && !username.equals("admin")) return new ResponseEntity<>(result, HttpStatus.UNAUTHORIZED);
//			
			cal.setTime(date);
			df.format(date);
			String today = df.format(date);
			cal.add(Calendar.DAY_OF_MONTH, -14);
			String target = df.format(cal.getTime());
		
			Map<String, Object> f = new HashMap<>();
			f.put("today", today);
			f.put("target", target);
			f.put("username", username);
			List<Click> findList = ser.getDateList(f);
			System.out.println("--------");
			System.out.println(findList);
			System.out.println("--------");
			
			int[] click = new int[32];
			int[] qr = new int[32];
			int year = Integer.parseInt(today.substring(0,4));
        	int month = Integer.parseInt(today.substring(5,7));
        	int days = Integer.parseInt(today.substring(8,10));
        	Calendar cals = new GregorianCalendar(year, month, days);
        	int daysOfMonth = cals.getActualMaximum(Calendar.DAY_OF_MONTH);
       
       
			for(int i=0; i<findList.size(); i++) {
				if(!findList.get(i).getNation().equals(nationIdx)) continue;
				
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
				value.put("name", year+"-"+String.format("%02d", month)+"-"+String.format("%02d", startIdx));
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
	
	@GetMapping("/statistics/3hour/{nationIdx}")
	@ApiOperation(value = "오늘 날짜부터 1일 전까지의 데이터를 3시간씩 묶은 통계 데이터")
	public @ResponseBody ResponseEntity<Map<String, Object>> hourSta(@RequestHeader(value="Authorization") String token, @PathVariable String nationIdx) {
		ResponseEntity<Map<String, Object>> re = null;
		Calendar cal = Calendar.getInstance();
		DateFormat df = new SimpleDateFormat("YYYY-MM-dd HH");
		Date date = new Date();
		Map<String, Object> result = new HashMap<>();
		Map<String, Object> map = new HashMap<>();
		try {
			Claims de = MemberController.verification(token);
			String username = (String) de.get("username");	
			result.put("username", username);
			
			if(!username.equals("admin")) {
				if(!ser.verUser(username)) {
					return new ResponseEntity<>(result, HttpStatus.FORBIDDEN);
				}
			} else {
				username = ser.selectUser(Integer.parseInt(nationIdx));
			}
//			map = new HashMap<>();
//			map.put("username", username);
//			map.put("nationIdx", nationIdx);
//			boolean flag = ser.vernation(map);
//			if(!flag && !username.equals("admin")) return new ResponseEntity<>(result, HttpStatus.UNAUTHORIZED);
//			
			cal.setTime(date);
			df.format(date);
			String today = df.format(date);
			cal.add(Calendar.DAY_OF_MONTH, -1);
			String target = df.format(cal.getTime());
		
			Map<String, Object> f = new HashMap<>();
			f.put("today", today);
			f.put("target", target);
			f.put("username", username);
			List<Click> findList = ser.getDateList(f);
			System.out.println("--------");
			System.out.println(findList);
			System.out.println("--------");
		
			int[] click = new int[25];
			int[] qr = new int[25];
			int hours=Integer.parseInt(today.substring(11,13));
   
			for(int i=0; i<findList.size(); i++) {
				if(!findList.get(i).getNation().equals(nationIdx)) continue;
				
				String hour = findList.get(i).getDate().substring(11,13);
				int c = Integer.parseInt(findList.get(i).getClick_cnt());
				int q = Integer.parseInt(findList.get(i).getQr_cnt());
				click[Integer.parseInt(hour)] +=c;
				qr[Integer.parseInt(hour)] +=q;
			}

			List<Map<String, Object>> list = new LinkedList<>();
			int startHour=hours;
			if(startHour==0) startHour=24;
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
				String axis = "~" + startHour;
				startHour=startHour==2?24:startHour==1?23:startHour-2;
				value.put("name", startHour+axis+"시");
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
	
	@GetMapping("/statistics/usr/{nationIdx}")
	@ApiOperation(value = "statistics api 사용자 토큰 받아서 해당 사용자 click, qr count만 전송")
	public @ResponseBody ResponseEntity<Map<String, Object>> userstdata(@RequestHeader(value="Authorization") String token, @PathVariable String nationIdx) {
		ResponseEntity<Map<String, Object>> re = null;
		Map<String, Object> result = new HashMap<>();
		if(token==null || token=="") return new ResponseEntity<Map<String, Object>>(result, HttpStatus.NOT_FOUND);
		try {
			Claims de = MemberController.verification(token);
			String username = (String) de.get("username");	
			result.put("username", username);
			
			if(!username.equals("admin")) {
				if(!ser.verUser(username)) {
					return new ResponseEntity<>(result, HttpStatus.FORBIDDEN);
				}
			} 
					
			Map<String, Object> map = new HashMap<>();
			int click = ser.getClickSum(Integer.parseInt(nationIdx));
			int qr = ser.getQrSum(Integer.parseInt(nationIdx));
			map.put("click", click);
			map.put("qr", qr);
			result.put(nationIdx+"", map);
			re = new ResponseEntity<>(result, HttpStatus.OK);
		} catch(Exception e) {
			result.put("resmsg", e.getMessage());
			System.out.println(e.getMessage());
			re = new ResponseEntity<Map<String, Object>>(result, HttpStatus.NOT_FOUND);
		}
		return re;
	}
}