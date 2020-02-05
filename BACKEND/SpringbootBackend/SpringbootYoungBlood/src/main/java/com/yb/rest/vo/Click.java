package com.yb.rest.vo;

public class Click {
	private String idx, nation, click_cnt, qr_cnt, date;

	public Click() {}
	
	public Click(String idx, String nation, String click_cnt, String qr_cnt, String date) {
		this.idx = idx;
		this.nation = nation;
		this.click_cnt = click_cnt;
		this.qr_cnt = qr_cnt;
		this.date = date;
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

	public String getClick_cnt() {
		return click_cnt;
	}

	public void setClick_cnt(String click_cnt) {
		this.click_cnt = click_cnt;
	}

	public String getQr_cnt() {
		return qr_cnt;
	}

	public void setQr_cnt(String qr_cnt) {
		this.qr_cnt = qr_cnt;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "Click [idx=" + idx + ", nation=" + nation + ", click_cnt=" + click_cnt + ", qr_cnt=" + qr_cnt
				+ ", date=" + date + "]";
	}
}
