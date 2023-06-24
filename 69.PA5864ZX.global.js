
const grandContainer = addDiv(body)
grandContainer.style = grandContainerStyle
    const left = addDiv(grandContainer)
    left.style = leftMenuStyle

    const right = addDiv(grandContainer)
    right.style = containerColumn



    const topMenu = addDiv(right)
    topMenu.style = topMenuStyle

    const content = addDiv(right)
    content.style = `
    width:200px;
    height:1000px;
    background-color:red;
    `
    content.style.marginLeft = (topLeft + 10) + "px"
    content.style.marginTop = 113 + "px"
    


function setPage(){
    let myItm = undefined

    myItm = addDiv(left)
    myItm.style = buttonStyle
    myItm.innerHTML = "History"


    for(i=0;i<100;i++){
        topMenu.innerHTML+="bobrobobob"
        content.innerHTML+="bobrobobob"
    }

    topMenu.style.overflowX = "hidden"

    console.log(topMenu.getBoundingClientRect())

}

