function makeJadenCase(s) {
  const array = s.split("");
  let answer = "";

  array.reduce((prev, curr) => {
    if (prev === " ") {
      answer += curr.toUpperCase();
    } else {
      answer += curr.toLowerCase();
    }
    return curr;
  }, " ");

  return answer;
}

function main() {
  const sList = ["3people unFollowed me", "for the last week"];
  for (const s of sList) {
    console.log(makeJadenCase(s));
  }
}

main();
