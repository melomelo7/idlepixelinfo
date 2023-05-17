const faqsArray = [
    {
    label : "About",
    icon : "musashi.jpg",
    text : `Why this page is even born ? Triggering of idea/creation<br>
            was STATION infos publication getting late on the Discord.<br>
            Still not released mid may 2023 ... <br><br>
            The source/elements composing this page are a mix of these :<br>
            - IPM Discord<br>
            - Wiki (Fandom)<br>
            - Self Digging<br><br>
            Use of this page ? Very likely Young/New players, so as you<br>
            progress, less and less ...<br>
            This page is not replacing the mountain of advice helpers can<br>
            provide especially on a CASE-BY-CASE scenario.<br><br>
            Case by case is really what is important to grab here.<br>
            Why ? Because IPM is a personal progression experience.<br><br>
            We have all different agenda/available time, ideas ... budget<br>
            What is true/good for a one player will vary for the next.<br>
            So what player A is expecting from the game, how much time<br>
            (and IF any budget) he is willing to spend will vary how<br>
            the personal progression experience goes.<br><br>
            Another word that comes to mind is PONDER. In many cases<br>
            during progression you will be facing choices. Remain logic<br>
            and you will probably get what fits better the situation. What<br>
            Room to go for OR when to stop your Challenge are such and<br>
            pondering return of choices are necessary. Take a few minutes<br>
            even sleep on it if its buying a new ship, hell why not ...<br><br>
            Keep in mind its a game, do not create unnecessary pressure.`,
    url : "",
    img : "",
    thisFunction : undefined,
    },
    {
    label : "Run Forrest ... Run !!",
    icon : "run.jpg",
    text : `Another dumb Faq ...<br><br>
            How long should my run be ? another "case by case scenario"<br>
            I will answer by this : I started with 1 week runs which<br>
            turned into half weeks, 2 days, 1 day, ...<br><br>
            You build the project tree on each run going slowly deeper,<br>
            it takes time so enjoying the "fruits of the tree" before<br>
            even considering selling should come to mind ...<br><br>
            Anyways dont feel there is a set-in-stone rule here and run<br>
            until you feel you've come to YOUR own milestone.<br>
            Could be reaching X credits for a Y room purchase/upgrade ... `,
    url : "",
    img : "",
    thisFunction : undefined,
    },
    {
    label : "Prestige and Galaxy Value in IPM ?",
    icon : "cash windfall.jpg",
    text : `Every run will(can) end when you reach 10 Millions. <br>
            Next prestige point will need another 2+ Millions.<br>
            Credits will be received in order to start building<br>
            rooms on your mothership.<br> 
            The galaxy value when selling is the sum of those : `,
    url : "",
    img : "gv.jpg",
    thisFunction : undefined,
    },
    {
    label : "Game Issues",
    icon : "bug.jpg",
    text : `Bugs were here before computers and games so no worries,<br>
            you will get your cut in IPM. Just a couple, for extra fun ;-)<br><br>
            ** side note here : not all bugs are being hunted some are just<br>
            considered "not current priority" ... ** <br><br>
            Phase 1 : try to remedy the bug yourself with any of these :<br>
            (- [read settings > help] at some point is good)<br>
            - selling galaxy<br>
            - closing/force-closing game<br>
            - REBOOT of device <br>
            (recently rebooting my phone helped with other stuff than <br>
            gaming too)<br><br>
            No success so far ? then try phase 2 :<br>
            check Reddit / Discord for any advice<br><br>
            Phase 3 when all hope is gone :<br>
            Support shall save the day ! ... hopefully :<br>
            Provide your Player ID (under settings) along with any screen<br>
            shots and/or purchase receipt if needs be.<br><br>
            Support return may take up to 48h. Often will take less.<br>
            If no reply give it another day or 2 before sending a "reminder".
            `,
    url : "support@techtreegames.com",
    img : "",
    thisFunction : undefined,
    },
    {
    label : "Asteroid | Debris Times",
    icon : "",
    text : `To have these informations it will take a few more clicks :<br>
            Visit my other tab ⇒ "Projects" (roughly to center-right area)<br>
            and click on projects shown here.<br>
            (with a purple border around)`,
    url : "",
    img : "asteroids times.jpg",
    thisFunction : undefined,
    },
    {
    label : "Achievements",
    icon : "achievements.jpg",
    text : `Did any one finish all of them yet ?<br><br>
            well both YES and NO could fit as veterans are there or <br>
            soon to be<br><br>
            **[Mothership rooms upgrades] in current game status <br>
            is maxed at 6/8 stars**`,
    url : "",
    img : "achievements2.jpg",
    thisFunction : undefined,
    },
    {
    label : "Avoid Crafting issues",
    icon : "craft.jpg",
    text : `① Above image(ingame help info) tells us idle/offline<br>
            time will have severe cut in mining(ore collection) so<br>
            it means in short if you dont have a stock of needed<br>
            [whatever stuff] to perform your smelt/craft process,<br>
            chances are this will take down your crafting as the chain<br>
            at some point wont be working as usual.<br><br>
            ② The below image explains where the chain of production<br>
            starts/ends. Logic says dont start the chain by the top<br>
            item but by the lowest ...<br><br>
            example : <br>
            lens require glass dont put lens in [1] and glass in [2]<br><br>
            PS :<br>
            One last piece of info while we are here ... when smelters<br>
            get too fast the game wont do the math properly resulting<br>
            in smelters too slow because too fast ... <br>
            dont kick me, it wont change a thing `,
    url : "",
    img : "craft2.jpg",
    thisFunction : undefined,
    },
    {
    label : "Beacon",
    icon : "beacon.jpg",
    text : `Below showing Costs and benefits for a set of Planets.<br>
            so roughly for a 1 Telescope. Even though it shows every<br>
            type of bonus (mining/speed/cargo), usualy players focus<br>
            on developping the MINING only. Your free to set your own<br>
            path if you feel other is more interesting for your own game.<br>
            Also you could prioritize a particluar Set of Planets if<br>
            they offer more valuable result for your settings ...<br>
            (example : stars on ores provided by those planets ...)<br><br>
            Costs here show the outcome sticking to a 1 type of bonus,<br>
            while token per lev wont change, bonus will vary if you select<br>
            more than 1 type of bonus. Base +0.2/mining & +0.4/others.<br><br>
            YES after buying lv40 at 800 tokens you wont be able to<br>
            upgrade any further this set of Planetes.`,
    url : "",
    img : "beacon2.jpg",
    thisFunction : setBeacon,
    },
]

