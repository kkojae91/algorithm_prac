# 그리디 알고리즘
# 지불할 돈 1000
# 구매가격 입력값 380
# 거슬러줄 돈 620
n = int(input())
a = 1000 - n
money_list=[500,100,50,10,5,1]
count = 0
for money in money_list:
    i = a // money
    a = a % money
    count += i
print(count)
    

# while True: 
#     if a > 500:
#         i = a // 500
#         a = a % 500
#         count += i
#     if a > 100:
#         i = a // 100
#         a = a % 100
#         count += i
#     if a > 50:
#         i = a // 50
#         a = a % 50
#         count += i
#     if a > 10:
#         i = a // 10
#         a = a % 10
#         count += i
#     if a > 5:
#         i = a // 5
#         a = a % 5
#         count += i
#     if a > 1:
#         i = a // 1
#         a = a % 1
#         count += i
#     if a == 0:
#         break
# print(count)