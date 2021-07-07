"""
괄호

6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(

NO
NO
YES
NO
YES
NO
"""
from sys import stdin

def solution(vps):
  f_cnt = 0
  b_cnt = 0
  idx = 0
  if vps[0] == ")":
    return "NO"
  elif vps[-1] == "(":
    return "NO"
  else:
    while True:
      if len(vps) == idx:
        break
      if f_cnt < b_cnt:
        return "NO"
      if vps[idx] == "(":
        f_cnt += 1
      elif vps[idx] == ")":
        b_cnt += 1
      idx += 1
    if f_cnt == b_cnt:
      return "YES"
    else:
      return "NO"

def init():
  t = int(stdin.readline().rstrip())
  for i in range(t):
    vps = stdin.readline().rstrip()
    print(solution(vps))

init()