function setFaq(){

    let thisContainer = document.createElement("div")
    thisContainer.style = containerRow
    thisContainer.style.margin = "10px 0 0 20px"
    right.appendChild(thisContainer)

        let subContainerA = document.createElement("div")
        subContainerA.style = containerColumn
        thisContainer.appendChild(subContainerA)

        let subContainerB = document.createElement("div")
        subContainerB.style = containerColumn
        thisContainer.appendChild(subContainerB)

    for(i=0;i<faqsArray.length;i++){
        let btnContainer = document.createElement("div")
        btnContainer.style = closeButtonStyle
        btnContainer.style.padding = "10px"
        subContainerA.appendChild(btnContainer)
        btnContainer.innerHTML = faqsArray[i].label
        btnContainer.addEventListener("click",function(e){faqButton(e,subContainerB)})
    }
}

function faqButton(e,subContainerB){

    cleanParent(subContainerB)
    let thisElement = faqsArray[faqsArray.findIndex(x=>x.label === e.srcElement.innerHTML)]

    let thisContainer = document.createElement("div")
    thisContainer.style = containerStyle
    thisContainer.style.margin = "10px 0 0 20px"

    subContainerB.appendChild(thisContainer)

    let subContainer = undefined
    let thisItem = undefined

        if (thisElement.icon){
            subContainer = document.createElement("div")
            thisContainer.appendChild(subContainer)
            subContainer.style.marginTop = 20 + "px"
            subContainer.style.textAlign = "center"

                thisItem = new Image()
                thisItem.src = "./IPM Components/" + thisElement.icon
                subContainer.appendChild(thisItem)            
        }

        thisItem = document.createElement("div")
        thisItem.style = textStyle
        thisItem.innerHTML = thisElement.text
        thisContainer.appendChild(thisItem)

        if (thisElement.url){
            subContainer = document.createElement("div")
            thisContainer.appendChild(subContainer)
            subContainer.style.marginTop = 20 + "px"
            subContainer.style.textAlign = "center"

                thisItem = document.createElement("a")
                thisItem.setAttribute("href","mailto:"+thisElement.url)
                subContainer.appendChild(thisItem)
                thisItem.innerHTML = thisElement.url
        }

        if (thisElement.img){
            subContainer = document.createElement("div")
            thisContainer.appendChild(subContainer)
            subContainer.style.marginTop = 20 + "px"
            subContainer.style.textAlign = "center"

                thisItem = new Image()
                thisItem.src = "./IPM Components/" + thisElement.img
                subContainer.appendChild(thisItem)
        }

        if (thisElement.thisFunction) {
            thisElement.thisFunction(thisContainer)
        }
}

function setBeacon(container){
    let totalToken = 0
    let tokenCost = 
        [4,8,12,16,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,140,150,175,200,225,250,300,350,400,500,600,700,800]

    let beaconTable = document.createElement("table")
    container.appendChild(beaconTable)
    beaconTable.style.margin = "0 auto"
        let newRow = document.createElement("tr")
        beaconTable.appendChild(newRow)
            AddCell(newRow).innerHTML = "Lv"
            AddCell(newRow).innerHTML = "Token<br>Cost"
            AddCell(newRow).innerHTML = "Mine"
            AddCell(newRow).innerHTML = "Speed<br>Cargo"

    for (i=0;i<tokenCost.length;i++){
        totalToken += tokenCost[i]
        newRow = document.createElement("tr")
        beaconTable.appendChild(newRow)
            AddCell(newRow).innerHTML = i+1
            AddCell(newRow).innerHTML = tokenCost[i]
            AddCell(newRow).innerHTML = (1 + (0.02*(i+1))).toFixed(2)
            AddCell(newRow).innerHTML = (1 + (0.04*(i+1))).toFixed(2)
    }

    newRow = document.createElement("tr")
    beaconTable.appendChild(newRow)
        AddCell(newRow).innerHTML = "Total spent"
        AddCell(newRow).innerHTML = totalToken.toLocaleString()

}

function AddCell(thisRow){
    let thisCel = document.createElement("td")
    thisCel.style = basicCellStyle
    thisCel.style.minWidth = 60 + "px"
    thisRow.appendChild(thisCel)
    return thisCel
}
