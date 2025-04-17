
const body = document.querySelector("body")

const srcImgs = "https://farmrpg.com/img/items/"

const outputs = [
    {label:"OJ",rate:"3:1",img:"orangejuice.png",chat1:"((Orange))",chat2:"((Orange Juice))"},
    {label:"Lemonade",rate:"3:1",img:"lemonade.png",chat1:"((Lemon))",chat2:"((Lemonade))"},
    {label:"AP",rate:"30:1",img:"ap.png",chat1:"((Lemon))",chat2:"((Arnold Palmer))"},
    {label:"LN",rate:"1000:70",img:"lnet.png",chat1:"((Fishing Net))",chat2:"((Large Net))"},
    {label:"Cider",rate:"22:1",img:"8984.png",chat1:"((Apple))",chat2:"((Apple Cider))"},
]

const roundings = ["Up","Down","Closest 5"]

const rateB =[
{ind:0,type:"OJ",rate:"3:1",bonus:0,rounding:roundings[0],orderMem:[],orderIdx:undefined,orderTimer:undefined,advertising:false},
{ind:1,type:"Lemonade",rate:"3:1",bonus:0,rounding:roundings[0],orderMem:[],orderIdx:undefined,orderTimer:undefined,advertising:false},
{ind:2,type:"AP",rate:"30:1",bonus:0,rounding:roundings[0],orderMem:[],orderIdx:undefined,orderTimer:undefined,advertising:false},
{ind:3,type:"LN",rate:"1000:70",bonus:0,rounding:roundings[0],orderMem:[],orderIdx:undefined,orderTimer:undefined,advertising:false},
{ind:4,type:"Cider",rate:"22:1",bonus:0,rounding:roundings[0],orderMem:[],orderIdx:undefined,orderTimer:undefined,advertising:false},
]

let pageVer = "2.0"

