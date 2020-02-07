# 등록된 데이터는 80개 입니다.
use yb_travel;

select * from imagetb;
# delete from imagetb;
# ALTER TABLE imagetb AUTO_INCREMENT=1;
-- 독일
insert into imagetb(nation, type, url)
    values(1, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/germany/light_w.PNG');
insert into imagetb(nation, type, url)
    values(1, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/germany/light_c.PNG');
insert into imagetb(nation, type, url)
    values(1, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/germany/dark_w.PNG');
insert into imagetb(nation, type, url)
    values(1, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/germany/dark_c.PNG');
-- 이탈리아
insert into imagetb(nation, type, url)
    values(2, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/italy/light_w.PNG');
insert into imagetb(nation, type, url)
    values(2, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/italy/light_c.PNG');
insert into imagetb(nation, type, url)
    values(2, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/italy/dark_w.PNG');
insert into imagetb(nation, type, url)
    values(2, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/italy/dark_c.PNG');
    
-- 프랑스
insert into imagetb(nation, type, url)
    values(3, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/france/light_w.PNG');
insert into imagetb(nation, type, url)
    values(3, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/france/light_c.PNG');
insert into imagetb(nation, type, url)
    values(3, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/france/dark_w.PNG');
insert into imagetb(nation, type, url)
    values(3, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/france/dark_c.PNG');
    
-- 그리스
insert into imagetb(nation, type, url)
    values(4, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/greec/light_w.PNG');
insert into imagetb(nation, type, url)
    values(4, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/greec/light_c.PNG');
insert into imagetb(nation, type, url)
    values(4, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/greec/dark_w.PNG');
insert into imagetb(nation, type, url)
    values(4, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/greec/dark_c.PNG');
    
-- 크로아티아
insert into imagetb(nation, type, url)
    values(5, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/croatia/light_w.PNG');
insert into imagetb(nation, type, url)
    values(5, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/croatia/light_c.PNG');
insert into imagetb(nation, type, url)
    values(5, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/croatia/dark_w.PNG');
insert into imagetb(nation, type, url)
    values(5, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/croatia/dark_c.PNG');
-- 스위스
insert into imagetb(nation, type, url)
    values(6, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/switzerland/light_w.PNG');
insert into imagetb(nation, type, url)
    values(6, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/switzerland/light_c.PNG');
insert into imagetb(nation, type, url)
    values(6, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/switzerland/dark_w.PNG');
insert into imagetb(nation, type, url)
    values(6, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/switzerland/dark_c.PNG');
-- 하와이
insert into imagetb(nation, type, url)
    values(7, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/hawai/light_w.PNG');
insert into imagetb(nation, type, url)
    values(7, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/hawai/light_c.PNG');
insert into imagetb(nation, type, url)
    values(7, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/hawai/dark_w.PNG');
insert into imagetb(nation, type, url)
    values(7, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/hawai/dark_c.PNG');
    
-- 두바이+이집트
insert into imagetb(nation, type, url)
    values(8, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/dubai/light_w.PNG');
insert into imagetb(nation, type, url)
    values(8, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/dubai/light_c.PNG');
insert into imagetb(nation, type, url)
    values(8, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/dubai/dark_w.PNG');
insert into imagetb(nation, type, url)
    values(8, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/dubai/dark_c.PNG');
    
-- 케냐
insert into imagetb(nation, type, url)
    values(9, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/kenya/light_w.PNG');
insert into imagetb(nation, type, url)
    values(9, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/kenya/light_c.PNG');
insert into imagetb(nation, type, url)
    values(9, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/kenya/dark_w.PNG');
insert into imagetb(nation, type, url)
    values(9, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/kenya/dark_c.PNG');
    
-- 홍콩
insert into imagetb(nation, type, url)
    values(10, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/hongkong/light_w.PNG');
insert into imagetb(nation, type, url)
    values(10, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/hongkong/light_c.PNG');
insert into imagetb(nation, type, url)
    values(10, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/hongkong/dark_w.PNG');
insert into imagetb(nation, type, url)
    values(10, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/hongkong/dark_c.PNG');
-- 후쿠오카
insert into imagetb(nation, type, url)
    values(11, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/hukuoka/light_w.PNG');
insert into imagetb(nation, type, url)
    values(11, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/hukuoka/light_c.PNG');
insert into imagetb(nation, type, url)
    values(11, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/hukuoka/dark_w.PNG');
insert into imagetb(nation, type, url)
    values(11, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/hukuoka/dark_c.PNG');
--  오사카12
insert into imagetb(nation, type, url)
    values(12, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/osaka/light_w.PNG');
insert into imagetb(nation, type, url)
    values(12, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/osaka/light_c.PNG');
insert into imagetb(nation, type, url)
    values(12, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/osaka/dark_w.PNG');
insert into imagetb(nation, type, url)
    values(12, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/osaka/dark_c.PNG');
    
-- 몽골
insert into imagetb(nation, type, url)
    values(13, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/mongol/light_w.PNG');
insert into imagetb(nation, type, url)
    values(13, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/mongol/light_c.PNG');
insert into imagetb(nation, type, url)
    values(13, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/mongol/dark_w.PNG');
insert into imagetb(nation, type, url)
    values(13, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/mongol/dark_c.PNG');
    
--  베트남
insert into imagetb(nation, type, url)
    values(14, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/vietnam/light_w.PNG');
insert into imagetb(nation, type, url)
    values(14, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/vietnam/light_c.PNG');
insert into imagetb(nation, type, url)
    values(14, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/vietnam/dark_w.PNG');
insert into imagetb(nation, type, url)
    values(14, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/vietnam/dark_c.PNG');
    
--  블라디
insert into imagetb(nation, type, url)
    values(15, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/vladivostok/light_w.PNG');
insert into imagetb(nation, type, url)
    values(15, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/vladivostok/light_c.PNG');
insert into imagetb(nation, type, url)
    values(15, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/vladivostok/dark_w.PNG');
insert into imagetb(nation, type, url)
    values(15, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/vladivostok/dark_c.PNG');
        
--  상해
insert into imagetb(nation, type, url)
    values(16, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/shanghai/light_w.PNG');
insert into imagetb(nation, type, url)
    values(16, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/shanghai/light_c.PNG');
insert into imagetb(nation, type, url)
    values(16, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/shanghai/dark_w.PNG');
insert into imagetb(nation, type, url)
    values(16, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/shanghai/dark_c.PNG');
    
--  태국
insert into imagetb(nation, type, url)
    values(17, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/thailand/light_w.PNG');
insert into imagetb(nation, type, url)
    values(17, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/thailand/light_c.PNG');
insert into imagetb(nation, type, url)
    values(17, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/thailand/dark_w.PNG');
insert into imagetb(nation, type, url)
    values(17, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/thailand/dark_c.PNG');
    
--  미국서부
insert into imagetb(nation, type, url)
    values(18, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/america_west/light_w.PNG');
insert into imagetb(nation, type, url)
    values(18, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/america_west/light_c.PNG');
insert into imagetb(nation, type, url)
    values(18, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/america_west/dark_w.PNG');
insert into imagetb(nation, type, url)
    values(18, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/america_west/dark_c.PNG');
--  뉴욕
insert into imagetb(nation, type, url)
    values(19, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/newyork/light_w.PNG');
insert into imagetb(nation, type, url)
    values(19, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/newyork/light_c.PNG');
insert into imagetb(nation, type, url)
    values(19, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/newyork/dark_w.PNG');
insert into imagetb(nation, type, url)
    values(19, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/newyork/dark_c.PNG');
--  캐나다
insert into imagetb(nation, type, url)
    values(20, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/canada/light_w.PNG');
insert into imagetb(nation, type, url)
    values(20, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/canada/light_c.PNG');
insert into imagetb(nation, type, url)
    values(20, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/canada/dark_w.PNG');
insert into imagetb(nation, type, url)
    values(20, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/canada/dark_c.PNG');
    
select * from imagetb;