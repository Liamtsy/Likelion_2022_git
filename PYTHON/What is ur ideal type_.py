#!/usr/bin/env python
# coding: utf-8

# In[ ]:


#dictionary로 관리
total_dictionary = {}

while True:
    question = input("질문을 입력해주세요 : ")
    if question == "q":
        break
    else:
        total_dictionary[question] = ""

for i in total_dictionary:
    print(i)
    answer = input("답변을 입력해주세요 : ")
    total_dictionary[i] = answer
print(total_dictionary)


# In[5]:


#list로 관리, list요소가 dictionary
total_list = []

while True:
    question = input("질문을 입력해주세요 : ")
    if question == "q":
        break
    else:
        total_list.append({"Question" : question, "Answer" : ""})

for i in total_list:
    print(i["Question"])
    answer = input("답변을 입력해주세요 : ")
    i["Answer"] = answer
print(total_list)


# ## 
