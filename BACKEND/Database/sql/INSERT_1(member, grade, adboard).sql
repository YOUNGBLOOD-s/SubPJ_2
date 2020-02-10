use yb_travel;

desc membertb;
insert into membertb(username, password, company, grade) values("admin", SHA2('admin', 256), "SAMSUNG", 1);
insert into membertb(username, password, company, grade) values("heesu", SHA2('heesu', 256), "HEESU", 2);
insert into membertb(username, password, company, grade) values("kidong", SHA2('kidong', 256), "KIDONG", 3);
insert into membertb(username, password, company, grade) values("haeun", SHA2('haeun', 256), "HAEUN", 0);
insert into membertb(username, password, company, grade) values('choiys', SHA2('choiys', 256), 'CHOIYS', 4);
insert into membertb(username, password, company, grade) values('mandarin', SHA2('mandarin', 256), 'MANDARIN', 2);
SELECT * FROM MEMBERTB;

desc gradetb;
insert into gradetb(idx, name, volume) values(0, 'grade0', 0);
insert into gradetb(idx, name, volume) values(1, 'admin', 10000);
insert into gradetb(idx, name, volume) values(2, 'grade1', 5);
insert into gradetb(idx, name, volume) values(3, 'grade2', 10);
insert into gradetb(idx, name, volume) values(4, 'grade3', 20);
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
