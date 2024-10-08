
let allLines = []
function getEmAll(){
    frpgQLs.forEach(q=>{
        let idx = allLines.findIndex(it=>it === q.questline)
        if(idx === -1){allLines.push(q.questline)} allLines = allLines.sort() }) }

let txt = undefined

let player = {
    questLines:[],
    questRequirements:[],
    questRequests:[],
    questRewards:[],
    inventory:[],
    inventoryCap:undefined,
   // questSkills:[],
 //   questStorage:0,

    addQuestline:undefined,
}


let lastUp = "08/20 01:30<br>"//+spanText("red","Page In test Mode atm")

const body = document.querySelector("body")

const mainFr = addEle({dad:body,setClass:"contRow",height:"100%",width:"100%"}) // ,backC:"green",
    let lftWd = 340
    const left = addEle({dad:mainFr,setClass:"contCol",height:"100%",width:"fit-content",//
    minWidth:lftWd+"px",overflowX:"hidden"}) // ,borderR:"solid blue 2px"

    const right = addEle({dad:mainFr,setClass:"contCol",height:"100%",minWidth:"300px",})//width:"fit-content"
    const right2 = addEle({dad:mainFr,setClass:"contCol",height:"100%",marginL:"10px"
    ,overflowX:"hidden",width:"50%"})//width:"100%",minWdth:"1000px",

        let cont = addEle({dad:right,setClass:"contRow",alignItems:"center",marginL:"10px"})
        addEle({dad:cont,text:"last up : "+lastUp,textC:"yellow"})

        addEle({dad:cont,setClass:"btn",text:"⇒ Folks Page",
        textC:"lime",margin:"10px",setFunc:()=>{
            let lnk = "https://melomelo7.github.io/idlepixelinfo/farmrpg/farmpg_folks.html"
            window.open(lnk,"_self")
        }})

        addEle({dad:cont,setClass:"btn",text:"⇒ Truffles Page",
        textC:"lime",margin:"10px",setFunc:()=>{
            let lnk = "https://melomelo7.github.io/idlepixelinfo/farmrpg/farmpg_truffles.html"
            window.open(lnk,"_self")
        }})


        cont = addEle({dad:right,setClass:"contRow",alignItems:"center"})
        txt = 
        `To have it a little more "RPG-like"<br>
         we will call your `+ spanText("lime","Adventure")+
         ` the<br>collection of your `+spanText("lime","Questlines")+`.`
        addEle({dad:cont,text:txt,margin:"10px 0 0 10px"})



        const topFr = addEle({dad:right,setClass:"contRow",marginL:"5px"})

            addEle({dad:topFr,setClass:"btn",width:"fit-content",text:"Manage your "
            +spanText("lime","Adventure"),setFunc:()=>{ main.style.display = "flex" ; setAdventure()}})

            let questingBtn = addEle({dad:topFr,setClass:"btn",width:"fit-content",border:"brown solid 3px",
            text:"Questing",display:"none",setFunc:()=>{setQuesting()}})

        const main = addEle({dad:right,setClass:"contCol",display:"none",
        padding:"5px",width:"fit-content",radius:"10px",marginL:"10px",marginB:"10px"}) //border:"solid 2px blue",


getEmAll()

function clWorkSp(){
    cleanParent(left)
    cleanParent(right2)
    for(let i=0;i<2;i++){addEle({dad:left,setClass:"contCol",margin:"2px",
    setID:"left"+(i+1),alignItems:"center"})}
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
    getID("advQnb").innerHTML = `Questlines in your Adventure : `+ spanText("yellow",player.questLines.length)+
    `/`+ allLines.length+`<br>✅`+spanText("cyan",`(remove text in "Find"<br> box to cancel filtering)`)
    getID("addQl").style.display = player.questLines.length < allLines.length ? "block" : "none"
    getID("remQl").style.display = player.questLines.length > 0 ? "block" : "none"
    questingBtn.style.display = player.questLines.length > 0 ? "block" : "none"
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
            let idx = player.questLines.findIndex(it=>it.label === q)
            if(idx===-1){lst.push(q)}
        })
    } else {
        player.questLines.forEach(q=>{lst.push(q.label)})
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
                let idx = player.questLines.findIndex(it=>it.label === e.srcElement.innerHTML)
                if(idx===-1){
                    player.questLines.push({label:e.srcElement.innerHTML,current:""})
                    updAdvFr()
                    getID("addQl").click()
                }
            }
        } else {
            myFunc = function(e){
                grabQL(e.srcElement.innerHTML).forEach(q=>q.current = false)
                let idx = player.questLines.findIndex(it=>it.label === e.srcElement.innerHTML)
                player.questLines.splice(idx,1)
                updAdvFr()
                getID("remQl").click()
            }
        }
        lines.forEach(l=>{addEle({dad:btmC,setClass:"btn",text:l,setFunc:myFunc,width:"90%"})})//minWidth:"180px"
    }

}





