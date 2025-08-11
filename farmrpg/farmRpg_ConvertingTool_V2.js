
const body = document.querySelector("body")

const srcImgs = "https://farmrpg.com/img/items/"

let lnk = undefined

let purple = "rgb(185, 76, 185)"
let green = "rgb(18, 184, 18)"
let yellow = "rgb(184, 184, 27)"
let brown = "rgb(160, 107, 9)"
let yellowL = "rgb(212, 212, 74)"


let lastUpd = `
Last up 2025 08/11 20:00
<br>`+spanText(green,`
Users coming from Old version may<br>
get similar tools by changing <br>
"Tools Display-Use Options" under<br>
-- User Settings --`)

function addEmo(emoji="emoji",lbl="emoji label",id="",mirrored=false){
    let style = ""
    if(mirrored){style = "display:inline-block; transform: scaleX(-1);"}
    return `<span id="`+id+`" style="`+style+`" role="img" aria-label="`+lbl+`">`+emoji+`</span>`
}

let recentChanges = `
`+addEmo("🟢","emoji green sphere")+` the multiple green infos have been replaced
by the --User Settings > `+spanText(green,"Tools Display-Use")+` so
you both get some info (click on `+spanText(green,"[?]")+`) and can switch on-off
every functionality of the tools.<br><br> 
`+addEmo("🟢","emoji green sphere")+` new functionality : Alternate Split payouts
also something you can switch on-off in : Settings \\ Tools-Displays.<br><br>
`+addEmo("🟢","emoji green sphere")+` Hide this tool / show all tools if you wish
to have more or less tools on the page.
( available on both sets Basic & Custom )<br><br>
`+addEmo("🟢","emoji green sphere")+` Input fields are now more formated to receive
actual numbers which should display smarter on mobiles. ( no more full keyboard )<br><br>
`+addEmo("🟢","emoji green sphere")+` Advertising is now an open text field so it
should be easier to do changes before copy. Hopefully no bugs pops let me know ...<br><br>
`

+addEmo("🟢","emoji green sphere")+` For people converting more than 1 item that
would then receive more "detailed" orders from the same customer, there is now a
new option of quick window.<br>( see the top of every tool where you can click [Hide] & [Reset] )
`


let lemonConv = `
Lemon converting is 2 options being LEMONADE or AP...<br><br>
Lemonades represens a loss for yourself of 27% while
AP represents 47% (with old standard 30:1 ratio)<br>
This is huge and in my Opinion, evolution should happen.
I suggest you go for 35:1 (38% loss) anytime possible unless if your
desperate for whatever reason. <br><br>
Old stubborn players will have to learn flexibility while other
players already are fine about it.
`

const outputs = [
    {label:"OJ",type:"Oranges to OJ",rate:"3:1",friend:"4.13:1",img1:"orange.png",img2:"orangejuice.png",
    chat1:"((Orange))",chat2:"((Orange Juice))",loopBase:10,oType:"OJ from Oranges"},

    {label:"Lemonade",type:"Lemons to Lemonade",rate:"3:1",friend:"4.13:1",img1:"8251.PNG",img2:"lemonade.png",
    chat1:"((Lemon))",chat2:"((Lemonade))",loopBase:10,oType:"Lemonade from Lemons"},

    {label:"AP",type:"Lemons to AP",rate:"30:1",friend:"57:1",img1:"8251.PNG",img2:"ap.png",
    chat1:"((Lemon))",chat2:"((Arnold Palmer))",loopBase:63,oType:"AP from Lemons"},

    {label:"AP",type:"Lemonades to AP",rate:"1000:80",friend:"1000:72.5",img1:"lemonade.png",img2:"ap.png",
    chat1:"((Lemonade))",chat2:"((Arnold Palmer))",loopBase:133,oType:"AP from Lemonades"},

    {label:"LN",type:"FN (fishing nets) to LN",rate:"1000:70",friend:"1000:58",img1:"7748.png",img2:"lnet.png",
    chat1:"((Fishing Net))",chat2:"((Large Net))",loopBase:83,oType:"LN from FN (fishing nets)"},

    {label:"Cider",type:"Apples (and Oranges) to Cider",rate:"20:1",friend:"27.7:1",img1:"8297.png",img2:"8984.png",
    chat1:"((Apple))",chat2:"((Apple Cider))",loopBase:72,oType:"Cider from Apples (and Oranges)"},
]

const basePayouts = [
    {label:"OJ",val:8.75},
    {label:"Lemonade",val:8.75},
    {label:"AP",val:75},
    {label:"LN",val:12.5},
    {label:"Cider",val:17.5},
]

const roundings = [
    {label:"Up",alt:addEmo("⇑","emoji arrow pointing up")},
    {label:"Down",alt:addEmo("⇓","emoji arrow pointing down")},
    {label:"Closest 5",alt:5},
    ]

let eventMastery = [0,10,14,20]

let rateB =[
{ind:0,label:"OJ",type:outputs[0].type,rate:"3:1",bonus:0,rounding:roundings[0].label,orderMem:[],
orderIdx:undefined,orderTimer:undefined,advertising:false,display:true,serial:"B1"},
{ind:1,label:"Lemonade",type:outputs[1].type,rate:"3:1",bonus:0,rounding:roundings[0].label,orderMem:[],
orderIdx:undefined,orderTimer:undefined,advertising:false,display:true,serial:"B2"},
{ind:2,label:"AP",type:outputs[2].type,rate:"30:1",bonus:0,rounding:roundings[0].label,orderMem:[],
orderIdx:undefined,orderTimer:undefined,advertising:false,display:true,serial:"B3"},
{ind:3,label:"LN",type:outputs[4].type,rate:"1000:70",bonus:0,rounding:roundings[0].label,orderMem:[],
orderIdx:undefined,orderTimer:undefined,advertising:false,display:true,serial:"B4"},
{ind:4,label:"Cider",type:outputs[5].type,rate:"20:1",bonus:0,rounding:roundings[0].label,orderMem:[],
orderIdx:undefined,orderTimer:undefined,advertising:false,display:true,serial:"B5"},
{ind:5,label:"AP",type:outputs[3].type,rate:"1000:80",bonus:0,rounding:roundings[0].label,orderMem:[],
orderIdx:undefined,orderTimer:undefined,advertising:false,display:true,serial:"B6"},
]

let pageVer = "3.0"

let userI = {
    pageV:pageVer,
    currentSet:"Basic",
    basicDisplays:[true,true,true,true,true,true],
    basicAdvertising:[false,false,false,false,false,false],
    rateU:[],
    toolPerLine:2,
    memoCap:10,
    memoTimer:3,
    memoType:"auto",
    inventoryMax:200,
    fruitsProd:7800,
    fruitsArte:false,
    fruitsTot:0,
    antlersProd:0,
    antlersArte:false,
    netsTot:0,
    resSaver:45,
    resCraft:1.45,
    displayOptions:{
        all:true,
        advertiseEstimate:true,
        customerName:true,
        customerMB:true,
        alternatePayouts:true,
        memos:true,
        usedNeeds:true,
        mms:true,
    },
    mms:[
        {label:"OJ",img:"orangejuice.png",progress:0},
        {label:"Lemonade",img:"lemonade.png",progress:0},
        {label:"LN",img:"lnet.png",progress:0},
        {label:"Cider",img:"8984.png",progress:0},
        {label:"AP",img:"ap.png",progress:0},
    ],
    multiOrders:[],
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
    payouts:[
        {label:"OJ",val:8.75},
        {label:"Lemonade",val:8.75},
        {label:"AP",val:75},
        {label:"LN",val:12.5},
        {label:"Cider",val:17.5},
    ]
}

function getCurrItem(id,multiOrder=false){
    let idx = Number(id.split(":")[1])
    let checkB = multiOrder ? "toggleMultiSet" : "toggleCurrRate" 
    src = getID(checkB).checked ? userI.rateU : rateB
    return src.filter(x=>x.ind===idx)[0]
}

