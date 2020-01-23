package com.yb.rest.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.yb.rest.vo.Sendtofront;


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
}