# 직사각형을 만드는 데 필요한 4개의 점 중 3개의 좌표가 주어질 때,
# 나머지 한 점의 좌표를 구하려고 합니다.
# 점 3개의 좌표가 들어있는 배열 v가 매개변수로 주어질 때,
# 직사각형을 만드는 데 필요한 나머지 한 점의 좌표를 return하도록
# solution 함수를 완성해주세요.
# 단, 직사각형의 각 변은 x축, y축에 평행하며, 
# 반드시 직사각형을 만들 수 있는 경우만 입력으로 주어집니다.

# 제한 사항
# 1. v는 세 점의 좌표가 들어있는 2차원 배열입니다.
# 2. v의 각 원소는 점의 좌표를 나타내며, 좌표는 [x축 좌표, y축 좌표] 순으로 주어집니다.
# 3. 좌표 값은 1 이상 10억 이하의 자연수 입니다.
# 4. 직사각형을 만드는 데 필요한 나머지 한 점의 좌표를 [x축 좌표, y축 좌표] 순으로 담아 return 해주세요.

# 입력1
# [[1, 4], [3, 4], [3, 10]]
# 출력1
# [1, 10]

# 입력2
# [[1, 1], [2, 2], [1, 2]]
# 출력2
# [2, 1]

def solution(coordinate):
  coordinate_list = []
  for i in range(2):
    if coordinate[0][i] == coordinate[1][i]:
      coordinate_list.append(coordinate[2][i])
    elif coordinate[1][i] == coordinate[2][i]:
      coordinate_list.append(coordinate[0][i])
    elif coordinate[2][i] == coordinate[0][i]:
      coordinate_list.append(coordinate[1][i])
  return coordinate_list


def init():
  coordinate = []
  for i in range(3):
    coordinate.append(list(map(int, input().split())))

  print(solution(coordinate))

init()