# 이렇게 문제는 풀리지만 효율이 너무 안좋다.. 너무 나눠서 생각한듯 하다.
# 다른분 풀이를 보면 항상 간결하다.
def solution(participant, completion):
  answer = ''
  participant.sort()
  completion.sort()
  participant_people = {}
  completion_people = {}
  idx = 0
  for i in participant:
    participant_people[i] = 0
  
  for i in completion:
    completion_people[i] = 0
  
  for i in participant:
    participant_people[i] += 1
      
  for i in completion:
    completion_people[i] += 1

  for key, value in participant_people.items():
    if key not in completion_people:
      answer = key
    elif participant_people[key] != completion_people[key]:
      answer = key
      
  return answer

# 간결한 풀이
# 충분한 생각, 예외처리를 간단하게 할 수 있는 방법을 생각해보자.
def solution(participant, completion):
  participant.sort()
  completion.sort()
  for idx in range(len(completion)):
    if participant[idx] != completion[idx]:
      return participant[idx]
  return paricipant[-1]

def init():
  participant = list(map(str, input().split()))
  completion = list(map(str, input().split()))

  print(solution(participant, completion))

init()