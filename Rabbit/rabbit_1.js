const body = document.querySelector("body")

let rates = [
    {lbl:"クロサンド",val:291},
    {lbl:"ロル",val:151},
    {lbl:"チョコクロ",val:97},
]

let savN = "rabbit_Calculator"

let last = "02/11/2025 12:15"

let global = addEle({dad:body,setClass:"contCol",padding:"20px"})

function testNum(num,zeroGood=false){
    let test = true

    if(!isNaN(num)){
        let val = Number(num)
        if(val===0 && !zeroGood){test=false}
    } else {test=false}

    return test
}

function sav(){
    let mySav = JSON.stringify(rates)
    localStorage.setItem(savN,mySav)
}

function checkSav(){
    let mySav = localStorage.getItem(savN)
    if(mySav){
        mySav = JSON.parse(mySav)
        rates = mySav
    }
}

checkSav()

function setPg(){
    cleanParent(global)

    for(let i=1;i<rates.length+1;i++){
        let cont = addEle({dad:global,setClass:"contRow",alignItems:"center",marginT:"10px"})
            let txt = rates[i-1].lbl + " <br>(" + rates[i-1].val + "円)"
            addEle({dad:cont,text:txt,minWidth:"160px",textA:"right",paddingR:"5px",marginR:"10px"})

            addEle({dad:cont,text:"注文"})
            addEle({dad:cont,what:"input",width:"50px",textA:"center",setID:"order:"+i,
            numInput:true,textC:"blue",margin:"0 10px 0 5px",setVal:0,setFunc:calcTot})

            addEle({dad:cont,text:"="})
            addEle({dad:cont,what:"input",width:"50px",textA:"center",setID:"total:"+i,
            textC:"blue",margin:"0 10px 0 5px",setVal:0})
            getID("total:"+i).disabled = true
    }
    let cont = addEle({dad:global,setClass:"contRow",alignItems:"center",marginT:"20px"})
        addEle({dad:cont,setClass:"btn",text:"値段変更",minWidth:"75px",
        setID:"changeBtn",fontS:"15px",setFunc:updRates})
        addEle({dad:cont,text:"合計",textA:"right",minWidth:"188px",paddingR:"10px"})
        addEle({dad:cont,what:"input",width:"50px",textA:"center",setID:"total",
        textC:"blue",margin:"0 10px 0 5px",setVal:0})
        getID("total").disabled = true
    addEle({dad:global,text:spanText("green","Last up "+last),marginT:"20px"})

}

function updRates(){
    let pop = getDialogTopFrame()
    let cont = addEle({dad:pop,setClass:"contCol",width:"fit-content",minHeight:"",
    maxWidth:"360px"})

    let subC = addEle({dad:cont,setClass:"contRow",padding:"0 10px 5px 10px",alignItems:"center",
    justifyC:"space-between",backC:"rgb(45, 88, 128)",border:"teal solid 2px",radius:"8px",})
    
        addEle({dad:subC,text:"値段変更",marginR:"20px"})
    
        addEle({dad:subC,setClass:"btn",text:addEmo("❌","emoji red cross"),
        setID:"closePop",setFunc:()=>{
            pop.remove()
            lockScroll(false)
        }})
    
    for(let i=0;i<rates.length;i++){
        subC = addEle({dad:cont,setClass:"contRow",marginT:"10px"})
            addEle({dad:subC,text:rates[i].lbl,textA:"center",minWidth:"100px"})

            addEle({dad:subC,what:"input",width:"50px",textA:"center",setID:"rateP:"+i,
            textC:"blue",marginL:"10px",setVal:rates[i].val,setFunc:(e)=>{
                let idx = e.srcElement.id.split(":")[1]
                let tgt = getID("testRP:"+idx)
                if(testNum(e.srcElement.value))
                    {tgt.innerHTML = "✅"} else {tgt.innerHTML = "⛔"}
            }})
            addEle({dad:subC,setID:"testRP:"+i,minWidth:"15px",marginL:"5px"})
            if(testNum(getID("rateP:"+i).value))
            {getID("testRP:"+i).innerHTML = "✅"} else {getID("testRP:"+i).innerHTML = "⛔"}
    }
    
    addEle({dad:cont,setClass:"btn",text:"Save all ✅",width:"90%",marginT:"10px",setFunc:()=>{
        let modif = false
        for(let i=0;i<rates.length;i++){
            let val = getID("rateP:"+i).value
            if(testNum(val) && rates[i].val !== Number(val) ){
                rates[i].val = Number(val) ; modif = true
            }
        }
        if(modif){sav() ; setPg() ; getID("closePop").click()}
    }})

    pop.showModal()
    lockScroll()
}


function calcTot(){
    let ttl = 0
    for(let i=1;i<rates.length+1;i++){
        let rate = rates[i-1].val
        let qt = getID("order:"+i).value
        if(testNum(qt)){
            qt = Number(qt)
            getID("total:"+i).value = rate * qt
            ttl+= rate * qt
        } else {
            getID("total:"+i).value = "0"
        }
    }
    getID("total").value = ttl
}


setPg()