function setQuesting(){
    clWorkSp()
    let cont = undefined

    let currentGood = true
    player.questLines.forEach(q=>{if(q.current===""){currentGood = false}})

    addEle({dad:main,text:"Questlines : " + spanText("lime",player.questLines.length)})
    cont = addEle({dad:main,setClass:"contRow",marginT:"5px"})
        addEle({dad:cont,what:"radio",isInput:true,setVal:"global view",setName:"questCur",
        setFunc:()=>{displayR()}})
        addEle({dad:cont,text:"Global View (1st quests until last quests)",cursor:"pointer",
        setFunc:()=>{document.getElementsByName("questCur")[0].click()}})
    cont = addEle({dad:main,setClass:"contRow",margin:"5px 0"})
        addEle({dad:cont,what:"radio",isInput:true,setVal:"current view 1",setName:"questCur",
        disabled:currentGood === false ? true:false,setFunc:()=>{displayR()}})
        addEle({dad:cont,text:"Current View 1 (current quests only)",cursor:"pointer",
        textC:currentGood ? "white" : "brown",setFunc:()=>{document.getElementsByName("questCur")[1].click()}})
    cont = addEle({dad:main,setClass:"contRow",marginB:"5px"})
        addEle({dad:cont,what:"radio",isInput:true,setVal:"current view to last",setName:"questCur",
        disabled:currentGood === false ? true:false,setFunc:()=>{displayR()}})
        addEle({dad:cont,text:"Current View to last (current quests until last quests)",
        textC:currentGood ? "white" : "brown",cursor:"pointer",setFunc:()=>{
        document.getElementsByName("questCur")[2].click()}})

    cont = addEle({dad:main,setClass:"contRow",margin:"5px 0",})
        addEle({dad:cont,text:"✅To enable options 2 & 3 you<br> need to set "+spanText("lime","Current")+" quests",textC:"cyan"})
        addEle({dad:main,setClass:"btn",text:"Set "+spanText("lime","Current")+" Quests",
        border:"solid 3px brown",width:"fit-content",setFunc:()=>{
            if(curQfr.style.display==="none")
                    {curQfr.style.display = "flex" ; curQsetter()} 
            else {curQfr.style.display = "none"}
        }})
    
    addEle({dad:main,setClass:"contCol",margin:"5px",padding:"5px",border:"solid 3px brown"
    ,display:"none",radius:"10px",setID:"curQfr"})

    addEle({dad:main,setClass:"contCol",setID:"questingDisp",padding:"5px",display:"none"})
}

