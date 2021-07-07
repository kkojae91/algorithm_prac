"""
chapter07 이진 탐색 문제 03번 떡볶이 떡 만들기
절단기에 높이(H)를 지정하면 줄지어진 떡을 한 번에 절단한다. 높이가 H보다 긴 떡은 H 위의 부분이 잘릴 것, 낮은 떡은 잘리지 않음.
예를 들어 19, 14, 10, 17cm 인 떡이 나란히 있고 절단기 높이를 15cm으로 지정하면 자른 뒤 떡의 높이는 15, 14, 10, 15가 될것이다.
잘린 떡의 길이는 4, 0, 0, 2cm이다. 손님은 6cm만큼의 길이를 가져간다.
손님이 왔을 때 요청한 길이가 M일 때 적어도 M만큼의 떡을 얻기 위해 절단기에 설정할 수 있는
높이의 최댓값을 구하는 프로그램을 작성하시오.
첫째 줄에 떡의 개수 N과 요청한 떡의 길이 M이 주어진다.
둘째 줄에는 떡의 개별 높이가 주어진다. 떡 높이의 총 합은 항상 M이상이므로, 손님은 필요한 양만큼 떡을 사갈 수 있다.
4 6
19 15 10 17
적어도 M만큼의 떡을 집에 가져가기 위해 절단기에 설정할 수 있는 높이의 최댓값을 출력한다.
15
"""

from sys import stdin

def solution(n, m, n_list):
  left = 0
  right = max(n_list)
  
  result = 0
  # left가 right보다 작거나 같을 때 반복문을 수행
  while (left <= right):
    total = 0
    # 중간 값 갱신
    mid = (left + right) // 2
    
    # 떡의 합을 계산
    for tteok in n_list:
      # tteok의 길이가 mid값보다 길 경우만 total 변수에 tteok - mid 값을 더해준다.
      if tteok > mid:
        total += tteok - mid

    # 만약 떡의 양이 부족할 경우, 더 자르기 (왼쪽 탐색)
    if total < m:
      right = mid - 1
    # 만약 떡의 양이 충분할 경우, 덜 자르기 (오른쪽 탐색)
    else:
      # 최대한 많이 자르는 것 이므로 여기에서 mid길이를 result로 할당
      result = mid
      left = mid + 1
    
  return result

def init():
  n, m = map(int, stdin.readline().split())
  n_list = list(map(int, stdin.readline().split()))
  print(solution(n, m, n_list))

init()