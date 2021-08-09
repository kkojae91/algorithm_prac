// dfs 메서드 정의
function dfs(graph, v, visited) {
  // 현재 노드를 방문 처리
  visited[v] = true;
  console.log(v);
  for (const index of graph[v]) {
    if (!visited[index]) {
      dfs(graph, index, visited);
    }
  }
}

function init() {
  // 각 노드가 연결된 정보를 표현 (2차원 리스트)
  const graph = [
    // 보통 노드의 번호가 1번 부터 시작 되기 때문에 0번 인덱스는 []비워준다.
    [],
    // 1번 노드가 2, 3, 8 노드와 연결되어 있음을 의미
    [2, 3, 8],
    // 2번 노드는 1, 7 노드와 연결되어 있음을 의미
    [1, 7],
    // 3번 노드는 1, 4, 5 노드와 연결되어 있음을 의미
    [1, 4, 5],
    // 4번 노드는 3, 5 노드와 연결되어 있음을 의미
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7],
  ];
  // 각 노드가 방문된 정보를 표현하기 위해 visit 배열 생성
  const visited = Array(graph.length).fill(false);
  // 정의 된 DFS 함수 호출
  dfs(graph, 1, visited);
}

init();
