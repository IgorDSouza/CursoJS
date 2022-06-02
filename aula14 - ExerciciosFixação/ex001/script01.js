function contar() {
    let ini = window.document.getElementById('txtinicio')
    let fim = window.document.getElementById('txtfim')
    let passo = window.document.getElementById('txtpasso')
    let res = window.document.getElementById('res')
    

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Dados invalidos')
        res.innerHTML = ` Impossivel Contar`
    } 
    else {
    
        res.innerHTML = 'Contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p==0){
            p=1
            window.alert('Passo invalido, Considerando passo = 1!')
        }
        if(i<f){
          for(let c = i ; c <= f ; c += p){
            // contagem crescente
            res.innerHTML += ` ${c}  \u{1F449} 	`
            }  
        }else if(i>f){
            for(let c = i ; c >= f ; c -= p){
            // contagem decrescente
                res.innerHTML += ` ${c}  \u{1F449}`
                }  
        }

        res.innerHTML += `\u{1F3c1}`
        
}
}