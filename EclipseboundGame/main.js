let gameStarted = false;
let currentRealm = 'solar';
let playerHealth = 100;
let timeEnergy = 50;
let playerX = 400;
let playerY = 300;
let keys = {};

const firstScreen = document.getElementById('firstScreen');
const secondScreen = document.getElementById('secondScreen');
const startButton = document.getElementById('startButton');
const playerElement = document.getElementById('player');
const statusElement = document.getElementById('status');
const solarTree = document.getElementById('solarTree');
const lunarBridge = document.getElementById('lunarBridge');
const solarEnemy = document.querySelector('.solar-enemy');
const lunarEnemy = document.querySelector('.lunar-enemy');
const gameOverPopup = document.getElementById('gameOverPopup');
const playAgainButton = document.getElementById('playAgainButton');
const switchRealmButton = document.getElementById('switchRealmButton');
const rewindButton = document.getElementById('rewindButton');

startButton.addEventListener('click', () => {
    firstScreen.style.display = 'none';
    secondScreen.style.display = 'block';
    gameStarted = true;
    updateStatus();
});

playAgainButton.addEventListener('click', () => {
    gameOverPopup.style.display = 'none';
    playerHealth = 100;
    timeEnergy = 50;
    currentRealm = 'solar';
    updateStatus();
});

document.addEventListener('keydown', (e) => { keys[e.key] = true; if(e.key==='Tab'){ e.preventDefault(); switchRealm(); } });
document.addEventListener('keyup', (e) => { keys[e.key] = false; });

function updateStatus() {
    statusElement.innerHTML = `生命值: ${Math.round(playerHealth)}<br>领域: ${currentRealm==='solar'?'太阳':'月亮'}<br>时间能量: ${timeEnergy}`;
}

function switchRealm() {
    if(timeEnergy>=10){ currentRealm = currentRealm==='solar'?'lunar':'solar'; timeEnergy-=10; updateStatus(); solarEnemy.style.display = currentRealm==='solar'?'block':'none'; lunarEnemy.style.display = currentRealm==='lunar'?'block':'none'; solarTree.style.display = currentRealm==='solar'?'block':'none'; lunarBridge.style.display = currentRealm==='lunar'?'block':'none'; }
}
