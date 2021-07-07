# 정렬 문제에서는 lambda를 잘 응용하면 손 쉽게 풀 수 있는 경우가 많다.
# (일반 숫자와는 다르게) 문자열의 대소 비교는 각 자리수 별로 한다.
def solution(numbers):
  numbers_str = list(map(str, numbers))
  sort_list = sorted(numbers_str, key = lambda x: x*3, reverse=True)
  # print("".join(sort_list))
  answer = "".join(sort_list)
  return str(int(answer))

def init():
  numbers = list(map(int, input().split()))
  print(solution(numbers))

init()