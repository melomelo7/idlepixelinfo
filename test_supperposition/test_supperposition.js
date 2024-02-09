let txt = ""
let val1 = undefined
let val2 = undefined
let thisTab = undefined
let thisCont = undefined
let thisEl = undefined
let focus = undefined
let thisIdx = undefined

const body = document.querySelector("body")

addEle({dad:body,setClass:"contCol",setID:"global"})
    addEle({dad:getID("global"),setClass:"info",setID:"info"})
    addEle({dad:getID("global"),setClass:"contRow",setID:"main",})
        addEle({dad:getID("main"),setClass:"leftMenu",setID:"leftMenu",})
        addEle({dad:getID("main"),setClass:"contCol",setID:"content",})


let starterPack=[
    {label:"Small Water Tank",quantity:1},
    {label:"Small Food Container",quantity:1},
    {label:"Small Water Pouch",quantity:1},
    {label:"Small Food Pack",quantity:1},
    {label:"Small Health Potion",quantity:2},
]

function getStarterPack(){
    spit("getMisc","start").value = false
    starterPack.forEach((x)=>{
        thisEl = spit("itemsObj",x.label)
        if(thisEl !== undefined){
            for(i=0;i<x.quantity;i++){
                thisIdx = player.houseStorage.items.findIndex(x=>x.label===thisEl.label)
                if(thisIdx===-1 || thisEl.canStack.value===false )
                    {player.houseStorage.items.push(thisEl)}
                else {thisEl.canStack.quantity++}}}
    })
}


function setContent(){

    if(spit("getMisc","start").value === true){getStarterPack()}

    cleanParent(getID("content"))

    addEle({dad:getID("content"),setClass:"tab",setID:"tabTravel",display:"none"})
        thisCont = addEle({dad:getID("tabTravel"),setClass:"contRow",alignItems:"center"})
            addEle({dad:thisCont,setClass:"clickBtn",text:"[X] Travel",backC:colors.brown,marginR:"10px",
            setFunc:()=>{getID("tabTravel").style.display="none"}})
            addEle({dad:thisCont,setID:"travFrom",})
            addEle({dad:thisCont,setID:"travWhere",margin:"0 5px 0 5px"})
            addEle({dad:thisCont,setClass:"clickBtn",text:"Lets Go !",setID:"travBtn",backC:colors.teal,
            marginL:"10px",setFunc:()=>{
                thisEl = spit("statusObj","Current Location : ")
                if(thisEl.traveling === false){
                    getID("tab"+spit("statusObj","Current Location : ").value).style.display = "none"
                    getID("tab"+spit("statusObj","Current Location : ").goTo).style.display = "none"
                    val1 = spit("destMenuObj",spit("statusObj","Current Location : ").value).color
                    val2 = spit("destMenuObj",spit("statusObj","Current Location : ").goTo).color
                    getID("travProg").style.background = "linear-gradient(to right,"+val1+","+val2+")"
                    thisEl.traveling = true
                    let nbt = spit("distanceTo",spit("statusObj","Current Location : ").goTo)
                    let ratio = Math.ceil(100/nbt)
                    nbt=0
                    let fainted = false
                    thisIdx = setInterval(()=>{
                            nbt++
                            getID("travProg").style.width = nbt*ratio > 100 ? 100+"px" : (nbt*ratio)+"px"

                            txt = "Vigor"
                            if(spit("statusObj",txt+" : ").value === 0){txt = "Health"}
                            thisEl = spit("statusObj",txt+" : ")
                            thisEl.value--
                            thisEl.value = thisEl.value < 0 ? 0 : thisEl.value
                            spit("fromGrp_X_elemContaining_Y",["statusGrp",txt]).innerHTML =
                            thisEl.label+thisEl.value+"/"+thisEl.cap
                            if(spit("statusObj","Health : ").value === 0){fainted = true}

                            txt = "Water"
                            if(spit("statusObj",txt+" : ").value === 0){txt = "Health"}
                            thisEl = spit("statusObj",txt+" : ")
                            thisEl.value--
                            thisEl.value = thisEl.value < 0 ? 0 : thisEl.value
                            spit("fromGrp_X_elemContaining_Y",["statusGrp",txt]).innerHTML =
                            thisEl.label+thisEl.value+"/"+thisEl.cap
                            if(spit("statusObj","Health : ").value === 0){fainted = true}

                            txt = "Food"
                            if(spit("statusObj",txt+" : ").value === 0){txt = "Health"}
                            thisEl = spit("statusObj",txt+" : ")
                            thisEl.value--
                            thisEl.value = thisEl.value < 0 ? 0 : thisEl.value
                            spit("fromGrp_X_elemContaining_Y",["statusGrp",txt]).innerHTML =
                            thisEl.label+thisEl.value+"/"+thisEl.cap
                            if(spit("statusObj","Health : ").value === 0){fainted = true}

                            if((nbt*ratio) > 100 || fainted){
                                clearInterval(thisIdx)
                                thisEl = spit("statusObj","Current Location : ")
                                thisEl.traveling = false
                                getID("travProg").style.width = "0"
                                if(fainted){
                                    youFainted()
                                } else {
                                    thisEl.value = thisEl.goTo
                                    document.getElementsByName("statusGrp")[0].innerHTML = thisEl.label+thisEl.value
                                    getID("tabTravel").style.display = "none"
                                    info.innerHTML = spit("destMenuObj",thisEl.goTo).particle === undefined ?
                                    "Arrived "+ thisEl.goTo : "Arrived" + spit("destMenuObj",thisEl.goTo).particle + thisEl.goTo
                                    setActionTab()
                                }
                            }
                        },1000)
                    }
                }})
            thisEl = addEle({dad:thisCont,setClass:"progressBox",marginL:"10px",width:"100px",height:"18px"})
                addEle({dad:thisEl,setClass:"progressInt",setID:"travProg",width:"0px"})

    player.destinations.menu.forEach((x)=>{
        addEle({dad:getID("leftMenu"),text:x.label,setClass:"clickBtn",backC:x.color,
        minWidth:"70px",marginT:"10px",setID:"menu"+x.label,setFunc:clickMenuBtn,
        display:x.showBtn ? "block" : "none",})

        addEle({dad:getID("content"),setClass:"tab",setID:"tab"+x.label,
        display:x.showTab ? "flex" : "none",})
    })
}



