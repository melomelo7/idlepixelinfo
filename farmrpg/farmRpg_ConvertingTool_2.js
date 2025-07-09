
const body = document.querySelector("body")

const srcImgs = "https://farmrpg.com/img/items/"

const outputs = [
    {label:"OJ",type:"OJ from Oranges",rate:"3:1",friend:"4.13:1",img1:"orange.png",img2:"orangejuice.png",
    chat1:"((Orange))",chat2:"((Orange Juice))",loopBase:10},

    {label:"Lemonade",type:"Lemonade from Lemons",rate:"3:1",friend:"4.13:1",img1:"8251.PNG",img2:"lemonade.png",
    chat1:"((Lemon))",chat2:"((Lemonade))",loopBase:10},

    {label:"AP",type:"AP from Lemons",rate:"30:1",friend:"57:1",img1:"8251.PNG",img2:"ap.png",
    chat1:"((Lemon))",chat2:"((Arnold Palmer))",loopBase:63},

    {label:"AP",type:"AP from Lemonades",rate:"1000:80",friend:"1000:72.5",img1:"lemonade.png",img2:"ap.png",
    chat1:"((Lemonade))",chat2:"((Arnold Palmer))",loopBase:133},

    {label:"LN",type:"LN from FN (fishing nets)",rate:"1000:70",friend:"1000:58",img1:"7748.png",img2:"lnet.png",
    chat1:"((Fishing Net))",chat2:"((Large Net))",loopBase:83},

    {label:"Cider",type:"Cider from Apples (and Oranges)",rate:"20:1",friend:"27.7:1",img1:"8297.png",img2:"8984.png",
    chat1:"((Apple))",chat2:"((Apple Cider))",loopBase:72},
]

const roundings = ["Up","Down","Closest 5"]

let eventRatio = [0,10,14,20]

const rateB =[
{ind:0,label:"OJ",type:"OJ from Oranges",rate:"3:1",bonus:0,rounding:roundings[0],orderMem:[],
orderIdx:undefined,orderTimer:undefined,advertising:false},
{ind:1,label:"Lemonade",type:"Lemonade from Lemons",rate:"3:1",bonus:0,rounding:roundings[0],orderMem:[],
orderIdx:undefined,orderTimer:undefined,advertising:false},
{ind:2,label:"AP",type:"AP from Lemons",rate:"30:1",bonus:0,rounding:roundings[0],orderMem:[],
orderIdx:undefined,orderTimer:undefined,advertising:false},
{ind:3,label:"LN",type:"LN from FN (fishing nets)",rate:"1000:70",bonus:0,rounding:roundings[0],orderMem:[],
orderIdx:undefined,orderTimer:undefined,advertising:false},
{ind:4,label:"Cider",type:"Cider from Apples (and Oranges)",rate:"20:1",bonus:0,rounding:roundings[0],orderMem:[],
orderIdx:undefined,orderTimer:undefined,advertising:false},
{ind:5,label:"AP",type:"AP from Lemonades",rate:"1000:80",bonus:0,rounding:roundings[0],orderMem:[],
orderIdx:undefined,orderTimer:undefined,advertising:false},
]

let pageVer = "2.0"

