# create database yb_travel;
use yb_travel;

-- member table
create table membertb (
	 idx int auto_increment,
     username varchar(20) primary key,
     password varchar(20),
     company varchar(20),
     grade int default 1
);
desc membertb;