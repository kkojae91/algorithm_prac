/*
양의 정수 x가 하샤드 수라면 x의 자릿수의 합으로 x가 나누어져야합니다. 예를 들어 18의 자릿수 합은 9이고,
18을 9로 나누어 떨어지므로 18은 하샤드 수입니다.
자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수 solution을 완성해주세요.
하샤드 수이면 true, 아니면 false를 출력하는 프로그램을 만드시오.
*/

// 반복문 활용
function solution(x) {
  let result = 0;
  let array = String(x).split("");
  array = array.map((arr) => Number(arr));
  for (let arr of array) {
    result += arr;
  }
  if (x % result === 0) {
    return true;
  } else {
    return false;
  }
}

// reduce 활용, 삼항연산자 사용
function solution2(x) {
  let array = String(x).split("");
  array = array.map((arr) => Number(arr));
  const result = array.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  return x % result === 0 ? true : false;
}

function init() {
  const array = [10, 12, 11, 13];
  for (const arr of array) {
    // console.log(solution(arr));
    console.log(solution2(arr));
  }
}

init();
