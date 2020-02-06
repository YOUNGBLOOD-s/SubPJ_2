# 준비된 Default 데이터는 151개 입니다.
use yb_travel;

select * from contentstb;

insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(18, 1, 1, '솔뱅', '마크풍의 마을 [솔뱅]',  '/usr/local/DATA/america_west/landmark1.png', '인천공항에서 솔뱅', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(18, 1, 2, '길로이아울렛', '길로이 프리미엄 아울렛 이동 및 자유 쇼핑', '/usr/local/DATA/america_west/landmark2.png', '솔뱅에서 길로이', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(18, 2, 1, '샌프란시스코 시장', '미켈란젤로의 산 피에드르 대성당을 닮은 [샌프란시스코 시청] ', '/usr/local/DATA/america_west/landmark3.png', '길로이에서 샌프란시스코시장', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(18, 2, 2, '유니언스퀘어', '샌프란시스코의 중심 [유니언 스퀘어] ', '/usr/local/DATA/america_west/landmark4.png', '샌프란시스코시장에서 유니언스퀘어', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(18, 2, 3, '피셔맨즈워프', '과거의 향수와 낭만을 느낄 수 있는 [피셔맨즈워프]에서 자유시간 ', '/usr/local/DATA/america_west/landmark5.png', '유니언스퀘어에서 피셔맨즈워프', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(18, 2, 4, '금문교/트윈픽스', '샌프란시스코의 랜드마크! [금문교/트윈픽스] 관람', '/usr/local/DATA/america_west/landmark6.png', '피셔맨즈워프에서 금문교/트윈픽스', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(18, 3, 1, '요새미티국립공원', '맑은공기, 푸른나무, 거대한폭포 [요세미티국립공원] 산림욕', '/usr/local/DATA/america_west/landmark7.png', '금문교에서 요세미티국립공원', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(18, 3, 2, '프레즈노', '프레즈노에서의 휴식시간', '/usr/local/DATA/america_west/landmark8.png', '요세미티국립공원에서 프레즈노', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(18, 4, 1, '캘리코 은광촌', '미서부 골드러쉬! 옛 서부영화를 생각나게하는 [캘리코 은광촌] ', '/usr/local/DATA/america_west/landmark9.png', '프레즈노에서 캘리코은광촌', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(18, 4, 2, '라스베이거스', '세계 최대의 카지노 도시인 라스베이거스(자유시간)', '/usr/local/DATA/america_west/landmark10.png', '은광촌에서 라스베이거스', '비행기');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(18, 5, 1, '자이언캐년 국립공원', '신의 성지라 불리우는 [자이언캐년 국립공원] 관광', '/usr/local/DATA/america_west/landmark11.png', '라스베이거스에서 자이언캐년', '비행기');

-- canada 20
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(20, 1, 1, '그랜빌 아일랜드', '다운타운과 가까운 곳에 위치한 작은 섬, 그랜빌 아일랜드', '/usr/local/DATA/canada/landmark1.png', '인천공항에서 그린빌아일랜드', '배');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(20, 2, 1, '캐네디언 로키산맥', '위대한 대자연이 펼쳐지는 신의 작품, 캐네디언 로키산맥', '/usr/local/DATA/canada/landmark2.png', '그린빌아일랜드에서 로키산맥', '차량');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(20, 3, 1, '레이크 루이스', '로키 산맥의 보석 에메랄드빛 호수, 레이크 루이스', '/usr/local/DATA/canada/landmark3.png', '로키산맥에서 레이크 루이스','기차');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(20, 3, 2, '보우폭포', '거센물살이 만들어내는 장관, 보우폭포', '/usr/local/DATA/canada/landmark4.png', '레이크루이스에서 보우폭포', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(20, 4, 1, '에메랄드호수', '선명한 에베랄드 빛깔의 호수, 에메랄드 호수', '/usr/local/DATA/canada/landmark5.png', '보우폭포에서 에메랄드호수', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(20, 4, 2, '자연의다리', '물과 바람이 만든 다리, 자연의 다리', '/usr/local/DATA/canada/landmark6.png', '에메랄드호수에서 자연의 다리', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(20, 5, 1, '샤논폭포','Sea to Sky 해안 고속도로를 따라 샤논 폭포 관광', '/usr/local/DATA/canada/landmark7.png', '자연의다리에서 샤논 폭포', '버스');
    
-- dubai 8
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(8, 1, 1, '버즈칼리파',  '세상에서 가장 높은 건물, 버즈칼리파', '/usr/local/DATA/dubai/landmark1.png', '인천공항에서 두바이 버즈칼리파', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(8, 1, 2, '두바이몰', '세계최대 복합쇼핑레저몰,두바이몰', '/usr/local/DATA/dubai/landmark2.png', '버즈칼리파에서 두바이몰', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(8, 1, 3, '수크메디나쥬메이라', '천년전 아랍재래시장의 모습을 만나다, 수크메디나쥬메이라', '/usr/local/DATA/dubai/landmark3.png', '두바이몰에서 수크메디나쥬메이라', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(8, 2, 1, '카이로', '카이로 도착(이집트로)', '/usr/local/DATA/dubai/landmark4.png', '수크메디나쥬메이라 에서 카이로', '비행기');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(8, 2, 2, '고고학박물관', '세계에서 가장 유명한 박물관, 파라오의 미라가 보관되어있는 이집트 고고학 박물관', '/usr/local/DATA/dubai/landmark5.png', '카이로에서 이집트 고고학 박물관', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(8, 3, 1, '아스완', '나일강에 석양이 아름다운 휴양지, 아스완', '/usr/local/DATA/dubai/landmark6.png', '이집트박물관에서 아스완', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(8, 3, 2, '아부심벨신전', '세계에서 가장 장려한 건물이자 이집트의 대표적 유적인, 아부심벨신전', '/usr/local/DATA/dubai/landmark7.png', '아스완에서 아부심벨신전', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(8, 3, 3, '나일강크루즈', '나일강 크루즈 투어', '/usr/local/DATA/dubai/landmark8.png', '아부심벨신전에서 나일강', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(8, 4, 1, '코옴보 신전', '매의 머리를 가진 호루스 신을 모신, 콤옴보 신전', '/usr/local/DATA/dubai/landmark9.png', '아부심벨신전에서 콤옴보신전', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(8, 4, 2, '에드푸신전', '고대 이집트 신전 중 보존상태가 가장좋은, 에드푸신전', '/usr/local/DATA/dubai/landmark10.png', '콤옴보신전에서 에드푸신전', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(8, 5, 1, '카르낙신전', '현재 남아 있는 고대 이집트의 신전 가운데 최대 규모인, 카르낙신전', '/usr/local/DATA/dubai/landmark11.png', '에드푸신전에서 카르낙신전', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(8, 5, 2, '왕가의 계곡', '투탕카멘, 람세스1세, 2세, 3세, 4세, 아멘호테프 2세 등 수많은 무덤이 발견된, 왕가의 계곡', '/usr/local/DATA/dubai/landmark12.png', '카르낙신전에서 왕가의계곡', '버스');

-- 
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(3, 1, 1, '루앙 대성당', '모네의 작품배경이 된, 고딕양식의 걸작, 루앙 대성당', '/usr/local/DATA/france/landmark1.png', '인천공항에서 프랑스 루앙대성당', '비행기');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(3, 1, 2, '에트르타', '에트르타', '/usr/local/DATA/france/landmark2.png', '루앙대성당에서 에트르타', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(3, 2, 1, '몽생미셸', '몽생미셸', '/usr/local/DATA/france/landmark3.png', '에트르타에서 몽생미셸', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(3, 2, 2, '몽생미셸 수도원', '세계를 유혹한 천사의 수도원, 몽생미셸 수도원', '/usr/local/DATA/france/landmark4.png', '몽생미셸에서 몽생미셀 수도원', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(3, 3, 1, '루와르계곡', '프랑스 고성들이 있는 루와르 계곡(Loire Valley) 지역', '/usr/local/DATA/france/landmark5.png', '수도원에서 루와르 계곡', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(3, 3, 2, '쉬농소 성', '물위에 떠있는 듯 궁전처럼 지어진 아름다운 여인의 성, 쉬농소 성', '/usr/local/DATA/france/landmark6.png', '루아르계곡에서 쉬농소성', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(3, 3, 3, '루아르투어', '루아르 지역 와이너리 방문 및 시음 ', '/usr/local/DATA/france/landmark7.png', '루아르투어', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(3, 4, 1, '베르사이유 궁전', '초호화 궁전인 베르사이유 궁전', '/usr/local/DATA/france/landmark8.png', '루아르에서 베르사이유 궁전', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(3, 4, 2, '오르세 미술관', '폐쇄된 역에서 미술관으로 재탄생한 오르세 미술관', '/usr/local/DATA/france/landmark9.png', '베르사이유 궁전에서 오르세미술관', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(3, 5, 1, '루브르박물관', '세계 3대 박물관 중 하나인 루브르 박물관', '/usr/local/DATA/france/landmark10.png', '오르세 미술관에서 루브르박물관', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(3, 5, 2, '에펠탑', '구스타프 에펠이 설계한 파리의 상징 에펠탑', '/usr/local/DATA/france/landmark11.png', '루브르박물관에서 에펠탑', '버스');

-- 독일 1
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(1, 1, 1, '프랑크푸르트', '프랑크푸르트', '/usr/local/DATA/germany/landmark1.png', '인천공항에서 프랑크푸르트 국제공항', '비행기');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(1, 1, 2, '쾰른대성당', '고딕 건축의 화려함을 볼 수 있는 쾰른 대성당', '/usr/local/DATA/germany/landmark2.png', '프랑크푸르트 공항에서 쾰른대성당', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(1, 2, 1, '브레멘', '브레멘 음악대로도 친숙한 동화의 도시, 브레멘 관광', '/usr/local/DATA/germany/landmark3.png', '쾰른대성당에서 브레멘', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(1, 2, 2, '함부르크', '독일인이 가장 살고 싶어하는 도시 함부르크', '/usr/local/DATA/germany/landmark4.png', '브레멘에서 함부르크', '기차');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(1, 2, 3, '페르가몬 박물관', '세계문화유산으로 지정된 페르가몬 박물관', '/usr/local/DATA/germany/landmark5.png', '함부르크에서 페르가몬 박물관', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(1, 3, 1, '상수시 궁전', '소박한 아름다움과 잘 정돈된 정원의 조화, 상수시 궁전', '/usr/local/DATA/germany/landmark6.png', '페르가몬에서 상수시 궁전', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(1, 3, 2, '드레스덴', '드레스덴', '/usr/local/DATA/germany/landmark7.png', '상수시궁전에서 드레스덴', '기차');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(1, 3, 3, '츠빙거궁전', '대표적 바로크 건축의 양식을 보여주는 츠빙거 궁전', '/usr/local/DATA/germany/landmark8.png', '드레스덴에서 츠빙거 궁전', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(1, 4, 1, '뉘른베르크', '신성 로마 제국의 작은 보석 상자 뉘른베르크 관광', '/usr/local/DATA/germany/landmark9.png', '츠빙거궁전 에서 뉘른베르크', '기차');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(1, 4, 2, '뮌헨', '남부 독일의 중심 뮌헨 관광', '/usr/local/DATA/germany/landmark10.png', '뉘른베르크에서 뮌헨', '기차');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(1, 5, 1, '추크슈비체', '독일 알프스의 최고봉 추크슈비체 케이블카', '/usr/local/DATA/germany/landmark11.png', '뮌헨에서 추크슈비체', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(1, 5, 2, '노이슈반슈타인성', '디즈니랜드 성의 모티브가 된 백조의 성, 노이슈반슈타인 성', '/usr/local/DATA/germany/landmark12.png', '추크슈비체에서 노이슈반슈타인성', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(1, 5, 3, '호에슈반가우 성', '바이에른 왕가의 별궁으로 사용된 호에슈반가우 성', '/usr/local/DATA/germany/landmark13.png', '노이슈반슈타인성에서 호에슈반가우성', '버스');


-- 이태리 2
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(2, 1, 1, '밀라노', '세계 최고 패션의 도시 밀라노', '/usr/local/DATA/italy/landmark1.png', '인천공항에서 밀라노', '비행기');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(2, 1, 2, '두오모성당', '이탈리아 최대의 고딕양식 건축물 두오모 성당', '/usr/local/DATA/italy/landmark2.png', '밀라노에서 두오모성당', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(2, 2, 1, '베니스', '아름다운 수상 도시 베니스', '/usr/local/DATA/italy/landmark3.png', '두오모성당에서 베니스', '기차');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(2, 2, 2, '산마르코 광장', '나폴레옹이 세계에서 가장 아름다운 응접실이한 산마르코 광장', '/usr/local/DATA/italy/landmark4.png', '베니스에서 산마르코 광장', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(2, 3, 1, '시뇨리아광장', '피렌체의 아름다움 시뇨리아 광장', '/usr/local/DATA/italy/landmark5.png', '산마르코광장에서 피렌체 시뇨리아광장', '기차');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(2, 4, 1, '폼페이', '화산폭발의 도시 폼페이 관광', '/usr/local/DATA/italy/landmark6.png', '시뇨리아광장에서 폼페이', '기차');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(2, 5, 1, '소렌토', '푸른바다가 아름다운 휴양지 소렌토', '/usr/local/DATA/italy/landmark7.png', '폼페이에서 소렌토', '기차');


-- 케냐 9
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(9, 1, 1, '세렝게티 국립공원', '탄자니아 최대의 세렝게티 국립공원', '/usr/local/DATA/kenya/landmark1.png', '인천국제공항에서 세렝게티', '비행기');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(9, 1, 2, '응고롱고로 분화구', '세계에서 가장 큰 분화구인 응고롱고로 분화구', '/usr/local/DATA/kenya/landmark2.png', '세렝게티에서 응고롱고로 분화구', '경비행기');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(9, 2, 1, '빅토리아폭포', '세계 3대폭포인 빅토리아 폭포', '/usr/local/DATA/kenya/landmark3.png', '응고롱고롱분화구에서 빅토리아 폭포', '차량');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(9, 3, 1, '케이프반도', '대서양과 인도양을 마주한 케이프반도', '/usr/local/DATA/kenya/landmark4.png', '빅토리아폭포에서 케이프반도', '경비행기');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(9, 3, 2, '쵸베국립공원', '각종 물새, 하바, 코끼리, 악어를 눈앞에서 볼 수 있는 쵸베국립공원', '/usr/local/DATA/kenya/landmark5.png', '케이프반도에서 쵸베국립공원', '차량');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(9, 4, 3, '보트사파리', '수상에서 즐기는 사파리 보트사파리!', '/usr/local/DATA/kenya/landmark6.png', '쵸베국립공원에서 보트사파리', '버스');

-- 16 상해
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(16, 1, 1, '신천지', '유럽풍의 벽돌 건물들이 늘어선 고풍스러운 신천지 관광', '/usr/local/DATA/shanghai/landmark1.png', '인천공항에서 상해', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(16, 1, 2, '상해임시정부청사', '독립 운동의 기반인 대한민국 임시정부가 활동했던 상해임시정부청사', '/usr/local/DATA/shanghai/landmark2.png', '임시정부청사로 이동', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(16, 2, 1, '상해옛거리', '명,청 시대 상해의 모습을 재현해 놓은 풍물 거리인 상해옛거리 관광', '/usr/local/DATA/shanghai/landmark3.png', '임시정부청사에서 상해옛거리', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(16, 2, 2, '남경로', '상해의 명동으로 불리우는 남경로 관광', '/usr/local/DATA/shanghai/landmark4.png', '상해옛거리에서 남경로', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(16, 3, 1, '타이캉로', '아기자기한 공예품과 노천카페 등이 즐비한 타이캉로 관광', '/usr/local/DATA/shanghai/landmark5.png', '남경로에서 타이캉로', '버스');

-- 17 태국
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(17, 1, 1, '왓포사원', '왓포사원 & 수상가옥', '/usr/local/DATA/thailand/landmark1.png', '인천국제공항에서 태국', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(17, 2, 1, '파타야',  '파타야 휴양도시 & 먹거리 투어', '/usr/local/DATA/thailand/landmark2.png', '왓포사원에서 파타야', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(17, 2, 2, '파타야수상시장', '특색있는 파타야 수상시장', '/usr/local/DATA/thailand/landmark3.png', '파타야에서 수상시장', '배');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(17, 3, 1, '악어농장', '직접 악어에게 먹이주기 & 만질수 있는 악어농장', '/usr/local/DATA/thailand/landmark4.png', '수상시장에서 악어농장', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(17, 4, 1, '액티비티', '오션마리나 요트크루즈 & 스노쿨링 체험', '/usr/local/DATA/thailand/landmark5.png', '악어농장에서 오션마리나', '버스');

-- 베트남 14
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(14, 1, 1, '투본강', '호이안 투본강 투어', '/usr/local/DATA/vietnam/landmark1.png', '인천국제공항에서 투본강', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(14, 1, 2, '호이안고대도시', '호이안의 전통이 살아있는 호이안 고대도시 투어', '/usr/local/DATA/vietnam/landmark2.png', '투본강에서 호이안고대도시', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(14, 2, 1, '바나산', '가장 인기있는 절경 장소 바나산의 절경을 감상', '/usr/local/DATA/vietnam/landmark3.png', '호이안고대도시에서 바나산', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(14, 3, 1, '다낭시내', '다낭 시내 투어', '/usr/local/DATA/vietnam/landmark4.png', '고대도시에서 다낭시내', '버스');

-- 블라디보스톡 15
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(15, 1, 1, '블라디보스톡시내', '블라디보스톡의 시내탐방 & 쇼핑', '/usr/local/DATA/vladivostok/landmark1.png', '인천공항에서 블라디보스톡공항', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(15, 2, 1, '역사탐방', '극동러시아 우수리스크 역사탐방', '/usr/local/DATA/vladivostok/landmark2.png', '블라디보스톡공항에서 극동러시아', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(15, 2, 2, '루스키섬', '바람의 섬이라 불리는 루스키섬 트래킹', '/usr/local/DATA/vladivostok/landmark3.png', '극동러시아에서 루스키섬', '배');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(15, 3, 1, '시베리아횡단전차', '시베리아 횡단전차 구간 블라디보스톡 ~ 우골나야 구간', '/usr/local/DATA/vladivostok/landmark4.png', '루스키섬에서 시베리아횡단전차', '기차');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(15, 4, 1, '개선문', '니콜라이 2세를 기념하는 개선문', '/usr/local/DATA/vladivostok/landmark5.png', '시베리아횡단전차에서 개선문', '버스');

-- 그리스 4
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(4, 1, 1, '테살로니키', '테살로니키 시티투어', '/usr/local/DATA/greec/landmark1.png', '인천공항에서 그리스공항', '비행기');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(4, 2, 1, '메테오라 수도원', '웅장함이 살아있는 메테오라 수도원 관광', '/usr/local/DATA/greec/landmark2.png', '테살로니키에서 메테오라수도원', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(4, 3, 1, '파르테논신전', '유네스코 세계문화유산 1호 파르테논 신전', '/usr/local/DATA/greec/landmark3.png', '메테오라수도원에서 파르테논신전', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(4, 3, 2, '아크로폴리스', '그리스 고대유적의 하이라이트 아크로폴리스', '/usr/local/DATA/greec/landmark4.png',  '파르테논신전에서 아크로폴리스', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(4, 4, 1, '올림픽경기장', '고대올림픽이 열렸던 올림픽경기장 관람', '/usr/local/DATA/greec/landmark5.png',  '아크로폴리스에서 올림픽 경기장', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(4, 4, 2, '국회의사당', '이색적인 복장의 근위병이 인상적인 국회의사당', '/usr/local/DATA/greec/landmark6.png',  '올림픽경기장에서 국회의사당', '버스');

-- 크로아티아 5
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(5, 1, 1, '사라예보', '아름다움과 슬픔이 공존하는 장미의 도시 사라예보(바슈카르지아)','/usr/local/DATA/croatia/landmark1.png', '인천공항에서 크로아티아', '비행기');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(5, 1, 2, '헤르체고비나', '헤르체고비나의 심장 모스타르에서 구시가지 관광', '/usr/local/DATA/croatia/landmark2.png', '사라예보에서 모스타르 구시가지', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(5, 2, 1, '두브로브니크', '아드리아해의 진주, 크로아티아의 대표도시 두브로브니크(렉터궁전)', '/usr/local/DATA/croatia/landmark3.png', '모스타르에서 두브로브니크', '기차');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(5, 2, 2, '오노플리안분수', '아름다운 휴식처 오노플리안 분수', '/usr/local/DATA/croatia/landmark4.png', '두브로브니크에서 오노플리안 분수', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(5, 3, 1, '트로기르', '도시 전체가 세계문화유산으로 지정된 트로기르', '/usr/local/DATA/croatia/landmark5.png', '오노플리안분수에서 트로기르', '기차');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(5, 3, 2, '성 로렌스 대성당', '아름다움과 웅장한 성 로렌스 대성당', '/usr/local/DATA/croatia/landmark6.png', '트로기르에서 성 로렌스 대성당', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(5, 4, 1, '프리트비체', '크로아티아의 가장 아름다운 국립공원 "프리트비체"', '/usr/local/DATA/croatia/landmark7.png', '성로렌스대성당에서 프리트비체', '기차');


-- 스위스 6
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(6, 1, 1, '체르마트', '명봉마테호른 품고있는 청정마르 체르마트', '/usr/local/DATA/switzerland/landmark1.png', '비행기에서 체르마트', '비행기');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(6, 2, 1, '고르너그라트전망대', '열차를 타고 고르너그라트전망대에서 아름다운 스위스의 풍경을 감상', '/usr/local/DATA/switzerland/landmark2.png', '체르마트에서 고르너그라트전망대', '기차');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(6, 3, 1, '몽트뢰', '프레디머큐리가 사랑한 도시 몽트뢰', '/usr/local/DATA/switzerland/landmark3.png', '고르너그라트전망대에서 몽트뢰', '기차');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(6, 3, 2, '시옹성', '호수위에 지어진듯한 아름다운 시옹성', '/usr/local/DATA/switzerland/landmark4.png', '몽트뢰에서 시옹성', '기차');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(6, 4, 1, '그뤼에르마을', '스위스 3대치즈로 유명한 그뤼에르 마을', '/usr/local/DATA/switzerland/landmark5.png', '시옹성에서 그뤼에르 마을', '기차');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(6, 5, 1, '베른', '스위스의 수도이자 구시가지 전체가 세계문화유산인 베른', '/usr/local/DATA/switzerland/landmark6.png', '그뤼에르에서 베른', '기차');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(6, 6, 1, '융프라우', '죽기전에 꼭 올라가봐야 한다는 융프라우!!', '/usr/local/DATA/switzerland/landmark7.png', '베른에서 융프라우', '기차');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(6, 6, 2, '루체른', '알프스로 둘러싸인 아름다운 호반의 도시 루체른', '/usr/local/DATA/switzerland/landmark8.png', '융프라우에서 루체른', '버스');


-- 하와이 7
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(7, 1, 1, '블로홀', '시원하게 솟아오르는 파도 하로나 블로홀', '/usr/local/DATA/hawai/landmark1.png', '인천공항에서 하와이', '비행기');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(7, 1, 2, '다이아몬드헤드 분화구', '짙푸른 바다 수평선과 구름의 조화 다이아몬드 헤드 분화구', '/usr/local/DATA/hawai/landmark2.png', '숙소에서 다이아몬드 헤드 분화구', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(7, 2, 1, '하나우마베이', '때묻지 않은 투명한 바닷속 산호초 탐험 하나우마베이', '/usr/local/DATA/hawai/landmark3.png', '다이아몬드헤드분화구에서 하나우마베이', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(7, 2, 2, '마카푸 포인트', '투명한 바다가 만들어낸 그림같은 경치 마카푸 포인트', '/usr/local/DATA/hawai/landmark4.png', '하나우마베이에서 마카푸포인트', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(7, 3, 1, '와이키키비치', '자유로운 풍경이 매력적인 하와이 최고의 비치 와이키키비치', '/usr/local/DATA/hawai/landmark5.png', '마카푸포인트에서 와이키키비치', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(7, 4, 1, '알라모아나 비치파크', '여유로운 해변 공원 알라모아나 비치파크 자유투어', '/usr/local/DATA/hawai/landmark6.png', '와이키키비치에서 알라모아나비치파크', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(7, 4, 2, '킹 카메하메하 동상', '하와이 원주민 왕구의 초대 대왕 킹 카메하메하 동상', '/usr/local/DATA/hawai/landmark7.png', '알라모아나 비치파크에서 킹 카메하메하 동상', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(7, 5, 1, '카우아이데이', '하와이 추천 선택 관광 마우이데이, 카우아이데이 투어', '/usr/local/DATA/hawai/landmark8.png', '킹 카메하메하 동상에서 마우이데이 / 카우아이데이', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(7, 5, 2, '다이아몬드헤드트래킹', '추천 체험 선택관광 다이아몬드헤드 트래킹', '/usr/local/DATA/hawai/landmark9.png', '카우아이데이 에서 다이아몬드헤드', '버스');

-- 홍콩 10
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(10, 1, 1, '홍콩전망대', '반짝이는 홍콩섬의 야경을 바라보다', '/usr/local/DATA/hongkong/landmark1.png', '인천공항에서 홍콩', '비행기');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(10, 1, 2, '미드레벨에스컬레이터', '영화 중경상림속 주인공이 되는 미드레벨에스컬레이터', '/usr/local/DATA/hongkong/landmark2.png', '미드레벨 에스컬레이터로 이동', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(10, 1, 3, '리펄스베이', '리펄스베이 자유관광!!', '/usr/local/DATA/hongkong/landmark3.png', '미드레벨에스컬레이터에서 리펄스베이', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(10, 2, 1, '소호', '동양과 서양의  절묘한 조화 감각있는 젊은이들의 놀이터 소호', '/usr/local/DATA/hongkong/landmark4.png', '리펄스베이에서 소호', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(10, 2, 2, '헐리우드로드', '홍콩의 과거로 시간 여행을 떠나다 헐리우드로드', '/usr/local/DATA/hongkong/landmark5.png', '소호에서 헐리우드로드', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(10, 3, 1, '웡타이신사원', '홍콩 사람들에게 걱정을 들어내는 마음의 안식처 웡타이 신사원', '/usr/local/DATA/hongkong/landmark6.png', '헐리우드로드에서 웡타이신사원', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(10, 3, 2, '홍콩쇼핑센터', '보석, 찻집, 라텍스등 다양한 상품을 구매할 수 있는 홍콩쇼핑센타', '/usr/local/DATA/hongkong/landmark7.png', '웡타이신사원에서 홍콩쇼핑센터', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(10, 4, 1, '마카오', '홍콩의 아름다운 도시 마카오', '/usr/local/DATA/hongkong/landmark8.png', '홍콩쇼핑센터에서 마카오', '기차');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(10, 4, 2, '디즈니랜드', '세계에서 가장 유명한 놀이공원 디즈니랜드', '/usr/local/DATA/hongkong/landmark9.png', '마카오에서 디즈니랜드', '버스');


-- 후쿠오카 11
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(11, 1, 1, '개구리절', '3000여개의 독특한 개구리 조형물이 있는 개구리절', '/usr/local/DATA/hukuoka/landmark1.png', '인천국제공항에서 후쿠오카공항', '비행기');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(11, 1, 2, '히타이이치코소주공장', '맑은 물을 이용해 풍미가 진하고 술맛이 좋은 보리소주로 유명한 히타이이치코소주공장', '/usr/local/DATA/hukuoka/landmark2.png', '후쿠오카공항에서 히타이이치코소주공장', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(11, 1, 3, '마메다마치', '전통가옥이 잘 보존되어 있는 마메다마치', '/usr/local/DATA/hukuoka/landmark3.png', '히타이이치코 소주공장에서 마메다마치', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(11, 2, 1, '긴린호수', '계절마다 아름다운 풍경을 자아내는 긴린호수', '/usr/local/DATA/hukuoka/landmark4.png', '마메다마치에서 긴린호수', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(11, 2, 2, '유노하나 재배지', '온천의 꽃이라 불리는 유노하나 재배지', '/usr/local/DATA/hukuoka/landmark5.png', '긴린호수에서 유노하나 재배지', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(11, 3, 1, '고쿠라성', '에도시대부터 번창했던 도시였음을 보여주는 고쿠라성', '/usr/local/DATA/hukuoka/landmark6.png', '유노하나에서 고쿠라성', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(11, 3, 2, '텐만궁', '학문의 신을 모시는 다자이후 텐만궁', '/usr/local/DATA/hukuoka/landmark7.png', '고쿠라성에서 텐만궁', '버스');


-- 오사카 12
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(12, 1, 1, '오사카성', '계절별로 각기 다른 아름다움을 뽐내는 오사카의 랜드마크 오사카성', '/usr/local/DATA/osaka/landmark1.png', '인천공항에서 오사카', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(12, 1, 2, '시사이바시', '맛집? 힐링? 쇼핑? 뭐든 다 할수 있는 나만의 오사카 시사이바시&도톤보리', '/usr/local/DATA/osaka/landmark2.png', '공항에서 오사카 도톤보리', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(12, 2, 1, '아마노하시타테로', '일본의 3대절경인 아마노하시타테로', '/usr/local/DATA/osaka/landmark3.png', '오사카 시내에서 아마노하시타테로', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(12, 2, 2, '이네마을', '일본의 할슈타트로 불리는 이네마을', '/usr/local/DATA/osaka/landmark4.png', '아마노하시타테로에서 이네마을', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(12, 3, 1, '아라시야마', '벚꽃과 단풍의 명소 아라시야마', '/usr/local/DATA/osaka/landmark5.png', '이네마을에서 아라시야마', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(12, 3, 2, '코스모타워', '전망이 아름다운 코스모타워의 전망과 월드뷔페', '/usr/local/DATA/osaka/landmark6.png', '아마노하시타테로에서 코스모타워', '버스');


-- newyork 19
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(19, 1, 1, '맨해튼', '세계의 중심! 꼭 한번 가보고 싶은 그곳, 뉴욕 맨해튼', '/usr/local/DATA/newyork/landmark1.png', '인천국제공항에서 맨해튼', '비행기');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(19, 1, 2, '콜럼비아대학', '미드 가쉽걸에 등장했던 콜롬비아 대학교', '/usr/local/DATA/newyork/landmark2.png', '맨해튼거리에서 콜롬비아대학', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(19, 2, 1, '자연사박물관', '영화 박물관이 살아있다로 유명한 미국 자연사 박물관 탐방', '/usr/local/DATA/newyork/landmark3.png', '콜롬비아대학에서 자연사박물관', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(19, 2, 2, '첼시마켓', '뉴욕의 대표적인 갤러리 첼시마켓', '/usr/local/DATA/newyork/landmark4.png', '자연사박물관에서 첼시마켓', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(19, 3, 1, '엠파이어스테이트빌딩', '뉴욕이 자랑하는 랜드마크 엠파이어스테이트빌딩', '/usr/local/DATA/newyork/landmark5.png', '첼시마켓에서 엠파이어스테이트빌딩', '기차');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(19, 3, 2, '센트럴파크', '뉴요커들의 최고의 휴식공간 센트럴파크', '/usr/local/DATA/newyork/landmark6.png', '엠파이어스테이트빌딩에서 센트럴파크', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(19, 4, 1, '스퀘어파크', '길거리 예술가들의 공연이 펼쳐지는 문화공간 워싱턴 스퀘어파크', '/usr/local/DATA/newyork/landmark7.png', '센트럴파크에서 스퀘어파크', '버스');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(19, 4, 2, '자유의여신상', '뉴욕의 상징 자유의여신상을 유람선을 타며 관람', '/usr/local/DATA/newyork/landmark8.png', '스퀘어파크에서 자유의여신상', '유람선');


-- 몽골 13
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(13, 1, 1, '칭키스칸기마상', '몽골의 랜드마크이자, 칭키스칸의 고향을 바라보며 서있는 동상', '/usr/local/DATA/mongol/landmark1.png', '인천국제공항에서 몽골', '비행기');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(13, 1, 2, '테렐지 국립공원', '아름다운 초원과 기암괴석이 있는 테렐지 국립공원', '/usr/local/DATA/mongol/landmark2.png', '칭키스칸기마상에서 테렐지 국립공원', '차량');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(13, 2, 1, '자이승 승전탑', '2차세계대전의 승리를 기념하는 승전탑', '/usr/local/DATA/mongol/landmark3.png', '테렐지공원에서 자이승 승전탑', '차량');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(13, 2, 2, '바이칼호수 박물관', '깨끗하고 맑은 호수의 경치를 감상하고 바이칼 유일의 생물들을 볼 수 있는 기회', '/usr/local/DATA/mongol/landmark4.png', '자이승 승전탑에서 바이칼호수', '차량');
insert into contentstb(nation, day, seq, title, detail, image, tofrom, transport)
	values(13, 3, 1, '데카브리스트 박물관', '혁명을 일으켰던 유배자의 흔적이 남아있는 슬픈 역사의 장소', '/usr/local/DATA/mongol/landmark5.png', '데카브리스트 박물관', '차량');

    
select * from contentstb;