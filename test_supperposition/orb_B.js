
class Lyx{
    constructor({name=undefined,belly=0,skill1=undefined,skill2=undefined,skill3=undefined,job=undefined})
    {this.name=name,this.belly=belly,this.skill1=skill1,this.skill2=skill2,this.skill3=skill3,this.job=job}
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
        txt = "Page " + myPg.idx + " is locked, unlock Cost :<br>"
        myPg.unlock.forEach(cst=>{ ownCost = checkCost(cst.label,cst.quantity,false)
            let myCol = ownCost===true ? "lime" : "red"
            txt +=`<span style="color:`+myCol+`;">`+cst.quantity.toFixed(2)+" "+cst.label+"</span><br>" })
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
        myPg.content.forEach(ct=>{
            addEle({dad:getID("grimoireForkB"),text:ct.title + spanQuestion,marginL:"10px",
            cursor:"pointer",setFunc:()=>{
            getID(ct.textID).style.display=getID("lyxCh1").style.display==="none"?"block":"none"}})
            addEle({dad:getID("grimoireForkB"),text:ct.text,setID:ct.textID,display:"none"})
            addEle({dad:getID("grimoireForkB"),setClass:"clickBtn",text:ct.btnTxt,marginT:"10px",
            setFunc:(e)=>{grimoireBtn(e.srcElement.innerHTML)}})
        })
    }

}

function grimoireBtn(btnText){
    let ownCost = undefined
    if(btnText.includes("Free a Lyx")){
        ownCost = checkCost("Crystals",1)
        if(ownCost){
            if(getPlObj("Lyxes").quantity === 0){
                getPlObj("Lyxes").locked = false
                getPlObj("Lyxes",1).visible = true
                info.innerHTML = `"Lyxes ? That will add some spice, for sure ..."`
                setTimeout(()=>{tabsBtnFr.children[1].style.display="block"},2000)
            }
            getPlObj("Essence").click = spit({text:"clickPower"})
            //checkCost("Lyxes",1,false,true)
            spawnLyx()
        } else {
            info.innerHTML = "No Magic Crystals to break now"
        }

    }

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
    console.log(getPlObj("Lyxes").lyx)
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
    return myName
}
