
const body = document.querySelector("body")

const frame = addEle({dad:body,setClass:"contCol"})

    const fr1 = addEle({dad:frame,setClass:"contRow"})
        addEle({dad:fr1,setClass:"btn",text:"Full List",setFunc:()=>{
            cleanParent(fr2)
            cleanParent(fr3)
            showFolks()
        }})
        addEle({dad:fr1,setClass:"btn",text:"Target 1 Townfolk",setFunc:()=>{
            cleanParent(fr2)
            cleanParent(fr3)
            addEle({dad:fr2,border:"solid 2px lime",width:"100%",margin:"10px 0"})
            folkGifts.forEach(fo=>{
                addEle({dad:fr2,setClass:"btn",text:fo.label,
                width:"fit-content",setFunc:()=>{showFolks(fo.label)}})
            })

        }})
    
    const fr2 = addEle({dad:frame,setClass:"contRow",flWrap:"wrap"})

    const fr3 = addEle({dad:frame,setClass:"contCol"})



function showFolks(target="all"){

    let myL = undefined
    let tpTxt = undefined
    cleanParent(fr3)

    addEle({dad:fr3,border:"solid 2px lime",width:"100%",margin:"10px 0"})

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