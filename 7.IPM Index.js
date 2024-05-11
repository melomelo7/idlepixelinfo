
const body = document.querySelector("body")
    const menu = addEle({dad:body,setClass:"menu"})
    const info = addEle({dad:body,setClass:"info"})
    const global = addEle({dad:body,setID:"info",width:"100%",height:"100%",margin:"40px 0 0 100px"})
        const right = addEle({dad:global,setID:"right"})

const lastUp = "(Last up 2024/05/11 11:30) *new expensive item*"
const infoTitle = "Idle Planet Miner Infos " +lastUp
info.innerHTML = infoTitle

let projectPop = undefined
let gameLook = "New"

const menuButtons = [
    {label:"Look",clickFunction:clickLook},
    {label:"Faq",clickFunction:clickFaqs},
    {label:"Planets",clickFunction:clickPlanets},
    {label:"Items",clickFunction:clickItems},
    {label:"Projects",clickFunction:clickProjects},
    {label:"Station",clickFunction:clickStation},
    {label:"Rooms",clickFunction:clickRooms},
    {label:"Process",clickFunction:clickProcess},
]

function addLeftButtons(){menuButtons.forEach(btn=>{
addEle({dad:menu,setClass:"menuBtn",text:btn.label,setFunc:btn.clickFunction}) }) }

addLeftButtons()

window.onload = firstContact()

console.log(lastUp)

let loopfork = 0