package com.yb.rest.dao;

import java.util.List;
import java.util.Map;

import com.yb.rest.vo.Nation;
import com.yb.rest.vo.QRcode;
import com.yb.rest.vo.Route;
import com.yb.rest.vo.ForScore;
import com.yb.rest.vo.Monthtb;
import com.yb.rest.vo.Sendtofront;
import com.yb.rest.vo.Sensor;

public interface IAdDao {
	public List<String> getImgs(int id);
	public List<String> getModalcontents(int id);
	public Sendtofront getInfo(Map value);
	public List<Route> getRoutes(int idx);
	public Nation getNationdetail(Map value);
	public Nation getNationdetail(int idx);
	public void updateSensor(Sensor sen);
	public List<Monthtb> selectall();
	public void updateScore(ForScore forScore);
	public int getScore(int idx);
	public int getDust(int idx);
	public Sensor selectData(int idx);
	public void updateType(ForScore forScore);	
	public int getType(int idx);
	public void updateClickcnt(int idx);
	public void updateShowcnt(int idx);
}
