
function setTabLyxes(keyWord){
    let myTab = getID("tab"+keyWord)
    cleanParent(myTab)
    let main = getPlObj(keyWord,1)
    let srcObj = getPlObj("Lyxes")

    addEle({dad:myTab,setClass:"contCol",setID:"lyxesTop",margin:"10px 0"})
        addEle({dad:getID("lyxesTop"),text:spit({text:"lyxesSumup"}),setID:"lyxesSumup"})
        addEle({dad:getID("lyxesTop"),setID:"lyxesInfo",marginT:"5px",textC:"lime",minHeight:"18px"})

    addEle({dad:myTab,setClass:"contRow",setID:"lyxesFork",})
        addEle({dad:getID("lyxesFork"),setClass:"contCol",setID:"lyxesForkA",
        padding:"0 5px",text:"Skills/Jobs :",textA:"center",border:"red solid 1px"})

        addEle({dad:getID("lyxesFork"),setClass:"contCol",setID:"lyxesForkB",
        padding:"0 5px",margin:"0 10px",text:"Lyx List :",textA:"center",border:"red solid 1px"})

        addEle({dad:getID("lyxesFork"),setClass:"contCol",setID:"lyxesForkC",
        padding:"0 5px",text:"Lyx Details :",border:"red solid 1px"})

    srcObj.skills.forEach(sk => { 
        addEle({dad:getID("lyxesForkA"),setClass:"clickBtn",text:sk,minWidth:"100px",setFunc:(e)=>{
            
            switch(getComputedStyle(e.srcElement).backgroundColor){
                case "rgb(88, 62, 49)" :
                    console.log("click me " + e.srcElement.innerHTML)
                    getID("lyxesInfo").innerHTML = 
                    skills.filter(sk=>sk.label === e.srcElement.innerHTML)[0].tip
                    break
                case "rgb(0, 128, 0)" :
                    txt = getID("lyxOldName").innerHTML.split(" : ")[1]
                    let thisLyx = getPlObj("Lyxes").lyx.filter(lx=>lx.name===txt)[0]
                    thisLyx.job = e.srcElement.innerHTML

                    getID("lyxesSumup").innerHTML = spit({text:"lyxesSumup"})

                    let mySkill = skills.filter(skl=>skl.label===e.srcElement.innerHTML)[0]

                    player.loop.queue.push({
                        type:"lyxJob",
                        lyxName:getID("lyxOldName").innerHTML.split(" : ")[1] ,
                        payFront:true,
                        priority:mySkill.priority,
                        costs:getPlObj("Lyxes").jobCosts,
                        payout:mySkill.payout,
                    })

                    if(player.loop.id===undefined){player.loop.id = setInterval(queueManager,1000)}

                    for(let i=0;i<getID("lyxesForkA").children.length;i++)
                        {getID("lyxesForkA").children[i].style.backgroundColor = "rgb(88, 62, 49)"}

                    player.focusID = "lyx:" + getID("lyxOldName").innerHTML.split(" : ")[1]
                    setTabLyxes("Lyxes")

                    break
                default : console.log("skill button function broken")
            }
        }})      
    })
    if(srcObj.skills.length > 0){getID("lyxesForkA").children[0].style.marginTop = "10px"}


    srcObj.lyx.forEach(lx =>{  // console.log(lx) ; 
        txt = lx.name + "<br>" + lx.health.label + lx.health.current + "/" + lx.health.cap
        let myCol = lx.health.current > 0 ? "#583E31" : "crimson"
        addEle({dad:getID("lyxesForkB"),setClass:"clickBtn",setID:"lyx:"+lx.name,backC:myCol,
    text:txt,minWidth:"100px",setFunc:(e)=>{setLyxDetails(e.srcElement.id.split(":")[1])}}) })
    getID("lyxesForkB").children[0].style.marginTop = "10px"

    if(player.focusID!==undefined){getID(player.focusID).click() ; player.focusID = undefined}
    if(player.focusTxt!==undefined){getID("lyxesInfo").innerHTML=player.focusTxt  ; player.focusTxt = undefined}
}



