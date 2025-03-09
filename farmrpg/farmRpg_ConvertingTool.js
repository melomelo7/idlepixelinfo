
const body = document.querySelector("body")

const outputs = ["LN","OJ / Lemonade","AP","Cider"]
const outputsImg = [
    {label:"LN",img:"https://farmrpg.com/img/items/lnet.png"},
    {label:"OJ / Lemonade",img:"https://farmrpg.com/img/items/orangejuice.png+https://farmrpg.com/img/items/lemonade.png"},
    {label:"AP",img:"https://farmrpg.com/img/items/ap.png"},
    {label:"Cider",img:"https://farmrpg.com/img/items/8984.png"},
]

const roundings = ["Up","Down","Closest 5"]

const rateB =[
{output:"LN",rate:"1000:70",bonus:0,rounding:roundings[2]},
{output:"OJ / Lemonade",rate:"3:1",bonus:0,rounding:roundings[2]},
{output:"AP",rate:"30:1",bonus:0,rounding:roundings[2]},
{output:"LN",rate:"1000:75",bonus:0,rounding:roundings[2]},
{output:"Cider",rate:"22:1",bonus:0,rounding:roundings[2]},
]

let rateU = []

let currentRate = undefined

let settings = addEle({dad:body,setClass:"contCol",padding:"5px",width:"100%"})
    let cr = addEle({dad:settings,setClass:"contRow",alignItems:"center"})
        addEle({dad:cr,text: "Settings",marginL:"5px"})
        addEle({dad:cr,text: spanText("yellow","⚙",24),margin:"0 10px"})
        addEle({dad:cr,text: spanText("lime","🔽",20),
        border:"yellow solid 2px",radius:"5px",padding:"2px 2px 2px 2px",
        cursor:"pointer",setFunc:(e)=>{
            if(setC.style.display = e.srcElement.innerHTML=== "🔽"){fillSetCA()}
            setC.style.display = e.srcElement.innerHTML=== "🔽" ? "flex" : "none"
            e.srcElement.innerHTML = e.srcElement.innerHTML=== "🔽" ? "🔼" : "🔽" 
        }})
        let info = addEle({dad:cr,text: "Infos",marginL:"20px"})
    let setC = addEle({dad:settings,setClass:"contRow",borderL:"yellow solid 3px",
    padding:"5px",display:"none",margin:"0 10px 10px 10px",})
        let setCA = addEle({dad:setC,setClass:"contCol"})
        let setCB = addEle({dad:setC,setClass:"contCol",margin:"0 10px",minWidth:"350px"})
        let setCC = addEle({dad:setC,setClass:"contCol"})

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

    addEle({dad:setCA,text:"Custom ("+rateU.length+")",setClass:"btn",backC:"blue",border:"yellow solid 2px",
    padding:"10px",width:"100px",setID:"customBtn",setFunc:setCustom})

    let rateCont = addEle({dad:setCA,setClass:"contCol",alignItems:"center",})
    addEle({dad:rateCont,text:"Use Rates :",marginT:"10px"})

    let rateCont2 = addEle({dad:rateCont,setClass:"contCol",alignItems:"left",})
        let cont = addEle({dad:rateCont2,setClass:"contRow"})
            addEle({dad:cont,what:"radio",isInput:true,setVal:"Basic",setName:"rateSet"
            ,setFunc:(e)=>{ currentRate = e.srcElement.value}})
            addEle({dad:cont,text:"Basic"})
        cont = addEle({dad:rateCont2,setClass:"contRow",marginB:"10px"})
            addEle({dad:cont,what:"radio",isInput:true,setVal:"Custom",setName:"rateSet",
            setID:"customRate",setFunc:(e)=>{ currentRate = e.srcElement.value}})
            addEle({dad:cont,text:"Custom"})

    checkAvailRates()
}

function checkAvailRates(){
    if(rateU.length===0){getID("customRate").disabled = true,document.getElementsByName("rateSet")[0].click()}
    else                {getID("customRate").disabled = false}
}

