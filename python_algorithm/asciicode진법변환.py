# print(ord('A')) --> 65 
# B진법 수 N이 주어진다.
# 이 수를 10진법으로 바꿔 출력하는 프로그램을 작성하시오.
# 1BF 16 : 447
# ZZZZZ 36 : 60466175
# 11010 2 : 26

# print(ord('F')) - 70
# print(ord('B')) - 66
# print(ord('A')) - 65
n, m = input().split()
m = int(m)

result = 0
for i in range(len(n)):
    # 맨 뒷 문자부터 시작 해서 승 과 i를 맞춰서 계산하기 쉽게 만든다.
    reverse_n = n[len(n)-1-i]
    # reverse_n 이 만약 숫자이면.(0부터 9사이이면,)
    # if ord('0') <= ord(reverse_n) <= ord('9'):
    if reverse_n.isnumeric():
        result += int(reverse_n)*(m**i)
    # reverse_n 이 문자라면.
    else:
        result += (ord(reverse_n)-ord('A')+10)*(m**i)
        
print(result)
