"""
chapter04 구현 02번 왕실의 나이트
왕실의 정원은 8 x 8 좌표 평면이다.
나이트는 L자로만 이동이 가능하다. 정원 밖으로 나갈 수 없다.
나이트 이동 방법
1. 수평으로 두 칸 이동한 뒤에 수직으로 한 칸 이동하기
2. 수직으로 두 칸 이동한 뒤에 수평으로 한 칸 이동하기
8x8좌표 평면상에서 나이트의 위치가 주어졌을 때 나이트가 이동할 수 있는 경우의 수를 출력하는 프로그램을 작성하시오.
행 위치는 1-8, 열의 위치는 a-h 로 표기
a1에 위치할 경우 경우의 수는 2가지
오른쪽으로 두 칸 이동 후 아래로 한 칸 이동하기 (c2)
아래로 두 칸 이동 후 오른쪽으로 한 칸 이동하기 (b3)
c2에 위치할 경우 경우의 수는 6가지

첫째 줄에 8 x 8 좌표 평면상에서 현재 나이트가 위치한 곳의 좌표를 나타내는 두 문자로 구성된 문자열이 입력된다.
입력 문자는 a1처럼 열과 행으로 이뤄진다.

첫째 줄에 나이트가 이동할 수 있는 경우의 수를 출력하시오.
a1
2

c2
6
"""
from sys import stdin

def solution2(position):
  row = int(position[1])
  # ord 아스키 코드를 통해 숫자 계산
  column = int(ord(position[0])) - int(ord('a')) + 1

  # 나이트가 이동할 수 있는 8가지 방향 정의
  steps = [(-2, -1), (-1, -2), (1, -2), (2, -1), (2, 1), (1, 2), (-1, 2), (-2, 1)]

  # 8가지 방향에 대하여 각 위치로 이동이 가능한지 확인
  result = 0
  for step in steps:
    # 이동하고자 하는 위치 확인
    next_row = row + step[0]
    next_column = column + step[1]
    # 해당 위치로 이동이 가능하다면 카운트 증가
    if next_row >= 1 and next_row <= 8 and next_column >= 1 and next_column <= 8:
      result += 1

  return result


# 내가 푼 solution
def solution(position):
  # 나이트가 이동할 수 있는 경우의 수 총 8가지
  # 동북, 동남, 북동, 북서, 서북, 서남, 남동, 남서
  dx = [-1, 1, -2, -2, -1, 1, 2, 2]
  dy = [2, 2, 1, -1, -2, -2, 1, -1]
  y_dict = {
    'a':1, 'b':2, 'c':3, 'd':4, 'e':5, 'f':6, 'g':7, 'h':8
  }
  # 현재 x, y 좌표를 숫자로 모두 변환 
  x = int(position[1])
  y = y_dict[position[0]]

  # 총 8번의 경우의 수를 모두 돌며 범위 0<x,y<9 안에 위치 할 수 있다면 count +=1
  # 그렇지 않다면 pass
  count = 0
  for i in range(8):
    nx = x + dx[i]
    ny = y + dy[i]
    # 범위 안에 존재한다면
    if 0 < nx < 9 and 0 < ny < 9:
      count += 1
    else:
      pass

  return count

def init():
  position = str(stdin.readline().rstrip())
  # print(solution(position))
  print(solution2(position))

init()