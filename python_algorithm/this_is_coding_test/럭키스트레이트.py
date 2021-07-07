"""
chapter12 구현 문제 07번 럭키 스트레이트
특정조건에 럭키 스트레이트라는 기술 사용
캐릭터 점수를 n이라고 할 때 자릿수를 기준으로 점수 n을 반으로 나누어 
왼쪽 부분의 각 자릿수의 합과 오른쪽 부분의 각 자릿수의 합을 더한 값이 동일한 상황을 의미합니다.
123,402 1+2+3 == 4+0+2 같으므로 럭키 스트레이트를 사용할 수 있습니다.
현재 점수 N이 주어지면 럭키 스트레이트를 사용할 수 있는 상태인지 알려주는 프로그램을 작성하시오.

첫째 줄에 점수 N이 정수로 주어집니다. (10 <= N <=99,999,999) 단, 점수 N의 자릿수는 항상 짝수 형태로 주어진다.

첫째 줄에 럭키 스트레이트를 사용할 수 있다면 "LUCKY"를, 사용할 수 없다면 READY를 출력합니다.

123402
LUCKY

7755
READY
"""
from sys import stdin

def solution(n):
  list_n = list(map(int,list(str(n))))
  length = len(list_n)
  print(list_n)
  front_n = list_n[0:length//2]
  back_n = list_n[length//2:]
  if sum(front_n) == sum(back_n):
    return "LUCKY"
  return "READY"

def init():
  N = int(stdin.readline().rstrip())
  print(solution(N))

init()