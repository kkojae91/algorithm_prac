// 정규표현식 사용 방법! 문자열로 사용!!
function solution2(skill, skill_trees) {
  let answer = 0;
  // skill이 아닌 것들 전체영역에서 찾는 정규표현식
  let regex = new RegExp(`[^${skill}]`, "g");

  let removeAnotherSkills = skill_trees.map((skill_tree) => skill_tree.replace(regex, ""));
  const filterSkills = removeAnotherSkills.filter((sk) => {
    // skill안에 removeAnotherSkills문자열이 처음으로 시작하거나, 없는 경우! 만 filter한다.
    if (skill.indexOf(sk) === 0 || sk === "") {
      return true;
    }
  });
  answer = filterSkills.length;
  return answer;
}

// 내가 푼 방법 -> 리스트 사용.. 정규식 X
function solution(skill, skill_trees) {
  let answer = 0;
  skill_trees.forEach((skill_tree) => {
    let temp = [];
    for (let i = 0; i < skill_tree.length; i++) {
      if (skill.indexOf(skill_tree[i]) !== -1) {
        temp.push(skill.indexOf(skill_tree[i]));
      }
    }

    let count = 0;
    for (let i = 0; i < temp.length; i++) {
      if (i === temp[i]) {
        count++;
      }
    }
    // console.log(temp.length, count, temp);
    if (temp.length === count) {
      answer++;
    }
  });
  return answer;
}

function main() {
  const skill = "CBD";
  const skill_trees = ["BACDE", "CBADF", "AECB", "BDA", "CDB"];
  // console.log(solution(skill, skill_trees));
  console.log(solution2(skill, skill_trees));
}

main();
