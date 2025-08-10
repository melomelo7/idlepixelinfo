
function isSafari() {
    const ua = navigator.userAgent;
    const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
    return isSafari;
  }


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
    setFor = "",
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
    float = "",
    cursor = "",
    tableLayout = "",
    imgSize = "",
    img2Sizes = "",
    imgSrc = "",
    imgFullSrc = "",
    imgAlt = "",
    accentCol = "",
    position = "",
    top = "",
    left = "",
    zIdx = "",
    userSelect = "",
    colSpan = "",
    rowSpan = "",
    resize = "",
    url = "",
    whiteSpace = "",
    noFocus = false,
    log = false,
    opacity = "", }){

    let thisObj = undefined

    if(!isInput){
        if(what==="img" || what==="image"){
            if(img2Sizes!==""){thisObj = 
                new Image(Number(img2Sizes.split(":")[0]),Number(img2Sizes.split(":")[1]))}
            else if(imgSize!==""){thisObj = new Image(imgSize,imgSize)}
            else{thisObj = new Image()}
            
            if(imgFullSrc!==""){thisObj.src = imgFullSrc}
            else{thisObj.src = path1 + imgSrc + path2}

            if(imgAlt!==""){thisObj.alt = imgAlt}
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

    if(setFor!==""){thisObj.setAttribute("for",setFor)}

    if(setVal!==""){thisObj.setAttribute("value",setVal)}

    if(min!==""){thisObj.min = min}
    if(max!==""){thisObj.max = max}

    if(setFunc){
        switch(what){
            case "div" : case "td" : case "option" : thisObj.addEventListener("click",setFunc) ; break
            case "select" : case "radio" : case "range" : case "checkbox" : thisObj.addEventListener("change",setFunc) ; break
            case "input" : thisObj.addEventListener("input",setFunc) ; break
            case "img" : thisObj.addEventListener("click",setFunc) ; break
            case "select" : thisObj.addEventListener("input",setFunc) ; break
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
    if(maxWidth!==""){thisObj.style.maxWidth=maxWidth}

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

    if(float !== ""){thisObj.style.float = float}

    if(cursor !== ""){thisObj.style.cursor = cursor}

    if(tableLayout!==""){thisObj.style.tableLayout = tableLayout}

    if(position !==""){thisObj.style.position = position}

    if(top !==""){thisObj.style.top = top}
    if(left !==""){thisObj.style.left = left}

    if(zIdx!==""){thisObj.style.zIndex = zIdx}

    if(userSelect!==""){thisObj.style.userSelect = userSelect}

    if(colSpan!==""){thisObj.colSpan = colSpan}
    if(rowSpan!==""){thisObj.rowSpan = rowSpan}

    if(resize!==""){thisObj.style.resize = resize}

    if(opacity!==""){thisObj.style.opacity = opacity}

    if(whiteSpace!==""){thisObj.style.whiteSpace = whiteSpace}

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

function centerScreen(element){
    element.style.position = "absolute"
    let rect = element.getBoundingClientRect()
    let posW = window.innerWidth/2 - rect.width/2
    let posH = window.innerHeight/2 - rect.height/2
  

    element.style.top = posH + window.scrollY -10 + "px"
    element.style.left = posW + window.scrollX +5 + "px"

//    element.style.top = posH + window.scrollY -10 + "px"
//    element.style.left = posW + window.scrollX +5 + "px"


}

function spanText(spanColor="",spanTxt,sz=undefined,striked=false,underL="",setID="",setAlt="",mirrored=false){

    let rbc = ["#ef5350","#f48fb1","#7e57c2","#2196f3","#26c6da",
    "#43a047","#eeff41","#f9a825","#ff5722"]

    let txtA = []
    let ret = ""
    let txt = ""
    let cpt = 0

    if(spanColor!=="rainbow"){txtA.push(spanTxt)}
    else {for(let i=0;i<spanTxt.length;i++){txtA.push(spanTxt[i])}}

    txtA.forEach(ch=>{
        txt = `<span `
        if(setID!==""){txt+=` id="`+setID+`" `}
        if(setAlt!==""){txt+=`role="img" aria-label="`+setAlt+`"`}
        txt += `style="`
        if(spanColor!==""){
            txt+=`color:`
            if(spanColor === "rainbow"){
                txt+= rbc[cpt] +`;`
                cpt++ ; if(cpt>rbc.length-1){cpt=0}
            } else {txt+= spanColor +`;`}
        }
        if(sz!==undefined){txt+= ` font-size:`+sz+`px;`}
        if(striked){txt+= ` text-decoration: line-through; text-decoration-color: red; text-decoration-thickness: 2px;`}

        if(mirrored){txt+=` display:inline-block; transform: scaleX(-1);`}
        
        if(underL!==""){txt+=` border-bottom:`+underL}
         txt+= `">` + ch + `</span>`
        ret+= txt
    })
    return ret
}

function getID(id){return document.getElementById(id)}

function cleanParent(parent){while(parent.children.length >0){parent.removeChild(parent.lastChild)}}

function nBr(text){return text.includes(",") ? Number(text.replace(",","")) : Number(text)}

const romans = [
    "I","II","III","IV","V","VI","VII","VIII","IX","X",
   "XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX",
   "XXI","XXII","XXIII","XXIV","XXV","XXVI","XXVII","XXVIII","XXIX","XXX",
   "XXXI","XXXII","XXXIII","XXXIV","XXXV","XXXVI","XXXVII","XXXVIII","XXXIX","XL",
   "XLI","XLII","XLIII","XLIV","XLV","XLVI","XLVII","XLVIII","XLIX","L",
   "LI","LII","LIII","LIV","LV","LVI","LVII","LVIII","LIX","LX",
   "LXI","LXII","LXIII","LXIV","LXV","LXVI","LXVII","LXVIII","LXIX","LXX",
   "LXXI","LXXII","LXXIII","LXXIV","LXXV","LXXVI","LXXVII","LXXVIII","LXXIX","LXXX",
   "LXXXI","LXXXII","LXXXIII","LXXXIV","LXXXV","LXXXVI","LXXXVII","LXXXVIII","LXXXIX","XC",
   "XCI","XCII","XCIII","XCIV","XCV","XCVI","XCVII","XCVIII","XCIX","C"
   ]


function getDialogTopFrame(cxlEsc=true){
    let Obj = addEle({dad:body,what:"dialog",setClass:"myDialog",width:"fit-content",
    maxWidth:"300px",height:"fit-content",border:"2px solid crimson"})
    if(cxlEsc){ Obj.addEventListener('keydown', (e)=>{ if (e.key === 'Escape'){e.preventDefault()} }) }
    return Obj
}

function lockScroll(lock=true){
    document.body.style.overflow = lock ? "hidden" : ""
    document.body.style.touchAction = lock ? 'none' : ""
}


function simpleMsg(msg,setFunc=""){

    let pop = getDialogTopFrame()

    let cont = addEle({dad:pop,setClass:"contCol",width:"fit-content"})

        let subC = addEle({dad:cont,setClass:"contRow",marginT:"10px 0",justifyC:"flex-end"})
        addEle({dad:subC,setClass:"btn",text:addEmo("❌","emoji red cross"),setFunc:()=>{
            pop.remove()
            lockScroll(false)
            if(setFunc!==""){setFunc()}
        }})

        addEle({dad:cont,text:msg,margin:"20px",fontS:"18px"})

    pop.showModal()
    lockScroll()

    return pop
}

function addEmo(emoji="emoji",lbl="emoji label",id=""){
    return `<span id="`+id+`" role="img" aria-label="`+lbl+`">`+emoji+`</span>`
}