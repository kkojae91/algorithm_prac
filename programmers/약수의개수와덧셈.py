# 문제설명
# 두 정수 left와 right가 매개변수로 주어집니다.
# left 부터 right 까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고,
# 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

# 제한사항
# 1<= left <= right <= 1000

# 입출력 예
# left right result
# 13    17     43
# 24    27     52

# 약수의 개수를 구하는 함수
def aliqout_count(number):
  aliqout_list = [1, number]

  for num in range(2, number):
    if number % num == 0:
      aliqout_list.append(num)
      aliqout_list.append(number // num)
  
  return len(set(aliqout_list))

def solution(left, right):
  answer = 0
  # 약수의 개수가 짝수인지 홀수인지 판별하는 함수로 left에서 right까지 보낸다.
  for number in range(left, right+1):
    # 약수의 개수가 짝수면 number를 더하고 그렇지 않으면 빼라
    if aliqout_count(number) % 2 == 0:
      answer += number
    else:
      answer -= number
    
  return answer

def init():
  left, right = map(int, input().split())
  print(solution(left, right))

init()