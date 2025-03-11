
const body = document.querySelector("body")

const srcImgs = "https://farmrpg.com/img/items/"

const outputs = [
    {label:"LN",rate:"1000:70",img:"lnet.png"},
    {label:"OJ / Lemonade",rate:"3:1",img:"orangejuice.png+lemonade.png"},
    {label:"AP",rate:"30:1",img:"ap.png"},
    {label:"Cider",rate:"22:1",img:"8984.png"},
]

const roundings = ["Up","Down","Closest 5"]

const rateB =[
{output:"LN",rate:"1000:70",bonus:0,rounding:roundings[2]},
{output:"OJ / Lemonade",rate:"3:1",bonus:0,rounding:roundings[2]},
{output:"AP",rate:"30:1",bonus:0,rounding:roundings[2]},
{output:"LN",rate:"1000:75",bonus:0,rounding:roundings[2]},
{output:"Cider",rate:"22:1",bonus:0,rounding:roundings[2]},
]

let userI = {
    rateU:[],
    autoLoad : false
}

let currentRate = undefined

let settings = addEle({dad:body,setClass:"contCol",padding:"5px",width:"100%"})
    let cr = addEle({dad:settings,setClass:"contRow",alignItems:"center"})
        addEle({dad:cr,setClass:"btn",text:"⇒ Go Back",
        textC:"lime",setFunc:()=>{
            let lnk = "https://melomelo7.github.io/idlepixelinfo/farmrpg/farmRpg_Bob1_Farm.html"
            window.open(lnk,"_self")
        }})
        addEle({dad:cr,text: "Settings",marginL:"5px"})
        addEle({dad:cr,text: spanText("yellow","⚙",24),margin:"0 10px"})
        addEle({dad:cr,text: spanText("lime","🔽",20),
        border:"yellow solid 2px",radius:"5px",padding:"2px 2px 2px 2px",
        cursor:"pointer",setFunc:(e)=>{
            if(setC.style.display = e.srcElement.innerHTML=== "🔽"){fillSetCA()}
            setC.style.display = e.srcElement.innerHTML=== "🔽" ? "flex" : "none"
            e.srcElement.innerHTML = e.srcElement.innerHTML=== "🔽" ? "🔼" : "🔽" 
        }})
        let info = addEle({dad:cr,marginL:"20px"})
    let setC = addEle({dad:settings,setClass:"contRow",borderL:"yellow solid 3px",
    padding:"5px",display:"none",margin:"0 10px 10px 10px",})
        let setCA = addEle({dad:setC,setClass:"contCol"})
        let Cfork = addEle({dad:setC,setClass:"contCol"})
            let setCB = addEle({dad:Cfork,setClass:"contCol",marginB:"10px"})
            let setCC = addEle({dad:Cfork,setClass:"contCol"})

addEle({dad:body,text:"Set Tools",setClass:"btn",backC:"blue",border:"yellow solid 2px",
padding:"5px",width:"100px",setID:"setToolsBtn",setFunc:setTools})
    
let toolsC = addEle({dad:body,setClass:"contCol",padding:"5px",width:"100%"})        

getID("setToolsBtn").click()


function fillSetCA(){
    cleanParent(setCA)
    cleanParent(setCB)
    cleanParent(setCC)
    addEle({dad:setCA,text:"Basic Rates ("+rateB.length+")",setClass:"btn",backC:"blue",border:"yellow solid 2px",
    padding:"10px",width:"100px",setFunc:dispRates})

    addEle({dad:setCA,text:"Custom ("+userI.rateU.length+")",setClass:"btn",backC:"blue",border:"yellow solid 2px",
    padding:"10px",width:"100px",setID:"customBtn",setFunc:setCustom})

    let rateCont = addEle({dad:setCA,setClass:"contCol",alignItems:"center",})
    addEle({dad:rateCont,text:"Use Rates :",marginT:"10px"})

    let rateCont2 = addEle({dad:rateCont,setClass:"contCol",alignItems:"left",})
        let cont = addEle({dad:rateCont2,setClass:"contRow"})
            addEle({dad:cont,what:"radio",isInput:true,setVal:"Basic",setName:"rateSet"
            ,setFunc:(e)=>{ currentRate = e.srcElement.value ; getID("setToolsBtn").click()}})
            addEle({dad:cont,text:"Basic"})
        cont = addEle({dad:rateCont2,setClass:"contRow",marginB:"10px"})
            addEle({dad:cont,what:"radio",isInput:true,setVal:"Custom",setName:"rateSet",
            setID:"customRate",setFunc:(e)=>{ currentRate = e.srcElement.value ; getID("setToolsBtn").click()}})
            addEle({dad:cont,text:"Custom"})

    checkAvailRates()
}

