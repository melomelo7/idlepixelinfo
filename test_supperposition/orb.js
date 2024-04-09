const body = document.querySelector("body")
const path1 = "./imgs/"
const path2 = ".jpg"
const spanQuestion = `<span style="background-color:green;color:yellow;margin-left:5px;
font-size:12px;border: solid 1px red;padding:0 4px;border-radius:5px;">?</span>`
let timeFreeze = false

const looperSpeed = 1000

let player = {
    start:true,
    resources:[
        {label:"Essence",locked:false,quantity:0,cap:1,auto:0,rank:0,click:0.05,},
        {label:"Crystals",locked:true,quantity:0,cap:undefined,auto:0,costs:5},
        {label:"Mana",locked:true,quantity:0,baseCap:0,cap:0,auto:0},
        {label:"Knowledge",locked:true,quantity:0,cap:undefined,auto:0.2,
        costs:[{label:"Essence",quantity:0.5}],payout:[{label:"Knowledge",quantity:0.2}],},
        {label:"Lyxes",locked:true,quantity:0,cap:undefined,lyx:[],skills:[],skillCap:2,
        jobCosts:[{label:"Food",quantity:0.2},{label:"Water",quantity:0.2},]},
        {label:"Hut",locked:true,quantity:0,cap:undefined},
        {label:"Food",locked:true,quantity:0,cap:undefined},
        {label:"Water",locked:true,quantity:0,cap:undefined},
        {label:"Raw Wood",locked:true,quantity:0,cap:undefined},
        {label:"Raw Stone",locked:true,quantity:0,cap:undefined},

    ],
    activeTab:undefined,
    tabs:[
        {label:"Grimoire",backC:"purple",textC:"",visible:false,
        seal:{locked:true,costs:[{label:"Mana",quantity:1}],text:
        "The Grimoire is protected by a magic seal<br>Break the seal will cost 1 Mana."},
        pages:[
            {idx:1,visible:true,locked:true,
             unlock:[{label:"Essence",quantity:20},{label:"Knowledge",quantity:10}],
             content:[
                {idx:1,visible:true,refPg:1,
                 title:"Lyxes - chapter 1",toggleID:"lyxCh1",toggledTextID:"lyxCh1A",
                 toggledText:`Name given to souls trapped inside/when
                 Magic Crystals<br>are created by magic items or users.<br>it is possible
                 to break open a crystal and free the Lyx inside.<br>Doing so will create
                 a bond with the person who freed the Lyx.<br>( free a Lyx will not reduce
                 the cost of M.C. )`,altID:"",altText:"",altBought:false,
                 unlock:["unlock tab|Lyxes"], btnTxt:"Free a Lyx",
                 costs:[{label:"Crystals",quantity:1}]},

                {idx:2,visible:true,refPg:1,
                 title:"Lyxes - chapter 2",toggleID:"",toggledTextID:"",
                 toggledText:"",altID:"lyxCh2B",altText:`
                 Once a Lyx is freed from its Crystal, it can be used<br>
                 to gather various resources. A happy Lyx will need a<br>
                 basic housing and consume Food + Water. Any of these 3<br>
                 elements missing will damage the Lyx during work.<br>
                 When all 3 elements are available, the damages will heal.`,
                 altBought:false,unlock:["page content|page:1|content:3",
                 "page content|page:1|content:4","page content|page:1|content:5"],
                 btnTxt:"Understand Lyx needs",
                 costs:[{label:"Essence",quantity:5},{label:"Knowledge",quantity:5}],},

                {idx:3,visible:false,refPg:1,
                 title:"Lyxes - chapter 2 : Food",toggleID:"",toggledTextID:"",
                 toggledText:"",altID:"lyxCh2B",altText:`
                 New Job/Skill unlocked for Lyxes : Farmer`,
                 altBought:false,unlock:["new job|Farmer"],
                 btnTxt:"Food Problem",
                 costs:[{label:"Essence",quantity:2},{label:"Knowledge",quantity:2}],},

                {idx:4,visible:false,refPg:1,
                title:"Lyxes - chapter 2 : Water",toggleID:"",toggledTextID:"",
                toggledText:"",altID:"lyxCh2B",altText:`
                New Job/Skill unlocked for Lyxes : Water Carrier`,
                altBought:false,unlock:["new job|Water Carrier"],
                btnTxt:"Water Problem",
                costs:[{label:"Essence",quantity:2},{label:"Knowledge",quantity:2}],},

                {idx:5,visible:false,refPg:1,
                title:"Lyxes - chapter 2 : Housing",toggleID:"",toggledTextID:"",
                toggledText:"",altID:"lyxCh2B",altText:`
                A Basic house will require both Wood + Stone<br>
                You have unlocked access to the Crafting tab`,
                altBought:false,unlock:["unlock tab|Crafting","unlock blueprint|hut",
                "page content|page:1|content:6","page content|page:1|content:7"],
                btnTxt:"Housing Problem",
                costs:[{label:"Essence",quantity:5},{label:"Knowledge",quantity:5}],},

                {idx:6,visible:false,refPg:1,
                title:"Lyxes - chapter 2 : Wood",toggleID:"",toggledTextID:"",
                toggledText:"",altID:"lyxCh2B",altText:`
                New Job/Skill unlocked for Lyxes : Lumberjack`,
                altBought:false,unlock:["new job|Lumberjack"],
                btnTxt:"Wood Problem",
                costs:[{label:"Essence",quantity:2},{label:"Knowledge",quantity:2}],},
                
                {idx:7,visible:false,refPg:1,
                title:"Lyxes - chapter 2 : Stone",toggleID:"",toggledTextID:"",
                toggledText:"",altID:"lyxCh2B",altText:`
                New Job/Skill unlocked for Lyxes : Miner`,
                altBought:false,unlock:["new job|Miner"],
                btnTxt:"Stone Problem",
                costs:[{label:"Essence",quantity:2},{label:"Knowledge",quantity:2}],},

             ],
            },
        ],
        },


        {label:"Lyxes",backC:"coral",textC:"black",visible:false,skillTip:true},
        {label:"Crafting",backC:"brown",textC:"black",visible:true},
    ],
    blueprints:[],
    crafters:[
        {label:"Crafter 1",locked:false,crafting:"",unlock:[]},
        {label:"Crafter 2",locked:true,crafting:"",unlock:[{label:"Raw Wood",quantity:100},{label:"Raw Stone",quantity:100}]},
        {label:"Crafter 3",locked:true,crafting:"",unlock:[{label:"Raw Wood",quantity:1000},{label:"Raw Stone",quantity:1000}]},
        {label:"Crafter 4",locked:true,crafting:"",unlock:[{label:"Raw Wood",quantity:10000},{label:"Raw Stone",quantity:10000}]},
    ],
    loop:{id:undefined,queue:[],},
    focusID:undefined,
    focusTxt:undefined,
}

