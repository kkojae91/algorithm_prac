# n개의 숫자가 주어진다. 이제 이 숫자를 두개의 그룹으로 나눌 것이다.
# 예를 들어 5개의 숫자 [1,-3,4,5,-2]가 주어진다면, 이를 두개의 그룹으로 나누는 경우는 여러가지가 있을 수 있다.
# 가능한 경우로써 [1,-3], [4,5,-2]가 있을 수 있고, 또 다른 겨우로는 [1,4,-2],[-3,5]가 있을 수 있다.
# 나눈 두 그룹을 a,b라고 할때, (a의 원소합) - (b의 원소합) 의 절댓값을 최소화 하는 프로그램을 작성하시오.
# 위의 예제에서는 a =[1,4,-2], b=[-3,5] 라고 하였을때, (a의 원소합) - (b의 원소합)의 절대값이 1이며,
# 이보다 더 작을 값을 만드는 a,b는 존재하지 않는다.
# 이 경우 절댓값의 최솟값인 1을 출력하면 된다.
# 1 -3 4 5 -2
# 1

import math

def get_power_set(n, k):
    if n == k:
        return [[k]]

    result = [[k]]
    temp =[]

    for i in range(k+1, n+1):
        temp = temp + get_power_set(n, i)
    
    for i in range(len(temp)):
        temp[i] = [k] + temp[i]
    
    return result + temp

def power_set(num_list):
    result = []
    for k in range(1,len(num_list)+1):
        result += get_power_set(len(num_list),k)

    return result

def balance(num_list):
    combinations = power_set(num_list)
    # for c in combinations:
    #     print(' '.join(map(str, c)))
    total_sum = sum(num_list)
    result = math.inf

    for c in combinations:
        a_sum = 0
        b_sum = 0
        for i in c:
            a_sum += i
            b_sum = total_sum - a_sum
        result = min(result, abs(a_sum-b_sum))

    return result

def main():
    num_list = list(map(int, input().split()))
    print(balance(num_list))

if __name__ == '__main__':
    main()