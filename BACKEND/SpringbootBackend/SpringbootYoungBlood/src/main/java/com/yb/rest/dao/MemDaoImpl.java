package com.yb.rest.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
	public void registerMem(String username, String password, String company) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("username", username);
		map.put("password", password);
		map.put("company", company);
		session.insert("member.insertMember", map);
	}

	@Override
	public List<Member> listMem() {
		return session.selectList("member.selectmemList");
	}

	@Override
	public Member InfoMem(String username) {
		return session.selectOne("member.selectmemInfo", username);
	}

	@Override
	public void DeleteMem(String username) {
		session.delete("member.deleteMember", username);
	}

	@Override
	public void updateGrade(String username, int grade) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("username", username);
		map.put("grade", grade);
		session.update("member.updategrade", map);
	}

	@Override
	public void DeleteMem(int idx) {
		session.delete("member.deleteMemberIdx", idx);
	}

	@Override
	public void UpdateMem(String username, String password, String company, int grade) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("username", username);
		map.put("password", password);
		map.put("company", company);
		map.put("grade", grade);
		session.update("member.updateMemberAdmin", map);
	}

	@Override
	public void UpdateMem(String username, String password, String company) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("username", username);
		map.put("password", password);
		map.put("company", company);
		session.update("member.updateMember", map);
	}

	@Override
	public String getSHA256(String plain) {
		return session.selectOne("member.select256", plain);
	}

	@Override
	public void UpdateMem(String username, String company, int grade) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("username", username);
		map.put("company", company);
		map.put("grade", grade);
		session.update("member.updatecomgrade", map);
	}

	@Override
	public void UpdateMem(String username, String company) {
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("company", company);
		map.put("username", username);
		session.update("member.updatecom", map);
	}

	@Override
	public int selectGrade(String username) {
		return session.selectOne("member.selectGrade", username);
	}
	
	
}
