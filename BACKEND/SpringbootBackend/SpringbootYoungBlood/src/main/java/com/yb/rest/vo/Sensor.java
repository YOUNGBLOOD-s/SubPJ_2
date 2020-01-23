package com.yb.rest.vo;
//push test2223334444444444
public class Sensor {
	private float temp;
	private float humid;
	private float dust;
	private float rough;
	private String info;
	//haeun
	public Sensor() {
		
	}
	public Sensor(float temp, float humid, float dust, float rough, String info) {
		super();
		this.temp = temp;
		this.humid = humid;
		this.dust = dust;
		this.rough = rough;
		this.info = info;
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
	public float getDust() {
		return dust;
	}
	public void setDust(float dust) {
		this.dust = dust;
	}
	public float getRough() {
		return rough;
	}
	public void setRough(float rough) {
		this.rough = rough;
	}
	public String getInfo() {
		return info;
	}
	public void setInfo(String info) {
		this.info = info;
	}
	@Override
	public String toString() {
		return "sensor [temp=" + temp + ", humid=" + humid + ", dust=" + dust + ", rough=" + rough + ", info=" + info
				+ "]";
	}
	
	
	
}
