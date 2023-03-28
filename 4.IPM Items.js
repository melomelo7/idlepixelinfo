class Item {
    constructor({
        label = "",
        type = "ore",
        baseCraftTime = "",
        unlockCost = 0,
        baseSellValue = 1,
        ingredients=[],
    }){
        this.label = label
        this.type = type
        this.baseCraftTime = baseCraftTime
        this.unlockCost = unlockCost
        this.baseSellValue = baseSellValue
        this.ingredients = ingredients
        this.img = "./IPM Components/"+this.label+".jpg"
    }
        
    get displayDiv()
        {switch(this.type)
        {case "ore" : return "oresColumn";break
        case "bar" : return "barsColumn";break
        case "item" : return "itemsColumn";break}}

    get foundOnPlanets(){
        let newArray = []
        for (let i=0;i<planetsArray.length;i++){
            for(let j=0;j<planetsArray[i].ores.length;j++){
                if (planetsArray[i].ores[j].label === this.label){
                    newArray.push(planetsArray[i].label)
                }}}
        return newArray}

}



const itemsArray = []


itemsArray.push(

new Item({
    label:"copper ore",
    type:"ore",
    unlockCost:"$ 100",
    baseSellValue: "$ 1"
}),

new Item({
    label:"iron ore",
    type:"ore",
    unlockCost:"$ 200",
    baseSellValue: "$ 2",
}),

new Item({
    label:"lead ore",
    type:"ore",
    unlockCost:"$ 1.25 K",
    baseSellValue: "$ 4",
}),

new Item({
    label:"silica ore",
    type:"ore",
    unlockCost:"$ 15.00 K",
    baseSellValue: "$ 8",
}),

new Item({
    label:"aluminium ore",
    type:"ore",
    unlockCost:"$ 40.00 K",
    baseSellValue: "$ 17",
}),

new Item({
    label:"silver ore",
    type:"ore",
    unlockCost:"$ 250.00 K",
    baseSellValue: "$ 36",
}),

new Item({
    label:"gold ore",
    type:"ore",
    unlockCost:"$ 800.00 K",
    baseSellValue: "$ 75",
}),

new Item({
    label:"diamond",
    type:"ore",
    unlockCost:"$ 6.00 M",
    baseSellValue: "$ 160",
}),

new Item({
    label:"platinum ore",
    type:"ore",
    unlockCost:"$ 25.00 M",
    baseSellValue: "$ 340",
}),

new Item({
    label:"titanium ore",
    type:"ore",
    unlockCost:"$ 200.00 M",
    baseSellValue: "$ ",
}),

new Item({
    label:"iridium ore",
    type:"ore",
    unlockCost:"$ 1.60 B",
    baseSellValue: "$ ",
}),

new Item({
    label:"palladium ore",
    type:"ore",
    unlockCost:"$ 12.50 B",
    baseSellValue: "$ ",
}),

new Item({
    label:"osmium ore",
    type:"ore",
    unlockCost:"$ 100.00 B",
    baseSellValue: "$ ",
}),

new Item({
    label:"rhodium ore",
    type:"ore",
    unlockCost:"$ 1.50 T",
    baseSellValue: "$ ",
}),

new Item({
    label:"inerton ore",
    type:"ore",
    unlockCost:"$ 25.00 T",
    baseSellValue: "$ ",
}),

new Item({
    label:"quadium ore",
    type:"ore",
    unlockCost:"$ 400.00 T",
    baseSellValue: "$ ",
}),

new Item({
    label:"scrith ore",
    type:"ore",
    unlockCost:"$ 6.20 q",
    baseSellValue: "$ ",
}),

new Item({
    label:"uru ore",
    type:"ore",
    unlockCost:"$ 100.00 q",
    baseSellValue: "$ ",
}),

new Item({
    label:"vibranium ore",
    type:"ore",
    unlockCost:"$ 1.50 Q",
    baseSellValue: "$ ",
}),

new Item({
    label:"aether ore",
    type:"ore",
    unlockCost:"$ 25.00 Q",
    baseSellValue: "$ ",
}),

new Item({
    label:"viterium ore",
    type:"ore",
    unlockCost:"$ 360.00 Q",
    baseSellValue: "$ ",
}),

new Item({
    label:"xynium ore",
    type:"ore",
    unlockCost:"$ 7.50 s",
    baseSellValue: "$ ",
}),

new Item({
    label:"quolium ore",
    type:"ore",
    unlockCost:"$ 170.00 s",
    baseSellValue: "$ ",
}),

new Item({
    label:"luterium ore",
    type:"ore",
    unlockCost:"$ 3.90 S",
    baseSellValue: "$ ",
}),

new Item({
    label:"wraith ore",
    type:"ore",
    unlockCost:"$ 95.00 S",
    baseSellValue: "$ ",
}),


/*
new Item({
    label:"",
    type:"ore",
    unlockCost:"$ .00",
    baseSellValue: "$ ",
}),
*/







new Item({
    label:"copper bar",
    type:"bar",
    unlockCost:"Free",
    baseCraftTime:"20s",
    ingredients:[
        {label:"copper ore",amount:1000},
    ],
    baseSellValue: "$ 1.45K",
}),

new Item({
    label:"iron bar",
    type:"bar",
    unlockCost:"$ 3.00K",
    baseCraftTime:"30s",
    ingredients:[
        {label:"iron ore",amount:1000},
    ],
    baseSellValue: "$ 3.00K",
}),

new Item({
    label:"lead bar",
    type:"bar",
    unlockCost:"$ 9.00K",
    baseCraftTime:"40s",
    ingredients:[
        {label:"lead ore",amount:1000},
    ],
    baseSellValue: "$ 6.10K",
}),

new Item({
    label:"silicon bar",
    type:"bar",
    unlockCost:"$ 25.00K",
    baseCraftTime:"1m 0s",
    ingredients:[
        {label:"silica ore",amount:1000},
    ],
    baseSellValue: "$ 12.50K",
}),

new Item({
    label:"aluminium bar",
    type:"bar",
    unlockCost:"$ 75.00K",
    baseCraftTime:"1m 20s",
    ingredients:[
        {label:"aluminium ore",amount:1000},
    ],
    baseSellValue: "$ 27.60K",
}),

new Item({
    label:"silver bar",
    type:"bar",
    unlockCost:"$ 225.00K",
    baseCraftTime:"2m 0s",
    ingredients:[
        {label:"silver ore",amount:1000},
    ],
    baseSellValue: "$ 60.00K",
}),

new Item({
    label:"gold bar",
    type:"bar",
    unlockCost:"$ 500.00K",
    baseCraftTime:"3m 0s",
    ingredients:[
        {label:"gold ore",amount:1000},
    ],
    baseSellValue: "$ 120.00K",
}),

new Item({
    label:"bronze bar",
    type:"bar",
    unlockCost:"$ 1.00M",
    baseCraftTime:"4m 0s",
    ingredients:[
        {label:"silver bar",amount:2},        
        {label:"copper bar",amount:10},
    ],
    baseSellValue: "$ 234.00K",
}),

new Item({
    label:"steel bar",
    type:"bar",
    unlockCost:"$ 2.00M",
    baseCraftTime:"8m 0s",
    ingredients:[
        {label:"lead bar",amount:15},        
        {label:"iron bar",amount:30},
    ],
    baseSellValue: "$ 340.00K",
}),

new Item({
    label:"platinum bar",
    type:"bar",
    unlockCost:"$ 4.00M",
    baseCraftTime:"10m 0s",
    ingredients:[
        {label:"gold bar",amount:2},        
        {label:"platinum ore",amount:1000},
    ],
    baseSellValue: "$ 780.00K",
}),












new Item({
    label:"copper wire",
    type:"item",
    unlockCost:"Free",
    baseCraftTime:"1m 0s",
    ingredients:[
        {label:"copper bar",amount:5},
    ],
    baseSellValue: "$ 10.00K",
}),

new Item({
    label:"iron nail",
    type:"item",
    unlockCost:"20.00K",
    baseCraftTime:"2m 0s",
    ingredients:[
        {label:"iron bar",amount:5},
    ],
    baseSellValue: "$ 20.00K",
}),

new Item({
    label:"battery",
    type:"item",
    unlockCost:"50.00K",
    baseCraftTime:"4m 0s",
    ingredients:[
        {label:"copper wire",amount:2},
        {label:"copper bar",amount:10},
    ],
    baseSellValue: "$ 70.00K",
}),

new Item({
    label:"hammer",
    type:"item",
    unlockCost:"100.00K",
    baseCraftTime:"8m 0s",
    ingredients:[
        {label:"iron nail",amount:2},
        {label:"lead bar",amount:5},
    ],
    baseSellValue: "$ 130.00K",
}),

new Item({
    label:"glass",
    type:"item",
    unlockCost:"200.00K",
    baseCraftTime:"12m 0s",
    ingredients:[
        {label:"silicon bar",amount:10},
    ],
    baseSellValue: "$ 220.00K",
}),

new Item({
    label:"circuit",
    type:"item",
    unlockCost:"400.00K",
    baseCraftTime:"20m 0s",
    ingredients:[
        {label:"silicon bar",amount:5},
        {label:"aluminium bar",amount:5},
        {label:"copper wire",amount:10},
    ],
    baseSellValue: "$ 620.00K",
}),

new Item({
    label:"lens",
    type:"item",
    unlockCost:"1.00M",
    baseCraftTime:"40m 0s",
    ingredients:[
        {label:"glass",amount:1},
        {label:"silver bar",amount:5},
    ],
    baseSellValue: "$ 1.10M",
}),

new Item({
    label:"laser",
    type:"item",
    unlockCost:"2.00M",
    baseCraftTime:"1h 0m",
    ingredients:[
        {label:"gold bar",amount:5},
        {label:"lens",amount:1},
        {label:"iron bar",amount:10},
    ],
    baseSellValue: "$ 3.20M",
}),

new Item({
    label:"basic computer",
    type:"item",
    unlockCost:"5.00M",
    baseCraftTime:"1h 20m",
    ingredients:[
        {label:"circuit",amount:5},
        {label:"silver bar",amount:5},
    ],
    baseSellValue: "$ 7.60M",
}),

new Item({
    label:"solar panel",
    type:"item",
    unlockCost:"10.00M",
    baseCraftTime:"1h 40m",
    ingredients:[
        {label:"circuit",amount:5},
        {label:"glass",amount:10},
    ],
    baseSellValue: "$ 12.50M",
}),

/*
new Item({
    label:"laser torch",
    type:"item",
    unlockCost:"20.00M",
    baseCraftTime:"1h 40m",
    ingredients:[
        {label:"circuit",amount:5},
        {label:"glass",amount:10},
    ],
    baseSellValue: "$ 12.50M",
}),
*/

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
        let img = new Image(35,35)
        img.src = item.img
        img.style.display = "block"
        img.style.border = "white 2px solid"
        document.getElementById(item.displayDiv).appendChild(img)

        img.addEventListener("mouseover",()=>{
                cleanParent(itemDisplayTop)

                let thisContainer = document.createElement("div")
                thisContainer.style = containerStyle
                thisContainer.style.marginLeft = 20 + "px"
                itemDisplayTop.appendChild(thisContainer)
    
                    img = new Image (40,40)
                    img.src = item.img
                    img.style.display = "block"
                    img.style = textStyle
                    thisContainer.appendChild(img)
    
                    let mydiv = document.createElement("div")
                    mydiv.style = textStyle
                    thisContainer.appendChild(mydiv)
                    mydiv.innerHTML = "Name : "+item.label
                    
                    if(item.foundOnPlanets.length>0){
                        mydiv = document.createElement("div")
                        mydiv.style = textStyle
                        thisContainer.appendChild(mydiv)
                        mydiv.innerHTML = "Found on Planet(s) : "
                        for (i=0;i<item.foundOnPlanets.length;i++){
                            mydiv.innerHTML += item.foundOnPlanets[i] + " - "
                        }
                        mydiv.innerHTML = mydiv.innerHTML.slice(0,mydiv.innerHTML.length-2)
                    }

                    mydiv = document.createElement("div")
                    mydiv.style = textStyle
                    thisContainer.appendChild(mydiv)
                    mydiv.innerHTML = "Unlock Cost : "+item.unlockCost
                    if(item.type === "ore")
                        {mydiv.innerHTML += " (" + item.foundOnPlanets[0] + ")"}

                    if (item.type !== "ore"){
                        mydiv = document.createElement("div")
                        mydiv.style = textStyle
                        thisContainer.appendChild(mydiv)
                        mydiv.innerHTML = "Base Smelt/Craft Time : "+item.baseCraftTime

                        mydiv = document.createElement("div")
                        mydiv.style = textStyle
                        thisContainer.appendChild(mydiv)
                        mydiv.innerHTML = "Required materials to smelt/craft : "
                        mydiv.style.borderBottom = "blue solid 3px"

                        for (i=0;i<item.ingredients.length;i++){

                            let thisDiv = document.createElement("div")
                            thisContainer.appendChild(thisDiv)
                            thisDiv.style = containerRow

                                img = new Image(30,30)
                                img.src = "./IPM Components/"+item.ingredients[i].label+".jpg"
                                img.style = textStyle
                                thisDiv.appendChild(img)

                                mydiv = document.createElement("div")
                                mydiv.style = textStyle
                                thisDiv.appendChild(mydiv)
                                mydiv.innerHTML = item.ingredients[i].amount + " " + item.ingredients[i].label
                        }
                        mydiv = document.createElement("div")
                        thisContainer.appendChild(mydiv)
                        mydiv.style.borderTop = "blue solid 3px"
                    }

                    mydiv = document.createElement("div")
                    mydiv.style = textStyle
                    thisContainer.appendChild(mydiv)
                    mydiv.innerHTML = "Base Sell Value : "+item.baseSellValue
                    
            })


/*

            cleanParent(itemDisplayTop)
            let thisContainer = document.createElement("div")
            thisContainer.style = containerStyle
            itemDisplayTop.appendChild(thisContainer)

                img = new Image (40,40)
                img.src = item.img
                img.style.display = "block"
                thisContainer.appendChild(img)

*/                
/*
                let thisItem = document.createElement("div")
                thisContainer.appendChild(thisItem)
                thisContainer.innerHTML = item.label
*/
        
        })
}


function boost(item){
    console.log(item)
}
