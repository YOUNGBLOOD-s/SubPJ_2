package com.yb.rest.service;

import java.util.ArrayList;

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
		// TODO Auto-generated method stub
		boolean res = repo.registerMem(username, password, company, grade);
		return res;
	}

	@Override
	public ArrayList<Member> listMem() {
		// TODO Auto-generated method stub
		ArrayList<Member> listMem = repo.listMem();
		return listMem;
	}

	@Override
	public Member InfoMem(String username) {
		// TODO Auto-generated method stub
		Member infoMem = repo.InfoMem(username);
		return infoMem;
	}

	@Override
	public boolean UpdateMem(String username, String password, String company, int grade) {
		// TODO Auto-generated method stub
		boolean updateMem = repo.UpdateMem(username, password, company, grade);
		return updateMem;
	}

	@Override
	public boolean DeleteMem(String password) {
		// TODO Auto-generated method stub
		boolean deleteMem = repo.DeleteMem(password);
		return deleteMem;
	}
}