let userI = {
    pageV:"2.0",
    currentSet:"Basic",
    rateU:[],
    toolPerLine:3,
    memoCap:5,
    memoTimer:3,
    inventoryMax:"???",
    fruitsProd:7800,
    fruitsArte:false,
    fruitsTot:0,
    antlersProd:"???",
    antlersArte:false,
    netsTot:0,
    resSaver:45,
    resCraft:1.45,
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

let lnk = undefined

let purple = "rgb(226, 72, 226)"
let green = "rgb(18, 184, 18)"
let yellow = "rgb(184, 184, 27)"

let help = [
    ``,
    `Amount of items received divided by [left] value multiplied by [right] value`,
    `For Generous Converters : instead of better ratio (1000:75 etc) try a % of bonus (5% or any)`,
    `** Find Value at the top of "My Inventory" page (Important for Outputs !)`,
    `** Find Value on "Workshop" page`,
    `** Find Value on page "Home > My Farm > Orchard"`,
    `** Find Value on page "Home > My Farm > Raptor Pen"`,
]

function showInfo(msg,dur=1000,col="",defCont=getID("info")){
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

function changeMemoCap(e){
    let val = e.srcElement.value
    if(testNum(val))
         {userI.memoCap = Math.floor(Number(val)) ; setTools()}
    else {info.innerHTML = "Input Error" ; setTimeout(()=>{info.innerHTML =""},1000)}
}

function changeMemoTime(e){
    let val = e.srcElement.value
    if(testNum(val))
         {userI.memoTimer = Math.floor(Number(val)) ; setTools()}
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

    
    txt = "Delete Save"
    addEle({dad:getID("rateC1"),setClass:"btn",text:txt,minWidth:"160px",margin:"10px",backC:from.buttonBackC,
    setFunc:removeKey})
    
}

function setCustomBuilder(){
    let workC = getID("rateC2Top")
    cleanParent(workC)
    cleanParent(getID("rateC2Btm"))

    let from = userI.visuals.preset

    if(userI.rateU.length > 0){dispRates(basic=false)}

    addEle({dad:workC,marginL:"20px",textC:purple,minHeight:"35px",setID:"info1",setClass:"contRow",alignItems:"center"})

    let cont = addEle({dad:workC,setClass:"contRow",margin:"3px",alignItems:"center"})
        addEle({dad:cont,text:"Add a Custom Rate",borderB:"solid 2px yellow",width:"fit-content"})
        addEle({dad:cont,setClass:"btn",text:"Ratios for friends ?",setFunc:()=>{
            getID("friendsC").style.display = getID("friendsC").style.display === "none" ? "flex" : "none"}})

    addEle({dad:workC,setClass:"contCol",border:"green 2px dotted",radius:"10px",padding:"5px",display:"none",
        setID:"friendsC",width:"fit-content"})
        addEle({dad:getID("friendsC"),text:"Ratios for converting friends at little to no loss/benefit :"})
        let subC = addEle({dad:getID("friendsC"),setClass:"contRow"})
            addEle({dad:subC,what:"img",imgFullSrc:srcImgs+outputs[0].img,imgSize:20})
            addEle({dad:subC,what:"img",imgFullSrc:srcImgs+outputs[1].img,imgSize:20})
            addEle({dad:subC,text:"[4.13 : 1]",marginR:"20px"})
            addEle({dad:subC,what:"img",imgFullSrc:srcImgs+outputs[2].img,imgSize:20})
            addEle({dad:subC,text:"[57 : 1]",marginR:"20px"})
            addEle({dad:subC,what:"img",imgFullSrc:srcImgs+outputs[3].img,imgSize:20})
            addEle({dad:subC,text:"[1000 : 58]",marginR:"20px"})
            addEle({dad:subC,what:"img",imgFullSrc:srcImgs+outputs[4].img,imgSize:20})
            addEle({dad:subC,text:"[27.7 : 1]"})

    cont = addEle({dad:workC,setClass:"contRow",margin:"3px",alignItems:"center"})
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
}

function addCustomRate(){
    if(testNum(getID("customR1").value) && 
       testNum(getID("customR2").value) && 
       testNum(getID("customBonus").value,true)){

        userI.rateU.push({
            ind:userI.rateU.length,
            type:getID("customType").innerHTML,
            rate:getID("customR1").value+":"+getID("customR2").value,
            bonus:getID("customBonus").value,
            rounding:getID("customRounding").innerHTML,
            orderMem:[],
            orderIdx:undefined,
            orderTimer:undefined,
            advertising:false,
        })

        getID("customBtn").innerHTML = 
        "Custom rates ("+spanText("lime",userI.rateU.length)+")"+"<br>(Build your own set)"

        if(userI.rateU.length>0){
            document.getElementsByName("rateSets")[1].disabled = false
            document.getElementsByName("rateSets")[1].click()
            dispRates(false)
        }

    setTools()
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
    if(basic) {arr = rateB;cleanParent(getID("rateC2Top"))}
    else      {arr = userI.rateU}

    for(let i = 0;i<arr.length;i++){
        let itm = arr.filter(x=>x.ind===i)[0]
        let cont = addEle({dad:workC,setClass:"contRow",margin:"2px 2px 10px 2px"})
        if(!basic){
            addEle({dad:cont,text:"Delete",setClass:"btn",marginR:"",backC:"brown",fontS:"14px",
            display:"flex",alignItems:"center",backC:from.buttonBackC,setID:"customDel:"+i,
            cursor:"pointer",setFunc:(e)=>{blastRate(e)}})

            let subC = addEle({dad:cont,setClass:"contCol"})
                addEle({dad:subC,text:"🔼",setClass:"btn",padding:"0",margin:"0",fontS:"12px",
                setID:"swap:"+i,setFunc:(e)=>{swapUD(e,"U",basic)}})
                addEle({dad:subC,text:"🔽",setClass:"btn",padding:"0",margin:"0",fontS:"12px",
                setID:"swap:"+i,setFunc:(e)=>{swapUD(e,"D",basic)}})
        }
        addEle({dad:cont,setClass:"rating",text:itm.type})
        addEle({dad:cont,setClass:"rating",text:"rate : "+itm.rate})
        addEle({dad:cont,setClass:"rating",text:"bonus : "+itm.bonus+" %"})
        addEle({dad:cont,setClass:"rating",text:"rounding : "+itm.rounding})
    }
}

function swapUD(e,di,bs){
    let oldI = Number(e.srcElement.id.split(":")[1])
    let newI = undefined
    let src = userI.rateU
    let newA = []

    switch(di){
        case "U":newI = oldI -1 < 0 ? 0 : oldI - 1 ; break 
        case "D":newI = oldI +1 > src.length-1 ? src.length -1 : oldI +1 ; break
    }

    for(let i=0;i<src.length;i++){
        let srcI = src.filter(it=>it.ind===i)[0]
        newA.push({ind:srcI.ind,type:srcI.type})
    }

    let tempo = newA.splice(oldI,1)[0]
    newA.splice(newI,0,tempo)

    for(let i=0;i<newA.length;i++){src.filter(x=>x.type===newA[i].type)[0].ind = i}

    dispRates(bs)
    setTools()
}

function blastRate(e){
    let idx = Number(e.srcElement.id.split(":")[1])
    userI.rateU.splice(idx,1)
    if(userI.rateU.length === 0){
        document.getElementsByName("rateSets")[1].disabled = true
        document.getElementsByName("rateSets")[0].click()
    }
    if(userI.rateU.length>0){for(let i=0;i<userI.rateU.length;i++){userI.rateU[i].ind=i}}
    getID("customBtn").innerHTML = "Custom Rates ("+spanText("lime",userI.rateU.length)+")"+"<br>(Build your own set)"
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

    if(userI.fruitsArte){getID("userArte1").checked=true}
    if(userI.antlersArte){getID("userArte2").checked=true}
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
    setTools()
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

    userI.resCraft = Number((1 + userI.resSaver/100).toFixed(2))
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
    
        let key = "farmRPGCustomConvertingV2"
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
    let key = "farmRPGCustomConvertingV2"
    let mySave = JSON.stringify(userI)
    localStorage.setItem(key,mySave)
    showInfo(txt,dur)
}



/*
let userI2 = {
    rateU:[{output:"OJ / Lemonade",rate:"3:1",bonus:0,rounding:roundings[2]},],
    autoLoad : false,
}

function saveToBrowserOld(msg=undefined,dur=1000){
    removeKey()
    let txt = msg === undefined ? "Old User Settings Saved ✅" : msg
    let key = "farmRPGCustomConverting"
    let mySave = JSON.stringify(userI2)
    localStorage.setItem(key,mySave)
 //   showInfo(txt,dur)
}
*/

////////////////////////////////////////
function removeKey(){
    let key = "farmRPGCustomConverting"
    localStorage.removeItem(key)
    key = "farmRPGCustomConvertingV2"
    localStorage.removeItem(key)

  //  showInfo("✅ Progress Erased ❗")
} 

//removeKey()
///////////////////////////////////////

/*
saveToBrowserOld()
*/

function loadSav(){
    let key = "farmRPGCustomConvertingV2"
    let mySave = localStorage.getItem(key)
    if(mySave){
        let tempUserI = JSON.parse(mySave)
        if(tempUserI.pageV===pageVer){
           userI = tempUserI
        } else {
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
                resCraft:1.45,
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

            let src = userI.rateU
            if(src.length>0){
                swapSav = []
                for(let i=0;i<src.length;i++){
                    swapSav.push({
                        ind:i,
                        type:src[i].output.includes("/") ? "OJ" : src[i].output,
                        rate:src[i].rate,
                        bonus:src[i].bonus,
                        rounding:src[i].rounding,
                    })
                }
                userI.rateU = swapSav                
            }
            saveToBrowser("")
        }
    }
    userI.rateU.forEach(rt=>{rt.orderMem = []})
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
        addEle({dad:tr,what:"td",setClass:"tealCell",text:spanText(purple,"---")})
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
    let workC = getID("toolsFr")
    cleanParent(workC)
    let arr = userI.currentSet === "Basic" ? rateB : userI.rateU
    let cpt = 0

    addEle({dad:workC,setClass:"btn",text:"Reset All",minWidth:"320px",setFunc:setTools})


    let tbC = addEle({dad:workC})
    let tb = addEle({dad:tbC,what:"table"})
    let tr = addEle({dad:tb,what:"tr"})
    let itm = undefined
    for(let i=0;i<arr.length;i++){
        itm = arr.filter(x=>x.ind===i)[0]
        if(cpt % userI.toolPerLine ===0){tr = addEle({dad:tb,what:"tr"})}
        let tc = addEle({dad:tr,what:"td"})
        buildTool(tc,itm,cpt)
        cpt++
    }
}

function buildTool(dad,itm,idx){
    let tr = undefined
    let tc = undefined
    let txt = undefined

    let tbC = addEle({dad:dad,setClass:"contCol",border:"yellow solid 2px",radius:"5px",padding:"5px",margin:"5px"})
    let tb = addEle({dad:tbC,what:"table"})
        tr = addEle({dad:tb,what:"tr"})
          tc = addEle({dad:tr,what:"td",border:"solid teal 2px"})
            let inC = addEle({dad:tc,setClass:"contRow"})
            addEle({dad:inC,what:"checkbox",isInput:true,accentCol:green,setName:"advertise",setID:"adv:"+idx,
            setFunc:(e)=>{itm.advertising = e.srcElement.checked ? true : false ; advertising(e) }})
            if(itm.advertising){getID("adv:"+idx).checked=true}
            addEle({dad:inC,text:"Advertise",marginL:"5px",setID:"advL:"+idx,
                setFunc:(e)=>{txt = e.srcElement.id.split(":")[1] ; getID("adv:"+txt).click()}})
            addEle({dad:inC,text:itm.type,minWidth:"110px",textA:"center",setID:"type:"+idx})
          
          tc = addEle({dad:tr,what:"td",border:"solid teal 2px",textA:"center"})
            let cont = addEle({dad:tc,setClass:"contRow",justifyC:"space-around",alignItems:"center"})
                txt = outputs.filter(it=>it.label===itm.type)[0].img
                addEle({dad:cont,what:"img",imgFullSrc:srcImgs+txt,imgSize:25})
                addEle({dad:cont,setClass:"btn",text:"Reset",setID:"reset:"+idx,setFunc:(e)=>{
                    let idx = e.srcElement.id.split(":")[1]
                    getID("order:"+idx).value = 0
                    getID("mbs:"+idx).value = 0
                    toolCalc(e.srcElement.id)
                }})

        tr = addEle({dad:tb,what:"tr"})
          tc = addEle({dad:tr,what:"td",border:"solid teal 2px",colSpan:2,justifyC:"center"})
            cont = addEle({dad:tc,setClass:"contRow",justifyC:"center"})
            inC = addEle({dad:cont,setClass:"contCol"})
                txt = "Rate : "+itm.rate+" -- Rounding :"+itm.rounding
                addEle({dad:inC,text:txt,marginT:"5px"})
                addEle({dad:inC,text:"Payout Bonus(+%) : "+itm.bonus,marginT:"5px"})

        tr = addEle({dad:tb,what:"tr"}) // "◀" ◀
          tc = addEle({dad:tr,what:"td",border:"solid teal 2px"})
            let orderC = addEle({dad:tc,setClass:"contCol"}) 
            inC = addEle({dad:orderC,setClass:"contRow",justifyC:"center",alignItems:"center"})
                addEle({dad:inC,setClass:"btn",text:"◀",fontS:"10px",setID:"memoPrev:"+idx,margin:"0",
                padding:"3px 4px",setFunc:(e)=>{memoPrev(e)}})
                addEle({dad:inC,setClass:"btn",text:"▶",fontS:"10px",setID:"memoNext:"+idx,margin:"0",
                padding:"3px 4px",setFunc:(e)=>{memoNext(e)}})
                addEle({dad:inC,setClass:"btn",text:"▼",fontS:"10px",setID:"memHis:"+idx,margin:"0",
                padding:"4px 4px",setFunc:(e)=>{memoHis(e)}})
                addEle({dad:inC,what:"td",text:"Memo "+itm.orderMem.length+"/"+userI.memoCap,textA:"center",setID:"memoInfo:"+idx,margin:"0 5px",fontS:"12px"})
                addEle({dad:inC,what:"td",text:"Order(s)",textA:"center"})
            addEle({dad:orderC,setClass:"contCol",marginL:"yellow dotted 2px",display:"none",setID:"orderH:"+idx,paddingT:"5px"})
          tc = addEle({dad:tr,what:"td",border:"solid teal 2px"})
            inC = addEle({dad:tc,setClass:"contRow",justifyC:"center"})
            addEle({dad:inC,what:"input",isInput:true,width:"100px",textA:"center",setID:"order:"+idx,
            setVal:0,setFunc:(e)=>{toolCalc(e.srcElement.id)}})

        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:spanText("lime","**")+"Customer MB Size"+spanText("green","<br>(for Payout Detail)"),
            border:"solid teal 2px",textA:"center"})
          tc = addEle({dad:tr,what:"td",border:"solid teal 2px"})
            inC = addEle({dad:tc,setClass:"contRow",justifyC:"center"})
            addEle({dad:inC,what:"input",isInput:true,width:"100px",textA:"center",setID:"mbs:"+idx,
            setVal:0,setFunc:(e)=>{toolCalc(e.srcElement.id)}})

        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:"Payout (+Bonus):",border:"solid teal 2px",textA:"center"})
            addEle({dad:tr,what:"td",text:0,border:"solid teal 2px",textA:"center",setID:"payout:"+idx})

        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:spanText("lime","**")+"Payout Detail",border:"solid teal 2px",textA:"center"})
            addEle({dad:tr,what:"td",text:spanText(purple,"---"),border:"solid teal 2px",textA:"center",setID:"payoutD:"+idx})

        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:"Craft :",border:"solid teal 2px",textA:"center"})
            addEle({dad:tr,what:"td",text:0,border:"solid teal 2px",textA:"center",setID:"craft:"+idx})

        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:"Lose :",border:"solid teal 2px",textA:"center"})
            addEle({dad:tr,what:"td",text:0,border:"solid teal 2px",textA:"center",setID:"lose:"+idx})

        tr = addEle({dad:tb,what:"tr"})
          tc = addEle({dad:tr,what:"td",border:"solid teal 2px",colSpan:2})
            cont = addEle({dad:tc,setClass:"contCol",alignItems:"center",minHeight:"130px",justifyC:"center"})
        if(itm.type==="LN"){
            let subC = addEle({dad:cont,setClass:"contCol",alignItems:"center"})
                addEle({dad:subC,text:"Stone Needed : ",borderB:"yellow solid 2px",width:"fit-content"})
                txt = testNum(userI.inventoryMax) ? 
                spanText(purple,"---") : spanText(purple,"Fill User Details in User Settings")
                addEle({dad:subC,text:txt,setID:"stoneNeed:"+idx,marginL:"5px"})

            inC = addEle({dad:cont,setClass:"contRow",alignItems:"center",borderB:"teal solid 2px",
            paddingB:"5px"})
                addEle({dad:inC,text:"Inventory :",textA:"center",marginR:"10px"})
                addEle({dad:inC,text:"Iron<br>Rings",textA:"center",marginR:"10px"})
                addEle({dad:inC,what:"range",isInput:true,min:0,max:100,setVal:100,width:"100px",
                setID:"ringRg:"+idx,setFunc:(e)=>{upNeedRg(e.srcElement.id)}})
                txt = testNum(userI.inventoryMax) ? "100%<br>"+userI.inventoryMax : spanText(purple,"---")
                addEle({dad:inC,setID:"ringRgLb:"+idx,text:txt,textA:"center",marginL:"10px"})

            inC = addEle({dad:cont,setClass:"contRow",alignItems:"center",padding:"5px"})
                addEle({dad:inC,text:"Inventory :",textA:"center",marginR:"10px"})
                addEle({dad:inC,text:"Stone",textA:"center",marginR:"10px"})
                addEle({dad:inC,what:"range",isInput:true,min:0,max:100,setVal:100,width:"100px",
                setID:"stoneRg:"+idx,setFunc:(e)=>{upNeedRg(e.srcElement.id)}})
                txt = testNum(userI.inventoryMax) ? "100%<br>"+userI.inventoryMax : spanText(purple,"---")
                addEle({dad:inC,setID:"stoneRgLb:"+idx,text:txt,textA:"center",marginL:"10px"})
        } else {
            let subC = addEle({dad:cont,setClass:"contCol",alignItems:"center"})
                switch(itm.type){
                    case "AP" : txt = "Iced Tea Used :" ; break
                    case "Cider" : txt = "Bottles and Oranges Used :" ; break
                    default : txt = "Bottles Used : "
                }
                addEle({dad:subC,text:txt,borderB:"yellow solid 2px",width:"fit-content"})
                txt = testNum(userI.inventoryMax) ? 
                spanText(purple,"<br>---") : spanText(purple,"<br>Fill User Details in User Settings")
                addEle({dad:subC,text:txt,setID:"bottlesNeed:"+idx,marginL:"5px"})
        }

        tr = addEle({dad:tb,what:"tr"})
          tc = addEle({dad:tr,what:"td",border:"solid teal 2px",colSpan:2})
            cont = addEle({dad:tc,setClass:"contCol",alignItems:"center",padding:"5px"})
                let tgtMM = userI.mms.filter(it=>it.label===itm.type)[0].progress

                txt = testNum(tgtMM) ? (1000000-tgtMM).toLocaleString() : spanText(purple,"Fill User Details in User Settings")
                addEle({dad:cont,text:"Mastery remaining :<br>"+txt,textA:"center"})

                addEle({dad:cont,text:"Evaluate reaching MM",borderB:"teal solid 2px",textA:"center",marginT:"5px"})
                inC = addEle({dad:cont,setClass:"contRow",justifyC:"center"})
                    addEle({dad:inC,text:"( current exp ratio :"})
                    addEle({dad:inC,text:1,setID:"xpRatio:"+idx,margin:"0 5px"})
                    addEle({dad:inC,text:")"})

            let expC = addEle({dad:cont,setClass:"contCol",padding:"5px",margin:"5px",border:"teal 2px solid",
                alignItems:"center",radius:"10px"})

                inC = addEle({dad:expC,setClass:"contRow",justifyC:"center"})
                    addEle({dad:inC,text:"Use Mushroom Stew (Exp Bonus)",setID:"stewBoxLb:"+idx,setFunc:(e)=>{
                            getID("stewBox:"+e.srcElement.id.split(":")[1]).click()}})
                    addEle({dad:inC,what:"checkbox",isInput:true,setVal:true,accentCol:green,setID:"stewBox:"+idx,
                            setFunc:(e)=>{eventXPradio(e)}})

                inC = addEle({dad:expC,setClass:"contRow",justifyC:"center",marginT:"0"})
                    addEle({dad:inC,setClass:"contCol",justifyC:"center",text:"Event Exp Bonus : ",
                    setID:"evExpLb:"+idx,marginL:"10px",minWidth:"160px"})

                    addEle({dad:inC,what:"radio",isInput:true,setVal:0,setName:"evXpRads:"+idx,
                    setID:"evXpRad:"+idx,accentCol:"green",setFunc:(e)=>{eventXPradio(e)}})
                    addEle({dad:inC,what:"radio",isInput:true,setVal:10,setName:"evXpRads:"+idx,
                    setID:"evXpRad:"+idx,accentCol:"green",setFunc:(e)=>{eventXPradio(e)}})
                    addEle({dad:inC,what:"radio",isInput:true,setVal:14,setName:"evXpRads:"+idx,
                    setID:"evXpRad:"+idx,accentCol:"green",setFunc:(e)=>{eventXPradio(e)}})
                document.getElementsByName("evXpRads:"+idx)[0].click()

                txt = "From your daily production ("
                txt+= itm.type === "LN" ? 
                userI.netsTot.toLocaleString() +" baby nets)" : 
                userI.fruitsTot.toLocaleString() + " fruits)"
                addEle({dad:cont,text:txt,textA:"center"})






