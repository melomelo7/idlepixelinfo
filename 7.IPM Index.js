
const body = document.querySelector("body")
const info = document.querySelector("#info")
const left = document.querySelector("#left")
const right = document.querySelector("#right")

const infoTitle = "Idle Planet Miner Infos" 
info.innerHTML = infoTitle

let projectPop = undefined

addLeftButton({label:"Projects",clickFunction:clickProjects})
addLeftButton({label:"Station",clickFunction:clickStation})

window.onload = firstContact()

console.log("Last up Sat 0:22")
