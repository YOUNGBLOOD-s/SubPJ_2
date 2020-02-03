package com.yb.rest.dao;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.yb.rest.vo.Nation;

@Repository
public class CurDaoImpl implements ICurDao {

	@Autowired
	SqlSession session;

	@Override
	public int getIdx(String username) {
		return session.selectOne("management.selectidx", username);
	}

	@Override
	public ArrayList<Nation> nationList(int customer) {
		// TODO Auto-generated method stub
		return (ArrayList) session.selectList("management.selectNationList", customer);
	}

	@Override
	public boolean nationinsert(String en_name, String ko_name, String dust, String continents,
			String clickcnt, String showcnt, String customer, String weight, String speech, String price) {
		// TODO Auto-generated method stub
		Nation n = new Nation(en_name, ko_name, dust, continents, clickcnt, showcnt, customer, weight, speech, price);
		System.out.println(n.getEn_name());
		int insert = session.insert("management.insertnation", n);
		System.out.println("@@" + insert);
		if (insert == 0)
			return false;
		else
			return true;

	}

	@Override
	public boolean nationdelete(int customer) {
		// TODO Auto-generated method stub
		int delete = session.delete("management.nationdelete", customer);
		if (delete == 0)
			return false;
		else
			return true;

	}

	@Override
	public boolean nationupdate(String en_name, String ko_name, String dust, String continents,
			String clickcnt, String showcnt, String customer, String weight, String speech, String price) {
		// TODO Auto-generated method stub
		Nation n = new Nation(en_name, ko_name, dust, continents, clickcnt, showcnt, customer, weight, speech, price);
		int update = session.update("management.nationupdate", n);
		if (update == 0)
			return false;
		else
			return true;
	}

}
