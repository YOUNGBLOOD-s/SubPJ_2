package com.yb.rest.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yb.rest.dao.IManDao;

@Service
public class ManServiceImpl implements IManService{
	
	@Autowired
	IManDao repo;
	
	@Override
	public int getIdx(String username) {
		return repo.getIdx(username);
	}
	
}
