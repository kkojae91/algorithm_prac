// 조건을 조잡하게 적지 않고 깔끔하게 적어야한다..
function solution2(number, k) {
  const stack = [];
  for (let i = 0; i < number.length; i++) {
    let now = number[i];
    // 무조건 push하고 다음 for 문에서 이전 인덱스 숫자와 나랑 비교해서 현재 인덱스가 이전 인덱스보다 크면 pop하고 넣어줌.
    // 제거하는 숫자인 (k)를 1감소
    while (k > 0 && stack[stack.length - 1] < now) {
      stack.pop();
      k--;
    }
    stack.push(now);
  }
  // k가 남아 있는경우! 뒤에서부터 제거해준다.(마지막 예외 조건)
  stack.splice(stack.length - k, k);
  return stack.join("");
}

// 내가 푼 방법은 뭔가 조잡...한 느낌?!
// number를 순회 하면서 스택에 푸쉬
// 스택의 endindex와 currNum을 비교
// currNum이 클경우, stack while문으로 돌면서 currNum보다 작은 경우 제거,
// (조건) 제거하는 카운트를 세고, 그 카운트가 k가 될경우 멈추고 뒤에 남은 애들을 모두 스택에 푸쉬
// join메서드를 통해 모두 문자열로 합친 후 리턴한다.
function solution(number, k) {
  const stack = [];
  let count = 0;
  for (let i = 0; i < number.length; i++) {
    if (stack.length === 0) {
      stack.push(number[i]);
    } else {
      const prevNum = Number(stack[stack.length - 1]);
      const currNum = Number(number[i]);
      if (prevNum < currNum) {
        while (stack.length > 0) {
          if (count === k) {
            break;
          }
          const prev = Number(stack[stack.length - 1]);
          if (prev < currNum) {
            stack.pop();
            count++;
          } else {
            break;
          }
        }
      }
      stack.push(number[i]);
    }
  }

  k -= count;
  stack.splice(stack.length - k, k);

  return stack.join("");
}

function main() {
  const numberArray = ["1924", "1231234", "4177252841"];
  const kArray = [2, 3, 4];
  for (let i = 0; i < kArray.length; i++) {
    console.log(solution(numberArray[i], kArray[i]));
  }
}

main();
