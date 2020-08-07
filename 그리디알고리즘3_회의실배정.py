# 한 개의 회의실에서 회의
# 회의시작하면 중단 불가능.
# 회의의 시작시간과 끝나는 시간이 같을 수 있다.
# 첫째 줄에 최대 사용할 수 있는 회의의 최대 개수를 출력한다.
# n = 11
# time_table = (1,4),(3,5),(0,6),(5,7),(3,8),(5,9),(6,10),(8,11),(8,12),(2,13),(12,14)
# 기존입력값[(1, 4), (3, 5), (0, 6), (5, 7), (3, 8), (5, 9), (6, 10), (8, 11), (8, 12), (2, 13), (12, 14)]
# 앞만정렬값[(0, 6), (1, 4), (2, 13), (3, 5), (3, 8), (5, 7), (5, 9), (6, 10), (8, 11), (8, 12), (12, 14)]
# 뒤만정렬값[(1, 4), (3, 5), (0, 6), (5, 7), (3, 8), (5, 9), (6, 10), (8, 11), (8, 12), (2, 13), (12, 14)]
# 앞뒤정렬값[(1, 4), (3, 5), (0, 6), (5, 7), (3, 8), (5, 9), (6, 10), (8, 11), (8, 12), (2, 13), (12, 14)]
n = int(input())
time_table = []
for _ in range(n):
    start, end = map(int, input().split())
    time_table.append([start,end])
    time_table = sorted(time_table, key=lambda time: time[0])
    # print(time_table)
    time_table = sorted(time_table, key=lambda time: time[1])
    # print(time_table)
print(time_table)

# time_table.sort(key=lambda time: [time[1],time[0]])
# print(time_table)

def max_time_count(time_table):
    time_idx = 0
    time_count = 0

    for time in time_table:
        if time[0] >= time_idx:
            time_idx = time[1]

            time_count += 1

    return time_count
print(max_time_count(time_table))

###############
# 강사님 코드
# n = int(input())
# meet_list = []

# for _ in range(n):
#     meet_list.append(list(map(int, input().split())))

# meet_list.sort(key=lambda meet: [meet[1],meet[0]])
# print(meet_list)

# result_meet_cnt = 1
# booked_end_time = meet_list[0][1]

# for idx in range(1, len(meet_list)):
#     if meet_list[idx][0] >= booked_end_time:
#         booked_end_time = meet_list[idx][1]

#         result_meet_cnt += 1

# print(result_meet_cnt)