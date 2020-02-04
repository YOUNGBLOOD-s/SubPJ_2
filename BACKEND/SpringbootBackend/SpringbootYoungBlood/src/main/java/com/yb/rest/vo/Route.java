package com.yb.rest.vo;

public class Route implements Comparable<Route>{
	private String idx, nation, day, seq, title, detail, image, tofrom, transport;
	public Route() {}
	public Route(String idx, String nation, String day, String seq, String title, String detail, String image, String tofrom, String transport) {
		this.idx = idx;
		this.nation = nation;
		this.day = day;
		this.seq = seq;
		this.title = title;
		this.detail = detail;
		this.image = image;
		this.tofrom = tofrom;
		this.transport = transport;
	}
	
	public String getIdx() {
		return idx;
	}
	public void setIdx(String idx) {
		this.idx = idx;
	}
	public String getTransport() {
		return transport;
	}
	public void setTransport(String transport) {
		this.transport = transport;
	}
	public String getNation() {
		return nation;
	}
	public void setNation(String nation) {
		this.nation = nation;
	}
	public String getDay() {
		return day;
	}
	public void setDay(String day) {
		this.day = day;
	}
	public String getSeq() {
		return seq;
	}
	public void setSeq(String seq) {
		this.seq = seq;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDetail() {
		return detail;
	}
	public void setDetail(String detail) {
		this.detail = detail;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getTofrom() {
		return tofrom;
	}
	public void setTofrom(String tofrom) {
		this.tofrom = tofrom;
	}
	@Override
	public String toString() {
		return "Route [idx=" + idx + ", nation=" + nation + ", day=" + day + ", seq=" + seq + ", title=" + title
				+ ", detail=" + detail + ", image=" + image + ", tofrom=" + tofrom + ", transport=" + transport + "]";
	}
	@Override
	public int compareTo(Route o) {
		int res=0;
		if(Integer.parseInt(this.day)<Integer.parseInt(o.day)) {
			res=1;
		}else if(Integer.parseInt(this.day)>Integer.parseInt(o.day)) {
			res=-1;
		}else {
			if(Integer.parseInt(this.seq)<Integer.parseInt(o.seq)) {
				res=1;
			}else if(Integer.parseInt(this.seq)>Integer.parseInt(o.seq)) {
				res=-1;
			}else res=0;
		}
		return res;
	};
	
}
