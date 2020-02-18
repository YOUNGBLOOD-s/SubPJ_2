package com.yb.rest.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.Random;

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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.yb.rest.service.IAdService;
import com.yb.rest.service.IManService;
import com.yb.rest.vo.Sendtofront;
import com.yb.rest.vo.Counsel;
import com.yb.rest.vo.ForScore;
import com.yb.rest.vo.Image;
import com.yb.rest.vo.Monthtb;
import com.yb.rest.vo.Nation;
import com.yb.rest.vo.Route;
import com.yb.rest.vo.Sensor;

import io.swagger.annotations.ApiOperation;

@CrossOrigin
@RestController
@RequestMapping("/api/ad")
public class AdController {

	@Autowired
	private IAdService ser;

	@Autowired
	private IManService manser;

	@ExceptionHandler(Exception.class)
	public void ExceptionMethod(Exception e) {

	}

	/** 나라 상세정보 조회 */
	@GetMapping("/detail/{id}")
	@ApiOperation(value = "각 나라의 상세정보 조회")
	public @ResponseBody ResponseEntity<Map<String, Object>> selectnationdetail(@PathVariable String id) {
		System.out.println("안녕하세요. 고객님이 요청하신 " + id + "번에 해당하는 나라 상세정보를 조회해드릴게요.");
		ResponseEntity<Map<String, Object>> re = null;
		Map<String, Object> result = null;
		try {
			int idx = Integer.parseInt(id);
			result = new HashMap<>();
			List<Route> routelist = ser.getRoutes(idx);

			Map<String, Integer> map = new HashMap<String, Integer>();
			map.put("nationidx", idx);
			map.put("type", ser.getType(idx));

			Nation nation = ser.getNationdetail(map);
			Sendtofront stf = ser.getInfo(map);

			SimpleDateFormat monthformat = new SimpleDateFormat("MM");
			Date time = new Date();
			int month = Integer.parseInt(monthformat.format(time));
			switch (month) {
			case 1:
				result.put("temp", stf.getTem1());
				result.put("humid", stf.getHum1());
				break;
			case 2:
				result.put("temp", stf.getTem2());
				result.put("humid", stf.getHum2());
				break;
			case 3:
				result.put("temp", stf.getTem3());
				result.put("humid", stf.getHum3());
				break;
			case 4:
				result.put("temp", stf.getTem4());
				result.put("humid", stf.getHum4());
				break;
			case 5:
				result.put("temp", stf.getTem5());
				result.put("humid", stf.getHum5());
				break;
			case 6:
				result.put("temp", stf.getTem6());
				result.put("humid", stf.getHum6());
				break;
			case 7:
				result.put("temp", stf.getTem7());
				result.put("humid", stf.getHum7());
				break;
			case 8:
				result.put("temp", stf.getTem8());
				result.put("humid", stf.getHum8());
				break;
			case 9:
				result.put("temp", stf.getTem9());
				result.put("humid", stf.getHum9());
				break;
			case 10:
				result.put("temp", stf.getTem10());
				result.put("humid", stf.getHum10());
				break;
			case 11:
				result.put("temp", stf.getTem11());
				result.put("humid", stf.getHum11());
				break;
			case 12:
				result.put("temp", stf.getTem12());
				result.put("humid", stf.getHum12());
				break;
			}

			result.put("id", nation.getIdx());
			result.put("en_name", nation.getEn_name());
			result.put("name", nation.getKo_name());
			result.put("dust", nation.getDust());
			result.put("showcnt", nation.getShowcnt());
			result.put("customer", nation.getCustomer());
			result.put("weight", nation.getWeight());
			result.put("speech", nation.getSpeech());
			result.put("type", nation.getType());
			result.put("thumbnail", nation.getUrl());
			result.put("price", nation.getPrice());
			if (nation.getContinents().equals("1")) {
				result.put("category", "Europe");
			} else if (nation.getContinents().equals("2")) {
				result.put("category", "Africa");
			} else if (nation.getContinents().equals("3")) {
				result.put("category", "Asia");
			} else {
				result.put("category", "North America");
			}
			result.put("routes", routelist);
			re = new ResponseEntity<>(result, HttpStatus.OK);
		} catch (Exception e) {
			result.put("resmsg", e.getMessage());
			System.out.println(e.getMessage());
			re = new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
		}
		System.out.println("전달이 완료됐습니다. 안녕히가세요!");
		System.out.println("==============");
		return re;
	}

