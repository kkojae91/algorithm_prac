# 값이 지속적으로 갱신될 경우에는 dict를 사용해 값을 지속적으로 업데이트 해준 후
# 문제풀이를 해주는게 좋다!

def solution(record):
  answer = []
  user_dict = {}
#     user의 닉네임이 변경되거나, user가 입장할 경우 user의 user닉네임을 user_dict에 갱신해준다.
  for message in record:
    message_list = message.split()
    if message_list[0] == "Enter" or message_list[0] == "Change":
      user_dict[message_list[1]] = message_list[2]

#     최종적으로 갱신된 닉네임을 answer에 기록을 남긴다.
  for message in record:
    message_list = message.split()
    if message_list[0] == "Enter":
      answer.append(f'{user_dict[message_list[1]]}님이 들어왔습니다.')
    elif message_list[0] == "Leave":
      answer.append(f'{user_dict[message_list[1]]}님이 나갔습니다.')
    else:
      pass
  return answer

def init():
  record = str(input())
  print(solution(record))

init()