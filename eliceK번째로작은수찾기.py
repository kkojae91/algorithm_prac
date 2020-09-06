# n개의 숫자가 차례대로 주어질 때,
# 매 순간마다.
# 입력되는 숫자중 k 번째로 작은 수를 반환 하는 프로그램을 작성하시오.
# 첫째 줄에 n과 k가 입력되고, 둘째줄에 n개의 숫자가 차례대로 주어집니다.
# 10 5
# 1 9 8 5 2 3 5 6 2 10

def find_num(num_list, k):
    result = []
    data = []

    for num in num_list:
        data.append(num)
        data.sort()

        if len(data) < k:
            result.append(-1)
        else:
            result.append(data[k-1])
            
    return result

# 입력받기
n, k = map(int, input().split())
num_list = list(map(int, input().split()))
# 문자열로 출력할 땐 print(*변수명)
print(*find_num(num_list, k))
