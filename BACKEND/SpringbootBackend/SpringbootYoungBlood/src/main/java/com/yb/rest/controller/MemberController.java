package com.yb.rest.controller;

import java.util.Map;

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
		System.out.println(reg.toString());
		return null;
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
