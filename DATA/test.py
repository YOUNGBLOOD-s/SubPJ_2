#coding: utf-8
import os

for dir in os.listdir('.'):
    if(dir == 'test.py'): continue
    if("SQL" in dir): continue
    print("****************" + dir  + "**************")
    for f in os.listdir(dir):
        if(".txt" in f): continue
        os.rename(dir+'/'+f, dir+'/'+f.lower())