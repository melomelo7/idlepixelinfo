
let cont = undefined
let subC1 = undefined
let subC2 = undefined
let txt = undefined
let tb = undefined
let tr = undefined
let tc = undefined

let lastUp = "08/26 23:40<br>"

const body = document.querySelector("body")

const mainFr = addEle({dad:body,setClass:"contRow",height:"100%",width:"100%"}) // ,backC:"green",
    cont = addEle({dad:mainFr,setClass:"contCol"})    
        addEle({dad:cont,text:spanText("lime","Last up : "+lastUp),margin:"20px"})

    subC1 = addEle({dad:cont,setClass:"contRow"})
        addEle({dad:subC1,setClass:"btn",text:"⇒ Go Back",
        textC:"lime",setFunc:()=>{
            let lnk = "https://melomelo7.github.io/idlepixelinfo/farmrpg/farmRpg_Bob1_Farm.html"
            window.open(lnk,"_self")
        }})


        addEle({dad:cont,text:spanText("yellow","Built using input up to 29 May 2024"),margin:"0 20px"})

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