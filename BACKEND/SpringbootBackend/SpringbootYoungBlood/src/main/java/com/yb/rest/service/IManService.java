package com.yb.rest.service;

import java.util.ArrayList;
import java.util.List;

import com.yb.rest.vo.Monthtb;
import com.yb.rest.vo.Nation;
import com.yb.rest.vo.Route;

public interface IManService {
	public int getIdx(String username);
	public int searchGrade(int customer);
	public ArrayList<Nation> nationList(int customer);
	public ArrayList<Nation> nationListAll(int customer);
	
	public boolean nationinsert(String en_name, String ko_name, String dust, String continents, String showcnt,
			String customer, String weight, String speech, String price, String s_date, String f_date);
	
	public boolean nationdelete(int customer);
	
	public boolean nationupdate(String en_name, String ko_name, String dust, String continents, String showcnt,
			String customer, String weight, String speech, String price, String s_date, String f_date);
	
	public ArrayList<Monthtb> monthList(int customer);
	public ArrayList<Monthtb> monthListAll(int customer);
	
	public boolean insertMonthtb(Monthtb montb);
	public boolean updateMonthtb(Monthtb montb);
	public boolean deleteMonthtb(int nation);
	public int getVolume(int grade);
	
}
