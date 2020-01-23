package com.yb.rest.service;

import java.util.List;
import java.util.Map;

import com.yb.rest.vo.Sendtofront;

public interface IAdService {
	public List<String> getImgs(int id);
	public List<String> getModalcontents(int id);
	public Sendtofront getInfo(Map value);
}
