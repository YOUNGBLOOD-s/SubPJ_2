package com.yb.rest.service;

import java.util.ArrayList;

import com.yb.rest.vo.Image;
import com.yb.rest.vo.Member;
import com.yb.rest.vo.Monthtb;
import com.yb.rest.vo.Nation;
import com.yb.rest.vo.Route;

public interface IManService {
	public int getIdx(String username);
	public int searchGrade(int customer);
	public int getVolume(int idx);
	public Nation selectNationCustomer(int customer);
	public Member selectMemberInfo(int customer);
	/**나라 CRUD*/
	public ArrayList<Nation> nationList(int customer);
	public ArrayList<Nation> nationListAll(int customer);
	public boolean nationinsert(String en_name, String ko_name, String dust, String continents, String customer, String weight, String speech, String price, String s_date, String f_date);
	public boolean nationdelete(String idx, String customer);
	public boolean nationupdate(String en_name, String ko_name, String dust, String continents, String showcnt, String customer, String weight, String speech, String price, String s_date, String f_date);
	
	/** 월별 CRUD */
	public ArrayList<Monthtb> monthList(int customer);
	public ArrayList<Monthtb> monthListAll(int customer);
	public boolean insertMonthtb(Monthtb montb);
	public boolean updateMonthtb(Monthtb montb);
	public boolean deleteMonthtb(int nation);
	

	/** 이미지 CRUD */
	public ArrayList<Image> imageListAll(int customer);
	public ArrayList<Image> imageList(int customer);
	public boolean insertImagetb(Image imgtb);
	public boolean updateImagetb(Image imgtb);
	public boolean deleteImagetb(int idx);

	/** nation관련 INFO */
	public Nation nationInfo(int idx);
	public Monthtb monthInfo(int idx);
	public ArrayList<Route> contentsInfo(int idx);
	public ArrayList<Image> imagesInfo(int idx);
	
	
}
