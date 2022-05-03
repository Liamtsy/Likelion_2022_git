#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import os
os.getcwd()


# In[ ]:


from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

driver = webdriver.Chrome(ChromeDriverManager().install())


# In[4]:


#문자열 여러 줄로 출력
multiline = '''
Life is too short
to get a genuine happiness
init?
'''
print(multiline)


# In[ ]:


# 비교 조건 3개 이상 예시:
"""
if: 첫번째 조건에서 사용한다. 
elif -> else if: 첫번째 이후, 최종 조건 이전에 사용한다.
esle: 최종 조건에 있어서 사용한다.
"""
# 예시: 5000원 이상: 택시/ 3000원 이상: 버스/ 1000원 따릉이/ 나머지: 걷기

money = int(input("돈 얼마나 있니?"))

if(money >= 5000):
    print("택시타자")
elif(money >= 3000):
    print("버스타자")
elif(money >= 1000):
    print("따릉이타자")
else:
    print("걷자")


# In[5]:


# or은 둘 중에 하나만 참이여도 전체가 참
money = int(input('돈 얼마나 있어?: '))
card = True
if money >= 3000 or card:
	print("택시를 타고 가라")
else:
	print("걸어가라")

## 택시를 타고 가라
"""
money가 3000 미만이라도 card가 True이기 때문에 
money >= 3000 or card 조건문이 참이 된다. 따라서 if문 다음 ‘택시를 타고 가라’ 문장이 출력된다.
"""


# In[8]:


## x in 리스트, 튜플, 문자열
""""만약 주머니에 돈이 있으면 택시를 타고, 없으면 걸어 가라."""

pocket = ['paper', 'cellphone', 'money']
if 'money' in pocket:
	print("택시를 타고 가라")
else:
	print("걸어가라")

## 택시를 타고 가라
"""['paper', 'cellphone', 'money'] 리스트 안에 
'money'가 있으므로 'money' in pocket은 참이 된다. 따라서 if문 다음 문장이 수행된다."""

### 만약 조건문이 아무 일도 하지 않게 하고 싶다면???
pocket = ['paper', 'money', 'cellphone']
if 'money' in pocket:
	pass ## pass 를 사용할 경우에, 아무 결과 값을 보여주지 않는다.
else:
	print("카드를 꺼내라")


# In[11]:


#조건부 표현식
score = int(input('What is your ISS final score?:'))
message = "success" if score >= 60 else "failure"
print(message)
number = 10
a = '짝수' if number % 2 == 0 else '홀수'
print(number, "은", a)

number = 25
a = '짝수' if number % 2 == 0 else '홀수'
print(number, "은", a)

### 조건문이 참인 경우 if 조건문 else 조건문이 거짓인 경우
## 조건부 표현식은 가독성에 유리하며, 한 줄로 작성할 수 있어서 활용성에 있어서 좋다.


# In[ ]:


#while 반복문 예시

coffee = 10
while True:
    money = int(input("돈을 넣어 주세요: "))
    if money == 300:
        print("커피를 줍니다.")
        coffee = coffee -1
    elif money > 300:
        print("거스름돈 %d를 주고 커피를 줍니다." % (money -300))
        coffee = coffee -1
    else:
        print("돈을 다시 돌려주고 커피를 주지 않습니다.")
        print("남은 커피의 양은 %d개 입니다." % coffee)
    if coffee == 0:
        print("커피가 다 떨어졌습니다. 판매를 중지 합니다.")
        break
	### break가 없다면 어떻게 될까? -> 무한 루프를 돌게 된다.


treeHit = 0
answer = input('나무를 찍으시겠습니까?(yes or no): ')
if answer == 'yes':
    while treeHit < 10:
        treeHit = treeHit +1
        print("나무를 %d번 찍었습니다." % treeHit)
        if treeHit == 10:
            print("나무 넘어갑니다.")
else:
    print('실망이군요')
    
## 이와 같이 조건을 while 뒤에 넣어서 돌려줄 수 있다.


# In[30]:


#요즘 유행하는 반복문 방식, split 함수는 띄어쓰기 기준으로 한 문자열을 나누어 리스트로 변환해줌.
cnt = int(input()) ## 입력받을 개수를 입력합니다.
numbers = list(map(int, input().split()))
print(numbers)
"""
map 함수를 통하여, 전자에 있는(int)형식의 여러 인풋들을 받습니다. 
그 개수는 위에 존재하는 cnt 개수만큼 받을 수 있습니다.
"""
print(min(numbers),max(numbers))
print("hello world")

#의문점1: cnt 변수는 어디에 적용되는거지?
#의문점2: input().split()하면 리스트로 변환되는데, 그 요소들에 int 함수를 적용시켜서 그 리스트가 풀리기에 다시 list로 감싸주는건가?


# ### 

# In[ ]:


# list.extend(list2) - 리스트에 다른 리스트2 연결
"""
리스트1에 리스트2를 붙이고 싶을때 사용하는 함수 입니다.
extend( 매개변수 ) 함수의 매개변수에는 무조건 리스트가 와야합니다.
"""
a = [6, 5]
b = [3, 2, 1]
c = ['blockdmask', 'blog']
 
print(a)
 
a.extend(b)
print(a)
 
a.extend(c)
print(a)

"""
리스트 + 연산자와 extend의 다른점은
list1 + list2 는 리스트 두개의 리스트를 연결해서 새로운 list3을 반환하는 것이고 
그렇기 때문에 list3 = list1 + list2 이런식으로 해야 이어진 리스트를 받을 수 있습니다.

하지만
list1.extend(list2)는 list1 리스트 객체에다가 list2를 붙이고, list1 객체를 그대로 사용할 수 있다는 점이 다릅니다.
"""


# In[35]:


# 중첩된 튜플의 순회
t1 = (1, 2, (3, 4))
print('1. 튜플 중첩 반복문')
for v in t1:
    print(v)
## 위에서 먼저 튜플을 확인해보자.
print('\n2. 튜플 중첩 인덱싱')
print(f't1[0] = {t1[0]}')
print(f't1[1] = {t1[1]}')
print(f't1[2] = {t1[2]}')
print(f't1[2][0] = {t1[2][0]}')
print(f't1[2][1] = {t1[2][1]}')

