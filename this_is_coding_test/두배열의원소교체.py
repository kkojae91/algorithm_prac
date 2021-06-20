"""
chapter06 정렬 04번 문제 두 배열의 원소 교체
동빈이는 최대 K번의 바꿔치기 연산을 할 수 있다.
바꿔치기 연산이란 배열 A에 있는 원소 하나와 배열 B에 있는 원소 하나를 골라서 두 원소를 서로 바꾸는 것을 말한다.
동빈이의 최종 목표는 배열 A의 모든 원소의 합이 최대가 되도록 하는 것
n = 5, k = 3
a = [1,2,5,4,3]
b = [5,5,6,6,5]
a의 1과 b의 6 바꾸기, a의 2와 b의 6 바꾸기, a의 3과 b의 5 바꾸기
a = [6,6,5,4,5]
b = [3,5,1,2,5]
a 배열의 합은 26

첫 번째 줄에 n, k가 공백으로 구분되어 입력된다. (1 <= n <= 100,000 // 0 <= k <= n)
두 번째 줄에 배열 A의 원소들이 공백으로 구분되어 입력된다.
세 번째 줄에 배열 B의 원소들이 공백으로 구분되어 입력된다.

최대 k번의 바꿔치기 연산을 수행하여 만들 수 있는 배열 A의 모든 원소의 합의 최댓값을 출력한다.
5 3
1 2 5 4 3
5 5 6 6 5

26
"""
from sys import stdin

def solution(n, k, a_list, b_list):
  # a_list, b_list 정렬
  a_list.sort()
  b_list.sort(reverse=True)
  # a_list의 최솟값을 구하고, b_list의 최댓값을 구한 후 k번 바꿔준다.
  for idx in range(k):
    # b_list[idx]가 a_list[idx]보다 클 경우 두자리를 바꿔준다.
    if a_list[idx] < b_list[idx]:
      a_list[idx], b_list[idx] = b_list[idx], a_list[idx]
    # b_list[idx]가 a_list[idx]보다 작거나 같은 경우 반복문 탈출
    else:
      break

  # a_list의 모든 합을 구한다.
  return sum(a_list)

def init():
  n, k = map(int, stdin.readline().split())
  a_list = list(map(int, stdin.readline().split()))
  b_list = list(map(int, stdin.readline().split()))
  print(solution(n, k, a_list, b_list))

init()