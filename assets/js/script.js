// ================= BASE ===========
const main = document.getElementById('main')
const placarTag = document.getElementById("placar");
const buttonEncerrar = document.getElementById("encerrar");
// ==============
let click01 = null;
let click02 = null;
let encontrados = 0;
let placar = 0;
//================
let seconds = 0
let minutes = 0
let interval;
const relogio = document.getElementById('time')
//============

renderizarCartas();

buttonEncerrar.addEventListener("click", () => {
    window.location.assign("./index.html");
  });
// ==================== Preencher o layout de cartas =========
function renderizarCartas(){

    const arrDuplicado = [...personagens, ...personagens]
    const embaralhados = shuffleArray(arrDuplicado)
    
    for(let i = 0; i < embaralhados.length; i ++){
        let carta = document.createElement("img")
        
        carta.id = embaralhados[i].id

        carta.addEventListener("click", clickCarta)

        carta.src = "./assets/img/QuestionBlock.png" 

        main.appendChild(carta)
        
    }
}

// ==================== Identificando click nas cartas =========

function clickCarta (event){
    let imgClicada = event.target
    let idClicado = event.target.id

    let personagemClicado = personagens.find(
        (elemento) => elemento.id == idClicado
    )
    
    imgClicada.src = personagemClicado.img

    if (click01 == null){
        click01 = imgClicada
    } else {
        click02 = imgClicada
        testePar()
    }
}

// ==================== Verificando se é Par correto e alterando placar =========

function testePar (){
    if (click01.id == click02.id){
        encontrados++
        click01 = null;
        click02 = null;

        if (encontrados == 6)
        {
            placar++;
            placarTag.innerHTML = placar;
            encontrados = 0;
            clearInterval(interval)

            setTimeout(() => {
            main.innerHTML = "";
            renderizarCartas();
            main.addEventListener("click", click)
            }, 2000);
        }
    }
    else {
        setTimeout(() => {
            click01.src = "./assets/img/QuestionBlock.png";
            click02.src = "./assets/img/QuestionBlock.png";
            click01 = null;
            click02 = null;
          }, 500);
    }
}

//======================= Contador ==========================
main.addEventListener("click" , click)

function click(e){
    time()
    interval = setInterval(time, 1000)
    main.removeEventListener("click", click)
}
function twoDigits (digit){
    if (digit<10){
        return ('0'+digit)
    }else {
        return (digit)
    }
}
function time(){
    seconds++
    if(seconds == 60) {
        minutes++
        seconds = 0
    }
    relogio.innerText = twoDigits(minutes) + ':' + twoDigits(seconds)
}
//=================================Desafio========================
const pontos = document.getElementById('pontos')
const tempo = document.getElementById('tempo')

pontos.innerText = randomNumber(1, 10)
tempo.innerText = randomNumber(1, 5)

function randomNumber(min ,max){
    return Math.floor(Math.random() * (max - min +1)) + min
}

// ==================== Criando ordem aleatória para embaralhar array =========

function shuffleArray(arr){
    for (let i = arr.length - 1; i > 0; i --){
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}


