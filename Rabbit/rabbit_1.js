const body = document.querySelector("body")

let rates = [
    {lbl:"クロサンド",val:291},
    {lbl:"ロル",val:151},
    {lbl:"チョコクロ",val:97},
]

let savN = "rabbit_Calculator"

let global = addEle({dad:body,setClass:"contCol",padding:"20px"})

function testNum(num,zeroGood=false){
    let test = true

    if(!isNaN(num)){
        let val = Number(num)
        if(val===0 && !zeroGood){test=false}
    } else {test=false}

    return test
}

function checkSav(){
    let mySav = localStorage.getItem(savN)
    if(mySav){
        mySav = JSON.parse(mySav)
        rates = mySav
    }
}

checkSav()

for(let i=1;i<rates.length+1;i++){

    let cont = addEle({dad:global,setClass:"contRow",alignItems:"center",marginT:"10px"})
        addEle({dad:cont,text:rates[i-1].lbl,minWidth:"100px",textA:"center"})
        addEle({dad:cont,setClass:"btn",text:"値段変更",minWidth:"75px",setID:"changeBtn:"+i,
        fontS:"15px",setFunc:(e)=>{
            let idx = Number(e.srcElement.id.split(":")[1])
            if(getID("rate:"+idx).disabled){
                e.srcElement.innerHTML = "セーブ"
                getID("rate:"+idx).disabled = false
            } else {
                e.srcElement.innerHTML = "値段変更"
                getID("rate:"+idx).disabled = true
                updRates(e)
            }
            
        }})
        addEle({dad:cont,what:"input",width:"50px",textA:"center",setID:"rate:"+i,
        textC:"blue",margin:"0 10px 0 5px",setVal:rates[i-1].val,setFunc:calcTot})
        getID("rate:"+i).disabled = true

        addEle({dad:cont,text:"注文"})
        addEle({dad:cont,what:"input",width:"50px",textA:"center",setID:"order:"+i,
        textC:"blue",margin:"0 10px 0 5px",setVal:0,setFunc:calcTot})

        addEle({dad:cont,text:"="})
        addEle({dad:cont,what:"input",width:"50px",textA:"center",setID:"total:"+i,
        textC:"blue",margin:"0 10px 0 5px",setVal:0})
        getID("total:"+i).disabled = true


}
let cont = addEle({dad:global,setClass:"contRow",alignItems:"center",marginT:"20px"})
    addEle({dad:cont,text:"合計",textA:"right",minWidth:"376px",paddingR:"10px"})
    addEle({dad:cont,what:"input",width:"50px",textA:"center",setID:"total",
    textC:"blue",margin:"0 10px 0 5px",setVal:0})
    getID("total").disabled = true




function updRates(e){
    let idx = Number(e.srcElement.id.split(":")[1])
    let rate = getID("rate:"+idx).value
    if(testNum(rate)){
        rates[idx-1].val = Number(rate)
        let mySav = JSON.stringify(rates)
        localStorage.setItem(savN,mySav)
    }

}


function calcTot(e){
    let ttl = 0
    for(let i=1;i<rates.length+1;i++){
        let rate = getID("rate:"+i).value
        let qt = getID("order:"+i).value
        if(testNum(rate) && testNum(qt)){
            getID("total:"+i).value = rate * qt
            ttl+= rate * qt
        } else {
            getID("total:"+i).value = "0"
        }
    }
    getID("total").value = ttl
}