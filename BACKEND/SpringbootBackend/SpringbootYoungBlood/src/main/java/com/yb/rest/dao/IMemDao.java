package com.yb.rest.dao;

import java.util.ArrayList;
import java.util.Map;

import com.yb.rest.vo.Member;

public interface IMemDao {
	public String getPassword(String username);
	public boolean registerMem(String username, String password, String company, int grade);
	public ArrayList<Member> listMem();
	public Member InfoMem(String username);
	public boolean UpdateMem(String username, String password, String company, int grade);
	public boolean DeleteMem(String password);
	public void updateGrade(Map map);
}