function checkAvailRates(){
    if(userI.rateU.length===0){getID("customRate").disabled = true,document.getElementsByName("rateSet")[0].click()}
    else                {getID("customRate").disabled = false}
    getID("customBtn").innerHTML = "Custom ("+userI.rateU.length+")"
}

function dispRates(basic = true){
    cleanParent(setCC)
    let arr = undefined
    if(basic)
         {arr = rateB;cleanParent(setCB)}
    else {arr = userI.rateU}
    let cpt=0
    arr.forEach(it=>{
        let cont = addEle({dad:setCC,setClass:"contRow",margin:"2px"})
            if(!basic){
                addEle({dad:cont,text:"Delete",marginR:"10px",border:"yellow solid 2px",padding:"0 5px",
                radius:"5px",backC:"brown",setID:"customDel:"+cpt,cursor:"pointer",setFunc:(e)=>{
                    let idx = Number(e.srcElement.id.split(":")[1])
                    userI.rateU.splice(idx,1)
                    checkAvailRates()
                    setCustom()
                }})    
            }
            addEle({dad:cont,text:it.output,textA:"center",minWidth:"100px",backC:"teal",padding:"2px"})
            addEle({dad:cont,text:"rate : "+it.rate,textA:"center",minWidth:"100px",margin:"0 10px",backC:"teal",padding:"2px"})
            addEle({dad:cont,text:"bonus : "+it.bonus+" %",textA:"center",minWidth:"100px",backC:"teal",padding:"2px"})
            addEle({dad:cont,text:"rounding : "+it.rounding,textA:"center",minWidth:"100px",backC:"teal",padding:"2px",margin:"0 10px"})
        cpt++
    })
}

