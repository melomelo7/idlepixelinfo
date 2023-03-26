class Item {
    constructor({
        label = "",
        type = "ore",
        foundOnPlanets = [],
        unlockCost = 0,
        baseSellValue = 1,
        ingredient1=undefined,
        ingredient2=undefined,
        ingredient3=undefined,
    }){
        this.label = label
        this.type = type
        this.foundOnPlanets = foundOnPlanets
        this.unlockCost = unlockCost
        this.baseSellValue = baseSellValue
        this.ingredient1 = ingredient1
        this.ingredient2 = ingredient2
        this.ingredient3 = ingredient3
        this.img = "./IPM Components/"+this.label+".jpg"
    }
        
    get displayDiv()
        {switch(this.type)
        {case "ore" : return "oresColumn";break
        case "alloy" : return "barsColumn";break
        case "item" : return "itemsColumn";break}}

}

const itemsArray = []


itemsArray.push(

new Item({
    label:"copper ore",
    type:"ore",
    foundOnPlanets:["Balor","Drasta","Anadius"],
    unlockCost:"$ 100",
    baseSellValue: "$ 1"
})

)



function buildItems(){
    let itemsContainer = document.createElement("div")
    itemsContainer.style = containerRow
    right.appendChild(itemsContainer)

        let oresColumn = document.createElement("div")
        oresColumn.style = containerColumn
        oresColumn.setAttribute("id","oresColumn")
        itemsContainer.appendChild(oresColumn)

        let barsColumn = document.createElement("div")
        barsColumn.style = containerColumn
        barsColumn.setAttribute("id","barsColumn")
        itemsContainer.appendChild(barsColumn)

        let itemsColumn = document.createElement("div")
        itemsColumn.style = containerColumn
        itemsColumn.setAttribute("id","itemsColumn")
        itemsContainer.appendChild(itemsColumn)

        let itemDisplay = document.createElement("div")
        itemDisplay.setAttribute("id","itemDisplay")
        itemsContainer.appendChild(itemDisplay)

            let itemDisplayTop = document.createElement("div")
            itemDisplayTop.setAttribute("id","itemDisplayTop")
            itemDisplay.appendChild(itemDisplayTop)

            let itemDisplayBottom = document.createElement("div")
            itemDisplayBottom.setAttribute("id","itemDisplayBottom")
            itemDisplay.appendChild(itemDisplayBottom)

    console.log("build item man !")

itemsArray.forEach((item)=>{
    for(i=0;i<5;i++){
    let img = new Image(35,35)
    img.src = item.img
    img.style.maxHeight = "100%"
    img.style.border = "white 2px solid"
    document.getElementById(item.displayDiv).appendChild(img)
}
})

/*
oresColumn.innerHTML = "AAA"
barsColumn.innerHTML = "BBB"
itemsColumn.innerHTML = "CCC"
itemDisplayTop.innerHTML = "DDD"
itemDisplayBottom.innerHTML = "EEE"
*/
}