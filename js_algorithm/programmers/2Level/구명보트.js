// people 배열을 오름차순 정렬
// (중요한 조건!) 한 번에 최대 2명씩 탈 수 있음!!
// 가장 가벼운 사람과 가장 무거운 사람 한 명씩 탈 수 있다는 의미.
// 가벼운 + 무거운 이 limit보다 같거나 작을 경우 left++; right--;
// 가벼운, 무거운 사람 모두 제거 answer++;
// 가벼운 + 무거운이 limit보다 클경우 right--;
// 무거운 사람 제거 answer++;
function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b);
  let left = 0;
  for (let right = people.length - 1; left <= right; right--) {
    const sumWeight = people[left] + people[right];
    if (sumWeight <= limit) {
      left++;
    }
    answer++;
  }
  return answer;
}

function main() {
  const peopleArray = [
    [70, 50, 80, 50],
    [70, 80, 50],
  ];
  const limitArray = [100, 100];

  for (let i = 0; i < peopleArray.length; i++) {
    console.log(solution(peopleArray[i], limitArray[i]));
  }
}

main();
