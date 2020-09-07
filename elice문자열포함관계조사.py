# 두 문자열 a,b 가 주어질 때 a의 모든 알파벳이 문자열 b에 존재하는지 판별하는 프로그램을 만드시오.
from collections import deque

def str_contain(a,b):
    # 기저조건 작성
    if len(a) == 0 :
        return "YES"
    # a[0]이 b안에 있다면 popleft() 제거 후 재귀 함수 
    if a[0] in b:
        a.popleft()
        print(a)
        return str_contain(a,b)
    else:
        return "NO"

# 첫째줄에는 a가 둘째줄에는 b가 입력된다.
# a = input()
a = deque(input())
b = input()
print(str_contain(a,b))