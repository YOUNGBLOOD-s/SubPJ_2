package com.yb.rest.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class MemDaoImpl implements IMemDao {
	
	@Autowired
	SqlSession session;

	@Override
	public String getPassword(String username) {
		return session.selectOne("member.selectpassword", username);
	}
	
	
}