function testNum(num,zeroGood=false){
    let test = true

    if(!isNaN(num)){
        let val = Number(num)
        if(val===0 && !zeroGood){test=false}
    } else {test=false}

    return test
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

function calcConvert(amtV,amtD,amtM,amtB,amtR,itmType=undefined){
    let send = {pay:undefined,bon:undefined,payR:undefined,bonR:undefined,craft:undefined}
    send.pay = amtV / amtD * amtM
    send.bon = send.pay * amtB /100
    switch(amtR)
       {case "Up" : send.payR = Math.ceil(send.pay) ; send.bonR = Math.ceil(send.bon) ; break
        case "Down" : send.payR = Math.floor(send.pay) ; send.bonR = Math.floor(send.bon) ; break
        case "Closest 5" : send.payR = round5(send.pay) ; send.bonR = round5(send.bon) ; break}

    if(itmType){
        switch(itmType){
            case outputs[0].type : case outputs[1].type : send.craft = Math.floor(amtV/6*userI.resCraft) ; break
            case outputs[2].type : send.craft = Math.floor(Math.floor(amtV/6*userI.resCraft)/20*userI.resCraft) ; break
            case outputs[3].type : send.craft = Math.floor(amtV/20*userI.resCraft) ; break
            case outputs[4].type : send.craft = Math.floor(amtV/25*userI.resCraft) ; break
            case outputs[5].type : send.craft = Math.floor(amtV/40*userI.resCraft) ; break
            default:console.log(itm.type)
        }
    }
    return send
}

function savUserI(info=""){
    if(info!==""){console.log("save : "+info)}
    let key = "farmRPGCustomConvertingV2"
    let mySave = JSON.stringify(userI)
    localStorage.setItem(key,mySave)
}

function loadSav(){
    let key = "farmRPGCustomConvertingV2"
    let mySave = localStorage.getItem(key)
    if(mySave){
        let tempUserI = JSON.parse(mySave)
        if(tempUserI.pageV===pageVer){
           userI = tempUserI
        } else {
            console.log(userI)
            console.log("need update sav")

            let swapSav = {
                pageV:pageVer,
                currentSet:tempUserI.currentSet,
                rateU:tempUserI.rateU,
                toolPerLine:tempUserI.toolPerLine,
                memoCap:tempUserI.memoCap,
                memoTimer:tempUserI.memoTimer,
                memoType:tempUserI.memoType,
                inventoryMax:tempUserI.inventoryMax,
                fruitsProd:tempUserI.fruitsProd,
                fruitsArte:tempUserI.fruitsArte,
                fruitsTot:tempUserI.fruitsTot,
                antlersProd:tempUserI.antlersProd,
                antlersArte:tempUserI.antlersArte,
                netsTot:tempUserI.netsTot,
                resSaver:tempUserI.resSaver,
                resCraft:tempUserI.resCraft,
                displayOptions:{
                    all:true,
                    advertiseEstimate:true,
                    customerName:true,
                    customerMB:true,
                    memos:true,
                    usedNeeds:true,
                    mms:true,
                },
                mms:tempUserI.mms,
                visuals:tempUserI.visuals
            }
            userI = swapSav
        }
    }
    userI.rateU.forEach(rt=>{rt.orderMem = []})

    userI.rateU.forEach(x=>{
        if(x.type.includes("from")){
          x.type = outputs.filter(y=>y.oType === x.type)[0].type   
        }
    })

    if(!userI.hasOwnProperty("payouts")){
        userI.payouts=basePayouts
    }

    if(!userI.displayOptions.hasOwnProperty("alternatePayouts")){
        userI.alternatePayouts = true
    }

    userI.rateU.forEach(r=>{
        if(!r.hasOwnProperty("display")){
            r.display = true
        }
    })

    if(!userI.hasOwnProperty("basicDisplays")){
        let arr = []
        rateB.forEach(r=>{arr.push(true)})
        userI.basicDisplays=arr
    } else {
        for(let i=0;i<rateB.length;i++){
            rateB[i].display = userI.basicDisplays[i] 
        }
    }

    if(!userI.hasOwnProperty("multiOrders")){
        userI.multiOrders = []
    } userI.multiOrders = []

    if(!userI.hasOwnProperty("basicAdvertising")){
        userI.basicAdvertising = [false,false,false,false,false,false]
    } else {
        for(let i=0;i<rateB.length;i++){
            rateB[i].advertising = userI.basicAdvertising[i]
        }
    }

    for(let i=0;i<userI.rateU.length;i++){
        if(!userI.rateU[i].hasOwnProperty("serial")){
            userI.rateU[i].serial = "C"+(i+1)
        }
    }

}

function infoBox(info,txtCol="",closeFunc=undefined){
    let infoPop = addEle({dad:body,what:"dialog",maxWidth:"300px",radius:"20px",
    backC:"black",fontS:18+"px",textC:"white",display:"flex",flDir:"column",opacity:0.9,
    alignItems:"center",border:"teal solid 3px"})
        addEle({dad:infoPop,text:info,textC:txtCol,maxHeight:"400px",overflowX:"hidden",paddingR:"20px"})
        addEle({dad:infoPop,setClass:"btn",text:"OK",width:"50%",
        marginT:"20px", setFunc:()=>{if(closeFunc){closeFunc()} ; infoPop.remove() ; lockScroll(false)}})
        infoPop.showModal()
        lockScroll()
}

function setPage(){
    let from = userI.visuals.preset

    let contR = addEle({dad:body,setClass:"contRow",alignItems:"center",margin:"5px"})
    lnk = "https://melomelo7.github.io/idlepixelinfo/farmrpg/farmRpg_Bob1_Farm.html"
        addEle({dad:contR,setClass:"btn",text:addEmo("⇦","emoji arrow pointing left")+
        " Go Back",backC:from.buttonBackC,setFunc:()=>{window.open(lnk,"_self")}})
        addEle({dad:contR,text:spanText(yellowL,lastUpd),margin:"10px"})

    let subC = addEle({dad:body,setClass:"contRow",padding:"5px"})
        addEle({dad:subC,setClass:"btn",text:"-- Starting Infos --",backC:"darkgreen",
        border:"rgb(212, 212, 74) solid 2px",margin:"10px",setFunc:()=>{infoBox(startInfos)}}) 

        addEle({dad:subC,setClass:"btn",text:addEmo("👀","eyes looking to the left","",true)+" Recent Changes",backC:"darkgreen",
        border:"rgb(212, 212, 74) solid 2px",margin:"10px",setFunc:()=>{infoBox(recentChanges)}})

    addEle({dad:body,setClass:"btn",text:addEmo("📉","chart")+" Advice for LEMONS Converters "+addEmo("🤓","smiling face with glasses"),
    backC:"rgb(97, 97, 64)",border:"rgb(212, 212, 74) solid 2px",margin:"5px 20px",setFunc:()=>{infoBox(lemonConv)}})
    

    contR = addEle({dad:body,setClass:"contRow",margin:"20px 10px 10px 10px",alignItems:"center"})
        addEle({dad:contR,what:"img",imgFullSrc:srcImgs+"raptoregg.png",imgSize:30,marginR:"5px",imgAlt:"Raptor Egg image",mirror:true})
        addEle({dad:contR,what:"select",fontS:"16px",setID:"settingsSelect",padding:"5px",
        backC:"teal",border:"rgb(212, 212, 74) solid 2px",radius:"5px",textC:"white",
        setFunc:userSettingPick})
        settingsArr.forEach(itm=>{addEle({dad:getID("settingsSelect"),what:"option",text:itm})})
        addEle({dad:contR,what:"img",imgFullSrc:srcImgs+"raptoregg.png",imgSize:30,marginL:"5px", imgAlt:"Raptor Egg image"})


    let settingsFr = addEle({dad:body,setClass:"contCol",padding:"5px",width:"100%"})

    subC = addEle({dad:settingsFr,setClass:"contRow",padding:"5px",alignItems:"center"})
        addEle({dad:subC,text:"Rate Set Currently Used : ",marginL:"5px",fontS:"20px"})
        addEle({dad:subC,setID:"currentRate",margin:"0 20px 0 10px",minWidth:"60px",fontS:"20px"})
        addEle({dad:subC,what:"checkbox",isInput:true,setID:"toggleCurrRate",setClass:"toggle-checkbox",
        margin:"50px",setFunc:()=>{
            let ref = getID("toggleCurrRate") ; let disp = getID("currentRate") ; let txt = undefined
            if(ref.checked)
                {txt = "Custom" ; disp.innerHTML = spanText(yellow,txt) ; userI.currentSet = txt}
            else {txt = "Basic" ; disp.innerHTML = spanText(yellow,txt) ; userI.currentSet = txt}
            cleanParent(getID("advFr"))
            savUserI()
            setTools()
        }})
        addEle({dad:subC,what:"label",setFor:"toggleCurrRate",setClass:"toggle-label",marginR:"10px"})


    addEle({dad:body,setClass:"contCol",padding:"5px",width:"100%",setID:"advFr",maxWidth:"340px"})        

    addEle({dad:body,setClass:"contCol",padding:"5px",width:"100%",setID:"toolsFr"})        
  
    if(userI.currentSet === "Custom"){getID("toggleCurrRate").checked = true}
    let ev = new Event("change") ; getID("toggleCurrRate").dispatchEvent(ev)
}

let settingsArr = ["-- User Settings --","Tools Display-Use Options","Tools per Line & Order Memos","Rates / Ratios",
                   "User Details","Delete User Settings"]

let startInfos = `
    For a basic simple use of this webpage<br>
    all you need for a converting is to :<br>
     - input the "Order Amount" (3rd white input area)<br>
     - read the "payout" that will show below<br>
     - and send payout to the customer<br>
     everything else is additional tools and infos `+ addEmo("🤠","emoji smiling farmer") +`<br><br>
     Review the User Settings, in particular Display Options !<br><br>
     You start with the Basic full set of tools, but you can<br>
     make your own under --User Settings-- >> Rates / Ratios
`

function getDialogTopFrame(cxlEsc=true){
    let Obj = addEle({dad:body,what:"dialog",setClass:"myDialog",width:"fit-content",height:"fit-content"})
    if(cxlEsc){ Obj.addEventListener('keydown', (e)=>{ if (e.key === 'Escape'){e.preventDefault()} }) }
    return Obj
}

function lockScroll(lock=true){
    document.body.style.overflow = lock ? "hidden" : ""
    document.body.style.touchAction = lock ? 'none' : ""
}

function userSettingPick(){
    if(getID("settingsSelect").value !=="-- User Settings --"){
        switch(getID("settingsSelect").value){
            case settingsArr[1] : setDispOptions()
                break
            case settingsArr[2] : setToolsMemos()
                break
            case settingsArr[3] : setRates()
                break
            case settingsArr[4] : setUserDetails()
                break
            case settingsArr[5] : setDeleteFrame()
                break
            default : alert("Under Construction")
        }
    }
}

function setDispOptions(){
    let pop = getDialogTopFrame()
    let cont = addEle({dad:pop,setClass:"contCol",width:"fit-content",minHeight:"450px",maxWidth:"360px"})

        let subC = addEle({dad:cont,setClass:"contRow",padding:"10px 5px",border:"teal solid 2px",radius:"8px",
        alignItems:"center",backC:"rgb(45, 88, 128)",justifyC:"space-between",minWidth:"300px"})

            let inC = addEle({dad:subC,setClass:"contCol"})
            let options = userI.displayOptions
                addEle({dad:inC,text:"Display & Use",margin:"0 10px 0 10px"})

            let txt = options.all ?
            "(Minimum | " + spanText("yellow","Maximum",18,"",yellow+" solid 2px")+")" :
            "("+ spanText("yellow","Minimum",18,"",yellow+" solid 2px") + " | Maximum)" 
            addEle({dad:inC,text:txt,setID:"toggleDispAllLbl",marginR:"10px"})

            let inC2 = addEle({dad:subC,setClass:"contRow",alignItems:"center"})
                addEle({dad:inC2,what:"checkbox",isInput:true,setID:"toggleDispAll",setClass:"toggle-checkbox",
                margin:"0px",setFunc:(e)=>{
                    let options = userI.displayOptions
                    let disp = getID("toggleDispAllLbl")
                    if(e.srcElement.checked){
                        disp.innerHTML = "(Minimum | " + spanText("yellow","Maximum",18,"",yellow+" solid 2px")+")"
                        for(let key in options){options[key]=true}
                        document.getElementsByName("dispToggles").forEach(it=>{it.checked = true})
                        }
                    else {
                        disp.innerHTML = "("+ spanText("yellow","Minimum",18,"",yellow+" solid 2px") + " | Maximum)" 
                        for(let key in options){options[key]=false}
                        document.getElementsByName("dispToggles").forEach(it=>{it.checked = false})
                    }
                    getID("advFr").style.display = e.srcElement.checked ? "flex" : "none"
                    savUserI()
                    setTools()
                }})
                addEle({dad:inC2,what:"label",setFor:"toggleDispAll",setClass:"toggle-label",marginR:"0px"})
                getID("toggleDispAll").checked = options.all ? true : false
                addEle({dad:inC2,setClass:"btn",text:addEmo("❌","emoji red cross"),fontS:"16px",height:"fit-content",
                marginL:"20px",setFunc:()=>{
                    getID("settingsSelect").selectedIndex = 0 ;
                    savUserI() 
                    pop.remove()
                    lockScroll(false)
                }})



    let dispOptionsC = addEle({dad:cont,setClass:"contCol",maxHeight:"500px",overflowX:"hidden",marginT:"10px",minWidth:"300px"})

        let mW = 220

        let lbl = "AdvEval" ; let infoLb = "Advertise | Estimate Converting" ; let infoT = `
        Option to Auto-build advertising message to use in game chat. <br>( You may change 
        content if youd like directly in the text square area, then click the Copy button 
        and go paste it in game chat )<br><br> 
        ... and a Tool to Estimate how far you can convert with current inventory items.
        `
        inC = addEle({dad:dispOptionsC,setClass:"contCol",marginT:"10px",border:"teal solid 2px",radius:"8px"})
            subC = addEle({dad:inC,setClass:"contRow",alignItems:"center",borderB:"teal solid 2px",radiusTR:"6px",
            radiusTL:"6px",backC:"rgb(45, 88, 128)",justifyC:"space-between"})
            let subC1=addEle({dad:subC})
                addEle({dad:subC1,text:infoLb,padding:"5px",textA:"center",marginR:"20px",minWidth:mW+"px"})
            let subC2=addEle({dad:subC,setClass:"contRow",alignItems:"center"})
                addEle({dad:subC2,what:"checkbox",isInput:true,setID:"toggle"+lbl,setClass:"toggle-checkbox",
                margin:"50px",setName:"dispToggles",setFunc:(e)=>{
                    let options = userI.displayOptions
                    if(e.srcElement.checked)
                         {options.advertiseEstimate = true}
                    else {options.advertiseEstimate = false}
                    getID("advFr").style.display = e.srcElement.checked ? "flex" : "none"
                    savUserI() ; setTools()
                }})
                addEle({dad:subC2,what:"label",setFor:"toggle"+lbl,setClass:"toggle-label"})
                addEle({dad:subC2,setClass:"btn",text:"?",padding:"0 5px",setID:lbl+":C",setFunc:(e)=>{
                    let tgt = getID(e.srcElement.id.split(":")[0]) ; 
                    let status = tgt.style.display 
                    document.getElementsByName("displayTips").forEach(d=>{d.style.display="none"})
                    tgt.style.display = status === "none" ? "block" : "none"
                }})
                getID("toggle"+lbl).checked = options.advertiseEstimate ? true : false

                addEle({dad:inC,text:infoT,margin:"5px",maxWidth:"300px",paddingL:"5px",setID:lbl,display:"none",setName:"displayTips"})

        lbl = "custName" ; infoLb = "Customer Name" ; infoT = `
        Optional Information that will be included in the [Memo] ... and also, if spelling is right 
        can be used to ping someone in chat`
        inC = addEle({dad:dispOptionsC,setClass:"contCol",marginT:"10px",border:"teal solid 2px",radius:"8px"})
            subC = addEle({dad:inC,setClass:"contRow",alignItems:"center",borderB:"teal solid 2px",radiusTR:"6px",
            radiusTL:"6px",backC:"rgb(45, 88, 128)",justifyC:"space-between"})
                subC1=addEle({dad:subC})
                addEle({dad:subC1,text:infoLb,padding:"5px",textA:"center",marginR:"20px",minWidth:mW+"px"})
                subC2=addEle({dad:subC,setClass:"contRow",alignItems:"center"})
                addEle({dad:subC2,what:"checkbox",isInput:true,setID:"toggle"+lbl,setClass:"toggle-checkbox",
                margin:"50px",setName:"dispToggles",setFunc:(e)=>{
                    let options = userI.displayOptions
                    if(e.srcElement.checked)
                         {options.customerName = true}
                    else {options.customerName = false}
                    savUserI() ; setTools()
                }})
                addEle({dad:subC2,what:"label",setFor:"toggle"+lbl,setClass:"toggle-label"})
                addEle({dad:subC2,setClass:"btn",text:"?",padding:"0 5px",setID:lbl+":C",setFunc:(e)=>{
                    let tgt = getID(e.srcElement.id.split(":")[0])
                    let status = tgt.style.display 
                    document.getElementsByName("displayTips").forEach(d=>{d.style.display="none"})
                    tgt.style.display = status === "none" ? "block" : "none"
                }})
                getID("toggle"+lbl).checked = options.customerName ? true : false

                addEle({dad:inC,text:infoT,margin:"5px",maxWidth:"300px",paddingL:"5px",setID:lbl,display:"none",setName:"displayTips"})

        lbl = "custMB" ; infoLb = "Customer [MB](Mailbox) Size" ; infoT = `
        Optional, yet recommended Information, that will be included in the [Memo] ... 
        and also allow to view the Payout Details like how many MB needed and what
        remains to pay for the last MB<br><br>The "Multi-orders quick window" is also
        concerned if you toggle this ON / OFF`
        inC = addEle({dad:dispOptionsC,setClass:"contCol",marginT:"10px",border:"teal solid 2px",radius:"8px"})
            subC = addEle({dad:inC,setClass:"contRow",alignItems:"center",borderB:"teal solid 2px",radiusTR:"6px",
            radiusTL:"6px",backC:"rgb(45, 88, 128)",justifyC:"space-between"})
                subC1=addEle({dad:subC})
                addEle({dad:subC1,text:infoLb,padding:"5px",textA:"center",marginR:"20px",minWidth:mW+"px"})
                subC2=addEle({dad:subC,setClass:"contRow",alignItems:"center"})
                addEle({dad:subC2,what:"checkbox",isInput:true,setID:"toggle"+lbl,setClass:"toggle-checkbox",
                margin:"50px",setName:"dispToggles",setFunc:(e)=>{
                    let options = userI.displayOptions
                    if(e.srcElement.checked)
                         {options.customerMB = true}
                    else {options.customerMB = false}
                    savUserI() ; setTools()
                }})
                addEle({dad:subC2,what:"label",setFor:"toggle"+lbl,setClass:"toggle-label"})
                addEle({dad:subC2,setClass:"btn",text:"?",padding:"0 5px",setID:lbl+":C",setFunc:(e)=>{
                    let tgt = getID(e.srcElement.id.split(":")[0])
                    let status = tgt.style.display 
                    document.getElementsByName("displayTips").forEach(d=>{d.style.display="none"})
                    tgt.style.display = status === "none" ? "block" : "none"
                }})
                getID("toggle"+lbl).checked = options.customerMB ? true : false

                addEle({dad:inC,text:infoT,margin:"5px",maxWidth:"300px",paddingL:"5px",setID:lbl,display:"none",setName:"displayTips"})


        lbl = "memos" ; infoLb = "Memos (or order history)" ; infoT = `
        Memos are composed of "Order Amount" and if available +"Customer Name" +"Customer MB size".<br><br>
        The auto save is triggered after you started typing the Order Amount + X seconds. (Or you do
        manualy the Memo saving with a button) <br>Practical use is when many people request conversion
        and chat goes so fast you have a hard time keeping track of details.<br><br> Good practice : 
        post advertising, if you see many conversion requests, fill memos of all people details you
        can see then start converting from first memo.<br><br>** Refreshing/Loading the page will erase Memos, 
        Use [Reset] buttons available **`
        inC = addEle({dad:dispOptionsC,setClass:"contCol",marginT:"10px",border:"teal solid 2px",radius:"8px"})
            subC = addEle({dad:inC,setClass:"contRow",alignItems:"center",borderB:"teal solid 2px",radiusTR:"6px",
            radiusTL:"6px",backC:"rgb(45, 88, 128)",justifyC:"space-between"})
                subC1=addEle({dad:subC})
                addEle({dad:subC1,text:infoLb,padding:"5px",textA:"center",marginR:"20px",minWidth:mW+"px"})
                subC2=addEle({dad:subC,setClass:"contRow",alignItems:"center"})
                addEle({dad:subC2,what:"checkbox",isInput:true,setID:"toggle"+lbl,setClass:"toggle-checkbox",
                margin:"50px",setName:"dispToggles",setFunc:(e)=>{
                    let options = userI.displayOptions
                    if(e.srcElement.checked)
                         {options.memos = true}
                    else {options.memos = false}
                    savUserI() ; setTools()
                }})
                addEle({dad:subC2,what:"label",setFor:"toggle"+lbl,setClass:"toggle-label"})
                addEle({dad:subC2,setClass:"btn",text:"?",padding:"0 5px",setID:lbl+":C",setFunc:(e)=>{
                    let tgt = getID(e.srcElement.id.split(":")[0])
                    let status = tgt.style.display 
                    document.getElementsByName("displayTips").forEach(d=>{d.style.display="none"})
                    tgt.style.display = status === "none" ? "block" : "none"
                }})
                getID("toggle"+lbl).checked = options.memos ? true : false

                addEle({dad:inC,text:infoT,margin:"5px",maxWidth:"300px",paddingL:"5px",setID:lbl,display:"none",setName:"displayTips"})
                

        lbl = "altPayouts" ; infoLb = "Alternate Split Payouts" ; infoT = `
        When you decide to take an order not having enough inventory items for the payout.<br><br>
        Based on a gold-evaluation, try to estimate other ways to payout.<br><br>
        This is not conventional converting, more a negociation-like practice.<br>
        If you dont feel comfortable with this, maybe just turn it off.
        `
        inC = addEle({dad:dispOptionsC,setClass:"contCol",marginT:"10px",border:"teal solid 2px",radius:"8px"})
            subC = addEle({dad:inC,setClass:"contRow",alignItems:"center",borderB:"teal solid 2px",radiusTR:"6px",
            radiusTL:"6px",backC:"rgb(45, 88, 128)",justifyC:"space-between"})
                subC1=addEle({dad:subC})
                addEle({dad:subC1,text:infoLb,padding:"5px",textA:"center",marginR:"20px",minWidth:mW+"px"})
                subC2=addEle({dad:subC,setClass:"contRow",alignItems:"center"})
                addEle({dad:subC2,what:"checkbox",isInput:true,setID:"toggle"+lbl,setClass:"toggle-checkbox",
                margin:"50px",setName:"dispToggles",setFunc:(e)=>{
                    let options = userI.displayOptions
                    if(e.srcElement.checked)
                         {options.alternatePayouts = true}
                    else {options.alternatePayouts = false}
                    savUserI() ; setTools()
                }})
                addEle({dad:subC2,what:"label",setFor:"toggle"+lbl,setClass:"toggle-label"})
                addEle({dad:subC2,setClass:"btn",text:"?",padding:"0 5px",setID:lbl+":C",setFunc:(e)=>{
                    let tgt = getID(e.srcElement.id.split(":")[0])
                    let status = tgt.style.display 
                    document.getElementsByName("displayTips").forEach(d=>{d.style.display="none"})
                    tgt.style.display = status === "none" ? "block" : "none"
                }})
                getID("toggle"+lbl).checked = options.alternatePayouts ? true : false

                addEle({dad:inC,text:infoT,margin:"5px",maxWidth:"300px",paddingL:"5px",setID:lbl,display:"none",setName:"displayTips"})
        

        lbl = "useNeed" ; infoLb = "Used and Needed" ; infoT = `
        Roughly this is what will be consumed during the conversion.<br>Think of Bottles mainly ...
        or in the case of nets conversion : Stone.<br><br>Dont forget to fill the Production details
        in the User Settings > User Details to have this running for the nets conversions !
        `
        inC = addEle({dad:dispOptionsC,setClass:"contCol",marginT:"10px",border:"teal solid 2px",radius:"8px"})
            subC = addEle({dad:inC,setClass:"contRow",alignItems:"center",borderB:"teal solid 2px",radiusTR:"6px",
            radiusTL:"6px",backC:"rgb(45, 88, 128)",justifyC:"space-between"})
                subC1=addEle({dad:subC})
                addEle({dad:subC1,text:infoLb,padding:"5px",textA:"center",marginR:"20px",minWidth:mW+"px"})
                subC2=addEle({dad:subC,setClass:"contRow",alignItems:"center"})
                addEle({dad:subC2,what:"checkbox",isInput:true,setID:"toggle"+lbl,setClass:"toggle-checkbox",
                margin:"50px",setName:"dispToggles",setFunc:(e)=>{
                    let options = userI.displayOptions
                    if(e.srcElement.checked)
                         {options.usedNeeds = true}
                    else {options.usedNeeds = false}
                    savUserI() ; setTools()
                }})
                addEle({dad:subC2,what:"label",setFor:"toggle"+lbl,setClass:"toggle-label"})
                addEle({dad:subC2,setClass:"btn",text:"?",padding:"0 5px",setID:lbl+":C",setFunc:(e)=>{
                    let tgt = getID(e.srcElement.id.split(":")[0])
                    let status = tgt.style.display 
                    document.getElementsByName("displayTips").forEach(d=>{d.style.display="none"})
                    tgt.style.display = status === "none" ? "block" : "none"
                }})
                getID("toggle"+lbl).checked = options.usedNeeds ? true : false

                addEle({dad:inC,text:infoT,margin:"5px",maxWidth:"300px",paddingL:"5px",setID:lbl,display:"none",setName:"displayTips"})


        lbl = "megas" ; infoLb = "MMs (Mega Masteries)" ; infoT = `
        This is an estimated calculation / information of what remains until you reach the MM for
        a given item.<br>If you wish this option to be displayed correctly, all the informations will
        be needed in the User Settings > User Details area (Inventory & Production + Mastery for this item).
        `
        inC = addEle({dad:dispOptionsC,setClass:"contCol",marginT:"10px",border:"teal solid 2px",radius:"8px"})
            subC = addEle({dad:inC,setClass:"contRow",alignItems:"center",borderB:"teal solid 2px",radiusTR:"6px",
            radiusTL:"6px",backC:"rgb(45, 88, 128)",justifyC:"space-between"})
                subC1=addEle({dad:subC})
                addEle({dad:subC1,text:infoLb,padding:"5px",textA:"center",marginR:"20px",minWidth:mW+"px"})
                subC2=addEle({dad:subC,setClass:"contRow",alignItems:"center"})
                addEle({dad:subC2,what:"checkbox",isInput:true,setID:"toggle"+lbl,setClass:"toggle-checkbox",
                margin:"50px",setName:"dispToggles",setFunc:(e)=>{
                    let options = userI.displayOptions
                    if(e.srcElement.checked)
                         {options.mms = true}
                    else {options.mms = false}
                    savUserI() ; setTools()
                }})
                addEle({dad:subC2,what:"label",setFor:"toggle"+lbl,setClass:"toggle-label"})
                addEle({dad:subC2,setClass:"btn",text:"?",padding:"0 5px",setID:lbl+":C",setFunc:(e)=>{
                    let tgt = getID(e.srcElement.id.split(":")[0])
                    let status = tgt.style.display 
                    document.getElementsByName("displayTips").forEach(d=>{d.style.display="none"})
                    tgt.style.display = status === "none" ? "block" : "none"
                }})
                getID("toggle"+lbl).checked = options.mms ? true : false

                addEle({dad:inC,text:infoT,margin:"5px",maxWidth:"300px",paddingL:"5px",setID:lbl,display:"none",setName:"displayTips"})

    pop.showModal()
    lockScroll()
}

function setToolsMemos(){

    let pop = getDialogTopFrame()
    let cont = addEle({dad:pop,setClass:"contCol",width:"fit-content",margin:"5px 10px",radius:"10px",maxWidth:"340px"})

        let subC = addEle({dad:cont,setClass:"contRow",padding:"5px",border:"teal solid 2px",radius:"8px",
        alignItems:"center",backC:"rgb(45, 88, 128)"}) // ,justifyC:"space-between"
            addEle({dad:subC,text:"Tools per Line",textA:"center",width:"100%"})
         let subC1 = addEle({dad:subC,setClass:"contRow"})
            addEle({dad:subC1,setClass:"btn",text:"Update", 
            setFunc:()=>{
    
                userI.toolPerLine = Number(getID("tplSelect").value)
    
                userI.memoCap = Number(getID("memoCselect").value)
                userI.memoTimer = Number(getID("memoSselect").value)
                userI.memoType = userI.memoTimer === 0 ? "manual" : "auto"
                getID("uptoolMemo").innerHTML = addEmo("✅","emoji green OK sign")  
                setTimeout(()=>{
                    if(getID("uptoolMemo")){getID("uptoolMemo").innerHTML = ""}
                },1000)
                getID("settingsSelect").selectedIndex = 0 ; 
                setTools() ;
                savUserI()
            }})
            addEle({dad:subC1,setID:"uptoolMemo",minWidth:"35px"})
            addEle({dad:subC1,setClass:"btn",text:addEmo("❌","emoji red cross"),margin:"0 0 5px 0",setFunc:()=>{
                getID("settingsSelect").selectedIndex = 0 ; 
                pop.remove()
                lockScroll(false)
            }})

        subC = addEle({dad:cont,setClass:"contRow",padding:"5px",
        alignItems:"center",justifyC:"space-around"})
            let txt =` 
            Each tool is an item you convert.
            PC screen to display more per line,
            for mobile : rather set 1 only  ...
            `
            addEle({dad:subC,text:txt,padding:"5px",})
            addEle({dad:subC,what:"select",fontS:"16px",setID:"tplSelect",padding:"5px",
            backC:"teal",border:"rgb(212, 212, 74) solid 2px",radius:"5px",textC:"white"})
            for(let i=1;i<11;i++){addEle({dad:getID("tplSelect"),what:"option",text:i})}
            getID("tplSelect").selectedIndex = userI.toolPerLine -1

        addEle({dad:cont,backC:"rgb(45, 88, 128)",padding:"5px",text:"Order Memos",
        margin:"10px 0",border:"teal solid 2px",radius:"8px",textA:"center"})
    
        subC = addEle({dad:cont,setClass:"contRow",padding:"10px 5px",
        borderB:"teal dotted 2px",alignItems:"center",justifyC:"space-between"})

            addEle({dad:subC,text:"How many Memos you can keep",paddingL:"0px"})

            addEle({dad:subC,what:"select",fontS:"16px",setID:"memoCselect",padding:"5px",
            backC:"teal",border:"rgb(212, 212, 74) solid 2px",radius:"5px",textC:"white"})
            for(let i=10;i<=50;i+= 10){addEle({dad:getID("memoCselect"),what:"option",text:i})}
            getID("memoCselect").selectedIndex = userI.memoCap/10 -1

        subC = addEle({dad:cont,setClass:"contRow",padding:"5px",
        alignItems:"center",justifyC:"space-around"})

            txt = `
            Auto-Save a Memo (mb size / name / order) after `+spanText("cyan","X")+` seconds
            you started typing the order amount.<br><br>
            ( If the Auto-Save doesnt work well
            on your device or you prefer to
            save manualy with a button, set to 0 )<br>
            * In manual mode, PC users can either press the 
            new button OR the [Enter] key *
            `
            addEle({dad:subC,text:txt,marginR:"10px",textA:""})

            addEle({dad:subC,what:"select",fontS:"16px",setID:"memoSselect",padding:"5px",
            backC:"teal",border:"rgb(212, 212, 74) solid 2px",radius:"5px",textC:"white"})
            for(let i=0;i<=10;i++){addEle({dad:getID("memoSselect"),what:"option",text:i})}
            getID("memoSselect").selectedIndex = userI.memoTimer


    pop.showModal()
    lockScroll()

}

function setRates(){
    let pop = getDialogTopFrame()
    let cont = addEle({dad:pop,setClass:"contCol",width:"fit-content",minHeight:"460px",minWidth:"360px"})
        
        let subC = addEle({dad:cont,setClass:"contRow",padding:"0 0 5px 0",alignItems:"center",justifyC:"space-around",
        backC:"rgb(45, 88, 128)",border:"teal solid 2px",radius:"8px",})
            addEle({dad:subC,padding:"10px",setID:"rateLbl",textA:"center",}) //minWidth:"320px"
            
            addEle({dad:subC,setClass:"btn",text:addEmo("❌","emoji red cross"),setFunc:()=>{
                getID("settingsSelect").selectedIndex = 0 ;
                savUserI() 
                pop.remove()
                lockScroll(false)
            }})

        subC = addEle({dad:cont,setClass:"contRow",padding:"5px",alignItems:"center"})
            addEle({dad:subC,text:"Rate",setID:"rateCheck",margin:"0 10px",minWidth:"150px"})
            addEle({dad:subC,what:"checkbox",isInput:true,setID:"toggleRate",setClass:"toggle-checkbox",
            margin:"0 20px",setFunc:()=>{

                let disp = getID("rateCheck")
                if(getID("toggleRate").checked){
                    disp.innerHTML = "Custom Rate ("+userI.rateU.length+")"
                    getID("addRbtn").style.visibility = "visible"
                    dispRateSet(userI.rateU)
                } else {
                    disp.innerHTML = "Basic Rate (6)"
                    getID("addRbtn").style.visibility = "hidden"
                    dispRateSet(rateB)
                }
                
                getID("rateLbl").innerHTML = "Rates (Basic : 6 | Custom : "+userI.rateU.length+")"
            }})
            addEle({dad:subC,what:"label",setFor:"toggleRate",setClass:"toggle-label",marginR:"30px"})
            addEle({dad:subC,setClass:"btn",text:"Add",visibility:"hidden",setID:"addRbtn",setFunc:addRateSetup})

            addEle({dad:cont,setClass:"contCol",setID:"dispRates",minHeight:"300px",maxHeight:"350px",overflowX:"hidden"})

        if(userI.rateU.length>0){getID("toggleRate").checked = true}
        let ev = new Event("change") ; getID("toggleRate").dispatchEvent(ev)

    pop.showModal()
    lockScroll()
}

function dispRateSet(arr){
    let workC = getID("dispRates")
    cleanParent(workC)

    if(arr){
        for(let i=0;i<arr.length;i++){
            let area = "rateSets"
            let itm = arr.filter(x=>x.ind===i)[0]
            buildRate(itm,workC,i,"teal solid 2px",5,area)

            if(getID("toggleRate").checked){
                subC = addEle({dad: getID(area+":"+i),setClass:"contRow",alignItems:"center"})
                if(userI.rateU.length>1){
                    addEle({dad:subC,text:addEmo("🔼","emoji arrow pointing up","swapE:"+i),setClass:"btn",
                    padding:"0",margin:"0",fontS:"12px", setID:"swap:"+i,setFunc:(e)=>{swapUD(e,"U")}})
                    addEle({dad:subC,text:addEmo("🔽","emoji arrow pointing down","swapE:"+i),setClass:"btn",
                    padding:"0",margin:"0",fontS:"12px", setID:"swap:"+i,setFunc:(e)=>{swapUD(e,"D")}})
                }
                addEle({dad:subC,text:addEmo("❌","emoji red cross")+" Delete",setClass:"btn",padding:"0 5px",
                marginL:"20px",fontS:"12px",setID:itm.serial,setFunc:(e)=>{blastRate(e)}})
            }
        }
    }
}

function swapUD(e,di){

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
        newA.push(srcI)
    }


    let tempo = newA.splice(oldI,1)[0]
    newA.splice(newI,0,tempo)


    for(let i=0;i<newA.length;i++){
        newA[i].ind = i
    }

    let ev = new Event("change") ; getID("toggleRate").dispatchEvent(ev)
    setTools()
}

