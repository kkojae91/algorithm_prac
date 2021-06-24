from sys import stdin

def solution(a, b):
  answer = ''
  days = 0
  day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"]
  month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  if a == 1:
    days = b
  else:
    days = sum(month[:a-1]) + b
    
  answer = day[(days % 7) - 1]
  
  return answer

def init():
  a, b = map(int, stdin.readline().split())
  print(solution(a, b))

init()