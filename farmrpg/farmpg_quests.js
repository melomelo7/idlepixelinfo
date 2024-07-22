

let questlines = [

{questline:"Unexpected Visitor",
 require:[{label:"Farming",level:78},{label:"Exploring",level:78}],
 lines:[
        {
        label:"Unexpected Visitor I",
        previous:"Unlikely Pair XX",
        next:"Unexpected Visitor II",
        requests:[
            {label:"Iron Cup",quantity:400},
            {label:"Grapes",quantity:400},
            {label:"Watermelon",quantity:400},
            {label:"Apple",quantity:100},
            {label:"Peach",quantity:3},
                ],

        rewards:[
            {label:"Silver",quantity:10000000},
                ],                    
        },

        {
        label:"Unexpected Visitor II",
        previous:"Unexpected Visitor I",
        next:"Unexpected Visitor III",
        requests:[
            {label:"Corn",quantity:100},
                ],

        rewards:[
            {label:"Peach Juice",quantity:2},
            {label:"Orange Juice",quantity:100},
                ],                    
        },

        {
        label:"Unexpected Visitor III",
        previous:"Unexpected Visitor II",
        next:"Unexpected Visitor IV",
        requests:[
            {label:"Steel Wire",quantity:400},
            {label:"Hammer",quantity:400},
            {label:"Small Screw",quantity:50},
            {label:"Magna Quartz",quantity:50},
                ],

        rewards:[
            {label:"Silver",quantity:5000000},
            {label:"Salt",quantity:25},
                ],                    
        },
            
        {
        label:"Unexpected Visitor IV",
        previous:"Unexpected Visitor III",
        next:"Unexpected Visitor V",
        requests:[
            {label:"Emberstone",quantity:400},
            {label:"Moonstone",quantity:75},
            {label:"Sturdy Box",quantity:200},
            {label:"Rope",quantity:400},
            {label:"Scissors",quantity:50},
                ],

        rewards:[
            {label:"Silver",quantity:2000000},
            {label:"Grab Bag 06",quantity:3},
                ],                    
        },
    
        {
        label:"Unexpected Visitor V",
        previous:"Unexpected Visitor IV",
        next:"Unexpected Visitor VI",
        requests:[
            {label:"Magna Quartz",quantity:50},
            {label:"Steel",quantity:400},
            {label:"Cogwheel",quantity:30},
            {label:"Magnifying Glass",quantity:50},
                ],

        rewards:[
            {label:"Silver",quantity:2000000},
                ],                    
        },
                
        



    ]
},




]


function roman(nb){
    switch(nb){
        case 1 : return "I" ; break
        case 2 : return "II" ; break
        case 3 : return "III" ; break
        case 4 : return "IV" ; break
        case 5 : return "V" ; break
        case 6 : return "VI" ; break
        case 7 : return "VII" ; break
        case 8 : return "VIII" ; break
        case 9 : return "IX" ; break
        case 10 : return "X" ; break

        case 11 : return "XI" ; break
        case 12 : return "XII" ; break
        case 13 : return "XIII" ; break
        case 14 : return "XIV" ; break
        case 15 : return "XV" ; break
        case 16 : return "XVI" ; break
        case 17 : return "XVII" ; break
        case 18 : return "XVIII" ; break
        case 19 : return "XIX" ; break
        case 20 : return "XX" ; break

        case 21 : return "XXI" ; break
        case 22 : return "XXII" ; break
        case 23 : return "XXIII" ; break
        case 24 : return "XXIV" ; break
        case 25 : return "XXV" ; break
        case 26 : return "XXVI" ; break
        case 27 : return "XXVII" ; break
        case 28 : return "XXVIII" ; break
        case 29 : return "XXIX" ; break
        case 30 : return "XXX" ; break

        case 31 : return "XXXI" ; break
        case 32 : return "XXXII" ; break
        case 33 : return "XXXIII" ; break
        case 34 : return "XXXIV" ; break
        case 35 : return "XXXV" ; break
        case 36 : return "XXXVI" ; break
        case 37 : return "XXXVII" ; break
        case 38 : return "XXXVIII" ; break
        case 39 : return "XXXIX" ; break
        case 40 : return "XL" ; break

        case 41 : return "XLI" ; break
        case 42 : return "XLII" ; break
        case 43 : return "XLIII" ; break
        case 44 : return "XLIV" ; break
        case 45 : return "XLV" ; break
        case 46 : return "XLVI" ; break
        case 47 : return "XLVII" ; break
        case 48 : return "XLVIII" ; break
        case 49 : return "XLIX" ; break
        case 50 : return "L" ; break

        case 51 : return "LI" ; break
        case 52 : return "LII" ; break
        case 53 : return "LIII" ; break
        case 54 : return "LIV" ; break
        case 55 : return "LV" ; break
        case 56 : return "LVI" ; break
        case 57 : return "LVII" ; break
        case 58 : return "LVIII" ; break
        case 59 : return "LIX" ; break
        case 60 : return "LX" ; break

        case 61 : return "LXI" ; break
        case 62 : return "LXII" ; break
        case 63 : return "LXIII" ; break
        case 64 : return "LXIV" ; break
        case 65 : return "LXV" ; break
        case 66 : return "LXVI" ; break
        case 67 : return "LXVII" ; break
        case 68 : return "LXVIII" ; break
        case 69 : return "LXIX" ; break
        case 70 : return "LXX" ; break

        case 71 : return "LXXI" ; break
        case 72 : return "LXXII" ; break
        case 73 : return "LXXIII" ; break
        case 74 : return "LXXIV" ; break
        case 75 : return "LXXV" ; break
        case 76 : return "LXXVI" ; break
        case 77 : return "LXXVII" ; break
        case 78 : return "LXXVIII" ; break
        case 79 : return "LXXIX" ; break
        case 80 : return "LXXX" ; break

        case 81 : return "LXXXI" ; break
        case 82 : return "LXXXII" ; break
        case 83 : return "LXXXIII" ; break
        case 84 : return "LXXXIV" ; break
        case 85 : return "LXXXV" ; break
        case 86 : return "LXXXVI" ; break
        case 87 : return "LXXXVII" ; break
        case 88 : return "LXXXVIII" ; break
        case 89 : return "LXXXIX" ; break
        case 90 : return "XC" ; break

        case 81 : return "XCI" ; break
        case 82 : return "XCII" ; break
        case 83 : return "XCIII" ; break
        case 84 : return "XCIV" ; break
        case 85 : return "XCV" ; break
        case 86 : return "XCVI" ; break
        case 87 : return "XCVII" ; break
        case 88 : return "XCVIII" ; break
        case 89 : return "XCIX" ; break
        case 90 : return "C" ; break
    }
}


