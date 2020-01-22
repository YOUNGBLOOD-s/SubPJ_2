use yb_travel;

-- 나라 table
desc nationtb;
select * from nationtb;

-- [Europe] 
insert into nationtb(name, dust, continents, speech) values('Germany', 2, 1, '독일문화의 이해 수업 들었었는데 성적 잘 안 나왔어 짱나 -_-'); 
insert into nationtb(name, dust, continents) values('Italy', 4, 1); 
insert into nationtb(name, dust, continents) values('France', 2, 1); 

-- [Africa]
insert into nationtb(name, dust, continents) values('Egypt', 3, 2); 
insert into nationtb(name, dust, continents) values('Kenya', 3, 2); 

-- [Asia]
insert into nationtb(name, dust, continents) values('Mongolia', 4, 3); 
insert into nationtb(name, dust, continents) values('Vietnam', 3, 3); 
insert into nationtb(name, dust, continents) values('Vladivostok', 3, 3); 
insert into nationtb(name, dust, continents) values('Shanghai', 3, 3); 
insert into nationtb(name, dust, continents) values('Thailand', 3, 3); 

-- [North America]
insert into nationtb(name, dust, continents) values('USA', 1, 4); 
insert into nationtb(name, dust, continents) values('Canada', 2, 4); 
insert into nationtb(name, dust, continents) values('California', 2, 4); 
    
-- 월평균 table
desc monthtb;
select * from monthtb;

-- [Europe]
insert into monthtb(nation, tem1, tem2, tem3, tem4, tem5, tem6, tem7, tem8, tem9, tem10, tem11, tem12, hum1, hum2, hum3, hum4, hum5, hum6, hum7, hum8, hum9, hum10, hum11, hum12) 
	values(1, 1, 1, 5, 9, 14, 17, 19, 19, 15, 10, 5, 2, 0, 0, 0, 2, 10, 30, 48, 38, 18, 5, 0, 0);
insert into monthtb(nation, tem1, tem2, tem3, tem4, tem5, tem6, tem7, tem8, tem9, tem10, tem11, tem12, hum1, hum2, hum3, hum4, hum5, hum6, hum7, hum8, hum9, hum10, hum11, hum12) 
	values(2, 7, 9, 14, 20, 24, 30, 33, 32, 27, 23, 14, 7, 0, 0, 3, 20, 54, 90, 92, 94, 80, 50, 21, 2);
insert into monthtb(nation, tem1, tem2, tem3, tem4, tem5, tem6, tem7, tem8, tem9, tem10, tem11, tem12, hum1, hum2, hum3, hum4, hum5, hum6, hum7, hum8, hum9, hum10, hum11, hum12) 
	values(3, -1, 2, 8, 13, 16, 23, 26, 23, 22, 12, 3, 0, 0, 0, 0, 8, 23, 47, 54, 58, 35, 18, 8, 0);

-- [Africa]
insert into monthtb(nation, tem1, tem2, tem3, tem4, tem5, tem6, tem7, tem8, tem9, tem10, tem11, tem12, hum1, hum2, hum3, hum4, hum5, hum6, hum7, hum8, hum9, hum10, hum11, hum12) 
	values(4, 14, 15, 17, 21, 24, 27, 28, 28, 26, 23, 19, 15, 0, 3, 6, 18, 47, 80, 93, 95, 73, 25, 20, 8);
insert into monthtb(nation, tem1, tem2, tem3, tem4, tem5, tem6, tem7, tem8, tem9, tem10, tem11, tem12, hum1, hum2, hum3, hum4, hum5, hum6, hum7, hum8, hum9, hum10, hum11, hum12) 
	values(5, 20, 23, 22, 20, 19, 18, 17, 18, 20, 21, 19, 20, 53, 42, 61, 90, 83, 55, 23, 21, 24, 60, 83, 65);

-- [Asia]
insert into monthtb(nation, tem1, tem2, tem3, tem4, tem5, tem6, tem7, tem8, tem9, tem10, tem11, tem12, hum1, hum2, hum3, hum4, hum5, hum6, hum7, hum8, hum9, hum10, hum11, hum12) 
	values(6, -26, -21, -10, 0, 8, 15, 17, 15, 8, -2, -14, -24, 0, 0, 0, 0, 0, 8, 17, 8, 0, 0, 0, 0);
