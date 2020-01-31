package com.yb.rest.vo;

import java.util.Arrays;

public class Keyboard {
	private String type;
	private String[] buttons;
	public Keyboard(String[] buttons) {
		this.type="buttons";
		this.buttons=buttons;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String[] getButtons() {
		return buttons;
	}
	public void setButtons(String[] buttons) {
		this.buttons = buttons;
	}
	@Override
	public String toString() {
		return "Keyboard [type=" + type + ", buttons=" + Arrays.toString(buttons) + "]";
	}
	
}
