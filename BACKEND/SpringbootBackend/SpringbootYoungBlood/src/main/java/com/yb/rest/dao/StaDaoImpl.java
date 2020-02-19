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

	@Override
	public List<Integer> selectAllNationIdxs(String username) {
		return session.selectList("sta.getnationIdxs", username);
	}

	@Override
	public int getClickSum(int nationIdx) {
		return session.selectOne("sta.getclicksum", nationIdx);
	}

	@Override
	public int getQrSum(int nationIdx) {
		return session.selectOne("sta.getqrsum", nationIdx);
	}

	@Override
	public int getClickSum(Map map) {
		return session.selectOne("sta.getclicksum_", map);
	}

	@Override
	public int getQrSum(Map map) {
		return session.selectOne("sta.getqrsum_", map);
	}

}
