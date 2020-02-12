package com.yb.rest.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yb.rest.dao.IAdDao;
import com.yb.rest.dao.IManDao;
import com.yb.rest.vo.Image;
import com.yb.rest.vo.Member;
import com.yb.rest.vo.Monthtb;
import com.yb.rest.vo.Nation;
import com.yb.rest.vo.NationDTO;
import com.yb.rest.vo.Route;

@Service
public class ManServiceImpl implements IManService {

	@Autowired
	IManDao repo;

	@Autowired
	IAdDao adrepo;

	@Override
	public int getIdx(String username) {
		return repo.getIdx(username);
	}

	@Override
	public int searchGrade(int customer) {
		return repo.searchGrade(customer);
	}

	@Override
	public ArrayList<Nation> nationList(int customer) {
		ArrayList<Nation> list = repo.nationList(customer);
		return list;
	}

	@Override
	public ArrayList<Nation> nationListAll(int customer) {
		ArrayList<Nation> list = repo.nationListAll(customer);
		return list;
	}

	@Override
	public boolean nationinsert(String en_name, String ko_name, String dust, String continents, String customer, String weight, String speech, String price, String s_date, String f_date) {
		boolean res = repo.nationinsert(en_name, ko_name, dust, continents,  customer, weight, speech, price, s_date, f_date);
		return res;
	}

	@Override
	public boolean nationdelete(String idx, String customer) {
		return repo.nationdelete(idx, customer);
	}

	@Override
	public boolean nationupdate(String en_name, String ko_name, String dust, String continents, String showcnt, String customer, String weight, String speech, String price, String s_date, String f_date) {
		return repo.nationupdate(en_name, ko_name, dust, continents, showcnt, customer, weight, speech, price, s_date, f_date);
	}

	@Override
	public ArrayList<Monthtb> monthList(int customer) {
		ArrayList<Monthtb> list = repo.monthList(customer);
		return list;
	}

	@Override
	public ArrayList<Monthtb> monthListAll(int customer) {
		ArrayList<Monthtb> list = repo.monthListAll(customer);
		return list;
	}

	@Override
	public boolean insertMonthtb(Monthtb montb) {
		boolean insertMonthtb = repo.insertMonthtb(montb);
		return insertMonthtb;
	}

	@Override
	public boolean updateMonthtb(Monthtb montb) {
		boolean updateMonthtb = repo.updateMonthtb(montb);
		return updateMonthtb;
	}

	@Override
	public boolean deleteMonthtb(int nation) {
		boolean deleteMonthtb = repo.deleteMonthtb(nation);
		return deleteMonthtb;
	}

	@Override
	public ArrayList<Image> imageListAll(int customer) {
		ArrayList<Image> list = repo.imageListAll(customer);
		return list;
	}

	@Override
	public ArrayList<Image> imageList(int customer) {
		return (ArrayList) repo.imageList(customer);
	}

	@Override
	public boolean insertImagetb(Image imgtb) {
		boolean insertImagetb = repo.insertImagetb(imgtb);
		return insertImagetb;
	}

	@Override
	public boolean updateImagetb(Image imgtb) {
		boolean updateImagetb = repo.updateImagetb(imgtb);
		return updateImagetb;
	}

	@Override
	public boolean deleteImagetb(int idx) {
		boolean deleteImagetb = repo.deleteImagetb(idx);
		return deleteImagetb;
	}
	
	@Override
	public int getVolume(int idx) {
		return repo.getVolume(idx);
	}

	@Override
	public Nation nationInfo(int idx) {
		// TODO Auto-generated method stub
		Nation nat = repo.nationInfo(idx);
		return nat;
	}

	@Override
	public Monthtb monthInfo(int idx) {
		// TODO Auto-generated method stub
		Monthtb mon = repo.monthInfo(idx);
		return mon;
	}

	@Override
	public ArrayList<Route> contentsInfo(int idx) {
		// TODO Auto-generated method stub
		ArrayList<Route> contents = repo.contentsInfo(idx);
		return contents;
	}

	@Override
	public ArrayList<Image> imagesInfo(int idx) {
		// TODO Auto-generated method stub
		ArrayList<Image> images = repo.imagesInfo(idx);
		return images;
	}

	@Override
	public Nation selectNationCustomer(int customer) {
		// TODO Auto-generated method stub
		Nation nat = repo.selectNationCustomer(customer);
		return nat;
	}

	@Override
	public Member selectMemberInfo(int customer) {
		// TODO Auto-generated method stub
		Member mem = repo.selectMemberInfo(customer);
		return mem;
	}

	@Override
	public String selectNation_image(int idx) {
		// TODO Auto-generated method stub
		String url = repo.selectNation_image(idx);
		return url;
	}

	@Override
	public ArrayList<NationDTO> nationList_page(int customer,int pageIdx) {
		// TODO Auto-generated method stub
		ArrayList<NationDTO> list = repo.nationList_page(customer,pageIdx);
		return list;
	}

	@Override
	public ArrayList<NationDTO> nationListAll_page(int customer,int pageIdx) {
		// TODO Auto-generated method stub
		ArrayList<NationDTO> list = repo.nationListAll_page(customer,pageIdx);
		return list;
	}

}
