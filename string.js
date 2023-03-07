const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite a string: ', (string) => {
  let stringOriginal = string;
  let stringInvertida = "";
  
  for(let i = stringOriginal.length - 1; i >= 0; i--){
    stringInvertida += stringOriginal[i];
  }
  
  console.log("String original: " + stringOriginal);
  console.log("String invertida: " + stringInvertida);

  readline.close();
})


