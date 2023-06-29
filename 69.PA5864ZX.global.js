



function setPage(){
//    cleanParent(content)

    if(menuButtons.length === 0){
        playerDetails.Logs.push(allLogs.filter(x=>x.label === "Start")[0])
        logTop = true
        menuButtons.push(new menuButton("Logs", function (e){clickLog(e,logTop)}))
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

    if(playerDetails.LastButton !=="none"){clickLeftMenu(playerDetails.LastButton)}

}

function clickLeftMenu(id){
    playerDetails.LastButton = id
    let thisArray = left.querySelectorAll("div")
    for (bcl=0;bcl<thisArray.length;bcl++){
        if(id === thisArray[bcl].id)
            {thisArray[bcl].style.backgroundColor = "grey"}
        else
            {thisArray[bcl].style.backgroundColor = "black"}
    }
}

function clickLog(e,top){
    cleanParent(content)

    clickLeftMenu(e.srcElement.id)

    let txt = ""
    for(bcl=0;bcl<playerDetails.Logs.length;bcl++){
        txt += "<br>" + playerDetails.Logs[bcl].text
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
            clickLeftMenu("")
            cleanParent(content)
            setPage()
        })

    if (top)
        {content.scrollTop = 0}
    else
        {content.scrollTop = content.scrollHeight}
    
}

function clickSERC(e){
    clickLeftMenu(e.srcElement.id)
    cleanParent(content)
    displayTime()
    displayTopmenu()
}

function displayTime(){
    let current = playerDetails.Time
    thisTime = current.hour < 10 ? "0" + current.hour : current.hour
    let thisWidth = "calc(" + (topMenuLeft.getBoundingClientRect().width - 40) + "px)"
    cleanParent(topMenuLeft)
    thisItm = addDiv(topMenuLeft)
    thisItm.style = borderedContainerRow
    thisItm.style.width = thisWidth
    thisItm.style.padding = "3px"
    thisItm.style.margin = "10px 0 4px 0"
    thisItm.style.justifyContent = "center"
    thisItm.innerHTML = current.year + "." + current.month + "." + current.day

    let thisContainer = addDiv(topMenuLeft)
    thisContainer.style = borderedContainerRow
    thisContainer.style.margin = "6px 0 0 0"
    thisContainer.style.width = thisWidth

        thisItm = addDiv(thisContainer)
        thisItm.innerHTML = thisTime + ":00"
        thisItm.style.padding = "0 10px 0 10px"
        thisItm.setAttribute("id","timeDisplay")

        thisWidth = 
            thisContainer.getBoundingClientRect().width - 
            thisItm.getBoundingClientRect().width
        thisItm = addDiv(thisContainer)
        thisItm.style.display = "block"
        thisItm.style.width = thisWidth + "px"
        thisItm.style.borderTopRightRadius = "20px"
        thisItm.style.borderBottomRightRadius = "20px"
        thisItm.style.backgroundImage = dayLight(current.hour)
        thisItm.setAttribute("id","lightDisplay")
}


function displayTopmenu(){
    cleanParent(topMenuRight)

    runner.style.visibility = "visible"

    thisItm = addDiv(topMenuRight)
    let thisText = SERCtalk.filter(x=>x.id === playerDetails.SERCchat)[0].text
    thisText = thisText.includes("$name$") ? 
    thisText.replace("$name$",playerDetails.Name) : thisText
    thisItm.innerHTML = thisText
    thisItm.style = `
    font-size: 18px;
    margin: 10px 0 10px 20px;
    overflow-x: hidden;
    width: 60%;
    `
    
}

function clickSelf(e){
    cleanParent(content)
    clickLeftMenu(e.srcElement.id)
    let thisContainer = addDiv(content)
    thisContainer.style = `
    border: solid 2px yellow;
    margin: 10px 20px 0 20px;
    padding : 10px;
    border-radius: 20px;
    display:flex;
    flex-direction:column;
    `
        let thisContainer2 = addDiv(thisContainer)
        thisContainer2.style = containerRow
        thisContainer2.style.marginTop = 10 + "px"
            thisItm = addDiv(thisContainer2)
            thisItm.innerHTML = "Name : "

            thisItm = addInput(thisContainer2)
            thisItm.value = playerDetails.Name
            thisItm.style.marginLeft = 10 + "px"
            thisItm.addEventListener("input",(e)=>{
                if (e.srcElement.value !== ""){
                    playerDetails.Name = e.srcElement.value
                    displayTopmenu()
                }})

        thisItm = addDiv(thisContainer)
        thisItm.style.marginTop = 10 + "px"
        thisItm.innerHTML = "Health : " 
        + playerDetails.Health.now + " / " + playerDetails.Health.max

        thisItm = addDiv(thisContainer)
        thisItm.style.marginTop = 10 + "px"
        thisItm.innerHTML = "Vigor : " 
        + playerDetails.Vigor.now + " / " + playerDetails.Vigor.max        
}