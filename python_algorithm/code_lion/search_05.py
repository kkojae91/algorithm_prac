"""
이분 탐색 (binary_search)
예제5. n개의 오름차순 정수로 이루어진 리스트가 주어졌을 때
k가 존재하면 1, 존재하지 않으면 0을 출력한다.
"""

import sys

def solution(n_list, k):
  fount = False
  left = 0
  right = len(n_list)-1
  result = 0
  result_idx = ''

  while left <= right:
    mid = (left + right) // 2
    if k == n_list[mid]:
      result = n_list[mid]
      result_idx = f'idx: {mid}'
      found = True
      break
    elif k < n_list[mid]:
      right = mid - 1
    elif k > n_list[mid]:
      left = mid + 1
  
  if fount:
    print(result, result_idx)
    return 1
  else:
    print(result, result_idx)
    return 0

def init():
  n, k = map(int, sys.stdin.readline().split())
  n_list = list(map(int, sys.stdin.readline().split()))
  print(solution(n_list, k))

init()