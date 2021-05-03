# 년 월 일을 출력하는 방법은 나라마다, 형식마다 조금씩 다르다.
# 년 월 일(yyyy.mm.dd)를 입력받아,
# 년 월 일(dd-mm-yyy)로 출력해보자.
# (단, 한 자리 일/월은 0을 붙여 두자리로 출력한다.)

def len_condition(month, day):
  change_month = ""
  change_day = ""
  if len(month) == 1:
    change_month = "0" + str(month)
  else :
    change_month = month
  if len(day) == 1:
    change_day = "0" + str(day)
  else:
    change_day = day

  return change_month, change_day

def init():
  year, month, day = input().split('.')
  change_month, change_day = len_condition(month, day)

  print(f"{change_day}-{change_month}-{year}")
  
init()