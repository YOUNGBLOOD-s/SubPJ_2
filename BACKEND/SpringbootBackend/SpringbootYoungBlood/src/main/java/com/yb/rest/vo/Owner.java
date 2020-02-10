package com.yb.rest.vo;

public class Owner {
	private String username, company;
	private int grade;

	public Owner() {
		// TODO Auto-generated constructor stub
	}

	public Owner(String username, String company, int grade) {
		super();
		this.username = username;
		this.company = company;
		this.grade = grade;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
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
		return "Owner [username=" + username + ", company=" + company + ", grade=" + grade + "]";
	}

}