	/** click 갱신하는 메소드 */
	@GetMapping("/click/{id}")
	@ApiOperation(value = "clikc 요청 시 카운트 갱신")
	public @ResponseBody ResponseEntity<Map<String, Object>> statistics_click(@PathVariable String id) {
		ResponseEntity<Map<String, Object>> re = null;
		Map<String, Object> result = new HashMap<String, Object>();
		try {
			SimpleDateFormat monthformat = new SimpleDateFormat("YYYY-MM-dd hh");
			Date date = new Date();
			String today = monthformat.format(date);

			Map<String, Object> value = new HashMap<String, Object>();
			value.put("nation", id);
			value.put("today", today);

			if (ser.getDate(value)) {
				System.out.println("있음!");
				ser.updateClickcnt(value);
			} else {
				ser.insertClick(value);
			}
			re = new ResponseEntity<>(result, HttpStatus.OK);
		} catch (Exception e) {
			result.put("resmsg", e.getMessage());
			System.out.println(e.getMessage());
			re = new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
		}
		return re;
	}

	/** QRcode click 갱신하는 메소드 */
	@GetMapping("/clickqr/{id}")
	@ApiOperation(value = "QRcode 인식 시 카운트 갱신")
	public @ResponseBody ResponseEntity<Map<String, Object>> statistics_qr(@PathVariable String id) {
		ResponseEntity<Map<String, Object>> re = null;
		Map<String, Object> result = new HashMap<String, Object>();
		try {
			SimpleDateFormat monthformat = new SimpleDateFormat("YYYY-MM-dd");
			Date date = new Date();
			String today = monthformat.format(date);

			Map<String, Object> value = new HashMap<String, Object>();
			value.put("nation", id);
			value.put("today", today);

			if (ser.getDate(value)) {
				ser.updateQRcnt(value);
			} else {
				ser.insertQR(value);
			}
			re = new ResponseEntity<>(result, HttpStatus.OK);
		} catch (Exception e) {
			result.put("resmsg", e.getMessage());
			System.out.println(e.getMessage());
			re = new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
		}
		return re;
	}

