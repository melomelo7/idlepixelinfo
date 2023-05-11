const faqsArray = [
    {
    label : "Prestige and Galaxy Value in IPM ?",
    icon : "",
    text : `Every run will(can) end when you reach 10 Millions. <br>
            Next prestige point will need another 2+ Millions.<br>
            Credits will be received in order to start building<br>
            rooms on your mothership.<br> 
            The galaxy value when selling is the sum of those : `,
    url : "",
    img : "gv.jpg"
    },
    {
    label : "Game Issues",
    icon : "",
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
            No success so far ? then try phase 2 : check Reddit/Discord<br>
            for any advice<br><br>
            Phase 3 when all hope is gone :<br>
            Support shall save the day ! ... hopefully :<br>
            Provide your Player ID (under settings) along with any screen<br>
            shots and/or purchase receipt if needs be.<br><br>
            Support return may take up to 48h. Often will take less.<br>
            If no reply give it another day or 2 before sending a "reminder".
            `,
    url : "support@techtreegames.com",
    img : ""
    },
    {
    label : "Asteroid | Debris Times",
    icon : "",
    text : `To have these informations it will take a few more clicks :<br>
            Visit my other tab ⇒ "Projects"<br>
            and click on projects shown here.<br>
            (with a purple border around)`,
    url : "",
    img : "asteroids times.jpg"
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
    img : "achievements2.jpg"
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
    img : "craft2.jpg"
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

        if (thisElement.icon){
            let subContainer = document.createElement("div")
            thisContainer.appendChild(subContainer)
            subContainer.style.marginTop = 20 + "px"
            subContainer.style.textAlign = "center"

                let thisItem = new Image()
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

}