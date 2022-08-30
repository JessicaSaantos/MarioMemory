const main = document.getElementById('main')
renderizarCartas()
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

function clickCarta (event){
    const imgClicada = event.target
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

function testePar (){
    if (click01.id == click02.id)
}

function shuffleArray(arr){
    for (let i = arr.length - 1; i > 0; i --){
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [[arr[j]], arr[i]];
    }
    return arr;
}