function setLyxDetails(lyxNm){
    let myCont = getID("lyxesForkC")
    cleanParent(myCont)
    let srcObj = getPlObj("Lyxes").lyx.filter(lx=>lx.name===lyxNm)[0]
    getID("lyxesInfo").innerHTML = ""

    addEle({dad:myCont,text:"Current Name : "+srcObj.name,margin:"10px 0 0 5px",setID:"lyxOldName"})
    let subCont = addEle({dad:myCont,setClass:"contRow",alignItems:"center"})
        addEle({dad:subCont,setClass:"clickBtn",text:"Change Name",setFunc:()=>{
            if(checkDupLyx(getID("inputLyxName").value.toLowerCase())===true){
                getID("lyxesInfo").innerHTML = "The new name cannot be the name of another Lyx"
            } else {
                player.focusTxt = getID("lyxOldName").innerHTML.split(" : ")[1] + 
                " changed name for " + getID("inputLyxName").value
                player.focusID = "lyx:" + getID("inputLyxName").value
                
                getPlObj("Lyxes").lyx.filter(lx=>lx.name === getID("lyxOldName")
                .innerHTML.split(" : ")[1])[0].name = getID("inputLyxName").value
                setTabLyxes("Lyxes")
            }   
             }})
        addEle({dad:subCont,what:"input",isInput:true,width:"100px",marginR:"10px",
        setVal:srcObj.name,setID:"inputLyxName",height:"12px"})

    txt = srcObj.job === undefined ? "- none -" : srcObj.job
    addEle({dad:myCont,text:"Current Job : " + txt,margin:"10px 0 0 5px",setID:"lyxJob"})
    subCont = addEle({dad:myCont,setClass:"contRow",alignItems:"center"})
        txt = srcObj.job === undefined ? "Set Job" : "Fire"
        if(srcObj.health.current < 1){txt = "Bury "+srcObj.name}
        let btCol = srcObj.job === undefined ? "green" : "firebrick"
        if(srcObj.health.current < 1){btCol = "black"}
        addEle({dad:subCont,setClass:"clickBtn",text:txt,backC:btCol,setFunc:(e)=>{
            txt = e.srcElement.innerHTML.includes("Bury") ? "Bury" : e.srcElement.innerHTML
            switch(txt){
                case "Set Job" :
                    getID("lyxesInfo").innerHTML="Click on a job in the List"
                    for(let i=0;i<getID("lyxesForkA").children.length;i++)
                        {getID("lyxesForkA").children[i].style.backgroundColor = "green"}
                    break
                case "Fire" :
                    txt = getID("lyxOldName").innerHTML.split(" : ")[1]
                    let thisLyx = getPlObj("Lyxes").lyx.filter(lx=>lx.name===txt)[0]
                    thisLyx.job = undefined
                    let thisIdx = player.loop.queue.findIndex(itm=>itm.type==="lyxJob" && itm.lyxName===thisLyx.name)
                    player.loop.queue.splice(thisIdx,1)
                    player.focusID = "lyx:" + getID("lyxOldName").innerHTML.split(" : ")[1]
                    setTabLyxes("Lyxes")
                    break
                case "Bury" :
                    info.innerHTML = "kill !"+e.srcElement.innerHTML.split("Bury ")[1]
                    break
                default : info.innerHTML = "unknown" + e.srcElement.innerHTML
            }
        }})

        txt = srcObj.job !== undefined && srcObj.skills.length < getPlObj("Lyxes").skillCap &&
        srcObj.skills.filter(sk=>sk.label===srcObj.job).length === 0 ? "block" : "none"
        if(srcObj.health.current < 1){txt = "none"}
        addEle({dad:subCont,setClass:"clickBtn",text:"Set Job as Skill",backC:"blue",display:txt,setFunc:(e)=>{
            txt = getID("lyxOldName").innerHTML.split(" : ")[1]
            let thisLyx = getPlObj("Lyxes").lyx.filter(lx=>lx.name===txt)[0]
            thisLyx.skills.push({label:getID("lyxJob").innerHTML.split(" : ")[1],prgress:0,next:100}) 
            player.focusID = "lyx:" + getID("lyxOldName").innerHTML.split(" : ")[1]
            setTabLyxes("Lyxes")
            }})

//console.log(getPlObj("Lyxes").lyx)

    //    console.log(e.srcElement.innerHTML)
}

