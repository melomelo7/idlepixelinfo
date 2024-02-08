
function setTabToggle(tabLabel){
    cleanParent(getID(tabLabel))
    addEle({dad:getID(tabLabel),text:tabLabel.split("tab")[1],setClass:"clickBtn",setFunc:redimTab,
    backC:player.destinations.menu.filter(x=>x.label === tabLabel.split("tab")[1])[0].color,}).click()
}

function setStatusTab(){
    setTabToggle("tabStatus")
    thisIdx = 0
    player.status.forEach((x)=>{
        thisIdx++
        addEle({dad:getID("tabStatus"),setID:"status"+thisIdx,setName:"statusGrp",
        text:x.cap === undefined ? x.label + x.value : x.label + x.value + "/" + x.cap})
    })
    addEle({dad:getID("tabStatus"),setID:"status"+(thisIdx+=1),setName:"statusGrp",text: spit("inventoryLoad")+ " (cap = Strength*2 + Bag Space)"})

    addEle({dad:getID("tabStatus"),setID:"status"+(thisIdx+=1),setName:"statusGrp",
    text: player.missions.label + player.missions.current})

//    txt = player.missions.btnTxt[0]
    txt = player.missions.nowOnBtn
    addEle({dad:getID("tabStatus"),text:txt,setClass:"clickBtn",setID:"missionBtn",backC:colors.darkslategrey,setFunc:viewMissions})
    addEle({dad:getID("tabStatus"),setClass:"tab",setID:"missionDetails",display:"none",width:"fit-content"})

    addEle({dad:getID("tabStatus"),text:btnTxt.preferences,setClass:"clickBtn",setID:"preferencesBtn",backC:colors.darkslategrey,setFunc:setPreferences})
    addEle({dad:getID("tabStatus"),setClass:"tab",setID:"preferencesDetails",display:"none",width:"fit-content"})    
}

function setPreferences(){
    thisTab = getID("preferencesDetails")
    cleanParent(thisTab)
    thisTab.style.display = thisTab.style.display === "none" ? "flex" : "none"
    player.preferences.forEach((x)=>{
        addEle({dad:thisTab,text:x.text})
        x.inputs.forEach((y)=>{
            let thisCont =  addEle({dad:thisTab,setClass:"contRow"})
                addEle({dad:thisCont,what:y.type,isInput:true,setVal:y.value,setID:"preference"+x+"Opt"+y,
                setName:"preference"+x,setFunc:()=>{
                    document.getElementsByName("preference"+x).forEach((x)=>{if(x.checked){
                        info.innerHTML = y.tip
                        spit("actionsToMax").setTo = x.value
                        }})
                     }})
                addEle({dad:thisCont,text:y.value})
        })
        document.getElementsByName("preference"+x).forEach((z)=>{if(z.value===x.setTo){z.checked = true}})
    })
}

function setInventoryTab(){
    setTabToggle("tabInventory")
    let inv = player.inventory

inv.push("a")
inv.push("b")
inv.push("c")

    if (inv.length === 0){
        addEle({dad:getID("tabInventory"),text:"Inventory is Empty !! (0)"})
    } else {
        addEle({dad:getID("tabInventory"),text:inv.length + " type of item(s) in Inventory"})
    }

    console.log("tab inventory go")
    console.log(player.inventory)
}

