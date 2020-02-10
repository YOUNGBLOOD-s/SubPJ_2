package com.yb.rest.service;

import java.util.ArrayList;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yb.rest.dao.IMemDao;
import com.yb.rest.vo.Member;

@Service
public class MemServiceImpl implements IMemService{
	@Autowired
	IMemDao repo;

	@Override
	public String getPassword(String username) {
		return repo.getPassword(username);
	}
	
	@Override
	public boolean registerMem(String username, String password, String company, int grade) {
		boolean res = repo.registerMem(username, password, company, grade);
		return res;
	}

	@Override
	public ArrayList<Member> listMem() {
		ArrayList<Member> listMem = repo.listMem();
		return listMem;
	}

	@Override
	public Member InfoMem(String username) {
		Member infoMem = repo.InfoMem(username);
		return infoMem;
	}

	@Override
	public void UpdateMem(String username, String password, String company, int grade) {
		repo.UpdateMem(username, password, company, grade);
	}
	
	@Override
	public void UpdateMem(String username, String password, String company) {
		repo.UpdateMem(username, password, company);
	}
	

	@Override
	public void DeleteMem(String username) {
		repo.DeleteMem(username);
	}

	@Override
	public void updateGrade(Map map) {
		repo.updateGrade(map);
	}

	@Override
	public void DeleteMem(int idx) {
		repo.DeleteMem(idx);
	}

}
