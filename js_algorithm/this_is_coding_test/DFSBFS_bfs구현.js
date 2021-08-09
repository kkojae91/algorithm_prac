// bfs 메서드 정의
function bfs(graph, start, visited) {
  // Queue(큐) 구현을 위해 queue리스트 생성
  const queue = [start];
  // 현재 노드 방문 처리
  visited[start] = true;
  // 큐가 빌 때까지 반복
  while (queue.length) {
    // 큐에서 하나의 원소를 뽑아 출력하기.
    v = queue.shift();
    console.log(v);
    // 아직 방문하지 않은 인접한 원소들을 큐에 삽입후 방문 처리
    for (const index of graph[v]) {
      if (!visited[index]) {
        queue.push(index);
        visited[index] = true;
      }
    }
  }
}

function init() {
  // 각 노드가 연결된 정보를 표현 (2차원 리스트)
  const graph = [
    // 보통 노드가 1번 부터 시작하기 때문에 0번째 인덱스의 배열은 비워준다.
    [],
    // 1번 노드가 2, 3, 8 노드와 연결되어 있음을 의미
    [2, 3, 8],
    // 2번 노드가 1, 7 노드와 연결되어 있음을 의미
    [1, 7],
    // 3번 노드가 1, 4, 5 노드와 연결되어 있음을 의미
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7],
  ];
  const visited = Array(graph.length).fill(false);
  bfs(graph, 1, visited);
}

init();
