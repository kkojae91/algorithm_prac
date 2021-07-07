# 0이 모두 맞았을 경우 -> 0의 갯수 만큼 일치하는 번호 count, 
# 0이 모두 틀렸을 경우 -> 0의 갯수 무시 현재 count 된 것 기준

# lottos를 반복문으로 돌며 win_nums에 있는지 체크 후 count += 1
def solution(lottos, win_nums):
  win_dict = {
    6:1, 5:2, 4:3, 3:4, 2:5, 1:6, 0:6
  }
  
  zero_count = lottos.count(0)
  win_count = 0
  
  for num in lottos:
    if num in win_nums:
      win_count += 1
        
  high_score = win_dict[win_count+zero_count]
  low_score = win_dict[win_count]
      
  answer = [high_score, low_score]
  
  return answer

def init():
  lottos = list(map(int, input().split()))
  win_nums = list(map(int, input().split()))

  print(solution(lottos, win_nums))

init()