insert into monthtb(nation, tem1, tem2, tem3, tem4, tem5, tem6, tem7, tem8, tem9, tem10, tem11, tem12, hum1, hum2, hum3, hum4, hum5, hum6, hum7, hum8, hum9, hum10, hum11, hum12) 
	values(7, 17, 18, 19, 22, 26, 30, 29, 29, 26, 24, 10, 19, 51, 68, 85, 98, 100, 100, 100, 100, 100, 96, 83, 58);
insert into monthtb(nation, tem1, tem2, tem3, tem4, tem5, tem6, tem7, tem8, tem9, tem10, tem11, tem12, hum1, hum2, hum3, hum4, hum5, hum6, hum7, hum8, hum9, hum10, hum11, hum12) 
	values(8, -10, -8, -5, 4, 9, 14, 16, 20, 14, 5, -5, -10, 0, 0, 0, 0, 5, 50, 93, 93, 45, 10, 0, 0);
insert into monthtb(nation, tem1, tem2, tem3, tem4, tem5, tem6, tem7, tem8, tem9, tem10, tem11, tem12, hum1, hum2, hum3, hum4, hum5, hum6, hum7, hum8, hum9, hum10, hum11, hum12) 
	values(9, 4, 6, 9, 12, 20, 25, 29, 26, 24, 19, 14, 9, 0, 3, 6, 35, 75, 97, 100, 100, 95, 65, 20, 4);
insert into monthtb(nation, tem1, tem2, tem3, tem4, tem5, tem6, tem7, tem8, tem9, tem10, tem11, tem12, hum1, hum2, hum3, hum4, hum5, hum6, hum7, hum8, hum9, hum10, hum11, hum12) 
	values(10, 26, 25, 28, 30, 30, 29, 28, 28, 28, 28, 27, 25, 93, 95, 100, 100, 100, 100, 100, 100, 100, 100, 100, 95);

-- [North America]
insert into monthtb(nation, tem1, tem2, tem3, tem4, tem5, tem6, tem7, tem8, tem9, tem10, tem11, tem12, hum1, hum2, hum3, hum4, hum5, hum6, hum7, hum8, hum9, hum10, hum11, hum12) 
	values(11, 1, 3, 5, 10, 15, 20, 22, 21, 20, 14, 10, 6, 0, 0, 0, 8, 33, 65, 89, 83, 53, 25, 6, 0);
insert into monthtb(nation, tem1, tem2, tem3, tem4, tem5, tem6, tem7, tem8, tem9, tem10, tem11, tem12, hum1, hum2, hum3, hum4, hum5, hum6, hum7, hum8, hum9, hum10, hum11, hum12) 
	values(12, -5, -3, 0, 4, 10, 16, 21, 18, 16, 11, 5, 1, 0, 0, 0, 3, 13, 45, 70, 72, 40, 10, 0, 0);
insert into monthtb(nation, tem1, tem2, tem3, tem4, tem5, tem6, tem7, tem8, tem9, tem10, tem11, tem12, hum1, hum2, hum3, hum4, hum5, hum6, hum7, hum8, hum9, hum10, hum11, hum12) 
	values(13, 15, 16, 16, 18, 20, 22, 23, 24, 22, 18, 15, 14, 2, 2, 3, 4, 30, 68, 92, 92, 78, 40, 10, 2);

-- 경로 및 상세정보 table
desc contentstb;
select * from contentstb;

-- 초기 값
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(13, 1, 1, '맨스차이니스 극장 관광', '맨스차이니스 극장을 관리하는데, 할리우드 스타들을 만날 수 있습니다.','https://images.unsplash.com/photo', '인천 → 로스앤젤레스', '비행기');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(13, 1, 2, '라스베이거스 시티투어', '라스베이거스 시티를 투어합니다. 스타의 거리 관광합니다.','https://images.unsplash.com/photo', '바스토우 → 라스베이거스', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(13, 2, 1, '브라이스캐년 국립공원 관광', '브라이스캐년 국립공원을 관광합니다. 아주 멋지다구요.','https://images.unsplash.com/photo', '자이언 캐년 → 브라이스 캐년', '버스');


-- 이미지 테이블
desc imagetb;
select * from imagetb;

-- 전광판 정보
desc adboardtb;
select * from adboardtb;
insert into adboardtb(temp, humid, info) values(23.5, 38.4, '첫번째 테스트용 전광판');
