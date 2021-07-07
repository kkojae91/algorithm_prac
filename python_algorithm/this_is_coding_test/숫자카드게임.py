"""
chapter03 그리디 03번 문제 숫자 카드 게임
rule
1. 숫자가 쓰인 카드들이 n x m 형태로 놓여 있다. 이때 n은 행의 개수 m은 열의 개수
2. 먼저 뽑고자 하는 카드가 포함되어 있는 행을 선택한다.
3. 그다음 선택된 행에 포함된 카드들 중 가장 숫자가 낮은 카드를 뽑아야 한다.
4. 따라서 처음에 카드를 골라낼 행을 선택할 때, 
이후에 해당 행에서 가장 숫자가 낮은 카드를 뽑을 것을 고려하여 
최종적으로 가장 높은 숫자의 카드를 뽑을 수 있도록 전략을 세워야 한다.

첫째 줄에 숫자 카드들이 놓인 행의 수 n, 열의 수 m 입력 (1<=n,m<=100)
둘째 줄부터 n개의 줄에 걸쳐 각 카드에 적힌 숫자가 주어진다. 각 숫자는 1이상 10,000이하의 자연수이다.

첫째 줄에 게임의 룰에 맞게 선택한 카드에 적힌 숫자를 출력한다.

3 3
3 1 2
4 1 4
2 2 2

2

2 4
7 3 1 8
3 3 3 4

3
"""
from sys import stdin
def solution(n, m, nm_list):
  min_list = []
  for line in nm_list:
    min_list.append(min(line))
    
  return max(min_list)

def init():
  n, m = map(int, stdin.readline().split())
  nm_list = []
  for i in range(n):
    nm_list.append(list(map(int, stdin.readline().split())))
    
  print(solution(n, m, nm_list))
  
init()