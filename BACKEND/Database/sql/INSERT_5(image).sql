# 등록된 데이터는 80개 입니다.
use yb_travel;

select * from imagetb;
# delete from imagetb;
# ALTER TABLE imagetb AUTO_INCREMENT=1;
-- 독일
insert into imagetb(nation, type, url)
    values(1, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/germany/lightw.png');
insert into imagetb(nation, type, url)
    values(1, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/germany/lightc.png');
insert into imagetb(nation, type, url)
    values(1, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/germany/darkw.png');
insert into imagetb(nation, type, url)
    values(1, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/germany/darkc.png');
-- 이탈리아
insert into imagetb(nation, type, url)
    values(2, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/italy/lightw.png');
insert into imagetb(nation, type, url)
    values(2, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/italy/lightc.png');
insert into imagetb(nation, type, url)
    values(2, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/italy/darkw.png');
insert into imagetb(nation, type, url)
    values(2, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/italy/darkc.png');
    
-- 프랑스
insert into imagetb(nation, type, url)
    values(3, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/france/lightw.png');
insert into imagetb(nation, type, url)
    values(3, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/france/lightc.png');
insert into imagetb(nation, type, url)
    values(3, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/france/darkw.png');
insert into imagetb(nation, type, url)
    values(3, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/france/darkc.png');
    
-- 그리스
insert into imagetb(nation, type, url)
    values(4, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/greec/lightw.png');
insert into imagetb(nation, type, url)
    values(4, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/greec/lightc.png');
insert into imagetb(nation, type, url)
    values(4, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/greec/darkw.png');
insert into imagetb(nation, type, url)
    values(4, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/greec/darkc.png');
    
-- 크로아티아
insert into imagetb(nation, type, url)
    values(5, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/croatia/lightw.png');
insert into imagetb(nation, type, url)
    values(5, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/croatia/lightc.png');
insert into imagetb(nation, type, url)
    values(5, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/croatia/darkw.png');
insert into imagetb(nation, type, url)
    values(5, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/croatia/darkc.png');
-- 스위스
insert into imagetb(nation, type, url)
    values(6, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/switzerland/lightw.png');
insert into imagetb(nation, type, url)
    values(6, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/switzerland/lightc.png');
insert into imagetb(nation, type, url)
    values(6, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/switzerland/darkw.png');
insert into imagetb(nation, type, url)
    values(6, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/switzerland/darkc.png');
-- 하와이
insert into imagetb(nation, type, url)
    values(7, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/hawaii/lightw.png');
insert into imagetb(nation, type, url)
    values(7, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/hawaii/lightc.png');
insert into imagetb(nation, type, url)
    values(7, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/hawaii/darkw.png');
insert into imagetb(nation, type, url)
    values(7, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/hawaii/darkc.png');
    
-- 두바이+이집트
insert into imagetb(nation, type, url)
    values(8, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/dubai/lightw.png');
insert into imagetb(nation, type, url)
    values(8, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/dubai/lightc.png');
insert into imagetb(nation, type, url)
    values(8, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/dubai/darkw.png');
insert into imagetb(nation, type, url)
    values(8, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/dubai/darkc.png');
    
-- 케냐
insert into imagetb(nation, type, url)
    values(9, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/kenya/lightw.png');
insert into imagetb(nation, type, url)
    values(9, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/kenya/lightc.png');
insert into imagetb(nation, type, url)
    values(9, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/kenya/darkw.png');
insert into imagetb(nation, type, url)
    values(9, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/kenya/darkc.png');
    
-- 홍콩
insert into imagetb(nation, type, url)
    values(10, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/hongkong/lightw.png');
insert into imagetb(nation, type, url)
    values(10, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/hongkong/lightc.png');
insert into imagetb(nation, type, url)
    values(10, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/hongkong/darkw.png');
insert into imagetb(nation, type, url)
    values(10, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/hongkong/darkc.png');
-- 후쿠오카
insert into imagetb(nation, type, url)
    values(11, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/fukuoka/lightw.png');
insert into imagetb(nation, type, url)
    values(11, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/fukuoka/lightc.png');
insert into imagetb(nation, type, url)
    values(11, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/fukuoka/darkw.png');
insert into imagetb(nation, type, url)
    values(11, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/fukuoka/darkc.png');
--  오사카12
insert into imagetb(nation, type, url)
    values(12, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/osaka/lightw.png');
insert into imagetb(nation, type, url)
    values(12, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/osaka/lightc.png');
insert into imagetb(nation, type, url)
    values(12, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/osaka/darkw.png');
insert into imagetb(nation, type, url)
    values(12, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/osaka/darkc.png');
    
-- 몽골
insert into imagetb(nation, type, url)
    values(13, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/mongol/lightw.png');
insert into imagetb(nation, type, url)
    values(13, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/mongol/lightc.png');
insert into imagetb(nation, type, url)
    values(13, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/mongol/darkw.png');
insert into imagetb(nation, type, url)
    values(13, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/mongol/darkc.png');
    
--  베트남
insert into imagetb(nation, type, url)
    values(14, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/vietnam/lightw.png');
insert into imagetb(nation, type, url)
    values(14, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/vietnam/lightc.png');
insert into imagetb(nation, type, url)
    values(14, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/vietnam/darkw.png');
insert into imagetb(nation, type, url)
    values(14, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/vietnam/darkc.png');
    
--  블라디
insert into imagetb(nation, type, url)
    values(15, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/vladivostok/lightw.png');
insert into imagetb(nation, type, url)
    values(15, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/vladivostok/lightc.png');
insert into imagetb(nation, type, url)
    values(15, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/vladivostok/darkw.png');
insert into imagetb(nation, type, url)
    values(15, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/vladivostok/darkc.png');
        
--  상해
insert into imagetb(nation, type, url)
    values(16, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/shanghai/lightw.png');
insert into imagetb(nation, type, url)
    values(16, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/shanghai/lightc.png');
insert into imagetb(nation, type, url)
    values(16, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/shanghai/darkw.png');
insert into imagetb(nation, type, url)
    values(16, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/shanghai/darkc.png');
    
--  태국
insert into imagetb(nation, type, url)
    values(17, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/thailand/lightw.png');
insert into imagetb(nation, type, url)
    values(17, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/thailand/lightc.png');
insert into imagetb(nation, type, url)
    values(17, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/thailand/darkw.png');
insert into imagetb(nation, type, url)
    values(17, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/thailand/darkc.png');
    
--  미국서부
insert into imagetb(nation, type, url)
    values(18, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/america_west/lightw.png');
insert into imagetb(nation, type, url)
    values(18, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/america_west/lightc.png');
insert into imagetb(nation, type, url)
    values(18, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/america_west/darkw.png');
insert into imagetb(nation, type, url)
    values(18, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/america_west/darkc.png');
--  뉴욕
insert into imagetb(nation, type, url)
    values(19, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/newyork/lightw.png');
insert into imagetb(nation, type, url)
    values(19, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/newyork/lightc.png');
insert into imagetb(nation, type, url)
    values(19, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/newyork/darkw.png');
insert into imagetb(nation, type, url)
    values(19, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/newyork/darkc.png');
--  캐나다
insert into imagetb(nation, type, url)
    values(20, 1, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/canada/lightw.png');
insert into imagetb(nation, type, url)
    values(20, 2, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/canada/lightc.png');
insert into imagetb(nation, type, url)
    values(20, 3, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/canada/darkw.png');
insert into imagetb(nation, type, url)
    values(20, 4, 'https://nearbyad.s3.ap-northeast-2.amazonaws.com/image/canada/darkc.png');
    
select * from imagetb;