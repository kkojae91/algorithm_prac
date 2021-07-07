from sys import stdin

def solution(s):
  result = []
  s_list = s.split(" ")
  for line in s_list:
    string = ""
    for idx in range(len(line)):
#             첫 문자가 숫자일 경우
      if idx == 0:
        if line[idx].isdigit():
          string += line[idx]
        else:
          string += line[idx].upper()
      else:
        if line[idx].isdigit():
          string += line[idx]
        else:
          string += line[idx].lower()
    result.append(string)
  answer = " ".join(result)
  return answer

def init():
  s = str(stdin.readline().rstrip())
  print(solution())

init()