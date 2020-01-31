package com.yb.rest.vo;

public class Counsel {
	private int age;
	private String name, email, tel, date, text;
	public Counsel() {}
	public Counsel(int age, String name, String email, String tel, String date, String text) {
		this.age = age;
		this.name = name;
		this.email = email;
		this.tel = tel;
		this.date = date;
		this.text = text;
	}

	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	@Override
	public String toString() {
		return "Counsel [age=" + age + ", name=" + name + ", email=" + email + ", tel=" + tel + ", date=" + date
				+ ", text=" + text + "]";
	}
}
