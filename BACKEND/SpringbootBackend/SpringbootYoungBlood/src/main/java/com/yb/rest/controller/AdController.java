package com.yb.rest.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
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
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.yb.rest.service.IAdService;
import com.yb.rest.service.IManService;
import com.yb.rest.vo.Sendtofront;
import com.yb.rest.vo.Counsel;
import com.yb.rest.vo.ForScore;
import com.yb.rest.vo.Monthtb;
import com.yb.rest.vo.Nation;
import com.yb.rest.vo.Route;
import com.yb.rest.vo.Sensor;

import io.swagger.annotations.ApiOperation;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class AdController {

	@Autowired
	private IAdService ser;

	@Autowired
	private IManService manser;

	@ExceptionHandler(Exception.class)
	public void ExceptionMethod(Exception e) {

	}

	/**
	 * 센서값을 받는다.
	 * @throws JsonProcessingException
	 */
	@GetMapping("/sensor/{temp}/{hum}/{light}/{dust}")
	@ApiOperation(value = "임베디드 센서로부터 센서 값을 읽어옴")
	public void sensor(@PathVariable String temp, @PathVariable String hum, @PathVariable String light, @PathVariable String dust) throws JsonProcessingException {
		float tmp = Float.parseFloat(temp);
		float hu = Float.parseFloat(hum);
		float dus = Float.parseFloat(dust);
		float lig = Float.parseFloat(light);
		Sensor sen = new Sensor(tmp, hu, dus, lig);
		System.out.println("안녕하세요. 센서값을 전광판으로부터 받았습니다. 받은 정보는 다음과 같습니다.");
		System.out.println(sen.toString());
		ser.updateSensor(sen);
		System.out.println("==============");
	}
	
	/** 가중치를 계산하는 메소드 */
	@GetMapping("/weightcal")
	@ApiOperation(value = "가중치 계산")
	public List<Integer> weightcal() {
		System.out.println("조금만 기다려주세요. 가중치를 계산 중 입니다.");
		List<Integer> result = null;
		try {
			Sensor sen = ser.selectData(1);
			float tmp = sen.getTemp();
			float hu = sen.getHumid();
			float dus = sen.getDust();
			float lig = sen.getRough();
			Calendar calender = new GregorianCalendar(Locale.KOREA);
			int nMonth = calender.get(Calendar.MONTH) + 1;
			List<Monthtb> li = ser.selectAll();
			ArrayList<Sensor> nations = new ArrayList<>();
			boolean up = true;
			if (tmp >= 22) {
				up = false;
			}
			for (int i = 0; i < li.size(); i++) {
				switch (nMonth) {
				case 1:
					if ((up && li.get(i).getTem1() >= tmp) || (!up && li.get(i).getTem1() < tmp)) {
						nations.add(new Sensor(li.get(i).getNation(), li.get(i).getTem1(), li.get(i).getHum1()));
					}
					break;
				case 2:
					if ((up && li.get(i).getTem2() >= tmp) || (!up && li.get(i).getTem2() < tmp)) {
						nations.add(new Sensor(li.get(i).getNation(), li.get(i).getTem2(), li.get(i).getHum2()));
					}
					break;
				case 3:
					if ((up && li.get(i).getTem3() >= tmp) || (!up && li.get(i).getTem3() < tmp)) {
						nations.add(new Sensor(li.get(i).getNation(), li.get(i).getTem3(), li.get(i).getHum3()));
					}
					break;
				case 4:
					if ((up && li.get(i).getTem4() >= tmp) || (!up && li.get(i).getTem4() < tmp)) {
						nations.add(new Sensor(li.get(i).getNation(), li.get(i).getTem4(), li.get(i).getHum4()));
					}
					break;
				case 5:
					if ((up && li.get(i).getTem5() >= tmp) || (!up && li.get(i).getTem5() < tmp)) {
						nations.add(new Sensor(li.get(i).getNation(), li.get(i).getTem5(), li.get(i).getHum5()));
					}
					break;
				case 6:
					if ((up && li.get(i).getTem6() >= tmp) || (!up && li.get(i).getTem6() < tmp)) {
						nations.add(new Sensor(li.get(i).getNation(), li.get(i).getTem6(), li.get(i).getHum6()));
					}
					break;
				case 7:
					if ((up && li.get(i).getTem7() >= tmp) || (!up && li.get(i).getTem7() < tmp)) {
						nations.add(new Sensor(li.get(i).getNation(), li.get(i).getTem7(), li.get(i).getHum7()));
					}
					break;
				case 8:
					if ((up && li.get(i).getTem8() >= tmp) || (!up && li.get(i).getTem8() < tmp)) {
						nations.add(new Sensor(li.get(i).getNation(), li.get(i).getTem8(), li.get(i).getHum8()));
					}
					break;
				case 9:
					if ((up && li.get(i).getTem9() >= tmp) || (!up && li.get(i).getTem9() < tmp)) {
						nations.add(new Sensor(li.get(i).getNation(), li.get(i).getTem9(), li.get(i).getHum9()));
					}
					break;
				case 10:
					if ((up && li.get(i).getTem10() >= tmp) || (!up && li.get(i).getTem10() < tmp)) {
						nations.add(new Sensor(li.get(i).getNation(), li.get(i).getTem10(), li.get(i).getHum10()));
					}
					break;
				case 11:
					if ((up && li.get(i).getTem11() >= tmp) || (!up && li.get(i).getTem11() < tmp)) {
						nations.add(new Sensor(li.get(i).getNation(), li.get(i).getTem11(), li.get(i).getHum11()));
					}
					break;
				case 12:
					if ((up && li.get(i).getTem12() >= tmp) || (!up && li.get(i).getTem12() < tmp)) {
						nations.add(new Sensor(li.get(i).getNation(), li.get(i).getTem12(), li.get(i).getHum12()));
					}
					break;
				}
			}

			for (int j = 0; j < nations.size(); j++) {
				int gap = (int) Math.abs(tmp - nations.get(j).getTemp());
				ser.updateScore(new ForScore(nations.get(j).getIdx(), gap / 5 == 0 ? 10 : (gap / 5 * 10)));
			}

			Collections.sort(nations, new Comparator<Sensor>() {
				@Override
				public int compare(Sensor o1, Sensor o2) {
					return (int) (o1.getHumid() - o2.getHumid());
				}
			});
			
			for (int j = 0; j < nations.size(); j++) {
				int originScore = ser.getScore(nations.get(j).getIdx());
				int minus = j / 5 == 0 ? 10 : (j / 5) * (10);
				originScore -= minus;
				ser.updateScore(new ForScore(nations.get(j).getIdx(), originScore));
			}

			for (int j = 0; j < nations.size(); j++) {
				int score = ser.getScore(nations.get(j).getIdx());
				int minus = ser.getDust(nations.get(j).getIdx()) * 10;
				score -= minus;
				ser.updateScore(new ForScore(nations.get(j).getIdx(), score));
			}

			List<ForScore> finallist = new ArrayList<ForScore>();
			for (int j = 0; j < nations.size(); j++) {
				finallist.add(new ForScore(nations.get(j).getIdx(), ser.getScore(nations.get(j).getIdx())));
			}

			Collections.sort(finallist, new Comparator<ForScore>() {
				@Override
				public int compare(ForScore o1, ForScore o2) {
					return o1.getScore() - o2.getScore();
				}
			});

			result = new LinkedList<>();
			for (int i = 0; i < 4; i++) {
				int finalScore = 0;
				finalScore += lig < 50 ? 5 : 10;
				finalScore += nations.get(i).getTemp() < 22 ? 1 : 0;
				finalScore = finalScore == 5 ? 3 : finalScore == 10 ? 1 : finalScore == 6 ? 4 : 2;
				ser.updateType(new ForScore(finallist.get(i).getIdx(), finalScore));
				result.add(finallist.get(i).getIdx());
			}

			ArrayList<Integer> gradeGroup = haeun();
			if (gradeGroup.size() < 4) {
				ser.updateshowandflag(2);
				ser.updateshowandflag(3);
				ser.updateshowandflag(4);
				gradeGroup = haeun();
			}

			Random rand = new Random();
			for (int h = 0; h < 4; h++) {
				int randomIdx = rand.nextInt(gradeGroup.size());
				Integer randomElement = gradeGroup.get(randomIdx);
				float elementTemp = nMonth == 1 ? li.get(randomElement).getTem1(): nMonth == 2 ? li.get(randomElement).getTem2()
								: nMonth == 3 ? li.get(randomElement).getTem3(): nMonth == 4 ? li.get(randomElement).getTem4(): nMonth == 5 ? li.get(randomElement).getTem5()
								: nMonth == 6 ? li.get(randomElement).getTem6(): nMonth == 7 ? li.get(randomElement).getTem7(): nMonth == 8 ? li.get(randomElement).getTem8()
								: nMonth == 9 ? li.get(randomElement).getTem9(): nMonth == 10? li.get(randomElement).getTem10(): nMonth == 11 ? li.get(randomElement).getTem11()
								: li.get(randomElement).getTem12();
				int finalScore = 0;
				finalScore += lig < 50 ? 5 : 10;
				finalScore += elementTemp < 22 ? 1 : 0;
				finalScore = finalScore == 5 ? 3 : finalScore == 10 ? 1 : finalScore == 6 ? 4 : 2;
				ser.updateType(new ForScore(randomElement, finalScore));
				result.add(randomElement);
				gradeGroup.remove(randomIdx);
			}
			System.out.println("길고 긴 weight()의 끝");
			System.out.println("==============");
		} catch (Exception e) {
			System.out.println("!!!weight() ERROR!!!");
			System.out.println(e.getMessage());
			return null;
		}
		return result;
	}
	
	/** random()에 넣을 모든 나라상품 값 */
	public ArrayList<Integer> haeun() {
		ArrayList<Integer> gradeGroup = new ArrayList<>();
		List<Nation> everyNation = ser.selectNations();
		for (int i = 0; i < everyNation.size(); i++) {
			String idx = everyNation.get(i).getIdx();
			if (ser.getFlag(idx) == 1)
				continue;
			gradeGroup.add(Integer.parseInt(idx));
		}
		return gradeGroup;
	}

	/** 센서값을 받아 거기에 맞는 추천 나라를 객체 배열로 전송한다. @throws JsonProcessingException */
	@GetMapping("/sensor/reco")
	@ApiOperation(value = "임베디드 센서 값을 통해 추천 나라를 프론트에 전송합니다.")
	public @ResponseBody ResponseEntity<Map<String, Object>> selectnation() throws JsonProcessingException {
		ResponseEntity<Map<String, Object>> re = null;
		Map<String, Object> result = new HashMap<>();
		try {
			List<Integer> nation = weightcal();
			System.out.println("안녕하세요. 추천해 드릴 나라의 idx 번호는 다음과 같습니다.");
			System.out.println(nation);
			checkshowcnt(nation);
			System.out.println("나라에 대한 객체의 show cnt를 갱신 완료했습니다.");

			List<Map<String, Object>> Countrylist = new LinkedList<>();

			for (int idx = 0; idx < nation.size(); idx++) {
				int nationId = nation.get(idx);
				int type = ser.getType(nationId);
				List<String> imgs = ser.getImgs(nationId);
				List<String> modalContents = ser.getModalcontents(nationId);

				Map<String, Integer> map = new HashMap<String, Integer>();
				map.put("nationidx", nationId);
				map.put("type", type);

				Sendtofront stf = ser.getInfo(map);
				stf.setImgs(imgs);
				stf.setModalContents(modalContents);

				Map<String, Object> data = new HashMap<String, Object>();
				data.put("id", stf.getIdx());
				data.put("en_name", stf.getEn_name());
				data.put("name", stf.getKo_name());
				data.put("content", stf.getSpeech());
				data.put("thumbnail", stf.getUrl());

				SimpleDateFormat monthformat = new SimpleDateFormat("MM");
				Date time = new Date();
				int month = Integer.parseInt(monthformat.format(time));

				List<Map<String, Object>> detail = new LinkedList<>();

				for (int j = 0; j < imgs.size(); j++) {
					Map<String, Object> d = new HashMap<String, Object>();
					d.put("id", j);
					d.put("en_name", stf.getEn_name());
					d.put("name", stf.getKo_name());
					d.put("price", stf.getPrice());
					d.put("img", imgs.get(j));
					d.put("content", modalContents.get(j));
					switch (month) {
					case 1:
						d.put("temp", stf.getTem1());
						d.put("humid", stf.getHum1());
						break;
					case 2:
						d.put("temp", stf.getTem2());
						d.put("humid", stf.getHum2());
						break;
					case 3:
						d.put("temp", stf.getTem3());
						d.put("humid", stf.getHum3());
						break;
					case 4:
						d.put("temp", stf.getTem4());
						d.put("humid", stf.getHum4());
						break;
					case 5:
						d.put("temp", stf.getTem5());
						d.put("humid", stf.getHum5());
						break;
					case 6:
						d.put("temp", stf.getTem6());
						d.put("humid", stf.getHum6());
						break;
					case 7:
						d.put("temp", stf.getTem7());
						d.put("humid", stf.getHum7());
						break;
					case 8:
						d.put("temp", stf.getTem8());
						d.put("humid", stf.getHum8());
						break;
					case 9:
						d.put("temp", stf.getTem9());
						d.put("humid", stf.getHum9());
						break;
					case 10:
						d.put("temp", stf.getTem10());
						d.put("humid", stf.getHum10());
						break;
					case 11:
						d.put("temp", stf.getTem11());
						d.put("humid", stf.getHum11());
						break;
					case 12:
						d.put("temp", stf.getTem12());
						d.put("humid", stf.getHum12());
						break;
					}
					detail.add(d);
				}
				data.put("details", detail);
				Countrylist.add(data);
			}
			result.put("datas", Countrylist);
			System.out.println("자, 이제 아래와 같은 정보를 보내드릴게요.");
			System.out.println(Countrylist);
			System.out.println("==============");
			re = new ResponseEntity<>(result, HttpStatus.OK);
		} catch (Exception e) {
			result.put("resmsg", e.getMessage());
			System.out.println(e.getMessage());
			re = new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
		}
		return re;
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

	/** 보여지는 나라에 대한 카운트를 하는 메소드 */
	public void updateshowcnt(List<Integer> nationIdx) {
		for (int i = 0; i < nationIdx.size(); i++) {
			int idx = nationIdx.get(i);
			ser.updateShowcnt(idx);
		}
	}

	/** 나라의 showcnt 검증하는 메소드 */
	public void checkshowcnt(List<Integer> nationIdx) {
		System.out.println("보여드릴 나라 => " + nationIdx + "에 대한 showcnt 증가입니다.");
		updateshowcnt(nationIdx);
		System.out.println("또한, nation flag를 검사하여 갱신합니다.");
		for (int i = 0; i < nationIdx.size(); i++) {
			int limit = manser.getVolume(nationIdx.get(i));
			int volume = ser.selectShowcnt(nationIdx.get(i));
			if (volume >= limit) {
				ser.updateFlag(nationIdx.get(i));
			}
		}
		System.out.println("==============");
	}

	/** 나라 전체 정보를 보내는 메소드 */
	@GetMapping("/all")
	public @ResponseBody ResponseEntity<Map<String, Object>> selectAllnationdetail() {
		ResponseEntity<Map<String, Object>> re = null;
		Map<String, Object> result = new HashMap<String, Object>();
		List<Map<String, Object>> Countrylist = new LinkedList<>();

		for (int idx = 1; idx <= 20; idx++) {
			Map<String, Object> con = new HashMap<String, Object>();
			Nation nation = ser.getNationdetail(idx);

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

			Countrylist.add(con);
		}

		result.put("AllNationDatas", Countrylist);
		re = new ResponseEntity<>(result, HttpStatus.OK);
		return re;
	}

	/** 상담 정보를 받아 저장하는 메소드 */
	@PostMapping("/counsel")
	public @ResponseBody ResponseEntity<Map<String, Object>> updateCounsel(@RequestBody Counsel counvalue) {
		ResponseEntity<Map<String, Object>> re = null;
		Map<String, Object> result = new HashMap<String, Object>();
		try {
			System.out.println(counvalue.toString());
			ser.updateCounsel(counvalue.getAge(), counvalue.getName(), counvalue.getEmail(), counvalue.getTel(),
					counvalue.getDate(), counvalue.getText());
			re = new ResponseEntity<>(result, HttpStatus.OK);
		} catch (Exception e) {
			re = new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
		}
		return re;
	}

}
