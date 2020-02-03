-- create database yb_travel;
use yb_travel;

-- 나라 table
CREATE TABLE IF NOT EXISTS `nationtb` (
	 idx int auto_increment  primary key,
     en_name varchar(30) UNIQUE,
     ko_name varchar(30) UNIQUE,
     dust int, 
     continents int,
     showcnt int default 0,
     customer int,
     weight int,
     speech varchar(100),
     price int,
     type int default 1,
     foreign key (customer) references membertb(idx)
);
desc nationtb;
select * from nationtb;


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
    text varchar(1000)
);
desc counseltb;