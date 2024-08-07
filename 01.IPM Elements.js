
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
    maxWidth = "",
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
    img2Sizes = "",
    imgSrc = "",
    imgFullSrc = "",
    accentCol = "",
    radioCol = "",
    position = "",
    top = "",
    left = "",
    zIdx = "",
    userSelect = "",
    colSpan = "",
    rowSpan = "",
    url = "",
    log = false}){

    let thisObj = undefined

    if(!isInput){
        if(what==="img" || what==="image"){
            if(img2Sizes!==""){thisObj = 
                new Image(Number(img2Sizes.split(":")[0]),Number(img2Sizes.split(":")[1]))}
            else if(imgSize!==""){thisObj = new Image(imgSize,imgSize)}
            else{thisObj = new Image()}
            
            if(imgFullSrc!==""){thisObj.src = imgFullSrc}
            else{thisObj.src = path1 + imgSrc + path2}
            }
        else
            {thisObj = document.createElement(what)}
    } else {
        thisObj = document.createElement("input"); thisObj.setAttribute("type",what)
    }

    if(url!==""){
        thisObj = document.createElement("a")
        thisObj.setAttribute("href","mailto:"+url)
        thisObj.innerHTML = url
    }

    if(accentCol!==""){thisObj.style.accentColor = accentCol}

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
            case "img" : thisObj.addEventListener("click",setFunc) ; break
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
    if(maxWidth!==""){thisObj.style.maxWidth=minWidth}

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
    if(left !==""){thisObj.style.left = top}

    if(zIdx!==""){thisObj.style.zIndex = zIdx}

    if(userSelect!==""){thisObj.style.userSelect = userSelect}

    if(colSpan!==""){thisObj.colSpan = colSpan}
    if(rowSpan!==""){thisObj.rowSpan = rowSpan}

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

function spanText(spanColor,spanTxt,sz=undefined){
    return sz === undefined ? 
    `<span style="color:`+spanColor+`;">`+spanTxt+"</span>" :
    `<span style="color:`+spanColor+`; font-size: `+sz+`px;">`+spanTxt+"</span>"
}

function getID(id){return document.getElementById(id)}

function cleanParent(parent){while(parent.children.length >0){parent.removeChild(parent.lastChild)}}