function setInventory(which){

    let inv_Fr = undefined
    let inv_Ar = undefined
    let topTxt = ""

    switch(which){
        case "Home" : 
            inv_Fr = getID("storageFrame") ; inv_Ar = player.houseStorage.items ; topTxt = spit("homeStorageInfo") ; break
        case "Inventory" : 
            inv_Fr = undefined ; inv_Ar = undefined ; break
    }

    cleanParent(inv_Fr)

    addEle({dad:inv_Fr,setClass:"contRow",setID:"inv_Fork"})
        addEle({dad:getID("inv_Fork"),setClass:"contCol",setID:"inv_ForkA",}) // storageFrA
        addEle({dad:getID("inv_Fork"),setClass:"contCol",setID:"inv_ForkB",marginL:"10px"}) // storageFrB
    
        addEle({dad:getID("inv_ForkA"),text:topTxt,margin:"10px 0 10px 10px"}) //
        let idx = 0
        inv_Ar.forEach((itm)=>{
            idx++
            addEle({dad:getID("inv_ForkA"),setClass:"clickBtn",text:idx+" : "+itm.label,minWidth:"180px",backC:colors.silver,
            textC:colors.black,margin:"0",textA:"left",paddingL:"10px",setFunc:(e)=>{
                cleanParent(getID("inv_ForkB"))
                thisEl = inv_Ar[(e.srcElement.innerHTML.split(" : ")[0]-1)]

                addEle({dad:getID("inv_ForkB"),setClass:"tab",setID:"inv_ForkB_Fr"}) // storageFrB_cont

                let tipBox = addEle({dad:getID("inv_ForkB_Fr"),text:"iteminfo",display:"none",backC:colors.darkkhaki})


                thisCont = addEle({dad:getID("inv_ForkB_Fr"),setClass:"contRow",alignItems:"center",minHeight:"22px"})

                    addEle({dad:thisCont,setID:"inv_Selected",text:e.srcElement.innerHTML}) // storageSelected

                    if(thisEl.tip!==""){addEle({dad:thisCont,setClass:"help",text:"?",marginL:"10px",setFunc:()=>{
                        tipBox.innerHTML = thisEl.tip ; tipBox.style.display = tipBox.style.display==="block"?"none":"block" }}) }
                addEle({dad:getID("inv_ForkB_Fr"),setClass:"line"})

                if(which==="Home" || which==="Inventory"){
                    thisCont = addEle({dad:getID("inv_ForkB_Fr"),setClass:"contRow",alignItems:"center",})
                        txt = "Change order, now "+ getID("inv_Selected").innerHTML.split(":")[0] + " set to"
                        addEle({dad:thisCont,text:txt,marginR:"5px"})
                        addEle({dad:thisCont,what:"input",isInput:true,width:"25px",textA:"center",setID:"inv_pos_val",
                        setVal:e.srcElement.innerHTML.split(":")[0],setFunc:()=>{
                            if(isNaN(getID("inv_pos_val").value))
                                {getID("inv_pos_val").value = 1}
                            else if (Number(getID("inv_pos_val").value)<1)
                                {getID("inv_pos_val").value = 1}
                            else if (Number(getID("inv_pos_val").value) > inv_Ar.length)
                                {getID("inv_pos_val").value = inv_Ar.length} 
                        }})
                        addEle({dad:thisCont,setClass:"help",text:"\u21E7",setID:"arrUp"+i,textC:colors.yellow,
                        setFunc:(e)=>{ getID("inv_pos_val").value = (Number(getID("inv_pos_val").value) -1) < 1 ? 1 : 
                        (Number(getID("inv_pos_val").value) -1) }})
                        addEle({dad:thisCont,setClass:"help",text:"\u21E9",setID:"arrUp"+i,textC:colors.yellow,margin:"0",
                        setFunc:()=>{getID("inv_pos_val").value = (Number(getID("inv_pos_val").value) +1) > inv_Ar.length ? 
                        inv_Ar.length : (Number(getID("inv_pos_val").value) +1) }})
                        addEle({dad:thisCont,setClass:"help",text:"ok",setID:"arrUp"+i,textC:colors.yellow,margin:"0",
                        height:"20px",setFunc:()=>{ let newVal = Number(getID("inv_pos_val").value)-1
                            let oldVal = Number(getID("inv_Selected").innerHTML.split(":")[0]) -1
                            if(oldVal !== newVal){inv_Ar.splice(newVal,0,inv_Ar.splice(oldVal,1)[0]) ; setInventory(which)}  }})
                }

                let thisDetails = thisEl.toDisplay.filter(x=>x.for===which)[0].details
                thisDetails.forEach((detail)=>{
                    switch(detail){
                        case "Quantity" :
                            addEle({dad:getID("inv_ForkB_Fr"),text:"Quantity : "+thisEl.canStack.quantity}) ; break
                        case "Durability" :
                        thisCont = addEle({dad:getID("inv_ForkB_Fr"),setClass:"contRow",alignItems:"center"})
                            addEle({dad:thisCont,text:"Durability : "+thisEl.durability})
                            addEle({dad:thisCont,setClass:"help",text:"?",marginL:"10px",setFunc:()=>{
                                tipBox.innerHTML = "Durability drop each use<br>Item break when reaching 0"
                                tipBox.style.display = tipBox.style.display==="block"?"none":"block" }})
                            break
                        case "Load" : 
                            txt = "Load : " + spit("itemLoad",thisEl).toFixed(2)
                            txt += thisEl.isFilled.value > 0 ? spit("itemLoad_Details",thisEl) : ""
                            addEle({dad:getID("inv_ForkB_Fr"),text:txt}) ; break
                        default : console.log("unknown item detail ...")
                    }
                })

                let setArrow = true
                if(thisEl.canBring==="empty" && thisEl.isFilled.value > 0){setArrow = false}
                if(setArrow){
                    let contFr = addEle({dad:getID("inv_ForkB_Fr"),setClass:"contCol",height:"30px"})
                        addEle({dad:contFr,setClass:"clickBtn",text:"Send to Inventory",backC:colors.green,marginT:"5px",
                        minWidth:"150px",setID:"storageTransferBtn",setFunc:(e)=>{
                            let refIdx = Number(getID("inv_Selected").innerHTML.split(" : ")[0])-1
                            let refItem = inv_Ar[refIdx]
                            let qtItem = !e.srcElement.innerHTML.includes(" : ") ? 1 : Number(e.srcElement.innerHTML.split(" : ")[1])
                            let freeLoad = which === "Home" ? spit("availableLoad","Inventory") : spit("availableLoad")
                            let needLoad = spit("itemLoad",refItem)
                            let itmCopy = JSON.parse(JSON.stringify(inv_Ar.splice(refIdx,1)[0]))
                            itmCopy.canStack.quantity = qtItem
                            inv_Ar.splice(refIdx,0,refItem)
                            
                            if((needLoad*qtItem)<freeLoad){ 
                                
                                getID("info").innerHTML = "Transfering " + qtItem + "x " + refItem.label +
                                ", Load " + (needLoad*qtItem) + "/" + freeLoad
                                
                                if(qtItem > 1 || refItem.canStack.value === true ){
                                    let getIdx = player.inventory.findIndex(x=>x.label === refItem.label)
                                    if(getIdx !==-1)
                                        {player.inventory[getIdx].canStack.quantity += qtItem}
                                    else {player.inventory.push(itmCopy)}
                                } else {player.inventory.push(itmCopy)}

                                refItem.canStack.quantity -= qtItem 
                                if(refItem.canStack.quantity === 0){inv_Ar.splice(refIdx,1)}
                                getID("menuInventory").style.display = "block"
                                setInventory(which)
                            } else {
                                getID("info").innerHTML = "Cannot transfer " + qtItem + "x " + refItem.label + 
                                ", needed Load " + (needLoad*qtItem) + "/" + freeLoad 
                            }
                            
//                            console.log("n:"+(needLoad*qtItem) + " <?> f:"+freeLoad)
                            console.log(inv_Ar)
                            console.log(player.inventory)

                        }})

                        thisCont = addEle({dad:contFr,setClass:"contRow",alignItems:"center"})
                        addEle({dad:thisCont,what:"range",isInput:true,setID:"transferRange",min:1,
                        max:thisEl.canStack.quantity,marginT:"10px",width:"95px",marginT:"-1px",setFunc:()=>{
                            getID("storageTransferBtn").innerHTML = "Send to Inventory : "+getID("transferRange").value }})
                        if(thisEl.canStack.quantity > 1){getID("transferRange").value = 1 ; contFr.style.height = "65px"
                        getID("storageTransferBtn").innerHTML = "Send to Inventory : "+getID("transferRange").value}

                        addEle({dad:thisCont,setClass:"clickBtn",text:"-",minWidth:"15px",radiusTR:"0",
                        radiusBR:"0",backC:colors.royalblue,margin:"0",marginL:"5px",setFunc:modTransferRange})

                        addEle({dad:thisCont,setClass:"clickBtn",text:"+",minWidth:"15px",radiusTL:"0",
                        radiusBL:"0",backC:colors.royalblue,margin:"0",setFunc:modTransferRange})
                }




            }})
        })

    /*
            

            let actionPool = thisEl.destinationAction
            
            if(actionPool.length > 0){
                addEle({dad:getID("storageFrB_cont"),setClass:"line"})
                let contFr = addEle({dad:getID("storageFrB_cont"),setClass:"contCol"})
                for(i=0;i<actionPool.length;i++){

                    addEle({dad:contFr,text:actionPool[i].label})
                }
            }
    
    
    */

}

