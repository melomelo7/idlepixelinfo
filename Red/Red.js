const body = document.querySelector("body")
const loadT = 4000 

last = `
14/08/2025 21:07
`

addEle({dad:body,text:localStorage,margin:"10px"})

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
        {lbl:"Energy",disp:true,val:10,cap:10},
        {lbl:"HP",disp:false,val:10,cap:10},
        {lbl:"Strength",disp:false,val:2},
        {lbl:"Protection",disp:false,val:1},
        {lbl:"Speed",disp:false,val:300},
        {lbl:"Accuracy",disp:false,val:0.5}
    ],
    skills:[{lbl:"Hunting",lvl:0,next:10,inc:1}],
    actions:["-- Actions --","Hunt"],
    items:[],
}

let animals = [
    {lbl:"Rat"   ,hp:5,accuracy:0.5,prot:1,exp:2,spd:400,atk:[{lbl:"Infectious* Bite",dmg:"1~3"}]},
    {lbl:"Rabbit",hp:8,accuracy:0.6,prot:1,exp:3,spd:200,atk:[{lbl:"Bite",dmg:"2"},{lbl:"Kick",dmg:"2~3"}],}
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
        case player.actions[1] : setHunt() ; break
    }
}

function setHunt(){

    let win1 = getDialogTopFrame()
    
    let cont = addEle({dad:win1,setClass:"contCol",width:"fit-content",minHeight:"400px",textC:"rgb(187, 181, 181)"})

        let subC = addEle({dad:cont,setClass:"contRow",marginT:"10px 0",justifyC:"space-between",
            alignItems:"center",minWidth:"200px"})
            addEle({dad:subC,text:"Hunting ...",borderB:"2px solid #5A0000",fontS:"22px",marginL:"20px",textC:"rgb(187, 181, 181)"})

            addEle({dad:subC,setClass:"btn",text:addEmo("❌","emoji red cross"),setFunc:()=>{
                win1.remove()
                lockScroll(false)
                getID("actions").selectedIndex = 0
            }})

        subC = addEle({dad:cont,setClass:"contCol",setID:"huntBtnCont"})
            addEle({dad:subC,text:"Hunt small animals (1 Energy)",setClass:"btn",margin:"20px",fontS:"18px",
            setFunc:()=>{startHunt("Small",1)}})

        subC = addEle({dad:cont,setClass:"contCol",setID:"fightCont",minHeight:"30px",justifyC:"center"})

    win1.showModal()
    lockScroll()

    console.log("hunting")
}

function startHunt(size,energyCost){

    let srcE = player.stats.filter(x=>x.lbl==="Energy")[0]
    if(srcE.val >= energyCost){
        srcE.val -= energyCost
        dispStats()

        let workC = getID("fightCont")
        cleanParent(workC)
        
        addEle({dad:workC,marginL:"20px",setID:"huntInfo"})

        let cpt = 0
        let txt = ""
        let id = setInterval(() => {
            cpt++
            txt+=" ."
            getID("huntInfo").innerHTML = txt
//            workC.innerHTML = txt
            if(cpt>=5){clearInterval(id)}
        }, 400)

        setTimeout(()=>{
//            workC.innerHTML = ""
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
                        nbr:Number(getID("enemyNb").innerHTML)}]
                        startFight(getID("fightCont"),enemies)
                    }})
    
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