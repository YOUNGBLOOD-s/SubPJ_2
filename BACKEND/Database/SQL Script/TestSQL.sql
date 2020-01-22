select detail from contentstb where nation=1;

select monthtb.hum1, monthtb.tem1, nationtb.name, nationtb.url, nationtb.speech
from monthtb inner join nationtb
on monthtb.nation=nationtb.idx;


-- 현재 온도 0도 시, 뽑아야 할 데이터 목록임. 여기서 온도와 습도, 미세먼지 점수화하여 ㅇㅇ
select * from monthtb;
select b.name, a.nation, a.tem2, a.hum2 from monthtb a, nationtb b
where a.tem2>=0 and a.nation=b.idx order by tem2 asc;