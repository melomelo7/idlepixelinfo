function cleanParent(parent){while(parent.children.length >0){parent.removeChild(parent.lastChild)}}

function spanText(spanColor,spanTxt){return `<span style="color:`+spanColor+`;">`+spanTxt+"</span>"}

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
            thisObj.src = imgSrc
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

/*
const body = document.querySelector("body")
  const frame = addEle({dad:body,setClass:"contRow",height:"100%"})
    const menu = addEle({dad:frame,setClass:"leftMenu"})
    const main = addEle({dad:frame,setClass:"contCol",alignItems:"center",height:"100%"})
      addEle({dad:main,what:"img",imgSrc:"house_rules.jpg",imgSize:490})
      const content = addEle({dad:main,setClass:"contCol"})
*/

const body = document.querySelector("body")
const frame = addEle({dad:body,setClass:"contRow",height:"100%"})
    const menu = addEle({dad:frame,setClass:"leftMenu"})
    const content = addEle({dad:frame,setClass:"contCol"})
    
let BtS = 160
    
addEle({dad:menu,setClass:"clickBtn",text:"ホーム",minWidth:BtS+"px",setFunc:()=>{
    cleanParent(content)
    addEle({dad:content,what:"img",imgSrc:"house_rules.jpg",imgSize:490,margin:"10px",
    border:"solid red 2px",radius:"5px"})
}})
addEle({dad:menu,text:"♦ ♦ ♦",fontS:"20px"})
      

const pages = [
    {title:"出退勤のルール",
    subTitle:``,
    content:`
    ●出勤時​<br>
    ・10分位前までに店舗に来て`+spanText("red","貴重品を預け、手洗い・個人衛生チェック")+`<br>
    &nbsp;&nbsp;&nbsp; の記入をし、5分前には勤怠端末に出勤の打刻をしましょう。<br>
    ・全員に`+spanText("red","元気に、目をみて")+`「おはようございます！」と挨拶をしましょう。​<br>
    ・責任者のところへ行き、業務の指示を受けてください。​<br><br>
    ●貴重品​<br>
    ・出勤時に貴重品（財布）は、`+spanText("red","責任者に手渡しであずけます。​")+`<br>
    ・勤務中、携帯は財布と一緒に預けるか、電源OFFにして持ち歩きます。<br>
    ・店舗での紛失等々は会社としては関知しません。​<br>
    ・店舗には高額な金銭や物品を持ち込まない様にしましょう。​<br><br>
    ●退勤時​<br>
    ・作業を完了した後、全員に　「お疲れ様でした、　お先に失礼します！」<br>
    &nbsp;&nbsp;&nbsp; と挨拶し、勤怠を打刻します。​<br>
    ・勤怠打刻後、手洗いをしましょう。​<br><br>
    ●更衣室​<br>
    ・私物は勿論、ゴミや衣類等気が付いたら片付けましょう。​<br>
    ・制服はハンガーにかけ、ずれ落ちないように前ボタンを止めましょう。<br>
    `,
    content2:``
    },
    {title:"身だしなみ　（ホール）",
    subTitle:spanText("blue","身だしなみを整える事が、周囲の人へのホスピタリティ（思いやり）の第一歩です。​"),
    content:`
    ●髪​<br>
    ・肩にかかる場合は後ろで束ねて固定​<br>
    ・香りの強い整髪料はNG<br>
    ・清潔感のある髪形​<br><br>
    ●香水​<br>
    ・禁止（柔軟剤等も注意）​<br><br>
    ●顔​<br>
    ・無精ひげはNG<br>
    ・化粧はナチュラルメイクにする​<br><br>
    ●マスク​<br>
    ・基本は着用無し（責任者に相談）​<br><br>
    ●手​<br>
    ・爪を短く切る​<br>
    ・色付きのマニキュア、ネイルアートはNG<br>
    ・時計は時間帯責任者のみ可​<br>
    ・手首にヘアゴムなどは禁止
    `,
    content2:`
    ●制服​<br>
    ・規定のシャツ、ズボン、エプロンを着用​<br>
    ・シャツは第2ボタンまでとめる<br>
    ・ボタンダウンはとめる​<br>
    ・汚れ、しわのないものを着用​<br>
    ・ネームプレートは左胸につける​<br>
    &nbsp;&nbsp;&nbsp;※シールなど貼りすぎに注意​<br>
    ・洗濯は各自で行う​<br><br>
    ●靴<br>
    ・黒の滑りにくい靴​<br><br>
    ●装飾品​<br>
    ・ピアスは耳たぶに収まる程度のもの​<br>
    ・指輪は結婚指輪のみOK<br><br>
    ●タトゥー​<br>
    ・勤務中は見えないようにする
    `
    },
    {title:"身だしなみ　（キッチン）",
    subTitle:spanText("blue","ホールスタッフと同様に常にお客様から見られている意識を持ちましょう！​"),
    content:`
    ●髪​<br>
    ・肩にかかる場合は後ろで束ね、​<br>
    &nbsp;&nbsp;&nbsp;キャップの中に収まる様にする​<br>
    ・香りの強い整髪料はNG<br>
    ・清潔感のある髪形​<br>
    ・キャップから前髪が出ない様にする​<br><br>
    ●香水​<br>
    ・禁止（柔軟剤等も注意）​<br><br>
    ●顔​<br>
    ・無精ひげはNG<br>
    ・化粧はナチュラルメイクにする​<br><br>
    ●マスク​<br>
    ・基本は着用無し（責任者に相談）​<br><br>
    ●手​<br>
    ・爪を短く切る​<br>
    ・色付きのマニキュア、ネイルアートはNG<br>
    ・傷や手荒れがひどい場合は手袋を着用    
    `,
    content2:`
    ●制服​<br>
    ・コックコート、縞ズボン、エプロンを着用​<br>
    ・コックコートは第1ボタンまでとめる<br>
    ・ズボンは引きずらない​<br>
    ・汚れ、しわのないものを着用<br>
    ・ネームプレートは左胸につける​<br>
    &nbsp;&nbsp;&nbsp;※シールなど貼りすぎに注意​<br>
    ・20～30時間を目安にクリーニング<br><br>
    ●靴​<br>
    ・コックシューズを着用​<br>
    &nbsp;&nbsp;&nbsp;※店舗で発注、半額を給料から天引き​<br><br>
    ●装飾品​<br>
    ・ピアス、指輪はNG<br><br>
    ●タトゥー​<br>
    ・勤務中は見えないようにする
    `
    },
    {title:"挨拶とグリーティング​",
    subTitle:"",
    content:`
    それぞれの意味を理解して使い分けられるようにしましょう！​<br><br>
    ●挨拶​<br>
    ・`+spanText("red","お客様の目を見て、笑顔で")+`「こんにちは」、​<br>
    「こんばんは」、「いらっしゃいませ」​<br><br>
    ●グリーティング​<br>
    ・`+spanText("red","大きな声で元気よく")+`​<br>
    ・主にイタリア語を使い、​<br>
    イタリアの大衆食堂の雰囲気を作ります。
    `,
    content2:`
    greetings.jpg
    `
    },
]


