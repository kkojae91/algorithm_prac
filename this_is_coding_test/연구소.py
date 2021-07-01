"""
chapter13 DFS/BFS 16번 문제 연구소
바이러스 확산을 막기 위해서 연구소에 벽을 세우려고 한다.
연구소의 크기는 n x m 인 직사각형으로 나타낼 수 있으며, 직사각형은 1 x 1크기의 정사각형으로 나누어져 있다.
바이러스는 상 하 좌 우 모두 퍼져나갈 수 있다. 새로 세울 수 있는 벽의 개수는 3개이며, 꼭 3개를 세워야 한다.
0은 빈칸 1은 벽 2는 바이러스가 있는 곳.
벽 3개를 세운 뒤, 바이러스가 퍼질 수 없는 곳을 안전 영역이라고 할 때
연구소의 지도가 주어졌을 때 얻을 수 있는 안전 영역의 크기의 최댓값을 구하는 프로그램을 작성하시오.
7 7
2 0 0 0 1 1 0
0 0 1 0 1 2 0
0 1 1 0 1 0 0
0 1 0 0 0 0 0
0 0 0 0 0 1 1
0 1 0 0 0 0 0 
0 1 0 0 0 0 0

27

4 6
0 0 0 0 0 0
1 0 0 0 0 2
1 1 1 0 0 2
0 0 0 0 0 2

9

8 8
2 0 0 0 0 0 0 2
2 0 0 0 0 0 0 2
2 0 0 0 0 0 0 2
2 0 0 0 0 0 0 2
2 0 0 0 0 0 0 2
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0

3
"""
from sys import stdin
n, m = map(int, stdin.readline().split())
result = 0
# 벽을 설치한 뒤의 맵 리스트
temp = [[0] * m for i in range(n)]

# 초기 맵 리스트
data = []
for i in range(m):
  data.append(list(map(int, stdin.readline().split())))
  
# 상 하 좌 우
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

# 깊이 우선 탐색(DFS)을 이용해 각 바이러스가 사방으로 퍼지도록 하기
def virus(x, y):
  for i in range(4):
    nx = x + dx[i]
    ny = y + dy[i]
    # 상, 하, 좌, 우 중에서 바이러스가 퍼질 수 있는 경우
    if nx >= 0 and ny >= 0 and nx < n and ny < m:
      if temp[nx][ny] == 0:
        # 해당 위치에 바이러스 배치하고, 다시 재귀적으로 수행
        temp[nx][ny] = 2
        virus(nx, ny)

# 현재 맵에서 안전 영역의 크기 계산하는 메서드
def get_score():
  score = 0
  for i in range(n):
    for j in range(m):
      if temp[i][j] == 0:
        score += 1
  return score

# 깊이 우선 탐색(DFS)을 이용해 울타리를 설치하면서, 매번 안전 영역의 크기 계산
def dfs(count):
  global result
  # 울타리가 3개 설치된 경우
  if count == 3:
    for i in range(n):
      for j in range(m):
        temp[i][j] = data[i][j]
    # 각 바이러스의 위치에서 전파
    for i in range(n):
      for j in range(m):
        if temp[i][j] == 2:
          virus(i, j)
    # 안전 영역의 최댓값 계산
    result = max(result, get_score())
    return
  # 빈 공간에 울타리 설치
  for i in range(n):
    for j in range(m):
      if data[i][j] == 0:
        data[i][j] = 1
        count += 1
        dfs(count)
        data[i][j] = 0
        count -= 1

dfs(0)
print(result)
