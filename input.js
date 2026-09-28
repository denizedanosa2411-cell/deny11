function inputNumbers(rl) {
  return new Promise((resolve) => {
    rl.question('Введите первое число: ', (a) => {
      rl.question('Введите второе число: ', (b) => {
        resolve([Number(a), Number(b)]);
      });
    });
  });
}
module.exports = { inputNumbers };
