package com.yb.rest.service;

import java.time.Month;
import java.util.List;
import java.util.Map;

import com.yb.rest.vo.Nation;
import com.yb.rest.vo.QRcode;
import com.yb.rest.vo.Route;
import com.yb.rest.vo.Counsel;
import com.yb.rest.vo.ForScore;
import com.yb.rest.vo.Monthtb;
import com.yb.rest.vo.Sendtofront;
import com.yb.rest.vo.Sensor;

public interface IAdService {
	public List<String> getImgs(int id);
	public List<String> getModalcontents(int id);
	public Sendtofront getInfo(Map value);
	public int getGrade(String idx);
	public int getFlag(String idx);
	public int selectNation(int idx);
	public Monthtb selectTemps(int idx);
	
	/** detail */
	public List<Integer> selectIdxs();
	public List<Nation> selectFilterIdxs(String continents,String page);
	public List<Integer> selectFilterIdxs(String continents);
	public List<Integer> selectIdxs_page(int pageidx);
	public List<Route> getRoutes(int idx);
	public List<Route> getRoutes(String customer);
	public List<Route> getRoutesAll(int idx);
	public void insertRoutes(Route route);
	public void updateRoutes(Route route);
	public void deleteRoutes(Map map);
	
	public Nation getNationdetail(Map value);
	public Nation getNationdetail(int idx);
	public List<Monthtb> selectAll();

	/** select nation */
	public void updateSensor(Sensor sen);
	public void updateScore(ForScore forScore);
	public int getScore(int idx);
	public int getDust(int idx);
	public Sensor selectData(int idx);
	public void updateType(ForScore forScore);
	public int getType(int idx);
	public List<Nation> selectNations();
	public void updateFlag(int idx);
	public void updateNCompleted(int nationIdx);
	public Nation getnation(int nationIdx);
	
	/** click & QRcode */
	public void updateshowandflag();
	public void updateClickcnt(Map map);
	public void updateQRcnt(Map map);
	public void updateShowcnt(int idx);
	public int selectShowcnt(int idx);
	public boolean getDate(Map map);
	public void insertClick(Map map);
	public void insertQR(Map map);
	
	/** 1:1상담 */
	public void updateCounsel(int age, String name, String email, String tel, String date, String text, int nation);
	public void updateCompleted(int idx);
	public void deleteCounsel(int idx);
	public int selectlastIdx();
	public Counsel selectCounsel(int idx);
}
