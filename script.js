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
    './cardsImg/2.png':2,
    './cardsImg/3.png':3,
    './cardsImg/4.png':4,
    './cardsImg/5.png':5,
    './cardsImg/6.png':6,
    './cardsImg/7.png':7,
    './cardsImg/8.png':8,
    './cardsImg/k.png':10,
    './cardsImg/q.png':10,
    './cardsImg/j.png':10,    
};



console.log(handsValue)

const myCards = document.getElementById("myCards");
const counter = document.getElementById("counter");

const dealerCards = document.getElementById("dealerCards");
const counterDealer = document.getElementById("counterDealer");

const hundred = document.getElementById("hundred");
const fiveHundred = document.getElementById("fiveHundred");
const thousand = document.getElementById("thousand");


const startButton = document.getElementById("startButton");
const hitButton = document.getElementById("hitButton");
const standButton = document.getElementById("standButton");
const reloadButton = document.getElementById("reloadButton");
const winOrLose = document.getElementById("winOrLose");
const bet = document.getElementById("bet");
const reStartBtn = document.getElementById("reStartBtn");



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


// Verificar si el valor del banco está almacenado en el almacenamiento local
let bank = localStorage.getItem('bank');
if(bank === null) {
    bank = 1000;
} else {
    bank = parseInt(bank);
}


//Si me quedo sin dinero en el banco este se reinicia a 0
if(bank <= 0){
    bank = 1000;
}


//Comienza el juego con 2 cartas
    let total = 0;
    // let bank = 1000;
    let betAmount = 0;

    // Agregar evento de clic al botón de apuesta de $100
    document.getElementById('hundred').addEventListener('click', function() {
        betAmount = 100; // Establecer la apuesta en 100
    });

    // Agregar evento de clic al botón de apuesta de $500
    document.getElementById('fiveHundred').addEventListener('click', function() {
        betAmount = 500; // Establecer la apuesta en 100
    });

    // Agregar evento de clic al botón de apuesta de $1000
    document.getElementById('thousand').addEventListener('click', function() {
        betAmount = 1000; // Establecer la apuesta en 100
    });


    //Crea el elemento parrafo de "Banco" para mostrar cuando dinero tenes y la actualizacion de la misma a medida que vas jugando 
    // const bankElement = document.createElement('p');
    const bankParagraph = document.getElementById("bankParagraph");
    bankParagraph.classList.add("banco-parrafo")
    bankParagraph.textContent = `BANCO: $${bank}`;

    const bankContainer = document.querySelector('.bank-container');

    // Agregar el nuevo elemento <p> al contenedor
    bankContainer.appendChild(bankParagraph);


    function startGame(){

    //Mi juego
    myCards.innerHTML = '';

    //Uso el ciclo for para que me de 2 cartas random
    for (let i = 0; i < 2; i++) {
        const { key, value } = selectRandomCards();
        console.log(key, value)
        // myCards.innerHTML += `<p>${key}</p>`;
        myCards.innerHTML += `<img src="${key}" alt="${key}">`;
        total += value;
        console.log(total)
        counter.innerHTML = `<p class="text-light">Total: ${total}</p>`;
    }
    //El hit button permite apostar mas cartas pero si te pasas de 21 perdes
    hitButton.addEventListener('click',function(){
        const { key, value } = selectRandomCards();
        myCards.innerHTML += `<img src="${key}" alt="${key}">`;
        total += value;
        counter.innerHTML = `<p class="text-light">Total: ${total}</p>`;

        //Cuando perdes por tener + de 21 cartas el boton para apostar se deshabilita
        if(total > 21){
            counter.innerHTML = `<p class="text-light">Total: ${total}</p>`;
            hitButton.disabled = true;
            winOrLose.innerHTML = `<p class="text-light">Perdiste! El Dealer Ganó!!<p>`;
            startButton.disabled = true;
            standButton.disabled = true;

            //El resultado del juego se guarda el valor del banco en el local storage para que no se reinicie el recargar la pagina
            bank -= betAmount;
            localStorage.setItem('bank', bank);
            console.log(bank);
            // bet.innerHTML = `<p>Banco:$${bank}<p>`

        }else if(total === 21){
            winOrLose.innerHTML = `<p class="text-light">21 Jack Black !! Ganaste !!<p>`   
            hitButton.disabled = true;
            standButton.disabled = true;
            startButton.disabled = true;

            //El resultado del juego se guarda el valor del banco en el local storage para que no se reinicie el recargar la pagina
            bank += betAmount;
            localStorage.setItem('bank', bank);
            console.log(bank)
            // bet.innerHTML = `<p>Banco:$${bank}<p>`
        }
        
    });
}

