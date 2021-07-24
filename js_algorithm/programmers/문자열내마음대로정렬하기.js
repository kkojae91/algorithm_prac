function solution(strings, n) {
  strings.sort((a, b) => {
    const first = a[n];
    const second = b[n];
    if (first === second) {
      return (a > b) - (a < b);
    } else {
      return (first > second) - (first < second);
    }
  });
  return strings;
}

function init() {
  const stringsList = [
    ["sun", "bed", "car"],
    ["abce", "abcd", "cdx"],
  ];
  const nList = [1, 2];
  for (let i = 0; i < nList.length; i++) {
    console.log(solution(stringsList[i], nList[i]));
  }
}

init();
