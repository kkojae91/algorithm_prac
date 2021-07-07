# 예시>
# b진법수 와 n이 주어진다.
# ZZZZZZ, 36
# 10이상일땐 10은 A 11은 B 쭉쭉쭉 주워진다.
b, n = input().split()
alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
dic = {}
for i in range(int(n)):
    if i < 10:
        dic[str(i)] = i
    else:
        dic[alphabet[i-10]] = i
print(dic)
# print(b,type(b))
result_list2 = []
for i in b:
    result_list2.append(dic[i])
# print(result_list2)

result = 0
for i in range(len(b)):
    result += (int(n)**(len(b)-i-1))*result_list2[i]
    print(result)
print(result)