/*
        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:spanText("yellow","**")+"[ UsingMeal ]<br>Mushroom stew",
            border:"solid teal 2px",textA:"center"})
          tc = addEle({dad:tr,what:"td",border:"solid teal 2px"})
            inC = addEle({dad:tc,setClass:"contRow",justifyC:"center"})
            addEle({dad:inC,what:"radio",isInput:true,setVal:"No",setName:"MMmeal:"+idx,setID:"mealRadio:"+idx,setFunc:(e)=>{
                let idx = e.srcElement.id.split(":")[1]
                document.getElementsByName("MMmeal:"+idx).forEach(it=>{
                    if(it.checked){getID("masteryMush:"+idx).innerHTML = it.value}
                })
                toolCalc(e.srcElement.id)
            }})
            addEle({dad:inC,what:"radio",isInput:true,setVal:"Yes",setName:"MMmeal:"+idx,setID:"mealRadio:"+idx,setFunc:(e)=>{
                let idx = e.srcElement.id.split(":")[1]
                document.getElementsByName("MMmeal:"+idx).forEach(it=>{
                    if(it.checked){getID("masteryMush:"+idx).innerHTML = it.value}
                })
                toolCalc(e.srcElement.id)
            }})
            addEle({dad:inC,setID:"masteryMush:"+idx,marginL:"10px",textC:"fuchsia"})
            document.getElementsByName("MMmeal:"+idx)[0].click()

        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:spanText("yellow","**")+"Event Mastery Bonus :",
            border:"solid teal 2px",textA:"center"})
          tc = addEle({dad:tr,what:"td",border:"solid teal 2px"})
            inC = addEle({dad:tc,setClass:"contRow",justifyC:"center"})
            addEle({dad:inC,what:"radio",isInput:true,setVal:"0",setName:"eventN:"+idx,setID:"eventRadio:"+idx,setFunc:(e)=>{
                let idx = e.srcElement.id.split(":")[1]
                document.getElementsByName("eventN:"+idx).forEach(it=>{
                    if(it.checked){getID("MMevent:"+idx).innerHTML = it.value+"%"}
                })
                toolCalc(e.srcElement.id)
            }})
            addEle({dad:inC,what:"radio",isInput:true,setVal:"10",setName:"eventN:"+idx,setID:"eventRadio:"+idx,setFunc:(e)=>{
                let idx = e.srcElement.id.split(":")[1]
                document.getElementsByName("eventN:"+idx).forEach(it=>{
                    if(it.checked){getID("MMevent:"+idx).innerHTML = it.value+"%"}
                })
                toolCalc(e.srcElement.id)
            }})
            addEle({dad:inC,what:"radio",isInput:true,setVal:"14",setName:"eventN:"+idx,setID:"eventRadio:"+idx,setFunc:(e)=>{
                let idx = e.srcElement.id.split(":")[1]
                document.getElementsByName("eventN:"+idx).forEach(it=>{
                    if(it.checked){getID("MMevent:"+idx).innerHTML = it.value+"%"}
                })
                toolCalc(e.srcElement.id)
            }})
            addEle({dad:inC,setID:"MMevent:"+idx,marginL:"10px",textC:"fuchsia"})
            document.getElementsByName("eventN:"+idx)[0].click()

        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:spanText("yellow","**")+"Mastery Remaining(2) :",border:"solid teal 2px",textA:"center"})
            addEle({dad:tr,what:"td",text:spanText("fuchsia","---"),border:"solid teal 2px",textA:"center",setID:"masteryR2:"+idx})

        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:spanText("yellow","**")+"Needed "+txt+" :",border:"solid teal 2px",textA:"center"})
            addEle({dad:tr,what:"td",text:spanText("fuchsia","---"),border:"solid teal 2px",textA:"center",setID:"mmNeed:"+idx})

        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:spanText("yellow","**")+"Reach MM from<br>self production only in",border:"solid teal 2px",textA:"center"})
            addEle({dad:tr,what:"td",text:spanText("fuchsia","---"),border:"solid teal 2px",textA:"center",setID:"mmReach:"+idx})         

        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:spanText("yellow","**")+"Converting to Reach MM<br>Will represent using<br>Current Ratio another :",border:"solid teal 2px",textA:"center"})
            addEle({dad:tr,what:"td",text:spanText("fuchsia","---"),border:"solid teal 2px",textA:"center",setID:"mmReachC:"+idx})            
*/

}

