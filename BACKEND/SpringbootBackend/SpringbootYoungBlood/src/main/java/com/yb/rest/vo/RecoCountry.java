package com.yb.rest.vo;

public class RecoCountry {
	private int id;
	private float temp, humid;
	private String name, content, thumbnail;
	public RecoCountry() {}
	public RecoCountry(int id, float temp, float humid, String name, String content, String thumbnail) {
		super();
		this.id = id;
		this.temp = temp;
		this.humid = humid;
		this.name = name;
		this.content = content;
		this.thumbnail = thumbnail;
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
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getThumbnail() {
		return thumbnail;
	}
	public void setThumbnail(String thumbnail) {
		this.thumbnail = thumbnail;
	};
	
	
}
