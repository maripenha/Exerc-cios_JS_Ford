// Desenvolva um programa que recebe do usuário, o placar de um jogo de futebol (os gols de cada time) e informa se o resultado foi um empate, se a vitória foi do primeiro time ou do segundo time.


//entrada de dados
// = informar os dois times de futebol
// = informar o placar do jogo


//processamento
// = realizar a validação através das estruturas condicionais
// = verificar se os times ganharam, perderam ou empataram

//saida
// = informar o resultado do jogo de futebol

const timeUm = prompt("Insira o nome do time")
const timeDois = prompt("Insira o nome do time")
const golUm = parseInt(prompt(`Quantos gols ${timeUm} fez?`))
const golDois = parseInt(prompt(`Quantos gols ${timeDois} fez?`))

if(golUm > golDois){
    alert(`${timeUm} ganhou do ${timeDois}`)
}else if(golDois > golUm){
    alert(`${timeDois} ganhou do ${timeUm}`)
}else if(golUm == golDois){
    alert(`${timeUm} empatou com ${timeDois}`)
}
