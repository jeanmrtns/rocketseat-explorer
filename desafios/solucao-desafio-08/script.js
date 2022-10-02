const number1 = Number(prompt("Insira o primeiro número: "));
const number2 = Number(prompt("Insira o segundo número: "));

const sum = number1 + number2;
const sub = number1 - number2;
const mult = number1 * number2;
const div = number1 / number2;
const rest = number1 % number2;

alert(`
  Os números informados são ${number1 === number2 ? 'iguais' : 'diferentes'}.
  Número 1 = ${number1}
  Número 2 = ${number2}  
`)

alert(`
  A soma de ${number1} e ${number2} = ${sum}.
  O resultado é um número ${sum % 2 === 0 ? 'par' : 'ímpar'}.
`);
alert(`A subtração de ${number1} e ${number2} = ${sub}`);
alert(`A multiplicação de ${number1} e ${number2} = ${mult}`);
alert(`A divisão de ${number1} e ${number2} = ${div.toFixed(2)}`);
alert(`O resto da divisão entre ${number1} e ${number2} = ${rest}`);