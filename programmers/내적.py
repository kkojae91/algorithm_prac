from sys import stdin

def solution(a, b):
  answer = 0
  for i in range(len(a)):
    answer += a[i]*b[i]
  return answer

def init():
  a = list(map(int, stdin.readline.split()))
  b = list(map(int, stdin.readline.split()))

  print(solution(a, b))

init()