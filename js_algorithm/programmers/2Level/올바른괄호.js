function correctParenthesis(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const currString = s[i];
    if (stack.length !== 0) {
      const prevString = stack[stack.length - 1];
      if (prevString === "(" && currString === ")") {
        stack.pop();
      } else {
        stack.push(currString);
      }
    } else {
      stack.push(currString);
    }
  }
  return stack.length === 0 ? true : false;
}

function main() {
  const sArray = ["()()", "(())()", ")()(", "(()("];
  sArray.forEach((s) => {
    console.log(correctParenthesis(s));
  });
}

main();
