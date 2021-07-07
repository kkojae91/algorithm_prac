"""
chapter04 구현 예제4-2 시각

정수 n 입력 00시 00분 00초 부터 n시 59분 59초 까지의 
모든 시각 중 3이 하나라도 포함 되는 모든 경우의 수를 구하는 프로그램을 작성하시오.
첫째 줄에 정수 n이 입력된다. (0<=n<=23)
5
00시 00분 00초부터 n시 59분 59초 까지의 모든 시각 중에서 3이 하나라도 포함되는 모든 경우의 수를 출력한다.
11475
"""
from sys import stdin

def solution(n):
  count = 0
  for h in range(n+1):
    for m in range(60):
      for s in range(60):
        if "3" in list(str(h)+str(m)+str(s)):
          count += 1
          
  return count

def init():
  n = int(stdin.readline().rstrip())
  print(solution(n))

init()