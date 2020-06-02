let arrayAnimation = ['|', '/', '-', '\\', '|', '/', '-', '\n', '\n'];
let delay = 100;

for (let frame of arrayAnimation) {
  setTimeout(() => {
    process.stdout.write(`\r${frame}   `);
  }, delay);
  delay += 200;
}
