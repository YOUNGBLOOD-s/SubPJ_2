package com.yb.rest.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class ManDaoImpl implements IManDao{
	
	@Autowired
	SqlSession session;
	
	@Override
	public int getIdx(String username) {
		return session.selectOne("management.selectidx", username);
	}

}
