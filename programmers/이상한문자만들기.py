# 문제설명
# 문자열 s는 한개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
# 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바군 문자열을 리턴하는 함수, solution을 작성하시오.
# 제한사항
# 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
# 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

# 입출력 예
# s = "try hello world"
# return = "TrY HeLlo WoRlD"

# 입출력 예 설명
# "try hello world"는 세 단어 "try", "hello", "world"로 구성되어 있습니다.
# 각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면,
# "TrY", "HeLlo", "WoRlD"입니다. 따라서 "TrY HeLlO WoRlD"를 리턴합니다.

def solution(s):
  answer = ''
  result_list = []
  list_s = s.split(' ')

  for string in list_s:
    word_list = []

    for i in range(len(string)):
      if i == 0:
        word_list.append(string[i].upper())
      elif i % 2 == 0:
        word_list.append(string[i].upper())
      elif string[i] == " ":
        word_list.append(string[i])
      else:
        word_list.append(string[i].lower())

    word = "".join(word_list)
    result_list.append(word)

  answer = " ".join(result_list)
  return answer

def init():
  s = input()
  print(solution(s))

init()