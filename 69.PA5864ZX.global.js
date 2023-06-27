



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
        let part1 = dayLight(current.hour)
        let part2 = current.hour === 23 ? dayLight(0) : dayLight(current.hour +1)
//        thisItm.style.backgroundColor = dayLight(current.hour)
console.log("linear-gradient(" + part1 + "," + part2 + ")")
        thisItm.style.backgroundImage = "linear-gradient(to right," + part1 + "," + part2 + ")"
        thisItm.setAttribute("id","lightDisplay")
}

//background-color: rgb(0,76,78);


function displayTopmenu(){
    cleanParent(topMenuRight)
    thisItm = addDiv(topMenuRight)
    thisItm.style = runTimeBtn
    thisItm.innerHTML = "Run<br>Time"
    thisItm.addEventListener("click",()=>{
        playerDetails.Time.hour += playerDetails.runTimeChunk
        if (playerDetails.Time.hour > 23){
            playerDetails.Time.hour = 0
            playerDetails.Time.day += 1
            if(playerDetails.Time.day > 30){
                playerDetails.Time.day = 1
                playerDetails.Time.month += 1
                if(playerDetails.Time.month > 12){
                    playerDetails.Time.month = 1
                    playerDetails.Time.year += 1
                }
            }
        }

        displayTime()
    })

    thisItm = addDiv(topMenuRight)
    thisItm.innerHTML = SERCtalk.filter(x=>x.id === playerDetails.SERCchat)[0].text
    thisItm.style.fontSize = 18 + "px"
    thisItm.style.margin = "10px 0 0 20px"
    thisItm.style.overflowX = "hidden"
}