skills = [
    {label:"Farmer",priority:1,tip:"Farmer : Collect Food",payout:[{label:"Food",quantity:0.5}]},
    {label:"Water Carrier",priority:1,tip:"Water Carrier : Collect Water",payout:[{label:"Water",quantity:0.5}]},
    {label:"Lumberjack",priority:2,tip:"Lumberjack : Collect Raw Wood",payout:[{label:"Raw Wood",quantity:0.5}]},
    {label:"Miner",priority:2,tip:"Miner : Collect Raw Stone",payout:[{label:"Raw Stone",quantity:0.5}]},
]

blueprints = [
    {label:"Hut",time:120,locked:true,unlock:[{label:"Knowledge",quantity:20}],unlockTime:30,
    craftCost:[{label:"Raw Wood",quantity:10},{label:"Raw Stone",quantity:10}]}
]

let orbSpells =[
    {label:"lok zo",text:"lok zo (Expand) Essence Cost : "},
    {label :"kar gla",text:"kar gla (Buy M.C.) Essence Cost : "},
]


let txt = ""
let val = undefined
let orbLock = undefined
let mainInfo = ""

let thisCont = addEle({dad:body,setClass:"contRow",width:"100%"})
    let statsfr = addEle({dad:thisCont,setClass:"leftMenu"})
        let stats = addEle({dad:statsfr,setClass:"contCol",margin:"10px 0 0 5px"})
    let content = addEle({dad:thisCont,setClass:"contCol",width:"100%"})
        let info = addEle({dad:content,setClass:"info",overflow:"scroll",})
