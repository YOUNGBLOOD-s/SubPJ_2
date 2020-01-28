package com.yb.rest.vo;

import java.util.List;

public class Sendtofront {
	private int id;
	private float temp1, temp2, temp3, temp4, temp5, temp6, temp7, temp8, temp9, temp10, temp11, temp12;
	private float humid1, humid2, humid3, humid4, humid5, humid6, humid7, humid8, humid9, humid10, humid11, humid12;
	private String name, thumbnail, speechtext;
	private List<String> imgs, modalContents;
	
	public Sendtofront() {}

	public Sendtofront(int id, float temp1, float temp2, float temp3, float temp4, float temp5, float temp6,
			float temp7, float temp8, float temp9, float temp10, float temp11, float temp12, float humid1, float humid2,
			float humid3, float humid4, float humid5, float humid6, float humid7, float humid8, float humid9,
			float humid10, float humid11, float humid12, String name, String thumbnail, String speechtext,
			List<String> imgs, List<String> modalContents) {
		this.id = id;
		this.temp1 = temp1;
		this.temp2 = temp2;
		this.temp3 = temp3;
		this.temp4 = temp4;
		this.temp5 = temp5;
		this.temp6 = temp6;
		this.temp7 = temp7;
		this.temp8 = temp8;
		this.temp9 = temp9;
		this.temp10 = temp10;
		this.temp11 = temp11;
		this.temp12 = temp12;
		this.humid1 = humid1;
		this.humid2 = humid2;
		this.humid3 = humid3;
		this.humid4 = humid4;
		this.humid5 = humid5;
		this.humid6 = humid6;
		this.humid7 = humid7;
		this.humid8 = humid8;
		this.humid9 = humid9;
		this.humid10 = humid10;
		this.humid11 = humid11;
		this.humid12 = humid12;
		this.name = name;
		this.thumbnail = thumbnail;
		this.speechtext = speechtext;
		this.imgs = imgs;
		this.modalContents = modalContents;
	}

	//희수 2020-01-28
	public Sendtofront(int id, float temp1, float temp2, float temp3, float temp4, float temp5, float temp6,
			float temp7, float temp8, float temp9, float temp10, float temp11, float temp12, float humid1, float humid2,
			float humid3, float humid4, float humid5, float humid6, float humid7, float humid8, float humid9,
			float humid10, float humid11, float humid12) {
		super();
		this.id = id;
		this.temp1 = temp1;
		this.temp2 = temp2;
		this.temp3 = temp3;
		this.temp4 = temp4;
		this.temp5 = temp5;
		this.temp6 = temp6;
		this.temp7 = temp7;
		this.temp8 = temp8;
		this.temp9 = temp9;
		this.temp10 = temp10;
		this.temp11 = temp11;
		this.temp12 = temp12;
		this.humid1 = humid1;
		this.humid2 = humid2;
		this.humid3 = humid3;
		this.humid4 = humid4;
		this.humid5 = humid5;
		this.humid6 = humid6;
		this.humid7 = humid7;
		this.humid8 = humid8;
		this.humid9 = humid9;
		this.humid10 = humid10;
		this.humid11 = humid11;
		this.humid12 = humid12;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public float getTemp1() {
		return temp1;
	}

	public void setTemp1(float temp1) {
		this.temp1 = temp1;
	}

	public float getTemp2() {
		return temp2;
	}

	public void setTemp2(float temp2) {
		this.temp2 = temp2;
	}

	public float getTemp3() {
		return temp3;
	}

	public void setTemp3(float temp3) {
		this.temp3 = temp3;
	}

	public float getTemp4() {
		return temp4;
	}

	public void setTemp4(float temp4) {
		this.temp4 = temp4;
	}

	public float getTemp5() {
		return temp5;
	}

	public void setTemp5(float temp5) {
		this.temp5 = temp5;
	}

	public float getTemp6() {
		return temp6;
	}

	public void setTemp6(float temp6) {
		this.temp6 = temp6;
	}

	public float getTemp7() {
		return temp7;
	}

	public void setTemp7(float temp7) {
		this.temp7 = temp7;
	}

	public float getTemp8() {
		return temp8;
	}

	public void setTemp8(float temp8) {
		this.temp8 = temp8;
	}

	public float getTemp9() {
		return temp9;
	}

	public void setTemp9(float temp9) {
		this.temp9 = temp9;
	}

	public float getTemp10() {
		return temp10;
	}

	public void setTemp10(float temp10) {
		this.temp10 = temp10;
	}

	public float getTemp11() {
		return temp11;
	}

	public void setTemp11(float temp11) {
		this.temp11 = temp11;
	}

	public float getTemp12() {
		return temp12;
	}

	public void setTemp12(float temp12) {
		this.temp12 = temp12;
	}

	public float getHumid1() {
		return humid1;
	}

	public void setHumid1(float humid1) {
		this.humid1 = humid1;
	}

	public float getHumid2() {
		return humid2;
	}

	public void setHumid2(float humid2) {
		this.humid2 = humid2;
	}

	public float getHumid3() {
		return humid3;
	}

	public void setHumid3(float humid3) {
		this.humid3 = humid3;
	}

	public float getHumid4() {
		return humid4;
	}

	public void setHumid4(float humid4) {
		this.humid4 = humid4;
	}

	public float getHumid5() {
		return humid5;
	}

	public void setHumid5(float humid5) {
		this.humid5 = humid5;
	}

	public float getHumid6() {
		return humid6;
	}

	public void setHumid6(float humid6) {
		this.humid6 = humid6;
	}

	public float getHumid7() {
		return humid7;
	}

	public void setHumid7(float humid7) {
		this.humid7 = humid7;
	}

	public float getHumid8() {
		return humid8;
	}

	public void setHumid8(float humid8) {
		this.humid8 = humid8;
	}

	public float getHumid9() {
		return humid9;
	}

	public void setHumid9(float humid9) {
		this.humid9 = humid9;
	}

	public float getHumid10() {
		return humid10;
	}

	public void setHumid10(float humid10) {
		this.humid10 = humid10;
	}

	public float getHumid11() {
		return humid11;
	}

	public void setHumid11(float humid11) {
		this.humid11 = humid11;
	}

	public float getHumid12() {
		return humid12;
	}

	public void setHumid12(float humid12) {
		this.humid12 = humid12;
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
		return "Sendtofront [id=" + id + ", temp1=" + temp1 + ", temp2=" + temp2 + ", temp3=" + temp3 + ", temp4="
				+ temp4 + ", temp5=" + temp5 + ", temp6=" + temp6 + ", temp7=" + temp7 + ", temp8=" + temp8 + ", temp9="
				+ temp9 + ", temp10=" + temp10 + ", temp11=" + temp11 + ", temp12=" + temp12 + ", humid1=" + humid1
				+ ", humid2=" + humid2 + ", humid3=" + humid3 + ", humid4=" + humid4 + ", humid5=" + humid5
				+ ", humid6=" + humid6 + ", humid7=" + humid7 + ", humid8=" + humid8 + ", humid9=" + humid9
				+ ", humid10=" + humid10 + ", humid11=" + humid11 + ", humid12=" + humid12 + ", name=" + name
				+ ", thumbnail=" + thumbnail + ", speechtext=" + speechtext + ", imgs=" + imgs + ", modalContents="
				+ modalContents + "]";
	}

}
