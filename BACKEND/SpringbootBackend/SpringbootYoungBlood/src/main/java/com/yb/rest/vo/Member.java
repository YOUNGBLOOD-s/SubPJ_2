package com.yb.rest.vo;

public class Member {
	private String idx, username, password, company;
	private int grade;

	public Member() {
	};

	public Member(String username, String password) {
		this.username = username;
		this.password = password;
	}

	public Member(String username, String password, String company, int grade) {
		super();
		this.username = username;
		this.password = password;
		this.company = company;
		this.grade = grade;
	}

	public Member(String idx, String username, String password, String company, int grade) {
		super();
		this.idx = idx;
		this.username = username;
		this.password = password;
		this.company = company;
		this.grade = grade;
	}

	public String getIdx() {
		return idx;
	}

	public void setIdx(String idx) {
		this.idx = idx;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public int getGrade() {
		return grade;
	}

	public void setGrade(int grade) {
		this.grade = grade;
	}

	@Override
	public String toString() {
		return "Member [username=" + username + ", password=" + password + ", company=" + company + ", grade=" + grade
				+ "]";
	}

}
