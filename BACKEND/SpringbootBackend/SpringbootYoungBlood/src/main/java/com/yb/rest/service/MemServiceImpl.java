package com.yb.rest.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yb.rest.dao.IMemDao;

@Service
public class MemServiceImpl implements IMemService{
	@Autowired
	IMemDao repo;

	@Override
	public String getPassword(String username) {
		return repo.getPassword(username);
	}
	
	
}
