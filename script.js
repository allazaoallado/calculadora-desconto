function calculo(){ 
    let desc = window.document.getElementById('desc')
    let preco = window.document.getElementById('preco')


    let desconto = Number(desc.value.replace(',','.'))/100 * Number(preco.value.replace(',','.'))

    let valor_final = Number(preco.value.replace(',','.')) - desconto

    let valor_desconto = window.document.getElementById('valor_desconto')
    let valor_pagar = window.document.getElementById('valor_pagar')

    desc.style.borderColor = "#ffcae1"
    preco.style.borderColor = "#ffcae1"


    valor_desconto.innerHTML = `O valor de desconto é de: R$ ${desconto.toFixed(2).replace('.',',')}`
    valor_pagar.innerHTML = `O valor total a ser pago é de: R$ ${valor_final.toFixed(2).replace('.',',')}`
    if(desc.value == 0 && preco.value == 0){
        desc.style.borderColor = "#FF0F0F"
        preco.style.borderColor = "#FF0F0F"
        window.alert('Preencha os campos!')
        valor_desconto.innerHTML = `O valor de desconto é de:`
        valor_pagar.innerHTML = `O valor total a ser pago é de:`
    }else if(preco.value <= 0 || isNaN(preco.value)){
        window.alert('Insira um preço válido válido')
        valor_desconto.innerHTML = `O valor de desconto é de:`
        valor_pagar.innerHTML = `O valor total a ser pago é de:`
        preco.style.borderColor = "#FF0F0F"
    }else if(desc.value <= 0 || isNaN(desc.value)){
        window.alert('Insira um preço válido')
        valor_desconto.innerHTML = `O valor de desconto é de:`
        valor_pagar.innerHTML = `O valor total a ser pago é de:`
        desc.style.borderColor = "#FF0F0F"
    }

}

function limpar(){
    let valor_desconto = window.document.getElementById('valor_desconto')
    let valor_pagar = window.document.getElementById('valor_pagar')

    valor_desconto.innerHTML = `O valor de desconto é de:`
    valor_pagar.innerHTML = `O valor total a ser pago é de:`
    desc.style.borderColor = "#ffcae1"
    preco.style.borderColor = "#ffcae1"
}


function calculo2(){
    
    let preco_real = window.document.getElementById('preco_real')
    let preco_final = window.document.getElementById('preco_final')

    let desconto = 100 - ((100 * Number(preco_final.value.replace(',','.')))/ Number(preco_real.value.replace(',','.')))


    let resultado_2 = window.document.getElementById('resultado_2')
    resultado_2.innerHTML =`O desconto a ser aplicado é de: ${desconto}%`
    preco_real.style.borderColor = "#ffcae1"
    preco_final.style.borderColor = "#ffcae1"

    if(preco_final.value == 0 && preco_real.value == 0 ){
    window.alert('Preencha os campos!')
    resultado_2.innerHTML =`O desconto a ser aplicado é de:`
    preco_real.style.borderColor = "#FF0F0F"
    preco_final.style.borderColor = "#FF0F0F"
    }else if(isNaN(preco_real.value) || preco_real.value < 0){
    window.alert('Insira um preço válido')
    resultado_2.innerHTML =`O desconto a ser aplicado é de:`
    preco_real.style.borderColor = "#FF0F0F"
    }else if(isNaN(preco_final.value) || preco_final.value < 0){
    window.alert('Insira um preço válido')
    resultado_2.innerHTML =`O desconto a ser aplicado é de:`
    preco_final.style.borderColor = "#FF0F0F"
    }else if(isNaN(desconto)){
        let resultado_2 = window.document.getElementById('resultado_2')
        resultado_2.innerHTML =`O desconto a ser aplicado é de: 0,0%`
    }

}

function limpar2(){
    let resultado_2 = window.document.getElementById('resultado_2')
    resultado_2.innerHTML = 'O desconto a ser aplicado é de:'
    preco_final.style.borderColor = "#ffcae1"
    preco_real.style.borderColor = "#ffcae1"
}
