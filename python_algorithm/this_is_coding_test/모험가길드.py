"""
chapter11 그리디 문제 01번 문제 모험가 길드
동빈이를 위해 N명의 모험가에 대한 정보가 주어졌을 때, 여행을 떠날 수 있는 그룹 수의 최댓값을 구하는 프로그램을 작성하시오.
예를 들어 N=5이고, 각 모험가의 공포도가 2 3 1 2 2 라면
그룹 1에 공포도가 1 2 3 인 모험가를 한 명씩 넣고, 그룹 2에 공포도가 2인 남은 두명을 넣게 되면,
총 2개의 그룹을 만들 수 있습니다.
또한 몇 명의 모험가는 마을에 그대로 남아 있어도 되기 때문에, 모든 모험가를 특정한 그룹에 넣을 필요는 없습니다.

첫째 줄에 모험가의 수 N이 주어집니다.(1<=N<=100,000)
둘째 줄에 각 모험가의 공포도의 값을 N 이하의 자연수로 주어지며, 각 자연수는 공백으로 구분합니다.

여행을 떠날 수 있는 그룹 수의 최댓값을 출력합니다.
5
2 3 1 2 2

2
"""
from sys import stdin

def solution(n, n_list):
  n_list.sort()
  answer = 0
  count = 0
  for i in n_list:
    count += 1
    if count >= i:
      result += 1
      count = 0
  return answer

def init():
  N = int(stdin.readline().rstrip())
  n_list = list(map(int, stdin.readline().split()))
  print(solution(N, n_list))

init()