
const body = document.querySelector("body")

const srcImgs = "https://farmrpg.com/img/items/"

const outputs = [
    {label:"LN",rate:"1000:70",img:"lnet.png"},
    {label:"OJ",rate:"3:1",img:"orangejuice.png"},
    {label:"Lemonade",rate:"3:1",img:"lemonade.png"},
    {label:"AP",rate:"30:1",img:"ap.png"},
    {label:"Cider",rate:"22:1",img:"8984.png"},
]

const roundings = ["Up","Down","Closest 5"]

const rateB =[
{type:"LN",rate:"1000:70",bonus:0,rounding:roundings[2]},
{type:"OJ",rate:"3:1",bonus:0,rounding:roundings[2]},
{type:"Lemonade",rate:"3:1",bonus:0,rounding:roundings[2]},
{type:"AP",rate:"30:1",bonus:0,rounding:roundings[2]},
{type:"Cider",rate:"22:1",bonus:0,rounding:roundings[2]},
]

let pageVer = "2.0"

let userI = {
    pageV:"2.0",
    currentSet:"Basic",
    rateU:[],
    autoLoad:false,
    toolPerLine:3,
    inventoryMax:"???",
    fruitsProd:"???",
    fruitsArte:false,
    fruitsTot:0,
    antlersProd:"???",
    antlersArte:false,
    netsTot:0,
    resSaver:45,
    mms:[
        {label:"OJ",img:"orangejuice.png",progress:"???"},
        {label:"Lemonade",img:"lemonade.png",progress:"???"},
        {label:"LN",img:"lnet.png",progress:"???"},
        {label:"Cider",img:"8984.png",progress:"???"},
        {label:"AP",img:"ap.png",progress:"???"},
    ],
    visuals:{
        preset:{
            pageBackC:"black",
            pagebackG:"",
            text:"white",
            buttonBackC:"rgb(49,75,134)",
            buttonTextC:"white",
            inputTextC:"green",
        },

    },
}

loadSav()


let tempRate = {
    type:undefined,
    rate1:undefined,
    rate2:undefined,
    bonus:undefined,
    rounding:undefined,
}

// let noAutoChange = undefined

let lnk = undefined

let purple = "rgb(226, 72, 226)"
let green = "rgb(18, 184, 18)"
let yellow = "rgb(184, 184, 27)"

let help = [
    spanText("","🤠",24)+`User Settings : Worth a visit ... at least once !! `,
    `Amount of items received divided by [left] value multiplied by [right] value`,
    `For Generous Converters : instead of better ratio (1000:75 etc) try a % of bonus (5% or any)`,
    `** Find Value at the top of "My Inventory" page **`,
    `** Find Value on "Workshop" page **`,
    `** Find Value on page "Home > My Farm > Orchard" **`,
    `** Find Value on page "Home > My Farm > Raptor Pen" **`,
]

function showInfo(msg,dur=1000,col="",defCont=getID("info")){
    console.log(msg)
    defCont.innerHTML = col==="" ? msg : spanText(col,msg)
    setTimeout(()=>{defCont.innerHTML=""},dur)
}


function testNum(num,zeroGood=false){
    let test = true

    if(!isNaN(num)){
        let val = Number(num)
        if(val===0 && !zeroGood){test=false}
    } else {test=false}

    return test
}

function arrowContToggler(e,tgtId,tgtFunc=undefined){
    let el = e.srcElement ; let disp = el.innerHTML ; let tgt = getID(tgtId)
    switch(disp){
        case "🔽":tgt.style.display = "flex" ; el.innerHTML = "🔼" ; if(tgtFunc){tgtFunc()} ;break
        case "🔼":tgt.style.display = "none" ; el.innerHTML = "🔽" ; break
    }
}

function changeToolsCount(e){
    let val = e.srcElement.value
    if(testNum(val))
         {userI.toolPerLine = Math.floor(Number(val)) ; setTools()}
    else {info.innerHTML = "Input Error" ; setTimeout(()=>{info.innerHTML =""},1000)}
}

