"""
연습문제. 숫자가 적혀있는 N장의 종이가 들어간 종이상자에서
종이를 4번 뽑아서 총 합이 m이면 승리한다.
승리할 수 있으면 1, 아니면 0을 출력하시오.
(1 <= N <= 1000, 1<=m<10^8, 1<=k_i< 10^8)
"""

import sys
import itertools

def solution(n_list, m):
  for num_list in itertools.product(n_list, repeat=4):
    if sum(num_list) == m:
      return 1
  return 0

def binary_search(n_list, search_num):
  left = 0
  right = len(n_list) -1
  while left <= right:
    mid = (left + right) // 2
    if n_list[mid] == search_num:
      return True
    elif n_list[mid] > search_num:
      right = mid - 1
    elif n_list[mid] < search_num:
      left = mid + 1
  return False

def solution2(n_list, m, n):
  n_list.sort()
  answer = 0
  for i in range(n):
    for j in range(n):
      for k in range(n):
        n_sum = n_list[i] + n_list[j] + n_list[k]

        if binary_search(n_list, m - n_sum):
          answer = 1
  return answer

# the best solution
def solution3(n_list, m, n):
  n2_list = []
  for i in range(n):
    for j in range(n):
      n2_list.append(n_list[i]+n_list[j])
  n2_list.sort()
  
  answer = 0
  for i in range(len(n2_list)):
    if binary_search(n2_list, m - n2_list[i]):
      answer = 1
      
  return answer

def init():
  n, m = map(int, sys.stdin.readline().split())
  n_list = list(map(int, sys.stdin.readline().split()))
  # print(solution(n_list, m))
  # print(solution2(n_list, m, n))
  print(solution3(n_list, m, n))

init()