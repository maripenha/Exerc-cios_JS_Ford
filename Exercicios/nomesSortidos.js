// Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armazene os nomes
// lidos em um vetor. Após isto, o algoritmo deve permitir a leitura de mais 1 nome qualquer de
// pessoa (para efetuar uma busca) e depois escrever a mensagem ACHEI, se o nome estiver
// entre os 10 nomes lidos anteriormente (guardados no vetor), ou NÃO ACHEI caso contrário.

let nomes = []
let quantosNomes = parseInt(prompt("Quantos nomes deseja adicionar?"))
for (let i =0; i < quantosNomes;i++){
    let nome = prompt ("Insira seu nome:")
    nomes.push (nome)
}
let procurar = prompt("Chute algum nome")
if (nomes[length] == procurar){
    alert(`Você acertou um dos nomes. A lista contém os seguintes nomes: ${nomes} e você acertou com o nome ${procurar}`)
}else{
    alert("Você errou o nome tente novamente.")
}
alert(`Os nomes inseridos foram: ${nomes}.`)