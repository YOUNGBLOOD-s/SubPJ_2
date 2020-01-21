package com.yb.rest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yb.rest.dao.BoardDaoImpl;
import com.yb.rest.vo.Board;

@Service
public class BoardServiceImpl implements IBoardService {

	@Autowired
	BoardDaoImpl dao;
	
	@Override
	public void insertBoard(Board b) {
		dao.insertBoard(b);
	}

	@Override
	public void updateBoard(Board b) {
		dao.updateBoard(b);
	}

	@Override
	public void deleteBoard(int code) {
		dao.deleteBoard(code);
	}

	@Override
	public List<Board> selectBoardList() {
		return dao.selectBoardList();
	}

	@Override
	public Board selectBoardOne(int code) {
		return dao.selectBoardOne(code);
	}

}
