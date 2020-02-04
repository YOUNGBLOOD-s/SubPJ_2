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
			if (customer == 1) {
				list = ser.nationListAll(customer);
			} else {
				list = ser.nationList(customer);
			}
			msg.put("resmsg", "조회성공");
			msg.put("resvalue", list);
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
		} catch (Exception e) {
			msg.put("resmsg", "조회실패");
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}
		return res;
	}

	// 나중에
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
<<<<<<< Updated upstream

			boolean resProduct = ser.nationinsert(nat.getEn_name(), nat.getKo_name(), nat.getDust(),
					nat.getContinents(), nat.getShowcnt(), customer + "", nat.getWeight(), nat.getSpeech(),
					nat.getPrice(), nat.getS_date(), nat.getF_date());
			msg.put("resmsg", "등록성공");
			msg.put("resvalue", resProduct);
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);

=======
			// grade를 뽑고...
			int grade = ser.searchGrade(customer);
			// 상품 등록 하면 됨
			if (grade > 0) {
				boolean resProduct = ser.nationinsert(nat.getEn_name(), nat.getKo_name(), nat.getDust(),
						nat.getContinents(), nat.getShowcnt(), customer + "", nat.getWeight(), nat.getSpeech(),
						nat.getPrice(), nat.getS_date(), nat.getF_date());
				msg.put("resmsg", "등록성공(권한있음)");
				msg.put("resvalue", resProduct);
				res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
			}else {
				msg.put("resmsg", "권한이 없슴.");
				res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
			}
>>>>>>> Stashed changes
		} catch (Exception e) {
			msg.put("resmsg", "등록실패");
			System.out.println(e.getMessage());
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
		}
		return res;
	}

	/** 사용자 상품 삭제 */
	@DeleteMapping("/man/nation/delete/")
	@ApiOperation(value = "사용자 상품(nation) 삭제(cascade)")
	public ResponseEntity<Map<String, Object>> nationDelete(@RequestHeader(value = "Authorization") String token) {
		token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODA0NTU4MzY2ODQsInVzZXJuYW1lIjoiYWRtaW4ifQ.hstghy7DypqOI3wj2-7trxtpgps3VvzAvD1ri9deLl4";
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);

			boolean resDelete = ser.nationdelete(customer);
			msg.put("resmsg", "삭제성공");
			msg.put("resvalue", resDelete);
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
		} catch (Exception e) {
			msg.put("resmsg", "삭제실패");
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}
		return res;
	}

	/** 사용자 상품 수정 */
	@PutMapping("/man/nation/update")
	@ApiOperation(value = "사용자 상품(nation) 수정")
	public ResponseEntity<Map<String, Object>> nationUpdate(@RequestHeader(value = "Authorization") String token, @RequestBody Nation nat) {
		token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODA0NTU4MzY2ODQsInVzZXJuYW1lIjoiYWRtaW4ifQ.hstghy7DypqOI3wj2-7trxtpgps3VvzAvD1ri9deLl4";
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			
			boolean resUpdate = ser.nationupdate(nat.getEn_name(), nat.getKo_name(), nat.getDust(), nat.getContinents(),
<<<<<<< Updated upstream
					nat.getShowcnt(), customer + "", nat.getWeight(), nat.getSpeech(), nat.getPrice(),
					nat.getS_date(), nat.getF_date());
=======
					nat.getShowcnt(), customer + "", nat.getWeight(), nat.getSpeech(), nat.getPrice(), nat.getS_date(),
					nat.getF_date());
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
	/** 상품 월별정보 전체 리스트  */
=======
// ===============================================================================================================
	// monthtb
	/** 상품 month별 전체보기 (monthtb) */
