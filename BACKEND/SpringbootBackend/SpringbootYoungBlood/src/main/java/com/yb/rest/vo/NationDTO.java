package com.yb.rest.vo;

public class NationDTO {
	private String idx, en_name, ko_name, dust, continents, showcnt, customer, weight, speech, price, s_date, f_date,
			type, flag;
	private Owner owner;
	private String url;
	private boolean completed;
	
	public Owner getOwner() {
		return owner;
	}

	public void setOwner(Owner owner) {
		this.owner = owner;
	}

	public NationDTO() {

	}

	public NationDTO(String idx, String en_name, String ko_name, String dust, String continents, String showcnt,
			String customer, String weight, String speech, String price, String s_date, String f_date, String type,
			String flag, Owner owner, String url, boolean completed) {
		super();
		this.idx = idx;
		this.en_name = en_name;
		this.ko_name = ko_name;
		this.dust = dust;
		this.continents = continents;
		this.showcnt = showcnt;
		this.customer = customer;
		this.weight = weight;
		this.speech = speech;
		this.price = price;
		this.s_date = s_date;
		this.f_date = f_date;
		this.type = type;
		this.flag = flag;
		this.owner = owner;
		this.url = url;
		this.completed = completed;
	}

	public boolean isCompleted() {
		return completed;
	}

	public void setCompleted(boolean completed) {
		this.completed = completed;
	}

	public String getFlag() {
		return flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
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
//

	// flag값 포함한 생성자
	public NationDTO(String idx, String en_name, String ko_name, String dust, String continents, String showcnt,
			String customer, String weight, String speech, String price, String s_date, String f_date, String type,
			String flag, String url) {
		super();
		this.idx = idx;
		this.en_name = en_name;
		this.ko_name = ko_name;
		this.dust = dust;
		this.continents = continents;
		this.showcnt = showcnt;
		this.customer = customer;
		this.weight = weight;
		this.speech = speech;
		this.price = price;
		this.s_date = s_date;
		this.f_date = f_date;
		this.type = type;
		this.flag = flag;
		this.url = url;
	}

	public NationDTO(String en_name, String ko_name, String dust, String continents, String customer, String weight,
			String speech, String price, String s_date, String f_date) {
		super();
		this.en_name = en_name;
		this.ko_name = ko_name;
		this.dust = dust;
		this.continents = continents;
		this.customer = customer;
		this.weight = weight;
		this.speech = speech;
		this.price = price;
		this.s_date = s_date;
		this.f_date = f_date;
	}

	public NationDTO(String en_name, String ko_name, String dust, String continents, String showcnt, String customer,
			String weight, String speech, String price, String s_date, String f_date) {
		super();
		this.en_name = en_name;
		this.ko_name = ko_name;
		this.dust = dust;
		this.continents = continents;
		this.showcnt = showcnt;
		this.customer = customer;
		this.weight = weight;
		this.speech = speech;
		this.price = price;
		this.s_date = s_date;
		this.f_date = f_date;
	}

	public NationDTO(String idx, String en_name, String ko_name, String dust, String continents, String showcnt,
			String customer, String weight, String speech, String price, String s_date, String f_date, String type,
			String url) {
		super();
		this.idx = idx;
		this.en_name = en_name;
		this.ko_name = ko_name;
		this.dust = dust;
		this.continents = continents;
		this.showcnt = showcnt;
		this.customer = customer;
		this.weight = weight;
		this.speech = speech;
		this.price = price;
		this.s_date = s_date;
		this.f_date = f_date;
		this.type = type;
		this.url = url;
	}

	public NationDTO(String idx, String en_name, String ko_name, String dust, String continents, String showcnt,
			String customer, String weight, String speech, String price, String s_date, String f_date, String type,
			String flag, Owner owner, String url) {
		super();
		this.idx = idx;
		this.en_name = en_name;
		this.ko_name = ko_name;
		this.dust = dust;
		this.continents = continents;
		this.showcnt = showcnt;
		this.customer = customer;
		this.weight = weight;
		this.speech = speech;
		this.price = price;
		this.s_date = s_date;
		this.f_date = f_date;
		this.type = type;
		this.flag = flag;
		this.owner = owner;
		this.url = url;
	}

}
