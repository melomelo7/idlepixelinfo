const faqsArray = [
    {
    label : "Prestige and Galaxy Value in IPM ?",
    icon : "",
    text : `Every run will(can) end when you reach 10 Millions. next prestige point will need<br>
            another 2+ Millions. Credits will be received in order to start building rooms<br>
            on your mothership. The galaxy value when selling is the sum of those : `,
    url : "",
    img : "gv.jpg"
    },
    {
    label : "Game Issues",
    icon : "",
    text : `When you encounter a problem with the game that no helper (Discord/Reddit)<br>
            was able to solve, contact support providing your Player ID (under settings)<br>
            also check settings > help ... providing screenshots and purchase receipt if needs be.<br><br>
            Before doing so, a slight issue can be fixed with, depending cases : selling galaxy,<br>
            closing/force-closing game ... rare case scenario : REBOOT of device !`,
    url : "support@techtreegames.com",
    img : ""
    },
    {
    label : "Asteroid | Debris Times",
    icon : "",
    text : `To have these informations it will take a few more clicks :<br>
            Visit my other tab ⇒ "Projects" and click on projects shown here.<br>
            (with a purple border around)`,
    url : "",
    img : "asteroids times.jpg"
    },
    {
    label : "Achievements",
    icon : "achievements.jpg",
    text : `Did any one finish all of them yet ?<br><br>
            well both YES and NO could fit as veterans are there or soon to be<br><br>
            **[Mothership rooms upgrades] in current game status is maxed at 6/8 stars**`,
    url : "",
    img : "achievements2.jpg"
    },
    {
    label : "Avoid Crafting issues",
    icon : "craft.jpg",
    text : `① Above image(ingame help info) tells us idle/offline time will have severe cut<br>
            in mining(ore collection) so it means in short if you dont have a stock of needed<br>
            [whatever stuff] to perform your smelt/craft process, chances are this will take<br>
            down your crafting as the chain at some point wont be working as usual.<br><br>
            ② The below image explains where the chain of production starts/ends.<br>
            logic says dont start the chain by the top item but by the lowest ...<br><br>
            example : lens require glass dont put lens in [1] and glass in [2]`,
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