function dispRates(basic = true){
    cleanParent(setCC)
    let arr = undefined
    if(basic)
         {arr = rateB;cleanParent(setCB)}
    else {arr = rateU}
    let cpt=0
    arr.forEach(it=>{
        let cont = addEle({dad:setCC,setClass:"contRow",margin:"3px"})
            if(!basic){
                addEle({dad:cont,text:"Delete",marginR:"10px",border:"yellow solid 2px",padding:"0 5px",
                radius:"5px",backC:"brown",setID:"customDel:"+cpt,cursor:"pointer",setFunc:(e)=>{
                    let idx = Number(e.srcElement.id.split(":")[1])
                    rateU.splice(idx,1)
                    getID("customBtn").innerHTML = "Custom ("+rateU.length+")"
                    checkAvailRates()
                    setCustom()
                }})    
            }
            addEle({dad:cont,text:it.output,textA:"center",minWidth:"100px",backC:"teal",padding:"2px"})
            addEle({dad:cont,text:"rate : "+it.rate,textA:"center",minWidth:"100px",margin:"0 10px",backC:"teal",padding:"2px"})
            addEle({dad:cont,text:"bonus : "+it.bonus+" %",textA:"center",minWidth:"100px",backC:"teal",padding:"2px"})
            addEle({dad:cont,text:"rounding : "+it.rounding,textA:"center",minWidth:"fit-content",backC:"teal",padding:"2px",marginL:"10px"})
        cpt++
    })
}

function setCustom(){

    cleanParent(setCB)
    cleanParent(setCC)

    if(rateU.length > 0){dispRates(basic=false)}

    addEle({dad:setCB,text:"Add a Custom Rate",borderB:"solid 2px yellow",width:"fit-content"})
    let cont = addEle({dad:setCB,setClass:"contRow",margin:"3px"})
        addEle({dad:cont,text:"Type of Converting : "})
        outputs.forEach(out=>{
            addEle({dad:cont,what:"radio",isInput:true,setVal:out,setName:"outputsR",setFunc:()=>{
                let grp = document.getElementsByName("outputsR")
                grp.forEach(it=>{
                    if(it.checked){ getID("customT").innerHTML = it.value}
                })
            }})
        })
        addEle({dad:cont,setID:"customT",marginL:"5px",textC:"lime"})
    document.getElementsByName("outputsR")[0].click()
    
    cont = addEle({dad:setCB,setClass:"contRow",margin:"3px",alignItems:"center"})
        addEle({dad:cont,text:"Rate of Converting =",marginR:"5px"})
        addEle({dad:cont,what:"input",isInput:true,width:"50px",setID:"customR1",setVal:1000,
        textA:"center",textC:"lime",backC:"black",setFunc:calcTestR})
        addEle({dad:cont,text:":",fontS:"22px",margin:"0 10px"})
        addEle({dad:cont,what:"input",isInput:true,width:"50px",setID:"customR2",setVal:70,
        textA:"center",textC:"lime",backC:"black",setFunc:calcTestR})

    cont = addEle({dad:setCB,setClass:"contRow",margin:"3px",alignItems:"center"})
        addEle({dad:cont,text:"Bonus(%) Payout =",marginR:"5px"})
        addEle({dad:cont,what:"input",isInput:true,width:"50px",setID:"customB",setVal:0,
        textA:"center",textC:"lime",backC:"black",setFunc:calcTestR})
        
    cont = addEle({dad:setCB,setClass:"contRow",margin:"3px"})
        addEle({dad:cont,text:"Type of Rounding :"})
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
        textA:"center",textC:"lime",backC:"black",setFunc:calcTestR})

    cont = addEle({dad:setCB,setClass:"contRow",margin:"3px",alignItems:"center"})
    addEle({dad:cont,text:"⇒",margin:" 5px"})
    addEle({dad:cont,setID:"testC",text:0,textC:"lime",backC:"black",disabled:true})        


    addEle({dad:setCB,text:"Add to Custom List",setClass:"btn",backC:"blue",
    border:"yellow solid 2px",padding:"10px",setFunc:()=>{
        if(testNum(getID("customR1").value) && testNum(getID("customR1").value)){
            rateU.push({

                output:getID("customT").innerHTML,
                rate:getID("customR1").value+":"+getID("customR2").value,
                bonus:getID("customB").value,
                rounding:getID("roundingT").innerHTML,

            })
            getID("customBtn").innerHTML = "Custom ("+rateU.length+")"
            setCustom()
        }
        checkAvailRates()
    }})


    addEle({dad:setCB,text:"Save Custom List to browser",setClass:"btn",backC:"blue",
    border:"yellow solid 2px",padding:"10px",setFunc:()=>{
        info.innerHTML = spanText("fuchsia","Not yet working",22,true)
        setTimeout(()=>{info.innerHTML =""},1000)
        if(rateU.length>0){

        } else {

        } 

    }})



    document.getElementsByName("roundingR")[0].click()
}

