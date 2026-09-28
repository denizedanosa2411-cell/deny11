const readline = require('readline');
const { inputNumbers } = require('./input');
const { add } = require('./add');
const { subtract } = require('./subtract');
const { divide } = require('./divide');
const { power } = require('./power');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
let a = 0, b = 0;

function menu() {
  console.log('\n1. Ввести два числа');
  console.log('2. Сложение');
  console.log('3. Вычитание');
  console.log('4. Деление');
  console.log('5. Возведение в степень');
  console.log('0. Выход');
  rl.question('Выберите пункт: ', async (c) => {
    if (c === '1') [a, b] = await inputNumbers(rl);
    else if (c === '2') console.log('Результат:', add(a, b));
    else if (c === '3') console.log('Результат:', subtract(a, b));
    else if (c === '4') console.log('Результат:', divide(a, b));
    else if (c === '5') console.log('Результат:', power(a, b));
    else if (c === '0') return rl.close();
    else console.log('Неверный пункт');
    menu();
  });
}
menu();