package com.yb.rest.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yb.rest.dao.IAdDao;
import com.yb.rest.vo.Sendtofront;
import com.yb.rest.vo.Sensor;


@Service
public class AdServiceImpl implements IAdService {
	
	@Autowired
	IAdDao repo;
	
	@Override
	public List<String> getImgs(int id) {
		return repo.getImgs(id);
	}

	@Override
	public List<String> getModalcontents(int id) {
		return repo.getModalcontents(id);
	}

	@Override
	public Sendtofront getInfo(Map value) {
		return repo.getInfo(value);
	}

	//희수 2020-01-23
	@Override
	public void insertSensor(Sensor sen) {
		// TODO Auto-generated method stub
		repo.insertSen(sen);
	}

}
