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
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.yb.rest.service.IAdService;
import com.yb.rest.service.IManService;
import com.yb.rest.vo.ForScore;
import com.yb.rest.vo.Image;
import com.yb.rest.vo.Monthtb;
import com.yb.rest.vo.Nation;
import com.yb.rest.vo.Route;
import com.yb.rest.vo.Sendtofront;
import com.yb.rest.vo.Sensor;

import io.swagger.annotations.ApiOperation;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class SensorController {
	
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
	public void sensor(@PathVariable String temp, @PathVariable String hum, @PathVariable String light,
			@PathVariable String dust) throws JsonProcessingException {
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
	@SuppressWarnings("finally")
	@GetMapping("/sensor/weightcal")
	@ApiOperation(value = "인자 num을 가지는 weightcal")
	public List<Integer> weightcal(int num) {
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
			// 습도 계산할때 미세먼지 값 까지 함께 처리하도록 합치기
			List<ForScore> finallist = new ArrayList<ForScore>();
			for (int j = 0; j < nations.size(); j++) {
				int idx = nations.get(j).getIdx();
				int originScore = ser.getScore(idx);
				int minus = j / 5 == 0 ? 10 : (j / 5) * (10); // 습도 마이너스 값
				minus += ser.getDust(idx) * 10; // 미세먼지 마이너스 값
				originScore -= minus;
				ser.updateScore(new ForScore(idx, originScore));
				// 최종 idx,점수 리스트에 바로 담기
				finallist.add(new ForScore(idx, ser.getScore(idx)));
			}

			Collections.sort(finallist, new Comparator<ForScore>() {
				@Override
				public int compare(ForScore o1, ForScore o2) {
					return o1.getScore() - o2.getScore();
				}
			});

			result = new LinkedList<>();
			//이부분을 num으로 바꿈
			for (int i = 0; i < num; i++) {
				int finalScore = 0;
				finalScore += lig < 50 ? 5 : 10;
				finalScore += nations.get(i).getTemp() < 22 ? 1 : 0;
				finalScore = finalScore == 5 ? 3 : finalScore == 10 ? 1 : finalScore == 6 ? 4 : 2;
				ser.updateType(new ForScore(finallist.get(i).getIdx(), finalScore));
				result.add(finallist.get(i).getIdx());
			}
			ArrayList<Integer> gradeGroup = haeun();
			//이부분을 num으로 바꿈
			if (gradeGroup.size() < num) {
				ser.updateshowandflag();
				gradeGroup = haeun();
			}
			Random rand = new Random();
			//이부분을 num으로 바꿈
			//센서 기반으로 뽑은 데이터 제외한 데이터 갯수
			for (int h = 0; h < num; h++) {
				int randomIdx = rand.nextInt(gradeGroup.size());
				int randomElement = gradeGroup.get(randomIdx) - 1;
				Monthtb m = ser.selectTemps(randomElement);
				float elementTemp = nMonth == 1 ? m.getTem1()
						: nMonth == 2 ? m.getTem2()
								: nMonth == 3 ? m.getTem3()
										: nMonth == 4 ? m.getTem4()
												: nMonth == 5 ? m.getTem5()
														: nMonth == 6 ? m.getTem6()
																: nMonth == 7 ? m.getTem7()
																		: nMonth == 8 ? m.getTem8()
																				: nMonth == 9 ? m.getTem9()
																						: nMonth == 10 ? m.getTem10()
																								: nMonth == 11
																										? m.getTem11()
																										: m.getTem12();

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
			return result;
		} catch (Exception e) {
			System.out.println("!!!weight() ERROR!!!");
			System.out.println(e);
			List<Integer> send = new LinkedList<>();
			//num*2로 바꿈
			for(int i=1; i<=num*2; i++) {
				send.add(i);
			}
			return send;
		}
	}
	
	//기존의 weightcal
	/** 가중치를 계산하는 메소드 */
	@SuppressWarnings("finally")
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
			// 습도 계산할때 미세먼지 값 까지 함께 처리하도록 합치기
			List<ForScore> finallist = new ArrayList<ForScore>();
			for (int j = 0; j < nations.size(); j++) {
				int idx = nations.get(j).getIdx();
				int originScore = ser.getScore(idx);
				int minus = j / 5 == 0 ? 10 : (j / 5) * (10); // 습도 마이너스 값
				minus += ser.getDust(idx) * 10; // 미세먼지 마이너스 값
				originScore -= minus;
				ser.updateScore(new ForScore(idx, originScore));
				// 최종 idx,점수 리스트에 바로 담기
				finallist.add(new ForScore(idx, ser.getScore(idx)));
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
				ser.updateshowandflag();
				gradeGroup = haeun();
			}
			Random rand = new Random();
			for (int h = 0; h < 4; h++) {
				int randomIdx = rand.nextInt(gradeGroup.size());
				int randomElement = gradeGroup.get(randomIdx) - 1;
				Monthtb m = ser.selectTemps(randomElement);
				float elementTemp = nMonth == 1 ? m.getTem1()
						: nMonth == 2 ? m.getTem2()
								: nMonth == 3 ? m.getTem3()
										: nMonth == 4 ? m.getTem4()
												: nMonth == 5 ? m.getTem5()
														: nMonth == 6 ? m.getTem6()
																: nMonth == 7 ? m.getTem7()
																		: nMonth == 8 ? m.getTem8()
																				: nMonth == 9 ? m.getTem9()
																						: nMonth == 10 ? m.getTem10()
																								: nMonth == 11
																										? m.getTem11()
																										: m.getTem12();

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
			System.out.println(e);
			List<Integer> list = ser.selectIdxs();
			List<Integer> send = new LinkedList<>();
			if (list.size() < 8) {
				for (int i = 0; i < list.size(); i++) {
					send.add(list.get(i));
				}
			} else {
				for (int i = 0; i < 8; i++) {
					send.add(list.get(i));
				}
			}
			return send;
		} finally {
			return result;
		}
	}

	/** random()에 넣을 모든 나라상품 값 */
	@GetMapping("/sensor/random")
	@ApiOperation(value = "random()에 넣을 모든 나라상품 값")
	public ArrayList<Integer> haeun() {
		ArrayList<Integer> gradeGroup = new ArrayList<>();
		List<Nation> everyNation = ser.selectNations();
		for (int i = 0; i < everyNation.size(); i++) {
			String idx = everyNation.get(i).getIdx();
			Monthtb mon = manser.monthInfo(Integer.parseInt(idx));
			List<Image> img = manser.imagesInfo(Integer.parseInt(idx));
			List<Route> rou = manser.contentsInfo(Integer.parseInt(idx));
			if (ser.getFlag(idx) == 1 || mon == null || img == null || rou == null) // flag==1 이미 다 횟수 사용함
				continue;
			gradeGroup.add(Integer.parseInt(idx));
		}
		return gradeGroup;
	}

	/** 센서값을 받아 거기에 맞는 추천 나라를 객체 배열로 전송한다. @throws JsonProcessingException */
	public @ResponseBody ResponseEntity<Map<String, Object>> selectnation(@PathVariable("num") int num) throws JsonProcessingException {
		ResponseEntity<Map<String, Object>> re = null;
		Map<String, Object> result = new HashMap<>();
		try {
			List<Integer> nation = weightcal(num);
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
			// System.out.println("자, 이제 아래와 같은 정보를 보내드릴게요.");
			// System.out.println(Countrylist);
			System.out.println("==============");
			re = new ResponseEntity<>(result, HttpStatus.OK);
		} catch (Exception e) {
			result.put("resmsg", e.getMessage());
			System.out.println(e.getMessage());
			re = new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
		}
		return re;
	}
	
	/** 센서값을 받아 거기에 맞는 추천 나라를 객체 배열로 전송한다. @throws JsonProcessingException */
	@GetMapping("/sensor/reco")
	@ApiOperation(value = "임베디드 센서 값을 통해 추천 나라를 프론트에 전송합니다.")
	public @ResponseBody ResponseEntity<Map<String, Object>> selectnation() throws JsonProcessingException {
		ResponseEntity<Map<String, Object>> re = null;
		Map<String, Object> result = new HashMap<>();
		try {
			int num = manser.selectRecoNumber();
			List<Integer> nation = weightcal(num);

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
			result.put("datasize", Countrylist.size());
			System.out.println("==============");
			re = new ResponseEntity<>(result, HttpStatus.OK);
		} catch (Exception e) {
			result.put("resmsg", e.getMessage());
			System.out.println(e.getMessage());
			re = new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
		}
		return re;
	}
	
	/** 나라의 showcnt 검증하는 메소드 */
	@GetMapping("/sensor/updateflag")
	@ApiOperation(value = "상품 별 show 횟수를 검증함")
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
	
	/** 보여지는 나라에 대한 카운트를 하는 메소드 */
	@GetMapping("/sensor/updateshowcnt")
	@ApiOperation(value = "상품 별 show 횟수를 갱신함")
	public void updateshowcnt(List<Integer> nationIdx) {
		for (int i = 0; i < nationIdx.size(); i++) {
			int idx = nationIdx.get(i);
			ser.updateShowcnt(idx);
		}
	}
}
