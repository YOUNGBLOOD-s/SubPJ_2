package com.yb.rest.vo;

public class Route {
	private String nation, day, seq, title, detail, image, tofrom;
	public Route() {}
	public Route(String nation, String day, String seq, String title, String detail, String image, String tofrom) {
		this.nation = nation;
		this.day = day;
		this.seq = seq;
		this.title = title;
		this.detail = detail;
		this.image = image;
		this.tofrom = tofrom;
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
		return "Route [nation=" + nation + ", day=" + day + ", seq=" + seq + ", title=" + title + ", detail=" + detail
				+ ", image=" + image + ", tofrom=" + tofrom + "]";
	};
	
}
