function replaceMusic(music) {
  return music.replace(/C#/g, "c").replace(/D#/g, "d").replace(/F#/g, "f").replace(/G#/g, "g").replace(/A#/g, "a");
}

function solution(m, musicinfos) {
  let answer = [];
  m = replaceMusic(m);
  musicinfos.forEach((music) => {
    let [start, end, name, code] = music.split(",");
    code = replaceMusic(code);
    const [startHour, startMin] = start.split(":").map((str) => Number(str));
    const [endHour, endMin] = end.split(":").map((str) => Number(str));
    let musicLength = (endHour - startHour) * 60 + endMin - startMin;

    let newCode = "";
    for (let i = 0; i < musicLength; i++) {
      newCode += code[i % code.length];
    }

    if (newCode.indexOf(m) >= 0) {
      answer.push([musicLength, name]);
    }
  });

  let maxValue = 0;
  for (let i = 0; i < answer.length; i++) {
    maxValue = Math.max(maxValue, answer[i][0]);
  }
  answer = answer.filter((ans) => ans[0] === maxValue);

  return answer.length === 0 ? "(None)" : answer[0][1];
}

function main() {
  const mList = ["ABCDEFG", "CC#BCC#BCC#BCC#B", "ABC"];
  const musicinfosList = [
    ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"],
    ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"],
    ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"],
  ];
  for (let i = 0; i < mList.length; i++) {
    console.log(solution(mList[i], musicinfosList[i]));
  }
}

main();
