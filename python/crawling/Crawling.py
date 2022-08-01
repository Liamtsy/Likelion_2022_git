#!/usr/bin/env python
# coding: utf-8

# In[64]:


#실검 크롤링, 근데 강의 업뎃 안돼서 실검 불러오는게 안됨;
import requests # 남이 만들어놓은 requests라는 모듈을 사용함. 안에 무슨 함수들이 있을까?
from bs4 import BeautifulSoup
from datetime import datetime

Tisword = "https://tisword.com/realtime/"
response = requests.get(Tisword) #티스워드 서버에 요청하고, 응답 받은 값을 변수에 저장

soup = BeautifulSoup(response.text.decode('UTF-8','replace'), 'html.parser') #Data는 원하는 걸로 변경 가능
soup.findAll('title')
## 파싱: decode를 통해서 한글이 깨지는 현상을 해결
## UTF-8을 통해서 수정
# The way of use BeautifulSoup = BeautifulSoup(Data, a way of parsing)
print(response.text[:500]) # url의 html 코드 문자열 500자까지 슬라이싱 
print(type(BeautifulSoup(response.text, 'html.parser'))) #response.text라는 data를 html.parser라는 방식으로 parsing
#BeautifulSoup는 어떤 통에다 데이터를 담아주는데, 통에는 다양한 칸막이들이 있어서 문자열을 집어넣으면 데이터를 하나하나 다 떼서 통에 가지런히 넣어줌.
#자료형 확인하고 싶으면 type function 사용
'''
#print(response.url) ## 주소를 가져온다.
#print(response.content) ## contents 를 가져온다.
#print(response.encoding) ## encoding 방식를 가져온다.
#print(response.headers) ## header를 가져온다.
#print(response.json) ## json을 가져온다.
#print(response.links) ## 링크들을 가져온다.
#print(response.ok) ## 요청 허용 여부를 가져온다.
## https://docs.python-requests.org/en/master/api/#requests.Response
'''
'''
#file = open("Tisword.html","w",encoding = "UTF-8")
#file.write(response.text) ## 잘 이해 안감
#file.close()
## 자신의 워크 스페이스에 Tisword.html이 생기게 된다.
## 여기서 공통점을 찾아서 실시간 검색어를 찾아오도록 한다.
## a 태그에 link_favorsch 클래스를 가지고 있다.

'''
'''
#print(soup.title)
#print(soup.title.string) #title에서 태그 빼고 문자열만 가져오기
#print(soup.span) #html 코드에서 가장 상단의 span tag 가져오기
#print(soup.findAll('span')) #모든 span tag 가져오기
'''
# html 문서에서 모든 div 태그 + 클래스를 가져오는 코드
results = (soup.findAll('div','py-4 flex text-lg'))

search_rank_file = open("rankresult.txt","w") # open(File, Mode) File 확장자는 원하는대로 하고, 
#모드는 r(ead), w(rite), a(ppend). read는 읽기 전용, write는 수정하면 변경 사항이 기존 사항 덮어쓰고, append는 기존 내용 보존한 후 덧붙이는 모드

rank = 1

print(datetime.today().strftime("%Y년 %m월 %d일의 실시간 검색어 순위입니다.\n"))

for result in results:
    search_rank_file.write(str(rank)+"위:"+result.get_text()+"\n") # +말고 ,로 잇는건 안되나?
    print(rank,'위: ',result.get_text(),'\n') #태그들 안 가져오고 실검 텍스트만 가져오기#줄 바꿈 해서 출력해주기, 깔끔하게
    rank += 1


# In[ ]:


from bs4 import BeautifulSoup
import requests
from datetime import datetime

headers = {'User-Agent':'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36'}
#네이버 같은 경우, 크롤링 봇 막아놓음. 그렇기에 나 봇 아니고 크롤링 한 번만 해갈게. 나 사람이야. 라는 구문임.
url = "https://datalab.naver.com/keyword/realtimeList.naver?age=20s"
response = requests.get(url, headers = headers) #요청할 때 사람인걸 알려주려고 씀.
soup = BeautifulSoup(response.text, 'html.parser')
rank = 1
# span - item_title
results = soup.findAll('span','item_title')

print(response.text)

search_rank_file = open("rankresult.txt","a")

print(datetime.today().strftime("%Y년 %m월 %d일의 실시간 검색어 순위입니다.\n"))

for result in results:
    search_rank_file.write(str(rank)+"위:"+result.get_text()+"\n")
    print(rank,"위 : ",result.get_text(),"\n")
    rank += 1


# In[66]:


##성대신문 첫 페이지 기사 크롤링
import requests
from bs4 import BeautifulSoup
import pandas as pd
import re

url = 'https://www.skku.edu/skku/campus/skk_comm/news.do'

response = requests.get(url)

html = response.text ## 텍스트를 가져온다.
soup = BeautifulSoup(html, 'html.parser') ## html로 읽어와준다.
title = soup.find_all("div", class_='news_listCont') # div태그에 있는 클래스가 news_listCont를 가져온다.
#find_all이 findAll 보다 new version. just google it.

titles = []
for x in title:
	titles.append(re.sub(r"[\n\t\s]*", "", x.find("a").get_text())) 
## 읽어왔을 때 \n, \t, \s가 존재 -> re.sub을 통해서 ""로 대체
## a 테그를 찾은 이후에, 문자열로 바꾼다.
## append를 통해서 리스트에 담는다.
titles ## 리스트 형태로 저장 -> 뭔 소리지?

for i in range(0, len(titles)):
    print(str(i+1)+"번 뉴스:"+ titles[i])


# In[ ]:


#HTML, CSS 속성을 이용해 가져오기
## 이렇게 html 속성을 지정합니다.
soup.find_all(attrs={'class':'footer-list', 'id':'footer-address-list'})
"""
[<ul class="footer-list" id="footer-address-list">
<li class="footer-list-item">사업자 등록번호 : 375-87-00088</li>
<li class="footer-list-item"><address>서울특별시 강남구 테헤란로4길 14 미림타워 14층</address></li>
<li class="footer-list-item"><a href="mailto:team@daangn.com">team@daangn.com</a></li>
</ul>]
"""

## css 속성을 통해서 가져옵니다.
soup.select(".card-region-name")

"""
[<div class="card-region-name">    
        경기도 수원시 팔달구 인계동
      </div>,
 <div class="card-region-name">    
        경기도 수원시 팔달구 화서동
      </div>,
 <div class="card-region-name">
        서울 마포구 용강동
      </div>,
 .
 .
 .
 <div class="card-region-name">
        서울 마포구 상암동
      </div>,
 <div class="card-region-name">
        서울 성동구 상왕십리동
      </div>,
 <div class="card-region-name">
        대구 북구 침산동
      </div>]
"""

## id 앞에는 #을 사용합니다.
soup.select("#hot-articles-go-download")

## 텍스트만 읽어오기, 클래스가 card-title인 것들의 텍스트 10개만 뽑아보기
for x in range(0,10):
    print(soup.select(".card-title")[x].get_text())

