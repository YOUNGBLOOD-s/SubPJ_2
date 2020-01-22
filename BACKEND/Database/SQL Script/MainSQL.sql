create database yb_travel;
use yb_travel;

-- 나라 table
create table nationtb (
	 idx int auto_increment primary key,
     name varchar(30) UNIQUE,
     dust int, 
     continents int,
     cnt int default 0,
     speech varchar(100)
);
drop table nationtb;
desc nationtb;


-- 월평균 table
create table monthtb(
	idx int auto_increment primary key,
    nation int UNIQUE,
    tem1 float, tem2 float, tem3 float, tem4 float, tem5 float, tem6 float,
    tem7 float, tem8 float, tem9 float, tem10 float, tem11 float, tem12 float,
	hum1 float, hum2 float, hum3 float, hum4 float, hum5 float, hum6 float,
    hum7 float, hum8 float, hum9 float, hum10 float, hum11 float, hum12 float,
    foreign key (nation) references nationtb(idx)
);
drop table monthtb;
desc monthtb;

-- 경로 및 상세정보 table
create table contentstb (
	idx int auto_increment primary key,
    nation int,
    day int,
    seq int,
    title varchar(50),
    detail varchar(10000),
    image varchar(500),
    tofrom varchar(50),
    transport varchar(20),
    foreign key (nation) references nationtb(idx)
);
drop table contentstb;
desc contentstb;

-- 이미지 테이블
create table imagetb (
	idx int auto_increment primary key,
    nation int,
    type int,
    url varchar(500),
    foreign key (nation) references nationtb(idx)
);
drop table imagetb;
desc imagetb;

-- 전광판 정보
create table adboardtb (
	idx int auto_increment primary key,
    temp float,
    humid float,
    info varchar(100)
);
drop table adboardtb;
desc adboardtb;