function getCurrItem(id){
    let idx = Number(id.split(":")[1])
    let rate = undefined
    let grp = document.getElementsByName("rateSets")
    grp.forEach(it=>{if(it.checked){rate = it.value}})
    let src = rate === "Basic" ? rateB : userI.rateU
    return src.filter(x=>x.ind===idx)[0]
}

function memoAdd(id){
    let idx = Number(id.split(":")[1])
    let itm = getCurrItem(id)
    let val = undefined 
    let disp = getID("memoInfo:"+idx)
    if(itm.orderTimer===undefined){
        if(getID("orderH:"+idx).style.display==="flex"){getID("memHis:"+idx).click()}
        itm.orderTimer = setTimeout(()=>{
            val = getID("order:"+idx).value
            if(testNum(val)){
                itm.orderTimer = undefined
                itm.orderMem.push({dt:new Date(),val:Number(val)})
                if(itm.orderMem.length>userI.memoCap){itm.orderMem.splice(0,1)}
                itm.orderIdx = itm.orderMem.length-1
                disp.style.color = "lime"
                disp.innerHTML = "Memo "+itm.orderMem.length+"/"+userI.memoCap
                setTimeout(()=>{disp.style.color = "white"},2000)
            }
        },userI.memoTimer*1000)
    }
}

