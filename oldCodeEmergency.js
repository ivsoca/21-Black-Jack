
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
   