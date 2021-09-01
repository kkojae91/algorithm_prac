function getMaxNumber(numbers) {
  const maxLength = Math.max(...numbers).toString().length;
  numbers = numbers.map(num => String(num)).sort((a, b) => {
    const newA = a.repeat(maxLength).slice(0, maxLength);
    const newB = b.repeat(maxLength).slice(0, maxLength);
    return newB - newA;
  });

  return numbers.join("")[0] === "0" ? "0" : numbers.join("");
}


function getMaxNumber2(numbers) {
  numbers = numbers.map(num => String(num)).sort((a, b) => {
    const newA = a + b;
    const newB = b + a;
    return newB - newA;
  });
  return numbers.join("")[0] === "0" ? "0" : numbers.join("");
}


function main() {
  const numbersArray = [[6, 10, 2], [3, 30, 34, 5, 9], [0, 0, 0]];
  for (const numbers of numbersArray) {
    // console.log(getMaxNumber(numbers));
    console.log(getMaxNumber2(numbers));
  }
}

main();