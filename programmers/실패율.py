import operator
# 각 스테이지(N)에 위치한 사용자 count한 딕셔너리/리스트 생성
# 현재 스테이지보다 높은 스테이지가 있으면 모두 +=1
def solution(N, stages):
  answer = []
  challenge_stage_count = {}
  for stage in range(1,N+1):
    counter = 0
    for user_stage in stages:
      if stage <= user_stage:
        counter += 1
    challenge_stage_count[stage] = counter
    counter = 0

  # print(challenge_stage_count)
  
# 현재 스테이지에 있는 사람 카운트
  stay_stage_count = {}
  for i in range(1, N+1):
    stay_stage_count[i] = stages.count(i)
      
  # print(stay_stage_count)
  
  fail_list = []
  fail_dict = {}
# 실패율 리스트 생성
  for i in range(1,N+1):
    try:
      fail_list.append(stay_stage_count[i]/challenge_stage_count[i])
      fail_dict[i] = stay_stage_count[i]/challenge_stage_count[i]
    except:
      fail_list.append(0)
      fail_dict[i] = 0
        
  fail_list.sort(reverse=True)
  # print(fail_list)
  # print(fail_dict)

# 마지막 정렬 (생각보다 내가 푸는 방식에선 이렇게 정렬해야하는 경우가 종종 생기는 듯..)
# import operator sorted([],operator.itemgetter()) 기억하자.
  sort_list = sorted(fail_dict.items(), reverse=True, key=operator.itemgetter(1))
  for list in sort_list:
    answer.append(list[0])
  # print(answer)
  return answer

def init():
  N = int(input())
  stages = list(map(int, input().split()))
  print(solution(N, stages))

init()

