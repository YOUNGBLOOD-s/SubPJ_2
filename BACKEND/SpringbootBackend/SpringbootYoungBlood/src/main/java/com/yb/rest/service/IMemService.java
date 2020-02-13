package com.yb.rest.service;

import java.util.List;

import com.yb.rest.vo.Member;

public interface IMemService {
	public String getPassword(String username);
	public void registerMem(String username, String password, String company);
	public String getSHA256(String plain);
	public int selectGrade(String username);
	
	/** member CRUD */
	public List<Member> listMem();
	public Member InfoMem(String username);
	public void UpdateMem(String username, String password, String company, int grade);
	public void UpdateMem(String username, String password, String company);
	public void UpdateMem(String username, String company, int grade);
	public void UpdateMem(String username, String company);
	public void DeleteMem(String username);
	public void DeleteMem(int idx);
	public void updateGrade(String username, int grade);
}
