package com.yb.rest.vo;

import java.util.List;

public class Sendtofront {
	private int idx;
	private float tem1, tem2, tem3, tem4, tem5, tem6, tem7, tem8, tem9, tem10, tem11, tem12;
	private float hum1, hum2, hum3, hum4, hum5, hum6, hum7, hum8, hum9, hum10, hum11, hum12;
	private String en_name, ko_name, url, speech;
	private List<String> imgs, modalContents;
	private int price, continents;

	public Sendtofront() {}
	public Sendtofront(int idx, float tem1, float tem2, float tem3, float tem4, float tem5, float tem6, float tem7,
			float tem8, float tem9, float tem10, float tem11, float tem12, float hum1, float hum2, float hum3,
			float hum4, float hum5, float hum6, float hum7, float hum8, float hum9, float hum10, float hum11,
			float hum12, String en_name, String ko_name, String url, int price, int continents, String speech, List<String> imgs,
			List<String> modalContents) {
		this.idx = idx;
		this.tem1 = tem1;
		this.tem2 = tem2;
		this.tem3 = tem3;
		this.tem4 = tem4;
		this.tem5 = tem5;
		this.tem6 = tem6;
		this.tem7 = tem7;
		this.tem8 = tem8;
		this.tem9 = tem9;
		this.tem10 = tem10;
		this.tem11 = tem11;
		this.tem12 = tem12;
		this.hum1 = hum1;
		this.hum2 = hum2;
		this.hum3 = hum3;
		this.hum4 = hum4;
		this.hum5 = hum5;
		this.hum6 = hum6;
		this.hum7 = hum7;
		this.hum8 = hum8;
		this.hum9 = hum9;
		this.hum10 = hum10;
		this.hum11 = hum11;
		this.hum12 = hum12;
		this.ko_name = ko_name;
		this.en_name = en_name;
		this.url = url;
		this.speech = speech;
		this.imgs = imgs;
		this.modalContents = modalContents;
		this.price = price;
		this.continents = continents;
	}

