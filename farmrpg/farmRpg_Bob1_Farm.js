let cont = undefined
let subC1 = undefined
let subC2 = undefined
let txt = undefined
let tb = undefined
let tr = undefined
let tc = undefined
let userN = "Apple Lord"
let inventoryS = 8800
let mailboxS = 750
let maxL = Math.floor(inventoryS/mailboxS) * mailboxS
let shopV = "3.1"
let itemPool = []
let currentO = undefined
let recap = ""
let buildP = true
let copyNb = 0
let MCP = 100000
let orderPool = []
let savK = "farmRPGOrders"

let shopOpen = true

let closeTxt =
spanText("yellow","<br>Thursday 13 Feb. Ive completed All my Converting Masteries<br><br>")+
//``<br>Last day for the shop, `+spanText("lime","today only the Nets will be converted<br>")+``+
//`with the shop rate still ... my last goal : the LN mastery is about<br>`+
//`to be finished within a few days ... 
`So I wish to thank everyone for their help pushing me all this time.<br>`+
`If your still using the shop, I suppose your turn to become a <br>`+
`converter yourself might be coming. Good luck and happy gaming !<br><br>`

/*

spanText("red","Shop ran out of fruities")+`, contact me only<br> to convert your `
+spanText("cyan","Nets today Monday 10th Feb.")+`<br>`+
`<br>`+spanText("rainbow","** Many customers today, I need to close early sorry **",24)+`<br><br>`+

`<br>⚠️The shop and NOLA system are going to stop<br>
`+ spanText("lime","this current month on Feb. 13th,",26,false,"yellow dashed 2px") +`<br> 
last NOLAs running on Wednesday the 12th Feb.⚠️`+
`<br><br>`+spanText("yellow","Business Hours<br>",22,false,"solid 2px brown")+
spanText("cyan",`
*Time reference is 🇺🇸 server time, that you can see in chat for example*<br><br>
Monday - Tuesday - Wednesday - Thursday - `+spanText("brown","Friday - Saturday - Sunday",16,true)+`
<br><br>After game reset/midnight
`+spanText("yellow","+20~25mn (until meals start working really)",16)+`
until 3AM<br>
`,16)
*/

let OJM = 905881
let LEM = 905000
let LNM = 910000
let CIM = 100868
let APM = 100000


let lastUp = "04/29 18:55 🇯🇵"

const body = document.querySelector("body")


let welcome = spanText("lime",`
🐮🥚 Welcome to `+userN+`'s Farm : 🐷<br>
🐖🐖Busy busy lil Piggy !🐣🐖🐖<br>

`
+spanText("fuchsia","(Formerly known as Bob1)",28)
,40)

let intro = spanText("",
`
Formerly a Strong Fisherman, my starting goal was to take down<br>
all the fishing-MMs for the tower needs (floors 200+) ...<br><br>
Now that this is over, I can turn the received nets to others<br>
through my activity of converting.<br><br>
The shop is evolving often ... Stay tuned 👻<br>
`+spanText("fuchsia","Shop closed doors on 13 Feb. 2024")+`
`,18)

let convTxt = `
Shop `+spanText("yellow","V1.0")+` : 🐟Nets only, Ratio 1000⏩70<br>
Shop `+spanText("yellow","V2.0")+` : 🐟Nets only, Ratio 1000⏩75<br>
Shop `+spanText("yellow","V2.1")+` : 🐟Nets Ratio 1000⏩75, fruits to 
ratios 3.5⏩1 (OR 35⏩1) & 25⏩1<br>
Shop `+spanText("yellow","V2.2")+` : 🐟Nets Ratio 1000⏩75, fruits to 
ratios 3⏩1 (OR 30⏩1) & 20⏩1<br>
Shop `+spanText("yellow","V3.0")+` : ratios of V2.2 with `+spanText("cyan","Combo System & NOLA")+`<br>
Shop `+spanText("yellow","V3.1")+` : Combo reduced to max2, apples will only be converted with other items.
<br>`+spanText("cyan","***************** (")+spanText("yellow"," I stop converting apples alone ",20,false,
"brown dotted 2px") +spanText("cyan",") *****************")+`
<br><br>
`+spanText("yellow",`
BIG orders, depends what  : `+spanText("cyan",inventoryS+
` / Item (`+Math.floor(inventoryS/mailboxS)+`mb)`))

/*
) :<br>
🟡 process will be divided into rounds of `+Math.floor(inventoryS/mailboxS)+`mb = `+maxL+` units<br>
🟢 short pause 🟢 payout 🟢 🪨Stone refill(for me)<br>
🟡 and resume next round.
`)
*/

let comboTxt1 = spanText("Yellow",`Combo System !<br>
Test drive starting !<br>
(content might change as it goes...)`,20)+`<br><br>
In short a better payout for your goodies.<br>
How ? You bring not 1 type of items but minimum 2<br>
Examples :<br>
- Nets + Oranges = Combo 1<br>
- Nets + Oranges + Lemons = Combo 2<br>
`

let comboIc = spanText("cyan","🅒",20)  //"🪙"