console.log("meegaprueba", bank)

 //



    function startGameDealer(betAmount, bank){
    let totalDealer = 0;
        console.log("prueba",bank)
    //Repartir las cartas iniciales al dealer
    for (let i = 0; i < 2; i++) {
        const { key, value } = selectRandomCards();
        dealerCards.innerHTML += `<img src="${key}" alt="${key}">`;
        totalDealer += value;
        counterDealer.innerHTML = `<p class="text-light">Total Dealer: ${totalDealer}</p>`;
    }

    function dealerStart(){
        const { key, value } = selectRandomCards();
        dealerCards.innerHTML += `<img src="${key}" alt="${key}">`;
        totalDealer += value;
        counterDealer.innerHTML = `<p class="text-light">Total Dealer: ${totalDealer}</p>`;
    }
    dealerStart();

    //Lógica para que el dealer juegue automáticamente
    while (totalDealer < 18) {
        const { key, value } = selectRandomCards();
        // dealerCards.innerHTML += `<p>${key}</p>`;
        dealerCards.innerHTML += `<img src="${key}" alt="${key}">`;
        totalDealer += value;
        counterDealer.innerHTML = `<p class="text-light">Total Dealer: ${totalDealer}</p>`;
    }

    //Determinar el resultado
    if (totalDealer > 21 || totalDealer < total) {
        winOrLose.innerHTML = `<p class="text-light">Ganaste! El Dealer perdió!</p>`;
        hitButton.disabled = true;
        standButton.disabled = true;
        startButton.disabled = true;

        //El resultado del juego se guarda el valor del banco en el local storage para que no se reinicie el recargar la pagina
        bank += betAmount;
        console.log("prueba2",bank)

        // bet.innerHTML = `<p>Banco:$${bank}<p>`

    }
     else if (totalDealer > total) {
        winOrLose.innerHTML = `<p class="text-light">Perdiste! El Dealer ganó.</p>`;
        hitButton.disabled = true;
        standButton.disabled = true;
        startButton.disabled = true;

        //El resultado del juego se guarda el valor del banco en el local storage para que no se reinicie el recargar la pagina
        bank -= betAmount;
        localStorage.setItem('bank', bank);
        console.log(bank)
        // bet.innerHTML = `<p>Banco:$${bank}<p>`
    }
     else{
            winOrLose.innerHTML = `<p>Empate!</p>`;
        }
    return bank;

    }

    console.log("prueba3",bank)

    


    //Boton para empezar mi partida.
    startButton.addEventListener('click', function(){
        startGame();
        // startGameDealer();
    });

    hundred.addEventListener('click', function(){
        startGame();
    });

    fiveHundred.addEventListener('click', function(){
        startGame();
        // startGameDealer();
    });

    thousand.addEventListener('click', function(){
        startGame();
        // startGameDealer();
    });

    //Esta funcion hace que re recargue el dinero en el banco
    function reStart(){
        localStorage.removeItem('bank');
    }

    //Aca activamos el reinicio del dinero en el banco al hacer click en el boton "reStart"
    reStartBtn.addEventListener('click', function(){
        reStart();
        window.location.reload();
    });
    
   

    //Boton donde me planto y en consecuencia se activa la partida(funcion) del dealer donde definira quien gano o perdio.
    standButton.addEventListener('click', function(){
        bank = startGameDealer(betAmount, bank);
        localStorage.setItem('bank', bank);
        // bet.innerHTML = `<p>Banco:$${bank}<p>`;
    });
    


