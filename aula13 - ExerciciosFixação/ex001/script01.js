function carregar(){
var horario = new Date();
var horaatual= horario.getHours();
var minutoatual= horario.getMinutes();
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('diaimg');

hora = horaatual + ":"+ minutoatual;

msg.innerHTML=`Horario Atual é ${hora} horas!`;

if(horaatual <=12 && horaatual >=0 ){
    window.document.body.style.backgroundColor='#e3cb9b'
    img.src="../../img/manha.png"
}else if(horaatual >=12 && horaatual  <= 17){   
    window.document.body.style.backgroundColor='#d6773b'
    img.src="../../img/tarde.png"
}else if(horaatual >=18){
    window.document.body.style.backgroundColor='#141519'
    img.src="../../img/noite.png"

}
}