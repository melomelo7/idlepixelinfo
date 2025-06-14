const body = document.querySelector("body")

let helpArr = [

    {label:"",text:"option 1"},
    {label:"",text:"option 2"},
    {label:"",text:"option 3"},
    {label:"",text:"option 4"},
    {label:"",text:"option 5"},
]

addEle({dad:body,what:"select",margin:"10px",fontS:"16px",setID:"infosSelect",padding:"5px",
backC:"darkgreen",border:"rgb(212, 212, 74) solid 2px",radius:"5px",textC:"white",
setFunc:()=>{ 
    if(getID("infosSelect").value !=="-- Infos --"){
        getID("result1").innerHTML = getID("infosSelect").value
    } 
}})
getID("infosSelect").addEventListener("input",()=>{
    getID("result2").innerHTML = getID("infosSelect").value
})

    addEle({dad:getID("infosSelect"),what:"option",text:"-- Infos --"})
    helpArr.forEach(itm=>{ addEle({dad:getID("infosSelect"),what:"option",text:itm.text}) })

addEle({dad:body,setID:"result1"})

addEle({dad:body,setID:"result2"})
