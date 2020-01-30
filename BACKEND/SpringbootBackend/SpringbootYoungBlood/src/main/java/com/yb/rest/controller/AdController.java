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
import com.yb.rest.vo.Route;
import com.yb.rest.vo.Sendtofront;
import com.yb.rest.vo.ForScore;
import com.yb.rest.vo.Monthtb;
import com.yb.rest.vo.Nation;
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
     * 
     * @throws JsonProcessingException
     */
    @GetMapping("/sensor/{temp}/{hum}/{light}/{dust}")
    public void sensor(@PathVariable String temp, @PathVariable String hum, @PathVariable String light,
            @PathVariable String dust) throws JsonProcessingException {
    	float tmp = Float.parseFloat(temp);
        float hu = Float.parseFloat(hum);
        float dus = Float.parseFloat(dust);
        float lig = Float.parseFloat(light);
        System.out.println("온도: "+tmp+"습도: "+hum+"미세먼지: "+dus);
        Sensor sen = new Sensor(tmp, hu, dus, lig);
        System.out.println("==============");
        System.out.println("안녕하세요. 센서값을 전광판으로부터 받았습니다. 받은 정보는 다음과 같습니다.");
        System.out.println(sen.toString());
        System.out.println("==============");
        ser.updateSensor(sen);
    }

    public List<Integer> weightcal() {
        System.out.println("==============");
        System.out.println("조금만 기다려주세요. 가중치를 계산 중 입니다.");
        System.out.println("==============");
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

        // INSERT
        // 온도: 현재 온도와 5도 차이 이하 10점, 5도 이상 10 미만 20점 ...
        for (int j = 0; j < nations.size(); j++) {
            int gap = (int) Math.abs(tmp - nations.get(j).getTemp());
            ser.updateScore(new ForScore(nations.get(j).getIdx(), gap / 5 == 0 ? 10 : (gap / 5 * 10)));
            // System.out.println("온도 이후 : " + nations.get(j).getIdx() + " " +
            // ser.getScore(nations.get(j).getIdx()));
        }
        // 습도: 오름차순으로, 5개 묶음으로 -10,-20... 점수 할당(즉, 습도 높을수록 점수 깎이는거야)
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
        // 미세먼지로 점수화
        for (int j = 0; j < nations.size(); j++) {
            int score = ser.getScore(nations.get(j).getIdx());
            int minus = ser.getDust(nations.get(j).getIdx()) * 10;
            score -= minus;
            ser.updateScore(new ForScore(nations.get(j).getIdx(), score));
        }
        // 최종 나라+점수 뽑기
        List<ForScore> finallist = new ArrayList<ForScore>();
        for (int j = 0; j < nations.size(); j++) {
            finallist.add(new ForScore(nations.get(j).getIdx(), ser.getScore(nations.get(j).getIdx())));
        }
        // 우선 나라 3개 보내는 것으로 test
        Collections.sort(finallist, new Comparator<ForScore>() {
            @Override
            public int compare(ForScore o1, ForScore o2) {
                return o1.getScore() - o2.getScore();
            }
        });

        // 조도와 온도로 사진 phototype 선택=>type db에 저장하기
        List<Integer> nation = new LinkedList<>();
        for (int i = 0; i < 3; i++) {
            int finalScore = 0;
            // 조도 임의로 50이상이면 밝다(10). 50미만이면 어둡다로 처리(5)
            finalScore += lig < 50 ? 5 : 10;
            // 저온도(1) 고온도(0)
            finalScore += nations.get(i).getTemp() < 22 ? 1 : 0;
            finalScore = finalScore == 5 ? 3 : finalScore == 10 ? 1 : finalScore == 6 ? 4 : 2;
            ser.updateType(new ForScore(finallist.get(i).getIdx(), finalScore));

            nation.add(finallist.get(i).getIdx());
        }
        return nation;
    }

	/**
	 * 센서값을 받아 거기에 맞는 추천 나라를 객체 배열로 전송한다.
	 * @throws JsonProcessingException
	 */
	@GetMapping("/sensor/reco")
	public @ResponseBody ResponseEntity<Map<String, Object>> selectnation() throws JsonProcessingException {

		//가중치 계산 algorithm
		List<Integer> nation = weightcal();
        System.out.println("==============");
		System.out.println("안녕하세요. 추천해 드릴 나라의 idx 번호는 다음과 같습니다.");
		System.out.println(nation);

        ResponseEntity<Map<String, Object>> re = null;
        Map<String, Object> result = new HashMap<>();
        List<Map<String, Object>> Countrylist = new LinkedList<>();

        for (int idx = 0; idx < nation.size(); idx++) {
            int nationId = nation.get(idx);
            System.out.println(nationId);
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
            data.put("name", stf.getName());
            data.put("content", stf.getSpeech());
            data.put("thumbnail", stf.getUrl());

            SimpleDateFormat monthformat = new SimpleDateFormat("MM");
            Date time = new Date();
            int month = Integer.parseInt(monthformat.format(time));

            Map<String, Object> d = new HashMap<String, Object>();

            for (int j = 0; j < imgs.size(); j++) {
                d.put("id", stf.getIdx());
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
            }
            data.put("details", d);
            Countrylist.add(data);
        }

        result.put("datas", Countrylist);
        System.out.println("자, 이제 아래와 같은 정보를 보내드릴게요.");
        System.out.println(Countrylist);
        System.out.println("==============");
        re = new ResponseEntity<>(result, HttpStatus.OK);
        return re;
    }

    @GetMapping("/detail/{id}")
    public @ResponseBody ResponseEntity<Map<String, Object>> selectnation(@PathVariable String id) {
        
        System.out.println("==============");
        System.out.println("안녕하세요. 고객님이 요청하신 "+id+"번호에 해당하는 나라 상세정보를 조회해드릴게요.");
        
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

        // send to front
        result.put("id", nation.getIdx());
        result.put("name", nation.getName());
        result.put("dust", nation.getDust());
        result.put("clickcnt", nation.getClickcnt());
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
    	} catch(Exception e) {
    		re = new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
    	}
        System.out.println("전달이 완료됐습니다. 안녕히가세요!");
        System.out.println("==============");
        return re;
    }
}
