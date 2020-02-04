package com.yb.rest.controller;

import java.util.ArrayList;
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
import com.yb.rest.vo.Keyboard;
import com.yb.rest.vo.Member;
import com.yb.rest.vo.Nation;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ChatbotController {

	@Autowired
    private IChatService ser;
	
	@PostMapping("/keyboard")
	public Keyboard keyboard() {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("message", "change test");
		map.put("name", "희수");
		map.put("position", "챗봇");
		Keyboard keyboard=new Keyboard(map);
		return keyboard;
	}
	
	@PostMapping("/numbering")
	public Keyboard numbering(@RequestBody Map<String,Object> userRequest) {
		System.out.println(userRequest.get("action"));
		Map<String, Object> map = new HashMap<String, Object>();
		System.out.println("들어와?!!!");
		try {
//			System.out.println(action.get("params").toString()+"?");
		} catch(Exception e) {
			System.out.println(e.getMessage());
			System.out.println("오류남");
		}
		Keyboard keyboard=new Keyboard(map);
		return keyboard;
	}
	
	@PostMapping("/asia")
	public Map<String,Object> asia() {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Nation> li=ser.findContinent(Integer.toString(4));
		
		Map<String,Object> resultMap=new HashMap<String, Object>();
		List<String> nationNames=new ArrayList<String>();
		for (int i = 0; i < li.size(); i++) {
			nationNames.add(li.get(i).getKo_name());
		}
		map.put("result", nationNames);
		return map;
	}
	
	@PostMapping("/europe")
	public Map<String,Object> europe() {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Nation> li=ser.findContinent(Integer.toString(1));
		
		Map<String,Object> resultMap=new HashMap<String, Object>();
		List<String> nationNames=new ArrayList<String>();
		for (int i = 0; i < li.size(); i++) {
			nationNames.add(li.get(i).getKo_name());
		}
		map.put("result", nationNames);
		return map;
	}
	
	@PostMapping("/pacificocean")
	public Map<String,Object> pacificocean() {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Nation> li=ser.findContinent(Integer.toString(2));
		
		Map<String,Object> resultMap=new HashMap<String, Object>();
		List<String> nationNames=new ArrayList<String>();
		for (int i = 0; i < li.size(); i++) {
			nationNames.add(li.get(i).getKo_name());
		}
		map.put("result", nationNames);
		return map;
	}
	
	@PostMapping("/africa")
	public Map<String,Object> africa() {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Nation> li=ser.findContinent(Integer.toString(4));
		
		Map<String,Object> resultMap=new HashMap<String, Object>();
		List<String> nationNames=new ArrayList<String>();
		for (int i = 0; i < li.size(); i++) {
			nationNames.add(li.get(i).getKo_name());
		}
		map.put("result", nationNames);
		return map;
	}
	
	@PostMapping("/northamerica")
	public Map<String,Object> northamerica() {
		Map<String, Object> map = new HashMap<String, Object>();
		List<Nation> li=ser.findContinent(Integer.toString(5));
		
		Map<String,Object> resultMap=new HashMap<String, Object>();
		List<String> nationNames=new ArrayList<String>();
		for (int i = 0; i < li.size(); i++) {
			nationNames.add(li.get(i).getKo_name());
		}
		map.put("result", nationNames);
		return map;
	}
}
