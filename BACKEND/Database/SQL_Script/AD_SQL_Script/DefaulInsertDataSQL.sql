use yb_travel;

-- 나라 table
desc nationtb;
select * from nationtb;
# delete from nationtb;
# ALTER TABLE nationtb AUTO_INCREMENT=1;

-- [Europe] 
insert into nationtb(en_name, ko_name, dust, continents, speech, price) values('Germany', '독일', 1, 1, '독일을 열차로 여행하시면 눈과 입, 마음이 즐거워집니다!', 2652400); 
insert into nationtb(en_name, ko_name, dust, continents, speech, price) values('Italy', '이탈리아', 1, 1, '마치 각기 다른 나라처럼 뚜렷한 특징으로 존재하는 이탈리아 도시들!', 3962400); 
insert into nationtb(en_name, ko_name, dust, continents, speech, price) values('France', '프랑스', 2, 1, '프랑스는 서유럽의 본토와 남아메리카의 프랑스령 기아나를 비롯해 여러 대륙에 걸쳐 있는 해외 레지옹과 해외 영토로 이루어진 국가', 1252400); 
insert into nationtb(en_name, ko_name, dust, continents, speech, price) values('Greece', '그리스', 2, 1, '짙푸른 바다와 눈부시게 흰 건물!', 2550000); 
insert into nationtb(en_name, ko_name, dust, continents, speech, price) values('Croatia', '크로아티아', 2, 1, '발칸 반도의 판노니아 평원', 2123400); 
insert into nationtb(en_name, ko_name, dust, continents, speech, price) values('switzerland', '스위스', 1, 1, '푸른 초원부터 만년설, 빛나는 호수까지 천혜의 자연환경을 갖춘 최고의 여행지 스위스! ', 2333400); 

-- [North Pacific Ocean]
insert into nationtb(en_name, ko_name, dust, continents, speech, price) values('hawai', '하와이', 1, 2, '오아후섬부터 호놀룰루 시내투어까지, 수상 액티비티도OK!', 213534); 

-- [Africa]
insert into nationtb(en_name, ko_name, dust, continents, speech, price) values('Dubai', '두바이', 3, 3, '부르즈 할리파의 125층 전망대', 236556); 
insert into nationtb(en_name, ko_name, dust, continents, speech, price) values('Kenya', '케냐', 3, 3, '많은 사람들이 가지고 있는 꿈의 여행지는 빅토리아 폭포!', 157856); 

-- [Asia]
insert into nationtb(en_name, ko_name, dust, continents, speech, price) values('hongkong', '홍콩', 2, 4, '미식, 쇼핑, 야경 모두 놓치지 않을 거예요~!', 800000);
insert into nationtb(en_name, ko_name, dust, continents, speech, price) values('hukuoka', '후쿠오카', 2, 4, '일본에서 가장 활기찬 도시 중 하나', 697000);
insert into nationtb(en_name, ko_name, dust, continents, speech, price) values('osaka', '오사카', 2, 4, '근교에는 교토와 고베, 나라, 히메지 등 매력적인 도시들!', 900000);
insert into nationtb(en_name, ko_name, dust, continents, speech, price) values('Mongolia', '몽골', 2, 4, '힐링이 필요하다면 몽골로 떠나보는 것 어떠세요? 드넓은 초원과 머리 위로 쏟아질 듯 하늘을 가~득 채운 별빛이 위로해줄 거에요', 898374);
insert into nationtb(en_name, ko_name, dust, continents, speech, price) values('Vietnam', '베트남', 1, 4, '우리나라 인기여행지 TOP 5!', 615000);
insert into nationtb(en_name, ko_name, dust, continents, speech, price) values('Vladivostok', '블라디보스톡', 3, 4, '아르바트 거리로 이어지고 여러 명소와도 가까워yo~', 593000);
insert into nationtb(en_name, ko_name, dust, continents, speech, price) values('Shanghai', '상해', 4, 4, '샹하이샹하이샹하이 트위스트 추면서 난생처음 상하이를 알았고~', 880000);
insert into nationtb(en_name, ko_name, dust, continents, speech, price) values('Thailand', '태국', 4, 4, '저렴한 물가와 많은 볼거리로 세계 많은 나라 사람들이 방문하는 곳!', 750000);
-- [North America]
insert into nationtb(en_name, ko_name, dust, continents, speech, price) values('America_west', '미국서부', 2, 5, '캐년하늘의 쏟아지는 별과 은하수, 신개념 낭만투어, 지금 즉시 상담하세요! ', 1245673 );
insert into nationtb(en_name, ko_name, dust, continents, speech, price) values('NewYork', '뉴욕', 2, 5, '수많은 박물관, 다양한 식당 문화 등 볼거리가 넘쳐나', 3495739);
insert into nationtb(en_name, ko_name, dust, continents, speech, price) values('Canada', '캐나다', 2, 5, '캐나다오로라 캐나다로키 나이아가라 나만을 위한 여행도 가족과 함께 하는 여행!', 5937493);

    
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
insert into monthtb(nation, tem1, tem2, tem3, tem4, tem5, tem6, tem7, tem8, tem9, tem10, tem11, tem12, hum1, hum2, hum3, hum4, hum5, hum6, hum7, hum8, hum9, hum10, hum11, hum12) 
	values(4, 9, 9, 12, 15, 20, 24, 25, 23, 20, 15, 9, 9, 0, 0, 0, 5, 30, 50, 50, 50, 20, 10, 0, 0);
