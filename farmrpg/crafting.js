
const body = document.querySelector("body")

let fork = addEle({dad:body,setClass:"contRow"})
    let listings = addEle({dad:fork,width:"fit-content"})
    let right = addEle({dad:fork,width:"fit-content",margin:"10px"})


function fillLst(src){
    cleanParent(listings)

    src.forEach(cr=>{
        let fr = addEle({dad:listings,setClass:"contCol",border:"lime solid 2px",
        radius:"10px",padding:"10px",margin:"10px 20px"})
            addEle({dad:fr,text:cr.label})
            addEle({dad:fr,width:"200px",border:"white solid 1px",})
            cr.components.forEach(co=>{
                addEle({dad:fr,text:co.quantity.toLocaleString() +"x "+co.label})
            })
            addEle({dad:fr,width:"200px",border:"white solid 1px",})
            addEle({dad:fr,text:"Silver : "+cr.silver.toLocaleString()})
            addEle({dad:fr,text:"Exp : "+cr.exp.toLocaleString()})
            addEle({dad:fr,text:"Lv : "+cr.lvl})
            txt = "SEll : "
            txt = cr.sell === undefined ? spanText("red","Cannot Sell") :  
            spanText("yellow","Sell : "+cr.sell.toLocaleString())
            addEle({dad:fr,text:txt,textC:"yellow"})
    })
}

fillLst(crafts)


let rightFr = addEle({dad:right,setClass:"contCol",border:"lime solid 2px",
radius:"10px",padding:"10px"})
    let cont = addEle({dad:rightFr,setClass:"contRow"})
        addEle({dad:cont,what:"radio",isInput:"true",setName:"craftLvOpt",
        setVal:"Up to Lvl : ",setFunc: (e)=>{
            getID("craftLvDisp").innerHTML = spanText("lime",e.srcElement.value) ; updLst()
        }  })

        addEle({dad:cont,what:"radio",isInput:"true",setName:"craftLvOpt",
        setVal:"Only for Lvl : ",setFunc: (e)=>{
            getID("craftLvDisp").innerHTML = spanText("lime",e.srcElement.value) ; updLst()
        }  })
        addEle({dad:cont,setID:"craftLvDisp",minWidth:"100px",textA:"center"})
        addEle({dad:cont,what:"input",isInput:"true",setVal:1,setID:"craftLv",setFunc:updLst,width:"20px"})

    cont = addEle({dad:rightFr,setClass:"contRow",margin:"10px 0"})
        addEle({dad:cont,text:"Filter :"})
        addEle({dad:cont,what:"radio",isInput:"true",setName:"filter1",
        setVal:"None",setFunc:updLst})
        addEle({dad:cont,what:"radio",isInput:"true",setName:"filter1",
        setVal:"Exp",setFunc:updLst})
        addEle({dad:cont,what:"radio",isInput:"true",setName:"filter1",
        setVal:"Sell",setFunc:updLst})
        addEle({dad:cont,setID:"filter1Lb",marginL:"10px"})

    document.getElementsByName("craftLvOpt")[0].click()
    document.getElementsByName("filter1")[0].click()


function updLst(){
    let grp = undefined
    let sel = undefined
    let myL = undefined
    let val = Number(getID("craftLv").value)
    if(!isNaN(val) && val>0 && val<100 ){
        grp = document.getElementsByName("craftLvOpt")
        for(let i=0;i<grp.length;i++){if(grp[i].checked){sel=grp[i].value}}

        if(sel==="Up to Lvl : ")
             {myL = crafts.filter(cr=>cr.lvl<=val)}
        else {myL = crafts.filter(cr=>cr.lvl===val)}    
        
        grp = document.getElementsByName("filter1")
        for(let i=0;i<grp.length;i++){if(grp[i].checked){sel=grp[i].value}}
        getID("filter1Lb").innerHTML = spanText("lime",sel) 

        if(sel==="Exp"){myL.sort((a,b)=>b.exp-a.exp)}
        else if(sel==="Sell") {myL.sort((a,b)=>b.sell-a.sell)}    

        fillLst(myL)
    }
}



let pett = petsText.split("\n")
let cod = "let petArr=["
for(let i=0;i<pett.length;i++){
    let src = pett[i].split(String.fromCharCode(9))    

//    console.log(src[i])
  //  console.log(src[i].charCodeAt())

}


console.log(src)
let src2 = src.split(String.fromCharCode(9))
src2.forEach(srcc=>{
    console.log(srcc.split(" "))
})






























/*
let fishing = 
`Drum:12:100:Small Pond-Farm Pond-Forest Pond-Lake Tempest
Yellow Perch:12:100:Small Pond-Farm Pond-Forest Pond-Lake Tempest
Largemouth Bass:14:200:Farm Pond-Forest Pond-Lake Tempest
Trout:35:350:Farm Pond-Lake Tempest-Crystal River
Carp:75:400:Farm Pond
Gold Trout:350:350:Farm Pond
Catfish:75:475:Farm Pond
Fish Bones:2:25:Small Pond-Farm Pond-Forest Pond-Lake Tempest
Flier:250:500:Farm Pond-Lake Tempest
Runestone 02:2000:2000:Farm Pond
Gold Drum:120:120:Small Pond
Cogwheel:1750:1750:Small Pond
Small Key:0:1750:Small Pond
Runestone 08:8000:8000:Small Pond*******
Bluegill:75:475:Forest Pond
Goldgill:750:525:Forest Pond
Grab Bag 01:0:1:Forest Pond
Water Lily:2500:2500:Forest Pond
Square Key:0:1750:Forest Pond
Crappie:15:250:Lake Tempest
Globber:1000:1000:Lake Tempest
Gold Flier:2500:500:Lake Tempest
Small Prawn:20:250:Small Island
Green Chromis:25:350:Small Island
Blue Crab:25:350:Small Island
Mackerel:500:500:Small Island-Vast Ocean
Blue Shell:75:450:Small Island
Blue Sea Bass:300:600:Small Island-Vast Ocean
Jellyfish:400:400:Small Island-Vast Ocean
Mussel:400:400:Small Island
Gold Sea Bass:3000:600:Small Island
MIAB:2000:2000:Small Island-Emerald Beach-Vast Ocean
Seaweed:2500:2500:Small Island
Bone Fish:50:400:Crystal River
Sunfish:50:400:Crystal River
Blue Catfish:75:475:Crystal River
Gold Catfish:750:550:Crystal River
Old Boot:10:100:Crystal River
Glass Bottle:10:150:Crystal River
Runestone 12:12000:12000:Crystal River
`

console.log(fishing.split("\n"))

let fish = fishing.split("\n")
let fishcod = "let fishArr = ["
for(let i=0;i<fish.length-1;i++){
    console.log(fish[i])
    let src = fish[i].split(":")
    fishcod += `{label:"`+src[0]+`   }`

}

*/