function memoHis(e){
    let idx = Number(e.srcElement.id.split(":")[1])
    let itm = getCurrItem(e.srcElement.id)
    let workC = getID("orderH:"+idx)
    cleanParent(workC)

    if(itm.orderMem.length===0){return}
    
    if(e.srcElement.innerHTML === "▼"){
        e.srcElement.innerHTML = "▲" 
        workC.style.display = "flex"
        itm.orderMem.forEach(m=>{
            let hr = m.dt.getHours().length === 1 ? "0"+m.dt.getHours() : m.dt.getHours()
            let mn = m.dt.getMinutes().length === 1 ? "0"+m.dt.getMinutes() : m.dt.getMinutes()
            let sc = m.dt.getSeconds().length === 1 ? "0"+m.dt.getSeconds() : m.dt.getSeconds()
            let txt = m.dt.getMonth()+"/"+m.dt.getDate()+" -- "+hr+":"+mn+":"+sc
            addEle({dad:workC,text:txt + " > " + m.val.toLocaleString(),paddingL:"25px"})
        })
    } else {e.srcElement.innerHTML = "▼" ; workC.style.display = "none"}
}

function memoPrev(e){
    let idx = Number(e.srcElement.id.split(":")[1])
    let itm = getCurrItem(e.srcElement.id)
    if(itm.orderMem.length === 0 || itm.orderIdx===undefined){return}
    itm.orderIdx = itm.orderIdx -1 < 0 ? 0 : itm.orderIdx -1
    getID("order:"+idx).value = itm.orderMem[itm.orderIdx].val
    toolCalc(e.srcElement.id,false)
}

