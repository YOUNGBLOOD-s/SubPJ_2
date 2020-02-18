package com.yb.rest.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yb.rest.dao.IStaDao;
import com.yb.rest.vo.Click;

@Service
public class StaServiceImpl implements IStaService{
	
	@Autowired
	IStaDao repo;

	@Override
	public List<Click> getDateList(Map map) {
		return repo.getDateList(map);
	}

	@Override
	public List<Integer> selectAllNationIdxs(String username) {
		return repo.selectAllNationIdxs(username);
	}

	@Override
	public int getClickSum(int nationIdx) {
		return repo.getClickSum(nationIdx);
	}

	@Override
	public int getQrSum(int nationIdx) {
		return repo.getQrSum(nationIdx);
	}
	
	
}
