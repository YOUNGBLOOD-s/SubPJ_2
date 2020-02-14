package com.yb.rest.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.yb.rest.vo.Click;

@Repository
public class StaDaoImpl implements IStaDao {
	
	@Autowired
	SqlSession session;

	@Override
	public List<Click> getDateList(Map map) {
		return session.selectList("sta.getdatalist", map);
	}
	
	
}