function curQsetter(){
    let myC = getID("curQfr")
    let src = player.questLines
    cleanParent(myC)

    for(let i=0;i<src.length;i++){
        let subC = addEle({dad:myC,setClass:"contCol",margin:"3px",
        border:"teal 3px solid",radius:"20px",padding:"3px 5px"})


        let cont = addEle({dad:subC,setClass:"contRow",alignItems:"center"})
            addEle({dad:cont,text:src[i].label,marginR:"10px",marginL:"10px",
            minWidth:"160px",textA:"center",setID:"currentL:"+i})

            addEle({dad:cont,text:src[i].current === "" ? "I":src[i].current,textC:"lime",
            minWidth:"50px",textA:"center",setID:"currentQ:"+i})

        cont = addEle({dad:subC,setClass:"contRow",alignItems:"center",marginT:"5px"})

            addEle({dad:cont,text:"◀",fontS:"10px",fontB:"bold",padding:"5px",textC:"brown",
            marginL:"5px",border:"solid 2px brown",radiusTL:"20px",radiusBL:"20px",
            cursor:"pointer",setID:"currentM:"+i,
            setFunc:(e)=>{getID("currentR:"+e.srcElement.id.split(":")[1]).value-- ; upCurR(e)}})

            addEle({dad:cont,text:"▶",fontS:"10px",fontB:"bold",padding:"5px",textC:"brown",
            marginR:"5px",border:"solid 2px brown",radiusTR:"20px",radiusBR:"20px",
            cursor:"pointer",setID:"currentP:"+i,
            setFunc:(e)=>{getID("currentR:"+e.srcElement.id.split(":")[1]).value++ ; upCurR(e)}})

            addEle({dad:cont,what:"range",isInput:true,accentCol:"brown", // ,width:"50px"
            setID:"currentR:"+i,min:1,max:grabQL(src[i].label).length,
            setVal:src[i].current === "" ? 1 : Number(romanToNb(src[i].current))
            ,setFunc:(e)=>{upCurR(e)}})


            
/*
console.log(getID("currentR:"+i).min)
console.log(getID("currentR:"+i).max)
console.log(getID("currentR:"+i).value)
*/

}

    addEle({dad:myC,setClass:"btn",text:"Save Changes",width:"90%",marginT:"10px",border:"solid 3px brown",
    backC:"brown",textC:"ghostwhite",fontB:"bold",setFunc:()=>{
        for(let i=0;i<player.questLines.length;i++){player.questLines[i].current = getID("currentQ:"+i).innerHTML}
        setQuesting()
    }})
}
function upCurR(e){
    console.log("ranging")
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
    cleanParent(left)
    cleanParent(right2)
    let res = ""
    document.getElementsByName("questCur").forEach(it=>{if(it.checked){res = it.value}})

    let sel = []
    let idx = undefined
    player.questLines.forEach(q1=>{
        let lb = q1.label
        let src = grabQL(lb)
        for(let i=0;i<src.length;i++){
            switch(res){
                case "global view" : 
                    idx = sel.findIndex(it=>it.label===q1.label)
                    if(idx ===-1){
                        sel.push({label:q1.label,quests:[src[i]]})
                    } else {
                        sel[idx].quests.push(src[i])
                    }
                case "current view 1" : 
                    if(i===romanToNb(q1.current)-1){
                        sel.push({label:q1.label,quests:[src[i]]})
                    } ; break
                case "current view to last" : 
                    if(i>=romanToNb(q1.current)-1){
                        idx = sel.findIndex(it=>it.label===q1.label)
                        if(idx ===-1){
                            sel.push({label:q1.label,quests:[src[i]]})
                        } else {
                            sel[idx].quests.push(src[i])
                        }
                    } ; break
                }
        }
    })
    extract(sel)
    displayR2(sel)
}

function extract(lst){
    let requirements = []
    let Qreq = []
    let Qrew = []
    lst.forEach(ls=>{
        let obj1 = {questline:ls.label,requirements:[],storageRq:0,storageRw:0}
        let obj2 = {questline:ls.label,requests:[]}
        let obj3 = {questline:ls.label,rewards:[]}
        ls.quests.forEach(qu=>{
            qu.skills.forEach(sk=>{
                let idx = obj1.requirements.findIndex(it=>it.label===sk.skill)
                if(idx<0){
                    obj1.requirements.push({label:sk.skill,values:[]})
                    obj1.requirements[obj1.requirements.length-1].values.push(sk.value)
                } else {
                    let idx2 = obj1.requirements[idx].values.findIndex(it=>it===sk.value)
                    if(idx2===-1){obj1.requirements[idx].values.push(sk.value)}
                }
            })
            qu.requests.forEach(rq=>{
                if(rq.label!=="Silver"){
                    if(rq.quantity > obj1.storageRq){obj1.storageRq = rq.quantity}
                }
                obj2.requests.push(rq)
            })
            qu.rewards.forEach(rw=>{
                if(rw.label!=="Silver"){
                    if(rw.quantity > obj1.storageRw){obj1.storageRw = rw.quantity}
                }
                obj3.rewards.push(rw)
            })
        })
        requirements.push(obj1)
        Qreq.push(obj2)
        Qrew.push(obj3)
    })

    player.questRequirements = requirements
    player.questRequests = Qreq
    player.questRewards = Qrew

//    let plInv=[]
    let plInv = player.inventory

    plInv.forEach(itm=>{
        itm.qt = 0 ; itm.active = false
    })

    Qreq.forEach(ql=>{
        ql.requests.forEach(rq=>{
            let idx = plInv.findIndex(itm=>itm.label === rq.label)
            if(idx===-1){plInv.push({label:rq.label,inventory:0,qt:rq.quantity,active:true})} else
            {plInv[idx].qt+=rq.quantity ; plInv[idx].active = true}
        })
    })
    plInv.sort((a,b)=>b.qt-a.qt)
//    player.inventory = plInv.sort((a,b)=>b.qt-a.qt)

}

