# NEARBYAD-BACKEND

## :dart: API Docs
| resource    | description         |
| -------- | ------------ |
| `/sensor` | sensor 기반 |
| `/ad` | 광고판 |
| `/man` | 회원 상품 정보  |
| `/auth` | 인증 |
| `/mem` | 회원 정보 |
| `/tts` | Upload Text-to-Speech(Clova API) to AWS |
| `/statistics` | 통계 |
| `/chat` | 챗봇 |

### sensor
| URL    |      Method    | URL Params | Data Params |
| -------- | ------------ | -------- | ------------ |
| `/api/sensor/sensor` | GET | temp=[String], hum=[String], light=[String], dust=[Stirng] | |
| `/api/sensor/weightcal` | GET | | |
| `/api/sensor/reco` | GET | | |

#### /api/sensor/weightcal
* Success Response
  * code : 200
  * content
     
        {
          "datas" : [
                    "thumbnail" :
                    "name" :
                    "en_name" :
                    "details" : [
                                  "imgs" :
                                  "temps" :
                                  "price" :
                                  "name" :
                                  "en_name" :
                                  "id" :
                                  "humid" :
                                  "content" :
                                ]
                    "id" :
                    "content" :
                    ]
           "datasize" :
         }
* Error Response
  * code : 404
  * content : `{ "resmsg" : }`

## :dart: DataBase

### membertb

| Field    | Type         | Null | Key        | Default | Extra          |
| -------- | ------------ | ---- | ---------- | ------- | -------------- |
| idx      | int          | NO   | **PK**     |         | auto_increment |
| username | varchar(20)  | YES  | **UNIQUE** |         |                |
| password | varchar(100) |      |            |         |                |
| company  | varchar(20)  |      |            |         |                |
| grade    | int          |      |            | 0       |                |

  * idx : 일련번호
  * username : user id
  * password : user password
  * company : user company info
  * grade : 등급 (0-Basic, 1-admin, 2-Silver, 3-Gold, 4-Platinum)


### gradetb
| Field    | Type         | Null | Key        | Default | Extra       |
| -------- | ------------ | ---- | ---------- | ------- | -------------|
| idx | int | NO | **PK** ||auto_increment|
| name | varchar(20) | | **UNIQUE**|||
| volume | int | | | 0||

* idx : 일련번호
* name : 등급이름 (Basic - 일반회원, admin - 관리자, Silver - 일반광고주, Gold - 중간광고주, Platinum- 고오급광고주)
* volume : 광고가능 횟수 (Basic:0, admin:1000, silver:5, gold:10, platinum:20)

### nationtb

| Field      | Type         | Null | Key        | Default | Extra      |
| ---------- | ------------ | ---- | ---------- | ------- | -------------- |
| idx        | int          | NO   | **PK**     |       |auto_increment|
| en_name    | varchar(30)  | YES  | **UNIQUE** |         |            |
| ko_name    | varchar(30)  | YES  | **UNIQUE** |         |            |
| dust       | int          | YES  |            |         |            |
| continents | int          | YES  |            |         |            |
| showcnt    | int          | YES  |            | 0       |            |
| customer   | int          | YES  | **FK**  |   0     |            |
| weight     | int          | YES  |            |         |            |
| speech     | varchar(100) | YES  |            |         |            |
| price      | int          | YES  |            |         |            |
| type       | int          | YES  |            |    1    |            |
| s_date | date          | YES  |            |       |            |
| f_date    | date          | YES  |            |        |            |
| flag       | int          | YES  |            |    0    |            |

  * idx : 일련변호
  * en_name : 나라 영어이름
  * ko_name : 나라 한국이름
  * dust : 미세먼지 수치 (1-좋음, 2-보통, 3-나쁨, 4-매우나쁨)
  * continents : 대륙정보 (1-Europe, 2-North Pacific Ocean, 3-Africa, 4-Asia, 5-North America)
  * showcnt : 선택된 나라(selectNation) 카운트
  * customer : 고객 idx FK
  * weight : 가중치
  * speech : 음성 합성 텍스트 (나라별 1개로 통일하기로 함)
  * price : 나라 콘텐츠 별 가격
  * type : 타입 (1-밝고 더움, 2-밝고 추움, 3-어둡고 더움, 4-어둡고 추움)
  * s_date : 여행 시작날짜
  * f_date : 여행 마지막날짜
  * flag : 유효 값( 0-true, 1-false) 


