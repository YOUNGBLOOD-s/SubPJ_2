package com.yb.rest.dao;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.yb.rest.vo.Monthtb;
import com.yb.rest.vo.Nation;

@Repository
public class ManDaoImpl implements IManDao {

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
	public ArrayList<Nation> nationListAll(int customer) {
		// TODO Auto-generated method stub
		return (ArrayList) session.selectList("management.selectNationListAll", customer);
	}

	@Override
	public boolean nationinsert(String en_name, String ko_name, String dust, String continents, String showcnt,
			String customer, String weight, String speech, String price, String s_date, String f_date) {
		// TODO Auto-generated method stub
		Nation n = new Nation(en_name, ko_name, dust, continents, showcnt, customer, weight, speech, price, s_date,
				f_date);
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
	public boolean nationupdate(String en_name, String ko_name, String dust, String continents, String showcnt,
			String customer, String weight, String speech, String price, String s_date, String f_date) {
		// TODO Auto-generated method stub
		Nation n = new Nation(en_name, ko_name, dust, continents, showcnt, customer, weight, speech, price, s_date,
				f_date);
		int update = session.update("management.nationupdate", n);
		if (update == 0)
			return false;
		else
			return true;
	}

	@Override
	public ArrayList<Monthtb> monthList(int customer) {
		// TODO Auto-generated method stub
		return (ArrayList) session.selectList("management.monthlist", customer);
	}

	@Override
	public ArrayList<Monthtb> monthListAll(int customer) {
		// TODO Auto-generated method stub
		return (ArrayList) session.selectList("management.monthlistAll", customer);
	}

	@Override
	public boolean insertMonthtb(Monthtb montb) {
		// TODO Auto-generated method stub
		int insert = session.insert("management.insertMonthtb", montb);
		if (insert == 0)
			return false;
		else
			return true;
	}

	@Override
	public boolean updateMonthtb(Monthtb montb) {
		int update = session.update("management.updateMonthtb", montb);
		if (update == 0)
			return false;
		else
			return true;
	}

	@Override
	public boolean deleteMonthtb(int nation) {
		// TODO Auto-generated method stub
		int delete = session.delete("management.deleteMonthtb", nation);
		if (delete == 0)
			return false;
		else
			return true;
	}

}