>>>>>>> Stashed changes
	@GetMapping("/man/monthtb/list/")
	@ApiOperation(value = "고객 월별 정보 보기")
	public ResponseEntity<Map<String, Object>> monthInfo(@RequestHeader(value = "Authorization") String token) {
		token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODA0NTU4MzY2ODQsInVzZXJuYW1lIjoiYWRtaW4ifQ.hstghy7DypqOI3wj2-7trxtpgps3VvzAvD1ri9deLl4";
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		ArrayList<Monthtb> list = null;
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);

			if (customer == 1) {
				list = ser.monthListAll(customer);
			} else {
				list = ser.monthList(customer);
			}
			msg.put("resmsg", "조회성공");
			msg.put("resvalue", list);
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
		} catch (Exception e) {
			msg.put("resmsg", "조회실패");
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}
		return res;
	}

	/** 상품 월별정보 등록 */
	@PostMapping("/man/monthtb/insert")
	@ApiOperation(value = "매니저가 nationtb등록 서비스.")
	public ResponseEntity<Map<String, Object>> monthInsert(@RequestHeader(value = "Authorization") String token,
			@RequestBody Monthtb montb) {
		token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODA0NTU4MzY2ODQsInVzZXJuYW1lIjoiYWRtaW4ifQ.hstghy7DypqOI3wj2-7trxtpgps3VvzAvD1ri9deLl4";
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);

			if (customer == 1) {
				boolean resMonth = ser.insertMonthtb(montb);
				msg.put("resmsg", "등록성공");
				msg.put("resvalue", resMonth);
				res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
			} else {
				msg.put("resmsg", "권한없음");
				return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
			}
		} catch (Exception e) {
			msg.put("resmsg", "등록실패");
			System.out.println(e.getMessage());
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
		}
		return res;
	}

	/** 상품 월별정보 수정 */
	@PostMapping("/man/monthtb/update")
	@ApiOperation(value = "매니저의 monthtb 수정 서비스.")
	public ResponseEntity<Map<String, Object>> monthUpdate(@RequestHeader(value = "Authorization") String token,
			@RequestBody Monthtb montb) {
		token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODA0NTU4MzY2ODQsInVzZXJuYW1lIjoiYWRtaW4ifQ.hstghy7DypqOI3wj2-7trxtpgps3VvzAvD1ri9deLl4";
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			// 상품 등록 하면 됨
			if (customer == 1) {
				boolean resMonth = ser.updateMonthtb(montb);
				msg.put("resmsg", "수정성공");
				msg.put("resvalue", resMonth);
				res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
			} else {
				msg.put("resmsg", "권한없음");
				return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
			}
		} catch (Exception e) {
			msg.put("resmsg", "등록실패");
			System.out.println(e.getMessage());
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
		}

		return res;
	}

	/** 상품 월별정보 삭제 */
	@DeleteMapping("/man/monthtb/delete/{nation}")
	@ApiOperation(value = "매니저가 monthtb(nation)삭제 ")
	public ResponseEntity<Map<String, Object>> monthDelete(@RequestHeader(value = "Authorization") String token, @PathVariable("nation") String nation) {
		token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODA0NTU4MzY2ODQsInVzZXJuYW1lIjoiYWRtaW4ifQ.hstghy7DypqOI3wj2-7trxtpgps3VvzAvD1ri9deLl4";
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);

			boolean resDelete = ser.deleteMonthtb(Integer.parseInt(nation));
			msg.put("resmsg", "삭제성공");
			msg.put("resvalue", resDelete);
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
		} catch (Exception e) {
			msg.put("resmsg", "삭제실패");
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
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
			if (customer == 1) {
				routelist = adser.getRoutesAll(customer);
			} else {
				routelist = adser.getRoutes(customer);
			}
			msg.put("contents", routelist);
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
		} catch (Exception e) {
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}
		return res;
	}

	/** 콘텐츠 정보 추가하기 */
	@PostMapping("/man/contents/add")
	public ResponseEntity<Map<String, Object>> ContentsInsert(@RequestHeader(value = "Authorization") String token,
			@RequestBody Route route) {
		token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODA0NTU4MzY2ODQsInVzZXJuYW1lIjoiYWRtaW4ifQ.hstghy7DypqOI3wj2-7trxtpgps3VvzAvD1ri9deLl4";
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
<<<<<<< Updated upstream
			
			adser.insertRoutes(route);
=======
			if (customer == 1) {
				adser.insertRoutes(route);
			} else {
				return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
			}
>>>>>>> Stashed changes
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
		} catch (Exception e) {
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}
		return res;
	}

	/** 월별정보 정보 수정하기 */
	@PutMapping("/man/contents/update/")
	public ResponseEntity<Map<String, Object>> ContentsUpdate(@RequestHeader(value = "Authorization") String token,
			@RequestBody Route route) {
		token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODA0NTU4MzY2ODQsInVzZXJuYW1lIjoiYWRtaW4ifQ.hstghy7DypqOI3wj2-7trxtpgps3VvzAvD1ri9deLl4";
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
<<<<<<< Updated upstream
			
			adser.updateRoutes(route);
=======
			if (customer == 1) {
				adser.updateRoutes(route);
			} else {
				return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
			}
>>>>>>> Stashed changes
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
		} catch (Exception e) {
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}
		return res;
	}

	/** 콘텐츠 정보 삭제하기 */
	@DeleteMapping("/man/contents/del/{idx}/{nation}")
<<<<<<< Updated upstream
	public ResponseEntity<Map<String, Object>> ContentsDelete(@RequestHeader(value = "Authorization") String token, @PathVariable("idx") int idx, @PathVariable("nation") int nation) {
=======
	public ResponseEntity<Map<String, Object>> ContentsDelete(@RequestHeader(value = "Authorization") String token,
			@PathVariable("idx") int idx, @PathVariable("nation") int nation) {
>>>>>>> Stashed changes
		token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODA0NTU4MzY2ODQsInVzZXJuYW1lIjoiYWRtaW4ifQ.hstghy7DypqOI3wj2-7trxtpgps3VvzAvD1ri9deLl4";
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
<<<<<<< Updated upstream
			
			Map<String, Object> map = new HashMap<String, Object>();
			map.put("idx", idx);
			map.put("nation", nation);
			adser.deleteRoutes(map);
=======
			if (customer == 1) {
				Map<String, Object> map = new HashMap<String, Object>();
				map.put("idx", idx);
				map.put("nation", nation);
				adser.deleteRoutes(map);
			} else {
				return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
			}
>>>>>>> Stashed changes
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
		} catch (Exception e) {
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}
		return res;
	}
}
