package com.yb.rest.vo;

public class Receivefromsensor {
	private int nationidx, type;
	public Receivefromsensor() {}
	public Receivefromsensor(int nationidx, int type) {
		this.nationidx = nationidx;
		this.type = type;
	}
	public int getNationidx() {
		return nationidx;
	}
	public void setNationidx(int nationidx) {
		this.nationidx = nationidx;
	}
	public int getType() {
		return type;
	}
	public void setType(int type) {
		this.type = type;
	}
	@Override
	public String toString() {
		return "Receivefromsensor [nationidx=" + nationidx + ", type=" + type + "]";
	};
	
}
