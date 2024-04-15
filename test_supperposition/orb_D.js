
function crafterCost(multi=10){
    let srcObj = player.crafting
    let outuptArr = []

    for(let i=0;i<srcObj.baseCost.length;i++)
        {outuptArr.push({label:srcObj.baseCost[i].label,quantity:srcObj.baseCost[i].quantity})}

    if(srcObj.crafters.length > 0){
        for(let i=0;i<srcObj.baseCost.length;i++){
            let myVal = srcObj.baseCost[i].quantity
            for(let j=0;j<srcObj.crafters.length;j++){myVal *= multi}
            outuptArr[i].quantity = myVal }}
    return outuptArr
}

function setTabCrafting(keyWord){
    let myTab = getID("tab"+keyWord)
    cleanParent(myTab)
    
    addEle({dad:myTab,setID:"craftingInfo",borderB:"solid 2px beige",minHeight:"100px",marginT:"5px",text:
    "*!* After starting a Craft you can stop/cancel but costs are lost *!*"})

addEle({dad:myTab,setClass:"clickBtn",text:"show lyxes",setFunc:()=>{console.log(getPlObj("Lyxes").lyx)}})

    addEle({dad:myTab,text:"Add a crafter, " + dispSpanCost(crafterCost())})
    let ownCost = true
    crafterCost().forEach(cst=>{if(checkCost(cst.label,cst.quantity,false)===false){ownCost=false}})
    if(ownCost){
        addEle({dad:myTab,setClass:"clickBtn",text:"Add a crafter",minWidth:"200px",setFunc:()=>{
            crafterCost().forEach(cst=>checkCost(cst.label,cst.quantity))
            let srcObj = player.crafting
            txt = "Crafter " + (srcObj.crafters.length +1)
            srcObj.crafters.push({label:txt,nowCrafting:"",workerName:"",})
            setTabCrafting("Crafting")
        }})
    }

    let myCont = addEle({dad:myTab,setClass:"contRow",marginT:"20px"})
        addEle({dad:myCont,setClass:"contCol",setID:"craftingForkA"})
        addEle({dad:myCont,setClass:"contCol",setID:"craftingForkB",margin:"0 30px 0 10px"})
        addEle({dad:myCont,setClass:"contCol",setID:"craftingForkC",textA:"center"})

    let srcObj = player.crafting
    for(let i=0;i<srcObj.crafters.length;i++){
        addEle({dad:getID("craftingForkA"),setClass:"crafter",setID:srcObj.crafters[i].label,
        text:srcObj.crafters[i].label,setFunc:(e)=>{displayCrafter(e.srcElement.id)}})
    }
}

