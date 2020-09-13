# n개의 숫자가 주어질 때, 연속 부분을 선택하여 그 합을 최대화 하는 프로그램을 작성하시오.

# 1 2 -4 5 3 -2 9 -10
# 15

# import sys
import math

# n^3 방법
def getSubsum(num_list) :
    result = -math.inf
    temp = 0
    
    for start in range(0, len(num_list)):
        for end in range(start, len(num_list)):
            temp = 0
            for i in range(start, end+1):
                temp += num_list[i]
            result = max(result, temp)
            
    return result

# o(n) 방법
def get_max_value(now_idx, num_list, max_value_list):
    # 이전의 값과 비교를 하기 위해 +1 을 해준다. 첫 시작을 위함.

    for num in num_list:
        now_idx += 1
        max_value_list[now_idx] = num

        if max_value_list[now_idx] < max_value_list[now_idx-1] + num:
            max_value_list[now_idx] = max_value_list[now_idx-1] + num
        
    return max(max_value_list[1:])


def main():
    num_list = [int(x) for x in input().split()]
    print(getSubsum(num_list))

    # o(n)의 방법! 
    max_value_list = [0] * (len(num_list) + 1)
    now_idx = 0
    print(get_max_value(now_idx, num_list, max_value_list))

if __name__ == "__main__":
    main()
