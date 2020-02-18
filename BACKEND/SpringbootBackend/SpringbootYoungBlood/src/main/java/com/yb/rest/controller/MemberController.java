package com.yb.rest.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.yb.rest.key.GetKEY;
import com.yb.rest.service.IManService;
import com.yb.rest.service.IMemService;
import com.yb.rest.vo.Member;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
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

	/** 토큰 생성 */
	public static String createToken(String username) {
        System.out.println("토큰을 생성할게요.");
        String jwt = "";
        try {
			String key = GetKEY.getKey();
			Date exDate = new Date(System.currentTimeMillis() + 60000*30);
			Map<String, Object> headers = new HashMap<>();
			headers.put("typ", "JWT");
			headers.put("alg", "HS256");

			Map<String, Object> payloads = new HashMap<>();
			Date now = new Date();
		
			now.setTime(now.getTime());

			payloads.put("exp", exDate);
			payloads.put("username", username);

			jwt = Jwts.builder()
					.setHeader(headers)
					.setClaims(payloads)
					.setExpiration(exDate)
					.signWith(SignatureAlgorithm.HS256, key.getBytes()).compact();
			
		} catch(Exception e) {
			System.out.println("너 !!!! 또!!!!!!!!!! 키 확인 안 했지????????");
			System.out.println(e.getMessage());
		}
		System.out.println(jwt);
		System.out.println("토큰 생성 완료!");
		System.out.println("==============");
		return jwt;
	}
	
	
	public static String verification_(String token) {
        String resultMsg = "";
		try {
			Jwts.parser().setSigningKey(GetKEY.getKey().getBytes()).parseClaimsJws(token).getBody();
			resultMsg = "ok";
		} catch(ExpiredJwtException jw) {
			resultMsg = "expiredTokenDate";
		} catch(Exception e) {
			System.out.println("너 !!!! 또!!!!!!!!!! 키 확인 안 했지????????");
			System.out.println(e.getMessage());
			resultMsg = "exception";
		}
        System.out.println("==============");
		return resultMsg;
	}
	
	
	
	/** Claims 객체 */
	public static Claims verification(String token) {
		Claims c = null;
		try {
			String resultMsg = verification_(token);
			if(resultMsg.equals("ok")) {
				c = Jwts.parser()
					.setSigningKey(GetKEY.getKey().getBytes())
					.parseClaimsJws(token)
					.getBody();
			}
		} catch(Exception e) {
			System.out.println("verification() error");
		}
		return c;
	}
	
	/** 회원가입 */
	@PostMapping("/auth/register")
	@ApiOperation(value = "회원가입 ")
	public ResponseEntity<Map<String, Object>> meminsert(@RequestBody Member reg) {
        System.out.println("회원가입 요청이 왔습니다.");
        
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			ser.registerMem(reg.getUsername(), reg.getPassword(), reg.getCompany());
			msg.put("resmsg", "회원등록");
			msg.put("username", reg.getUsername());
			msg.put("company", reg.getCompany());
			msg.put("token", createToken(reg.getUsername()));
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
	@ApiOperation(value = "로그인 ")
	public ResponseEntity<Map<String, Object>> memlogin(@RequestBody Member login) {
        System.out.println("로그인 요청이 왔습니다.");
        System.out.println(login.toString());
        if(login.getUsername()=="" || login.getPassword()=="") {
			Map<String, Object> msg = new HashMap<String, Object>();
			return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.BAD_REQUEST);
		}
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			String realpassword_256 = ser.getPassword(login.getUsername());
			String inputpassword_256 = ser.getSHA256(login.getPassword());
			if (realpassword_256.equals(inputpassword_256)) {
				msg.put("username", login.getUsername());
				msg.put("token", createToken(login.getUsername()));
				res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK); // correct
				System.out.println("로그인 성공!");
			} else {
				msg.put("username", login.getUsername());
				res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED); // wrong
				System.out.println("로그인 실패-_-!");
			}
		} catch(Exception e) {
			msg.put("resmsg", e.getMessage());
			System.out.println(e.getMessage());
			return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}
        System.out.println("==============");
		return res;
	}

	/** 로그인 상태 확인 */
	@GetMapping("/auth/check")
	@ApiOperation(value = "로그인 상태 확인")
	public ResponseEntity<Map<String, Object>> memloginfo(@RequestHeader(value="Authorization") String token) {
		System.out.println("로그인 상태를 확인합니다.");
		ResponseEntity<Map<String, Object>> res = null;	
		Map<String, Object> msg = new HashMap<String, Object>();
		if(token=="" || token==null) return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
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
	
	/** 멤버 전체 조회(관리자) 서비스 */
	@GetMapping("/auth/listmem")
	@ApiOperation(value = "멤버 정보 전체 조회(관리자)", response = List.class)
	public @ResponseBody ResponseEntity<Map<String, Object>> listMem(@RequestHeader(value = "Authorization") String token) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		if(token=="" || token==null) return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = manser.getIdx(username);
			int grade = manser.searchGrade(customer);
			if (grade == 1) {
				List<Member> list = ser.listMem();
				msg.put("members", list);
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

	/** 멤버 조회(관리자/사용자) 서비스 */
	@PostMapping("/auth/infomem")
	@ApiOperation(value = "멤버 정보 조회(관리자/사용자)")
	public @ResponseBody ResponseEntity<Map<String, Object>> infoMem(@RequestHeader(value = "Authorization") String token, @RequestBody Map<String, Object> password) {
		String inputpassword_256 = ser.getSHA256((String) password.get("password"));
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		if(token=="" || token==null) return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			String realpassword_256 = ser.getPassword(username);
			if(username.equals("admin")) {
				List<Member> mems = ser.listMem();
				msg.put("memlist", mems);
				res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
			} else {
				if(inputpassword_256.equals(realpassword_256)) {
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
		String inputpassword_256 = ser.getSHA256(password);
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		if(token=="" || token==null) return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			String realpassword_256 = ser.getPassword(username);
			if(inputpassword_256.equals(realpassword_256)) {
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
	@DeleteMapping("/auth/deleteadmin/{idx}")
	@ApiOperation(value = "멤버 삭제(관리자) 서비스")
	public @ResponseBody ResponseEntity<Map<String, Object>> deleteMemAdmin(@RequestHeader(value = "Authorization") String token, @PathVariable("idx") int idx) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		if(token=="" || token==null) return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			if(username.equals("admin")) {
				ser.DeleteMem(idx);
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
	@ApiOperation(value = "멤버 정보 수정(관리자/사용자)")
	public @ResponseBody ResponseEntity<Map<String,Object>> updateMem(@RequestHeader(value = "Authorization") String token, @RequestBody Member mem){
		System.out.println("[멤버 정보 수정] "+mem.toString());
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		if(token=="" || token==null) return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			if(username.equals("admin")) {
				if(mem.getPassword()=="" || mem.getPassword()==null) {
					ser.UpdateMem(mem.getUsername(), mem.getCompany(), mem.getGrade());
				} else {
					ser.UpdateMem(mem.getUsername(), mem.getPassword(), mem.getCompany(), mem.getGrade());
				}
			} else {
				if(mem.getPassword()=="" || mem.getPassword()==null) {
					ser.UpdateMem(mem.getUsername(), mem.getCompany());
				} else {
					ser.UpdateMem(username, mem.getPassword(), mem.getCompany());
				}
			}
			return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
		} catch (Exception e) {
			msg.put("resmsg", e.getMessage());
			System.out.println(e.getMessage());
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}
		return res;
	}

	/** 멤버 등급 수정(관리자) 서비스 */
	@PutMapping("/mem/update/{grade}")
	@ApiOperation(value = "멤버 등급 수정(관리자/사용자)")
	public @ResponseBody ResponseEntity<Map<String,Object>> updateMemGrade(@RequestHeader(value = "Authorization") String token, @PathVariable("grade") int grade) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		if(token=="" || token==null) return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int origrade = ser.selectGrade(username);
			
			if(username.equals("admin")) {
				msg.put("value", -1);
				res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
			} else if(grade==origrade) {
				msg.put("value", 0);
				res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
			} else {
				ser.updateGrade(username, grade);
				res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK); 
			}		
		} catch (Exception e) {
			msg.put("resmsg", e.getMessage());
			System.out.println(e.getMessage());
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}
		return res;
	}
	
	/** username 등급 찾아드립니다. */
	@GetMapping("/mem/grade")
	@ApiOperation(value = "멤버 등급 검색")
	public @ResponseBody ResponseEntity<Map<String,Object>> findGrade(@RequestHeader(value = "Authorization") String token) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		if(token=="" || token==null) return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED); 
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int grade = ser.selectGrade(username);
			msg.put("grade", grade);
			return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK); 
		} catch (Exception e) {
			msg.put("resmsg", e.getMessage());
			System.out.println(e.getMessage());
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}
		return res;
	}
	
	
}