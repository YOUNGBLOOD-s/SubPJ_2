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
import com.yb.rest.vo.Image;
import com.yb.rest.vo.Member;
import com.yb.rest.vo.Monthtb;
import com.yb.rest.vo.Nation;
import com.yb.rest.vo.Owner;
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
	
	//token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODA0NTU4MzY2ODQsInVzZXJuYW1lIjoiYWRtaW4ifQ.hstghy7DypqOI3wj2-7trxtpgps3VvzAvD1ri9deLl4";

	/** 사용자 상품 전체보기 */
	@GetMapping("/man/nation/list")
	@ApiOperation(value = "사용자 상품정보 리스트 조회")
	public ResponseEntity<Map<String, Object>> nationList(@RequestHeader(value = "Authorization") String token) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		ArrayList<Nation> list = null;
		Member member = new Member();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			member = ser.selectMemberInfo(customer);
			Owner owner = new Owner(member.getUsername(), member.getCompany(), member.getGrade());
			int grade = ser.searchGrade(customer);

			if (grade == 1) {
				list = ser.nationListAll(customer);
				
			} else if (grade >= 2) {
				list = ser.nationList(customer);
			} else {
				return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
			}
			msg.put("resvalue", list);
			
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
		} catch (Exception e) {
			msg.put("resmsg", e.getMessage());
			System.out.println(e.getMessage());
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}
		return res;
	}

	@GetMapping("/man/nationAll/info/{idx}")
	@ApiOperation(value = "광고주의 등록 상품정보 보기 서비스.")
	public ResponseEntity<Map<String, Object>> nationInfo(@RequestHeader(value = "Authorization") String token, @PathVariable("idx") int idx) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		Nation nat = new Nation();
		Monthtb mon = new Monthtb();
		ArrayList<Route> contentsList = null;
		ArrayList<Image> imageList = null;
		Member member = new Member();
		try {
			Claims de = MemberController.verification(token);
//			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			member = ser.selectMemberInfo(customer);
			Owner owner = new Owner(member.getUsername(), member.getCompany(), member.getGrade());
			int grade = ser.searchGrade(customer);
			//유저객체추가.
			if (grade == 1) {
				// 관리자는 다 볼 수 있고...
				nat = ser.nationInfo(idx);
				mon = ser.monthInfo(idx);
				contentsList = ser.contentsInfo(idx);
				imageList = ser.imagesInfo(idx);
				msg.put("resmsg", "조회성공");
				msg.put("nation", nat);
				msg.put("month", mon);
				msg.put("contents", contentsList);
				msg.put("images", imageList);
				msg.put("owner", owner);
			} else if (grade >= 2) {
				Nation natCus = ser.selectNationCustomer(customer);
				int cusIdx = Integer.parseInt(natCus.getCustomer());
				if (cusIdx == customer) {
					natCus = ser.nationInfo(idx);
					// monthtb에 nation=#{idx}로 selectOne
					nat = ser.nationInfo(idx);
					mon = ser.monthInfo(idx);

					// img랑 contents는 selectList로 받아와야하고.
					contentsList = ser.contentsInfo(idx);
					imageList = ser.imagesInfo(idx);
					
					msg.put("resmsg", "조회성공");
					msg.put("nation", nat);
					msg.put("month", mon);
					msg.put("contents", contentsList);
					msg.put("images", imageList);
					msg.put("owner", owner);
				}else {
					msg.put("resmsg", "권한없음");
				}
			}
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
		} catch (Exception e) {
			msg.put("resmsg", "조회실패");
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}

		return res;
	}

	/** 사용자 상품 등록 */
	@PostMapping("/man/nation/insert")
	@ApiOperation(value = "사용자 상품정보(nation)  등록")
	public ResponseEntity<Map<String, Object>> nationInsert(@RequestHeader(value = "Authorization") String token, @RequestBody Nation nat) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			int grade = ser.searchGrade(customer);

			if (grade > 0) {
				boolean resProduct = ser.nationinsert(nat.getEn_name(), nat.getKo_name(), nat.getDust(), nat.getContinents(),customer + "", nat.getWeight(), nat.getSpeech(), nat.getPrice(), nat.getS_date(), nat.getF_date());
				int last = Integer.MIN_VALUE;
				List<Nation> list = ser.nationList(customer);
				for(int i=0; i<list.size(); i++) {
					last = Math.max(last, Integer.parseInt(list.get(i).getIdx()));
				}
				msg.put("nationidx", last);
				res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
			} else {
				res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
			}
		} catch (Exception e) {
			msg.put("resmsg", e.getMessage());
			System.out.println(e.getMessage());
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
		}

		return res;
	}

	/** 사용자 상품 삭제 */
	@DeleteMapping("/man/nation/delete/{idx}")
	@ApiOperation(value = "사용자 상품정보(nation) 삭제 (cascade).")
	public ResponseEntity<Map<String, Object>> nationDelete(@RequestHeader(value = "Authorization") String token,
			@PathVariable("idx") String idx) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			int grade = ser.searchGrade(customer);
			System.out.println(customer);
			if (grade == 1) {
				boolean resDelete = ser.nationdelete(idx ,customer+"");
				msg.put("resvalue", resDelete);
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

	/** 사용자 상품 수정 */
	@PutMapping("/man/nation/update")
	@ApiOperation(value = "사용자 상품정보(nation) 수정")
	public ResponseEntity<Map<String, Object>> nationUpdate(@RequestHeader(value = "Authorization") String token, @RequestBody Nation nat) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			int grade = ser.searchGrade(customer);

			if (grade == 1) {
				boolean resUpdate = ser.nationupdate(nat.getEn_name(), nat.getKo_name(), nat.getDust(), nat.getContinents(), nat.getShowcnt(), customer + "", nat.getWeight(), nat.getSpeech(), nat.getPrice(), nat.getS_date(), nat.getF_date());
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

	/** 상품 월별정보 리스트 */
	@GetMapping("/man/monthtb/list")
	@ApiOperation(value = "상품 월별정보(month) 리스트")
	public ResponseEntity<Map<String, Object>> monthInfo(@RequestHeader(value = "Authorization") String token) {
		ResponseEntity<Map<String, Object>> res = null;
		Monthtb mt = new Monthtb();
		Map<String, Object> msg = new HashMap<String, Object>();
		ArrayList<Monthtb> list = null;
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			int grade = ser.searchGrade(customer);

			if (grade == 1) {
				list = ser.monthListAll(customer);
				msg.put("resvalue", list);
				res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
			} else if (grade >= 2) {
				list = ser.monthList(customer);
				msg.put("resvalue", list);
				res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
			} else {
				return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
			}
		} catch (Exception e) {
			msg.put("resmsg", e.getMessage());
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}
		return res;
	}

	/** 상품 월별정보 등록 */
	@PostMapping("/man/monthtb/insert")
	@ApiOperation(value = "상품 월별정보(month) 등록")
	public ResponseEntity<Map<String, Object>> monthInsert(@RequestHeader(value = "Authorization") String token,
			@RequestBody Monthtb montb) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			int grade = ser.searchGrade(customer);

			if (grade > 0) {
				boolean resMonth = ser.insertMonthtb(montb);
				res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
			} else {
				return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
			}
		} catch (Exception e) {
			msg.put("resmsg", e.getMessage());
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}
		return res;
	}

	/** 상품 월별정보 수정 */
	@PostMapping("/man/monthtb/update")
	@ApiOperation(value = "상품 월별정보(month) 수정")
	public ResponseEntity<Map<String, Object>> monthUpdate(@RequestHeader(value = "Authorization") String token,
			@RequestBody Monthtb montb) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			int grade = ser.searchGrade(customer);

			if (grade == 1) {
				boolean resMonth = ser.updateMonthtb(montb);
				msg.put("resvalue", resMonth);
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

	/** 상품 월별정보 삭제 */
	@DeleteMapping("/man/monthtb/delete/{nation}")
	@ApiOperation(value = "상품 월별정보(month) 삭제")
	public ResponseEntity<Map<String, Object>> monthDelete(@RequestHeader(value = "Authorization") String token, @PathVariable("nation") String nation) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			int grade = ser.searchGrade(customer);

			if (grade == 1) {
				boolean resDelete = ser.deleteMonthtb(Integer.parseInt(nation));
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

	/** 콘텐츠 정보 조회하기 */
	@GetMapping("/man/contents/list")
	@ApiOperation(value = "상품 콘텐츠 정보(contents) 리스트 조회")
	public ResponseEntity<Map<String, Object>> ContentsList(@RequestHeader(value = "Authorization") String token) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();

		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			int grade = ser.searchGrade(customer);

			List<Route> routelist = null;
			if (grade == 1) {
				routelist = adser.getRoutesAll(customer);
				msg.put("contents", routelist);
				res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
			} else if (grade >= 2) {
				routelist = adser.getRoutes(customer);
				msg.put("contents", routelist);
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

	/** 콘텐츠 정보 추가하기 */
	@PostMapping("/man/contents/add")
	@ApiOperation(value = "상품 콘텐츠 정보(contents) 추가")
	public ResponseEntity<Map<String, Object>> ContentsInsert(@RequestHeader(value = "Authorization") String token, @RequestBody List<Route> route) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			int grade = ser.searchGrade(customer);

			if (grade > 0) {
				for(int i=0; i<route.size(); i++)
					adser.insertRoutes(route.get(i));
				res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
			} else {
				return res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
			}
		} catch (Exception e) {
			msg.put("resmsg", e.getMessage());
			System.out.println(e.getMessage());
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}
		return res;
	}

	/** 콘텐츠 정보 수정하기 */
	@PutMapping("/man/contents/update")
	@ApiOperation(value = "상품 콘텐츠 정보(contents) 수정")
	public ResponseEntity<Map<String, Object>> ContentsUpdate(@RequestHeader(value = "Authorization") String token,
			@RequestBody Route route) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			int grade = ser.searchGrade(customer);

			if (grade == 1) {
				adser.updateRoutes(route);
				res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
			} else {
				return res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
			}
		} catch (Exception e) {
			msg.put("resmsg", e.getMessage());
			System.out.println(e.getMessage());
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}
		return res;
	}

	/** 콘텐츠 정보 삭제하기 */
	@DeleteMapping("/man/contents/del/{idx}/{nation}")
	@ApiOperation(value = "상품 콘텐츠 정보(contents) 삭제")
	public ResponseEntity<Map<String, Object>> ContentsDelete(@RequestHeader(value = "Authorization") String token, @PathVariable("idx") int idx, @PathVariable("nation") int nation) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			int grade = ser.searchGrade(customer);

			if (grade == 1) {
				Map<String, Object> map = new HashMap<String, Object>();
				map.put("idx", idx);
				map.put("nation", nation);
				adser.deleteRoutes(map);
				res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
			} else {
				return res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
			}
		} catch (Exception e) {
			msg.put("resmsg", e.getMessage());
			System.out.println(e.getMessage());
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}
		return res;
	}
	
	/** 이미지 정보 조회하기 */
	@GetMapping("man/image/list")
	@ApiOperation(value = "상품 이미지정보(image) 리스트 조회")
	public ResponseEntity<Map<String, Object>> imageList(@RequestHeader(value = "Authorization") String token) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		ArrayList<Image> list = null;
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			int grade = ser.searchGrade(customer);

			if (grade == 1) {
				list = ser.imageListAll(customer);
			} else if (grade >= 2) {
				list = ser.imageList(customer);
			} else {
				return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
			}
			msg.put("resvalue", list);
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
		} catch (Exception e) {
			msg.put("resmsg", e.getMessage());
			System.out.println(e.getMessage());
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}
		return res;
	}
	
	/** 이미지 정보 추가 */
	@PostMapping("/man/image/insert")
	@ApiOperation(value = "상품 이미지정보(image) 추가")
	public ResponseEntity<Map<String, Object>> imageInsert(@RequestHeader(value = "Authorization") String token, @RequestBody List<Image> imgs) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			System.out.println("상품 이미지 정보 추가! user => "+ username);
			System.out.println(imgs);
			int customer = ser.getIdx(username);
			int grade = ser.searchGrade(customer);
			
			
			if (grade > 0) {
				for(int i=0; i<imgs.size(); i++) {
					ser.insertImagetb(imgs.get(i));
				}
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

	/** 이미지 정보 수정 */
	@PostMapping("/man/image/update")
	@ApiOperation(value = "이미지 정보(image) 수정")
	public ResponseEntity<Map<String, Object>> imageUpdate(@RequestHeader(value = "Authorization") String token, @RequestBody Image img) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			int grade = ser.searchGrade(customer);

			if (grade == 1) {
				boolean resImg = ser.updateImagetb(img);
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

	/** 이미지 정보 삭제 */
	@DeleteMapping("/man/image/delete/{idx}")
	@ApiOperation(value = "상품 이미지 정보(image) 삭제 ")
	public ResponseEntity<Map<String, Object>> imageDelete(@RequestHeader(value = "Authorization") String token, @PathVariable("idx") String idx) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			int grade = ser.searchGrade(customer);

			if (grade == 1) {
				boolean resDelete = ser.deleteImagetb(Integer.parseInt(idx));
				res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
			} else {
				res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
			}
		} catch (Exception e) {
			msg.put("resmsg", e.getMessage());
			System.out.println(e.getMessage());
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}
		return res;
	}

}