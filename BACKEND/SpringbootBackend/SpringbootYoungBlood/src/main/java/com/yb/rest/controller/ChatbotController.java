package com.yb.rest.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yb.rest.dao.IChatDao;
import com.yb.rest.service.IAdService;
import com.yb.rest.service.IChatService;
import com.yb.rest.vo.Click;
import com.yb.rest.vo.Keyboard;
import com.yb.rest.vo.Member;
import com.yb.rest.vo.Nation;
import com.yb.rest.vo.Date;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ChatbotController {

	@Autowired
	private IChatService ser;

	@Autowired
	private IAdService nationSer;

	@PostMapping("/numbering")
	public Keyboard numbering(@RequestBody Map<String, Object> userRequest) {
		System.out.println(userRequest.get("action"));
		Map<String, Object> map = new HashMap<String, Object>();
		try {
		} catch (Exception e) {
			System.out.println(e.getMessage());
			System.out.println("오류남");
		}
		Keyboard keyboard = new Keyboard(map);
		return keyboard;
	}

	@PostMapping("/asia")
	public Map<String, Object> asia() {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Nation> li = ser.findContinent(Integer.toString(4));
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < li.size(); i++) {
			sb.append(li.get(i).getKo_name()).append("\n");
			sb.append("http://i02c110.p.ssafy.io:8282/detail/" + li.get(i).getIdx()).append("\n");
		}
		map.put("result", sb);
		return map;
	}

	@PostMapping("/europe")
	public Map<String, Object> europe() {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Nation> li = ser.findContinent(Integer.toString(1));

		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < li.size(); i++) {
			sb.append(li.get(i).getKo_name()).append("\n");
			sb.append("http://i02c110.p.ssafy.io:8282/detail/" + li.get(i).getIdx()).append("\n");
		}
		map.put("result", sb);
		return map;
	}

	@PostMapping("/pacificocean")
	public Map<String, Object> pacificocean() {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Nation> li = ser.findContinent(Integer.toString(2));
		System.out.println(li.size() + "사이즈 보기");
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < li.size(); i++) {
			sb.append(li.get(i).getKo_name()).append("\n");
			System.out.println(li.get(i).getKo_name());
			sb.append("http://i02c110.p.ssafy.io:8282/detail/" + li.get(i).getIdx()).append("\n");
		}
		map.put("result", sb);
		return map;
	}

	@PostMapping("/africa")
	public Map<String, Object> africa() {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Nation> li = ser.findContinent(Integer.toString(3));

		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < li.size(); i++) {
			sb.append(li.get(i).getKo_name()).append("\n");
			sb.append("http://i02c110.p.ssafy.io:8282/detail/" + li.get(i).getIdx()).append("\n");
		}
		map.put("result", sb);
		return map;
	}

	@PostMapping("/northamerica")
	public Map<String, Object> northamerica() {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Nation> li = ser.findContinent(Integer.toString(5));

		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < li.size(); i++) {
			sb.append(li.get(i).getKo_name()).append("\n");
			sb.append("http://i02c110.p.ssafy.io:8282/detail/" + li.get(i).getIdx()).append("\n");
		}
		map.put("result", sb);
		return map;
	}

	@PostMapping("/favorite")
	public Map<String, Object> favorite() {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Click> li = ser.selectFavorite();

		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < li.size(); i++) {
			Nation tmp = nationSer.getNationdetail(Integer.parseInt(li.get(i).getNation()));
			sb.append(tmp.getKo_name()).append("\n");
			sb.append("http://i02c110.p.ssafy.io:8282/detail/" + tmp.getIdx()).append("\n");
		}
		map.put("result", sb);
		return map;
	}


	@PostMapping("/latest")
	public Map<String, Object> latest() {
		Map<String, Object> map = new HashMap<String, Object>();

		List<Nation> li = nationSer.selectNations();
		List<Date> s_dateLi = new ArrayList<Date>();

		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		Calendar time = Calendar.getInstance();
		String today = format.format(time.getTime());
		System.out.println(today);
		int nmonth = Integer.parseInt(today.substring(5, 7));
		int nday = Integer.parseInt(today.substring(8, 10));

		for (int i = 0; i < li.size(); i++) {
			String comStr = li.get(i).getS_date();
			int cmonth = Integer.parseInt(comStr.substring(5, 7));
			int cday = Integer.parseInt(comStr.substring(8, 10));
			if (nmonth <= cmonth && nday <= cday) {
				System.out.println("cmonth: "+cmonth+"cday: "+cday+"인데 들어와");
				s_dateLi.add(new Date(li.get(i).getIdx(), li.get(i).getKo_name(),li.get(i).getS_date(), li.get(i).getF_date(), li.get(i).getUrl()));
			}
		}

		Collections.sort(s_dateLi, new Comparator<Date>() {
			@Override
			public int compare(Date o1, Date o2) {
				return o1.getS_date().compareTo(o2.getS_date());
			}
		});
		
		StringBuilder sb = new StringBuilder();
		sb.append(s_dateLi.get(0).getKo_name()).append("\n\n");
		sb.append("출발 일자: "+s_dateLi.get(0).getS_date()).append("\n");
		sb.append("도착 일자: "+s_dateLi.get(0).getF_date()).append("\n\n");
		
		sb.append("http://i02c110.p.ssafy.io:8282/detail/"+s_dateLi.get(0).getIdx()).append("\n");
		map.put("result", sb);
		return map;
	}
}