function setCustom(){

    cleanParent(setCB)
    cleanParent(setCC)

    if(userI.rateU.length > 0){dispRates(basic=false)}

    addEle({dad:setCB,text:"Add a Custom Rate",borderB:"solid 2px yellow",width:"fit-content"})
    let cont = addEle({dad:setCB,setClass:"contRow",margin:"3px",alignItems:"center"})
        addEle({dad:cont,text:"Type of Converting : "})
        outputs.forEach(out=>{
            addEle({dad:cont,what:"radio",isInput:true,setVal:out.label,setName:"outputsR",setFunc:()=>{
                let grp = document.getElementsByName("outputsR")
                grp.forEach(it=>{
                    if(it.checked){ 
                        getID("customT").innerHTML = it.value
                        let txt = outputs.filter(x=>x.label===it.value)[0].rate
                        getID("customR1").value = txt.split(":")[0]
                        getID("customR2").value = txt.split(":")[1]
                    }
                })
            }})
        })
        addEle({dad:cont,setID:"customT",marginL:"5px",textC:"lime"})
    
//    cont = addEle({dad:setCB,setClass:"contRow",margin:"3px",alignItems:"center"})
        addEle({dad:cont,text:"Rate of Converting =",margin:"0 5px 0 20px"})
        addEle({dad:cont,what:"input",isInput:true,width:"50px",setID:"customR1",setVal:1000,
        border:"solid 1px yellow",textA:"center",textC:"lime",backC:"black",setFunc:calcTestR})
        addEle({dad:cont,text:":",fontS:"22px",margin:"0 10px"})
        addEle({dad:cont,what:"input",isInput:true,width:"50px",setID:"customR2",setVal:70,
        border:"solid 1px yellow",textA:"center",textC:"lime",backC:"black",setFunc:calcTestR})

    cont = addEle({dad:setCB,setClass:"contRow",margin:"3px",alignItems:"center"})
        addEle({dad:cont,text:"Bonus(%) Payout =",marginR:"5px"})
        addEle({dad:cont,what:"input",isInput:true,width:"50px",setID:"customB",setVal:0,
        border:"solid 1px yellow",textA:"center",textC:"lime",backC:"black",setFunc:calcTestR})
        
//    cont = addEle({dad:setCB,setClass:"contRow",margin:"3px"})
        addEle({dad:cont,text:"Type of Rounding :",marginL:"20px"})
        roundings.forEach(out=>{
            addEle({dad:cont,what:"radio",isInput:true,setVal:out,setName:"roundingR",setFunc:()=>{
                let grp = document.getElementsByName("roundingR")
                grp.forEach(it=>{
                    if(it.checked){ getID("roundingT").innerHTML = it.value}
                    calcTestR()
                })
            }})
        })
        addEle({dad:cont,setID:"roundingT",marginL:"5px",textC:"lime"})
    

    cont = addEle({dad:setCB,setClass:"contRow",margin:"3px",alignItems:"center"})
        addEle({dad:cont,text:"Test Amount",marginR:"10px"})
        addEle({dad:cont,what:"input",isInput:true,width:"80px",setID:"testR",setVal:0,
        border:"solid 1px yellow",textA:"center",textC:"lime",backC:"black",setFunc:calcTestR})

//    cont = addEle({dad:setCB,setClass:"contRow",margin:"3px",alignItems:"center"})
    addEle({dad:cont,text:"⇒",margin:" 5px"})
    addEle({dad:cont,setID:"testC",text:0,textC:"lime",backC:"black",disabled:true})        

    cont = addEle({dad:setCB,setClass:"contRow"})
        addEle({dad:cont,text:"Add to Custom List",setClass:"btn",backC:"blue",
        border:"yellow solid 2px",padding:"10px",setFunc:()=>{
            if(testNum(getID("customR1").value) && 
            testNum(getID("customR2").value) && testNum(getID("customB").value,true)){
                userI.rateU.push({

                    output:getID("customT").innerHTML,
                    rate:getID("customR1").value+":"+getID("customR2").value,
                    bonus:getID("customB").value,
                    rounding:getID("roundingT").innerHTML,

                })
                checkAvailRates()
                setCustom()
            }
            checkAvailRates()
        }})


        addEle({dad:cont,text:"Save Custom List to browser",setClass:"btn",backC:"blue",
        border:"yellow solid 2px",padding:"10px",backC:"green",setFunc:()=>{
            saveToBrowser()
        }})

        addEle({dad:cont,text:"Load Custom List",setClass:"btn",backC:"blue",
        border:"yellow solid 2px",padding:"10px",backC:"green",setFunc:()=>{
            loadFromBrowser()
        //    checkAvailRates()
        }})

    document.getElementsByName("outputsR")[0].click()
    document.getElementsByName("roundingR")[0].click()
}




function showInfo(msg){
    info.innerHTML = msg
    setTimeout(()=>{info.innerHTML=""},1000)
}

function saveToBrowser(){
    let key = "farmRPGCustomConverting"
    let mySave = JSON.stringify(userI)
    localStorage.setItem(key,mySave)
    showInfo("Custom List Saved ✅")
}

function loadFromBrowser(){
    txt = "Custom List Loaded ✅"
    let key = "farmRPGCustomConverting"
    let mySave = localStorage.getItem(key)
    if(mySave===null)
        {txt="⛔ No Custom List found 👿"}
    else{
        userI=JSON.parse(mySave)
        getID("customBtn").click()
        checkAvailRates()
        if(userI.rateU.length>0){
            document.getElementsByName("rateSet")[1].click()
            getID("setToolsBtn").click()
        }
    }
    showInfo(txt)
    
}




