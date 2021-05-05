# 세 정수 a, b, c가 입력되었을 때, 짝(even)/홀(odd)을 출력해보자.

def solution(a, b, c):
  if a % 2 == 0:
    print("even")
  elif a % 2 == 1:
    print("odd")
  
  if b % 2 == 0:
    print("even")
  elif b % 2 == 1:
    print("odd")
  
  if c % 2 == 0:
    print("even")
  elif c % 2 == 1:
    print("odd")


def init():
  a, b, c = map(int, input().split())
  solution(a, b, c)
init()