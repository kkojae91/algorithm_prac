"""
예제2. 정수로 이루어진 세로가 n, 가로가 m인 2차원 리스트에 
k가 존재하면1, 존재하지 않으면 0을 출력한다.
(1<=n, m < 1000, 1<=k<1000000)

입력
첫째 줄에 n, m, k가 입력되고, 
둘째줄부터 n+1번까지 m개의 원소가 띄어쓰기로 구분되어 입력된다.

출력
첫째줄에 정답을 출력한다.

3 4 22
1 3 5 7
9 11 22 24
2 4 6 8

1
"""
import sys

def solution(nn_list, k):
  for n_list in nn_list:
    if k in n_list:
      return 1
  else:
    return 0

def init():
  n, m, k = map(int, sys.stdin.readline().split())
  nn_list = []
  for i in range(n):
    nn_list.append(list(map(int, sys.stdin.readline().split())))
  # print(nn_list)
  print(solution(nn_list, k))
init()