function blastRate(e){
    let idx = userI.rateU.findIndex(x=>x.serial === e.srcElement.id )
    userI.rateU.splice(idx,1)
    
    let ev = undefined
    if(userI.rateU.length === 0){
        getID("toggleCurrRate").checked = false // userI.currentSet = "Custom" ; 
        ev = new Event("change") ; getID("toggleCurrRate").dispatchEvent(ev)

        getID("toggleRate").checked = false
        ev = new Event("change") ; getID("toggleRate").dispatchEvent(ev)

        setTools()
    }
    
    if(userI.rateU.length>0){for(let i=0;i<userI.rateU.length;i++){userI.rateU[i].ind=i}}

    ev = new Event("change") ; getID("toggleRate").dispatchEvent(ev)
    setTools()
}



function buildRate(itm,dad,idx,border="teal solid 2px",margin=5,area="tool",amtID=""){
    let fS = 15+"px"
    let itmO = outputs.filter(x=>x.type === itm.type)[0]
    let rateC = addEle({dad:dad,setClass:"contCol",border:border,margin:margin+"px",padding:"3px",setID:area+":"+idx})
        let subC = addEle({dad:rateC,setClass:"contRow",alignItems:"center"})
        if(amtID!==""){
            addEle({dad:subC,what:"input",isInput:true,numInput:true,setID:amtID,margin:"0 3px 0 5px",width:"100px",
            textA:"center",setVal:0,setName:"multiAmts",setFunc:calcMultiAmt})
            addEle({dad:subC,minWidth:"25px",fontS:fS,setID:amtID.split(":")[0] + "G:" + amtID.split(":")[1]})
        }
            addEle({dad:subC,what:"img",imgFullSrc:srcImgs+itmO.img1,imgSize:20,imgAlt:itmO.chat1+"icon"})
            addEle({dad:subC,text: addEmo("➜","emoji arrow pointing right") })
            addEle({dad:subC,what:"img",imgFullSrc:srcImgs+itmO.img2,imgSize:20,imgAlt:itmO.chat2+"icon"})
            if(amtID==="")
                 {addEle({dad:subC,text:itm.type,marginL:"10px",fontS:fS})}
            else {
                addEle({dad:subC,text:itm.rate,fontS:fS,borderL:"teal dotted 2px",padding:"5px",marginL:"10px"})
                addEle({dad:subC,text:itm.bonus+"%",fontS:fS,borderL:"teal dotted 2px",padding:"5px"})
                txt = roundings.filter(r=>r.label===itm.rounding)[0]
                addEle({dad:subC,text:txt.alt,fontS:fS,borderL:"teal dotted 2px",padding:"5px"})

                
                 }
        if(amtID===""){
            let txt = "Rate : "+itm.rate + " | Bonus : " + itm.bonus+"% | Rounding : " +itm.rounding
            addEle({dad:rateC,text:txt,fontS:fS})
        }
        if(amtID!==""){
            subC = addEle({dad:rateC,setClass:"contRow",justifyC:"space-around",alignItems:"center"})
                addEle({dad:subC,text:"Craft : " + `<span id="craftM:`+idx+`"> </span>`,fontS:fS})
                addEle({dad:subC,text:"Lose : " + `<span id="loseM:`+idx+`"> </span>`,fontS:fS,marginL:"teal dotted 2px",marginR:"teal dotted 2px"})
                addEle({dad:subC,text:"Payout : " + `<span id="payoutM:`+idx+`"> </span>`,fontS:fS})
            if(userI.displayOptions.customerMB){
                addEle({dad:rateC,text:"Detail : " + `<span id="detailM:`+idx+`"> </span>`,fontS:fS})
            }

        }

}

function addRateSetup(){
    let pop2 = getDialogTopFrame()
    let cont = addEle({dad:pop2,setClass:"contCol",width:"fit-content",
    border:"teal solid 2px",radius:"10px",padding:"5px"})

        addEle({dad:cont,setID:"newRate",minHeight:"60px"})

        addEle({dad:cont,what:"select",fontS:"16px",setID:"rateTSelect",padding:"5px",marginT:"0",
        backC:"teal",border:"rgb(212, 212, 74) solid 2px",radius:"5px",textC:"white",setFunc:testCalcAmt})
            addEle({dad:getID("rateTSelect"),what:"option",text:"-- Select an Item to Convert --"})
            outputs.forEach(out=>{addEle({dad:getID("rateTSelect"),what:"option",text:out.type})})

        let subC = addEle({dad:cont,setClass:"contRow",alignItems:"center",justifyC:"space-around",
            borderT:"dotted teal 3px",marginT:"10px",paddingT:"10px"})
            addEle({dad:subC,text:"Ratio :",textA:"center",fontS:"18px"})
            addEle({dad:subC,what:"select",fontS:"16px",setID:"rateRSelect",padding:"5px",
            backC:"teal",border:"rgb(212, 212, 74) solid 2px",radius:"5px",textC:"white",setFunc:testCalcAmt})
                addEle({dad:getID("rateRSelect"),what:"option",text:"Standard to All Players"})
                addEle({dad:getID("rateRSelect"),what:"option",text:"Friends Only (little benefit/loss)"})
                addEle({dad:getID("rateRSelect"),what:"option",text:"Custom : set YOUR own rate"})

            subC = addEle({dad:cont,setClass:"contRow",alignItems:"center",justifyC:"space-around",
            marginT:"10px"})
                addEle({dad:subC,text:"[A]",textA:"center",fontS:"18px",marginR:"5px"})
                addEle({dad:subC,what:"input",isInput:true,numInput:true,textA:"center",fontS:"14px",
                setID:"rateApart",width:"70px",disabled:true,textC:"blue",setVal:0,setFunc:testCalcAmt})
                addEle({dad:subC,text:":",textA:"center",fontS:"18px",margin:"0 5px"})
                addEle({dad:subC,what:"input",isInput:true,numInput:true,textA:"center",fontS:"14px",
                setID:"rateBpart",width:"70px",disabled:true,textC:"blue",setVal:0,setFunc:testCalcAmt})
                addEle({dad:subC,text:"[B]",textA:"center",fontS:"18px",marginL:"5px"})

        let txt = "(Order amount divided by [A] multiplied by [B])"
        addEle({dad:cont,text:txt,textA:"center",
        fontS:"16px",margin:"10px 0",borderB:"teal dotted 3px",paddingB:"10px"})
        subC = addEle({dad:cont,setClass:"contRow",alignItems:"center"})

        subC = addEle({dad:cont,setClass:"contRow",alignItems:"center",justifyC:"center",
        borderB:"dotted teal 3px",paddingB:"10px"})
            txt = "Generous converters can add<br>to payout a bonus  of (+X %)"
            addEle({dad:subC,text:txt,textA:"center",fontS:"18px"})
            addEle({dad:subC,what:"input",isInput:true,textA:"center",fontS:"14px",setID:"rateBO",
            width:"30px",margin:"0 5px 0 20px",setVal:0,setFunc:testCalcAmt})
            addEle({dad:subC,text:"%",textA:"center",fontS:"18px"})

        subC = addEle({dad:cont,setClass:"contRow",alignItems:"center",justifyC:"space-around",
        borderB:brown+" dotted 3px",margin:"10px 0 5px 0",paddingB:"10px"})
            addEle({dad:subC,text:"Type of Rounding :",textA:"center",fontS:"18px"})
            addEle({dad:subC,what:"select",fontS:"16px",setID:"rateROSelect",padding:"5px",textA:"center",
            backC:"teal",border:"rgb(212, 212, 74) solid 2px",radius:"5px",textC:"white",setFunc:testCalcAmt})
                roundings.forEach(ro=>{addEle({dad:getID("rateROSelect"),what:"option",text:ro.label})})
                
        subC = addEle({dad:cont,setClass:"contRow",alignItems:"center",justifyC:"space-around",
        marginB:"5px",paddingT:"5px"})
            addEle({dad:subC,text:"Test Converting ? Amount =",textA:"center",fontS:"18px"})
            addEle({dad:subC,what:"input",isInput:true,numInput:true,textA:"center",fontS:"14px",
            setID:"testAmt",width:"90px",setVal:0,setFunc:testCalcAmt})
        subC = addEle({dad:cont,setClass:"contRow",marginB:"5px"})
        addEle({dad:subC,text:"=>",fontS:"18px",marginR:"5px"})
        addEle({dad:subC,text:0,fontS:"16px",marginR:"5px",setID:"dispCalc",minHeight:"40px"})

        subC = addEle({dad:cont,setClass:"contRow",justifyC:"space-around",borderT:brown+" dotted 3px",paddingT:"10px"})
            let subC2 = addEle({dad:subC,setClass:"contRow",alignItems:"center"})
            addEle({dad:subC2,setClass:"btn",text:"Add this rate",minWidth:"100px",setFunc:()=>{
                let rateL = getID("rateApart")
                let rateR = getID("rateBpart")
                let itmO = outputs.filter(x=>x.type === getID("rateTSelect").value)[0]
                if(getID("rateTSelect").selectedIndex !==0 && testNum(rateL.value) && testNum(rateR.value) 
                && testNum(getID("rateBO").value,true) ){

                    if(getID("rateBO").value===""){getID("rateBO").value = 0}

                    userI.rateU.push({
                        ind:userI.rateU.length,
                        label: itmO.label,
                        type: itmO.type,
                        rate: rateL.value+":"+rateR.value,
                        bonus:getID("rateBO").value,
                        rounding:getID("rateROSelect").value,
                        orderMem:[],
                        orderIdx:undefined,
                        orderTimer:undefined,
                        advertising:false,
                        display:true,
                        serial:"S:"+new Date()
                    })

                    let ev = new Event("change") ; getID("toggleRate").dispatchEvent(ev)

                    getID("toggleCurrRate").checked = true // userI.currentSet = "Custom" ; 
                    ev = new Event("change") ; getID("toggleCurrRate").dispatchEvent(ev)
                    setTools()

                    getID("addGood").innerHTML = addEmo("✅","emoji green OK sign")
                    setTimeout(()=>{
                        if(getID("addGood")){getID("addGood").innerHTML = ""}
                    },2000)
                } else {
                    getID("addGood").innerHTML = addEmo("⛔","emoji prohibited sign")
                    setTimeout(()=>{
                        if(getID("addGood")){getID("addGood").innerHTML = ""}
                    },2000)
                }
            }})
            addEle({dad:subC2,setID:"addGood",minWidth:"20px"})
            addEle({dad:subC,setClass:"btn",text:addEmo("❌","emoji red cross"),minWidth:"100px",setFunc:()=>{
                pop2.remove()
            }})

    pop2.showModal()
}

