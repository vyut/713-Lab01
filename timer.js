waitAndPrint = (message, delay) => {
  setTimeout(() => {
    console.log(message);
  }, delay);
};

// Example usage:
waitAndPrint("Hello, World!", 2000);
