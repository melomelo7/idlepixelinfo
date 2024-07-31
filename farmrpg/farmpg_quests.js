
let allLines = []
function getEmAll(){
    frpgQLs.forEach(q=>{
        let idx = allLines.findIndex(it=>it === q.questline)
        if(idx === -1){allLines.push(q.questline)} allLines = allLines.sort() }) }

let txt = undefined

let player = {
    questlines:[],
    questSkills:[],
    questStorage:0,

    addQuestline:undefined,
}


let lastUp = "08/01 02:00"

const body = document.querySelector("body")

const mainFr = addEle({dad:body,setClass:"contRow",height:"100%",width:"100%"}) // ,backC:"green",
    let lftWd = 180
    const left = addEle({dad:mainFr,setClass:"contCol",height:"100%",
    overflowX:"hidden",minWidth:lftWd+"px",borderR:"solid blue 2px"})

        for(let i=0;i<2;i++){addEle({dad:left,setClass:"contCol",margin:"2px",
        setID:"left"+(i+1),alignItems:"center"})}

    const right = addEle({dad:mainFr,setClass:"contCol",height:"100%",width:"100%"})
    
        let cont = addEle({dad:right,setClass:"contRow",alignItems:"center"})
        txt = `To have it a little more "RPG-like" we will call<br>your `+
        spanText("lime","Adventure")+` the collection of your `+spanText("lime","Questlines")  
        addEle({dad:cont,text:txt,margin:"10px 0 0 10px"})

        addEle({dad:cont,text:"last up : "+lastUp,marginL:"50px",textC:"yellow"})

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
    player.questlines.forEach(q=>{if(q.current===""){currentGood = false}})

    addEle({dad:main,text:"Questlines : " + spanText("lime",player.questlines.length)})
    cont = addEle({dad:main,setClass:"contRow",marginT:"5px"})
        addEle({dad:cont,what:"radio",isInput:true,setVal:"global view",setName:"questCur"})
        addEle({dad:cont,text:"Global View (1st quests until last quests)"})
    cont = addEle({dad:main,setClass:"contRow",margin:"5px 0"})
        addEle({dad:cont,what:"radio",isInput:true,setVal:"current view 1",setName:"questCur",
        disabled:currentGood === false ? true:false})
        addEle({dad:cont,text:"Current View 1 (current quests only)",textC:currentGood ? "white" : "brown"})
    cont = addEle({dad:main,setClass:"contRow",marginB:"5px"})
        addEle({dad:cont,what:"radio",isInput:true,setVal:"current view to last",setName:"questCur",
        disabled:currentGood === false ? true:false})
        addEle({dad:cont,text:"Current View to last (current quests until last quests)",
        textC:currentGood ? "white" : "brown"})

    cont = addEle({dad:main,setClass:"contRow",margin:"5px 0",})//display:currentGood ? "none":"flex"
        addEle({dad:cont,text:"✅To enable options 2 & 3<br>you need to set current quests",textC:"cyan"})
        addEle({dad:cont,setClass:"btn",text:"Set "+spanText("brown","Current")+" Quests",border:"solid 3px brown",setFunc:()=>{
            if(curQfr.style.display==="none")
                    {curQfr.style.display = "flex" ; curQsetter()} 
            else {curQfr.style.display = "none"}
        }})
    
    addEle({dad:main,setClass:"contCol",margin:"5px",padding:"5px",border:"solid 3px brown"
    ,display:"none",radius:"10px",setID:"curQfr"})

    addEle({dad:main,setID:"infoQ",margin:"5px 0",textC:"yellow",minHeight:"20px",textA:"center"})
    addEle({dad:main,setClass:"btn",text:"Display Result",width:"90%",setFunc:displayR})

    addEle({dad:main,setClass:"contCol",setID:"questingDisp",padding:"5px",display:"none"})
}

function curQsetter(){
    let myC = getID("curQfr")
    let src = player.questlines
    cleanParent(myC)

    for(let i=0;i<src.length;i++){
        let cont = addEle({dad:myC,setClass:"contRow",alignItems:"center"})
            addEle({dad:cont,text:src[i].label,marginR:"10px",marginL:"10px",
            minWidth:"160px",textA:"center",setID:"currentL:"+i})

            addEle({dad:cont,text:src[i].current === "" ? "I":src[i].current,textC:"lime",
            minWidth:"50px",textA:"center",setID:"currentQ:"+i})

            addEle({dad:cont,text:"◀",fontS:"10px",fontB:"bold",padding:"5px",textC:"brown",
            marginL:"5px",border:"solid 2px brown",radiusTL:"20px",radiusBL:"20px",
            cursor:"pointer",setID:"currentM:"+i,
            setFunc:(e)=>{getID("currentR:"+e.srcElement.id.split(":")[1]).value-- ; upCurR(e)}})

            addEle({dad:cont,text:"▶",fontS:"10px",fontB:"bold",padding:"5px",textC:"brown",
            marginR:"5px",border:"solid 2px brown",radiusTR:"20px",radiusBR:"20px",
            cursor:"pointer",setID:"currentP:"+i,
            setFunc:(e)=>{getID("currentR:"+e.srcElement.id.split(":")[1]).value++ ; upCurR(e)}})

            addEle({dad:cont,what:"range",isInput:true,width:"50px",accentCol:"brown",
            setID:"currentR:"+i,min:1,max:grabQL(src[i].label).length,
            setVal:src[i].current === "" ? 1 : romanToNb(src[i].current)
            ,setFunc:(e)=>{upCurR(e)}})
    }

    addEle({dad:myC,setClass:"btn",text:"Save Changes",width:"90%",marginT:"10px",border:"solid 3px brown",
    backC:"brown",textC:"ghostwhite",fontB:"bold",setFunc:()=>{
        for(let i=0;i<player.questlines.length;i++){player.questlines[i].current = getID("currentQ:"+i).innerHTML}
        setQuesting()
    }})
}
function upCurR(e){
    let dis = getID("currentQ:"+e.srcElement.id.split(":")[1])
    let ran = getID("currentR:"+e.srcElement.id.split(":")[1])
    dis.innerHTML = romanToNb(ran.value,true)
}



