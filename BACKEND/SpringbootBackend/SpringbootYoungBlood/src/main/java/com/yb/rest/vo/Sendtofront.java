package com.yb.rest.vo;

import java.util.List;

public class Sendtofront {
	private int idx;
	private float tmp1, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12;
	private float hum1, hum2, hum3, hum4, hum5, hum6, hum7, hum8, hum9, hum10, hum11, hum12;
	private String name, thumbnail, speechtext;
	private List<String> imgs, modalContents;

	public Sendtofront() {}
	public Sendtofront(int idx, float tmp1, float tmp2, float tmp3, float tmp4, float tmp5, float tmp6, float tmp7,
			float tmp8, float tmp9, float tmp10, float tmp11, float tmp12, float hum1, float hum2, float hum3,
			float hum4, float hum5, float hum6, float hum7, float hum8, float hum9, float hum10, float hum11,
			float hum12, String name, String thumbnail, String speechtext, List<String> imgs,
			List<String> modalContents) {
		this.idx = idx;
		this.tmp1 = tmp1;
		this.tmp2 = tmp2;
		this.tmp3 = tmp3;
		this.tmp4 = tmp4;
		this.tmp5 = tmp5;
		this.tmp6 = tmp6;
		this.tmp7 = tmp7;
		this.tmp8 = tmp8;
		this.tmp9 = tmp9;
		this.tmp10 = tmp10;
		this.tmp11 = tmp11;
		this.tmp12 = tmp12;
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
		this.name = name;
		this.thumbnail = thumbnail;
		this.speechtext = speechtext;
		this.imgs = imgs;
		this.modalContents = modalContents;
	}

	public Sendtofront(int idx, float tmp1, float tmp2, float tmp3, float tmp4, float tmp5, float tmp6, float tmp7,
			float tmp8, float tmp9, float tmp10, float tmp11, float tmp12, float hum1, float hum2, float hum3,
			float hum4, float hum5, float hum6, float hum7, float hum8, float hum9, float hum10, float hum11,
			float hum12) {
		this.idx = idx;
		this.tmp1 = tmp1;
		this.tmp2 = tmp2;
		this.tmp3 = tmp3;
		this.tmp4 = tmp4;
		this.tmp5 = tmp5;
		this.tmp6 = tmp6;
		this.tmp7 = tmp7;
		this.tmp8 = tmp8;
		this.tmp9 = tmp9;
		this.tmp10 = tmp10;
		this.tmp11 = tmp11;
		this.tmp12 = tmp12;
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
	}

	public int getIdx() {
		return idx;
	}

	public void setIdx(int idx) {
		this.idx = idx;
	}

	public float getTmp1() {
		return tmp1;
	}

	public void setTmp1(float tmp1) {
		this.tmp1 = tmp1;
	}

	public float getTmp2() {
		return tmp2;
	}

	public void setTmp2(float tmp2) {
		this.tmp2 = tmp2;
	}

	public float getTmp3() {
		return tmp3;
	}

	public void setTmp3(float tmp3) {
		this.tmp3 = tmp3;
	}

	public float getTmp4() {
		return tmp4;
	}

	public void setTmp4(float tmp4) {
		this.tmp4 = tmp4;
	}

	public float getTmp5() {
		return tmp5;
	}

	public void setTmp5(float tmp5) {
		this.tmp5 = tmp5;
	}

	public float getTmp6() {
		return tmp6;
	}

	public void setTmp6(float tmp6) {
		this.tmp6 = tmp6;
	}

	public float getTmp7() {
		return tmp7;
	}

	public void setTmp7(float tmp7) {
		this.tmp7 = tmp7;
	}

	public float getTmp8() {
		return tmp8;
	}

	public void setTmp8(float tmp8) {
		this.tmp8 = tmp8;
	}

	public float getTmp9() {
		return tmp9;
	}

	public void setTmp9(float tmp9) {
		this.tmp9 = tmp9;
	}

	public float getTmp10() {
		return tmp10;
	}

	public void setTmp10(float tmp10) {
		this.tmp10 = tmp10;
	}

	public float getTmp11() {
		return tmp11;
	}

	public void setTmp11(float tmp11) {
		this.tmp11 = tmp11;
	}

	public float getTmp12() {
		return tmp12;
	}

	public void setTmp12(float tmp12) {
		this.tmp12 = tmp12;
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getThumbnail() {
		return thumbnail;
	}

	public void setThumbnail(String thumbnail) {
		this.thumbnail = thumbnail;
	}

	public String getSpeechtext() {
		return speechtext;
	}

	public void setSpeechtext(String speechtext) {
		this.speechtext = speechtext;
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

	@Override
	public String toString() {
		return "Sendtofront [idx=" + idx + ", tmp1=" + tmp1 + ", tmp2=" + tmp2 + ", tmp3=" + tmp3 + ", tmp4=" + tmp4
				+ ", tmp5=" + tmp5 + ", tmp6=" + tmp6 + ", tmp7=" + tmp7 + ", tmp8=" + tmp8 + ", tmp9=" + tmp9
				+ ", tmp10=" + tmp10 + ", tmp11=" + tmp11 + ", tmp12=" + tmp12 + ", hum1=" + hum1 + ", hum2=" + hum2
				+ ", hum3=" + hum3 + ", hum4=" + hum4 + ", hum5=" + hum5 + ", hum6=" + hum6 + ", hum7=" + hum7
				+ ", hum8=" + hum8 + ", hum9=" + hum9 + ", hum10=" + hum10 + ", hum11=" + hum11 + ", hum12=" + hum12
				+ ", name=" + name + ", thumbnail=" + thumbnail + ", speechtext=" + speechtext + ", imgs=" + imgs
				+ ", modalContents=" + modalContents + "]";
	}
	
}
