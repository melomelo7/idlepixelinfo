
class Lyx{
    constructor({
        name=undefined,homeless=true,health={label:"Hp:",current:100,cap:100},job=undefined,skills=[]})
    {this.name=name,this.homeless=homeless,this.health=health,this.job=job,this.skills=skills}
}

function setTabGrimoire(keyWord){
    let myTab = getID("tab"+keyWord)
    let main = getPlObj(keyWord,1)
    let ownCost = undefined

    myTab.innerHTML += " (actions will lock clicks on orb)"

    cleanParent(myTab)

    if(main.seal && main.seal.locked){
        ownCost = true
        main.seal.costs.forEach(cst=>{if(checkCost(cst.label,cst.quantity,false)===false){ownCost=false}})
        addEle({dad:myTab,text:main.seal.text})
        if(ownCost){
            addEle({dad:myTab,text:"Break the seal",setClass:"clickBtn",setFunc:()=>{
                main.seal.costs.forEach(cst=>{checkCost(cst.label,cst.quantity)})
                main.seal.locked = false ; setTabGrimoire(keyWord) }})  }
    } else {
        let cont = addEle({dad:myTab,setClass:"contCol"})
            let srcObj = getPlObj("Knowledge")
            txt = "Study to earn Knowledge [Loop]" + spanQuestion
            addEle({dad:cont,text:txt,cursor:"pointer",setFunc:()=>{
            spanQloop.style.display="block";setTimeout(()=>{spanQloop.style.display="none"},3000) }})

            let spanQloop = addEle({dad:cont,text:`( loop actions repeat until
            you stop<br>or until you run out of action cost )`,display:"none"})
            
            txt = "Cost/sec :"
            srcObj.costs.forEach(cst=>{ txt += cst.quantity.toFixed(2) + " " + cst.label + " " })
            addEle({dad:cont,text:txt})

            let idx = player.loop.queue.findIndex(x=>x.type==="study")
            let myCol = idx === -1 ? "purple" : "blue"
            txt = idx === -1 ? "Study" : "Stop"
            addEle({dad:cont,text:txt,setClass:"clickBtn",backC:myCol,setID:"studyBtn",
            minWidth:"100px",setFunc:(e)=>{
                let myBt = e.srcElement
                switch(myBt.innerHTML){
                    case "Study" :
                        lockOrb()
                        myBt.innerHTML = "Stop"
                        myBt.style.backgroundColor = "blue"
                        player.loop.queue.push({
                            callBtnID:myBt.id,
                            type:"study",
                            payFront:false,
                            priority:2,
                            costs:getPlObj("Knowledge").costs,
                            payout:getPlObj("Knowledge").payout,
                            orbLocker:true
                        })
                        if(player.loop.id===undefined){player.loop.id = setInterval(queueManager,1000)}
                        break
                    case "Stop" :
                        myBt.innerHTML = "Study"
                        myBt.style.backgroundColor = "purple"
                        let thisIdx = player.loop.queue.findIndex(itm=>itm.type==="study")
                        player.loop.queue.splice(thisIdx,1)
                        if(player.loop.queue.filter(itm=>itm.orbLocker).length===0){lockOrb(false)}
                        break
                }



//console.log(player.loop.queue)




            }})

        let fork = addEle({dad:myTab,setClass:"contRow",marginT:"10px"})
            let forkA = addEle({dad:fork,setClass:"contCol",setID:"grimoireForkA"})
            let forkB = addEle({dad:fork,setClass:"contCol",setID:"grimoireForkB",margin:"0 10px"})
            let forkC = addEle({dad:fork,setClass:"contCol",setID:"grimoireForkC"})
        
            getPlObj("Grimoire",1).pages.forEach(pg=>{
                addEle({dad:forkA,setClass:"clickBtn",text:"Page : "+pg.idx,
                display:pg.visible===true ? "block":"none",
                backC:pg.locked===true ? "black" : "#583E31",
                setID:"grimoirePage"+pg.idx,
                setFunc:(e)=>{grimoirePage(e.srcElement.innerHTML.split(" : ")[1])}})
            })
            
    }

}

