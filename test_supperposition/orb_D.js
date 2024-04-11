
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

    addEle({dad:myTab,text:"Add a crafter<br>" + dispSpanCost(crafterCost())})
    let ownCost = true
    crafterCost().forEach(cst=>{if(checkCost(cst.label,cst.quantity,false)===false){ownCost=false}})
    if(ownCost){
        addEle({dad:myTab,setClass:"clickBtn",text:"Add a crafter",setFunc:()=>{
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
    let myCont = getID("craftingForkB") 
    cleanParent(myCont)


console.log(thisCrafter)
console.log(player.crafting)

    if(thisCrafter.nowCrafting===""){

        let subCont = addEle({dad:myCont,setClass:"mainTab",setID:"craftingRecipe",marginT:"20px",width:"fit-content"})
            addEle({dad:subCont,text:thisCrafter.label + " " + spanText("lime","Available")})

            if(thisCrafter.workerName==="" && player.crafting.lyxJob===true){
                txt = "Set a Lyx to work on this crafter<br>(automation: cost will include Lyx needs)"
                addEle({dad:subCont,setClass:"clickBtn",text:txt,setFunc:()=>{
                    console.log("set maLyx")
                }})
            }
    
            addEle({dad:subCont,text:"Pick a recipe to craft"})




        cleanParent(getID("craftingForkC"))
        getID("craftingForkC").innerHTML = "Recipes"
        player.blueprints.forEach(bp=>{
            addEle({dad:getID("craftingForkC"),setClass:"clickBtn",text:bp,minWidth:"100px",
            setID:"recipe:"+bp, setFunc:clickOnRecipe})  })

        if(player.blueprints.length > 0){getID("craftingForkC").children[0].style.marginTop = "20px"}
        
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