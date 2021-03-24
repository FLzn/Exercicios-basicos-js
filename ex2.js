let contas = {
    ganhos: [600, 600,2000, 8000],
    despesas: [1500,650,2100,10000]
}

function contaGanhos(ganhos){
    let contganhos = 0
    for(let i = 0; i < ganhos.length; i++){
        contganhos += ganhos[i]
    }
    return contganhos
}

let ganhos = contaGanhos(contas.ganhos)
console.log(ganhos)

function contaGastos(gastos){
    let contgastos = 0
    for(let i = 0; i < gastos.length; i++){
        contgastos += gastos[i]
    }
    return contgastos
}

let gastos = contaGastos(contas.despesas)
console.log(gastos)

function Total(ganhos, gastos){
    return ganhos > gastos? `A família está com o saldo positivo de: ${ganhos - gastos}`: `A família está com o saldo negativo de: ${ganhos - gastos}`
}

let total = Total(ganhos, gastos)
console.log(total)