pages.forEach(itm=>{addEle({dad:menu,setClass:"clickBtn",text:itm.title,minWidth:BtS+"px",setFunc:displayPg})}) 
menu.children[0].style.marginTop = "20px"

addEle({dad:menu,text:"♦ ♦ ♦",fontS:"20px"})
addEle({dad:menu,setClass:"clickBtn",text:"バックの白・黒切り替え",setFunc:()=>{
    body.style.backgroundColor =
    body.style.backgroundColor === "" || body.style.backgroundColor === "white" ?
    "black" : "white"
}})

function displayPg(e){
    cleanParent(content)
    let srcObj = pages.filter(pg=>pg.title===e.srcElement.innerHTML)[0]
    let myCont = addEle({dad:content,setClass:"contCol",width:"fit-content"})

    addEle({dad:myCont,backC:"yellow",fontS:"30px",text:srcObj.title,
    textA:"center",margin:"10px",padding:"10px",radius:"5px",fontB:"bold"})

    if(srcObj.subTitle!==""){ addEle({dad:myCont,fontS:"22px",text:srcObj.subTitle,
        textA:"center",margin:"0",padding:"10px",radius:"5px",fontB:"bold"})}

    if(srcObj.content2===""){
        addEle({dad:myCont,margin:"0 10px 10px 10px",padding:"10px",border:"red solid 2px",
        radius:"5px",fontB:"bold",backC:"beige",text:srcObj.content,fontS:"20px",width:"fit-content"})
    } else {
        let subCont = addEle({dad:myCont,setClass:"contRow"})
        addEle({dad:subCont,margin:"0 10px 10px 10px",padding:"10px",border:"red solid 2px",
        radius:"5px",fontB:"bold",backC:"beige",text:srcObj.content,fontS:"20px",width:"fit-content"})

        if(srcObj.content2.includes(".jpg")){
            console.log("!")
            addEle({dad:subCont,margin:"0 10px 10px 10px",border:"red solid 2px",radius:"5px",
            what:"img",imgSrc:srcObj.content2})
        } else {
            addEle({dad:subCont,margin:"0 10px 10px 10px",padding:"10px",border:"red solid 2px",
            radius:"5px",fontB:"bold",backC:"beige",text:srcObj.content2,fontS:"20px",width:"fit-content"})
        }


    }
}