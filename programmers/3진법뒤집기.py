
def solution(n):
  answer = 0
  three = []
  while True:
    if n == 1 or n//3 == 0:
      three.append(n)
      break
    three.append(n%3)
    n = n//3
  three.reverse()
  
  for idx, value in enumerate(three):
    answer += (3**idx)*value
      
  return answer

def init():
  n = int(input())

  print(solution(n))

init()