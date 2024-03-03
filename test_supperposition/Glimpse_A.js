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

function cleanParent(parent){
    while(parent.children.length >0){
        parent.removeChild(parent.lastChild)
    }}

function getID(id){return document.getElementById(id)}

function emC(code){return String.fromCodePoint(code)}

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


let colors = {
    brown:"#583E31",
    black:"#2D2D2D",
    yellow:"#C0AE77",
}


function getInventoryObj(label){
    let myIdx = player.inventory.findIndex(x=>x.label === label)
    if(myIdx === -1) {return undefined}
    else {return player.inventory[myIdx]} 
}

function checkOwned(cost){
    let lbl = cost.split(":")[0]
    let qt = cost.split(":")[0]
    let thisEl = undefined
    thisEl = getInventoryObj(lbl)
    let owned = true
    if(thisEl !==undefined){
        if(thisEl.quantity < qt){owned = false}
    } else {owned = false}
    return owned
}

function switchInvItem({label="",quantity=0,putIn=true}){
    let myIdx = player.inventory.findIndex(x=>x.label === label)
    if(myIdx === -1 && putIn === true){
        player.inventory.push(new item (label=label,quantity=quantity))
    } else {
        player.inventory[myIdx].quantity =
        putIn === true ? player.inventory[myIdx].quantity + quantity :
        player.inventory[myIdx].quantity - quantity
        if(player.inventory[myIdx].quantity < 0){player.inventory[myIdx].quantity = 0}
    }
}

function sellBuyItem(itmLabel,quantity=1,sell=true){
    if (sell){
        player.inventory.filter(x=>x.label===itmLabel)[0].quantity -= quantity
        player.inventory.filter(x=>x.label==="Silver Coins")[0].quantity =
        player.inventory.filter(x=>x.label==="Silver Coins")[0].quantity +
        (itemList.filter(x=>x.label===itmLabel)[0].sell * quantity)
    } else {
        player.inventory.filter(x=>x.label==="Silver Coins")[0].quantity =
        player.inventory.filter(x=>x.label==="Silver Coins")[0].quantity -
        (itemList.filter(x=>x.label===itmLabel)[0].sell * quantity)
        myEl = player.inventory.filter(x=>x.label===itmLabel)
        if(myEl.length ===0){
            switchInvItem({label:itmLabel,quantity:quantity})
        } else {
            myEl[0].quantity += quantity
        }
    }
}

function addDisplayLine(parentFr,itm,sell=false){
    let myCont = addEle({dad:parentFr,setClass:"contRow",alignItems:"center"})
        addEle({dad:myCont,what:"img",imgSize:50,imgSrc:itm.label})
        addEle({dad:myCont,text:itm.label,marginL:"10px",minWidth:"100px",textA:"center"})//border:"red solid 2px"
        addEle({dad:myCont,text:itm.quantity.toLocaleString(),marginL:"10px",minWidth:"50px"})
        if(sell){
            let thisEl = itemList.filter(x=>x.label===itm.label)[0]
            if(thisEl.sell > 0){
                let myIdx = player.inventory.findIndex(x=>x.label===itm.label)
                txt = 'Sell : 1 "' +itm.label+ '" for ' + thisEl.sell + ' Silver Coins'
                addEle({dad:myCont,setClass:"clickBtn",text:txt,marginL:"20px",
                setID:"sellBtn"+myIdx,setFunc:(e)=>{
                    txt = e.srcElement.innerHTML.split('"')[1]
                    let Qt = Number(e.srcElement.innerHTML.split(" : ")[1].split(' "')[0])
                    sellBuyItem(txt,Qt)
                    setInventory()
                }})
                addEle({dad:myCont,what:"range",isInput:true,min:1,max:itm.quantity,
                setVal:1,setID:"sellBtnRng"+myIdx,marginL:"10px",width:"100px",setFunc:(e)=>{
                     txt = 'Sell : '+e.srcElement.value+' "' +itm.label+ '" for ' + 
                     (thisEl.sell*e.srcElement.value).toLocaleString() + ' Silver Coins'
                     getID("sellBtn"+e.srcElement.id.split("sellBtnRng")[1]).innerHTML = txt
                }})
            }
        }
}

