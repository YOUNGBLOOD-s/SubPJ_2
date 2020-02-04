package com.yb.rest.controller;

import java.util.ArrayList;
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
import org.springframework.web.bind.annotation.RestController;

import com.yb.rest.service.IAdService;
import com.yb.rest.service.IManService;
import com.yb.rest.vo.Counsel;
import com.yb.rest.vo.Monthtb;
import com.yb.rest.vo.Nation;
import com.yb.rest.vo.Route;

import io.jsonwebtoken.Claims;
import io.swagger.annotations.ApiOperation;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ManageController {

	@Autowired
	private IManService ser;
	
	@Autowired
	private IAdService adser;

	@ExceptionHandler(Exception.class)
	public void ExceptionMethod(Exception e) {

	}

	/** 사용자 상품 전체보기 */
	@GetMapping("/man/nation/list/")
	@ApiOperation(value = "광고주의 등록 상품(nation) 전체 리스트")
	public ResponseEntity<Map<String, Object>> nationList(@RequestHeader(value = "Authorization") String token) {
		token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODA0NTU4MzY2ODQsInVzZXJuYW1lIjoiYWRtaW4ifQ.hstghy7DypqOI3wj2-7trxtpgps3VvzAvD1ri9deLl4";
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		ArrayList<Nation> list = null;
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);

			list = ser.nationList(customer);
			msg.put("resmsg", "조회성공");
			msg.put("resvalue", list);
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
		} catch (Exception e) {
			msg.put("resmsg", "조회실패");
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}

		return res;
	}

	// 나중
	@GetMapping("/man/nation/info/")
	@ApiOperation(value = "광고주의 등록 상품정보 보기 서비스.")
	public ResponseEntity<Map<String, Object>> nationInfo(@RequestHeader(value = "Authorization") String token) {
		token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODA0NTU4MzY2ODQsInVzZXJuYW1lIjoiYWRtaW4ifQ.hstghy7DypqOI3wj2-7trxtpgps3VvzAvD1ri9deLl4";
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		ArrayList<Nation> list = null;
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);

			msg.put("resmsg", "조회성공");
			msg.put("resvalue", list);
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
		} catch (Exception e) {
			msg.put("resmsg", "조회실패");
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}

		return res;
	}

	/** 사용자 상품 등록 */
	@PostMapping("/man/nation/insert")
	@ApiOperation(value = "사용자 상품(nation) 등록")
	public ResponseEntity<Map<String, Object>> nationInsert(@RequestHeader(value = "Authorization") String token,
			@RequestBody Nation nat) {
		token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODA0NTU4MzY2ODQsInVzZXJuYW1lIjoiYWRtaW4ifQ.hstghy7DypqOI3wj2-7trxtpgps3VvzAvD1ri9deLl4";
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			// 상품 등록 하면 됨
			boolean resProduct = ser.nationinsert(nat.getEn_name(), nat.getKo_name(), nat.getDust(),
					nat.getContinents(), nat.getShowcnt(), nat.getCustomer() + "", nat.getWeight(), nat.getSpeech(),
					nat.getPrice(), nat.getS_date(), nat.getF_date());
			msg.put("resmsg", "등록성공");
			msg.put("resvalue", resProduct);
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
		} catch (Exception e) {
			msg.put("resmsg", "등록실패");
			System.out.println(e.getMessage());
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
		}

		return res;
	}

	/** 사용자 상품 삭제 */
	@GetMapping("/man/nation/del/")
	@ApiOperation(value = "사용자 상품(nation) 삭제")
	public ResponseEntity<Map<String, Object>> nationDelete(@RequestHeader(value = "Authorization") String token) {
		token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODA0NTU4MzY2ODQsInVzZXJuYW1lIjoiYWRtaW4ifQ.hstghy7DypqOI3wj2-7trxtpgps3VvzAvD1ri9deLl4";
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			System.out.println(customer);

			// 상품 삭제하면 됨
			boolean resDelete = ser.nationdelete(customer);
			msg.put("resmsg", "삭제성공");
			msg.put("resvalue", resDelete);
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
		} catch (Exception e) {
			msg.put("resmsg", "삭제실패");
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
		}
		return res;
	}

	/** 사용자 상품 수정 */
	@PutMapping("/man/nation/update")
	@ApiOperation(value = "사용자 상품(nation) 수정")
	public ResponseEntity<Map<String, Object>> nationUpdate(@RequestHeader(value = "Authorization") String token,
			@RequestBody Nation nat) {
		token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODA0NTU4MzY2ODQsInVzZXJuYW1lIjoiYWRtaW4ifQ.hstghy7DypqOI3wj2-7trxtpgps3VvzAvD1ri9deLl4";
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);

			boolean resUpdate = ser.nationupdate(nat.getEn_name(), nat.getKo_name(), nat.getDust(), nat.getContinents(),
					nat.getShowcnt(), nat.getCustomer() + "", nat.getWeight(), nat.getSpeech(), nat.getPrice(),
					nat.getS_date(), nat.getF_date());
			msg.put("resmsg", "수정성공");
			msg.put("resvalue", resUpdate);
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
		} catch (Exception e) {
			msg.put("resmsg", "수정실패");
			System.out.println(e.getMessage());
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}
		return res;
	}

	/** 사용자의 월별 정보 전체보기 (monthtb) */
	@GetMapping("/man/month/Info/")
	@ApiOperation(value = "사용자의 월별 정보 전체보기")
	public ResponseEntity<Map<String, Object>> monthInfo(@RequestHeader(value = "Authorization") String token) {
		token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODA0NTU4MzY2ODQsInVzZXJuYW1lIjoiYWRtaW4ifQ.hstghy7DypqOI3wj2-7trxtpgps3VvzAvD1ri9deLl4";
		ResponseEntity<Map<String, Object>> res = null;
		Monthtb mt = new Monthtb();
		Map<String, Object> msg = new HashMap<String, Object>();
		ArrayList<Monthtb> list = null;
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);

			list = ser.monthInfo(customer);
			msg.put("resmsg", "조회성공");
			msg.put("resvalue", list);
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
		} catch (Exception e) {
			msg.put("resmsg", "조회실패");
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}
		return res;
	}

	/** 콘텐츠 정보 조회하기 */
	@GetMapping("/man/contents/list/")
	public ResponseEntity<Map<String, Object>> ContentsList(@RequestHeader(value = "Authorization") String token) {
		token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODA0NTU4MzY2ODQsInVzZXJuYW1lIjoiYWRtaW4ifQ.hstghy7DypqOI3wj2-7trxtpgps3VvzAvD1ri9deLl4";
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			
			List<Route> routelist = null;
			if(customer==1) {
				routelist = adser.getRoutesAll(customer);
			} else {
				routelist = adser.getRoutes(customer);
			}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
			msg.put("contents", routelist);
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
		} catch(Exception e) {
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}
		return res;
	}
	
	/** 콘텐츠 정보 추가하기 */
	@PostMapping("/man/contents/add")
	public ResponseEntity<Map<String, Object>> ContentsInsert(@RequestHeader(value = "Authorization") String token, @RequestBody Route route) {
		token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODA0NTU4MzY2ODQsInVzZXJuYW1lIjoiYWRtaW4ifQ.hstghy7DypqOI3wj2-7trxtpgps3VvzAvD1ri9deLl4";
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);	
			if(customer==1) {
				adser.insertRoutes(route);
			} else {
				return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
			}
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
		} catch(Exception e) {
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}
		return res;
	}
	
	/** 월별정보 정보 수정하기 */
	@PutMapping("/man/contents/update/")
	public ResponseEntity<Map<String, Object>> ContentsUpdate(@RequestHeader(value = "Authorization") String token, @RequestBody Route route) {
		token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODA0NTU4MzY2ODQsInVzZXJuYW1lIjoiYWRtaW4ifQ.hstghy7DypqOI3wj2-7trxtpgps3VvzAvD1ri9deLl4";
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);	
			if(customer==1) {
				adser.updateRoutes(route);
			} else {
				return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
			}
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
		} catch(Exception e) {
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}
		return res;
	}
	
	/** 콘텐츠 정보 삭제하기 */
	@DeleteMapping("/man/contents/del/{idx}/{nation}")
	public ResponseEntity<Map<String, Object>> ContentsDelete(@RequestHeader(value = "Authorization") String token, 
			@PathVariable("idx") int idx,  @PathVariable("nation") int nation) {
		token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODA0NTU4MzY2ODQsInVzZXJuYW1lIjoiYWRtaW4ifQ.hstghy7DypqOI3wj2-7trxtpgps3VvzAvD1ri9deLl4";
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);	
			if(customer==1) {
				Map<String, Object> map = new HashMap<String, Object>();
				map.put("idx", idx);
				map.put("nation", nation);
				adser.deleteRoutes(map);
			} else {
				return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
			}
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
		} catch(Exception e) {
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}
		return res;
	}
}
