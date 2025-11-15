// acorn pie
// 8 ovens : molasses : 48 brown sugar : 32

const body = document.querySelector("body")

// 7 molasses + 5 brown sugar

let pie = {molasses:7,sugar:5}
let inventory = 19590
let ovensC = 9

let last = "15/11/2025"

let global = addEle({dad:body,setClass:"contCol",padding:"20px"})

addEle({dad:global,text:spanText("lime","Last up : "+last)})

let subC = addEle({dad:global,setClass:"contCol",padding:"10px",
border:"teal 2px solid",radius:"20px",width:"fit-content"})

    let cont = addEle({dad:subC,setClass:"contRow"})
        addEle({dad:cont,text:"acorn pie, molasses : "})
        addEle({dad:cont,what:"input",isInput:true,width:"40px",setVal:pie.molasses,
        textA:"center",margin:"0 5px",setID:"pie1",setFunc:recipeCalc})
        addEle({dad:cont,text:"brown sugar : "})
        addEle({dad:cont,what:"input",isInput:true,width:"40px",setVal:pie.sugar,
        textA:"center",margin:"0 5px",setID:"pie2",setFunc:recipeCalc})

    cont = addEle({dad:subC,setClass:"contRow",margin:"10px 0"})
        addEle({dad:cont,text:"ovens : "})
        addEle({dad:cont,what:"input",isInput:true,width:"40px",setVal:ovensC,
        textA:"center",margin:"0 5px",setID:"ovens",setFunc:recipeCalc})
        addEle({dad:cont,setID:"recipeTtl"})

subC = addEle({dad:global,setClass:"contCol",padding:"10px",
border:"teal 2px solid",radius:"20px",width:"fit-content",marginT:"10px"})

    cont = addEle({dad:subC,setClass:"contRow"})
        addEle({dad:cont,text:"Nets >> Inventory Max :"})
        addEle({dad:cont,what:"input",isInput:true,width:"60px",setVal:inventory,
        textA:"center",margin:"0 5px",setID:"invo",setFunc:netsCalc})

    cont = addEle({dad:subC,setClass:"contRow"})
        addEle({dad:cont,text:"Twine :",minWidth:"150px",textA:"right",paddingR:"10px"})
        addEle({dad:cont,what:"input",isInput:true,width:"60px",setVal:inventory,
        textA:"center",margin:"0 5px",setID:"twine",setFunc:netsCalc})

    cont = addEle({dad:subC,setClass:"contRow"})
        addEle({dad:cont,text:"Rope :",minWidth:"150px",textA:"right",paddingR:"10px"})
        addEle({dad:cont,what:"input",isInput:true,width:"60px",setVal:inventory,
        textA:"center",margin:"0 5px",setID:"rope",setFunc:netsCalc})

    cont = addEle({dad:subC,setClass:"contRow"})
        addEle({dad:cont,text:"Nets :",minWidth:"150px",textA:"right",paddingR:"10px"})
        addEle({dad:cont,what:"input",isInput:true,width:"60px",setVal:inventory,
        textA:"center",margin:"0 5px",setID:"nets",setFunc:netsCalc})

    cont = addEle({dad:subC,setClass:"contRow"})
        addEle({dad:cont,text:"Nets total :",minWidth:"150px",textA:"right",paddingR:"10px"})
        addEle({dad:cont,what:"input",isInput:true,width:"60px",textC:"blue",
        textA:"center",margin:"0 5px",setID:"netsT1",disabled:true})

    cont = addEle({dad:subC,setClass:"contRow"})
        addEle({dad:cont,text:"owned Rope :",minWidth:"150px",textA:"right",paddingR:"10px"})
        addEle({dad:cont,what:"input",isInput:true,width:"60px",textC:"blue",
        textA:"center",margin:"0 5px",setID:"ropeO",disabled:true})

    cont = addEle({dad:subC,setClass:"contRow"})
        addEle({dad:cont,text:"needed Rope :",minWidth:"150px",textA:"right",paddingR:"10px"})
        addEle({dad:cont,what:"input",isInput:true,width:"60px",textC:"blue",
        textA:"center",margin:"0 5px",setID:"ropeN",disabled:true})

    cont = addEle({dad:subC,setClass:"contRow"})
        addEle({dad:cont,text:"Nets total :",minWidth:"150px",textA:"right",paddingR:"10px"})
        addEle({dad:cont,what:"input",isInput:true,width:"60px",textC:"blue",
        textA:"center",margin:"0 5px",setID:"netsT2",disabled:true})

function testNum(num,zeroGood=false){
    let test = true

    if(!isNaN(num)){
        let val = Number(num)
        if(val===0 && !zeroGood){test=false}
    } else {test=false}

    return test
}
    

function recipeCalc(){
    let mol = Number(getID("pie1").value)
    let sug = Number(getID("pie2").value)
    let ove = Number(getID("ovens").value)

    let txt = "molasses : "
    txt += Math.floor(((mol*ove)*.9))-2
    txt += " brown sugar : "
    txt += ((sug*ove)*.9)-4

    getID("recipeTtl").innerHTML = txt
}


function netsCalc(){
    let inv = Number(getID("invo").value)
    let twi = Number(getID("twine").value)
    let rop = Number(getID("rope").value)
    let net = Number(getID("nets").value)

    let ropeNeed = net*2
    let ropeHave = rop + Math.floor(Math.floor(twi/3)*1.45)

    getID("netsT1").value = Math.floor(net*1.45)+inv
    getID("ropeO").value = ropeHave
    getID("ropeN").value = ropeNeed
    getID("netsT2").value = ropeHave>= ropeNeed ? 
    Math.floor(net*1.45)+inv : Math.floor(ropeHave/2)+inv
}

recipeCalc()
netsCalc()