insert into monthtb(nation, tem1, tem2, tem3, tem4, tem5, tem6, tem7, tem8, tem9, tem10, tem11, tem12, hum1, hum2, hum3, hum4, hum5, hum6, hum7, hum8, hum9, hum10, hum11, hum12) 
	values(5, 9, 11, 15, 16, 18, 20, 22, 23, 22, 20, 17, 9, 0, 0, 0, 13, 45, 67, 75, 80, 70, 60, 20, 0);
insert into monthtb(nation, tem1, tem2, tem3, tem4, tem5, tem6, tem7, tem8, tem9, tem10, tem11, tem12, hum1, hum2, hum3, hum4, hum5, hum6, hum7, hum8, hum9, hum10, hum11, hum12) 
	values(6, -2.5, 0.5, 4, 10, 12, 13, 15, 11, 6, 3, 2, 0, 0, 0, 0, 0, 10, 30, 50, 30, 20, 0, 0, 0);

-- [North Pacific Ocean]
insert into monthtb(nation, tem1, tem2, tem3, tem4, tem5, tem6, tem7, tem8, tem9, tem10, tem11, tem12, hum1, hum2, hum3, hum4, hum5, hum6, hum7, hum8, hum9, hum10, hum11, hum12) 
	values(7, 23, 23.4, 24, 24, 24, 24.5, 24.6, 24.7, 24, 24, 24, 23, 94, 90, 94, 99, 100, 100, 100, 100, 100, 100, 100, 100);

-- [Africa]
insert into monthtb(nation, tem1, tem2, tem3, tem4, tem5, tem6, tem7, tem8, tem9, tem10, tem11, tem12, hum1, hum2, hum3, hum4, hum5, hum6, hum7, hum8, hum9, hum10, hum11, hum12) 
	values(8, 17, 20, 24, 26, 27, 30, 35, 30, 28, 27, 26, 20, 50, 50, 60, 70, 80, 90, 80, 70, 65, 60, 55, 50);
insert into monthtb(nation, tem1, tem2, tem3, tem4, tem5, tem6, tem7, tem8, tem9, tem10, tem11, tem12, hum1, hum2, hum3, hum4, hum5, hum6, hum7, hum8, hum9, hum10, hum11, hum12) 
	values(9, 20, 23, 22, 20, 19, 18, 17, 18, 20, 21, 19, 20, 53, 42, 61, 90, 83, 55, 23, 21, 24, 60, 83, 65);

-- [Asia]
insert into monthtb(nation, tem1, tem2, tem3, tem4, tem5, tem6, tem7, tem8, tem9, tem10, tem11, tem12, hum1, hum2, hum3, hum4, hum5, hum6, hum7, hum8, hum9, hum10, hum11, hum12) 
	values(10, 14, 16, 17, 23, 25, 26, 30, 26, 25, 23, 17, 14, 40, 50, 80, 93, 100, 100, 100, 100, 100, 90, 80, 40);
insert into monthtb(nation, tem1, tem2, tem3, tem4, tem5, tem6, tem7, tem8, tem9, tem10, tem11, tem12, hum1, hum2, hum3, hum4, hum5, hum6, hum7, hum8, hum9, hum10, hum11, hum12) 
	values(11, 6, 10, 12, 15, 16, 18, 23, 20, 18, 14, 12, 10, 0, 0, 5, 30, 60, 90, 100, 100, 90, 40, 10, 0);