function rateSelection(){
    let grp = document.getElementsByName("rateSets")
    grp.forEach(it=>{
        if(it.checked){
            getID("currentSet").innerHTML = spanText("yellow",it.value)
            userI.currentSet = it.value
        }})
    if(userI.rateU.length===0){grp[1].disabled = true}
    setTools()
}

function setRatesCont(){

    let from = userI.visuals.preset
    if(getID("savCont").style.display==="flex"){getID("savCont").style.display="none"}

    let workC = getID("ratesCont")
    cleanParent(workC)

    addEle({dad:workC,setClass:"contRow",setID:"ratesFork"})
        addEle({dad:getID("ratesFork"),setClass:"contCol",setID:"rateC1"})
        addEle({dad:getID("ratesFork"),setClass:"contCol",setID:"rateC2"})
            addEle({dad:getID("rateC2"),setClass:"contCol",setID:"rateC2Top",margin:"5px"})
            addEle({dad:getID("rateC2"),setClass:"contCol",setID:"rateC2Btm",margin:"5px"})


    let txt = "Basic set of ("+spanText("lime",rateB.length)+") Rates"+"<br>(common standard rates)"
    addEle({dad:getID("rateC1"),setClass:"btn",text:txt,minWidth:"160px",margin:"10px",backC:from.buttonBackC,
    setFunc:()=>{dispRates()}})

    txt = "Custom Rates ("+spanText("lime",userI.rateU.length)+")"+"<br>(Build your own set)"
    addEle({dad:getID("rateC1"),setClass:"btn",text:txt,minWidth:"160px",margin:"10px",backC:from.buttonBackC,
    setID:"customBtn",setFunc:setCustomBuilder})

}

function setCustomBuilder(){
    let workC = getID("rateC2Top")
    cleanParent(workC)
    cleanParent(getID("rateC2Btm"))

    let from = userI.visuals.preset

    if(userI.rateU.length > 0){dispRates(basic=false)}

    addEle({dad:workC,marginL:"20px",textC:purple,minHeight:"35px",setID:"info1",setClass:"contRow",alignItems:"center"})

    addEle({dad:workC,text:"Add a Custom Rate",borderB:"solid 2px yellow",width:"fit-content"})
    let cont = addEle({dad:workC,setClass:"contRow",margin:"3px",alignItems:"center"})
        addEle({dad:cont,text:"Type of Converting : "})
        let txt = srcImgs+outputs[0].img
        addEle({dad:cont,what:"img",imgFullSrc:txt,imgSize:20,margin:"5px 5px 0 5px",setID:"customTypeImg"})
        outputs.forEach(out=>{
            addEle({dad:cont,what:"radio",isInput:true,setVal:out.label,setName:"customTypes",
            setFunc:customTypeSelection})
        })
        addEle({dad:cont,setID:"customType",marginL:"5px",textC:green,minWidth:"70px"})

    cont = addEle({dad:workC,setClass:"contRow",margin:"3px",alignItems:"center"})
        addEle({dad:cont,setClass:"btn",text:"?",backC:green,width:"16px",textC:"lime",backC:from.buttonBackC,
        fontS:"14px",fontB:"bolder",marginR:"10px",setFunc:()=>{showInfo(help[1],10000,"",getID("info1"))}})
        addEle({dad:cont,text:"Rate of Converting =",marginR:"5px"})
        addEle({dad:cont,what:"input",isInput:true,width:"50px",setID:"customR1",setVal:1000,
        border:"solid 1px yellow",textA:"center",textC:green,backC:"black",setFunc:calcTestR})
        addEle({dad:cont,text:":",fontS:"22px",margin:"0 10px"})
        addEle({dad:cont,what:"input",isInput:true,width:"50px",setID:"customR2",setVal:70,
        border:"solid 1px yellow",textA:"center",textC:green,backC:"black",setFunc:calcTestR})

    cont = addEle({dad:workC,setClass:"contRow",margin:"3px",alignItems:"center"})
        addEle({dad:cont,setClass:"btn",text:"?",backC:green,width:"16px",textC:"lime",backC:from.buttonBackC,
        fontS:"14px",fontB:"bolder",marginR:"10px",setFunc:()=>{showInfo(help[2],10000,"",getID("info1"))}})

        addEle({dad:cont,text:"Bonus(+%) Payout =",marginR:"5px"})
        addEle({dad:cont,what:"input",isInput:true,width:"50px",setID:"customBonus",setVal:0,
        border:"solid 1px yellow",textA:"center",textC:green,backC:"black",setFunc:calcTestR})

        addEle({dad:cont,text:"Type of Rounding :",marginL:"20px"})
        roundings.forEach(out=>{
            addEle({dad:cont,what:"radio",isInput:true,setVal:out,setName:"customRoundings",
            setFunc:customRoundingSelection})
        })
        addEle({dad:cont,setID:"customRounding",marginL:"5px",textC:green})

    cont = addEle({dad:workC,setClass:"contRow",margin:"3px",alignItems:"center"})
        addEle({dad:cont,text:"Test Amount",marginR:"10px"})
        addEle({dad:cont,what:"input",isInput:true,width:"80px",setID:"customTest",setVal:0,
        border:"solid 1px yellow",textA:"center",textC:green,backC:"black",setFunc:calcTestR})
        addEle({dad:cont,text:"⇒",margin:"5px"})
        addEle({dad:cont,setID:"customTestR",text:0,textC:green,backC:"black"})

    cont = addEle({dad:workC,setClass:"contRow"})
        addEle({dad:cont,text:"Add to Custom Rates List",setClass:"btn",backC:from.buttonBackC,setFunc:addCustomRate})

    document.getElementsByName("customTypes")[0].click()
    document.getElementsByName("customRoundings")[0].click()


    /*
    

    



        addEle({dad:cont,text:"Save Custom List to browser",setClass:"btn",backC:"blue",
        border:"yellow solid 2px",padding:"10px",backC:"green",setFunc:()=>{
            saveToBrowser()
        }})

        addEle({dad:cont,text:"Load Custom List",setClass:"btn",backC:"blue",
        border:"yellow solid 2px",padding:"10px",backC:"green",setFunc:()=>{
            loadFromBrowser()
        }})

    document.getElementsByName("outputsR")[0].click()
    document.getElementsByName("roundingR")[0].click()

    if(tempRate.type !== undefined){
        document.getElementsByName("outputsR").forEach(it=>{
            if(it.value===tempRate.type){it.click()}
        })
        getID("customR1").value = tempRate.rate1
        getID("customR2").value = tempRate.rate2
        getID("customB").value = tempRate.bonus
        getID("roundingT").innerHTML = tempRate.rounding
    }
    if(userI.autoLoad && !getID("autoLoadBox").checked || 
    !userI.autoLoad && getID("autoLoadBox").checked)
    {noAutoChange=true ; getID("autoLoadBox").click()}
*/

}