function testCalcAmt(){

    cleanParent(getID("newRate"))
    let rateL = getID("rateApart")
    let rateR = getID("rateBpart")

    if(getID("rateTSelect").selectedIndex!==0){
        let itmO = outputs.filter(x=>x.type === getID("rateTSelect").value)[0]

        rateL.disabled = getID("rateRSelect").selectedIndex !== 2 ? true : false
        rateR.disabled = getID("rateRSelect").selectedIndex !== 2 ? true : false

        switch(getID("rateRSelect").selectedIndex){
            case 0 : rateL.value = itmO.rate.split(":")[0]
                     rateR.value = itmO.rate.split(":")[1]
                break
            case 1 : rateL.value = itmO.friend.split(":")[0]
                     rateR.value = itmO.friend.split(":")[1]
                break
        }

        let rateC = addEle({dad:getID("newRate"),setClass:"contCol",border:"teal solid 2px",
        margin:"0",padding:"3px"})
        let subC = addEle({dad:rateC,setClass:"contRow",alignItems:"center"})
            addEle({dad:subC,what:"img",imgFullSrc:srcImgs+itmO.img1,imgSize:20,imgAlt:itmO.chat1+"icon"})
            addEle({dad:subC,text:addEmo("➜","emoji arrow pointing right")})
            addEle({dad:subC,what:"img",imgFullSrc:srcImgs+itmO.img2,imgSize:20,imgAlt:itmO.chat2+"icon"})
            addEle({dad:subC,text:getID("rateTSelect").value,marginL:"10px"})
        let txt = "Rate : "
        txt += testNum(rateL.value) ? rateL.value +":" : spanText(purple,"??") +":"
        txt += testNum(rateR.value) ? rateR.value + " | Bonus : " : spanText(purple,"??") + " | Bonus : "
        txt += testNum(getID("rateBO").value,true) ? getID("rateBO").value : spanText(purple,"??")
        txt += " % | Rounding : " + getID("rateROSelect").value
        addEle({dad:rateC,text:txt})

        if(testNum(rateL.value) && testNum(rateR.value) && testNum(getID("rateBO").value,true) 
        && testNum(getID("testAmt").value) ){
            let ret = calcConvert(Number(getID("testAmt").value),Number(rateL.value),
            Number(rateR.value),Number(getID("rateBO").value),getID("rateROSelect").value)

            let txt = ret.payR + "(+" + ret.bonR +") = " + (ret.payR+ret.bonR)
            txt += "<br>from " + ret.pay.toFixed(2) + "(+" + ret.bon.toFixed(2) +")"
            getID("dispCalc").innerHTML = txt
        } else {getID("dispCalc").innerHTML = spanText(purple,"Bad / Missing Values to calculate")}

    } else {
        rateL.value = 0
        rateR.value = 0
        getID("rateBO").value = 0
        getID("rateRSelect").selectedIndex = 0
        getID("rateROSelect").selectedIndex = 0
        getID("testAmt").value = 0
    }
}

function setUserDetails(){
    let arr = undefined
    let txt = undefined
    let pop = getDialogTopFrame()
    let topC = addEle({dad:pop,setClass:"contRow"})
    let cont = addEle({dad:topC,setClass:"contCol",width:"fit-content",
        border:"teal solid 2px",radius:"10px",alignItems:"center",maxWidth:"360px"})

        let subC = addEle({dad:cont,setClass:"contCol",backC:"rgb(45, 88, 128)",width:"100%",
        borderB:"teal solid 2px",radiusTL:"7px",radiusTR:"7px",alignItems:"center",justifyC:"space-around"})

        let subC0 = addEle({dad:subC,setClass:"contRow",padding:"5px",alignItems:"center"
        ,justifyC:"space-between",width:"90%"})
            let inC = addEle({dad:subC0,setClass:"contCol"})
                addEle({dad:inC,text:"User Details",fontS:"20px",margin:"5px",textA:"center"})
                addEle({dad:inC,text:"",fontS:"20px",margin:"5px",setID:"userDTop"})
            addEle({dad:subC0,setClass:"btn",text:addEmo("❌","emoji red cross"),setFunc:()=>{
                setTools()
                getID("settingsSelect").selectedIndex = 0 ; 
                pop.remove()
                lockScroll(false)
            }})

        let subC2 = addEle({dad:subC,setClass:"contRow",alignItems:"center",marginB:"10px",width:"100%"})
            addEle({dad:subC2,text:"Rate",setID:"detailsLbl",margin:"5px 10px 5px 30px",minWidth:"150px",
            minWidth:"180px",textA:"right"})
            addEle({dad:subC2,what:"checkbox",isInput:true,setID:"detailsCheck",setClass:"toggle-checkbox",
            margin:"50px",setFunc:()=>{
                let workC = getID("dispUser")
                cleanParent(workC)
                let top = getID("userDTop")
                let disp = getID("detailsLbl")
                if(getID("detailsCheck").checked){
                    top.innerHTML = "(Production | "+spanText("yellow","Masteries","",false,"dotted yellow 2px")+")"
                    disp.innerHTML = "Mega Masteries"
                    arr = userI.mms
                    arr.forEach(itm=>{
                        let subC = addEle({dad:workC,setClass:"contRow"})
                            addEle({dad:subC,text:itm.label + " : ",minWidth:"85px",textA:"right",padding:"0 5px"})
                            addEle({dad:subC,text:itm.progress.toLocaleString(),minWidth:"80px",textA:"center"})
                            addEle({dad:subC,text:"/"+(1000000).toLocaleString()})
                    })
                } else {
                    top.innerHTML = "("+spanText("yellow","Production","",false,"dotted yellow 2px")+" | Masteries)"
                    disp.innerHTML = "Inventory & Production"
                    arr = [
                        {label:"Current Max Inventory",val:userI.inventoryMax.toLocaleString()},
                        {label:"Resource Saver Perk",val:userI.resSaver+" %"},
                        {label:"Fruits daily production",val:userI.fruitsProd.toLocaleString()},
                        {label:"Fruits total production",val:userI.fruitsTot.toLocaleString()},
                        {label:"Antlers daily production",val:userI.antlersProd.toLocaleString()},
                        {label:"Nets total production",val:userI.netsTot.toLocaleString()}
                        ]
                    arr.forEach(itm=>{
                        let subC = addEle({dad:workC,setClass:"contRow"})
                            addEle({dad:subC,text:itm.label+" : ",minWidth:"200px",textA:"right",paddingR:"10px"})
                            addEle({dad:subC,text:itm.val,minWidth:"60px",textA:"center"})
                    })
                }
            }})
            addEle({dad:subC2,what:"label",setFor:"detailsCheck",setClass:"toggle-label",marginR:"10px"})


            subC = addEle({dad:cont,setClass:"contCol",padding:"20px",setID:"dispUser",minHeight:"150px",minWidth:"280px"})

       
            addEle({dad:cont,setClass:"btn",text:"Update",marginB:"20px",width:"50%",setID:"upDetailsBtn",
            setFunc:userUpdate})

        let ev = new Event("change") ; getID("detailsCheck").dispatchEvent(ev)

    pop.showModal()
    lockScroll()
}

function userUpdate(){
    let info = undefined
    if(getID("detailsCheck").checked)
         {info = "Mega Masteries"}
    else {info = "Inventory & Production"}

    let invo = [
        {txt:"Current Max Inventory :<br>(found in [My Inventory])",val:userI.inventoryMax,ref:"inventory"},
        {txt:"Resource Saver Perk :<br>(found in [Workshop])",val:userI.resSaver,ref:"perk"},
        {txt:"Fruits daily Production :<br>(found in [Orchard])",val:userI.fruitsProd,ref:"fruits"},
        {txt:"Antlers daily Production :<br>(found in [Raptor Pen])",val:userI.antlersProd,ref:"antlers"},
        ]

    let pop2 = getDialogTopFrame()
    let cont = addEle({dad:pop2,setClass:"contCol",width:"fit-content",border:"teal solid 2px",radius:"10px",})

        let subC = addEle({dad:cont,setClass:"contRow",backC:"rgb(45, 88, 128)",justifyC:"space-around",
        borderB:"teal solid 2px",radiusTL:"7px",radiusTR:"7px",alignItems:"center",padding:"5px"})
            addEle({dad:subC,text:info,margin:"10px"})
            addEle({dad:subC,setClass:"btn",text:"Save",margin:"0 20px 0 15px",setFunc:(e)=>{updateInvProdMM(e,info)}})
            addEle({dad:subC,setClass:"btn",text:addEmo("❌","emoji red cross"),margin:"0 0 5px 0",setFunc:()=>{
                let ev = new Event("change") ; getID("detailsCheck").dispatchEvent(ev)
                pop2.remove()
            }})

        let frm = addEle({dad:cont,setClass:"contCol",marginB:"10px"})
        let len = 200
        let cpt = 0
        if(info === "Inventory & Production"){
            invo.forEach(inv=>{
                subC = addEle({dad:frm,setClass:"contRow",marginT:"10px",alignItems:"center"})
                    addEle({dad:subC,text:inv.txt,margin:"0 5px",minWidth:len+"px",textA:"right",marginR:"5px"})
                    addEle({dad:subC,what:"input",isInput:true,numInput:true,width:"70px",textA:"center",
                    setVal:inv.val,setID:inv.ref+":"+cpt,setFunc:(e)=>{
                        let disp = getID(e.srcElement.id+"G") 
                        if(testNum(e.srcElement.value)){
                            disp.innerHTML = addEmo("✅","emoji green OK sign")
                            reviewProductionChg()
                        } else {disp.innerHTML = addEmo("⛔","emoji prohibited sign")}
                        setTimeout(()=>{disp.innerHTML = ""},1000)
                        }})
                    addEle({dad:subC,minWidth:"30px",margin:"0 5px",setID:inv.ref+":"+cpt+"G"})
                    
                cpt++
            })

            addEle({dad:frm,text:"Owned / Used Artifacts perks",textA:"center",border:"teal solid 2px",marginT:"10px",
            backC:"rgb(45, 88, 128)"})
            subC = addEle({dad:frm,setClass:"contRow",marginT:"10px",alignItems:"center"})
                addEle({dad:subC,what:"img",imgFullSrc:srcImgs+"615.png",imgSize:20,margin:"0 20px",imgAlt:"Spring Bangle artifact icon"})
                addEle({dad:subC,text:spanText("yellow","Tree Shaker")+" (T170)",margin:"0 5px",minWidth:"160px"})
                addEle({dad:subC,what:"checkbox",isInput:true,setID:"toggleArti1",setClass:"toggle-checkbox"
                ,setFunc:reviewProductionChg})
                addEle({dad:subC,what:"label",setFor:"toggleArti1",setClass:"toggle-label"})

            subC = addEle({dad:frm,setClass:"contRow",marginT:"10px",alignItems:"center",borderB:"teal solid 2px",paddingB:"10px"})
                addEle({dad:subC,what:"img",imgFullSrc:srcImgs+"3320.png",imgSize:20,margin:"0 20px",imgAlt:"Serpent of Trym artifact icon"})
                addEle({dad:subC,text:spanText("yellow","Antler Snare")+" (T160)",margin:"0 5px",minWidth:"160px"})
                addEle({dad:subC,what:"checkbox",isInput:true,setID:"toggleArti2",setClass:"toggle-checkbox"
                ,setFunc:reviewProductionChg})
                addEle({dad:subC,what:"label",setFor:"toggleArti2",setClass:"toggle-label"})
            
            if(userI.fruitsArte){getID("toggleArti1").checked=true}
            if(userI.antlersArte){getID("toggleArti2").checked=true}

            subC = addEle({dad:frm,setClass:"contCol",margin:"10px 0",justifyC:"center"})
            let subC1 = addEle({dad:frm,setClass:"contRow"})
                    addEle({dad:subC1,text:"Fruits total production :",textA:"right",minWidth:"220px"})
                    addEle({dad:subC1,setID:"dispTotFr",text:userI.fruitsTot,marginL:"5px"})

                subC1 = addEle({dad:frm,setClass:"contRow"})
                    addEle({dad:subC1,text:"Baby Nets total production :",textA:"right",minWidth:"220px"})
                    addEle({dad:subC1,setID:"dispTotNe",text:userI.netsTot,marginL:"5px"})
        } else {
            len = 100
            userI.mms.forEach(mm=>{
                subC = addEle({dad:frm,setClass:"contRow",marginT:"10px",alignItems:"center"})
                    addEle({dad:subC,text:mm.label+" :",margin:"0 5px",minWidth:len+"px",textA:"right",paddingR:"30px"})
                    addEle({dad:subC,what:"input",isInput:true,numInput:true,width:"80px",textA:"center",
                    setVal:mm.progress,setID:"mm:"+cpt,setFunc:(e)=>{
                        let disp = getID(e.srcElement.id+"G") 
                        if(testNum(e.srcElement.value)){
                            disp.innerHTML = addEmo("✅","emoji green OK sign")
                        } else {disp.innerHTML = addEmo("⛔","emoji prohibited sign")}
                        setTimeout(()=>{disp.innerHTML = ""},1000)
                        }})
                    addEle({dad:subC,minWidth:"25px",minHeight:"25px",margin:"0 5px",setID:"mm:"+cpt+"G"})
                cpt++
            })
        }

    pop2.showModal()

}

function reviewProductionChg(){
    let perk = Number(getID("perk:1").value)
    let fruitsP = Number(getID("fruits:2").value)

    if(perk > 45){perk = 45 ; getID("perk:1").value = perk}
    if(fruitsP > 7800){fruitsP = 7800 ; getID("fruits:2").value = fruitsP}

    let calc = calcProds(
        Number(getID("inventory:0").value),
        Number(getID("perk:1").value),        
        Number(getID("fruits:2").value),
        Number(getID("antlers:3").value),
        getID("toggleArti1").checked,
        getID("toggleArti2").checked
    )
 
    getID("dispTotFr").innerHTML = calc.prod1.toLocaleString()
    getID("dispTotNe").innerHTML = calc.prod2.toLocaleString()
}

function calcProds(invo=200,saverPerk=45,fruits=7800,antlers=0,arti1=false,arti2=false,fruitsCap=7800){
    fruits = fruits > fruitsCap ? fruitsCap : fruits
    let noon = 0
    let night = 0
    let Obj = {prod1:0,prod2:0}
    let perk = 1+(saverPerk/100)

    if(arti1){noon = Math.floor(fruits*.1) > invo ? invo : Math.floor(fruits*.1)}
    night = fruits > invo ? invo : fruits
    Obj.prod1 = noon + night

    noon = 0
    if(arti2){noon = Math.floor(antlers*.1) > invo ? invo : Math.floor(antlers*.1)}
    night = antlers > invo ? invo : antlers
    Obj.prod2 = Math.floor((noon + night)*perk)

    return Obj
}

