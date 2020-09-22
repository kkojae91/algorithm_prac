# 2차원 평면에 n개의 점이 있다. 이 점들 중에서 두 점을 선택했을 때,
# 그 기울기의 절댓값의 최댓값을 출력하는 프로그램을 작성하시오.
# 단, 모든 점의 x좌표는 다르다고 가정한다. 또한, 두점 (x1,y1),(x2,y2)의 기울기는 (y2-y1) / (x2-x1)으로 정의 된다.
# 예를 들어, 4개의 점이 각각 (0,3),(1,1),(2,2),(4,1)에 위치해 있다고 하면,
# 기울기의 절댓값의 최댓값은 2가 된다.
# 이 경우 기울기 절댓값의 최댓값인 2를 출력합니다.
# 입력으로는 첫줄에 점의 개수가, 그 다음줄부터는 점의 x좌표와 y좌표가 입력됩니다.
# 4
# 0 3
# 1 1
# 2 2
# 4 1
# 2.000

def get_slope(a,b):
    return abs((b[1]-a[1]) / (b[0]-a[0]))

def max_slope(x_y_list):
    result = 0

    for i in range(len(x_y_list)-1):
        result = max(result, get_slope(x_y_list[i], x_y_list[i+1]))

    return result

n = int(input())
x_y_list = []
for i in range(n):
    x_y_list.append(list(map(int, input().split())))

x_y_list = sorted(x_y_list, key= lambda x: x[0])
# print(x_y_list)
print("%.3lf"%max_slope(x_y_list))