function addCustomRate(){
    if(testNum(getID("customR1").value) && 
       testNum(getID("customR2").value) && 
       testNum(getID("customBonus").value,true)){

        userI.rateU.push({
            type:getID("customType").innerHTML,
            rate:getID("customR1").value+":"+getID("customR2").value,
            bonus:getID("customBonus").value,
            rounding:getID("customRounding").innerHTML,
        })

        tempRate.type = getID("customType").innerHTML
        tempRate.rate1 = getID("customR1").value
        tempRate.rate2 = getID("customR2").value
        tempRate.bonus = getID("customBonus").value
        tempRate.rounding = getID("customRounding").innerHTML

        getID("customBtn").innerHTML = 
        "Custom rates ("+spanText("lime",userI.rateU.length)+")"+"<br>(Build your own set)"

        if(userI.rateU.length>0){
            document.getElementsByName("rateSets")[1].disabled = false
            document.getElementsByName("rateSets")[1].click()
            dispRates(false)
        }
    }
}

function customTypeSelection(){
    let grp = document.getElementsByName("customTypes")
    grp.forEach(it=>{
        if(it.checked){ 
            getID("customType").innerHTML = it.value
            let txt = outputs.filter(x=>x.label===it.value)[0].rate
            getID("customR1").value = txt.split(":")[0]
            getID("customR2").value = txt.split(":")[1]
            getID("customTypeImg").src = srcImgs + outputs.filter(x=>x.label===it.value)[0].img
        }
    })
}

