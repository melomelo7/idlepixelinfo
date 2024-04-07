
function setTabCrafting(keyWord){
    let myTab = getID("tab"+keyWord)
    cleanParent(myTab)
    

    let myCont = addEle({dad:myTab,setClass:"contCol"})
        let subCont = addEle({dad:myCont,setClass:"contRow"})
            addEle({dad:subCont,setClass:"mainTab",text:"Crafter 1",setID:"crafterFr1"})
            addEle({dad:subCont,setClass:"mainTab",text:"Crafter 2",setID:"crafterFr2"})
        subCont = addEle({dad:myCont,setClass:"contRow"})
            addEle({dad:subCont,setClass:"mainTab",text:"Crafter 3",setID:"crafterFr3"})
            addEle({dad:subCont,setClass:"mainTab",text:"Crafter 4",setID:"crafterFr4"})

    let content = addEle({dad:myTab,setClass:"contRow"})

    content.innerHTML = player.blueprints[0]

}