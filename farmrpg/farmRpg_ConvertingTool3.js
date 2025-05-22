const body = document.querySelector("body")

addEle({dad:body,what:"select",setID:"myselect"})
    addEle({dad:getID("myselect"),what:"option",text:"none"})
    addEle({dad:getID("myselect"),what:"option",text:"option 1",setFunc:readSel})
    addEle({dad:getID("myselect"),what:"option",text:"option 2",setFunc:readSel})
    addEle({dad:getID("myselect"),what:"option",text:"option 3",setFunc:readSel})

let cont = addEle({dad:body,setClass:"contRow"})
        addEle({dad:cont,text:"here 1",setID:"myS1"})

    cont = addEle({dad:body,setClass:"contRow",alignItems:"center"})
        addEle({dad:cont,setClass:"btn",text:"Do it",setFunc:()=>{
            getID("myS2").innerHTML = getID("myselect").value        
        }})
        addEle({dad:cont,text:"here 2",setID:"myS2"})

function readSel(){
    getID("myS1").innerHTML = getID("myselect").value
}