	/** 나라 전체 정보를 보내는 메소드 */
	@GetMapping("/all")
	@ApiOperation(value = "나라 전체 정보 조회")
	public @ResponseBody ResponseEntity<Map<String, Object>> selectAllnationdetail(@RequestParam("page") String page,
			@RequestParam("continents") String continents, @RequestParam("sort") String sort) {
		// 유럽1 북태평양2 아프리카3 아시아4 북아메리카5
		//sort는 Default : ASC이고 DESC일때 처리.로 올때 날짜순으로 정렬.
		ResponseEntity<Map<String, Object>> re = null;
		Map<String, Object> result = new HashMap<String, Object>();
		List<Map<String, Object>> Countrylist = new LinkedList<>();
		ArrayList<Nation> tmplist = new ArrayList<Nation>();
		int pageIdx = 0;
		if (page == null)
			pageIdx = 1;
		else {
			pageIdx = Integer.parseInt(page);
		}
		pageIdx = (pageIdx - 1) * 12;
		int pageIdxfin = pageIdx+12;
		List<Integer> checksize = ser.selectIdxs();
		int maxpage = checksize.size()/12;
		if (checksize.size() % 12 > 0)
			maxpage++;
		List<Integer> list = ser.selectIdxs();
		List<Integer> filterlist = ser.selectFilterIdxs(continents);
		if (list.size() > 0) {
			//필터가 적용 되었다면??
			if (continents.equals("1") || continents.equals("2") || continents.equals("3") || continents.equals("4")|| continents.equals("5")) {
					for (int i = 0; i < filterlist.size(); i++) {
						Map<String, Object> con = new HashMap<String, Object>();
						int idx = filterlist.get(i);	
						Nation nation = ser.getNationdetail(idx);
//						List<Nation> confilterlist = ser.selectFilterIdxs(continents, pageIdx+"");
							Monthtb mon = manser.monthInfo(idx);
							List<Image> img = manser.imagesInfo(idx);
							List<Route> rou = manser.contentsInfo(idx);
							if (mon == null || img == null || rou == null) continue;			
							con.put("idx", nation.getIdx());
							con.put("en_name", nation.getEn_name());
							con.put("name", nation.getKo_name());
							con.put("dust", nation.getDust());
							con.put("continents", nation.getContinents());
							con.put("showcnt", nation.getShowcnt());
							con.put("customer", nation.getCustomer());
							con.put("weight", nation.getWeight());
							con.put("speech", nation.getSpeech());
							con.put("price", nation.getPrice());
							con.put("type", nation.getType());
							con.put("image", nation.getUrl());
							con.put("s_date", nation.getS_date());
							con.put("f_date", nation.getF_date());		
						if (list.size() == 12) {
							result.put("lastpage", false);
						} else {// 라스트페이지일 경우 true
							result.put("lastpage", true);
						}
						Countrylist.add(con);
					}
					if(Countrylist.size()>12) {
						for(int i=pageIdx; i<pageIdx+12; i++) {
							if(Countrylist.size() <= i)
								break;
							tmplist.add(new Nation(Countrylist.get(i).get("idx")+"",Countrylist.get(i).get("en_name")+"",Countrylist.get(i).get("name")+"",
									Countrylist.get(i).get("dust")+"",Countrylist.get(i).get("continents")+"",Countrylist.get(i).get("showcnt")+"",
									Countrylist.get(i).get("customer")+"",Countrylist.get(i).get("weight")+"",Countrylist.get(i).get("speech")+"",
									Countrylist.get(i).get("price")+"",Countrylist.get(i).get("s_date")+"",Countrylist.get(i).get("f_date")+"",
									Countrylist.get(i).get("type")+"",Countrylist.get(i).get("image")+""));
						}
						if(sort.equals("ASC")||sort.equals("asc")) {
						Collections.sort(tmplist, new Comparator<Nation>() {
							@Override
							public int compare(Nation o1, Nation o2) {
								// TODO Auto-generated method stub
								return o1.getS_date().compareTo(o2.getS_date());
							}
						});}else if(sort.equals("DESC")||sort.equals("desc")){
							Collections.sort(tmplist, new Comparator<Nation>() {
								@Override
								public int compare(Nation o1, Nation o2) {
									// TODO Auto-generated method stub
									return o2.getS_date().compareTo(o1.getS_date());
								}
							});
						}
						result.put("AllNationDatas", tmplist);
					}else {
						//그냥 출력하면 될듯..
						if(sort.equals("ASC")||sort.equals("asc")) {
							Collections.sort(Countrylist, new Comparator<Map<String, Object>>() {
								@Override
								public int compare(Map<String, Object> o1, Map<String, Object> o2) {
									// TODO Auto-generated method stub
									return o1.get("s_date").toString().compareTo(o2.get("s_date").toString());
								}					
							});
						}else if(sort.equals("DESC")||sort.equals("desc")){
							Collections.sort(Countrylist, new Comparator<Map<String, Object>>() {
								@Override
								public int compare(Map<String, Object> o1, Map<String, Object> o2) {
									// TODO Auto-generated method stub
									return o2.get("s_date").toString().compareTo(o1.get("s_date").toString());
								}					
							});
						}
						result.put("AllNationDatas", Countrylist);
					}
					maxpage = filterlist.size()/12;
					if (filterlist.size() % 12 > 0)
						maxpage++;
					
				} else {
					list.clear();
					list = ser.selectIdxs_page(pageIdx);
					for (int i = 0; i < list.size(); i++) {		
						Map<String, Object> con = new HashMap<String, Object>();
						int idx = list.get(i);
						Nation nation = ser.getNationdetail(idx);
						Monthtb mon = manser.monthInfo(idx);
						List<Image> img = manser.imagesInfo(idx);
						List<Route> rou = manser.contentsInfo(idx);
						if (mon == null || img == null || rou == null) continue;
						con.put("idx", nation.getIdx());
						con.put("en_name", nation.getEn_name());
						con.put("name", nation.getKo_name());
						con.put("dust", nation.getDust());
						con.put("continents", nation.getContinents());
						con.put("showcnt", nation.getShowcnt());
						con.put("customer", nation.getCustomer());
						con.put("weight", nation.getWeight());
						con.put("speech", nation.getSpeech());
						con.put("price", nation.getPrice());
						con.put("type", nation.getType());
						con.put("image", nation.getUrl());
						con.put("s_date", nation.getS_date());
						con.put("f_date", nation.getF_date());
						if (list.size() == 12) {
							result.put("lastpage", false);
						} else {// 라스트페이지일 경우 true
							result.put("lastpage", true);
						}
						Countrylist.add(con);
					}
					if(sort.equals("ASC")||sort.equals("asc")) {
						Collections.sort(Countrylist, new Comparator<Map<String, Object>>() {
							@Override
							public int compare(Map<String, Object> o1, Map<String, Object> o2) {
								// TODO Auto-generated method stub
								return o1.get("s_date").toString().compareTo(o2.get("s_date").toString());
							}					
						});
					}else if(sort.equals("DESC")||sort.equals("desc")){
						Collections.sort(Countrylist, new Comparator<Map<String, Object>>() {
							@Override
							public int compare(Map<String, Object> o1, Map<String, Object> o2) {
								// TODO Auto-generated method stub
								return o2.get("s_date").toString().compareTo(o1.get("s_date").toString());
							}					
						});
					}
					result.put("AllNationDatas", Countrylist);
				}
			
			} else if (list.size() == 0){
				result.put("lastpage", true);
			}
			result.put("lastpageidx", maxpage);
//			result.put("AllNationDatas", Countrylist);
			re = new ResponseEntity<>(result, HttpStatus.OK);
			return re;
		}

