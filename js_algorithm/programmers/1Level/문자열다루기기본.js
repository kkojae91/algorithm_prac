function solution(s) {
  if (s.length === 4 || s.length === 6) {
    for (const sn of s) {
      if (isNaN(s)) {
        return false;
      }
      return true;
    }
  }
  return false;
}

function init() {
  sList = ["a234", "1234"];
  for (const s of sList) {
    console.log(solution(s));
  }
}

init();
