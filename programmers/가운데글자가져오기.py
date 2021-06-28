from sys import stdin

def solution(s):
  answer = ''
  if len(s) % 2 == 0:
    answer = s[int(len(s)/2)-1: int(len(s)/2)+1]
  else:
    answer = s[int(len(s)/2)]

  return answer

def init():
  s = str(stdin.readline().rstrip())
  print(solution(s))

init()