
function cleanParent(parent){
    while(parent.children.length >0){
        parent.removeChild(parent.lastChild)
    }}

function getID(id){return document.getElementById(id)}

function addEle({
    addToTop = false,
    dad = undefined,
    what = "div",
    text = "",
    setID = "",
    setClass = "none",
    isInput = false,
    disabled = false,
    setName = "",
    setVal = "",
    setFunc = undefined,
    textC = "",
    textA = "",
    backC = "",
    backG = "",
    height = "",
    width = "",
    minWidth = "",
    maxWidth = "",
    border = "",
    radius = "",
    radiusTL = "",
    radiusTR ="",
    radiusBL = "",
    radiusBR = "",
    padding = "",
    margin = "",
    marginT="",
    marginL="",
    marginR="",
    marginB="",
    display = "",
    justifyR = false,
    alignItems = "",
    overflowX = "",
    flDir = "",
    log = false}){

    let thisObj = undefined

    if(!isInput){
        thisObj = document.createElement(what)
    } else {
        thisObj = document.createElement("input"); thisObj.setAttribute("type",what)
    }

    if(text!==""){thisObj.innerHTML = text}

    if(setID!==""){thisObj.setAttribute("id",setID)}

    if(setClass!=="none"){thisObj.setAttribute("class",setClass)}

    if(setName!==""){thisObj.setAttribute("name",setName)}

    if(setVal!==""){thisObj.setAttribute("value",setVal)}

    if(setFunc){
        switch(what){
            case "div" : thisObj.addEventListener("click",setFunc) ; break
            case "radio" : thisObj.addEventListener("change",setFunc) ; break
            default : console.log("missing correct addeventlistener here")
            } 
        }

    if(textC!==""){thisObj.style.color = textC}

    if(textA!==""){thisObj.style.textAlign = textA}

    if(backC!==""){thisObj.style.backgroundColor = backC}

    if(backG!==""){thisObj.style.background = backG}

    if(height!==""){thisObj.style.height = height}

    if(width!==""){thisObj.style.width = width}

    if(border!==""){thisObj.style.border = border}

    if(radius!==""){thisObj.style.borderRadius = radius}
    if(radiusTL!==""){thisObj.style.borderTopLeftRadius = radiusTL}
    if(radiusTR!==""){thisObj.style.borderTopRightRadius = radiusTR}
    if(radiusBL!==""){thisObj.style.borderBottomLeftRadius = radiusBL}
    if(radiusBR!==""){thisObj.style.borderBottomRightRadius = radiusBR}

    if(minWidth!==""){thisObj.style.minWidth=minWidth}
    if(maxWidth!==""){thisObj.style.maxWidth=maxWidth}

    if(padding!==""){thisObj.style.padding=padding}

    if(margin!==""){thisObj.style.margin=margin}
    if(marginT!==""){thisObj.style.marginTop=marginT}
    if(marginL!==""){thisObj.style.marginLeft=marginL}
    if(marginR!==""){thisObj.style.marginRight=marginR}
    if(marginB!==""){thisObj.style.marginBottom=marginB}

    if(display!==""){thisObj.style.display=display}

    if(disabled){thisObj.disabled = true}

    if(justifyR){thisObj.style.justifyContent = "right"}

    if(alignItems!==""){thisObj.style.alignItems = alignItems}

    if(overflowX !== ""){thisObj.style.overflowX = overflowX}

    if(flDir !== ""){thisObj.style.flexDirection = flDir}

    if(log){
        console.log(setVal)
        console.log(dad)
        console.log(setClass)
        console.log(isInput)
        }

    if(addToTop)
        {dad.prepend(thisObj)}
    else
        {dad.appendChild(thisObj)}
    
    return thisObj
}

const body = document.querySelector("body")

