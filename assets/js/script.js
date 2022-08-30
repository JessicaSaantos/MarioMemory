const main = document.getElementById('main')
renderizarCartas()
function renderizarCartas(){

    for(let i = 0; i < personagens.length; i ++){
        let carta = document.createElement("img")
        carta.src = "./assets/img/QuestionBlock.png"
        main.appendChild(carta)
    }
}

console.log(personagens)
