from sys import stdin

def solution(arr):
  answer = [arr[0]]
  idx = arr[0]
  for num in arr[1:]:
    if idx == num:
      pass
    else:
      idx = num
      answer.append(num)
    
  return answer

def init():
  arr = list(map(int, stdin.readline().split()))
  print(solution(arr))
  
init()