function memoNext(e){
    let idx = Number(e.srcElement.id.split(":")[1])
    let itm = getCurrItem(e.srcElement.id)
    if(itm.orderMem.length === 0 || itm.orderIdx===undefined){return}
    itm.orderIdx = itm.orderIdx +1 > itm.orderMem.length-1 ? itm.orderMem.length-1 : itm.orderIdx +1
    getID("order:"+idx).value = itm.orderMem[itm.orderIdx].val
    toolCalc(e.srcElement.id,false)
}

function eventXPradio(e){
    let idx = e.srcElement.id.split(":")[1]
    let ratio = 1
    let evXP = 0
    let grp = document.getElementsByName("evXpRads:"+idx)
    grp.forEach(it=>{if(it.checked){evXP = Number(it.value) }})
    ratio += evXP/100
    if(getID("stewBox:"+idx).checked){ratio +=.1}
    getID("evExpLb:"+idx).innerHTML = "Event Exp Bonus : "+evXP+"%"
    getID("xpRatio:"+idx).innerHTML = ratio.toFixed(2)
}

function upNeedRg(id){
    let idx = Number(id.split(":")[1])
    let pct1 = undefined
    let pct2 = undefined
    let inv = undefined

    let rate = undefined
    let grp = document.getElementsByName("rateSets")
    grp.forEach(it=>{if(it.checked){rate = it.value}})
    let src = rate === "Basic" ? rateB : userI.rateU
    let itm = src.filter(x=>x.ind===idx)[0]

    if(testNum(userI.inventoryMax)){
        inv = userI.inventoryMax
        if(itm.type==="LN"){
            pct1 = Number(getID("ringRg:"+idx).value)
            getID("ringRgLb:"+idx).innerHTML = pct1 + "%<br>" + (inv * pct1 /100)
            pct2 = Number(getID("stoneRg:"+idx).value)
            getID("stoneRgLb:"+idx).innerHTML = pct2 + "%<br>" + (inv * pct2 /100)
        }
    } else {
        if(itm.type==="LN"){
            getID("ringRgLb:"+idx).innerHTML = spanText(purple,"---")
            getID("stoneRgLb:"+idx).innerHTML = spanText(purple,"---")
            getID("stoneNeed:"+idx).innerHTML = spanText(purple,"Fill User Details in User Settings")
        } else {
            getID("bottlesNeed:"+idx).innerHTML = spanText(purple,"Fill User Details in User Settings")
        }
    }

    let tgtLb = itm.type==="LN" ? getID("stoneNeed:"+idx) : getID("bottlesNeed:"+idx) 
    let tgtLbT = itm.type==="LN" ? "":"<br>"
    let val = getID("order:"+idx).value

    if(testNum(val)){
        let pr = userI.resCraft
        if(itm.type !=="LN"){
            switch(itm.type){
                case "Cider" : tgtLb.innerHTML = tgtLbT + (Math.floor(val/40)).toLocaleString() ; break
                case "AP" : tgtLb.innerHTML = tgtLbT + (Math.ceil(val/6) + 
                            Math.floor((Math.ceil(val/6)*pr)/20)).toLocaleString() ; break
                default : tgtLb.innerHTML = tgtLbT + (Math.floor(val/6)).toLocaleString()
            }
        } else {
            if(inv!==undefined){
                val = val - Math.floor((inv * pct1 /100))
                val = val - Math.ceil(Math.floor((inv * pct2 /100))*pr)
                tgtLb.innerHTML = val > 0 ? tgtLbT + val.toLocaleString() : tgtLbT + "0"
            } else {tgtLb.innerHTML = tgtLbT + spanText(purple,"Fill User Details in User Settings")}
        }
    } else {tgtLb.innerHTML = tgtLbT + spanText(purple,"---")}
}

