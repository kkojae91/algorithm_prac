from sys import stdin

def solution(new_id):
  answer = ''
#     1단계
  new_id = new_id.lower()
#     2단계
  new_list = list(new_id)
  _new = []
  for i in new_list:
    if i=="~" or i=="!" or i=="@" or i=="#" or i=="$" or i=="%" or i=="^" or i=="&" or i=="*" or i=="(" or i==")" or i=="=" or i=="+" or i=="[" or i=="{" or i=="]" or i=="}" or i==":" or i=="?" or i=="," or i=="<" or i==">" or i=="/":
      pass
    else:
      _new.append(i)
#     3단계, 4단계
# 2개 이상일경우는 "." 하나만
  for i in range(len(_new)-1):
    if _new[i] == "." and _new[i+1] == ".":
        _new[i] = " "
  _new = "".join(_new).split()
  _new = list("".join(_new))
#     4단계
  if _new[0] == ".":
    _new = _new[1:]
  if len(_new) >= 1 and _new[-1] == ".": 
    _new = _new[:-1]
#     5단계
  if len(_new) == 0:
    _new = ["a"]
#     6단계
  if len(_new) >= 16:
    _new = _new[:15]
    if _new[-1] == ".":
      _new = _new[:-1]
# 7단계
  if len(_new) <= 2:
    while True:
      if len(_new) == 3:
        break
      _new.append(_new[-1])
  answer = "".join(_new)
  return answer

def init():
  new_id = str(stdin.readline().rstrip())
  print(solution(new_id))
init()