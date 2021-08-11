/*
암호문을 좋아하는 괴짜 개발자 브라운이 이번에는 중복 문자를 이용한 새로운 암호를 만들었습니다.
예를 들어 browoanoommnaon이라는 암호문은 다음과 같은 순서로 해독할 수 있습니다.
1. browoanoommnaon
2. browoannaon
3. browoaaon
4. browoon
5. brown
임의의 문자열 cryptogram이 매개변수로 주어질 때, 연속하는 중복 문자들을 삭제한 결과를 return 하도록 solution함수를 작성하시오.

입출력 예 2
1. zyelleyz
2. zyeeyz
3. zyyz
4. zz
5. 
*/

function solution(cryptogram) {
  const stack = [cryptogram[0]];
  for (let i = 1; i < cryptogram.length; i++) {
    const len = stack.length;
    const curr = cryptogram[i];
    if (len === 0) {
      stack.push(curr);
    } else {
      const prev = stack[len - 1];
      if (prev === curr) {
        stack.pop();
      } else {
        stack.push(curr);
      }
    }
  }
  return stack.join("");
}

function init() {
  const cryptogramList = ["browoanoommnaon", "zyelleyz"];
  cryptogramList.forEach((cryptogram) => {
    console.log(solution(cryptogram));
  });
}

init();
