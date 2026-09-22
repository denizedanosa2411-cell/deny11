const React = require('react');
const { render, Box, Text, useInput, useApp } = require('ink');

const App = () => {
  const { exit } = useApp();
  const [menu, setMenu] = React.useState('main');
  const [num1, setNum1] = React.useState('');
  const [num2, setNum2] = React.useState('');
  const [inputBuffer, setInputBuffer] = React.useState('');
  const [result, setResult] = React.useState('');
  const [activeField, setActiveField] = React.useState(0);

  useInput((input, key) => {
    if (key.escape) {
      exit();
    }

    if (menu === 'main') {
      if (input === '1') setMenu('input');
      if (input === '2') { setResult(`Сумма: ${Number(num1) + Number(num2)}`); setMenu('result'); }
      if (input === '3') { setResult(`Разность: ${Number(num1) - Number(num2)}`); setMenu('result'); }
      if (input === '4') {
        if (Number(num2) === 0) setResult('Ошибка: деление на ноль');
        else setResult(`Частное: ${Number(num1) / Number(num2)}`);
        setMenu('result');
      }
      if (input === '5') { setResult(`Степень: ${Math.pow(Number(num1), Number(num2))}`); setMenu('result'); }
      if (input === '0') exit();
    }
    else if (menu === 'input') {
      if (key.return) {
        if (activeField === 0) {
          setNum1(inputBuffer);
          setInputBuffer('');
          setActiveField(1);
        } else {
          setNum2(inputBuffer);
          setInputBuffer('');
          setActiveField(0);
          setMenu('main');
        }
      } else if (key.backspace || key.delete) {
        setInputBuffer(inputBuffer.slice(0, -1));
      } else if (!key.ctrl && !key.meta && input) {
        setInputBuffer(inputBuffer + input);
      }
    }
    else if (menu === 'result') {
      if (key.return) setMenu('main');
    }
  });

  if (menu === 'input') {
    return (
      <Box flexDirection="column" padding={1}>
        <Text color="green">Введите два числа:</Text>
        <Box marginTop={1}>
          <Text color={activeField === 0 ? 'yellow' : 'white'}>
            Число 1: {activeField === 0 ? inputBuffer : num1}
          </Text>
        </Box>
        <Box>
          <Text color={activeField === 1 ? 'yellow' : 'white'}>
            Число 2: {activeField === 1 ? inputBuffer : num2}
          </Text>
        </Box>
        <Box marginTop={1}>
          <Text dimColor>Enter — подтвердить, Esc — выход</Text>
        </Box>
      </Box>
    );
  }

  if (menu === 'result') {
    return (
      <Box flexDirection="column" padding={1}>
        <Text color="green">Результат:</Text>
        <Box marginTop={1}>
          <Text color="cyan">{result}</Text>
        </Box>
        <Box marginTop={1}>
          <Text dimColor>Нажмите Enter для возврата в меню</Text>
        </Box>
      </Box>
    );
  }

  return (
    <Box flexDirection="column" padding={1}>
      <Text color="green" bold>=== КОНСОЛЬНОЕ МЕНЮ (React + Ink) ===</Text>
      <Box marginTop={1} flexDirection="column">
        <Text>1. Ввести два числа {num1 && num2 ? `(текущие: ${num1}, ${num2})` : ''}</Text>
        <Text>2. Выполнить сложение</Text>
        <Text>3. Выполнить вычитание</Text>
        <Text>4. Выполнить деление</Text>
        <Text>5. Возвести число в степень</Text>
        <Text>0. Выход</Text>
      </Box>
      <Box marginTop={1}>
        <Text color="yellow">Выберите пункт (нажмите цифру):</Text>
      </Box>
    </Box>
  );
};

render(React.createElement(App));
