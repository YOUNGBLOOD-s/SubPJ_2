package com.yb.rest.vo;

public class Nation {
	private String idx, name, url, price, continents;
	public Nation() {};
	public Nation(String idx, String name, String url, String price, String continents) {
		this.idx = idx;
		this.name = name;
		this.url = url;
		this.price = price;
		this.continents = continents;
	}
	public String getIdx() {
		return idx;
	}
	public void setIdx(String idx) {
		this.idx = idx;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getContinents() {
		return continents;
	}
	public void setContinents(String continents) {
		this.continents = continents;
	}
	@Override
	public String toString() {
		return "Nation [idx=" + idx + ", name=" + name + ", url=" + url + ", price=" + price + ", continents="
				+ continents + "]";
	}

}
