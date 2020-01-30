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


