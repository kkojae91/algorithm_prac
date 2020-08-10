import sys
input = sys.stdin.readline

def minimum_divide(divide_list):
    mid_idx = len(divide_list) // 2
    if len(divide_list) <= 1:
        return divide_list

    left_list, right_list = minimum_divide(divide_list[: mid_idx]), minimum_divide(divide_list[mid_idx :]) 
    return merge_sort(left_list, right_list)

def merge_sort(left_list,right_list):
    merge_sort_list =[]
    left_idx = 0
    right_idx = 0
    while True:
        if left_idx == len(left_list):
            merge_sort_list = merge_sort_list + right_list[right_idx:]
            break

        elif right_idx == len(right_list):
            merge_sort_list = merge_sort_list + left_list[left_idx:]
            break

        if left_list[left_idx] > right_list[right_idx]:
            merge_sort_list.append(right_list[right_idx])
            right_idx += 1
        elif left_list[left_idx] < right_list[right_idx]:
            merge_sort_list.append(left_list[left_idx])
            left_idx += 1

    return merge_sort_list

n = int(input())
divide_list = []
for _ in range(n):
    divide_list.append(int(input()))

for result in minimum_divide(divide_list):
    print(result)