	/** 상담 정보를 받아 저장하는 메소드 */
	@PostMapping("/counsel")
	@ApiOperation(value = "상담 정보 저장")
	public @ResponseBody ResponseEntity<Map<String, Object>> updateCounsel(@RequestBody Counsel counvalue) {
		ResponseEntity<Map<String, Object>> re = null;
		Map<String, Object> result = new HashMap<String, Object>();
		try {
			System.out.println(counvalue.toString());

			ser.updateCounsel(counvalue.getAge(), counvalue.getName(), counvalue.getEmail(), counvalue.getTel(), counvalue.getDate(), counvalue.getText(), counvalue.getNation());
			int lastIdx = ser.selectlastIdx();
			counvalue.setIdx(lastIdx);
			result.put("inputValue", counvalue);
			re = new ResponseEntity<>(result, HttpStatus.OK);
		} catch (Exception e) {
			re = new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

	/** 상담 완료/미완료 flag 값 swap */
	@PutMapping("/counsel/completed")
	@ApiOperation(value="상담 완료 변수 swap")
	public @ResponseBody ResponseEntity<Map<String, Object>> updateCounselflag(@RequestParam int idx) {
		ResponseEntity<Map<String, Object>> re = null;
		Map<String, Object> result = new HashMap<String, Object>();
		try {
			ser.updateCompleted(idx);
			Counsel counval = ser.selectCounsel(idx);
			result.put("updateValue", counval);
			re = new ResponseEntity<>(result, HttpStatus.OK);
		} catch (Exception e) {
			re = new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
		}
		return re;
	}
	
	/** 상담 내역 삭제 */
	@DeleteMapping("/counsel/delete/{idx}")
	@ApiOperation(value="상담정보 삭제")
	public @ResponseBody ResponseEntity<Map<String, Object>> deleteCounsel(@RequestParam(value = "idx") int idx) {
		ResponseEntity<Map<String, Object>> re = null;
		Map<String, Object> result = new HashMap<String, Object>();
		try {
			ser.deleteCounsel(idx);
			re = new ResponseEntity<>(result, HttpStatus.OK);
		} catch (Exception e) {
			re = new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
		}
		return re;
	}
}
