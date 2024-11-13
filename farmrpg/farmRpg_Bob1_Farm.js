let cont = undefined
let subC1 = undefined
let subC2 = undefined
let txt = undefined
let tb = undefined
let tr = undefined
let tc = undefined
let userN = "Bob1"
let inventoryS = 5000
let mailboxS = 600
let maxL = Math.floor(inventoryS/mailboxS) * mailboxS
let shopV = "3.0"
let itemPool = []

let lastUp = "11/12 16:10 🇯🇵"

const body = document.querySelector("body")

let welcome = spanText("lime",`
🐮🥚 Welcome to `+userN+`'s Farm : 🐷<br>
🐖🐖Busy busy lil Piggy !🐣🐖🐖
`
,40)

let intro = spanText("",
`
Formerly a Strong Fisherman, my starting goal was to take down<br>
all the fishing-MMs for the tower needs (floors 200+) ...<br><br>
Now that this is over, I can turn the received nets to others<br>
through my activity of converting.<br><br>
The shop is evolving as I approach Tower 200 ... Stay tuned ... 👻
`,18)

let convTxt = `
Shop `+spanText("yellow","V1.0")+` : 🐟Nets only, Ratio 1000⏩70<br>
Shop `+spanText("yellow","V2.0")+` : 🐟Nets only, Ratio 1000⏩75<br>
Shop `+spanText("yellow","V2.1")+` : 🐟Nets Ratio 1000⏩75, fruits to 
ratios 3.5⏩1 (OR 35⏩1) & 25⏩1<br>
Shop `+spanText("yellow","V2.2")+` : 🐟Nets Ratio 1000⏩75, fruits to 
ratios 3⏩1 (OR 30⏩1) & 20⏩1<br>
Shop `+spanText("yellow","V3.0")+` : ratios of V2.2 with `+spanText("cyan","Combo System & NOLA")+`
<br><br>
`+spanText("yellow",`
BIG orders, Inventory-Wise ( way over `+spanText("cyan",inventoryS)+` ) :<br>
🟡 process will be divided into rounds of 8mb = 4800 units<br>
🟢 short pause 🟢 payout 🟢 🪨Stone refill(for me)<br>
🟡 and resume next round.
`)


let comboTxt1 = spanText("Yellow",`Combo System !<br>
Test drive starting !<br>
(content might change as it goes...)`,20)+`<br><br>
In short a better payout for your goodies.<br>
How ? You bring not 1 type of items but minimum 2<br>
Examples :<br>
- Nets + Oranges = Combo 1<br>
- Nets + Oranges + Lemons = Combo 2<br>
- Nets + Oranges + Lemons + Apples = Combo 3<br>
`

let comboIc = spanText("cyan","🅒",20)  //"🪙"

let comboTxt2 = spanText("Yellow",`
Important:<br><br>
The `+spanText("lime","(M)")+`aster `+spanText("lime","(I)")+`
tem on the order list you send<br> me is the item with biggest amount.<br><br>
Based on the `+spanText("lime","MI")+` all `+spanText("cyan","OTHERS")+` items with at least
<br>50% amount of `+spanText("lime","MI")+` will add 1 combo. ` +comboIc
,16)

let typical = spanText("yellow","Easy to work with orders are as such :")+`
<br>
- `+spanText("lime","N")+`ets : amount (or 0)<br>
- `+spanText("lime","O")+`ranges : amount (or 0)<br>
- `+spanText("lime","L")+`emons : amount (or 0) AP (or Limo, L...)<br>
(**no info you get AP**)<br>
- `+spanText("lime","A")+`pples : amount (or 0)<br><br>
`+spanText("yellow","example :")+`<br>
`+spanText("lime","N")+`ets 0<br>
`+spanText("lime","O")+`ranges 800<br>
`+spanText("lime","L")+`emons 800 AP (L)<br> 
`+spanText("lime","A")+`pples 0<br><br>
`+spanText("yellow","or shorter if you like :")+`<br>
`+spanText("lime","N")+` 0<br>
`+spanText("lime","O")+` 800<br>
`+spanText("lime","L")+` 800 AP (L)<br>
`+spanText("lime","A")+` 0<br>
`

