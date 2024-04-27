
const creditsArray = [
    {magnitude:"M ( e7~8)",credits:[0,10,30]},
    {magnitude:"B ( e9~11)",credits:[60,101,152]},
    {magnitude:"T (e12~14)",credits:[213,280,367]},
    {magnitude:"q (e15~17)",credits:[459,551,674]},
    {magnitude:"Q (e18~20)",credits:[790,930,1075]},
    {magnitude:"s (e21~23)",credits:[1230,1393,1567]},
    {magnitude:"S (e24~26)",credits:[1753,1947,2154]},
    {magnitude:"O (e27~29)",credits:[2370,2595,2831]},
    {magnitude:"N (e30~32)",credits:[3079,3335,3603]},
    {magnitude:"D (e33~35)",credits:[3881,4168,4466]},
]

const smeltersArray = 
["Free", "50.00 K","500.00 K","10.00 M","5.00 B",
"100.00 B","50.00 T","1.00 q","500.00 q","10.00 Q"]

const craftersArray =
["Free","1.00 M","100.00 M","50.00 B","1.00 T",
"500.00 T","10.00 q","5.00 Q","100.00 Q","50.00 s"]

const challengeRewards = [
    {target : "1.00 M",darkMatter:5,},
    {target : "10.00 M",darkMatter:10,},
    {target : "100.00 M",darkMatter:15,},
    {target : "1.00 B",darkMatter:20,},
    {target : "10.00 B",darkMatter:25,},
    {target : "100.00 B",darkMatter:30,},
    {target : "1.00 T",darkMatter:40,},
    {target : "10.00 T",darkMatter:50,},
    {target : "100.00 T",darkMatter:60,},
    {target : "1.00 q",darkMatter:70,},
    {target : "10.00 q",darkMatter:80,},
    {target : "100.00 q",darkMatter:90,},
    {target : "1.00 Q",darkMatter:100,},
    {target : "10.00 Q",darkMatter:115,},
    {target : "100.00 Q",darkMatter:130,},
    {target : "1.00 s",darkMatter:145,},
    {target : "10.00 s",darkMatter:160,},
    {target : "100.00 s",darkMatter:180,},
    {target : "1.00 S",darkMatter:200,},
    {target : "10.00 S",darkMatter:200,},
    {target : "100.00 S",darkMatter:200,},
    {target : "1.00 O",darkMatter:200,},
    {target : "10.00 O",darkMatter:200,},
    {target : "100.00 O",darkMatter:200,},
    {target : "1.00 N",darkMatter:200,},
    {target : "10.00 N",darkMatter:200,},
    {target : "100.00 N",darkMatter:200,},
    {target : "1.00 D",darkMatter:200,},
]

function formatKMBT(value,revert = false){
    let thisValue = undefined
//    let baseValue = undefined
    let rep = undefined

    if (!revert){
        thisValue = Number(value)

        if (thisValue >= 1000000000000)
            {rep = (thisValue / 1000000000000).toFixed(2) +" T"} 
        else if(thisValue >= 1000000000)
            {rep = (thisValue / 1000000000).toFixed(2) +" B"}
        else if(thisValue >= 1000000)
            {rep = (thisValue / 1000000).toFixed(2) +" M"}
        else if(thisValue >= 1000)
            {rep = (thisValue / 1000).toFixed(2) +" K"}
        else
            {rep = thisValue}
    } else {
        thisValue = value.toString()

        if (thisValue.includes("K") || thisValue.includes("k") )
            {rep = parseFloat(value).toFixed(2) * 1000}
        else if (thisValue.includes("M") || thisValue.includes("m"))
            {rep = parseFloat(value).toFixed(2) * 1000000}
        else if (thisValue.includes("B") || thisValue.includes("b"))
            {rep = parseFloat(value).toFixed(2) * 1000000000}
        else if (thisValue.includes("T") || thisValue.includes("t"))
            {rep = parseFloat(value).toFixed(2) * 1000000000000}
        else {rep = value}

        rep = Number(rep)
        }

        return rep
    }