function grimoirePage(pgIdx){
    cleanParent(getID("grimoireForkB")) ; cleanParent(getID("grimoireForkC"))
    let myPg = getPlObj("Grimoire",1).pages.filter(pg=>pg.idx===Number(pgIdx))[0]
    let ownCost = undefined

    if(myPg.locked){
        txt = "Page " + myPg.idx + " is locked, unlock " + dispSpanCost(myPg.unlock,false)
            addEle({dad:getID("grimoireForkB"),text:txt})
        ownCost = true
        myPg.unlock.forEach(cst=>{if(checkCost(cst.label,cst.quantity,false)===false){ownCost=false}})
        if(ownCost){ player.focusID = undefined
            addEle({dad:getID("grimoireForkB"),text:"Unlock Page : " + myPg.idx,
            setClass:"clickBtn",setFunc:(e)=>{
                let thisPg = e.srcElement.innerHTML.split(" : ")[1]
                let myPg = getPlObj("Grimoire",1).pages.filter(pg=>pg.idx===Number(thisPg))[0]
                myPg.unlock.forEach(cst=>{checkCost(cst.label,cst.quantity)})
                myPg.locked = false ; getID("grimoirePage"+myPg.idx).style.backgroundColor = "#583E31"
                grimoirePage(thisPg) }})  } else {player.focusID = "grimoirePage"+pgIdx}
    } else {
        ownCost = true
        myPg.content.forEach(ct=>{
            if(ct.visible!==true){return}
            let thisCont = getID("grimoireForkB")
            addEle({dad:thisCont,text: ct.toggleID==="" ? ct.title : ct.title + spanQuestion,
            margin:"10px 0 0 10px",cursor: ct.toggleID===""?"":"pointer", setID: ct.toggleID===""?"":ct.toggleID,
            setFunc: ct.toggleID==="" ? undefined : (e)=>{ let obj = getID(e.srcElement.id+"A")
            obj.style.display = obj.style.display==="none"?"block":"none"}})

            if(ct.toggleID!==""){addEle({dad:thisCont,text:ct.toggledText,setID:ct.toggledTextID,display:"none"})}

            if(ct.altID!==""){addEle({dad:thisCont,text:ct.altText,setID:ct.altID,display:ct.altBought?"block":"none"})}

            ct.costs.forEach(cst=>{if(checkCost(cst.label,cst.quantity,false)===false){ownCost=false}})
            player.focusID = ownCost === true ? undefined : "grimoirePage"+ct.refPg
            if(ct.altText==="" ||(ct.altText!=="" && ct.altBought===false))
                {addEle({dad:thisCont,text:dispSpanCost(ct.costs)})}

            txt = ct.altText === "" || (ct.altText !== "" && ct.altBought === false) ? "block" : "none"
            addEle({dad:thisCont,setClass:"clickBtn",text:ct.btnTxt,marginT:"10px",display:txt,
            setFunc:(e)=>{grimoireBtn(e.srcElement.innerHTML)}})
        })
    }

}

function grimoireBtn(btnText){

    let srcObj = undefined
    player.tabs.forEach(tab=>{
        if(tab.pages){
            tab.pages.forEach(pg=>{
                if(pg.content){
                    pg.content.forEach(ctnt=>{
                        if(ctnt.btnTxt===btnText){srcObj = ctnt}  })  }  })  }  })



    let ownCost = true
    srcObj.costs.forEach(cst=>{if(checkCost(cst.label,cst.quantity,false)===false){ownCost=false}})

    if(ownCost){
        info.innerHTML = ""
        srcObj.costs.forEach(cst=>{checkCost(cst.label,cst.quantity)})
        pageItmUnlocks(srcObj.unlock)
        if(btnText.includes("Free a Lyx")){
            if(getPlObj("Lyxes").quantity === 0){
                getPlObj("Lyxes").locked = false
                info.innerHTML = `
                "Lyxes ? That will add some spice, for sure"<br>
                 The Lyxes tab is now unlocked ...`
            }
            getPlObj("Essence").click = spit({text:"clickPower"})
            spawnLyx()
        }
        else if(btnText.includes("Understand Lyx needs") || btnText.includes("Food Problem") ||
        btnText.includes("Water Problem") || btnText.includes("Housing Problem") ||
        btnText.includes("Wood Problem") || btnText.includes("Stone Problem")
        )
        {srcObj.altBought = true}

    } else {
        info.innerHTML = dispSpanCost(srcObj.costs)
    }


    getID("grimoirePage"+srcObj.refPg).click()


}

