# NEARBYAD-BACKEND
백앤드 개발 버전관리

****
## 💪 to-do list
* 테이블 상세
  * sql 온도, 습도 float형 변환
* Spring
  * RecoNation vo 정의
  * 온습도에 의한 나라 선택 기준 정하기
  * 이미지 배열, 콘텐츠 배열 받는 함수 각각 만들기
  * 데이터 json 형식으로 묶기
  * 프론트로 전송하기
****

## :dart: Springboot
### Value Object
#### 1) ReqForm : Frontend -> 1:1 상담신청 요청 시, 받는 정보
|Field|Type|
|---|---|
|name|String|
|age|int|
|email|String|
|tel|String|
|date|String|
|text|String|

***


## :dart: DataBase

### nationtb
|Field|Type|Null|Key|Default|Extra|
|---|---|---|---|---|---|
|idx|int|NO|**PK**||auto_increment|
|name|varchar(30)|YES|**UNIQUE**||
|dust|int|YES|||
|continents|int|YES|||
|cnt|int|YES|||
* idx : 일련변호
* name : 나라이름
* dust : 미세먼지 수치
* continents : 대륙정보 (1-Europe, 2-Africa, 3-Asia, 4-north America)
* cnt : 나라 별 터치 수


### avertb
|Field|Type|Null|Key|Default|Extra|
|---|---|---|---|---|---|
|idx|int|NO|**PK**||auto_increment|
|nation|int|YES|**UNIQUE**|||
|tem1|int|YES|||
|tem2|int|YES|||
|tem3|int|YES|||
|tem4|int|YES|||
|tem5|int|YES|||
|tem6|int|YES|||
|tem7|int|YES|||
|tem8|int|YES|||
|tem9|int|YES|||
|tem10|int|YES|||
|tem11|int|YES|||
|tem12|int|YES|||
|hum1|int|YES|||
|hum2|int|YES|||
|hum3|int|YES|||
|hum4|int|YES|||
|hum5|int|YES|||
|hum6|int|YES|||
|hum7|int|YES|||
|hum8|int|YES|||
|hum9|int|YES|||
|hum10|int|YES|||
|hum11|int|YES|||
|hum12|int|YES|||
* idx : 일련변호
* nation : 나라 일련번호
* tmp1-tmp12 : 1월-12월 평균온도
* hum1-hum12 : 1월-12월 평균습도


### contentstb
|Field|Type|Null|Key|Default|Extra|
|---|---|---|---|---|---|
|idx|int|NO|**PK**||auto_increment|
|nation|int|YES|**UNIQUE**|||
|seq|int|YES|||
|day|int|YES|||
|detail|varchar(10000)|YES|||
|image|varchar(500)|YES|||
|tofrom|varchar(50)|YES|||
|transport|varchar(20)|YES|||
* idx : 일련번호
* nation : 나라 일련번호
* seq : 경로 별 순서 1, 2, 3, ...
* day : 일차
* detail : 경로 별 상세정보
* image : 경로 별 이미지 url
* tofrom : 이동경로
* transport : 이동수단


### imagetb
|Field|Type|Null|Key|Default|Extra|
|---|---|---|---|---|---|
|idx|int|NO|**PK**||auto_increment|
|nation|int|YES|**UNIQUE**|||
|type|int|YES|
|url|varchar(500)|YES|
* idx : 일련번호
* nation : 나라 일련번호
* type : 정도 (1-추움, 2-더움, 3-밝음, 4-어두움)
* url : 이미지 url 
