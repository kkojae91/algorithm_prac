# 여행가 A는 N x N 크기의 정사각형 공간 위에 서 있다. 이 공간은 1 x 1 크기의 정사각형으로 나누어져있다.
# 가장 왼쪽 위 좌표는 (1,1)이며, 가장 오른쪽 아래 좌표는 (N,N)에 해당한다. 여행가 A는 상하좌우 이동 할 수 있고,
# 시작좌표는 항상 1,1 입니다. 
# L, R, U, D  // L -왼쪽 1칸 , R - 오른쪽 한칸, U - 위로 한칸, D - 아래로 한칸
# 길이 없는곳을 선택하면 무시 된다.
# N = 5인 지도와 계획서.
# 5
# R R R U D D

def travel_plan(x, y, dx, dy, n, move_types, plan_list):
    for plan in plan_list:
        for i in range(len(move_types)):
            if plan == move_types[i]:
                nx = x + dx[i]
                ny = y + dy[i]
        # 정해진 공간을 벗어나게 되면 무시! 하고 다음으로 넘어가자!
        if nx < 1 or ny < 1 or nx > n or ny > n:
            continue

        x, y = nx, ny
    return x, y

n = int(input())
plan_list = input().split()

# x y 초기가 1,1 설정.
x, y = 1, 1
# move type에 따른 변화를 주기 위해 미리 준비한 리스트.
# x축일 경우 y축일 경우 U -1 D +1 L -1 R +1 각각의 move type에 맞게 1칸씩 이동!
dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]
move_types = ["L", "R", "U", "D"]

print(travel_plan(x, y, dx, dy, n, move_types, plan_list))