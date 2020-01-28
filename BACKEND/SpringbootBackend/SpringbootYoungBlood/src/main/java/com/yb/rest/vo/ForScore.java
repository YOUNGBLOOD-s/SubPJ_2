package com.yb.rest.vo;

public class ForScore {
	int idx;
	int score;
	
	public ForScore() {}
	
	public ForScore(int idx, int score) {
		super();
		this.idx = idx;
		this.score = score;
	}

	public int getIdx() {
		return idx;
	}

	public void setIdx(int idx) {
		this.idx = idx;
	}

	public int getScore() {
		return score;
	}

	public void setScore(int score) {
		this.score = score;
	}

	@Override
	public String toString() {
		return "ForScore [idx=" + idx + ", score=" + score + "]";
	}
	
	
}
