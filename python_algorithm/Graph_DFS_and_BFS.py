from collections import deque

# 너비우선탐색 덱으로 구현.
def search_bfs_with_deque(v, adj_arr, visit, n):
    queue = deque([v])
    visit[v] = True

    while len(queue) > 0:
        now_node = queue.popleft()
        print(now_node, end=' ')

        for i in range(1, n+1):
            if adj_arr[now_node][i] == 1 and not visit[i]:
                queue.append(i)
                visit[i] = True

def search_dfs(v, adj_arr, visit, n):
    # 일단 시작 숫자는 방문체크 리스트에 방문했다고 체크해준다.
    print(v, end=" ")
    visit[v] = True

    for i in range(1,n+1):
        if adj_arr[v][i] == 1 and not visit[i]:
            search_dfs(i, adj_arr, visit, n)

def search_bfs(v, adj_arr, visit, n):
    # queue리스트에 시작 숫자 추가
    queue = [v]
    # 시작숫자 방문 표시
    visit[v] = True
    # 계산 도와줄 기준 인덱스 값 설정.
    f_idx = 0
    r_idx = 1

    # r_idx가 f_idx보다 큰 동안 반복문 실행
    while f_idx < r_idx:
        # queue의 f_idx 번째의 수를 now_node로 설정
        now_node = queue[f_idx]
        print(now_node, end=" ")

        for i in range(1, n+1):
            if adj_arr[now_node][i] == 1 and not visit[i]:
                queue.append(i)
                visit[i] = True
                r_idx += 1

        f_idx += 1

    
# 일단 먼저 입력값을 세개 받는다.
# n 정점의 개수 // m 간선의 개수 // v 시작할 간선
n, m, v = map(int, input().split())
# 그림을 그릴 수 없으니 행렬을 만들어 표시. / 2차원으로 만들어 주기 위함.(for문)
adj_arr = [[0]*(n+1) for _ in range(n+1)]
# print(adj_arr)
# 방문 체크해줄 visit 리스트를 만들어준다.
visit = [False] * (n+1)
# print(visit)
# 행렬에 표시 어디와 어디가 연결 되어있는지!
for _ in range(m):
    v1, v2 = map(int, input().split())
    adj_arr[v1][v2] = 1
    adj_arr[v2][v1] = 1
# print(adj_arr)

search_dfs(v, adj_arr, visit, n)
print()
# 방문리스트 초기화!
visit = [False]*(n+1)
search_bfs(v, adj_arr, visit, n)