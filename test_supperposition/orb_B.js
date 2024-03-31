
class Lyx{
    constructor({name=undefined,health={current:100,cap:100},job=undefined,skills=[]})
    {this.name=name,this.health=health,this.job=job,this.skills=skills}
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

            let idx = player.loop.queue.findIndex(x=>x.label==="Knowledge")
            let myCol = idx === -1 ? "purple" : "blue"
            txt = idx === -1 ? "Study" : "Stop"
            addEle({dad:cont,text:txt,setClass:"clickBtn",backC:myCol,setID:"studyBtn",
            minWidth:"100px",setFunc:actionBtns})

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
            default : info.innerHTML = "Unknown page element Unlock " + itm.split("|")[0]
        }
    })
}

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



let cpt = 0
function queueManager(){
    let looper = player.loop
    let ownCost = undefined
    cpt++

    for(let i=0;i<looper.queue.length;i++){
        ownCost = true
        looper.queue[i].costs.forEach(cst=>{if(checkCost(cst.label,cst.quantity,false)===false){ownCost=false}})

        if(ownCost){
            looper.queue[i].costs.forEach(cst=>{checkCost(cst.label,cst.quantity)})
            looper.queue[i].payout.forEach(pay=>{checkCost(pay.label,pay.quantity,false,true)})
            getID(looper.queue[i].srcElID).style.backgroundColor = "blue"
            getID(looper.queue[i].srcElID).innerHTML = "Stop"
            if(looper.queue[i].costs.filter(x=>x.label==="Essence").length > 0){upOrb(false)}
            if(player.focusID!==undefined){getID(player.focusID).click()}
        } else {
            action({lbl:looper.queue[i].label,run:false})
        }
    }

    if(looper.queue.length===0){ clearInterval(looper.id) ; looper.id = undefined }

   // console.log(cpt)
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