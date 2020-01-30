package com.yb.rest.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.yb.rest.vo.Nation;
import com.yb.rest.vo.QRcode;
import com.yb.rest.vo.Route;
import com.yb.rest.vo.ForScore;
import com.yb.rest.vo.Monthtb;
import com.yb.rest.vo.Sendtofront;
import com.yb.rest.vo.Sensor;

@Repository
public class AdDaoImpl implements IAdDao {

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

	@Override
	public void updateSensor(Sensor sen) {
		session.update("sensor.update", sen);
	}

	@Override
	public List<Monthtb> selectall() {
		return session.selectList("sensor.selectall");
	}

	@Override
	public List<Route> getRoutes(int idx) {
		return session.selectList("sendtofront.selectroutelist", idx);
	}

	@Override
	public Nation getNationdetail(Map value) {
		return session.selectOne("sendtofront.selectNationdetail", value);
	}

	@Override
	public void updateScore(ForScore forScore) {
		session.update("sensor.updateScore", forScore);
	}

	@Override
	public int getScore(int idx) {
		return session.selectOne("sensor.selectscore", idx);
	}

	@Override
	public int getDust(int idx) {
		return session.selectOne("sensor.selectdust", idx);
	}

	@Override
	public Sensor selectData(int idx) {
		return session.selectOne("sensor.selectData", idx);
	}

	@Override
	public void updateType(ForScore forScore) {
		session.update("sensor.photoType",forScore);
	}

	@Override
	public int getType(int idx) {
		return session.selectOne("sensor.selectType", idx);
	}

	
}