function advertising(e){

console.log("adv")

    let workC = getID("advFr")
    cleanParent(workC)

//    let idx = Number(e.srcElement.id.split(":")[1])
  //  getID("adv:"+idx).click()

    let rate = undefined
    let grp = document.getElementsByName("rateSets")
    grp.forEach(it=>{if(it.checked){rate = it.value}})
    let src = rate === "Basic" ? rateB : userI.rateU

    grp = document.getElementsByName("advertise")
    let txt = undefined
    let itm1 = undefined
    let itm2 = undefined
    grp.forEach(it=>{
        if(it.checked){
            txt = txt === undefined ? "[Converting] " : txt
            itm1 = src[Number(it.id.split(":")[1])]
            itm2 = outputs.filter(x=>x.label===itm1.type)[0]
            txt+= itm2.chat1+" "+itm1.rate+" "+itm2.chat2+" | "
        }
    })
    if(txt!== undefined){
        txt = txt.slice(0,txt.length-3) + " (pls Ping me amounts and wait for my call Ty)"
        let cont = addEle({dad:workC,setClass:"contCol",border:"teal 2px solid",radius:"5px",
        padding:"5px",maxWidth:"450px",margin:"10px 0 0 10px"})
        addEle({dad:cont,text:txt,setID:"advMsg",marginB:"10px"})

        let subC = addEle({dad:cont,setClass:"contRow",alignItems:"center",width:"fit-content"})
            txt = `Copy Advertising (to paste in game chat)<br>* to change content you can paste
            in new message from your message box, ... and then copy-paste in chat *`
            addEle({dad:subC,setClass:"btn",text:txt,
            setFunc:()=>{
                navigator.clipboard.writeText(getID("advMsg").innerHTML)
                showInfo("✅",2000,"",getID("info4"))
            }})
            addEle({dad:subC,marginL:"5px",textC:purple,setID:"info4"})
    }
}

