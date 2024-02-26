
function cleanParent(parent){while(parent.children.length >0){parent.removeChild(parent.lastChild)}}
function getID(id){return document.getElementById(id)}
function addEle({
    addToTop = false,dad = undefined,what = "div",text = "",setID = "",setClass = "none",isInput = false,disabled = false,setName = "",
    setVal = "",setFunc = undefined,textC = "",textA = "",backC = "",backG = "",height = "",width = "",minWidth = "",maxWidth = "",border = "",
    radius = "",radiusTL = "",radiusTR ="",radiusBL = "",radiusBR = "",padding = "",margin = "",marginT="",marginL="",marginR="",
    marginB="",display = "",justifyR = false,alignItems = "",overflowX = "",flDir = "",log = false})
    {let thisObj = undefined
    if(!isInput){thisObj = document.createElement(what)}
    else{thisObj = document.createElement("input"); thisObj.setAttribute("type",what)}
    if(text!==""){thisObj.innerHTML = text}
    if(setID!==""){thisObj.setAttribute("id",setID)}
    if(setClass!=="none"){thisObj.setAttribute("class",setClass)}
    if(setName!==""){thisObj.setAttribute("name",setName)}
    if(setVal!==""){thisObj.setAttribute("value",setVal)}
    if(setFunc){switch(what){
        case "div" : thisObj.addEventListener("click",setFunc) ; break
        case "radio" : thisObj.addEventListener("change",setFunc) ; break
        default : console.log("missing correct addeventlistener here")}}
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
    if(addToTop){dad.prepend(thisObj)}
    else{dad.appendChild(thisObj)}
    return thisObj}

const body = document.querySelector("body")
let myArr = [{label:"青",value:19},{label:"月",value:1},{label:"影",value:13},{label:"虎",value:20},{label:"日",value:0},{label:"雪",value:27},{label:"粉",value:21},{label:"光",value:25},{label:"土",value:6},{label:"魚",value:23},{label:"糖",value:15},{label:"風",value:28},{label:"黒",value:12},{label:"銀",value:17},{label:"木",value:4},{label:"君",value:9},{label:"雷",value:22},{label:"米",value:14},{label:"白",value:11},{label:"温",value:18},{label:"火",value:2},{label:"石",value:24},{label:"願",value:16},{label:"水",value:3},{label:"菜",value:26},{label:"牛",value:29},{label:"塩",value:10},{label:"金",value:5},{label:"升",value:7},{label:"赤",value:8},]
let refArr = []
let cpt = 0
let tpArr = []
myArr.forEach((x)=>{tpArr.push(x.label)})
let rnd = undefined
while(tpArr.length > 0){rnd = Math.floor(Math.random()*tpArr.length);refArr.push(tpArr[rnd]);tpArr.splice(rnd,1);cpt++;if(cpt > 30){break}}

