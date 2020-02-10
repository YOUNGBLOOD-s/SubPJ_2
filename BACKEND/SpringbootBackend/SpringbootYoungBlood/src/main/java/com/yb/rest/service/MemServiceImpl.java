package com.yb.rest.service;

import java.util.ArrayList;
import java.util.List;
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
	public void registerMem(String username, String password, String company) {
		repo.registerMem(username, password, company);
	}

	@Override
	public List<Member> listMem() {
		return repo.listMem();
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
	public void updateGrade(String username, int grade) {
		repo.updateGrade(username, grade);
	}

	@Override
	public void DeleteMem(int idx) {
		repo.DeleteMem(idx);
	}

	@Override
	public String getSHA256(String plain) {
		return repo.getSHA256(plain);
	}

}