	public Sendtofront(int idx, float tem1, float tem2, float tem3, float tem4, float tem5, float tem6, float tem7,
			float tem8, float tem9, float tem10, float tem11, float tem12, float hum1, float hum2, float hum3,
			float hum4, float hum5, float hum6, float hum7, float hum8, float hum9, float hum10, float hum11,
			float hum12, int price, int continents) {
		this.idx = idx;
		this.tem1 = tem1;
		this.tem2 = tem2;
		this.tem3 = tem3;
		this.tem4 = tem4;
		this.tem5 = tem5;
		this.tem6 = tem6;
		this.tem7 = tem7;
		this.tem8 = tem8;
		this.tem9 = tem9;
		this.tem10 = tem10;
		this.tem11 = tem11;
		this.tem12 = tem12;
		this.hum1 = hum1;
		this.hum2 = hum2;
		this.hum3 = hum3;
		this.hum4 = hum4;
		this.hum5 = hum5;
		this.hum6 = hum6;
		this.hum7 = hum7;
		this.hum8 = hum8;
		this.hum9 = hum9;
		this.hum10 = hum10;
		this.hum11 = hum11;
		this.hum12 = hum12;
		this.price = price;
		this.continents = continents;
	}
	
	
	public int getContinents() {
		return continents;
	}
	public void setContinents(int continents) {
		this.continents = continents;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public int getIdx() {
		return idx;
	}
	public void setIdx(int idx) {
		this.idx = idx;
	}
	public float getTem1() {
		return tem1;
	}
	public void setTem1(float tem1) {
		this.tem1 = tem1;
	}
	public float getTem2() {
		return tem2;
	}
	public void setTem2(float tem2) {
		this.tem2 = tem2;
	}
	public float getTem3() {
		return tem3;
	}
	public void setTem3(float tem3) {
		this.tem3 = tem3;
	}
	public float getTem4() {
		return tem4;
	}
	public void setTem4(float tem4) {
		this.tem4 = tem4;
	}
	public float getTem5() {
		return tem5;
	}
	public void setTem5(float tem5) {
		this.tem5 = tem5;
	}
	public float getTem6() {
		return tem6;
	}
	public void setTem6(float tem6) {
		this.tem6 = tem6;
	}
	public float getTem7() {
		return tem7;
	}
	public void setTem7(float tem7) {
		this.tem7 = tem7;
	}
	public float getTem8() {
		return tem8;
	}
	public void setTem8(float tem8) {
		this.tem8 = tem8;
	}
	public float getTem9() {
		return tem9;
	}
	public void setTem9(float tem9) {
		this.tem9 = tem9;
	}
	public float getTem10() {
		return tem10;
	}
	public void setTem10(float tem10) {
		this.tem10 = tem10;
	}
	public float getTem11() {
		return tem11;
	}
	public void setTem11(float tem11) {
		this.tem11 = tem11;
	}
	public float getTem12() {
		return tem12;
	}
	public void setTem12(float tem12) {
		this.tem12 = tem12;
	}
	public float getHum1() {
		return hum1;
	}
	public void setHum1(float hum1) {
		this.hum1 = hum1;
	}
	public float getHum2() {
		return hum2;
	}
	public void setHum2(float hum2) {
		this.hum2 = hum2;
	}
	public float getHum3() {
		return hum3;
	}
	public void setHum3(float hum3) {
		this.hum3 = hum3;
	}
	public float getHum4() {
		return hum4;
	}
	public void setHum4(float hum4) {
		this.hum4 = hum4;
	}
	public float getHum5() {
		return hum5;
	}
	public void setHum5(float hum5) {
		this.hum5 = hum5;
	}
	public float getHum6() {
		return hum6;
	}
	public void setHum6(float hum6) {
		this.hum6 = hum6;
	}
	public float getHum7() {
		return hum7;
	}
	public void setHum7(float hum7) {
		this.hum7 = hum7;
	}
	public float getHum8() {
		return hum8;
	}
	public void setHum8(float hum8) {
		this.hum8 = hum8;
	}
	public float getHum9() {
		return hum9;
	}
	public void setHum9(float hum9) {
		this.hum9 = hum9;
	}
	public float getHum10() {
		return hum10;
	}
	public void setHum10(float hum10) {
		this.hum10 = hum10;
	}
	public float getHum11() {
		return hum11;
	}
	public void setHum11(float hum11) {
		this.hum11 = hum11;
	}
	public float getHum12() {
		return hum12;
	}
	public void setHum12(float hum12) {
		this.hum12 = hum12;
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
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}

	public List<String> getImgs() {
		return imgs;
	}
	public void setImgs(List<String> imgs) {
		this.imgs = imgs;
	}
	public List<String> getModalContents() {
		return modalContents;
	}
	public void setModalContents(List<String> modalContents) {
		this.modalContents = modalContents;
	}
	public String getSpeech() {
		return speech;
	}
	public void setSpeech(String speech) {
		this.speech = speech;
	}
	@Override
	public String toString() {
		return "Sendtofront [idx=" + idx + ", tem1=" + tem1 + ", tem2=" + tem2 + ", tem3=" + tem3 + ", tem4=" + tem4
				+ ", tem5=" + tem5 + ", tem6=" + tem6 + ", tem7=" + tem7 + ", tem8=" + tem8 + ", tem9=" + tem9
				+ ", tem10=" + tem10 + ", tem11=" + tem11 + ", tem12=" + tem12 + ", hum1=" + hum1 + ", hum2=" + hum2
				+ ", hum3=" + hum3 + ", hum4=" + hum4 + ", hum5=" + hum5 + ", hum6=" + hum6 + ", hum7=" + hum7
				+ ", hum8=" + hum8 + ", hum9=" + hum9 + ", hum10=" + hum10 + ", hum11=" + hum11 + ", hum12=" + hum12
				+ ", en_name=" + en_name + ", ko_name=" + ko_name + ", url=" + url + ", speech=" + speech + ", imgs="
				+ imgs + ", modalContents=" + modalContents + ", price=" + price + ", continents=" + continents + "]";
	}

}
