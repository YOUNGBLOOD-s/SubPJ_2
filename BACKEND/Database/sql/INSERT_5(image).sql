# 등록된 데이터는 80개 입니다.
use yb_travel;

select * from imagetb;
# delete from imagetb;
# ALTER TABLE imagetb AUTO_INCREMENT=1;
-- 독일
insert into imagetb(nation, type, url)
    values(1, 1, 'germany/lightw.png');
insert into imagetb(nation, type, url)
    values(1, 2, 'germany/lightc.png');
insert into imagetb(nation, type, url)
    values(1, 3, 'germany/darkw.png');
insert into imagetb(nation, type, url)
    values(1, 4, 'germany/darkc.png');
-- 이탈리아
insert into imagetb(nation, type, url)
    values(2, 1, 'italy/lightw.png');
insert into imagetb(nation, type, url)
    values(2, 2, 'italy/lightc.png');
insert into imagetb(nation, type, url)
    values(2, 3, 'italy/darkw.png');
insert into imagetb(nation, type, url)
    values(2, 4, 'italy/darkc.png');
    
-- 프랑스
insert into imagetb(nation, type, url)
    values(3, 1, 'france/lightw.png');
insert into imagetb(nation, type, url)
    values(3, 2, 'france/lightc.png');
insert into imagetb(nation, type, url)
    values(3, 3, 'france/darkw.png');
insert into imagetb(nation, type, url)
    values(3, 4, 'france/darkc.png');
    
-- 그리스
insert into imagetb(nation, type, url)
    values(4, 1, 'greec/lightw.png');
insert into imagetb(nation, type, url)
    values(4, 2, 'greec/lightc.png');
insert into imagetb(nation, type, url)
    values(4, 3, 'greec/darkw.png');
insert into imagetb(nation, type, url)
    values(4, 4, 'greec/darkc.png');
    
-- 크로아티아
insert into imagetb(nation, type, url)
    values(5, 1, 'croatia/lightw.png');
insert into imagetb(nation, type, url)
    values(5, 2, 'croatia/lightc.png');
insert into imagetb(nation, type, url)
    values(5, 3, 'croatia/darkw.png');
insert into imagetb(nation, type, url)
    values(5, 4, 'croatia/darkc.png');
-- 스위스
insert into imagetb(nation, type, url)
    values(6, 1, 'switzerland/lightw.png');
insert into imagetb(nation, type, url)
    values(6, 2, 'switzerland/lightc.png');
insert into imagetb(nation, type, url)
    values(6, 3, 'switzerland/darkw.png');
insert into imagetb(nation, type, url)
    values(6, 4, 'switzerland/darkc.png');
-- 하와이
insert into imagetb(nation, type, url)
    values(7, 1, 'hawaii/lightw.png');
insert into imagetb(nation, type, url)
    values(7, 2, 'hawaii/lightc.png');
insert into imagetb(nation, type, url)
    values(7, 3, 'hawaii/darkw.png');
insert into imagetb(nation, type, url)
    values(7, 4, 'hawaii/darkc.png');
    
-- 두바이+이집트
insert into imagetb(nation, type, url)
    values(8, 1, 'dubai/lightw.png');
insert into imagetb(nation, type, url)
    values(8, 2, 'dubai/lightc.png');
insert into imagetb(nation, type, url)
    values(8, 3, 'dubai/darkw.png');
insert into imagetb(nation, type, url)
    values(8, 4, 'dubai/darkc.png');
    
-- 케냐
insert into imagetb(nation, type, url)
    values(9, 1, 'kenya/lightw.png');
insert into imagetb(nation, type, url)
    values(9, 2, 'kenya/lightc.png');
insert into imagetb(nation, type, url)
    values(9, 3, 'kenya/darkw.png');
insert into imagetb(nation, type, url)
    values(9, 4, 'kenya/darkc.png');
    
-- 홍콩
insert into imagetb(nation, type, url)
    values(10, 1, 'hongkong/lightw.png');
insert into imagetb(nation, type, url)
    values(10, 2, 'hongkong/lightc.png');
insert into imagetb(nation, type, url)
    values(10, 3, 'hongkong/darkw.png');
