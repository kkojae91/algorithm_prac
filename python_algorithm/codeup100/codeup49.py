# 두 정수(a, b)를 입력 받아 a가 b보다 크면 1을, 
# a가 b보다 작거나 같으면 0을 출력하는 프로그램을 작성해보자.

def compare_num(a, b):
  if a > b:
    print(1)
  elif a <= b:
    print(0)

def init():
  a, b = map(int, input().split())

  compare_num(a, b)
  
init()