
const body = document.querySelector("body")

const frame = addEle({dad:body,setClass:"contCol"})

    const fr1 = addEle({dad:frame,setClass:"contRow"})
        addEle({dad:fr1,setClass:"btn",text:"Full List",setFunc:()=>{
            cleanParent(fr2)
            cleanParent(fr3)
            cleanParent(fr4)
            cleanParent(fr5)
            showFolks()
        }})
        addEle({dad:fr1,setClass:"btn",text:"Target 1 Townfolk",setFunc:()=>{
            cleanParent(fr2)
            cleanParent(fr3)
            cleanParent(fr4)
            cleanParent(fr5)
            folkGifts.forEach(fo=>{
                addEle({dad:fr2,setClass:"btn",text:fo.label,
                width:"fit-content",setFunc:()=>{showFolks(fo.label)}})
            })
            addEle({dad:fr2,border:"solid 2px lime",width:"100%",margin:"10px 0"})

        }})
        addEle({dad:fr1,setClass:"btn",text:"Use Related Item",setFunc:()=>{
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

        
        addEle({dad:frame,border:"solid 2px lime",width:"100%",margin:"10px 0"})

    const fr2 = addEle({dad:frame,setClass:"contRow",flWrap:"wrap",maxWidth:"800px"})

    const fr3 = addEle({dad:frame,setClass:"contCol"})

    const fr4 = addEle({dad:frame,setClass:"contRow",flWrap:"wrap",maxWidth:"800px"})

    const fr5 = addEle({dad:frame,setClass:"contCol"})

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




    console.log(myL)


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

    console.log(loved)


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