
const body = document.querySelector("body")


let update = "up 7.25 18:45"

/*
star meerif
vincent
*/

const frame = addEle({dad:body,setClass:"contCol"})

    const fr1 = addEle({dad:frame,setClass:"contRow",alignItems:"center"})
        addEle({dad:fr1,setClass:"btn",text:"Folk Full List<br>Love-Like-Hate",setFunc:()=>{
            cleanParent(fr2)
            cleanParent(fr3)
            cleanParent(fr4)
            cleanParent(fr5)
            showFolks()
        }})
        addEle({dad:fr1,setClass:"btn",text:"Pick 1 Townfolk<br>Full Details",height:"26px",
        padding:"10px", setFunc:()=>{
            cleanParent(fr2)
            cleanParent(fr3)
            cleanParent(fr4)
            cleanParent(fr5)
            folkGifts.forEach(fo=>{
                addEle({dad:fr2,setClass:"btn",text:fo.label,
                width:"fit-content",setFunc:()=>{showFolks(fo.label)}})
            })

        }})
        addEle({dad:fr1,text:"Use Related Item<br>or type item to search",
        border:"blue solid 3px",radius:"20px",padding:"5px",margin:"5px 0 5px 5px",
        cursor:"pointer",textA:"center",radiusTR:"0px",radiusBR:"0px",
        setFunc:()=>{
            cleanParent(fr2)
            cleanParent(fr3)            
            cleanParent(fr4)
            cleanParent(fr5)
            let itms = folksItems()
            itms.forEach(itm=>{
                addEle({dad:fr4,setClass:"btn",text:itm,
                width:"fit-content",setFunc:itemRelation})
            })
        }})
        let pickItm = addEle({dad:fr1,what:"input",isInput:true,
        border:"solid blue 6px",width:"80px",
        setFunc:()=>{
            cleanParent(fr2)
            cleanParent(fr3)            
            cleanParent(fr4)
            cleanParent(fr5)
            let itms = folksItems().filter(itm=>itm.toUpperCase().includes(pickItm.value.toUpperCase()))
            itms.forEach(itm=>{
                addEle({dad:fr4,setClass:"btn",text:itm,
                width:"fit-content",setFunc:itemRelation})
            })
        }})

        addEle({dad:fr1,setClass:"btn",text:"Recipes<br>Full List",setFunc:()=>{
            cleanParent(fr2)
            cleanParent(fr3)            
            cleanParent(fr4)
            cleanParent(fr5)
            dispRecipes()
        }})

        addEle({dad:fr1,setClass:"btn",text:"Friendship<br>Rewards",setFunc:()=>{
            cleanParent(fr2)
            cleanParent(fr3)            
            cleanParent(fr4)
            cleanParent(fr5)
            dispAllRewards()
        }})

        addEle({dad:fr1,marginL:"50px",text:update})

        

    addEle({dad:frame,border:"solid 2px lime",width:"100%",margin:"10px 0"})

    let contWd = 700
    const fr2 = addEle({dad:frame,setClass:"contRow",flWrap:"wrap",maxWidth:contWd+"px"})

    const fr3 = addEle({dad:frame,setClass:"contCol"})

    const fr5 = addEle({dad:frame,setClass:"contCol"})

    const fr4 = addEle({dad:frame,setClass:"contRow",flWrap:"wrap",maxWidth:contWd+"px"})


