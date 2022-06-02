var txtnum= window.document.getElementById('txtnum')
    var selec = window.document.getElementById('selec')
    var num = [] 
    var res = window.document.getElementById('res')
    function adicionar() {
    

    if(Number(txtnum.value) <= 100 && Number(txtnum.value) >= 1 && num.indexOf(Number(txtnum.value)) == -1 )  {
       var opt = document.createElement('option')
        opt.text=` Valor ${txtnum.value} Adicionado` 
        selec.appendChild(opt) 
    } else {
         window.alert("Numero inexistente,invalido ou já digitado")
    }
    num.push(Number(txtnum.value))
    txtnum.value=""
    txtnum.focus()
}
function finalizar(){

    if(num.length == 0){
        window.alert("Insira numeros antes de finalizar!")
    }else{

    res.innerHTML=" "
    res.innerHTML+=`A quantidade de numeros digitados foi ${num.length} </br>`
    var max = num[0]
    for(var i in num){
        if(num[i] > max){
             max = num[i];
        }
    }
    res.innerHTML+=`O maior numero digitado ${max} </br>`

    var min=num[0]
    for(var i in num){
        if(num[i] < min){
             min = num[i];
        }
    }
    res.innerHTML+=`O menor numero digitado ${min} </br>`

    var soma = 0
    for(var i in num){
        soma+=num[i]
    }
    res.innerHTML+=`A soma dos valores ${soma} </br>`
    var media = soma/num.length

    res.innerHTML += ` A media dos numeros é ${media.toFixed(2)}`
    }
}