let comboArr = [
    {label:"Tower Tiers",values:["Combo 1<br>"+spanText("lime","2 items"),
    "Combo 2<br>"+spanText("lime","3 items"),"Combo 3<br>"+spanText("lime","4 items"),]},
    {label:"0. NO Tower",values:[30,40,50]},
    {label:"1. Tower < 90",values:[20,30,40]},
    {label:"2. Tower 90 ~ 159",values:[10,20,30]},
    {label:"3. Tower = OR > 160",values:[5,10,15]},
]


let convArray = [
    {ref:0,label:"Small 🐟Nets",to:"⏩ Large 🐟Nets",ratio:"1000⏩75"},
    {ref:1,label:"Oranges 🍊",to:"⏩ Orange Juice",ratio:"3⏩1"},
    {ref:2,label:"Lemons 🍋",to:"⏩ Lemonade",ratio:"3⏩1"},
    {ref:3,label:"Lemons 🍋",to:"⏩ AP (Arnold Palmer)",ratio:"30⏩1"},
    {ref:4,label:"Apples 🍎",to:"⏩ Apple Cider",ratio:"20⏩1"},
]

let todaysMod = {
    ref:1,val:-20,default:{ref:0,val:15},others:[
        ,{ref:2,val:20}
    ]
}

addEle({dad:body,text:spanText("lime","Last up : "+lastUp,20),margin:"5px 30px"})
addEle({dad:body,text:welcome,margin:"20px",padding:"5px",border:"blue solid 3px",
radius:"30px",textA:"center",width:"fit-content"})

cont = addEle({dad:body,setClass:"contRow",margin:"5px 30px",alignItems:"center"})
    addEle({dad:cont,text:"A few words...",margin:"0 20px"})
    addEle({dad:cont,text:"🔽",border:"lime solid 2px",radius:"5px",
    cursor:"pointer",height:"fit-content",setFunc:(e)=>{
        getID("words").style.display = e.srcElement.innerHTML==="🔽" ? "block" : "none"
        e.srcElement.innerHTML = e.srcElement.innerHTML==="🔽" ? "🔼" : "🔽" 
    }})
    addEle({dad:cont,text:"🤠",fontS:"30px",marginL:"20px"})
addEle({dad:body,text:intro,margin:"10px 30px",setID:"words",border:"lime solid 2px",
radius:"30px",display:"none",padding:"10px",width:"fit-content"})


cont = addEle({dad:body,setClass:"contRow",margin:"5px 30px",alignItems:"center"})
    addEle({dad:cont,text:"Game Help & Infos",margin:"0 20px"})
    addEle({dad:cont,text:"🔽",border:"lime solid 2px",radius:"5px",
    cursor:"pointer",height:"fit-content",setFunc:(e)=>{
        getID("infosCont").style.display = e.srcElement.innerHTML==="🔽" ? "block" : "none"
        e.srcElement.innerHTML = e.srcElement.innerHTML==="🔽" ? "🔼" : "🔽" 
    }})
    addEle({dad:cont,text:"🤠",fontS:"30px",marginL:"20px"})
cont = addEle({dad:body,margin:"10px 30px",setID:"infosCont",border:"lime solid 2px",
radius:"30px",display:"none",padding:"10px",width:"fit-content"})

    addEle({dad:cont,setClass:"btn",text:"⇒ Budy Farm",
    textC:"lime",margin:"10px",setFunc:()=>{
        let lnk = "https://buddy.farm/"
        window.open(lnk,"_self")
    }})

    addEle({dad:cont,setClass:"btn",text:"⇒ Bob1 Folks Page",
    textC:"lime",margin:"10px",setFunc:()=>{
        let lnk = "https://melomelo7.github.io/idlepixelinfo/farmrpg/farmpg_folks.html"
        window.open(lnk,"_self")
    }})

    addEle({dad:cont,setClass:"btn",text:"⇒ Bob1 Truffles Page",
    textC:"lime",margin:"10px",setFunc:()=>{
        let lnk = "https://melomelo7.github.io/idlepixelinfo/farmrpg/farmpg_truffles.html"
        window.open(lnk,"_self")
    }})


cont = addEle({dad:body,setClass:"contRow",margin:"20px 30px",alignItems:"center"})
    addEle({dad:cont,text:"Conversion Shop "+spanText("yellow","V"+shopV,20),margin:"0 20px"})
    addEle({dad:cont,text:"🔽",border:"lime solid 2px",radius:"5px",setID:"shopCont",
    cursor:"pointer",height:"fit-content",setFunc:(e)=>{
        getID("shop").style.display = e.srcElement.innerHTML==="🔽" ? "block" : "none"
        getID("combo").style.display = e.srcElement.innerHTML==="🔽" ? "block" : "none"
        e.srcElement.innerHTML = e.srcElement.innerHTML==="🔽" ? "🔼" : "🔽" 
    }})
    addEle({dad:cont,text:"🏠",fontS:"30px",marginL:"20px"})

