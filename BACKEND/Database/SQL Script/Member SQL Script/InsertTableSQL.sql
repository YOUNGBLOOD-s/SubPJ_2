create database yb_travel;
use yb_travel;

-- 나라 table
create table membertb (
	 idx int auto_increment primary key,
     name varchar(30) UNIQUE
);