function updateInvProdMM(e,info){
    let cpt = 0
    if(info === "Inventory & Production"){
        let calc = calcProds(
            Number(getID("inventory:0").value),
            Number(getID("perk:1").value),        
            Number(getID("fruits:2").value),
            Number(getID("antlers:3").value),
            getID("toggleArti1").checked,
            getID("toggleArti2").checked
        )

        let txt = "inventory:0" // perk
        getID(txt+"G").innerHTML = ""
        if(testNum(getID(txt).value)){
            if(userI.inventoryMax !== Number(getID(txt).value)){
                getID(txt+"G").innerHTML = addEmo("✅","emoji green OK sign")
                cpt++
                userI.inventoryMax = Number(getID(txt).value)
            }
        } else {getID(txt+"G").innerHTML = addEmo("⛔","emoji prohibited sign")}
    
        txt = "perk:1"
        getID(txt+"G").innerHTML = ""
        if(testNum(getID(txt).value)){
            if(userI.resSaver !== Number(getID(txt).value)){
                getID(txt+"G").innerHTML = addEmo("✅","emoji green OK sign")
                cpt++
                userI.resSaver = Number(getID(txt).value)
                userI.resCraft = 1+(userI.resSaver/100)
            }            
        } else {getID(txt+"G").innerHTML = addEmo("⛔","emoji prohibited sign")}
    
        txt = "fruits:2"
        getID(txt+"G").innerHTML = ""
        if(testNum(getID(txt).value)){
            if(userI.fruitsProd !== Number(getID(txt).value)){
                getID(txt+"G").innerHTML = addEmo("✅","emoji green OK sign")
                cpt++
                userI.fruitsProd = Number(getID(txt).value)
            }            
        } else {getID(txt+"G").innerHTML = addEmo("⛔","emoji prohibited sign")}
        if(calc.prod1>userI.fruitsTot){
            userI.fruitsTot = calc.prod1
        }

        txt = "antlers:3"
        getID(txt+"G").innerHTML = ""
        if(testNum(getID(txt).value)){
            if(userI.antlersProd !== Number(getID(txt).value)){
                getID(txt+"G").innerHTML = addEmo("✅","emoji green OK sign")
                cpt++
                userI.antlersProd = Number(getID(txt).value)
                if(calc.prod2>0){
                    userI.netsTot = calc.prod2
                }
            }            
        } else {getID(txt+"G").innerHTML = addEmo("⛔","emoji prohibited sign")}
        if(calc.prod2>userI.netsTot){
            console.log("nets tot "+userI.netsTot + " > " + calc.prod2)
            userI.netsTot = calc.prod2
        }


        if(getID("toggleArti1").checked !== userI.fruitsArte){
            cpt++
            userI.fruitsArte = getID("toggleArti1").checked
        }

        if(getID("toggleArti2").checked !== userI.antlersArte){
            cpt++
            userI.antlersArte = getID("toggleArti2").checked
        }

    } else {

        for(let i=0;i<userI.mms.length;i++){

            let txt = "mm:"+i
            getID(txt+"G").innerHTML = ""
            if(testNum(getID(txt).value)){
                if(userI.mms[i].progress !== Number(getID(txt).value)){
                    getID(txt+"G").innerHTML = addEmo("✅","emoji green OK sign")
                    cpt++
                    userI.mms[i].progress = Number(getID(txt).value)
                }            
            } else {getID(txt+"G").innerHTML = addEmo("⛔","emoji prohibited sign")}


        }

    }

    savUserI()

 e.srcElement.innerHTML = "Saved ["+cpt+"]"
}


function setDeleteFrame(){
    let pop = getDialogTopFrame()
    let cont = addEle({dad:pop,setClass:"contCol",width:"fit-content"})

        let subC = addEle({dad:cont,setClass:"contRow",marginT:"10px 0",justifyC:"flex-end"})
        addEle({dad:subC,setClass:"btn",text:addEmo("❌","emoji red cross"),setFunc:()=>{
            getID("settingsSelect").selectedIndex = 0 ; 
            pop.remove()
            lockScroll(false)
        }})

        let txt = addEmo("⚠️","emoji exclamation mark in yellow triangle")+
        "<br>Delete User Settings<br>"+addEmo("⚠️","emoji exclamation mark in yellow triangle")

        addEle({dad:cont,setClass:"btn",padding:"10px",text:txt,margin:"40px",
        minWidth:"200px",fontS:"26px",setFunc:()=>{
            let key = "farmRPGCustomConvertingV2"
            localStorage.removeItem(key)
            location.reload()
        }})

        pop.showModal()
        lockScroll()  
}


function setTools(){
    let workC = getID("toolsFr")
    cleanParent(workC)
    let arr = userI.currentSet === "Basic" ? rateB : userI.rateU
    let cpt = 0

    let subC = addEle({dad:workC,setClass:"contRow"})
        addEle({dad:subC,setClass:"btn",text:"Reset All",marginR:"20px",minWidth:"140px",setFunc:setTools})
        addEle({dad:subC,setClass:"btn",text:"Show all tools",minWidth:"140px",setFunc:()=>{
            let arr = userI.currentSet === "Basic" ? rateB : userI.rateU
            arr.forEach(x=>x.display = true)
            if(userI.currentSet ==="Basic"){
                let arr = []
                rateB.forEach(r=>{arr.push(r.display)})
                userI.basicDisplays = arr
            }
            savUserI()
            setTools()
        }})

    let tbC = addEle({dad:workC})
    let tb = addEle({dad:tbC,what:"table"})
    let tr = addEle({dad:tb,what:"tr"})
    let itm = undefined
    for(let i=0;i<arr.length;i++){
        itm = arr.filter(x=>x.ind===i)[0]
        if(itm.display){
            if(cpt % userI.toolPerLine ===0){tr = addEle({dad:tb,what:"tr"})}
            let tc = addEle({dad:tr,what:"td"})
            buildTool(tc,itm,itm.ind)
            cpt++
        }
    }
    if(arr.length===0){
        txt = `
        Your Custom rates list is currently empty ...`+addEmo("😮","face with open mouth")+`<br>
        Add a custom converting rate by going to :<br> - User Settings<br>
        - Rates / Ratios <br> - toggle from Basic Rates to Custom Rates<br>- ... where the [ ADD ] button is found.
        `
        addEle({dad:workC,border:yellow+" dashed 2px",radius:"10px",text:txt,padding:"10px",
        margin:"20px",width:"fit-content",maxWidth:"320px"})
    }
}


function buildTool(dad,itm,idx){
    let tr = undefined
    let tc = undefined
    let txt = undefined

    let tbC = addEle({dad:dad,setClass:"contCol",border:yellowL+" solid 2px",radius:"5px",padding:"5px",margin:"5px"})
    let tb = addEle({dad:tbC,what:"table"})
    
        tr = addEle({dad:tb,what:"tr"})
            tc = addEle({dad:tr,what:"td",border:"solid teal 2px",colSpan:2})
            let inC = addEle({dad:tc,setClass:"contRow",alignItems:"center",justifyC:"space-around"})//
                let inC2 = addEle({dad:inC,setClass:"contRow",alignItems:"center"})
                    txt = spanText("","👀",14,true,"","hideE:"+idx,"eyes crossed with red line",true)+" Hide this tool"
                    addEle({dad:inC2,setClass:"btn",text:txt,setID:"hide:"+idx,height:"fit-content",setFunc:(e)=>{
                        let itm = getCurrItem(e.srcElement.id)
                        itm.display = false
                        if(userI.currentSet ==="Basic"){
                            let arr = []
                            rateB.forEach(r=>{arr.push(r.display)})
                            userI.basicDisplays = arr
                        }
                        savUserI()
                        setTools()
                    }})
                    let srcA = userI.currentSet === "Basic" ? rateB : userI.rateU
                    addEle({dad:inC2,text:addEmo("👀","eyes looking to the right","",true)+srcA.filter(x=>x.display).length+
                    "/"+srcA.length,marginL:"-5px"})


            addEle({dad:inC,setClass:"btn",text:"Reset",setID:"reset:"+idx,height:"fit-content",setFunc:(e)=>{
                let idx = e.srcElement.id.split(":")[1]
                getID("order:"+idx).value = 0
                if(userI.displayOptions.customerMB){getID("mbs:"+idx).value = 0}
                if(userI.displayOptions.customerName){getID("farmer:"+idx).value = "Farmer X"}
                getID("orderG:"+idx).innerHTML = ""
                toolCalc(e.srcElement.id,false)
            }})

            let ttC = addEle({dad:inC,setClass:"tooltip-container"})
                let ham = addEle({dad:ttC,setClass:"hamburger-button",setID:"hamBtn:"+idx,margin:"0 5px",setFunc:multiOfunc})
                    addEle({dad:ham,setClass:"line1",setFunc:multiOfunc})
                    addEle({dad:ham,setClass:"line2",setFunc:multiOfunc})
                    addEle({dad:ham,setClass:"line3",setFunc:multiOfunc})
                addEle({dad:ttC,setClass:"tooltip-text",text:"Multi<br>Orders"})

        tr = addEle({dad:tb,what:"tr"})
            tc = addEle({dad:tr,what:"td",border:"solid teal 2px",colSpan:2})
                buildRate(itm,tc,idx,"",0)

    if(userI.displayOptions.advertiseEstimate){
        tr = addEle({dad:tb,what:"tr"})
            tc = addEle({dad:tr,what:"td",border:"solid teal 2px",colSpan:2})

            let cr = addEle({dad:tc,setClass:"contRow",justifyC:"space-around",padding:"2px"}) 
                inC = addEle({dad:cr,setClass:"contRow"})
                  let ttC = addEle({dad:inC,setClass:"tooltip-container",alignItems:"center"})
  
                    addEle({dad:ttC,text:"Advertise",marginR:"5px",padding:"5px 8px",setID:"advT:"+idx})

                    addEle({dad:ttC,what:"checkbox",isInput:true,accentCol:green,setName:"advertise",setClass:"toggle-checkbox",
                    setID:"adv:"+idx,setFunc:(e)=>{itm.advertising = e.srcElement.checked ? true : false ; advertising()}})
                    addEle({dad:ttC,what:"label",setFor:"adv:"+idx,setClass:"toggle-label",setID:"advL:"+idx})
                    if(itm.advertising){getID("adv:"+idx).checked=true ; let ev = new Event("change") ; getID("adv:"+idx).dispatchEvent(ev) }
                  addEle({dad:ttC,setClass:"tooltip-text",text:"Advertise in Chat"})

                inC = addEle({dad:cr,setClass:"contRow"})
                  ttC = addEle({dad:inC,setClass:"tooltip-container",alignItems:"center"})

                    addEle({dad:ttC,text:"Estimate Max",marginR:"5px",padding:"5px 8px",setID:"ECT:"+idx})

                    txt = outputs.filter(it=>it.type===itm.type)[0]
                    let subC = addEle({dad:ttC,setClass:"btn",padding:"0",display:"flex",flDir:"row",
                    alignItems:"center",setID:"convertProBtn:"+idx,setFunc:(e)=>{convertProject(e)}})
                        addEle({dad:subC,what:"img",imgFullSrc:srcImgs+txt.img2,imgSize:20,
                        setID:"convertProImg1:"+idx,imgAlt:txt.chat2})
                        addEle({dad:subC,text:"?",margin:"0 5px",setID:"convertProTxt:"+idx})
                        addEle({dad:subC,what:"img",imgFullSrc:srcImgs+txt.img1,imgSize:20,
                        setID:"convertProImg2:"+idx,imgAlt:txt.chat1})
                  addEle({dad:ttC,setClass:"tooltip-text",text:"Estimate conversion"})
    }

    if(userI.displayOptions.customerName){
        tr = addEle({dad:tb,what:"tr"})
        tc = addEle({dad:tr,what:"td",border:"solid teal 2px"})
            inC = addEle({dad:tc,setClass:"contRow",alignItems:"center",justifyC:"flex-end"})        
            addEle({dad:inC,text:"Customer Name",textA:"center",marginL:"25px"})

            let ttC = addEle({dad:inC,setClass:"tooltip-container"})
                addEle({dad:ttC,setClass:"btn",text:"Ping",fontS:"11px",padding:"1px",margin:"3px 10px",
                setID:"ping:"+idx,marginL:"15px",setFunc:(e)=>{
                    let idx = e.srcElement.id.split(":")[1]
                    txt = getID("farmer:"+idx).value
                    txt = txt.replace("@","")
                    txt = txt.replace(":","")
                    txt = "@"+txt+":"
                    navigator.clipboard.writeText(txt)
                    getID("farmerG:"+idx).innerHTML = addEmo("✅","emoji green OK sign")
                    setTimeout(() => {getID("farmerG:"+idx).innerHTML = ""}, 2000);
                }})
                addEle({dad:ttC,setClass:"tooltip-text",text:"Copy Name"})

            addEle({dad:inC,setID:"info:"+idx})

        tc = addEle({dad:tr,what:"td",border:"solid teal 2px"})
            inC = addEle({dad:tc,setClass:"contRow",justifyC:"center"})
            addEle({dad:inC,setID:"farmerG:"+idx,minWidth:"25px"})
            addEle({dad:inC,what:"input",isInput:true,width:"100px",textA:"center",setID:"farmer:"+idx,
            setVal:"Farmer X"})
    }

    if(userI.displayOptions.customerMB){
        tr = addEle({dad:tb,what:"tr"})
            tc = addEle({dad:tr,what:"td",border:"solid teal 2px"})
        inC = addEle({dad:tc,setClass:"contRow",justifyC:"flex-end"})
            addEle({dad:inC,text:"Customer MB Size",textA:"center"})
            let txt = "https://farmrpg.com/img/mailboxes/mailbox14g.png"
            addEle({dad:inC,what:"img",imgFullSrc:txt,imgSize:24,margin:"0 10px"})
          tc = addEle({dad:tr,what:"td",border:"solid teal 2px"})
            inC = addEle({dad:tc,setClass:"contRow",justifyC:"center"})
            addEle({dad:inC,setID:"mbsG:"+idx,minWidth:"25px"})

            addEle({dad:inC,what:"input",isInput:true,numInput:true,width:"100px",
            textA:"center",setID:"mbs:"+idx,setVal:0,setFunc:(e)=>{
                let idx = e.srcElement.id.split(":")[1] ; let dispG = getID("mbsG:"+idx)
                if(testNum(e.srcElement.value,true))
                     {dispG.innerHTML = addEmo("✅","emoji green OK sign")}
                else {dispG.innerHTML = addEmo("⛔","emoji prohibited sign")}
                toolCalc(e.srcElement.id,false)
            }})
            txt = "⛔ Calculations stopped, only<br>allowed "+spanText("yellow","Numbers")+" from 0 to 9"
            setWarnTip(getID("mbs:"+idx),"mbWarn:"+idx,txt,-50,-10)
    }

        tr = addEle({dad:tb,what:"tr"})
            tc = addEle({dad:tr,what:"td",border:"solid teal 2px"})
                inC = addEle({dad:tc,setClass:"contRow",justifyC:"center",alignItems:"center"})            
                    addEle({dad:inC,text:"Order Amount",textA:"center",minHeight:"30px",
                    display:"flex",alignItems:"center"})
                    if(userI.memoType === "manual" && userI.displayOptions.memos){
                        inC.style.justifyContent = "flex-end"
                        addEle({dad:inC,setClass:"btn",text:"Memo",fontS:"11px",padding:"1px 2px",
                        setID:"manualM:"+idx,marginL:"20px",setFunc:(e)=>{addSelectMemo(e.srcElement.id)}})
                    }
            tc = addEle({dad:tr,what:"td",border:"solid teal 2px"})
                inC = addEle({dad:tc,setClass:"contRow",justifyC:"center"})
                    addEle({dad:inC,setID:"orderG:"+idx,minWidth:"25px"})
                    addEle({dad:inC,what:"input",numInput:true,isInput:true,width:"100px",textA:"center",
                    setID:"order:"+idx,setVal:0,setFunc:(e)=>{
                        let idx = e.srcElement.id.split(":")[1] ; let dispG = getID("orderG:"+idx)
                        if(testNum(e.srcElement.value))
                             {dispG.innerHTML = addEmo("✅","emoji green OK sign")} 
                        else {dispG.innerHTML = addEmo("⛔","emoji prohibited sign")}
                        toolCalc(e.srcElement.id,true)
                    }})
                    getID("order:"+idx).addEventListener('keydown', function(event) 
                        {if (event.key === 'Enter' && userI.memoType ==="manual" ) 
                            {getID("manualM:"+idx).click()}});
                    txt = "⛔ Calculations stopped, only<br>allowed "+spanText("yellow","Numbers")+
                    " from 0 to 9<br>and order > zero"
                    setWarnTip(getID("order:"+idx),"orderWarn:"+idx,txt,-65,-10)

    if(userI.displayOptions.memos){
        tr = addEle({dad:tb,what:"tr"})
            tc = addEle({dad:tr,what:"td",border:"solid teal 2px",colSpan:2})
                inC = addEle({dad:tc,setClass:"contRow",alignItems:"center"})

                    let ttC = addEle({dad:inC,setClass:"tooltip-container"})
                        addEle({dad:ttC,setClass:"btn",text:addEmo("❌","emoji red cross","memoX:"+idx),
                        fontS:"10px",setID:"memoX:"+idx,setFunc:(e)=>{memoDel(e.srcElement.id)}})
                        addEle({dad:ttC,setClass:"tooltip-text",text:"Delete<br>Memo"})

                    addEle({dad:inC,what:"select",fontS:"12px",setID:"memoSelect:"+idx,padding:"5px",
                    backC:"teal",border:"rgb(212, 212, 74) solid 2px",radius:"5px",textC:"white",
                    minWidth:"260px",marginL:"5px",setFunc:(e)=>{
                        let sx = e.srcElement.selectedIndex 
                        if(sx!==0){
                            let dp = userI.displayOptions
                            let itm = getCurrItem(e.srcElement.id)
                            if(dp.customerName){getID("farmer:"+idx).value = itm.orderMem[sx-1].name}
                            if(dp.customerMB){getID("mbs:"+idx).value = itm.orderMem[sx-1].mbs}
                            getID("order:"+idx).value = itm.orderMem[sx-1].val
                            toolCalc(e.srcElement.id,false)
                        }
                    }})
                        txt = "Memos 0/"+userI.memoCap + " -- Select --"
                        addEle({dad:getID("memoSelect:"+idx),what:"option",text:txt})
                    addEle({dad:inC,setID:"memoG:"+idx,minWidth:"25px"})
    }

        tr = addEle({dad:tb,what:"tr"})
            tc = addEle({dad:tr,what:"td",border:"solid teal 2px",colSpan:2})
                inC = addEle({dad:tc,setClass:"contCol",margin:"5px 0",display:"flex"})
                let inC1 = addEle({dad:inC,setClass:"contRow",justifyC:"space-around",alignItems:"center"})
                    addEle({dad:inC1,text:"Craft : " + `<span id="craft:`+idx+`"> </span>`})
                    addEle({dad:inC1,text:"Lose : " + `<span id="lose:`+idx+`"> </span>`})

    if(userI.displayOptions.alternatePayouts){

            let ttC = addEle({dad:inC1,setClass:"tooltip-container"})
                addEle({dad:ttC,setClass:"btn",setID:"payoutBt:"+idx,text:"Payout : " + `<span id="payout:`+idx+`"> </span>`,
                setFunc:payOptions})
                addEle({dad:ttC,setClass:"tooltip-text",text:"Alternate<br>Split Payout"})

    } else {
                addEle({dad:inC1,text:"Payout : " + `<span id="payout:`+idx+`"> </span>`})
    }

                    getID("craft:"+idx).innerHTML = "0"
                    getID("lose:"+idx).innerHTML = "0"
                    getID("payout:"+idx).innerHTML = "0"

    if(userI.displayOptions.customerMB){
                addEle({dad:inC,text:"Detail : " + `<span id="payoutD:`+idx+`"> </span>`,marginL:"10px"})
                getID("payoutD:"+idx).innerHTML = spanText(purple,"---")
    }

    if(userI.displayOptions.usedNeeds){
        tr = addEle({dad:tb,what:"tr"})
          tc = addEle({dad:tr,what:"td",border:"solid teal 2px",colSpan:2})
            cont = addEle({dad:tc,setClass:"contCol",alignItems:"center",minHeight:"130px",justifyC:"center"})
        if(itm.label==="LN"){
            let subC = addEle({dad:cont,setClass:"contCol",alignItems:"center"})
                addEle({dad:subC,text:"Stone Needed (inventory cap "+userI.inventoryMax.toLocaleString()+") :",
                borderB:yellowL+" solid 2px",width:"fit-content"})
                txt = testNum(userI.inventoryMax) ? 
                spanText(purple,"---") : spanText(purple,"Fill User Details in User Settings")
                addEle({dad:subC,text:txt,setID:"stoneNeed:"+idx,marginL:"5px"})

            inC = addEle({dad:cont,setClass:"contRow",alignItems:"center",borderB:"teal solid 2px",
            paddingB:"5px"})
                addEle({dad:inC,text:"Inventory :",textA:"center",marginR:"10px"})
                addEle({dad:inC,text:"Iron<br>Rings",textA:"center",marginR:"10px"})
                addEle({dad:inC,setClass:"rangeSt",what:"range",isInput:true,min:0,max:100,setVal:100,width:"100px",
                setID:"ringRg:"+idx,setFunc:(e)=>{upNeedRg(e.srcElement.id)}})
                txt = testNum(userI.inventoryMax) ? "100%<br>"+userI.inventoryMax : spanText(purple,"---")
                addEle({dad:inC,setID:"ringRgLb:"+idx,text:txt,textA:"center",marginL:"10px"})

            inC = addEle({dad:cont,setClass:"contRow",alignItems:"center",padding:"5px"})
                addEle({dad:inC,text:"Inventory :",textA:"center",marginR:"10px"})
                addEle({dad:inC,text:"Stone",textA:"center",marginR:"10px"})
                addEle({dad:inC,setClass:"rangeSt",what:"range",isInput:true,min:0,max:100,setVal:100,width:"100px",
                setID:"stoneRg:"+idx,setFunc:(e)=>{upNeedRg(e.srcElement.id)}})
                txt = testNum(userI.inventoryMax) ? "100%<br>"+userI.inventoryMax : spanText(purple,"---")
                addEle({dad:inC,setID:"stoneRgLb:"+idx,text:txt,textA:"center",marginL:"10px"})
        } else {
            let subC = addEle({dad:cont,setClass:"contCol",alignItems:"center"})
                switch(itm.label){
                    case "AP" : txt = "Bottles / Iced Tea Used :" ; break
                    case "Cider" : txt = "Bottles / Oranges Used :" ; break
                    default : txt = "Bottles Used : "
                }
                addEle({dad:subC,text:txt,borderB:yellowL+" solid 2px",width:"fit-content"})
                addEle({dad:subC,text:spanText(purple,"<br>---"),setID:"bottlesNeed:"+idx,marginL:"5px"})
        }

    }

    if(userI.displayOptions.mms){
        tr = addEle({dad:tb,what:"tr"})
          tc = addEle({dad:tr,what:"td",border:"solid teal 2px",colSpan:2})
            cont = addEle({dad:tc,setClass:"contCol",alignItems:"center",padding:"5px"})
                let tgtMM = userI.mms.filter(it=>it.label===itm.label)[0].progress

                txt = testNum(tgtMM) ? (1000000-tgtMM).toLocaleString() : 
                spanText(purple,"Fill User Details in User Settings :<br>Mastery progression for "+itm.label)
                addEle({dad:cont,text:"Mastery remaining :<br>"+txt,textA:"center"})

                inC = addEle({dad:cont,setClass:"contRow",justifyC:"center",alignItems:"center",})
        
                    addEle({dad:inC,text:"Eval. reaching MM",textA:"center",})

                    txt = "(current exp ratio :"+`<span id="xpRatio:`+idx+`"></span>`+")"
                    addEle({dad:inC,text:txt,marginL:"5px"})

            let expC = addEle({dad:cont,setClass:"contCol",padding:"5px",margin:"5px",border:"teal 2px solid",
                alignItems:"center",radius:"10px"})

                inC = addEle({dad:expC,setClass:"contRow",justifyC:"center",alignItems:"center"})
                    addEle({dad:inC,text:"Use",setID:"stewBoxLb:"+idx,})
                    
                    let ttC = addEle({dad:inC,setClass:"tooltip-container"})
                        addEle({dad:ttC,what:"img",imgFullSrc:srcImgs+"mushroomstew.png",imgSize:25,margin:"0 5px",setID:"mush:"+idx})
                        addEle({dad:ttC,setClass:"tooltip-text",text:"Mushroom Stew"})

                    addEle({dad:inC,text:"(Exp Bonus)",setID:"stewBoxLb:"+idx,})

                    addEle({dad:inC,what:"checkbox",isInput:true,accentCol:green,setClass:"toggle-checkbox",
                    setID:"stewBox:"+idx,setFunc:(e)=>{eventXPradio(e.srcElement.id)}})
                    addEle({dad:inC,what:"label",setFor:"stewBox:"+idx,setClass:"toggle-label",marginL:"10px"})
        


                inC = addEle({dad:expC,setClass:"contRow",justifyC:"center",marginT:"5px"})
                    addEle({dad:inC,setClass:"contCol",justifyC:"center",text:"Event Item Mastery Bonus : ",
                    setID:"evExpLb:"+idx})

                    addEle({dad:inC,what:"select",fontS:"12px",setID:"eventSelect:"+idx,padding:"5px",
                    backC:"teal",border:"rgb(212, 212, 74) solid 2px",radius:"5px",textC:"white",
                    marginL:"5px",setFunc:(e)=>{eventXPradio(e.srcElement.id)}})
                    eventMastery.forEach(e=>{addEle({dad:getID("eventSelect:"+idx),what:"option",text:e+"%"})})

                addEle({dad:cont,textA:"left",text:spanText(purple,"---"),setID:"MMsumUp:"+idx})

            let ev = new Event("change") ; getID("eventSelect:"+idx).dispatchEvent(ev)
    }
}


