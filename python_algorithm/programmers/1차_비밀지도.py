# 파이썬 내장함수 기능을 잘 check해줘야한다. 지금은 문제 풀이에 집중
# 1. arr에 들어있는 십진수를 이진수로 변환 한다.
def make_binary(decimal, length):
  binary_list = []
  while True:
    if decimal == 1 or decimal//2 == 0:
      binary_list.append(str(decimal))
      break
    binary_list.append(str(decimal%2))
    decimal = decimal//2
      
  if len(binary_list) != length:
    while True:
      if len(binary_list) == length:
        break
      binary_list.append("0")
          
  binary_list.reverse()
  
  return "".join(binary_list)

# 벽부분(#)을 1, 공백부분("")을 0 
# 설명1. 두 지도에서 하나라도 벽이면 전체 지도의 벽
# 설명2. 두 지도 모두에서 공백일 경우 공백
def make_result(str1, str2):
  result = []
  for idx in range(len(str1)):
    if str1[idx] == "0" and str2[idx] == "0":
      result.append(" ")
    else:
      result.append("#")
        
  return "".join(result)
  

def solution(n, arr1, arr2):
  answer = []
# 2. 각각의 배열을 비교해 설명1 과 설명2를 다시 배열에 담아준다.
  _arr1 = []
  _arr2 = []
  for idx in range(len(arr1)):
    binary1 = make_binary(arr1[idx], len(arr1))
    binary2 = make_binary(arr2[idx], len(arr2))
    _arr1.append(binary1)
    _arr2.append(binary2)
  
  for idx in range(len(_arr1)):
    answer.append(make_result(_arr1[idx], _arr2[idx]))
      
  return answer

def init():
  n = int(input())
  arr1 = list(map(int, input().split()))
  arr2 = list(map(int, input().split()))
  
  print(solution(n, arr1, arr2))
  
init()