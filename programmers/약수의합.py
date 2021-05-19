# 문제 설명
# 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

# 제한사항
# n은 0이상 3000이하인 정수입니다.

# 입출력 예
# n     return
# 12      28
# 5       6

def solution(n):
  answer = 0
  aliqout_list = []
  if n > 1:
    for num in range(1, n):
      if n % num == 0:
        aliqout_list.append(n // num)
        aliqout_list.append(num)
        answer = sum(set(aliqout_list))
  elif n == 1:
    answer = 1
  else:
    answer = 0
  return answer 

def init():
  n = int(input())
  print(solution(n))

init()