insert into imagetb(nation, type, url)
    values(10, 4, 'hongkong/darkc.png');

-- 후쿠오카
insert into imagetb(nation, type, url)
    values(11, 1, 'fukuoka/lightw.png');
insert into imagetb(nation, type, url)
    values(11, 2, 'fukuoka/lightc.png');
insert into imagetb(nation, type, url)
    values(11, 3, 'fukuoka/darkw.png');
insert into imagetb(nation, type, url)
    values(11, 4, 'fukuoka/darkc.png');

--  오사카12
insert into imagetb(nation, type, url)
    values(12, 1, 'osaka/lightw.png');
insert into imagetb(nation, type, url)
    values(12, 2, 'osaka/lightc.png');
insert into imagetb(nation, type, url)
    values(12, 3, 'osaka/darkw.png');
insert into imagetb(nation, type, url)
    values(12, 4, 'osaka/darkc.png');
    
-- 몽골
insert into imagetb(nation, type, url)
    values(13, 1, 'mongol/lightw.png');
insert into imagetb(nation, type, url)
    values(13, 2, 'mongol/lightc.png');
insert into imagetb(nation, type, url)
    values(13, 3, 'mongol/darkw.png');
insert into imagetb(nation, type, url)
    values(13, 4, 'mongol/darkc.png');
    
--  베트남
insert into imagetb(nation, type, url)
    values(14, 1, 'vietnam/lightw.png');
insert into imagetb(nation, type, url)
    values(14, 2, 'vietnam/lightc.png');
insert into imagetb(nation, type, url)
    values(14, 3, 'vietnam/darkw.png');
insert into imagetb(nation, type, url)
    values(14, 4, 'vietnam/darkc.png');
    
--  블라디
insert into imagetb(nation, type, url)
    values(15, 1, 'vladivostok/lightw.png');
insert into imagetb(nation, type, url)
    values(15, 2, 'vladivostok/lightc.png');
insert into imagetb(nation, type, url)
    values(15, 3, 'vladivostok/darkw.png');
insert into imagetb(nation, type, url)
    values(15, 4, 'vladivostok/darkc.png');
        
--  상해
insert into imagetb(nation, type, url)
    values(16, 1, 'shanghai/lightw.png');
insert into imagetb(nation, type, url)
    values(16, 2, 'shanghai/lightc.png');
insert into imagetb(nation, type, url)
    values(16, 3, 'shanghai/darkw.png');
insert into imagetb(nation, type, url)
    values(16, 4, 'shanghai/darkc.png');
    
--  태국
insert into imagetb(nation, type, url)
    values(17, 1, 'thailand/lightw.png');
insert into imagetb(nation, type, url)
    values(17, 2, 'thailand/lightc.png');
insert into imagetb(nation, type, url)
    values(17, 3, 'thailand/darkw.png');
insert into imagetb(nation, type, url)
    values(17, 4, 'thailand/darkc.png');
    
--  미국서부
insert into imagetb(nation, type, url)
    values(18, 1, 'america_west/lightw.png');
insert into imagetb(nation, type, url)
    values(18, 2, 'america_west/lightc.png');
insert into imagetb(nation, type, url)
    values(18, 3, 'america_west/darkw.png');
insert into imagetb(nation, type, url)
    values(18, 4, 'america_west/darkc.png');
--  뉴욕
insert into imagetb(nation, type, url)
    values(19, 1, 'newyork/lightw.png');
insert into imagetb(nation, type, url)
    values(19, 2, 'newyork/lightc.png');
insert into imagetb(nation, type, url)
    values(19, 3, 'newyork/darkw.png');
insert into imagetb(nation, type, url)
    values(19, 4, 'newyork/darkc.png');
--  캐나다
insert into imagetb(nation, type, url)
    values(20, 1, 'canada/lightw.png');
insert into imagetb(nation, type, url)
    values(20, 2, 'canada/lightc.png');
insert into imagetb(nation, type, url)
    values(20, 3, 'canada/darkw.png');
insert into imagetb(nation, type, url)
    values(20, 4, 'canada/darkc.png');
    
select * from imagetb;