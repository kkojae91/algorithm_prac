"""
chapter12 구현 문제 08번 문자열 재정렬
알파벡 대문자와 숫자 (0~9)로만 구성된 문자열이 입력으로 주어집니다.
이때 모든 알파벳을 오름차순으로 정렬하여 이어서 출력한 뒤에, 그 뒤에 모든 숫자를 더한 값을 이어서 출력합니다.
예를 드러 k1ka5cb7 -> abckk13

첫째 줄에 하나의 문자열 S가 주어집니다. (1 <= S의 길이 <= 10,000)

첫째 줄에 문제에서 요구하는 정답을 출력합니다.
K1KA5CB7
ABCKK13

AJKDLSI412K4JSJ9D
ADDIJJJKKLSS20
"""
from sys import stdin

# 내가 푼 풀이
def solution(s):
  alpha = []
  digit = []
  for i in s:
    if i.isdigit():
      digit.append(int(i))
    else:
      alpha.append(i)
  num = str(sum(digit))
  alpha.sort()

  return "".join(alpha)+num

def init():
  S = str(stdin.readline().rstrip())
  print(solution(S))

init()