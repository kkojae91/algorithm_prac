"""
chapter07 이진 탐색 문제 02번 부품 찾기
동빈이가 가지고 있는 물품의 개수와 리스트
n = 5
n_list = [8, 3, 7, 9, 2]

고객이 원하는 물품의 개수와 리스트
m = 3
m_list = [5, 7, 9]
이때 손님이 요청한 부품 번호의 순서대로 부품을 확인해 부품이 있으면 yes 없으면 no를 출력한다 구분은 공백으로
첫째 줄에 정수 1 <= n <= 1,000,000
둘째 줄에 n개의 정수 정수는 1 <= 정수 <= 1,000,000
셋째 줄에 정수 1 <= m <= 100,000
넷째 줄에 m개의 정수 정수는 1 <= 정수 <= 1,000,000
5
8 3 7 9 2
3
5 7 9
첫째 줄에 공백으로 구분하여 각 부품이 존재하면 yes, 없으면 no를 출력
no yes yes
"""
from sys import stdin

def binary_search(left, right, n_list, find_num):
  # 종료 조건 설정
  if left > right:
    return 'no'
  # 중간 값 설정
  mid = (left + right) // 2
  # mid가 찾는 값과 같다면 answer 에 yes 할당.
  if n_list[mid] == find_num:
    return 'yes'
  # mid값이 찾는 값보다 크다면
  elif n_list[mid] > find_num:
    return binary_search(left, mid-1, n_list, find_num)
  # mid 값이 찾는 값보다 작다면
  else:
    return binary_search(mid+1, right, n_list, find_num)
  
def solution(n, n_list, m, m_list):
  # m_list를 하나씩 순차적으로 돌며 이진 탐색으로 값이 있는지 확인한다.
  answer = []
  for find_num in m_list:
    answer.append(binary_search(0, n-1, n_list, find_num))

  return " ".join(answer)
  

def init():
  n = int(stdin.readline().rstrip())
  n_list = list(map(int, stdin.readline().split()))
  m = int(stdin.readline().rstrip())
  m_list = list(map(int, stdin.readline().split()))
  print(solution(n, n_list, m, m_list))
  
init()