function displayR2(){
    let myC = getID("questingDisp")
    cleanParent(myC)

    myC.style.display = "flex"

    let dispOptions = ["Requirements","Requests","Rewards"]

    let cont = addEle({dad:myC,setClass:"contCol",paddingR:"-100px",radius:"20px",
    width:"320px",setID:"dispOpFr",alignItems:"center",}) // border:"solid blue 3px",justifyC:"center",textA:"center",

    cont = addEle({dad:myC,setClass:"contRow",alignItems:"left",marginT:"10px",flWrap:"wrap",
    padding:"5px",radius:"20px",width:"320px",justifyC:"center",setID:"dispResFr",//border:"solid blue 3px"
    }) // 

    dispOptions.forEach(di=>{
        addEle({dad:getID("dispOpFr"),text:spanText("yellow",di+" ⏩"),fontS:"20px",//borderB:"solid red 3px",
                margin:"10px",width:"170px",textA:"right",cursor:"pointer",setFunc:(e)=>{
            switch(e.srcElement.innerHTML.split(" ⏩")[0]){
                case "Requirements" : showRequirements() ; break
                case "Requests" : showRequests(true) ; break
                case "Rewards" : showRequests(false) ; break
                default : console.log("Unknown dispopt") } }}) })
}

function showRequirements(){

    let fr = right2

//    let fr = getID("dispResFr")
    cleanParent(fr)
    cleanParent(left)
    //fr.style.border = "solid blue 3px"

    let maxS1 = []
    let maxS2 = []
    let skills = []
    player.questRequirements.forEach(r=>{
        maxS1.push(r.storageRq)
        maxS2.push(r.storageRw)
        r.requirements.forEach(rq=>{
            let idx = skills.findIndex(it=>it.label===rq.label)
            if(idx===-1){
                skills.push({label:rq.label,reqs:[]})
                rq.values.forEach(v=>{skills[skills.length-1].reqs.push(v)})
            } else {
                rq.values.forEach(v=>{skills[idx].reqs.push(v)})
            }
        })
    })

    let mastC = addEle({dad:fr,setClass:"contCol",margin:"5px",border:"solid 2px lime",
    radius:"20px",padding:"5px 10px",width:"fit-content"})
        let dspTxt = spanText("lime","All Questlines :")+`<br>
        Max storage needed for Requests :`+ maxS1.reduce((a, b) => Math.max(a, b), -Infinity) +`<br>
        Max storage needed for Rewards :`+ maxS2.reduce((a, b) => Math.max(a, b), -Infinity) +`<br>`
        addEle({dad:mastC,text:dspTxt})
        addEle({dad:mastC,border:"yellow dotted 2px",width:"100%",margin:"5px 0"})
        dspTxt = ""
        skills.forEach(sk=>{
            let min = 300 ; sk.reqs.forEach(r=>{if(r<min){min=r}})
            let max = 0 ; sk.reqs.forEach(r=>{if(r>max){max=r}})
            dspTxt += sk.label + " : "
            dspTxt += sk.reqs.length === 1 ? sk.reqs[0] + "<br>" : min + "~" + max + "<br>"
        })
        addEle({dad:mastC,text:dspTxt})

//    addEle({dad:fr,width:"100%",border:"blue dashed 2px",})//marginL:"-20px",marginR:"-20px"

    player.questRequirements.forEach(r=>{
        let subC1 = addEle({dad:fr,setClass:"contCol",margin:"5px",border:"solid 2px teal",
        radius:"20px",padding:"5px 10px",width:"fit-content"}) // 
            dspTxt = spanText("yellow",r.questline)+`<br>
            Max storage needed for Requests :`+ r.storageRq +`<br>
            Max storage needed for Rewards :`+ r.storageRw +`<br>`
            addEle({dad:subC1,text:dspTxt})
            addEle({dad:subC1,border:"lime dotted 2px",width:"100%",margin:"5px 0"})
            dspTxt = ""
            r.requirements.forEach(sk=>{
                dspTxt += sk.label + " : "
                dspTxt += sk.values.length === 1 ? sk.values[0] + "<br>" : sk.values[0] + 
                "~" + sk.values[sk.values.length-1] + "<br>"
            })
            addEle({dad:subC1,text:dspTxt})
    })
}

