"""
chapter13 DFS/BFS 15번 문제 특정 거리의 도시 찾기
어떤 나라 1~n번까지의 도시와 m개의 단방향 도로가 존재합니다. 모든 도로의 거리는 1
특정한 도시 x로부터 출발하여 도달할 수 있는 모든 도시 중, 최단 거리가 정확히 k인 모든 도시의 번호를 출력하는 프로그램을 작성하시오.
출발 도시 x -> x로 가는 거리는 항상 0
예를 들어 n = 4, k = 2, x = 1일 때 다음과 같이 그래프가 구성되어 있다고 합시다.
이때 1번 도시에서 출발하여 도달할 수 있는 도시 중에서, 최단거리가 2인 도시는 4번 도시뿐. 
2번과 3번 도시의 경우 최단거리가 1이기 때문에 출력하지 않습니다.

첫째 줄에 도시의 개수 n, 도로의 개수 m, 거리 정보 k, 출발 도시의 번호 x가 주어집니다.
(2 <= n <= 300,000, 1 <= m <= 1,000,000, 1 <= k <= 300,000, 1 <= x <= n)
두번째 줄부터 m개의 줄에 걸쳐서 두 개의 자연수 a, b가 주어지며, 각 자연수는 공백으로 구분합니다.
이는 a번 도시에서 b번 도시로 이동하는 단방향 도로가 존재한다는 의미입니다. (1 <= a,b <= n) 단, a와 b는 서로 다른 자연수 입니다.
4 4 2 1
1 2
1 3
2 3
2 4

x로부터 출발하여 도달할 수 있는 도시 중에서, 최단 거리가 k인 모든 도시의 번호를 한 줄에 하나씩 오름차순으로 출력합니다.
이때 도달할 수 있는 도시 중에서, 최단 거리가 k인 도시가 하나도 존재하지 않으면 -1을 출력합니다.
4

4 3 2 1
1 2
1 3
1 4

-1

4 4 1 1
1 2
1 3
2 3
2 4

2
3
"""

from sys import stdin
from collections import deque

def solution(n, m, k, x, graph):
  # 모든 도시에 대한 최단 거리 초기화
  distance = [-1] * (n + 1)
  # 출발 도시까지의 거리는 0으로 설정
  distance[x] = 0

  # 시작 도시 부터 너비 우선 탐색 시작(bfs)
  queue = deque([x])

  while queue:
    now = queue.popleft()
    # print(f'now : {now}')
    # 현재 도시에서 이동할 수 있는 모든 도시를 확인
    for next_node in graph[now]:
      # 아직 방문하지 않은 도시라면
      if distance[next_node] == -1:
        # 최단 거리 갱신
        distance[next_node] = distance[now] + 1
        queue.append(next_node)
      # print(queue)
  
  # 최단 거리가 k인 모든 도시 출력
  check = False
  result = []
  for i in range(1, n+1):
    if distance[i] == k:
      result.append(i)
      check = True

  # 만약 최단 거리가 k인 도시가 없다면, -1 출력
  if check == False:
    return [-1]
  return result

def init():
  n, m, k, x = map(int, stdin.readline().split())
  graph = [[] for _ in range(n+1)]

  for i in range(m):
    a, b = map(int, stdin.readline().split())
    graph[a].append(b)

  answer = solution(n, m, k, x, graph)

  for i in answer:
    print(i)

init()

