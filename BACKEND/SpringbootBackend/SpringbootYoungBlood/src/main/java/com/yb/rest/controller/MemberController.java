package com.yb.rest.controller;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yb.rest.service.IMemService;
import com.yb.rest.vo.Member;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class MemberController {
	
	@Autowired
	private IMemService ser;
	
	@ExceptionHandler(Exception.class)
	public void ExceptionMethod(Exception e) {

	}
	
	/**비밀키 읽기*/
	public static String getKey() {
		String key = "";
		try{
            File file = new File("C:\\Users\\multicampus\\Desktop\\key\\key.txt");
            FileReader filereader = new FileReader(file);
            int singleCh = 0;
            while((singleCh = filereader.read()) != -1){
            	key += ((char)singleCh);
            }
            filereader.close();
        }catch (FileNotFoundException e) {
        }catch(IOException e){
            System.out.println(e);
        }
		return key;
    }

	
	/**토큰 생성*/
	public static String createToken(String username) {

		String key = getKey();
		Map<String, Object> headers = new HashMap<>();
		headers.put("typ", "JWT");
		headers.put("alg", "HS256");
		
		Map<String, Object> payloads = new HashMap<>();
		Date now = new Date();
		now.setTime(now.getTime());
		
		payloads.put("exp", now);
		payloads.put("username", username);
		
		String jwt = Jwts.builder()
				.setHeader(headers)
				.setClaims(payloads)
				.signWith(SignatureAlgorithm.HS256, key.getBytes())
				.compact();
		return jwt;
	}

	/** 회원가입 */
	@PostMapping("/auth/register")
	public ResponseEntity<Map<String, Object>> meminsert(@RequestBody Member reg) {
		ResponseEntity<Map<String, Object>> res = null;

		Map<String, Object> msg = new HashMap<String, Object>();
		msg.put("username", reg.getUsername()); // 혁준오빠한테 {test: 0} 으로 전송됨
		msg.put("company", reg.getCompany());
		msg.put("token", createToken(reg.getUsername()));
		res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
		return res;
	}

	/** 로그인 */
	@PostMapping("/auth/login")
	public ResponseEntity<Map<String, Object>> memlogin(@RequestBody Member login) {
		ResponseEntity<Map<String, Object>> res = null;
		String realpassword = ser.getPassword(login.getUsername());
		Map<String, Object> msg = new HashMap<String, Object>();
		
		if(realpassword.equals(login.getPassword())) {
			msg.put("username", login.getUsername());
			msg.put("token", createToken(login.getUsername()));
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK); //correct
		} else {
			msg.put("username", login.getUsername());
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND); //wrong
		}
		
		return res;
	}

	/** 로그인 상태 확인 */
	@PostMapping("/auth/check")
	public ResponseEntity<Map<String, Object>> memloginfo() {
		System.out.println("로그인 상태확인");
		return null;
	}
}
