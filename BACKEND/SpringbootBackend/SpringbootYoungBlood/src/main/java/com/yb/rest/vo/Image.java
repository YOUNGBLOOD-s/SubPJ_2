package com.yb.rest.vo;

public class Image {
	private String idx, nation;
	private int type;
	private String url;

	public Image() {
		// TODO Auto-generated constructor stub
	}

	public Image(String nation, int type) {
		super();
		this.nation = nation;
		this.type = type;
	}

	public Image(String nation, int type, String url) {
		super();
		this.nation = nation;
		this.type = type;
		this.url = url;
	}

	public Image(String idx, String nation, int type, String url) {
		super();
		this.idx = idx;
		this.nation = nation;
		this.type = type;
		this.url = url;
	}

	public String getIdx() {
		return idx;
	}

	public void setIdx(String idx) {
		this.idx = idx;
	}

	public String getNation() {
		return nation;
	}

	public void setNation(String nation) {
		this.nation = nation;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	@Override
	public String toString() {
		return "Image [idx=" + idx + ", nation=" + nation + ", type=" + type + ", url=" + url + "]";
	}

}
