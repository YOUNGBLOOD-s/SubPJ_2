package com.yb.rest.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yb.rest.vo.Keyboard;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class ChatbotController {

	@GetMapping("/keyboard")
	public Keyboard keyboard() {
		Keyboard keyboard=new Keyboard(new String[] {"희수 최고","기동이 바보","밥 먹을때 귀여운 용선","웹마스터 혁준","소심한척 하는 하은이"});
		return keyboard;
	}
}
