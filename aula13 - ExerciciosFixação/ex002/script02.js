function verificar(){
    var data = new Date();
    var ano= data.getFullYear(); 
    var fano = document.getElementById('txtano');
    var res= document.querySelector('div#res');
  
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("Digite um valor valido!");
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano-Number(fano.value) 
        var genero="";
        var img = document.createElement('img');
        img.setAttribute('id','foto');
    if(fsex[0].checked){
        genero="Homem"
        if(idade >=0 && idade <=10){
            img.setAttribute('src','../../img/bbH.png');
        } else if(idade >=11 && idade <18){
            img.setAttribute('src','../../img/adoleH.png');
        }else if(idade >=18 && idade <60){
            img.setAttribute('src','../../img/adulH.png');
        }else if(idade >=60 ){
            img.setAttribute('src','../../img/idoso.png');
        }
    }else{
        genero="Mulher"
        if(idade >=0 && idade <=10){
            img.setAttribute('src','../../img/bbM.png');
        } else if(idade >=11 && idade <18){
            img.setAttribute('src','../../img/adoleM.png');
        }else if(idade >=18 && idade <60){
            img.setAttribute('src','../../img/adulM.png');
        }else if(idade >=60 ){
            img.setAttribute('src','../../img/idosa.png');
        }
    }
    res.style.textAlign ='center';
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br/>`
    res.appendChild(img);
    }
}