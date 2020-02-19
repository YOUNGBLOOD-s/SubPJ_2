# 등록된 데이터는 80개 입니다.
use yb_travel;

select * from imagetb;
# delete from imagetb;
# ALTER TABLE imagetb AUTO_INCREMENT=1;
-- 독일
insert into imagetb(nation, type, url)
    values(1, 1, 'germany/light_w.png');
insert into imagetb(nation, type, url)
    values(1, 2, 'germany/light_c.png');
insert into imagetb(nation, type, url)
    values(1, 3, 'germany/dark_w.png');
insert into imagetb(nation, type, url)
    values(1, 4, 'germany/dark_c.png');
-- 이탈리아
insert into imagetb(nation, type, url)
    values(2, 1, 'italy/light_w.png');
insert into imagetb(nation, type, url)
    values(2, 2, 'italy/light_c.png');
insert into imagetb(nation, type, url)
    values(2, 3, 'italy/dark_w.png');
insert into imagetb(nation, type, url)
    values(2, 4, 'italy/dark_c.png');
    
-- 프랑스
insert into imagetb(nation, type, url)
    values(3, 1, 'france/light_w.png');
insert into imagetb(nation, type, url)
    values(3, 2, 'france/light_c.png');
insert into imagetb(nation, type, url)
    values(3, 3, 'france/dark_w.png');
insert into imagetb(nation, type, url)
    values(3, 4, 'france/dark_c.png');
    
-- 그리스
insert into imagetb(nation, type, url)
    values(4, 1, 'greec/light_w.png');
insert into imagetb(nation, type, url)
    values(4, 2, 'greec/light_c.png');
insert into imagetb(nation, type, url)
    values(4, 3, 'greec/dark_w.png');
insert into imagetb(nation, type, url)
    values(4, 4, 'greec/dark_c.png');
    
-- 크로아티아
insert into imagetb(nation, type, url)
    values(5, 1, 'croatia/light_w.png');
insert into imagetb(nation, type, url)
    values(5, 2, 'croatia/light_c.png');
insert into imagetb(nation, type, url)
    values(5, 3, 'croatia/dark_w.png');
insert into imagetb(nation, type, url)
    values(5, 4, 'croatia/dark_c.png');
-- 스위스
insert into imagetb(nation, type, url)
    values(6, 1, 'switzerland/light_w.png');
insert into imagetb(nation, type, url)
    values(6, 2, 'switzerland/light_c.png');
insert into imagetb(nation, type, url)
    values(6, 3, 'switzerland/dark_w.png');
insert into imagetb(nation, type, url)
    values(6, 4, 'switzerland/dark_c.png');
-- 하와이
insert into imagetb(nation, type, url)
    values(7, 1, 'hawai/light_w.png');
insert into imagetb(nation, type, url)
    values(7, 2, 'hawai/light_c.png');
insert into imagetb(nation, type, url)
    values(7, 3, 'hawai/dark_w.png');
insert into imagetb(nation, type, url)
    values(7, 4, 'hawai/dark_c.png');
    
-- 두바이+이집트
insert into imagetb(nation, type, url)
    values(8, 1, 'dubai/light_w.png');
insert into imagetb(nation, type, url)
    values(8, 2, 'dubai/light_c.png');
insert into imagetb(nation, type, url)
    values(8, 3, 'dubai/dark_w.png');
insert into imagetb(nation, type, url)
    values(8, 4, 'dubai/dark_c.png');
    
-- 케냐
insert into imagetb(nation, type, url)
    values(9, 1, 'kenya/light_w.png');
insert into imagetb(nation, type, url)
    values(9, 2, 'kenya/light_c.png');
insert into imagetb(nation, type, url)
    values(9, 3, 'kenya/dark_w.png');
insert into imagetb(nation, type, url)
    values(9, 4, 'kenya/dark_c.png');
    
-- 홍콩
insert into imagetb(nation, type, url)
    values(10, 1, 'hongkong/light_w.png');
insert into imagetb(nation, type, url)
    values(10, 2, 'hongkong/light_c.png');
insert into imagetb(nation, type, url)
    values(10, 3, 'hongkong/dark_w.png');
