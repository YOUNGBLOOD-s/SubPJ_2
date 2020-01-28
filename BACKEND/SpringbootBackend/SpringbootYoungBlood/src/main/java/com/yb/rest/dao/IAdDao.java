package com.yb.rest.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.yb.rest.vo.ForScore;
import com.yb.rest.vo.Monthtb;
import com.yb.rest.vo.Sendtofront;
import com.yb.rest.vo.Sensor;

public interface IAdDao {
	public List<String> getImgs(int id);
	public List<String> getModalcontents(int id);
	public Sendtofront getInfo(Map value);
	
	//희수 2020-01-23
		public void insertSen(Sensor sen);
		public List<Monthtb> selectall();
		public void updateScore(ForScore forScore);
		public int getScore(int idx);
		public int getDust(int idx);
}