function payOptions(e){
    let idx = Number(e.srcElement.id.split(":")[1])
    let val = getID("order:"+idx).value
    let itm = getCurrItem(e.srcElement.id)
    let itmO = outputs.filter(x=>x.type === itm.type)[0]

    let tb = undefined
    let tr = undefined
    let tc = undefined

    let txt = undefined

    let pop = getDialogTopFrame()
    let cont = addEle({dad:pop,setClass:"contCol",width:"fit-content",margin:"5px 10px",radius:"10px"})
        let subC = addEle({dad:cont,setClass:"contRow",justifyC:"space-between",alignItems:"center"})
            let inC = addEle({dad:subC,setClass:"contRow",fontS:"20px",borderB:"solid teal 3px",width:"fit-content"})
                addEle({dad:inC,setID:"topLbl1",textA:"center"})
                addEle({dad:inC,setID:"topLbl2",textA:"right",marginL:"5px"})
            addEle({dad:inC,what:"img",imgFullSrc:srcImgs+itmO.img2,imgSize:20,display:"none",setID:"topImg",marginL:"5px"})

            addEle({dad:subC,setClass:"btn",text:addEmo("❌","emoji red cross"),marginL:"5px",
            setFunc:()=>{ pop.remove() ; lockScroll(false) }})

        if(testNum(val)){
            getID("topLbl1").innerHTML = "Split Payout for"
            getID("topLbl2").innerHTML = itm.label
            getID("topImg").style.display = "block"

            if(itm.bonus > 0){
                let subC = addEle({dad:cont,setClass:"contRow",justifyC:"space-between",alignItems:"center",marginT:"10px"})
                    txt = "Calculate including Bonus :" + `<span style="margin-left : 5px;color : `+yellow+`;" id="calcBLb"> </span>`
                    addEle({dad:subC,display:"flex",alignItems:"center",text:txt,textA:"center"})

                    addEle({dad:subC,what:"checkbox",isInput:true,accentCol:green,setClass:"toggle-checkbox",
                    setID:"calcB:"+idx,setFunc:(e)=>{getID("calcBLb").innerHTML = e.srcElement.checked ? "Yes" : "No";calcAlts(e,true)}})
                    addEle({dad:subC,what:"label",setFor:"calcB:"+idx,setClass:"toggle-label"})
            }


        tb = addEle({dad:cont,what:"table",margin:"5px 0"})
            tr = addEle({dad:tb,what:"tr"})
                addEle({dad:tr,what:"td",textA:"center",text:"Craft :"})
                addEle({dad:tr,what:"td",textA:"center",setID:"altCraft",setClass:"tealCellBt"})

                addEle({dad:tr,what:"td",textA:"center",text:"Lose :"})
                addEle({dad:tr,what:"td",textA:"center",setID:"altLose",setClass:"tealCellBt"})

                addEle({dad:tr,what:"td",textA:"center",text:"Payout :"})
                addEle({dad:tr,what:"td",textA:"center",setID:"altPayout",setClass:"tealCellBt"})


            let subC = addEle({dad:cont,setClass:"contRow",justifyC:"center",alignItems:"center",
                borderB:"teal solid 3px",borderT:"teal solid 3px",width:"100%",padding:"5px 0"})
                addEle({dad:subC,text:"Alternate Payouts :",marginR:"20px"})
                addEle({dad:subC,setClass:"btn",text:"Trade Values",setID:"tradeV:"+idx,setFunc:(e)=>{setTradeValues(e)}})

        tb = addEle({dad:cont,what:"table",margin:"5px 0"})
            tr = addEle({dad:tb,what:"tr"})

                addEle({dad:tr,what:"td",textA:"center",text:"Payout :"})

                addEle({dad:tr,what:"td",textA:"center",text:"Craft"})
                addEle({dad:tr,what:"td",textA:"center",setID:"payCraft",setClass:"tealCellBt"})

                addEle({dad:tr,what:"td",textA:"center",text:"Balance"})
                addEle({dad:tr,what:"td",textA:"center",setID:"payBal",setClass:"tealCellBt"})
    

            subC = addEle({dad:cont,setClass:"contRow",justifyC:"center",alignItems:"center",margin:"5px 0"})
                addEle({dad:subC,what:"input",isInput:true,numInput:true,width:"100px",setID:"loseInput:"+idx,
                textA:"center",radius:"5px",setFunc:(e)=>{
                    let idx = Number(e.srcElement.id.split(":")[1])
                    let src = e.srcElement
                    let rg = getID("loseRange:"+idx)
                    let disp = getID("loseInputG")
                    let dispT = getID("loseItip")
                    if(testNum(src.value,true) && src.value!=="" && Number(src.value) >= rg.min && Number(src.value) <= rg.max){
                        disp.innerHTML = addEmo("✅","emoji green OK sign")
                        dispT.style.visibility = "hidden"
                        setTimeout(() => {disp.innerHTML =""}, 1000)

                        rg.value = Number(src.value)
                        calcAlts(e)
                    } else {
                        rg.value = 0
                        dispT.style.visibility = "visible"
                        disp.innerHTML = addEmo("⛔","emoji prohibited sign")
                    }
                    console.log("input change")
                }})
                setWarnTip(getID("loseInput:"+idx),"loseItip","here",-25,-20)
                addEle({dad:subC,minWidth:"30px",setID:"loseInputG",marginL:"5px"})

                addEle({dad:subC,setClass:"rangeSt",what:"range",isInput:true,width:"150px",setID:"loseRange:"+idx,
                setFunc:(e)=>{getID("loseInput:"+idx).value = e.srcElement.value ; calcAlts(e)}})

                addEle({dad:subC,setClass:"btn",text:"?",marginL:"10px",padding:"0 5px",setFunc:()=>{
                    infoBox(
                    `The idea is to negociate with the customer how
                    you will pay for the goods received. The amount
                    you set here can be the `+spanText("","Lose",18,false,"teal solid 2px")+` 
                    part only as you can return the `+spanText("","Craft",18,false,"teal solid 2px")+`
                    part ... or more up to full `+spanText("","Payout",18,false,yellow+" solid 2px")+`
                    (meaning you keep and pay for all received / crafted items)
                    <br><br> You will need to know about current rates 
                    in trade to change `+spanText("","Trade Values",18,false,green+" solid 2px")
                        )
                }})


            subC = addEle({dad:cont,setClass:"contRow",justifyC:"center",alignItems:"center",margin:"5px 0"})
                addEle({dad:subC,text:"Balance of "+`<span style="margin:0 5px;" id="balance"></span>`,})
                addEle({dad:subC,what:"img",imgFullSrc:srcImgs+itmO.img2,imgSize:20,marginR:"5px"})
                addEle({dad:subC,text:"estimated to"+`<span style="margin:0 5px;" id="balanceG1"></span>`,})
                addEle({dad:subC,what:"img",imgFullSrc:srcImgs+"5gold.png",imgSize:20,marginR:"5px"})

            addEle({dad:cont,marginT:"20px",text:`Pay the `+`<span  id="balanceG2"></span>`+
            `g or use any of these items :<br>(amount calculated based on their gold value)`})

        inC = addEle({dad:cont,display:"flex",justifyC:"center"})
        tb = addEle({dad:inC,what:"table",margin:"5px 0",width:"100%"})
            let arr = userI.payouts.filter(x=> x.label !== itm.label)
            for(let i=0;i<arr.length;i++){
                itmO = outputs.filter(x=>x.label===arr[i].label)[0]
                tr = addEle({dad:tb,what:"tr"})
                    tc = addEle({dad:tr,what:"td",setClass:"tealCell",display:"flex",justifyC:"center"})
                        subC = addEle({dad:tc,setClass:"contRow"})
                        addEle({dad:subC,what:"img",imgFullSrc:srcImgs+itmO.img2,imgSize:20})
                        addEle({dad:subC,text:itmO.label,setID:"tcLbl:"+i,minWidth:"100px"})
                        addEle({dad:subC,text:0,setID:"tcVal:"+i})
            }


            if(itm.bonus > 0){getID("calcB:"+idx).checked = true} 
            calcAlts(e,true)

        } else { getID("topLbl1").innerHTML = "Alternate Payouts for "+itm.label+"<br>Shown from Payout result" }

    pop.showModal() 
    lockScroll()

}

