"""
chapter05 DFS/BFS 04번 미로 탈출
n x m 미로에 갇혀 있다.
동빈이의 위치는 (1,1) 미로의 출구는 (n, m) 한 번에 한 칸씩 이동 가능
괴물이 있는 부분은 0, 없는 부분은 1 (반드시 미로를 탈출 할 수 있게 미로가 제시된다.)
동빈이가 탈출하기 위해 움직여야 하는 최소 칸의 개수를 구하시오.(시작 칸과 마지막 칸을 모두 포함해서 계산)

첫째 줄에 두 정수 4<=n,m<=200 이 주어집니다. 다음 N개의 줄에는 각각 M개의 정수(0, 1)로 미로의 정보가 주어진다.
(시작 칸과 마지막칸은 항상 1이다.)
5 6
101010
111111
000001
111111
111111

첫째 줄에 최소 이동 칸의 개수를 출력한다.
10
"""
from sys import stdin
from collections import deque

def solution(n, m, graph):
  # 현재 위치 설정
  x, y = 0, 0
  
  # 상 하 좌 우
  dx = [-1, 1, 0, 0]
  dy = [0, 0, -1, 1]

  # queue리스트 생성 (현재 x, y 좌표 큐에 삽입)
  queue = deque()
  queue.append((x, y))

  # queue리스트에 값이 있는 경우 반복
  while queue:
    # 현재 x, y 좌표
    x, y = queue.popleft()
    
    # 상, 하, 좌, 우 총 4군데 확인
    for i in range(4):
      # 다음 위치 확인
      nx = x + dx[i]
      ny = y + dy[i]
      
      # 범위를 벗어나면 다음으로..
      if nx < 0 or ny < 0 or nx >= n or ny >= m:
        continue
        
      # 괴물이 있는 경우 다음으로..
      if graph[nx][ny] == 0:
        continue

      # 일반 길일 경우
      if graph[nx][ny] == 1:
        # 이전 값에 1을 더한 값을 할당한다.
        graph[nx][ny] = graph[x][y] + 1
        # 다음 값을 다시 queue 리스트에 넣어 준다.
        queue.append((nx, ny))
        
  # for i in graph:
  #   print(i)
  return graph[n-1][m-1]

def init():
  n, m = map(int, stdin.readline().split())

  graph = []
  for i in range(n):
    graph.append(list(map(int, stdin.readline().rstrip())))
    
  print(solution(n,m,graph))

init()