const content = {
  es: `
        <h3>¿Cómo jugar? <img src="./Banderas/español.png" class="flags" onclick="changeLanguage('es')" alt="">
            <img src="./Banderas/ingles.png" class="flags" onclick="changeLanguage('en')" alt=""></h3>
        <hr>
        <p><p><b>1-Objetivo del juego:</b></p> El objetivo es obtener una mano con un valor lo más cercano posible a 21 sin pasarse.</p>
        <p><p><b>2-Valor de las cartas:</b></p> Las cartas numéricas (2-10) valen su valor nominal. Las cartas J, Q y K valen 10 puntos cada una, y el As puede valer 1 u 11 puntos, dependiendo de qué sea más beneficioso para la mano.</p>
        <p><p><b>3-El reparto:</b></p> El juego comienza con cada jugador y el crupier recibiendo dos cartas. En la mayoría de las variantes, las cartas del jugador se reparten boca arriba, mientras que una de las cartas del crupier se reparte boca arriba (conocida como la carta "visible") y la otra boca abajo (la "carta oculta").</p>
        <p><p><b>4-Turno del jugador:</b></p> Después del reparto inicial, cada jugador tiene la opción de "pedir"  más cartas (hit) para acercarse a 21 o "quedarse" con su mano actual (stand). También puedes optar por "doblar" tu apuesta y recibir una sola carta adicional, o "dividir" si tienes dos cartas del mismo valor y crear dos manos separadas.</p>
        <p><p><b>5-Turno del crupier:</b></p> Una vez que todos los jugadores han completado sus turnos, el crupier revela su carta oculta y debe seguir reglas específicas de la casa para determinar su siguiente movimiento. Por lo general, el crupier debe pedir cartas (hit) hasta que alcance al menos 17 puntos, momento en el que debe quedarse (stand).</p>
        <p><p><b>6-Ganar y perder:</b></p> Un jugador gana si su mano es más cercana a 21 que la del crupier sin pasarse de 21. Si un jugador se pasa de 21, pierde automáticamente (busto). Si el crupier se pasa de 21, todos los jugadores que no se pasaron ganan.</p>
        <p><p><b>7-Blackjack:</b></p> Si un jugador o el crupier tiene un As y una carta con valor de 10 puntos en las dos primeras cartas, tienen un "blackjack" y ganan automáticamente, a menos que el crupier también tenga un blackjack, en cuyo caso es un empate (llamado "push").</p>

        <h3>Botones:</h3>
        <hr>

        <p><p><b>Hit:</b></p>Pedir mas cartas.</p>
        <p><p><b>Stand:</b></p>Quedarse con la mano actual.</p>
        <p><p><b>Reload:</b></p>Volver a jugar/apostar.</p>
        <p><p><b>Re Start:</b></p>Empezar una apuesta nueva(es decir de 0 otra vez).</p>
    `,
  en: `
        <h3>How to Play? <img src="./Banderas/español.png" class="flags" onclick="changeLanguage('es')" alt="">
            <img src="./Banderas/ingles.png" class="flags" onclick="changeLanguage('en')" alt=""></h3>
        <hr>
         <p><p><b>1-Objective of the game:</b></p> The objective is to get a hand with a value as close to 21 as possible without going over.</p>
        <p><p><b>2-Card values:</b></p> Number cards (2-10) are worth their face value. J, Q, and K cards are worth 10 points each, and the Ace can be worth 1 or 11 points, whichever is more beneficial for the hand.</p>
        <p><p><b>3-The deal:</b></p> The game starts with each player and the dealer receiving two cards. In most variants, the player's cards are dealt face up, while one of the dealer's cards is dealt face up (known as the "upcard") and the other face down (the "hole card").</p>
        <p><p><b>4-Player's turn:</b></p> After the initial deal, each player has the option to "hit" (request more cards) to get closer to 21 or "stand" with their current hand. You can also choose to "double down" your bet and receive one additional card, or "split" if you have two cards of the same value and create two separate hands.</p>
        <p><p><b>5-Dealer's turn:</b></p> Once all players have completed their turns, the dealer reveals their hole card and must follow specific house rules to determine their next move. Typically, the dealer must hit until they reach at least 17 points, at which point they must stand.</p>
        <p><p><b>6-Winning and losing:</b></p> A player wins if their hand is closer to 21 than the dealer's without going over 21. If a player goes over 21, they automatically lose (bust). If the dealer goes over 21, all players who did not bust win.</p>
        <p><p><b>7-Blackjack:</b></p> If a player or the dealer has an Ace and a 10-point card in the first two cards, they have a "blackjack" and win automatically unless the dealer also has a blackjack, in which case it is a tie (called a "push").</p>
        
        <h3>Buttons:</h3>
        <hr>
        
        <p><p><b>Hit:</b></p>Request more cards.</p>
        <p><p><b>Stand:</b></p>Keep the current hand.</p>
        <p><p><b>Reload:</b></p>Play/bet again.</p>
        <p><p><b>Restart:</b></p>Start a new bet (i.e., from 0 again).</p>    
    `,
};

function changeLanguage(language) {
    document.getElementById('content').innerHTML = content[language];
}

// Set initial content to Spanish
changeLanguage('es');