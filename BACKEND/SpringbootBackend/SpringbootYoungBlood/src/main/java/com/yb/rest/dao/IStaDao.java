package com.yb.rest.dao;

import java.util.List;
import java.util.Map;

import com.yb.rest.vo.Click;

public interface IStaDao {
	public List<Click> getDateList(Map map);
}
