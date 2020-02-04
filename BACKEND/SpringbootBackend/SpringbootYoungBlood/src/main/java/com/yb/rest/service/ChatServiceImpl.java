package com.yb.rest.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yb.rest.dao.IAdDao;
import com.yb.rest.dao.IChatDao;
import com.yb.rest.vo.Nation;

@Service
public class ChatServiceImpl implements IChatService {

	@Autowired
	IChatDao repo;
	
	@Override
	public List<Nation> findContinent(String num) {
		// TODO Auto-generated method stub
		return repo.findContinent(num);
	}

}
