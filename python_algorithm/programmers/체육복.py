# 더 깔끔하게 정리 필요!
def solution(n, lost, reserve):
  check_list = [1] * n
  
#     잃어버린 학생과 여벌이 있는 학생이 뒤죽 박죽 배열이 들어올 경우를 대비해 정렬 한다.
  lost.sort()
  reserve.sort()
  
#     도난 당한 체육복을 check_list에서 1을 0으로 변경
  for i in lost:
    check_list[i-1] = 0
  
#     여벌 체육복을 가지고 있고, 체육복을 도난 당했을 경우
  result_reserve = []
  for i in reserve:
    if check_list[i-1] == 0:
      check_list[i-1] = -1
    else:
      result_reserve.append(i)

  # 여벌 체육복을 가지고 있고, 도난 당하지 않은 학생이라면.
  print(check_list)
  for i in result_reserve:
    # 첫 번째 학생일 경우는 뒤만 확인하면 됨.
    if i == 1 and check_list[i] == 0:
      check_list[i] = 1
#         마지막 학생일 경우는 앞만 확인하면 됨.
    elif i == n:
      check_list[i-2] = 1
    # 첫 번째, 마지막 학생이 아닐 경우는 앞 뒤 모두 확인.
    else:
      if check_list[i-2] == 0:
        check_list[i-2] = 1
      elif check_list[i] == 0:
        check_list[i] = 1

          
  answer = len(check_list) - check_list.count(0)
  print(check_list)
  return answer

# 모든 것을 한번에 해결하기 보단 부분 부분 문제들을 나눠서 해석하는게 좋음!
def solution(n, lost, reserve):
    # 여벌이 있는데 잃어 버리지 않은 사람들 리스트
    _reserve = [r for r in reserve if r not in lost]
    # 잃어버렸는데 여벌이 없는 사람들 리스트
    _lost = [l for l in lost if l not in reserve]

    for r in _reserve:
      # 최종적으로 여벌이 있는 사람들의 앞, 뒤를 확인하여 잃어버린 사람이 있다면
      # 최종적으로 여벌이 없는 사람에서 제외 시켜준다.
        f = r - 1
        b = r + 1
        if f in _lost:
            _lost.remove(f)
        elif b in _lost:
            _lost.remove(b)
    return n - len(_lost)


def init():
  n = int(input())
  lost = list(map(int, input().split()))
  reserve = list(map(int, input().split))
  solution(n, lost, reserve)

init()