### monthtb

| Field  | Type  | Null | Key    | Default | Extra          |
| ------ | ----- | ---- | ------ | ------- | -------------- |
| idx    | int   | NO   | **PK** |         | auto_increment |
| nation | int   | YES  | **FK** |         |                |
| tem1   | float | YES  |        |         |                |
| tem12  | float | YES  |        |         |                |
| hum1   | float | YES  |        |         |                |
| hum12  | float | YES  |        |         |                |

  * idx : 일련변호
  * nation : 나라 일련번호
  * tmp1-tmp12 : 1월-12월 평균온도
  * hum1-hum12 : 1월-12월 평균습도


### contentstb

| Field     | Type           | Null | Key        | Default | Extra     |
| --------- | -------------- | ---- | ---------- | ------- | ----------|
| idx       | int            | NO   | **PK**   |       |auto_increment |
| nation    | int            | YES  | **FK** |         |           |
| day       | int            | YES  |            |         |           |
| seq       | int            | YES  |            |         |           |
| title     | varchar(50)    | YES  | **UNIQUE**|         |           |
| detail    | varchar(10000) | YES  |            |         |           |
| image     | varchar(500)   | YES  |            |         |           |
| tofrom    | varchar(50)    | YES  |            |         |           |
| transport | varchar(20)    | YES  |            |         |           |

  * idx : 일련번호
  * nation : 나라 일련번호
  * day : 일차
  * seq : 일차 별 경로 순서 1, 2, 3, ...
  * title : 경로 별 제목
  * detail : 경로 별 상세정보
  * image : 경로 별 이미지 url
  * tofrom : 이동경로
  * transport : 이동수단


### imagetb

| Field  | Type         | Null | Key    | Default | Extra          |
| ------ | ------------ | ---- | ------ | ------- | -------------- |
| idx    | int          | NO   | **PK** |         | auto_increment |
| nation | int          | YES  | **FK** |         |                |
| type   | int          | YES  |        |         |                |
| url    | varchar(500) | YES  |        |         |                |

  * idx : 일련번호
  * nation : 나라 일련번호
  * type : 정도 (1-밝고 더움, 2-밝고 추움, 3-어둡고 더움, 4-어둡고 추움)
  * url : 이미지 url 


### adboardtb

| Field | Type         | Null | Key    | Default | Extra          |
| ----- | ------------ | ---- | ------ | ------- | -------------- |
| idx   | int          | NO   | **PK** |         | auto_increment |
| temp  | float        | YES  |        |         |                |
| humid | float        | YES  |        |         |                |
| dust  | float        | YES  |        |         |                |
| rough | float        | YES  |        |         |                |
| info  | varchar(100) | YES  |        |         |                |

  * idx : 일련번호
  * temp : 평균 온도
  * humid : 평균 습도
  * dust : 미세먼지 농도
  * rough : 조도
  * info : 센서에 대한 정보

### counseltb
| Field | Type         | Null | Key    | Default | Extra          |
| ----- | ------------ | ---- | ------ | ------- | -------------- |
| idx   | int          | NO   | **PK** |         | auto_increment |
| name  | varchar(20)        | NO  |        |         |                |
| age | int        | NO  |        |         |                |
| email  | varchar(100)     | NO  |        |         |                |
| tel | varchar(100)        | NO |        |         |                |
| date  | varchar(100) | NO  |        |         |                |
| text  | varchar(1000) | YES  |        |         |                |

* idx : 일련번호
* name : 이름
* age : 나이
* email : 이메일 정보
* tel : 전화번호 정보
* date : 상담받을 날짜
* text : 상담 상세 요청정보

### clicktb
| Field | Type         | Null | Key    | Default | Extra          |
| ----- | ------------ | ---- | ------ | ------- | -------------- |
| idx   | int          | NO   | **PK** |         | auto_increment |
| nation  | int    | NO  | **FK** |         |                |
| click_cnt | int        | NO  |        |         |                |
| qr_cnt  | int     | NO  |        |         |                |
| date | datetime       | NO |        |         |                |

* idx : 일련번호
* nation : 나라 idx 정보
* click_cnt : 클릭 횟수
* qr_cnt : QR 코드 인식 횟수
* date : 인식된 시간


### reconumtb
| Field | Type         | Null | Key    | Default | Extra          |
| ----- | ------------ | ---- | ------ | ------- | -------------- |
| num | int(11) | NO | **PK** || NULL |
