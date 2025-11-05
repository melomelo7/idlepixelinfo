
let veggies = [
    {lbl:"Carrots",
    level:0,
    from:"Carrot seeds",
    harvest:"3~5",
    time:60,
    energy:1,
    expGain:3,
    silverCost:5,
    goldCost:0,
    silverPay:2,
    goldPay:0,
    effect:{lbl:"Energy",val:3,},
    info:"eat to restore 3 energy",
    },
    {lbl:"Onions",
    level:1,
    from:"Onion seeds",
    harvest:"2~5",
    time:120,
    energy:3,
    expGain:5,
    silverCost:10,
    goldCost:0,
    silverPay:5,
    goldPay:0,
    effect:{lbl:"Energy",val:6,},
    info:"eat to restore 6 energy",
    },
    {lbl:"Spinach",
    level:2,
    from:"Spinach seeds",
    harvest:"4~5",
    time:300,
    energy:5,
    expGain:10,
    silverCost:25,
    goldCost:0,
    silverPay:10,
    goldPay:0,
    effect:{lbl:"Energy",val:10,},
    info:"eat to restore 10 energy",
    }
]

// {type:"farming",lbl:"Carrot seeds",qt:5}

function setFarming(){

    let skill = getSkill("Farming")

    let win1 = getDialogTopFrame()
    
    let cont = addEle({dad:win1,setClass:"contCol",width:"fit-content",minHeight:"400px",
    textC:"rgb(187, 181, 181)",fontS:"18px"})

        let subC = addEle({dad:cont,setClass:"contRow",marginT:"10px 0",justifyC:"space-between",
            alignItems:"center",minWidth:"280px"})
            
            addEle({dad:subC,text:skill.lbl,borderB:"2px solid #5A0000",fontS:"22px",marginL:"20px"})

            addEle({dad:subC,setClass:"btn",text:addEmo("❌","emoji red cross"),setFunc:()=>{
                win1.remove()
                lockScroll(false)
                getID("actions").selectedIndex = 0
            }}) 

        subC = addEle({dad:cont,setClass:"contRow",margin:"5px 10px"})
            addEle({dad:subC,marginR:"20px",setID:"skillLvl"})
            addEle({dad:subC,setID:"skillExp"})

        subC = addEle({dad:cont,setClass:"contRow",margin:"5px 0"})
            addEle({dad:subC,setID:"toggleSeedsLbl",margin:"0 20px 0 10px",textC:"green"})
            addEle({dad:subC,what:"checkbox",isInput:true,setID:"toggleSeeds",setClass:"toggle-checkbox",
            margin:"10px",setFunc:(e)=>{
                let tgt = getID("toggleSeedsLbl")
                if(e.srcElement.checked){
                    tgt.innerHTML = "Plant"
                    }
                else {
                    tgt.innerHTML = "Buy"
                    }
                updFarmingInfos()
            }})
            addEle({dad:subC,what:"label",setFor:"toggleSeeds",setClass:"toggle-label",marginR:"10px"})

        subC = addEle({dad:cont,setClass:"contRow",minHeight:"22px"})
            addEle({dad:subC,marginL:"10px",setID:"seedsSilver",marginR:"20px"})
            addEle({dad:subC,marginL:"10px",setID:"seedsGold"})


        addEle({dad:cont,what:"select",setClass:"select",setID:"seedsSelect",
        marginT:"10px",setFunc:(e)=>{
            let src = e.srcElement 
            if(src.selectedIndex!==0){
                if(!getID("toggleSeeds").checked)
                     {buyVeggie(src.value)}
                else {console.log("cheked")}
            }
        }})
            addEle({dad:getID("seedsSelect"),what:"option",text:"-- Select seed --"})
            if(!getID("toggleSeeds").checked)
                 {veggies.forEach(v=>{addEle({dad:getID("seedsSelect"),what:"option",text:v.lbl+" - Lvl "+v.level})})}
            else {}  
            

        addEle({dad:cont,setClass:"contCol",setID:"farmFr",padding:"10px"})


    notif("Farming","Carrots Ready !")

skillLevelling(0)
skillLevelling(1)



    let evt = new Event("change") ; getID("toggleSeeds").dispatchEvent(evt)

    win1.showModal()
    lockScroll()


    console.log("farming !")

console.log(clock(60))

}

function updFarmingInfos(){
    let skill = getSkill("Farming")
    getID("skillLvl").innerHTML = "Lvl : " + skill.lvl
    getID("skillExp").innerHTML = "Exp : " + skill.current + "/" + skill.next
    if(!getID("toggleSeeds").checked){
        getID("seedsSilver").innerHTML = "Silver : " + player.money.silver
        getID("seedsGold").innerHTML = " Gold : " + player.money.gold
    } else {
        getID("seedsSilver").innerHTML = ""
        getID("seedsGold").innerHTML = ""
    }
}

function buyVeggie(vegie){
    let itm = veggies.filter(x=>x.lbl === vegie.split(" - ")[0])[0]
    console.log(itm)
    let cont = getID("farmFr")
    cleanParent(cont)

    if(itm.silverCost>0)
        {addEle({dad:cont,text:"cost : " + itm.silverCost + " Silver"})}
    else {addEle({dad:cont,text:"cost : " + itm.goldCost + "Gold"})}

    addEle({dad:cont,text:"use " + itm.energy + "energy"})
    addEle({dad:cont,text:"time : " + clock(itm.time)})
    addEle({dad:cont,text:"per harvest : " + itm.harvest})


    if(itm.silverPay>0)
         {addEle({dad:cont,text:"each sell for " + itm.silverPay + " Silver"})}
    else {addEle({dad:cont,text:"each sell for " + itm.goldPay + " Gold"})}
    addEle({dad:cont,text:"* info : " + itm.info})

    let subC = addEle({dad:cont,setClass:"contRow",alignItems:"center",margin:"5px"})
        addEle({dad:subC,text:"Buy",marginR:"10px"})
        let txt = ""
        if(itm.silverCost>0){
            if(player.money.silver>=itm.silverCost)
                 {txt = "max "+Math.floor(player.money.silver/itm.silverCost)}
            else {txt = "cant buy"}
        } else {
            if(player.money.gold>=itm.goldCost)
                 {txt = "max "+Math.floor(player.money.gold/itm.goldCost)}
            else {txt = "cant buy"}
        }
        addEle({dad:subC,what:"input",isInput:true,width:"60px",textA:"center",holder:txt})

}

/*
addEle({dad:subC,what:"checkbox",isInput:true,setID:"toggleCurrRate",setClass:"toggle-checkbox",
margin:"50px",setFunc:()=>{
    let ref = getID("toggleCurrRate") ; let disp = getID("currentRate") ; let txt = undefined
    if(ref.checked)
        {txt = "Custom" ; disp.innerHTML = spanText(yellow,txt) ; userI.currentSet = txt}
    else {txt = "Basic" ; disp.innerHTML = spanText(yellow,txt) ; userI.currentSet = txt}
    cleanParent(getID("advFr"))
    savUserI()
    setTools()
}})
addEle({dad:subC,what:"label",setFor:"toggleCurrRate",setClass:"toggle-label",marginR:"10px"})
*/