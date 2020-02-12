package com.yb.rest.vo;

public class Date {
	private String idx;
	private String Ko_name;
	private String s_date;
	private String f_date;
	private String url;

	public Date(String idx, String Ko_name,String s_date, String f_date, String url) {
		this.idx = idx;
		this.Ko_name=Ko_name;
		this.s_date = s_date;
		this.f_date = f_date;
		this.url = url;
	}

	public String getKo_name() {
		return Ko_name;
	}

	public void setKo_name(String ko_name) {
		Ko_name = ko_name;
	}

	public String getIdx() {
		return idx;
	}

	public void setIdx(String idx) {
		this.idx = idx;
	}

	public String getS_date() {
		return s_date;
	}

	public void setS_date(String s_date) {
		this.s_date = s_date;
	}

	public String getF_date() {
		return f_date;
	}

	public void setF_date(String f_date) {
		this.f_date = f_date;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}
	
	@Override
	public String toString() {
		return "Date [idx=" + idx + ", Ko_name=" + Ko_name + ", s_date=" + s_date + ", f_date=" + f_date + ", url="
				+ url + "]";
	}
}
