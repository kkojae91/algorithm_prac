# 다섯 자리의 정수 1개를 입력받아 각 자리별로 나누어 출력한다.
# 입력 : 75254
# 출력
# 70000
# 5000
# 200
# 50
# 4

def str_split(num):
  digit_num = len(num)

  for idx, num in enumerate(num):
    print(num+((digit_num-idx-1)*str(0)))

def init():
  num = str(input())

  str_split(num)

init()