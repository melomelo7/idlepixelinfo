const body = document.querySelector("body")
const loadT = 4000 

let last = `
14/08/2025 21:07
`

addEle({dad:body,text:last,margin:"10px"})

addEle({dad:body,setClass:"contRow",setID:"topLine"})
    const statsCont = addEle({dad:getID("topLine"),setClass:"contCol",margin:"10px"})
    const actionsCont = addEle({dad:getID("topLine"),margin:"0 10px"})
        addEle({dad:actionsCont,what:"select",setClass:"select",setID:"actions",
        display:"none",marginT:"10px",setFunc:(e)=>{selectAction(e)}})

 addEle({dad:getID("topLine"),setClass:"btn",text:"del Sav",setFunc:removePlayer,
 setID:"delsav",display:"none",height:"fit-content",margin:"10px 0 0 40px"})


let player = {
    start:true,
    stats:[
        {lbl:"Level",disp:true,val:0,next:10},
        {lbl:"Exp",disp:true,val:0},
        {lbl:"Energy",disp:true,val:10,cap:10,pace:1000,inc:1,timer:undefined},
        {lbl:"HP",disp:false,val:10,cap:10},
        {lbl:"Strength",disp:false,val:2},
        {lbl:"Protection",disp:false,val:1},
        {lbl:"Speed",disp:false,val:300},
        {lbl:"Accuracy",disp:false,val:0.5}
    ],
    skills:[{lbl:"Hunting",lvl:0,next:10,inc:1}],
    actions:["-- Actions --","Rest","Hunt"],
    items:[],
    infected:false,
}

let enemyPool = [
    {lbl:"Rat"   ,hp:5,prot:1,exp:2,spd:350,
    atk:[{lbl:"Infectious* Bite",dmg:"1~3",accuracy:0.5}],
    drops:[],
    },
    
    {lbl:"Rabbit",hp:8,prot:1,exp:3,spd:250,
    atk:[{lbl:"Bite",dmg:"2",accuracy:0.5},{lbl:"Kick",dmg:"2~3",accuracy:0.6}],
    drops:[],
    },
]

let locations = [
    {lbl:"Forest",animals:[
        {lbl:"Small",types:["Rat","Rabbit"]}
    ]},
]

function getStat(skillNm){
    return player.stats.filter(s=>s.lbl===skillNm)[0]
}

function getSkill(skillNm){
    return player.skills.filter(s=>s.lbl===skillNm)[0]
}

