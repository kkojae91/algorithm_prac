// 내가 푼 solution
function solution(participant, completion) {
  const hash = {};
  participant.forEach((pName) => {
    hash[pName] ? (hash[pName] += 1) : (hash[pName] = 1);
  });
  completion.forEach((cName) => {
    hash[cName] === 1 ? (hash[cName] = 0) : (hash[cName] -= 1);
  });

  const answer = participant.filter((pName) => hash[pName] === 1);

  return [...new Set(answer)].join("");
}

// 다른 사람이 푼 방법... 아직 모르겠다.. 연구 필요!!!!!
function solution2(participant, completion) {
  const result = participant.find(
    (name) => !completion[name]--,
    completion.map((name) => (completion[name] = (completion[name] || 0) + 1))
  );
  console.log(result);
}

function init() {
  const participantArray = [
    ["leo", "kiki", "eden"],
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["mislav", "stanko", "mislav", "ana"],
  ];
  const completionArray = [
    ["eden", "kiki"],
    ["josipa", "filipa", "marina", "nikola"],
    ["stanko", "ana", "mislav"],
  ];
  participantArray.forEach((array, index) => {
    // console.log(solution(participantArray[index], completionArray[index]));
    console.log(solution2(participantArray[index], completionArray[index]));
  });
}

init();
