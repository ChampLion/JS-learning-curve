// So the game idea is that ghosts will appear
// click in 2 sec points increase
// the amount of ghosts increase

const gameOn = true

const retry = document.querySelector('#retry')
retry.addEventListener('click', (e)=> {
if (gameOn == true) {
    startGame()
}
})


const gameArea = document.querySelector('#game-area');
function spawnGhost() {
    const ghosts = 1;

    setInterval(function () {

        for (let i = 1; i <= ghosts; i++) {
            const ghostSpawn = document.createElement('div');
            ghostSpawn.id = `${ghosts}`
            ghostSpawn.className = "ghost";
            ghostSpawn.innerHTML = '👻';
            
        }

    }, 1000);
}
spawnGhost()