function calcTestR(){
    let val = Number(getID("testR").value)
    let valD = Number(getID("customR1").value)
    let valM = Number(getID("customR2").value)
    let valB = Number(getID("customB").value)
    if(testNum(val) && testNum(valD) && testNum(valM)){
        let rtn = calcConvert(val,valD,valM,valB,getID("roundingT").innerHTML)
        let txt = rtn.payR +" (+"+rtn.bonR+") = " + (rtn.payR+rtn.bonR) + 
                " from " + rtn.pay +" (+"+rtn.bon+") = " + (rtn.pay+rtn.bon)
        getID("testC").innerHTML = txt 
        }
    else
        {getID("testC").innerHTML = spanText("fuchsia","Input Error") }
}

function setTools(){
    cleanParent(toolsC)
    let arr = undefined
    if (currentRate === undefined){currentRate = "Basic"}
    arr = currentRate === "Basic" ? arr = rateB : arr = rateU
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

    let tbC = addEle({dad:dad,border:"yellow solid 2px",radius:"5px",padding:"2px",margin:"5px"})
    let tb = addEle({dad:tbC,what:"table"})
        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:itm.output,border:"solid teal 2px",minWidth:"110px",
            textA:"center",setID:"type:"+idx})
          tc = addEle({dad:tr,what:"td",border:"solid teal 2px",textA:"center"})
            let cont = addEle({dad:tc,setClass:"contRow",justifyC:"center",minWidth:"60px"})
                let txt = outputsImg.filter(it=>it.label===itm.output)[0].img
            if(txt.includes("+")){
                addEle({dad:cont,what:"img",imgFullSrc:txt.split("+")[0],imgSize:25})
                addEle({dad:cont,what:"img",imgFullSrc:txt.split("+")[1],imgSize:25})
            } else {
                addEle({dad:cont,what:"img",imgFullSrc:txt,imgSize:25})
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
            addEle({dad:tc,what:"input",isInput:true,width:"100px",textA:"center",setID:"order:"+idx,
            setFunc:(e)=>{toolCalc(e.srcElement.id)}})

        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:"Payout :",border:"solid teal 2px",textA:"center"})
            addEle({dad:tr,what:"td",text:0,border:"solid teal 2px",textA:"center",setID:"payout:"+idx})

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
        div = Number(getID("rate:"+idx).innerHTML.split(":")[0])
        mul = Number(getID("rate:"+idx).innerHTML.split(":")[1])
        bon = Number(getID("bonus:"+idx).innerHTML)
        rnd = getID("rounding:"+idx).innerHTML
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
    }

}

