# 오름차순으로 정렬된 n개의 숫자가 주어지고, 정수 m이 주어질때, 
# n개의 숫자중에서 m과 가장 가까운 숫자를 출력하는 프로그램을 작성하시오.
# 만약 가까운 숫자가 2개 이상이라면, 그 중 가장 작은 숫자를 출력한다.
# 1 4 6 7 10 14 16
# 8
# 7
import math

def find_nearest_value(num_list, nearest_list, target_num, start_idx, end_idx):
    mid_idx = (end_idx + start_idx) // 2
    # 기저조건
    if start_idx > end_idx:
        nearest_num = math.inf
        for num in nearest_list:
            if abs(num - target_num) < abs(nearest_num - target_num):
                nearest_num = num
        return nearest_num

    if num_list[mid_idx] > target_num:
        nearest_list.append(num_list[mid_idx])
        return find_nearest_value(num_list, nearest_list, target_num, start_idx, mid_idx-1)

    elif num_list[mid_idx] < target_num:
        nearest_list.append(num_list[mid_idx])
        return find_nearest_value(num_list, nearest_list, target_num, mid_idx+1, end_idx)
    
    else:
        return num_list[mid_idx]

num_list = list(map(int, input().split()))
target_num = int(input())
start_idx = 0
end_idx = len(num_list)-1
nearest_list = []
print(find_nearest_value(num_list, nearest_list, target_num, start_idx, end_idx))
