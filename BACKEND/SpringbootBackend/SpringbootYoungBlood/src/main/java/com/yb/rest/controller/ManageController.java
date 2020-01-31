package com.yb.rest.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yb.rest.service.IManService;

import io.jsonwebtoken.Claims;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ManageController {
	
	@Autowired
	private IManService ser;

	@ExceptionHandler(Exception.class)
	public void ExceptionMethod(Exception e) {

	}
		
	/** 사용자 상품 전체보기 */
	@GetMapping("/man/list")
	public ResponseEntity<Map<String, Object>> clientList(@RequestHeader(value="Authorization") String token) {
		token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODA0NTU4MzY2ODQsInVzZXJuYW1lIjoiYWRtaW4ifQ.hstghy7DypqOI3wj2-7trxtpgps3VvzAvD1ri9deLl4";
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			
			//admin의 idx를 가져올게요.
			//int customer = ser.getIdx(username);
			
			
			//????
			
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
		} catch(Exception e) {
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
		}
		
		return res;
	}
	
	/** 사용자 상품 등록 */
	
	/** 사용자 상품 삭제 */
	
	/** 사용자 상품 수정 */
}
