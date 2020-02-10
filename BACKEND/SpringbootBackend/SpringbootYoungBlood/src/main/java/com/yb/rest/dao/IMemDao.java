package com.yb.rest.dao;

import java.util.ArrayList;
import java.util.Map;

import com.yb.rest.vo.Member;

public interface IMemDao {
	public String getPassword(String username);
	public boolean registerMem(String username, String password, String company, int grade);
	
	/** member CRUD */
	public ArrayList<Member> listMem();
	public Member InfoMem(String username);
	public void UpdateMem(String username, String password, String company, int grade);
	public void UpdateMem(String username, String password, String company);
	public void DeleteMem(String username);
	public void DeleteMem(int idx);
	public void updateGrade(Map map);
}