function cleanParent(parent){
    while(parent.children.length >0){
        parent.removeChild(parent.lastChild)
    }}


function firstContact(){
    let thisText = `Welcome to IPM Infos, 
    if you cant see any text, <br><br> 
    try zooming the top left corner ..." <br><br>
    (this message will auto-destroy in 3...2...1...)
    `
    let msg = document.createElement("Div")
    msg.innerHTML = thisText
    msg.style = containerStyle
    body.appendChild(msg)
    centerScreen(msg)
    setTimeout(()=>{body.removeChild(msg)},3000)
}


function addLeftButton({label="",clickFunction=undefined,parent=left}){
    const thisItem = document.createElement("div")
    thisItem.style = h1StyleA
    thisItem.style.cursor = "pointer"
    thisItem.innerHTML = label
    thisItem.addEventListener("click",clickFunction)
    thisItem.addEventListener("mouseover", ()=>{
        thisItem.style = h1StyleB })
    thisItem.addEventListener("mouseout",()=>{
        thisItem.style = h1StyleA })
    parent.appendChild(thisItem)
}


function construction(){
    info.innerHTML = "Under Construction !!!"
    let thisContainer = document.createElement("div")
    thisContainer.style = containerColumn
    right.appendChild(thisContainer)
    let img = new Image()
    img.src = "./IPM Components/construction.jpg"
    thisContainer.appendChild(img)
    }

function popKiller(){
    info.innerHTML = infoTitle
    if(projectPop) {body.removeChild(projectPop);projectPop = undefined}
    }


function clickFaqs(){
    popKiller()
    cleanParent(right)
    setFaq()
}

function clickPlanets(){
    popKiller()
    cleanParent(right)
    buildPlanets()
    document.getElementById("planetFull").click()  
}

function clickItems(){
    popKiller()
    cleanParent(right)
    buildItems()
//    construction()
}

function clickProjects(){
    popKiller()
    cleanParent(right)
    setProjects()
    }


function clickStation(){
    popKiller()
    cleanParent(right)
    buildProjectsGrid("station",cellSize)
    }

function clickRooms(){
    popKiller()
    cleanParent(right)
    buildRooms()
    }

function clickProcess(){
    popKiller()
    cleanParent(right)
    buildProcess()
}

function clickLook(){
    popKiller()
    cleanParent(right)
    buildLook()
}

function buildLook(){
    let myCont = document.createElement("div")
    myCont.style = containerRow
    right.appendChild(myCont)
        let myEl = document.createElement("div")
        myCont.appendChild(myEl)
        myEl.innerHTML = "Toggle the game Graphics here, now set to : " + gameLook
        myEl.style = closeButtonStyle
        myEl.addEventListener("click",(e)=>{
            gameLook = e.srcElement.innerHTML.split(" : ")[1] === "Old" ? "New" : "Old"
            e.srcElement.innerHTML = e.srcElement.innerHTML.split(" : ")[0] + " : " +gameLook }) }

function centerScreen(element){
    element.style.position = "absolute"
    let rect = element.getBoundingClientRect()
    let posW = window.innerWidth/2 - rect.width/2
    let posH = window.innerHeight/2 - rect.height/2
    element.style.top = posH + window.scrollY -10 + "px"
    element.style.left = posW + window.scrollX +5 + "px"
}