function customRoundingSelection(){
    let grp = document.getElementsByName("customRoundings")
    grp.forEach(it=>{
        if(it.checked){ getID("customRounding").innerHTML = it.value}
        calcTestR()
    })
}

function calcTestR(){
    let val = Number(getID("customTest").value)
    let valD = Number(getID("customR1").value)
    let valM = Number(getID("customR2").value)
    let valB = Number(getID("customBonus").value)
    if(testNum(val) && testNum(valD) && testNum(valM)){
        let rtn = calcConvert(val,valD,valM,valB,getID("customRounding").innerHTML)
        let txt = rtn.payR +" (+"+rtn.bonR+") = " + (rtn.payR+rtn.bonR) + 
                " from " + rtn.pay.toFixed(2) +" (+"+rtn.bon.toFixed(2)+") = " 
                + (rtn.pay+rtn.bon).toFixed(2)
        getID("customTestR").innerHTML = txt 
        }
    else
        {getID("customTestR").innerHTML = spanText(purple,"Input Error")}
}

function calcConvert(amtV,amtD,amtM,amtB,amtR){
    let send = {pay:undefined,bon:undefined,payR:undefined,bonR:undefined}
    send.pay = amtV / amtD * amtM
    send.bon = send.pay * amtB /100
    switch(amtR)
       {case "Up" : send.payR = Math.ceil(send.pay) ; send.bonR = Math.ceil(send.bon) ; break
        case "Down" : send.payR = Math.floor(send.pay) ; send.bonR = Math.floor(send.bon) ; break
        case "Closest 5" : send.payR = round5(send.pay) ; send.bonR = round5(send.bon) ; break}
    return send
}

function round5(val){
    let rVal = Math.floor(Number(val))
    if(rVal!==0){
        let nbStr = rVal.toString()
        let dgt = Number(nbStr.slice(-1))
            
        if(dgt>0){
            switch(dgt){
                case 1 : case 2 : rVal = (rVal-dgt); break
                case 3 : case 4 : rVal = (rVal+(5-dgt)); break
                case 6 : case 7 : rVal = (rVal+(5-dgt)); break
                case 8 : case 9 : rVal = (rVal+(10-dgt)); break
            }
        }
    }
    return rVal
}

function dispRates(basic=true){
    let workC = getID("rateC2Btm")
    cleanParent(workC)
    let from = userI.visuals.preset

    let arr = undefined
    if(basic)
         {arr = rateB;cleanParent(getID("rateC2Top"))}
    else {arr = userI.rateU}
    let cpt=0
    arr.forEach(it=>{
        let cont = addEle({dad:workC,setClass:"contRow",margin:"2px"})
            if(!basic){
                addEle({dad:cont,text:"Delete",setClass:"btn",marginR:"",backC:"brown",fontS:"14px",
                backC:from.buttonBackC,setID:"customDel:"+cpt,cursor:"pointer",setFunc:(e)=>{blastRate(e)}})    
            }
            addEle({dad:cont,setClass:"rating",text:it.type})
            addEle({dad:cont,setClass:"rating",text:"rate : "+it.rate})
            addEle({dad:cont,setClass:"rating",text:"bonus : "+it.bonus+" %"})
            addEle({dad:cont,setClass:"rating",text:"rounding : "+it.rounding})
        cpt++
    })
}

function blastRate(e){
    let idx = Number(e.srcElement.id.split(":")[1])
    userI.rateU.splice(idx,1)
    if(userI.rateU.length === 0){
        document.getElementsByName("rateSets")[1].disabled = true
        document.getElementsByName("rateSets")[0].click()
    }
    dispRates(false)
    setTools()
}

