
function setTabLyxes(keyWord){
    let myTab = getID("tab"+keyWord)
    cleanParent(myTab)
    let main = getPlObj(keyWord,1)
    let srcObj = getPlObj("Lyxes")

    addEle({dad:myTab,setClass:"contCol",setID:"lyxesTop",margin:"10px 0"})

    addEle({dad:myTab,setClass:"contRow",setID:"lyxesFork",})
        addEle({dad:getID("lyxesFork"),setClass:"contCol",setID:"lyxesForkA",padding:"0 5px",border:"red solid 1px"})
        addEle({dad:getID("lyxesFork"),setClass:"contCol",setID:"lyxesForkB",padding:"0 5px",margin:"0 10px",border:"red solid 1px"})
        addEle({dad:getID("lyxesFork"),setClass:"contCol",setID:"lyxesForkC",padding:"0 5px",border:"red solid 1px"})

//    txt = "Total : " + srcObj.quantity +" -- "
//    txt+= "Employed : " + srcObj.lyx.filter(lx=>lx.job!==undefined).length + " -- "
//    txt+= "Free : " + (srcObj.quantity - srcObj.lyx.filter(lx=>lx.job!==undefined).length)
    addEle({dad:getID("lyxesTop"),text:spit({text:"lyxesSumup"}),setID:"lyxesSumup"})
    addEle({dad:getID("lyxesTop"),setID:"lyxesInfo"})

    addEle({dad:getID("lyxesForkA"),text:"Skills/Jobs :",marginB:"10px",textA:"center"})
    
    
    txt = "" ; srcObj.skills.forEach(sk => { 
        txt+= sk + "<br>"
    })
    addEle({dad:getID("lyxesForkA"),text:txt})

    addEle({dad:getID("lyxesForkB"),text:"Lyx List :",marginB:"10px",textA:"center"})
    srcObj.lyx.forEach(lx =>{ addEle({dad:getID("lyxesForkB"),setClass:"clickBtn",
    text:lx.name,minWidth:"100px",setFunc:(e)=>{setLyxDetails(e.srcElement.innerHTML)}}) })

    addEle({dad:getID("lyxesForkC"),text:"Lyx Details :",marginB:"10px",textA:"center"})

//    console.log(main)
 //   console.log(srcObj)
}



function setLyxDetails(lyxNm){
    let myCont = getID("lyxesForkC")
    cleanParent(myCont)
    let srcObj = getPlObj("Lyxes").lyx.filter(lx=>lx.name===lyxNm)[0]
    addEle({dad:myCont,text:"Lyx Details :",marginB:"10px",textA:"center"})

    addEle({dad:myCont,text:"Current Name : "+srcObj.name,setID:"lyxOldName"})
    let subCont = addEle({dad:myCont,setClass:"contRow",alignItems:"center"})
        addEle({dad:subCont,setClass:"clickBtn",text:"Change Name",setFunc:()=>{
            if(checkDupLyx(getID("inputLyxName").value.toLowerCase())===true){
                getID("lyxesInfo").innerHTML = "The new name cannot be the name of another Lyx"
            } else {
                txt = getID("lyxOldName").innerHTML.split(" : ")[1] +
                " will now change name for " + getID("inputLyxName").value
                
                getID("lyxesInfo").innerHTML = txt
                info.innerHTML = txt
                
                getPlObj("Lyxes").lyx.filter(lx=>lx.name === getID("lyxOldName")
                .innerHTML.split(" : ")[1])[0].name = getID("inputLyxName").value
                setTabLyxes("Lyxes")
            }   
             }})
        addEle({dad:subCont,what:"input",isInput:true,width:"100px",marginR:"10px",
        setVal:srcObj.name,setID:"inputLyxName",height:"12px"})


    //    console.log(e.srcElement.innerHTML)
}