function solution(citations) {
  let answer = 0;
  citations.sort((a, b) => b - a);
  for (let i = citations.length; i > 0; i--) {
    let temp = 0;
    for (const citation2 of citations) {
      if (i <= citation2) {
        temp++;
      }
    }
    if (temp >= i) {
      answer = i;
      break;
    }
  }
  return answer;
}

function main() {
  const citationsList = [
    [3, 0, 6, 1, 5],
    [25, 8, 5, 3, 3],
  ];
  citationsList.forEach((citations) => console.log(solution(citations)));
}

main();
