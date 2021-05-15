# 문제설명
# 자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.
# 조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
# 조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
# 조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
# 예를 들어 78(1001110)의 다음 큰 숫자는 83(1010011)입니다.
# 자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solutioin함수를 완성해주세요.

# 제한 사항
# n은 1,000,000 이하의 자연수 입니다.

# 입출력 예
# n = 78, result = 83
# n = 15, result = 23

# bin() 함수 사용 풀이
def solution(n):
  answer = 0
  count_n = bin(n).count('1')
  count = 0
  while True:
    if count_n == count:
      break
    n += 1
    count = bin(n).count('1')
  answer = n
  return answer


# bin()함수 미사용 풀이
# def check_count(n):
#   count = 0
#   while True:
#     if n == 1:
#       count += 1
#       break
#     else:
#       if n % 2 == 1:
#         count += 1
#       n = n // 2
#   return count

# def solution(n):
#   answer = 0
#   count_n = check_count(n)
#   count = 0
#   while True:
#     if check_n == count:
#       break
#     n += 1
#     count = check_count(n)
#   answer = n
#   return answer

def init():
  n = int(input())
  print(solution(n))

init()