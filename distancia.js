const distanciaCidades = 100; 
const velocidadeCarro = 110; 
const velocidadeCaminhao = 80;
const tempo = distanciaCidades / (velocidadeCarro + velocidadeCaminhao); 
const distanciaCarro = velocidadeCarro * tempo; 
const distanciaCaminhao = velocidadeCaminhao * (tempo + 0.083); 

if (distanciaCarro < distanciaCaminhao) {
  console.log("O carro estará mais próximo de Ribeirão Preto.");
} else {
  console.log("O caminhão estará mais próximo de Ribeirão Preto.");
}

// Considerando que o encontro entre o carro e o caminhão foi no meio do trajeto, podemos calcular o tempo de encontro usando a formúla tempo = distanciaCidades / (velocidadeCarro + velocidadeCaminhao), com essas informações podemos calcular a distância percorrida por cada veículo até o ponto de encontro e comparar para ver qual estará mais próximo. 
// Na distância do caminhão foi acrescentando o tempo de 5 minutos(0.083 horas) ao tempo da viagem.

