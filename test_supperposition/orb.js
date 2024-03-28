const body = document.querySelector("body")
const path1 = "./imgs/"
const path2 = ".jpg"
const spanQuestion = `<span style="background-color:green;color:yellow;margin-left:5px;
font-size:12px;border: solid 1px red;padding:0 4px;border-radius:5px;">?</span>`

let player = {
    start:true,
    resources:[
        {label:"Essence",locked:false,quantity:0,cap:1,auto:0,rank:0,click:0.05,},
        {label:"Crystals",locked:true,quantity:0,cap:undefined,auto:0,costs:5},
        {label:"Mana",locked:true,quantity:0,baseCap:0,cap:0,auto:0},
        {label:"Knowledge",locked:true,quantity:0,cap:undefined,auto:0.2,
        costs:[{label:"Essence",quantity:0.5}],payout:[{label:"Knowledge",quantity:0.2}],},
        {label:"Lyxes",locked:true,quantity:0,cap:undefined,lyx:[]}
    ],
    tabs:[
        {label:"Grimoire",backC:"purple",visible:false,
        seal:{locked:true,costs:[{label:"Mana",quantity:1}],text:
        "The Grimoire is protected by a magic seal<br>Break the seal will cost 1 Mana."},
        pages:[
            {idx:1,visible:true,locked:true,
             unlock:[{label:"Essence",quantity:20},{label:"Knowledge",quantity:10}],
             content:[
                {idx:1,title:"Lyxes - chapter 1",text:`Name given to souls trapped inside/when
                 Magic Crystals<br>are created by magic items or users.<br>it is possible
                 to break open a crystal and free the Lyx inside.<br>Doing so will create
                 a bond with the person who freed the Lyx.<br>( free a Lyx will not reduce
                 the cost of M.C. )`,textID:"lyxCh1",
                 btnTxt:"Free a Lyx, Cost 1 Crystal",cost:[{label:"Crystals",quantity:1}]},
             ],
            },
        ],
        },


        {label:"Lyxes",backC:"green",visible:false},
    ],
    loop:{id:undefined,queue:[],},
    focusID:undefined,
}

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
        let info = addEle({dad:content,setClass:"info",})
//            let info = addEle({dad:infoFr,marginL:"10px",overflow:"auto",marginT:"5px"})
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
            maxHeight:"100px",overflow:"auto",minWidth:"100px"})

        let subTabs = addEle({dad:content,setClass:"contCol"})

player.tabs.forEach((tab)=>{
    addEle({dad:tabsBtnFr,setClass:"clickBtn",text:tab.label,backC:tab.backC,
    display: tab.visible===true ? "block" : "none" ,minWidth:"100px",setFunc:(e)=>{
        info.innerHTML = ""
        for(let i=0;i<subTabs.children.length;i++){
            let obj = subTabs.children[i]
            if(obj.id!=="tab"+e.srcElement.innerHTML)
                {obj.style.display = "none"}
            else
            {obj.style.display = obj.style.display === "none" ? "flex" : "none"
             if(obj.style.display === "flex"){setTab(e.srcElement.innerHTML)} } } }})
    addEle({dad:subTabs,setClass:"mainTab",text:tab.label,setID:"tab"+tab.label,display:"none"})
})


if (player.start){
    player.start = false
    let srcObj = getPlObj("Essence")
    srcObj.rank = 0 ; srcObj.click = 0.05 ; srcObj.quantity = 0 ; srcObj.cap = 1

//    getPlObj("Mana").quantity = 1
//    getPlObj("Knowledge").quantity = 10

    info.innerHTML = `You found an old crystal ball in the Attic.<br>
    when you grab it, you hear a whispering : "I have been expecting you.<br>
    Rub me and say the words [lok nir]" ... Curious you decide to try ...`
}



function setTab(lbl){
    let myTab = getID("tab"+lbl)
    cleanParent(myTab)
    switch(lbl){
        case "Grimoire" : setTabGrimoire("Grimoire") ; break
        case "Lyxes" : setTabLyxes("Lyxes") ; break
        default : console.log("set tab : Missing code for "+lbl)
    }
    
    
}

