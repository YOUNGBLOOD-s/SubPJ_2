package com.yb.rest.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yb.rest.vo.Member;


@CrossOrigin
@RestController
@RequestMapping("/api")
public class MemberController {

	/**회원가입*/
	@PostMapping("/auth/register")
	public ResponseEntity<Map<String, Object>> meminsert(@RequestBody Member reg) {
		ResponseEntity<Map<String, Object>> res = null;
		
		//토큰 생성하기
		
		
		
		Map<String, Object> msg = new HashMap<String, Object>();
		msg.put("username", reg.getUsername()); //혁준오빠한테 {test: 0} 으로 전송됨
		msg.put("company", reg.getCompany()); 
		//msg.put("token", jws);
		res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
		return res;
	}
	
	/**로그인*/
	@PostMapping("/auth/login")
	public ResponseEntity<Map<String, Object>> memlogin(@RequestBody Member login) {
		System.out.println(login.toString());
		return null;
	}
	
	/**로그인 상태 확인*/
	@PostMapping("/auth/check")
	public ResponseEntity<Map<String, Object>> memloginfo() {
		System.out.println("zzz");
		return null;
	}
}
