# 입력으로 n개의 수가 주어지면, quick sort를 구현하는 프로그램 작성
def get_small_list(num_list, pivot):
    small_num_list = []

    for num in num_list:
        if num < pivot:
            small_num_list.append(num)

    return small_num_list


def get_large_list(num_list, pivot):
    large_num_list = []

    for num in num_list:
        if num > pivot:
            large_num_list.append(num)

    return large_num_list


def quick_sort(num_list):
    if len(num_list) <= 1:
        return num_list

    pivot = num_list[0]

    left = get_small_list(num_list[1:], pivot)
    right = get_large_list(num_list[1:], pivot)

    return quick_sort(left) + [pivot] + quick_sort(right)

# 입력값 받기.
num_list = list(map(int, input().split()))
print(*quick_sort(num_list))