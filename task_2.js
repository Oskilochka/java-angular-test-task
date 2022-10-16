function sumOfDigit_first(num) {
  if (!Number.isInteger(num)) {
    throw new Error("You should pass an integer number")
  } else {
    let sum = 0;
    // to prevent errors if num is negative number
    let positiveNum = Math.abs(num)
    while (positiveNum > 0) {
      sum += positiveNum % 10;
      positiveNum = Math.floor(positiveNum / 10);
    }
    return sum
  }
}

function sumOfDigit_second(num) {
  if (!Number.isInteger(num)) {
    throw new Error("You should pass an integer number")
  } else {
    return String(Math.abs(num)).split("").map(Number).reduce((acc, cur) => acc + cur, 0)
  }
}

function sumOfDigit_third(num) {
  if (!Number.isInteger(num)) {
    throw new Error("You should pass an integer number")
  } else {
    let sum = 0
    let stringNum = Math.abs(num).toString()
    for (let i = 0; i < stringNum.length; i++) {
      sum += Number(stringNum.charAt(i))
    }
    return sum
  }
}

console.log("First approach: ", sumOfDigit_first(335))
console.log("Second approach: ", sumOfDigit_second(-335))
console.log("Third approach: ", sumOfDigit_third(-335))