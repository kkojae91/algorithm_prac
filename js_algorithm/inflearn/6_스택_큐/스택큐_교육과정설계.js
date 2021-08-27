/*
* 교육과정 설계
필수과목은 반드시 첫번째 과목을 이수해야 다음 과목을 이수할 수 있습니다.
필수 과목과 수업계획이 주어졌을 경우
수업설계가 잘되었을 경우 YES, 그렇지 않을 경우 NO를 출력하는 프로그램을 작성하시오.
CBA
CBDAGE
YES

CBA
ECGABD
NO
*/

class CurriculumDesign {
  constructor() {
    this.requiredSubjects = "";
    this.lessonPlan = "";
    this.requiredSubjectsQueue = [];
    this.lessonPlanQueue = [];
    this.answer = "";
  }

  solution() {
    // setting's queue
    this.requiredSubjectsQueue = this.requiredSubjects.split("");
    this.lessonPlanQueue = this.lessonPlan.split("");

    this.lessonPlanQueue.forEach((plan) => {
      const required = this.requiredSubjectsQueue[0];
      if (plan === required) {
        this.requiredSubjectsQueue.shift();
      }
    });
    this.requiredSubjectsQueue.length === 0 ? (this.answer = "YES") : (this.answer = "NO");
    return this.answer;
  }

  initialize(inputList) {
    this.requiredSubjects = inputList.slice(0, 1)[0];
    this.lessonPlan = inputList.slice(1, 2)[0];
  }
}

class CurriculumDesign2 {
  constructor() {
    this.need = "";
    this.plans = "";
    this.queue = [];
    this.answer = "YES";
  }

  solution() {
    this.queue = this.need.split("");

    for (const plan of this.plans) {
      // queue에 plan이 있다면,
      if (this.queue.includes(plan)) {
        // queue의 첫번째 값이 plan과 같지 않다면 NO
        if (plan !== this.queue.shift()) {
          return "NO";
        }
      }
    }
    // queue에 값이 남아 있을 경우
    if (this.queue.length > 0) {
      return "NO";
    }
    // 모두 통과 되었을 경우 YES
    return this.answer;
  }

  initialize(inputList) {
    this.need = inputList.slice(0, 1)[0];
    this.plans = inputList.slice(1, 2)[0];
  }
}

function main() {
  const readline = require("readline");
  const inputList = [];
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.on("line", (line) => {
    inputList.push(line);
  }).on("close", () => {
    const curriculumDesign = new CurriculumDesign();
    const curriculumDesign2 = new CurriculumDesign2();
    curriculumDesign.initialize(inputList);
    curriculumDesign2.initialize(inputList);
    // console.log(curriculumDesign.solution());
    console.log(curriculumDesign2.solution());
    process.exit();
  });
}

main();
