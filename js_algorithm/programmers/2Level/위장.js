function solution(clothes) {
  const hash = {};
  for (let i = 0; i < clothes.length; i++) {
    const key = clothes[i][1];
    if (!hash[key]) {
      hash[key] = 1;
    } else {
      hash[key] += 1;
    }
  }
  const hashValues = Object.values(hash);
  const answer = hashValues.reduce((mul, curr) => mul * (curr + 1), 1) - 1;
  return answer;
}

function main() {
  const clothesArray = [
    [
      ["yellowhat", "headgear"],
      ["bluesunglasses", "eyewear"],
      ["green_turban", "headgear"],
    ],
    [
      ["crowmask", "face"],
      ["bluesunglasses", "face"],
      ["smoky_makeup", "face"],
    ],
  ];
  clothesArray.forEach((clothes) => console.log(solution(clothes)));
}

main();
