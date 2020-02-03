package com.yb.rest.vo;

public class Nation {
	private String idx, en_name, ko_name, dust, continents, clickcnt, showcnt, customer, weight, speech, price, type;
	private String url;
	public Nation() {}
	public Nation(String idx, String en_name, String ko_name, String dust, String continents, String clickcnt, String showcnt,
			String customer, String weight, String speech, String price, String type, String url) {
		this.idx = idx;
		this.en_name = en_name;
		this.ko_name = ko_name;
		this.dust = dust;
		this.continents = continents;
		this.clickcnt = clickcnt;
		this.showcnt = showcnt;
		this.customer = customer;
		this.weight = weight;
		this.speech = speech;
		this.price = price;
		this.type = type;
		this.url = url;
	}
	public String getIdx() {
		return idx;
	}
	public void setIdx(String idx) {
		this.idx = idx;
	}

	public String getEn_name() {
		return en_name;
	}
	public void setEn_name(String en_name) {
		this.en_name = en_name;
	}
	public String getKo_name() {
		return ko_name;
	}
	public void setKo_name(String ko_name) {
		this.ko_name = ko_name;
	}
	public String getDust() {
		return dust;
	}
	public void setDust(String dust) {
		this.dust = dust;
	}
	public String getContinents() {
		return continents;
	}
	public void setContinents(String continents) {
		this.continents = continents;
	}
	public String getClickcnt() {
		return clickcnt;
	}
	public void setClickcnt(String clickcnt) {
		this.clickcnt = clickcnt;
	}
	public String getShowcnt() {
		return showcnt;
	}
	public void setShowcnt(String showcnt) {
		this.showcnt = showcnt;
	}
	public String getCustomer() {
		return customer;
	}
	public void setCustomer(String customer) {
		this.customer = customer;
	}
	public String getWeight() {
		return weight;
	}
	public void setWeight(String weight) {
		this.weight = weight;
	}
	public String getSpeech() {
		return speech;
	}
	public void setSpeech(String speech) {
		this.speech = speech;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}

	@Override
	public String toString() {
		return "Nation [idx=" + idx + ", en_name=" + en_name + ", ko_name=" + ko_name + ", dust=" + dust
				+ ", continents=" + continents + ", clickcnt=" + clickcnt + ", showcnt=" + showcnt + ", customer="
				+ customer + ", weight=" + weight + ", speech=" + speech + ", price=" + price + ", type=" + type
				+ ", url=" + url + "]";
	};
	
}
