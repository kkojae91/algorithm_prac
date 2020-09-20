# n개의 숫자가 주어질 때, 연속 부분을 선택하여 그 합을 최대화 하는 프로그램을 작성하시오.
# 1 2 -4 5 3 -2 9 10
# 이 때, 연속 부분이란 연속하여 숫자를 선택하는 것을 말한다.
# 가능한 연속 부분으로써 [1,2,-4], [5,3,-2,9],[9,-10]등이 있을 수 있다.
# 이 연속 부분들 중에서 가장 합이 큰 연속 부분은 [5,3,-2,9]이며,
# 이보다 더 합을 크게 할 수는 없다. 따라서 연속 부분 최대합은 15 이다.
# 입력되는 수의 개수는 최대 100,000개 입니다.
# 1 2 -4 5 3 -2 9 -10
# 15
import math

def get_max_sum(num_list, left, right, mid_idx):
    total_left_sum = 0
    total_right_sum = 0
    mid_left_sum = -math.inf
    mid_right_sum = -math.inf

    for i in range(mid_idx-1, -1, -1):
        total_left_sum += num_list[i]
        mid_left_sum = max(total_left_sum, mid_left_sum)

    for i in range(mid_idx, len(num_list)):
        total_right_sum += num_list[i]
        mid_right_sum = max(total_right_sum, mid_right_sum)
    # print(max([left,right, ( mid_left_sum + mid_right_sum )]))
    return max([left, right, (mid_left_sum + mid_right_sum)])

def divided(num_list):
    mid_idx = len(num_list) // 2
    if len(num_list) <= 1:
        return num_list[0]
    
    left = divided(num_list[:mid_idx])
    right = divided(num_list[mid_idx:])

    return get_max_sum(num_list, left, right, mid_idx)

num_list = list(map(int, input().split()))

print(divided(num_list))