function setUserDetails(){

    if(getID("savCont").style.display==="flex"){getID("savCont").style.display="none"}

    let workC = getID("userDcont")
    cleanParent(workC)
    let from = userI.visuals.preset


    addEle({dad:workC,marginL:"20px",textC:purple,minHeight:"35px",setID:"info2",setClass:"contRow",alignItems:"center"})

    let titleL = 170
    let cont = addEle({dad:workC,setClass:"contRow",margin:"5px",alignItems:"center"})
        addEle({dad:cont,setClass:"btn",text:"?",backC:green,width:"16px",textC:"lime",margin:"0 5px",backC:from.buttonBackC,
        fontS:"14px",fontB:"bolder",setFunc:()=>{showInfo(help[3],4000,"",getID("info2"))}})

        addEle({dad:cont,text:"Current Max Inventory : ",marginR:"10px",textA:"center",minWidth:titleL+"px"})
        addEle({dad:cont,what:"input",isInput:true,width:"70px",setID:"userInv",setVal:userI.inventoryMax,
        border:"solid 1px yellow",textA:"center",textC:green,backC:"black",setFunc:(e)=>{testValNum(e,"userInvT")}})
        addEle({dad:cont,setClass:"valChecker",setID:"userInvT"})

    cont = addEle({dad:workC,setClass:"contRow",margin:"5px",alignItems:"center"})
        addEle({dad:cont,setClass:"btn",text:"?",backC:green,width:"16px",textC:"lime",margin:"0 5px",backC:from.buttonBackC,
        fontS:"14px",fontB:"bolder",setFunc:()=>{showInfo(help[4],4000,"",getID("info2"))}}) 

        addEle({dad:cont,text:`Resource Saver Perk :<br>(do not type " % ") `,marginR:"10px",textA:"center",minWidth:titleL+"px"})
        addEle({dad:cont,what:"input",isInput:true,width:"70px",setID:"userResSav",setVal:userI.resSaver,
        border:"solid 1px yellow",textA:"center",textC:green,backC:"black",setFunc:(e)=>{testValNum(e,"userResSavT")}})
        addEle({dad:cont,setClass:"valChecker",setID:"userResSavT"})

    cont = addEle({dad:workC,setClass:"contRow",margin:"5px",alignItems:"center"})
        addEle({dad:cont,setClass:"btn",text:"?",backC:green,width:"16px",textC:"lime",margin:"0 5px",backC:from.buttonBackC,
        fontS:"14px",fontB:"bolder",setFunc:()=>{showInfo(help[5],4000,"",getID("info2"))}})

        addEle({dad:cont,text:"Fruits daily production :",marginR:"10px",textA:"center",minWidth:titleL+"px"})
        addEle({dad:cont,what:"input",isInput:true,width:"70px",setID:"userFruitsP",setVal:userI.fruitsProd,
        border:"solid 1px yellow",textA:"center",textC:green,backC:"black",setFunc:(e)=>{testValNum(e,"userFruitsPT")}})
        addEle({dad:cont,setClass:"valChecker",setID:"userFruitsPT"})
        addEle({dad:cont,what:"checkbox",isInput:true,setID:"userArte1",accentCol:green,margin:"0 -5px 0 -5px",
        setFunc:updateUserDetails})
        let subC = addEle({dad:cont,setClass:"contRow",border:"solid teal 1px",width:"fit-content",cursor:"pointer",
        padding:"1px",alignItems:"center",marginL:"5px",radius:"15px",setFunc:()=>{getID("userArte1").click()}})
            addEle({dad:subC,what:"img",imgFullSrc:srcImgs+"615.png",imgSize:20,margin:"0 5px",})
            addEle({dad:subC,text:"Using the "+spanText("yellow","Tree Shaker") +"<br>(T170 Artefact)",
            marginR:"5px",textA:"center"})

    cont = addEle({dad:workC,setClass:"contRow",margin:"5px",alignItems:"center"})
        addEle({dad:cont,setClass:"btn",text:"?",backC:green,width:"16px",textC:"lime",margin:"0 5px",backC:from.buttonBackC,
        fontS:"14px",fontB:"bolder",setFunc:()=>{showInfo(help[6],4000,"",getID("info2"))}})

        addEle({dad:cont,text:"Antlers daily production :",marginR:"10px",textA:"center",minWidth:titleL+"px"})
        addEle({dad:cont,what:"input",isInput:true,width:"70px",setID:"userAntlersP",setVal:userI.antlersProd,
        border:"solid 1px yellow",textA:"center",textC:green,backC:"black",setFunc:(e)=>{testValNum(e,"userAntlersPT")}})
        addEle({dad:cont,setClass:"valChecker",setID:"userAntlersPT"})
        addEle({dad:cont,what:"checkbox",isInput:true,setID:"userArte2",accentCol:green,margin:"0 -5px 0 -5px",
        setFunc:updateUserDetails})
        subC = addEle({dad:cont,setClass:"contRow",border:"solid teal 1px",width:"fit-content",cursor:"pointer",
        padding:"1px",alignItems:"center",marginL:"5px",radius:"15px",setFunc:()=>{getID("userArte2").click()}})
            addEle({dad:subC,what:"img",imgFullSrc:srcImgs+"3320.png",imgSize:20,margin:"0 5px",})
            addEle({dad:subC,text:"Using the "+spanText("yellow","Antler Snare") +"<br>(T160 Artefact)",
            marginR:"5px",textA:"center"})
        
    addEle({dad:workC,text:"Masteries Progression (to MM tier)",borderB:"solid 2px teal",width:"fit-content",
    margin:"0 0 5px 10px"})
    titleL = 80
    userI.mms.forEach(mm=>{
    cont = addEle({dad:workC,setClass:"contRow",margin:"5px",alignItems:"center"}) 
        addEle({dad:cont,setClass:mm.progress >= 1000000 ? "crossedTxt":"",text:mm.label,marginR:"10px",
        textA:"center",minWidth:titleL+"px",setID:mm.label+"MMlb"})
        addEle({dad:cont,what:"input",isInput:true,width:"100px",setID:mm.label+"MM",setVal:mm.progress,
        border:"solid 1px yellow",textA:"center",textC:green,backC:"black",
        setFunc:(e)=>{testValNum(e,mm.label+"MMT",true)}})
        addEle({dad:cont,setClass:"valChecker",setID:mm.label+"MMT"})
        addEle({dad:cont,width:"100px",height:"10px",border:green+" solid 2px",radius:"30px",setID:mm.label+"pC"})
            addEle({dad:getID(mm.label+"pC"),height:"100%",width:"0%",backC:"yellow",radius:"30px",setID:mm.label+"MMp"})
    })

}

