const faqsArray = [
    {
    label : "About",
    icon : "musashi.jpg",
    text : `
            Why was this page even born ? It began while waiting for<br>
            the official Space Station page to be released in the Discord<br>
            Community, still on hold May 2023.<br><br>
            Sources/elements of this page come from:<br>
            - IPM Discord<br>
            - Wiki Fandom<br>
            - Self exploration<br><br>
            Users of this page will primarily be early gamers who will<br>
            benefit the most, as you progress though you will need it less.<br><br>
            This page is not designed to replace the mountain of good<br>
            advice you will receive from the members on Discord, who <br>
            can tailor advice depending on where you are in your game.<br>
            IPM is a personal progression experience. There are <br>
            individual aspects to the game based on your own goals,<br>
            how much time you have to play, advice given and any <br>
            money you wish to invest in your game.<br><br>
            Another word comes to mind, PONDER, in many cases as <br>
            you improve, you will be faced with choices. Remain <br>
            logical and if necessary seek advice from Discord or Reddit<br>
            to find what best suits your progression.<br>
            Examples include : which room to buy, when to finish a<br>
            challenge, which upgrade gives biggest effect or even<br>
            buying a ship.<br>
            Take some time, even sleep on it before making a decision.<br>
            (especially moneywise ...)<br><br>
            Its important to remember, its just a game, do not put<br>
            too much pressure on it.<br><br>
            "Feel free to ignore all that, lol"<br>
            (from Agent J kicking my butt atm)<br><br>
            If any comments or new ideas, you can Private Message me<br>
            on the Discord : @Shadow7
        `,
    url : "",
    img : "",
    thisFunction : undefined,
    },
    {
    label : "Prestige and Galaxy Value in IPM ?",
    icon : "cash windfall.jpg",
    text : `Every run can be ended when you reach 10 Millions. <br>
            (Next credit rewarded point being another 2+ Millions)<br><br>
            So in order to "Prestige", you sell your current galaxy<br>
            receiving in return Credits that can be spent to<br>
            build/upgrade rooms on your mothership.<br><br>
            The galaxy value when selling is the sum of those :<br>
            ( What you sell is what you DO NOT keep for next run ) `,
    url : "",
    img : "gv.jpg",
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
            Anyways dont think there is a set-in-stone rule here and run<br>
            until you feel you've come to YOUR own milestone.<br>
            Could be reaching X credits for a Y room purchase/upgrade ... `,
    url : "",
    img : "",
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
            check <a href="https://www.reddit.com/r/IdlePlanetMiner/" target="_blank">Reddit</a> / 
            <a href="https://discord.gg/r4X3ktZ" target="_blank">Discord</a> for any advice<br><br>
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
    label : "Avoid Crafting issues",
    icon : "craft.jpg",
    text : `① Above image(ingame help info) tells us idle/offline<br>
            time will have severe cut in mining(ore collection) so<br>
            it means in short if you dont have a stock of needed<br>
            [whatever stuff] to perform your smelt/craft process,<br>
            chances are this will take down your crafting as the chain<br>
            at some point wont be working as usual.<br>
            * Idle mining is down to roughly ~20% regular income *<br>
            ** [TIME WARP] booster = idle time btw ... **<br><br>
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
    label : "Managers",
    icon : "manager1.jpg",
    text : `Managers or the art of making your game never<br>
            like it was before ...<br><br>
            They will at low level care only for their own butts<br>
            and once they reach level 3 are suddenly feeling<br>
            lonely and decide to expand the love with others.<br><br>
            A manager 1st skill is any of those :<br>
            - Mining / Speed / Cargo<br>
            A manager 2nd skill is any of those :<br>
            - Mining / Speed / Cargo / Smelting / Crafting<br>
            ** Random get on hire and random get when <br>
            upgrading from a manager 2 stars ⇒ 3 stars **
            `,
    url : "",
    img : "",
    thisFunction : setManagers,
    },
    {
    label : "Asteroid | Debris",
    icon : "",
    text : `Quality output of an [A]steroid / [D]ebris is random by<br>
            type ( type = what {item} pops out of it )<br>
            but value is changing depending on ore extracted *AND*<br>
            brought back to the mothership. Meaning always collect<br>
            as close as possible to 100% mined production especially<br>
            from higher unlocked planets to have the best possible<br>
            Quality [A] / [D].<br>
            Maybe dont rely completely on the colored dots from<br>
            the Project [Bottleneck Optimizations] and monitor<br>
            a little further the levelling of Speed/Cargo to extract<br>
            higher bits at once.<br><br>
            Other modifiers to the Quality :<br>
            - Projects : related to [A] / [D]<br>
            - Room : Belt Studies <br>
            - Rover : Resupply(1~2) Projects done ⇒ temporary boost<br>
            - Station : Asteroid Nodes<br>
            - Merchant Ship<br><br>
            Times :<br>  
            To have these informations it will take a few more clicks :<br>
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
    label : "Ark(ing)",
    icon : "ark1.jpg",
    text : `Above Icon is the Ark reward or simply put free cash income.<br><br>
            Free is relative to you either use IRL money for the forever<br>
            freedom of Arking (Shop) or the happiness of Adds Watching<br><br>
            The table below just says "keep your cash high for a higher<br>
            Ark reward value".<br><br>
            Usualy this happens when you reach the best item you are able<br>
            to craft, all gets very slow and you think about selling galaxy.<br><br>
            That last item sold being the fuel to have a high cash relative<br>
            to your Galaxy Value you then wait more arks to grind deeper ...<br><br>
            An Ark does not have a set Timer to pop again so you might be<br>
            waiting like 6 to 10 (or even more) minutes for the next one.<br><br>
            * Sidenote : it may happen that game gets weird lags sometimes<br>
            and Arks tends to take more time, so just reboot to refresh *
            `,
    url : "",
    img : "ark2.jpg",
    thisFunction : undefined,
    },
    {
    label : "Challenge",
    icon : "challenge.jpg",
    text : `After selling a couple galaxies you get acces to Challenges.<br>
            A Challenge is a race to the highest galaxy value during 24h<br>
            only for you. Its always starting from scratch so you must<br>
            sell your galaxy cashing credits earned as usual.<br><br>
            As a challenge is your own, you are free to do the full 24h<br>
            or stop midway when you feel next tier is too far to reach.<br>
            Important thing about stopping early is the moment you are out<br>
            a timer will start for the next challenge to become available.<br><br>
            A new Challenge shows after 3 days.<br>
            For an accurate start day/time info, visit your<br>
            [Stats] > [Legacy] >  [Next Challenge]<br><br>
            Below are rewards depending on galaxy value reached.<br>
            Pay out is the farthest line reached, not the total of<br>
            every line cleared.<br><br>
            Reward cap is fixed at 1D. Higher galaxy value will change nothing<br>
            and as you can see, you cannot earn more than 200 Dark Matter.
            `,
    url : "",
    img : "challenge2.jpg",
    thisFunction : setChallenge,
    },
    {
    label : "Tournament",
    icon : "tournament1.jpg",
    text : `A dumb faq without a dumb chapter on tournaments ? ... no way !<br>
            Both a blessing and a curse, here we go : Tournaments baby !<br><br>
            Blessing ? well : bonus Stars, Dark Matter & Energy cells<br>
            rewarded are a great boost for your evolution.<br><br>
            Curse ? Thats not some you gonna get THAT easy ...<br>
            How come ? To start with, you are not alone racing this time,<br>
            unlike challenge its not you Vs you. And thats why it could<br>
            very well turn bad ... or not. The group/bracket you join is<br>
            supposed to be of somehow more/less about your settings/level<br>
            This may be true in copper league, in Top league not anymore .<br>
            In Copper : new players of mixed yet low levels ...<br>
            In Platinum : all lucky ones, while not super high level to<br>
            reach there mixed with the most evolved players.<br><br>
            Long story short, Platinum is top shelf, dont expect to score good<br>
            if you did not build up for some time in lower leagues.<br>
            Even in non-Platinum sometimes you will encounter very strong<br>
            players either fallen for whatever reason, or there on purpose.<br>
            `,
    url : "",
    img : "",
    thisFunction : setTournament,
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
    {
    label : "Expand Fleet (IRL Money)",
    icon : "fleet.jpg",
    text : `The always in store ships :<br>
            (Some may show up after another is bought)<br>
            - Daughtership<br>
            - Eldership<br>
            - Exodus<br><br>
            And the Special ships on a rotation basis,<br>
            showing every 1-2 month sometime less, 1 a time<br>
            and available for purchase during a couple days :<br>
            - Thunderhorse<br>
            - Merchant Ship<br>
            - Aurora Ship<br>
            - Enigma<br><br>
            Again no pressure, its a boost for you and a dev support<br>
            contribution but its not an absolute need if your able to<br>
            contain that mysterious impatience of yours ... <br><br>
            * Not a full list of all possible buys, check store for<br>
            more and FYI the rotation basis will also include<br>
            some Energy Cells(Station Currency) with Dark Matter.*`,
    url : "",
    img : "",
    thisFunction : setFleet,
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

function AddADiv(container){
    let item = document.createElement("div")
    item.style.textAlign = "center"
    item.style.alignItems = "center"
    item.style.marginTop = 10 + "px"
    container.appendChild(item)
    return item
}

function AddImg(container,path){
    let img = new Image()
    img.src = path
    img.style.margin = "10px 0 10px 0"
    container.appendChild(img)
    return img
}

function setFleet(container){

    let location = "./IPM Components/"
    let img = new Image()
    img.src = location + "daughtership.jpg"
    AddADiv(container).appendChild(img)

    img = new Image()
    img.src = location + "eldership.jpg"
    AddADiv(container).appendChild(img)

    img = new Image()
    img.src = location + "exodus.jpg"
    AddADiv(container).appendChild(img)

    AddADiv(container).style.borderTop = "yellow solid 2px"

    img = new Image()
    img.src = location + "thunderhorse.jpg"
    AddADiv(container).appendChild(img)

    img = new Image()
    img.src = location + "merchant ship.jpg"
    AddADiv(container).appendChild(img)

    img = new Image()
    img.src = location + "aurora ship.jpg"
    AddADiv(container).appendChild(img)

    img = new Image()
    img.src = location + "enigma.jpg"
    AddADiv(container).appendChild(img)

}

function setChallenge(container){
    const challenge = [
        {value:"1M",dm:5},
        {value:"10M",dm:10},
        {value:"100M",dm:15},
        {value:"1B",dm:20},
        {value:"10B",dm:25},
        {value:"100B",dm:30},
        {value:"1T",dm:40},
        {value:"10T",dm:50},
        {value:"100T",dm:60},
        {value:"1q",dm:70},
        {value:"10q",dm:80},
        {value:"100q",dm:90},
        {value:"1Q",dm:100},
        {value:"10Q",dm:115},
        {value:"100Q",dm:130},
        {value:"1s",dm:145},
        {value:"10s",dm:160},
        {value:"100s",dm:180},
        {value:"1S",dm:200},
        {value:"10S",dm:200},
        {value:"100S",dm:200},
        {value:"1O",dm:200},
        {value:"10O",dm:200},
        {value:"100O",dm:200},
        {value:"1N",dm:200},
        {value:"10N",dm:200},
        {value:"100N",dm:200},
        {value:"1D",dm:200},
    ]

    let table = document.createElement("table")
    table.style.margin = "0 auto"
    table.style.marginTop = 10 + "px"
    container.appendChild(table)
    for (i=0;i<challenge.length;i++){
        let tr = document.createElement("tr")
        table.appendChild(tr)
            let td = AddCell(tr)
            td.innerHTML = challenge[i].value
            td.style.minWidth = 100 + "px"

            AddCell(tr).innerHTML = i+1
            AddCell(tr).innerHTML = challenge[i].dm
    }
}

function setTournament(container){
    let mainFrame = document.createElement("div")
    container.appendChild(mainFrame)
    mainFrame.style.border = "yellow 1px solid"
    mainFrame.style.borderRadius = "10px"
    mainFrame.style.marginTop = 20 + "px"
    mainFrame.style.padding = 10 + "px"

    let item = AddADiv(mainFrame)
    item.innerHTML = "Infos & rewards"
    item.style.fontSize = 22 + "px"
    item.style.margin = "10px 0 10px 0"
    item.style.borderBottom = "yellow solid 2px"

    let img = undefined
    let location = "./IPM Components/"

    let table = document.createElement("table")
    table.style.margin = "0 auto"
    table.style.marginBottom = "10px"
    mainFrame.appendChild(table)
        let tr = document.createElement("tr")
        table.appendChild(tr)
            let td = AddCell(tr)
            td.style = closeButtonStyle
            td.innerHTML = "Infos"
            td.addEventListener("click",()=>{
                cleanParent(subFrame)
                img = new Image()
                img.src = location + "tournament2.jpg"
                subFrame.appendChild(img)
                img.style = `
                display: block;
                margin-left: auto;
                margin-right: auto;`
                subFrame.style.height = "630px"})

            td = AddCell(tr)
            td.style = closeButtonStyle
            td.innerHTML = "[ *?!* ]"
            td.addEventListener("click",()=>{
                cleanParent(subFrame)
                img = new Image()
                img.src = location + "tournament3.jpg"
                subFrame.appendChild(img)

                item = AddADiv(subFrame)
                item.style.textAlign = "left"
                item.style.marginLeft = 40 + "px"
                item.style.height = "550px"
                item.style.overflowX = "hidden"
                item.innerHTML = `
                - Retire ? Sure why not ... whatever the reason,<br>
                your position will remain, and if no other<br>
                player is able to go past you during remaining<br>
                time, reward will be yours at the end of timer.<br>
                Otherwise, new position's reward if any.<br><br>
                - When is Tournament ? Depending on your geo<br>
                location, it could be late on Friday or during Saturday.<br><br>

                - Hey I dont have the full 48h on my tournament !<br>
                I joined a bracket with other players and only<br>
                X hours remaining ... WHY !?!?<br>
                Okay, a word of explanation ...<br>
                When you click [Join], game starts looking for you,<br>
                an open bracket with available seats ...<br>
                If such is found you hop in, with timer left in this<br>
                specific bracket. On the other hand, If none is found<br>
                then a new bracket is open starting with you, with<br>
                a full timer = 48h. Sometimes you are lucky to<br>
                stay alone the whole tournament and cash #1 Price.<br><br>

                - Not participating to the next Tournament ...<br>
                As long as you dont [Join] you are off the grid.<br>
                You dont get/lose anything, no demotion either.<br><br>

                - Sometimes Tournament also get some weird bugs ...<br>
                To have a "stable" tournament I recommend you<br>
                to avoid transfering game between devices.<br>
                Traveling sometime is a bug cause, especialy<br>
                crossing time zones. When facing a big badabug,<br>
                screen shots/Player ID ready ⇒ contact Support 
                `
                subFrame.style.height = "630px"})
                
            td = AddCell(tr)
            td.style = closeButtonStyle
            td.innerHTML = "Copper"
            td.addEventListener("click",()=>{
                cleanParent(subFrame)
                img = new Image()
                img.src = location + "tournament rewards1.jpg"
                subFrame.appendChild(img)
                img.style = `
                display: block;
                margin-left: auto;
                margin-right: auto;`
                subFrame.style.height = "630px"})
            
            td = AddCell(tr)
            td.style = closeButtonStyle
            td.innerHTML = "Silver"
            td.addEventListener("click",()=>{
                cleanParent(subFrame)
                img = new Image()
                img.src = location + "tournament rewards2.jpg"
                subFrame.appendChild(img)
                img.style = `
                display: block;
                margin-left: auto;
                margin-right: auto;`
                subFrame.style.height = "630px"})

            td = AddCell(tr)
            td.style = closeButtonStyle
            td.innerHTML = "Gold"
            td.addEventListener("click",()=>{
                cleanParent(subFrame)
                img = new Image()
                img.src = location + "tournament rewards3.jpg"
                subFrame.appendChild(img)
                img.style = `
                display: block;
                margin-left: auto;
                margin-right: auto;`
                subFrame.style.height = "630px"})

            td = AddCell(tr)
            td.style = closeButtonStyle
            td.innerHTML = "Platinum"
            td.addEventListener("click",()=>{
                cleanParent(subFrame)
                img = new Image()
                img.src = location + "tournament rewards4.jpg"
                subFrame.appendChild(img)
                img.style = `
                display: block;
                margin-left: auto;
                margin-right: auto;`
                subFrame.style.height = "630px"})

    let subFrame = AddADiv(mainFrame)
}

function setManagers(container){
    let thisElement = undefined
    let thisContainer = undefined
    let thisImg = undefined
    let location = "./IPM Components/"
    let myItm = undefined

    thisElement = AddADiv(container)
    thisElement.style = closeButtonStyle
    thisElement.innerHTML = "Recruit"
    thisElement.addEventListener("click",()=>{
        myItm = document.getElementById("managerTab")
        myItm.style.display = "none"        
        myItm = document.getElementById("recruit")
        if(myItm.style.display === "none")
            {myItm.style.display = "block"}
        else
            {myItm.style.display = "none"}
    })

    thisElement = AddADiv(container)
    thisElement.style = closeButtonStyle
    thisElement.innerHTML = "Manager Tab"
    thisElement.addEventListener("click",()=>{
        myItm = document.getElementById("recruit")
        myItm.style.display = "none"
        myItm = document.getElementById("managerTab")
        if(myItm.style.display === "none")
            {myItm.style.display = "block"}
        else
            {myItm.style.display = "none"}

    })

    thisContainer = AddADiv(container)
    thisContainer.setAttribute("id","recruit")
    thisContainer.style.border = "solid blue 2px"
    thisContainer.style.padding = "5px"
    thisContainer.style.borderRadius = "10px"
    thisContainer.style.display = "none"
    thisContainer.style.width = 425 + "px"
        thisElement = AddADiv(thisContainer)
        thisElement.style = textStyle
        thisElement.innerHTML = "Hire a Manager with a random star level 1~3"
        thisImg = AddImg(thisContainer,location+"manager2.jpg")

        thisElement = AddADiv(thisContainer)
        thisElement.style = textStyle
        thisElement.innerHTML = "Hire a Manager with a random star level 3~4"
        thisImg = AddImg(thisContainer,location+"manager3.jpg")

        thisElement = AddADiv(thisContainer)
        thisElement.style = textStyle
        thisElement.innerHTML = "Hire a Manager with a random star level 4~5"
        thisImg = AddImg(thisContainer,location+"manager4.jpg")

        thisElement = AddADiv(thisContainer)
        thisElement.style = textStyle
        thisElement.innerHTML = "Button will show Dark Matter cost OR<br>how many free pulls you own (Rover reward)"
        thisImg = AddImg(thisContainer,location+"manager5.jpg")

        thisElement = AddADiv(thisContainer)
        thisElement.style = textStyle
        thisElement.innerHTML = "You can even check the odds of stars quality<br>if you click on [( i ) Odds] down the page"
        thisImg = AddImg(thisContainer,location+"manager6.jpg")

    thisContainer = AddADiv(container)
    thisContainer.setAttribute("id","managerTab")
    thisContainer.style.border = "solid blue 2px"
    thisContainer.style.padding = "5px"
    thisContainer.style.borderRadius = "10px"
    thisContainer.style.display = "none"
    thisContainer.style.width = 425 + "px"
    thisImg = AddImg(thisContainer,location+"manager7.jpg")
        thisElement = AddADiv(thisContainer)
        thisElement.style.textAlign = "left"
        thisElement.style.marginLeft = 10 + "px"
        thisElement.innerHTML = `
        This Tab is where you manage your flock ...<br><br>
        The top line help you select managers by filtering<br>
        also it shows under [actions] > [stats] some<br>
        interesting details about your managers bonuses.<br>
        ... and how many are idle / total of managers.<br><br>
        When you cant find some managers they are either<br>
        working on a planet or hidden by a filter.<br><br>
        `
        thisElement = AddADiv(thisContainer)
        thisElement.style.marginLeft = 10 + "px"
        thisElement.innerHTML = `
        ***<br><br>
        [!] Tap and hold a manager to access his details [!]<br>
        `
        thisImg = AddImg(thisContainer,location+"manager8.jpg")
        thisElement = AddADiv(thisContainer)
        thisElement.style.textAlign = "left"
        thisElement.style.marginLeft = 10 + "px"
        thisElement.innerHTML = `
        You may modify their name (on the left)<br><br>
        Promote : will burn 3 other managers with the same<br>
        star level to add 1 star on this selected manager.<br><br>
        The [Discard] will remove this manager from the game<br>
        which is a waste as it can be used for promoting others.<br><br>
        Tap the ( i ) for yet another details if you want.<br><br>
        And under the manager stars you get to see the skills.<br>
        - Line 1 bonus applied to himself only<br>
        - Line 2 bonus that will be shared with other managers<br>
        having that same skill (for 3 stars managers and above)<br>
        `
        thisElement = AddADiv(thisContainer)
        thisElement.style = textStyle
        thisElement.innerHTML = `
        
        `    




    }