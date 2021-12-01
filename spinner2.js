const fidgetSpin = `\r|\r/\r-\r\\\r|\n`
let delay = 0;
for (const char of fidgetSpin) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay += 100);
};