let liner = addEle({dad:body,setClass:"contRow"})

cont = addEle({dad:liner,margin:"10px 5px 10px 30px",setID:"shop",border:"lime solid 2px",
radius:"30px",display:"none",padding:"10px",width:"fit-content",height:"fit-content"})
    addEle({dad:cont,text:convTxt})

    txt = spanText("cyan",`
    11/14 Day 6 : Low on LNs But try keep Regular payout !<br>
    ( 11/14 Day off back probably after reset on Saturday )<br><br>

    Weekdays business hours : after game reset until 1AM,<br>
    AFK time, back around 3AM until 5AM<br>
    After 5AM low activity and afk time, closed around 8AM<br>
    until next game reset.<br><br>
    (received orders prior reset are handled after reset)<br><br>
    `)


    /*
    a little low on AP so if someone is<br>
    interested to exchange AP for more LNs<br>
    kindly write it in your NOLA ... TY ! 
    `)
    */

/*
    txt = spanText("cyan",`
    Day 3 Starting, **CHANGE IN COMBO PAYOUT** :<br>
    TODAY ⇒ -20% total OJ will be Swapped for extra LNs<br>
    (Adjusted to other when no nets in NOLA)`)

*/

    subC2 = addEle({dad:cont,setClass:"contRow",with:"100%",
    justifyC:"center",marginT:"20px"})
        addEle({dad:subC2,text:txt,border:"cyan solid 3px",radius:"10px",
        width:"fit-content",textA:"center",padding:"10px"})

    txt = spanText("lime",`-- Test Converting with current Shop ratios --<br>
    (usually the result is rounded to closest multiple of 5)`,20)
    subC1 = addEle({dad:cont,text:txt,
    marginT:"20px",textA:"center"})

    tb = addEle({dad:subC1,what:"table",marginT:"10px"})

        tr = addEle({dad:tb,what:"tr"})
             addEle({dad:tr,what:"td",text:"From",textA:"center",borderB:"solid teal 2px"})
             addEle({dad:tr,what:"td",text:"To",textA:"center",borderB:"solid teal 2px"})
             addEle({dad:tr,what:"td",text:"Ratio",textA:"center",borderB:"solid teal 2px"})
             addEle({dad:tr,what:"td",text:"Amount",textA:"center",borderB:"solid teal 2px"})
             addEle({dad:tr,what:"td",text:"Combo",textA:"center",borderB:"solid teal 2px"})
             addEle({dad:tr,what:"td",text:"For You",textA:"center",borderB:"solid teal 2px",minWidth:"80px"})

    for(let i=0;i<convArray.length;i++){
        tr = addEle({dad:tb,what:"tr"})
             addEle({dad:tr,what:"td",text:convArray[i].label,textA:"right",padding:"5px"})
             addEle({dad:tr,what:"td",text:convArray[i].to,textA:"left",padding:"5px"})
             addEle({dad:tr,what:"td",text:convArray[i].ratio,textA:"center",padding:"5px"})
        tc = addEle({dad:tr,what:"td",padding:"5px"})
             addEle({dad:tc,what:"input",isInput:true,setVal:0,setID:"amount:"+i,
             width:"60px",textA:"center",setFunc:(e)=>{evalConv(e)}})
             addEle({dad:tr,what:"td",setID:"combo:"+i,text:"👀"})
             addEle({dad:tr,what:"td",setID:"eval:"+i})
    }



    subC1 = addEle({dad:cont,setClass:"contRow",border:"teal solid 3px",radius:"10px",
            margin:"10px 0 0 30px",width:"fit-content",padding:"10px"})
        addEle({dad:subC1,what:"radio",isInput:true,setVal:0,setName:"towerTier",setID:"none0",
        setFunc:(e)=>{getID("towerTierTxt").innerHTML="Tower tier : "+
        spanText("lime",comboArr[(Number(e.srcElement.value)+1)].label);evalConv(e)}})
        addEle({dad:subC1,what:"radio",isInput:true,setVal:1,setName:"towerTier",setID:"none1",
        setFunc:(e)=>{getID("towerTierTxt").innerHTML="Tower tier : "+
        spanText("lime",comboArr[(Number(e.srcElement.value)+1)].label);evalConv(e)}})
        addEle({dad:subC1,what:"radio",isInput:true,setVal:2,setName:"towerTier",setID:"none2",
        setFunc:(e)=>{getID("towerTierTxt").innerHTML="Tower tier : "+
        spanText("lime",comboArr[(Number(e.srcElement.value)+1)].label);evalConv(e)}})
        addEle({dad:subC1,what:"radio",isInput:true,setVal:3,setName:"towerTier",setID:"none3",
        setFunc:(e)=>{getID("towerTierTxt").innerHTML="Tower tier : "+
        spanText("lime",comboArr[(Number(e.srcElement.value)+1)].label);evalConv(e)}})
        addEle({dad:subC1,setID:"towerTierTxt",marginL:"10px"})
        addEle({dad:subC1,text:"Combo 0",setID:"comboTxt",marginL:"10px"})
        subC1.children[3].click()


    let modCont = addEle({dad:cont,marginT:"10px",border:"cyan solid 2px",radius:"10px",
    padding:"10px",text:"" })


