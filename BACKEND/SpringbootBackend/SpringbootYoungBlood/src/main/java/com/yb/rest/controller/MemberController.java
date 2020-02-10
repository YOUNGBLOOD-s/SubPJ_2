package com.yb.rest.controller;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.crypto.Data;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.yb.rest.service.IManService;
import com.yb.rest.service.IMemService;
import com.yb.rest.vo.Member;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.swagger.annotations.ApiOperation;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class MemberController {

	@Autowired
	private IMemService ser;

	@Autowired
	private IManService manser;
	
	@ExceptionHandler(Exception.class)
	public void ExceptionMethod(Exception e) {

	}

	/** 비밀키 읽기 */
	public static String getKey() {
        
		System.out.println("==============");
		System.out.println("안녕하세요. 키를 가져갈게요!");
		
		String key = "";
		try {
			//File file = new File("C:\\Users\\multicampus\\Desktop\\key\\key.txt");
			File file = new File("/home/ubuntu/key/key.txt"); //AWS
			FileReader filereader = new FileReader(file);
			int singleCh = 0;
			while ((singleCh = filereader.read()) != -1) {
				key += ((char) singleCh);
			}
			filereader.close();
		} catch (FileNotFoundException e) {
		} catch (IOException e) {
			System.out.println(e);
		}
		System.out.println("키 잘 가져갑니다요. ^^7");
        System.out.println("==============");
		return key;
	}

	/** 토큰 생성 */
	public static String createToken(String username) {
        System.out.println("==============");
        System.out.println("토큰을 생성할게요.");
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
				.signWith(SignatureAlgorithm.HS256, key.getBytes()).compact();
        System.out.println("토큰 생성 완료!");
		System.out.println("==============");
		return jwt;
	}
	
	/** 토큰 검증 */
	public static Claims verification(String token) {
        System.out.println("==============");
        System.out.println("토큰을 검증할게요");
		Claims c = Jwts.parser()
				.setSigningKey(getKey().getBytes())
				.parseClaimsJws(token)
				.getBody();
		//String data = c.get("username")+"";
		System.out.println("검증 객체를 보내드립니다.");
        System.out.println("==============");

		return c;
	}
	
	/** 회원가입 */
	@PostMapping("/auth/register")
	public ResponseEntity<Map<String, Object>> meminsert(@RequestBody Member reg) {
        
		System.out.println("==============");
        System.out.println("회원가입 요청이 왔습니다.");
        
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			boolean result = ser.registerMem(reg.getUsername(), reg.getPassword(), reg.getCompany(), reg.getGrade());
			msg.put("resmsg", "회원등록");
			msg.put("username", reg.getUsername()); // 혁준오빠한테 {test: 0} 으로 전송됨
			msg.put("company", reg.getCompany());
			msg.put("token", createToken(reg.getUsername()));
			msg.put("resvalue", result);
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
		} catch (Exception e) {
			if(e.getMessage().contains("Duplicate")) {
				res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.CONFLICT);
				System.out.println(e.getMessage());
			} else {
				res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.INTERNAL_SERVER_ERROR);
				System.out.println(e.getMessage());
			}	
		}
		System.out.println("회원가입이 완료됐습니다.");
        System.out.println("==============");
		return res;
	}

	/** 로그인 */
	@PostMapping("/auth/login")
	public ResponseEntity<Map<String, Object>> memlogin(@RequestBody Member login) {
        System.out.println("==============");
        System.out.println("로그인 요청이 왔습니다.");
        System.out.println(login.toString());
		if(login.getUsername()=="" || login.getPassword()=="") {
			Map<String, Object> msg = new HashMap<String, Object>();
			return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
		}
		ResponseEntity<Map<String, Object>> res = null;
		String realpassword = ser.getPassword(login.getUsername());

		Map<String, Object> msg = new HashMap<String, Object>();
		if (realpassword.equals(login.getPassword())) {
			msg.put("username", login.getUsername());
			msg.put("token", createToken(login.getUsername()));
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK); // correct
			System.out.println("로그인 성공!");
		} else {
			msg.put("username", login.getUsername());
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED); // wrong
			System.out.println("로그인 실패-_-!");
		}
		
        System.out.println("==============");
		return res;
	}

	/** 로그인 상태 확인 */
	@GetMapping("/auth/check")
	public ResponseEntity<Map<String, Object>> memloginfo(@RequestHeader(value="Authorization") String token) {
        System.out.println("==============");
		System.out.println("로그인 상태를 확인합니다.");
		ResponseEntity<Map<String, Object>> res = null;	
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = verification(token);
			msg.put("username", de.get("username"));
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
		} catch(Exception e) {
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
		}
		System.out.println("로그인 상태 확인 완료");
        System.out.println("==============");
		return res;
	}
	
	/** 멤버 전체 조회 서비스 */
	@GetMapping("/auth/listmem")
	@ApiOperation(value = "member 조회 서비스", response = List.class)
	public @ResponseBody ResponseEntity<Map<String, Object>> listMem(@RequestHeader(value = "Authorization") String token) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		ArrayList<Member> list = new ArrayList<>();
		
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = manser.getIdx(username);
			int grade = manser.searchGrade(customer);

			if (grade == 1) {
				list = ser.listMem();
				res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
			} else {
				return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
			}
		} catch (Exception e) {
			msg.put("resmsg", e.getMessage());
			System.out.println(e.getMessage());
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}
		return res;
	}


	/** 멤버 조회 서비스 */
	@PostMapping("/auth/infomem")
	public @ResponseBody ResponseEntity<Map<String, Object>> infoMem(@RequestHeader(value = "Authorization") String token, @RequestParam String password) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		ArrayList<Member> list = new ArrayList<>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			String realpw = ser.getPassword(username);
			if(username.equals("admin")) {
				//전체 리스트 보여주기
			} else {
				if(realpw.equals(password)) {
					Member mem = ser.InfoMem(username);
					msg.put("meminfo", mem);
					res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
				}
				else {
					return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
				}
			}
		} catch (Exception e) {
			msg.put("resmsg", e.getMessage());
			System.out.println(e.getMessage());
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}
		return res;
	}
	
	/** 멤버 삭제(회원탈퇴) 서비스 */
	@DeleteMapping("/auth/deletemem/{password}")
	@ApiOperation(value = "멤버 삭제(회원탈퇴) 서비스")
	public @ResponseBody ResponseEntity<Map<String, Object>> deleteMem(@RequestHeader(value = "Authorization") String token, @PathVariable("password") String password) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		ArrayList<Member> list = new ArrayList<>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			String realpw = ser.getPassword(username);
			if(realpw.equals(password)) {
				ser.DeleteMem(username);
				return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
			}
			else {
				return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
			}
		} catch (Exception e) {
			msg.put("resmsg", e.getMessage());
			System.out.println(e.getMessage());
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}
		return res;
	}
	
	/** 멤버 삭제(관리자) 서비스 */
	@DeleteMapping("/auth/deletemem/{idx}")
	@ApiOperation(value = "멤버 삭제(관리자) 서비스")
	public @ResponseBody ResponseEntity<Map<String, Object>> deleteMemAdmin(@RequestHeader(value = "Authorization") String token, String idx) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		ArrayList<Member> list = new ArrayList<>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			if(username.equals("admin")) {
				ser.DeleteMem(Integer.parseInt(idx));
				return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
			} else {
				return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
			}
		} catch (Exception e) {
			msg.put("resmsg", e.getMessage());
			System.out.println(e.getMessage());
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}
		return res;
	}
	
	
	/** 멤버 수정 서비스 */
	@PutMapping("/auth/updatemem")
	@ApiOperation(value = " Member를 받아서 member 수정 서비스")
	public @ResponseBody ResponseEntity<Map<String,Object>> updateMem(@RequestHeader(value = "Authorization") String token, @RequestBody Member mem){
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			if(username.equals("admin")) {
				ser.UpdateMem(username, mem.getPassword(), mem.getCompany(), mem.getGrade());
			} else {
				ser.UpdateMem(username, mem.getPassword(), mem.getCompany());
			}
			return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
		} catch (Exception e) {
			msg.put("resmsg", e.getMessage());
			System.out.println(e.getMessage());
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}
		return res;
	}

	/** 멤버 등급 수정 서비스 */
	@PutMapping("/mem/update/{grade}")
	public @ResponseBody ResponseEntity<Map<String,Object>> updateMemGrade(@RequestHeader(value = "Authorization") String token, @RequestParam(value = "grade") int grade) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		ArrayList<Member> list = new ArrayList<>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			if(username.equals("admin")) {
				//ser.updateGrade(value);
			} else {
				
			}
		} catch (Exception e) {
			msg.put("resmsg", e.getMessage());
			System.out.println(e.getMessage());
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}
		return res;
		

	}
}
