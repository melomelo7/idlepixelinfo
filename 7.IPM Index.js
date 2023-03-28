
/* 
rooms unlock cost :
3-6-12-21-35-56-87-133-200-298-439-642

smelters unlock
50K 500K 10M 5B

crafters unlock
1M 100M 50B

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

window.onload = firstContact()

console.log("Last up 03/29 01:10")
