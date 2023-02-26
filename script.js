function calculo(){ 
    let desc = window.document.getElementById('desc')
    let preco = window.document.getElementById('preco')
    let valor_desconto = window.document.getElementById('valor_desconto')
    let valor_pagar = window.document.getElementById('valor_pagar')
    
    desc.style.borderColor = "#ffcae1"
    preco.style.borderColor = "#ffcae1"
   

    preco = parseFloat(preco.value.toString().replace(',','.'))
    desc = parseFloat(desc.value.toString().replace(',','.'))




    let desconto = (desc/100) * preco
    if(preco < 0 || isNaN(preco)){
        let preco = window.document.getElementById('preco')
        preco.style.borderColor = "#FF0F0F"
        window.alert('Preencha o campo Preço corretamente!')
    }else if(desc < 0 || isNaN(desc)){
        let desc = window.document.getElementById('desc')
        desc.style.borderColor = "#FF0F0F"
        window.alert('Preencha o campo Desc % corretamente!')
    }else{
        valor_desconto.innerHTML = `O valor de desconto é de: R$ ${desconto.toFixed(2).replace('.',',')}`
        valor_pagar.innerHTML = `O valor total a ser pago é de: R$ ${(preco - desconto).toFixed(2).replace('.',',')}`
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
    preco_real.style.borderColor = "#ffcae1"
    preco_final.style.borderColor = "#ffcae1"

    preco_real = parseFloat(preco_real.value.toString().replace(',','.'))
    preco_final = parseFloat(preco_final.value.toString().replace(',','.'))
    

    let desconto = 100 - (100 * preco_final)/ preco_real


    let resultado_2 = window.document.getElementById('resultado_2')
    

    if( preco_real < 0 || isNaN(preco_real)){
    window.alert('Preencha campo corretamente!')
    let preco_real = window.document.getElementById('preco_real')
    resultado_2.innerHTML =`O desconto a ser aplicado é de:`
    preco_real.style.borderColor = "#FF0F0F"
    }else if(preco_final < 0 || isNaN(preco_final)){
    window.alert('Preencha o campo corretamente!')
    let preco_final = window.document.getElementById('preco_final')
    resultado_2.innerHTML =`O desconto a ser aplicado é de:`
    preco_final.style.borderColor = "#FF0F0F"

    }else{
        let desconto = (100 - (100 * preco_final)/ preco_real)
        
        resultado_2.innerHTML =`O desconto a ser aplicado é de: ${desconto.toFixed(2).replace('.',',')}%`
        
    }
    }


function limpar2(){
    let resultado_2 = window.document.getElementById('resultado_2')
    resultado_2.innerHTML = 'O desconto a ser aplicado é de:'
    preco_final.style.borderColor = "#ffcae1"
    preco_real.style.borderColor = "#ffcae1"
}