insert into imagetb(nation, type, url)
    values(10, 4, 'hongkong/dark_c.png');
-- 후쿠오카
insert into imagetb(nation, type, url)
    values(11, 1, 'hukuoka/light_w.png');
insert into imagetb(nation, type, url)
    values(11, 2, 'hukuoka/light_c.png');
insert into imagetb(nation, type, url)
    values(11, 3, 'hukuoka/dark_w.png');
insert into imagetb(nation, type, url)
    values(11, 4, 'hukuoka/dark_c.png');
--  오사카12
insert into imagetb(nation, type, url)
    values(12, 1, 'osaka/light_w.png');
insert into imagetb(nation, type, url)
    values(12, 2, 'osaka/light_c.png');
insert into imagetb(nation, type, url)
    values(12, 3, 'osaka/dark_w.png');
insert into imagetb(nation, type, url)
    values(12, 4, 'osaka/dark_c.png');
    
-- 몽골
insert into imagetb(nation, type, url)
    values(13, 1, 'mongol/light_w.png');
insert into imagetb(nation, type, url)
    values(13, 2, 'mongol/light_c.png');
insert into imagetb(nation, type, url)
    values(13, 3, 'mongol/dark_w.png');
insert into imagetb(nation, type, url)
    values(13, 4, 'mongol/dark_c.png');
    
--  베트남
insert into imagetb(nation, type, url)
    values(14, 1, 'vietnam/light_w.png');
insert into imagetb(nation, type, url)
    values(14, 2, 'vietnam/light_c.png');
insert into imagetb(nation, type, url)
    values(14, 3, 'vietnam/dark_w.png');
insert into imagetb(nation, type, url)
    values(14, 4, 'vietnam/dark_c.png');
    
--  블라디
insert into imagetb(nation, type, url)
    values(15, 1, 'vladivostok/light_w.png');
insert into imagetb(nation, type, url)
    values(15, 2, 'vladivostok/light_c.png');
insert into imagetb(nation, type, url)
    values(15, 3, 'vladivostok/dark_w.png');
insert into imagetb(nation, type, url)
    values(15, 4, 'vladivostok/dark_c.png');
        
--  상해
insert into imagetb(nation, type, url)
    values(16, 1, 'shanghai/light_w.png');
insert into imagetb(nation, type, url)
    values(16, 2, 'shanghai/light_c.png');
insert into imagetb(nation, type, url)
    values(16, 3, 'shanghai/dark_w.png');
insert into imagetb(nation, type, url)
    values(16, 4, 'shanghai/dark_c.png');
    
--  태국
insert into imagetb(nation, type, url)
    values(17, 1, 'thailand/light_w.png');
insert into imagetb(nation, type, url)
    values(17, 2, 'thailand/light_c.png');
insert into imagetb(nation, type, url)
    values(17, 3, 'thailand/dark_w.png');
insert into imagetb(nation, type, url)
    values(17, 4, 'thailand/dark_c.png');
    
--  미국서부
insert into imagetb(nation, type, url)
    values(18, 1, 'america_west/light_w.png');
insert into imagetb(nation, type, url)
    values(18, 2, 'america_west/light_c.png');
insert into imagetb(nation, type, url)
    values(18, 3, 'america_west/dark_w.png');
insert into imagetb(nation, type, url)
    values(18, 4, 'america_west/dark_c.png');
--  뉴욕
insert into imagetb(nation, type, url)
    values(19, 1, 'newyork/light_w.png');
insert into imagetb(nation, type, url)
    values(19, 2, 'newyork/light_c.png');
insert into imagetb(nation, type, url)
    values(19, 3, 'newyork/dark_w.png');
insert into imagetb(nation, type, url)
    values(19, 4, 'newyork/dark_c.png');
--  캐나다
insert into imagetb(nation, type, url)
    values(20, 1, 'canada/light_w.png');
insert into imagetb(nation, type, url)
    values(20, 2, 'canada/light_c.png');
insert into imagetb(nation, type, url)
    values(20, 3, 'canada/dark_w.png');
insert into imagetb(nation, type, url)
    values(20, 4, 'canada/dark_c.png');
    
select * from imagetb;