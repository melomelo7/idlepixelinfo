
/* 
rooms unlock cost :
3-6-12-21-35-56-87-133-200-298-439-642-934-1351-1946-2932-4402-6586

smelters unlock
free - 50K - 500K - 10M - 5B - 100B - 50T - 1q - 500q - 10Q

crafters unlock
free - 1M - 100M - 50B - 1T - 500T - 10q - 5Q - 100Q - 50S

*/

const body = document.querySelector("body")
const info = document.querySelector("#info")
const left = document.querySelector("#left")
const right = document.querySelector("#right")

const infoTitle = "Idle Planet Miner Infos" 
info.innerHTML = infoTitle

let projectPop = undefined

addLeftButton({label:"Planets",clickFunction:clickPlanets})
addLeftButton({label:"Items",clickFunction:clickItems})
addLeftButton({label:"Projects",clickFunction:clickProjects})
addLeftButton({label:"Station",clickFunction:clickStation})
addLeftButton({label:"Rooms",clickFunction:clickRooms})

window.onload = firstContact()

console.log("Last up 04/07 00:40")

let sum = [82,107,139,180,231,296,377,479,607,767]

let count = 0

for (i=0;i<sum.length;i++){
    count+= sum[i]
}

//console.log(count)
