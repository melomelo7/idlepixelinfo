
const body = document.querySelector("body")

const menu = addEle({dad:body,setClass:"menu"})

const info = addEle({dad:body,setClass:"info"})

const global = addEle({dad:body,setID:"info",width:"100%",height:"100%",margin:"40px 0 0 100px"})


    const right = addEle({dad:global,setID:"right"})

const lastUp = "(Last up 2024/05/05 01:20) *new expensive item*"
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






/*
function rewrite(mybig){
    let linecar1 = "\n"
    let linecar2 = "\n    "
    let linecar3 = "<br>"

let startPart = "new projectCell({"
let endPart = "}),"

let areaPart = ""
let labelPart = ""
let descriptionPart = ""
let commentPart = ""
let prerequisitesPart = ""
let highestPlanetRequiredPart = ""
let componentsPart = ""

let myNewT = ""

    let thisArr = mybig.split(startPart)

let myWr = addEle({dad:right,setClass:"contCol_W"})

    console.log(thisArr)
    for(let i=1;i<thisArr.length;i++){
        let pure = thisArr[i].split(endPart)[0]
        componentsPart = "components:["
        //if(i===thisArr.length-1){

            myNewT += startPart// + linecar3
            
            let pureArr = pure.split(linecar2)
            for(j=1;j<pureArr.length;j++){
                
//                console.log(pureArr[j])
//                console.log(pureArr[j].includes('label:"'))
  //              console.log(pureArr[j].includes("component"))

                addEle({dad:myWr,text:pureArr[j]})
                if(pureArr[j].includes("area:")){areaPart = pureArr[j]}
                else if(pureArr[j].includes("label") && 
                !pureArr[j].includes("component")){labelPart = pureArr[j]}
                else if(pureArr[j].includes("description:")){descriptionPart = pureArr[j]}
                else if(pureArr[j].includes("comment:")){commentPart = pureArr[j]}
                else if(pureArr[j].includes("prerequisites:")){prerequisitesPart = pureArr[j]}
                else if(pureArr[j].includes("highestPlanetRequired:")){highestPlanetRequiredPart = pureArr[j]}
                else{
                    if(pureArr[j].includes("component")){
                        componentsPart += pureArr[j].slice(11)
                    } else {
                        console.log("?")
                        console.log("** this ** > " + pureArr[j])
                    }

                }

                
            }

            componentsPart += "],"

            myNewT += "<dd>" + areaPart
            myNewT += linecar3 + labelPart
            myNewT += linecar3 + componentsPart
            myNewT += linecar3 + descriptionPart
            myNewT += commentPart !=="" ? linecar3 + commentPart : ""
            myNewT += linecar3 + prerequisitesPart
            myNewT += linecar3 + highestPlanetRequiredPart + endPart +"</dd>"
            myNewT += linecar3 + linecar3

            /*
            console.log(pureArr)
            console.log("1>"+areaPart)
            console.log("2>"+labelPart)
            console.log("3>"+componentsPart)
            console.log("4>"+descriptionPart)
            
        //}
    }
    myNewT += linecar3

myWr.innerHTML = myNewT

}

rewrite(mybig)

*/
//new projectCell({ area:"Colonization", label:"advanced terraforming", components:[{label:"satellite dish",baseCost:10,costWithMaxLab:5},], description:"pick any unlocked planet and increase
//its colonization level by 3 instantly", comment:spanText("crimson","**1x Planet <=> 1x Terraforming**"), prerequisites:"terraforming", highestPlanetRequired:"28-Tikkun"}), 