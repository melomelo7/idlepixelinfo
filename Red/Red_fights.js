let enArr = []

function startFight(workC,enemies){
    //let workC = getID("fightCont")

console.log(enemies)

    cleanParent(workC)

    let subC = addEle({dad:workC,setClass:"contCol",justifyC:"flex-end"})
      addEle({dad:subC,setClass:"btn",text:"?",padding:"1px 5px",height:"fit-content",
      setFunc:()=>{

      }})

    let minFrW = 120
    let fork = addEle({dad:workC,setClass:"contCol"})
      let P_Cont = addEle({dad:fork,setClass:"contCol",padding:"10px",
      border:"solid 2px #8A0303",marginR:"5px",radius:"10px",minWidth:minFrW+"px"})
      let E_Cont = addEle({dad:fork,setClass:"contCol",padding:"10px",
      border:"solid 2px #8A0303",radius:"10px",minWidth:minFrW+"px"})


      let nbCol = "rgb(127, 224, 224)"
      let stat = getStat("Strength")
      let txt = "You : "+addEmo("⚔️","emoji of swords")+spanText(nbCol,stat.val)+" | " 
      stat = getStat("Protection")
      txt += addEmo("🛡️","emoji of a shield")+spanText(nbCol,stat.val)
      addEle({dad:P_Cont,text:txt,borderB:"solid 2px #8A0303",textA:"center"})
      subC = addEle({dad:P_Cont,setClass:"contRow",marginT:"10px",justifyC:"center"})
          stat = getStat("HP")
          addEle({dad:subC,text:stat.lbl+" : ",marginR:"5px",textA:"right"})
          addEle({dad:subC,text:stat.val,setID:"hpPlayer",textC:nbCol})
          addEle({dad:subC,marginL:"5px",textC:"#8A0303",minWidth:"20px",
          setID:"hitPlayer",text:"-1"})
      subC = addEle({dad:P_Cont,setClass:"contRow",marginT:"10px",justifyC:"center"})
        let cont = addEle({dad:subC,width:"80px",border:"orangered 2px solid",radius:"10px",
        margin:"0",height:"12px",padding:"1px"})
            addEle({dad:cont,backC:"orange",setID:"playerAtk",height:"100%",width:"1%",radius:"7px"})

      enArr = []
      enemies.forEach(en=>{
          console.log(en)
          let itm = enemyPool.filter(x=>x.lbl === en.lbl)[0]

          console.log(itm)
          for(let i=0;i<en.nbr;i++){
              enArr.push({
                hp:itm.hp,prot:itm.prot,exp:itm.exp,spd:itm.spd,atk:itm.atk
              })
          }


          
          console.log(enArr)

          let txt = itm.lbl+ "<br>"+addEmo("⚔️","emoji of swords") + spanText(nbCol,getFDR(itm)) 
          txt += " | " + addEmo("🛡️","emoji of a shield") + spanText(nbCol,itm.prot) + " )"
          addEle({dad:E_Cont,text:txt,borderB:"solid 2px #8A0303",textA:"center"})
          for(let i=0;i<en.nbr;i++){
            subC = addEle({dad:E_Cont,setClass:"contRow",marginT:"10px",justifyC:"center"})
            addEle({dad:subC,text:"HP : ",marginR:"5px",textA:"right"})
            addEle({dad:subC,text:itm.hp,setID:"hpEnemy",textC:nbCol})
            addEle({dad:subC,marginL:"5px",textC:"#8A0303",minWidth:"20px",
            setID:"hitEnemy",text:"-1"})
          }
      })


}


function testHit(accuracy){
    let rnd = Math.random()
    let hit = rnd <= accuracy ? true : false
    return {rnd:rnd,hit:hit}
}

function getFDR(itm){ // getFullDmgRange
    let min = 1000
    let max = 0
    itm.atk.forEach(at=>{
        console.log(at)
        if(!at.dmg.includes("~")){
            let val = Number(at.dmg)
            min = val < min ? val : min
            max = val > max ? val : max
        } else {
            let val1 = Number(at.dmg.split("~")[0])
            let val2 = Number(at.dmg.split("~")[1])
            min = val1 < min ? val1 : min
            max = val2 > max ? val2 : max
        }
    })
    return min === max ? min : min+"~"+max
}

/*
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Fight with Progression Bars</title>
<style>
  body {
    font-family: Arial, sans-serif;
    padding: 20px;
  }
  .bar-container {
    width: 300px;
    height: 20px;
    background-color: #ccc;
    margin: 10px 0;
    position: relative;
  }
  .progress-bar {
    height: 100%;
    width: 0;
    background-color: #4caf50;
  }
  #log {
    margin-top: 20px;
    height: 150px;
    overflow-y: auto;
    border: 1px solid #999;
    padding: 10px;
  }
</style>
</head>
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
</html>
*/