//            let info = addEle({dad:infoFr,marginL:"10px",overflow:"scroll",marginT:"5px"})
        let orbTab = addEle({dad:content,setClass:"contRow",alignItems:"center"})

            let orbFr = addEle({dad:orbTab,setClass:"contCol",minWidth:"120px"})
                let rad = 50
                val = 0
                let orb = buildOrb({parent:orbFr,radius:rad,text:"",filled:val,clickFunc:clickOrb})
                    let orbT = getID("orbText")
                    let orbF = getID("orbFluid")

                let orbWord = addEle({dad:orbFr,what:"input",isInput:true,setFunc:sayWord,
                backC:"grey", paddingL:"5px",height:"20px",width:"100px",
                border:"blue solid 3px",radius:"5px",marginL:"5px",display:"none"})

            let orbSpellsFr = addEle({dad:orbTab,setClass:"contCol",marginL:"10px",
            maxHeight:"100px",overflow:"auto",minWidth:"300px",})
                orbSpells.forEach((spell)=>{
                    addEle({dad:orbSpellsFr,setClass:"clickBtn",text: spell.text,
                    setFunc:orbBtns,display:"none",setName:"orbBtnGrp"})
                })

            let tabsBtnFr = addEle({dad:orbTab,setClass:"contCol",marginL:"10px",
            maxHeight:"100px",overflow:"auto",paddingR:"10px",})

        let subTabs = addEle({dad:content,setClass:"contCol"})

player.tabs.forEach((tab)=>{
    addEle({dad:tabsBtnFr,setClass:"clickBtn",text:tab.label,backC:tab.backC,
    textC:tab.textC === "" ? "#C0AE77" : tab.textC,
    display: tab.visible===true ? "block" : "none" ,minWidth:"100px",setFunc:(e)=>{

        if(timeFreeze){console.log("freeze");return}

        info.innerHTML = ""
        for(let i=0;i<subTabs.children.length;i++){
            let obj = subTabs.children[i]
            if(obj.id!=="tab"+e.srcElement.innerHTML)
                {obj.style.display = "none"}
            else
            {obj.style.display = obj.style.display === "none" ? "flex" : "none"
             if(obj.style.display === "flex" && timeFreeze===false){setTab(e.srcElement.innerHTML)} } } }})
    addEle({dad:subTabs,setClass:"mainTab",text:tab.label,setID:"tab"+tab.label,display:"none"})
})


if (player.start){
    player.start = false
    let srcObj = getPlObj("Essence")
    srcObj.rank = 0 ; srcObj.click = 100 ; srcObj.quantity = 0 ; srcObj.cap = 1

    getPlObj("Mana").quantity = 1
    getPlObj("Knowledge").quantity = 100

    getPlObj("Raw Wood").quantity = 100
    getPlObj("Raw Stone").quantity = 100
    player.blueprints.push("Hut")

    info.innerHTML = `You found an old crystal ball in the Attic.<br>
    when you grab it, you hear a whispering : "I have been expecting you.<br>
    Rub me and say the words [lok nir]" ... Curious you decide to try ...`
}


function setTab(lbl){
    let myTab = getID("tab"+lbl)
    cleanParent(myTab)
    player.focusID = undefined
    player.activeTab = lbl
    switch(lbl){
        case "Grimoire" : setTabGrimoire("Grimoire") ; break
        case "Lyxes" : setTabLyxes("Lyxes") ; break
        case "Crafting" : setTabCrafting("Crafting") ; break
        default : console.log("set tab : Missing code for "+lbl)
    }
    
    
}


function dispSpanCost(costs=[],asLine=true){
    let msg = "*empty*"
    if(costs.length > 0){
        let part = asLine === true ? ", " : "<br>" 
        msg = "Cost :" ; msg+= asLine === true ? " " : "<br>"
        costs.forEach(cst=>{let thisCol = checkCost(cst.label,cst.quantity,false) === true ? "lime" : "red"
            msg+= spanText(thisCol,cst.quantity.toFixed(2)+" "+cst.label) +part})
        msg = msg.slice(0,msg.length-part.length)
    } return msg }

function spanText(spanColor,spanTxt){return `<span style="color:`+spanColor+`;">`+spanTxt+"</span>"}


