package com.yb.rest.dao;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.yb.rest.vo.Click;
import com.yb.rest.vo.Nation;

@Repository
public class ChatDaoImpl implements IChatDao {

	@Autowired
	SqlSession session;
	
	@Override
	public List<Nation> findContinent(String num) {
		// TODO Auto-generated method stub
		return session.selectList("chatbot.continent",num);
	}

	@Override
	public List<Click> selectFavorite() {
		// TODO Auto-generated method stub
		return session.selectList("chatbot.test");
	}

	@Override
	public String selectSDate(String idx) {
		// TODO Auto-generated method stub
		return session.selectOne("chatbot.selectDate", idx);
	}

}
