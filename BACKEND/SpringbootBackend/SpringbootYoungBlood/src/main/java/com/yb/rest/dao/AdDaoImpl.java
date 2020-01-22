package com.yb.rest.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


@Repository
public class AdDaoImpl implements IAdDao{
	
	@Autowired
	SqlSession session;
	
	@Override
	public List<String> getImgs(int id) {
		return session.selectList("ad.selectimglist", id);
	}

	@Override
	public List<String> getModalcontents(int id) {
		return session.selectList("ad.selectmodallist", id);
	}
}
