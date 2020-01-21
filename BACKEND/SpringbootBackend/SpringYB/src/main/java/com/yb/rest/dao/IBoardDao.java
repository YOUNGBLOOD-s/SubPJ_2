package com.yb.rest.dao;

import java.util.List;

import com.yb.rest.vo.Board;

public interface IBoardDao {
	public void insertBoard(Board b);
	public void updateBoard(Board b);
	public void deleteBoard(int code);
	public List<Board> selectBoardList();
	public Board selectBoardOne(int code);
}
