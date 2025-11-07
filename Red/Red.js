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

addEle({dad:actionsCont,setClass:"btn",text:"del",setFunc:()=>{
    removePlayer()
} })

let player_back = {
    start:true,
    stats:[
        {lbl:"Level",disp:true,val:0,next:10},
        {lbl:"Exp",disp:true,val:0},
        {lbl:"Energy",disp:true,val:0,cap:10,pace:1000,inc:0.1,timer:undefined},
        {lbl:"HP",disp:false,val:10,cap:10},
        {lbl:"Strength",disp:false,val:2},
        {lbl:"Protection",disp:false,val:1},
        {lbl:"Speed",disp:false,val:300},
        {lbl:"Accuracy",disp:false,val:0.5}
    ],
    skills:[
        {lbl:"Farming",lvl:0,next:10,current:0,patches:1},
        {lbl:"Hunting",lvl:0,next:10,current:0},
    ],
    actions:["-- Actions --","Rest","Farm","Hunt","Logs","Del Sav"],
    items:[],
    infected:false,
    money:{silver:2,gold:0},
    logs:[],
    logsCap:10,
}

let player = player_back

let enemyPool = [
    {lbl:"Rat"   ,hp:5,prot:1,exp:2,
    atk:[
        {lbl:"Infectious* Bite",dmg:"1~3",accuracy:0.5,spd:350},
        {lbl:"Scratch",dmg:"1~2",accuracy:0.5,spd:350}
        ],
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

function skillLevelling(lvl){
    let cap = 10
    for(let i=0;i<lvl;i++){cap = cap*10}
    console.log("lvl:"+lvl+" next :"+cap)
}

function clock(time){
    let hr = Math.floor(time/3600)
    let mn = Math.floor((time % 3600)/60)
    let sc = time % 60

    hr = hr<10 ? "0"+hr : hr
    mn = mn<10 ? "0"+mn : mn
    sc = sc<10 ? "0"+sc : sc

    let res = hr+":"+mn+":"+sc

    return res
}

// save load delete player save /////////////////////////
const savKey = "shadow7_Red"
function savPlayer(){localStorage.setItem(savKey,JSON.stringify(player))}
function loadPlayer(){let mySave = localStorage.getItem(savKey)
                      if(mySave){console.log("found"); player = JSON.parse(mySave) ; player.logs = []}}
function removePlayer(){localStorage.removeItem(savKey)}
/////////////////////////////////////////////////////////

function setBack(){

    if (player.start){
        let txt = `
        Since that strange beast bit you in the woods last month, 
        you have been sick, so sick ... everyone got scared to come close to you, 
        and you are now alone in that big old castle ... 
        alone and hungry, as no food is remaining any more.<br>
        You should rest and maybe farm a few vegetables for now ...
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

//    getID("delsav").style.display="block"
}

function fillActions(){
    let tgt = getID("actions")
    cleanParent(tgt)
    player.actions.forEach(a=>{addEle({dad:tgt,what:"option",text:a})})
    
    tgt.style.display = "block"
}

function selectAction(e){
    switch(e.srcElement.value){
        case "Rest"    : setRest() ; break
        case "Farm"    : setFarming() ; break
        case "Hunt"    : setHunt() ; break
        case "Logs"    : setLogs() ; break
        case "Del Sav" : removeSav() ; break
    }
}





loadPlayer()
setBack()

console.log(player)

