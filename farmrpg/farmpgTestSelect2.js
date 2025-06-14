const body = document.querySelector("body")

let helpArr = [

    {label:"now showing option 1",text:"option 1"},
    {label:"now showing option 2",text:"option 2"},
    {label:"now showing option 3",text:"option 3"},
    {label:"now showing option 4",text:"option 4"},
    {label:"now showing option 5",text:"option 5"},
]

addEle({dad:body,text:"15:17",margin:"10px"})

addEle({dad:body,what:"select",margin:"10px",fontS:"16px",setID:"infosSelect",padding:"5px",
backC:"darkgreen",border:"rgb(212, 212, 74) solid 2px",radius:"5px",textC:"white",setFunc:()=>{
    getID("result1").innerHTML = "browser is Safari : " + isSafari() + ", " + getID("infosSelect").value
    alert(helpArr.filter(x=>x.text===getID("infosSelect").value)[0].label)
}})
    addEle({dad:getID("infosSelect"),what:"option",text:"-- Infos --"})
    helpArr.forEach(itm=>{ addEle({dad:getID("infosSelect"),what:"option",text:itm.text}) })

addEle({dad:body,setID:"result1"})