function grabQL(nm){
    return frpgQLs.filter(it=>it.questline === nm)
}

function romanToNb(nb,rev = false){
    if(!rev){return romans.findIndex(r=>r===nb)+1}
    else    {return romans[nb-1]}
}

function displayR(){
    let res = ""
    document.getElementsByName("questCur").forEach(it=>{if(it.checked){res = it.value}})

    let sel = []
    let idx = undefined
    if(res!==""){ getID("infoQ").innerHTML = ""
        player.questlines.forEach(q1=>{
            let lb = q1.label
            let src = grabQL(lb)
            for(let i=0;i<src.length;i++){
                switch(res){
                    case "global view" : sel.push(src[i]) ; break
                    case "current view 1" : idx = romanToNb(q1.current)
                        if(i===idx-1){sel.push(src[i])} ; break
                    case "current view to last" : idx = romanToNb(q1.current)
                        if(i>=idx-1){sel.push(src[i])} ; break
                    }
            }
        })
        displayR2(sel)
    } else {getID("infoQ").innerHTML = "Select a View Option before click on Display"}
}

function displayR2(lst){
    let myC = getID("questingDisp")
    cleanParent(myC)

    let requirements = []

    player.questlines.forEach(q=>{
        let lb = q.label
        let obj = {questline:lb,requirements:[],storageRq:0,storageRw:0}
        lst.forEach(l=>{
            if(l.questline===lb){
                l.skills.forEach(sk=>{
                    let idx = obj.requirements.findIndex(it=>it.label===sk.skill)
                    if(idx<0){
                        obj.requirements.push({label:sk.skill,values:[]})
                        obj.requirements[obj.requirements.length-1].values.push(sk.value)
                    } else {
                        let idx2 = obj.requirements[idx].values.findIndex(it=>it===sk.value)
                        if(idx2===-1){obj.requirements[idx].values.push(sk.value)}
                    }
                })
                l.requests.forEach(rq=>{
                    if(rq.label!=="Silver"){
                        if(rq.quantity > obj.storageRq){obj.storageRq = rq.quantity}
                    }
                })

                l.rewards.forEach(rw=>{
                    if(rw.label!=="Silver"){
                        if(rw.quantity > obj.storageRw){obj.storageRw = rw.quantity}
                    }
                })

            }

        })
        requirements.push(obj)
    })

    myC.style.display = "flex"

    let cont = addEle({dad:myC,setClass:"contRow",alignItems:"center",marginB:"5px"})
        addEle({dad:cont,text:spanText("yellow","Requirements :"),borderB:"solid red 3px",
        width:"fit-content",marginB:"5px"})
        addEle({dad:cont,text:"🔽",padding:"2px",border:"yellow solid 2px",radius:"10px",
        marginL:"10px",cursor:"pointer",setFunc:(e)=>{
            getID("reqsFr").style.display = e.srcElement.innerHTML==="🔽" ? "flex" : "none"
            e.srcElement.innerHTML = e.srcElement.innerHTML==="🔽" ? "🔼" : "🔽"
        }})
 

    cont = addEle({dad:myC,setClass:"contCol",border:"blue solid 3px",radius:"20px",padding:"5px",
    setID:"reqsFr",display:"none",maxHeight:"200px",overflowX:"hidden"})

    requirements.forEach(r=>{
        let subC1 = addEle({dad:cont,setClass:"contRow",marginT:"5px",border:"solid 2px teal",
        radius:"20px",padding:"5px"})
            addEle({dad:subC1,text:r.questline,minWidth:"160px",marginR:"5px"})
            let subC2 = addEle({dad:subC1,setClass:"contCol",width:"100%"})
            addEle({dad:subC2,text:"Requests Max<br>Storage : "+r.storageRq})
            addEle({dad:subC2,text:"Rewards Max<br>Storage : "+r.storageRw})
            addEle({dad:subC2,borderB:"dotted lime 3px",margin:"5px 0",width:"100%"})
            r.requirements.forEach(r2=>{
                if(r2.values.length<2){
                    txt = r2.label+ " : " +r2.values[0]
                } else {
                    r2.values.sort((a,b)=>a-b)
                    txt = r2.label+ " : " +r2.values[0]+ " ~ "+r2.values[r2.values.length-1]
                }
                addEle({dad:subC2,text:txt})
            })
    })


}