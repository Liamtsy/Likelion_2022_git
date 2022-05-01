#!/usr/bin/env python
# coding: utf-8

# In[4]:


import random
import time

contents_list = []

while True:
    print(contents_list)
    content = input("Please add a content that you want to watch today (nothing : q): ")
    if content == "q":
        break
    else:
        contents_list.append(content)
print(contents_list)

contents_set = set(contents_list)

while True:
    print(contents_set)
    content = input("Please delete a content that you don't want to watch today (nothing : q): ")
    if content == "q":
        break
    else:
        contents_set = contents_set - set([content])
print(contents_set)

print("I'll recommend one content in 5 secs among", contents_set)
for x in range(5,0,-1):
    print(x)
    time.sleep(1)
print("Today's Netflix content is", random.choice(list(contents_set)))
    

