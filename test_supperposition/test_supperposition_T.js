
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

function setHomeStorage(){
    cleanParent(getID("storageFrame"))
    
    addEle({dad:getID("storageFrame"),setClass:"contRow",setID:"storageFrameFork"})
        addEle({dad:getID("storageFrameFork"),setClass:"contCol",setID:"storageFrA",})
        addEle({dad:getID("storageFrameFork"),setClass:"contCol",setID:"storageFrB",marginL:"10px"})


    addEle({dad:getID("storageFrA"),text:spit("homeStorageInfo"),margin:"10px 0 10px 10px"})
    let idx = 0
    player.houseStorage.items.forEach((itm)=>{
        
let ttt = 3
getID("info").innerHTML = ttt
        
        idx++
        addEle({dad:getID("storageFrA"),setClass:"clickBtn",text:idx+" : "+itm.label,minWidth:"180px",backC:colors.silver,
        textC:colors.black,margin:"0",textA:"left",paddingL:"10px",setFunc:(e)=>{
            cleanParent(getID("storageFrB"))
            thisEl = player.houseStorage.items[(e.srcElement.innerHTML.split(" : ")[0]-1)]
            addEle({dad:getID("storageFrB"),setClass:"tab",setID:"storageFrB_cont"})
            
                addEle({dad:getID("storageFrB_cont"),setClass:"contRow",setID:"storageTitle",alignItems:"center"})
                
                    addEle({dad:getID("storageTitle"),setID:"storageSelected",text:e.srcElement.innerHTML})
                    
                    addEle({dad:getID("storageTitle"),setClass:"clickBtn",backC:colors.black,textC:colors.darkkhaki,text:"?",
                    setID:"storageTipToggle",display:"none",marginL:"10px",setFunc:()=>{
                    getID("storageSelectedTip").style.display = getID("storageSelectedTip").style.display==="none"?"block":"none"}})
                if(thisEl.tip!==""){getID("storageTipToggle").style.display="block"
                addEle({dad:getID("storageFrB_cont"),setID:"storageSelectedTip",text:thisEl.tip,display:"none",backC:colors.darkkhaki})}
                console.log(thisEl)
                txt = "Durability:"+thisEl.durability+"<br>(item break when durability reach 0)<br>Item Load:"+thisEl.baseLoad.toFixed(2)
                txt += thisEl.isFilled.value===0 ? "" : " + " + (thisEl.isFilled.value * thisEl.isFilled.unitLoad).toFixed(2) +
                " ("+thisEl.isFilled.value+" "+thisEl.isFilled.label+")"
                addEle({dad:getID("storageFrB_cont"),text:txt})



                let setArrow = true
                if(thisEl.canBring==="empty" && thisEl.isFilled.value > 0){setArrow = false}
                if(setArrow){
                    addEle({dad:getID("storageFrB_cont"),setClass:"tab",setID:"storageTransferFr",width:"fit-content",height:"fit-content"})
                        addEle({dad:getID("storageTransferFr"),setClass:"contRow",setID:"storageTransferFrL1",text:"ok"})
                        
                            addEle({dad:getID("storageTransferFrL1"),setClass:"clickBtn",text:"Send to Inventory",backC:colors.green})

                }


        }})

        /*

        if(itm.canBring==="empty" && itm.isFilled.value > 0){setArrow = false}

        addEle({dad:getID("storageFrameA"),setClass:"contRow",setID:"StorageItmFr"+idx,border:"solid red 2px",
        
        
        
        minHeight:"28px",alignItems :"center"})
            txt = itm.canStack.quantity > 1 ? itm.label + " (" + itm.canStack.quantity+")" : itm.label 
            addEle({dad:getID("StorageItmFr"+idx),setID:"StorageItm"+idx,text:txt,minWidth:"160px"})
            if(setArrow){
                addEle({dad:getID("StorageItmFr"+idx),setClass:"clickBtn",setID:"StorageItmSendBtn"+idx,text:"=> I "
                ,setFunc:(e)=>{
                    thisIdx = e.srcElement.id.split("StorageItmSendBtn")[1]
                    txt = getID("StorageItm"+thisIdx).innerHTML 
                    thisEl = player.houseStorage.items.filter(x=>x.label === txt)[0]
                    thisIdx = player.houseStorage.items.findIndex(x=>x.label===txt)
                }})
            }
            */
            


    })
        

}

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
                setHomeStorage()
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
