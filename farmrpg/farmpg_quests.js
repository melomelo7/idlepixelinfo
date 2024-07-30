
let allLines = []
function getEmAll(){
    frpgQLs.forEach(q=>{
        let idx = allLines.findIndex(it=>it === q.questline)
        if(idx === -1){allLines.push(q.questline)} allLines = allLines.sort() }) }

let txt = undefined

let player = {
    questlines:[],

    addQuestline:undefined,
}

const body = document.querySelector("body")

const mainFr = addEle({dad:body,setClass:"contRow",height:"100%",width:"100%"}) // ,backC:"green",
    let lftWd = 180
    const left = addEle({dad:mainFr,setClass:"contCol",height:"100%",
    overflowX:"hidden",minWidth:lftWd+"px",borderR:"solid blue 2px"})

        for(let i=0;i<2;i++){addEle({dad:left,setClass:"contCol",margin:"2px",
        setID:"left"+(i+1),alignItems:"center"})}

    const right = addEle({dad:mainFr,setClass:"contCol",height:"100%",width:"100%"})
    
        txt = `To have it a little more "RPG-like" we will call your `+
        spanText("lime","Adventure")+` the collection of your `+spanText("lime","Questlines")  
        addEle({dad:right,text:txt,margin:"10px 0 0 10px"})

        const topFr = addEle({dad:right,setClass:"contRow",marginL:"5px"})

            addEle({dad:topFr,setClass:"btn",width:"fit-content",text:"Manage your "
            +spanText("lime","Adventure"),setFunc:()=>{ main.style.display = "flex" ; setAdventure()}})

            let questingBtn = addEle({dad:topFr,setClass:"btn",width:"fit-content",
            text:"Questing",display:"none",setFunc:()=>{setQuesting()}})

        const main = addEle({dad:right,setClass:"contCol",display:"none",border:"solid 2px blue",
        padding:"5px",width:"fit-content",radius:"10px",marginL:"10px",marginB:"10px"})


getEmAll()

function clWorkSp(){
    cleanParent(getID("left1"))
    cleanParent(getID("left2"))
    cleanParent(main)
}

function setAdventure(){
    clWorkSp()
    addEle({dad:main,setID:"advQnb"})
    addEle({dad:main,setClass:"btn",text:"Add questline to "+spanText("lime","Adventure"),
    setID:"addQl",setFunc:()=>{player.addQuestline = true ; questSelect(true)}})
    addEle({dad:main,setClass:"btn",text:"Verify | Remove questline from "+spanText("lime","Adventure"),
    setID:"remQl",setFunc:()=>{player.addQuestline = false ; questSelect(false)}})
    updAdvFr()
}

function updAdvFr(){
    getID("advQnb").innerHTML = `Questlines in your Adventure : `+ spanText("yellow",player.questlines.length)+
    `/`+ allLines.length+`<br>✅`+spanText("cyan",`(remove text in "Find" box to cancel filtering)`)
    getID("addQl").style.display = player.questlines.length < allLines.length ? "block" : "none"
    getID("remQl").style.display = player.questlines.length > 0 ? "block" : "none"
    questingBtn.style.display = player.questlines.length > 0 ? "block" : "none"
}

function questSelect(){
    let lst = []
    let topC = getID("left1")
    if(topC.children.length===0){
        addEle({dad:topC,text:"🔎 Find / Filter :",marginB:"3px"})
        addEle({dad:topC,what:"input",isInput:true,width:"90%",setID:"qSeeker",setFunc:questSelect})
    }

    if(player.addQuestline){
        allLines.forEach(q=>{
            let idx = player.questlines.findIndex(it=>it.label === q)
            if(idx===-1){lst.push(q)}
        })
    } else {
        player.questlines.forEach(q=>{lst.push(q.label)})
    }

    if(getID("qSeeker").value !==""){
        lst = lst.filter(it=>it.toUpperCase().includes(getID("qSeeker").value.toUpperCase()))
    }
    showQuestlines(lst)
}