let comboTxt2 = spanText("Yellow",`
Important:<br><br>
The `+spanText("lime","(M)")+`aster `+spanText("lime","(I)")+`
tem on the order list you send<br> me is the item with biggest amount.<br><br>
Based on the `+spanText("lime","MI")+` all `+spanText("cyan","OTHERS")+` items with at least
<br>50% amount of `+spanText("lime","MI")+` will add 1 combo. ` +comboIc
,16)+`<br><br>`+spanText("brown",`Since V 3.1, Apples are merely service work,<br>
they are OFF the combo system`)

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
/*
let comboArr = [
    {label:"Tower Tiers",values:["Combo 1<br>"+spanText("lime","2 items"),
    "Combo 2<br>"+spanText("lime","3 items"),"Combo 3<br>"+spanText("lime","4 items"),]},
    {label:"0. NO Tower",values:[30,40,50]},
    {label:"1. Tower less than 90",values:[20,30,40]},
    {label:"2. Tower 90 ~ 159",values:[10,20,30]},
    {label:"3. Tower = OR > 160",values:[5,10,15]},
]
*/
let comboArr = [
    {label:"Tower Tiers",values:["Combo 1<br>"+spanText("lime","2 items"),
    "Combo 2<br>"+spanText("lime","3 items")]},
    {label:"0. NO Tower",values:[30,40]},
    {label:"1. Tower less than 90",values:[20,30]},
    {label:"2. Tower 90 ~ 159",values:[10,20]},
    {label:"3. Tower = OR > 160",values:[5,10]},
]


let convArray = [
    {ref:0,goal:false,nola:"N",label:"Small 🐟Nets",to:"⏩ LN (Large 🐟Nets)",ratio:"1000⏩75"},
    {ref:1,goal:false,nola:"O",label:"Oranges 🍊",to:"⏩ Orange Juice",ratio:"3⏩1"},
    {ref:2,goal:false,nola:"L(LE)",label:"Lemons 🍋",to:"⏩ Lemonade",ratio:"3⏩1"},
    {ref:3,goal:false,nola:"L(AP)",label:"Lemons 🍋",to:"⏩ AP (Arnold Palmer)",ratio:"30⏩1"},
    {ref:4,goal:true,nola:"A",label:"Apples 🍎",to:"⏩ Apple Cider",ratio:"20⏩1"},
]

let dailySwaps = [
    {active:false,fromIdx:1,toIdx:3,// OJ > AP
     percent:15
     ,ratio:"10:1"},

     {active:true,fromIdx:1,toIdx:0,// OJ > LNs **
     percent:15
     ,ratio:"15:10"},

     {active:false,fromIdx:0,toIdx:3,// LNs > AP
     percent:10
     ,ratio:"5:1"},

    {active:false,fromIdx:4,toIdx:0,// LNs > cider
     percent:10
     ,ratio:"20:15"},

    {active:false,fromIdx:4,toIdx:0,// cider > LNs
     percent:20
     ,ratio:"20:15"},

     {active:false,fromIdx:3,toIdx:0,// AP > LNs
     percent:10
     ,ratio:"1:5"},

]

addEle({dad:body,text:spanText("lime","Last up : "+lastUp,20),margin:"5px 30px"})

cont = addEle({dad:body,setClass:"contCol",width:"fit-content",alignItems:"center"})

addEle({dad:cont,text:welcome,margin:"20px",padding:"5px",border:"blue solid 3px",
radius:"30px",textA:"center",width:"fit-content"})

addEle({dad:cont,what:"img",imgFullSrc:"./apple lord.jpg",img2Sizes:"350:240",
border:"lime solid 2px",radius:"50%"})

cont = addEle({dad:body,setClass:"contRow",margin:"5px 30px",alignItems:"center"})
    addEle({dad:cont,text:"🟢 A few words...",margin:"0 20px"})
    addEle({dad:cont,text:"🔽",border:"lime solid 2px",radius:"5px",
    cursor:"pointer",height:"fit-content",setFunc:(e)=>{
        getID("words").style.display = e.srcElement.innerHTML==="🔽" ? "block" : "none"
        e.srcElement.innerHTML = e.srcElement.innerHTML==="🔽" ? "🔼" : "🔽" 
    }})
    addEle({dad:cont,text:"🤠",fontS:"30px",marginL:"20px"})
addEle({dad:body,text:intro,margin:"10px 30px",setID:"words",border:"lime solid 2px",
radius:"30px",display:"none",padding:"10px",width:"fit-content"})


cont = addEle({dad:body,setClass:"contRow",margin:"5px 30px",alignItems:"center"})
    addEle({dad:cont,text:"🟣 Game Help , Infos ... Tools",margin:"0 20px"})
    addEle({dad:cont,text:"🔽",border:"lime solid 2px",radius:"5px",setID:"helpCont",
    cursor:"pointer",height:"fit-content",setFunc:(e)=>{
        getID("infosCont").style.display = e.srcElement.innerHTML==="🔽" ? "block" : "none"
        e.srcElement.innerHTML = e.srcElement.innerHTML==="🔽" ? "🔼" : "🔽" 
    }})
    addEle({dad:cont,text:"🤠",fontS:"30px",marginL:"20px"})
