// const n = [1, 2, 3, 4, 5];
// const square = n.map((num) => num * num);
// console.log(square);

// const n = [1, 2, 3, 4, 5];
// const even = n.filter((num) => num % 2 === 0);
// console.log(even);

const numberList = [1, 3, 6, 9, 11, 20, 25];

const processNumbers = (numbers) => {
  return numbers.filter((num) => num % 3 === 0).map((num) => Math.pow(num, 3));
};

console.log(processNumbers(numberList));
