"""
숫자 카드2
문제 : 숫자 카드는 정수 하나가 적혀져 있는 카드이다. 상근이는 숫자 카드 N개를 가지고 있다.
정수 M개가 주어졌을 때, 이 수가 적혀있는 숫자 카드를 상근이가 몇 개 가지고 있는지 구하는 프로그램을 작성하시오.

입력: 첫째 줄에 상근이가 가지고 있는 숫자 카드의 개수 N(1<=N<=500,000)이 주어진다.
둘째 줄에는 숫자 카드에 적혀있는 정수가 주어진다. 숫자 카드에 적혀있는 수는 -10,000,000 보다 크거나 같고, 10,000,000보다 작거나 같다.

셋째 줄에는 M(1<=M<=500,000)이 주어진다.
넷째 줄에는 M개의 정수가 주어지며, 이 수는 공백으로 구분되어져 있다.
이 수도 -10,000,000 보다 크거나 같고, 10,000,000보다 작거나 같다.

출력: 첫째 줄에 입력으로 주어진 M개의 수에 대해서, 
각 수가 적힌 숫자 카드를 상근이가 몇 개 가지고 있는지를 공백으로 구분해 출력한다.

6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10

3 0 0 1 2 0 0 2
"""

from sys import stdin
from collections import Counter

def solution(n, n_list, m, m_list):
  answer = []
  for i in m_list:
    if i in n_list:
      answer.append(str(n_list[i]))
    else:
      answer.append('0')
  # print(answer)
  return " ".join(answer)


def init():
  n = int(stdin.readline())
  n_list = Counter(list(map(int, stdin.readline().split())))
  m = int(stdin.readline())
  m_list = list(map(int, stdin.readline().split()))
  print(solution(n, n_list, m, m_list))

init()


# 시간 초가 solution
# def binary_search(n_list, find_num):
#   left = 0
#   right = len(n_list) - 1
#   while left <= right:
#     mid = (left + right) // 2
#     if n_list[mid] == find_num:
#       return n_list[mid]
#     elif n_list[mid] > find_num:
#       right = mid - 1
#     else:
#       left = mid + 1
#   return 0

# def solution(n, n_list, m, m_list):
#   n_list.sort()
#   result = []
#   for find_num in m_list:
#     result.append(binary_search(n_list, find_num))
#   answer = []
#   for i in result:
#       answer.append(str(n_list.count(i)))
#   return " ".join(answer)
