// Uma loja fornece 10% de desconto para funcionários e 5% de desconto para clientes vips. 
// Faça um programa que calcule o valor total a ser pago por uma pessoa. O programa deverá ler o
// valor total da compra efetuada e um código que identifique se o comprador é um cliente comum (1), funcionário (2) ou vip (3).





//entrada de dados
// = determinar se o cliente é 1- cliente, 2- funcionário e 3-vip
// = informar o total da compra 

//processamento de dados
// = usar a estrutura switch case para determinar se é cliente, funcionário ou vip

//saída de dados
// = se for cliente não haverá desconto
// = se for funcionário terá 10% de desconto
// = se for vip terá 5% de desconto

let valorCompra = parseFloat(prompt("Insira o valor da compra"))
let tipoCliente = parseInt(prompt("Que tipo de cliente você é?\n 1- Cliente 2- Funcionário 3- vip"));

switch(tipoCliente){
    case 1:
        alert("Você é um cliente então não possui desconto.")
        alert(`O valor total da sua compra é R$ ${valorCompra}`)

        break 

    case 2:
    alert("Você é um funcionário então possui 10% de desconto.")
    Desconto = (10 / 100 * valorCompra)
    let funcionario = valorCompra - Desconto
    alert(`O valor total da sua compra é R$ ${funcionario} e seu desconto é de R$ ${Desconto}.`)

        break

    case 3:
    alert("Você é vip então possui 5% de desconto.")
    Desconto = (5 / 100 * valorCompra)
    let vip = valorCompra - Desconto
    alert(`O valor total da sua compra é R$ ${vip} e seu desconto é de R$ ${Desconto}.`)

    break

    default:
    alert("Erro ao executar o código, tente novamente.")

    break
}