function showFolks(target="all"){

    let myL = undefined
    let tpTxt = undefined
    cleanParent(fr3)


    if(target==="all"){
        myL = folkGifts
    } else {
        myL = folkGifts.filter(itm => itm.label === target)
    }

    let tbFr = addEle({dad:fr3,margin:"5px"})
    let tb = addEle({dad:tbFr,what:"table"})
        let tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:"Folk",padding:"5px",border:"2px solid brown"})
            addEle({dad:tr,what:"td",text:"Love",padding:"5px",border:"2px solid brown"})
            addEle({dad:tr,what:"td",text:"Like",padding:"5px",border:"2px solid brown"})
            addEle({dad:tr,what:"td",text:"Hate",padding:"5px",border:"2px solid brown"})
    myL.forEach(it=>{
        
        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:it.label,padding:"5px",border:"2px solid brown"})
            tpTxt = "" ; it.love.forEach(li=>{tpTxt+="- "+li+"<br>"})
            addEle({dad:tr,what:"td",text:tpTxt,padding:"5px",border:"2px solid brown"})
            tpTxt = "" ; it.like.forEach(li=>{tpTxt+="- "+li+"<br>"})
            addEle({dad:tr,what:"td",text:tpTxt,padding:"5px",border:"2px solid brown"})
            tpTxt = "" ; it.hate.forEach(li=>{tpTxt+="- "+li+"<br>"})
            addEle({dad:tr,what:"td",text:tpTxt,padding:"5px",border:"2px solid brown"})
    })

    if(myL.length===1){
        let flk = myL[0].label
        let src = recipes.sort(a=>{a.folk})
        let src2 = src.filter(it=>it.folk===flk)

        if(src2.length===0){
            addEle({dad:fr3,text:"** No Recipes **",margin:"5px",textC:"yellow"})
        } else {
            addEle({dad:fr3,text:"Recipe(s) :",margin:"5px",textC:"yellow"})
            let tbFr = addEle({dad:fr3,margin:"5px"})
            let tb = addEle({dad:tbFr,what:"table"})
                let tr = addEle({dad:tb,what:"tr"})
                    addEle({dad:tr,what:"td",text:"Level",padding:"5px",border:"2px solid brown"})
                    addEle({dad:tr,what:"td",text:"Recipe",padding:"5px",border:"2px solid brown"})
            src2.forEach(it=>{
                tr = addEle({dad:tb,what:"tr"})
                    addEle({dad:tr,what:"td",text:it.level,padding:"5px",border:"2px solid brown",textA:"center"})
                    addEle({dad:tr,what:"td",text:it.recipe,padding:"5px",border:"2px solid brown"})
            })
        }

        addEle({dad:fr3,text:"Friendship Rewards :",margin:"5px",textC:"yellow"})
        src = friendshipRewards.filter(it=>it.label===flk)[0]

        let tbFr = addEle({dad:fr3,margin:"5px"})
        let tb = addEle({dad:tbFr,what:"table"})
            let tr = addEle({dad:tb,what:"tr"})
                addEle({dad:tr,what:"td",text:"Level",padding:"5px",border:"2px solid brown"})
                addEle({dad:tr,what:"td",text:"Rewards",padding:"5px",border:"2px solid brown"})
        src.rewards.forEach(it=>{
            tr = addEle({dad:tb,what:"tr"})
                addEle({dad:tr,what:"td",text:it.lv,padding:"5px",border:"2px solid brown",textA:"center"})
                addEle({dad:tr,what:"td",text:it.details,padding:"5px",border:"2px solid brown"})
        })


    }

}

function folksItems(){
    let idx = undefined
    let items = []
    folkGifts.forEach(fo=>{
        fo.love.forEach(it=>{
            idx = items.findIndex(itm=> itm === it)
            if(idx === -1){items.push(it)}
        })
        fo.like.forEach(it=>{
            idx = items.findIndex(itm=> itm === it)
            if(idx === -1){items.push(it)}
        })
        fo.hate.forEach(it=>{
            idx = items.findIndex(itm=> itm === it)
            if(idx === -1){items.push(it)}
        })
    })
    return items.sort()
}

function itemRelation(e){
    cleanParent(fr5)
    let loved = []
    let liked = []
    let hated = []
    let idx = undefined
    let tpTxt = undefined
    folkGifts.forEach(fo=>{
        idx = fo.love.findIndex(itm=>itm===e.srcElement.innerHTML)
        if(idx>-1){loved.push(fo.label)}
        idx = fo.like.findIndex(itm=>itm===e.srcElement.innerHTML)
        if(idx>-1){liked.push(fo.label)}
        idx = fo.hate.findIndex(itm=>itm===e.srcElement.innerHTML)
        if(idx>-1){hated.push(fo.label)}
    })

    let tbFr = addEle({dad:fr5,margin:"5px"})
    let tb = addEle({dad:tbFr,what:"table"})
        let tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:"Item",padding:"5px",border:"2px solid brown"})
            addEle({dad:tr,what:"td",text:"Love",padding:"5px",border:"2px solid brown"})
            addEle({dad:tr,what:"td",text:"Like",padding:"5px",border:"2px solid brown"})
            addEle({dad:tr,what:"td",text:"Hate",padding:"5px",border:"2px solid brown"})

        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",text:e.srcElement.innerHTML,padding:"5px",border:"2px solid brown"})
            tpTxt = "" ; loved.forEach(it=>{tpTxt+="- "+it+"<br>"})
            addEle({dad:tr,what:"td",text:tpTxt,padding:"5px",border:"2px solid brown"})
            tpTxt = "" ; liked.forEach(it=>{tpTxt+="- "+it+"<br>"})
            addEle({dad:tr,what:"td",text:tpTxt,padding:"5px",border:"2px solid brown"})
            tpTxt = "" ; hated.forEach(it=>{tpTxt+="- "+it+"<br>"})
            addEle({dad:tr,what:"td",text:tpTxt,padding:"5px",border:"2px solid brown"})

}

