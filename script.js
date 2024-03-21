// const handsValue = {
//     "2":2,
//     "3":3,
//     "4":4,
//     "5":5,
//     "6":6,
//     "7":7,
//     "8":8,
//     "9":9,
//     "10":10,
//     "J":10,
//     "Q":10,
//     "K":10
// }
const handsValue = {
    "2":'./cardsImg/1.png',
    "3":'./cardsImg/1.png',
    "4":'./cardsImg/1.png',
    "5":'./cardsImg/1.png',
    "6":'./cardsImg/1.png',
    "7":'./cardsImg/1.png',
    "8":'./cardsImg/1.png',
    "9":'./cardsImg/1.png',
    "10":'./cardsImg/1.png',
    "J":'./cardsImg/1.png',
    "Q":'./cardsImg/1.png',
    "K":'./cardsImg/1.png'
}

const myCards = document.getElementById("myCards");
const counter = document.getElementById("counter");

const dealerCards = document.getElementById("dealerCards");
const counterDealer = document.getElementById("counterDealer");

const startButton = document.getElementById("startButton");
const hitButton = document.getElementById("hitButton");
const standButton = document.getElementById("standButton");
const reloadButton = document.getElementById("reloadButton");
const winOrLose = document.getElementById("winOrLose");



function selectRandomCards() {
    const keys = Object.keys(handsValue);
    // console.log(keys)
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    randomValue = handsValue[randomKey];
    return { key: randomKey, value: randomValue };
}

//Recarga la pagina
reloadButton.addEventListener('click', function(){
    window.location.reload();
});


//Comienza el juego con 2 cartas
    let total = 0;

    function startGame(){

    //Mi juego
    myCards.innerHTML = '';

    //Uso el ciclo for para que me de 2 cartas random
    for (let i = 0; i < 2; i++) {
        const { key, value } = selectRandomCards();
        console.log(key, value)
        // myCards.innerHTML += `<p>${key}</p>`;
        myCards.innerHTML += `<img src="${handsValue[key]}" alt="${key}">`;
        total += value;
        console.log(total)
        counter.innerHTML = `<p>Total: ${total}</p>`;
    }
    //El hit button permite apostar mas cartas pero si te pasas de 21 perdes
    hitButton.addEventListener('click',function(){
        const { key, value } = selectRandomCards();
        myCards.innerHTML += `<p>${key}</p>`;
        total += value;
        counter.innerHTML = `<p>Total: ${total}</p>`;

        //Cuando perdes por tener + de 21 cartas el boton para apostar se deshabilita
        if(total > 21){
            counter.innerHTML = `<p>Total: ${total}</p>`;
            hitButton.disabled = true;
            winOrLose.innerHTML = `<p>Perdiste! El Dealer Ganó!!<p>`;
            startButton.disabled = true;
            standButton.disabled = true;
        }else if(total === 21){
            winOrLose.innerHTML = `<p>21 Jack Black !! Ganaste !!<p>`   
            hitButton.disabled = true;
            standButton.disabled = true;
            startButton.disabled = true;
        }
    });
}

    function startGameDealer(){
    let totalDealer = 0;

    //Repartir las cartas iniciales al dealer
    for (let i = 0; i < 2; i++) {
        const { key, value } = selectRandomCards();
        dealerCards.innerHTML += `<p>${key}</p>`;
        totalDealer += value;
        counterDealer.innerHTML = `<p>Total Dealer: ${totalDealer}</p>`;
    }

    function dealerStart(){
        const { key, value } = selectRandomCards();
        dealerCards.innerHTML += `<p>${key}</p>`;
        totalDealer += value;
        counterDealer.innerHTML = `<p>Total Dealer: ${totalDealer}</p>`;
    }
    dealerStart();

    //Lógica para que el dealer juegue automáticamente
    while (totalDealer < 18) {
        const { key, value } = selectRandomCards();
        dealerCards.innerHTML += `<p>${key}</p>`;
        totalDealer += value;
        counterDealer.innerHTML = `<p>Total Dealer: ${totalDealer}</p>`;
    }

    //Determinar el resultado
    if (totalDealer > 21 || totalDealer < total) {
        winOrLose.innerHTML = `<p>Ganaste! El Dealer perdió!</p>`;
        hitButton.disabled = true;
        standButton.disabled = true;
        startButton.disabled = true;
    } else if (totalDealer > total) {
        winOrLose.innerHTML = `<p>Perdiste! El Dealer ganó.</p>`;
        hitButton.disabled = true;
        standButton.disabled = true;
        startButton.disabled = true;

    } else {
            winOrLose.innerHTML = `<p>Empate!</p>`;
        }
    }

    //Boton para empezar mi partida.
    startButton.addEventListener('click', function(){
        startGame();
        // startGameDealer();
    });

    //Boton donde me planto y en consecuencia se activa la partida(funcion) del dealer donde definira quien gano o perdio.
    standButton.addEventListener('click', function(){
        startGameDealer();
    });
    


    //codigo viejo de emergencia por si acaso

    
