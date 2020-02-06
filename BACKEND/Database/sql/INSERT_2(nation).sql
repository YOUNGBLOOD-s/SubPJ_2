use yb_travel;

-- 나라 table
desc nationtb;
# ALTER TABLE nationtb AUTO_INCREMENT=1;
-- [Europe] 
insert into nationtb(en_name, ko_name, dust, continents, speech, price, s_date, f_date, customer) values('Germany', '독일', 1, 1, '독일을 열차로 여행하시면 눈과 입, 마음이 즐거워집니다!', 2652400,'2020-02-04','2020-02-09', 2); 
insert into nationtb(en_name, ko_name, dust, continents, speech, price, s_date, f_date, customer) values('Italy', '이탈리아', 1, 1, '마치 각기 다른 나라처럼 뚜렷한 특징으로 존재하는 이탈리아 도시들!', 3962400,'2020-02-05','2020-02-11', 2); 
insert into nationtb(en_name, ko_name, dust, continents, speech, price, s_date, f_date, customer) values('France', '프랑스', 2, 1, '프랑스는 서유럽의 본토와 남아메리카의 프랑스령 기아나를 비롯해 여러 대륙에 걸쳐 있는 해외 레지옹과 해외 영토로 이루어진 국가', 1252400,'2020-02-06','2020-02-09', 2); 
insert into nationtb(en_name, ko_name, dust, continents, speech, price, s_date, f_date, customer) values('Greece', '그리스', 2, 1, '짙푸른 바다와 눈부시게 흰 건물!', 2550000,'2020-02-07','2020-02-09', 2); 
insert into nationtb(en_name, ko_name, dust, continents, speech, price, s_date, f_date, customer) values('Croatia', '크로아티아', 2, 1, '발칸 반도의 판노니아 평원', 2123400,'2020-02-07','2020-02-09', 2); 
insert into nationtb(en_name, ko_name, dust, continents, speech, price, s_date, f_date, customer) values('switzerland', '스위스', 1, 1, '푸른 초원부터 만년설, 빛나는 호수까지 천혜의 자연환경을 갖춘 최고의 여행지 스위스! ', 2333400,'2020-02-08','2020-02-13', 2); 

-- [North Pacific Ocean]
insert into nationtb(en_name, ko_name, dust, continents, speech, price, s_date, f_date, customer) values('hawai', '하와이', 1, 2, '오아후섬부터 호놀룰루 시내투어까지, 수상 액티비티도OK!', 213534,'2020-02-05','2020-02-09', 3); 

-- [Africa]
insert into nationtb(en_name, ko_name, dust, continents, speech, price, s_date, f_date, customer) values('Dubai', '두바이', 3, 3, '부르즈 할리파의 125층 전망대', 236556,'2020-02-06','2020-02-09', 3); 
insert into nationtb(en_name, ko_name, dust, continents, speech, price, s_date, f_date, customer) values('Kenya', '케냐', 3, 3, '많은 사람들이 가지고 있는 꿈의 여행지는 빅토리아 폭포!', 157856,'2020-02-07','2020-02-11', 3); 

-- [Asia]
insert into nationtb(en_name, ko_name, dust, continents, speech, price, s_date, f_date, customer) values('hongkong', '홍콩', 2, 4, '미식, 쇼핑, 야경 모두 놓치지 않을 거예요~!', 800000,'2020-02-08','2020-02-09', 3);
insert into nationtb(en_name, ko_name, dust, continents, speech, price, s_date, f_date, customer) values('hukuoka', '후쿠오카', 2, 4, '일본에서 가장 활기찬 도시 중 하나', 697000,'2020-02-10','2020-02-13', 3);
insert into nationtb(en_name, ko_name, dust, continents, speech, price, s_date, f_date, customer) values('osaka', '오사카', 2, 4, '근교에는 교토와 고베, 나라, 히메지 등 매력적인 도시들!', 900000,'2020-02-11','2020-02-16', 3);
insert into nationtb(en_name, ko_name, dust, continents, speech, price, s_date, f_date, customer) values('Mongolia', '몽골', 2, 4, '힐링이 필요하다면 몽골로 떠나보는 것 어떠세요? 드넓은 초원과 머리 위로 쏟아질 듯 하늘을 가~득 채운 별빛이 위로해줄 거에요', 898374,'2020-02-12','2020-02-17', 3);
insert into nationtb(en_name, ko_name, dust, continents, speech, price, s_date, f_date, customer) values('Vietnam', '베트남', 1, 4, '우리나라 인기여행지 TOP 5!', 615000,'2020-02-13','2020-02-18', 3);
insert into nationtb(en_name, ko_name, dust, continents, speech, price, s_date, f_date, customer) values('Vladivostok', '블라디보스톡', 3, 4, '아르바트 거리로 이어지고 여러 명소와도 가까워yo~', 593000,'2020-02-14','2020-02-20', 3);
insert into nationtb(en_name, ko_name, dust, continents, speech, price, s_date, f_date, customer) values('Shanghai', '상해', 4, 4, '샹하이샹하이샹하이 트위스트 추면서 난생처음 상하이를 알았고~', 880000,'2020-02-15','2020-02-22', 3);
insert into nationtb(en_name, ko_name, dust, continents, speech, price, s_date, f_date, customer) values('Thailand', '태국', 4, 4, '저렴한 물가와 많은 볼거리로 세계 많은 나라 사람들이 방문하는 곳!', 750000,'2020-02-16','2020-02-23', 3);
-- [North America]
insert into nationtb(en_name, ko_name, dust, continents, speech, price, s_date, f_date, customer) values('America_west', '미국서부', 2, 5, '캐년하늘의 쏟아지는 별과 은하수, 신개념 낭만투어, 지금 즉시 상담하세요! ', 1245673,'2020-02-17','2020-02-20', 4);
insert into nationtb(en_name, ko_name, dust, continents, speech, price, s_date, f_date, customer) values('NewYork', '뉴욕', 2, 5, '수많은 박물관, 다양한 식당 문화 등 볼거리가 넘쳐나', 3495739,'2020-02-04','2020-2-27', 4);
insert into nationtb(en_name, ko_name, dust, continents, speech, price, s_date, f_date, customer) values('Canada', '캐나다', 2, 5, '캐나다오로라 캐나다로키 나이아가라 나만을 위한 여행도 가족과 함께 하는 여행!', 5937493,'2020-02-19','2020-02-29', 4);

select * from nationtb;