function calcAlts(e,init=false){
    let idx = Number(e.srcElement.id.split(":")[1])
    let itm = getCurrItem(e.srcElement.id)
    let payT = undefined
    let bal = undefined
    let goldV = undefined
    let loseR = getID("loseRange:"+idx)
    let loseI = getID("loseInput:"+idx)

    let ret = calcConvert(
        Number(getID("order:"+idx).value),
        Number(itm.rate.split(":")[0]),
        Number(itm.rate.split(":")[1]),
        Number(itm.bonus),itm.rounding,
        itm.type
    )

    if(getID("calcB:"+idx)){
        payT = getID("calcB:"+idx).checked ? ret.payR + ret.bonR : ret.payR
    } else {
        payT = ret.payR
    }
    
    getID("altCraft").innerHTML = ret.craft
    getID("altLose").innerHTML = (payT-ret.craft)
    getID("altPayout").innerHTML = payT

    if(init){
        loseR.min = Number(getID("altLose").innerHTML)
        loseR.max = Number(getID("altPayout").innerHTML)
        loseR.value = Number(getID("altLose").innerHTML)
        loseI.value = loseR.value
        getID("loseItip").innerHTML = "Allowed Value "+loseR.min+" ~ " + getID("altPayout").innerHTML
    }

    getID("payCraft").innerHTML = payT - loseR.value
    bal = payT -(payT - loseR.value)
    getID("payBal").innerHTML = bal
    getID("balance").innerHTML = bal

    goldV = (bal/1000) * userI.payouts.filter(x=>x.label===itm.label)[0].val
    getID("balanceG1").innerHTML = goldV.toFixed(2)
    getID("balanceG2").innerHTML = goldV.toFixed(2)

    let arr = userI.payouts.filter(x=> x.label !== itm.label)
    for(let i=0;i<arr.length;i++){getID("tcVal:"+i).innerHTML = Math.ceil((goldV / arr[i].val) * 1000)}

}


function setTradeValues(e){
    let idx = Number(e.srcElement.id.split(":")[1])
    let itm = getCurrItem(e.srcElement.id)
    let itmO = outputs.filter(x=>x.type === itm.type)[0]
    let tb = undefined
    let tr = undefined
    let tc = undefined

    let pop2 = getDialogTopFrame()
    let cont = addEle({dad:pop2,setClass:"contCol",width:"fit-content",maxWidth:"320px",
    height:"fit-content"})

        let subC = addEle({dad:cont,setClass:"contRow",padding:"0 0 5px 0",alignItems:"center",justifyC:"space-around",
        backC:"rgb(45, 88, 128)",border:"teal solid 2px",radius:"8px",minWidth:"300px"})
            let inC = addEle({dad:subC,setClass:"contRow",alignItems:"center"})
                addEle({dad:inC,text:"Any valid change <br>will be saved",textA:"center",})
                addEle({dad:inC,marginL:"10px",text:addEmo("✅","emoji green OK sign"),})

            addEle({dad:subC,setClass:"btn",text:addEmo("❌","emoji red cross","closeEmo:"+idx),setID:"close:"+idx,
            setFunc:(e)=>{calcAlts(e) ; pop2.remove()}})

        addEle({dad:cont,text:"Value of items in gold per K (1000 units)",margin:"10px 0 5px 0"})

            inC = addEle({dad:cont,display:"flex",justifyC:"center"})
            tb = addEle({dad:inC,what:"table",margin:"5px 0"})
            for(let i=0;i<userI.payouts.length;i++){
                itmO = outputs.filter(x=>x.label=== userI.payouts[i].label)[0]
                tr = addEle({dad:tb,what:"tr"})
                    tc = addEle({dad:tb,what:"td"})
                        addEle({dad:tc,what:"img",imgFullSrc:srcImgs+itmO.img2,imgSize:20})
                    tc = addEle({dad:tb,what:"td",text:itmO.label,textA:"center"})
                    tc = addEle({dad:tb,what:"td"})
                        addEle({dad:tc,what:"input",isInput:true,numInput:true,setVal:userI.payouts[i].val,
                        width:"100px",textA:"center",setID:"tradeV:"+i,setFunc:(e)=>{
                            let src = e.srcElement ; let refIdx = src.id.split(":")[1]
                            let dsp = getID(src.id.split(":")[0]+"G:"+src.id.split(":")[1])
                            if(testNum(src.value) && src.value !==""){
                                dsp.innerHTML = addEmo("✅","emoji green OK sign")
                                userI.payouts[refIdx].val = Number(Number(src.value).toFixed(2))
                                savUserI() 
                            } else {
                                dsp.innerHTML = addEmo("⛔","emoji prohibited sign")
                            }
                        }})
                    tc = addEle({dad:tb,what:"td",setID:"tradeVG:"+i,minWidth:"30px"})
            }

    pop2.showModal()

}

function setWarnTip(refEl=undefined,id=undefined,msg="message",posTop=-30,posLeft=0){
    let dad = refEl.parentElement
    dad.style.position = "relative"

    addEle({dad:dad,setID:id,what:"span",visibility:"hidden",backC:"#333",textC:"#fff",
    padding:"5px 8px",radius:"6px",fontS:"14px",position:"absolute",textA:"center",text:msg,
    top:posTop+"px",left:posLeft+"px",whiteSpace:"nowrap"})

    refEl.addEventListener("mouseover",()=>{
        if(!testNum(refEl.value,true) && getID(id).style.visibility === "hidden"){getID(id).style.visibility = "visible"}
    })
    refEl.addEventListener("mouseout",()=>{getID(id).style.visibility = "hidden"})
}

function toolCalc(id,memoAd=true){

    let idx = Number(id.split(":")[1])
    let val = getID("order:"+idx).value
    let itm = getCurrItem(id)

    if (memoAd && testNum(val) && userI.memoType === "auto"){delayMemo(id)}

    if(userI.displayOptions.customerMB){
        getID("mbWarn:"+idx).style.visibility = 
        !testNum(getID("mbs:"+idx).value,true) && id.includes("mbs") ? "visible" : "hidden"
    }

    getID("orderWarn:"+idx).style.visibility = 
    !testNum(getID("order:"+idx).value,true) && id.includes("order") ? "visible" : "hidden"

    if(testNum(val,true)){
        val = Number(val)

        let div = itm.rate.split(":")[0]
        let mul = itm.rate.split(":")[1]
        let bon = itm.bonus
        let rnd = itm.rounding
        let txt = ""

        let ret = calcConvert(val,div,mul,bon,rnd,itm.type)

        let payT = ret.payR+ret.bonR

        txt = testNum(bon) ? 
        ret.payR.toLocaleString() +"(+ "+ ret.bonR +")<br> = "+ payT.toLocaleString() 
        : ret.payR.toLocaleString()

        getID("payout:"+idx).innerHTML = txt
        getID("craft:"+idx).innerHTML = ret.craft.toLocaleString()
        getID("lose:"+idx).innerHTML = !testNum(itm.bonus) ? 
        (ret.payR - ret.craft).toLocaleString() :
        (ret.payR - ret.craft).toLocaleString() + "(+ " +ret.bonR + ")<br> = " + 
        (ret.payR - ret.craft + ret.bonR).toLocaleString()

        if(userI.displayOptions.customerMB){
            let mbs = getID("mbs:"+idx).value

            if (testNum(mbs)){
                mbs = Number(mbs)
                let rnds1 = Math.floor(payT/Number(mbs))
                let rnds2 = Math.floor(ret.payR/Number(mbs))
                let txt = payT+" ⇒ "+ rnds1 + "x " + mbs + "=" +(rnds1*mbs)+ " + " + (payT-(rnds1*mbs)) 
                if(bon>0)
                {txt += "<br>"+ ret.payR +" ⇒ "+ rnds2 + "x " + mbs + "=" +(rnds2*mbs)  + " + " + (ret.payR-(rnds2*mbs))}
                getID("payoutD:"+idx).innerHTML = txt
            } else { getID("payoutD:"+idx).innerHTML = spanText(purple,"---") }
        }

    } else {
        getID("payout:"+idx).innerHTML = 0
        getID("craft:"+idx).innerHTML = 0
        getID("lose:"+idx).innerHTML = 0 
        getID("payoutD:"+idx).innerHTML = spanText(purple,"---")
    }

upNeedRg(id)
}