const cellSize = 35
function buildProjectsGrid(whichGrid="",cellSize=0,globalContainer=right){

    let curStat = "(jan.2024)"
    let curVal = "50k"
    let topText = "Click a tile for more infos"
    topText += whichGrid !== "station" ? "" : 
    `<br>*For your information, current `+curStat+`
     <br>station will require more than `+curVal+` energy
     <br>cells to be fully upgraded*`

    let tabInfos = document.createElement("div")
    globalContainer.appendChild(tabInfos)
    tabInfos.innerHTML = topText
    tabInfos.style = textStyle
    tabInfos.style.fontSize = 20 + "px"
    tabInfos.style.paddingLeft = 40 + "px"
    tabInfos.style.color = "rgb(0,212,250)"
    tabInfos.style.textAlign = "left"


    let table = document.createElement("table")

    let cut = 5

    let maxRow = 0
    let maxCol =0
    let refArray1 = undefined
    let refArray2 = undefined

    switch (whichGrid){
        case "projects":
            maxRow = 29
            maxCol = 29
            refArray1 = projectCells
            refArray2 = projectsConnections
            break
        case "station":
            maxRow = 49
            maxCol = 19
            refArray1 = stationCells
            refArray2 = stationConnections
            break
    }


    for (i=1;i<=maxRow;i++){
        let row = document.createElement("tr")

        if (whichGrid === "projects" && i % 2 === 0)
            {row.style.height = cellSize/cut + "px"}
        else
            {row.style.height = cellSize + "px"}


        table.appendChild(row)

        for (j=1;j<=maxCol;j++){
            let cell = document.createElement("td")

            if (whichGrid === "projects" && j % 2 === 0)
                {cell.style.width = cellSize/cut + "px"}
            else
                {cell.style.width = cellSize + "px"}

            cell.style.minWidth = cell.style.width
            cell.setAttribute("id","Row:"+i+"|Col:"+j)
            row.appendChild(cell)

//            cell.style.border = "solid 1px white"
        }}

    globalContainer.appendChild(table)

    refArray1.forEach((obj)=>{
        let img = new Image(cellSize,cellSize)
        if (obj.label.includes("telescope")){
            let txt = obj.label.split(" ")[0]
            let ref = Number(obj.label.split(" ")[1])

            if (ref < 9)
                {img.src = "./IPM Projects/"+txt+"1.jpg"} 
            else if (ref > 8 && ref < 13)
                {img.src = "./IPM Projects/"+txt+"2.jpg"}
            else 
                {img.src = "./IPM Projects/"+txt+"3.jpg"}
            }
        else if (obj.label.includes("#"))
            {img.src = "./IPM Components/"+obj.label.split(" #")[0]+".jpg"}
        else 
            {img.src = "./IPM Projects/"+obj.label+".jpg"}
        
        img.style.display="block"

        table.rows[obj.rows-1].cells[obj.cell-1].appendChild(img)
        table.rows[obj.rows-1].cells[obj.cell-1].style=`
        border:solid 1px white;
        cursor:pointer;
        `
        
        img.addEventListener("mouseover",()=>{info.innerHTML=obj.label})
        img.addEventListener("mouseout",()=>{info.innerHTML=infoTitle})
        img.addEventListener("click",function(e){clickCell2(e,obj,whichGrid)})
    })

    if (whichGrid === "projects"){
        let img = new Image(cellSize,cellSize)
        img.src = "./IPM Projects/origin.png"
        table.rows[17-1].cells[13-1].appendChild(img)
        }

        refArray2.forEach((obj)=>{
        let hr = undefined
        switch(obj.dir){
            case "hor":
                table.rows[obj.rows-1].cells[obj.cell-1].style = `
                    display:flex;
                    flex-direction: column;
                    align-items: center;
                    `
                hr = document.createElement("hr")
                hr.style = hrHorStyle
                table.rows[obj.rows-1].cells[obj.cell-1].appendChild(hr)
                break
            case "ver":
                table.rows[obj.rows-1].cells[obj.cell-1].style = `
                display:flex;
                `
                hr = document.createElement("hr")
                hr.style = hrVerStyle
                table.rows[obj.rows-1].cells[obj.cell-1].appendChild(hr)
                break
            case "dia":
                table.rows[obj.rows-1].cells[obj.cell-1].style.backgroundColor="grey"
                break
            case "sta":
                table.rows[obj.rows-1].cells[obj.cell-1].style.backgroundColor="rgb(37,156,180)"
                //table.rows[obj.rows-1].cells[obj.cell-1].style.backgroundColor="rgb(40,238,91)"
                break
            default :
                table.rows[obj.rows-1].cells[obj.cell-1].style.backgroundColor="red"
            }
        table.rows[obj.rows-1].cells[obj.cell-1]
        .addEventListener("click",()=>{popKiller()})
    })

    

    if (whichGrid ==="projects" ){
        table.rows[9].cells[18].style.backgroundImage = 
            "linear-gradient(to right, rgb(28,21,49) 50%, grey 50%)"
        table.rows[9].cells[19].style.backgroundColor="grey"
        table.rows[9].cells[20].style.backgroundColor="grey"
        table.rows[9].cells[21].style.backgroundColor="grey"
        table.rows[9].cells[22].style.backgroundImage = 
            "linear-gradient(to right, grey 50%, rgb(28,21,49) 50%)"
    }


    table.style.margin = "20px 0 0 40px"

// grid "space" style back color => rgb(28,21,49)


    }