function showRequests(requests = true){

    let fr = right2

//    let fr = getID("dispResFr")
    cleanParent(fr)
    fr.style.border = ""

    if(requests){
        cleanParent(left)
        addEle({dad:left,text:spanText("yellow","Inventory",20),
        borderB:"teal solid 3px",textA:"center",marginT:"5px"})
        let tb = addEle({dad:left,what:"table",marginL:"5px",margin:"10px 0"})
        let src = player.inventory.filter(itm=>itm.active===true)
        for(let i=0;i<src.length;i++){
        let tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:src[i].label})
        let tc = addEle({dad:tr,what:"td",})
            addEle({dad:tc,what:"input",isInput:true,setVal:src[i].inventory,
            width:"80px",setID:"invQt1:"+i,textA:"center",setFunc:(e)=>{
                let val = e.srcElement.value 
                if(val.includes(".")){val=val.replaceAll(".","")}
                if(val.includes(",")){val=val.replaceAll(",","")}
                txt = e.srcElement.id.split(":")[1]
                if(isNaN(val) || val === "" || Number(val) < 0){
                    getID("invQt2:"+txt).innerHTML = spanText("fuchsia","Number !")
                    getID("invSts:"+txt).innerHTML = "⛔"
                } else {
                    getID("invQt2:"+txt).innerHTML = Number(val).toLocaleString()
                    getID("invSts:"+txt).innerHTML = "✅"
                    src[Number(txt)].inventory = Number(val)
                    getID("reqTtlBtn").click()
                }
            }})
            addEle({dad:tr,what:"td",text:src[i].inventory,setID:"invQt2:"+i,
            minWidth:"80px",textA:"center"})
            addEle({dad:tr,what:"td",text:"❓",setID:"invSts:"+i})
        }
    }


/*
    let myC = addEle({dad:fr,setClass:"contCol",setID:"setInventoryFr",display:"none",
    width:"100%"})
        let subC = addEle({dad:myC,setClass:"contRow",border:"brown solid 3px",
        radius:"20px",padding:"2px",alignItems:"center",width:"96%",justifyC:"center"})

        addEle({dad:subC,text:"Set "+spanText("lime","Inventory"),margin:"10px",textA:"center"})
        addEle({dad:subC,text:"🔽",cursor:"pointer",padding:"1px",border:"lime solid 2px",
        width:"fit-content",height:"fit-content",radius:"7px",setFunc:(e)=>{
            if(e.srcElement.innerHTML === "🔽")
                 {getID("setInventory2Fr").style.display = "flex" ; e.srcElement.innerHTML = "🔼"

//                 cleanParent(getID("setInventory2Fr"))
let subC2 = left

//                 let subC2 = addEle({dad:getID("setInventory2Fr")})
                    let tb = addEle({dad:subC2,what:"table",marginL:"5px"})
                 let src = player.inventory
                 for(let i=0;i<src.length;i++){
                    let tr = addEle({dad:tb,what:"tr"})
                        addEle({dad:tr,what:"td",text:src[i].label})
                    let tc = addEle({dad:tr,what:"td",})
                        addEle({dad:tc,what:"input",isInput:true,setVal:src[i].inventory,
                        width:"80px",setID:"invQt1:"+i,textA:"center",setFunc:(e)=>{
                            let val = e.srcElement.value 
                            if(val.includes(".")){val=val.replaceAll(".","")}
                            if(val.includes(",")){val=val.replaceAll(",","")}
                            txt = e.srcElement.id.split(":")[1]
                            if(isNaN(val) || val === "" || Number(val) < 0){
                                getID("invQt2:"+txt).innerHTML = spanText("fuchsia","Number !")
                                getID("invSts:"+txt).innerHTML = "⛔"
                            } else {
                                getID("invQt2:"+txt).innerHTML = Number(val).toLocaleString()
                                getID("invSts:"+txt).innerHTML = "✅"
                                src[Number(txt)].inventory = Number(val)
                                getID("reqTtlBtn").click()
                            }
                        }})
                        addEle({dad:tr,what:"td",text:src[i].inventory,setID:"invQt2:"+i,
                        minWidth:"80px",textA:"center"})
                        addEle({dad:tr,what:"td",text:"❓",setID:"invSts:"+i})
                 }
                }
            else {getID("setInventory2Fr").style.display = "none" ; e.srcElement.innerHTML = "🔽"}
        }})

        addEle({dad:myC,setClass:"contCol",border:"brown solid 3px",radius:"20px",padding:"5px",
        setID:"setInventory2Fr",display:"none",width:"fit-content"})
*/


    let src = undefined
    if(requests)
         {src = player.questRequests}// ; getID("setInventoryFr").style.display = "flex" }
    else {src = player.questRewards}

    let passLst = undefined

    let cont = addEle({dad:fr,setClass:"contRow",width:"fit-content",margin:"20px 0 0 0"})
        addEle({dad:cont,text:"Total",padding:"5px",border:"blue solid 3px",radiusTL:"20px",
        radiusBL:"20px",width:"100px",textA:"center",cursor:"pointer",setID:"reqTtlBtn",setFunc:()=>{
            passLst = []
            let precompile = []
            src.forEach(q=>{
                if(requests)
                     {q.requests.forEach(r=>{precompile.push(r)}) ; txt = "All Requests" }
                else {q.rewards.forEach(r=>{precompile.push(r)}) ; txt = "All Rewards" }
            })
            let myLst = compileReq(precompile)
            passLst.push({label:txt,lst:myLst})
            showRequests2(passLst,requests)
        }})
        addEle({dad:cont,text:"Details",padding:"5px",border:"blue solid 3px",radiusTR:"20px",
        radiusBR:"20px",width:"100px",textA:"center",cursor:"pointer",setFunc:()=>{
            passLst = []
            src.forEach(q=>{
                let precompile = []
                if(requests)
                     {q.requests.forEach(r=>{precompile.push(r)})}
                else {q.rewards.forEach(r=>{precompile.push(r)})}
                let myLst = compileReq(precompile)
                passLst.push({label:q.questline,lst:myLst})
            })
            showRequests2(passLst,requests)
        }})
    cont = addEle({dad:fr,setClass:"contCol",radius:"20px",padding:"5px",
    marginT:"10px",setID:"showRfr",}) // border:"solid teal 3px"
    getID("reqTtlBtn").click()
}