cont = addEle({dad:liner,margin:"10px 0",setID:"combo",border:"lime solid 2px",
radius:"30px",display:"none",padding:"10px",width:"fit-content"})
    addEle({dad:cont,text:comboTxt1})
    subC1 = addEle({dad:cont,margin:"10px 0"})
    tb = addEle({dad:subC1,what:"table"})
    comboArr.forEach(it=>{
        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:it.label,border:"teal solid 3px",textA:"center"})
            it.values.forEach(val=>{
                addEle({dad:tr,what:"td",text: isNaN(val) ? val : val+"%",border:"teal solid 3px",textA:"center"})
            })
    })
    addEle({dad:cont,text:comboTxt2})
    addEle({dad:cont,text:typical,border:"teal solid 3px",radius:"20px",padding:"5px 10px",marginT:"5px"})

getID("shopCont").click()


function evalConv(e){
    let val = undefined
    let valArr = []
    let cpt = 0
    let grp = document.getElementsByName("towerTier")
    let towT = undefined
    let comR = undefined
   
    if(e.srcElement.id === "amount:2" || e.srcElement.id === "amount:3"){
        if(e.srcElement.id === "amount:2")
             {getID("amount:3").value = 0}
        else {getID("amount:2").value = 0} }


    for(let i=0;i<convArray.length;i++){
        val = getID("amount:"+i).value
        if( !isNaN(val) && val!==""){
            getID("eval:"+i).innerHTML = ""
            valArr.push({
                idx:i,
                label:convArray[i].label,
                ratio1:Number(convArray[i].ratio.split("⏩")[0]),
                ratio2:Number(convArray[i].ratio.split("⏩")[1]),
                amount:val,
                comR:0,
                payout:0,
            })
        } else {getID("eval:"+i).innerHTML = spanText("","💩",30)}
    }

    valArr.sort((a,b) => b.amount - a.amount)
    getID("combo:"+valArr[0].idx).innerHTML = valArr[0].amount > 0 ? spanText("lime","MI") : "👀"

    cpt = 0
    for(let i=1;i<valArr.length;i++){
        if(valArr[i].amount > 0 && valArr[i].amount >= valArr[0].amount /2 ){
            getID("combo:"+valArr[i].idx).innerHTML = comboIc
            cpt++
        }
        else {getID("combo:"+valArr[i].idx).innerHTML = "👀"}
    }

    grp.forEach(it=>{if(it.checked===true){towT=Number(it.value)}})

    txt = spanText("cyan", "Combo "+cpt)
    if(cpt>0){
        comR = comboArr[towT+1].values[cpt-1]
        txt = txt + spanText("lime"," +" + comR+"%")
        valArr.forEach(it=>{it.comR = comR})
    }
    getID("comboTxt").innerHTML = txt

    valArr.forEach(it=>{
        if(it.amount>0){
            let elem = "eval:"+it.idx
            txt = Math.floor(it.amount/it.ratio1*it.ratio2)
            it.payout = txt
            if(it.comR>0){
                let comB = Math.floor(txt*(comR/100))
                it.payout = txt+comB
                txt = txt + "+" + comB + "= " + (txt+comB)
            }
            getID(elem).innerHTML = spanText("lime",txt,16)
        }
    })

    console.log(valArr)

}
