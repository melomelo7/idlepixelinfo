
const body = document.querySelector("body")

let myEl = undefined
let txt = ""
let player = {
    inventory:[],
}

let thisCont = addEle({dad:body,setClass:"contRow",width:"100%"})
    let menu = addEle({dad:thisCont,setClass:"leftMenu"})
    let content = addEle({dad:thisCont,setClass:"contCol",width:"100%"})
        let info = addEle({dad:content,setClass:"info"})

const menuBtns = ["Locations"]

const locations = [
    {label:"Village Center",locked:false,
    cost:[],
    generate:{label:"",rate:0},
    products:["Stone","Horse","Iron","Fish","Fur","Smallfolk","Ore",
    "Wood","Cloth","Grains",],
    upgrades:[]},
    {label:"Counting House",locked:true,
    cost:[{label:"Stone",quantity:5},{label:"Wood",quantity:5}],
    generate:{label:"",rate:0},
    products:[],
    upgrades:[]},
]

function setMenuBtns(){
    menuBtns.forEach((btn)=>{
        addEle({dad:menu,setClass:"menuBtn",text:btn,setFunc:toggleMenus})
        addEle({dad:content,setClass:"mainTab",setID:"tab"+btn,text:btn,display:"none"})
    })
}

function toggleMenus(e){
    let myBt = e.srcElement
    myEl = getID("tab"+myBt.innerHTML)
    switch(myEl.style.display){
        case "none" : myEl.style.display = "flex" ; myBt.style.color = "red" ; break
        case "flex" : myEl.style.display = "none" ; myBt.style.color = "#C0AE77" ; break
    }}

setMenuBtns()
setLocations()

function setLocations(){
    let myCont = addEle({dad:getID("tabLocations"),setClass:"contCol"})
        addEle({dad:myCont,setClass:"contRow",flWrap:"wrap",setID:"loc_fr",border:"red solid 2px"})
        addEle({dad:myCont,setClass:"subTab",setID:"loc_content",text:"Click a Location"})
        locations.forEach((loc)=>{
            myEl = addEle({dad:getID("loc_fr"),setClass:"clickBtn",text:loc.label,
            setFunc:(e)=>{fillLocation(e.srcElement.innerHTML)},backC:loc.locked})
            if(loc.locked===true){myEl.style.backgroundColor="black"}
        })
}

function fillLocation(lbl){
    console.log("run")
    myEl = locations.filter(loc=>loc.label===lbl)[0]
    let myCont = getID("loc_content")
    myCont.innerHTML = ""
    cleanParent(myCont)
    if(myEl.locked === true){
        let ownCost = true
        txt = "This location is locked now, to unlock it you need :<br>"
        myEl.cost.forEach((cost)=>{
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
                myEl.cost.forEach((cost)=>{
                    switchInvItem({label:cost.label,quantity:cost.quantity,putIn:false})})
                    myEl.locked = false
                    for(let i=0;i<getID("loc_fr").children.length;i++){
                        if(getID("loc_fr").children[i].innerHTML===lbl)
                            {getID("loc_fr").children[i].style.backgroundColor = "#583E31"}}
                fillLocation(lbl)  }}) }
    } else {
        myCont.innerHTML = "all good"
    }
}

switchInvItem({label:"Stone",quantity:10})
switchInvItem({label:"Wood",quantity:10})

console.log(player.inventory)
