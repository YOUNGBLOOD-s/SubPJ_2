package com.yb.rest.controller;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.yb.rest.service.IAdService;
import com.yb.rest.service.IManService;
import com.yb.rest.vo.Counsel;
import com.yb.rest.vo.Image;
import com.yb.rest.vo.Member;
import com.yb.rest.vo.Monthtb;
import com.yb.rest.vo.Nation;
import com.yb.rest.vo.NationDTO;
import com.yb.rest.vo.Owner;
import com.yb.rest.vo.Route;

import io.jsonwebtoken.Claims;
import io.swagger.annotations.ApiOperation;

@CrossOrigin
@RestController
@RequestMapping("/api/man")
public class ManageController {

	@Autowired
	private IManService ser;

	@Autowired
	private IAdService adser;

	@ExceptionHandler(Exception.class)
	public void ExceptionMethod(Exception e) {

	}

	// token =
	// "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODA0NTU4MzY2ODQsInVzZXJuYW1lIjoiYWRtaW4ifQ.hstghy7DypqOI3wj2-7trxtpgps3VvzAvD1ri9deLl4";

	/** 사용자 상품 전체보기 */
	@GetMapping("/nation/list")
	@ApiOperation(value = "사용자 상품정보 리스트 조회")
	public ResponseEntity<Map<String, Object>> nationList(@RequestHeader(value = "Authorization") String token,
			@RequestParam("page") String page) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		if(token=="" || token==null) return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED); 
		List<NationDTO> list = null;
		List<Nation> sizelist = null;
		Member member = new Member();
		int pageIdx = 0;
		if (page == null)
			pageIdx = 1;
		else{
			pageIdx = Integer.parseInt(page);
		}
		pageIdx = (pageIdx-1) * 12;
		
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			member = ser.selectMemberInfo(customer);
			Owner owner = new Owner(member.getUsername(), member.getCompany(), member.getGrade());
			int grade = ser.searchGrade(customer);

			if (grade == 1) {
				list = ser.nationListAll_page(customer, pageIdx);
				sizelist= ser.nationListAll(customer);
				int maxpage = sizelist.size()/12;
				if(sizelist.size()%12>0)
					maxpage++;
				// 해당 nation에 이미지를 불러오고...
				for (int i = 0; i < list.size(); i++) {
					int idx = Integer.parseInt(list.get(i).getIdx());
					String url = ser.selectNation_image(idx);
					list.get(i).setUrl(url);
					list.get(i).setOwner(owner);
				}
				msg.put("lastpageidx", maxpage);
				msg.put("resvalue", list);
				res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
			} else if (grade >= 2) {
				list = ser.nationList_page(customer, pageIdx);
				sizelist = ser.nationList(customer);
				int maxpage = sizelist.size()/12;
				if(sizelist.size()%12>0)
					maxpage++;
				for (int i = 0; i < list.size(); i++) {
					int idx = Integer.parseInt(list.get(i).getIdx());
					String url = ser.selectNation_image(idx);
					list.get(i).setUrl(url);
					list.get(i).setOwner(owner);
				}
				msg.put("lastpageidx", maxpage);
				msg.put("resvalue", list);				
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
	
	/** 사용자 상품 보기 서비스 */
	@GetMapping("/nation/{idx}")
	@ApiOperation(value = "광고주의 등록 상품정보 보기 서비스.")
	public ResponseEntity<Map<String, Object>> nationInfo(@RequestHeader(value = "Authorization") String token, @PathVariable("idx") int idx) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		Nation nat = new Nation();
		Monthtb mon = new Monthtb();
		List<Route> contentsList = null;
		List<Image> imageList = null;
		Member member = new Member();
		try {
			Claims de = MemberController.verification(token);
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			int own = ser.selectCustomer(idx);
			member = ser.selectMemberInfo(own);
			//System.out.println(member.toString());
			
			Owner owner = new Owner(member.getUsername(), member.getCompany(), member.getGrade());
			
			int grade = ser.searchGrade(customer);
			if (grade == 1) {
				List<Counsel> counlist = ser.selectCounsellist(idx);
				nat = ser.nationInfo(idx);
				mon = ser.monthInfo(idx);
				contentsList = ser.contentsInfo(idx);
				imageList = ser.imagesInfo(idx);
				msg.put("nation", nat);
				msg.put("month", mon);
				msg.put("contents", contentsList);
				msg.put("images", imageList);
				msg.put("counselList", counlist);
				msg.put("owner", owner);
				res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
			} else if (grade >= 2) {
				Nation natCus = ser.selectNationCustomer(customer);
				int cusIdx = Integer.parseInt(natCus.getCustomer());
				if (cusIdx == customer) {
					natCus = ser.nationInfo(idx);
					nat = ser.nationInfo(idx);
					mon = ser.monthInfo(idx);
					contentsList = ser.contentsInfo(idx);
					imageList = ser.imagesInfo(idx);
					List<Counsel> counlist = ser.selectCounsellist(idx);

					msg.put("nation", nat);
					msg.put("month", mon);
					msg.put("contents", contentsList);
					msg.put("images", imageList);
					msg.put("counselList", counlist);
					msg.put("owner", owner);
					res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
				} else {
					res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
				}
			}
		} catch (Exception e) {
			msg.put("resmsg", e.getMessage());
			System.out.println(e.getMessage());
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.NOT_FOUND);
		}
		return res;
	}

	/** 사용자 상품 등록 */
	@PostMapping("/nation/insert")
	@ApiOperation(value = "사용자 상품정보(nation)  등록")
	public ResponseEntity<Map<String, Object>> nationInsert(@RequestHeader(value = "Authorization") String token,
			@RequestBody Nation nat) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		if(token=="" || token==null) return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED); 
		try {
			Claims de = MemberController.verification(token);
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			int grade = ser.searchGrade(customer);
			//광고주가 보유하고있는 nation테이블 갯수(사이즈)와 grade에따라 비교해준다
			boolean InsertAccess = true;
			List<Nation> listAccess = ser.nationList(customer);
			int size= listAccess.size();
			System.out.println(size+" "+grade+" "+customer);
			if(grade==2) { //실버일떄
			//grade가 2이면  2개
				if(size>=2) InsertAccess = false; 
			}else if ( grade ==3) {
			//grade가 3이면 5개
				if(size>=5) InsertAccess = false;
			}else if(grade ==4) {
			//grade가 4이면 6개.
				if(size>=10) InsertAccess = false;
			}else if (grade == 1) {
				//관리자이므로 그냥 통과
			}
			if (grade > 0 && InsertAccess) {
				ser.nationinsert(nat.getEn_name(), nat.getKo_name(), nat.getContinents(), customer + "", nat.getWeight(), nat.getSpeech(), nat.getPrice(),
						nat.getS_date(), nat.getF_date());
				int last = Integer.MIN_VALUE;
				List<Nation> list = ser.nationList(customer);
				for (int i = 0; i < list.size(); i++) {
					last = Math.max(last, Integer.parseInt(list.get(i).getIdx()));
				}
				msg.put("nationidx", last);
				msg.put("en_name", nat.getEn_name());
				res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.OK);
				SpeechController.tts(nat.getSpeech(), last+"");
				
			} else {
				res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
			}
		} catch (Exception e) {
			if(e.getMessage().contains("Duplicate")) {
				return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.CONFLICT);
			}
			msg.put("resmsg", e.getMessage());
			System.out.println(e.getMessage());
			res = new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED);
		}
		return res;
	}

	/** 사용자 상품 삭제 */
	@DeleteMapping("/nation/delete/{idx}")
	@ApiOperation(value = "사용자 상품정보(nation) 삭제 (cascade).")
	public ResponseEntity<Map<String, Object>> nationDelete(@RequestHeader(value = "Authorization") String token,
			@PathVariable("idx") String idx) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		if(token=="" || token==null) return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED); 
		try {
			Claims de = MemberController.verification(token);
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			int grade = ser.searchGrade(customer);

			if (grade == 1) {
				ser.nationdelete(idx, customer + "");
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
	@PutMapping("/nation/update/{idx}")
	@ApiOperation(value = "사용자 상품정보(nation) 수정")
	public ResponseEntity<Map<String, Object>> nationUpdate(@RequestHeader(value = "Authorization") String token, @RequestBody Nation nat, @PathVariable("idx") int idx) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		if(token=="" || token==null) return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED); 
		try {
			Claims de = MemberController.verification(token);
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			int grade = ser.searchGrade(customer);

			if (grade == 1) {
				Map<String, Object> map = new HashMap<>();
				map.put("idx", idx);
				map.put("en_name", nat.getEn_name());
				map.put("ko_name", nat.getKo_name());
				map.put("dust", nat.getDust());
				map.put("continents", nat.getContinents());
				map.put("speech", nat.getSpeech());
				map.put("price", nat.getPrice());
				map.put("s_date", nat.getS_date());
				map.put("f_date", nat.getF_date());
				ser.nationupdate(map);
				
				msg.put("updateNation", map);
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
	@GetMapping("/monthtb/list")
	@ApiOperation(value = "상품 월별정보(month) 리스트")
	public ResponseEntity<Map<String, Object>> monthInfo(@RequestHeader(value = "Authorization") String token) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		List<Monthtb> list = null;
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
	@PostMapping("/monthtb/insert")
	@ApiOperation(value = "상품 월별정보(month) 등록")
	public ResponseEntity<Map<String, Object>> monthInsert(@RequestHeader(value = "Authorization") String token,
			@RequestBody Monthtb montb) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		if(token=="" || token==null) return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED); 
		try {
			Claims de = MemberController.verification(token);
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			int grade = ser.searchGrade(customer);

			if (grade > 0) {
				ser.insertMonthtb(montb);
				msg.put("insertMonth", montb);
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
	@PutMapping("/monthtb/update/{idx}")
	@ApiOperation(value = "상품 월별정보(month) 수정")
	public ResponseEntity<Map<String, Object>> monthUpdate(@RequestHeader(value = "Authorization") String token, @RequestBody Monthtb montb, @PathVariable("idx") int idx) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		if(token=="" || token==null) return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED); 
		try {
			Claims de = MemberController.verification(token);
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			int grade = ser.searchGrade(customer);

			if (grade == 1) {
				montb.setIdx(idx);
				ser.updateMonthtb(montb);
				msg.put("updateMonth", montb);
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
	@DeleteMapping("/monthtb/delete/{nation}")
	@ApiOperation(value = "상품 월별정보(month) 삭제")
	public ResponseEntity<Map<String, Object>> monthDelete(@RequestHeader(value = "Authorization") String token,
			@PathVariable("nation") String nation) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		if(token=="" || token==null) return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED); 
		try {
			Claims de = MemberController.verification(token);
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			int grade = ser.searchGrade(customer);

			if (grade == 1) {
				ser.deleteMonthtb(Integer.parseInt(nation));
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
	@GetMapping("/contents/list")
	@ApiOperation(value = "상품 콘텐츠 정보(contents) 리스트 조회")
	public ResponseEntity<Map<String, Object>> ContentsList(@RequestHeader(value = "Authorization") String token) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		if(token=="" || token==null) return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED); 
		try {
			Claims de = MemberController.verification(token);
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
	@PostMapping("/contents/add")
	@ApiOperation(value = "상품 콘텐츠 정보(contents) 추가")
	public ResponseEntity<Map<String, Object>> ContentsInsert(@RequestHeader(value = "Authorization") String token,
			@RequestBody List<Route> route) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		if(token=="" || token==null) return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED); 
		try {
			Claims de = MemberController.verification(token);
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			int grade = ser.searchGrade(customer);

			if (grade > 0) {
				for (int i = 0; i < route.size(); i++) {
					String path = route.get(i).getImage();
					String newpath = path.split("_")[0] + "/" + path.split("_")[1] + "_" +path.split("_")[2];
					route.get(i).setImage(newpath);
					adser.insertRoutes(route.get(i));
				}
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
	@PutMapping("/contents/update/{idx}")
	@ApiOperation(value = "상품 콘텐츠 정보(contents) 수정")
	public ResponseEntity<Map<String, Object>> ContentsUpdate(@RequestHeader(value = "Authorization") String token,
			@RequestBody Route route, @PathVariable("idx") int idx) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		if(token=="" || token==null) return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED); 
		try {
			Claims de = MemberController.verification(token);
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			int grade = ser.searchGrade(customer);

			if (grade == 1) {
				route.setIdx(idx+"");
				String path = route.getImage();
				String newpath = path.split("_")[0] + "/" + path.split("_")[1] + "_" +path.split("_")[2];
				route.setImage(newpath);
				adser.updateRoutes(route);
				msg.put("inputContents", route);
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
	@DeleteMapping("/contents/del/{idx}/{nation}")
	@ApiOperation(value = "상품 콘텐츠 정보(contents) 삭제")
	public ResponseEntity<Map<String, Object>> ContentsDelete(@RequestHeader(value = "Authorization") String token,
			@PathVariable("idx") int idx, @PathVariable("nation") int nation) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		if(token=="" || token==null) return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED); 
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
	@GetMapping("/image/list")
	@ApiOperation(value = "상품 이미지정보(image) 리스트 조회")
	public ResponseEntity<Map<String, Object>> imageList(@RequestHeader(value = "Authorization") String token) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		List<Image> list = null;
		if(token=="" || token==null) return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED); 
		try {
			Claims de = MemberController.verification(token);
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
	@PostMapping("/image/insert")
	@ApiOperation(value = "상품 이미지정보(image) 추가")
	public ResponseEntity<Map<String, Object>> imageInsert(@RequestHeader(value = "Authorization") String token,
			@RequestBody List<Image> imgs) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		if(token=="" || token==null) return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED); 
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			
			int customer = ser.getIdx(username);
			int grade = ser.searchGrade(customer);

			if (grade > 0) {
				for (int i = 0; i < imgs.size(); i++) {
					String path = imgs.get(i).getUrl();
					String newpath = path.split("_")[0] + "/" + path.split("_")[1] + "_" +path.split("_")[2];
					imgs.get(i).setUrl(newpath);
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
	@PutMapping("/image/update/{idx}")
	@ApiOperation(value = "이미지 정보(image) 수정")
	public ResponseEntity<Map<String, Object>> imageUpdate(@RequestHeader(value = "Authorization") String token,
			@RequestBody Image img, @PathVariable("idx") int idx) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		if(token=="" || token==null) return new ResponseEntity<Map<String, Object>>(msg, HttpStatus.UNAUTHORIZED); 
		try {
			Claims de = MemberController.verification(token);
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			int grade = ser.searchGrade(customer);

			if (grade == 1) {
				img.setIdx(idx+"");
				String path = img.getUrl();
				String newpath = path.split("_")[0] + "/" + path.split("_")[1] + "_" +path.split("_")[2];
				img.setUrl(newpath);
				
				ser.updateImagetb(img);
				msg.put("update", img);
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
	@DeleteMapping("/image/delete/{idx}")
	@ApiOperation(value = "상품 이미지 정보(image) 삭제 ")
	public ResponseEntity<Map<String, Object>> imageDelete(@RequestHeader(value = "Authorization") String token,
			@PathVariable("idx") String idx) {
		ResponseEntity<Map<String, Object>> res = null;
		Map<String, Object> msg = new HashMap<String, Object>();
		try {
			Claims de = MemberController.verification(token);
			msg.put("username", de.get("username"));
			String username = (String) de.get("username");
			int customer = ser.getIdx(username);
			int grade = ser.searchGrade(customer);

			if (grade == 1) {
				ser.deleteImagetb(Integer.parseInt(idx));
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