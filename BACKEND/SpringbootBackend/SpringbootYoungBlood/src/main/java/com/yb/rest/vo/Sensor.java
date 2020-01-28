package com.yb.rest.vo;
public class Sensor {
	private int idx;
	private float temp;
	private float humid;
	private float dust;
	private float rough;
	private String info;
	
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

	//미세먼지,조도센서를 임의로 밖아서 test하기 위해서
	public Sensor(float temp, float humid) {
		super();
		this.temp = temp;
		this.humid = humid;
		this.dust = 0;
		this.rough = 0;
		this.info = "tmp";
	}
	
	//controller에서 저장위해서
	public Sensor(int idx, float temp, float humid) {
		super();
		this.idx = idx;
		this.temp = temp;
		this.humid = humid;
	}
	
	
	public int getIdx() {
		return idx;
	}

	public void setIdx(int idx) {
		this.idx = idx;
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
		return "Sensor [idx=" + idx + ", temp=" + temp + ", humid=" + humid + "]";
	}
	
	
	
}
