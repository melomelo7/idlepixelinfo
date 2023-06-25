




function setPage(){

    menuButtons.push(new menuButton("Logs",clickLog))

    setMenu()

    playerLogs.push(allLogs.filter(x=>x.label === "Start")[0])


}

function setMenu(){
    for(i=0;i<menuButtons.length;i++){
        thisItm = addDiv(left)
        thisItm.style = buttonStyle
        thisItm.innerHTML = menuButtons[i].label
        thisItm.addEventListener("click",menuButtons[i].clickFunction)
        thisItm.setAttribute("id","menuButton"+i)
    }

}

function clickLog(){
    cleanParent(content)

    let txt = ""
    for(bcl=0;bcl<playerLogs.length;bcl++){
        txt += "<br>" + playerLogs[bcl].text
    }
    thisItm = addDiv(content)
    thisItm.innerHTML = txt
//    thisItm.scrollTop = thisItm.scrollHeight
    console.log(content.scrollHeight)



    thisItm = addDiv(content)
    thisItm.style = buttonStyle
    thisItm.innerHTML = "Close Logs And Start"
    thisItm.style.margin = "30px 0 10px 10px" 
    thisItm.style.width = "300px"

    content.scrollTop = 0
}