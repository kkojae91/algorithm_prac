# 분할정복
# 입력예제
# 5
# 4 1 5 2 3
# 5
# 1 3 7 9 5
# 리스트를 몇개 만들지 입력을 받습니다.
n = int(input())
total_list = list(map(int, input().split()))
total_list.sort()
# print(total_list)

# 몇가지 수를 찾을지 입력해주세요.
m = int(input())
find_num_list = list(map(int, input().split()))
# print(find_num_list)

start_idx = 0
end_idx = len(total_list)-1

def b_search(find_target_num, total_list, start_idx, end_idx):
    target_idx =int((end_idx + start_idx) / 2)
    if start_idx > end_idx:
        return 0

    if total_list[target_idx] == find_target_num:
        return 1
        
    # total_list[target_idx]가 find_target_num 보다 크면 왼쪽을 탐색 
    if find_target_num < total_list[target_idx] :
        return b_search(find_target_num, total_list, start_idx, target_idx-1)
        
    # total_list[target_idx]가 find_target_num 보다 작으면 오른쪽을 탐색
    if find_target_num > total_list[target_idx] :
        return b_search(find_target_num, total_list, target_idx+1, end_idx)

for find_target_num in find_num_list:
    print(b_search(find_target_num, total_list, start_idx, end_idx))



