package com.yb.rest.dao;

import java.util.ArrayList;

import com.yb.rest.vo.Monthtb;
import com.yb.rest.vo.Nation;

public interface IManDao {
	public int getIdx(String username);

	public ArrayList<Nation> nationList(int customer);

	public boolean nationinsert(String en_name, String ko_name, String dust, String continents, String showcnt,
			String customer, String weight, String speech, String price, String s_date, String f_date);

	public boolean nationdelete(int customer);

	public boolean nationupdate(String en_name, String ko_name, String dust, String continents, String showcnt,
			String customer, String weight, String speech, String price, String s_date, String f_date);
	
	public ArrayList<Monthtb> monthInfo(int customer);
}
