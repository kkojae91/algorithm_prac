dic = {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, 
'10':'A', '11':'B', '12':'C', '13':'D', '14':'E', '15':'F', '16':'G', '17':'H', '18':'I', '19':'J', 
'20':'K', '21':'L', '22':'M', '23':'N', '24':'O', '25':'P', '26':'Q', '27':'R', '28':'S', '29':'T', 
'30':'U', '31':'V', '32':'W', '33':'X', '34':'Y', '35':'Z'}
# 10진법수 N을 M 진법으로 변환하시오.
# 60466175 36 => ZZZZZ
# 26 2 => 11010
# 447 16 => 1BF

# while문 진법변환
# n과 m을 입력받는다.
# n,m = map(int, input().split())

# a_list=[]
# while True:
#     a, n = n%m , n//m
#     a_list.append(dic[str(a)])

#     if n == 0:
#         break

# print(''.join(map(str,a_list[::-1])))

# 재귀함수 진법변환
n,m = map(int, input().split())
a_list=[]
def calc(a_list,n,m):
    if n == 0:
        return ''.join(map(str, a_list[::-1]))

    a,n = n%m, n//m
    a_list.append(dic[str(a)])

    return calc(a_list,n,m)

print(calc(a_list,n,m))