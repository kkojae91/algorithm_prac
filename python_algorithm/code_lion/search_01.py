"""
예제1. n개의 정수로 이루어진 리스트가 주어졌을 때
리스트 안에 정수 k가 존재하면 1, 존재하지 않으면 0을 출력한다.
(1 <= n,k <= 1000000)
입력 
첫째 줄에 원소의 개수 n과 찾을 숫자 k가 입력되고, 
둘째 줄에 n개의 원소가 띄어쓰기로 구분되어 입력된다.

출력
첫째 줄에 정답을 출력한다.
"""
import sys

def solution(n_list, k):
  if k in n_list:
    return 1
  else:
    return 0

def init():
  n, k = map(int, sys.stdin.readline().split())
  n_list = list(map(int, sys.stdin.readline().split()))
  print(solution(n_list, k))

init()