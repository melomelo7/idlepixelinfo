
const body = document.querySelector("body")
const path1 = "./imgs/"
const path2 = ".jpg"

let thisCont = addEle({dad:body,setClass:"contRow",width:"100%"})
    let menu = addEle({dad:thisCont,setClass:"leftMenu"})
    let content = addEle({dad:thisCont,setClass:"contCol",width:"100%"})
        let infoFr = addEle({dad:content,setClass:"info"})
            addEle({dad:infoFr,what:"img",imgSize:60,imgSrc:"advisor"})
            let info = addEle({dad:infoFr,marginL:"10px"})

let myEl = undefined
let txt = ""
let player = {
    start:true,
    workers:[{label:"Workers",quantity:0,free:0,set:[],  }],
    inventory:[],
    loop:{id:undefined,queue:[]},
}

if(player.start){
    switchInvItem({label:"Silver Coins",quantity:500})
    info.innerHTML = `Gooday my Lord,<br>My advice for now is to try 
    restoring as many locations<br>as possible, hire workers ... 
    and adventurers : for quests.`
    player.start = false
}

const menuBtns = [
    {label:"Inventory",setFunc:setInventory},
    {label:"Locations",setFunc:undefined},
]

const locations = [
    {label:"Village Center",
    locked:{status:true,cost:[{label:"Silver Coins",quantity:200}],},
    generate:{label:"",rate:0},
    resources:["Workers","Grains","Wood","Stone","Fish","Horse",
    "Iron","Fur","Ore","Cloth",],
    upgrades:[]},
    {label:"Counting House",
    locked:{status:true,cost:[{label:"Stone",quantity:5},{label:"Wood",quantity:5}],},
    generate:{label:"Silver Coins",rate:200,seconds:3600},
    resources:[],
    upgrades:[]},
]

function setMenuBtns(){
    menuBtns.forEach((btn)=>{
        txt = btn.label
        addEle({dad:menu,setClass:"menuBtn",text:txt,setFunc:(e)=>{
            toggleMenus(e)
            myEl = menuBtns.filter(x=>x.label===e.srcElement.innerHTML)[0]
            if(myEl.setFunc !==undefined){myEl.setFunc()}
        }})
        addEle({dad:content,setClass:"mainTab",setID:"tab"+txt,text:txt,display:"none"})
    })
}

function toggleMenus(e){
    let grp = menu.children
    for(let i=0;i<grp.length;i++){
        myEl = getID("tab"+grp[i].innerHTML)
        if(grp[i].innerHTML===e.srcElement.innerHTML){
            myEl.style.display = "flex"
            grp[i].style.color = "lime"
        } else {
            myEl.style.display = "none"
            grp[i].style.color = "#C0AE77" 
        }
    }
}

setMenuBtns()
setLocations()

function setInventory(){
    let myTab = getID("tabInventory")
    cleanParent(myTab)
    myEl = getInventoryObj("Gold Coins")
    if(myEl){addDisplayLine(myTab,myEl)}
    myEl = getInventoryObj("Silver Coins")
    if(myEl){addDisplayLine(myTab,myEl)}

    let myArr = player.inventory.filter(x=> 
    x.label !== "Gold Coins" && x.label !== "Silver Coins" && x.quantity > 0)
    for(let i=0;i<myArr.length;i++) {addDisplayLine(myTab,myArr[i],true)}
}

function setLocations(){
    let myCont = addEle({dad:getID("tabLocations"),setClass:"contCol"})
        addEle({dad:myCont,setClass:"contRow",flWrap:"wrap",setID:"loc_fr",border:"red solid 2px"})
        addEle({dad:myCont,setClass:"subTab",setID:"loc_content",text:"Click a Location"})
        locations.forEach((loc)=>{
            myEl = addEle({dad:getID("loc_fr"),setClass:"clickBtn",text:loc.label,
            setFunc:(e)=>{fillLocation(e.srcElement.innerHTML)},backC:"#583E31"})
            if(loc.locked.status ===true){myEl.style.backgroundColor="black"}
        })
}

function fillLocation(lbl){
    myEl = locations.filter(loc=>loc.label===lbl)[0]
    let myCont = getID("loc_content")
    myCont.innerHTML = ""
    cleanParent(myCont)
    if(myEl.locked.status === true){
        let ownCost = true
        txt = "This location is locked now, to unlock it you need :<br>"
        myEl.locked.cost.forEach((cost)=>{
            txt += '<span style="color:'
            switch(checkOwned(cost.label,cost.quantity)){
                case true : 
                    txt+='lime">' + cost.quantity + "x " + cost.label ; break
                case false : ownCost = false 
                    txt+='red">' + cost.quantity + "x " + cost.label ; break
            }
            txt += "</span> "
        })
        let subCont = addEle({dad:myCont,setClass:"contRow"})
            addEle({dad:subCont,text:txt})
        if(ownCost === true){
            addEle({dad:myCont,setClass:"clickBtn",text:"Unlock",setFunc:()=>{
                myEl.locked.cost.forEach((cost)=>{
                    switchInvItem({label:cost.label,quantity:cost.quantity,putIn:false})})
                    myEl.locked.status = false
                    for(let i=0;i<getID("loc_fr").children.length;i++){
                        if(getID("loc_fr").children[i].innerHTML===lbl)
                            {getID("loc_fr").children[i].style.backgroundColor = "#583E31"}}
                fillLocation(lbl)  }}) }
    } else {
        info.innerHTML = ""

        let thisCont = addEle({dad:myCont,setClass:"contCol"})
            if(myEl.generate.label!==""){
                // location generates X resource
            }
            if(myEl.resources.length>0){
                info.innerHTML = "resources : " + myEl.resources.length
                addEle({dad:thisCont,setClass:"clickBtn",text:"Resources",setFunc:()=>{
                getID("resourcesFr").style.display = getID("resourcesFr").style.display
                === "none" ? "flex" : "none" }})
                addEle({dad:thisCont,setClass:"subTab",display:"none",setID:"resourcesFr"})
                    addEle({dad:getID("resourcesFr"),text:spit("Workers"),marginB:"10px"})
                for(let i=0;i<myEl.resources.length;i++){
                    addResourceLine(getID("resourcesFr"),myEl.resources[i],i)
                }
            }
            if(myEl.upgrades.length>0){
                info.innerHTML += " upgrades : " + myEl.upgrades.length
            }

    }
}

