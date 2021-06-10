"""
chapter04 구현 예제4-1 상하좌우
n x n 지도
l,r,u,d 지도를 벗어나면 무시
(1,1)에서 항상 시작 최종 도착 지점을 출력하시오.

첫째 줄에 공간의 크기를 나타내는 N이 주어진다. (1<=N<=100)
둘째 줄에 여행가 A가 이동할 계획서 내용이 주어진다. (1<= 이동횟수 <=100)
5
R R R U D D
첫째 줄에 여행가 A가 최종적으로 도착할 지점의 좌표 (x, y)를 공백으로 구분하여 출력한다.
3 4
"""
from sys import stdin

def solution2(n, direction_list):
  x , y = 1, 1
  # L, R, U, D
  dx = [0, 0, -1, 1]
  dy = [-1, 1, 0, 0]
  move_types = ['L', 'R', 'U', 'D']
  # 이동 계획을 하나씩 확인하기
  for direct in direction_list:
    # 이동 후 좌표 구하기
      for i in range(len(move_types)):
        if direct == move_types[i]:
          nx = x + dx[i]
          ny = y + dy[i]
      # 공간을 벗어나는 경우 무시
      if nx < 1 or ny < 1 or nx > n or ny > n:
        continue
      x, y = nx, ny
  return " ".join([str(x), str(y)])

# 내가 풀어 본 풀이
def solution(n, direction_list):
  # map의 크기는 1 ~ n 을 벗어나면 무시. 시작은 1 1
  # 동북서남
  dx = [0, -1, 0, 1]
  dy = [1, 0, -1, 0]
  direction_dict = {
    "R": 0, "U": 1, "L": 2, "D": 3
  }
  x = 1
  y = 1

  for direct in direction_list:
      idx = direction_dict[direct]
      x = x + dx[idx]
      y = y + dy[idx]
      if 0 < x < n+1 and 0 < y < n+1:
        pass
      else:
        x = x - dx[idx]
        y = y - dy[idx]

  return " ".join([str(x), str(y)])

def init():
  n = int(stdin.readline().rstrip())
  direction_list = list(map(str, stdin.readline().split()))

  print(solution(n, direction_list))
  print(solution2(n, direction_list))
  
init()