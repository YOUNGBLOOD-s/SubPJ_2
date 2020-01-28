package com.yb.rest.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yb.rest.dao.IAdDao;
import com.yb.rest.vo.Nation;
import com.yb.rest.vo.QRcode;
import com.yb.rest.vo.ForScore;
import com.yb.rest.vo.Monthtb;
import com.yb.rest.vo.Sendtofront;
import com.yb.rest.vo.Sensor;

@Service
public class AdServiceImpl implements IAdService {

	@Autowired
	IAdDao repo;

	@Override
	public List<String> getImgs(int id) {
		return repo.getImgs(id);
	}

	@Override
	public List<String> getModalcontents(int id) {
		return repo.getModalcontents(id);
	}

	@Override
	public Sendtofront getInfo(Map value) {
		return repo.getInfo(value);
	}

	@Override
	public void insertSensor(Sensor sen) {
		// TODO Auto-generated method stub
		repo.insertSen(sen);
	}

	@Override
	public List<Sendtofront> selectAll() {
		// TODO Auto-generated method stub
		return repo.selectall();
	}

	@Override
	public List<QRcode> getRoutes(int idx) {
		return repo.getRoutes(idx);
	}

	@Override
	public Nation getNationdetail(Map value) {
		return repo.getNationdetail(value);
	}
  
  		@Override
		public void updateScore(ForScore forScore) {
			// TODO Auto-generated method stub
			repo.updateScore(forScore);
		}

		@Override
		public int getScore(int idx) {
			// TODO Auto-generated method stub
			return repo.getScore(idx);
		}

		@Override
		public int getDust(int idx) {
			// TODO Auto-generated method stub
			return repo.getDust(idx);
		}
}
