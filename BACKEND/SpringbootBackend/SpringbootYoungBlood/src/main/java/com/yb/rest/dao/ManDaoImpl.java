package com.yb.rest.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.yb.rest.vo.Counsel;
import com.yb.rest.vo.Image;
import com.yb.rest.vo.Member;
import com.yb.rest.vo.Monthtb;
import com.yb.rest.vo.Nation;
import com.yb.rest.vo.NationDTO;
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
	public List<Nation> nationList(int customer) {
		return session.selectList("management.selectNationList", customer);
	}

	@Override
	public List<Nation> nationListAll(int customer) {
		return session.selectList("management.selectNationListAll", customer);
	}

	@Override
	public List<NationDTO> nationList_page(int customer,int pageIdx) {
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("customer", customer);
		map.put("pageIdx", pageIdx);
		return session.selectList("management.selectNationList_page", map);
	}

	@Override
	public List<NationDTO> nationListAll_page(int customer,int pageIdx) {
		Map<String, Integer> map = new HashMap<String, Integer>();
		map.put("customer", customer);
		map.put("pageIdx", pageIdx);
		return session.selectList("management.selectNationListAll_page", map);
	}

	@Override
	public void nationinsert(String en_name, String ko_name, String dust, String continents, String customer, String weight, String speech, String price, String s_date, String f_date) {
		Nation n = new Nation(en_name, ko_name, dust, continents, customer, weight, speech, price, s_date, f_date);
		session.insert("management.insertnation", n);
	}

	@Override
	public void nationdelete(String idx, String customer) {
		Nation nat = new Nation();
		nat.setIdx(idx);
		nat.setCustomer(customer);
		session.delete("management.nationdelete", nat);
	}

	@Override
	public List<Monthtb> monthList(int customer) {
		return session.selectList("management.monthlist", customer);
	}

	@Override
	public List<Monthtb> monthListAll(int customer) {
		return session.selectList("management.monthlistAll", customer);
	}

	@Override
	public void insertMonthtb(Monthtb montb) {
		session.insert("management.insertMonthtb", montb);
	}

	@Override
	public void updateMonthtb(Monthtb montb) {
		session.update("management.updateMonthtb", montb);		
	}

	@Override
	public void deleteMonthtb(int nation) {
		session.delete("management.deleteMonthtb", nation);
	}
	@Override
	public int getVolume(int idx) {
		return session.selectOne("management.selectVolume", idx);
	}


	@Override
	public List<Image> imageListAll(int customer) {
		return session.selectList("management.imagelistAll", customer);
	}

	@Override
	public List<Image> imageList(int customer) {
		return session.selectList("management.imagelist", customer);
	}

	@Override
	public void insertImagetb(Image imgtb) {
		session.insert("management.imageinsert", imgtb);
	}

	@Override
	public void updateImagetb(Image imgtb) {
		session.update("management.imageupdate", imgtb);
	}

	@Override
	public void deleteImagetb(int idx) {
		session.delete("management.imagedelete", idx);
	}

	@Override
	public Nation nationInfo(int idx) {
		return session.selectOne("management.nationInfo", idx);
	}

	@Override
	public Monthtb monthInfo(int idx) {
		return session.selectOne("management.monthInfo", idx);
	}

	@Override
	public List<Route> contentsInfo(int idx) {
		return session.selectList("management.contentsInfo", idx);
	}

	@Override
	public List<Image> imagesInfo(int idx) {
		return session.selectList("management.imageInfo", idx);
	}

	@Override
	public Nation selectNationCustomer(int customer) {
		return session.selectOne("management.selectnationcustomer", customer);
	}

	@Override
	public Member selectMemberInfo(int customer) {
		return session.selectOne("management.selectMemberInfo", customer);
	}

	@Override
	public String selectNation_image(int idx) {
		return (String) session.selectOne("management.selectNation_image", idx);
	}

	@Override
	public List<Counsel> selectCounsellist(int idx) {
		return session.selectList("management.selectCounsellist", idx);
	}
	
	@Override
	public void nationupdate(Map map) {
		session.update("management.nationupdate", map);
	}

	
}
