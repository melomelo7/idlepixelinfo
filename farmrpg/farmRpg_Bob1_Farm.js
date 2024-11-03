let cont = undefined
let subC1 = undefined
let subC2 = undefined
let txt = undefined
let tb = undefined
let tr = undefined
let tc = undefined
const userN = "Bob1"

let itemPool = []

let lastUp = "08/26 23:40<br>"//+spanText("red","Page In test Mode atm")

const body = document.querySelector("body")

let welcome = spanText("lime","🐮 Welcome to "+userN+"'s Farm ! 🐷",40)

let intro = spanText("",
`
Formerly a Strong Fisherman, my starting goal was to take down<br>
all the fishing-MMs for the tower needs (floors 200+) ...<br><br>
Now that this is over, I can turn the received nets to others<br>
through my activity of converting.<br><br>
The shop is evolving as I approach Tower 200 ... Stay tuned ... 👻
`,18)

let convTxt = `
Shop `+spanText("yellow","V1.0")+` : nets only, Ratio 1000⇔70<br>
Shop `+spanText("yellow","V2.0")+` : nets only, Ratio 1000⇔75<br>
Shop `+spanText("yellow","V2.1")+` : nets Ratio 1000⇔75, fruits to ratios 3.5⇔1 OR 35⇔1 & 25⇔1<br>
`
let shopV = "2.1"

let convArray = [
    {label:"Small Nets 🐟",to:"Large Nets",ratio:"1000:75"},
    {label:"Oranges 🍊",to:"Orange Juice",ratio:"3.5:1"},
    {label:"Lemons 🍋",to:"Lemonade",ratio:"3.5:1"},
    {label:"Lemons 🍋",to:"AP(Arnold Palmer)",ratio:"35:1"},
    {label:"Apples 🍎",to:"Apple Cider",ratio:"25:1"},
]

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


cont = addEle({dad:body,setClass:"contRow",margin:"20px 30px",alignItems:"center"})
    addEle({dad:cont,text:"Conversion Shop "+spanText("yellow","V"+shopV,20),margin:"0 20px"})
    addEle({dad:cont,text:"🔽",border:"lime solid 2px",radius:"5px",setID:"shopCont",
    cursor:"pointer",height:"fit-content",setFunc:(e)=>{
        getID("shop").style.display = e.srcElement.innerHTML==="🔽" ? "block" : "none"
        e.srcElement.innerHTML = e.srcElement.innerHTML==="🔽" ? "🔼" : "🔽" 
    }})
cont = addEle({dad:body,margin:"10px 30px",setID:"shop",border:"lime solid 2px",
radius:"30px",display:"none",padding:"10px",width:"fit-content"})
    addEle({dad:cont,text:convTxt})
    subC1 = addEle({dad:cont,text:spanText("lime","-- Test Converting --",20),marginT:"20px",textA:"center"})
    tb = addEle({dad:subC1,what:"table",marginT:"10px"})

        tr = addEle({dad:tb,what:"tr"})
             addEle({dad:tr,what:"td",text:"From",textA:"center",borderB:"solid teal 2px"})
             addEle({dad:tr,what:"td",text:"To",textA:"center",borderB:"solid teal 2px"})
             addEle({dad:tr,what:"td",text:"Amount",textA:"center",borderB:"solid teal 2px"})
             addEle({dad:tr,what:"td",text:"For You",textA:"center",borderB:"solid teal 2px",minWidth:"80px"})

    for(let i=0;i<convArray.length;i++){
        tr = addEle({dad:tb,what:"tr"})
             addEle({dad:tr,what:"td",text:convArray[i].label,textA:"right",padding:"5px"})
             addEle({dad:tr,what:"td",text:convArray[i].to,textA:"center",padding:"5px"})
        tc = addEle({dad:tr,what:"td",padding:"5px"})
             addEle({dad:tc,what:"input",isInput:true,setVal:0,setID:"amount:"+i,
             width:"60px",textA:"center",setFunc:(e)=>{evalConv(e)}})
             addEle({dad:tr,what:"td",setID:"eval:"+i})
    }
getID("shopCont").click()


function evalConv(e){
    let amt = e.srcElement.value
    let idx = e.srcElement.id.split(":")[1]
    if( !isNaN(amt) && amt!==""){
        amt = Number(amt)
        let val1 = Number(convArray[idx].ratio.split(":")[0])
        let val2 = Number(convArray[idx].ratio.split(":")[1])
        getID("eval:"+idx).innerHTML = spanText("yellow", Math.floor(amt/val1*val2),20)
    } else {getID("eval:"+idx).innerHTML = spanText("","💩",30)}
}

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