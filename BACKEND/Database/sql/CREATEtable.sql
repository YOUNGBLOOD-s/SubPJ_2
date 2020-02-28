-- create database yb_travel;
use yb_travel;

-- member table
CREATE TABLE IF NOT EXISTS `membertb` (
	 idx int auto_increment primary key,
     username varchar(20) unique,
     password varchar(100),
     company varchar(20),
     grade int default 0
);
desc membertb;

-- grade table
CREATE TABLE IF NOT EXISTS `gradetb` (
	 idx int primary key,
     name varchar(20) unique,
     volume int default 0
);
desc gradetb;

-- 나라 table
CREATE TABLE IF NOT EXISTS `nationtb` (
	 idx int auto_increment  primary key,
     en_name varchar(30) UNIQUE,
     ko_name varchar(30) UNIQUE,
     dust int default 0, 
     continents int,
     showcnt int default 0,
     customer int default 0,
     weight int default 0,
     speech varchar(100),
     price int,
     type int default 1,
     s_date date,
     f_date date,
     flag int default 0, # 1:false 0:true
     completed boolean default false,
     foreign key (customer) references membertb(idx)
     on delete cascade
);
desc nationtb;

-- 월평균 table
CREATE TABLE IF NOT EXISTS `monthtb`(
	idx int auto_increment primary key,
    nation int UNIQUE,
    tem1 float, tem2 float, tem3 float, tem4 float, tem5 float, tem6 float,
    tem7 float, tem8 float, tem9 float, tem10 float, tem11 float, tem12 float,
	hum1 float, hum2 float, hum3 float, hum4 float, hum5 float, hum6 float,
    hum7 float, hum8 float, hum9 float, hum10 float, hum11 float, hum12 float,
    foreign key (nation) references nationtb(idx)
    on delete cascade
);
desc monthtb;

-- 경로 및 상세정보 table
CREATE TABLE IF NOT EXISTS `contentstb` (
	idx int auto_increment primary key,
    nation int,
    day int,
    seq int,
    title varchar(50) UNIQUE,
    detail varchar(10000),
    image varchar(500),
    tofrom varchar(50),
    transport varchar(20),
    foreign key (nation) references nationtb(idx)
    on delete cascade
);
desc contentstb;

-- 이미지 테이블
CREATE TABLE IF NOT EXISTS `imagetb` (
	idx int auto_increment primary key,
    nation int,
    type int,
    url varchar(500),
    foreign key (nation) references nationtb(idx)
    on delete cascade
);
desc imagetb;

-- 전광판 정보
CREATE TABLE IF NOT EXISTS `adboardtb` (
	idx int auto_increment primary key,
    temp float,
    humid float,
    dust float,
    rough float,
    info varchar(100)
);
desc adboardtb;

-- 1:1 상담 테이블
CREATE TABLE IF NOT EXISTS `counseltb` (
	idx int auto_increment primary key,
    name varchar(20) NOT NULL,
    age int NOT NULL,
    email varchar(100) NOT NULL,
    tel varchar(100) NOT NULL,
    date varchar(100) NOT NULL,
    text varchar(1000),
    nation int,
    completed boolean default false,
    foreign key (nation) references nationtb(idx)
    on delete cascade
);
desc counseltb;

CREATE TABLE IF NOT EXISTS `clicktb` (
	idx int auto_increment  primary key,
    nation int not null,
    click_cnt int not null,
    qr_cnt int not null,
    date datetime not null,
	foreign key (nation) references nationtb(idx)
    on delete cascade
);
desc clicktb;

CREATE TABLE IF NOT EXISTS `reconumtb`(
	num int primary key
);
desc reconumtb;
