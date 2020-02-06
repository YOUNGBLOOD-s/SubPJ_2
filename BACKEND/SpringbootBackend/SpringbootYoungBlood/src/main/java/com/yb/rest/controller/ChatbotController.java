package com.yb.rest.controller;

import java.util.ArrayList;
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
		System.out.println("들어와?!!!");
		try {
//			System.out.println(action.get("params").toString()+"?");
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
		// System.out.println(li.toString()+" 뽑혔니?");
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < li.size(); i++) {
			sb.append(li.get(i).getKo_name()).append("\n");
			sb.append("http://52.78.218.79:8282/detail/" + li.get(i).getIdx()).append("\n");

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
			sb.append("http://52.78.218.79:8282/detail/" + li.get(i).getIdx()).append("\n");
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
			sb.append("http://52.78.218.79:8282/detail/" + li.get(i).getIdx()).append("\n");
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
			sb.append("http://52.78.218.79:8282/detail/" + li.get(i).getIdx()).append("\n");
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
			sb.append("http://52.78.218.79:8282/detail/" + li.get(i).getIdx()).append("\n");
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
			sb.append("http://52.78.218.79:8282/detail/" + tmp.getIdx()).append("\n");
		}
		map.put("result", sb);
		return map;
	}

	class date{
		private String idx;
		private String  s_date;
		private String f_date;
		private String url;
		public date(String idx, String s_date, String f_date, String url) {
			super();
			this.idx = idx;
			this.s_date = s_date;
			this.f_date = f_date;
			this.url = url;
		}
	}
	
	@PostMapping("/latest")
	public Map<String, Object> latest() {
		Map<String, Object> map = new HashMap<String, Object>();

		List<Nation> li = nationSer.selectNations();
		List<date> s_dateLi=new ArrayList<date>();
		System.out.println();
		for (int i = 0; i < li.size(); i++) {
			s_dateLi.add(new date(li.get(i).getIdx(),li.get(i).getS_date(),li.get(i).getF_date(),li.get(i).getUrl()));
		}
		
		Collections.sort(s_dateLi,new Comparator<date>() {

			@Override
			public int compare(date o1, date o2) {
				// TODO Auto-generated method stub
				return 0;
			}
		});
		
		StringBuilder sb = new StringBuilder();
		map.put("result", sb);
		return map;
	}
}