function displayCrafter(crafterID){
    if(timeFreeze){console.log("freeze");return}

    let thisCrafter = player.crafting.crafters.filter(cr=>cr.label==="Crafter "+crafterID.slice(crafterID.length-1))[0]
    cleanParent(getID("craftingForkB"))
    cleanParent(getID("craftingForkC"))

//console.log(crafterID)
//console.log(thisCrafter)
//console.log(player.crafting)

    let myCont = getID("craftingForkB")
    if(thisCrafter.nowCrafting===""){

        let subCont = addEle({dad:myCont,setClass:"mainTab",setID:"craftingRecipe",width:"fit-content",
        alignItems:"center"})
            addEle({dad:subCont,text:thisCrafter.label + " " + spanText("lime","Available"),marginB:"10px"})

            if(thisCrafter.workerName==="" && player.crafting.lyxJob===true){
                let subCont2 = addEle({dad:subCont,setClass:"subTab"})
                    txt = "Assign a Lyx to work on this crafter<br>(automation: cost will include Lyx needs)"
                    addEle({dad:subCont2,text:txt})
                    txt = thisCrafter.label + " : Assign Lyx"
                    addEle({dad:subCont2,setClass:"clickBtn",text:txt,minWidth:"240px",setFunc:(e)=>{
                        let thisCont = getID("craftingForkC")
                        cleanParent(thisCont)
                        txt = e.srcElement.innerHTML.split(" : ")[0] + " : Lyxes Available" 
                        addEle({dad:thisCont,text:txt,setID:"lyxAssign"})
//                        console.log(getPlObj("Lyxes").lyx)
                        getPlObj("Lyxes").lyx.filter(lx=>lx.job===undefined).forEach(itm=>{
                            addEle({dad:thisCont,setClass:"clickBtn",text:itm.name,minWidth:"100px",setFunc:(e)=>{
                                txt = getID("lyxAssign").innerHTML.split(" : ")[0]
                                player.crafting.crafters.filter(cr=>cr.label===txt)[0].workerName = e.srcElement.innerHTML
                                getPlObj("Lyxes").lyx.filter(lx=>lx.name===e.srcElement.innerHTML)[0].job = "Craftman"

                                displayCrafter(txt)
//                                console.log(getPlObj("Lyxes").lyx.filter(lx=>lx.name===e.srcElement.innerHTML)[0])
                            }})
                        })
//                        console.log("set maLyx => "+e.srcElement.innerHTML)
                    }})
            }
            else if(thisCrafter.workerName!==""){
                let subCont2 = addEle({dad:subCont,setClass:"subTab",text:"Lyx working here : " + thisCrafter.workerName})
                txt = thisCrafter.label + " : remove working Lyx"
                addEle({dad:subCont2,setClass:"clickBtn",text:txt,setFunc:(e)=>{ 
                    txt = e.srcElement.innerHTML.split(" : ")[0]
                    player.crafting.crafters.filter(cr=>cr.label===txt)[0].workerName = ""
                    displayCrafter(txt)
                }})
            }
    
            addEle({dad:subCont,setClass:"clickBtn",text:"Pick a recipe to craft",minWidth:"240px",marginL:"0",setFunc:()=>{
                let thisCont = getID("craftingForkC") 
                cleanParent(thisCont)
                thisCont.innerHTML = "Recipes :"
                player.blueprints.forEach(bp=>{
                    addEle({dad:thisCont,setClass:"clickBtn",text:bp,minWidth:"100px",
                    setID:"recipe:"+bp, setFunc:clickOnRecipe})  })
                    if(player.blueprints.length > 0){getID("craftingForkC").children[0].style.marginTop = "20px"}
            }})


        
    } else {
        txt = thisCrafter.label + " " + spanText("purple","Used")
    }

}

function clickOnRecipe(e){
    if(timeFreeze){console.log("freeze");return}

    let myCont = getID("craftingRecipe")
    cleanParent(myCont)
    srcObj = blueprints.filter(bp=>bp.label===e.srcElement.innerHTML)[0]
    if(srcObj.locked){
        txt = "Need to study this Recipe<br><br>" + dispSpanCost(srcObj.unlock,false) 
        addEle({dad:myCont,text:txt})
        addEle({dad:myCont,text:"Time " + secondsToClock(srcObj.unlockTime),setID:"studyRecipeTimer",margin:"10px 0"})
        let ownCost = true
        srcObj.unlock.forEach(cst=>{if(checkCost(cst.label,cst.quantity,false)===false){ownCost=false}})
        if(ownCost){
            addEle({dad:myCont,setClass:"clickBtn",text:"Study "+srcObj.label,minWidth:"160px",
            setFunc:(e)=>{
                if(timeFreeze){console.log("freeze");return}

                timeFreeze=true
                srcObj = blueprints.filter(bp=>bp.label===e.srcElement.innerHTML.split("Study ")[1])[0]
                srcObj.unlock.forEach(cst=>checkCost(cst.label,cst.quantity))
                
                player.loop.queue.push({
                    type:"timer",
                    lyxSkill:false,
                    progress:0,
                    seconds:srcObj.unlockTime,
                    timerID:"unlockBP"+srcObj.label,
                    displayID:"studyRecipeTimer",
                    displayText:"Time ",
                    srcBluePrint:srcObj,
                    finishBtnID:"recipe:"+srcObj.label,
                })

                startLooper()
            }})
        }
    } else {

        addEle({dad:myCont,text:srcObj.label,setID:"recipeLabel",marginB:"10px"})

        addEle({dad:myCont,text:dispSpanCost(srcObj.craftCost,false)})
        let ownCost = true
        srcObj.craftCost.forEach(cst=>{if(checkCost(cst.label,cst.quantity,false)===false){ownCost=false}})
        if(ownCost){
            srcObj.craftCost.forEach(cst=>checkCost(cst.label,cst.quantity))
            addEle({dad:myCont,setClass:"clickBtn",text:"Craft "+srcObj.label,minWidth:"160px",
            marginT:"20px",setFunc:(e)=>{
                info.innerHTML = e.srcElement.innerHTML
            }})
        }

        info.innerHTML = "no study ! xD"

        console.log(srcObj.label)






        
    }

}