// function startGameDealer(){

//     dealerCards.innerHTML = '';
//     let totalDealer = 0;

//     //Uso el ciclo for para que me de 2 cartas random
//     for (let i = 0; i < 2; i++) {
//         const { key, value } = selectRandomCards();
//         console.log(key, value)
//         dealerCards.innerHTML += `<p>${key}</p>`;
//         totalDealer += value;
//         counterDealer.innerHTML = `<p>Total Dealer: ${totalDealer}</p>`;
//     }
//     //El hit button permite apostar mas cartas pero si te pasas de 21 perdes
//     hitButton.addEventListener('click',function(){
//         const { key, value } = selectRandomCards();
//         dealerCards.innerHTML += `<p>${key}</p>`;
//         totalDealer += value;
//         counterDealer.innerHTML = `<p>Total Dealer: ${totalDealer}</p>`;

//         //Cuando perdes por tener + de 21 cartas el boton para apostar se deshabilita
//         if(totalDealer > 21){
//             counterDealer.innerHTML = `<p>Perdiste! Total Dealer: ${totalDealer}</p>`;
//             hitButton.disabled = true;
//         }
//     });
// }




// startButton.addEventListener("click", function() {
//     myCards.innerHTML = '';
//     let total = 0;

//     Uso el ciclo for para que me de 2 cartas random
//     for (let i = 0; i < 2; i++) {
//         const { key, value } = selectRandomCards();
//         console.log(key, value)
//         myCards.innerHTML += `<p>${key}</p>`;
//         total += value;
//         counter.innerHTML = `<p>Total: ${total}</p>`;
//     }
//     El hit button permite apostar mas cartas pero si te pasas de 21 perdes
//     hitButton.addEventListener('click',function(){
//         const { key, value } = selectRandomCards();
//         myCards.innerHTML += `<p>${key}</p>`;
//         total += value;
//         counter.innerHTML = `<p>Total: ${total}</p>`;

//         Cuando perdes por tener + de 21 cartas el boton para apostar se deshabilita
//         if(total > 21){
//             counter.innerHTML = `<p>Perdiste! Total: ${total}</p>`;
//             hitButton.disabled = true;
//         }
//     });
// }); 


//Dealer juego
// function dealer(){
//      dealerCards.innerHTML = '';
//         let totalDealer = 0;
    
//         //Uso el ciclo for para que me de 2 cartas random
//         for (let i = 0; i < 2; i++) {
//             const { key, value } = selectRandomCards();
//             console.log(key, value)
//             dealerCards.innerHTML += `<p>${key}</p>`;
//             totalDealer += value;
//             counterDealer.innerHTML = `<p>Total Dealer: ${totalDealer}</p>`;
//         }
//         //El hit button permite apostar mas cartas pero si te pasas de 21 perdes
//         hitButton.addEventListener('click',function(){
//             const { key, value } = selectRandomCards();
//             dealerCards.innerHTML += `<p>${key}</p>`;
//             totalDealer += value;
//             counterDealer.innerHTML = `<p>Total Dealer: ${totalDealer}</p>`;
//             if(totalDealer > 21 && total <= 21){
//                 winOrLose.innerHTML = `<p>Ganaste! El Dealer perdió!</p>`
//                 hitButton.disabled = true;
//             }else if(totalDealer > 21 && total >21){
//                 winOrLose.innerHTML = `<p>Nadie gano!</p>`
//             }
//         });  
// }
   