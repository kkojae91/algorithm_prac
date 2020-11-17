# n개의 숫자를 합병정렬을 이용하여 정렬하는 프로그램을 작성하시오.
# 1 5 6 2 3 8 4 9 7 10
# 1 2 3 4 5 6 7 8 9 10

def divided(num_list):
    mid_idx = len(num_list) // 2

    if len(num_list) <= 1:
        return num_list

    left_list = divided(num_list[: mid_idx])
    right_list = divided(num_list[mid_idx :])

    return merge_sort(left_list, right_list)

def merge_sort(left_list, right_list):
    sorted_num_list = []
    left_idx = 0
    right_idx = 0
    
    while True:
        if left_idx == len(left_list):
            sorted_num_list = sorted_num_list + right_list[right_idx:]
            print(sorted_num_list)
            break
        
        elif right_idx == len(right_list):
            sorted_num_list = sorted_num_list + left_list[left_idx:]
            print(sorted_num_list)
            break

        if left_list[left_idx] > right_list[right_idx]:
            sorted_num_list.append(right_list[right_idx])
            right_idx += 1
        
        elif left_list[left_idx] < right_list[right_idx]:
            sorted_num_list.append(left_list[left_idx])
            left_idx += 1

    return sorted_num_list


num_list = list(map(int, input().split()))
# print(num_list)
print(*divided(num_list))