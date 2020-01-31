select detail from contentstb where nation=1;

-- join
select nationtb.idx, nationtb.name, nationtb.speech, 
monthtb.tem1, monthtb.tem2, monthtb.tem3, monthtb.tem4, monthtb.tem5, monthtb.tem6, monthtb.tem7, monthtb.tem8, monthtb.tem9, monthtb.tem10, monthtb.tem11, monthtb.tem12,
monthtb.hum1, monthtb.hum2, monthtb.hum3, monthtb.hum4, monthtb.hum5, monthtb.hum6, monthtb.hum7, monthtb.hum8, monthtb.hum9, monthtb.hum10, monthtb.hum11, monthtb.hum12,
	(select url
    from imagetb
    where imagetb.type=2 AND nationtb.idx=imagetb.nation) as url
from monthtb inner join nationtb
on monthtb.nation=nationtb.idx
where nationtb.idx=8;

-- 현재 온도 0도 시, 뽑아야 할 데이터 목록임. 여기서 온도와 습도, 미세먼지 점수화하여 ㅇㅇ
select * from monthtb;
select b.name, a.nation, a.tem2, a.hum2 from monthtb a, nationtb b
where a.tem2>=0 and a.nation=b.idx order by tem2 asc;

-- 나라 별 경로
select nation, day, seq, title, detail, image, tofrom, transport from contentstb where nation=13;
desc contentstb;

select * from nationtb;
select * from imagetb;
desc imagetb;
desc nationtb;

select idx, name, (select url from imagetb where type=2 and nation=1), price, continents
from nationtb
where idx=1;

use yb_travel;
select * from nationtb where idx=8 or idx=14 or idx=9;
select * from nationtb where idx=1;

select * from contentstb;

update nationtb 
set showcnt=showcnt+1
where idx=1;

select idx, name, dust, continents, clickcnt, showcnt, customer, weight, speech, (select url from imagetb where type=3 AND nation=1) as url, price, type
	from nationtb
	where idx=1;
    select url from imagetb where type=3 AND nation=1;
# 나라와 관련없는 테이블
select * from adboardtb;

# 나라와 관련 있는 테이블
select * from contentstb;
select * from imagetb;
desc imagetb;
select * from monthtb;
select * from nationtb;
select * from membertb;

select * from counseltb;
insert into counseltb(name, age, email, tel, date, text) 
	values ('이름', 1, 'email', 'tel', 'data', 'text');
delete from counseltb where idx=4;
