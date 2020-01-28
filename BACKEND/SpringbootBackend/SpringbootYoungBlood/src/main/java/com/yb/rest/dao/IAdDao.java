package com.yb.rest.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.yb.rest.vo.Nation;
import com.yb.rest.vo.QRcode;
import com.yb.rest.vo.Sendtofront;
import com.yb.rest.vo.Sensor;

public interface IAdDao {
	public List<String> getImgs(int id);
	public List<String> getModalcontents(int id);
	public Sendtofront getInfo(Map value);
	public List<QRcode> getRoutes(int idx);
	public Nation getNationdetail(Map value);
	
	//희수 2020-01-23
		public Object insertSen(Sensor sen);
		public List<Sendtofront> selectall();
}
