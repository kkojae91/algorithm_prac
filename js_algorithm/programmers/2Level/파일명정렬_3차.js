// head 정렬 후 number 정렬 후 tail 정렬 순으로 정렬 후 join("")으로 문자열 만들기.
// head, number, tail을 분리 할 수 있는 stack 배열 생성 후 head, number, tail을 분리.
// 무조건 숫자가 등장. 그니까 그 숫자를 통해서 head, number, tail 분리
// 숫자는 무조건 첫번째 등장하는 숫자가 끝! (뒤에 등장하더라도 문자열로 처리한다.)
function solution(files) {
  let answer = [];
  files.forEach((file) => {
    let limit = 0;
    let head = "";
    let numbers = "";
    let tail = "";
    for (const text of file) {
      // 문자일 경우
      if (isNaN(text)) {
        if (limit > 0) {
          tail += text;
        } else {
          head += text;
        }
        // 숫자일 경우 (공백일 경우 예외 처리 필요)
      } else {
        if (text === " ") {
          if (limit > 0) {
            tail += text;
          } else {
            head += text;
          }
          continue;
        }
        if (tail.length > 0) {
          tail += text;
        } else {
          numbers += text;
          limit++;
        }
      }
    }
    answer.push([head, numbers, tail]);
  });
  answer.sort((a, b) => {
    if (a[0].toUpperCase() < b[0].toUpperCase()) {
      return -1;
    }
    if (a[0].toUpperCase() > b[0].toUpperCase()) {
      return 1;
    }
    if (a[0].toUpperCase() === b[0].toUpperCase()) {
      if (Number(a[1]) < Number(b[1])) {
        return -1;
      }
      if (Number(a[1]) > Number(b[1])) {
        return 1;
      }
      if (Number(a[1]) === Number(b[1])) {
        return 0;
      }
    }
  });
  answer = answer.map((ans) => ans.join(""));
  // console.log(answer)
  return answer;
}

function main() {
  const inputList = [
    ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"],
    ["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"],
  ];
  for (let i = 0; i < inputList.length; i++) {
    console.log(solution(inputList[i]));
  }
}
main();
