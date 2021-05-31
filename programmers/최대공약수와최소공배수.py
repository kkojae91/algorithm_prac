def solution(n, m):
  answer = []
  idx = 2
  greatest = 1
  least = 1
  cnt = 0
  while True:
    if n // idx == 0 or m // idx == 0:
      least *= greatest
      break
    elif n % idx == 0 and m % idx == 0:
      greatest *= idx
      n //= idx
      m //= idx
      least = n*m
      cnt += 1
    else:
      idx += 1
  if cnt == 0:
    least = n*m
  answer = [greatest, least]
  return answer

def init():
  n, m = map(int, input().split())
  print(solution(n, m))
  
init()