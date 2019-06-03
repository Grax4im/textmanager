let botao = document.querySelector('form')
let titulo = document.querySelector('#titulo')
let texto = document.querySelector('#texto')
let data = document.querySelector('#data')

let titulocard = document.querySelector('#titulocard')
let textocard = document.querySelector('#textocard')
let datacard = document.querySelector('#datacard')

botao.addEventListener('submit',function (e) {
    //titulo limitado a 40 caracteres
    titulo = titulo.value.substring(0,39)
    titulocard.innerHTML = titulo
    //texto limitado a 40 palavras
    texto = texto.value.split(" ").splice(0,39).join(" ")
    textocard.innerHTML = texto
    //data formatada
    data = {'ano': data.value.substring(0,4), 
    'mes': data.value.substring(5,7), 
    'dia':data.value.substring(8,10)
    };
    data.mes = mesExtenso(data.mes);
    data.show = data.dia + ' de ' + data.mes + ' de ' + data.ano 
    datacard.innerHTML = data.show 

    botao.style.display= "none"
    
    e.preventDefault()
} ) 

function mesExtenso(mesnumero) {
    switch(mesnumero){
        case '01':
            return 'janeiro';
            break;
        case '02':
            return 'fevereiro';
            break;
        case '03':
            return 'março';
            break;
        case '04':
            return 'abril';
            break;
        case '05':
            return 'maio';
            break;
        case '06':
            return 'junho';
            break;
        case '07':
            return 'julho';
            break;
        case '08':
            return 'agosto';
            break;
        case '09':
            return 'setembro';
            break;
        case '10':
            return 'outubro';
            break;
        case '11':
            return 'novembro';
            break;
        case '12':
            return 'dezembro';
            break;            
    }
}