package com.yb.rest.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yb.rest.service.ICurService;
import com.yb.rest.vo.Member;
import com.yb.rest.vo.Nation;

import io.jsonwebtoken.Claims;
import io.swagger.annotations.ApiOperation;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class CurationController {
	
	@Autowired
	private ICurService ser;
	
	

	@ExceptionHandler(Exception.class)
	public void ExceptionMethod(Exception e) {

	}
		
	/** 사용자 상품 전체보기 */
	@GetMapping("/cur/list/")
	@ApiOperation(value = "광고주의 등록 상품리스트 보기 서비스.")
	public ResponseEntity<Map<String, Object>> nationList(@RequestHeader(value="Authorization") String token) {
		token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODA0NTU4MzY2ODQsInVzZXJuYW1lIjoiYWRtaW4ifQ.hstghy7DypqOI3wj2-7trxtpgps3VvzAvD1ri9deLl4";
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		ArrayList<Nation> list = null;
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			System.out.println("@@"+customer);

			//리스트 뽑아오면 됨
			list = ser.nationList(customer);
			msg.put("resmsg","조회성공");
			msg.put("resvalue", list);
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
		} catch(Exception e) {
			msg.put("resmsg", "조회실패");
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
		}
		
		return res;
	}

	@GetMapping("/cur/info/")
	@ApiOperation(value = "광고주의 등록 상품정보 보기 서비스.")
	public ResponseEntity<Map<String, Object>> nationInfo(@RequestHeader(value="Authorization") String token) {
		token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODA0NTU4MzY2ODQsInVzZXJuYW1lIjoiYWRtaW4ifQ.hstghy7DypqOI3wj2-7trxtpgps3VvzAvD1ri9deLl4";
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		ArrayList<Nation> list = null;
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			System.out.println("@@"+customer);

			//리스트 뽑아오면 됨
			msg.put("resmsg","조회성공");
			msg.put("resvalue", list);
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
		} catch(Exception e) {
			msg.put("resmsg", "조회실패");
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
		}
		
		return res;
	}
	
	/** 사용자 상품 등록 */
	@PostMapping("/cur/insert")
	@ApiOperation(value = "매니저가 nationtb등록 서비스.")
	public ResponseEntity<Map<String, Object>> nationInsert(@RequestHeader(value="Authorization") String token,
			@RequestBody Nation nat) {
		token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODA0NTU4MzY2ODQsInVzZXJuYW1lIjoiYWRtaW4ifQ.hstghy7DypqOI3wj2-7trxtpgps3VvzAvD1ri9deLl4";
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			//상품 등록 하면 됨
			boolean resProduct = ser.nationinsert(nat.getEn_name(),nat.getKo_name(),nat.getDust(),nat.getContinents(),
					nat.getClickcnt(), nat.getShowcnt(),nat.getCustomer()+"",nat.getWeight(),nat.getSpeech(),nat.getPrice());
			msg.put("resmsg", "등록성공");
			msg.put("resvalue", resProduct);
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
		} catch(Exception e) {
			msg.put("resmsg", "등록실패");
			System.out.println(e.getMessage());
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
		}
		
		return res;
	}
	
	
	/** 사용자 상품 삭제 */
	@GetMapping("/cur/del/")
	@ApiOperation(value = "매니저가 nationtb삭제 (cascade).")
	public ResponseEntity<Map<String, Object>> nationDelete(@RequestHeader(value="Authorization") String token) {
		token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODA0NTU4MzY2ODQsInVzZXJuYW1lIjoiYWRtaW4ifQ.hstghy7DypqOI3wj2-7trxtpgps3VvzAvD1ri9deLl4";
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			System.out.println(customer);
			
			//상품 삭제하면 됨
			boolean resDelete = ser.nationdelete(customer);
			msg.put("resmsg","삭제성공");
			msg.put("resvalue", resDelete);
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
		} catch(Exception e) {
			msg.put("resmsg","삭제실패");
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
		}
		return res;
	}
	
	/** 사용자 상품 수정 */
	@PutMapping("/cur/update")
	@ApiOperation(value = "매니저가 nationtb 수정.")
	public ResponseEntity<Map<String, Object>> nationUpdate(@RequestHeader(value="Authorization") String token,
			@RequestBody Nation nat) {
		token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODA0NTU4MzY2ODQsInVzZXJuYW1lIjoiYWRtaW4ifQ.hstghy7DypqOI3wj2-7trxtpgps3VvzAvD1ri9deLl4";
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			System.out.println(customer);
			
			//상품 수정하면 됨
			boolean resUpdate = ser.nationupdate(nat.getEn_name(),nat.getKo_name(),nat.getDust(),nat.getContinents(),
					nat.getClickcnt(), nat.getShowcnt(),nat.getCustomer()+"",nat.getWeight(),nat.getSpeech(),nat.getPrice());
			msg.put("resmsg", "수정성공");
			msg.put("resvalue", resUpdate);
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
		} catch(Exception e) {
			msg.put("resmsg", "수정실패");
			System.out.println(e.getMessage());
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
		}
		System.out.println(res);
		return res;
	}
}
