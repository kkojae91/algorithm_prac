# 정수 1개가 입력되었을 때, 음(minus)/양(plus)/0(zero)과 짝(even)/홀(odd)을 출력해보자.

def minus_plus(num):
  if num > 0:
    print("plus")
  elif num == 0:
    print("zero")
  else:
    print("minus")

def even_odd(num):
  if num % 2 == 0:
    print("even")
  else:
    print("odd")

def init():
  num = int(input())

  minus_plus(num)
  even_odd(num)

init()