function upNeedRg(id){

    if(userI.displayOptions.usedNeeds){

        let idx = Number(id.split(":")[1])
        let pct1 = undefined
        let pct2 = undefined
        let inv = undefined
        let itm = getCurrItem(id)

        if(testNum(userI.inventoryMax)){
            inv = userI.inventoryMax
            if(itm.label==="LN"){
                pct1 = Number(getID("ringRg:"+idx).value)
                getID("ringRgLb:"+idx).innerHTML = pct1 + "%<br>" + (inv * pct1 /100)
                pct2 = Number(getID("stoneRg:"+idx).value)
                getID("stoneRgLb:"+idx).innerHTML = pct2 + "%<br>" + (inv * pct2 /100)
            }
        } else {
            if(itm.label==="LN"){
                getID("ringRgLb:"+idx).innerHTML = spanText(purple,"---")
                getID("stoneRgLb:"+idx).innerHTML = spanText(purple,"---")
                getID("stoneNeed:"+idx).innerHTML = spanText(purple,"Fill User Details in User Settings")
            } else {
                getID("bottlesNeed:"+idx).innerHTML = spanText(purple,"Fill User Details in User Settings")
            }
        }

        let tgtLb = itm.label==="LN" ? getID("stoneNeed:"+idx) : getID("bottlesNeed:"+idx) 
        let tgtLbT = itm.label==="LN" ? "":"<br>"
        let val = getID("order:"+idx).value

        if(testNum(val)){
            let pr = userI.resCraft
            if(itm.label !=="LN"){
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
}


function advertising(){
    let workC = getID("advFr")
    cleanParent(workC)

    src = userI.currentSet === "Basic" ? rateB : userI.rateU

    let grp = document.getElementsByName("advertise")
    let txt = undefined
    let itmBase = undefined
    let itmRate = undefined
    let arrRaw = []
    let arrG = []
    let idx = undefined

    grp.forEach(it=>{
        if(it.checked){
            itmRate = src.filter(x=>x.ind===Number(it.id.split(":")[1]))[0]
            itmBase = outputs.filter(x=>x.type===itmRate.type)[0]
            arrRaw.push({from:itmBase.chat1,to:itmBase.chat2,rate:itmRate.rate})
        }
    })

    if(arrRaw.length>0){
        arrRaw.forEach(it=>{
            idx = arrG.findIndex(x=>x.from===it.from)
            if(idx===-1){
                arrG.push({from:it.from,text:it.from +" "+it.rate+" "+it.to+" | "})
            } 
            else {
                arrG[idx].text = arrG[idx].text.slice(0,arrG[idx].text.length-3) + " *and* " + it.rate + it.to + " | " 
            }
        })
        txt = "[Converting]"
        arrG.forEach(it=>{
            txt+=it.text
        })
        txt = txt.slice(0,txt.length-3) + " (pls Ping me amounts and wait for my call Ty)"

        let cont = addEle({dad:workC,setClass:"contCol",border:"teal 2px solid",radius:"5px",
        padding:"5px",maxWidth:"450px",margin:"10px 0 0 10px"})

    addEle({dad:cont,what:"textarea",setClass:"textArea",areaRows:6,areaCols:50,setID:"advMsg",
    marginB:"10px",fontS:"17px",border:"teal 2px dashed",setVal:txt})

        let subC = addEle({dad:cont,setClass:"contRow",alignItems:"center",width:"fit-content"})
            txt = `Copy Advertising (to paste in game chat)`
            addEle({dad:subC,setClass:"btn",text:txt,padding:"5px 10px",
            setFunc:()=>{
                navigator.clipboard.writeText(getID("advMsg").value)
                getID("info4").innerHTML = "✅"
                setTimeout(() => {getID("info4").innerHTML = ""}, 2000);
            }})
            addEle({dad:subC,marginL:"5px",textC:purple,setID:"info4"})
    }

    if(userI.currentSet === "Basic"){
        let arr = []
        rateB.forEach(r=>{arr.push(r.advertising)})
        userI.basicAdvertising = arr   
    }

    savUserI()
}


function convertProject(e){
    let cont = undefined
    let idx = e.srcElement.id.split(":")[1]
    let itm = getCurrItem(e.srcElement.id)
    let itmSrc = outputs.filter(x=>x.type === itm.type)[0]

    let pop = addEle({dad:body,what:"dialog",maxWidth:"70%",radius:"20px",
    backC:"black",textC:"white",display:"flex",flDir:"column",opacity:0.9,
    alignItems:"center",border:"teal solid 3px"})

        cont = addEle({dad:pop,setClass:"contRow",alignItems:"center"})
            addEle({dad:cont,text:"Using current inventory of",marginR:"5px"})
            addEle({dad:cont,what:"img",imgFullSrc:srcImgs+itmSrc.img2,imgSize:25})
        cont = addEle({dad:pop,setClass:"contRow",alignItems:"center",
            borderB:"teal dotted 2px",paddingB:"10px"})
            addEle({dad:cont,text:"Estimate convertible quantity of",marginR:"5px"})
            addEle({dad:cont,what:"img",imgFullSrc:srcImgs+itmSrc.img1,imgSize:25})

        cont = addEle({dad:pop,setClass:"contRow",alignItems:"center",margin:"10px 0"})
            addEle({dad:cont,text:"Inventory :"})
            addEle({dad:cont,what:"input",isInput:true,numInput:true,width:"100px",textA:"center",
            margin:"0 5px",setID:"inputforEst:"+idx,setFunc:(e)=>{
                let el = e.srcElement
                if(testNum(el.value)){
                    let invItm = Number(el.value)
                    getID("projectionRes").innerHTML =convertProjectLooper(itm,itmSrc,invItm).toLocaleString()
                } else {getID("projectionRes").innerHTML = spanText(purple,"---")}
            }})
            addEle({dad:cont,what:"img",imgFullSrc:srcImgs+itmSrc.img2,imgSize:25})
        
        addEle({dad:pop,text:"you can convert about ..."})

        cont = addEle({dad:pop,setClass:"contRow",alignItems:"center",marginT:"10px"})
            addEle({dad:cont,text:"Inventory :",margin:"0 10px",setID:"projectionRes",
            text:spanText(purple,"---"),textA:"center"})
            addEle({dad:cont,what:"img",imgFullSrc:srcImgs+itmSrc.img1,imgSize:25})

        addEle({dad:pop,text:spanText(green,"*Estimate only, not 100% accurate"),
        borderT:"dotted 2px teal",marginT:"10px",paddingT:"10px"})

        addEle({dad:pop,setClass:"btn",text:"Close",width:"50%",
        marginT:"20px", setFunc:()=>{pop.remove() ; lockScroll(false)}})

    pop.showModal()
    lockScroll()
}

function convertProjectLooper(itm, itmSrc,invQt){
    let cpt = 0
    let maxCpt = 5000
    let currVal = invQt * itmSrc.loopBase
    let runLoop = true

    let div = itm.rate.split(":")[0]
    let mul = itm.rate.split(":")[1]
    let bon = itm.bonus
    let rnd = itm.rounding
    let craft = undefined
    let found = false
    let dif = undefined

    while(runLoop){
        cpt++
        let ret = calcConvert(currVal,div,mul,bon,rnd,itm.type)
        let payT = ret.payR+ret.bonR

        let currLoss = payT-ret.craft 
        if(currLoss === invQt || currLoss+1 === invQt || currLoss-1 === invQt){
            runLoop = false ; found = true
        } else {
            if(currLoss < invQt){
                dif = invQt-currLoss 
                if(dif > itmSrc.loopBase)
                    {currVal+= itmSrc.loopBase * (Math.ceil(dif/itmSrc.loopBase))} 
                    else {currVal++}
                }
            else{
                dif = currLoss - invQt
                if(dif > itmSrc.loopBase)
                    {currVal-= itmSrc.loopBase * (Math.ceil(dif/itmSrc.loopBase))} 
                    else {currVal--}
            }
        }

        if(cpt >= maxCpt){runLoop = false ; console.log("end loop cpt "+cpt+" --found:"+found)}
    }

    return currVal
}

function addSelectMemo(id){
    let idx = id.split(":")[1]
    let dispG = getID("memoG:"+idx)    
    let order = getID("order:"+idx).value
    let itm = getCurrItem(id)

    if(testNum(order)){
        order = Number(order)
        let custNm = userI.displayOptions.customerName ? getID("farmer:"+idx).value : ""
        let custMB = userI.displayOptions.customerMB ? getID("mbs:"+idx).value : ""
            custMB = testNum(custMB) ? Number(custMB) : 0

        itm.orderMem.push({dt:new Date(),val:order,name:custNm,mbs:custMB})
        if(itm.orderMem.length>userI.memoCap){itm.orderMem.splice(0,1)}

        loadMemos(id)

        dispG.innerHTML = addEmo("✅","emoji green OK sign")
    } else {dispG.innerHTML = addEmo("⛔","emoji prohibited sign")}
    setTimeout(() => {dispG.innerHTML =""}, 1000);
}

function loadMemos(id){
    let idx = id.split(":")[1]
    let itm = getCurrItem(id)
    let sel = getID("memoSelect:"+idx)
    let dp = userI.displayOptions

    cleanParent(sel)
    txt = "Memos "+itm.orderMem.length+"/"+userI.memoCap + " -- Select --"
    addEle({dad:sel,what:"option",text:txt})

    itm.orderMem.forEach(m=>{
        let hr = m.dt.getHours() < 10  ? "0"+m.dt.getHours() : m.dt.getHours()
        let mn = m.dt.getMinutes() < 10 ? "0"+m.dt.getMinutes() : m.dt.getMinutes()
        let sc = m.dt.getSeconds() < 10 ? "0"+m.dt.getSeconds() : m.dt.getSeconds()
        let txt = (m.dt.getMonth()+1)+"/"+m.dt.getDate()+" | "+hr+":"+mn+":"+sc
        if(dp.customerName){txt += m.name !=="" ? " | " + m.name : " | ???"}
        if(dp.customerMB){txt += " | " +m.mbs }
        txt += " | " + m.val.toLocaleString() 
        addEle({dad:sel,what:"option",text:txt})
    })
}

function delayMemo(id){
    let idx = id.split(":")[1]
    let order = getID("order:"+idx).value
    let itm = getCurrItem(id)

    if(itm.orderTimer===undefined && testNum(order)){
        itm.orderTimer = setTimeout(()=>{
            itm.orderTimer = undefined
            addSelectMemo(id)
        },userI.memoTimer*1000)
    }
}


function memoDel(id){
    let idx = id.split(":")[1]
    let itm = getCurrItem(id)
    let sel = getID("memoSelect:"+idx)
    let sx = sel.selectedIndex
    let disp = getID("memoG:"+idx)
    if( sx!==0){
        itm.orderMem.splice((sx-1),1)
        getID("reset:"+idx).click()

        loadMemos(id)

        disp.innerHTML = addEmo("✅","emoji green OK sign")
        setTimeout(()=>{disp.innerHTML = ""}, 1000)
    } else {
        disp.innerHTML = addEmo("⛔","emoji prohibited sign")
        setTimeout(()=>{disp.innerHTML = ""}, 1000)
    }
}


function eventXPradio(id){
    // formula Multiplicative Vs Additive
    let formulaMultiplicative = true 

    let idx = id.split(":")[1]
    let stewXP = getID("stewBox:"+idx).checked ? 1.1 : 1
    let evXP = 1 +(eventMastery[getID("eventSelect:"+idx).selectedIndex]/100)
    let ratio = formulaMultiplicative ? evXP * stewXP : evXP + stewXP -1
    ratio = Math.round(ratio * 100) / 100
    getID("xpRatio:"+idx).innerHTML = ratio.toFixed(2)
    mmEstimate(id,ratio)
}

function mmEstimate(id,ratio=undefined){

    let idx = Number(id.split(":")[1])
    let tgtLb = getID("MMsumUp:"+idx)
    let arrS = getID("toggleCurrRate").checked ? userI.rateU : rateB
    let itm = arrS.filter(x=>x.ind===idx)[0]
    if(ratio === undefined){ratio = eventXPradio(id)}  

    let bad = undefined
    let prod = undefined
    let prodLb = undefined

    if(itm.label === "LN")
         {prod = userI.netsTot ; prodLb = " baby nets)"}
    else {prod = userI.fruitsTot ; prodLb = " fruits)"}

    let mmSrc = userI.mms.filter(x=>x.label===itm.label)[0]
    let bad1 = "Fill User Details in User Settings :"

    if(!testNum(prod)){
        bad = itm.label === "LN" ? 
        bad1+"<br>Antlers daily production" :
        bad1+"<br>Fruits daily production"
    }

    if(!testNum(mmSrc.progress)){
        if(bad===undefined)
             {bad  = bad1+"<br>Mastery Progression for "+itm.label} 
        else {bad += "<br>Mastery Progression for "+itm.label}
    }

    if (bad===undefined){
        let goal = 1000000-mmSrc.progress
        goal = Math.ceil(goal/ratio/userI.resCraft)

        switch(itm.type){
            case outputs[0].type : case outputs[1].type : goal = goal * 6 ; break
            case outputs[2].type : goal = Math.ceil((goal *20)/1.45*6) ; break
            case outputs[3].type : goal = goal * 20 ; break
            case outputs[4].type : goal = goal * 25 ; break
            case outputs[5].type : goal = goal * 40 ; break
        }

        txt = `From your daily production only (` + prod.toLocaleString() + prodLb +`<br>
               with current exp ratio, it would take another ...<br>~ `
        let len = Math.ceil(goal/prod)
        txt += len <= 365 ? len + " Days to finish." : Math.floor(len/365) + " Year " + (len % 365) + " Days to finish."
        txt += "<br>OR...To convert another "+goal.toLocaleString()
        txt += itm.type === outputs[4].type ? " nets" : " fruits"
        txt += "<br>With current rate, it means another :"

        let ret = calcConvert(goal,itm.rate.split(":")[0],itm.rate.split(":")[1],itm.bonus,itm.rounding,itm.type)

        let totPay = ret.payR+ret.bonR

        txt += "<br>Pay " + totPay.toLocaleString() +" | "
        txt += "Craft " + ret.craft.toLocaleString()+" | "
        txt += "Lose " + (totPay-ret.craft).toLocaleString()
        tgtLb.innerHTML = txt

    } else {tgtLb.innerHTML = spanText(purple,bad);tgtLb.style.textAlign = "center"}

}

function multiOfunc(){

    let pop = getDialogTopFrame()
    let cont = addEle({dad:pop,setClass:"contCol",width:"fit-content",maxWidth:"340px"})

        let subC = addEle({dad:cont,setClass:"contRow",justifyC:"space-between",minWidth:"300px"})
            addEle({dad:subC,text:"Multi-orders quick window",borderB:"teal solid 3px",
            width:"fit-content",display:"flex",flDir:"column",justifyC:"flex-end",fontS:"20px"})

            addEle({dad:subC,setClass:"btn",text:addEmo("❌","emoji red cross"),margin:"0",setFunc:()=>{
                pop.remove()
                lockScroll(false)
            }})

        subC = addEle({dad:cont,setClass:"contRow",margin:"10px 0",alignItems:"center"})
            addEle({dad:subC,text:"Rate Set :",minWidth:"90px",textA:"right",paddingL:"5px"})
            addEle({dad:subC,setID:"multiSet",textC:yellow,marginL:"5px",minWidth:"60px",textA:"center"})

            addEle({dad:subC,what:"checkbox",isInput:true,setID:"toggleMultiSet",setClass:"toggle-checkbox"
            ,setFunc:(e)=>{
                let workC = getID("multiFr")
                cleanParent(workC)
                getID("multiSet").innerHTML = e.srcElement.checked ? "Custom" : "Basic" 
                let arr = getID("toggleMultiSet").checked ? userI.rateU : rateB
                arr = arr.filter(it=>it.display === true)

                let cpt=0
                arr.forEach(rt=>{
                    if(rt.ind>cpt){cpt=rt.ind}
                })

                for(let i=0;i<=cpt;i++){
                    let it = arr.filter(x=>x.ind===i)[0]
                    if(it){
                        buildRate(it,workC,it.ind,"solid teal 2px",5,"multPop","multiAmt:"+it.ind)                        
                    }
                }

                getID("toggleCurrRate").checked = getID("toggleMultiSet").checked
                let ev = new Event("change") ; getID("toggleCurrRate").dispatchEvent(ev)
    
            }})
            addEle({dad:subC,what:"label",setFor:"toggleMultiSet",setClass:"toggle-label",marginL:"10px"})
            getID("toggleMultiSet").checked = userI.currentSet === "Basic" ? false : true
        addEle({dad:cont,text:"( "+spanText("","Does not show hidden tools","16px",false,yellow+"3px dotted")+" )",
        margin:"0 0 10px 10px"})

        subC = addEle({dad:cont,setClass:"contRow",marginT:"5px",alignItems:"center"})
            addEle({dad:subC,text:"Customer Name :",marginR:"10px",minWidth:"160px",textA:"right",paddingL:"5px"})
            addEle({dad:subC,what:"input",isInput:true,width:"100px",textA:"center",setID:"multiName",
            setVal:"Farmer "+(userI.multiOrders.length+1)})

    if (userI.displayOptions.customerMB){
        subC = addEle({dad:cont,setClass:"contRow",marginT:"10px",alignItems:"center"})
            addEle({dad:subC,text:"Customer MB size :",marginR:"10px",minWidth:"160px",textA:"right",paddingL:"5px"})
            addEle({dad:subC,what:"input",isInput:true,numInput:true,width:"100px",textA:"center",setVal:0,
            setID:"multiMB",setFunc:calcMultiAmt})
            addEle({dad:subC,minWidth:"25px",setID:"multiMBG"})
    }

        subC = addEle({dad:cont,setClass:"contCol",marginT:"10px",maxHeight:"200px",overflowX:"hidden",setID:"multiFr"})

        subC = addEle({dad:cont,setClass:"contRow",marginT:"10px",alignItems:"center"})

            let ttC = addEle({dad:subC,setClass:"tooltip-container"})
                addEle({dad:ttC,setClass:"btn",text:addEmo("❌","emoji red cross","multiMemoX"),
                fontS:"10px",setID:"multiMemoX",backC:"teal",setFunc:()=>{
                    let obj = getID("multiMemoSelect")
                    if(obj.selectedIndex !== 0){
                        userI.multiOrders.splice(obj.selectedIndex-1)
                        loadSelectMulti()
                    }
                }})
                addEle({dad:ttC,setClass:"tooltip-text",text:"Delete<br>Memo",fontS:"13px"})

            addEle({dad:subC,what:"select",fontS:"12px",setID:"multiMemoSelect",padding:"5px",
            backC:"teal",border:"rgb(212, 212, 74) solid 2px",radius:"5px",textC:"white",
            minWidth:"190px",marginL:"5px",setFunc:(e)=>{
                if(getID("multiMemoSelect").selectedIndex !== 0){
                    cleanMultis()
                    let cpt = 0
                    let order = userI.multiOrders[getID("multiMemoSelect").selectedIndex-1]
                    let basicT = getID("toggleMultiSet").checked ? false : true
                    if(basicT !== order.basic){
                        getID("toggleMultiSet").checked = order.basic ? false : true
                        let ev = new Event("change") ; getID("toggleMultiSet").dispatchEvent(ev)
                    }
                    let src = getID("toggleMultiSet").checked ? userI.rateU : rateB
                    let arr = src.filter(x=>x.display)

                    getID("multiName").value = order.name
                    if(userI.displayOptions.customerMB){getID("multiMB").value = order.mbs}
                    
                    order.orders.forEach(or=>{
                        let itm = arr.filter(x=>x.serial === or.serial)[0]
                        if(itm){
                            cpt++
                            getID("multiAmt:"+itm.ind).value = or.val
                        }
                    })
                    
                    calcMultiAmt()

                    if(order.orders.length !== cpt){

                        console.log(order)
                        console.log(cpt)

                        let msg = "Since changes have been made in User Settings | rates / ratios<br>"
                        if(cpt===0){msg+="Could not find any amount to restore for this order, its empty."}
                        else {msg+="Unable to restore full order amounts, only "+
                                    cpt+"/"+order.orders.length}
                        infoBox(msg)
                    }

                }
            }})
            loadSelectMulti()
            addEle({dad:subC,setID:"multiMemoG",minWidth:"25px"})
            addEle({dad:subC,setClass:"btn",text:"Add Memo",backC:"teal",fontS:"14px",setID:"multiMemoAdd",setFunc:(e)=>{
                let grp = document.getElementsByName("multiAmts")
                let arr = []
                grp.forEach(amt=>{ if(testNum(amt.value) && amt.value !==""){ arr.push( {nb:Number(amt.id.split(":")[1]),val:amt.value} ) } })

                if(arr.length > 0){
                    if(getID("multiName").value !==""){
                        getID("multiMemoG").innerHTML = addEmo("✅","emoji green OK sign")
                        let idx = userI.multiOrders.findIndex(x=> x.name === getID("multiName").value)
                        if(idx > -1){userI.multiOrders.splice(idx,1)}
                        addMultiMemo(arr)
                    } else {getID("multiMemoG").innerHTML = addEmo("⛔","emoji green OK sign")}
                } else {getID("multiMemoG").innerHTML = addEmo("⛔","emoji green OK sign")}
                setTimeout(()=>{if(getID("multiMemoG")){getID("multiMemoG").innerHTML = ""}}, 1500);
            }})

        txt = `(multi Memos are saved / managed using the Customer Name 
        so another order with same name will replace / correct the old one)`
        addEle({dad:cont,text:txt,padding:"10px",fontS:"14px"})

        addEle({dad:cont,setClass:"btn",text:"Dispatch amounts to all tools",width:"93%",setFunc:()=>{
            setTools()
            let grp = document.getElementsByName("multiAmts")
            grp.forEach(am =>{
                if(testNum(am.value) && am.value !=="" && am.value > 0){
                    let idx = Number(am.id.split(":")[1])
                    if(userI.displayOptions.customerName){
                        getID("farmer:"+idx).value = getID("multiName").value
                    }

                    if(userI.displayOptions.customerMB && testNum(getID("multiMB").value) && 
                    getID("multiMB").value !=="" && getID("multiMB").value > 0){
                        getID("mbs:"+idx).value = getID("multiMB").value 
                    }
                    getID("order:"+idx).value = Number(am.value)
                    toolCalc("order:"+idx,false)
                }
            })

        }})

        let ev = new Event("change") ; getID("toggleMultiSet").dispatchEvent(ev)

        pop.showModal()
        lockScroll()
}

function cleanMultis(){
    getID("multiName").value ="Farmer " + (userI.multiOrders.length+1)
    if(userI.displayOptions.customerMB){getID("multiMB").value = 0}
    document.getElementsByName("multiAmts").forEach(it=>{it.value = 0})
}

function loadSelectMulti(){
    let sel = getID("multiMemoSelect")
    cleanParent(sel)
    addEle({dad:sel,what:"option",text:"multi Memos "+userI.multiOrders.length+" -- Select --"})
    if(userI.multiOrders.length > 0){
        userI.multiOrders.forEach(o=>{
            let txt = o.date + " | " + o.name
            addEle({dad:sel,what:"option",text:txt})
        })
    }

    cleanMultis()
}

function addMultiMemo(arr){
    let src = undefined

    let newMemo = {
        date : undefined,
        name : undefined,
        mbs : undefined,
        basic : undefined,
        orders : [],
    }

    let dt = new Date()
    let hr = dt.getHours() < 10  ? "0"+dt.getHours() : dt.getHours()
    let mn = dt.getMinutes() < 10 ? "0"+dt.getMinutes() : dt.getMinutes()
    let sc = dt.getSeconds() < 10 ? "0"+dt.getSeconds() : dt.getSeconds()
    newMemo.date = (dt.getMonth()+1)+"/"+dt.getDate()+" | "+hr+":"+mn+":"+sc

    newMemo.name = getID("multiName").value

    if(userI.displayOptions.customerMB){
        if(testNum(getID("multiMB").value) && getID("multiMB").value !=="")
             {newMemo.mbs = getID("multiMB").value}
        else {newMemo.mbs = 0}
    } else {
        newMemo.mbs = 0
    }

    if(getID("toggleMultiSet").checked){
        src =  userI.rateU
        newMemo.basic = false
    } else {
        src =  rateB
        newMemo.basic = true
    }

    arr.forEach(Obj=>{
        let itm = src.filter(x=>x.ind === Obj.nb)[0]
        newMemo.orders.push({serial:itm.serial,val:Obj.val})
    })

    userI.multiOrders.push(newMemo)
    loadSelectMulti()

    cleanMultis()
}



function calcMultiAmt(){
    let grp = document.getElementsByName("multiAmts")
    grp.forEach(am =>{

        let dspG = getID(am.id.split(":")[0]+"G:"+am.id.split(":")[1])

        if(testNum(am.value) && am.value !==""){
            dspG.innerHTML = addEmo("✅","emoji green OK sign")

            let idx = Number(am.id.split(":")[1])
            let itm = getCurrItem(am.id,true)
            let dspCr = getID("craftM:"+idx)
            let dspLo = getID("loseM:"+idx)
            let dspPa = getID("payoutM:"+idx)
            let dspDe = getID("detailM:"+idx)
    
            let ret = calcConvert(Number(am.value),itm.rate.split(":")[0],itm.rate.split(":")[1],itm.bonus,itm.rounding,itm.type)
            let payT = ret.payR+ret.bonR
    
            let txt = testNum(ret.bonR) ? 
            ret.payR.toLocaleString() +"(+ "+ ret.bonR +")<br> = "+ payT.toLocaleString() 
            : ret.payR.toLocaleString()
    
            dspPa.innerHTML = txt
            dspCr.innerHTML = ret.craft.toLocaleString()
            dspLo.innerHTML = !testNum(ret.bonR) ? 
            (ret.payR - ret.craft).toLocaleString() :
            (ret.payR - ret.craft).toLocaleString() + "(+ " +ret.bonR + ")<br> = " + 
            (ret.payR - ret.craft + ret.bonR).toLocaleString()
    
            if(userI.displayOptions.customerMB){
                let mbs = getID("multiMB").value
        
                if (testNum(mbs,true) && mbs !==""){
                    getID("multiMBG").innerHTML = addEmo("✅","emoji green OK sign")
                    mbs = Number(mbs)
                    if(mbs > 0){
                        let rnds1 = Math.floor(payT/mbs)
                        let rnds2 = Math.floor(ret.payR/mbs)
                        let txt = payT+" ⇒ "+ rnds1 + "x " + mbs + "=" +(rnds1*mbs)+ " + " + (payT-(rnds1*mbs)) 
                        if(ret.bonR>0)
                        {txt += "<br>"+ ret.payR +" ⇒ "+ rnds2 + "x " + mbs + "=" +(rnds2*mbs)  + " + " + (ret.payR-(rnds2*mbs))}
                        dspDe.innerHTML = txt
                    }
                } else { 
                    getID("multiMBG").innerHTML = addEmo("⛔","emoji green OK sign")
                    dspDe.innerHTML = spanText(purple,"---") 
                }
                setTimeout(()=>{getID("multiMBG").innerHTML = ""},1500)
            }



        } else { dspG.innerHTML = addEmo("⛔","emoji green OK sign") }

        setTimeout(()=>{dspG.innerHTML = ""},1500)

    })

}

loadSav()

setPage()
