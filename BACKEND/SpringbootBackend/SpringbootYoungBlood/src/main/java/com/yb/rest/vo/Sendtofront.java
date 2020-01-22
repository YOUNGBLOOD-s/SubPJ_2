package com.yb.rest.vo;

import java.util.List;

public class Sendtofront {
	private int id;
	private float temp, humid;
	private String name, thumbnail, speechtext;
	private List<String> imgs, modalContents;
	
	public Sendtofront() {}

	public Sendtofront(int id, float temp, float humid, String name, String thumbnail, String speechtext,
			List<String> imgs, List<String> modalContents) {
		this.id = id;
		this.temp = temp;
		this.humid = humid;
		this.name = name;
		this.thumbnail = thumbnail;
		this.speechtext = speechtext;
		this.imgs = imgs;
		this.modalContents = modalContents;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public float getTemp() {
		return temp;
	}

	public void setTemp(float temp) {
		this.temp = temp;
	}

	public float getHumid() {
		return humid;
	}

	public void setHumid(float humid) {
		this.humid = humid;
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
		return "Sendtofront [id=" + id + ", temp=" + temp + ", humid=" + humid + ", name=" + name + ", thumbnail="
				+ thumbnail + ", speechtext=" + speechtext + ", imgs=" + imgs + ", modalContents=" + modalContents
				+ "]";
	};

}
