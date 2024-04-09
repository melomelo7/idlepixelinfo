
function setTabCrafting(keyWord){
    let myTab = getID("tab"+keyWord)
    cleanParent(myTab)
    
    addEle({dad:myTab,setID:"craftingInfo",borderB:"solid 2px beige",minHeight:"100px",marginT:"5px",text:
    "*!* After starting a Craft you can stop/cancel but costs are lost *!*"})
    
    txt = "Add a crafter<br>"
    let myVal1 = 1
    let myVal2 = 1
    for(let i=0;i< player.crafters2.quantity+1;i++){
        myVal1 *= 10
        myVal2 *= 10
        }
    addEle({dad:myTab,setClass:"clickBtn",
            text:txt,setFunc:addCrafter})



    let myCont = addEle({dad:myTab,setClass:"contRow",marginT:"20px"})
        addEle({dad:myCont,setClass:"contCol",setID:"craftingForkA"})
        addEle({dad:myCont,setClass:"contCol",setID:"craftingForkB",margin:"0 30px 0 10px"})
        addEle({dad:myCont,setClass:"contCol",setID:"craftingForkC",textA:"center"})

        for(let i=0;i<player.crafters.length;i++){
            txt = player.crafters[i].locked===false ? "beige" : "red"
            addEle({dad:getID("craftingForkA"),setClass:"crafter",setID:player.crafters[i].label,
            text:player.crafters[i].label,textC:txt,setFunc:(e)=>{displayCrafter(e.srcElement.id)}})
        }
}

function displayCrafter(crafterID){
    if(timeFreeze){console.log("freeze");return}

    let thisCrafter = player.crafters.filter(cr=>cr.label==="Crafter "+crafterID.slice(crafterID.length-1))[0]
    let isUsed = thisCrafter.crafting === "" ? false : true
    let myCont = getID("craftingForkB") 
    cleanParent(myCont)
    if(thisCrafter.locked){
        txt = thisCrafter.label + ": " +spanText("red","Locked") +
        "<br><br>Unlock " + dispSpanCost(thisCrafter.unlock,false)
        addEle({dad:myCont,text:txt})
        let ownCost = true
        thisCrafter.unlock.forEach(cst=>{if(checkCost(cst.label,cst.quantity,false)===false){ownCost=false}})
        if(ownCost){
            addEle({dad:myCont,setClass:"clickBtn",text:"Unlock "+thisCrafter.label,setFunc:(e)=>{
                srcObj = player.crafters.filter(cr=>cr.label===e.srcElement.innerHTML.split("Unlock ")[1])[0]
                srcObj.unlock.forEach(cst=>checkCost(cst.label,cst.quantity))
                srcObj.locked = false
                setTabCrafting("Crafting")
            }})
        }
    } else {
        if(isUsed===false){
            txt = thisCrafter.label + " "
            txt += isUsed ? spanText("purple","Used") : spanText("lime","Available")
            addEle({dad:myCont,text:txt})
            addEle({dad:myCont,setClass:"mainTab",setID:"craftingRecipe",marginT:"20px",width:"fit-content"})
                addEle({dad:getID("craftingRecipe"),text:"Pick a recipe to craft"})

            cleanParent(getID("craftingForkC"))
            getID("craftingForkC").innerHTML = "Recipes"
            player.blueprints.forEach(bp=>{
                addEle({dad:getID("craftingForkC"),setClass:"clickBtn",text:bp,minWidth:"100px",
                setID:"recipe:"+bp, setFunc:(e)=>{
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

                    
            }})  })
            if(player.blueprints.length > 0){getID("craftingForkC").children[0].style.marginTop = "20px"}
            
        } else {

        }


    }

}