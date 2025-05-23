let mercs = [
    {ref:826, label:"大根"},
    {ref:801, label:"青ねぎ"},
    {ref:808, label:"アスパラガス"},
    {ref:848, label:"ゆり根"},
    {ref:856, label:"大葉"},
    {ref:956, label:"アボカド"},
    {ref:879, label:"かぼちや"},
    {ref:819, label:"枝豆"},
    {ref:874, label:"ブロッコリー"},
    {ref:867, label:"セロリ"},
    {ref:852, label:"パプリカ"},
    {ref:849, label:"小松菜"},
    {ref:825, label:"白ねぎ"},
    {ref:828, label:"生椎茸"},
    {ref:836, label:"さつまいも"},
    {ref:839, label:"長いも"},
    {ref:880, label:"はくさい"},
    {ref:888, label:"水菜"},
    {ref:824, label:"キャ ベツ"},
    {ref:812, label:"レタス"},
    {ref:814, label:"きゅうり"},
    {ref:855, label:"山の芋"},
    {ref:857, label:"ナマタケノコ"},
    {ref:846, label:"チンゲン菜"},
    {ref:838, label:"玉葱"},
    {ref:861, label:"人参"},
    {ref:840, label:"じゃがいもバラ"},
    {ref:802, label:"かぶら"},
    {ref:876, label:"白ネギバラ"},
    {ref:870, label:"ズッキーニ"},
    {ref:866, label:"ピーマン 袋"},
    {ref:816, label:"なす"},
    {ref:807, label:"ほうれん草"},
    {ref:887, label:"ゆす"},
    {ref:815, label:"トマト"},
    {ref:873, label:"ス ダ チ"},
    {ref:869, label:"ゴーヤ"},
    {ref:813, label:"オクラ"},
    {ref:822, label:"とうもろこし"},
    {ref:817, label:"ビーマン バラ"},
    {ref:906, label:"赤リンゴ"},
    {ref:900, label:"青リンゴ"},
    {ref:947, label:"キウイ"},
    {ref:938, label:"ぶどう"},
    {ref:949, label:"パイナップル"},
    {ref:946, label:"オレンジ"},
    {ref:912, label:"いよかん"},
    {ref:965, label:"しらぬい"},
    {ref:910, label:"アマナツ"},
    {ref:939, label:"シャインマスカット"},
    {ref:948, label:"グレープフルーツ"},
    {ref:971, label:"青グレープフルーツ"},
    {ref:950, label:"レモン"},
    {ref:928, label:"すいか"},
    {ref:964, label:"デコボン"},
    {ref:935, label:"メロン"},
    {ref:934, label:"メロン(黄色)"},
    {ref:954, label:"バナナ"},
    {ref:926, label:"いちご"},
    {ref:927, label:"コタマスイカ"},
    {ref:942, label:"赤梨"},
    {ref:944, label:"青梨"},
    {ref:943, label:"洋なし"},
    {ref:923, label:"かき"},
    {ref:920, label:"みかん"},
    {ref:988, label:"みかん簡素化箱"},
    {ref:941, label:"もも"},
    {ref:957, label:"マンコ"},
    ]
    
const body = document.querySelector("body")

let quizByNumbers = undefined

let fonts = 64

let cont = addEle({dad:body,setClass:"contCol",alignItems:"center",marginT:"40px"})
    addEle({dad:cont,setClass:"btn",text:"番号から当ててみよう",textC:"yellow",minWidth:"800px",
    fontS:fonts+"px",margin:"20px",setFunc:()=>{quizByNumbers = true ; roll()}})

    addEle({dad:cont,setClass:"btn",text:"商品名から当ててみよう",textC:"yellow",minWidth:"800px",
    fontS:fonts+"px",margin:"20px",setFunc:()=>{quizByNumbers = false ; roll()}})

    addEle({dad:cont,text:"? ? ?",setID:"quiz",padding:"10px",border:"teal solid 2px",
    radius:"20px",fontS:fonts+"px",margin:"30px"})

    let subC = addEle({dad:cont,setClass:"contRow",alignItems:"center"})
        addEle({dad:subC,what:"select",setID:"mySelect",fontS:fonts+"px",marginR:"10px"})
        addEle({dad:subC,setClass:"btn",text:"確認",textC:"yellow",fontS:fonts+"px",setFunc:quizCheck})
        addEle({dad:subC,setID:"answerM",fontS:fonts+"px",marginL:"10px"})
        addEle({dad:subC,setID:"answer",fontS:fonts+"px",marginL:"10px"})


function roll(){
    getID("answer").innerHTML = ""
    getID("answerM").innerHTML = ""
    let rnd = Math.floor(Math.random() * mercs.length)
    let quiz = undefined
    let arr = []
    if(quizByNumbers){
        quiz = mercs[rnd].ref
        mercs.forEach(it=>{arr.push(it.label)})
        }
    else {
        quiz = mercs[rnd].label
        mercs.forEach(it=>{arr.push(it.ref)})
        arr.sort()
    }

    getID("quiz").innerHTML = quiz

    fillSelect(arr)
}

function fillSelect(arr){
    let tgt = getID("mySelect")
    cleanParent(tgt)
    arr.forEach(it=>{addEle({dad:tgt,what:"option",text:it})})
}

function quizCheck(){
    let rep = getID("mySelect").value
    if(!rep){return}

    let good = undefined
    let gRep = undefined
    let txt = ""

    if(quizByNumbers){
        good = mercs.filter(it=>it.ref === Number(getID("quiz").innerHTML))[0]
        gRep = good.label
    }
    else {
        rep = Number(rep)
        good = mercs.filter(it=>it.label === getID("quiz").innerHTML)[0]
        gRep = good.ref
    }

    if(rep === gRep)
         {getID("answerM").innerHTML = "✅" ; txt = "あたり！"}
    else {getID("answerM").innerHTML = "⛔" ; txt = "はずれ...<br>"+gRep+" でした"}

    getID("answer").innerHTML = txt
}