function compileReq(lst){
    let comp = []
    lst.forEach(it=>{
        let idx = comp.findIndex(c=>c.label===it.label)
        if(idx===-1)
             {comp.push({label:it.label,tot:0,vals:[it.quantity]})} 
        else {comp[idx].vals.push(it.quantity)}
    })
    comp.forEach(c=>{let cpt=0 ; c.vals.forEach(v=>{cpt+=v}) ; c.tot=cpt})
    return comp.sort((a,b)=>b.tot-a.tot)
}

function showRequests2(lst,requests = true){
    let fr = getID("showRfr")
    let ctb = undefined
    let tb = undefined
    let tr = undefined

    cleanParent(fr)
    for(let i=0;i<lst.length;i++){
        addEle({dad:fr,text:lst[i].label+" ("+lst[i].lst.length+")",textC:"yellow",margin:"5px"})
        ctb = addEle({dad:fr})
        tb = addEle({dad:ctb,what:"table"})
        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",border:"teal solid 2px",padding:"3px",text:"Item"})
            txt = requests===true ? "Requests" : "Rewards"
            addEle({dad:tr,what:"td",border:"teal solid 2px",padding:"3px",text:txt})
            txt = requests===true ? "Inventory / Needed" : "Amount"
            addEle({dad:tr,what:"td",border:"teal solid 2px",padding:"3px",text:txt})
        lst[i].lst.forEach(ls=>{
        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",border:"teal solid 2px",padding:"3px",text:ls.label,setID:"req :"+i})
            addEle({dad:tr,what:"td",border:"teal solid 2px",padding:"3px",text:ls.vals.length,textA:"center"})
            if(requests===false){
                txt = ls.tot.toLocaleString()
            } else {
                txt = player.inventory.filter(itm=>itm.label===ls.label)[0].inventory
                let tc = txt>=ls.tot ? "lime" : "red"
                txt = spanText(tc,player.inventory.filter(itm=>itm.label===ls.label)[0].inventory.toLocaleString())
                txt += " / "+ls.tot.toLocaleString()
            }
            addEle({dad:tr,what:"td",border:"teal solid 2px",padding:"3px",text:txt})
        })
    }
}

