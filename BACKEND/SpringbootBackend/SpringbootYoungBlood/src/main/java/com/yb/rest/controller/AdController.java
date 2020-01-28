package com.yb.rest.controller;

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
import com.yb.rest.vo.Nation;
import com.yb.rest.vo.QRcode;
import com.yb.rest.vo.ForScore;
import com.yb.rest.vo.Monthtb;
import com.yb.rest.vo.Receivefromsensor;
import com.yb.rest.vo.Sendtofront;
import com.yb.rest.vo.Sensor;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class AdController {

	@Autowired
	private IAdService ser;

	@ExceptionHandler(Exception.class)
	public void ExceptionMethod(Exception e) {

	}

	/**
	 * 센서값을 받는다. 
	 * @throws JsonProcessingException
	 */
	@GetMapping("/sensor/{temp}/{hum}")
    public void sensor(@PathVariable String temp, @PathVariable String hum) throws JsonProcessingException {
        System.out.println(temp);
        System.out.println(hum);
        float tmp = Float.parseFloat(temp); // 온도 값
        float hu = Float.parseFloat(hum); // 습도 값
        Sensor sen = new Sensor(tmp, hu);
        // sensor data UPDATE
        ser.insertSensor(sen);
        // 현재 월 가져옴
        Calendar calender = new GregorianCalendar(Locale.KOREA);
        int nMonth = calender.get(Calendar.MONTH) + 1;
        List<Monthtb> li = ser.selectAll();
        ArrayList<Sensor> nations = new ArrayList<>();
        // 1. 22도 미만 => 높은 온도 쳐다보기 / 22도 이상 => 낮은 온도 쳐다보기
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
        // INSERT
        // 온도: 현재 온도와 5도 차이 이하 10점, 5도 이상 10 미만 20점 ...
        for (int j = 0; j < nations.size(); j++) {
            int gap = (int) Math.abs(tmp - nations.get(j).getTemp());
            ser.updateScore(new ForScore(nations.get(j).getIdx(), gap / 5 == 0 ? 10 : (gap / 5 * 10)));
            System.out.println("온도 이후 : " + nations.get(j).getIdx() + " " + ser.getScore(nations.get(j).getIdx()));
        }
        // 습도: 오름차순으로, 5개 묶음으로 -10,-20... 점수 할당(즉, 습도 높을수록 점수 깎이는거야)
        Collections.sort(nations, new Comparator<Sensor>() {
            @Override
            public int compare(Sensor o1, Sensor o2) {
                // TODO Auto-generated method stub
                return (int) (o1.getHumid() - o2.getHumid());
            }
        });
        for (int j = 0; j < nations.size(); j++) {
            System.out.println("*" + nations.get(j).toString());
        }
        for (int j = 0; j < nations.size(); j++) {
            int originScore = ser.getScore(nations.get(j).getIdx());
            int minus = j / 5 == 0 ? 10 : (j / 5) * (10);
            originScore -= minus;
            System.out.println(nations.get(j).getIdx() + "에서 " + minus + "감소합니다");
            ser.updateScore(new ForScore(nations.get(j).getIdx(), originScore));
            System.out.println(nations.get(j).getIdx() + "의 점수가 요렇게 변함 " + originScore);
        }
        // 미세먼지로 점수화
        for (int j = 0; j < nations.size(); j++) {
            int score = ser.getScore(nations.get(j).getIdx());
            int minus = ser.getDust(nations.get(j).getIdx()) * 10;
            score-=minus;
            ser.updateScore(new ForScore(nations.get(j).getIdx(),score));
        }
        
        // 최종 나라+점수 뽑기
        List<ForScore> finallist=new ArrayList<ForScore>();
        for (int j = 0; j <nations.size(); j++) {
            finallist.add(new ForScore(nations.get(j).getIdx(), ser.getScore(nations.get(j).getIdx())));
        }
        
        //조도와 온도로 사진 phototype 선택
        List<Receivefromsensor> nation = new LinkedList<>();
        selectnation(nation);
    }

	/**
	 * 센서값을 받아 거기에 맞는 추천 나라를 객체 배열로 전송한다.
	 * @throws JsonProcessingException
	 */
	public @ResponseBody ResponseEntity<Map<String, Object>> selectnation(List<Receivefromsensor> nation)
			throws JsonProcessingException {
		ResponseEntity<Map<String, Object>> re = null;
		Map<String, Object> result = new HashMap<>();
		List<Sendtofront> Countrylist = new LinkedList<>();
		for(int idx=0; idx<nation.size(); idx++) {
			
			int id = Countrylist.get(idx).getIdx();
			List<String> imgs = ser.getImgs(id);
			List<String> modalContents = ser.getModalcontents(id);

			// join
			Map<String, Integer> map = new HashMap<String, Integer>();
			map.put("nationidx", nation.get(idx).getNationidx());
			map.put("type", nation.get(idx).getType());
			Sendtofront stf = ser.getInfo(map);

			// setting & json(map)
			stf.setImgs(imgs);
			stf.setModalContents(modalContents);
			Countrylist.add(stf);

		}

		// send to front
		result.put("datas", Countrylist);
		re = new ResponseEntity<>(result, HttpStatus.OK);
		return re;
	}

	@GetMapping("/detail/{id}")
	public @ResponseBody ResponseEntity<Map<String, Object>> selectnation(@PathVariable String id) {
		int idx = Integer.parseInt(id);
		ResponseEntity<Map<String, Object>> re = null;
		Map<String, Object> result = new HashMap<>();
		
		//type 계산하기
		int type = 1;
		List<QRcode> routelist = ser.getRoutes(idx);
		
		
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("nationidx", idx);
		map.put("type", type);
		Nation nation = ser.getNationdetail(map);
		System.out.println(nation);
		
		//send to front
		result.put("id", nation.getIdx());
		result.put("name", nation.getName());
		result.put("thumbnail", nation.getUrl());
		result.put("price", nation.getPrice());
		if(nation.getContinents().equals("1")) {
			result.put("category", "Europe");
		} else if(nation.getContinents().equals("2")) {
			result.put("category", "Africa");
		} else if(nation.getContinents().equals("3")) {
			result.put("category", "Asia");
		} else {
			result.put("category", "North America");
		}
		result.put("routes", routelist);
		re = new ResponseEntity<>(result, HttpStatus.OK);
		return re;
	}
}
