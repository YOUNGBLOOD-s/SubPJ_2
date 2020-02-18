package com.yb.rest.service;

import java.util.List;
import java.util.Map;

import com.yb.rest.vo.Click;

public interface IStaService {
	public List<Click> getDateList(Map map);
	public List<Integer> selectAllNationIdxs(String username);
	public int getClickSum(int nationIdx);
	public int getQrSum(int nationIdx);
}
