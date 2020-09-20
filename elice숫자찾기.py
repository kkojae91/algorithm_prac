# n개의 수 중에서, m이 존재하면 'Yes', 존재하지 않으면 'No'를 반환하는 프로그램을 작성하세요.
# 첫줄에 n개의 수가 입력되며, 둘째줄에 m이 입력됩니다.
# 1 4 6 7 10 14 16
# 7
# Yes
# 1 4 6 7 10 14 16
# 9
# No

def find_num(num_list, target_num):
    # 기저조건 설정.
    mid_idx = len(num_list) // 2
    if len(num_list) <= 1:
        if num_list[0] == target_num:
            return "Yes"
        return "No"

    if num_list[mid_idx] == target_num:
        return "Yes"

    elif num_list[mid_idx] > target_num:
        return find_num(num_list[:mid_idx], target_num)

    elif num_list[mid_idx] < target_num:
        return find_num(num_list[mid_idx:], target_num)
        

num_list = list(map(int, input().split()))
target_num = int(input())

print(find_num(num_list, target_num))