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
    label : "Game Issues",
    icon : "bug.jpg",
    text : `Bugs were here before computers and games so no worries,<br>
            you will get your cut in IPM. Just a couple, for extra fun ;-)<br><br>
            ** side note here : not all bugs are being hunted some are just<br>
            considered "not current priority" ... ** <br><br>
            `+spanText("green","Phase 1")+` : try to remedy the bug yourself with any of these :<br>
            (- [read settings > help] at some point is good)<br>
            - selling galaxy<br>
            - closing/force-closing game<br>
            - REBOOT of device <br>
            (recently rebooting my phone helped with other stuff than <br>
            gaming too)<br><br>
            No success so far ? then try `+spanText("yellow","Phase 2")+` :<br>
            check <a href="https://www.reddit.com/r/IdlePlanetMiner/" target="_blank">Reddit</a> / 
            <a href="https://discord.gg/r4X3ktZ" target="_blank">Discord</a> for any advice<br><br>
            `+spanText("crimson","Phase 3")+` when all hope is gone :<br>
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
    label : "Prestige and Galaxy Value in IPM ?",
    icon : "credits2.jpg",
    text : `Every run can be ended when you reach 10 Millions. <br>
            (Next credit rewarded point : 12.51M... advice : go for it)<br><br>
            So in order to "Prestige", you sell your current galaxy<br>
            receiving in return Credits that can be spent to<br>
            build/upgrade rooms on your mothership.<br><br>
            The `+ spanText("lime","Galaxy Value") +` when selling is the sum
             of what you lose :<br>(sidenote : bought Ships follow you
            in every new galaxy)`,
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
            until you feel you"ve come to YOUR own milestone.<br>
            Could be reaching X credits for a Y room purchase/upgrade ...<br><br>
            Now if you want a starting "milestone", selling becomes<br>
            available upon reaching 10M and at~12.5M you can fetch 1<br>
            more credit for a little extra time. Keep this as your first<br>
            milestone until you figure out the next.<br><br>
            `+ spanText("lime",'* Make sure you read the faq : "Stars" *') +`
            `,
    url : "",
    img : "",
    thisFunction : undefined,
    },
    {
    label : "Early Unlocks",
    icon:"cash windfall.jpg",
    text :  `Roughly selling your galaxy ~5 times early on<br>will unlock 
            things you will use forever.<br><br>
            Sell at 10M sharp or rather follow my advice : 12.51M,<br>
            see for yourself ...`,
    url : "",
    img : "construction.jpg",
    thisFunction : setUnlocks,
    },
    {
    label : "Credits",
    icon : "credits2.jpg",
    text : `Those values may or not be very accurate,<br>
            its just to have an idea of what to expect<br>
            when selling your galaxy. Of course the<br>
            galaxy value is not locked at 100.00 D you<br>
            can run much much farther.<br><br>
            Values here are only BASE CREDITS. Will be<br>
            added bonuses: [Room]: Lounge, [Space station]:<br>
            tiles ... and the [Ship]: Exodus.<br><br>
            There is a cap as to how much base credits<br>
            a single galaxy sale would reward, upon reaching<br>
            e109 you will get to the max credits possible.<br>
            `+spanText("lime","(extended to e220 since end of May 2024)")+`<br><br>
            Should you need more credits infos the 
            <a href="https://discord.gg/r4X3ktZ" target="_blank">Discord</a><br>
            community has a bot you can use made by Tanktalus.<br>
            (on discord use the bot under the section :<br>
            "a-vacuum-in-space-and-time"<br> to avoid spamming chats)`,
    url : "",
    img : "credits2.jpg",
    thisFunction : setCredits,
    },
    {
    label : "Events | Probes Hangar",
    icon : "yellow dia.jpg",
    text : `
    `+spanText("lime","Starting August 2024")+`<br><br>
    More `+spanText("fuchsia","idle time")+` for your `+spanText("fuchsia","action")+
    ` ! Or was it the opposit `+spanText("","🤔",24)+` ? Im lost `+spanText("","🙈",24)+` ...<br><br>
    Anyways 2 new places of interest for us to play ! `+spanText("","🥳",24)+` 
    `,
    url : "",
    img : "holo bolts.jpg",
    thisFunction : setProbeHangar,
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
            lens require glass dont put lens in `+spanText("red","[1]")+` and glass in `
            +spanText("red","[2]"),
    url : "",
    img : "craft2.jpg",
    thisFunction : undefined,
    },
    {
    label : "Crafters | Smelters costs",
    icon : "smelterCrafter.jpg",
    text : `Below image(bottom tile on Projects tree/tab)<br>
            is the tile you want to unlock, in order to cut<br>
            remaining Crafters/Smelters prices by 50%.`,
    url : "",
    img : "",
    thisFunction : setCrafters,
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
            to your `+spanText("lime","Galaxy Value")+` you then wait more arks to grind deeper ...<br><br>
            An Ark does not have a set Timer to pop again so you might be<br>
            waiting like 6 to 10 (or even more) minutes for the next one.<br><br>
            * Sidenote : it may happen that game gets weird lags sometimes<br>
            and Arks tends to take more time, so just reboot to refresh *
            `,
    url : "",
    img : "ark2.jpg",
    thisFunction : showGal100,
    },
    {
    label : "Stars",
    icon : "star.jpg",
    text : `(Also called Badges ... dont ask me why)<br>
            Always wanted to make more money out of your resources ?<br><br>
            Stars will help you do so. For each star you get a +20% base value.<br><br>
            So reaching 5 stars, a resource value is x2, at 10 stars x3 ....<br><br>
            Boost is always added to the "base value", so the power of stars will<br>
            have a different impact as you keep earning more.<br><br><br>
            Sources of stars :<br>
            - Challenge reward<br>
            - Tournament reward<br>
            - Rover Missions reward<br><br><br>
            You do not have control on stars, they are allocated at random.<br><br>
            Partialy true as stars range from your day1 in the game unlocks<br>
            until present day of play. In short the deeper you go unlocking new<br>
            stuff the more the stars will spread into as many items.<br><br>`
            + spanText("lime","Keep fewer unlocks will concentrate stars on basic items.") + `<br>` 
            + spanText("lime","Earning faster credits to expand for new players.") + `<br><br>
            This could be another "milestone" : I will unlock deeper when I reach<br>
            X stars on item(s) Y & Z ... 
            `,
    url : "",
    img : "",
    thisFunction : starPool,
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
            ( ... called Sand-Baggers )<br><br>`,
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
            - Daughtership (Starter Pack) `
            + spanText("lime","⇒ ") + spanText("red","Priority") +
              spanText("lime"," buy to keep special discount")+
            `<br>
            - Eldership (Epic Pack)<br>
            - Exodus `+spanText("yellow","(Require to have purchased Starter")+
            spanText("lime"," AND ") + spanText("yellow","Epic Packs)")+
            `<br><br>
            And the Wandering ships on a rotation basis,<br>
            `+spanText("yellow","(Require to have purchased Starter")+
            spanText("lime"," OR ")+ spanText("yellow","Epic Packs)") +  
            `<br>
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
    let fork = addEle({dad:right,setClass:"contRow",margin:"-10px 0 0 20px"})
        let forkA = addEle({dad:fork,setClass:"contCol_W"})
        let forkB = addEle({dad:fork,setClass:"contCol_W"})
    for(i=0;i<faqsArray.length;i++)
        {addEle({dad:forkA,setClass:"button1",padding:"10px",
        backG:togNot,
        text:faqsArray[i].label,setFunc:(e)=>{faqButton(e,forkB)}}) }  }

function faqButton(e,subContainerB){
    cleanParent(subContainerB)
    let reFaq = faqsArray.filter(fq=>fq.label===e.srcElement.innerHTML)[0]

    let thisContainer = addEle({dad:subContainerB,padding:"15px",border:"blue solid 3px",
    radius:"30px",backG:'url("./IPM Components/bg.jpg")',fontS:"18px",margin:"10px 0 0 20px",
    display:"flex",flDir:"column",alignItems:"center"})
        if (reFaq.icon){addEle({dad:thisContainer,what:"img",imgFullSrc:"./IPM Components/" + reFaq.icon})}

        addEle({dad:thisContainer,setClass:"texting",text:reFaq.text})

        if (reFaq.url){addEle({dad:thisContainer,url:reFaq.url})}

        if (reFaq.img){addEle({dad:thisContainer,what:"img",imgFullSrc:"./IPM Components/" 
        + reFaq.img,margin:"20px 0"})}

        if(reFaq.thisFunction){reFaq.thisFunction(thisContainer)}
}

function setUnlocks(container){
    let cont = undefined
    txt = "Unlocks"
    addEle({dad:container,text:txt,fontS:"30px",borderB:"solid 3px blue",textC:"fuchsia"})
    
    let unFr = addEle({dad:container,setClass:"contCol",textA:"left",paddingL:"10%"})

    cont = addEle({dad:unFr,setClass:"contRow",alignItems:"center",marginT:"10px"})
        txt = `Reach `+spanText("lime","2nd Galaxy")+` Sale : `
        +spanText("fuchsia","Challenges")+` opens up`
        addEle({dad:cont,text:txt,marginR:"10px"})
        addEle({dad:cont,what:"img",imgSize:30,imgFullSrc:"./IPM Components/challenge.jpg"})
    
    cont = addEle({dad:unFr,setClass:"contRow",alignItems:"center",marginT:"10px"})
        txt = `Sold 2 Galaxies ? :<br>(Mine/Ship/Cargo) `+
        spanText("fuchsia","Planet Upgrade Batches") +` up to `
        addEle({dad:cont,text:txt,marginR:"10px"})
        addEle({dad:cont,what:"img",imgSize:40,imgFullSrc:"./IPM Components/planet buy.jpg"})

    cont = addEle({dad:unFr,setClass:"contRow",alignItems:"center",marginT:"10px"})
        txt = `Reach `+spanText("lime","3rd Galaxy")+` Sale : `+spanText("fuchsia","Tournament")+` opens up`
        addEle({dad:cont,text:txt,marginR:"10px"})
        addEle({dad:cont,what:"img",imgSize:30,imgFullSrc:"./IPM Components/tournament1.jpg"})

    cont = addEle({dad:unFr,setClass:"contRow",alignItems:"center",marginT:"10px"})
        txt = `After selling 4 Galaxies, `+ spanText("fuchsia","new locations") +` opens up,
        <br>and also full access to `+ spanText("fuchsia","autosell mechanics")+` :
        <br>`+spanText("yellow","(press & hold a resource to activate/stop autosell)")
        addEle({dad:cont,text:txt,marginR:"10px"})
        addEle({dad:cont,what:"img",imgSize:40,imgFullSrc:"./IPM Components/event ball.jpg"})
        addEle({dad:cont,what:"img",imgSize:40,imgFullSrc:"./IPM Components/probe hangar.jpg"})
        addEle({dad:unFr,what:"img",height:"80%",width:"80%",marginT:"5px",
        imgFullSrc:"./IPM Components/autosell.jpg"})
}

function showGal100(container){
    let subC = addEle({dad:container,setClass:"contCol",textA:"center",alignItems:"center"})
        addEle({dad:subC,text:spanText("lime","Example of a GV ~100%"),margin:"40px 0 0 0",
        border:"solid 2px green",padding:"20px 108px 20px 109px",radiusTL:"30px",
        radiusTR:"30px",borderB:"none",backC:"black"})
        addEle({dad:subC,what:"img",imgFullSrc:"./IPM Components/gal100.jpg",imgSize:400,
        border:"solid 2px green",borderT:"none",borderB:"none"})//solid 2px black
        addEle({dad:subC,what:"img",imgFullSrc:"./IPM Components/gal100_2.jpg",imgSize:400,
        border:"solid 2px green",radiusBL:"30px",radiusBR:"30px",borderT:"none"})//"solid 2px black"
}

function starPool(container){
    let mycont = addEle({dad:container,setClass:"contCol",border:"solid blue 2px",radius:"10px",
        padding:"10px",alignItems:"center",marginT:"30px"})
        txt = "From what I've seen, the current "+ spanText("lime","starting/minimal star pool") +" contains :"
        addEle({dad:mycont,text:txt})
        txt = `- 5 basic ores (Copper ~ Aluminium)<br>- 5 basic bars/alloys 
        (Copper ~ Aluminium)<br>- 5 basic items (Copper Wire ~ Glass)`
        addEle({dad:mycont,text:txt,textC:"lime"})
}

function setBeacon(container){
    let totalToken = 0
    let tokenCost = 
        [4,8,12,16,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100,105,110,115,120,125,130,140,150,175,200,225,250,300,350,400,500,600,700,800]

    let myC = "darkgreen"
    let bT = addEle({dad:container,what:"table",margin:"0 auto",marginT:"-20px"})
    let bR = addEle({dad:bT,what:"tr"})
        addEle({dad:bR,what:"td",textA:"center",minWidth:"90px",border:"solid 2px "+myC,text:"Lv"})
        addEle({dad:bR,what:"td",textA:"center",minWidth:"60px",border:"solid 2px "+myC,text:"Token<br>Cost"})
        addEle({dad:bR,what:"td",textA:"center",minWidth:"60px",border:"solid 2px "+myC,text:"Mine"})
        addEle({dad:bR,what:"td",textA:"center",minWidth:"60px",border:"solid 2px "+myC,text:"Speed<br>Cargo"})

    for (i=0;i<tokenCost.length;i++){
        totalToken += tokenCost[i]
        bR = addEle({dad:bT,what:"tr"})
            addEle({dad:bR,what:"td",textA:"center",border:"solid 2px "+myC,text:(i+1)})
            addEle({dad:bR,what:"td",textA:"center",border:"solid 2px "+myC,text:tokenCost[i]})
            addEle({dad:bR,what:"td",textA:"center",border:"solid 2px "+myC,text:(1 + (0.02*(i+1))).toFixed(2)})
            addEle({dad:bR,what:"td",textA:"center",border:"solid 2px "+myC,text:(1 + (0.04*(i+1))).toFixed(2)}) }

    bR = addEle({dad:bT,what:"tr"})
        addEle({dad:bR,what:"td",textA:"center",border:"solid 2px "+myC,text:"Total spent"})
        addEle({dad:bR,what:"td",textA:"center",border:"solid 2px "+myC,text:totalToken.toLocaleString()})
}

/*
function AddCell(thisRow){
    let thisCel = document.createElement("td")
    thisCel.style = basicCellStyle
    thisCel.style.minWidth = 60 + "px"
    thisRow.appendChild(thisCel)
    return thisCel
}
*/

function AddADiv(container){
    let item = document.createElement("div")
    item.style.textAlign = "center"
    item.style.alignItems = "center"
    item.style.marginTop = 10 + "px"
    container.appendChild(item)
    return item
}

/*
function AddImg(container,path){
    let img = new Image()
    img.src = path
    img.style.margin = "10px 0 10px 0"
    container.appendChild(img)
    return img
}
*/

function setFleet(container){
    let location = "./IPM Components/"
    let ships = ["daughtership","eldership","exodus","thunderhorse","merchant ship","aurora ship","enigma"]
    let subC = addEle({dad:container,setClass:"contCol",marginT:"20px"})
    for(let i = 0;i<3;i++){
        addEle({dad:subC,what:"img",imgFullSrc:UseR.gameLook === "Old" ? 
        location + ships[i] + ".jpg" : location + ships[i] + "n.jpg",
        margin:"5px",border:"solid 2px yellow",radius:"30px"})
    }

    addEle({dad:subC,border:"yellow solid 2px",margin:"50px 0"})

    for(let i = 3;i<ships.length;i++){ 
        addEle({dad:subC,what:"img",imgFullSrc:UseR.gameLook === "Old" ? 
        location + ships[i] + ".jpg" : location + ships[i] + "n.jpg",
        margin:"5px",border:"solid 2px yellow",radius:"30px"})
    } 
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

    let table = addEle({dad:container,what:"table",margin:"0 auto",marginT:"-20px"})
    for (i=0;i<challenge.length;i++){
        let tr = addEle({dad:table,what:"tr"})
            addEle({dad:tr,what:"td",text:challenge[i].value,minWidth:"70px",border:"solid 2px teal",
            textA:"left",paddingL:"30px"})
            addEle({dad:tr,what:"td",text:i+1,minWidth:"65px",border:"solid 2px teal",textA:"center"})
            addEle({dad:tr,what:"td",text:challenge[i].dm,minWidth:"65px",border:"solid 2px teal",textA:"center"})
    }
}

const experiment = [ 
    {label:"Copper",info:[
        {low:1,high:undefined,lowV:`sorry Douche-bagger here<br>sitting in `+spanText("red","*ab*")+spanText("lime"," Magnitude"),highV:undefined},
        {low:2,high:undefined,lowV:`sitting at `+spanText("lime","11 T"),highV:undefined},
        {low:3,high:5,lowV:"30B",highV:"50B"},
        {low:6,high:10,lowV:"13B",highV:"29B"},
        {low:11,high:20,lowV:"4B",highV:"12B"},
        {low:21,high:30,lowV:"1.5B",highV:"3.5B"},
        {low:31,high:40,lowV:"30B",highV:"50B"},
        {low:41,high:50,lowV:"30B",highV:"50B"},
        {low:51,high:75,lowV:"30B",highV:"50B"},
    ]},

    {label:"Silver",info:[
        {low:1,high:undefined,lowV:"76Q",highV:undefined},
        {low:2,high:undefined,lowV:"122q",highV:undefined},
        {low:3,high:5,lowV:"154T",highV:"823T"},
        {low:6,high:10,lowV:"13T",highV:"146T"},
        {low:11,high:20,lowV:"1.4T",highV:"7T"},
        {low:21,high:30,lowV:"220B",highV:"1.3T"},
        {low:31,high:40,lowV:"136B",highV:"219B"},
        {low:41,high:50,lowV:"55B",highV:"123B"},
        {low:51,high:75,lowV:"13B",highV:"53B"},
        {low:76,high:100,lowV:"246M",highV:"11B"},
    ]},

    {label:"Gold",info:[
        {low:1,high:undefined,lowV:"25s",highV:undefined},
        {low:2,high:undefined,lowV:"3s",highV:undefined},
        {low:3,high:4,lowV:"513Q",highV:"802Q"},
        {low:5,high:7,lowV:"4Q",highV:"17Q"},
        {low:8,high:10,lowV:"161q",highV:"743q"},
        {low:11,high:13,lowV:"7q",highV:"146q"},
        {low:14,high:16,lowV:"381T",highV:"2q"},
        {low:17,high:20,lowV:"70T",highV:"380T"},
        {low:21,high:30,lowV:"1.7T",highV:"55T"},
        {low:31,high:40,lowV:"351B",highV:"935B"},
    ]},

    {label:"Platinum",info:[
        {low:1,high:undefined,lowV:"486O",highV:undefined},
        {low:2,high:undefined,lowV:"143O",highV:undefined},
        {low:3,high:4,lowV:"3.3S",highV:"2.6O"},
        {low:5,high:7,lowV:"337s",highV:"1.7S"},
        {low:8,high:10,lowV:"71s",highV:"167s"},
        {low:11,high:13,lowV:"11s",highV:"34s"},
        {low:14,high:16,lowV:"3.7s",highV:"10s"},
        {low:17,high:20,lowV:"585Q",highV:"3.5s"},
        {low:21,high:25,lowV:"34q",highV:"487Q"},
        {low:26,high:30,lowV:"675T",highV:"6q"},    
    ]},

]


function dispExp(e){
    let thisFr = getID("expTable")
    cleanParent(thisFr)

    for(let i=0;i<getID("expBtns").children.length;i++){getID("expBtns").children[i].style.background = togNot}
    e.srcElement.style.background = togSel
    let ref = experiment.filter(itm=>itm.label===e.srcElement.innerHTML)[0].info

    let tb = addEle({dad:thisFr,what:"table",margin:"auto"})
    ref.forEach(ln=>{
        let tr = addEle({dad:tb,what:"tr"})
            txt = ln.high===undefined ? "Rank ["+spanText("lime",ln.low)+"]" :
            "Rank ["+spanText("lime",ln.low+"~"+ln.high)+"]"
            addEle({dad:tr,what:"td",text:txt,textA:"left",padding:"10px",border:"blue solid 2px",radius:"5px"})

            txt = ln.highV===undefined ? ln.lowV :
            "Reach "+spanText("lime",ln.lowV+" ~ "+ln.highV)
            addEle({dad:tr,what:"td",text:txt,textA:"left",padding:"10px",border:"blue solid 2px",radius:"5px"})
    })
}

function setTournament(container){
    let expCol = "brown"

    let warnLb = addEle({dad:container,setClass:"contRow",border:"solid 2px "+expCol,radius:"10px",
    alignItems:"center",padding:"5px 10px",minWidth:"90%",justifyC:"center"})
        addEle({dad:warnLb,text: spanText("yellow","⚠ - Warning - ⚠"),borderB:"red solid 3px",textA:"center",fontS:"22px"})
        addEle({dad:warnLb,text:"🔽",border:"solid 2px "+expCol,padding:"2px",cursor:"pointer",
        marginL:"30px",setID:"togWarnFr",radius:"10px",setFunc:()=>{
            getID("warnFr").style.display = getID("warnFr").style.display === "none" ? "flex" : "none"
            getID("togWarnFr").innerHTML = getID("togWarnFr").innerHTML === "🔽" ? "🔼" : "🔽"
        }})

    let warnFr = addEle({dad:container,setClass:"contCol",border:"solid 2px "+expCol,padding:"10px",
    width:"100%",textA:"center",setID:"warnFr",radius:"10px",display:"none",alignItems:"center"})
        addEle({dad:warnFr,text:`
        It is common to have some bugs related to tournaments.<br>
        Some people will never experience such, some will.<br>
        Whether it is USER responsability : "uncommon gaming practices",<br>
        or GAME having an issue, in order to attempt getting support<br>
        to help you, it is wise keeping some screenshots ...<br><br>
        `+spanText("yellow",`
        (If a game update is available in the store, do it before entering<br>
        tournament or after your are done with the tournament as it may<br>
        cause a bug for tournament stability)`)+`<br><br>
        Those are my recommendations :<br>`+spanText("yellow","(send screenshots in full dont crop !)")+`<br><br>
        `+spanText("lime","1")+` - The player ID : when you instal the game you can do it anytime<br>`+spanText("yellow",
        "(found under settings)")+`<br><br>
        `+spanText("lime","2")+` - The stats/legacy ⇒ Badges(stars) : Every Tournament<br>(before/during) <br><br>
        `+spanText("lime","3")+` - Your Ranking evolution : As many time as you want, keeping<br>
        a fresh view of your progression, in case of any trouble.<br>
        (**Last screenshot only for support if needs be**)<br><br>
        `
        ,textA:"left"})
        addEle({dad:warnFr,margin:"10px 0",text:spanText("lime",
        `Screenshots 2 & 3 will help you check if you missed the<br>
        pop-up window and want to verify if you got rewarded.`)})
        addEle({dad:warnFr,what:"img",imgFullSrc:"./IPM Components/secure1.jpg",img2Sizes:"300:530",
        margin:"10px 0",border:"blue solid 2px",radius:"10px"})
        addEle({dad:warnFr,what:"img",imgFullSrc:"./IPM Components/secure2.jpg",img2Sizes:"300:530",
        margin:"10px 0",border:"blue solid 2px",radius:"10px"})
        addEle({dad:warnFr,what:"img",imgFullSrc:"./IPM Components/secure3.jpg",img2Sizes:"300:530",
        margin:"10px 0",border:"blue solid 2px",radius:"10px"})

    let expFrLb = addEle({dad:container,setClass:"contRow",border:"solid 2px "+expCol,radius:"10px",
    alignItems:"center",padding:"5px 10px",marginT:"20px",minWidth:"90%",justifyC:"center"})
        addEle({dad:expFrLb,text: spanText("lime","Glimpse on Potential Future Tournaments... 👀")})
        addEle({dad:expFrLb,text:"🔽",border:"solid 2px "+expCol,padding:"2px",cursor:"pointer",
        marginL:"10px",setID:"togExpFr",radius:"10px",setFunc:()=>{
            getID("expFr").style.display = getID("expFr").style.display === "none" ? "flex" : "none"
            getID("togExpFr").innerHTML = getID("togExpFr").innerHTML === "🔽" ? "🔼" : "🔽"
        }})


    txt = `( based on mid April ~ mid June 2024 test drives )<br>` + spanText("yellow",
    `** Every bracket is a new lotery. This section may or not<br>be close to what you
     will experience yourself **`) + `<br><br>`+spanText("red","Warning")+` : Sand(or Douche)-Baggers 
     ... might pop around ...`

    let expFr = addEle({dad:container,setClass:"contCol",border:"solid 2px "+expCol,padding:"10px",
    width:"100%",textA:"center",setID:"expFr",radius:"10px",display:"none"})
        addEle({dad:expFr,text:txt})
        addEle({dad:expFr,setClass:"contRow",justifyC:"space-between",padding:"0 10px",setID:"expBtns"})
            addEle({dad:getID("expBtns"),setClass:"button1",text:"Copper",minWidth:"100px",backG:togNot,
            cursor:"pointer",setID:0,setFunc:dispExp})
            addEle({dad:getID("expBtns"),setClass:"button1",text:"Silver",minWidth:"100px",backG:togNot,
            cursor:"pointer",setID:1,setFunc:dispExp})
            addEle({dad:getID("expBtns"),setClass:"button1",text:"Gold",minWidth:"100px",backG:togNot,
            cursor:"pointer",setID:2,setFunc:dispExp})
            addEle({dad:getID("expBtns"),setClass:"button1",text:"Platinum",minWidth:"100px",backG:togNot,
            cursor:"pointer",setID:3,setFunc:dispExp})
        addEle({dad:expFr,setID:"expTable",justifyC:"center"})
        getID("expBtns").children[0].click()


    let mainFrame = addEle({dad:container,border:"yellow 1px solid",radius:"10px",marginT:"20px",padding:"10px"})
    let location = "./IPM Components/"

    addEle({dad:mainFrame,fontS:"22px",margin:"10px 0",borderB:"yellow solid 2px",text:"Infos & rewards",textA:"center"})
        let table = addEle({dad:mainFrame,what:"table",margin:"0 auto",marginB:"10px"})
            let tr = addEle({dad:table,what:"tr"})

            let td = addEle({dad:tr,what:"td",setClass:"button1",minWidth:"60px",text:"Infos",
            backG:togNot,setFunc:()=>{
                cleanParent(subFrame)
                addEle({dad:subFrame,what:"img",imgFullSrc:location + "tournament2.jpg",
                display:"block",marginL:"auto",marginR:"auto"})
                subFrame.style.height = "630px" }})

            td = addEle({dad:tr,what:"td",setClass:"button1",minWidth:"60px",text:"[ *?!* ]",
            backG:togNot,setFunc:()=>{

                cleanParent(subFrame)
                let subC = addEle({dad:subFrame,setClass:"contRow",justifyC:"center"})
                addEle({dad:subC,what:"img",imgFullSrc:location + "tournament3.jpg",marginB:"10px"})

                addEle({dad:subFrame,textA:"left",marginL:"40px",height:"550px",overflowX:"hidden",
                text:`
                - Retire ? Sure why not ... whatever the reason,<br>
                your position will remain, and IF no other<br>
                player is able to go past you during remaining<br>
                time, reward will be yours at the end of timer.<br>
                Otherwise, new position"s reward if any.<br><br>
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
                (Only [Save] is available during a tourney anyways)<br>
                Traveling sometime is a bug cause, especialy<br>
                crossing time zones. When facing a big badabug,<br>
                screen shots/Player ID ready ⇒ contact Support 
                `})
                subFrame.style.height = "630px"
            }})

            td = addEle({dad:tr,what:"td",setClass:"button1",minWidth:"60px",text:"Copper",
            backG:togNot,setFunc:()=>{
                cleanParent(subFrame)
                addEle({dad:subFrame,what:"img",imgFullSrc:location + "tournament rewards1.jpg",
                display:"block",marginL:"auto",marginR:"auto"})
                addEle({dad:subFrame,text:"Rank 25 and better get promoted to the next league",
                textA:"center",marginT:"20px",textC:"deepskyblue"})
                subFrame.style.height = "630px"
            }})
            td = addEle({dad:tr,what:"td",setClass:"button1",minWidth:"60px",text:"Silver",
            backG:togNot,setFunc:()=>{
                cleanParent(subFrame)
                addEle({dad:subFrame,what:"img",imgFullSrc:location + "tournament rewards2.jpg",
                display:"block",marginL:"auto",marginR:"auto"})
                addEle({dad:subFrame,text:`Rank 25 and better get promoted to the next league<br>
                <br>Rank 75 and worse get demoted`,textA:"center",marginT:"20px",textC:"deepskyblue"})
                subFrame.style.height = "630px"
            }})
            td = addEle({dad:tr,what:"td",setClass:"button1",minWidth:"60px",text:"Gold",
            backG:togNot,setFunc:()=>{
                cleanParent(subFrame)
                addEle({dad:subFrame,what:"img",imgFullSrc:location + "tournament rewards3.jpg",
                display:"block",marginL:"auto",marginR:"auto"})
                addEle({dad:subFrame,text:`Rank 10 and better get promoted to the next league<br>
                <br>Rank 30 and worse get demoted`,textA:"center",marginT:"20px",textC:"deepskyblue"})
                subFrame.style.height = "630px"
            }})
            td = addEle({dad:tr,what:"td",setClass:"button1",minWidth:"60px",text:"Platinum",
            backG:togNot,setFunc:()=>{
                cleanParent(subFrame)
                addEle({dad:subFrame,what:"img",imgFullSrc:location + "tournament rewards4.jpg",
                display:"block",marginL:"auto",marginR:"auto"})
                addEle({dad:subFrame,text:"Rank 22 and worse get demoted",
                textA:"center",marginT:"20px",textC:"deepskyblue"})

                subFrame.style.height = "630px"
            }})
    let subFrame = addEle({dad:mainFrame})
}

function setManagers(container){
    let location = "./IPM Components/"

    addEle({dad:container,setClass:"button1",text:"Recruit",width:"90%",
    backG:togNot,setFunc:()=>{
        getID("managerTab").style.display = "none"
        getID("recruit").style.display = getID("recruit").style.display === "none" ? "block" : "none"
    }})

    addEle({dad:container,setClass:"button1",text:"Manager Tab",width:"90%",
    backG:togNot,setFunc:()=>{
        getID("recruit").style.display = "none"
        getID("managerTab").style.display = getID("managerTab").style.display === "none" ? "block" : "none"
    }})

    addEle({dad:container,border:"solid blue 2px",radius:"10px",padding:"5px",
    display:"none",minWidth:"425px",setID:"recruit",textA:"center"})

        addEle({dad:getID("recruit"),setClass:"texting",text:"Hire a Manager with a random star level 1~3"})
        addEle({dad:getID("recruit"),what:"img",margin:"10px 0",imgFullSrc:location + "manager2.jpg"})

        addEle({dad:getID("recruit"),setClass:"texting",text:"Hire a Manager with a random star level 3~4"})
        addEle({dad:getID("recruit"),what:"img",margin:"10px 0",imgFullSrc:location + "manager3.jpg"})

        addEle({dad:getID("recruit"),setClass:"texting",text:"Hire a Manager with a random star level 4~5"})
        addEle({dad:getID("recruit"),what:"img",margin:"10px 0",imgFullSrc:location + "manager4.jpg"})

        addEle({dad:getID("recruit"),setClass:"texting",text:`Button will show Dark Matter cost OR<br>
        how many free pulls you own (Rover reward)`})
        addEle({dad:getID("recruit"),what:"img",margin:"10px 0",imgFullSrc:location + "manager5.jpg"})

        addEle({dad:getID("recruit"),setClass:"texting",text:`You can even check the odds of stars quality<br>
        if you click on [( i ) Odds] down the page`})
        addEle({dad:getID("recruit"),what:"img",margin:"10px 0",imgFullSrc:location + "manager6.jpg"})

    addEle({dad:container,border:"solid blue 2px",radius:"10px",padding:"5px",
    display:"none",minWidth:"425px",setID:"managerTab",textA:"center"})
        addEle({dad:getID("managerTab"),what:"img",margin:"10px 0",imgFullSrc:location + "manager7.jpg"})

        let managerTxt = `
        This Tab is where you manage your flock ...<br><br>
        The top line help you select managers by filtering<br>
        also it shows under [actions] > [stats] some<br>
        interesting details about your managers bonuses.<br>
        ... and how many are idle / total of managers.<br><br>
        When you cant find some managers they are either<br>
        working on a planet or hidden by a filter.<br><br>
        `
        addEle({dad:getID("managerTab"),textA:"left",marginL:"10px",text:managerTxt})

        managerTxt = "***<br><br>[!] Tap and hold a manager to access his details [!]<br>"
        addEle({dad:getID("managerTab"),marginL:"10px",text:managerTxt})
        addEle({dad:getID("managerTab"),what:"img",margin:"10px 0",imgFullSrc:location + "manager8.jpg"})

        managerTxt = `
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
        and/or applied to all planets depending on the skill.<br><br>

        The Best manager you can reach is a 7 star that will be<br>
        displayed as a 6-RED-Stars instead of 7 stars.
        `
        addEle({dad:getID("managerTab"),textA:"left",margin:"0 0 20px 10px",text:managerTxt})
}


function setCrafters(container){
    let btImg = addEle({dad:container,setClass:"contRow",justifyC:"center"})
        addEle({dad:btImg,what:"img",imgSize:80,padding:"5px",border:"red solid 2px",
        radius:"5px", imgFullSrc:"./IPM Components/preferred vendor.jpg",marginT:"30px"})
    let myCont = addEle({dad:container,setClass:"contRow",justifyC:"space-around",marginT:"30px"})
        let forkA = addEle({dad:myCont,setClass:"contCol",textA:"center"})
            addEle({dad:forkA,text:"Smelters"})
        let forkB = addEle({dad:myCont,setClass:"contCol",textA:"center"})
            addEle({dad:forkB,text:"Crafters"})
    smeltCraftTable(forkA,smeltersArray)
    smeltCraftTable(forkB,craftersArray)
}

function smeltCraftTable(container,array){
    let myT = addEle({dad:container,what:"table",border:"red solid 2px",margin:"0 5px",radius:"5px"})
    let myL = addEle({dad:myT,what:"tr"})
    for(let i=0;i<array.length;i++){
        addEle({dad:myL,what:"td",text:array[i],border:"solid 2px blue",radius:"5px",padding:"5px",
        backC:i===0 ? "green":""})
        if(i % 2!==0){myL = addEle({dad:myT,what:"tr"})}
    }
}


let credits101 = [{credits:10,gv:"10",mag:"M"},{credits:11,gv:"12.51",mag:"M"},{credits:12,gv:"17.51",mag:"M"},
                {credits:13,gv:"22.51",mag:"M"},{credits:14,gv:"27.51",mag:"M"},{credits:15,gv:"32.51",mag:"M"},
                {credits:16,gv:"37.51",mag:"M"},{credits:17,gv:"42.51",mag:"M"},{credits:18,gv:"47.51",mag:"M"},
                {credits:19,gv:"52.51",mag:"M"},{credits:20,gv:"57.51",mag:"M"},{credits:21,gv:"62.51",mag:"M"},
                {credits:22,gv:"67.51",mag:"M"},{credits:23,gv:"72.51",mag:"M"},{credits:24,gv:"77.51",mag:"M"},
                {credits:25,gv:"82.51",mag:"M"},{credits:26,gv:"87.51",mag:"M"},{credits:27,gv:"92.51",mag:"M"},
                {credits:28,gv:"97.51",mag:"M"},{credits:29,gv:"NA",mag:""},{credits:30,gv:"100",mag:"M"},
                {credits:31,gv:"117",mag:"M"},{credits:32,gv:"150",mag:"M"},{credits:33,gv:"183.5",mag:"M"},
                {credits:34,gv:"217",mag:"M"},{credits:35,gv:"250",mag:"M"},{credits:36,gv:"283.5",mag:"M"},
                {credits:37,gv:"317",mag:"M"},{credits:38,gv:"350",mag:"M"},{credits:39,gv:"383.5",mag:"M"},
                {credits:40,gv:"417",mag:"M"},{credits:41,gv:"450",mag:"M"},{credits:42,gv:"483.5",mag:"M"},
                {credits:43,gv:"517",mag:"M"},{credits:44,gv:"550",mag:"M"},{credits:45,gv:"583.5",mag:"M"},
                {credits:46,gv:"617",mag:"M"},{credits:47,gv:"650",mag:"M"},{credits:48,gv:"683.5",mag:"M"},
                {credits:49,gv:"717",mag:"M"},{credits:50,gv:"750",mag:"M"},{credits:51,gv:"783.5",mag:"M"},
                {credits:52,gv:"817",mag:"M"},{credits:53,gv:"850",mag:"M"},{credits:54,gv:"883.5",mag:"M"},
                {credits:55,gv:"917",mag:"M"},{credits:56,gv:"950",mag:"M"},{credits:57,gv:"984",mag:"M"},
                {credits:58,gv:"NA",mag:""},{credits:59,gv:"NA",mag:""},{credits:60,gv:"1",mag:"B"},
                {credits:61,gv:"1.13",mag:"B"},{credits:62,gv:"1.37",mag:"B"},{credits:63,gv:"1.61",mag:"B"},
                {credits:64,gv:"1.86",mag:"B"},{credits:65,gv:"2.11",mag:"B"},{credits:66,gv:"2.35",mag:"B"},
                {credits:67,gv:"2.59",mag:"B"},{credits:68,gv:"2.84",mag:"B"},{credits:69,gv:"3.08",mag:"B"},
                {credits:70,gv:"3.33",mag:"B"},{credits:71,gv:"3.56",mag:"B"},{credits:72,gv:"3.81",mag:"B"},
                {credits:73,gv:"4.06",mag:"B"},{credits:74,gv:"4.3",mag:"B"},{credits:75,gv:"4.54",mag:"B"},
                {credits:76,gv:"4.79",mag:"B"},{credits:77,gv:"5.03",mag:"B"},{credits:78,gv:"5.28",mag:"B"},
                {credits:79,gv:"5.52",mag:"B"},{credits:80,gv:"5.76",mag:"B"},{credits:81,gv:"6.01",mag:"B"},
                {credits:82,gv:"6.25",mag:"B"},{credits:83,gv:"6.49",mag:"B"},{credits:84,gv:"6.74",mag:"B"},
                {credits:85,gv:"6.98",mag:"B"},{credits:86,gv:"7.23",mag:"B"},{credits:87,gv:"7.48",mag:"B"},
                {credits:88,gv:"7.73",mag:"B"},{credits:89,gv:"7.96",mag:"B"},{credits:90,gv:"8.2",mag:"B"},
                {credits:91,gv:"8.44",mag:"B"},{credits:92,gv:"8.69",mag:"B"},{credits:93,gv:"8.94",mag:"B"},
                {credits:94,gv:"9.18",mag:"B"},{credits:95,gv:"9.42",mag:"B"},{credits:96,gv:"9.67",mag:"B"},
                {credits:97,gv:"9.91",mag:"B"},{credits:98,gv:"NA",mag:""},{credits:99,gv:"NA",mag:""},
                {credits:100,gv:"NA",mag:""},{credits:101,gv:"10",mag:"B"},]

function setCredits(container){

let ipmmc1 = `
The ` + spanText("lime","IPM - M") + `oral ` + spanText("lime","C") + `ontract :<br>
Sell galaxy > Base Reward > [ i ]<br>`

let ipmmc2 = `
... Is the override when the<br>
next credit reward is evaluated.<br>
( picture it as the ring of power in<br>
LOTR : ruling them all, if you'd like )<br><br>

In short every ` + spanText("fuchsia","X increment") + `  a 1 credit<br>
Is added to the base value until this<br>
calculation breaks because you<br>
reached the ` + spanText("lime","IPM - MC") + `  ` + spanText("fuchsia","ranged value Y") + `.<br><br>

As a result(1) : you can get a few more<br>
bucks for your time when crossing<br>
a shown range in IPM - MC.<br><br>

This is confirmed  when for exemple :<br>
- 1) your base reward credit shows 28<br>
- 2) ... you are waiting for the 29th to be added<br>
- 3) ... and Suddenly it jumps from 28 to 30<br><br>

