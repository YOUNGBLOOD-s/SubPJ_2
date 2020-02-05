package com.yb.rest.dao;

import java.util.ArrayList;

import com.yb.rest.vo.Image;
import com.yb.rest.vo.Monthtb;
import com.yb.rest.vo.Nation;

public interface IManDao {
	public int getIdx(String username);
	public int searchGrade(int customer);
	
	/** 나라테이블CRUD */
	public ArrayList<Nation> nationList(int customer);
	public ArrayList<Nation> nationListAll(int customer);
	public boolean nationinsert(String en_name, String ko_name, String dust, String continents, String showcnt, String customer, String weight, String speech, String price, String s_date, String f_date);
	public boolean nationdelete(int customer);
	public boolean nationupdate(String en_name, String ko_name, String dust, String continents, String showcnt, String customer, String weight, String speech, String price, String s_date, String f_date);
	
	/** 월별테이블CRUD */
	public ArrayList<Monthtb> monthList(int customer);
	public ArrayList<Monthtb> monthListAll(int customer);
	public boolean insertMonthtb(Monthtb montb);
	public boolean updateMonthtb(Monthtb montb);
	public boolean deleteMonthtb(int nation);

	/** 이미지테이블CRUD */
	public ArrayList<Image> imageListAll(int customer);
	public ArrayList<Image> imageList(int customer);
	public boolean insertImagetb(Image imgtb);
	public boolean updateImagetb(Image imgtb);
	public boolean deleteImagetb(int idx);

	public int getVolume(int grade);

}