function testValNum(e,testId,prog=false){
    let val = e.srcElement.value
    if(testNum(val)){
        getID(testId).innerHTML = "✅"
        if(prog){
            val = Number(val) / 1000000 *100
            val = val > 100 ? 100 : val
            getID(e.srcElement.id+"p").style.width = val.toFixed(2)+"px"
            getID(e.srcElement.id+"p").style.backgroundColor = val === 100 ? "brown" : yellow
            getID(e.srcElement.id+"lb").setAttribute("class",val===100?"crossedTxt":"")
        }
    } else {
        getID(testId).innerHTML = "⛔"
        if(prog){
            getID(e.srcElement.id+"p").style,width = "0px"
            getID(e.srcElement.id+"p").style.backgroundColor = yellow
            getID(e.srcElement.id+"lb").setAttribute("class","")
        }
    } 
    updateUserDetails()
    if(getID("savCont").style.display === "flex"){getID("savCont").style.display = "none"}
}

function updateUserDetails(){
    let map = ["userInv","userResSav","userFruitsP","userAntlersP"]
    userI.mms.forEach(mm=>{map.push(mm.label+"MM")})
    let val = undefined
    let resetP = undefined
    let noonP = undefined

    val = getID(map[0]).value ; userI.inventoryMax = testNum(val) ? Number(val) : "???"
    val = getID(map[1]).value ; userI.resSaver = testNum(val) ? Number(val) : 0
    val = getID(map[2]).value ; userI.fruitsProd = testNum(val) ? Number(val) : "???"
    val = getID(map[3]).value ; userI.antlersProd = testNum(val) ? Number(val) : "???"
    for(let i=4;i<map.length;i++){
        val = getID(map[i]).value ; userI.mms[i-4].progress = testNum(val) ? Number(val) : "???"
    }

    userI.fruitsArte = getID("userArte1").checked ? true : false
    userI.antlersArte = getID("userArte2").checked ? true : false

    if(userI.inventoryMax !=="???"){
        if(userI.fruitsProd !=="???"){
            resetP = userI.fruitsProd > userI.inventoryMax ? userI.inventoryMax : userI.fruitsProd
            noonP = userI.fruitsArte ? Math.floor(userI.fruitsProd*.1) : 0
            noonP = noonP > userI.inventoryMax ? userI.inventoryMax : noonP
            userI.fruitsTot = resetP+noonP
        }
        if(userI.antlersProd !=="???"){
            resetP = userI.antlersProd > userI.inventoryMax ? userI.inventoryMax : userI.antlersProd
            noonP = userI.antlersArte ? Math.floor(userI.antlersProd*.1) : 0
            noonP = noonP > userI.inventoryMax ? userI.inventoryMax : noonP
            userI.netsTot = Math.floor((resetP+noonP) * (1+(userI.resSaver/100)))
        }
    }
}

