# 누적 합 최대값 구하기.
# 연속 된 라인 제외... 슬라이싱을 활용
def solution(land):
  answer = 0
  for i in range(1, len(land)):
    for j in range(4):
      land[i][j] += max(land[i-1][j+1:] + land[i-1][:j])
  
  answer = max(land[-1])
  return answer

def init():
  n = int(input())
  land = []
  for i in range(n):
    line = list(map(int, input().split()))
    land.append(line)
  
  print(solution(land))

init()