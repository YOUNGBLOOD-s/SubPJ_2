package com.yb.rest.service;

import java.util.List;
import java.util.Map;

import com.yb.rest.vo.Nation;
import com.yb.rest.vo.QRcode;
import com.yb.rest.vo.ForScore;
import com.yb.rest.vo.Monthtb;
import com.yb.rest.vo.Sendtofront;
import com.yb.rest.vo.Sensor;

public interface IAdService {
	public List<String> getImgs(int id);
	public List<String> getModalcontents(int id);
	public Sendtofront getInfo(Map value);
	public List<QRcode> getRoutes(int idx);
	public Nation getNationdetail(Map value);
	public void insertSensor(Sensor sen);
	public List<Monthtb> selectAll();
	public void updateScore(ForScore forScore);
	public int getScore(int idx);
	public int getDust(int idx);
	public int getType(int idx);
}