function setUserSav(){
    let workC = getID("savCont")
    let from = userI.visuals.preset

    if(workC.style.display !=="flex"){
        workC.style.display =  "flex"

        cleanParent(workC)
        
        let fork = addEle({dad:workC,setClass:"contRow"})
            let oldSC = addEle({dad:fork,setClass:"contCol",textA:"center",border:"teal solid 2px",
            radius:"10px"})
            let newSC = addEle({dad:fork,setClass:"contCol",textA:"center",border:"teal solid 2px",
            radius:"10px",marginL:"10px"})
    
        addEle({dad:oldSC,backC:"brown",text:"Old User Details",margin:"5px 0"})
        addEle({dad:newSC,backC:"teal",text:"New User Details",margin:"5px 0"})
    
        let key = "farmRPGCustomConverting"
        let mySave = localStorage.getItem(key)
        if(mySave){
            let savOld = JSON.parse(mySave)
            getSavBuild(oldSC,savOld)
        } else {
            let cont = addEle({dad:oldSC,setClass:"contCol",justifyC:"center",height:"100%"})
                let txt = "No<br><br>Previous<br><br>Save"
                addEle({dad:cont,text:txt,textC:purple,fontS:"30px",width:"280px"})
        }
        
        getSavBuild(newSC,userI)

        addEle({dad:workC,setClass:"btn",backC:"teal",text:"Save New User Details",width:"90%",backC:from.buttonBackC,
        marginT:"10px",setFunc:()=>{getID("checkSavBtn").click() ; saveToBrowser(undefined,4000)}})
    
    } else {workC.style.display="none"}
}

function saveToBrowser(msg=undefined,dur=1000){
    let txt = msg === undefined ? "User Settings Saved ✅" : msg
    let key = "farmRPGCustomConverting"
    let mySave = JSON.stringify(userI)
    localStorage.setItem(key,mySave)
    showInfo(txt,dur)
}




let userI2 = {
    rateU:[],
    autoLoad : false,
}

function saveToBrowserOld(msg=undefined,dur=1000){
    let txt = msg === undefined ? "Old User Settings Saved ✅" : msg
    let key = "farmRPGCustomConverting"
    let mySave = JSON.stringify(userI2)
    localStorage.setItem(key,mySave)
 //   showInfo(txt,dur)
}



/*
function removeKey(){
    let key = "farmRPGCustomConverting"
    localStorage.removeItem(key)
  //  showInfo("✅ Progress Erased ❗")
} 
removeKey()
*/
//saveToBrowserOld()

console.log(userI)

function loadSav(){
    let key = "farmRPGCustomConverting"
    let mySave = localStorage.getItem(key)
    if(mySave){
        let tempUserI = JSON.parse(mySave)
        
        console.log(tempUserI)

        if(tempUserI.pageV===pageVer){
            console.log("found and up")
            userI = tempUserI
        } else {
            console.log("found but down")

            let swapSav = {
                pageV:pageVer,
                currentSet:tempUserI.rateU.length > 0 ? "Custom":"Basic",
                rateU:tempUserI.rateU,
                autoLoad:false,
                toolPerLine:3,
                inventoryMax:"???",
                fruitsProd:"???",
                fruitsArte:false,
                fruitsTot:0,
                antlersProd:"???",
                antlersArte:false,
                netsTot:0,
                resSaver:45,
                mms:[
                    {label:"OJ",img:"orangejuice.png",progress:"???"},
                    {label:"Lemonade",img:"lemonade.png",progress:"???"},
                    {label:"LN",img:"lnet.png",progress:"???"},
                    {label:"Cider",img:"8984.png",progress:"???"},
                    {label:"AP",img:"ap.png",progress:"???"},
                ],
                visuals:{
                    preset:{
                        pageBackC:"black",
                        pagebackG:"",
                        text:"white",
                        buttonBackC:"rgb(49,75,134)",
                        buttonTextC:"white",
                        inputTextC:"green",
                    },
            
                },
            }
            
            userI = swapSav
            saveToBrowser("")
            console.log("sav updated")
        }

    } else {
        console.log("no sav")
    }

}


