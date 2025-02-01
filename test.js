const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter grade (0-100): ", function (input) {
  let grade = Number(input);

  if (grade > 80) {
    console.log("A");
  } else if (grade > 60) {
    console.log("B");
  } else if (grade > 50) {
    console.log("C");
  } else {
    console.log("F");
  }

  rl.close();
});
