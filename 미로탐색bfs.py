from collections import deque

# 미로에서 1은 움직일 수 있는 칸, 0은 움직일 수 없는칸,
# 전체를 패딩값(0)을 주어 인덱스 에러가 나지 않도록 만들어 주어야 한다.
# 미로 찾기의 경우는 bfs에 해당한다 최소 경로 찾기.
# 4 6
# 101111
# 101010
# 101011
# 111011

n, m = map(int, input().split())
maze_map = [[0] * (m+2)]
# print(maze_map)
visit = [[0] * (m+1) for _ in range(n+1)]
# for line in visit:
#     print(line)
# print(visit)
for _ in range(n):
    maze_map.append([0] + list(map(int, input())) + [0])

maze_map.append([0] * (m+2))

# for line in maze_map:
#     print(line)

# 총 네방향을 살펴보아야함. (계산을 편하게 하기 위해// 코드 복잡도를 낮추기 위함)
pos_calc = [
    [-1, 0], # 위 방향 확인을 위함.
    [0, 1],  # 오른쪽 방향 확인을 위함 
    [1, 0],  # 왼쪽 방향 확인을 위함
    [0, -1]  # 아래 방향 확인을 위함
]


q = deque()
q.append([1,1]) # 시작 점 설정.
visit[1][1] = 1 # 시작점 방문 체크.
# maze_map 값이 0이 아니면서, 방문 했던 곳이 아닌 곳을 찾아 간다.

# 종료 조건 // 마지막 출구를 찾으면 True 로 바뀌며 while문 탈출
maze_end_flag = False

while not maze_end_flag:
    # 2차원 배열이므로 pop 하면 두개가 빠져 나온다.
    # 현재 위치를 출력
    now_row, now_col = q.popleft()

    # 총 네방향을 살펴보아야함.
    # 계산의 편의를 위해 pos_calc 리스트르 만들어준다.
    for c_row, c_col in pos_calc:
        target_row = now_row + c_row
        target_col = now_col + c_col

        # 미로맵이 1 이고, 방문기록이 0 이면 q에 현재 위치를 append해준다.
        if maze_map[target_row][target_col] == 1 and visit[target_row][target_col] == 0:
            q.append([target_row, target_col])
            # 자리 이동 후 이전의 위치값에 +1 을 해주어 방문 체크 해준다.(이동 횟수를 파악하기 위함.)
            visit[target_row][target_col] = visit[now_row][now_col] + 1
        
        # 길을 찾다가 target_row와 target_col이 입력값과 같아지면,
        # 탈출 조건을 실행한다.
        if target_row == n and target_col == m:
            maze_end_flag = True

for line in visit:
    print(line)
print(visit[n][m])