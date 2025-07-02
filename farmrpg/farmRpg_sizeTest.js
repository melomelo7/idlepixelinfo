
const body = document.querySelector("body")

let cont = addEle({dad:body,setClass:"contCol",margin:"20px"})

let subC = addEle({dad:cont,setClass:"contRow",margin:"20px"})
        addEle({dad:subC,text:"width :",marginR:"20px"})
        addEle({dad:subC,what:"input",isInput:true,setID:"size1",textA:"center",width:"100px",setVal:100})

    subC = addEle({dad:cont,setClass:"contRow",margin:"20px"})
        addEle({dad:subC,text:"height :",marginR:"20px"})
        addEle({dad:subC,what:"input",isInput:true,setID:"size2",textA:"center",width:"100px",setVal:100})

    addEle({dad:cont,setClass:"btn",text:"Build",marginT:"10px",setFunc:()=>{
        let pop = getDialogTopFrame()
            addEle({dad:pop,text:"width : "+Number(getID("size1").value)})
            addEle({dad:pop,text:"height : "+Number(getID("size2").value)})
            addEle({dad:pop,setClass:"btn",text:"OK",width:"50%",marginT:"20px",setFunc:()=>{pop.remove()}})
    pop.showModal()
}})

function getDialogTopFrame(cxlEsc=true){
    let Obj = addEle({dad:body,what:"dialog",
    width:Number(getID("size1").value)+"px",
    minWidth:"100px",minHeight:"100px",
    height:Number(getID("size2").value)+"px",
    radius:"20px",
    backC:"black",textC:"white",display:"flex",flDir:"column",opacity:0.9,
    alignItems:"center",border:"teal solid 3px",padding:"5px 0"})

    if(cxlEsc){ Obj.addEventListener('keydown', (e)=>{ if (e.key === 'Escape'){e.preventDefault()} }) }

    return Obj
}