function modTransferRange(e){
    let myRg = getID("transferRange")
    let myBt = getID("storageTransferBtn")
    let myTx = "Send to Inventory : "
    switch(e.srcElement.innerHTML)
        {case "-" : myRg.value = (myRg.value - 1) === 0 ? 1 : myRg.value - 1 ; myBt.innerHTML = myTx + myRg.value ; break
        case "+" : myRg.value = (myRg.value + 1) > myRg.max ? myRg.max : myRg.value + 1 ; myBt.innerHTML = myTx + myRg.value ; break}
    }

/*
function transferRadioGrp(){
    console.log(getID("storageTransferFr").getBoundingClientRect().height)
    let thisGRP = document.getElementsByName("transferRadio")
    thisGRP.forEach((x)=>{if(x.checked){
        let thisBtn = getID("storageTransferBtn")
        switch(x.value){
            case "1" : getID("storageTransferFr").style.height = "50px" ; thisBtn.innerHTML = "Send to Inventory : 1" ; break
            case "Customize" : 
                getID("storageTransferFr").style.height = "80px" 
                thisBtn.innerHTML = "Send to Inventory : 1" 
                getID("transferRange").value = 1
                break
            case "All" : getID("storageTransferFr").style.height = "50px" ; thisBtn.innerHTML = "Send to Inventory : " +
                player.houseStorage.items[(getID("storageSelected").innerHTML.split(" : ")[0]-1)].canStack.quantity ; break
        }
    }})
}
*/

