package com.yb.rest.dao;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.yb.rest.vo.Image;
import com.yb.rest.vo.Member;
import com.yb.rest.vo.Monthtb;
import com.yb.rest.vo.Nation;
import com.yb.rest.vo.Route;

@Repository
public class ManDaoImpl implements IManDao {

	@Autowired
	SqlSession session;

	@Override
	public int getIdx(String username) {
		return session.selectOne("management.selectidx", username);
	}

	@Override
	public int searchGrade(int customer) {
		return session.selectOne("management.selectGrade", customer);
	}

	@Override
	public ArrayList<Nation> nationList(int customer) {
		return (ArrayList) session.selectList("management.selectNationList", customer);
	}

	@Override
	public ArrayList<Nation> nationListAll(int customer) {
		return (ArrayList) session.selectList("management.selectNationListAll", customer);
	}
	//paging  처리/
	@Override
	public ArrayList<Nation> nationList_page(int customer,int pageIdx) {
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("customer", customer);
		map.put("pageIdx", pageIdx);
		return (ArrayList) session.selectList("management.selectNationList_page", map);
	}

	@Override
	public ArrayList<Nation> nationListAll_page(int customer,int pageIdx) {
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("customer", customer);
		map.put("pageIdx", pageIdx);
		return (ArrayList) session.selectList("management.selectNationListAll_page", map);
	}

	@Override
	public boolean nationinsert(String en_name, String ko_name, String dust, String continents, String customer, String weight, String speech, String price, String s_date, String f_date) {
		Nation n = new Nation(en_name, ko_name, dust, continents, customer, weight, speech, price, s_date, f_date);
		int insert = session.insert("management.insertnation", n);
		if (insert == 0)
			return false;
		else
			return true;

	}

	@Override
	public boolean nationdelete(String idx, String customer) {
		Nation nat = new Nation();
		nat.setIdx(idx);
		nat.setCustomer(customer);
		System.out.println(idx+""+customer);
		System.out.println(nat.getCustomer());
		int delete = session.delete("management.nationdelete", nat);
		if (delete == 0)
			return false;
		else
			return true;
	}

	@Override
	public boolean nationupdate(String en_name, String ko_name, String dust, String continents, String showcnt, String customer, String weight, String speech, String price, String s_date, String f_date) {
		Nation n = new Nation(en_name, ko_name, dust, continents, showcnt, customer, weight, speech, price, s_date, f_date);
		int update = session.update("management.nationupdate", n);
		if (update == 0)
			return false;
		else
			return true;
	}

	@Override
	public ArrayList<Monthtb> monthList(int customer) {
		return (ArrayList) session.selectList("management.monthlist", customer);
	}

	@Override
	public ArrayList<Monthtb> monthListAll(int customer) {
		return (ArrayList) session.selectList("management.monthlistAll", customer);
	}

	@Override
	public boolean insertMonthtb(Monthtb montb) {
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
		int delete = session.delete("management.deleteMonthtb", nation);
		if (delete == 0)
			return false;
		else
			return true;
	}
	@Override
	public int getVolume(int idx) {
		return session.selectOne("management.selectVolume", idx);
	}


	@Override
	public ArrayList<Image> imageListAll(int customer) {
		return (ArrayList) session.selectList("management.imagelistAll", customer);
	}

	@Override
	public ArrayList<Image> imageList(int customer) {
		return (ArrayList) session.selectList("management.imagelist", customer);
	}

	@Override
	public boolean insertImagetb(Image imgtb) {
		int insert = session.insert("management.imageinsert", imgtb);
		if (insert == 0)
			return false;
		else
			return true;
	}

	@Override
	public boolean updateImagetb(Image imgtb) {
		int update = session.update("management.imageupdate", imgtb);
		if (update == 0)
			return false;
		else
			return true;
	}

	@Override
	public boolean deleteImagetb(int idx) {
		int delete = session.delete("management.imagedelete", idx);
		if (delete == 0)
			return false;
		else
			return true;
	}

	@Override
	public Nation nationInfo(int idx) {
		// TODO Auto-generated method stub
		Nation nat = session.selectOne("management.nationInfo", idx);
		return nat;
	}

	@Override
	public Monthtb monthInfo(int idx) {
		// TODO Auto-generated method stub
		Monthtb month = session.selectOne("management.monthInfo", idx);
		return month;
	}

	@Override
	public ArrayList<Route> contentsInfo(int idx) {
		// TODO Auto-generated method stub
		return (ArrayList) session.selectList("management.contentsInfo", idx);
	}

	@Override
	public ArrayList<Image> imagesInfo(int idx) {
		return (ArrayList) session.selectList("management.imageInfo", idx);
	}

	@Override
	public Nation selectNationCustomer(int customer) {
		// TODO Auto-generated method stub
		Nation nat = session.selectOne("management.selectnationcustomer", customer);
		return nat;
	}

	@Override
	public Member selectMemberInfo(int customer) {
		// TODO Auto-generated method stub
		Member mem = session.selectOne("management.selectMemberInfo", customer);	
		return mem;
	}

	@Override
	public String selectNation_image(int idx) {
		// TODO Auto-generated method stub
		String url = (String) session.selectOne("management.selectNation_image", idx);
		return url;
	}

	
}
