package com.yb.rest.vo;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class Keyboard {
	private String version;
	private Map<String, Object> data;
	public Keyboard(Map<String, Object> data) {
		version = "2.0";
		this.data = data;
	}
	
	public String getVersion() {
		return version;
	}

	public void setVersion(String version) {
		this.version = version;
	}

	public Map<String, Object> getData() {
		return data;
	}
	public void setData(Map<String, Object> data) {
		this.data = data;
	}
	@Override
	public String toString() {
		return "Keyboard [data=" + data + "]";
	}
	
	
	
}
