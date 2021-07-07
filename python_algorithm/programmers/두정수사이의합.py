from sys import stdin

def solution(a, b):
  answer = 0
  if a > b:
    for i in range(b, a+1):
      answer += i
  elif a < b:
    for i in range(a, b+1):
      answer += i
  else:
    answer = a
  return answer

def init():
  a, b = map(int, stdin.readline().split())
  print(solution(a, b))

init()