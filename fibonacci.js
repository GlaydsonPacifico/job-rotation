const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function verificarFibonacci(num) {
  let a = 0;
  let b = 1;

  while (b < num) { 
    const temp = b;
    b = a + b;
    a = temp;
  }

  if ( b === num) {
    return true;
  } else {
return false;
  }
}

function sequenciaFibonacci(num) {
  let a = 0;
  let b = 1;
  const fibonacci = [0,1];

  while (b <= num) {
    const temp = b;
    b = a + b;
    a = temp;
    fibonacci.push(b);
  }
  if(verificarFibonacci(num)) {
    console.log(`O número ${num} pertence a sequência fibonacci`);
  } else {
    console.log(`O número ${num} não pertence a sequência fibonacci`);
  }
}

readline.question('Digite um número: ', (num) => {
  const numero = parseInt(num);
  sequenciaFibonacci(numero);
  readline.close();
})