# NEARBYAD-BACKEND
백앤드 개발 버전관리

****
## 💪 to-do list
* 테이블 상세
  * nationtb에 cnt 속성 추가 -> 나라에 추가하는게 맞는지, 콘텐츠에 추가하는게 맞는지 회의 필요함
  * 테이블 명 전부 %tb로 변경하기
  * nation FK 전부 UNIQUE 속성 추가하기
* 프론트/임베디드 value object 정의
  * front 상담 요청 시 받는 정보 db에 저장하기
  * front 클릭 시, cnt ++
  * embedded 센서 값 받아서 계산 후 front에 알맞은 데이터 전달
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
