function calcular(){
    var txtnum = window.document.getElementById('txtnum')
    var selec= window.document.getElementById('select')
    var num = Number(txtnum.value)
    if(txtnum.value.length==0){
        window.alert('Digite um numero!')
    }else{
    selec.innerHTML=""
    for(var i=0; i<=10; i++){

        var item = document.createElement('option')
        item.text =`${num} x ${i} = ${num*i}`
        item.value=`tab${i}`

        selec.appendChild(item)

    }
    }
}