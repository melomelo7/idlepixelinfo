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

function checkOwned(label,quantity){
    let thisEl = undefined
    thisEl = undefined
    thisEl = getInventoryObj(label)
    let owned = true
    if(thisEl !==undefined){
        if(thisEl.quantity < quantity){owned = false}
    } else {owned = false}
    return owned
}

class item {constructor(label="",quantity=0)
    {this.label=label,this.quantity=quantity}
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
        let myItm = player.inventory.filter(x=>x.label==="Silver Coins")[0]
        let srcItm = itemList.filter(x=>x.label===itmLabel)[0]
        
        info.innerHTML = checkOwned("Silver Coins",(srcItm.sell * quantity))
        
        
        myItm.quantity = myItm.quantity - (srcItm.sell * quantity)
        // player.inventory.filter(x=>x.label==="Silver Coins")[0].quantity -
      //(itemList.filter(x=>x.label===itmLabel)[0].sell * quantity)
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
        let img = new Image(50,50)
        img.src = path1+itm.label+path2
        myCont.appendChild(img)
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
