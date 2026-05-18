function calcularBanco(){
    
    alert('teste')
    let saldo = Number(prompt('Digite o saldo inicial'))
    let deposito = Number(prompt('Digite o valor do deposito'))
    let saque = Number(prompt('Digite o valor do saque'))
    let taxa = Number(prompt('Digite a taxa de juros'))
    let anos = Number(prompt('Digite os anos do investimento'))

    // // Saldo total da conta
    // saldo = saldo + deposito

    // // Saque
    // saldo = saldo - saque

    // // Rendimento
    // let rendimento = saldo * (taxa / 100)

    // // Meta de saldo
    // let metadeSaldo = saldo / 2

    // // Resto da divisão
    // let saldo_par = saldo % 2 == 0

    // // ✅ Juros compostos calculado
    // let jurosCompostos = saldo * (1 + taxa / 100) ** anos

    // // ✅ Sinal de igual adicionado
    // document.getElementById('resultado').innerHTML = `
    //     <strong>Saldo:</strong>
    //     R$ ${saldo.toFixed(2)}<br>
        
    //     <strong>Rendimento:</strong>
    //     R$ ${rendimento.toFixed(2)}<br>

    //     <strong>Metade do saldo:</strong>
    //     R$ ${metadeSaldo.toFixed(2)} <br>

    //     <strong>Saldo é:</strong>
    //     ${saldo_par ? 'numero par' : 'numero impar'} <br>

    //     <strong>Juros compostos:</strong>
    //     R$ ${jurosCompostos.toFixed(2)} <br>`

    
}

function limparCaixa(){
    document.getElementById('resultado').innerHTML = ``
}