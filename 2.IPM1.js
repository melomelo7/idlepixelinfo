
function cleanParent(parent){
    while(parent.children.length >0){
        parent.removeChild(parent.lastChild)
    }}


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


function clickProjects(){
    if (right.children.length>0){
        console.log("childs +")
        cleanParent(right)

    } else {
        cleanParent(right)
        buildProjectsGrid(cellSize)        
    }}


const cellSize = 35
function buildProjectsGrid(cellSize){
    let table = document.createElement("table")

    let cut = 5

    for (i=1;i<30;i++){
        let row = document.createElement("tr")

        if(i % 2 === 0)
            {row.style.height = cellSize/cut + "px"}
        else
            {row.style.height = cellSize + "px"}

        table.appendChild(row)
        for (j=1;j<30;j++){
            let cell = document.createElement("td")

            if(j % 2 === 0)
            {cell.style.width = cellSize/cut + "px"}
            else
            {cell.style.width = cellSize + "px"}
            
            cell.style.minWidth = cell.style.width
            cell.setAttribute("id","Row:"+i+"|Col:"+j)
            row.appendChild(cell)


            cell.style.border = "solid 1px white"
            
            cell.addEventListener("click",(e)=>{
                console.log(e.srcElement.id)

                console.log(e.srcElement.getBoundingClientRect())
            })

        }}

    right.appendChild(table)

    projectCells.forEach((obj)=>{
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
        else 
            {img.src = "./IPM Projects/"+obj.label+".jpg"}
        
        table.rows[obj.rows-1].cells[obj.cell-1].appendChild(img)
        table.rows[obj.rows-1].cells[obj.cell-1].style=`
        border:solid 1px white;
        cursor:pointer;
        `
        
        img.addEventListener("mouseover",()=>{info.innerHTML=obj.label})
        img.addEventListener("mouseout",()=>{info.innerHTML=infoTitle})
        img.addEventListener("click",function(e){clickCell2(e,obj)})
    })

    let img = new Image(cellSize,cellSize)
    img.src = "./IPM Projects/origin.png"
    table.rows[17-1].cells[13-1].appendChild(img)

    connections.forEach((obj)=>{
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
            }

        table.rows[obj.rows-1].cells[obj.cell-1]
        .addEventListener("mouseover",()=>{info.innerHTML=""})
    })

    


    table.rows[9].cells[18].style.backgroundImage = 
        "linear-gradient(to right, rgb(28,21,49) 50%, yellow 50%)"
    table.rows[9].cells[19].style.backgroundColor="yellow"
    table.rows[9].cells[20].style.backgroundColor="yellow"
    table.rows[9].cells[21].style.backgroundColor="yellow"
    table.rows[9].cells[22].style.backgroundImage = 
        "linear-gradient(to right, yellow 50%, rgb(28,21,49) 50%)"



    table.style.margin = "20px 0 0 40px"

// grid "space" style back color => rgb(28,21,49)


    }


function clickCell2(e,obj){
    if(showingProject){return}
    showingProject = true

    let container = document.createElement("div")
    container.style = containerStyle
    body.appendChild(container)

        let subContainer1 = document.createElement("div")
        subContainer1.style = subContainerStyleA
        container.appendChild(subContainer1)

            let text = document.createElement("div")
            text.style.fontSize = 28 + "px"
            text.style.margin = "10px"
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
            else 
                {img.src = "./IPM Projects/"+obj.label+".jpg"}

            subContainer1 .appendChild(img)
        
        let description = document.createElement("div")
        description.innerHTML = obj.description
        description.style.margin = "10px"
        container.appendChild(description)

        if (obj.comment){
            let comment = document.createElement("div")
            comment.innerHTML = obj.comment
            comment.style.margin = "10px"
            container.appendChild(comment)}

        let prerequisites = document.createElement("div")
        prerequisites.innerHTML = "Prerequisites :  " + obj.prerequisites
        prerequisites.style.margin = "10px"
        container.appendChild(prerequisites)

        let highestPlanet = document.createElement("div")
        highestPlanet.innerHTML = "Highest Planet Required :  " + obj.highestPlanetRequired
        highestPlanet.style.margin = "10px"
        container.appendChild(highestPlanet)

        let costLabel = document.createElement("div")
        costLabel.innerHTML = "Base Cost => Cost with Max Lev Lab"
        costLabel.style.margin = "10px"
        container.appendChild(costLabel)

        let subContainer2 = document.createElement("div")
        subContainer2.style = subContainerStyleB
        container.appendChild(subContainer2)

            let subContainer3 = document.createElement("div")
            subContainer3.style = subContainerStyleA
            subContainer2.appendChild(subContainer3)

                img = new Image()
                img.height = 40
                img.width = 40
                img.src = "./IPM Components/"+obj.component1.label+".jpg"
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
                img.src = "./IPM Components/"+obj.component2.label+".jpg"
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
                img.src = "./IPM Components/"+obj.component3.label+".jpg"
                subContainer5.appendChild(img)

                text = document.createElement("div")
                text.style.marginLeft = "10px"
                text.innerHTML = 
                obj.component3.label + " " + obj.component3.baseCost + " => " + obj.component3.costWithMaxLab
                subContainer5.appendChild(text)
            }

            let closeButton = document.createElement("div")
            closeButton.innerHTML = "Close"
            closeButton.style = closeButtonStyle
            closeButton.style.margin = "10px"
            closeButton.addEventListener("click",()=>{
                showingProject = false
                body.removeChild(container)
            })
            container.appendChild(closeButton)

}