-- create database yb_travel;
use yb_travel;

-- click table
CREATE TABLE IF NOT EXISTS `clicktb` (
	idx int auto_increment  primary key,
    nation int not null,
    click_cnt int not null,
    qr_cnt int not null,
    date date not null,
	foreign key (nation) references nationtb(idx)
);
# drop table clicktb;
desc clicktb;