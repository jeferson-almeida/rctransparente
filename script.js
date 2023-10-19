const taxaImpostoPadrao = 0.6
const taxaImposto0 = 0
let taxaImposto
const taxaICMS = 0.17
let valor_sem_impostos
let valor_com_impostos

fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.10813/dados?formato=json').then(response => response.json()).then(data => {
    const dolar = data[data.length - 1].valor
    document.getElementById('dolar-hoje').textContent = parseFloat(dolar).toFixed(2)
}).catch(error => console.error(error))

const calcula_valor_com_impostos = () => {
    const dolar = document.getElementById('dolar-hoje').textContent
    valor_sem_impostos = document.getElementById("valor_sem_impostos").value
    if(valor_sem_impostos <= 50 * dolar){
        taxaImposto = taxaImposto0
    } else {
        taxaImposto = taxaImpostoPadrao
    }
    valor_com_impostos = valor_sem_impostos * (1 + taxaImposto) / (1 - taxaICMS)
    document.getElementById("valor_com_impostos").value = valor_com_impostos.toFixed(2)
    document.getElementById("imposto").value = (valor_sem_impostos * taxaImposto).toFixed(2)
    document.getElementById("icms").value = (valor_com_impostos * taxaICMS).toFixed(2)

    if(valor_sem_impostos == ""){
        document.getElementById("valor_com_impostos").value = ""
    }
}

const calcula_valor_sem_impostos = () => {
    const dolar = document.getElementById('dolar-hoje').textContent
    valor_com_impostos = document.getElementById("valor_com_impostos").value
    let icms = valor_com_impostos * taxaICMS
    valor_sem_impostos = valor_com_impostos * (1 - taxaICMS)
    if(valor_sem_impostos > 50 * dolar * (1 + taxaImposto)){
        taxaImposto = taxaImpostoPadrao
    } else {
        taxaImposto = taxaImposto0
    }
    valor_sem_impostos /= 1 + taxaImposto
    document.getElementById("valor_sem_impostos").value = valor_sem_impostos.toFixed(2)
    document.getElementById("imposto").value = (valor_sem_impostos * taxaImposto).toFixed(2)
    document.getElementById("icms").value = icms.toFixed(2)

    if(valor_com_impostos == ""){
        document.getElementById("valor_sem_impostos").value = ""
    }
}