let myArr = [
    {label:"月",value:1},
    {label:"影",value:13},
    {label:"日",value:0},
    {label:"雪",value:16},
    {label:"光",value:9},
    {label:"土",value:6},
    {label:"天",value:15},
    {label:"風",value:11},
    {label:"銀",value:17},
    {label:"木",value:4},
    {label:"雷",value:8},
    {label:"米",value:14},
    {label:"野",value:18},
    {label:"火",value:2},
    {label:"石",value:12},
    {label:"水",value:3},
    {label:"菜",value:19},
    {label:"紙",value:10},
    {label:"金",value:5},
    {label:"升",value:7},
]

let refArr = []

let cpt = 0
let tpArr = []
myArr.forEach((x)=>{tpArr.push(x.label)})
let rnd = undefined
while(tpArr.length > 0){
    rnd = Math.floor(Math.random()*tpArr.length)
    refArr.push(tpArr[rnd])
    tpArr.splice(rnd,1)
    cpt++
    if(cpt > 30){break}
}

let idx=0
let miss=0
let radX = 0
addEle({dad:body,text:"クイズ1：本は？",margin:"10px",setID:"info"})
addEle({dad:body,setClass:"tab",setID:"cont1"})
    for(i=0;i<(myArr.length/4);i++){
        addEle({dad:getID("cont1"),setClass:"contRow",setID:"cont1L"+i})
        for(j=0;j<4;j++){
            radX++
           // console.log(refArr[idx])
            addEle({dad:getID("cont1L"+i),what:"radio",isInput:true,setVal:refArr[idx],setName:"quizz1",
            setID:"radioQ1-"+radX,display:"none",setFunc:()=>{
                let thisGRP = document.getElementsByName("quizz1")
                thisGRP.forEach((x)=>{if(x.checked){
                    let thisItm = myArr.filter(y=>y.label === x.value)[0]
                    let mdt = new Date()
                    let refV = undefined
                    switch(miss){
                        case 0 :
                            refV = mdt.getDay()
                            if(thisItm.value === refV)
                                {getID("info").innerHTML = "当たり、クイズ2：本を数字で言うと？"
                                getID("cont1").style.display = "none"
                                getID("cont2").style.display = "flex"
                                miss = 0}
                            else 
                                {miss++ ; x.checked = false
                                getID("info").innerHTML = "違います...じゃ先を教えてね...(ミス："+miss+")"}
                            break
                        case 1 :
                            refV = mdt.getDay() === 0 ? 6 : mdt.getDay() -1
                            if(thisItm.value === refV)
                                {getID("info").innerHTML = "当たり、クイズ2：本を数字で言うと？"
                                getID("cont1").style.display = "none"
                                getID("cont2").style.display = "flex"
                                miss = 0}
                            else 
                                {miss++ ; x.checked = false
                                getID("info").innerHTML = "違います...じゃ後を教えてね...(ミス："+miss+")"}
                            break
                        case 2 :
                            refV = mdt.getDay() === 6 ? 0 : mdt.getDay() +1
                            if(thisItm.value === refV)
                                {getID("info").innerHTML = "当たり、クイズ2：本を数字で言うと？"
                                getID("cont1").style.display = "none"
                                getID("cont2").style.display = "flex"
                                miss = 0}
                            else 
                                {miss++ ; getID("info").innerHTML = "違います、クイズ終了...(ミス："+miss+")" ; getID("cont1").style.display = "none"}
                            break                            
                    }
                }})
            }})
            addEle({dad:getID("cont1L"+i),text:refArr[idx],setID:"radioQ1L-"+radX,border:"solid 2px blue",
            padding:"5px",radius:"5px",setFunc:(e)=>{
                getID("radioQ1-"+e.srcElement.id.split("-")[1]).click()
            }})
            idx++
        }
    }


