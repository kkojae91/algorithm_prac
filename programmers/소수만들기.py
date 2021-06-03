import itertools

def make_prime():
  boolean_list = [False, False] + [True] * 2999
  # print(len(boolean_list))
  # idx = int(1001**0.5)
  prime_list = []
  for i in range(2, 3001):
    if boolean_list[i]:
      prime_list.append(i)
      for j in range(i+i, 3001, i):
        boolean_list[j] = False
  print(prime_list)
  return prime_list
            

def solution(nums):
  answer = 0
  num_combinations = list(itertools.combinations(nums, 3))
  sum_list = list(map(sum, num_combinations))
  
  prime_list = make_prime()
  for num in sum_list:
    if num in prime_list:
      answer += 1
  # print(answer)
  return answer

def init():
  nums = list(map(int, input().split()))
  print(solution(nums))

init()
