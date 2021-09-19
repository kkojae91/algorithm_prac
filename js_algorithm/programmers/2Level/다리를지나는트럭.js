/*
* 다리를 지나는 트럭!!
큐의 길이를 먼저 초기화 시켜놓고 풀어주는 유형!
*/

function solution(bridge_length, weight, truck_weights) {
  const queue = [];
  let count = 0;
  let queueSum = 0;

  // queue를 다리의 길이 만큼 0으로 초기화 해준다.
  for (let i = 0; i < bridge_length; i++) {
    queue.push(0);
  }

  // 첫번째 다리를 지나는 트럭 셋팅
  let currTruck = truck_weights.shift();
  // queue에 첫번째 트럭 집어 넣고 제일 먼저 들어간 친구 빼준다.
  queue.push(currTruck);
  queue.shift();
  // queueSum 초기값은 0이닌 첫번째 트럭 무게로 갱신
  queueSum += currTruck;
  // 첫번째 트럭에 관한 일들을 마무리 했으니 count++;
  count++;
  // 초기값 셋팅이 마무리 되었으니 다른 트럭들도 셋팅해준다.
  // queue가 0이 되면 모든 트럭이 다리를 지나간다.
  while (queueSum !== 0) {
    // 큐에서 빼낸 값을 queueSum 값에서 빼준다.
    queueSum -= queue.shift();
    // 다리에 올라갈 트럭을 트럭 리스트에서 빼준다.
    let currTruck = truck_weights.shift();
    // 현재 트럭 무게 + queueSum 값이 weight값보다 작거나 같을 경우
    if (currTruck + queueSum <= weight) {
      queue.push(currTruck);
      queueSum += currTruck;
      // 현재 트럭 무게 + queueSum 값이 weight값보다 클 경우
    } else {
      // queue에는 0을 다시 푸쉬해주고, 현재 트럭을 다시 트럭 리스트 맨 앞쪽에 위치 해준다.
      queue.push(0);
      truck_weights.unshift(currTruck);
    }
    // 한 사이클 돌 때마다 count++;
    count++;
  }
  return count;
}

function main() {
  const bridgeList = [2, 100, 100];
  const weightList = [10, 100, 100];
  const truckList = [[7, 4, 5, 6], [10], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]];
  for (let i = 0; i < 3; i++) {
    console.log(solution(bridgeList[i], weightList[i], truckList[i]));
  }
}

main();
