

function setPage(){
    let last = "Last up 2025 03/16 13:55 (settings Options added)"
    let from = userI.visuals.preset

    let contR = addEle({dad:body,setClass:"contRow",alignItems:"center",margin:"5px"})
    lnk = "https://melomelo7.github.io/idlepixelinfo/farmrpg/farmRpg_Bob1_Farm.html"
        addEle({dad:contR,setClass:"btn",text:"⇦ Go Back",backC:from.buttonBackC,setFunc:()=>{window.open(lnk,"_self")}})
        addEle({dad:contR,text:spanText("yellow",last),margin:"10px"})
    
    let settingsFr = addEle({dad:body,setClass:"contCol",padding:"5px",width:"100%",textC:"white"})
        addEle({dad:settingsFr,margin:"5px 20px",textC:purple,minHeight:"35px",setClass:"contRow",
        alignItems:"center",setID:"info"})
        let setTop = addEle({dad:settingsFr,setClass:"contRow",alignItems:"center",marginL:"5px"})
            addEle({dad:setTop,text: "User Settings "+spanText("yellow","⚙"),fontS:"20px",margin:"0 5px"})
            addEle({dad:setTop,text: spanText("lime","🔽",20),setClass:"arrowToggler",
                    setFunc:(e)=>{arrowContToggler(e,"settingsCont",setSettings)}})
    
            addEle({dad:setTop,text:"Rate Set Currently Used : ",marginL:"10px"})
            addEle({dad:setTop,what:"radio",isInput:true,setVal:"Basic",setName:"rateSets",
            accentCol:"green",setFunc:rateSelection})
            addEle({dad:setTop,what:"radio",isInput:true,setVal:"Custom",setName:"rateSets",
            accentCol:"green",setFunc:rateSelection})
            addEle({dad:setTop,setID:"currentSet",marginL:"5px"})
            document.getElementsByName("rateSets").forEach(it=>{if(it.value===userI.currentSet){it.click()}})
            
            addEle({dad:settingsFr,setClass:"contCol",borderL:"yellow solid 3px",minHeight:"30px",
            padding:"5px",display:"none",margin:"",setID:"settingsCont"})
    
    addEle({dad:body,setClass:"contCol",padding:"5px",width:"100%",setID:"toolsFr"})        
    
  //  if(userI.rateU.length===0 || userI.inventoryMax==="???"){showInfo(help[0],3000,green)}
}

function setSettings(){
    let workC = getID("settingsCont")
    cleanParent(workC)

    let from = userI.visuals.preset
    addEle({dad:workC,setClass:"contRow",alignItems:"center",margin:"5px",
    borderL:"dotted 3px teal",setID:"toolsCont"})
        addEle({dad:getID("toolsCont"),text:"Tools per Line",margin:"5px 10px"})
        addEle({dad:getID("toolsCont"),what:"input",isInput:true,setVal: userI.toolPerLine,
                width:"10px",setFunc:(e)=>{changeToolsCount(e)}})

    addEle({dad:workC,setClass:"contRow",alignItems:"center",marginB:"10px",setID:"ratesTgl"})
        addEle({dad:getID("ratesTgl"),text: "Rates / Ratios",minWidth:"100px",textA:"right",paddingR:"10px"})
        addEle({dad:getID("ratesTgl"),text: spanText("lime","🔽",16),setClass:"arrowToggler",
        margin:"0 10px",setFunc:(e)=>{arrowContToggler(e,"ratesCont",setRatesCont)}})

    addEle({dad:workC,setClass:"contCol",alignItems:"center",margin:"5px",borderL:"dotted 3px teal",
    display:"none",setID:"ratesCont",width:"fit-content"})
            
    addEle({dad:workC,setClass:"contRow",alignItems:"center",marginL:"",setID:"userDTgl"})
        addEle({dad:getID("userDTgl"),text: "User Details",minWidth:"100px",textA:"right",paddingR:"10px"})
        addEle({dad:getID("userDTgl"),text: spanText("lime","🔽",16),setClass:"arrowToggler",
        margin:"0 10px",setFunc:(e)=>{arrowContToggler(e,"userDcont",setUserDetails)}})
    addEle({dad:workC,setClass:"contCol",margin:"5px",borderL:"dotted 3px teal",
    display:"none",setID:"userDcont",width:"fit-content"})

    addEle({dad:workC,setClass:"btn",text:"Check / Save User Settings 🔽",margin:"10px 0",
    backC:from.buttonBackC,setID:"checkSavBtn",setFunc:setUserSav})
    addEle({dad:workC,setClass:"contCol",marginL:"10px",padding:"5px",height:"fit-content",
    width:"fit-content",display:"none",setID:"savCont",alignItems:"center"})
}


setPage()