As a result(2) : This tool will return `+ spanText("fuchsia","NA") +`<br>
( as in `+ spanText("fuchsia","N") +`ot `+ spanText("fuchsia","A") +`vailable ) if you input 29 or<br>
a similar value that wont be incremented.<br>
`

    let subCont1 = addEle({dad:container,setClass:"contRow",width:"100%"})
        addEle({dad:subCont1,text:"10 to 101 (base)credits",setClass:"button1",width:"85%",
        backG:"linear-gradient(to top right,rgba(169,169,169,1),rgba(106,90,205,0.5) 70%)",
        textC:"black",cursor:"text"})
        
        addEle({dad:subCont1,setClass:"button1",border:"slateblue solid 2px",text:"🔽",minWidth:"20px",setFunc:(e)=>{
            e.srcElement.innerHTML = e.srcElement.innerHTML === "🔽" ? "🔼" : "🔽"
            getID("credits10101infos").style.display = getID("credits10101infos").style.display==="none"?"flex":"none"
        }})

    let subCont2 = addEle({dad:container,setClass:"contRow",border:"slateblue solid 2px",radius:"5px",
        setID:"targetCreditFr",padding:"10px",marginB:"20px"})
            addEle({dad:subCont2,text:"Target Credits (10~101) :"})
            addEle({dad:subCont2,what:"input",isInput:true,setVal:0,width:"30px",textA:"center",margin:"0 10px",setFunc:(e)=>{
                let thisIdx = credits101.findIndex(itm=>itm.credits===Number(e.srcElement.value))
                let baseTxt = "=> GV : "
                if(thisIdx>-1){
                    baseTxt += credits101[thisIdx].gv === "NA" ?
                    spanText("fuchsia","NA") : credits101[thisIdx].gv + " " + credits101[thisIdx].mag
                    getID("credits101").innerHTML =  baseTxt
                } else {
                    getID("credits101").innerHTML =  baseTxt + spanText("fuchsia","NA")
                }
                
            }})
            addEle({dad:subCont2,setID:"credits101",text:"=> GV : "+spanText("fuchsia","NA")})
    
    let subCont3 = addEle({dad:container,setClass:"contCol",border:"slateblue solid 2px",radius:"5px",
    setID:"credits10101infos",padding:"20px 25px",display:"none"})
        addEle({dad:subCont3,text:ipmmc1})
        addEle({dad:subCont3,margin:"10px 0",what:"img",imgSize:200,
        imgFullSrc:"./IPM Components/ipmmc.jpg",radius:"10px"})
        addEle({dad:subCont3,text:ipmmc2})


    subCont1 = addEle({dad:container,setClass:"contRow",width:"100%",justifyC:"center"})
        addEle({dad:subCont1,text:"Credit Boosters",setClass:"button1",width:"70%",cursor:"text",
        backG:"linear-gradient(to bottom left,rgba(255,69,0,0.6) 80%,rgba(255,160,122,1))",textC:"black"})

        addEle({dad:subCont1,setClass:"button1",border:"slateblue solid 2px",text:"⚙ 🔽",minWidth:"20px",setFunc:(e)=>{
            e.srcElement.innerHTML = e.srcElement.innerHTML === "⚙ 🔽" ? "⚙ 🔼" : "⚙ 🔽"
            getID("creditsBoostersFr").style.display = getID("creditsBoostersFr").style.display==="none"?"flex":"none"
        }})

    subCont1 = addEle({dad:container,setClass:"contCol",setID:"creditsBoostersFr",display:"none",
    border:"solid 2px orangered",textA:"center",padding:"10px",radius:"10px"})

/*    
        addEle({dad:subCont1,text:"Under Construction...",textC:"yellow"})
        addEle({dad:subCont1,what:"img",imgFullSrc:"./IPM Components/construction.jpg"})
        addEle({dad:subCont1,text:"Under Construction...",textC:"yellow"})
*/

        addEle({dad:subCont1,setClass:"button1",padding:"10px",radius:"10px",fontS:"18px",
        text:"Set ⇔ Test : Credit Boosters you own<br>(Test future boosters you do not own yet !)",
        backG:"linear-gradient(to bottom left,rgba(255,69,0,0.6) 80%,rgba(255,160,122,1))",textC:"black",
        setFunc:boostersPop})

        addEle({dad:subCont1,text:spanText("lime","(Ma)")+"gnitudes Chart by :",marginB:"10px"})

        subCont2 = addEle({dad:subCont1,setClass:"contRow",justifyC:"center",marginB:"10px"})
            addEle({dad:subCont2,border:"blue solid 2px",radiusTL:"10px",radiusBL:"10px",minWidth:"120px",
            backG:"linear-gradient(to bottom left,rgba(255,69,0,0.6) 80%,rgba(255,160,122,1))",textC:"black",
            cursor:"pointer",padding:"5px", text:"Base Credits",setFunc:()=>{updateCredits()}})
            
            addEle({dad:subCont2,border:"blue solid 2px",radiusTR:"10px",radiusBR:"10px",minWidth:"120px",
            backG:"linear-gradient(to bottom left,rgba(255,69,0,0.6) 80%,rgba(255,160,122,1))",textC:"black",
            cursor:"pointer",padding:"5px",text:"Boosted Credits",setFunc:()=>{updateCredits(true)}})


    myCont = addEle({dad:container,setClass:"contCol",marginT:"20px",setID:"creditTableFr"})
    updateCredits()

}

function boostersPop(){

    projectPop = addEle({dad:body,padding:"15px",border:"blue solid 3px",radius:"30px",
    backG:'url("./IPM Components/bg.jpg")',fontS:"18px",width:"fit-content"})

    let pad = 3 + "px"

    subCont2 = addEle({dad:projectPop})
    let myT = addEle({dad:subCont2,what:"table"})
    let myL = addEle({dad:myT,what:"tr"})

        let myC = addEle({dad:myL,what:"td",border:"solid 2px blue",radius:"5px",textA:"center"
        ,colSpan:4,text:"To test a "+spanText("lime","BC")+" amount, type it here ⇒",fontS:"16px",padding:pad})

        myC = addEle({dad:myL,what:"td",border:"solid 2px blue",radius:"5px",textA:"center"})
            addEle({dad:myC,what:"input",isInput:true,setVal:0,setID:"credBCUser",textA:"center",width:"100px",
            setFunc:(e)=>{
                let stw = true

                let refN = undefined

                if(e.srcElement.value.includes(","))
                     {refN = e.srcElement.value.replace(",",".")} 
                else {refN = e.srcElement.value}

                if(refN.includes("k") || refN.includes("K") ){
                    let filt = ""
                    for(let i=0;i<refN.toLowerCase().split("k").length;i++){
                        filt += refN.toLowerCase().split("k")[i]
                    } refN = Number(filt)*1000
                } 

                if(isNaN(refN))
                     {getID("credBC").innerHTML = spanText("fuchsia","NA")}
                else {getID("credBC").innerHTML = refN ;  boostCredits(Number(refN),true)}
                
            }})

        myL = addEle({dad:myT,what:"tr"})
            addEle({dad:myL,what:"td",radius:"5px",textA:"center",colSpan:5,padding:pad,
            text:`* `+spanText("lime","BC")+` ⇒ Base Credits ... `+spanText("lime","SS")+` ⇒ Space Station *<br>
            (If you see `+spanText("fuchsia","NA")+` input number is not valid, calculation stopped )`
            })


    myL = addEle({dad:myT,what:"tr"})

        addEle({dad:myL,what:"td",border:"solid 2px blue",radius:"5px",textA:"center",padding:pad,
        setID:"credSliderLabel",text:"- - - -",minWidth:"70px"})

        myC = addEle({dad:myL,what:"td",border:"solid 2px blue",radius:"5px",textA:"center",padding:pad})
            addEle({dad:myC,what:"range",isInput:true,min:0,max:0,setVal:0,width:"100px",
            setID:"credSlider",setFunc:upCredSlider})

        addEle({dad:myL,what:"td",border:"solid 2px blue",radius:"5px",textA:"center",padding:pad,
        text:"🔼",minWidth:"80px",cursor:"pointer",setFunc:()=>{getID("credSlider").value ++ ; upCredSlider() }})

        addEle({dad:myL,what:"td",border:"solid 2px blue",radius:"5px",textA:"center",padding:pad,
        text:"🔽",minWidth:"100px",cursor:"pointer",setFunc:()=>{getID("credSlider").value -- ; upCredSlider() }}) 

        addEle({dad:myL,what:"td",border:"solid 2px blue",radius:"5px",textA:"center",setID:"credBC",
        padding:pad,text:0})
        
    myL = addEle({dad:myT,what:"tr"})
    addEle({dad:myL,what:"td",radius:"5px",textA:"left",padding:"3px 3px 3px 10PX",colSpan:5,text:spanText("lime","👇")+
    " Pick a Bonus and adjust its level "+spanText("lime","👆")})


    myL = addEle({dad:myT,what:"tr"})

        let ref = Rooms.filter(rm=>rm.label==="Lounge")[0]
        myC = addEle({dad:myL,what:"td",border:"solid 2px blue",radius:"5px",textA:"center",padding:pad})
        addEle({dad:myC,what:"radio",isInput:true,setVal:ref.label,setName:"credRadio",setFunc:()=>{
            let ref = Rooms.filter(rm=>rm.label==="Lounge")[0]
            getID("credSliderLabel").innerHTML = ref.label
            getID("credSlider").min = 0
            getID("credSlider").max = ref.costs.length +1
            getID("credSlider").value = Number(UseR.credits.lounge)
        }})

        addEle({dad:myL,what:"td",border:"solid 2px blue",radius:"5px",textA:"center",padding:pad,
        text:"Room : Lounge",setID:"cred:Lounge:Label"})

        addEle({dad:myL,what:"td",border:"solid 2px blue",radius:"5px",textA:"center",padding:pad,
        text:"Level : "+UseR.credits.lounge,setID:"cred:Lounge:Level"})

        let bon = Rooms.filter(rm=>rm.label==="Lounge")[0].bonus
        txt = Number(UseR.credits.lounge) === 0 ? 0 : (bon.base + bon.start + ((txt-1)*bon.every)).toFixed(2)
        addEle({dad:myL,what:"td",border:"solid 2px blue",radius:"5px",textA:"center",padding:pad,
        text:"Bonus : "+txt,setID:"cred:Lounge:Bonus"})

        addEle({dad:myL,what:"td",border:"solid 2px blue",radius:"5px",textA:"center",padding:pad,
        setID:"cred:Lounge:Payout",text:0})


    let ssc = stationCells.filter(itm=>itm.label.includes("credits"))
    for(let i=0;i<ssc.length;i++){
        myL = addEle({dad:myT,what:"tr"})

            myC = addEle({dad:myL,what:"td",border:"solid 2px blue",radius:"5px",textA:"center"})
            addEle({dad:myC,what:"radio",isInput:true,setVal:"Lounge",setName:"credRadio",
            setID:"cred:"+ssc[i].label,setFunc:(e)=>{
                let ref = stationCells.filter(cel=>cel.label.includes(e.srcElement.id.split(":")[1]))[0]
                getID("credSliderLabel").innerHTML = ref.label
                getID("credSlider").min = 0
                getID("credSlider").max = ref.maxLevel
                getID("credSlider").value = UseR.credits.station[(Number(ref.label.split("#")[1])-1)]
            }})

            addEle({dad:myL,what:"td",border:"solid 2px blue",radius:"5px",textA:"center",padding:pad,
            text:"SS:"+ssc[i].label,setID:"cred:"+ssc[i].label+":Label"})
            
            addEle({dad:myL,what:"td",border:"solid 2px blue",radius:"5px",textA:"center",padding:pad,
            text:"Level : "+UseR.credits.station[(Number(ssc[i].label.split("#")[1])-1)],
            setID:"cred:"+ssc[i].label+":Level"})

            txt = UseR.credits.station[Number(ssc[i].label.split("#")[1])-1] === 0 ? 0 :
            ((UseR.credits.station[(Number(ssc[i].label.split("#")[1])-1)] * ssc[i].bonusPerLevel)+1).toFixed(3)
            addEle({dad:myL,what:"td",border:"solid 2px blue",radius:"5px",textA:"center",padding:pad,
            text:"Bonus : "+txt,setID:"cred:"+ssc[i].label+":Bonus"})
}

    myL = addEle({dad:myT,what:"tr"})

        addEle({dad:myL,what:"td"})

        addEle({dad:myL,what:"td",border:"solid 2px blue",radius:"5px",textA:"right",padding:pad,
        paddingR:"10px", text:"SS Global Bonus :",colSpan:2})

        addEle({dad:myL,what:"td",border:"solid 2px blue",radius:"5px",textA:"center",padding:pad,
        text:0,setID:"cred:Station:Bonus"})

        addEle({dad:myL,what:"td",border:"solid 2px blue",radius:"5px",textA:"center",padding:pad,
        setID:"cred:Station:Payout",text:0})

    myL = addEle({dad:myT,what:"tr"})

        myC = addEle({dad:myL,what:"td",border:"solid 2px blue",radius:"5px",textA:"center",padding:pad})
            addEle({dad:myC,what:"checkbox",isInput:true,setFunc:(e)=>{
                if(e.srcElement.checked){
                    getID("cred:Exodus:Label").innerHTML = "Own Ship Exodus (Credits x2) : "+spanText("lime","YES")
                    UseR.credits.exodus = true
                    boostCredits(Number(getID("credBC").innerHTML),true)
                } else {
                    getID("cred:Exodus:Label").innerHTML = "Own Ship Exodus (Credits x2) : "+spanText("red","NO")
                    UseR.credits.exodus = false
                    boostCredits(Number(getID("credBC").innerHTML),true)
                }
            }})

        addEle({dad:myL,what:"td",border:"solid 2px blue",radius:"5px",textA:"left",padding:pad,
        paddingL:"10px", text:"Own Ship Exodus (Credits x2) : "+spanText("red","NO"),colSpan:3,setID:"cred:Exodus:Label"})

        addEle({dad:myL,what:"td",border:"solid 2px blue",radius:"5px",textA:"center",padding:pad,
        setID:"cred:Exodus:Payout",text:0})


    myL = addEle({dad:myT,what:"tr"})

        addEle({dad:myL,what:"td"})

        addEle({dad:myL,what:"td",border:"solid 2px blue",radius:"5px",textA:"center",padding:pad,
        text:"Overall Payout : ",colSpan:3})

        addEle({dad:myL,what:"td",border:"solid 2px blue",radius:"5px",textA:"center",padding:pad,
        setID:"cred:Overall:Payout",text:0})


    myL = addEle({dad:myT,what:"tr"})

        myC = addEle({dad:myL,what:"td",border:"solid 2px blue",radius:"5px",textA:"center",padding:pad})
        addEle({dad:myC,what:"checkbox",isInput:true,setID:"credDMcheck",setFunc:(e)=>{
            if(e.srcElement.checked){
                getID("cred:doubleDM:Label").innerHTML = "Use 100 DM to double the Payout : "+spanText("lime","YES")
                boostCredits(Number(getID("credBC").innerHTML),true)
            } else {
                getID("cred:doubleDM:Label").innerHTML = "Use 100 DM to double the Payout : "+spanText("red","NO")
                boostCredits(Number(getID("credBC").innerHTML),true)
            }
        }})

        addEle({dad:myL,what:"td",border:"solid 2px blue",radius:"5px",textA:"left",padding:pad,paddingL:"10px",
        text:"Use 100 DM to double the Payout : "+spanText("red","NO"),colSpan:3,setID:"cred:doubleDM:Label"})

        addEle({dad:myL,what:"td",border:"solid 2px blue",radius:"5px",textA:"center",padding:pad,
        setID:"cred:doubleDM:Payout",text:0})


addEle({dad:projectPop,setClass:"button1",margin:"10px",text:"Close",
setFunc:()=>{body.removeChild(projectPop) ; projectPop = undefined}})

centerScreen(projectPop)

}


function upCredSlider(){
    let lvl = Number(getID("credSlider").value)
    let tgt = undefined
    let src = undefined

    if(getID("credSliderLabel").innerHTML === "Lounge")
        {src = Rooms.filter(rm=>rm.label==="Lounge")[0] ; UseR.credits.lounge = lvl }
    else {
        src = stationCells.filter(cel=>cel.label.includes("credit")).filter(it=>it.label.includes(getID("credSliderLabel").innerHTML.split("#")[1]))[0]
        UseR.credits.station[(Number(getID("credSliderLabel").innerHTML.split("#")[1])-1)] = lvl
    }

    getID("cred:"+getID("credSliderLabel").innerHTML+":Level").innerHTML = "Level : " + lvl
    if(lvl > 0){
        txt = src.label === "Lounge" ? 
        (src.bonus.base + src.bonus.start + ((lvl-1)*src.bonus.every)).toFixed(2) :
        ((lvl * src.bonusPerLevel)+1).toFixed(3)
    } else {txt = 0}
    getID("cred:"+getID("credSliderLabel").innerHTML+":Bonus").innerHTML = "Bonus : " + txt

    src = stationCells.filter(cel=>cel.label.includes("credit"))
    let ucs = UseR.credits.station
    let ttb = 0
    for(let i=0;i<ucs.length;i++){
        ttb += ucs[i] * src[i].bonusPerLevel
    }
    getID("cred:Station:Bonus").innerHTML = ttb === 0 ? 0 : (ttb+1).toFixed(3)

boostCredits(Number(getID("credBC").innerHTML),true)

}


function updateCredits(boosted=false){
    let myCont = getID("creditTableFr")
    cleanParent(myCont)

    let myT = addEle({dad:myCont,what:"table"})
    let myL = addEle({dad:myT,what:"tr"})
        addEle({dad:myL,what:"td",text: spanText("lime","(Ma)") + "gnitudes:",border:"solid 2px blue",radius:"5px",
        minWidth:"100px",textA:"center",rowSpan:2})

        addEle({dad:myL,what:"td",text:"Base credits for:",border:"solid 2px blue",radius:"5px",
        colSpan:3,textA:"center"})
        myL = addEle({dad:myT,what:"tr"})
        addEle({dad:myL,what:"td",text:"1 "+ spanText("lime","(Ma)"),border:"solid 2px blue",
        radius:"5px",textA:"center"})
        addEle({dad:myL,what:"td",text:"10 "+ spanText("lime","(Ma)"),border:"solid 2px blue",
        radius:"5px",textA:"center"})
        addEle({dad:myL,what:"td",text:"100 "+ spanText("lime","(Ma)"),border:"solid 2px blue",
        radius:"5px",textA:"center"})
        
    for(let i=0;i<creditsArray.length;i++){
        myL = addEle({dad:myT,what:"tr"})
            let thisTxt = creditsArray[i].magnitude
            thisTxt = spanText("lime",thisTxt.slice(0,1)) + thisTxt.slice(1)
            addEle({dad:myL,what:"td",text:thisTxt,border:"solid 2px blue",
            radius:"5px",textA:"center"})
            for(let j=0;j<creditsArray[i].credits.length;j++){
                txt = boosted === false ? Number(creditsArray[i].credits[j]) : boostCredits(Number(creditsArray[i].credits[j]))
                txt = txt.toLocaleString()
                addEle({dad:myL,what:"td",textA:"center",text:txt, // creditsArray[i].credits[j]
                border:"solid 2px blue",radius:"5px",minWidth:"50px"}) } } 
    addEle({dad:myCont,text:`Confusing ? Example ...<br>- Line [5] : `+spanText("lime","Q")+`
    <br>- Column [2] : 10 `+spanText("lime","(Ma)")+`<br> will read 10 `+spanText("lime","Q")+`
    ⇒ 930 credits`,margin:"20px",padding:"10px 10px 10px 60px",border:"solid 2px lime",radius:"10px",})
}


function boostCredits(cred,test=false){
    if(cred===0 || isNaN(cred)){return 0}

    let ref = UseR.credits
    let recap = {
        val:cred,
        loungeB:0,
        loungeV:0,
        stationB:0,
        stationV:0,
        exodusV:0,
        ttV:0 
    }

    let lng = Rooms.filter(rm=>rm.label==="Lounge")[0]
    let stc = stationCells.filter(cel=>cel.label.includes("credit"))

    recap.loungeB = ref.lounge === 0 ? 0 : lng.bonus.start + ( lng.bonus.every * (ref.lounge-1) )
    recap.loungeV = recap.loungeB === 0 ? 0 : Number((recap.val * recap.loungeB).toFixed())

    for (let i=0;i<stc.length;i++){
        recap.stationB += ref.station[i] * stc[i].bonusPerLevel  
    } recap.stationB = Number(recap.stationB.toFixed(3))
    recap.stationV = recap.stationB === 0 ? 0 : Number(((recap.val + recap.loungeV) * recap.stationB).toFixed())
    
    recap.exodusV = ref.exodus === false ? 0 : recap.val + recap.loungeV + recap.stationV
    recap.ttV = recap.val + recap.loungeV + recap.stationV + recap.exodusV

    if(test){
        getID("cred:Lounge:Payout").innerHTML = recap.loungeV.toLocaleString()
        getID("cred:Station:Payout").innerHTML = recap.stationV.toLocaleString()
        getID("cred:Exodus:Payout").innerHTML = recap.exodusV.toLocaleString()
        getID("cred:Overall:Payout").innerHTML = recap.ttV.toLocaleString()
        if(getID("credDMcheck").checked){getID("cred:doubleDM:Payout").innerHTML = (recap.ttV * 2).toLocaleString() }
    } else {return recap.ttV}
    
}

function setProbeHangar(container){

    // holo bolts.jpg
    // yellow dia.jpg
    let twins = addEle({dad:container,setClass:"contRow",width:"100%",justifyC:"space-evenly",
        alignItems:"center"})
        addEle({dad:twins,what:"img",imgFullSrc:"./IPM Components/event ball.jpg",
        border:"yellow solid 3px",radius:"80px",cursor:"pointer",setFunc:()=>{
            eventBall()
            cleanParent(getID("eventBtm"))
            if(getID("eventPassBtn").innerHTML ==="Event Pass 👆"){getID("eventPassBtn").click()}
            addEle({dad:getID("eventBtm"),setClass:"contRow",width:"100%",justifyC:"space-around",
            backC:"rgb(20,13,44)",setID:"eventBtns",padding:"10px 0"})
                addEle({dad:getID("eventBtns"),text:"MISSIONS",border:"solid 3px rgb(114,110,128)",cursor:"pointer",
                radius:"20px",fontB:"bold",padding:"10px",minWidth:"100px",textA:"center",setFunc:clickEventBtns})
                addEle({dad:getID("eventBtns"),text:"REWARDS",border:"solid 3px rgb(114,110,128)",cursor:"pointer",
                radius:"20px",fontB:"bold",padding:"10px",minWidth:"100px",textA:"center",setFunc:clickEventBtns})
                addEle({dad:getID("eventBtns"),text:"PERKS",border:"solid 3px rgb(114,110,128)",cursor:"pointer",
                radius:"20px",fontB:"bold",padding:"10px",minWidth:"100px",textA:"center",setFunc:clickEventBtns})
                getID("eventBtns").children[0].click()
        }})

        addEle({dad:twins,setClass:"contCol",border:"blue solid 3px",
        radius:"30px",padding:"10px",setID:"passFr"})
            addEle({dad:getID("passFr"),what:"img",imgFullSrc:"./IPM Components/multipass.jpg",
            radius:"20px",cursor:"pointer",setFunc:()=>{getID("passFr").children[1].click()}})
            addEle({dad:getID("passFr"),text:"Event Pass 👇",cursor:"pointer",textA:"center",
            paddingT:"5px",setID:("eventPassBtn"),setFunc:(e)=>{
                let myPass = getID("passDisp")
                if(e.srcElement.innerHTML==="Event Pass 👇"){
                    e.srcElement.innerHTML="Event Pass 👆"
                    myPass.style.display = "block"
                } else {
                    e.srcElement.innerHTML="Event Pass 👇"
                    myPass.style.display = "none"
                }
                console.log("multipass")
            }})
        
        addEle({dad:twins,what:"img",imgFullSrc:"./IPM Components/probe hangar.jpg",
        border:"yellow solid 3px",radius:"80px",cursor:"pointer",setFunc:()=>{
            eventBall()

            cleanParent(getID("eventTop"))
            cleanParent(getID("eventBtm"))
            if(getID("eventPassBtn").innerHTML ==="Event Pass 👆"){getID("eventPassBtn").click()}
            let cont = addEle({dad:getID("eventTop"),width:"100%",textA:"center",margin:"10px 0"})
                addEle({dad:cont,what:"img",imgFullSrc:"./IPM Components/probes hangar.jpg",
                height:"70%",width:"70%"})
        }})

    addEle({dad:container,setID:"passDisp",what:"img",border:"solid blue 3px",
    padding:"5px",radius:"20px",imgFullSrc:"./IPM Components/event pass 1.jpg",
    display:"none",height:"70%",width:"70%"})

    let eventFr = addEle({dad:container,setClass:"contCol",width:"100%"})
        addEle({dad:eventFr,setID:"eventTop"})
        addEle({dad:eventFr,setID:"eventBtm",width:"100%",backC:"rgb(20,13,44)"})

    addEle({dad:container,setID:"eventHangarFr"})



}
function clickEventBtns(e){
    let mySrc = getID("eventBtns")
    for(let i=0;i<mySrc.children.length;i++){
        if(mySrc.children[i].innerHTML===e.srcElement.innerHTML){
            mySrc.children[i].style.border = "solid 3px rgb(92,229,252)"
            mySrc.children[i].style.background = "rgb(31,46,76)"
            cleanParent(getID("eventTop"))
            let cont = addEle({dad:getID("eventTop"),width:"100%",textA:"center",margin:"10px 0"})
                addEle({dad:cont,what:"img",imgFullSrc:"./IPM Components/event ball "+(i+1)+".jpg",
                height:"70%",width:"70%"})
        } else {
            mySrc.children[i].style.border = "solid 3px rgb(114,110,128)"
            mySrc.children[i].style.background = ""
        }
    }

}
function eventBall(){
    let myC = getID("eventHangarFr")
    cleanParent(myC)

    txt = `
    So whats going on here ?
    We have an Event Ball-like
    ` 





    
    let cont = addEle({dad:myC,setClass:"contCol",border:"orange solid 3px",
    padding:"10px",textA:"center",radius:"20px"})
    addEle({dad:cont,text:"Under Construction...",textC:"yellow"})
    addEle({dad:cont,what:"img",imgFullSrc:"./IPM Components/construction.jpg"})
    addEle({dad:cont,text:"Under Construction...",textC:"yellow"})
}


//// probes cost : 100 / 500

