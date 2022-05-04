#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import requests
import json

Seoul = "Seoul"
Vancouver = "Vancouver"
apikey = "4cb2ff8508ad4fc946d2446cc14b2b02"
lang = "en"
# units - metric
api_Seoul = f"""http://api.openweathermap.org/data/2.5/\
weather?q={Seoul}&appid={apikey}&lang={lang}&units=metric"""
api_Vancouver = f"""http://api.openweathermap.org/data/2.5/\
weather?q={Vancouver}&appid={apikey}&lang={lang}&units=metric"""

result_Seoul = requests.get(api_Seoul)
result_Vancouver = requests.get(api_Vancouver)
print(result_Seoul.text)
print(result_Vancouver.text)

data_Seoul = json.loads(result_Seoul.text)
data_Vancouver = json.loads(result_Vancouver.text)

# 지역 : name
print(data_Seoul["name"],"의 날씨입니다.")
print("="*20)
print(data_Vancouver["name"],"의 날씨입니다.")
print("="*20)
# 자세한 날씨 : weather - description
print("날씨는 섭씨",data_Seoul["weather"][0]["description"],"입니다.")
print("="*20)
print("날씨는 섭씨",data_Vancouver["weather"][0]["description"],"입니다.")
print("="*20)
# 현재 온도 : main - temp
print("현재 온도는 섭씨",data_Seoul["main"]["temp"],"입니다.")
print("="*20)
print("현재 온도는 섭씨",data_Vancouver["main"]["temp"],"입니다.")
print("="*20)
# 체감 온도 : main - feels_like
print("하지만 체감 온도는 섭씨",data_Seoul["main"]["feels_like"],"입니다.")
print("="*20)
print("하지만 체감 온도는 섭씨",data_Vancouver["main"]["feels_like"],"입니다.")
print("="*20)
# 최저 기온 : main - temp_min
print("최저 기온은 섭씨",data_Seoul["main"]["temp_min"],"입니다.")
print("="*20)
print("최저 기온은 섭씨",data_Vancouver["main"]["temp_min"],"입니다.")
print("="*20)
# 최고 기온 : main - temp_max
print("최고 기온은 섭씨",data_Seoul["main"]["temp_max"],"입니다.")
print("="*20)
print("최고 기온은 섭씨",data_Vancouver["main"]["temp_max"],"입니다.")
print("="*20)
# 습도 : main - humidity
print("습도는",data_Seoul["main"]["humidity"],"입니다.")
print("="*20)
print("습도는",data_Vancouver["main"]["humidity"],"입니다.")
print("="*20)
# 기압 : main - pressure
print("기압은",data_Seoul["main"]["pressure"],"입니다.")
print("="*20)
print("기압은",data_Vancouver["main"]["pressure"],"입니다.")
print("="*20)
# 풍향 : wind - deg
print("풍향은",data_Seoul["wind"]["deg"],"입니다.")
print("="*20)
print("풍향은",data_Vancouver["wind"]["deg"],"입니다.")
print("="*20)
# 풍속 : wind - speed
print("풍속은",data_Seoul["wind"]["speed"],"입니다.")
print("="*20)
print("풍속은",data_Vancouver["wind"]["speed"],"입니다.")
print("="*20)