function calcTestR(){
    let val = Number(getID("testR").value)
    let valD = Number(getID("customR1").value)
    let valM = Number(getID("customR2").value)
    let valB = Number(getID("customB").value)
    if(testNum(val) && testNum(valD) && testNum(valM)){
        let rtn = calcConvert(val,valD,valM,valB,getID("roundingT").innerHTML)
        let txt = rtn.payR +" (+"+rtn.bonR+") = " + (rtn.payR+rtn.bonR) + 
                " from " + rtn.pay.toFixed(2) +" (+"+rtn.bon+") = " + (rtn.pay+rtn.bon).toFixed(2)
        getID("testC").innerHTML = txt 
        }
    else
        {getID("testC").innerHTML = spanText("fuchsia","Input Error") }
}

function setTools(){
    cleanParent(toolsC)
    let arr = undefined
    if (currentRate === undefined){currentRate = "Basic"}
    arr = currentRate === "Basic" ? arr = rateB : arr = userI.rateU
    let cpt = 0
    let tbC = addEle({dad:toolsC})
    let tb = addEle({dad:tbC,what:"table"})
    let tr = addEle({dad:tb,what:"tr"})
    arr.forEach(it=>{
        if(cpt % 3===0){tr = addEle({dad:tb,what:"tr"})}
        let tc = addEle({dad:tb,what:"td"})
        buildTool(tc,it,cpt)
        cpt++
    })
}

function buildTool(dad,itm,idx){
    let tr = undefined
    let tc = undefined

    let tbC = addEle({dad:dad,setClass:"contCol",border:"yellow solid 2px",radius:"5px",padding:"5px",margin:"5px"})
    let tb = addEle({dad:tbC,what:"table"})
        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:itm.output,border:"solid teal 2px",minWidth:"110px",
            textA:"center",setID:"type:"+idx})
          tc = addEle({dad:tr,what:"td",border:"solid teal 2px",textA:"center"})
            let cont = addEle({dad:tc,setClass:"contRow",justifyC:"center",minWidth:"60px"})
                let txt = outputs.filter(it=>it.label===itm.output)[0].img
            if(txt.includes("+")){
                addEle({dad:cont,what:"img",imgFullSrc:srcImgs+txt.split("+")[0],imgSize:25})
                addEle({dad:cont,what:"img",imgFullSrc:srcImgs+txt.split("+")[1],imgSize:25})
            } else {
                addEle({dad:cont,what:"img",imgFullSrc:srcImgs+txt,imgSize:25})
            }

        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:"Rate :",border:"solid teal 2px",textA:"center"})
            addEle({dad:tr,what:"td",text:itm.rate,border:"solid teal 2px",textA:"center",setID:"rate:"+idx})

        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:"Bonus + %",border:"solid teal 2px",textA:"center"})
            addEle({dad:tr,what:"td",text:itm.bonus,border:"solid teal 2px",textA:"center",setID:"bonus:"+idx})

        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:"Rounding :",border:"solid teal 2px",textA:"center"})
            addEle({dad:tr,what:"td",text:itm.rounding,border:"solid teal 2px",textA:"center",setID:"rounding:"+idx})
            
        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:"Order",border:"solid teal 2px",textA:"center"})
          tc = addEle({dad:tr,what:"td",border:"solid teal 2px"})
            let inC = addEle({dad:tc,setClass:"contRow",justifyC:"center"})
            addEle({dad:inC,what:"input",isInput:true,width:"100px",textA:"center",setID:"order:"+idx,
            setFunc:(e)=>{toolCalc(e.srcElement.id)}})

        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:spanText("lime","**")+"Target MB Size"+spanText("green","<br>(Option for Detail)"),border:"solid teal 2px",textA:"center"})
          tc = addEle({dad:tr,what:"td",border:"solid teal 2px"})
            inC = addEle({dad:tc,setClass:"contRow",justifyC:"center"})
            addEle({dad:inC,what:"input",isInput:true,width:"100px",textA:"center",setID:"mbs:"+idx,
            setFunc:(e)=>{toolCalc(e.srcElement.id)}})

        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:"Payout (+Bonus):",border:"solid teal 2px",textA:"center"})
            addEle({dad:tr,what:"td",text:0,border:"solid teal 2px",textA:"center",setID:"payout:"+idx})

        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:spanText("lime","**")+"Payout Detail",border:"solid teal 2px",textA:"center"})
            addEle({dad:tr,what:"td",text:spanText("fuchsia","---"),border:"solid teal 2px",textA:"center",setID:"payoutD:"+idx})

        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:"Craft :",border:"solid teal 2px",textA:"center"})
            addEle({dad:tr,what:"td",text:0,border:"solid teal 2px",textA:"center",setID:"craft:"+idx})

        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:"Lose :",border:"solid teal 2px",textA:"center"})
            addEle({dad:tr,what:"td",text:0,border:"solid teal 2px",textA:"center",setID:"lose:"+idx})

}