let userI = {
    pageV:"2.0",
    currentSet:"Basic",
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
    mms:[
        {label:"OJ",img:"orangejuice.png",progress:0},
        {label:"Lemonade",img:"lemonade.png",progress:0},
        {label:"LN",img:"lnet.png",progress:0},
        {label:"Cider",img:"8984.png",progress:0},
        {label:"AP",img:"ap.png",progress:0},
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

let lnk = undefined

let purple = "rgb(185, 76, 185)"//"rgb(226, 72, 226)"
let green = "rgb(18, 184, 18)"
let yellow = "rgb(184, 184, 27)"
let brown = "rgb(160, 107, 9)"
let yellowL = "rgb(212, 212, 74)"


function arrowContToggler(e,tgtId,tgtFunc=undefined){
    let el = e.srcElement ; let disp = el.innerHTML ; let tgt = getID(tgtId)
    switch(disp){
        case "🔽":tgt.style.display = "flex" ; el.innerHTML = "🔼" ; if(tgtFunc){tgtFunc()} ;break
        case "🔼":tgt.style.display = "none" ; el.innerHTML = "🔽" ; break
    }
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

function infoBox(info,txtCol="",closeFunc=undefined){
    let pop = addEle({dad:body,what:"dialog",maxWidth:"70%",radius:"20px",
    backC:"black",textC:"white",display:"flex",flDir:"column",opacity:0.9,
    alignItems:"center",border:"teal solid 3px"})
        addEle({dad:pop,text:info,textC:txtCol})
        addEle({dad:pop,setClass:"btn",text:"OK",width:"50%",
        marginT:"20px", setFunc:()=>{if(closeFunc){closeFunc()} ; pop.remove()}})
    pop.showModal()
}

function setPage(){
    let last = "Last up 2025 07/10 00:05"
    let from = userI.visuals.preset

    let contR = addEle({dad:body,setClass:"contRow",alignItems:"center",margin:"5px"})
    lnk = "https://melomelo7.github.io/idlepixelinfo/farmrpg/farmRpg_Bob1_Farm.html"
        addEle({dad:contR,setClass:"btn",text:"⇦ Go Back",backC:from.buttonBackC,setFunc:()=>{window.open(lnk,"_self")}})
        addEle({dad:contR,text:spanText(yellowL,last),margin:"10px"})

   
    addEle({dad:body,what:"select",margin:"10px",fontS:"16px",setID:"infosSelect",padding:"5px",
    backC:"darkgreen",border:"rgb(212, 212, 74) solid 2px",radius:"5px",textC:"white",
    setFunc:()=>{ if(getID("infosSelect").value !=="-- Infos --")
                { infoBox(helpArr.filter(x=>x.label===getID("infosSelect").value)[0].text,"",()=>{
                    getID("infosSelect").selectedIndex = 0 }) } }})
        addEle({dad:getID("infosSelect"),what:"option",text:"-- Infos --"})
        helpArr.forEach(itm=>{ addEle({dad:getID("infosSelect"),what:"option",text:itm.label}) })

    contR = addEle({dad:body,setClass:"contRow",margin:"0 10px",alignItems:"center"})
        addEle({dad:contR,what:"select",fontS:"16px",setID:"settingsSelect",padding:"5px",
        backC:"teal",border:"rgb(212, 212, 74) solid 2px",radius:"5px",textC:"white",
        setFunc:userSettingPick})
        settingsArr.forEach(itm=>{addEle({dad:getID("settingsSelect"),what:"option",text:itm})})
        addEle({dad:contR,text: spanText(yellowL,"⚙"),fontS:"26px",margin:"10px"})



    let settingsFr = addEle({dad:body,setClass:"contCol",padding:"5px",width:"100%"})

    let subC = addEle({dad:settingsFr,setClass:"contRow",padding:"5px",alignItems:"center"})
        addEle({dad:subC,text:"Rate Set Currently Used : ",marginL:"5px",fontS:"20px"})
        addEle({dad:subC,setID:"currentRate",margin:"0 20px 0 10px",minWidth:"60px",fontS:"20px"})
        addEle({dad:subC,what:"checkbox",isInput:true,setID:"toggleCurrRate",setClass:"toggle-checkbox",
        margin:"50px",setFunc:()=>{
            let ref = getID("toggleCurrRate") ; let disp = getID("currentRate") ; let txt = undefined
            if(ref.checked)
                {txt = "Custom" ; disp.innerHTML = spanText(yellow,txt) ; userI.currentSet = txt}
            else {txt = "Basic" ; disp.innerHTML = spanText(yellow,txt) ; userI.currentSet = txt}
            setTools()
        }})
        addEle({dad:subC,what:"label",setFor:"toggleCurrRate",setClass:"toggle-label",marginR:"10px"})


    addEle({dad:body,setClass:"contCol",padding:"5px",width:"100%",setID:"advFr"})        

    addEle({dad:body,setClass:"contCol",padding:"5px",width:"100%",setID:"toolsFr"})        
  
    if(userI.currentSet === "Custom"){getID("toggleCurrRate").checked = true}
    let ev = new Event("change") ; getID("toggleCurrRate").dispatchEvent(ev)

}

let settingsArr = ["-- User Settings --","Tools per Line & Order Memos","Rates / Ratios",
                   "User Details","Check / Save User Settings","Delete User Settings"]

let helpArr =[
    {label:"For a basic simple use of this webpage",text:
    `all you need for a converting is to :<br>
     - input the "Order Amount" (3rd white input area)<br>
     - read the "payout" that will show on next line<br>
     - and send payout to the customer<br>
     everything else is additional tools and infos 🤠<br><br>
     ** Mobile users might want to set tools per line 1<br>
     ** (under User Settings)

    `},
    {label:"Tool Sets",text:
    `The basic tool set gives the current options to allow every type of conversions at standard
     rates common to all players. If its too many tools to see at once OR if you would rather use
     a different rate than the usuals, make your own custom tool set under :
     "User Settings" > "Rates/Ratios" > "Custom Rates"<br><br>
     You can Also try changing the Tools per Line under Settings ...`},
     {label:"Use Tools : Advertise",text:
     `Click one or more "Advertise" will generate a message you can bring in game chat.<br><br>
      (Saved to clipboard, only need to paste in chat. Modify content if needed in any text tool
       or by opening a new message in your ingame message box, paste info and change it there ...
       then copy-paste again into the chat)`},
    {label:"Use Tools : Reset/all",text:
    `Use the reset buttons to clean inputs rather than reloading (F5)
    the webpage, as reloading the webpage will wipe out the Memos.
    `},
    {label:"Use Tools : Customer MB size",text:
    `optional (part of Memo), when you need to pay goods back to customer, how
     many full Mailboxes and how much remaining on the final mailbox sending
     will be displayed in the "Payout Details" IF you provided the Customer MB size.
    `},
    {label:"Use Tools : Customer Name",text:
    `optional (part of Memo), like advertising its another information that can be saved
    into the clipboard and then used with the "PING" to msg your customer in chat.
    `},
    {label:"Use Tools : Memo & Order",text:
    `Memo/History is auto-saved after 3 seconds you start typing the Order Amount ( sent by customer )<br>
     change speed of memo and max memos saved under "Settings" if you need more or if speed doesnt fit<br>
     your typing speed. Memo taken includes : Date/Hour/Order Amount/customer Name/customer MB size.<br><br>
     ** Memos are wiped out when you reload the webpage, use the reset buttons if you need clean inputs**<br><br>
     Practical use ? If you see several people asking a convertion now, you put information for every one<br>
     MB size + Name + Order (order is when the memo is saved so always type at the end)<br><br>
     Remember to use the settings if more memos are needed or if speed is not good for you.<br><br>
     ** IF auto-Memos does not respond well enough you can switch to manual memos anytime. **<br>
     ** (New update from 05/07 you might need to [Delete user settings] & reload to have this working) ** )
    `},
    {label:"Settings : Rates / Ratios",text:
    `Basic Rates :<br> Only for display cannot be modified<br><br>
     Custom Rates :<br> Set your own tools at your own rates in the display order you like.
    `},
    {label:"Settings : User Details",text:
    `Optional, used to display informations in middle and bottom part of tools.<br>
     (example stone needed for LN conversions ... or masteries related informations)
    `},
       /*
       {label:"",text:
       `
       `},
       */

    ]

function getDialogTopFrame(cxlEsc=true){
    let Obj = addEle({dad:body,what:"dialog",setClass:"myDialog"})
    if(cxlEsc){ Obj.addEventListener('keydown', (e)=>{ if (e.key === 'Escape'){e.preventDefault()} }) }
    return Obj
}


function userSettingPick(){
    if(getID("settingsSelect").value !=="-- User Settings --"){
        switch(getID("settingsSelect").value){
            case "Tools per Line & Order Memos" : setToolsMemos()
                break
            case "Rates / Ratios" : setRates()
                break
            case "User Details" : setUserDetails2()
                break
            case "Check / Save User Settings" : compareSaves()
                break
            case "Delete User Settings" : setDeleteFrame()
                break
            default : alert("Under Construction")
        }
    }
}


function setToolsMemos(){

    let pop = getDialogTopFrame()
    let cont = addEle({dad:pop,setClass:"contCol",width:"fit-content",margin:"5px 10px",radius:"10px"})

        let subC = addEle({dad:cont,setClass:"contRow",padding:"5px",border:"teal solid 2px",radius:"8px",
        alignItems:"center",justifyC:"space-around",backC:"rgb(45, 88, 128)"})
            addEle({dad:subC,text:"Tools per Line",width:"90%",textA:"center"})
            addEle({dad:subC,setClass:"btn",text:"❌",margin:"0 0 5px 0",setFunc:()=>{
                getID("settingsSelect").selectedIndex = 0 ; 
                pop.remove()
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

            addEle({dad:subC,text:"How many Memos you can keep",paddingL:"100px"})

            addEle({dad:subC,what:"select",fontS:"16px",setID:"memoCselect",padding:"5px",
            backC:"teal",border:"rgb(212, 212, 74) solid 2px",radius:"5px",textC:"white"})
            for(let i=10;i<=50;i+= 10){addEle({dad:getID("memoCselect"),what:"option",text:i})}
            getID("memoCselect").selectedIndex = userI.memoCap/10 -1

        subC = addEle({dad:cont,setClass:"contRow",padding:"5px",
        alignItems:"center",justifyC:"space-around"})

            txt = `
            Auto-Save a Memo (mb size / name / order) after `+spanText("cyan","X")+` seconds
            you started typing the order amount.<br>
            ( If the Auto-Save doesnt work well
            on your device or you prefer to
            save manualy with a button, set to 0 )
            `
            addEle({dad:subC,text:txt,marginR:"10px",textA:""})

            addEle({dad:subC,what:"select",fontS:"16px",setID:"memoSselect",padding:"5px",
            backC:"teal",border:"rgb(212, 212, 74) solid 2px",radius:"5px",textC:"white"})
            for(let i=0;i<=10;i++){addEle({dad:getID("memoSselect"),what:"option",text:i})}
            getID("memoSselect").selectedIndex = userI.memoTimer

        addEle({dad:pop,setClass:"btn",text:"Update",width:"50%",marginT:"20px", 
        setFunc:()=>{

            userI.toolPerLine = Number(getID("tplSelect").value)

            userI.memoCap = Number(getID("memoCselect").value)
            userI.memoTimer = Number(getID("memoSselect").value)
            userI.memoType = userI.memoTimer === 0 ? "manual" : "auto"
            getID("settingsSelect").selectedIndex = 0 ; 
            setTools() ;
            pop.remove()
        }})

    pop.showModal()

}

function setRates(){
    let pop = getDialogTopFrame()
    let cont = addEle({dad:pop,setClass:"contCol",width:"fit-content",margin:"5px 10px",minHeight:"450px"})
        
        let subC = addEle({dad:cont,setClass:"contRow",padding:"0 0 5px 0",alignItems:"center",justifyC:"space-around",
        backC:"rgb(45, 88, 128)",border:"teal solid 2px",radius:"8px",})
            addEle({dad:subC,padding:"10px",setID:"rateLbl",textA:"center",minWidth:"320px"})
            
            addEle({dad:subC,setClass:"btn",text:"❌",setFunc:()=>{
                getID("settingsSelect").selectedIndex = 0 ; 
                pop.remove()
            }})

        subC = addEle({dad:cont,setClass:"contRow",padding:"5px",alignItems:"center"})
            addEle({dad:subC,text:"Rate",setID:"rateCheck",margin:"0 10px",minWidth:"150px"})
            addEle({dad:subC,what:"checkbox",isInput:true,setID:"toggleRate",setClass:"toggle-checkbox",
            margin:"50px",setFunc:()=>{
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
                
                getID("rateLbl").innerHTML = "Rates / Ratios (Basic : 6 | Custom : "+userI.rateU.length+")"
            }})
            addEle({dad:subC,what:"label",setFor:"toggleRate",setClass:"toggle-label",marginR:"30px"})
            addEle({dad:subC,setClass:"btn",text:"Add new rate",visibility:"hidden",setID:"addRbtn",setFunc:addRateSetup})

            addEle({dad:cont,setClass:"contCol",setID:"dispRates",minHeight:"300px",maxHeight:"350px",overflowX:"hidden"})

        if(userI.rateU.length>0){getID("toggleRate").checked = true}
        let ev = new Event("change") ; getID("toggleRate").dispatchEvent(ev)

    pop.showModal()    
}

function dispRateSet(arr){
    let workC = getID("dispRates")
    cleanParent(workC)

    if(arr){
        for(let i=0;i<arr.length;i++){
            buildRate(arr.filter(x=>x.ind===i)[0],workC,i)

            if(getID("toggleRate").checked){
                subC = addEle({dad: getID("rateC:"+i),setClass:"contRow",alignItems:"center"})
                if(userI.rateU.length>1){
                    addEle({dad:subC,text:"🔼",setClass:"btn",padding:"0",margin:"0",fontS:"12px",
                    setID:"swap:"+i,setFunc:(e)=>{swapUD(e,"U")}})
                    addEle({dad:subC,text:"🔽",setClass:"btn",padding:"0",margin:"0",fontS:"12px",
                    setID:"swap:"+i,setFunc:(e)=>{swapUD(e,"D")}})
                }
                addEle({dad:subC,text:"❌ Delete",setClass:"btn",padding:"0 5px",marginL:"20px",fontS:"12px",
                setID:"customDel:"+i,setFunc:(e)=>{blastRate(e)}})
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
    let idx = Number(e.srcElement.id.split(":")[1])
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



function buildRate(itm,dad,idx){
    let itmO = outputs.filter(x=>x.type === itm.type)[0]
    let rateC = addEle({dad:dad,setClass:"contCol",border:"teal solid 2px",margin:"5px",padding:"3px",setID:"rateC:"+idx})
        let subC = addEle({dad:rateC,setClass:"contRow",alignItems:"center"})
            addEle({dad:subC,what:"img",imgFullSrc:srcImgs+itmO.img2,imgSize:20})
            addEle({dad:subC,text:"➜"})
            addEle({dad:subC,what:"img",imgFullSrc:srcImgs+itmO.img1,imgSize:20})
            addEle({dad:subC,text:itm.type,marginL:"10px"})
        let txt = "Rate : "+itm.rate + " | Bonus : " + itm.bonus+"% | Rounding : " +itm.rounding
        addEle({dad:rateC,text:txt})
}


function addRateSetup(){
    let pop2 = getDialogTopFrame()
    let cont = addEle({dad:pop2,setClass:"contCol",width:"fit-content",margin:"5px 10px",
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
                addEle({dad:subC,what:"input",isInput:true,textA:"center",fontS:"14px",setID:"rateApart",
                width:"60px",disabled:true,textC:"blue",setVal:0,setFunc:testCalcAmt})
                addEle({dad:subC,text:":",textA:"center",fontS:"18px",margin:"0 5px"})
                addEle({dad:subC,what:"input",isInput:true,textA:"center",fontS:"14px",setID:"rateBpart",
                width:"60px",disabled:true,textC:"blue",setVal:0,setFunc:testCalcAmt})
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
                roundings.forEach(ro=>{addEle({dad:getID("rateROSelect"),what:"option",text:ro})})
                
        subC = addEle({dad:cont,setClass:"contRow",alignItems:"center",justifyC:"space-around",
        marginB:"5px",paddingT:"5px"})
            addEle({dad:subC,text:"Test Converting ? Amount =",textA:"center",fontS:"18px"})
            addEle({dad:subC,what:"input",isInput:true,textA:"center",fontS:"14px",setID:"testAmt",
            width:"90px",setVal:0,setFunc:testCalcAmt})
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
                    })

                    let ev = new Event("change") ; getID("toggleRate").dispatchEvent(ev)

                    getID("toggleCurrRate").checked = true // userI.currentSet = "Custom" ; 
                    ev = new Event("change") ; getID("toggleCurrRate").dispatchEvent(ev)
                    setTools()

                    getID("addGood").innerHTML = "✅"
                    setTimeout(()=>{
                        if(getID("addGood")){getID("addGood").innerHTML = ""}
                    },2000)

                } else {
                    getID("addGood").innerHTML = "⛔"
                    setTimeout(()=>{
                        if(getID("addGood")){getID("addGood").innerHTML = ""}
                    },2000)
                }
            }})
            addEle({dad:subC2,setID:"addGood",minWidth:"20px"})
            addEle({dad:subC,setClass:"btn",text:"❌",minWidth:"100px",setFunc:()=>{pop2.remove()}})

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
            addEle({dad:subC,what:"img",imgFullSrc:srcImgs+itmO.img2,imgSize:20})
            addEle({dad:subC,text:"➜"})
            addEle({dad:subC,what:"img",imgFullSrc:srcImgs+itmO.img1,imgSize:20})
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

function setUserDetails2(){
    let arr = undefined
    let txt = undefined
    let pop = getDialogTopFrame()
    let topC = addEle({dad:pop,setClass:"contRow"})
    let cont = addEle({dad:topC,setClass:"contCol",width:"fit-content",margin:"5px 0 5px 10px",
        border:"teal solid 2px",radius:"10px",alignItems:"center",minWidth:"360px"})

        let subC = addEle({dad:cont,setClass:"contCol",backC:"rgb(45, 88, 128)",width:"100%",
        borderB:"teal solid 2px",radiusTL:"7px",radiusTR:"7px",alignItems:"center",justifyC:"space-around"})

        let subC0 = addEle({dad:subC,setClass:"contRow",padding:"5px",alignItems:"center",justifyC:"space-around"})
            addEle({dad:subC0,text:"",fontS:"20px",margin:"5px",setID:"userDTop"})
            addEle({dad:subC0,setClass:"btn",text:"❌",setFunc:()=>{
                getID("settingsSelect").selectedIndex = 0 ; 
                pop.remove()
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
                    top.innerHTML = "User Details (Production | "+spanText("yellow","Masteries","",false,"dotted yellow 2px")+")"
                    disp.innerHTML = "Mega Masteries"
                    arr = userI.mms
                    arr.forEach(itm=>{
                        let subC = addEle({dad:workC,setClass:"contRow"})
                            addEle({dad:subC,text:"[MM]"})
                            addEle({dad:subC,text:itm.label + " : ",minWidth:"85px",textA:"right",padding:"0 5px"})
                            addEle({dad:subC,text:itm.progress.toLocaleString(),minWidth:"80px",textA:"center"})
                            addEle({dad:subC,text:"/"+(1000000).toLocaleString()})
                    })
                } else {
                    top.innerHTML = "User Details ("+spanText("yellow","Production","",false,"dotted yellow 2px")+" | Masteries)"
                    disp.innerHTML = "Inventory & Production"
                    arr = [
                        {label:"Current Max Inventory",val:userI.inventoryMax},
                        {label:"Resource Saver Perk",val:userI.resSaver+" %"},
                        {label:"Fruits daily production",val:userI.fruitsProd},
                        {label:"Fruits total production",val:userI.fruitsTot},
                        {label:"Antlers daily production",val:userI.antlersProd},
                        {label:"Nets total production",val:userI.netsTot}
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
    let cont = addEle({dad:pop2,setClass:"contCol",width:"fit-content",margin:"5px 10px",
        border:"teal solid 2px",radius:"10px",minWidth:"340px"})

        let subC = addEle({dad:cont,setClass:"contRow",backC:"rgb(45, 88, 128)",justifyC:"space-around",
        borderB:"teal solid 2px",radiusTL:"7px",radiusTR:"7px",alignItems:"center",padding:"5px"})
            addEle({dad:subC,text:info,margin:"10px"})
            addEle({dad:subC,setClass:"btn",text:"Update",margin:"0 20px 0 15px",setFunc:(e)=>{updateInvProdMM(e,info)}})
            addEle({dad:subC,setClass:"btn",text:"❌",margin:"0 0 5px 0",setFunc:()=>{
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
                    addEle({dad:subC,what:"input",isInput:true,width:"60px",textA:"center",setVal:inv.val,setID:inv.ref+":"+cpt,
                    setFunc:(e)=>{
                        let disp = getID(e.srcElement.id+"G") 
                        if(testNum(e.srcElement.value)){
                            disp.innerHTML = "✅"
                            reviewProductionChg()
                        } else {disp.innerHTML = "⛔"}
                        setTimeout(()=>{disp.innerHTML = ""},1000)
                        }})
                    addEle({dad:subC,minWidth:"30px",margin:"0 5px",setID:inv.ref+":"+cpt+"G"})
                    
                cpt++
            })

            addEle({dad:frm,text:"Owned / Used Artifacts",textA:"center",border:"teal solid 2px",marginT:"10px",
            backC:"rgb(45, 88, 128)"})
            subC = addEle({dad:frm,setClass:"contRow",marginT:"10px",alignItems:"center"})
                addEle({dad:subC,what:"img",imgFullSrc:srcImgs+"615.png",imgSize:20,margin:"0 20px"})
                addEle({dad:subC,text:spanText("yellow","Tree Shaker")+" (T170)",margin:"0 5px",minWidth:"160px"})
                addEle({dad:subC,what:"checkbox",isInput:true,setID:"toggleArti1",setClass:"toggle-checkbox"
                ,setFunc:reviewProductionChg})
                addEle({dad:subC,what:"label",setFor:"toggleArti1",setClass:"toggle-label"})

            subC = addEle({dad:frm,setClass:"contRow",marginT:"10px",alignItems:"center",borderB:"teal solid 2px",paddingB:"10px"})
                addEle({dad:subC,what:"img",imgFullSrc:srcImgs+"3320.png",imgSize:20,margin:"0 20px"})
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
                    addEle({dad:subC,what:"input",isInput:true,width:"60px",textA:"center",setVal:mm.progress,setID:"mm:"+cpt,
                    setFunc:(e)=>{
                        let disp = getID(e.srcElement.id+"G") 
                        if(testNum(e.srcElement.value)){
                            disp.innerHTML = "✅"
                        } else {disp.innerHTML = "⛔"}
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
                getID(txt+"G").innerHTML = "✅"
                cpt++
                userI.inventoryMax = Number(getID(txt).value)
            }
        } else {getID(txt+"G").innerHTML = "⛔"}
    
        txt = "perk:1"
        getID(txt+"G").innerHTML = ""
        if(testNum(getID(txt).value)){
            if(userI.resSaver !== Number(getID(txt).value)){
                getID(txt+"G").innerHTML = "✅"
                cpt++
                userI.resSaver = Number(getID(txt).value)
            }            
        } else {getID(txt+"G").innerHTML = "⛔"}
    
        txt = "fruits:2"
        getID(txt+"G").innerHTML = ""
        if(testNum(getID(txt).value)){
            if(userI.fruitsProd !== Number(getID(txt).value)){
                getID(txt+"G").innerHTML = "✅"
                cpt++
                userI.fruitsProd = Number(getID(txt).value)
            }            
        } else {getID(txt+"G").innerHTML = "⛔"}
        if(calc.prod1>userI.fruitsTot){
            userI.fruitsTot = calc.prod1
        }

        txt = "antlers:3"
        getID(txt+"G").innerHTML = ""
        if(testNum(getID(txt).value)){
            if(userI.antlersProd !== Number(getID(txt).value)){
                getID(txt+"G").innerHTML = "✅"
                cpt++
                userI.antlersProd = Number(getID(txt).value)
                if(calc.prod2>0){
                    userI.netsTot = calc.prod2
                }
            }            
        } else {getID(txt+"G").innerHTML = "⛔"}
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
                    getID(txt+"G").innerHTML = "✅"
                    cpt++
                    userI.mms[i].progress = Number(getID(txt).value)
                }            
            } else {getID(txt+"G").innerHTML = "⛔"}


        }

    }

 e.srcElement.innerHTML = "Updates ["+cpt+"]"
}


function compareSaves(){
    let savOld = undefined
    let key = "farmRPGCustomConvertingV2"
    let mySave = localStorage.getItem(key)
    if(mySave){savOld = JSON.parse(mySave)}
    let txt = undefined

    let pop = getDialogTopFrame()
    let cont = addEle({dad:pop,setClass:"contCol",width:"fit-content",margin:"5px 10px",
        border:"teal solid 2px",radius:"10px",minWidth:"320px"}) // ,minHeight:"500px"

        let subC = addEle({dad:cont,setClass:"contRow",backC:"rgb(45, 88, 128)",padding:"-10px",
        borderB:"teal solid 2px",radiusTL:"7px",radiusTR:"7px",alignItems:"center",justifyC:"space-around"})
            addEle({dad:subC,text:"Check User Settings",fontS:"20px",marginR:"5px",width:"100%",textA:"center"})

            addEle({dad:subC,setClass:"btn",text:"Save",textA:"left",paddingL:"5px",minWidth:"70px",
            minHeight:"26px",display:"flex",alignItems:"center" ,setFunc:(e)=>{ //  User Details
                let bt = e.srcElement
                let key = "farmRPGCustomConvertingV2"
                let mySave = JSON.stringify(userI)
                localStorage.setItem(key,mySave)
                bt.innerHTML = "Save ✅"
                setTimeout(()=>{bt.innerHTML = "Save"},1000)
            }})

            addEle({dad:subC,setClass:"btn",text:"❌",setFunc:()=>{
                getID("settingsSelect").selectedIndex = 0 ; 
                pop.remove()
            }})

        subC = addEle({dad:cont,setClass:"contRow",minWidth:"95px",padding:"5px",alignItems:"center"})
            addEle({dad:subC,text: "Custom Rates",marginL:"10px"})
            addEle({dad:subC,text: spanText("lime","🔽",16),setClass:"arrowToggler",border:"teal solid 2px",
            margin:"0 10px",setFunc:(e)=>{arrowContToggler(e,"savRatesCont",compSavRates(savOld))}})
        addEle({dad:cont,setClass:"contCol",margin:"0 5px",border:"solid 3px teal",
        display:"none",setID:"savRatesCont",width:"fit-content",minWidth:"290px",minHeight:"200px",
        maxHeight:"300px",overflowX:"hidden"})

        subC = addEle({dad:cont,setClass:"contCol",padding:"5px 10px"})

            if(savOld){
                txt = savOld.currentSet === userI.currentSet ? userI.currentSet :
                savOld.currentSet + " => " + spanText(green,userI.currentSet)
            } else{txt = userI.currentSet}
            addEle({dad:subC,text:"Current Rate set : "+txt,margin:"5px 10px 0 10px"})
            
            if(savOld){
                txt = savOld.toolPerLine === userI.toolPerLine ? userI.toolPerLine.toLocaleString() :
                savOld.toolPerLine.toLocaleString() + " => " + spanText(green,userI.toolPerLine.toLocaleString())
            } else{txt = userI.toolPerLine.toLocaleString()}
            addEle({dad:subC,text:"Tools per line : "+txt,margin:"5px 10px 0 10px"})

            if(savOld){
                txt = savOld.memoCap === userI.memoCap ? userI.memoCap.toLocaleString() :
                savOld.memoCap.toLocaleString() + " => " + spanText(green,userI.memoCap.toLocaleString())
            } else{txt = userI.memoCap.toLocaleString()}
            addEle({dad:subC,text:"Memos Cap : "+txt,margin:"5px 10px 0 10px"})

            if(savOld){
                txt = savOld.memoTimer === userI.memoTimer ? userI.memoTimer.toLocaleString() :
                savOld.memoTimer.toLocaleString() + " => " + spanText(green,userI.memoTimer.toLocaleString())
            } else{txt = userI.memoCap.toLocaleString()}
            addEle({dad:subC,text:"Memos save timer : "+txt+" sec",margin:"5px 10px 0 10px"})

            if(savOld){
                txt = savOld.inventoryMax === userI.inventoryMax ? userI.inventoryMax.toLocaleString() :
                savOld.inventoryMax.toLocaleString() + " => " + spanText(green,userI.inventoryMax.toLocaleString())
            } else{txt = userI.inventoryMax.toLocaleString()}
            addEle({dad:subC,text:"max Inventory : "+txt,margin:"5px 10px 0 10px"})

            if(savOld){
                txt = savOld.resSaver === userI.resSaver ? userI.resSaver.toLocaleString() :
                savOld.resSaver.toLocaleString() + " => " + spanText(green,userI.resSaver.toLocaleString())
            } else{txt = userI.resSaver.toLocaleString()}
            addEle({dad:subC,text:"res Saver perk : "+txt+" %",margin:"5px 10px 0 10px"})

            if(savOld){
                txt = savOld.fruitsProd === userI.fruitsProd ? userI.fruitsProd.toLocaleString() :
                savOld.fruitsProd.toLocaleString() + " => " + spanText(green,userI.fruitsProd.toLocaleString())
            } else{txt = userI.fruitsProd.toLocaleString()}
            addEle({dad:subC,text:"Fruits daily production : "+txt,margin:"5px 10px 0 10px"})

            if(savOld){
                txt = savOld.antlersProd === userI.antlersProd ? userI.antlersProd.toLocaleString() :
                savOld.antlersProd.toLocaleString() + " => " + spanText(green,userI.antlersProd.toLocaleString())
            } else{txt = userI.antlersProd.toLocaleString()}
            addEle({dad:subC,text:"Antlers daily production : "+txt,margin:"5px 10px 0 10px"})

            userI.mms.forEach(mm=>{
                if(savOld){
                    txt = savOld.mms.filter(x=>x.label===mm.label)[0].progress === mm.progress ? mm.progress.toLocaleString() :
                    savOld.mms.filter(x=>x.label===mm.label)[0].progress.toLocaleString() + " => " + 
                    spanText(green,mm.progress.toLocaleString())
                } else{txt = mm.progress.toLocaleString()}
                addEle({dad:subC,text:"[MM] "+ mm.label +" : "+txt+" /"+(1000000).toLocaleString(),margin:"5px 10px 0 10px"})
            })

    pop.showModal()
}

function compSavRates(savOld){
    let workC = getID("savRatesCont")
    cleanParent(workC)

    addEle({dad:workC,setClass:"contRow",alignItems:"center",padding:"5px 0 0 5px",setID:"togRate"})

    addEle({dad:workC,setClass:"contCol",setID:"dispSavRates"})

    if(savOld){
        addEle({dad:getID("togRate"),text:"Rate",setID:"ratelbl",margin:"0 30px -5px 5px"})
        addEle({dad:getID("togRate"),what:"checkbox",isInput:true,setID:"toggleRates",setClass:"toggle-checkbox",
        margin:"50px",setFunc:()=>{
            cleanParent(getID("dispSavRates"))

            let arr = undefined
            if(getID("toggleRates").checked){
                getID("ratelbl").innerHTML = "Custom Rates : New"
                arr = userI.rateU
            } else {
                getID("ratelbl").innerHTML = "Custom Rates : Old"
                arr = savOld.rateU
            }
            let cpt = 0
            arr.forEach(rt=>{buildRate(rt,getID("dispSavRates"),cpt) ; cpt++})
        }})
        addEle({dad:getID("togRate"),what:"label",setFor:"toggleRates",setClass:"toggle-label"})
        getID("toggleRates").checked = true
        let ev = new Event("change")
        getID("toggleRates").dispatchEvent(ev)
    }
}

function setDeleteFrame(){
    let pop = getDialogTopFrame()
    let cont = addEle({dad:pop,setClass:"contCol",width:"fit-content",margin:"5px 10px"})

    let subC = addEle({dad:cont,setClass:"contCol",marginT:"40px"})
        let subC2 = addEle({dad:subC,setClass:"contRow",margin:"40px 0",alignItems:"center"})
            addEle({dad:subC2,setClass:"btn",padding:"10px",text:"⚠️<br>Delete User Settings<br>⚠️",margin:"20px 5px 20px 20px",
            minWidth:"200px",fontS:"26px",setFunc:()=>{
                let key = "farmRPGCustomConvertingV2"
                localStorage.removeItem(key)
                getID("deleteG").innerHTML = "✅"
                setTimeout(()=>{getID("deleteG").innerHTML = ""},1000)
            }})
            addEle({dad:subC2,setID:"deleteG",minWidth:"25px"})

            addEle({dad:subC2,setClass:"btn",text:"❌",setFunc:()=>{
                getID("settingsSelect").selectedIndex = 0 ; 
                pop.remove()
            }})

        pop.showModal()    
}

loadSav()
setPage()

/*
txt = `Dear Users,<br><br>I plan to change `+spanText(green,"[ Infos ]")+` display type...<br><br>
Currently `+spanText(green,"Type1 (Top Version)")+`<br>-- Would Change for --<br>`+spanText("yellow","*New")+` `+spanText(green,"Type2 (Bottom Version)")+`
<br><br>kindly `+spanText("crimson","[DM]")+` me ingame your preference ?<br><br>@ Apple Lord<br><br>`+spanText("","🤠",16)
infoBox(txt)
*/