/*
배달이가 좋아하는 369게임을 하고자 합니다.
놀이법은 1부터 숫자를 하나씩 대면서. 3, 6, 9가 들어가는 숫자는 숫자를 말하는 대신 3, 6, 9 개수 만큼 손뼉을 쳐야 합니다.
숫자 number가 매개변수로 주어질 때, 1부터 number까지 손뼉을 몇 번 쳐야 하는지 횟수를 return 하는 프로그램을 작성하시오.
13 4
33 14
*/

function solution(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    const str = String(i);
    for (const s of str) {
      if (s === "3" || s === "6" || s === "9") {
        answer++;
      }
    }
  }
  return answer;
}

function init() {
  const numberList = [13, 33];
  numberList.forEach((number) => {
    console.log(solution(number));
  });
}

init();
