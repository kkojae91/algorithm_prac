# 문제 설명
# 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
# 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
# 예를들어 arr가 [4,3,2,1]인 경우 [4,3,2]를 리턴하고, [10]이면 [-1]을 리턴 합니다.

# 제한조건
# arr는 길이 1이상인 배열입니다.
# 인덱스 i, j에 대해 i != ㅓ 이면 arr[i] != arr[j] 입니다.

# 입출력예
# arr = [4,3,2,1]
# return = [4,3,2]
# arr = [10]
# return = [-1]

def solution(arr):
  answer = []
  if len(arr) <= 1:
    answer.append(-1)
  else:
    arr.remove(min(arr))
    answer = arr
  return answer

def init():
  arr = list(map(int, input().split()))
  print(solution(arr))

init()