function toolCalc(id,memoAd=true){
    let idx = Number(id.split(":")[1])
    let val = getID("order:"+idx).value
    let type = getID("type:"+idx).innerHTML

    let rate = undefined
    let grp = document.getElementsByName("rateSets")
    grp.forEach(it=>{if(it.checked){rate = it.value}})
    let arrS = rate === "Basic" ? rateB : userI.rateU 
    let itm = arrS.filter(x=>x.ind===idx)[0]

    if (memoAd){memoAdd(id)}

    if(testNum(val,true)){
        val = Number(val)

        let div = itm.rate.split(":")[0]
        let mul = itm.rate.split(":")[1]
        let bon = itm.bonus
        let rnd = itm.rounding
        let mbs = getID("mbs:"+idx).value

        let ret = calcConvert(val,div,mul,bon,rnd)

        let payT = ret.payR+ret.bonR
        getID("payout:"+idx).innerHTML = ret.payR +"(+ "+ ret.bonR +") = "+ payT
        let craft = undefined
        switch(type){
            case "LN" : craft = Math.floor(val/25*1.45) ; break
            case "OJ" : case "Lemonade" : craft = Math.floor(val/6*1.45) ; break
            case "AP" : craft = Math.floor(Math.floor(val/6*1.45)/20*1.45) ; break
            case "Cider" : craft = Math.floor(val/40*1.45) ; break
            default:console.log(type)
        }
        getID("craft:"+idx).innerHTML = craft
        getID("lose:"+idx).innerHTML = (ret.payR - craft) + "(+ " +ret.bonR + ") = " + (ret.payR - craft + ret.bonR)

        if (testNum(mbs)){
            let rnds1 = Math.floor(payT/Number(mbs))
            let rnds2 = Math.floor(ret.payR/Number(mbs))
            let txt = payT+" ⇒ "+ rnds1 + "x " + mbs + " + " + (payT-(rnds1*Number(mbs))) 
            if(bon>0)
              {txt += "<br>"+ ret.payR +" ⇒ "+ rnds2 + "x " + mbs + " + " + (ret.payR-(rnds2*Number(mbs)))}
            getID("payoutD:"+idx).innerHTML = txt
        } else { getID("payoutD:"+idx).innerHTML = spanText(purple,"---") }

    }

    ////////////////////////
    let mmSrc = userI.mms.filter(x=>x.label===itm.type)[0]
    let goal = 1000000-mmSrc.progress
    console.log(userI)
    console.log(mmSrc)
    console.log(goal)
    /*
    if(testNum(mmS)){
        mmS = Number(mmS)
        let MM = 1000000
        let meal = undefined
        let eventB = undefined
        let baseRatio = 1
        getID("masteryR1:"+idx).innerHTML = (MM-mmS).toLocaleString()
        document.getElementsByName("MMmeal:"+idx).forEach(it=>{if(it.checked){meal=it.value}})
        document.getElementsByName("eventN:"+idx).forEach(it=>{if(it.checked){eventB=it.value}})
        if(meal==="Yes"){baseRatio+=0.1}
        baseRatio+=(eventB/100)
        baseRatio = Number(baseRatio.toFixed(2))
        let mmS2 = Math.ceil((MM-mmS)/baseRatio)
        getID("masteryR2:"+idx).innerHTML = mmS2.toLocaleString()
        let need = Math.ceil(mmS2/1.45)
        switch(type){
            case "OJ / Lemonade": need = need * 6 ; break
            case "Cider" : need = need * 40 ; break
            case "LN" : need = need * 25 ; break
            case "AP" : need = Math.ceil((need *20)/1.45*6) ; break
        }
        getID("mmNeed:"+idx).innerHTML = need.toLocaleString()
        let prod = getID("mmProducts:"+idx).value
        if(testNum(prod)){
            prod = Number(prod)
            let len = Math.ceil(need/prod)
            let txt = len <= 365 ? len + "d" : Math.floor(len/365) + "y " + len % 365 + "d"
            getID("mmReach:"+idx).innerHTML = txt

        }



 //       let div = Number(getID("rate:"+idx).innerHTML.split(":")[0])
  //      let mul = Number(getID("rate:"+idx).innerHTML.split(":")[1])
   //     let bon = Number(getID("bonus:"+idx).innerHTML)
    //    let rnd = getID("rounding:"+idx).innerHTML
     //   let ret = calcConvert(need,div,mul,bon,rnd)
     //  console.log(ret)
       // console.log(need)

      //  let payT = ret.payR+ret.bonR

        let craft = undefined
        switch(type){
            case "LN" : craft = Math.floor(need/25*1.45) ; break
            case "OJ / Lemonade" : craft = Math.floor(need/6*1.45) ; break
            case "AP" : craft = Math.floor(Math.floor(need/6*1.45)/20*1.45) ; break
            case "Cider" : craft = Math.floor(need/40*1.45) ; break
        }
//        let txt = type +" Payout :<br>" + payT.toLocaleString()
     //   getID("mmReachC:"+idx).innerHTML = txt

    }

    */

upNeedRg(id)

}


// body.style.backgroundImage = "URL(https://farmrpg.com/img/pbgs/dark/bg_64.jpg)"

// body.style.backgroundImage = "URL(https://farmrpg.com/img/pbgs/dark/bg_45.jpg)"

 