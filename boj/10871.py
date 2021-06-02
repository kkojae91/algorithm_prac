# X보다 작은 수
# 수열 A, 정수 X
# A에서 X보다 작은 수를 모두 출력해라.
import sys

def solution(x, n_list):
  result = []
  for num in n_list:
    if num < x:
      result.append(str(num))
  return " ".join(result)

def init():
  N, X = map(int, sys.stdin.readline().split())
  N_list = list(map(int, sys.stdin.readline().split()))
  print(solution(X, N_list))

init()