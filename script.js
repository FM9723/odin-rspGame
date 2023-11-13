let playerScore = 0;
let computerScore = 0;

let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissor = document.getElementById('scissor');

let scores = document.getElementById('scores');
let boton_reinicio = document.getElementById('boton-reinicio');

const restart = document.createElement('button');

restart.textContent = 'Reiniciar juego';

restart.style.backgroundColor = '#4CAF50'; // Color de fondo
restart.style.color = 'white'; // Color del texto
restart.style.padding = '10px 20px'; // Espaciado interno
restart.style.border = 'none'; // Sin borde
restart.style.borderRadius = '5px'; // Bordes redondeados
restart.style.cursor = 'pointer'; // Cursor apuntador al pasar el ratón
restart.style.fontSize = '16px'; // Tamaño del texto




function getComputerChoice() {
    let computerAnswer = Math.floor(Math.random() * 3);
    if (computerAnswer == 0) return 'Piedra';
    if (computerAnswer == 1) return 'Tijera';
    if (computerAnswer == 2) return 'Papel';

}

function playRound(playerSelection, computerSelection) {
    
    if (computerSelection == 'Piedra') {
        if (playerSelection == 'Piedra') return 'Juego empatado';
        if (playerSelection == 'Papel') {
            playerScore++;
            return 'Juego ganado - papel vence piedra';
        }
        if (playerSelection == 'Tijera') {
            computerScore++;
            return 'Juego perdido - piedra vence tijera';
        }
    }
    if (computerSelection == 'Papel') {
        if (playerSelection == 'Piedra') {
            computerScore++;
            return 'Juego perdido - papel vence piedra';
        }
        if (playerSelection == 'Papel') return 'Juego empatado ';
        if (playerSelection == 'Tijera') {
            playerScore++;
            return 'Juego ganado - tijera vence papel';
        }
    }
    if (computerSelection == 'Tijera') {
        if (playerSelection == 'Piedra') {
            playerScore++;
            return 'Juego ganado - piedra vence tijera';
        }
        if (playerSelection == 'Papel') {
            computerScore++;
            return 'Juego perdido - tijera vence papel';
        }
        if (playerSelection == 'Tijera') return 'Juego empatado';
    }
}


function game(input) {

    const playerSelection = input;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(`CPU :${computerSelection}\n Jugador :${playerSelection}`);
    scores.innerHTML = `PUNTAJES: <br> Computador ${computerScore}  <br> Jugador ${playerScore}`;
   
    if(computerScore == 5 )
    {
        scores.innerHTML = `Computador gana!\n `;
        scores.appendChild(restart);

    }
    if(playerScore == 5)
    {
        scores.innerHTML = `Jugador gana! Felicitaciones<br>`;
        rock.disabled = true;
        paper.disabled = true;
        scissor.disabled = true;
        boton_reinicio.appendChild(restart);
    }
}

restart.onclick=function(){
    computerScore = 0;
    playerScore = 0;
    rock.disabled= false;
    paper.disabled = false;
    scissor.disabled = false;
    scores.innerHTML = '';
    boton_reinicio.removeChild(restart);
}

rock.onclick = function(){
    game('Piedra');
}
paper.onclick = function(){
    game('Papel');
}
scissor.onclick = function(){
    game('Tijera');
}



