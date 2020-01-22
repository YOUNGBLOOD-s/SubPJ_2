create database fooddb;
use fooddb;

drop table food;
drop table memtb;

create table food (
   code int primary key,
   name varchar(30),
   maker varchar(30),
   material varchar(600),
   image varchar(50),
   supportpereat varchar(30),
   calory varchar(30),
   carbo varchar(30),
   protein varchar(30),
   fat varchar(30),
   sugar varchar(30),
   natrium varchar(30),
   chole varchar(30),
   fattyacid varchar(30),
   transfat varchar(30),
   count int default 0
);

create table memtb(
id varchar(20) primary key,
pw varchar(20) not null,
name varchar(20),
addr varchar(200),
email varchar(50),
tel varchar(50),
alinfo varchar(500)
);

create table boardtb(
code int auto_increment primary key,
id varchar(20),
title varchar(100) not null,
content varchar(1000) default 'test',
foreign key (id) references memtb(id)
);

create table qnatb(
code int auto_increment primary key,
id varchar(20),
title varchar(100) not null,
content varchar(1000) default 'test',
foreign key (id) references memtb(id)
);


insert into memtb values('ssafy', '1234', '김하은','장덕동', 'ssafy@ssafy.com', '010-1111-2222', '10');

select * from memtb;
select * from food;
desc memtb;
desc food;


