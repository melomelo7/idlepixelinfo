



function setPage(){
    cleanParent(content)

    if(menuButtons.length === 0){
        playerLogs.push(allLogs.filter(x=>x.label === "Start")[0])
        logTop = true
        menuButtons.push(new menuButton("Logs", function (){clickLog(logTop)}))
    }

    setMenu()
}

function setMenu(){
    cleanParent(left)
    for(i=0;i<menuButtons.length;i++){
        thisItm = addDiv(left)
        thisItm.style = buttonStyle
        thisItm.style.marginBottom = 10 + "px"
        thisItm.innerHTML = menuButtons[i].label
        thisItm.addEventListener("click",menuButtons[i].clickFunction)
        thisItm.setAttribute("id","menuButton"+i)
    }

}

function clickLog(top){
    cleanParent(content)

    let txt = ""
    for(bcl=0;bcl<playerLogs.length;bcl++){
        txt += "<br>" + playerLogs[bcl].text
    }
    thisItm = addDiv(content)
    thisItm.innerHTML = txt

    thisItm = addDiv(content)
    thisItm.style = buttonStyle
    thisItm.innerHTML = "Close Logs"
    thisItm.style.margin = "30px 0 10px 10px" 
    thisItm.style.width = "200px"
    thisItm.addEventListener("click",()=>{
            if(menuButtons.length === 1)
                {logTop = false ; menuButtons.push(new menuButton("SERC",clickSERC))}
            setPage()
        })

    if (top)
        {content.scrollTop = 0}
    else
        {content.scrollTop = content.scrollHeight}
    
}

function clickSERC(){
    console.log("SERC")
}