setContent()

function clickMenuBtn(e){
    focus = e.srcElement.innerHTML
    thisTab = getID("tab"+focus)

    switch(focus){

        case "Status":
            if(thisTab.style.display === "none")
                {setStatusTab() ; thisTab.style.display = "flex"}
            else 
                {thisTab.style.display = "none"}
            break
        case "Inventory":
            if(thisTab.style.display === "none")
                {setTabToggle("tabInventory") ; setInventory("Inventory") ; thisTab.style.display = "flex"}
            else 
                {thisTab.style.display = "none"}
            break

        default : 
            if(spit("statusObj","Current Location : ").traveling !==true){
                spit("statusObj","Current Location : ").goTo = focus
                if(spit("statusObj","Current Location : ").value === focus){
                    setActionTab()
                } else {
                    info.innerHTML = "Travel should take about " + spit("distanceTo",focus) + 
                    " Sec (you lose 1x Vigor - Water - Food /Sec)"
                    info.style.backgroundColor = colors.teal
                    getID("tabTravel").style.display = "flex"
                    thisEl = spit("statusObj","Current Location : ")
                    thisEl.goTo = focus
                    getID("travFrom").innerHTML = thisEl.value + " =>"
                    getID("travWhere").innerHTML = focus
                }
            }
    }
}

function redimTab(e){
    focus = e.srcElement.innerHTML
    thisTab = getID("tab"+focus)
    let valMin = focus==="Status" ? 55 : 31

    if(thisTab.style.height!==valMin+"px")
        {thisTab.style.height=valMin+"px"}
    else
        {thisTab.style.height="fit-content"}
}

