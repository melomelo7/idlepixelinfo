class Planet {
    constructor({
        telescope=0,
        idNumber=0,
        label="",
        ores=[],
        unlockCost="",
        selected = false,
    }){
        this.telescope = telescope
        this.idNumber = idNumber
        this.label = label
        this.ores = ores
        this.unlockCost = unlockCost
        this.imgSrc = "./IPM Planets/"+this.idNumber+".jpg"
        this.selected = selected
    }
}

function getPrivatePlanets(){
    let cpt = 0
    for(bcl=0;bcl<planetsArray.length;bcl++){
        if(planetsArray[bcl].selected){cpt++}
    }
    return cpt
}

planetsArray = []

planetsArray.push(

    new Planet({
        telescope:0,
        idNumber : 1,
        label:"Balor",
        ores:[
            {label:"copper ore",yield:100}
        ],
        unlockCost:"$ 100"
    }),

    new Planet({
        telescope:0,
        idNumber : 2,
        label:"Drasta",
        ores:[
            {label:"copper ore",yield:80},
            {label:"iron ore",yield:20}
        ],
        unlockCost:"$ 200"
    }),

    new Planet({
        telescope:0,
        idNumber : 3,
        label:"Anadius",
        ores:[
            {label:"copper ore",yield:80},
            {label:"iron ore",yield:20}
        ],
        unlockCost:"$ 500"
    }),
    
    new Planet({
        telescope:0,
        idNumber : 4,
        label:"Dholen",
        ores:[
            {label:"copper ore",yield:80},
            {label:"iron ore",yield:20}
        ],
        unlockCost:"$ 1.25 K"
    }),

    new Planet({
        telescope:1,
        idNumber : 5,
        label:"Verr",
        ores:[
            {label:"lead ore",yield:50},
            {label:"iron ore",yield:30},
            {label:"copper ore",yield:20},
        ],
        unlockCost:"$ 5.00 K"
    }),

    new Planet({
        telescope:1,
        idNumber : 6,
        label:"Newton",
        ores:[
            {label:"lead ore",yield:100},
        ],
        unlockCost:"$ 9.00 K"
    }),

    new Planet({
        telescope:1,
        idNumber : 7,
        label:"Widow",
        ores:[
            {label:"iron ore",yield:40},
            {label:"copper ore",yield:40},
            {label:"silica ore",yield:20},
        ],
        unlockCost:"$ 15.00 K"
    }),

    new Planet({
        telescope:2,
        idNumber : 8,
        label:"Acheron",
        ores:[
            {label:"silica ore",yield:60},
            {label:"copper ore",yield:40},
        ],
        unlockCost:"$ 25.00 K"
    }),

    new Planet({
        telescope:2,
        idNumber : 9,
        label:"Yangtze",
        ores:[
            {label:"silica ore",yield:80},
            {label:"aluminium ore",yield:20},
        ],
        unlockCost:"$ 40.00 K"
    }),

    new Planet({
        telescope:2,
        idNumber : 10,
        label:"Solveig",
        ores:[
            {label:"aluminium ore",yield:50},
            {label:"silica ore",yield:30},
            {label:"lead ore",yield:20},
        ],
        unlockCost:"$ 75.00 K"
    }),

    new Planet({
        telescope:3,
        idNumber : 11,
        label:"Imir",
        ores:[
            {label:"aluminium ore",yield:100},
        ],
        unlockCost:"$ 150.00 K"
    }),    

    new Planet({
        telescope:3,
        idNumber : 12,
        label:"Relic",
        ores:[
            {label:"lead ore",yield:45},
            {label:"silica ore",yield:35},
            {label:"silver ore",yield:20},
        ],
        unlockCost:"$ 250.00 K"
    }),

    new Planet({
        telescope:3,
        idNumber : 13,
        label:"Nith",
        ores:[
            {label:"silver ore",yield:80},
            {label:"aluminium ore",yield:20},
        ],
        unlockCost:"$ 400.00 K"
    }),

    new Planet({
        telescope:4,
        idNumber : 14,
        label:"Batalla",
        ores:[
            {label:"copper ore",yield:40},
            {label:"iron ore",yield:40},
            {label:"gold ore",yield:20},
        ],
        unlockCost:"$ 800.00 K"
    }),

    new Planet({
        telescope:4,
        idNumber : 15,
        label:"Micah",
        ores:[
            {label:"gold ore",yield:50},
            {label:"silver ore",yield:50},
        ],
        unlockCost:"$ 1.50 M"
    }),

    new Planet({
        telescope:4,
        idNumber : 16,
        label:"Pranas",
        ores:[
            {label:"gold ore",yield:100},
        ],
        unlockCost:"$ 3.00 M"
    }),

    new Planet({
        telescope:5,
        idNumber : 17,
        label:"Castellus",
        ores:[
            {label:"aluminium ore",yield:40},
            {label:"silica ore",yield:35},
            {label:"diamond",yield:25},
        ],
        unlockCost:"$ 6.00 M"
    }),

    new Planet({
        telescope:5,
        idNumber : 18,
        label:"Gorgon",
        ores:[
            {label:"diamond",yield:80},
            {label:"lead ore",yield:20},
        ],
        unlockCost:"$ 12.00 M"
    }),

    new Planet({
        telescope:5,
        idNumber : 19,
        label:"Parnitha",
        ores:[
            {label:"gold ore",yield:70},
            {label:"platinum ore",yield:30},
        ],
        unlockCost:"$ 25.00 M"
    }),

    new Planet({
        telescope:6,
        idNumber : 20,
        label:"Orisoni",
        ores:[
            {label:"platinum ore",yield:70},
            {label:"diamond",yield:30},
        ],
        unlockCost:"$ 50.00 M"
    }),

    new Planet({
        telescope:6,
        idNumber : 21,
        label:"Theseus",
        ores:[
            {label:"platinum ore",yield:100},
        ],
        unlockCost:"$ 100.00 M"
    }),

    new Planet({
        telescope:6,
        idNumber : 22,
        label:"Zelene",
        ores:[
            {label:"silver ore",yield:70},
            {label:"titanium ore",yield:30},
        ],
        unlockCost:"$ 200.00 M"
    }),

    new Planet({
        telescope:7,
        idNumber : 23,
        label:"Han",
        ores:[
            {label:"titanium ore",yield:70},
            {label:"diamond",yield:20},
            {label:"gold ore",yield:10},
        ],
        unlockCost:"$ 400.00 M"
    }),

    new Planet({
        telescope:7,
        idNumber : 24,
        label:"Strennus",
        ores:[
            {label:"titanium ore",yield:70},
            {label:"platinum ore",yield:30},
        ],
        unlockCost:"$ 800.00 M"
    }),

    new Planet({
        telescope:7,
        idNumber : 25,
        label:"Osun",
        ores:[
            {label:"aluminium ore",yield:60},
            {label:"iridium ore",yield:40},
        ],
        unlockCost:"$ 1.60 B"
    }),

    new Planet({
        telescope:8,
        idNumber : 26,
        label:"Ploitari",
        ores:[
            {label:"iridium ore",yield:50},
            {label:"diamond",yield:50},
        ],
        unlockCost:"$ 3.20 B"
    }),

    new Planet({
        telescope:8,
        idNumber : 27,
        label:"Elysta",
        ores:[
            {label:"iridium ore",yield:100},
        ],
        unlockCost:"$ 6.40 B"
    }),

    new Planet({
        telescope:8,
        idNumber : 28,
        label:"Tikkun",
        ores:[
            {label:"iridium ore",yield:40},
            {label:"titanium ore",yield:35},
            {label:"palladium ore",yield:25},
        ],
        unlockCost:"$ 12.50 B"
    }),

    new Planet({
        telescope:9,
        idNumber : 29,
        label:"Satent",
        ores:[
            {label:"palladium ore",yield:60},
            {label:"titanium ore",yield:40},
        ],
        unlockCost:"$ 25.00 B"
    }),

    new Planet({
        telescope:9,
        idNumber : 30,
        label:"Urla Rast",
        ores:[
            {label:"palladium ore",yield:90},
            {label:"diamond",yield:10},
        ],
        unlockCost:"$ 50.00 B"
    }),
    
    new Planet({
        telescope:9,
        idNumber : 31,
        label:"Vulnar",
        ores:[
            {label:"palladium ore",yield:70},
            {label:"osmium ore",yield:30},
        ],
        unlockCost:"$ 100.00 B"
    }),

    new Planet({
        telescope:10,
        idNumber : 32,
        label:"Nibiru",
        ores:[
            {label:"osmium ore",yield:60},
            {label:"iridium ore",yield:40},
        ],
        unlockCost:"$ 250.00 B"
    }),

    new Planet({
        telescope:10,
        idNumber : 33,
        label:"Xena",
        ores:[
            {label:"osmium ore",yield:100},
        ],
        unlockCost:"$ 600.00 B"
    }),

    new Planet({
        telescope:10,
        idNumber : 34,
        label:"Rupert",
        ores:[
            {label:"palladium ore",yield:55},
            {label:"osmium ore",yield:30},
            {label:"rhodium ore",yield:15},
        ],
        unlockCost:"$ 1.50 T"
    }),

    new Planet({
        telescope:11,
        idNumber : 35,
        label:"Pax",
        ores:[
            {label:"rhodium ore",yield:50},
            {label:"platinum ore",yield:50},
        ],
        unlockCost:"$ 4.00 T"
    }),

    new Planet({
        telescope:11,
        idNumber : 36,
        label:"Ivyra",
        ores:[
            {label:"rhodium ore",yield:100},
        ],
        unlockCost:"$ 10.00 T"
    }),

    new Planet({
        telescope:11,
        idNumber : 37,
        label:"Utritis",
        ores:[
            {label:"rhodium ore",yield:100},
            {label:"inerton ore",yield:20},
        ],
        unlockCost:"$ 25.00 T"
    }),

    new Planet({
        telescope:12,
        idNumber : 38,
        label:"Dosie",
        ores:[
            {label:"inerton ore",yield:50},
            {label:"osmium ore",yield:50},
        ],
        unlockCost:"$ 62.00 T"
    }),

    new Planet({
        telescope:12,
        idNumber : 39,
        label:"Zulu",
        ores:[
            {label:"inerton ore",yield:100},
        ],
        unlockCost:"$ 160.00 T"
    }),

    new Planet({
        telescope:12,
        idNumber : 40,
        label:"Unicae",
        ores:[
            {label:"inerton ore",yield:80},
            {label:"quadium ore",yield:20},
        ],
        unlockCost:"$ 400.00 T"
    }),

    new Planet({
        telescope:13,
        idNumber : 41,
        label:"Dune",
        ores:[
            {label:"osmium ore",yield:60},
            {label:"quadium ore",yield:40},
        ],
        unlockCost:"$ 1.00 q"
    }),

    new Planet({
        telescope:13,
        idNumber : 42,
        label:"Naraka",
        ores:[
            {label:"quadium ore",yield:100},
        ],
        unlockCost:"$ 2.50 q"
    }),

    new Planet({
        telescope:13,
        idNumber : 43,
        label:"Daedalus",
        ores:[
            {label:"quadium ore",yield:60},
            {label:"inerton ore",yield:25},
            {label:"scrith ore",yield:15},
        ],
        unlockCost:"$ 6.20 q"
    }),

    new Planet({
        telescope:14,
        idNumber : 44,
        label:"Clovis",
        ores:[
            {label:"scrith ore",yield:50},
            {label:"quadium ore",yield:50},
        ],
        unlockCost:"$ 15.00 q"
    }),

    new Planet({
        telescope:14,
        idNumber : 45,
        label:"Zero",
        ores:[
            {label:"scrith ore",yield:100},
        ],
        unlockCost:"$ 40.00 q"
    }),

    new Planet({
        telescope:14,
        idNumber : 46,
        label:"Sotomi",
        ores:[
            {label:"scrith ore",yield:75},
            {label:"uru ore",yield:25},
        ],
        unlockCost:"$ 100.00 q"
    }),

    new Planet({
        telescope:15,
        idNumber : 47,
        label:"Remidian",
        ores:[
            {label:"uru ore",yield:60},
            {label:"quadium ore",yield:40},
        ],
        unlockCost:"$ 250.00 q"
    }),

    new Planet({
        telescope:15,
        idNumber : 48,
        label:"Muse",
        ores:[
            {label:"uru ore",yield:100},
        ],
        unlockCost:"$ 600.00 q"
    }),

    new Planet({
        telescope:15,
        idNumber : 49,
        label:"Arabis",
        ores:[
            {label:"uru ore",yield:80},
            {label:"vibranium ore",yield:20},
        ],
        unlockCost:"$ 1.50 Q"
    }),

    new Planet({
        telescope:16,
        idNumber : 50,
        label:"Vesna",
        ores:[
            {label:"vibranium ore",yield:60},
            {label:"scrith ore",yield:40},
        ],
        unlockCost:"$ 3.80 Q"
    }),

    new Planet({
        telescope:16,
        idNumber : 51,
        label:"Chandra",
        ores:[
            {label:"vibranium ore",yield:100},
        ],
        unlockCost:"$ 10.00 Q"
    }),

    new Planet({
        telescope:16,
        idNumber : 52,
        label:"Vega",
        ores:[
            {label:"vibranium ore",yield:70},
            {label:"rhodium ore",yield:20},
            {label:"aether ore",yield:10},
        ],
        unlockCost:"$ 25.00 Q"
    }),

    new Planet({
        telescope:17,
        idNumber : 53,
        label:"Crius",
        ores:[
            {label:"aether ore",yield:50},
            {label:"scrith ore",yield:50},
        ],
        unlockCost:"$ 60.00 Q"
    }),

    new Planet({
        telescope:17,
        idNumber : 54,
        label:"Singhana",
        ores:[
            {label:"aether ore",yield:100},
        ],
        unlockCost:"$ 150.00 Q"
    }),

    new Planet({
        telescope:17,
        idNumber : 55,
        label:"Zumbia",
        ores:[
            {label:"aether ore",yield:70},
            {label:"vibranium ore",yield:20},
            {label:"viterium ore",yield:10},
        ],
        unlockCost:"$ 360.00 Q"
    }),

    new Planet({
        telescope:18,
        idNumber : 56,
        label:"Elysium",
        ores:[
            {label:"viterium ore",yield:60},
            {label:"uru ore",yield:40},
        ],
        unlockCost:"$ 900.00 Q"
    }),

    new Planet({
        telescope:18,
        idNumber : 57,
        label:"Nyota",
        ores:[
            {label:"viterium ore",yield:100},
        ],
        unlockCost:"$ 2.60 s"
    }),

    new Planet({
        telescope:18,
        idNumber : 58,
        label:"Doral",
        ores:[
            {label:"viterium ore",yield:40},
            {label:"aether ore",yield:40},
            {label:"xynium ore",yield:20},
        ],
        unlockCost:"$ 7.50 s"
    }),

    new Planet({
        telescope:19,
        idNumber : 59,
        label:"Nikara",
        ores:[
            {label:"xynium ore",yield:70},
            {label:"vibranium ore",yield:30},
        ],
        unlockCost:"$ 21.00 s"
    }),

    new Planet({
        telescope:19,
        idNumber : 60,
        label:"Limbo",
        ores:[
            {label:"xynium ore",yield:100},
        ],
        unlockCost:"$ 59.00 s"
    }),

    new Planet({
        telescope:19,
        idNumber : 61,
        label:"Bob",
        ores:[
            {label:"xynium ore",yield:70},
            {label:"quolium ore",yield:30},
        ],
        unlockCost:"$ 170.00 s"
    }),

    new Planet({
        telescope:20,
        idNumber : 62,
        label:"Midas",
        ores:[
            {label:"quolium ore",yield:55},
            {label:"aether ore",yield:45},
        ],
        unlockCost:"$ 460.00 s"
    }),

    new Planet({
        telescope:20,
        idNumber : 63,
        label:"Antigone",
        ores:[
            {label:"quolium ore",yield:100},
        ],
        unlockCost:"$ 1.30 S"
    }),

    new Planet({
        telescope:20,
        idNumber : 64,
        label:"Hecate",
        ores:[
            {label:"quolium ore",yield:50},
            {label:"xynium ore",yield:25},
            {label:"luterium ore",yield:25},
        ],
        unlockCost:"$ 3.90 S"
    }),

    new Planet({
        telescope:21,
        idNumber : 65,
        label:"Sterop",
        ores:[
            {label:"luterium ore",yield:60},
            {label:"quolium ore",yield:20},
            {label:"viterium ore",yield:17},
        ],
        unlockCost:"$ 11.00 S"
    }),

    new Planet({
        telescope:21,
        idNumber : 66,
        label:"Lavinia",
        ores:[
            {label:"luterium ore",yield:100},
        ],
        unlockCost:"$ 33.00 S"
    }),

    new Planet({
        telescope:21,
        idNumber : 67,
        label:"Ren",
        ores:[
            {label:"luterium ore",yield:70},
            {label:"quolium ore",yield:20},
            {label:"wraith ore",yield:10},
        ],
        unlockCost:"$ 95.00 S"
    }),

    new Planet({
        telescope:22,
        idNumber : 68,
        label:"Gorgons",
        ores:[
            {label:"wraith ore",yield:60},
            {label:"xynium ore",yield:40},
        ],
        unlockCost:"$ 270.00 S"
    }),

    new Planet({
        telescope:22,
        idNumber : 69,
        label:"Pontus",
        ores:[
            {label:"wraith ore",yield:80},
            {label:"luterium ore",yield:20},
        ],
        unlockCost:"$ 800.00 S"
    }),

    new Planet({
        telescope:22,
        idNumber : 70,
        label:"Leto",
        ores:[
            {label:"wraith ore",yield:100},
        ],
        unlockCost:"$ 2.40 O"
    }),

)

