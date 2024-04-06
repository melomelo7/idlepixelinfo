
const body = document.querySelector("body")
const info = document.querySelector("#info")
const left = document.querySelector("#left")
const right = document.querySelector("#right")

const lastUp = "Last up 2024/04/06 13:15"
const infoTitle = "Idle Planet Miner Infos " +lastUp
info.innerHTML = infoTitle

let projectPop = undefined
let gameLook = "New"

addLeftButton({label:"Look",clickFunction:clickLook})
addLeftButton({label:"Faq",clickFunction:clickFaqs})
addLeftButton({label:"Planets",clickFunction:clickPlanets})
addLeftButton({label:"Items",clickFunction:clickItems})
addLeftButton({label:"Projects",clickFunction:clickProjects})
addLeftButton({label:"Station",clickFunction:clickStation})
addLeftButton({label:"Rooms",clickFunction:clickRooms})
addLeftButton({label:"Process",clickFunction:clickProcess})

window.onload = firstContact()

console.log(lastUp)

let loopfork = 0