let idx=0
let miss1=0
let radX = 0
let select = []
let bla = {q1t:"クイズ1 : 本は？",q2t:"当たり、クイズ2 : 本を数字で言うと？",chau0:"違います...じゃ先を教えてね...(ミス：",chau1:"違います...じゃ後を教えてね...(ミス：",chau2:"違います、クイズ終了...<br>",q2good1:"当たり　!! クイズ　完成　おめでとう<br>",qmiss1:"クイズ 1 : ミス ",qmiss2:"クイズ 2 : ミス ",q2bad1:"違います、",br:"<br>",qkai:"回",shut:")",tbla:"了解",r1BtLb:"カニクリーム米コロッケ",r2BtLb:"美味しい生地",yeast:"イースト"}
addEle({dad:body,text:bla.q1t,margin:"10px",setID:"info"})
addEle({dad:body,setClass:"tab",setID:"cont1"})
    for(i=0;i<(myArr.length/6);i++){
        addEle({dad:getID("cont1"),setClass:"contRow",setID:"cont1L"+i})
        for(j=0;j<6;j++){
            radX++
            addEle({dad:getID("cont1L"+i),what:"radio",isInput:true,setVal:refArr[idx],setName:"quizz1",
            setID:"radioQ1-"+radX,display:"none",setFunc:()=>{
                let thisGRP = document.getElementsByName("quizz1")
                thisGRP.forEach((x)=>{if(x.checked){
                    let thisItm = myArr.filter(y=>y.label === x.value)[0]
                    let mdt = new Date()
                    let refV = undefined
                    switch(miss1){
                        case 0 :
                            refV = mdt.getDay()
                            if(thisItm.value === refV)
                                {getID("info").innerHTML = bla.q2t
                                getID("cont1").style.display = "none"
                                getID("cont2").style.display = "flex"}
                            else 
                                {miss1++ ; x.checked = false
                                getID("info").innerHTML = bla.chau0+miss1+bla.qkai+bla.shut}
                            break
                        case 1 :
                            refV = mdt.getDay() === 0 ? 6 : mdt.getDay() -1
                            if(thisItm.value === refV)
                                {getID("info").innerHTML = bla.q2t
                                getID("cont1").style.display = "none"
                                getID("cont2").style.display = "flex"}
                            else 
                                {miss1++ ; x.checked = false
                                getID("info").innerHTML = bla.chau1+miss1+bla.qkai+bla.shut}
                            break
                        case 2 :
                            refV = mdt.getDay() === 6 ? 0 : mdt.getDay() +1
                            if(thisItm.value === refV)
                                {getID("info").innerHTML = bla.q2t
                                getID("cont1").style.display = "none"
                                getID("cont2").style.display = "flex"}
                            else 
                                {miss1++ ; getID("info").innerHTML = bla.chau2+bla.qmiss1+miss1+bla.qkai ; getID("cont1").style.display = "none"}
                            break
                    } select.push( myArr.filter(y=>y.label === x.value )[0].value ) ; if( select.length === 3 && select[0] === 20 && select[1] === 9 && select[2] === 16 ){ getID("info").style.display="none" ; getID("cont3").style.display = "flex" }
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
let miss2=0
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
                        getID("info").innerHTML = bla.q2good1+bla.qmiss1+miss1+bla.qkai+bla.br+bla.qmiss2+miss2+bla.qkai
                        getID("cont2").style.display = "none"
                    } else {
                        miss2++
                        thisGRP.forEach((x)=>{x.checked=false})
                        getID("info").innerHTML = bla.q2bad1+bla.qmiss2+miss2+bla.qkai
                        if(miss2 > 2){
                            getID("info").innerHTML = bla.chau2+bla.qmiss1+miss1+bla.qkai+bla.br+bla.qmiss2+miss2+bla.qkai
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


let mw = 40;let bk = [{label:bla.r1BtLb,ref:myArr.filter(x=>x.value===7)[0].label,min:0.5,max:10,mult:0.5,det:[{label:myArr.filter(x=>x.value===14)[0].label,base:[{val:800,unit:"g"},{val:1,unit:"xR",isSet:"calc",}]},{label:myArr.filter(x=>x.value===3)[0].label,base:[{val:975,unit:"cc"},]},{label:"ソース",base:[{val:360,unit:"cc"},{val:2,unit:"x180ccR",isSet:"calc",},{val:336,unit:"g"}]},{label:"ミックス",base:[{val:90,unit:"g"},]}]}   ,   {label:bla.r2BtLb,ref:bla.yeast,min:0.35,max:7,mult:0.35,det:[{label:myArr.filter(x=>x.value===8)[0].label+myArr.filter(x=>x.value===21)[0].label,base:[{val:100,unit:"g"},]},{label:myArr.filter(x=>x.value===11)[0].label+myArr.filter(x=>x.value===21)[0].label,base:[{val:334,unit:"g"},]},{label:myArr.filter(x=>x.value===10)[0].label,base:[{val:11,unit:"g"},]},{label:myArr.filter(x=>x.value===3)[0].label,base:[{val:250,unit:"cc"},]},{label:myArr.filter(x=>x.value===3)[0].label+myArr.filter(x=>x.value===18)[0].label,base:[{val:"22°～",unit:"",isSet:"none",},]},]},]
addEle({dad:body,setClass:"tab",setID:"cont3",display:"none",width:"fit-content",})
    addEle({dad:getID("cont3"),text:bla.tbla})
    addEle({dad:getID("cont3"),setClass:"tab",setID:"cont4",width:"fit-content",})
        for(cpt=0;cpt<bk.length;cpt++){
            addEle({dad:getID("cont4"),setClass:"clickBtn",setID:"bkBtn"+cpt,text:bk[cpt].label,setFunc:(e)=>{
                idx = e.srcElement.id.split("bkBtn")[1]
                getID("bklbl").innerHTML = bk[idx].ref
                getID("bkref").innerHTML = idx
                getID("cont5").style.display = "flex"
                getID("kcont").style.display = "none"
                getID("bkmult").innerHTML = 0
                getID("bkmultlbl").innerHTML = "(+/-"+bk[idx].mult+")"}})}
        addEle({dad:getID("cont4"),setClass:"tab",setID:"cont5",display:"none"})
            addEle({dad:getID("cont5"),setClass:"contRow",setID:"cont5Fork"})
                addEle({dad:getID("cont5Fork"),setClass:"contCol",setID:"cont5ForkA",})
                    addEle({dad:getID("cont5ForkA"),setClass:"contRow",setID:"cont5ForkAL1"})
                        addEle({dad:getID("cont5ForkAL1"),text:0,setID:"bkmult",minWidth:"50px",textA:"center"})
                        addEle({dad:getID("cont5ForkAL1"),setID:"bkref",marginL:"10px",display:"none"})
                    addEle({dad:getID("cont5ForkA"),setClass:"contRow",setID:"cont5ForkAL2"})
                        addEle({dad:getID("cont5ForkAL2"),setID:"bklbl",marginL:"10px"})
                    addEle({dad:getID("cont5ForkA"),setClass:"contRow",setID:"cont5ForkAL3"})
                        addEle({dad:getID("cont5ForkAL3"),setClass:"clickBtn",setID:"rcp1",text:"-",minWidth:mw+"px",setFunc:setK})
                        addEle({dad:getID("cont5ForkAL3"),setClass:"clickBtn",setID:"rcp1",text:"+",minWidth:mw+"px",setFunc:setK})
                    addEle({dad:getID("cont5ForkA"),setClass:"contRow",setID:"cont5ForkAL4"})
                        addEle({dad:getID("cont5ForkAL4"),setID:"bkmultlbl",})
                addEle({dad:getID("cont5Fork"),setClass:"contCol",setID:"cont5ForkB",})
                    addEle({dad:getID("cont5ForkB"),setClass:"tab",setID:"kcont",display:"none",padding:"10px",marginL:"10px"})

function setK(e){
    idx = e.srcElement.id.split("rcp")[1]
    let thisL = getID("bkmult")
    let val = Number(thisL.innerHTML)
    let thisItm = bk[getID("bkref").innerHTML]
    switch(e.srcElement.innerHTML){case "+": val+=thisItm.mult ; break ; case "-": val-=thisItm.mult ; break }
    if(val < thisItm.min || val > thisItm.max){thisL.innerHTML = val.toFixed(2) ; getID("kcont").style.display = "none"}
    else {
        thisL.innerHTML = val.toFixed(2)
        let cont = getID("kcont")
        cleanParent(cont)
        cont.style.display = "flex"
        thisItm.det.forEach((itm)=>{
            let txt = itm.label + " : "
            itm.base.forEach((itmB)=>{
                if(itmB.isSet===undefined){txt += (itmB.val * (val/thisItm.mult)).toFixed(2)  +itmB.unit + "/"}
                else{if(itmB.isSet==="none"){txt += itmB.val +itmB.unit + "/"}
                    else{txt += (itmB.val * (val/thisItm.mult)) +itmB.unit + "/"}}})
            txt = txt.slice(0,txt.length-1)                
            addEle({dad:cont,text:txt})
        })}}