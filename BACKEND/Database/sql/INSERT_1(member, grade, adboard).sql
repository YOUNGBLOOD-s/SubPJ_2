use yb_travel;

desc membertb;
insert into membertb(username, password, company, grade) values("admin", "admin", "SAMSUNG", 1);
insert into membertb(username, password, company, grade) values("heesu", "heesu", "HEESU", 2);
insert into membertb(username, password, company, grade) values("kidong", "kidong", "KIDONG", 3);
insert into membertb(username, password, company, grade) values("haeun", "haeun", "HAEUN", 0);
SELECT * FROM MEMBERTB;

desc gradetb;
insert into gradetb(idx, name, volume) values(0, 'grade0', 0);
insert into gradetb(idx, name, volume) values(1, 'admin', 10000);
insert into gradetb(idx, name, volume) values(2, 'grade1', 5);
insert into gradetb(idx, name, volume) values(3, 'grade2', 10);
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
