function solution(phone_number) {
  let phoneNumberList = phone_number.split("");
  const phoneNumberLength = phone_number.length;
  const blindLength = phone_number.length - 4;

  if (phoneNumberLength === 4) {
    return phone_number;
  } else {
    phoneNumberList.splice(0, blindLength, "*".repeat(blindLength));
    return phoneNumberList.join("");
  }
}

function init() {
  phoneNumber = ["01033334444", "027778888"];
  for (let phone of phoneNumber) {
    console.log(solution(phone));
  }
}

init();
