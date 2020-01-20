#include <DHT.h>
#define DHTPIN 8   //어떤 핀에 꽂았는지
#define DHTTYPE DHT11 //센서 이름
DHT dht(DHTPIN, DHTTYPE); //변수에 저장
//hi

void setup(){
  Serial.begin(9600);
  dht.begin();
}
void loop(){
  float h = dht.readHumidity();
  float t = dht.readTemperature();

  Serial.print("습도: ");
  Serial.print(h);
  Serial.println(" %");
  Serial.print("온도: ");
  Serial.print(t);
  Serial.println(" C");

  
}