function dispRecipes(){

    let src = recipes.sort(a=>{a.folk})

    let rcpFr = addEle({dad:fr2})
    let tb = addEle({dad:rcpFr,what:"table"})
    let tr = addEle({dad:tb,what:"tr"})
        addEle({dad:tr,what:"td",text:"Folk",padding:"5px",border:"2px solid brown"})
        addEle({dad:tr,what:"td",text:"Recipe",padding:"5px",border:"2px solid brown"})
        addEle({dad:tr,what:"td",text:"Friendship Lv",padding:"5px",border:"2px solid brown",width:"100px"})
    src.forEach(it=>{
        tr = addEle({dad:tb,what:"tr"})
        addEle({dad:tr,what:"td",text:it.folk,padding:"5px",border:"2px solid brown"})
        addEle({dad:tr,what:"td",text:it.recipe,padding:"5px",border:"2px solid brown",width:"150px"})
        addEle({dad:tr,what:"td",text:it.level,padding:"5px",border:"2px solid brown",textA:"center"})
        if(it.special){
            addEle({dad:tr,what:"td",text:it.special,padding:"5px",border:"2px solid brown"})
        }
    })    
}

function dispAllRewards (val){

    cleanParent(fr3)

    if(val===undefined){
        let subC = addEle({dad:fr2,setClass:"contRow"})
        addEle({dad:subC,text:"Search Item in Rewards:",margin:"0 10px"})
        addEle({dad:subC,what:"input",isInput:true,setID:"findReward",
        setFunc:(e)=>{dispAllRewards(e.srcElement.value.toUpperCase())}})
    }

    let lab = []
    let topSrc = []
    let mySrc = undefined
    let tbFr = undefined
    let tb = undefined
    let tr = undefined

    friendshipRewards.forEach(fr=>{lab.push(fr.label)})
    lab.sort()
    lab.forEach(lb=>topSrc.push(friendshipRewards.filter(fr=>fr.label===lb)[0]))

    if(val===undefined){
        mySrc = topSrc
    } else {
        mySrc = []
        topSrc.forEach(fr=>{
            fr.rewards.forEach(rw=>{
                console.log(rw)
                if(rw.details.toUpperCase().includes(val)){
                    let idx = mySrc.findIndex(it=>it.label===fr.label)
                    if(idx===-1){mySrc.push(fr)}
                }
            })

        })
    }

    mySrc.forEach(fr=>{
        let subC = addEle({dad:fr3,setClass:"contCol",padding:"5px",margin:"5px",border:"teal solid 3px",width:"fit-content"})
        addEle({dad:subC,text:fr.label,marginL:"10px"})
        tbFr = addEle({dad:subC,margin:"5px"})
        tb = addEle({dad:tbFr,what:"table"})
        tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",border:"brown 3px solid",text:"Level",minWidth:"80px",textA:"center"})
            addEle({dad:tr,what:"td",border:"brown 3px solid",text:"Reward(s)"})
        fr.rewards.forEach(rw=>{
            tr = addEle({dad:tb,what:"tr"})
            addEle({dad:tr,what:"td",border:"brown 3px solid",text:rw.lv,textA:"center"})
            addEle({dad:tr,what:"td",border:"brown 3px solid",text:rw.details,minWidth:"350px",maxWidth:"350px"})
        })
    })

}

