"""
chapter03 그리디 04번 문제 1이 될 때까지
어떠한 수 N이 1이 될때까지 다음의 두 과정 중 하나를 반복적으로 선택하여 수행하려고 한다.
단, 두 번째 연산은 N이 K로 나누어떨어질 때만 선택할 수 있다.
1. N에서 1을 뺀다.
2. N을 K로 나눈다.

예를 들어 N이 17, K가 4라고 가정하자. 이때 1번의 과정을 한 번 수행하면 N은 16이 된다.
이후에 2번의 과정을 두 번 수행하면 N은 1이 된다. 결과적으로 이 경우 전체 과정을 실행한 횟수는 3이 된다.
이는 N을 1로 만드는 최소 횟수이다.
N과 K가 주어질 때 N이 1이 될 때까지 1번 혹은 2번의 과정을 수행해야 하는 최소 횟수를 구하는 프로그램을 작성하시오.

첫째 줄에 N(2<=N<=100,000)과 K(2<=K<=100,000)가 자연수로 주어진다. N은 항상 K보다 크거나 같다.

첫째 줄에 N이 1이 될때까지 1번 혹은 2번의 과정을 수행해야 하는 횟수의 최솟값을 출력한다.

25 5 
2

17 4
3
"""
from sys import stdin

# 범위가 큰 경우에도 시간초과 없이 해결 할 수 있다. 수학적 계산이 필요!
def solution2(n, k):
  answer = 0
  while True:
    # -1 작업을 한번에 미리 처리 한다.
    target = (n // k)* k
    answer += (n - target)
    n = target
    if n < k:
      break
    n //= k
    answer += 1

  # 마지막으로 남은 수에 대하여 모두 -1 한번에 처리.
  result += (n-1)
  
  return answer
# 내가 풀이한 solution
def solution(n, k):
  answer = 0
  while True:
    if n == 1:
      return answer
    if n % k  == 0:
      n = n // k
      answer += 1
    else:
      n -= 1
      answer += 1

def init():
  N, K = map(int, stdin.readline().split())
  # print(solution(N, K))
  solution(N, K)

init()