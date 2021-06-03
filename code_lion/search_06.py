"""
예제 6. n번째 피보나치 수를 구하시오.
an = an-1 + an-2 (a0=1, a1=1)
단, 재귀함수로 구현해야함
(0 <= n < 24)

재귀함수에서는 종료 조건이 가장 중요!
"""
import sys

n = int(sys.stdin.readline())

def recursion(n):
  if n <= 1:
    return 1
  return recursion(n - 1) + recursion(n - 2)

print(recursion(n))
