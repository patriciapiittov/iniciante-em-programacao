let Nome = prompt("Qual é o seu nome?");
console.log(Nome);
alert(`Seja bem vindo(a) ao jogo do número secreto, ${Nome}`);
let numeroSecreto = 22;
let chute = prompt("Qual é o número secreto? (Escolha um número entre 1 e 100)");
console.log(numeroSecreto);
if(chute <1|| chute >100)
    {alert("Você escolheu um número inválido");
        console.log ("Usuário digitou um número inválido");
} else if (chute == numeroSecreto)
{alert(`Parabéns ${Nome}, você descobriu o número secreto!`);
} else
    {alert("Que pena, você errou");}
