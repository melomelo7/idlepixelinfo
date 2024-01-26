
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
    {label:"光",value:9},
    {label:"土",value:6},
    {label:"天",value:15},
    {label:"風",value:11},
    {label:"木",value:4},
    {label:"雷",value:8},
    {label:"雪",value:14},
    {label:"火",value:2},
    {label:"石",value:12},
    {label:"水",value:3},
    {label:"紙",value:10},
    {label:"金",value:5},
    {label:"銀",value:7},
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
    for(i=0;i<4;i++){
        addEle({dad:getID("cont1"),setClass:"contRow",setID:"cont1L"+i})
        for(j=0;j<4;j++){
            radX++
           // console.log(refArr[idx])
            addEle({dad:getID("cont1L"+i),what:"radio",isInput:true,setVal:refArr[idx],setName:"quizz1",
            setID:"radioQ1-"+radX ,setFunc:()=>{
                let thisGRP = document.getElementsByName("quizz1")
                thisGRP.forEach((x)=>{if(x.checked){
                    let thisItm = myArr.filter(y=>y.label === x.value)[0]
                    let mdt = new Date()
                    let refV = undefined
                    switch(miss){
                        case 0 :
                            refV = mdt.getDay()
                            if(thisItm.value === refV)
                                {getID("info").innerHTML = "当たり、クイズ2：数字で言うと？"
                                getID("cont1").style.display = "none"
                                getID("cont2").style.display = "flex"
                                miss = 0}
                            else 
                                {miss++ ; x.checked = false
                                getID("info").innerHTML = "違います...じゃ先教えてね...(ミス："+miss+")"}
                            break
                        case 1 :
                            refV = mdt.getDay() === 0 ? 6 : mdt.getDay() -1
                            if(thisItm.value === refV)
                                {getID("info").innerHTML = "当たり、クイズ2：数字で言うと？"
                                getID("cont1").style.display = "none"
                                getID("cont2").style.display = "flex"
                                miss = 0}
                            else 
                                {miss++ ; x.checked = false
                                getID("info").innerHTML = "違います...じゃ後教えてね...(ミス："+miss+")"}
                            break
                        case 2 :
                            refV = mdt.getDay() === 6 ? 0 : mdt.getDay() +1
                            if(thisItm.value === refV)
                                {getID("info").innerHTML = "当たり、クイズ2：数字で言うと？"
                                getID("cont1").style.display = "none"
                                getID("cont2").style.display = "flex"
                                miss = 0}
                            else 
                                {miss++ ; getID("info").innerHTML = "違います...ミス："+miss+")" ; getID("cont1").style.display = "none"}
                            break                            
                    }
                }})
            }})
            addEle({dad:getID("cont1L"+i),text:refArr[idx],setID:"radioQ1L-"+radX,setFunc:(e)=>{
                getID("radioQ1-"+e.srcElement.id.split("-")[1]).click()
            }})
            idx++
        }
    }


idx = 0
radX = 0
addEle({dad:body,setClass:"tab",setID:"cont2",display:"none",width:"fit-content"})
//getID("cont2").style.flexWrap = "wrap"
    for(let i=0;i<5;i++){
        addEle({dad:getID("cont2"),setClass:"contRow",setID:"cont2L"+i})
        for(let j=0;j<10;j++){
            idx++
            radX++
            addEle({dad:getID("cont2L"+i),what:"radio",isInput:true,setVal:idx,setName:"quizz2",
            setID:"radioQ2-"+radX ,setFunc:()=>{
                let thisGRP = document.getElementsByName("quizz2")
                let mdt = new Date
                thisGRP.forEach((x)=>{if(x.checked){
                    console.log(x.value)
                    if(mdt.getDate() === Number(x.value)){
                        getID("cont2").style.display = "none"
                        getID("cont3").style.display = "flex"
                    } else {
                        miss++
                        getID("info").innerHTML = "違います ... ミス："+miss
                        if(miss > 2){
                            getID("cont2").style.display = "none"
                        }
                    }
                }})
            }})
            addEle({dad:getID("cont2L"+i),setID:"radioQ2L-"+radX ,text: idx < 10 ? "0"+idx : idx,
            setFunc:(e)=>{
                getID("radioQ2-"+e.srcElement.id.split("-")[1]).click()
            }})
        }
    }



addEle({dad:body,setClass:"tab",setID:"cont3",display:"none",width:"fit-content",text:"当たり　！！ クイズ　完成　おめでとう"})