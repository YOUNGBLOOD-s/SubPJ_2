package com.yb.rest.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.yb.rest.vo.ForScore;
import com.yb.rest.vo.Monthtb;
import com.yb.rest.vo.Sendtofront;
import com.yb.rest.vo.Sensor;


@Repository
public class AdDaoImpl implements IAdDao{
	
	@Autowired
	SqlSession session;
	
	@Override
	public List<String> getImgs(int id) {
		return session.selectList("sendtofront.selectimglist", id);
	}

	@Override
	public List<String> getModalcontents(int id) {
		return session.selectList("sendtofront.selectmodallist", id);
	}

	@Override
	public Sendtofront getInfo(Map value) {
		return session.selectOne("sendtofront.selectinfo", value);
	}
	
	//희수 2020-01-23
	@Override
	public void insertSen(Sensor sen) {
		// TODO Auto-generated method stub
		session.update("sensor.insert", sen);
	}

	@Override
	public List<Monthtb> selectall() {
		// TODO Auto-generated method stub
		return session.selectList("sensor.selectall");
	}

	@Override
	public void updateScore(ForScore forScore) {
		// TODO Auto-generated method stub
		session.update("sensor.updateScore", forScore);
	}

	@Override
	public int getScore(int idx) {
		// TODO Auto-generated method stub
		return session.selectOne("sensor.selectscore", idx);
	}

	@Override
	public int getDust(int idx) {
		// TODO Auto-generated method stub
		return session.selectOne("sensor.selectdust", idx);
	}
}
