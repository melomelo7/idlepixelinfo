
/*
const truffles = {
    ref:"Period : 29-May to 26-Aug 2024",
    white:{// 58 557 039  ⇔　193 976 860
        low:58557039,
        high:193976860,
        fella:[453,494,532.573], // 41 // 38 // 41
        me:   [46,85,121,42],    // 39 // 36 // 43
    },
    black:{// 158 360 504  ⇔　619 032 766
        low:158360504,
        high:619032766,
        fella:[106,123,139,157], // 17 // 16 // 18
        me:   [11,22,37,53],     // 11 // 15 // 16
    }
}

*/

console.log(truffles)

let cont = undefined
let subC1 = undefined
let subC2 = undefined
let txt = undefined
let tb = undefined
let tr = undefined
let tc = undefined

let lastUp = "08/26 23:40<br>"//+spanText("red","Page In test Mode atm")

const body = document.querySelector("body")

const mainFr = addEle({dad:body,setClass:"contRow",height:"100%",width:"100%"}) // ,backC:"green",
    cont = addEle({dad:mainFr,setClass:"contCol"})    
        addEle({dad:cont,text:spanText("lime","Last up : "+lastUp),margin:"20px"})

    subC1 = addEle({dad:cont,setClass:"contRow"})
        addEle({dad:subC1,setClass:"btn",text:"⇒ Quests Page",
        textC:"lime",margin:"10px",setFunc:()=>{
            let lnk = "https://melomelo7.github.io/idlepixelinfo/farmrpg/farmpg_quests.html"
            window.open(lnk,"_self")
        }})

        addEle({dad:cont,text:spanText("yellow","Built from input ><br>"+truffles.ref),margin:"0 20px"})

    subC1 = addEle({dad:cont,setClass:"contCol",border:"teal solid 2px",radius:"20px",padding:"5px",
        margin:"10px",width:"fit-content"})
        addEle({dad:subC1,text:"White Truffles",borderB:"teal solid 3px",margin:"5px",width:"fit-content"})
        subC2 = addEle({dad:subC1,margin:"5px"})
        tb = addEle({dad:subC2,what:"table"})
        tr = addEle({dad:subC2,what:"tr"})
            addEle({dad:tr,what:"td",padding:"10px",
            text:"Worst Value :<br>"+spanText("brown",truffles.white.low.toLocaleString())})
            addEle({dad:tr,what:"td",padding:"10px",
            text:"Best Value :<br>"+spanText("lime",truffles.white.high.toLocaleString())})
        subC2 = addEle({dad:subC1,setClass:"contCol",margin:"5px"})
        addEle({dad:subC2,text:"Todays Input : "})
        addEle({dad:subC2,what:"input",isInput:true,setVal:0,textA:"center",setFunc:(e)=>{
            let val = e.srcElement.value
            if(val===""){getID("whiteEst").innerHTML = "Estimate : -";return}
            if(val.includes(",")){val=val.replaceAll(",","")}
            if(val.includes(".")){val=val.replaceAll(".","")}
            if(!isNaN(val) && val!==""){
                txt = ((Number(val) / truffles.white.high)*100).toFixed(2)
                getID("whiteEst").innerHTML = "Estimate : " + txt + "% Best Value"
            } else {
                getID("whiteEst").innerHTML = "Estimate : " + spanText("fuchsia","Not a Number")
            }

        }})
        addEle({dad:subC2,text:"Estimate : -",setID:"whiteEst"})

    subC1 = addEle({dad:cont,setClass:"contCol",border:"teal solid 2px",radius:"20px",padding:"5px",
        margin:"10px",width:"fit-content"})
        addEle({dad:subC1,text:"Black Truffles",borderB:"teal solid 3px",margin:"5px",width:"fit-content"})
        subC2 = addEle({dad:subC1,margin:"5px"})
        tb = addEle({dad:subC2,what:"table"})
        tr = addEle({dad:subC2,what:"tr"})
            addEle({dad:tr,what:"td",padding:"10px",
            text:"Worst Value :<br>"+spanText("brown",truffles.black.low.toLocaleString())})
            addEle({dad:tr,what:"td",padding:"10px",
            text:"Best Value :<br>"+spanText("lime",truffles.black.high.toLocaleString())})
        subC2 = addEle({dad:subC1,setClass:"contCol",margin:"5px"})
        addEle({dad:subC2,text:"Todays Input : "})
        addEle({dad:subC2,what:"input",isInput:true,setVal:0,textA:"center",setFunc:(e)=>{
            let val = e.srcElement.value
            if(val===""){getID("blackEst").innerHTML = "Estimate : -";return}
            if(val.includes(",")){val=val.replaceAll(",","")}
            if(val.includes(".")){val=val.replaceAll(".","")}
            if(!isNaN(val) && val!==""){
                txt = ((Number(val) / truffles.black.high)*100).toFixed(2)
                getID("blackEst").innerHTML = "Estimate : " + txt + "% Best Value"
            } else {
                getID("blackEst").innerHTML = "Estimate : " + spanText("fuchsia","Not a Number")
            }

        }})
        addEle({dad:subC2,text:"Estimate : -",setID:"blackEst"})