function pageItmUnlocks(unlocks){
    let pgIdx = undefined
    let ctIdx = undefined
    unlocks.forEach(itm=>{
        switch(itm.split("|")[0]){
            case "page content" :
                pgIdx = Number(itm.split("|")[1].split(":")[1])
                ctIdx = Number(itm.split("|")[2].split(":")[1])
                getPlObj("Grimoire",1).pages.filter(pg=>pg.idx===pgIdx)[0]
                .content.filter(ct=>ct.idx===ctIdx)[0].visible = true
                break
            case "new job" :
                getPlObj("Lyxes").skills.push(itm.split("|")[1])
                break
            case "unlock tab" :
                getPlObj(itm.split("|")[1],1).visible = true
                for(let i=0;i<tabsBtnFr.children.length;i++){
                    if(tabsBtnFr.children[i].innerHTML===itm.split("|")[1]){
                        setTimeout(()=>{tabsBtnFr.children[i].style.display = "block"},2000) } }
                break
            case "unlock blueprint" :
                console.log(itm)
                console.log(itm.split("|")[1])
                player.blueprints.push(itm.split("|")[1])                 
                break
            default : info.innerHTML = "Unknown page element Unlock " + itm.split("|")[0]
        }
    })
}

/*
function actionBtns(e){

    let btFocus = e.srcElement.id.split("Btn")[0].toLowerCase()
    let focus = ""
    let type = ""
    info.innerHTML = ""
    switch(btFocus){
        case "study":focus = "Knowledge" ; type = "loop" ;break

        default : info.innerHTML = "Unknown Action" 
    }
    
    if(e.srcElement.innerHTML!=="Stop")
        {action({lbl:focus,srcBtnID:e.srcElement.id,type:type})}
    else
        {action({lbl:focus,run:false})}
}


function action({lbl="",srcBtnID=undefined,type="",run=true}){
    let looper = undefined
    if(run){
        lockOrb()
        let srcObj = getPlObj(lbl)
        looper = player.loop
        looper.queue.push(new queueItm({
            label:srcObj.label,
            type:type,
            srcElID:srcBtnID,
            srcElTxt: getID(srcBtnID).innerHTML,
            srcElCol:getID(srcBtnID).style.backgroundColor,
            costs:srcObj.costs,
            payout:srcObj.payout,
        }))
        if(looper.id===undefined){looper.id = setInterval(queueManager,1000)}
    } else {
        looper = player.loop
        let idx = looper.queue.findIndex(x=>x.label===lbl)
        let itm = looper.queue[idx]
        getID(itm.srcElID).style.backgroundColor = itm.srcElCol
        getID(itm.srcElID).innerHTML = itm.srcElTxt
        looper.queue.splice(idx,1)
        if(looper.queue.filter(itm=>itm.isAction).length===0){lockOrb(false)}
    }
}
*/


