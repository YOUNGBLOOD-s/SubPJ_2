package com.yb.rest.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yb.rest.vo.Keyboard;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ChatbotController {

	@PostMapping("/keyboard")
	public Keyboard keyboard() {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("message", "change test");
		map.put("name", "희수");
		map.put("position", "챗봇");
		Keyboard keyboard=new Keyboard(map);
		return keyboard;
	}
}
