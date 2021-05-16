# 문제 설명
# 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다.
# str에 나타나는 숫자 중 최솟값과 최댓값을 찾아 이를 "최솟값 최댓값"형태의 문자열을 반환하는 함수, solution을 완성하세요.
# 예를 들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

# 제한조건
# s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.

# 입출력 예
# s          return
# "1 2 3 4"   "1 4"
# "-1 -2 -3 -4"  "-4 -1"
# "-1 -1"    "-1 -1"


def solution(s):
  answer = ''
  num_list = list(map(int, s.split()))
  max_num = max(num_list)
  min_num = min(num_list)
  answer = f'{min_num} {max_num}'
  return answer

def init():
  s = str(input())
  print(solution(s))

init()