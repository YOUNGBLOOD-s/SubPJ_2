package com.yb.rest.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.yb.rest.vo.Member;

public interface IMemService {
	public String getPassword(String username);
	public void registerMem(String username, String password, String company);
	
	/** member CRUD */
	public List<Member> listMem();
	public Member InfoMem(String username);
	public void UpdateMem(String username, String password, String company, int grade);
	public void UpdateMem(String username, String password, String company);
	public void DeleteMem(String username);
	public void DeleteMem(int idx);
	public void updateGrade(String username, int grade);
}