//body.innerHTML = fullq

//let fullqSPT = fullq.split(String.fromCharCode(10))




//console.log(itemL)

let txt = undefined
let qln = undefined
let lines = undefined
let requests = undefined
let rewards = undefined
let itemL = []

const body = document.querySelector("body")
const pageFr = addEle({dad:body,setClass:"contCol",marginT:"5px",marginL:"10px"})
    const infoFr = addEle({dad:pageFr,setClass:"contRow"})
        addEle({dad:infoFr,text:spanText("lime",`With BudyFarm, 
        find questline you want, click on "Questline Name - Questline" & `)})
        addEle({dad:infoFr,text:spanText("yellow",`copy-paste`),marginL:"5px",border:"solid yellow 1px",
        padding:"0 2px",cursor:"pointer",setFunc:()=>{
            copyPaste.style.display = copyPaste.style.display === "none" ? "block" : "none"}})

    txt = spanText("lime",`
    ⇒ Ctrl + A = Select all page content<br>
    ⇒ Ctrl + C = Copy selected content<br>
    ⇒ *inside white text field* Ctrl + V = Paste content`)
    let copyPaste = addEle({dad:pageFr,text:txt,margin:"5px 0 0 10px",display:"none"})

    const loaderFr = addEle({dad:pageFr,setClass:"contRow",marginT:"10px"})
        let rawText = addEle({dad:loaderFr,what:"input",isInput:true,})
        addEle({dad:loaderFr,setClass:"btn",setFunc:rawPage,radius:"1px",text:"⇒ Run Page content"})

    const requestsFr = addEle({dad:pageFr,setClass:"contCol",padding:"10px",border:"blue solid 2px",
    radius:"10px",width:"fit-content",marginT:"10px"})

    const rewardsFr = addEle({dad:pageFr,setClass:"contCol",padding:"10px",border:"blue solid 2px",
    radius:"10px",width:"fit-content",marginT:"10px"})


function rawPage(){
    let raw = rawText.value
    let cpt = undefined
    let tpo = undefined

    raw = raw.split("Buddy's Almanac ")[1]
    qln = raw.split(" Navigated to ")[1] /// ****

    raw = raw.split(" Navigated to ")[0]
    lines = raw.split(" Total Request ")[0]
    lines = lines.split(qln)
    cpt = 0
    for(let i=0;i<lines.length;i++){
        lines[i] = lines[i].replaceAll(" ","")
        if(lines[i].length>0){cpt++}
    }
    lines = cpt /// ****

    requests = raw.split(" Total Request ")[1]
    requests = requests.split(" Total Reward ")[0]
    requests = compItems(requests)

    console.log(requests)

    rewards = raw.split(" Total Reward ")[1]

    rewards = compItems(rewards)

    console.log(rewards)

    addEle({dad:requestsFr,text:"Requests",borderB:"solid 2px yellow",marginB:"5px",textA:"center"})
    for(let i=0;i<requests.length;i++){
        addEle({dad:requestsFr,text:requests[i].label+" : "+requests[i].quantity})
    }

    addEle({dad:rewardsFr,text:"Rewards",borderB:"solid 2px yellow",marginB:"5px",textA:"center"})
    for(let i=0;i<rewards.length;i++){
        addEle({dad:rewardsFr,text:rewards[i].label+" : "+rewards[i].quantity})
    }

}




function compItems(src){
    let itemL = []
    let itmSrc = src.replaceAll(",","").split(" ")

    for(let i=0;i<itmSrc.length;i++){
        if(isNaN(itmSrc[i]) && !isNaN(itmSrc[i+1]) && isNaN(itmSrc[i+2]) ){
            itemL.push({label:itmSrc[i],quantity:Number(itmSrc[i+1])})
            i+=1
        }
        else if(
            isNaN(itmSrc[i]) && isNaN(itmSrc[i+1]) && isNaN(itmSrc[i+2]) &&
            !isNaN(itmSrc[i+3]) && isNaN(itmSrc[i+4]))
            {
            itemL.push({label:itmSrc[i]+" "+itmSrc[i+1]+ " "+itmSrc[i+2],quantity:Number(itmSrc[i+3])})
            i+=3
        }
        else if(
            isNaN(itmSrc[i]) && isNaN(itmSrc[i+1]) && !isNaN(itmSrc[i+2]) && 
            !isNaN(itmSrc[i+3]) && isNaN(itmSrc[i+4])
        )
        {
            itemL.push({label:itmSrc[i]+" "+itmSrc[i+1]+ " "+itmSrc[i+2],quantity:Number(itmSrc[i+3])})
            i+=3
        }

        else {
            itemL.push({label:itmSrc[i]+" "+itmSrc[i+1],quantity:Number(itmSrc[i+2])})
            i+=2
        }
    }

return itemL
}