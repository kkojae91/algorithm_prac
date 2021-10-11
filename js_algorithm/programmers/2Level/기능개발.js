function solution(progresses, speeds) {
  const answer = [];
  while (progresses.length > 0) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }
    if (progresses[0] >= 100) {
      let count = 0;
      while (progresses[0] >= 100) {
        progresses.shift();
        speeds.shift();
        count++;
      }
      answer.push(count);
    }
  }
  return answer;
}

function main() {
  const progressesList = [
    [93, 30, 55],
    [95, 90, 99, 99, 80, 99],
  ];
  const speedsList = [
    [1, 30, 5],
    [1, 1, 1, 1, 1, 1],
  ];
  for (let i = 0; i < speedsList.length; i++) {
    console.log(solution(progressesList[i], speedsList[i]));
  }
}

main();
