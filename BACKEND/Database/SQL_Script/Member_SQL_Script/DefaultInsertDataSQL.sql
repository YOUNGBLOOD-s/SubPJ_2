# create database yb_travel;
use yb_travel;

desc membertb;
insert into membertb(username, password, company, grade) values("admin", "admin", "SAMSUNG", 1);
SELECT * FROM MEMBERTB;

desc gradetb;
insert into gradetb(idx, name, volume) values(0, 'grade0', 0);
insert into gradetb(idx, name, volume) values(1, 'admin', 10000);
insert into gradetb(idx, name, volume) values(2, 'grade1', 5);
insert into gradetb(idx, name, volume) values(3, 'grade2', 10);
select * from gradetb;
