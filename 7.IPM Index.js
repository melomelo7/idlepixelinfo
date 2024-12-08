
const body = document.querySelector("body")
    const menu = addEle({dad:body,setClass:"menu"})
    const info = addEle({dad:body,setClass:"info"})
    const global = addEle({dad:body,setID:"info",width:"100%",height:"100%",margin:"40px 0 0 100px"})
        const right = addEle({dad:global,setID:"right"})

const lastUp = "(Last up 2024/12/09 01:00) * Last update/patch V.2.2.18"
const infoTitle = "Idle Planet Miner Infos " +lastUp

const togSel = "linear-gradient(to bottom left,rgba(90,185,47,0.5) 70%,rgba(169,169,169,1))"
const togNot = "linear-gradient(to bottom left,rgba(0,0,0,0) 60%,rgba(169,169,169,1))"

info.innerHTML = infoTitle

let projectPop = undefined

const menuButtons = [
    {label:"News",clickFunction:clickNews},
    {label:"Settings",clickFunction:clickSettings},
    {label:"Faq",clickFunction:clickFaqs},
    {label:"Planets",clickFunction:clickPlanets},
    {label:"Items",clickFunction:clickItems},
    {label:"Projects",clickFunction:clickProjects},
    {label:"Station",clickFunction:clickStation},
    {label:"Rooms",clickFunction:clickRooms},
    {label:"Process",clickFunction:clickProcess},
]

function addLeftButtons(){menuButtons.forEach(btn=>{
    let myc = "" ; if(btn.label==="News"){myc="springgreen"}
addEle({dad:menu,setClass:"menuBtn",text:btn.label,backG:togNot,textC:myc,setFunc:btn.clickFunction}) }) }

addLeftButtons()

window.onload = firstContact()

console.log(lastUp)

let loopfork = 0

window.scroll(0,0)
