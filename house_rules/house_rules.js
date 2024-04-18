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


const body = document.querySelector("body")
const frame = addEle({dad:body,setClass:"contRow",height:"100%"})
    const menu = addEle({dad:frame,setClass:"leftMenu"})
    const content = addEle({dad:frame,setClass:"contCol"})
    
let BtS = 240
    
addEle({dad:menu,setClass:"clickBtn",text:"ホーム",minWidth:BtS+"px",setFunc:()=>{
    cleanParent(content)
    addEle({dad:content,what:"img",imgSrc:"house_rules.jpg",imgSize:490,margin:"10px",
    border:"solid red 2px",radius:"5px"})
}})
addEle({dad:menu,text:"♦ ♦ ♦",fontS:"20px"})
      

const pages = [
    {title:"出退勤のルール",
    subTitle:``,
    contentBC:"",
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
    content2BC:"",
    content2:``
    },
    {title:"身だしなみ　（ホール）",
    subTitle:spanText("blue","身だしなみを整える事が、周囲の人へのホスピタリティ（思いやり）の第一歩です。​"),
    contentBC:"",
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
    content2BC:"",
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
    contentBC:"",
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
    content2BC:"",
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
    contentBC:"",
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
    content2BC:"",
    content2:`
    greetings.jpg
    `
    },
    {title:"接客用語​",
    subTitle:`正しい言葉遣いは飲食業だけでなく、`+spanText("red","社会人として身に付ける")+`必要があります。​<br>
    お客様が近くにいらっしゃる際は、`+spanText("red","パートナー同士の会話も丁寧語")+`を使いましょう。​`,
    contentBC:"",
    content:`
    ✖　正しくない　✖<br><br>
    ■お味の`+spanText("red","方は")+`いかがでしたか？​<br>
    ■～でよろし`+spanText("red","かった")+`でしょうか​<br>
    ■～円`+spanText("red","から")+`お預かり致します​<br><br>
    ■すみません​<br>
    ■客／お客さん<br>
    ■（料理名）になります​<br>
    ■（料理名）のお客様​<br>
    ■（料理名）は大丈夫ですか<br>
    ■あっち／こっち​<br>
    ■少々お待ち下さい​<br>
    ■宜しければお試しください<br>
    ■こちらお下げします​<br>
    ■お呼び下さい​<br>
    ■わかりません​<br>
    ■ありません・出来ません<br>
    ■お客様はこちらを注文されました​<br>
    （注文間違いの際の対応）​
    `,
    content2BC:"coral",//"dodgerblue",
    content2:`
    〇　正しい　〇<br><br>
    ■お味はいかがでしたか？<br> 
    ■～でよろしいですか​<br>
    ■～円お預かり致します​<br>
    &nbsp; ～円頂戴します（ちょうどの際）<br>  
    ■申し訳ございません／失礼致しました<br> 
    ■お客様​<br>
    ■【（料理名）でございます】<br> 
    ■【（料理名）をお待ちのお客様】<br> 
    ■【（料理名）はいかがですか】​<br>
    ■あちら／こちら <br>
    ■【ただいま伺います（肯定的）】<br>   
    ■是非お試しください​<br>
    ■【お下げしましょうか（同意）】<br>
    ■【後ほど参ります（能動的）】​<br>
    ■【確認致します】​<br>
    ■このような形ではどうでしょう（提案）<br>
    ■【確認不足で申し訳ございません】​<br>
    `
    },
    {title:"シフト",
    subTitle:"",
    contentBC:"",
    content:`
    遅刻や欠勤は他のパートナーとお客様へ大きな迷惑をかけてしまうことになります。​<br>
    シフト表の見落としや勤務時間の間違いがないように気を付けてください。​<br><br>
    ●『らくしふ』から希望を登録​<br>
    &nbsp;&nbsp;&nbsp;`+spanText("red","1～15日 : 前月20日まで<br>&nbsp;16～31日 : 当月5日まで")+`<br><br>
    ※GW、夏休み、年末年始等は提出期限が早まります。<br><br>
    ●ヘルプ勤務について​<br>
    ・他店舗でのヘルプ勤務をお願いする事があります。​<br>
    ・往復の交通費支給（ヘルプ先店舗で精算）​<br><br>
    ●シフト決定後のルール​<br>
    ・決定したシフトは原則として変更できません。​<br>
    ・自己都合でシフトを変更したい場合には、自分で`+spanText("red","代理のパートナー")+`をたてて、​<br>
    &nbsp;&nbsp;&nbsp;責任者に許可を得てください。​<br>
    ・やむを得ず遅刻、欠勤する場合は、`+spanText("red","出来るだけ早く店舗に電話で連絡")+`してください。
    `,
    content2BC:"",
    content2:``
    },
    {title:"勤務中・休憩",
    subTitle:"",
    contentBC:"",
    content:`
    <span style="background-color:yellow;font-size:22px;">&nbsp;&nbsp;&nbsp;&nbsp;勤務中&nbsp;&nbsp;&nbsp;&nbsp;</span><br>
    ・身だしなみ、姿勢を正し`+spanText("red","お客様最優先")+`で行動します​<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;優先順位　①お客様　②料理　③作業​<br>
    ・陽気なイタリア人は`+spanText("red","いつも笑顔で元気")+`です。是非、全力で真似しましょう。​<br>
    ・トイレなどで`+spanText("red","持ち場を離れる際は必ず責任者に報告し許可を得て")+`下さい。​<br>
    ・勤務中の`+spanText("red","私用電話、携帯電話（所持する場合は電源OFF）は禁止")+`です。<br>
    ・お互いに`+spanText("red","声を掛け合い、意思表示をはっきりと")+`行います。​<br>
    ・声を掛けられた人は`+spanText("red","必ず返事")+`をします。​<br>
    ・`+spanText("red","報告・連絡・相談")+`の徹底（些細な事でも必ずマネージャーに報告）<br><br>
    <span style="background-color:yellow;font-size:22px;">&nbsp;&nbsp;&nbsp;&nbsp;休憩&nbsp;&nbsp;&nbsp;&nbsp;</span><br>
    ・休憩時間は労働時間によって決まります。`+spanText("red","時間を確認してきちんと守りましょう")+`。​<br>
    ・休憩時間は給与に含まれません。​<br>
    ・`+spanText("red","決められた場所で")+`休憩をとってください。<br>
    ・休憩中もお客様から見える場所では`+spanText("red","きちんとした身だしなみ")+`をお願いします。​<br><br>
    ●休憩時間​<br>
    &nbsp;&nbsp;&nbsp;勤務6時間以上 : 45分<br>&nbsp;&nbsp; 勤務8時間以上 : 60分<br><br>
    ●まかない<br>
    ・店舗のルールがあるので、店長に確認して下さい。​<br>
    ・キッチンに『いただきます』『ごちそうさまでした』と`+spanText("red","気持ちの良い挨拶")+`をしましょう。<br>
    `,
    content2BC:"",
    content2:``
    },
    {title:"モラルの遵守・社員割引",
    subTitle:"",
    contentBC:"",
    content:`
    <span style="background-color:yellow;font-size:22px;">&nbsp;&nbsp;&nbsp;&nbsp;モラルの遵守&nbsp;&nbsp;&nbsp;&nbsp;</span><br>
    以下の行為は`+spanText("red","懲戒・解雇の対象")+`です。​<br>
    ●金銭のごまかし、不正　（従業員の貴重品、売上等金銭の着服など金品の窃盗）​<br>
    ●お店の備消耗品の使用（おしぼり、ストロー、テイクアウト袋、2プライ、六つ折、箸など）<br>
    ●就業中の無断での飲酒・飲食<br>
    ●商品の無断提供、無断割引​<br>
    ●お客様の悪口や店舗事情を口外する​<br>
    ●SNSへの不適切な投稿<br>
    ●検便の未提出​<br>
    ●施設・館内ルールを破る（従業員入口の不使用等）​<br>
    ●従業員・ゲストに対する暴力行為​<br>
    ●各種ハラスメント行為（セクハラ・パワハラ・モラハラなど）​<br>
    ●勤務中の携帯電話無断使用<br><br>
    <span style="background-color:yellow;font-size:22px;">&nbsp;&nbsp;&nbsp;&nbsp;社員割引&nbsp;&nbsp;&nbsp;&nbsp;</span><br>
    WDI店舗での飲食代及び商品代が30%OFFにります。<br>
    【ルール】​<br>
    ●優待券を利用する際は事前に利用先の責任者に報告をして、予約をしましょう。​<br>
    &nbsp;&nbsp;&nbsp;混雑時（金・土・日・祝祭日・イベント時）や人員不足の日は利用できないこともあります。<br>
    `,
    content2BC:"",
    content2:``
    },
    {title:"衛生管理",
    subTitle:"",
    contentBC:"",
    content:`
    <span style="background-color:yellow;font-size:22px;">&nbsp;&nbsp;&nbsp;&nbsp;衛生管理&nbsp;&nbsp;&nbsp;&nbsp;</span><br>
    &nbsp;&nbsp;&nbsp;&nbsp;｢食中毒」とは不特定多数の人々を傷つけ時には、死に到らしめる。​<br>
    &nbsp;&nbsp;&nbsp;&nbsp;常に危険があることを認識し｢より安全な食事を提供」して行くよう心掛けましょう。​<br>
    &nbsp;&nbsp;&nbsp;&nbsp;`+spanText("red","｢食」に携わる者＝人の体内に入るものを扱う＝医療従事者と同等の責任")+`<br><br>
    ●手洗いの励行&nbsp;&nbsp;&nbsp;&nbsp;`+spanText("red","食品衛生は手洗いに始まり、手洗いに終わる")+`​<br>
    &nbsp;&nbsp;&nbsp;&nbsp;シフトイン、作業前、作業の節目、トイレを出るとき、会計後、クリンネス後​<br>
    &nbsp;&nbsp;&nbsp;&nbsp;頭髪、鼻、耳、目などを触ったら（勤務中は触らない）<br><br>
    ●手洗いの方法&nbsp;&nbsp;&nbsp;&nbsp;`+spanText("red","しっかりと手洗いできる様、余裕を持って出勤しましょう")+`​<br>
    &nbsp;&nbsp;&nbsp;&nbsp;①　手を軽く流水で洗い石鹸で３０秒間揉み洗いする​<br>
    &nbsp;&nbsp;&nbsp;&nbsp;②　ひじから手先まで洗う​<br>
    &nbsp;&nbsp;&nbsp;&nbsp;③　流水で十分洗い流す<br>
    &nbsp;&nbsp;&nbsp;&nbsp;④　①～③をもう一度繰り返す<br>
    &nbsp;&nbsp;&nbsp;&nbsp;⑤　ペーパータオルでしっかりと水分を拭き取る​<br>
    &nbsp;&nbsp;&nbsp;&nbsp;⑥　アルコールスプレーで手を殺菌する（すり込む）<br>
    &nbsp;&nbsp;&nbsp;&nbsp;⑦　個人衛生チェック表に記載<br><br>
    ●清掃（クリンネス）​<br>
    ・スケジュールにそって行います。​<br>
    ・見よう見まねで清掃せず、`+spanText("red","決められた手順、清掃道具")+`を使用します。​<br>
    ・冷蔵庫内が冷えていないなど、`+spanText("red","異常があればすぐに責任者へ報告")+`しましょう。　
    `,
    content2BC:"",
    content2:``
    },
]