insert into monthtb(nation, tem1, tem2, tem3, tem4, tem5, tem6, tem7, tem8, tem9, tem10, tem11, tem12, hum1, hum2, hum3, hum4, hum5, hum6, hum7, hum8, hum9, hum10, hum11, hum12) 
	values(12, 4, 10, 12, 16, 20, 24, 29, 22, 20, 18, 13, 9, 0, 0, 4, 20, 30, 50, 100, 100, 90, 40, 30, 0);
insert into monthtb(nation, tem1, tem2, tem3, tem4, tem5, tem6, tem7, tem8, tem9, tem10, tem11, tem12, hum1, hum2, hum3, hum4, hum5, hum6, hum7, hum8, hum9, hum10, hum11, hum12) 
	values(13, -26, -21, -10, 0, 8, 15, 17, 15, 8, -2, -14, -24, 0, 0, 0, 0, 0, 8, 17, 8, 0, 0, 0, 0);
insert into monthtb(nation, tem1, tem2, tem3, tem4, tem5, tem6, tem7, tem8, tem9, tem10, tem11, tem12, hum1, hum2, hum3, hum4, hum5, hum6, hum7, hum8, hum9, hum10, hum11, hum12) 
	values(14, 17, 18, 19, 22, 26, 30, 29, 29, 26, 24, 10, 19, 51, 68, 85, 98, 100, 100, 100, 100, 100, 96, 83, 58);
insert into monthtb(nation, tem1, tem2, tem3, tem4, tem5, tem6, tem7, tem8, tem9, tem10, tem11, tem12, hum1, hum2, hum3, hum4, hum5, hum6, hum7, hum8, hum9, hum10, hum11, hum12) 
	values(15, -10, -8, -5, 4, 9, 14, 16, 20, 14, 5, -5, -10, 0, 0, 0, 0, 5, 50, 93, 93, 45, 10, 0, 0);
insert into monthtb(nation, tem1, tem2, tem3, tem4, tem5, tem6, tem7, tem8, tem9, tem10, tem11, tem12, hum1, hum2, hum3, hum4, hum5, hum6, hum7, hum8, hum9, hum10, hum11, hum12) 
	values(16, 4, 6, 9, 12, 20, 25, 29, 26, 24, 19, 14, 9, 0, 3, 6, 35, 75, 97, 100, 100, 95, 65, 20, 4);
insert into monthtb(nation, tem1, tem2, tem3, tem4, tem5, tem6, tem7, tem8, tem9, tem10, tem11, tem12, hum1, hum2, hum3, hum4, hum5, hum6, hum7, hum8, hum9, hum10, hum11, hum12) 
	values(17, 26, 25, 28, 30, 30, 29, 28, 28, 28, 28, 27, 25, 93, 95, 100, 100, 100, 100, 100, 100, 100, 100, 100, 95);

-- [North America]
insert into monthtb(nation, tem1, tem2, tem3, tem4, tem5, tem6, tem7, tem8, tem9, tem10, tem11, tem12, hum1, hum2, hum3, hum4, hum5, hum6, hum7, hum8, hum9, hum10, hum11, hum12) 
	values(18, 1, 3, 5, 10, 15, 20, 22, 21, 20, 14, 10, 6, 0, 0, 0, 8, 33, 65, 89, 83, 53, 25, 6, 0);
insert into monthtb(nation, tem1, tem2, tem3, tem4, tem5, tem6, tem7, tem8, tem9, tem10, tem11, tem12, hum1, hum2, hum3, hum4, hum5, hum6, hum7, hum8, hum9, hum10, hum11, hum12) 
	values(19, 15, 16, 16, 18, 20, 22, 23, 24, 22, 18, 15, 14, 2, 2, 3, 4, 30, 68, 92, 92, 78, 40, 10, 2);
insert into monthtb(nation, tem1, tem2, tem3, tem4, tem5, tem6, tem7, tem8, tem9, tem10, tem11, tem12, hum1, hum2, hum3, hum4, hum5, hum6, hum7, hum8, hum9, hum10, hum11, hum12) 
	values(20, -5, -3, 0, 4, 10, 16, 21, 18, 16, 11, 5, 1, 0, 0, 0, 3, 13, 45, 70, 72, 40, 10, 0, 0);

-- 이미지 테이블
desc imagetb;
select * from imagetb;

-- 전광판 정보
desc adboardtb;
select * from adboardtb;
insert into adboardtb(temp, humid, info) values(23.5, 38.4, '첫번째 테스트용 전광판');
