alert('Boas Vindas ao Jogo do Número Secreto!');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
//let numeroSecreto = 29;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// let chute = prompt('Escolha um número:');

//enquanto chuete não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 a ${numeroMaximo}:`);
    //se chute for igual ao número secreto
    if (chute == numeroSecreto) {
        //parar de perguntar
        break;
        //alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //alert('Você errou!:-(');
    }
    //tentativas = tentativas + 1;
    tentativas++;
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
//if (tentativas > 1) {
//    alert (`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
//} else {
//    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);    
//}



