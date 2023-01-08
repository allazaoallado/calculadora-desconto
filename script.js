function calculo(){ 
    let desc = window.document.getElementById('desc')
    let preco = window.document.getElementById('preco')


    let desconto = Number(desc.value.replace(',','.'))/100 * Number(preco.value.replace(',','.'))

    let valor_final = Number(preco.value.replace(',','.')) - desconto

    let valor_desconto = window.document.getElementById('valor_desconto')
    let valor_pagar = window.document.getElementById('valor_pagar')



    valor_desconto.innerHTML = `O valor de desconto é de: R$ ${desconto.toFixed(2).replace('.',',')}`
    valor_pagar.innerHTML = `O valor total a ser pago é de: R$ ${valor_final.toFixed(2).replace('.',',')}`
    if(desc.value < 0 || isNaN(desc.value)){
        window.alert('Insira um desconto válido válido')
        valor_desconto.innerHTML = `O valor de desconto é de:`
        valor_pagar.innerHTML = `O valor total a ser pago é de:`
        desc.style.borderColor = "#FF0F0F"

    }else if(preco.value < 0 || isNaN(preco.value)){
        window.alert('Insira um preço válido')
        valor_desconto.innerHTML = `O valor de desconto é de:`
        valor_pagar.innerHTML = `O valor total a ser pago é de:`
        preco.style.borderColor = "#FF0F0F"
    }

}

function limpar(){
    let valor_desconto = window.document.getElementById('valor_desconto')
    let valor_pagar = window.document.getElementById('valor_pagar')

    valor_desconto.innerHTML = `O valor de desconto é de:`
    valor_pagar.innerHTML = `O valor total a ser pago é de:`
}

