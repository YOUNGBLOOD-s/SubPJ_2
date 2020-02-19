package com.yb.rest.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yb.rest.dao.IAdDao;
import com.yb.rest.dao.IManDao;
import com.yb.rest.vo.Counsel;
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
	public List<Nation> nationList(int customer) {
		return repo.nationList(customer);
	}

	@Override
	public List<Nation> nationListAll(int customer) {
		return repo.nationListAll(customer);
	}

	@Override
	public void nationinsert(String en_name, String ko_name, String continents, String customer, String weight, String speech, String price, String s_date, String f_date) {
		repo.nationinsert(en_name, ko_name, continents,  customer, weight, speech, price, s_date, f_date);
	}

	@Override
	public void nationdelete(String idx, String customer) {
		repo.nationdelete(idx, customer);
	}

	@Override
	public void nationupdate(Map map) {
		repo.nationupdate(map);
	}

	@Override
	public List<Monthtb> monthList(int customer) {
		return repo.monthList(customer);
	}

	@Override
	public List<Monthtb> monthListAll(int customer) {
		return repo.monthListAll(customer);
	}

	@Override
	public void insertMonthtb(Monthtb montb) {
		repo.insertMonthtb(montb);
	}

	public void pdateMonthtb(Monthtb montb) {
		repo.updateMonthtb(montb);
	}

	@Override
	public void deleteMonthtb(int nation) {
		repo.deleteMonthtb(nation);
	}

	@Override
	public List<Image> imageListAll(int customer) {
		return repo.imageListAll(customer);
	}

	@Override
	public List<Image> imageList(int customer) {
		return repo.imageList(customer);
	}

	@Override
	public void insertImagetb(Image imgtb) {
		repo.insertImagetb(imgtb);
	}

	@Override
	public void updateImagetb(Image imgtb) {
		repo.updateImagetb(imgtb);
	}

	@Override
	public void deleteImagetb(int idx) {
		repo.deleteImagetb(idx);
	}
	
	@Override
	public int getVolume(int idx) {
		return repo.getVolume(idx);
	}

	@Override
	public Nation nationInfo(int idx) {
		return repo.nationInfo(idx);
	}

	@Override
	public Monthtb monthInfo(int idx) {
		return repo.monthInfo(idx);
	}

	@Override
	public List<Route> contentsInfo(int idx) {
		return repo.contentsInfo(idx);
	}

	@Override
	public List<Image> imagesInfo(int idx) {
		return repo.imagesInfo(idx);
	}

	@Override
	public Nation selectNationCustomer(int customer) {
		return repo.selectNationCustomer(customer);
	}

	@Override
	public Member selectMemberInfo(int customer) {
		return repo.selectMemberInfo(customer);
	}

	@Override
	public String selectNation_image(int idx) {
		return repo.selectNation_image(idx);
	}

	@Override
	public List<NationDTO> nationList_page(int customer,int pageIdx) {
		return repo.nationList_page(customer,pageIdx);
	}

	@Override
	public List<NationDTO> nationListAll_page(int customer,int pageIdx) {
		return repo.nationListAll_page(customer,pageIdx);
	}

	@Override
	public List<Counsel> selectCounsellist(int idx) {
		return repo.selectCounsellist(idx);
	}

	@Override
	public void updateMonthtb(Monthtb montb) {
		repo.updateMonthtb(montb);
	}

	@Override
	public int selectCustomer(int idx) {
		return repo.selectCustomer(idx);
	}

	@Override
	public int selectRecoNumber() {
		return repo.selectRecoNumber();
		
	}

	@Override
	public void recoNumUpdate(int num, int rNum) {
		repo.recoNumUpdate(num, rNum);
	}

}