let cpt = 0
function queueManager(){
    cpt++
    let queue = player.loop.queue
    let ownCost = undefined


    let payFrontArr = queue.filter(itm=>itm.payFront===true).sort((a,b)=>a.priority - b.priority)
    let othersArr = queue.filter(itm=>itm.payFront!==true)



    payFrontArr.forEach(itm=>{ itm.payout.forEach(pay=>{
        getPlObj(pay.label).locked = false
        checkCost(pay.label,pay.quantity,false,true)
    }) })

    payFrontArr.forEach(itm=>{
        let thisLyx = undefined
        if(itm.type==="lyxJob"){thisLyx = getPlObj("Lyxes").lyx.filter(lx=>lx.name===itm.lyxName)[0]}
        itm.costs.forEach(cst=>{
            let ownCost = checkCost(cst.label,cst.quantity,true,false,true,true)
            if(ownCost===false && thisLyx!==undefined){thisLyx.health.current--}
        }) 

        if(thisLyx!==undefined){
            if(thisLyx.homeless){thisLyx.health.current--}
            
            if(thisLyx.health.current < 1){
                thisLyx.health.current = 0
                thisLyx.job = undefined
                let thisIdx = queue.findIndex(itm=>itm.type==="lyxJob" && itm.lyxName===thisLyx.name)
                queue.splice(thisIdx,1)
                if(player.activeTab==="Lyxes"){
                    getID("lyx:"+thisLyx.name).click()
                    getID("lyxesSumup").innerHTML = spit({text:"lyxesSumup"})
                }
            }
            if(player.activeTab==="Lyxes"){
                getID("lyx:" + thisLyx.name).innerHTML = thisLyx.name + "<br>" +
                thisLyx.health.label + thisLyx.health.current + "/" + thisLyx.health.cap
                if(thisLyx.health.current===0){getID("lyx:" + thisLyx.name).style.backgroundColor="crimson"}
            }
        }

    })
    

    othersArr.forEach(itm=>{
        switch(itm.type){
            case "study" :
                ownCost = true
                itm.costs.forEach(cst=>{if(checkCost(cst.label,cst.quantity,false)===false){ownCost=false}})
                if(ownCost){
                    itm.costs.forEach(cst=>{checkCost(cst.label,cst.quantity)})
                    itm.payout.forEach(pay=>{checkCost(pay.label,pay.quantity,false,true)})
                    upOrb(false)
                    if(player.focusID!==undefined){getID(player.focusID).click()}
                } else { getID(itm.callBtnID).click() }
                break

            default : info.innerHTML = "Unknown type > time queue loop/others : " + itm.type
        }
    })


/*
    player.loop.queue.forEach(itm=>{
        switch(itm.type){
            case "study" :
                ownCost = true
                itm.costs.forEach(cst=>{if(checkCost(cst.label,cst.quantity,false)===false){ownCost=false}})
                if(ownCost){
                    itm.costs.forEach(cst=>{checkCost(cst.label,cst.quantity)})
                    itm.payout.forEach(pay=>{checkCost(pay.label,pay.quantity,false,true)})
                    upOrb(false)
                    if(player.focusID!==undefined){getID(player.focusID).click()}
                } else { getID(itm.callBtnID).click() }
                break
            case "lyxJob" :
                let thisLyx = getPlObj("Lyxes").lyx.filter(lx=>lx.name===itm.lyxName)[0]

                itm.payout.forEach(pay=>{
                    getPlObj(pay.label).locked = false
                    checkCost(pay.label,pay.quantity,false,true)
                })

                itm.costs.forEach(cst=>{


                    ownCost = checkCost(cst.label,cst.quantity)
                    if(ownCost===false){
                        thisLyx.health.current = (thisLyx.health.current-1) < 0 ? 0 : thisLyx.health.current -1
                        if(player.activeTab==="Lyxes"){
                            getID("lyx:"+itm.lyxName).innerHTML = itm.lyxName + "<br>" +
                            thisLyx.health.label + thisLyx.health.current + "/" + thisLyx.health.cap
                        }
                    }
                    
                })

                if(thisLyx.homeless){
                    thisLyx.health.current = (thisLyx.health.current-1) < 0 ? 0 : thisLyx.health.current -1
                }

                break
            default : console.log("Unknown time loop queue item type : "+itm.type)
        }
    })


    */

    if(player.loop.queue.length===0){ clearInterval(player.loop.id) ; player.loop.id = undefined }


   console.log("Remaining queue items " + player.loop.queue.length)

}


function spawnLyx(){
    getPlObj("Lyxes").lyx.push(new Lyx({name:naming()}))
    getPlObj("Lyxes").quantity = getPlObj("Lyxes").lyx.length
    dispStats()
}

function naming(){
    let part1 = ["a","e","i","o","u","y"]
    let part2 = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","z"]
    let max = 3 + Math.floor(Math.random() * 3)
    let binary = []
    let cpt = 0
    myName=""
    binary.push(Math.floor(Math.random() * 2))
    while(binary.length < max){binary.push(binary[binary.length-1]===0 ? 1 : 0) ; cpt++ ; if(cpt>=(max+5)){break} }    

    binary.forEach(lt=>{ myName += lt === 0 ? 
    part1[Math.floor(Math.random()*part1.length)]:part2[Math.floor(Math.random()*part2.length)] })

    if(checkDupLyx(myName)){naming()}
    return myName
}

function checkDupLyx(thisName){
    let dupe = false
    if(getPlObj("Lyxes").lyx.findIndex(itm=>itm.name===thisName) > -1){dupe = true}
    return dupe
}
