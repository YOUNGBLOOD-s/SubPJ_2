package com.yb.rest.dao;

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

public interface IAdDao {
	public List<String> getImgs(int id);
	public List<String> getModalcontents(int id);
	public Sendtofront getInfo(Map value);
	public void updateshowandflag(int customer);
	
	/** detail */
	public List<Route> getRoutes(int idx);
	public List<Route> getRoutes(String customer);
	public List<Route> getRoutesAll(int idx);
	public void insertRoutes(Route route);
	public void updateRoutes(Route route);
	public void deleteRoutes(Map map);
	
	public Nation getNationdetail(Map value);
	public Nation getNationdetail(int idx);
	public List<Monthtb> selectall();
	
	/** select nation */
	public void updateSensor(Sensor sen);
	public void updateScore(ForScore forScore);
	public int getScore(int idx);
	public int getDust(int idx);
	public Sensor selectData(int idx);
	public void updateType(ForScore forScore);	
	public int getType(int idx);
	
	/** click & QRcode */
	public void updateClickcnt(Map map);
	public void updateQRcnt(Map map);
	public void updateShowcnt(int idx);
	public void insertClick(Map map);
	public void insertQR(Map map);
	public int selectShowcnt(int idx);
	public void updateFlag(int idx);
	public boolean getDate(Map map);
	public List<Nation> selectNations();
	
	/** 1:1상담 */
	public void updateCounsel(Counsel counvalue);
	//2020-02-06 정희수
	public int getGrade(String idx);
	public int getFlag(String idx);

}
