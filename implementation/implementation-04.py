# 현민이는 게임캐릭터가 맵안에서 움직이는 시스템을 개발중이다. 캐릭터가 있는 장소는 1x1 크기의 정사각형으로 이루어진 N x M 크기의 직사각형으로,
# 각각의 칸은 육지, 바다 // 캐릭터는 동서남북 중 한 곳을 바라본다.
# 맵의 각 칸은 (A, B) A는 북쪽으로부터 떨어진 칸의 개수, B는 서쪽으로부터 떨어진 칸의 개수이다.
# 캐릭터는 상하좌우로 움직일 수 있고, 바다로 되어 있는 공간에는 갈 수 없다.
# 1. 현재 위치에서 현재방향을 기준으로 왼쪽방향(반시계 방향으로 90도 회전한 방향)부터 차례대로 갈 곳을 정한다.
# 2. 캐릭터의 바로 왼쪽 방향에 아직 가보지 않은 칸이 존재한다면, 왼쪽 방향으로 회전한 다음 왼쪽으로 한칸 전진한다.
#     왼쪽 방향에 가보지 않은 칸이 없다면, 왼쪽방향으로 회전만 수행하고 1단계로 돌아간다.
# 3. 만약 네방향 모두 이미 가본 칸이거나 바다로 되어 있는 칸인 경우에는, 바라보는 방향을 유지한채로 한칸 뒤로 가고 1단계로 돌아간다.
#     단, 이때 뒤쪽 방향이 바다인 칸이라 뒤로 갈 수 없는 경우라면 움직임을 멈춘다.

# 메뉴얼에 따라 캐릭터를 이동시킨 후, 캐릭터가 방문한 칸의 수를 출력하는 프로그램을 만드시오.
# d 캐릭터가 바라보는 방향 0 북쪽, 1 동쪽, 2 남쪽, 3 서쪽 
# 0 육지 1 바다

def move_count(count, turn_time, game_map, visit_map, dx, dy, direction, x, y):
    while True:
        direction = turn_left(direction)

        nx = x + dx[direction]
        ny = y + dy[direction]

        # 방문하지 않은 곳 이면서, 바다가 아닌 곳 이라면!
        if visit_map[nx][ny] == 0 and game_map[nx][ny] == 0:
            visit_map[nx][ny] = 1
            x = nx
            y = ny

            # 1회 방문을 했으니 count 추가.
            count += 1
            # x 와 y 의 위치가 변했으니 turn_time 초기화.
            turn_time = 0
            continue
        # 1회 회전후 방문 한곳 이거나, 바다인 경우!
        else:
            # turn_time 에 1을 추가한다.
            turn_time += 1

        # 네 방향 모두 갈 수 없는 경우
        if turn_time == 4:
            nx = x - dx[direction]
            ny = y - dy[direction]
            # 뒤로 한칸 이동하기
            if game_map[nx][ny] == 0:
                x = nx
                y = ny
            # 뒤로 가려고 했는데 바다라면, 움직임을 멈춘다.
            else:
                return count
            turn_time = 0

n, m = map(int, input().split())

# 방문 확인을 위한 map 생성, 0으로 초기화.
visit_map = [[0] * m for _ in range(n)]
x, y, direction = map(int, input().split())
# 현재 x, y 좌표 방문 처리
visit_map[x][y] = 1

# 0 북 1 동 2 남 3 서
dx = [-1,0,1,0] # 북 남
dy = [0,1,0,-1] # 동 서

# game_map input 받기.
game_map = []
for _ in range(n):
    game_map.append(list(map(int, input().split())))

# 캐릭터가 왼쪽으로 도는 함수
def turn_left(direction):
    # 한번 돌때마다 direction 값은 -1 해준다. 만약 direction 값이 -1 이 되었을 경우, direction을 3으로 바꿔 준다.
    direction -= 1
    if direction == -1:
        direction = 3
    return direction

# 방문횟수를 위한 count변수 생성, 시작하자마자 첫 방문이 됨으로 count는 1부터 시작
count = 1
# 네방향을 다 확인 했는지 확인 하기 위해, turn_time 변수 생성
turn_time = 0

print(move_count(count, turn_time, game_map, visit_map, dx, dy, direction, x, y))