cont = addEle({dad:body,margin:"10px 30px",setID:"infosCont",border:"lime solid 2px",
radius:"30px",display:"none",padding:"10px",width:"fit-content"})

    addEle({dad:cont,setClass:"btn",text:"⇒ Buddy Farm",
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

    addEle({dad:cont,setClass:"btn",text:"⇒ Bob1 Converter Tools (Old Version)",
    textC:"lime",margin:"10px",setFunc:()=>{
        let lnk = "https://melomelo7.github.io/idlepixelinfo/farmrpg/farmRpg_ConvertingTool.html"
        window.open(lnk,"_self")
    }})

    addEle({dad:cont,setClass:"btn",text:"⇒ Apple Lord Converter Tools (New Version)",
    textC:"lime",margin:"10px",setFunc:()=>{
        let lnk = "https://melomelo7.github.io/idlepixelinfo/farmrpg/farmRpg_ConvertingTool_V2.html"
        window.open(lnk,"_self")
    }})

    addEle({dad:cont,setClass:"btn",text:"⇒SupakoolDude Ref Chart for Trade Prices",
    textC:"lime",margin:"10px",setFunc:()=>{
        let lnk = "https://farmrpg-pricecheck.free.nf"
        window.open(lnk,"_self")
    }})

getID("helpCont").click()


    let goldArr = [
        {label:"Apple Pie",active:false,buyV:"300",buyC:"G",sellV:"---",sellC:""}
    ]

    /*
    cont = addEle({dad:body,setClass:"contRow",margin:"5px 30px",alignItems:"center"})
    addEle({dad:cont,text:"🟡 Gold Corner ["+ spanText("yellow",goldArr.filter(it=>it.active===true).length,20)+"]",margin:"0 20px"})
    addEle({dad:cont,text:"🔽",border:"lime solid 2px",radius:"5px",
    cursor:"pointer",height:"fit-content",setFunc:(e)=>{
        getID("goldCont").style.display = e.srcElement.innerHTML==="🔽" ? "block" : "none"
        e.srcElement.innerHTML = e.srcElement.innerHTML==="🔽" ? "🔼" : "🔽" 
    }})
    txt = "./gold.jpg"
    addEle({dad:cont,what:"img",imgFullSrc:txt,imgSize:30,marginL:"20px"})
    addEle({dad:body,margin:"10px 30px",setID:"goldCont",border:"lime solid 2px",
    radius:"30px",display:"none",padding:"10px",width:"fit-content",setClass:"contCol"})
      subC1 = addEle({dad:getID("goldCont"),setClass:"contRow"})
        addEle({dad:subC1,text:"Message me if you are interested by any :",textA:"center",
        marginB:"5px",width:"100%"})
        subC2 = addEle({dad:getID("goldCont")})
        tb = addEle({dad:subC2,what:"table"})
        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:"Item",textA:"center",border:"teal solid 2px",radius:"5px"})
            addEle({dad:tr,what:"td",text:"I Buy for",border:"teal solid 2px",padding:"0 5px",radius:"5px"})
            addEle({dad:tr,what:"td",text:"I Sell for",border:"teal solid 2px",padding:"0 5px",radius:"5px"})
        goldArr.forEach(it=>{
            if(it.active){
                tr = addEle({dad:tb,what:"tr"})
                txt = "./"+ it.label.toLowerCase() + ".jpg"
                tc = addEle({dad:tr,what:"td",border:"teal solid 2px",padding:"0 5px",radius:"5px"})
                    let subC3 = addEle({dad:tc,setClass:"contRow",alignItems:"center"})
                    addEle({dad:subC3,text:it.label,marginR:"5px"})
                    addEle({dad:subC3,what:"img",imgSize:40,imgFullSrc:txt})
                addEle({dad:tr,what:"td",text:spanText("yellow",it.buyV+" "+it.buyC),
                border:"teal solid 2px",textA:"center",radius:"5px"})
                addEle({dad:tr,what:"td",text:spanText("yellow",it.sellV+" "+it.sellC),
                border:"teal solid 2px",textA:"center",radius:"5px"})
            }
        })
    */

cont = addEle({dad:body,setClass:"contRow",margin:"10px 30px",alignItems:"center"})
    addEle({dad:cont,text:"🟢 Conversion Shop "+spanText("yellow","V"+shopV,20)+spanText("fuchsia","<br> (Not Working Anymore, Info only)"),margin:"0 20px"})
    addEle({dad:cont,text:"🔽",border:"lime solid 2px",radius:"5px",setID:"shopCont",
    cursor:"pointer",height:"fit-content",setFunc:(e)=>{
        if(shopOpen){
            getID("shop").style.display = e.srcElement.innerHTML==="🔽" ? "block" : "none"
            e.srcElement.innerHTML = e.srcElement.innerHTML==="🔽" ? "🔼" : "🔽"
            if(getID("comboArrow").innerHTML==="⏪"){getID("comboArrow").click()}
        }
    }})
    addEle({dad:cont,text:"🏠",fontS:"30px",marginL:"20px"})
    if(!shopOpen){
        addEle({dad:cont,text:closeTxt,fontS:"22px",marginL:"20px",border:"lime 2px solid",padding:"10px",radius:"20px",textA:"center"})
    }

let liner = addEle({dad:body,setClass:"contRow"})

cont = addEle({dad:liner,margin:"10px 5px 10px 30px",setID:"shop",border:"lime solid 2px",
radius:"30px",display:"none",padding:"10px",width:"fit-content",height:"fit-content"})


let contR = addEle({dad:cont,setClass:"contRow",justifyC:"space-between"})
    subC1 = addEle({dad:contR,setClass:"contRow",margin:"5px",alignItems:"center"})
        addEle({dad:subC1,text:"🟡 Shop Ratios History",marginR:"10px"})
        addEle({dad:subC1,text:"🔽",border:"lime solid 2px",radius:"5px",
        cursor:"pointer",height:"fit-content",setFunc:(e)=>{
            getID("convTxtCt").style.display = e.srcElement.innerHTML==="🔽" ? "block" : "none"
            e.srcElement.innerHTML = e.srcElement.innerHTML==="🔽" ? "🔼" : "🔽" 
        }})
        addEle({dad:cont,text:convTxt,setID:"convTxtCt",display:"none",padding:"5px",
        border:"yellow solid 2px",radius:"10px"})

    subC1 = addEle({dad:contR,setClass:"contRow",margin:"5px",alignItems:"center",marginR:"10px"})
        addEle({dad:subC1,text:"🟡 Combo Informations",marginR:"10px"})
        addEle({dad:subC1,text: "⏩",border:"lime solid 2px",radius:"5px",backC:"",
        cursor:"pointer",height:"fit-content",setID:"comboArrow",setFunc:(e)=>{
            getID("combo").style.display = e.srcElement.innerHTML==="⏩" ? "block" : "none"
            e.srcElement.innerHTML = e.srcElement.innerHTML==="⏩" ? "⏪" : "⏩" 
        }})

        
subC1 = addEle({dad:cont,setClass:"contRow",margin:"10px 0 0 5px"})
    addEle({dad:subC1,text:"🟣 Business Hours and Informations"+spanText("",""),marginR:"10px"})
    addEle({dad:subC1,text:"🔽",border:"lime solid 2px",radius:"5px",setID:"InfoClick",
    cursor:"pointer",height:"fit-content",setFunc:(e)=>{
        getID("dailyTxt").style.display = e.srcElement.innerHTML==="🔽" ? "flex" : "none"
        e.srcElement.innerHTML = e.srcElement.innerHTML==="🔽" ? "🔼" : "🔽" 
    }})
    addEle({dad:subC1,text:"🚨",margin:"-5px 5px",fontS:"22px"})


txt =
`⚠️The shop and NOLA system are going to stop<br>
`+ spanText("lime","this current month on Feb. 13th,",26,false,"yellow dashed 2px") +`<br> 
last NOLAs running on Wednesday the 12th Feb.⚠️`+
`<br><br>`+spanText("yellow","Business Hours<br>",22,false,"solid 2px brown")+
spanText("cyan",`
*Time reference is 🇺🇸 server time, that you can see in chat for example*<br><br>
Monday - Tuesday - Wednesday - Thursday - `+spanText("brown","Friday - Saturday - Sunday",16,true)+`
<br><br>After game reset/midnight
`+spanText("yellow","+20~25mn (until meals start working really)",16)+`
until 3AM<br>
`,16)


/*
spanText("cyan",`
*Time reference is 🇺🇸 server time, that you can see in chat for example*<br><br>
Monday - Tuesday - Wednesday - Thursday - `+spanText("brown","Friday - Saturday - Sunday",16,true)+`
<br><br>After game reset/midnight
`+spanText("yellow","+20~25mn (until meals start working really)",16)+`
until 4AM<br>
`,16)
*/

    subC2 = addEle({dad:cont,setClass:"contRow",with:"100%",
    marginT:"10px",setID:"dailyTxt",display:"none"})
        addEle({dad:subC2,text:txt,border:"rgb(123,89,186) solid 3px",radius:"10px",
        width:"fit-content",textA:"center",padding:"10px",setID:"infoCont",fontS:"26px"})



subC1 = addEle({dad:cont,setClass:"contRow",margin:"5px",alignItems:"center"})
    addEle({dad:subC1,marginR:"10px",setID:"dailyModsText",borderB:"orangered solid 2px"})
    addEle({dad:subC1,text:"🔽",border:"lime solid 2px",radius:"5px",marginT:"10px",
    cursor:"pointer",height:"fit-content",setFunc:(e)=>{
        getID("dailyMods").style.display = e.srcElement.innerHTML==="🔽" ? "flex" : "none"
        e.srcElement.innerHTML = e.srcElement.innerHTML==="🔽" ? "🔼" : "🔽" 
    }})

    subC2 = addEle({dad:cont,setClass:"contCol",with:"100%",
    justifyC:"center",marginT:"10px",setID:"dailyMods",display:"none",width:"fit-content",
    border:"2px solid orangered",padding:"5px",radius:"10px"})
    
    function checkDailyMods(){
        let cpt = 0
        let tgt = getID("dailyMods")
        cleanParent(tgt)
        txt = spanText("yellow","(Necessary changes to keep Shop running)")
        addEle({dad:tgt,text:txt,margin:"10px"})
        let tb = addEle({dad:tgt,what:"table"})

        dailySwaps.forEach(swp=>{
            if(swp.active){
                cpt++
                let tr = addEle({dad:tb,what:"tr"})
                addEle({dad:tr,what:"td",text:spanText("yellow","-" + swp.percent + "%-ish ")})
                addEle({dad:tr,what:"td",text:convArray[swp.fromIdx].to + spanText("yellow"," for extra ")})
                addEle({dad:tr,what:"td",text:convArray[swp.toIdx].to})
            }
        })
        txt = spanText("","⚠️",24)+" Daily Mods (Payout autoSwap) [ " + spanText("yellow",cpt) + " ]"
        getID("dailyModsText").innerHTML = txt
    }



    subC1 = addEle({dad:cont,setClass:"contRow",margin:"10px 5px",alignItems:"center"})
        addEle({dad:subC1,text:"🔥",backC:"",border:"red solid 2px",radius:"10px",fontS:"24px"})
        addEle({dad:subC1,text:spanText("yellow","BIG Tip",22),margin:"0 10px"})
        addEle({dad:subC1,text:"🔽",border:"lime solid 2px",radius:"5px",
        cursor:"pointer",height:"fit-content",setFunc:(e)=>{
            getID("bigTip").style.display = e.srcElement.innerHTML==="🔽" ? "block" : "none"
            e.srcElement.innerHTML = e.srcElement.innerHTML==="🔽" ? "🔼" : "🔽" 
        }}) // 
        addEle({dad:subC1,text:"💡",backC:"",radius:"10px",fontS:"24px"})
        addEle({dad:cont,setID:"bigTip",display:"none",padding:"5px",
        border:"yellow solid 2px",radius:"10px"})
            subC2 = addEle({dad:getID("bigTip"),setClass:"contRow",alignItems:"center",justifyC:"space-around"})
                txt = "./cleverBox.jpg"
                addEle({dad:subC2,what:"img",img2Sizes:"350:350",imgFullSrc:txt,radius:"10px"})
                txt = spanText("yellow",`
                `+spanText("lime","(works also in Workshop)")+`
                <br><br>
                You can organize items to be<br> 
                at the top of the page and not<br>
                always look for them in the list.<br>
                Just click the 🤍`+spanText("white","Heart")+` icon on<br>
                the left of the item name to turn<br>it ❤️`+spanText("red","Red")+`.<br>
                `,20)
                addEle({dad:subC2,text:txt,margin:"5px"})

/*
        addEle({dad:cont,text:spanText("yellow",`
        `+spanText("cyan","Snowballs")+`
         : my next event quest wont be available before the <br>
         `+spanText("lime","4th of January")+` (as per buddys farm infos) so feel free<br>
         to throw your snowballs to anyone of your (dis)liking ... `+spanText("","😆",20)+`<br>
         Thanks for your help with that up to now, I will put an info<br>
         again if needs be in January ... 
        `,18),border:"cyan dotted 5px",radius:"20px",width:"90%",textA:"center",padding:"5px"})
*/

    txt = spanText("lime",`-- Type amounts to build (or test) your order,
    <br>then Click on [`+spanText("yellow","Copy NOLA")+`] and msg me ingame --<br><br>
    (usually the result is rounded to closest multiple of 5)`,20)
    subC1 = addEle({dad:cont,text:txt,
    marginT:"20px",textA:"center"})

    tb = addEle({dad:subC1,what:"table",marginT:"10px"})

        tr = addEle({dad:tb,what:"tr"})
             addEle({dad:tr,what:"td",text:"From",textA:"center",borderB:"solid teal 2px"})
             addEle({dad:tr,what:"td",text:"To",textA:"center",borderB:"solid teal 2px"})
             addEle({dad:tr,what:"td",text:"Ratio",textA:"center",borderB:"solid teal 2px"})
             addEle({dad:tr,what:"td",text:"Amount",textA:"center",borderB:"solid teal 2px"})
             addEle({dad:tr,what:"td",text:"Copy<br>Paste",textA:"center",borderB:"solid teal 2px"})
             addEle({dad:tr,what:"td",text:"Combo",textA:"center",borderB:"solid teal 2px"})
             addEle({dad:tr,what:"td",text:"For You"+spanText("yellow","<br>( before autoSwap )"),
             textA:"center",borderB:"solid teal 2px",minWidth:"80px",paddingL:"5px"})

    for(let i=0;i<convArray.length;i++){
        tr = addEle({dad:tb,what:"tr"})
             addEle({dad:tr,what:"td",text:convArray[i].label,textA:"right",padding:"5px"})
             addEle({dad:tr,what:"td",text:convArray[i].to,textA:"left",padding:"5px"})
             addEle({dad:tr,what:"td",text:convArray[i].ratio,textA:"center",padding:"5px"})
        tc = addEle({dad:tr,what:"td",padding:"5px"})
             addEle({dad:tc,what:"input",isInput:true,setVal:0,setID:"amount:"+i,
             width:"60px",textA:"center",setFunc:(e)=>{buildP =false ; evalConv(e)}})
        tc = addEle({dad:tr,what:"td",padding:"5px"})
             subC2 = addEle({dad:tc,setClass:"contRow"})
              addEle({dad:subC2,text:"C",padding:"0 2px ",border:"orange solid 2px",textC:"orange",
              radius:"5px",cursor:"pointer",setID:"copy:"+i,backC:"#2C5B52",textC:"lime",
              setFunc:(e)=>{CPAm(e)}})
              addEle({dad:subC2,text:"P",padding:"0 4px ",border:"orange solid 2px",textC:"orange",
              marginL:"5px",radius:"5px",cursor:"pointer",setID:"paste:"+i,backC:"#2C5B52",textC:"lime",
              setFunc:(e)=>{CPAm(e)}})
             addEle({dad:tr,what:"td",setID:"combo:"+i,text:"👀"})
             addEle({dad:tr,what:"td",setID:"eval:"+i})
    }

function CPAm(e){
    let idx = e.srcElement.id.split(":")[1]
    let sw = e.srcElement.id.split(":")[0]
    switch(sw){
        case "copy" : copyNb = getID("amount:"+idx).value ; break
        case "paste" : 
            getID("amount:"+idx).value = copyNb
        getID("amount:"+idx).dispatchEvent(new Event('input', { bubbles: true }));
            break
        default : console.log("Bug Copy Paste amounts")
    }
}

let subC4 = addEle({dad:cont,setClass:"contRow",alignItems:"center"})
  let subC3 = addEle({dad:subC4,setClass:"contCol",border:"teal solid 3px",overflow:"hidden",
        radius:"10px",padding:"5px",height:"fit-content"})
    subC2 = addEle({dad:subC3,setClass:"contRow",})
      subC1 = addEle({dad:subC2,setClass:"contRow",
            margin:"",width:"fit-content",padding:"0 10px",alignItems:"center"})
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

      subC1 = addEle({dad:subC4,setClass:"contCol",alignItems:"center",justifyC:"center"})
        addEle({dad:subC1,setClass:"btn",text:spanText("yellow","Copy NOLA",20)+"<br>* to paste in ingame msg for me *",
        border:"orange solid 2px", height:"fit-content",Width:"100%",padding:"10px",
        backC:"#2C5B52",textC:"lime",marginL:"10px",
        setFunc:()=>{navigator.clipboard.writeText(nolaP.value)}})
    

    subC1 = addEle({dad:cont,setClass:"contRow",margin:"5px 30px",alignItems:"center"})
        addEle({dad:subC1,text:"-!-🍋 You always get AP but today a quest require Lemonade ? 🍋-!-",
        margin:"0 10px",textC:"yellow"})
        addEle({dad:subC1,text:"🔽",border:"lime solid 2px",radius:"5px",
        cursor:"pointer",height:"fit-content",setFunc:(e)=>{
            getID("lemonSplit").style.display = e.srcElement.innerHTML==="🔽" ? "block" : "none"
            e.srcElement.innerHTML = e.srcElement.innerHTML==="🔽" ? "🔼" : "🔽" 
        }})
    addEle({dad:cont,margin:"10px 30px",setID:"lemonSplit",border:"yellow solid 2px",
    radius:"10px",display:"none",padding:"10px",width:"fit-content"})
        subC2 = addEle({dad:getID("lemonSplit"),setClass:"contRow"})
            addEle({dad:subC2,text:"Split AP Generated by the order :"})
            addEle({dad:subC2,what:"input",isInput:true,margin:"0 5px",setID:"apBank1",
            disabled:true,textA:"center",textC:"yellow",width:"30px"})
            addEle({dad:subC2,text:"◀",textC:"yellow",setID:"apDown",marginR:"3px",
            cursor:"pointer",setFunc:(e)=>{evalSplit(e)}})
            addEle({dad:subC2,text:"▶",textC:"yellow",setID:"apUp",cursor:"pointer",
            setFunc:(e)=>{evalSplit(e)}})
            addEle({dad:subC2,what:"range",isInput:true,width:"50px",accentCol:"yellow",
            setID:"apRange",min:0,max:0,setFunc:(e)=>{evalSplit(e)}})
            addEle({dad:subC2,what:"input",isInput:true,margin:"0 5px",setID:"apBank2",
            disabled:true,textA:"center",textC:"yellow",width:"30px"})
            addEle({dad:subC2,text:"to Lemonade"})
    
function evalSplit(e){
    let src = getID("apBank1")
    let rng = getID("apRange")
    let tgt = getID("apBank2")
    let thisEl = currentO.filter(it=>it.idx===3)[0]
    if(e.srcElement.id!=="apRange"){
        if(e.srcElement.id==="apDown")
             {rng.value --}
        else {rng.value ++}
    }
    src.value = rng.max - rng.value
    tgt.value = rng.value *15

    thisEl.split = (rng.max - rng.value) - rng.max  

    checkNOLA()

}


    let modCont = addEle({dad:cont,marginT:"5px",//border:"cyan solid 2px",
    radius:"10px",setClass:"contRow",justifyC:"center" })
        let nolaP = addEle({dad:modCont,what:"textarea",setID:"nolaP",overflow:"scroll",
        height:"150px",width:"400px",minHeight:"150px",minWidth:"400px",
        maxHeight:"150px",maxWidth:"300px",border:"orange solid 2px",radius:"10px",
        resize:"none",backG:"#2C5B52",textC:"lime",padding:"10px 0 0 10px"})


cont = addEle({dad:liner,margin:"10px 0",setID:"combo",border:"lime solid 2px",
radius:"30px",display:"none",padding:"10px",width:"fit-content",display:"none"})
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
    addEle({dad:cont,text:typical,border:"teal solid 3px",radius:"20px",padding:"5px 10px",margin:"10px 5px"})

//getID("shopCont").click()
//getID("InfoClick").click()


function evalConv(e){
    if(buildP ===true){return}

    let val = undefined
    let valArr = []
    let cpt = 0
    let grp = document.getElementsByName("towerTier")
    let towT = undefined
    let comR = undefined
   
    if(e.srcElement.id === "amount:2" || e.srcElement.id === "amount:3"){
        if(e.srcElement.id === "amount:2")
             {getID("amount:3").value = 0}
        else {getID("amount:2").value = 0}}

    for(let i=0;i<convArray.length;i++){
        val = getID("amount:"+i).value
        if( !isNaN(val) && val!=="" && !convArray[i].goal ){
            getID("eval:"+i).innerHTML = ""
            valArr.push({
                idx:i,
                nola:convArray[i].nola,
                label:convArray[i].label,
                ratio1:Number(convArray[i].ratio.split("⏩")[0]),
                ratio2:Number(convArray[i].ratio.split("⏩")[1]),
                amount:val,
                comR:0,
                payout:0,
                autoSwap:0,
                split:0,
                nolaName:""
            })
        } else {getID("eval:"+i).innerHTML = spanText("","💩",30)}
    }

    valArr.sort((a,b) => b.amount - a.amount)
    getID("combo:"+valArr[0].idx).innerHTML = valArr[0].amount > 0 ? spanText("lime","MI") : "👀"

    for(let i=0;i<convArray.length;i++){
        val = getID("amount:"+i).value
        if( !isNaN(val) && val!=="" && convArray[i].goal ){
            getID("eval:"+i).innerHTML = ""
            valArr.push({
                idx:i,
                nola:convArray[i].nola,
                label:convArray[i].label,
                ratio1:Number(convArray[i].ratio.split("⏩")[0]),
                ratio2:Number(convArray[i].ratio.split("⏩")[1]),
                amount:val,
                comR:0,
                payout:0,
                autoSwap:0,
                split:0,
                nolaName:""
            })
        }
    }

    cpt = 0
    for(let i=1;i<valArr.length;i++){
        if(valArr[i].amount > 0 && valArr[i].amount >= valArr[0].amount /2 & valArr[i].idx!==4 ){
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
                txt = round5(Math.floor(it.amount/it.ratio1*it.ratio2))
                it.payout = txt
                if(it.comR>0 && it.idx!==4 ){
                    let comB = round5(Math.floor(txt*(comR/100)))
                    it.payout = txt+comB
                    txt = txt + "+" + comB + "= " + it.payout
                            }
                getID(elem).innerHTML = spanText("lime",txt,16)
            }
   

    })
    currentO = valArr

    dailySwaps.forEach(swp=>{
        if(swp.active && currentO.filter(itm=>itm.idx===swp.fromIdx)[0].amount > 0){
            let fromItm = currentO.filter(it=>it.idx === swp.fromIdx)[0]
            let toItm =  currentO.filter(it=>it.idx === swp.toIdx)[0]
            cut = roundUP(Math.ceil(fromItm.payout*(swp.percent/100)),5)
            if(swp.fromIdx===1 || swp.fromIdx===2){cut = roundUP(cut,20)}
            if(fromItm.payout>=cut){
                fromItm.autoSwap = cut*-1
                let r1 = Number(swp.ratio.split(":")[0])
                let r2 = Number(swp.ratio.split(":")[1])
                let swapV =  Math.floor(((fromItm.autoSwap*-1)/r1)*r2)
                toItm.autoSwap = "+"+roundUP(swapV,5)
            }
        }
    })


let thisEl = currentO.filter(it=>it.idx===3)[0]
txt = thisEl.payout+thisEl.autoSwap 
if( txt > 0){
    getID("apBank1").value = txt
    getID("apBank2").value = 0
    getID("apRange").max = txt
    getID("apRange").min = 0
} 

    checkNOLA()

}


function checkNOLA(){
//    currentO.nolaName = getID("nolaName").value !=="" ? getID("nolaName").value : ""
    recap = "Tower tier "
    let towerT = undefined
    let grp = document.getElementsByName("towerTier")
    grp.forEach(it=>{if(it.checked){ towerT = Number(it.value)+1}})
    txt = comboArr[towerT].label + "<br>"
//    txt += currentO.nolaName !=="" ? "Player : " + currentO.nolaName + "<br>": "" 
    recap += txt + "<br>"
    for(let i=0;i<currentO.length;i++){
        let itm = currentO.filter(it=>it.idx===i)[0]
        txt = itm.autoSwap === 0 ?
        itm.nola + " > " + itm.amount + " > " + itm.payout :
        itm.nola + " > " + itm.amount + " > " + itm.payout + "(autoSwap "+itm.autoSwap+" = "
        +(itm.payout+parseInt(itm.autoSwap))+" )"

        recap += txt + "<br>"
    }
    let src = currentO.filter(it=>it.idx===3)[0]
    if(src.split!==0){
        recap += "<br>**Split AP : get " + (src.payout+src.autoSwap+src.split)+
        " AP and " + ((src.split*-1)*15) + " Lemonade(s)**"
    }
    getID("nolaP").textContent = recap.replaceAll("<br>","\n")
}

function round5(val){
    let rVal = Number(val)
    if(rVal!==0){
        let nbStr = val.toString()
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

function roundUP(val,step){
    let rVal = Number(val)
    if(rVal % step !==0){
        let nbStr = val.toString()
        let dgt = Number(nbStr.slice(-2))
        let mult = Math.floor(dgt/step)
        rVal = rVal - dgt + (step*(mult+1))  
    }
    return rVal
}


let masteriesArr = {
    main : [{label:"OJ Mastery MM",val:OJM > MCP*9 ? MCP*9 : OJM,cap:MCP*9},
            {label:"Lemonade Mastery MM",val:LEM > MCP*9 ? MCP*9 : LEM,cap:MCP*9},
            {label:"LNs Mastery MM",val:LNM > MCP*9 ? MCP*9 :LNM,cap:MCP*9},],
    subs : [{label:"Cider Mastery GM",val:CIM > MCP ? MCP : CIM,cap:MCP},
            {label:"AP Mastery GM",val:APM > MCP ? MCP : APM,cap:MCP},]
}

cont = addEle({dad:body,setClass:"contRow",margin:"5px 30px",alignItems:"center"})
    addEle({dad:cont,text:"🟢 Shop Goals",margin:"0 20px"})
    addEle({dad:cont,text:"🔽",border:"lime solid 2px",radius:"5px",
    cursor:"pointer",height:"fit-content",setFunc:(e)=>{
        getID("goals").style.display = e.srcElement.innerHTML==="🔽" ? "block" : "none"
        e.srcElement.innerHTML = e.srcElement.innerHTML==="🔽" ? "🔼" : "🔽" 
    }})
    addEle({dad:cont,text:"📈",fontS:"22px",marginL:"10px"})
addEle({dad:body,margin:"10px 30px",setID:"goals",border:"lime solid 2px",
radius:"30px",display:"none",padding:"10px",width:"fit-content"})
    let overall = {val:0,cap:0}
    let mcont = addEle({dad:getID("goals"),setClass:"contCol"})
    subC1=addEle({dad:mcont})
    tb = addEle({dad:subC1,what:"table"})
    tr = addEle({dad:tb,what:"tr"})
        addEle({dad:tr,what:"td",text:"Main Goals",textA:"center",
        colSpan:2,borderB:"green solid 1px"})
        masteriesArr.main.forEach(ma=>{
            tr = addEle({dad:tb,what:"tr"})
                addEle({dad:tr,what:"td",text:ma.label,textA:"right"})
            tc = addEle({dad:tr,what:"td",paddingL:"10px"})
            getPrgBar(tc,ma.val,ma.cap)
            overall.val += ma.val
            overall.cap += ma.cap
        })
        tr = addEle({dad:tb,what:"tr",height:"5px"})
        tr = addEle({dad:tb,what:"tr"})
        addEle({dad:tr,what:"td",text:"Main overall",textA:"right"})
        tc = addEle({dad:tr,what:"td",paddingL:"10px"})
            getPrgBar(tc,overall.val,overall.cap,"orange")
    addEle({dad:tb,what:"tr",height:"10px"})
    overall = {val:0,cap:0}
    tr = addEle({dad:tb,what:"tr"})
        addEle({dad:tr,what:"td",text:"Sub Goals",textA:"center",
        colSpan:2,borderB:"green solid 1px"})
        masteriesArr.subs.forEach(ma=>{
            tr = addEle({dad:tb,what:"tr"})
                addEle({dad:tr,what:"td",text:ma.label,textA:"right"})
            tc = addEle({dad:tr,what:"td",paddingL:"10px"})
            getPrgBar(tc,ma.val,ma.cap)
            overall.val += ma.val
            overall.cap += ma.cap
        })
        tr = addEle({dad:tb,what:"tr",height:"5px"})
        tr = addEle({dad:tb,what:"tr"})
        addEle({dad:tr,what:"td",text:"Subs overall",textA:"right"})
        tc = addEle({dad:tr,what:"td",paddingL:"10px"})
            getPrgBar(tc,overall.val,overall.cap,"orange")            

function getPrgBar(dad,val,cap,borderC="green"){
    let percent = Math.floor(val/cap*100)
    let col = percent >= 100 ? "lime" : "yellow"
    subC1 = addEle({dad:dad,border:borderC+" solid 3px",radius:"20px",height:"10px",
    width:"100px",padding:"1px"})
        addEle({dad:subC1,height:"100%",width:percent+"%",backC:col,radius:"20px"})
}

function saveToBrowser(key=savK){
    localStorage.setItem(key,JSON.stringify(orderPool))
}

function mastering(key=savK+"M"){localStorage.setItem(key,"bob")} //mastering()
function shootM(key=savK+"M"){localStorage.removeItem(key)} //shootM()
function checkM(){return localStorage.getItem(savK+"M")}

function loadFromBrowser(key=savK){
    let mySave = localStorage.getItem(key)
    if(mySave===null){return undefined}
    else{return JSON.parse(mySave)}
}

function removeKey(key=savK){
    console.log("do")
    localStorage.removeItem(key)
}

function addH(){
    if(currentO){
        let towerT = undefined
        let grp = document.getElementsByName("towerTier")
        grp.forEach(it=>{if(it.checked){ towerT = Number(it.value)+1}})

        let dt = new Date()
        let dtY = dt.getFullYear()
        let dtM = dt.getMonth()+1
        let dtD = dt.getDate()
        orderPool.push({
            player : getID("nolaName").value !=="" ? getID("nolaName").value : "Player X",
            towerTier:towerT,
            year : dtY,
            month : dtM,
            day : dtD,
            order : currentO,
            nola : getID("nolaP").textContent
        })
        saveToBrowser()
        getID("historyC").innerHTML = "sav : " + currentO.nolaName
    }
}

function readH(){
    let myS = loadFromBrowser()
    console.log(myS)
}

checkDailyMods()