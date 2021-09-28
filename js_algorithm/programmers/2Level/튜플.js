function solution(s) {
  let regex = new RegExp("[^0-9]", "g");
  let sList = s.split(",");
  sList = sList.map((str) => str.replace(regex, ""));
  const sHash = {};
  sList.forEach((str) => {
    !sHash[str] ? (sHash[str] = 1) : sHash[str]++;
  });
  const entriesList = Object.entries(sHash);
  entriesList.sort((a, b) => b[1] - a[1]);
  let answer = entriesList.map((arr) => Number(arr[0]));
  // console.log(answer);
  return answer;
}

function main() {
  const sList = [
    "{{2},{2,1},{2,1,3},{2,1,3,4}}",
    "{{1,2,3},{2,1},{1,2,4,3},{2}}",
    "{{20,111},{111}}",
    "{{123}}",
    "{{4,2,3},{3},{2,3,4,1},{2,3}}",
  ];
  sList.forEach((s) => {
    console.log(solution(s));
  });
}

main();