function getAtkStr(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// save load delete player save /////////////////////////
const savKey = "shadow7_Red"
function savPlayer(){localStorage.setItem(savKey,JSON.stringify(player))}
function loadPlayer(){let mySave = localStorage.getItem(savKey)
                      if(mySave){console.log("found"); player = JSON.parse(mySave)}}
function removePlayer(){localStorage.removeItem(savKey)}
/////////////////////////////////////////////////////////

function setBack(){

    if (player.start){
        let txt = `
        Since that strange beast bit you in the woods last month, 
        you have been sick, so sick ... everyone got scared to come close to you, 
        and you are now alone in that big old castle ... 
        alone and hungry, as no food is remaining any more.<br>
        You should try hunt animals in the woods now...
        `
        let pop = simpleMsg(txt,()=>{player.start = false;savPlayer(),setPg(false)})
        pop.style.visibility = "hidden"
        
    } else {setPg()}


      setTimeout(() => {
        body.style.backgroundImage = "url('imgs/castle3.jpg')";
        body.style.backgroundSize = 'cover';
        body.style.backgroundPosition = 'center';
        if(getID("msgPop")){getID("msgPop").style.visibility = "visible"}
      }, loadT);

}

function setPg(wait=true){
    if(wait){setTimeout(()=>{dispStats() ; fillActions()}, loadT)}
    else    {dispStats() ; fillActions()}
}

function dispStats(){
    let workC = statsCont
    cleanParent(workC)
    let txt = ""
    player.stats.forEach(s=>{
        if(s.disp){
            let inC = addEle({dad:workC,setClass:"contRow"})
            addEle({dad:inC,text:s.lbl,minWidth:"60px",textA:"right",paddingL:"5px"})
            txt = s.hasOwnProperty("cap") ? s.val+"/"+s.cap : s.val
            addEle({dad:inC,text:": "+txt,marginL:"5px"})
        }
    })

    getID("delsav").style.display="block"
}

function fillActions(){
    let tgt = getID("actions")
    cleanParent(tgt)
    player.actions.forEach(a=>{addEle({dad:tgt,what:"option",text:a})})
    
    tgt.style.display = "block"
}

function selectAction(e){
    switch(e.srcElement.value){
        case player.actions[1] : setRest() ; break
        case player.actions[2] : setHunt() ; break
    }
}

function setRest(){

    let win1 = getDialogTopFrame()
    
    let cont = addEle({dad:win1,setClass:"contCol",width:"fit-content",minHeight:"400px",
    textC:"rgb(187, 181, 181)",fontS:"18px"})

        let subC = addEle({dad:cont,setClass:"contRow",marginT:"10px 0",justifyC:"space-between",
            alignItems:"center",minWidth:"200px"})
            addEle({dad:subC,text:"Resting ...",borderB:"2px solid #5A0000",fontS:"22px",marginL:"20px"})

            addEle({dad:subC,setClass:"btn",text:addEmo("❌","emoji red cross"),setFunc:()=>{
                win1.remove()
                lockScroll(false)
                getID("actions").selectedIndex = 0
            }})

        subC = addEle({dad:cont,setClass:"contRow",margin:"20px 0 0 20px"})
            addEle({dad:subC,text:"Energy :",fontS:"18px",marginR:"5px"})
            let stat = getStat("Energy")
            addEle({dad:subC,text:stat.val+"/"+stat.cap,fontS:"18px",marginR:"5px",textC:"teal",setID:"restEnergy"})

        addEle({dad:cont,text:"Lay down and close your eyes ...",setClass:"btn",fontS:"18px",minWidth:250+"px",
        margin:"40px 20px",setID:"restBtn",setFunc:(e)=>{
            let btn = e.srcElement
            let txt1 = "Lay down and close your eyes ..."
            let txt2 = "Stop"
            let stat = getStat("Energy")
        
            if(btn.innerHTML === txt1){
                btn.innerHTML = txt2
                runRest()
            } else {
                clearTimeout(stat.timer)
                btn.innerHTML = txt1
                getID("restStatus").innerHTML = ""
            }
        }})

        addEle({dad:cont,setID:"restStatus",fontS:"18px",textC:"teal",margin:"20px",textA:"center"})

    win1.showModal()
    lockScroll()

    console.log("Resting")

}

function runRest(){
    let btn = getID("restBtn")
    let stat = getStat("Energy")

    let pace = stat.pace
    let dt = new Date()
    let pairT = dt.getSeconds() % 2 === 0 ? ".." : "...."
    getID("restStatus").innerHTML = "Resting "+pairT
    if(stat.val >= stat.cap){
        getID("restStatus").innerHTML = "You are fully Rested."
        btn.innerHTML = "Lay down and close your eyes ..."
    } else {
        stat.timer = setTimeout(()=>{
            stat.val = (stat.val + stat.inc) > stat.cap ? stat.cap : stat.val + stat.inc
            getID("restEnergy").innerHTML = stat.val+"/"+stat.cap
            runRest()
        }, pace);
    }

/*
    if(stat.val >= stat.cap){
        getID("restStatus").innerHTML = "You are fully Rested."
        btn.innerHTML = txt1
    } else {
        if(btn.innerHTML === txt2){
            stat.timer = setTimeout(()=>{
                stat.val = (stat.val + stat.inc) > stat.cap ? stat.cap : stat.val + stat.inc
                getID("restEnergy").innerHTML = stat.val+"/"+stat.cap
                runRest()
            }, pace);
        } else {
            clearTimeout(stat.timer)
            btn.innerHTML === txt1
        }
    }
*/




}

function setHunt(){

    let win1 = getDialogTopFrame()
    
    let cont = addEle({dad:win1,setClass:"contCol",width:"fit-content",minHeight:"400px",textC:"rgb(187, 181, 181)",fontS:"18px"})

        let subC = addEle({dad:cont,setClass:"contRow",marginT:"10px 0",justifyC:"space-between",
            alignItems:"center",minWidth:"200px"})
            addEle({dad:subC,text:"Hunting ...",borderB:"2px solid #5A0000",fontS:"22px",marginL:"20px"})

            addEle({dad:subC,setClass:"btn",text:addEmo("❌","emoji red cross"),setFunc:()=>{
                win1.remove()
                lockScroll(false)
                getID("actions").selectedIndex = 0
            }})

        subC = addEle({dad:cont,setClass:"contRow",margin:"0 20px"})
            addEle({dad:subC,text:"Energy :",fontS:"18px",marginR:"5px"})
            let stat = getStat("Energy")
            addEle({dad:subC,text:stat.val+"/"+stat.cap,fontS:"18px",marginR:"5px",textC:"teal",setID:"huntEnergy"})

        subC = addEle({dad:cont,setClass:"contCol",setID:"huntBtnCont",margin:"10px 20px"})
            addEle({dad:subC,text:"Hunt small animals (1 Energy)",setClass:"btn",fontS:"18px",
            setID:"huntSmall",setFunc:(e)=>{startHunt(e.srcElement,"Small",1)}})

        subC = addEle({dad:cont,setClass:"contCol",setID:"fightCont",minHeight:"30px",justifyC:"center"})

    win1.showModal()
    lockScroll()

    console.log("hunting")
}

function startHunt(btn,size,energyCost){
    if(btn.disabled){console.log("out") ; return}

    let srcE = getStat("Energy")
    if(srcE.val >= energyCost){
        srcE.val -= energyCost
        getID("huntEnergy").innerHTML = srcE.val+"/"+srcE.cap
        dispStats()

        let workC = getID("fightCont")
        cleanParent(workC)
        
        addEle({dad:workC,marginL:"20px",setID:"huntInfo"})

        let cpt = 0
        let txt = ""
        let id = setInterval(() => {
            btn.disabled = true
            cpt++
            txt+=" ."
            getID("huntInfo").innerHTML = txt
            if(cpt>=5){clearInterval(id)}
        }, 400)

        setTimeout(()=>{
            getID("huntInfo").innerHTML = ""
            let skill = getSkill("Hunting")
            let enemy = getEnemy(skill,"Forest",size)
    
            let subC = addEle({dad:workC,setClass:"contCol"})
                let inC = addEle({dad:subC,setClass:"contRow"})
                    addEle({dad:inC,text:"Found",margin:"0 5px 0 20px"})
                    addEle({dad:inC,text:enemy.nbr,setID:"enemyNb"})
                    addEle({dad:inC,text:"x",marginR:"5px"})
                    addEle({dad:inC,text:enemy.lbl,setID:"enemyNm"})
                    addEle({dad:subC,setClass:"btn",text:"Attack !",marginL:"20px",setFunc:()=>{
                        getID("huntBtnCont").style.visibility = "hidden"
                        let enemies = [{lbl:getID("enemyNm").innerHTML,
                        nbr:3}]//Number(getID("enemyNb").innerHTML)
                        startFight(getID("fightCont"),enemies)
                    }})

            btn.disabled = false
        },2500)
    


    } else {
        simpleMsg("not enough Energy")
        let idx = player.actions.findIndex(x=>x==="Rest")
        if(idx===-1){player.actions.push("Rest") ; fillActions()}
    }

    /*

    */
}

function getEnemy(skill,where,type){
    console.log(skill)
    console.log(where)
    console.log(type)
    let enemy = {lbl:undefined,nbr:undefined}
    let area = locations.filter(x=>x.lbl=where)[0]
    let animals = area.animals.filter(x=>x.lbl===type)[0].types
    enemy.lbl = animals[Math.floor(Math.random() * animals.length)]
    enemy.nbr = Math.ceil(Math.random() * (skill.lvl+1))
    return enemy
}


loadPlayer()
setBack()



console.log(player)

/*
let endv = 5
for(let i=0;i<endv;i++){
    let thisV1 = testHit(getStat("Accuracy").val)
    let thisV2 = testHit(animals[0].accuracy)
    let thisV3 = testHit(animals[1].accuracy)
    let txt = "player>"+thisV1.hit+"<"+thisV1.rnd.toFixed(2)
    txt += " -- Rat>"+thisV2.hit+"<"+thisV2.rnd.toFixed(2)
    txt += " -- Rabbit>"+thisV3.hit+"<"+thisV3.rnd.toFixed(2)
    console.log(txt)
}
*/

