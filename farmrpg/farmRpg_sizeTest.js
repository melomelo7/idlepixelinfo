
const body = document.querySelector("body")

let cont = addEle({dad:body,setClass:"contCol",margin:"20px"})

    let stamp = spanText("lime","02/07 >> 20:18")
    addEle({dad:cont,text:stamp,marginR:"20px"})

let subC = addEle({dad:cont,setClass:"contRow",margin:"20px"})
        addEle({dad:subC,text:"width :",marginR:"20px"})
        addEle({dad:subC,what:"input",isInput:true,setID:"size1",textA:"center",width:"100px",setVal:100})

    subC = addEle({dad:cont,setClass:"contRow",margin:"20px"})
        addEle({dad:subC,text:"height :",marginR:"20px"})
        addEle({dad:subC,what:"input",isInput:true,setID:"size2",textA:"center",width:"100px",setVal:100})

    subC = addEle({dad:cont,setClass:"contRow",margin:"20px"})
        addEle({dad:subC,text:"font1 :",marginR:"20px"})
        addEle({dad:subC,what:"input",isInput:true,setID:"font1",textA:"center",width:"100px",setVal:16})

    subC = addEle({dad:cont,setClass:"contRow",margin:"20px"})
        addEle({dad:subC,text:"font2 :",marginR:"20px"})
        addEle({dad:subC,what:"input",isInput:true,setID:"font2",textA:"center",width:"100px",setVal:18})

    subC = addEle({dad:cont,setClass:"contRow",margin:"20px"})
        addEle({dad:subC,text:"font3 :",marginR:"20px"})
        addEle({dad:subC,what:"input",isInput:true,setID:"font3",textA:"center",width:"100px",setVal:20})

    addEle({dad:cont,setClass:"btn",text:"Build",marginT:"10px",setFunc:()=>{
        let pop = getDialogTopFrame()
            addEle({dad:pop,text:"width : "+Number(getID("size1").value)})
            addEle({dad:pop,text:"height : "+Number(getID("size2").value)})
            addEle({dad:pop,text:"font1 : "+Number(getID("font1").value),fontS:Number(getID("font1").value)+"px"})
            addEle({dad:pop,text:"font2 : "+Number(getID("font2").value),fontS:Number(getID("font2").value)+"px"})
            addEle({dad:pop,text:"font3 : "+Number(getID("font3").value),fontS:Number(getID("font3").value)+"px"})
            addEle({dad:pop,setClass:"btn",text:"OK",width:"50%",marginT:"20px",setFunc:()=>{pop.remove()}})
    pop.showModal()
}})

function getDialogTopFrame(cxlEsc=true){
    let Obj = addEle({dad:body,what:"dialog",
    width:Number(getID("size1").value)+"px",
    minWidth:"100px",minHeight:"200px",
    height:Number(getID("size2").value)+"px",
    radius:"20px",
    backC:"black",textC:"white",display:"flex",flDir:"column",opacity:0.9,
    alignItems:"center",border:"teal solid 3px",padding:"5px 0"})

    if(cxlEsc){ Obj.addEventListener('keydown', (e)=>{ if (e.key === 'Escape'){e.preventDefault()} }) }

    return Obj
}