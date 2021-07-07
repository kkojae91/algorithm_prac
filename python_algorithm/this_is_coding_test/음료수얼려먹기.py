"""
chapter05 DFS/BFS 03번 음료수 얼려 먹기
n x m 구멍이 뚫려 있는 부분은 0, 칸막이가 존재하는 부분은 1로 표시된다.
구멍이 뚫려 있는 부분끼리 상, 하, 좌, 우로 붙어 있는 경우 서로 연결되어 있는 것으로 간주한다.
4 x 5얼음 틀예시는 3개가 생성된다.

첫 번째 줄에 얼음 틀의 세로 길이 N과 가로 길이 M이 주어진다.(1<=N,M<=1,000)
두 번째 줄부터 N + 1번째 줄까지 얼음 틀의 형태가 주어진다.
이때 구멍이 뚫려 있는 부분은 0, 그렇지 않은 부분은 1이다.
4 5
00110
00011
11111
00000

한 번에 만들 수 있는 아이스크림 개수를 출력한다.
3
"""
from sys import stdin

def dfs(row, col, ice_list, n, m):
  # 상, 하, 좌, 우
  dx = [-1, 1, 0, 0]
  dy = [0, 0, -1, 1]
  
  # 범위를 벗어나면 종료
  if row <= -1 or col <= -1 or row >= n or col >= m:
    return False

  if ice_list[row][col] == 0:
    # 방문 체크
    ice_list[row][col] = 1
    dfs(row + dx[0], col + dy[0], ice_list, n, m) # 상 확인
    dfs(row + dx[1], col + dy[1], ice_list, n, m) # 하 확인
    dfs(row + dx[2], col + dy[2], ice_list, n, m) # 좌 확인
    dfs(row + dx[3], col + dy[3], ice_list, n, m) # 우 확인
    return True
    
  return False

def solution(n, m, ice_list):
  count = 0
  # 각각의 공간을 하나씩 탐색
  for row in range(n):
    for col in range(m):
      # dfs가 True이면 count += 1
      if dfs(row, col, ice_list, n, m):
        count += 1
  return count


def init():
  n, m = map(int, stdin.readline().split())
  
  ice_list = []
  for _ in range(n):
    ice_list.append(list(map(int, stdin.readline().rstrip())))
  
  print(solution(n, m, ice_list))

init()