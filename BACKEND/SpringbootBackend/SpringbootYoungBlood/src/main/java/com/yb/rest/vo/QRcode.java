package com.yb.rest.vo;

public class QRcode {
	private String id, imageId, toFrom, description, transport;
	public QRcode() {}
	public QRcode(String id, String imageId, String toFrom, String description, String transport) {
		this.id = id;
		this.imageId = imageId;
		this.toFrom = toFrom;
		this.description = description;
		this.transport = transport;
	}

	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getImageId() {
		return imageId;
	}
	public void setImageId(String imageId) {
		this.imageId = imageId;
	}
	public String getToFrom() {
		return toFrom;
	}
	public void setToFrom(String toFrom) {
		this.toFrom = toFrom;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getTransport() {
		return transport;
	}
	public void setTransport(String transport) {
		this.transport = transport;
	}
	@Override
	public String toString() {
		return "QRcode [id=" + id + ", imageId=" + imageId + ", toFrom=" + toFrom + ", description=" + description
				+ ", transport=" + transport + "]";
	};
	
}