function buildPlanets(){

    let textSize = 18
    let tabInfos = document.createElement("div")
    right.appendChild(tabInfos)
    tabInfos.innerHTML = ""
    tabInfos.style = textStyle
    tabInfos.style.fontSize = textSize + "px"
    tabInfos.style.height = textSize *2 + "px"
    tabInfos.style.marginLeft = textSize + "px"
    tabInfos.style.color = "rgb(0,212,250)"

    let rightTop = document.createElement("div")
    rightTop.style = containerRow
    right.appendChild(rightTop)

    let rightMiddle = document.createElement("div")
    rightMiddle.style = containerRow
    right.appendChild(rightMiddle)

    let rightBottom = document.createElement("div")
    rightBottom.style = containerColumn
    right.appendChild(rightBottom)

    let myDiv = document.createElement("div")
    myDiv.style = closeButtonStyle
    myDiv.style.marginLeft = 10 + "px"
    myDiv.innerHTML = "Full List"
    myDiv.setAttribute("id","planetFull")
    rightTop.appendChild(myDiv)
    myDiv.addEventListener("click",function(){
        info.innerHTML = infoTitle
        cleanParent(rightMiddle) 
        cleanParent(rightBottom)
        displayPlanets(rightBottom,planetsArray)})
    myDiv.addEventListener("mouseover",()=>{tabInfos.innerHTML = "Displays all 70 planets"})
    myDiv.addEventListener("mouseout",()=>{tabInfos.innerHTML = ""})


    myDiv = document.createElement("div")
    myDiv.style = closeButtonStyle
    myDiv.style.marginLeft = 10 + "px"
    myDiv.innerHTML = "Telescope"
    rightTop.appendChild(myDiv)
    myDiv.addEventListener("mouseover",()=>{tabInfos.innerHTML = "Displays a 1 specific telescope of your choosing"})
    myDiv.addEventListener("mouseout",()=>{tabInfos.innerHTML = ""})
    myDiv.addEventListener("click",function(){
        info.innerHTML = infoTitle
        cleanParent(rightMiddle) 
        cleanParent(rightBottom)
        let lineCount = 0
        let lineMax = 10

        let table = document.createElement("table")
        rightMiddle.appendChild(table)
        let tr = document.createElement("tr")
        table.appendChild(tr)
        let td = document.createElement("td")
        td.style = containerRow
        tr.appendChild(td)

        for (i=0;i<=22;i++){
            lineCount+=1

            if( lineCount > 1 && (lineCount-1) % lineMax === 0) {
                tr = document.createElement("tr")
                table.appendChild(tr)
                td = document.createElement("td")
                td.style = containerRow
                tr.appendChild(td)
            }
            
            let thisButton = document.createElement("div")
            thisButton.style = microButtonStyle
            thisButton.innerHTML = i
            td.appendChild(thisButton)
            thisButton.addEventListener("click",(e)=>{
                cleanParent(rightBottom)
                let refId = Number(e.srcElement.innerHTML)
                displayPlanets(rightBottom,planetsArray.filter(x=>x.telescope === refId))
                })
        }})

    myDiv = document.createElement("div")
    myDiv.style = closeButtonStyle
    myDiv.style.marginLeft = 10 + "px"
    myDiv.innerHTML = "Find Ore"
    rightTop.appendChild(myDiv)
    myDiv.addEventListener("mouseover",()=>{tabInfos.innerHTML = "Pick 1 ore, see which planets provide it"})
    myDiv.addEventListener("mouseout",()=>{tabInfos.innerHTML = ""})
    myDiv.addEventListener("click",function(){
        info.innerHTML = infoTitle
        cleanParent(rightMiddle) 
        cleanParent(rightBottom)
        lineCount = 0
        lineMax = 9
        table = document.createElement("table")
        rightMiddle.appendChild(table)
        tr = document.createElement("tr")
        table.appendChild(tr)
        td = document.createElement("td")
        tr.appendChild(td)

        for (i=0;i<oresArray.length;i++){
            if(oresArray[i].type==="ore"){
                lineCount+=1
                if( lineCount > 1 && (lineCount-1) % lineMax === 0) {
                    tr = document.createElement("tr")
                    table.appendChild(tr)
                    td = document.createElement("td")
                    tr.appendChild(td)
                }
                let img = new Image()
                img.src = oresArray[i].img
                img.style = microButtonStyle
                img.style.height = 30 + "px"
                img.style.width = 30 + "px"
                img.setAttribute("id",oresArray[i].label)
                td.appendChild(img)
                img.addEventListener("mouseover",(e)=>{tabInfos.innerHTML = e.srcElement.id })
                img.addEventListener("mouseout",()=>{tabInfos.innerHTML = ""})
                img.addEventListener("click",(e)=>{
                    cleanParent(rightBottom)
                    let getItem = e.srcElement.id
                    let newArray = 
                        planetsArray.filter(x=>x.ores.some(function(x){return x.label===getItem}))
                    displayPlanets(rightBottom,newArray)
                })}
            }})

    myDiv = AddADiv(rightTop)
    myDiv.style = closeButtonStyle
    myDiv.style.marginLeft = 10 + "px"
    myDiv.innerHTML = "Find Planet"
    myDiv.addEventListener("mouseover",()=>{tabInfos.innerHTML = "Input Planet's name to find it"})
    myDiv.addEventListener("mouseout",()=>{tabInfos.innerHTML = ""})
    myDiv.addEventListener("click",function(){
        info.innerHTML = infoTitle
        cleanParent(rightMiddle) 
        cleanParent(rightBottom)
        let thisContainer = AddADiv(rightMiddle)
        thisContainer.style = containerRow
        thisContainer.style.margin = "10px 0 20px 20px"
        thisContainer.style.alignItems = "center"
            myDiv = AddADiv(thisContainer)
            myDiv.style.margin = "0 10px 0 10px"
            myDiv.style.fontSize = 20 + "px"
            myDiv.innerHTML = "Planet name ?"
            myDiv = document.createElement("input")
            thisContainer.appendChild(myDiv)
            myDiv.addEventListener("input",(e)=>{
                cleanParent(rightBottom)
                let newArray = []
                let myText = e.srcElement.value.toUpperCase()
                for(i=0;i<planetsArray.length;i++){
                    let myText2 = planetsArray[i].label.slice(0,myText.length).toUpperCase()
                    if(myText === myText2 && myText.length > 0){newArray.push(planetsArray[i])}
                    }
                displayPlanets(rightBottom,newArray)
            })})

    myDiv = AddADiv(rightTop)
    myDiv.style = closeButtonStyle
    myDiv.style.marginLeft = 10 + "px"
    myDiv.style.backgroundColor = "#BB482E"
    myDiv.style.color ="yellow"
    myDiv.innerHTML = "Private List"
    myDiv.setAttribute("id","privatePlanets")
    myDiv.addEventListener("mouseover",()=>{tabInfos.innerHTML = 
        `Click on a Planet Image to Add/Remove it from YOUR list<br>
         then click on the Private List to filter your own selection`})
    myDiv.addEventListener("mouseout",()=>{tabInfos.innerHTML = ""})
    myDiv.addEventListener("click",function(){
        info.innerHTML = infoTitle
        cleanParent(rightMiddle) 
        cleanParent(rightBottom)
        displayPlanets(rightBottom,planetsArray.filter(x=>x.selected))
        let thisElement = AddADiv(rightMiddle)
        thisElement.style.margin = "0 0 10px 20px"
        thisElement.style.fontSize = 20 + "px"
        thisElement.innerHTML = `( you may click on planets from any list : Full,Telescope or Finds )<br>
        ** Hint : this Private List might help you chose Rover mission **`
    })

    }


