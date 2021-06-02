# S: **1 D: **2 T: **3
# *스타상, #아차상은 한 점수에 하나만 존재 or 존재하지 않을 수 있다
# 옵션1: *(스타상): (해당 점수*2), (해당 점수 바로 전 점수*2)
#       첫 번째일 경우: *(스타상)일 경우 (해당 점수*2)
#       *(스타상)과 중첩 될 경우 : (해당 점수 바로 전 점수*2),(해당 점수*2)
#       #(아차상)과 중첩 될 경우 : (-해당 점수 바로 전 점수*2),(해당 점수*2)
# 옵션2: #(아차상): (-해당 점수)

# 예외 : 점수가 10일 경우

def solution(dartResult):
  answer = 0
  score_list = list(dartResult)
  result_score = [int(score_list[0])]
  idx = -1
  for idx in range(1, len(score_list)):
    if score_list[idx].isdigit():
      if score_list[idx-1].isdigit():
        result_score.pop()
        result_score.append(10)
      else:
        result_score.append(int(score_list[idx]))
  # print(result_score)
  idx = -1
  for score in score_list:
    if score.isalpha():
      idx += 1
      if score == 'S':
        result_score[idx] **= 1
      elif score == 'D':
        result_score[idx] **= 2
      elif score == 'T':
        result_score[idx] **= 3
    elif score == "*":
      if idx == 0:
        result_score[idx] *= 2
      elif idx > 0:
        result_score[idx-1] *= 2
        result_score[idx] *= 2
    elif score == "#":
      result_score[idx] = -result_score[idx]
  print(result_score)
  answer = sum(result_score)
  return answer

def init():
  dartResult = str(input())
  print(solution(dartResult))

init()