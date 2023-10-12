const calcula_valor_com_impostos = () => {
    let valor_sem_impostos = document.getElementById("valor_sem_impostos").value
    let valor_com_impostos = valor_sem_impostos * 1.6 / 0.83
    document.getElementById("valor_com_impostos").value = valor_com_impostos.toFixed(2)

    if(valor_sem_impostos == ""){
        document.getElementById("valor_com_impostos").value = ""
    }
}

const calcula_valor_sem_impostos = () => {
    let valor_com_impostos = document.getElementById("valor_com_impostos").value
    let valor_sem_impostos = valor_com_impostos * 0.83 / 1.6
    document.getElementById("valor_sem_impostos").value = valor_sem_impostos.toFixed(2)

    if(valor_com_impostos == ""){
        document.getElementById("valor_sem_impostos").value = ""
    }
}