function displayPlanets(rightBottom,listArray){
    let thisElement = []
    listArray.forEach(item => {
        let thisContainer = document.createElement("div")
        thisContainer.style = containerRow
        thisContainer.style.borderTop = "blue solid 3px"
        thisContainer.style.alignItems = "center"
        rightBottom.appendChild(thisContainer)

            let thisItem = document.createElement("div")
            thisItem.style = textStyle
            thisItem.style.margin = "0 10px 0 10px"
            thisItem.innerHTML = item.idNumber
            thisContainer.appendChild(thisItem)
            thisItem.setAttribute("id","PIN"+item.idNumber)
            if (item.selected)
                {thisItem.style.border = "solid 2px #BB482E"}
            else
                {thisItem.style.border = ""}
            thisElement = document.getElementById("privatePlanets")
            thisElement.innerHTML = "Private List (" + getPrivatePlanets() + ")"

            let thisBox = document.createElement("div")
            thisBox.style = planetBoxStyle
            thisContainer.appendChild(thisBox)

                let img = new Image()
                img.src = item.imgSrc
                img.style.marginLeft = -50 + "px"
                img.style.marginTop = 5 + "px"
                thisBox.appendChild(img)
                img.style.cursor = "pointer"
                img.addEventListener("click",()=>{
                    thisElement = document.getElementById("PIN"+item.idNumber)
                    if (item.selected){
                        item.selected = false
                        thisElement.style.border = ""}
                    else {
                        item.selected = true
                        thisElement.style.border = "solid 2px #BB482E"}
                    thisElement = document.getElementById("privatePlanets")
                    thisElement.innerHTML = "Private List (" + getPrivatePlanets() + ")"
                    })

            let thisContainer2 = document.createElement("div")
            thisContainer2.style = containerColumn
            thisContainer2.style.margin = "0 20px 0 20px"
            thisContainer.appendChild(thisContainer2)

                thisItem = document.createElement("div")
                thisItem.style = textStyle
                thisItem.innerHTML = "Name : " + item.label
                thisContainer2.appendChild(thisItem)

                thisItem = document.createElement("div")
                thisItem.style = textStyle
                thisItem.innerHTML = "Telescope : " + item.telescope
                thisContainer2.appendChild(thisItem)

                thisItem = document.createElement("div")
                thisItem.style = textStyle
                thisItem.innerHTML = "Unlock Cost : " + item.unlockCost
                thisContainer2.appendChild(thisItem)

            let thisContainer3 = document.createElement("div")
            thisContainer3.style = containerColumn
            thisContainer.appendChild(thisContainer3)

                for (i=0;i<item.ores.length;i++){

                    let subContainer = document.createElement("div")
                    subContainer.style = containerRow
                    subContainer.style.alignItems = "center"
                    thisContainer3.appendChild(subContainer)

                        img = new Image(30,30)
                        img.src = "./IPM Components/"+item.ores[i].label+".jpg"
                        img.style.marginRight = 10 + "px"
                        subContainer.appendChild(img)

                        thisItem = document.createElement("div")
                        thisItem.style = textStyle
                        thisItem.style.marginTop = -1 + "px"
                        thisItem.innerHTML =
                        item.ores[i].label + " " + item.ores[i].yield + "%"
                        subContainer.appendChild(thisItem)
                }
            })
    }