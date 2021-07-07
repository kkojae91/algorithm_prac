# 147 왼손, 369 오른손 2580 현재 위치에서 가장 가까운 손
def solution(numbers, hand):
  print(numbers)
#     왼손 오른손 위치 현재
  l_list = [3, 0]
  r_list = [3, 2]
  
  position_dict = {
      1:[0, 0], 2:[0, 1], 3:[0, 2],
      4:[1, 0], 5:[1, 1], 6:[1, 2],
      7:[2, 0], 8:[2, 1], 9:[2, 2], 0:[3, 1]
  }
#     찾아갈 위치 찾기
  find_list = []
  for number in numbers:
    find_list.append(position_dict[number])
      
  print(find_list)
  
  answer = []
#     이제 왼손인지 오른손인지 찾기.
  for num in numbers:
    if num==1 or num==4 or num==7:
      l_list = position_dict[num]
      answer.append("L")
    elif num==3 or num==6 or num==9:
      r_list = position_dict[num]
      answer.append("R")
    else:
      l_result = abs(l_list[0]-position_dict[num][0])+abs(l_list[1]-position_dict[num][1])
      r_result = abs(r_list[0]-position_dict[num][0])+abs(r_list[1]-position_dict[num][1])
      
      if l_result > r_result:
        answer.append("R")
        r_list = position_dict[num]
      elif l_result < r_result:
        answer.append("L")
        l_list = position_dict[num]
      else:
        if hand == "right":
          answer.append("R")
          r_list = position_dict[num]
        else:
          answer.append("L")
          l_list = position_dict[num]
  answer = "".join(answer)
  return answer

def init():
  numbers = list(map(int, input().split()))
  hand = str(input())

  print(solution(numbers, hand))

init()