function clickCell2(e,obj,whichGrid){
    popKiller()

    let projectPopWidth = 300
    projectPop = document.createElement("div")
    projectPop.style = containerStyle
    projectPop.style.width = projectPopWidth + "px"
    projectPop.style.opacity = 0.9
    body.appendChild(projectPop)

        let subContainer1 = document.createElement("div")
        subContainer1.style = subContainerStyleA
        projectPop.appendChild(subContainer1)

            let text = document.createElement("div")
            text.style.fontSize = 20 + "px"
            text.style.margin = "10px"
            text.style.borderBottom = "blue solid 3px"
            text.innerHTML = obj.label
            subContainer1.appendChild(text)

            let img = new Image(40,40)

            if (obj.label.includes("telescope")){
                let txt = obj.label.split(" ")[0]
                let ref = Number(obj.label.split(" ")[1])

                if (ref < 9)
                    {img.src = "./IPM Projects/"+txt+"1.jpg"} 
                else if (ref > 8 && ref < 13)
                    {img.src = "./IPM Projects/"+txt+"2.jpg"}
                else 
                    {img.src = "./IPM Projects/"+txt+"3.jpg"}
                }
            else if (obj.label.includes("#"))
                {img.src = "./IPM Components/"+obj.label.split(" #")[0]+".jpg"}
            else 
                {img.src = "./IPM Projects/"+obj.label+".jpg"}

            subContainer1.appendChild(img)
        
        if (obj.description){
        let description = document.createElement("div")
        description.innerHTML = obj.description
        description.style.margin = "10px"
        projectPop.appendChild(description)
            }

        if (obj.comment){
            let comment = document.createElement("div")
            comment.innerHTML = obj.comment
            comment.style.margin = "10px"
            projectPop.appendChild(comment)}

        if (obj.prerequisites){
        let prerequisites = document.createElement("div")
        prerequisites.innerHTML = "Prerequisites :  " + obj.prerequisites
        prerequisites.style.margin = "10px"
        projectPop.appendChild(prerequisites)
            }

        if (obj.highestPlanetRequired){
        let highestPlanet = document.createElement("div")
        highestPlanet.innerHTML = "Highest Planet Required :  " + obj.highestPlanetRequired
        highestPlanet.style.margin = "10px"
        projectPop.appendChild(highestPlanet)
            }
        
        if(whichGrid === "projects"){

        let costLabel = document.createElement("div")
        costLabel.innerHTML = "Base Cost => Cost with Max Lev Lab"
        costLabel.style.margin = "10px"
        projectPop.appendChild(costLabel)
            
        let subContainer2 = document.createElement("div")
        subContainer2.style = subContainerStyleB
        projectPop.appendChild(subContainer2)

            let subContainer3 = document.createElement("div")
            subContainer3.style = subContainerStyleA
            subContainer2.appendChild(subContainer3)

                img = new Image()
                img.height = 40
                img.width = 40
                img.src = gameLook === "Old" ? "./IPM Components/"+obj.component1.label+".jpg" :
                "./IPM Components/"+obj.component1.label+"n.jpg"
                subContainer3 .appendChild(img)

                text = document.createElement("div")
                text.style.marginLeft = "10px"
                text.innerHTML = 
                obj.component1.label + " " + obj.component1.baseCost + " => " + obj.component1.costWithMaxLab
                subContainer3.appendChild(text)

        if (obj.component2.label) {
            let subContainer4 = document.createElement("div")
            subContainer4.style = subContainerStyleA
            subContainer2.appendChild(subContainer4)

                img = new Image()
                img.height = 40
                img.width = 40
                img.src = gameLook === "Old" ? "./IPM Components/"+obj.component2.label+".jpg" :
                "./IPM Components/"+obj.component2.label+"n.jpg"
                subContainer4 .appendChild(img)

                text = document.createElement("div")
                text.style.marginLeft = "10px"
                text.innerHTML = 
                obj.component2.label + " " + obj.component2.baseCost + " => " + obj.component2.costWithMaxLab
                subContainer4.appendChild(text)
            }

        if (obj.component3.label) {
            let subContainer5 = document.createElement("div")
            subContainer5.style = subContainerStyleA
            subContainer2.appendChild(subContainer5)

                img = new Image()
                img.height = 40
                img.width = 40
                img.src = gameLook === "Old" ? "./IPM Components/"+obj.component3.label+".jpg" :
                "./IPM Components/"+obj.component3.label+"n.jpg"
                subContainer5.appendChild(img)

                text = document.createElement("div")
                text.style.marginLeft = "10px"
                text.innerHTML = 
                obj.component3.label + " " + obj.component3.baseCost + " => " + obj.component3.costWithMaxLab
                subContainer5.appendChild(text)
            }
        }

        if (whichGrid === "station"){
            let bonusPerLevel = document.createElement("div")
            bonusPerLevel.innerHTML = 
            obj.bonusPerLevel > 0 ? "Bonus per Level + "+obj.bonusPerLevel : "Bonus per Level " + obj.bonusPerLevel
            bonusPerLevel.innerHTML = 
            obj.percentage ? bonusPerLevel.innerHTML + "%" : bonusPerLevel.innerHTML
            bonusPerLevel.style.margin = "10px"
            projectPop.appendChild(bonusPerLevel)

            let maxLevel = document.createElement("div")
            maxLevel.innerHTML = "Max Level : "+obj.maxLevel
            maxLevel.style.margin = "10px"
            projectPop.appendChild(maxLevel)

            let costsLabel = document.createElement("div")
            costsLabel.innerHTML = "Costs : "
            costsLabel.style.margin = "10px"
            projectPop.appendChild(costsLabel)

            let costs = document.createElement("div")
            for(i=0;i<obj.costs.length;i++){
                costs.innerHTML += obj.costs[i] + " - "
                if((i+1) % 7 === 0){costs.innerHTML += "<br>"}
            }
            costs.innerHTML = costs.innerHTML.slice(0,costs.innerHTML.length-2)
            costs.style.margin = "10px"
            costs.style.borderTop = "blue solid 3px"
            costs.style.borderBottom = "blue solid 3px"
            projectPop.appendChild(costs)

            let totalCost = document.createElement("div")
            totalCost.innerHTML = "Buy all for : "+obj.totalCost
            totalCost.style.margin = "10px"
            projectPop.appendChild(totalCost)

            let totalBonus = document.createElement("div")
            totalBonus.innerHTML = "Bonus at Max Level : " 
            totalBonus.innerHTML += 
            obj.percentage ? obj.totalBonus + "%" : "x" + (Number(obj.totalBonus) + 1)
            totalBonus.style.margin = "10px"
            projectPop.appendChild(totalBonus)

        }

            let closeButton = document.createElement("div")
            closeButton.innerHTML = "Close"
            closeButton.style = closeButtonStyle
            closeButton.style.margin = "10px"
            closeButton.addEventListener("click",()=>{
                body.removeChild(projectPop)
                projectPop = undefined
            })
            projectPop.appendChild(closeButton)

            centerScreen(projectPop)
}