function showQuestlines(lines){
    let btmC = getID("left2")
    cleanParent(btmC)

    if(lines.length > 0){
        let myFunc = undefined
       
        if(player.addQuestline){
            myFunc = function(e){
                let idx = player.questlines.findIndex(it=>it.label === e.srcElement.innerHTML)
                if(idx===-1){
                    player.questlines.push({label:e.srcElement.innerHTML,current:""})
                    updAdvFr()
                    getID("addQl").click()
                }
            }
        } else {
            myFunc = function(e){
                grabQL(e.srcElement.innerHTML).forEach(q=>q.current = false)
                let idx = player.questlines.findIndex(it=>it.label === e.srcElement.innerHTML)
                player.questlines.splice(idx,1)
                updAdvFr()
                getID("remQl").click()
            }
        }
        lines.forEach(l=>{addEle({dad:btmC,setClass:"btn",text:l,setFunc:myFunc})})
    }

}





function setQuesting(){
    clWorkSp()
    let cont = undefined

    let currentGood = true
    player.questlines.forEach(q=>{q.current = getActiveQ(q.label)})
    player.questlines.forEach(q=>{if(q.current===""){currentGood = false}})


    addEle({dad:main,text:"Questlines : " + spanText("lime",player.questlines.length)})
    cont = addEle({dad:main,setClass:"contRow",marginT:"5px"})
        addEle({dad:cont,what:"radio",isInput:true,setVal:"global",setName:"questCur"})
        addEle({dad:cont,text:"Global View (1st quests until last quests)"})
    cont = addEle({dad:main,setClass:"contRow",margin:"5px 0"})
        addEle({dad:cont,what:"radio",isInput:true,setVal:"current1",setName:"questCur",
        disabled:currentGood === false ? true:false})
        addEle({dad:cont,text:"Current View 1 (current quests only)"})
    cont = addEle({dad:main,setClass:"contRow",marginB:"5px"})
        addEle({dad:cont,what:"radio",isInput:true,setVal:"current",setName:"questCur",
        disabled:currentGood === false ? true:false})
        addEle({dad:cont,text:"Current View to last (current quests until last quests)"})

    cont = addEle({dad:main,setClass:"contRow",margin:"5px 0",display:currentGood ? "none":"flex"})
        addEle({dad:cont,text:"✅To enable options 2 & 3<br>you need to set current quests",textC:"cyan"})
        addEle({dad:cont,setClass:"btn",text:"Set current Quests",border:"solid 3px brown",setFunc:()=>{
            if(curQfr.style.display==="none")
                 {curQfr.style.display = "flex" ; curQsetter()} 
            else {curQfr.style.display = "none"}
        }})
    
    addEle({dad:main,setClass:"contCol",margin:"5px",padding:"5px",border:"solid 3px brown"
    ,display:"none",radius:"10px",setID:"curQfr"})


//console.log(grabQL(player.questlines[0]))

//console.log(player.questlines)



}

function curQsetter(){
    let myC = getID("curQfr")
    let src = player.questlines
    cleanParent(myC)

    for(let i=0;i<src.length;i++){

        console.log(src[i])

        let cont = undefined
        let subC = undefined
        cont = addEle({dad:myC,setClass:"contCol",marginB:"10px"})
            subC = addEle({dad:cont,setClass:"contRow"})
                addEle({dad:subC,text:src[i].label,marginR:"10px",marginL:"10px"})
                addEle({dad:subC,text:src[i].current === "" ? "I":src[i].current,textC:"lime"})

                addEle({dad:subC,text:"◀",setClass:"btn",fontS:"8px",width:"10px"})
                addEle({dad:subC,text:"▶",setClass:"btn",fontS:"8px",width:"10px"})
                addEle({dad:subC,what:"range",isInput:true,width:"100px"})

            subC = addEle({dad:cont,setClass:"contRow"})
    }


}




function grabQL(nm){
    return frpgQLs.filter(it=>it.questline === nm)
}

function getActiveQ(nm){
    let act = ""
    txt = ""
    grabQL(nm).forEach(q=>{if(q.current===true){txt=q.quest}})
    if(txt!==""){
        let idx = txt.lastIndexOf(" ")
        act = txt.slice(idx+1)
    }
    return act
}

function romanToNb(nb,rev = false){
    if(!rev){return romans.findIndex(r=>r===nb)+1}
    else    {return romans[nb-1]}
}

//console.log(romanToNb("X"))
//console.log(romanToNb(10,true))