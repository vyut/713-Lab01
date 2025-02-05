let counter = 1;

const waitAndPrint = (message, delay, stopAfter) => {
  const intervalId = setInterval(() => {
    console.log(`${message} ${"world ".repeat(counter)}`);
    counter++;
  }, delay);

  setTimeout(() => {
    clearInterval(intervalId);
    console.log("Stopped printing.");
  }, stopAfter);
};

waitAndPrint("hello", 3000, 15000);