idx = 0
radX = 0
addEle({dad:body,setClass:"tab",setID:"cont2",display:"none",width:"fit-content"})
    for(let i=0;i<5;i++){
        addEle({dad:getID("cont2"),setClass:"contRow",setID:"cont2L"+i})
        for(let j=0;j<10;j++){
            idx++
            radX++
            addEle({dad:getID("cont2L"+i),what:"radio",isInput:true,setVal:idx,setName:"quizz2",
            setID:"radioQ2-"+radX ,display:"none",setFunc:()=>{
                let thisGRP = document.getElementsByName("quizz2")
                let mdt = new Date
                thisGRP.forEach((x)=>{if(x.checked){
                    if(mdt.getDate() === Number(x.value)){
                        getID("info").innerHTML = "当たり　！！ クイズ　完成　おめでとう"
                        getID("cont2").style.display = "none"
                        //getID("cont3").style.display = "flex"
                    } else {
                        miss++
                        getID("info").innerHTML = "違います、クイズ終了 ... ミス："+miss
                        if(miss > 2){
                            getID("cont2").style.display = "none"
                        }
                    }
                }})
            }})
            addEle({dad:getID("cont2L"+i),setID:"radioQ2L-"+radX ,text: idx < 10 ? "0"+idx : idx,
            border:"solid 2px blue",padding:"5px",radius:"5px",setFunc:(e)=>{
                getID("radioQ2-"+e.srcElement.id.split("-")[1]).click()
            }})
        }
    }


let kani = [ {label:myArr[11].label,base:[{val:800,unit:"g"},]} , {label:myArr[15].label,base:[{val:975,unit:"cc"},]} , {label:"ソース",base:[{val:360,unit:"cc"},{val:410,unit:"g"}]} , {label:"ミックス",base:[{val:90,unit:"g"},]} , ]
addEle({dad:body,setClass:"tab",setID:"cont3",display:"none",width:"fit-content",})
/*
    addEle({dad:getID("cont3"),setClass:"tab",setID:"cont4",width:"fit-content",})
        addEle({dad:getID("cont4"),setClass:"clickBtn",setID:"",text:"カニクリームコロッケ",
        setFunc:()=>{getID("cont5").style.display = getID("cont5").style.display==="none"?"flex":"none";getID("info").style.display="none"}})
        addEle({dad:getID("cont4"),setClass:"tab",setID:"cont5",display:"none"})
            addEle({dad:getID("cont5"),setClass:"contRow",setID:"cont5Fork"})
                addEle({dad:getID("cont5Fork"),setClass:"contCol",setID:"cont5ForkA",})
                    addEle({dad:getID("cont5ForkA"),setClass:"contRow",setID:"cont5ForkAL1"})
                        addEle({dad:getID("cont5ForkAL1"),text:0,setID:"kmult",minWidth:"50px",textA:"center"})
                        addEle({dad:getID("cont5ForkAL1"),text:myArr[19].label,marginL:"10px"})
                    addEle({dad:getID("cont5ForkA"),setClass:"contRow",setID:"cont5ForkAL2"})
                        let mw = 40
                        addEle({dad:getID("cont5ForkAL2"),setClass:"clickBtn",text:"+",minWidth:mw+"px",setFunc:setK})
                        addEle({dad:getID("cont5ForkAL2"),setClass:"clickBtn",text:"-",minWidth:mw+"px",setFunc:setK})
                    addEle({dad:getID("cont5ForkA"),setClass:"contRow",setID:"cont5ForkAL3"})
                        addEle({dad:getID("cont5ForkAL3"),text:"(+/-0.5)",})
                addEle({dad:getID("cont5Fork"),setClass:"contCol",setID:"cont5ForkB",})
                    addEle({dad:getID("cont5ForkB"),setClass:"tab",setID:"kcont",display:"none",padding:"10px",marginL:"10px"})

function setK(e){
    let thisL = getID("kmult")
    let val = Number(thisL.innerHTML)
    switch(e.srcElement.innerHTML){case "+": val+=0.5 ; break ; case "-": val-=0.5 ; break }
    if(val < 0.5 || val > 10){thisL.innerHTML = val ; getID("kcont").style.display = "none"}
    else {
        thisL.innerHTML = val
        let cont = getID("kcont")
        cleanParent(cont)
        cont.style.display = "flex"
        kani.forEach((itm)=>{
            let txt = itm.label + " : "
            itm.base.forEach((itmB)=>{txt += (itmB.val * (val/0.5))+itmB.unit + " / "})
            txt = txt.slice(0,txt.length-3)
            addEle({dad:cont,text:txt})
        })}}

*/