function testNum(num){
    let test = true

    if(!isNaN(num)){
        let val = Number(num)
        if(val===0){test=false}
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



/*
let convArray = [
    {ref:0,goal:false,nola:"N",label:"Small 🐟Nets",to:"⏩ LN (Large 🐟Nets)",ratio:"1000⏩75"},
    {ref:1,goal:false,nola:"O",label:"Oranges 🍊",to:"⏩ Orange Juice",ratio:"3⏩1"},
    {ref:2,goal:false,nola:"L(LE)",label:"Lemons 🍋",to:"⏩ Lemonade",ratio:"3⏩1"},
    {ref:3,goal:false,nola:"L(AP)",label:"Lemons 🍋",to:"⏩ AP (Arnold Palmer)",ratio:"30⏩1"},
    {ref:4,goal:true,nola:"A",label:"Apples 🍎",to:"⏩ Apple Cider",ratio:"20⏩1"},
]

let tbFrm = addEle({dad:body,margin:"10px"})
let tbm = addEle({dad:tbFrm,what:"table"})
    let trm1 = addEle({dad:tbm,what:"tr"})
        let trm1tc1 = addEle({dad:trm1,what:"td",padding:"3px"})
        let trm1tc2 = addEle({dad:trm1,what:"td",padding:"3px"})
    let trm2 = addEle({dad:tbm,what:"tr"})
        let trm2tc1 = addEle({dad:trm2,what:"td",padding:"3px"})
        let trm2tc2 = addEle({dad:trm2,what:"td",padding:"3px"})
let grid = [
    {dad:trm1tc1,grid:"A1-"},{dad:trm1tc2,grid:"A2-"},
    {dad:trm2tc1,grid:"B1-"},{dad:trm2tc2,grid:"B2-"},
  //  {dad:trm3tc1,grid:"C1-"},{dad:trm3tc2,grid:"C2-"},
]

grid.forEach(gr=>{
    let tbFr = addEle({dad:gr.dad,margin:"5px",border:"teal solid 2px",
    radius:"10px",padding:"5px"})
    let tb = addEle({dad:tbFr,what:"table"})

    convArray.forEach(itm=>{
        let tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:itm.label,padding:"3px",textA:"right"})
            addEle({dad:tr,what:"td",text:itm.to,padding:"3px"})
            let txt = itm.ratio.split("⏩")[0]+":"+itm.ratio.split("⏩")[1]
            addEle({dad:tr,what:"td",text:txt,padding:"3px",textA:"center"})
        let tc = addEle({dad:tr,what:"td",padding:"3px"})
            addEle({dad:tc,what:"input",isInput:true,width:"100px",
            textA:"center",setID:gr.grid+"Val:"+itm.ref,setFunc:(e)=>{calc(e)}})
            addEle({dad:tr,what:"td",padding:"3px",setID:gr.grid+"dsp:"+itm.ref})
    })
})

let fork = addEle({dad:body,setClass:"contRow"})

let proNets = addEle({dad:fork,setClass:"contRow",width:"fit-content",height:"fit-content",
border:"yellow solid 3px",radius:"20px",padding:"10px",marginL:"20px"})

    let proN1 = addEle({dad:proNets})
    let proN2 = addEle({dad:proNets,height:"100%"})

    let tb = addEle({dad:proN1,what:"table"})
    let tr = addEle({dad:tb,what:"tr"})
        addEle({dad:tr,what:"td",text:"Rate",border:"solid teal 2px",padding:"5px"})
        let tc = addEle({dad:tr,what:"td",border:"solid teal 2px",padding:"5px"})
          addEle({dad:tc,what:"input",isInput:true,width:"100px",textA:"center",setID:"netRate",
          setFunc:netContracting})
        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:"Baby Nets",border:"solid teal 2px",padding:"5px"})
            tc = addEle({dad:tr,what:"td",border:"solid teal 2px",padding:"5px"})
                addEle({dad:tc,what:"input",isInput:true,width:"100px",textA:"center",setID:"netQt",
                setFunc:netContracting})
        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:"Payout",border:"solid teal 2px",padding:"5px"})
            addEle({dad:tr,what:"td",border:"solid teal 2px",padding:"5px",setID:"netPay",textA:"center",})
        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:"Crafts",border:"solid teal 2px",padding:"5px"})
            addEle({dad:tr,what:"td",border:"solid teal 2px",padding:"5px",setID:"netCraft",textA:"center",})
        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:"Loss",border:"solid teal 2px",padding:"5px"})
            addEle({dad:tr,what:"td",border:"solid teal 2px",padding:"5px",setID:"netLoss",textA:"center",})
                
    tb = addEle({dad:proN2,what:"table"})
        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:"Inventory",border:"solid teal 2px",padding:"5px"})
            tc = addEle({dad:tr,what:"td",border:"solid teal 2px",padding:"5px"})
                addEle({dad:tc,what:"input",isInput:true,width:"100px",textA:"center",setID:"invSize",
                setFunc:invManage})
        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:"Baby Nets",border:"solid teal 2px",padding:"5px"})
            tc = addEle({dad:tr,what:"td",border:"solid teal 2px",padding:"5px"})
                addEle({dad:tc,what:"input",isInput:true,width:"100px",textA:"center",setID:"invBaby",
                setFunc:invManage})
        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:"Antlers",border:"solid teal 2px",padding:"5px"})
            tc = addEle({dad:tr,what:"td",border:"solid teal 2px",padding:"5px"})
                addEle({dad:tc,what:"input",isInput:true,width:"100px",textA:"center",setID:"invAntler",
                setFunc:invManage})
        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:"Excess LNs",border:"solid teal 2px",padding:"5px"})
            addEle({dad:tr,what:"td",border:"solid teal 2px",padding:"5px",setID:"invExcess",textA:"center",})
        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:"Contractable",border:"solid teal 2px",padding:"5px"})
            addEle({dad:tr,what:"td",border:"solid teal 2px",padding:"5px",setID:"invContract",textA:"center",})


    let proNets2 = addEle({dad:fork,setClass:"contRow",width:"fit-content",height:"fit-content",
    border:"yellow solid 3px",radius:"20px",padding:"10px",marginL:"20px"})
        let proN2C = addEle({dad:proNets2})

        tb = addEle({dad:proN2C,what:"table",border:"red solid 2px"})
        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:"Rate",border:"solid teal 2px",padding:"5px"})
            tc = addEle({dad:tr,what:"td",border:"solid teal 2px",padding:"5px"})
            let cont = addEle({dad:tc,setClass:"contRow",margin:"5px"})
                addEle({dad:cont,what:"radio",isInput:true,setVal:"1000:70",setName:"rates",setFunc:updRate})
                addEle({dad:cont,text:"1000:70"})
                cont = addEle({dad:tc,setClass:"contRow",margin:"5px"})
                addEle({dad:cont,what:"radio",isInput:true,setVal:"1000:75",setName:"rates",setFunc:updRate})
                addEle({dad:cont,text:"1000:75"})
                cont = addEle({dad:tc,setClass:"contRow",margin:"5px"})
                addEle({dad:cont,what:"radio",isInput:true,setVal:"3:1",setName:"rates",setFunc:updRate})
                addEle({dad:cont,text:"3:1"})
                cont = addEle({dad:tc,setClass:"contRow",margin:"5px"})
                addEle({dad:cont,what:"radio",isInput:true,setVal:"30:1",setName:"rates",setFunc:updRate})
                addEle({dad:cont,text:"30:1"})

function updRate(){
    let grp = document.getElementsByName("rates")
    grp.forEach(it=>{if(it.checked){getID("proRate").value=it.value}})
    runPro()
}

                addEle({dad:tc,what:"input",isInput:true,width:"100px",textA:"center",setID:"proRate",
                setFunc:runPro})

            tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:"Bonus %",border:"solid teal 2px",padding:"5px"})
            tc = addEle({dad:tr,what:"td",border:"solid teal 2px",padding:"5px"})
                addEle({dad:tc,what:"input",isInput:true,width:"100px",textA:"center",setID:"proBonus",
                setVal:5,setFunc:runPro})
    

        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:"Order",border:"solid teal 2px",padding:"5px"})
            tc = addEle({dad:tr,what:"td",border:"solid teal 2px",padding:"5px"})
                addEle({dad:tc,what:"input",isInput:true,width:"100px",textA:"center",setID:"proOrder",
                setFunc:runPro})

        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:"Payout",border:"solid teal 2px",padding:"5px"})
            addEle({dad:tr,what:"td",textA:"center",border:"solid teal 2px",padding:"5px",setID:"proPayout"})

        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:"Craft",border:"solid teal 2px",padding:"5px"})
            addEle({dad:tr,what:"td",textA:"center",border:"solid teal 2px",padding:"5px",setID:"proCraft"})
                    
        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:"Lose",border:"solid teal 2px",padding:"5px"})
            addEle({dad:tr,what:"td",textA:"center",border:"solid teal 2px",padding:"5px",setID:"proLose"})



function runPro(){
    let rat1 = Number(getID("proRate").value.split(":")[0])
    let rat2 = Number(getID("proRate").value.split(":")[1])
    let bon = Number(getID("proBonus").value)
    let amt = Number(getID("proOrder").value)

    let cft = undefined
    if(getID("proRate").value.includes("1000"))
        {cft = Math.ceil(amt / 25 * 1.45)}
    else if(getID("proRate").value==="3:1")
        {cft = Math.ceil(amt/6*1.45) }
    else 
        {cft = Math.floor(Math.floor(amt/6*1.45)/20*1.45)}
    
    let payV = Math.ceil(amt / rat1 * rat2)
    payV = round5(payV)
    let payB = Math.floor(payV*bon/100)
    payB = round5(payB)
    let tot = payV + payB

    getID("proPayout").innerHTML = payV + " + " +payB+ " = " + tot
    getID("proCraft").innerHTML = cft
    getID("proLose").innerHTML = tot - cft

}

function netContracting(){
    let rt = getID("netRate").value
    let nets = getID("netQt").value
   getID("netPay").innerHTML = nets/1000*rt
   getID("netCraft").innerHTML = nets/25*1.45
   getID("netLoss").innerHTML = getID("netPay").innerHTML - getID("netCraft").innerHTML
}

function invManage(){
    let inv = Number(getID("invSize").value)
    let bab = Number(getID("invBaby").value)
    let ant = Number(getID("invAntler").value)
    let subT = Math.ceil(ant*1.45)+bab-inv
    getID("invExcess").innerHTML = Math.ceil(subT/25*1.45)
    getID("invContract").innerHTML = Math.ceil((Number(getID("invExcess").innerHTML)/0.012)/1000)*1000
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



function calc(e){
    let idx = Number(e.srcElement.id.split(":")[1])
    let itm = convArray[idx]
    let tgt = e.srcElement.id.split("-")[0]+"-dsp:"+e.srcElement.id.split(":")[1] 
    let r1 = Number(itm.ratio.split("⏩")[0])
    let r2 = Number(itm.ratio.split("⏩")[1])
    txt = Math.floor((Number(e.srcElement.value)/r1)*r2)
    getID(tgt).innerHTML = roundUP(txt,5)
}


*/