
function isSafari() {
    const ua = navigator.userAgent;
    const isSafari = /^((?!chrome|android).)*safari/i.test(ua);
    return isSafari;
  }


function addEle({
    addToTop = false,
    dad = undefined,
    what = "div",
    areaRows = "",
    areaCols = "",
    text = "",
    setID = "",
    setClass = "none",
    isInput = false,
    numInput = false,
    disabled = false,
    setName = "",
    setFor = "",
    setVal = "",
    maxLen = "",
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
    right = "",
    bottom = "",
    zIdx = "",
    userSelect = "",
    colSpan = "",
    rowSpan = "",
    resize = "",
    url = "",
    whiteSpace = "",
    noFocus = false,
    log = false,
    mirror = false,
    transform = "",
    opacity = "",
    holder = "",
    }){

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

    if(maxLen!==""){thisObj.setAttribute("maxlength",maxLen)}

    if(setVal!==""){thisObj.value = setVal}

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

    if(holder){
        thisObj.setAttribute("placeholder",holder)
    }

    if(numInput){

        thisObj.setAttribute("type","text")
        thisObj.setAttribute("inputmode","decimal")
        thisObj.setAttribute("step","any")

        // Optional: Restrict to numeric with decimal point
        thisObj.addEventListener('keypress', function(e) {
            // Allow digits, decimal point, and control keys
            if (!/[0-9.]/.test(e.key)) {
            e.preventDefault();
            }
            // Prevent multiple decimal points
            if (e.key === '.' && e.target.value.includes('.')) {
            e.preventDefault();
            }
        });

        // Optional: Prevent invalid pasted content
        thisObj.addEventListener('paste', function(e) {
            const pasteData = e.clipboardData.getData('text');
            if (!/^\d*\.?\d*$/.test(pasteData)) {
            e.preventDefault();
            }
        });
    }
  
    if(what="textarea"){
        thisObj.setAttribute("rows",areaRows)
        thisObj.setAttribute("cols",areaCols)
        thisObj.style.resize = "none"
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
    if(bottom !==""){thisObj.style.bottom = bottom}
    if(left !==""){thisObj.style.left = left}
    if(right !==""){thisObj.style.right = right}

    if(zIdx!==""){thisObj.style.zIndex = zIdx}

    if(userSelect!==""){thisObj.style.userSelect = userSelect}

    if(colSpan!==""){thisObj.colSpan = colSpan}
    if(rowSpan!==""){thisObj.rowSpan = rowSpan}

    if(resize!==""){thisObj.style.resize = resize}

    if(opacity!==""){thisObj.style.opacity = opacity}

    if(whiteSpace!==""){thisObj.style.whiteSpace = whiteSpace}

    if(transform!==""){thisObj.style.transform = transform}

    if(mirror){thisObj.style.transform = "scaleX(-1)"}

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

function spanText2(spanColor="",spanTxt,sz=undefined,striked=false,underL="",setID="",setAlt="",mirrored=false){

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

function spanText({text="test",col="black",textS=undefined,striked=false,underLine="",
                    id="",setAlt="",mirrored=false}){
    let txt = `<span `
    if(id!==""){txt+=` id="`+id+`" `}
    if(setAlt!==""){txt+=`role="img" aria-label="`+setAlt+`"`}
    txt += `style="`
    if(col!==""){txt+=`color:`+ col +`;`}
    if(textS!==undefined){txt+= ` font-size:`+textS+`px;`}
    if(striked){txt+= ` text-decoration: line-through; text-decoration-color: red; text-decoration-thickness: 2px;`}
    if(mirrored){txt+=` display:inline-block; transform: scaleX(-1);`}
    if(underLine!==""){txt+=` border-bottom:`+underLine}
    txt+= `">` + text + `</span>`
    return txt
}



function getID(id){return document.getElementById(id)}

function cleanParent(parent){while(parent.children.length >0){parent.removeChild(parent.lastChild)}}

function bKr(x, n=0){ // bKr = bankersRound
    const p = Math.pow(10, n);
    const y = x * p;
    const absY = Math.abs(y);
    const intPart = Math.trunc(absY);
    const frac = absY - intPart;
    const sign = x < 0 ? -1 : 1;
    if (Math.abs(frac - 0.5) < 1e-12) {
   return sign * ((intPart % 2 === 0 ? intPart : intPart + 1) / p);
    }
    return Math.round(x * p) / p;
  }


function forNum(num){
    val = Number(num)
    let mag = 1000
    if(val>999){
        if(val<mag*1000){val = (val/mag).toFixed(2)+"K"}
        mag*=1000
        if(val<mag*1000){val = (val/mag).toFixed(2)+"M"}
        mag*=1000
        if(val<mag*1000){val = (val/mag).toFixed(2)+"B"}
        mag*=1000
        if(val<mag*1000){val = (val/mag).toFixed(2)+"T"}        
        mag*=1000
        if(val<mag*1000){val = (val/mag).toFixed(2)+"q"}
        mag*=1000
        if(val<mag*1000){val = (val/mag).toFixed(2)+"Q"}
        mag*=1000
        if(val<mag*1000){val = (val/mag).toFixed(2)+"s"}
        mag*=1000
        if(val<mag*1000){val = (val/mag).toFixed(2)+"S"}
        mag*=1000
        if(val<mag*1000){val = (val/mag).toFixed(2)+"O"}
        mag*=1000
        if(val<mag*1000){val = (val/mag).toFixed(2)+"N"}
        mag*=1000
        if(val<mag*1000){val = (val/mag).toFixed(2)+"D"}

    }
    return val
}











function nBr(text){return text.includes(",") ? Number(text.replace(",","")) : Number(text)}


function getDialogTopFrame(cxlEsc=true){
    let Obj = addEle({dad:body,what:"dialog",setClass:"myDialog",width:"fit-content",height:"fit-content"})
    if(cxlEsc){ Obj.addEventListener('keydown', (e)=>{ if (e.key === 'Escape'){e.preventDefault()} }) }
    return Obj
}

function lockScroll(lock=true){
    document.body.style.overflow = lock ? "hidden" : ""
    document.body.style.touchAction = lock ? 'none' : ""
}

function addEmo(emoji="emoji",lbl="emoji label",id="",mirrored=false){
    let style = ""
    if(mirrored){style = "display:inline-block; transform: scaleX(-1);"}
    return `<span id="`+id+`" style="`+style+`" role="img" aria-label="`+lbl+`">`+emoji+`</span>`
}


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

/*
function getUnlock(lbl){
    let ret = undefined
    let src = player.unlockedElements
    let idx = src.findIndex(x=>x.lbl===lbl)
    if(idx>-1){ret = src[idx]}
    return ret
}
*/

function getResource(lbl){
    let ret = undefined
    let src = player.resources
    let idx = src.findIndex(x=>x.lbl===lbl)
    if(idx>-1){ret = src[idx]}
    return ret
}

function getAction(lbl){
    let ret = undefined
    let src = player.actions
    let idx = src.findIndex(x=>x.lbl===lbl)
    if(idx>-1){ret = src[idx]}
    return ret
}


function addBtn(dad,lbl,func,id=undefined,borders=undefined,textCol=undefined,backCol=undefined){
    let src = player.visuals
    return addEle({dad:dad,text:lbl,setClass:"btn",setFunc:func,
    setID:id !== undefined ? id : "", border:borders !== undefined ? borders : src.btnBrd.new,
    textC:textCol !== undefined ? textCol : src.btnTxt.new, backC:backCol !== undefined ? backCol : src.btnBG.new
})
}

function addImg(dad,imgName,imgSize,borders=undefined,margins=undefined,func=undefined,
    id=undefined,imgType="jpeg"){
    return addEle({dad:dad,what:"img",imgFullSrc:"imgs/"+imgName+"."+imgType,imgSize:imgSize,
    border:borders !== undefined ? borders : "", radius:"50px",
    setFunc:func !== undefined ? func : undefined, setID:id !== "" ? id : "",
    margin:margins !== undefined ? margins : ""
})
}

function strInOuts(src){
    let ret = "Get/s : "
    if(src.outputs.length === 0){
        ret += "--"
    } else {
        src.outputs.forEach(i =>{ret += i.val+" "+i.lbl+", "})
        ret = ret.slice(0,ret.length-2)
    }
    ret += " | Cost/s : "
    if(src.costs.length===0){
        ret += "--"
    } else {
        src.costs.forEach(i=>{ret += i.val+" "+i.lbl+", "})
        ret = ret.slice(0,ret.length-2)
    }
    return ret
}

function setTip(ele,txt){
    ele.addEventListener("mouseover",()=>{info.innerHTML=txt})
    ele.addEventListener("mouseout",()=>{info.innerHTML=""})
}

function StrFunc(txt){
    switch(txt){
        case "rest":return rest ; break
        case "studyBook" : return studyBook ; break
        case "explore" : return explore ; break
        default : console.log(txt+" not set yet")
    }
}

function randInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomChance(Xpercent){
    let ret = {val:undefined,result:undefined}
    ret.val = Math.random()
    ret.result = ret.val < Xpercent/100
    return ret
}


function clock(seconds) {
    seconds = Math.floor(seconds);
  
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
  
    return [
      String(hours).padStart(2, "0"),
      String(minutes).padStart(2, "0"),
      String(secs).padStart(2, "0")
    ].join(":");
  }

function getItm(lbl){
    let ret = undefined
    let src = player.items
    let idx = src.findIndex(x=>x.lbl===lbl)
    if(idx>-1){ret = src[idx]}
    return ret
}

function getCrop(lbl){
    let ret = undefined
    let src = crops
    let idx = src.findIndex(x=>x.lbl===lbl)
    if(idx>-1){ret = src[idx]}
    return ret
}


const body = document.querySelector("body")

let baseA = {
    rice:1600,
    water:2000,
    sauce:720,
    pea:100,
    daily:180,
}

let baseB = {
    rice:113.64,
    water:136.37,
    sauce:49.1,
    pea:6.82,
    daily:12.3,
}


let cr = addEle({dad:body,setClass:"contRow",margin:"10px"})
    let sel = addEle({dad:cr,what:"select",setClass:"select",textA:"center",setID:"sel",
        setFunc:(e)=>{
            let nb = Number(e.srcElement.value) ; console.log("do it "+nb)
            calc(getID("f1"),nb,baseA)
        }})
    for(let i=2;i<=12;i++){addEle({dad:sel,what:"option",text:(i*.5)})}

    addEle({dad:cr,text:"#",margin:"0 10px 0 60px"})

    addEle({dad:cr,what:"input",isInput:true,setVal:0,textA:"center",width:"40px",
    numInput:true,setFunc:(e)=>{
        let nb = Number(e.srcElement.value)
        console.log(nb)
        calc(getID("f2"),Math.ceil(nb),baseB)
    }})

cr = addEle({dad:body,setClass:"contRow"})
    let F1 = addEle({dad:cr,setClass:"contCol",setID:"f1",padding:"5px",margin:"10px"})
    let F2 = addEle({dad:cr,setClass:"contCol",setID:"f2",padding:"5px",margin:"10px"})


let ev = new Event("change") ; getID("sel").dispatchEvent(ev) //sel.dispatchEvent(ev)

function calc(fr,nb,bs){
    cleanParent(fr)

    addEle({dad:fr,text:"Rice " + Math.round(nb*bs.rice)})
    addEle({dad:fr,text:"Water " + Math.round(nb*bs.water)})
    addEle({dad:fr,text:"Sauce " + Math.round(nb*bs.sauce)})
    addEle({dad:fr,text:"Pea " + Math.round(nb*bs.pea)})
    addEle({dad:fr,text:"Daily " + Math.round(nb*bs.daily)})
}