function viewMissions(){
    let details = getID("missionDetails")

    if(details.style.display === "flex"){
        details.style.display = "none"
    } else {
        cleanParent(details)
        details.style.display = "flex"

        let jobs = missions.filter(x=>x.rank<=player.missions.rank && x.status === "available")

        if(jobs.length<1){
            details.innerHTML = "Sorry no new Mission, check back later ..."
        } else {

            if(getID("missionBtn").innerHTML === btnTxt.doWhat){
                addEle({dad:details,text:"Mission(s) Available : " + jobs.length})
                jobs.forEach((x)=>{
                    thisEl = addEle({dad:details,setClass:"tab",width: "92%",overflowX:"visible"})
                        addEle({dad:thisEl,text:"Mission :<br>"+x.label})
                      addEle({dad:thisEl,setClass:"line"})
                        addEle({dad:thisEl,text:"Job :"})
                        for(let i=0;i<x.job.length;i++)
                            {addEle({dad:thisEl,text:x.job[i].text})}
                      addEle({dad:thisEl,setClass:"line"})
                        addEle({dad:thisEl,text:"Reward :"})
                        for(let i=0;i<x.reward.length;i++)
                            {addEle({dad:thisEl,text:x.reward[i].text})}
                        if(x.startWith.length>0){
                          addEle({dad:thisEl,setClass:"line"})
                            addEle({dad:thisEl,text:"Start with :"})
                            for(let i=0;i<x.startWith.length;i++)
                                {addEle({dad:thisEl,text:x.startWith[i].text,backC:colors.green})}}
                        if(x.required.length>0){
                            addEle({dad:thisEl,setClass:"line"})
                                addEle({dad:thisEl,text:"Requirements :"})
                                for(let i=0;i<x.required.length;i++)
                                    {addEle({dad:thisEl,text:x.required[i].text,backC:colors.black,textC:colors.white})}}

                        addEle({dad:thisEl,text:"Select this Mission",setClass:"clickBtn",
                        setFunc:()=>{ getID("myMission").innerHTML = x.label}})
                })
                addEle({dad:details,setClass:"fakeInput",setID:"myMission",})
                addEle({dad:details,text:btnTxt.stMiss,setClass:"clickBtn",backC:colors.brown,
                setFunc:()=>{setMission(getID("myMission").innerHTML)},margin:"0 10px"})
            } 
            
            else if (getID("missionBtn").innerHTML === btnTxt.chkProg) {
                let aim = missions.filter(x=>x.label===player.missions.current)[0].job
                let progress = []
                for(let i=0;i<aim.length;i++){
                    let newEl = {label:aim[i].label,now:0,get:aim[i].quantity}
                    switch(aim[i].type){
                        case "inventory" :
                            if(getItem(aim[i].label)){newEl.now = getItem(aim[i].label).quantity}
                            break
                        default :
                            console.log("to do ...")
                    }
                    progress.push(newEl)
                }

                let tot = {now:0,get:0}
                for(let i=0;i<progress.length;i++){
                    tot.now += progress[i].now
                    tot.get += progress[i].get
                    addEle({dad:details,setClass:"contRow",setID:"cont"+i,marginB:"10px",})
                        val1 = Math.floor(((progress[i].now/progress[i].get)*100))
                        txt = progress[i].label + " : " + progress[i].now + "/" + progress[i].get + " (" + val1 + "%)"
                        addEle({dad:getID("cont"+i),setClass:"progressBox",setID:"progBack"+i})
                            addEle({dad:getID("progBack"+i),setClass:"progressInt",width:val1+"%"})
                        addEle({dad:getID("cont"+i),text:txt})
                }
                addEle({dad:details,setClass:"line"})

                addEle({dad:details,setClass:"contRow",setID:"overCont"})
                    val1 = Math.floor(((tot.now/tot.get)*100))
                    addEle({dad:getID("overCont"),setClass:"progressBox",setID:"fullProgress"})
                        addEle({dad:getID("fullProgress"),setClass:"progressInt",width:val1+"%"})
                    addEle({dad:getID("overCont"),text:"Overall Progress : " + val1 + "%"})

                addEle({dad:details,setClass:"contRow",setID:"endMissionCont1"})
                txt = val1 < 100 ? btnTxt.abtMiss : btnTxt.complMiss
                    addEle({dad:getID("endMissionCont1"),setClass:"clickBtn",setID:"endMissionBtn",marginT:"20px",setFunc:missionEnder,
                    text:val1 < 100 ? btnTxt.abtMiss : btnTxt.complMiss,backC: val1 < 100 ? colors.darkslategrey : colors.olive,})

                    addEle({dad:getID("endMissionCont1"),setClass:"contRow",setID:"endMissionCont2",marginL:"10px",display:"none"})
                        addEle({dad:getID("endMissionCont2"),setClass:"clickBtn",text:"Yes",marginT:"20px",backC:colors.brown,
                        radiusBR:"0px",radiusTR:"0px",minWidth:"30px",setFunc:missionEnder})
                        addEle({dad:getID("endMissionCont2"),setClass:"clickBtn",text:"No",marginT:"20px",backC:colors.black,
                        radiusBL:"0px",radiusTL:"0px",minWidth:"30px",setFunc:missionEnder})
            }
        }
    }
}


