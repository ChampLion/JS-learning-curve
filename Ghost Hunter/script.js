// So the game idea is that ghosts will appear
// click in 2 sec points increase
// the amount of ghosts increase

let gameOn = false
let missedCount = 0
let scored = 0

const retry = document.querySelector('#retry')
retry.addEventListener('click', (e)=> {
if (gameOn == false) {
    startGame()
}
else StopGame()
})

function startGame() {
    missedCount = 0
    scored = 0
    score.innerHTML = `Score: ${scored}`
    const allGhosts = document.querySelectorAll('.ghost')
        allGhosts.forEach((gho)=> {
            gameArea.removeChild(gho)
        })
    spawnGhost()
    retry.innerHTML = 'Stop'
    gameOn = true
    message.innerHTML = '👻 Ghost Hunter'
    
}
const message = document.querySelector('#Special')
let game = null
const gameArea = document.querySelector('#game-area');
function spawnGhost() {

    game = setInterval(function () {
        if(scored > 10) {
           message.innerHTML = 'You are doing well Priya'
           console.log(message);
        }
        if(scored > 20) {
           message.innerHTML = 'Wow PRIYA!!! 20++ DAMN'
           console.log(message);
        }
        if(scored > 30) {
           message.innerHTML = 'OKAY i didnt expect this score priya'
           console.log(message);
        }
        if(scored > 40) {
           message.innerHTML = '👑 PRIYA'
           console.log(message);
        }

        deleteGhost()
        for (let i = 1; i <= 2; i++) {
            let ghostSpawn = document.createElement('div');
            //ghostSpawn.id = `${ghosts}`
            ghostSpawn.className = "ghost";
            ghostSpawn.innerHTML = '👻';
            gameArea.appendChild(ghostSpawn)
            const left = (Math.random() * 700) + 50
            const down = (Math.random() * 400) + 50
            console.log(left);
            console.log(down);
             
            ghostSpawn.style.left = `${left}px`
            ghostSpawn.style.top = `${down}px`
            ghostSpawn = null
        }

    }, 2500);
}

let finalScore = null
const missed = document.querySelector('#Missed')
function deleteGhost() {
    
        const allGhosts = document.querySelectorAll('.ghost')
        allGhosts.forEach((gho)=> {
            gameArea.removeChild(gho)
            missedCount++;
            console.log(missedCount)
            missed.innerHTML = `Missed: ${missedCount}`
            
        })
        if (missedCount > 10) {
            finalScore = scored
            StopGame();
        }
}
const score = document.querySelector('#score')
gameArea.addEventListener('click',(e)=> {
    console.log(e)
    if (e.target.className === 'ghost') {
    e.target.remove();
    scored++;
    score.innerHTML = `Score: ${scored}`

}
    
})

function StopGame() {
    clearInterval(game);
    let finalMessage = document.createElement('div');
            //ghostSpawn.id = `${ghosts}`
            finalMessage.className = "ghost";
            finalMessage.innerHTML = `Your Score was ${finalScore}`;
            gameArea.appendChild(finalMessage)
    scored = 0
    score.innerHTML = `Score: ${scored}`
    retry.innerHTML = 'Start'
    gameOn = false;
        missedCount = 0;
        missed.innerHTML = `Missed: ${missedCount}`
        finalScore = 0
        
}