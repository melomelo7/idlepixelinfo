
/* 
rooms unlock cost :


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

console.log("Last up 04/12 00:10")

let loopfork = 0