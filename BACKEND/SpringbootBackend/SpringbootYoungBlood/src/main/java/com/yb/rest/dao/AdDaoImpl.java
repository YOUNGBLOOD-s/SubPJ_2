package com.yb.rest.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.yb.rest.vo.Nation;
import com.yb.rest.vo.QRcode;
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
	public Object insertSen(Sensor sen) {
		// TODO Auto-generated method stub
		return session.insert("sensor.insert", sen);
	}

	@Override
	public List<Sendtofront> selectall() {
		// TODO Auto-generated method stub
		return session.selectList("sensor.selectall");
	}

	@Override
	public List<QRcode> getRoutes(int idx) {
		return session.selectList("sendtofront.selectroutelist", idx);
	}

	@Override
	public Nation getNationdetail(Map value) {
		return session.selectOne("sendtofront.selectNationdetail", value);
	}
}
