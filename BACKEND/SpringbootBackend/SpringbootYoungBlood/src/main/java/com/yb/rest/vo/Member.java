package com.yb.rest.vo;

public class Member {
	private String username, password, company, grade;

	public Member() {};

	public Member(String username, String password) {
		this.username = username;
		this.password = password;
	}

	public Member(String username, String password, String company, String grade) {
		this.username = username;
		this.password = password;
		this.company = company;
		this.grade = grade;
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

	public String getGrade() {
		return grade;
	}

	public void setGrade(String grade) {
		this.grade = grade;
	}

	@Override
	public String toString() {
		return "Member [username=" + username + ", password=" + password + ", company=" + company + ", grade=" + grade
				+ "]";
	}

}