function missionEnder(e){
    switch(e.srcElement.innerHTML){
        case "Abort Mission" :
            getID("endMissionBtn").innerHTML = btnTxt.confAbt
            getID("endMissionBtn").style.backgroundColor = colors.brown
            getID("endMissionCont2").style.display = "flex"
            break
        case "Yes" :
            info.innerHTML = "Mission Aborted : " + player.missions.current
            getID("endMissionBtn").style.backgroundColor = colors.darkslategrey
            getID("endMissionCont2").style.display = "none"
            getID("missionBtn").innerHTML = btnTxt.doWhat
            player.missions.current = "None"
            getID("missionID").innerHTML = player.missions.label + player.missions.current
            getID("missionDetails").style.display = "none"
            break
        case "No" :
            getID("endMissionBtn").innerHTML = btnTxt.abtMiss
            getID("endMissionBtn").style.backgroundColor = colors.darkslategrey
            getID("endMissionCont2").style.display = "none"
            break
        case "Complete Mission" :
            missions.filter(x=>x.label===player.missions.current)[0].change.forEach((x)=>{changer(x)})
            missions.filter(x=>x.label===player.missions.current)[0].status = "completed"
            info.innerHTML = "Congratulations, Mission " + player.missions.current + " Completed !"
            player.missions.current = "None"
            getID("missionID").innerHTML = player.missions.label + player.missions.current
            getID("missionDetails").style.display = "none"
            getID("missionBtn").innerHTML = btnTxt.doWhat
            break
    }
}


function getItem(label){
    let itm = undefined
    thisIdx = player.inventory.findIndex(x=>x.label===label)
    if(thisIdx > -1){itm = player.inventory[thisIdx]}
    return itm
}

function setMission(label){
    if(!label){
        info.innerHTML = "You Must Select a Mission before clicking on [Start Mission]"
        info.style.backgroundColor = colors.brown
    } else {
        info.innerHTML = ""
        info.style.backgroundColor = colors.gray
        if(checkRequiredAll(missions.filter(x=>x.label===label)[0].required) !== true){
            info.innerHTML = "Missing required to start this Mission"
            info.style.backgroundColor = "brown"
        } else {
            missions.filter(x=>x.label===label)[0].startWith.forEach((x)=>{changer(x)})
            info.innerHTML = "Started Mission : " + label
            info.style.backgroundColor = "gray"
            player.missions.current = label
            player.missions.nowOnBtn = btnTxt.chkProg
            thisEl = spit("fromGrp_X_elemContaining_Y",["statusGrp","Mission"])
            thisEl.innerHTML = player.missions.label + player.missions.current
            getID("missionBtn").innerHTML = player.missions.nowOnBtn
            getID("missionDetails").style.display = "none"
        }
    }
}

function changer(ele){
    switch(ele.type){
        case "unlock" :
            getID(ele.refID).style.display = "block"
            break
        default :
            console.log("to do ...")
    }
}


function checkRequiredAll(needs){
    let arr = []
    for(let i=0;i<needs.length;i++){arr.push(checkRequired(needs[i]))}
    return arr.filter(x=>x===false).length === 0 ? true : false
}

function checkRequired(request){
    let good = true
    switch(request.type){
        case "inventory" :
            thisEl = spit("inventoryObj",request.label)
            if(thisEl!==undefined){
                if(thisEl.quantity=== undefined || thisEl.quantity < request.quantity){good = false}
            } else {good = false}
            break
        case "status" :
            console.log(request.type + " >> " + request.label)
            if(spit("statusObj",request.label).value < request.quantity){good = false}
            break
        default :
            console.log("to do ...") 
    }
    return good
}
