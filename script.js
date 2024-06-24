

const handsValue = {
    './trebolpng/TrebolAs2.png':11,
    './trebolpng/Trebol2.png':2,
    './trebolpng/Trebol3.png':3,
    './trebolpng/Trebol4.png':4,
    './trebolpng/Trebol5.png':5,
    './trebolpng/Trebol6.png':6,
    './trebolpng/Trebol7.png':7,
    './trebolpng/Trebol8.png':8,
    './trebolpng/Trebol9.png':9,
    './trebolpng/Trebol10.png':10,
    './corazonPng/corazonAs.png':11,
    './corazonPng/corazon2.png':2,
    './corazonPng/corazon3.png':3,
    './corazonPng/corazon4.png':4,
    './corazonPng/corazon5.png':5,
    './corazonPng/corazon6.png':6,
    './corazonPng/corazon7.png':7,
    './corazonPng/corazon8.png':8,
    './corazonPng/corazon9.png':9,
    './corazonPng/corazon10.png':10,
    './diamantePng/diamanteAs.png':11,
    './diamantePng/diamante2.png':2,
    './diamantePng/diamante3.png':3,
    './diamantePng/diamante4.png':4,
    './diamantePng/diamante5.png':5,
    './diamantePng/diamante6.png':6,
    './diamantePng/diamante7.png':7,
    './diamantePng/diamante8.png':8,
    './diamantePng/diamante9.png':9,
    './diamantePng/diamante10.png':10,
    './picaPng/picaAs.png':11,
    './picaPng/pica2.png':2,
    './picaPng/pica3.png':3,
    './picaPng/pica4.png':4,
    './picaPng/pica5.png':5,
    './picaPng/pica6.png':6,
    './picaPng/pica7.png':7,
    './picaPng/pica8.png':8,
    './picaPng/pica9.png':9,
    './picaPng/pica10.png':10,
    './kingspng/heartCard.png':10,
    './kingspng/kingDiamond.png':10,
    './kingspng/kingsuerte.png':10,
    './kingspng/kingtrebol.png':10,
    './jotaPng/jota trbol.png':10,
    './jotaPng/jotaDiakmante.png':10,
    './jotaPng/jotaEspada.png':10,
    './jotaPng/jotaHeart.png':10,
    './queenspng/queendiamante.png':10,
    './queenspng/queenesapada.png':10,
    './queenspng/queensheart.png':10,
    './queenspng/queenstrbol.png':10,
};

// const handsValue = {
//     './imgprueba/queenesapada (1).jpg':10,
//     './imgprueba/queensheart.jpg':10,
//     './imgprueba/queensheart.jpg':10
// }

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

// console.log(handsValue['./cardsImg/as.png'])



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


    //Si me quedo sin dinero el juego me avisa y tengo clickear si o si "re start"
    if(bank <= 0){
        bank = 0;
        alert("PERDISTE!");
        buttonsDisabled();
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


    //Esta funcion hace que si tienes menos cantidad en el banco de la que quieres apostar, que directamente no te deje.
    //la funcion basicamente resta otra ves el valor del banco menos la apuesta que querias hacer.
    function noMoneyToBet(){
        if(bank < betAmount){
            alert("No puedes, no tienes suficiente dinero en el banco");
            bank =- betAmount;
            window.location.reload();
        }
    }

    //Crea el elemento parrafo de "Banco" para mostrar cuanto dinero tenes y la actualizacion de la misma a medida que vas jugando 
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

         //Logica del as, cuando tiene que valer 1 y cuando 11
        if(total > 10){
            handsValue['./trebolpng/TrebolAs2.png'] = 1;
            handsValue['./corazonPng/corazonAs.png'] = 1;
            handsValue['./diamantePng/diamanteAs.png'] = 1;
            handsValue['./picaPng/picaAs.png'] = 1;
            console.log(handsValue)
        }
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
            reloadButton.removeAttribute("disabled");
            startButton.disabled = true;
            standButton.disabled = true;

            //El resultado del juego se guarda el valor del banco en el local storage para que no se reinicie el recargar la pagina
            bank -= betAmount;
            localStorage.setItem('bank', bank);
            console.log(bank);
            // bet.innerHTML = `<p>Banco:$${bank}<p>`

        }else if(total === 21){
            winOrLose.innerHTML = `<p class="text-light">21 Jack Black !! Ganaste !!<p>`;
            reloadButton.removeAttribute("disabled");
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
        reloadButton.removeAttribute("disabled");
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
        reloadButton.removeAttribute("disabled");
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
            reloadButton.disabled = false;
        }
    return bank;

    }

    console.log("prueba3",bank)


    //Cuando apuesto ya sea 100 500 o 1000 los botones se desabilitan para que no te deje seguir apostando y en definitiva crear un bug de apuesta infinita
    function buttonsDisabled(){
        hundred.disabled = true;
        fiveHundred.disabled = true;
        thousand.disabled = true;    
    }
    // Obtener el botón y la alerta
    const botonPerdiste = document.getElementById('boton-perdiste');
    const alertaPerdiste = document.getElementById('alerta-perdiste');

    
 
    //Boton para empezar mi partida.
    startButton.addEventListener('click', function(){
        startGame();
        // startGameDealer();
        
    });

    hundred.addEventListener('click', function(){
        startGame();
        noMoneyToBet();
        buttonsDisabled();
    });

    fiveHundred.addEventListener('click', function(){
        startGame();
        noMoneyToBet();
        buttonsDisabled();
        // startGameDealer();
    });

    thousand.addEventListener('click', function(){
        startGame();
        noMoneyToBet();
        buttonsDisabled();
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
    


     