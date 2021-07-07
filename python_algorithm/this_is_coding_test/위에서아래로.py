"""
chapter06 정렬 02번 위에서 아래로
수열을 내림차순으로 정렬하는 프로그램을 만드시오.

3
15
27
12

27 15 12
"""
from sys import stdin

def solution(n, n_list):
  n_list.sort(reverse=True)
  return n_list

def init():
  n = int(stdin.readline().rstrip())
  n_list = []
  for i in range(n):
    n_list.append(int(stdin.readline().rstrip()))
  print(solution(n, n_list))

init()