function setActionTab(){

    console.log("set action")

    setTabToggle("tab"+spit("statusObj","Current Location : ").value)
    thisTab = getID("tab"+spit("statusObj","Current Location : ").value)
    thisTab.style.display = thisTab.style.display === "none" ? "flex" : "none"

    if(thisTab.id.includes("Home")){
        addEle({dad:thisTab,setClass:"tab",setID:"homeStorageCont"})
            addEle({dad:getID("homeStorageCont"),setClass:"clickBtn",text:"Home Storage",backC:colors.chocolate,
            setFunc:()=>{
                getID("storageFrame").style.display = getID("storageFrame").style.display === "none" ? "flex" : "none"
                setInventory("Home")
            }})
        addEle({dad:getID("homeStorageCont"),setClass:"tab",display:"none",setID:"storageFrame",})
    }

    

/*
    let actionsPool = []    



    let actions = spit("filterActions")
    let i=0
    actions.forEach((x)=>{
        i++
        addEle({dad:thisTab,setClass:"tab",setID:"frame"+i})
            /// action:i
            addEle({dad:getID("frame"+i), text:x.label,setID:"action:"+i})

            let thisObj = x.payout
            txt = "status"
            if(thisObj.filter(x=>x.type===txt).length > 0){
                for(l=0;l<thisObj.length;l++){
                    if(thisObj[l].type === txt){
                        thisEl = spit("statusObj",thisObj[l].label)
                        addEle({dad:getID("frame"+i),text:thisEl.label+thisEl.value+"/"+thisEl.cap,
                        setID:"payout:"+i+":"+thisIdx})        
                    }}}

            txt = "inventory"
            if(thisObj.filter(x=>x.type===txt).length > 0){
                for(l=0;l<thisObj.length;l++){
                    if(thisObj[l].type === txt){
                        thisEl = spit("inventoryObj",thisObj[l].label)

                        console.log(thisEl)

//                        addEle({dad:getID("frame"+i),text:thisEl.label+thisEl.value+"/"+thisEl.cap,
//                        setID:"payout:"+i+":"+thisIdx})        
//                        "Load : " + spit("currentLoad") + "/" + spit("maxLoad")

                    }}}
        



            addEle({dad:getID("frame"+i),setClass:"contCol",setID:"frame"+i+"Sub"})
                addEle({dad:getID("frame"+i+"Sub"),setClass:"contRow",setID:"frame"+i+"SubA",alignItems:"center"})
                    /// btn info:i
                    addEle({dad:getID("frame"+i+"SubA"),setClass:"clickBtn",text:"?",minWidth:"15px",
                    backC:colors.black,textC:colors.lime,setID:"info:"+i,setFunc:(e)=>{
                        let refAction = spit("currentAction",getID("action:"+e.srcElement.id.split(":")[1]).innerHTML)
                        info.innerHTML = "1 Time =>"
                        refAction.cost.forEach((y)=>{info.innerHTML += " "+y.label+"-"+y.value+" |"})
                        info.innerHTML += "||| "+refAction.particle+" "
                        refAction.payout.forEach((y)=>{
                            info.innerHTML += y.label +" x"
                            info.innerHTML += y.min === y.max ? y.min : y.min + "~" +y.max
                        })
                        info.innerHTML += "/" + refAction.time + " Sec"
                    }})

                    /// actionClickBtn:i
                    addEle({dad:getID("frame"+i+"SubA"),setClass:"clickBtn",text:"Run "+x.setTo,
                    minWidth:"15px",backC:colors.brown,marginL:"10px",setID:"actionClickBtn:"+i,
                    setFunc:(e)=>{
                        let nbt = 1
                        thisIdx = e.srcElement.id.split(":")[1]
                        let refAction = spit("currentAction",getID("action:"+thisIdx).innerHTML)                        
                        if(e.srcElement.innerHTML.includes("Max")){
                            if(refAction.payout.filter(x=>x.type==="status").length > 0){
                                let thisNbt = spit("getStatNbt",
                                [refAction.payout[0],spit("statusObj",refAction.payout[0].label)])
                                thisEl.innerHTML += " ("+thisNbt+"x)"
                            } else {
                                info.style.backgroundColor = colors.brown
                                info.innerHTML = "unknown customize Max"
                            }
                        }


//                        console.log(spit("statusObj",x.payout[0].label))
  //                      console.log(x.payout[0])
                        let my = spit("getNbt",[spit("statusObj",x.payout[0].label),x.payout[0]])
                        console.log(my)

                        let nbt = 1
                        if(e.srcElement.innerHTML.includes("Max")){
                            let refPay = x.payout[0]
                            let refStat = spit("statusObj",refPay.label)

                            if(refStat.value === refStat.cap)
                                {nbt = 0;info.innerHTML = refStat.text+refStat.value+"/"+refStat.cap+" ... Action Aborted"}
                            else {
    
                                switch(spit("currentPreference","actionsToMax")){
                                    case "Eco" : nbt = Math.floor((refStat.cap - refStat.value)/refPay.min) ; break
                                    case "Full" : nbt = Math.ceil((refStat.cap - refStat.value)/refPay.min) ; break
                                    default : console.log("unknown actionmax type") 
                                }
                            }
                        }

                        console.log ("run action time x"+nbt)

                        
                    }})

                    addEle({dad:getID("frame"+i+"SubA"),setClass:"progressBox",setID:"actionProgress"+i,
                    height:"20px",marginL:"10px"})
                        /// progress:i
                        addEle({dad:getID("actionProgress"+i),setClass:"progressInt",setID:"progress:"+i,width:"0"})

                    if(x.customize.length>0){
                        /// customize:i
                        addEle({dad:getID("frame"+i+"SubA"),setClass:"clickBtn",text:"Customize",
                        marginL:"10px",backG:"linear-gradient(to bottom right, blue, black)",setID:"customize:"+i,
                        setFunc:(e)=>{
                            thisIdx = e.srcElement.id.split(":")[1]
                            getID("customFrame"+thisIdx).style.display = 
                            getID("customFrame"+thisIdx).style.display === "none" ? "flex" : "none"
                        },})

                        addEle({dad:getID("frame"+i+"Sub"),setClass:"tab",setID:"customFrame"+i,display:"none",})
                            let j=0
                            x.customize.forEach((y)=>{
                                j++
                                addEle({dad:getID("customFrame"+i),setClass:"contCol",setID:"cus"+i+"OptFr"+j,border:"red solid 1px",})
                                    addEle({dad:getID("cus"+i+"OptFr"+j),setClass:"contRow",setID:"cus"+i+"OptFr"+j+"sub"})
                                        addEle({dad:getID("cus"+i+"OptFr"+j+"sub"),what:"radio",isInput:true,setVal:y.value,
                                        setID:"custom:"+i+":"+j,setName:"customize"+i,setFunc:(e)=>{
                                            thisIdx = e.srcElement.id.split(":")[1]
                                            let thisGrp = document.getElementsByName("customize"+thisIdx)

                                            thisGrp.forEach((k)=>{if(k.checked){
                                                thisEl = getID("actionClickBtn:"+k.id.split(":")[1])
                                                thisEl.innerHTML = "Run " + k.value
                                                if(k.value.includes("Max")){
                                                    let refAction = spit("currentAction",getID("action:"+thisIdx).innerHTML)
                                                    if(refAction.payout.filter(x=>x.type==="status").length > 0){
                                                        let thisNbt = spit("getStatNbt",
                                                        [refAction.payout[0],spit("statusObj",refAction.payout[0].label)])
                                                        thisEl.innerHTML += " ("+thisNbt+"x)"
                                                    } else {
                                                        info.style.backgroundColor = colors.brown
                                                        info.innerHTML = "unknown customize Max"
                                                    }
                                                }
                                            }})
                                        }})

                                        addEle({dad:getID("cus"+i+"OptFr"+j+"sub"),text:y.value,})
                            })
                    }
                    document.getElementsByName("customize"+i).forEach((z)=>{if(z.value===x.setTo){z.checked = true}})
                    
    })


*/

}
