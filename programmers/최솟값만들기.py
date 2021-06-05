# 최대한 단순하게 생각.
# 최솟값과 최댓값을 곱한 후 더해야 가장 작은 값
def solution(A,B):
  answer = 0
  A.sort()
  B.sort(reverse=True)
  for i in range(len(A)):
    answer += A[i]*B[i]
  return answer

def init():
  A, B = map(int, input().split())
  print(solution(A, B))
  
init()