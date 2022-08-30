const main = document.getElementById('main')
renderizarCartas()
function renderizarCartas(){

    for(let i = 0; i < 8; i ++){
        let carta = document.createElement("img")
        carta.src = "./assets/img/QuestionBlock.png"
        main.appendChild(carta)
    }
}
