"""
chapter04 구현 03번 게임 개발
메뉴얼
1. 현재 위치에서 현재 방향을 기준으로 왼쪽 방향(반시계 방향으로 90도 회전한 방향)부터 차례대로 갈 곳을 정한다.
2. 캐릭터의 바로 왼쪽 방향에 아직 가보지 않은 칸이 존재한다면, 왼쪽 방향으로 회전한 다음 왼쪽으로 한칸 전진한다.
왼쪽 방향에 가보지 않은 칸이 없다면, 왼쪽 방향으로 회전만 하고 1단계로 돌아간다.
3. 만약 네 방향 모두 이미 가본 칸이거나 바다로 되어 있는 칸인 경우에는, 
바라보는 방향을 유지한채로 한칸 뒤로 가고 1단계로 돌아간다. 단, 이때 뒤쪽 방향이 바다인 칸이라 뒤로 갈 수 없는 경우 움직임을 멈춘다.

첫째 줄에 3<=n,m<=50
둘째 줄에 게임 캐릭터가 있는 칸의 좌표 (a,b)와 바라보고 있는 방향 d가 각각 주어진다.
0-북, 1-동, 2-남,3-서
셋째 줄부터 맵이 육지인지 바다인지에 대한 정보. 0-육지 1-바다
처음에 게임 캐릭터가 위치한 칸의 상태는 항상 육지

첫째 줄에 이동을 마친 후 캐릭터가 방문한 칸의 수를 출력한다.
4 4
1 1 0
1 1 1 1
1 0 0 1
1 1 0 1
1 1 1 1

3
"""
from sys import stdin

# 방향을 바꿔 주는 함수 생성
def turn_left(direction):
  direction -= 1
  # 만약 -1이 될 경우 3으로 변경
  if direction == -1:
    direction = 3
    
  return direction

def solution(x, y, direction, visit, array):
  # 북, 동, 남, 서
  dx = [-1, 0, 1, 0]
  dy = [0, 1, 0, -1]

  # 시작 하면서 방문 하니 1 부터 count
  count = 1
  # 총 네번 돌면 다 확인 하는 변수 생성
  turn_time = 0
  
  while True:
    direction = turn_left(direction)
    # 다음 x, y 위치를 nx, ny로 할당
    nx = x + dx[direction]
    ny = y + dy[direction]

    # 회전한 이후 정면에 가보지 않은 칸이면서 육지인 경우 이동
    if visit[nx][ny] == 0 and array[nx][ny] == 0:
      # visit에 이동 check
      visit[nx][ny] = 1
      # 현재 위치 업데이트
      x = nx
      y = ny
      # 캐릭터가 이동 했으니 count += 1
      count += 1
      # 캐릭터가 이동 했으니 turn_time 초기화
      turn_time = 0
      # 다시 반복 
      continue
    # 회전한 이후 가보지 않은 칸이 없거나 바다인 경우
    else:
      turn_time += 1

    # 네 방향 모두 갈 수 없는 경우
    if turn_time == 4:
      nx = x - dx[direction]
      ny = y - dy[direction]
      # 바로 뒤가 육지이면 이동하기
      if array[nx][ny] == 0:
        x = nx
        y = ny
        turn_time = 0
      # 바로 뒤가 바다일 경우
      else:
        break
  return count
  
def init(): 
  n,m = map(int, stdin.readline().split())
  visit = [[0]*m for _ in range(n)]
  x, y, direction = map(int, stdin.readline().split())
  visit[x][y] = 1

  array = []
  for i in range(n):
    array.append(list(map(int, stdin.readline().split())))
  
  print(solution(x, y, direction, visit, array))

init()