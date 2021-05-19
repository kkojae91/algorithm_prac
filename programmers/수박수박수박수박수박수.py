# 문제 설명
# 길이가 n이고, "수박수박수박..."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요.
# 예를 들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

# 제한조건
# n의 길이 10,000이하인 자연수입니다.

def solution(n):
  answer = ""
  # n이 짝수면 수박 * (n // 2)
  if n % 2 == 0:
    answer = '수박' * (n // 2)
  # n이 홀수면 수박 * (n // 2) + 수
  else:
    answer = '수박' * (n // 2) + '수'
  
  return answer

def init():
  n = int(input())

  print(solution(n))

init()