package com.yb.rest.service;

import java.util.List;
import java.util.Map;

import com.yb.rest.vo.Counsel;
import com.yb.rest.vo.Image;
import com.yb.rest.vo.Member;
import com.yb.rest.vo.Monthtb;
import com.yb.rest.vo.Nation;
import com.yb.rest.vo.NationDTO;
import com.yb.rest.vo.Route;

public interface IManService {
	public int getIdx(String username);
	public int searchGrade(int customer);
	public int getVolume(int idx);
	public Nation selectNationCustomer(int customer);
	public Member selectMemberInfo(int customer);
	public int selectCustomer(int idx);
	
	/**나라 CRUD*/
	public List<Nation> nationList(int customer);
	public List<Nation> nationListAll(int customer);
	public List<NationDTO> nationList_page(int customer,int pageIdx);
	public List<NationDTO> nationListAll_page(int customer, int pageIdx);
	public void nationinsert(String en_name, String ko_name, String continents, String customer, String weight, String speech, String price, String s_date, String f_date);
	public void nationdelete(String idx, String customer);
	public void nationupdate(Map map);
	public String selectNation_image(int idx);
	
	
	/** 월별 CRUD */
	public List<Monthtb> monthList(int customer);
	public List<Monthtb> monthListAll(int customer);
	public void insertMonthtb(Monthtb montb);
	public void updateMonthtb(Monthtb montb);
	public void deleteMonthtb(int nation);
	

	/** 이미지 CRUD */
	public List<Image> imageListAll(int customer);
	public List<Image> imageList(int customer);
	public void insertImagetb(Image imgtb);
	public void updateImagetb(Image imgtb);
	public void deleteImagetb(int idx);

	/** nation관련 INFO */
	public Nation nationInfo(int idx);
	public Monthtb monthInfo(int idx);
	public List<Route> contentsInfo(int idx);
	public List<Image> imagesInfo(int idx);
	
	/** 상담정보 */
	public List<Counsel> selectCounsellist(int idx);
}

