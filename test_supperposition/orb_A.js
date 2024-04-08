/*
class item {constructor(label="",quantity=0)
    {this.label=label,this.quantity=quantity}
}

class worker {constructor(label="",quantity=0,sets=[])
{this.label=label,this.quantity=quantity,this.sets=sets}
}

class workSet {constructor(location="",resource="",quantity=0)
    {this.location=location,this.resource=resource,this.quantity=quantity}
}

class bonus {constructor(type="",source="",location="",target="",bonus="",permanent=false)
{this.type=type,this.source=source,this.location=location,this.target=target,this.bonus=bonus,this.permanent=permanent}
}

class clock {constructor(location="",resource="",btnID="",progressID="",time=0)
    {this.location=location,this.resource=resource,this.btnID=btnID,this.progressID=progressID,this.time=time}
}

*/

function cleanParent(parent){
    while(parent.children.length >0){
        parent.removeChild(parent.lastChild)
    }}

function getID(id){return document.getElementById(id)}

//function emC(code){return String.fromCodePoint(code)}

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
    min = "",
    max = "",
    setFunc = undefined,
    textC = "",
    fontS = "",
    fontB = "",
    backC = "",
    backG = "",
    height = "",
    minHeight = "",
    maxHeight = "",
    width = "",
    minWidth = "",
    border = "",
    borderL = "",
    borderR = "",
    borderT = "",
    borderB = "",
    radius = "",
    radiusTL = "",
    radiusTR ="",
    radiusBL = "",
    radiusBR = "",
    padding = "",
    paddingT = "",
    paddingB = "",
    paddingL = "",
    paddingR = "",
    margin = "",
    marginT="",
    marginL="",
    marginR="",
    marginB="",
    display = "",
    visibility = "",
    justifyR = false,
    alignItems = "",
    textA = "",
    overflow = "",
    overflowX = "",
    flDir = "",
    flWrap = "",
    justifyC = "",
    cursor = "",
    tableLayout = "",
    imgSize = "",
    imgSrc = "",
    position = "",
    top = "",
    zIdx = "",
    userSelect = "",
    log = false}){

    let thisObj = undefined

    if(!isInput){
        if(what==="img" || what==="image"){
            if(imgSize===""){thisObj = new Image()}
            else{thisObj = new Image(imgSize,imgSize)}
            thisObj.src = path1 + imgSrc + path2
            }
        else
            {thisObj = document.createElement(what)}
    } else {
        thisObj = document.createElement("input"); thisObj.setAttribute("type",what)
    }

    if(text!==""){thisObj.innerHTML = text}

    if(setID!==""){thisObj.setAttribute("id",setID)}

    if(setClass!=="none"){thisObj.setAttribute("class",setClass)}

    if(setName!==""){thisObj.setAttribute("name",setName)}

    if(setVal!==""){thisObj.setAttribute("value",setVal)}

    if(min!==""){thisObj.min = min}
    if(max!==""){thisObj.max = max}

    if(setFunc){
        switch(what){
            case "div" : case "td" : thisObj.addEventListener("click",setFunc) ; break
            case "radio" : case "range" : case "checkbox" : thisObj.addEventListener("change",setFunc) ; break
            case "input" : thisObj.addEventListener("input",setFunc) ; break

            default : console.log("missing correct addeventlistener here")
            } 
        }

    if(textC!==""){thisObj.style.color = textC}

    if(fontS!==""){thisObj.style.fontSize = fontS}

    if(fontB!==""){thisObj.style.fontWeight = fontB}

    if(backC!==""){thisObj.style.backgroundColor = backC}

    if(backG!==""){thisObj.style.background = backG}

    if(height!==""){thisObj.style.height = height}
    if(minHeight!==""){thisObj.style.minHeight = minHeight}
    if(maxHeight!==""){thisObj.style.maxHeight = maxHeight}

    if(width!==""){thisObj.style.width = width}

    if(minWidth!==""){thisObj.style.minWidth=minWidth}

    if(border!==""){thisObj.style.border = border}
    if(borderL!==""){thisObj.style.borderLeft = borderL}
    if(borderR!==""){thisObj.style.borderRight = borderR}
    if(borderT!==""){thisObj.style.borderTop = borderT}
    if(borderB!==""){thisObj.style.borderBottom = borderB}

    if(radius!==""){thisObj.style.borderRadius = radius}
    if(radiusTL!==""){thisObj.style.borderTopLeftRadius = radiusTL}
    if(radiusTR!==""){thisObj.style.borderTopRightRadius = radiusTR}
    if(radiusBL!==""){thisObj.style.borderBottomLeftRadius = radiusBL}
    if(radiusBR!==""){thisObj.style.borderBottomRightRadius = radiusBR}

    if(padding!==""){thisObj.style.padding=padding}
    if(paddingT!==""){thisObj.style.paddingTop =paddingT}
    if(paddingB!==""){thisObj.style.paddingBottom =paddingB}
    if(paddingL!==""){thisObj.style.paddingLeft=paddingL}
    if(paddingR!==""){thisObj.style.paddingRight=paddingR}

    if(margin!==""){thisObj.style.margin=margin}
    if(marginT!==""){thisObj.style.marginTop=marginT}
    if(marginL!==""){thisObj.style.marginLeft=marginL}
    if(marginR!==""){thisObj.style.marginRight=marginR}
    if(marginB!==""){thisObj.style.marginBottom=marginB}

    if(display!==""){thisObj.style.display=display}

    if(visibility!==""){thisObj.style.visibility = visibility}

    if(disabled){thisObj.disabled = true}

    if(justifyR){thisObj.style.justifyContent = "right"}

    if(alignItems!==""){thisObj.style.alignItems = alignItems}

    if(textA!==""){thisObj.style.textAlign = textA}

    if(overflow !== ""){thisObj.style.overflow = overflow}
    if(overflowX !== ""){thisObj.style.overflowX = overflowX}

    if(flDir !== ""){thisObj.style.flexDirection = flDir}

    if(flWrap !== ""){thisObj.style.flexWrap = flWrap}

    if(justifyC !== ""){thisObj.style.justifyContent = justifyC}

    if(cursor !== ""){thisObj.style.cursor = cursor}

    if(tableLayout!==""){thisObj.style.tableLayout = tableLayout}

    if(position !==""){thisObj.style.position = position}

    if(top !==""){thisObj.style.top = top}

    if(zIdx!==""){thisObj.style.zIndex = zIdx}

    if(userSelect!==""){thisObj.style.userSelect = userSelect}

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


function buildOrb({parent=undefined,margin=5,radius=50,filled=100,
outBorderC="blue",outBorderT=3,inBorderC="black",inBorderT=3,
fontS=20,text="bla bla",textID="orbText",fluidID="orbFluid",
fluidColor="white",clickFunc=undefined}){

    let thisCont = addEle({dad:parent,position:"relative",
    width:(radius*2)+"px",height:(radius*2)+"px",
    border:outBorderC+' solid '+outBorderT+'px',
    radius:"50%",margin:margin+"px"})

    let val = ((radius*2) - (inBorderT*2)) + "px"
    let subCont = addEle({dad:thisCont,position:"absolute",
    overflow:"hidden",width:val,height:val,
    border:inBorderC+' solid '+inBorderT+'px',
    radius:"50%"})

    val = ((radius*2)/3) + "px"
    addEle({dad:subCont,text:text,position:"absolute",
    top:val,width:"100%",height:"100%",fontS:fontS+"px",fontB:"bold",
    textA:"center",zIdx:1,userSelect:"none",setID:textID})

    val = (100-filled) + "%"
    addEle({dad:subCont,position:"absolute",
    backG:fluidColor, top:val,width:"100%",height:"100%",
    zIdx:0,setID:fluidID})

    if(clickFunc!==undefined){
        thisCont.addEventListener("click",clickFunc)
    }

    return thisCont
}


function setOrbF(value){orbF.style.top = (100-value) + "%"}
function setOrbT(text){orbT.innerHTML = text}

function seeOrbWord(see=true){let myVal = see ? "block" : "none" ; orbWord.style.display = myVal ; orbWord.value = ""}

function lockOrb(doIt=true){
    orbLock = doIt
    orbF.style.backgroundColor = doIt===true ? "grey" : "teal"
}

function getBtn(text){
    let grp = document.getElementsByName("orbBtnGrp")
    for(let i=0;i<grp.length;i++){if(grp[i].innerHTML.includes(text)){return grp[i]}}
}

function getSpell(text){
    for(let i=0;i<orbSpells.length;i++){if(orbSpells[i].label===text){return orbSpells[i]}}
}

/*
function getRes(res){
    let obj = player.resources
    for(let i=0;i<obj.length;i++){if(obj[i].label===res){return obj[i]}}
}

function getRes(lbl){
    let obj = player.tabs
    for(let i=0;i<obj.length;i++){if(obj[i].label===res){return obj[i]}}
}
*/

function startLooper(){
    if(player.loop.id===undefined){player.loop.id = setInterval(queueManager,looperSpeed)}
}

function secondsToClock(seconds){
    let hr = Math.floor(seconds/3600)
    hr = hr < 10 ? "0"+hr : hr
    let mn = Math.floor((seconds % 3600)/60)
    mn = mn < 10 ? "0"+mn : mn
    let sc = seconds % 60
    sc = sc < 10 ? "0"+sc : sc
    return hr + ":" + mn + ":" + sc
}

function getPlObj(lbl="",idx=0, myArr=[player.resources,player.tabs]){
    let obj = myArr[idx]
    for(let i=0;i<obj.length;i++){if(obj[i].label===lbl){return obj[i]}}
}

function spit({text="",args=[]}){
    let baseV = 0
    let crystalV = 0
    let srcObj = undefined
    switch(text){
        case "clickPower" :
            baseV = 0.05
            crystalV = 0.05 * getPlObj("Crystals").quantity
            return Number((baseV + crystalV).toFixed(2))
            break
        case "manaQuantity" :
            crystalV = 0.1 * getPlObj("Crystals").quantity
            return Number((crystalV).toFixed(2))
            break
        case "manaCap" :
            srcObj = getPlObj("Mana")
            crystalV = 0.1 * getPlObj("Crystals").quantity
            return Number((crystalV+srcObj.baseCap).toFixed(2))
            break
        case "lyxesSumup" :
            let dead = 0
            srcObj = getPlObj("Lyxes")
            txt = "Total : " + srcObj.quantity +" -- "
            txt+= "Employed : " + srcObj.lyx.filter(lx=>lx.job!==undefined).length + " -- "
            dead = srcObj.lyx.filter(lx=>lx.health.current===0).length
            if(dead > 0){txt+= "Dead : " + dead + " -- "}
            txt+= "Free : " + (srcObj.quantity - dead - srcObj.lyx.filter(lx=>lx.job!==undefined).length)
            return txt
            break
        default : console.log("code missing")
    }
}


class queueItm {
    constructor({label="",type="",timer=undefined,srcElID="",
        srcElTxt="",srcElCol="",costs=[],payout=[],isAction=true})
        {this.label=label,this.type=type,this.timer=timer,
        this.srcElID=srcElID,this.srcElTxt=srcElTxt,this.srcElCol=srcElCol,
        this.costs=costs,this.payout=payout,this.isAction=isAction}
}

/*
class clock {constructor(location="",resource="",btnID="",progressID="",time=0)
    {this.location=location,this.resource=resource,this.btnID=btnID,this.progressID=progressID,this.time=time}
}
*/

function upOrb(addVal = true){
    let srcObj = getPlObj("Essence")
    let val = undefined
    if(addVal){
        srcObj.quantity = Number((srcObj.quantity+srcObj.click).toFixed(2)) <= srcObj.cap ?
        Number((srcObj.quantity+srcObj.click).toFixed(2)) : srcObj.cap }
    val = ((srcObj.quantity / srcObj.cap)*100).toFixed()
    setOrbF(val)
    if(srcObj.rank>0){setOrbT(val+"%")}
}


function clickOrb(){

    if(orbLock){return}
    if(timeFreeze){console.log("freeze");return}

    let srcObj = getPlObj("Essence")
    switch(srcObj.rank){
        case 0 :
            upOrb()
            txt = ""
            if(srcObj.quantity===srcObj.cap && getBtn("lok zo").style.display === "none")
                {txt = '"well done, now say : lok nir"' ; seeOrbWord()}
            else if(getBtn("lok zo").style.display === "none") {txt = '"more ..."'}
            info.innerHTML = txt
            break
        case 1 :
            upOrb()
            if(srcObj.quantity>=getPlObj("Crystals").costs && getBtn("kar gla").style.display === "none" ){
                info.innerHTML = `"Time has come to introduce you the M.C. 
                (Magic Crystals) ... Say the word : kar gla "`
                seeOrbWord()
            }
            break
        case 2 :
            upOrb()
            if(getPlObj("Mana").quantity>=1 && tabsBtnFr.children[0].style.display==="none"){
                info.innerHTML = `You hear someone knocking at the door. You go check...<br>
                an old man standing there, his eyes are somehow unusual. He says :<br><br>
                "My name is Olfart, I felt some strange aura coming from your house...<br>
                you do have magic potential it seems.<br> 
                I wish I had more time to spend here with you today... Anyways shall you<br>
                be able to unreveal the content of this book, I will let you use it for<br>
                the time being. Until we meet again ! Good luck and study hard !!"<br><br>
                The old man is now gone, he walks so fast it's unbelievable ...`
                setTimeout(()=>{tabsBtnFr.children[0].style.display="block"},4000)
            }
            break
        default : info.innerHTML = "next game update needed"
    }
    if(srcObj.rank>0){dispStats()}
    if(player.focusID!==undefined){getID(player.focusID).click()}
}

function sayWord(e){
    let word = e.srcElement.value.toLowerCase()
    switch(word){
        case "lok nir" :
            lockOrb()
            seeOrbWord(false)
            info.innerHTML = word + " !"
            setTimeout(()=>{
                info.innerHTML = '"Good, I can feel my Essence is almost ready !<br>Now help me expand say the word : lok zo"'
                seeOrbWord()
            },1500)
            break
        case "lok zo" :
            info.innerHTML = word + " ! (you learned the spell " + word + ")"
            seeOrbWord(false)
            setTimeout(()=>{
                lockOrb(false)
                info.innerHTML = ""
                getBtn(word).style.display = "block"
                getBtn(word).innerHTML += getPlObj("Essence").cap
            },1500)
            break
        case "kar gla" :
            info.innerHTML = word + " ! (you learned the spell " + word + ")"
            seeOrbWord(false)
            setTimeout(()=>{
                info.innerHTML = ""
                getBtn(word).style.display = "block"
                getBtn(word).innerHTML += getPlObj("Essence").cap
                getBtn(word).innerHTML = getSpell(word).text + getPlObj("Crystals").costs
            },1500)
            break
        default :

    }
    
}

function orbBtns(e){
    let btTxt = e.srcElement.innerHTML
/*
    let obj1 = player.orb
    let obj2 = getRes("Essence")
*/  
    let srcObj = getPlObj("Essence")
    let ownCost = undefined
//    let val = undefined
//    if(btTxt.includes(" : ")){val = Number(btTxt.split(" : ")[1])}

    if(btTxt.includes("lok zo")){
        ownCost = checkCost(srcObj.label,srcObj.cap)
        if(ownCost){ srcObj.rank = srcObj.rank < 1 ? 1 : srcObj.rank
            srcObj.cap *= 2 ; upOrb(false)
            getBtn("lok zo").innerHTML = getSpell("lok zo").text + srcObj.cap }
        }
    else if(btTxt.includes("kar gla")){
        let itm1 = getPlObj("Crystals")
        let itm2 = getPlObj("Mana")
        ownCost = checkCost(srcObj.label,itm1.costs)
        if(ownCost){
            itm1.locked = false
            itm2.locked = false
            info.innerHTML = getPlObj("Crystals").quantity===0 ? 
            '"Each crystal will boost your Click Power and give some mana."' : ""
            upOrb(false)
            itm1.quantity ++
            itm1.costs ++
            getBtn("kar gla").innerHTML = getSpell("kar gla").text + itm1.costs
            srcObj.click = spit({text:"clickPower"})
            itm2.quantity = spit({text:"manaQuantity"})
            itm2.cap = spit({text:"manaCap"})
            dispStats()
            srcObj.rank = srcObj.rank < 2 ? 2 : srcObj.rank
        }

        }
    else
        {
            console.log("fuck")
        }

    dispStats()
}

function dispStats(){
    let obj = player.resources
    txt = "Click Power : " + getPlObj("Essence").click.toFixed(2)
    for(let i=0;i<obj.length;i++){
        if(obj[i].locked ===false){
            txt+="<br>"
            txt += obj[i].cap === undefined ? 
            obj[i].label + " : " + obj[i].quantity.toFixed(2) :
            obj[i].label + " : " + obj[i].quantity.toFixed(2) + "/" + obj[i].cap.toFixed(2)
        }
    }

    stats.innerHTML = txt
}


function checkCost(cLbl="",cVal=0,pay=true,earn=false,upStats=true,ripOff=false){
    let srcObj = getPlObj(cLbl) ; let good = false
    if(earn===false){
        if(Number(srcObj.quantity.toFixed(2))>= cVal || ripOff===true){good = true}
        if(good && pay){
            if(Number(srcObj.quantity.toFixed(2)) < cVal){good=false}
            srcObj.quantity = Number((srcObj.quantity-cVal).toFixed(2)) > 0 ?
            Number((srcObj.quantity-cVal).toFixed(2)) : 0
            if(upStats){dispStats()}
        }
        if(good && pay && cLbl==="Essence"){upOrb(false)}
    } else {
        srcObj.quantity = Number((srcObj.quantity+cVal).toFixed(2))
        srcObj.locked=false
        if(upStats){dispStats()}
    }
    return good
}