function getSavBuild(dady,src){
    let tbM = addEle({dad:dady,what:"table"})
    let tbS = undefined
    let tr = undefined
    let tc = undefined
    let txt = undefined

    tr = addEle({dad:tbM,what:"tr"})
        tc = addEle({dad:tr,what:"td",setClass:"tealCell",text:"Custom<br>Rates<br>List"})
    if(src.rateU.length>0){
        tc = addEle({dad:tr,what:"td"})
            tbS = addEle({dad:tc,what:"table"})
            src.rateU.forEach(rt=>{
            tr = addEle({dad:tbS,what:"tr"})
                addEle({dad:tr,what:"td",setClass:"tealCell",text:rt.type})
                addEle({dad:tr,what:"td",setClass:"tealCell",text:"rate : "+rt.rate})
                addEle({dad:tr,what:"td",setClass:"tealCell",text:"bonus : "+rt.bonus})
                addEle({dad:tr,what:"td",setClass:"tealCell",text:"rounding : "+rt.rounding})})}
    else{
        addEle({dad:tr,what:"td",setClass:"tealCell",text:spanText("fuchsia","---")})
    }

    tr = addEle({dad:tbM,what:"tr"})
       addEle({dad:tr,what:"td",setClass:"tealCell",text:"Tools per line"})
       addEle({dad:tr,what:"td",setClass:"tealCell",text:src.toolPerLine})

    tr = addEle({dad:tbM,what:"tr"})
       addEle({dad:tr,what:"td",setClass:"tealCell",text:"Max Inventory"})
       addEle({dad:tr,what:"td",setClass:"tealCell",text:src.inventoryMax.toLocaleString()})

    tr = addEle({dad:tbM,what:"tr"})
       addEle({dad:tr,what:"td",setClass:"tealCell",text:"Resource Saver Perk"})
       addEle({dad:tr,what:"td",setClass:"tealCell",text:src.resSaver+"%"})

    tr = addEle({dad:tbM,what:"tr"})
       txt = src.fruitsArte ? "<br>(Using Artefact : "+spanText(green,"Yes")+")" : 
       "<br>(Using Artefact : "+spanText(green,"No")+")"
       addEle({dad:tr,what:"td",setClass:"tealCell",text:"Fruits daily production"+txt})
       txt = src.fruitsProd.toLocaleString() + "<br>(Total : "+src.fruitsTot.toLocaleString()+")"
       addEle({dad:tr,what:"td",setClass:"tealCell",text:txt})

    tr = addEle({dad:tbM,what:"tr"})
       txt = src.antlersArte ? "<br>(Using Artefact : "+spanText(green,"Yes")+")" : 
       "<br>(Using Artefact : "+spanText(green,"No")+")"
       addEle({dad:tr,what:"td",setClass:"tealCell",text:"Antlers daily production"+txt})
       txt = src.antlersProd.toLocaleString() + "<br>(Total nets : "+src.netsTot.toLocaleString()+")"
       addEle({dad:tr,what:"td",setClass:"tealCell",text:txt})

    tr = addEle({dad:tbM,what:"tr"})
       addEle({dad:tr,what:"td",setClass:"tealCell",text:"MM Progress"})
       txt = ""
       src.mms.forEach(mm=>{txt += mm.label + " : " + mm.progress.toLocaleString()+"<br>"})
       addEle({dad:tr,what:"td",setClass:"tealCell",text:txt})
}

function setTools(){
    console.log("set tools : "+userI.toolPerLine+" set : "+userI.currentSet)
}

// body.style.backgroundImage = "URL(https://farmrpg.com/img/pbgs/dark/bg_64.jpg)"