"""
chapter07 이진 탐색 소스코드 [재귀 함수로 구현]
10 7
1 3 5 7 9 11 13 15 17 19
4

10 7
1 3 5 6 9 11 13 15 17 19
원소가 존재하지 않습니다.
"""
from sys import stdin

def solution(target, array, left, right):
  if left > right:
    return "원소가 존재하지 않습니다."
    
  mid = (right + left) // 2
  
  if array[mid] == target:
    return mid + 1
    
  elif array[mid] > target:
    return solution(target, array, left, mid - 1)
    
  else:
    return solution(target, array, mid + 1, right)

def init():
  n, target = map(int, stdin.readline().split())
  array = list(map(int, stdin.readline().split()))
  left = 0
  right = n - 1

  print(solution(target, array, left, right))

init()