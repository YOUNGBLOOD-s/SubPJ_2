# create database yb_travel;
use yb_travel;

-- member table
CREATE TABLE IF NOT EXISTS `membertb` (
	 idx int auto_increment primary key,
     username varchar(20) unique,
     password varchar(20),
     company varchar(20),
     grade int default 0
);
desc membertb;