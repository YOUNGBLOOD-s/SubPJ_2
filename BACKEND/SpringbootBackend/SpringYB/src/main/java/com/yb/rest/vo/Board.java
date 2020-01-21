package com.yb.rest.vo;

public class Board {
	private int code;
	private String id, title, content;
	public Board() {}
	public Board(String code, String id, String title, String content) {
		super();
		this.code = Integer.parseInt(code);
		this.id = id;
		this.title = title;
		this.content = content;
	}
	public Board(int code, String id, String title, String content) {
		super();
		this.code = code;
		this.id = id;
		this.title = title;
		this.content = content;
	}
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	@Override
	public String toString() {
		return "Board [code=" + code + ", id=" + id + ", title=" + title + ", content=" + content + "]";
	}
}
