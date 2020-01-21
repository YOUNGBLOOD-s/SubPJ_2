package com.yb.rest.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.yb.rest.vo.Board;
@Repository
public class BoardDaoImpl implements IBoardDao {

	@Autowired
	SqlSession sess;
	
	@Override
	public void insertBoard(Board b) {
		sess.insert("board.insert", b);
	}

	@Override
	public void updateBoard(Board b) {
		sess.update("board.update", b);
	}

	@Override
	public void deleteBoard(int code) {
		sess.delete("board.delete", code);
	}

	@Override
	public List<Board> selectBoardList() {
		return sess.selectList("board.selectlist");
	}

	@Override
	public Board selectBoardOne(int code) {
		return sess.selectOne("board.selectone", code);
	}

}