function calcConvert(amtV,amtD,amtM,amtB,amtR){
        let send = {
            pay:undefined,
            bon:undefined,
            payR:undefined,
            bonR:undefined
        }

        send.pay = amtV / amtD * amtM
        send.bon = send.pay * amtB /100

        switch(amtR)
           {case "Up" : send.payR = Math.ceil(send.pay) ; send.bonR = Math.ceil(send.bon) ; break
            case "Down" : send.payR = Math.floor(send.pay) ; send.bonR = Math.floor(send.bon) ; break
            case "Closest 5" : send.payR = round5(send.pay) ; send.bonR = round5(send.bon) ; break}
    
        return send
}
    

function toolCalc(id){
    let idx = id.split(":")[1]
    let val = getID("order:"+idx).value
    if(testNum(val)){
        val = Number(val)
        let div = Number(getID("rate:"+idx).innerHTML.split(":")[0])
        let mul = Number(getID("rate:"+idx).innerHTML.split(":")[1])
        let bon = Number(getID("bonus:"+idx).innerHTML)
        let rnd = getID("rounding:"+idx).innerHTML
        let mbs = getID("mbs:"+idx).value

        let ret = calcConvert(val,div,mul,bon,rnd)
        let payT = ret.payR+ret.bonR
        getID("payout:"+idx).innerHTML = ret.payR +" + "+ ret.bonR +" = "+ payT
        let craft = undefined
        switch(getID("type:"+idx).innerHTML){
            case "LN" : craft = Math.floor(val/25*1.45) ; break
            case "OJ / Lemonade" : craft = Math.floor(val/6*1.45) ; break
            case "AP" : craft = Math.floor(Math.floor(val/6*1.45)/20*1.45) ; break
            case "Cider" : craft = Math.floor(val/40*1.45) ; break
        }
        getID("craft:"+idx).innerHTML = craft
        getID("lose:"+idx).innerHTML = (ret.payR - craft) + " + " +ret.bonR + " = " + (ret.payR - craft + ret.bonR)

        if (testNum(mbs)){
            let rnds1 = Math.floor(payT/Number(mbs))
            let rnds2 = Math.floor(ret.payR/Number(mbs))
            let txt = payT+" ⇒ "+ rnds1 + "x " + mbs + " + " + (payT-(rnds1*Number(mbs))) 
            if(bon>0)
              {txt += "<br>"+ ret.payR +" ⇒ "+ rnds2 + "x " + mbs + " + " + (ret.payR-(rnds2*Number(mbs)))}
            getID("payoutD:"+idx).innerHTML = txt
        } else { getID("payoutD:"+idx).innerHTML = spanText("fuchsia","---") }

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
