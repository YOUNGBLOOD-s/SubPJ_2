package com.yb.rest.dao;

import java.util.ArrayList;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.yb.rest.vo.Member;

@Repository
public class MemDaoImpl implements IMemDao {
	
	@Autowired
	SqlSession session;

	@Override
	public String getPassword(String username) {
		return session.selectOne("member.selectpassword", username);
	}

	@Override
	public boolean registerMem(String username, String password, String company, int grade) {
		// TODO Auto-generated method stub
		Member m = new Member(username, password, company, grade);
		int insert = session.insert("member.insertMember", m);
		if (insert == 0)
			return false;
		else
			return true;
	}

	@Override
	public ArrayList<Member> listMem() {
		// TODO Auto-generated method stub
		return (ArrayList) session.selectList("member.selectmemList");
	}

	@Override
	public Member InfoMem(String username) {
		return session.selectOne("member.selectmemInfo", username);
	}

	@Override
	public boolean UpdateMem(String username, String password, String company, int grade) {
		Member m = new Member(username, password, company, grade);
		int update = session.update("member.updateMember", m);
		if (update == 0)
			return false;
		else
			return true;
	}

	@Override
	public boolean DeleteMem(String password) {
		int delete = session.delete("member.deleteMember", password);
		if (delete == 0)
			return false;
		else
			return true;
	}
	
	
}
