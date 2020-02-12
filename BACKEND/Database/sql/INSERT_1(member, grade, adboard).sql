use yb_travel;

desc membertb;
insert into membertb(username, password, company, grade) values("admin", SHA2('admin', 256), "SAMSUNG", 1);
insert into membertb(username, password, company, grade) values("heesu", SHA2('heesu', 256), "HEESU", 2);
insert into membertb(username, password, company, grade) values("kidong", SHA2('kidong', 256), "KIDONG", 3);
insert into membertb(username, password, company, grade) values("haeun", SHA2('haeun', 256), "HAEUN", 0);
insert into membertb(username, password, company, grade) values('choiys', SHA2('choiys', 256), 'CHOIYS', 4);
insert into membertb(username, password, company, grade) values('mandarin', SHA2('mandarin', 256), 'MANDARIN', 2);
SELECT * FROM membertb;

desc gradetb;
insert into gradetb(idx, name, volume) values(0, 'Basic', 0);
insert into gradetb(idx, name, volume) values(1, 'admin', 10000);
insert into gradetb(idx, name, volume) values(2, 'Silver', 5);
insert into gradetb(idx, name, volume) values(3, 'Gold', 10);
insert into gradetb(idx, name, volume) values(4, 'Platinum', 20);
select * from gradetb;

-- 월평균 table
desc monthtb;
select * from monthtb;

-- 이미지 테이블
desc imagetb;
select * from imagetb;

-- 전광판 정보
desc adboardtb;
select * from adboardtb;
insert into adboardtb(temp, humid, info) values(23.5, 38.4, '첫번째 테스트용 전광판');

-- 상담 정보
select * from counseltb;
insert into counseltb(name, age, email, tel, date, text, nation) values("상담자1", 20, "people1@ssafy.com", '010-1234-1234', '2020-01-01', '상담받고 싶어요', 1);
insert into counseltb(name, age, email, tel, date, text, nation) values("상담자2", 24, "people1@ssafy.com", '010-1234-1234', '2020-01-01', '상담받고 싶어요', 2);
insert into counseltb(name, age, email, tel, date, text, nation) values("상담자3", 26, "people1@ssafy.com", '010-1234-1234', '2020-01-01', '상담받고 싶어요', 3);
insert into counseltb(name, age, email, tel, date, text, nation) values("상담자4", 20, "people1@ssafy.com", '010-1234-1234', '2020-01-01', '상담받고 싶어요', 4);
insert into counseltb(name, age, email, tel, date, text, nation) values("상담자5", 22, "people1@ssafy.com", '010-1234-1234', '2020-01-01', '상담받고 싶어요', 5);
insert into counseltb(name, age, email, tel, date, text, nation) values("상담자6", 23, "people1@ssafy.com", '010-1234-1234', '2020-01-01', '상담받고 싶어요', 6);
insert into counseltb(name, age, email, tel, date, text, nation) values("상담자7", 24, "people1@ssafy.com", '010-1234-1234', '2020-01-01', '상담받고 싶어요', 7);
insert into counseltb(name, age, email, tel, date, text, nation) values("상담자8", 29, "people1@ssafy.com", '010-1234-1234', '2020-01-01', '상담받고 싶어요', 8);
insert into counseltb(name, age, email, tel, date, text, nation) values("상담자9", 33, "people1@ssafy.com", '010-1234-1234', '2020-01-01', '상담받고 싶어요', 9);
insert into counseltb(name, age, email, tel, date, text, nation) values("상담자10", 32, "people1@ssafy.com", '010-1234-1234', '2020-01-01', '상담받고 싶어요', 10);
insert into counseltb(name, age, email, tel, date, text, nation) values("상담자11", 20, "people1@ssafy.com", '010-1234-1234', '2020-01-01', '상담받고 싶어요', 11);
insert into counseltb(name, age, email, tel, date, text, nation) values("상담자12", 20, "people1@ssafy.com", '010-1234-1234', '2020-01-01', '상담받고 싶어요', 12);
insert into counseltb(name, age, email, tel, date, text, nation) values("상담자13", 20, "people1@ssafy.com", '010-1234-1234', '2020-01-01', '상담받고 싶어요', 13);
insert into counseltb(name, age, email, tel, date, text, nation) values("상담자14", 26, "people1@ssafy.com", '010-1234-1234', '2020-01-01', '상담받고 싶어요', 14);
insert into counseltb(name, age, email, tel, date, text, nation) values("상담자15", 84, "people1@ssafy.com", '010-1234-1234', '2020-01-01', '상담받고 싶어요', 15);
insert into counseltb(name, age, email, tel, date, text, nation) values("상담자16", 52, "people1@ssafy.com", '010-1234-1234', '2020-01-01', '상담받고 싶어요', 16);
insert into counseltb(name, age, email, tel, date, text, nation) values("상담자17", 73, "people1@ssafy.com", '010-1234-1234', '2020-01-01', '상담받고 싶어요', 17);
insert into counseltb(name, age, email, tel, date, text, nation) values("상담자18", 20, "people1@ssafy.com", '010-1234-1234', '2020-01-01', '상담받고 싶어요', 18);
insert into counseltb(name, age, email, tel, date, text, nation) values("상담자19", 28, "people1@ssafy.com", '010-1234-1234', '2020-01-01', '상담받고 싶어요', 19);
insert into counseltb(name, age, email, tel, date, text, nation) values("상담자20", 42, "people1@ssafy.com", '010-1234-1234', '2020-01-01', '상담받고 싶어요', 20);