function addResourceLine(parentFr,itm,idx,location){
    let thisItm = itemList.filter(x=>x.label===itm)[0]
    let myCont = addEle({dad:parentFr,setClass:"contRow",alignItems:"center",
    borderB:"white solid 1px",borderT:"white solid 1px"})
        addEle({dad:myCont,what:"img",imgSize:50,imgSrc:itm})
        addEle({dad:myCont,text:itm,margin:"0 10px",minWidth:"50px",textA:"center",setID:"resourceRef"+idx})
        txt = "Costs:<br>"
        thisItm.cost.forEach((cost)=>{
            let myCol = ""
            if(checkOwned(cost)){myCol = "lime"}
            else {myCol = "red" ; ownCost = false}
            txt += '<span style="color:'+myCol+'">'+ cost.split(":")[0] + " " + cost.split(":")[1] + "</span><br>"
        })
        addEle({dad:myCont,text:txt,minWidth:"140px"})
        let workers = player.workers.filter(x=>x.label==="Workers")[0]
        let employed = workers.sets.filter(set=>set.location===location && set.resource===itm)
        employed = employed.length === 0 ? 0 : employed[0].quantity
        let employedCutTime = employed - 1 > 0 ? (employed - 1) * workerDiscount : 0
        let val = (thisItm.time.base * ((100-thisItm.time.discount)/100)) - (employedCutTime)
        addEle({dad:myCont,margin:"0 10px",text:"Time :<br>" + displaySeconds(val),setID:"locResTime"+idx})
        if(thisItm.label!=="Workers"){
            let subC = addEle({dad:myCont,setClass:"contCol",marginR:"10px"})
                addEle({dad:subC,text:"Workers : " + employed,setName:"locResWorkers",setID:"locResWks"})
                let ttl = 0 ; workers.sets.forEach((set)=>{ttl+=set.quantity})
                let free = workers.quantity-ttl
                addEle({dad:subC,what:"range",isInput:true,min:0,max:(employed+free),setVal:employed,setName:"locResRanges",
                setID:"locResRng"+idx,setFunc:(e)=>{
                    let thisIdx = e.srcElement.id.split("locResRng")[1]
                    let workers = player.workers.filter(x=>x.label==="Workers")[0]
                    let refSet = workers.sets.findIndex(set=>set.location === getID("locationRef").innerHTML &&
                    set.resource===getID("resourceRef"+thisIdx).innerHTML)
                    if(e.srcElement.value < 1){
                        if(refSet >= 0){workers.sets.splice(refSet,1)}
                    } else {
                        if(refSet >= 0){workers.sets[refSet].quantity = Number(e.srcElement.value)}
                        else {workers.sets.push(new workSet(getID("locationRef").innerHTML,
                        getID("resourceRef"+thisIdx).innerHTML,Number(e.srcElement.value)))}
                    }
                    fillLocation(getID("locationRef").innerHTML)
                    getID("resBtn").click()
                }})
        }
        subC = addEle({dad:myCont,setClass:"contCol"})
            txt = ""
            if(itm === "Workers"){txt = "Hire"}
            else if(employed > 0){txt = "Produce"}
            addEle({dad:subC,setClass:"clickBtn",text:txt,setID:"locResProdBtn"+idx,minHeight:18+"px",minWidth:60+"px",
            setFunc:(e)=>{
                let thisIdx = e.srcElement.id.split("locResProdBtn")[1]
                switch(e.srcElement.innerHTML){
                    case "Hire" : case "Produce" : info.innerHTML = "launch"
                        player.loop.queue.push(new clock(getID("locationRef").innerHTML,
                        getID("resourceRef"+thisIdx).innerHTML,getID("locResProdBtn"+idx).id,
                        getID("locResProdProg"+idx).id,time)) /// time !!!

                        let test = getID("bob")
                        console.log(test)

                        break
                    case "" : info.innerHTML = "Assign some workers for Production"
                        break
                    case "Complete" : info.innerHTML = "Collect Production"
                        break
                    default : info.innerHTML = "check clock"

                }
                console.log(e.srcElement.getBoundingClientRect().height)
            }})
            let prodProg = addEle({dad:subC,setClass:"progressBox"})
                addEle({dad:prodProg,setClass:"progressInt",setID:"locResProdProg"+idx})
}

function displaySeconds(sec=0,asClock=true){
    let hh = Math.floor(sec/3600)
    let mm = Math.floor((sec % 3600)/60)
    let ss = Math.ceil(sec % 60)

    if(hh>0){txt = hh+"Hr"}
    if(mm>0){txt += mm+"Mn"}
    txt += ss + "Sec"

    hh = hh < 10 ? "0" + hh : hh
    mm = mm < 10 ? "0" + mm : mm
    ss = ss < 10 ? "0" + ss : ss

    if(asClock){return hh + ":" + mm + ":" + ss}
    else {return txt}
}

function spit({label="",location="Village Center",resource="",workerType="Workers"}){
    let workers = player.workers.filter(x=>x.label===workerType)[0]
    let ttl = 0
    let mySel = undefined
    switch(label){
        case "workersAll" : workers.sets.forEach((set)=>{ttl+=set.quantity}) ; return ttl ; break
        case "workersFree" : return (workers.quantity - spit({label:"workersAll"})) ; break        
        case "workersDisp": 
            return workers.label + " : " + spit({label:"workersFree"}) + "/" + workers.quantity ; break
        case "workersRes" : 
            mySel = workers.sets.filter(w=>w.location===location && w.resource===resource)
            return mySel.length === 0 ? 0 : mySel[0].quantity ; break

    }
}