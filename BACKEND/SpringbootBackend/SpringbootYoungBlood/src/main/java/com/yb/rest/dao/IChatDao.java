package com.yb.rest.dao;

import java.util.ArrayList;
import java.util.List;

import com.yb.rest.vo.Click;
import com.yb.rest.vo.Nation;

public interface IChatDao {

	List<Nation> findContinent(String string);

	List<Click> selectFavorite();

}