pages.forEach(itm=>{addEle({dad:menu,setClass:"clickBtn",text:itm.title,minWidth:BtS+"px",setFunc:displayPg})}) 
menu.children[0].style.marginTop = "20px"
menu.children[0].click()

function displayPg(e){
    cleanParent(content)
    let srcObj = pages.filter(pg=>pg.title===e.srcElement.innerHTML)[0]
    let mc = ""
    let myCont = addEle({dad:content,setClass:"contCol",width:"fit-content"})
 
    addEle({dad:myCont,backC:"yellow",fontS:"30px",text:srcObj.title,
    textA:"center",margin:"10px",padding:"10px",radius:"5px",fontB:"bold"})

    if(srcObj.subTitle!==""){ 
        addEle({dad:myCont,fontS:"22px",text:srcObj.subTitle,margin:"0 10px 10px 10px",
        padding:"10px", textA:"center",backC:"beige",radius:"5px",fontB:"bold"})}

    if(srcObj.content2===""){
        mc = srcObj.contentBC === "" ? "beige" : srcObj.contentBC
        addEle({dad:myCont,margin:"0 10px 10px 10px",padding:"10px",border:"red solid 2px",
        radius:"5px",fontB:"bold",backC:mc,text:srcObj.content,fontS:"20px",width:"fit-content"})
    } else {
        let subCont = addEle({dad:myCont,setClass:"contRow",justifyC:"center"})
        mc = srcObj.contentBC === "" ? "beige" : srcObj.contentBC
        addEle({dad:subCont,margin:"0 10px 10px 10px",padding:"10px",border:"red solid 2px",
        radius:"5px",fontB:"bold",backC:"beige",text:srcObj.content,fontS:"20px",width:"fit-content"})

        if(srcObj.content2.includes(".jpg")){
            console.log("!")
            addEle({dad:subCont,margin:"0 10px 10px 10px",border:"red solid 2px",radius:"5px",
            what:"img",imgSrc:srcObj.content2})
        } else {
            mc = srcObj.content2BC === "" ? "beige" : srcObj.content2BC
            console.log(mc)
            addEle({dad:subCont,margin:"0 10px 10px 10px",padding:"10px",border:"red solid 2px",
            radius:"5px",fontB:"bold",backC:mc,text:srcObj.content2,fontS:"20px",width:"fit-content"})
        }


    }
}