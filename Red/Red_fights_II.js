<body>

<h2>Player vs Enemy Fight</h2>
<div>Player Attack Timer</div>
<div class="bar-container">
  <div id="playerBar" class="progress-bar"></div>
</div>

<div>Enemy Attack Timer</div>
<div class="bar-container">
  <div id="enemyBar" class="progress-bar"></div>
</div>

<div id="log"></div>

<script>
const playerBar = document.getElementById('playerBar');
const enemyBar = document.getElementById('enemyBar');
const logDiv = document.getElementById('log');

let playerProgress = 0;
let enemyProgress = 0;

// Duration for each attack cycle in milliseconds
const attackInterval = 3000; // 3 seconds for example
const updateInterval = 50; // update every 50 ms

function logMessage(message) {
  const p = document.createElement('p');
  p.innerText = message;
  logDiv.appendChild(p);
  logDiv.scrollTop = logDiv.scrollHeight;
}

function update() {
  // Increment progress
  playerProgress += updateInterval / attackInterval * 100;
  enemyProgress += updateInterval / attackInterval * 100;

  if (playerProgress >= 100) {
    // Player attack
    logMessage('Player attacks!');
    playerProgress = 0;
  }
  if (enemyProgress >= 100) {
    // Enemy attack
    logMessage('Enemy attacks!');
    enemyProgress = 0;
  }

  // Update progress bars
  playerBar.style.width = playerProgress + '%';
  enemyBar.style.width = enemyProgress + '%';
}

setInterval(update, updateInterval);
</script>

</body>
