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


const oresArray = []
const barsArray = []
const itemsArray = []


oresArray.push(

new Item({
    label:"copper ore",
    type:"ore",
    unlockCost:"$ 100",
    baseSellValue: {value:1,unit:""},
}),

new Item({
    label:"iron ore",
    type:"ore",
    unlockCost:"$ 200",
    baseSellValue: {value:2,unit:""},
}),

new Item({
    label:"lead ore",
    type:"ore",
    unlockCost:"$ 1.25 K",
    baseSellValue: {value:4,unit:""},
}),

new Item({
    label:"silica ore",
    type:"ore",
    unlockCost:"$ 15.00 K",
    baseSellValue: {value:8,unit:""},
}),

new Item({
    label:"aluminium ore",
    type:"ore",
    unlockCost:"$ 40.00 K",
    baseSellValue: {value:17,unit:""},
}),

new Item({
    label:"silver ore",
    type:"ore",
    unlockCost:"$ 250.00 K",
    baseSellValue: {value:36,unit:""},
}),

new Item({
    label:"gold ore",
    type:"ore",
    unlockCost:"$ 800.00 K",
    baseSellValue: {value:75,unit:""},
}),

new Item({
    label:"diamond",
    type:"ore",
    unlockCost:"$ 6.00 M",
    baseSellValue: {value:160,unit:""},
}),

new Item({
    label:"platinum ore",
    type:"ore",
    unlockCost:"$ 25.00 M",
    baseSellValue: {value:340,unit:""},
}),

new Item({
    label:"titanium ore",
    type:"ore",
    unlockCost:"$ 200.00 M",
    baseSellValue: {value:730,unit:""},
}),

new Item({
    label:"iridium ore",
    type:"ore",
    unlockCost:"$ 1.60 B",
    baseSellValue: {value:1.6,unit:"K"},
}),

new Item({
    label:"palladium ore",
    type:"ore",
    unlockCost:"$ 12.50 B",
    baseSellValue: {value:3.5,unit:"K"},
}),

new Item({
    label:"osmium ore",
    type:"ore",
    unlockCost:"$ 100.00 B",
    baseSellValue: {value:7.8,unit:"K"},
}),

new Item({
    label:"rhodium ore",
    type:"ore",
    unlockCost:"$ 1.50 T",
    baseSellValue: {value:17.5,unit:"K"},
}),

new Item({
    label:"inerton ore",
    type:"ore",
    unlockCost:"$ 25.00 T",
    baseSellValue: {value:40,unit:"K"},
}),

new Item({
    label:"quadium ore",
    type:"ore",
    unlockCost:"$ 400.00 T",
    baseSellValue: {value:92,unit:"K"},
}),

new Item({
    label:"scrith ore",
    type:"ore",
    unlockCost:"$ 6.20 q",
    baseSellValue: {value:215,unit:"K"},
}),

new Item({
    label:"uru ore",
    type:"ore",
    unlockCost:"$ 100.00 q",
    baseSellValue: {value:510,unit:"K"},
}),

new Item({
    label:"vibranium ore",
    type:"ore",
    unlockCost:"$ 1.50 Q",
    baseSellValue: {value:1.25,unit:"M"},
}),

new Item({
    label:"aether ore",
    type:"ore",
    unlockCost:"$ 25.00 Q",
    baseSellValue: {value:3.2,unit:"M"},
}),

new Item({
    label:"viterium ore",
    type:"ore",
    unlockCost:"$ 360.00 Q",
    baseSellValue: {value:9,unit:"M"},
}),

new Item({
    label:"xynium ore",
    type:"ore",
    unlockCost:"$ 7.50 s",
    baseSellValue: {value:28,unit:"M"},
}),

new Item({
    label:"quolium ore",
    type:"ore",
    unlockCost:"$ 170.00 s",
    baseSellValue: {value:90,unit:"M"},
}),

new Item({
    label:"luterium ore",
    type:"ore",
    unlockCost:"$ 3.90 S",
    baseSellValue: {value:300,unit:"M"},
}),

new Item({
    label:"wraith ore",
    type:"ore",
    unlockCost:"$ 95.00 S",
    baseSellValue: {value:1.1,unit:"B"},
}),

)

/*
new Item({
    label:"",
    type:"ore",
    unlockCost:"$ .00",
    baseSellValue: "$ ",
}),
*/





barsArray.push(

new Item({
    label:"copper bar",
    type:"bar",
    unlockCost:"Free",
    baseCraftTime:{hr:0,mn:0,sc:20},
    ingredients:[
        {label:"copper ore",amount:1000},
    ],
    baseSellValue: {value:1.45,unit:"K"},
}),

new Item({
    label:"iron bar",
    type:"bar",
    unlockCost:"$ 3.00 K",
    baseCraftTime:{hr:0,mn:0,sc:30},
    ingredients:[
        {label:"iron ore",amount:1000},
    ],
    baseSellValue: {value:3,unit:"K"},
}),

new Item({
    label:"lead bar",
    type:"bar",
    unlockCost:"$ 9.00 K",
    baseCraftTime:{hr:0,mn:0,sc:40},
    ingredients:[
        {label:"lead ore",amount:1000},
    ],
    baseSellValue: {value:6.1,unit:"K"},
}),

new Item({
    label:"silicon bar",
    type:"bar",
    unlockCost:"$ 25.00 K",
    baseCraftTime:{hr:0,mn:1,sc:0},
    ingredients:[
        {label:"silica ore",amount:1000},
    ],
    baseSellValue: {value:12.5,unit:"K"},
}),

new Item({
    label:"aluminium bar",
    type:"bar",
    unlockCost:"$ 75.00 K",
    baseCraftTime:{hr:0,mn:1,sc:20},
    ingredients:[
        {label:"aluminium ore",amount:1000},
    ],
    baseSellValue: {value:27.6,unit:"K"},
}),

new Item({
    label:"silver bar",
    type:"bar",
    unlockCost:"$ 225.00 K",
    baseCraftTime:{hr:0,mn:2,sc:0},
    ingredients:[
        {label:"silver ore",amount:1000},
    ],
    baseSellValue: {value:60,unit:"K"},
}),

new Item({
    label:"gold bar",
    type:"bar",
    unlockCost:"$ 500.00 K",
    baseCraftTime:{hr:0,mn:3,sc:0},
    ingredients:[
        {label:"gold ore",amount:1000},
    ],
    baseSellValue: {value:120,unit:"K"},
}),

new Item({
    label:"bronze bar",
    type:"bar",
    unlockCost:"$ 1.00 M",
    baseCraftTime:{hr:0,mn:4,sc:0},
    ingredients:[
        {label:"silver bar",amount:2},        
        {label:"copper bar",amount:10},
    ],
    baseSellValue: {value:234,unit:"K"},
}),

new Item({
    label:"steel bar",
    type:"bar",
    unlockCost:"$ 2.00 M",
    baseCraftTime:{hr:0,mn:8,sc:0},
    ingredients:[
        {label:"lead bar",amount:15},        
        {label:"iron bar",amount:30},
    ],
    baseSellValue: {value:340,unit:"K"},
}),

new Item({
    label:"platinum bar",
    type:"bar",
    unlockCost:"$ 4.00 M",
    baseCraftTime:{hr:0,mn:10,sc:0},
    ingredients:[
        {label:"gold bar",amount:2},        
        {label:"platinum ore",amount:1000},
    ],
    baseSellValue: {value:780,unit:"K"},
}),

new Item({
    label:"titanium bar",
    type:"bar",
    unlockCost:"$ 8.00 M",
    baseCraftTime:{hr:0,mn:12,sc:0},
    ingredients:[
        {label:"bronze bar",amount:2},        
        {label:"titanium ore",amount:1000},
    ],
    baseSellValue: {value:1.63,unit:"M"},
}),

new Item({
    label:"iridium bar",
    type:"bar",
    unlockCost:"$ 15.00 M",
    baseCraftTime:{hr:0,mn:14,sc:0},
    ingredients:[
        {label:"steel bar",amount:2},        
        {label:"iridium ore",amount:1000},
    ],
    baseSellValue: {value:3.11,unit:"M"},
}),

new Item({
    label:"palladium bar",
    type:"bar",
    unlockCost:"$ 30.00 M",
    baseCraftTime:{hr:0,mn:16,sc:0},
    ingredients:[
        {label:"platinum bar",amount:2},        
        {label:"palladium ore",amount:1000},
    ],
    baseSellValue: {value:7,unit:"M"},
}),

new Item({
    label:"osmium bar",
    type:"bar",
    unlockCost:"$ 60.00 M",
    baseCraftTime:{hr:0,mn:18,sc:0},
    ingredients:[
        {label:"titanium bar",amount:2},        
        {label:"osmium ore",amount:1000},
    ],
    baseSellValue: {value:14.5,unit:"M"},
}),

new Item({
    label:"rhodium bar",
    type:"bar",
    unlockCost:"$ 120.00 M",
    baseCraftTime:{hr:0,mn:20,sc:0},
    ingredients:[
        {label:"iridium bar",amount:2},        
        {label:"rhodium ore",amount:1000},
    ],
    baseSellValue: {value:31,unit:"M"},
}),

new Item({
    label:"inerton alloy",
    type:"bar",
    unlockCost:"$ 250.00 M",
    baseCraftTime:{hr:0,mn:24,sc:0},
    ingredients:[
        {label:"palladium bar",amount:2},        
        {label:"inerton ore",amount:1000},
    ],
    baseSellValue: {value:68,unit:"M"},
}),

new Item({
    label:"quadium alloy",
    type:"bar",
    unlockCost:"$ 500.00 M",
    baseCraftTime:{hr:0,mn:28,sc:0},
    ingredients:[
        {label:"osmium bar",amount:2},        
        {label:"quadium ore",amount:1000},
    ],
    baseSellValue: {value:152,unit:"M"},
}),

new Item({
    label:"scrith alloy",
    type:"bar",
    unlockCost:"$ 1.00 B",
    baseCraftTime:{hr:0,mn:32,sc:0},
    ingredients:[
        {label:"rhodium bar",amount:2},        
        {label:"scrith ore",amount:1000},
    ],
    baseSellValue: {value:352,unit:"M"},
}),

new Item({
    label:"uru alloy",
    type:"bar",
    unlockCost:"$ 2.00 B",
    baseCraftTime:{hr:0,mn:36,sc:0},
    ingredients:[
        {label:"inerton alloy",amount:2},        
        {label:"uru ore",amount:1000},
    ],
    baseSellValue: {value:832,unit:"M"},
}),

new Item({
    label:"vibranium alloy",
    type:"bar",
    unlockCost:"$ 4.00 B",
    baseCraftTime:{hr:0,mn:40,sc:0},
    ingredients:[
        {label:"quadium alloy",amount:2},        
        {label:"vibranium ore",amount:1000},
    ],
    baseSellValue: {value:2.05,unit:"B"},
}),

new Item({
    label:"aether alloy",
    type:"bar",
    unlockCost:"$ 8.00 B",
    baseCraftTime:{hr:0,mn:44,sc:0},
    ingredients:[
        {label:"scrith alloy",amount:2},        
        {label:"aether ore",amount:1000},
    ],
    baseSellValue: {value:5.12,unit:"B"},
}),

new Item({
    label:"viterium alloy",
    type:"bar",
    unlockCost:"$ 16.00 B",
    baseCraftTime:{hr:0,mn:48,sc:0},
    ingredients:[
        {label:"uru alloy",amount:2},        
        {label:"viterium ore",amount:1000},
    ],
    baseSellValue: {value:15.5,unit:"B"},
}),

new Item({
    label:"xynium alloy",
    type:"bar",
    unlockCost:"$ 84.00 B",
    baseCraftTime:{hr:0,mn:55,sc:0},
    ingredients:[
        {label:"viterium alloy",amount:5},        
        {label:"xynium ore",amount:1500},
    ],
    baseSellValue: {value:48,unit:"B"},
}),

new Item({
    label:"quolium alloy",
    type:"bar",
    unlockCost:"$ 275.00 B",
    baseCraftTime:{hr:1,mn:2,sc:0},
    ingredients:[
        {label:"aether alloy",amount:5},        
        {label:"quolium ore",amount:1500},
    ],
    baseSellValue: {value:160,unit:"B"},
}),

new Item({
    label:"luterium alloy",
    type:"bar",
    unlockCost:"$ 1.00 T",
    baseCraftTime:{hr:1,mn:9,sc:0},
    ingredients:[
        {label:"viterium alloy",amount:5},        
        {label:"luterium ore",amount:1500},
    ],
    baseSellValue: {value:600,unit:"B"},
}),

new Item({
    label:"wraith alloy",
    type:"bar",
    unlockCost:"$ 4.20 T",
    baseCraftTime:{hr:1,mn:16,sc:0},
    ingredients:[
        {label:"xynium alloy",amount:5},        
        {label:"wraith ore",amount:1500},
    ],
    baseSellValue: {value:2.4,unit:"T"},
}),

)

/*
new Item({
    label:" bar",
    type:"bar",
    unlockCost:"$ .00 ",
    baseCraftTime:{hr:0,mn:0,sc:0},
    ingredients:[
        {label:" bar",amount:2},        
        {label:" ore",amount:1000},
    ],
    baseSellValue: "$ .00 ",
}),
*/







itemsArray.push(

new Item({
    label:"copper wire",
    type:"item",
    unlockCost:"Free",
    baseCraftTime:{hr:0,mn:1,sc:0},
    ingredients:[
        {label:"copper bar",amount:5},
    ],
    baseSellValue: {value:10,unit:"K"},
}),

new Item({
    label:"iron nail",
    type:"item",
    unlockCost:"20.00 K",
    baseCraftTime:{hr:0,mn:2,sc:0},
    ingredients:[
        {label:"iron bar",amount:5},
    ],
    baseSellValue: {value:20,unit:"K"},
}),

new Item({
    label:"battery",
    type:"item",
    unlockCost:"50.00 K",
    baseCraftTime:{hr:0,mn:4,sc:0},
    ingredients:[
        {label:"copper wire",amount:2},
        {label:"copper bar",amount:10},
    ],
    baseSellValue: {value:70,unit:"K"},
}),

new Item({
    label:"hammer",
    type:"item",
    unlockCost:"100.00 K",
    baseCraftTime:{hr:0,mn:8,sc:0},
    ingredients:[
        {label:"iron nail",amount:2},
        {label:"lead bar",amount:5},
    ],
    baseSellValue: {value:135,unit:"K"},
}),

new Item({
    label:"glass",
    type:"item",
    unlockCost:"200.00 K",
    baseCraftTime:{hr:0,mn:12,sc:0},
    ingredients:[
        {label:"silicon bar",amount:10},
    ],
    baseSellValue: {value:220,unit:"K"},
}),

new Item({
    label:"circuit",
    type:"item",
    unlockCost:"400.00 K",
    baseCraftTime:{hr:0,mn:20,sc:0},
    ingredients:[
        {label:"silicon bar",amount:5},
        {label:"aluminium bar",amount:5},
        {label:"copper wire",amount:10},
    ],
    baseSellValue: {value:620,unit:"K"},
}),

new Item({
    label:"lens",
    type:"item",
    unlockCost:"1.00 M",
    baseCraftTime:{hr:0,mn:40,sc:0},
    ingredients:[
        {label:"glass",amount:1},
        {label:"silver bar",amount:5},
    ],
    baseSellValue: {value:1.1,unit:"M"},

}),

new Item({
    label:"laser",
    type:"item",
    unlockCost:"2.00 M",
    baseCraftTime:{hr:1,mn:0,sc:0},
    ingredients:[
        {label:"gold bar",amount:5},
        {label:"lens",amount:1},
        {label:"iron bar",amount:10},
    ],
    baseSellValue: {value:3.2,unit:"M"},
}),

new Item({
    label:"basic computer",
    type:"item",
    unlockCost:"5.00 M",
    baseCraftTime:{hr:1,mn:20,sc:0},
    ingredients:[
        {label:"circuit",amount:5},
        {label:"silver bar",amount:5},
    ],
    baseSellValue: {value:7.6,unit:"M"},
}),

new Item({
    label:"solar panel",
    type:"item",
    unlockCost:"10.00 M",
    baseCraftTime:{hr:1,mn:40,sc:0},
    ingredients:[
        {label:"circuit",amount:5},
        {label:"glass",amount:10},
    ],
    baseSellValue: {value:12.5,unit:"M"},
}),

new Item({
    label:"laser torch",
    type:"item",
    unlockCost:"20.00 M",
    baseCraftTime:{hr:2,mn:0,sc:0},
    ingredients:[
        {label:"bronze bar",amount:5},
        {label:"laser",amount:2},
        {label:"lens",amount:5},
    ],
    baseSellValue: {value:31,unit:"M"},
}),

new Item({
    label:"advanced battery",
    type:"item",
    unlockCost:"30.00 M",
    baseCraftTime:{hr:2,mn:30,sc:0},
    ingredients:[
        {label:"steel bar",amount:20},
        {label:"battery",amount:30},
    ],
    baseSellValue: {value:35,unit:"M"},
}),

new Item({
    label:"thermal scanner",
    type:"item",
    unlockCost:"50.00 M",
    baseCraftTime:{hr:3,mn:0,sc:0},
    ingredients:[
        {label:"platinum bar",amount:5},
        {label:"laser",amount:2},
        {label:"glass",amount:5},
    ],
    baseSellValue: {value:71.5,unit:"M"},
}),

new Item({
    label:"advanced computer",
    type:"item",
    unlockCost:"120.00 M",
    baseCraftTime:{hr:3,mn:30,sc:0},
    ingredients:[
        {label:"basic computer",amount:5},
        {label:"titanium bar",amount:5},
    ],
    baseSellValue: {value:180,unit:"M"},
}),

new Item({
    label:"navigation module",
    type:"item",
    unlockCost:"250.00 M",
    baseCraftTime:{hr:3,mn:45,sc:0},
    ingredients:[
        {label:"laser torch",amount:2},
        {label:"thermal scanner",amount:1},
    ],
    baseSellValue: {value:1,unit:"B"},
}),

new Item({
    label:"plasma torch",
    type:"item",
    unlockCost:"550.00 M",
    baseCraftTime:{hr:4,mn:10,sc:0},
    ingredients:[
        {label:"iridium bar",amount:15},
        {label:"laser torch",amount:5},
    ],
    baseSellValue: {value:1.15,unit:"B"},
}),

new Item({
    label:"radio tower",
    type:"item",
    unlockCost:"1.50 B",
    baseCraftTime:{hr:4,mn:20,sc:0},
    ingredients:[
        {label:"platinum bar",amount:75},
        {label:"aluminium bar",amount:150},
        {label:"titanium bar",amount:50},
    ],
    baseSellValue: {value:1.45,unit:"B"},
}),

new Item({
    label:"telescope",
    type:"item",
    unlockCost:"5.00 B",
    baseCraftTime:{hr:4,mn:40,sc:0},
    ingredients:[
        {label:"lens",amount:20},
        {label:"advanced computer",amount:1},
    ],
    baseSellValue: {value:2.7,unit:"B"},
}),

new Item({
    label:"satellite dish",
    type:"item",
    unlockCost:"17.50 B",
    baseCraftTime:{hr:5,mn:0,sc:0},
    ingredients:[
        {label:"steel bar",amount:150},
        {label:"palladium bar",amount:30},
    ],
    baseSellValue: {value:3.4,unit:"B"},
}),

new Item({
    label:"motor",
    type:"item",
    unlockCost:"60.00 B",
    baseCraftTime:{hr:5,mn:20,sc:0},
    ingredients:[
        {label:"bronze bar",amount:500},
        {label:"hammer",amount:200},
    ],
    baseSellValue: {value:7,unit:"B"},
}),

new Item({
    label:"accumulator",
    type:"item",
    unlockCost:"100.00 B",
    baseCraftTime:{hr:5,mn:40,sc:0},
    ingredients:[
        {label:"osmium bar",amount:20},
        {label:"advanced battery",amount:3},
    ],
    baseSellValue: {value:12,unit:"B"},
}),

new Item({
    label:"nuclear capsule",
    type:"item",
    unlockCost:"200.00 B",
    baseCraftTime:{hr:5,mn:50,sc:0},
    ingredients:[
        {label:"rhodium bar",amount:5},
        {label:"plasma torch",amount:1},
    ],
    baseSellValue: {value:26,unit:"B"},
}),

new Item({
    label:"wind turbine",
    type:"item",
    unlockCost:"500.00 B",
    baseCraftTime:{hr:6,mn:0,sc:0},
    ingredients:[
        {label:"aluminium bar",amount:300},
        {label:"motor",amount:1},
    ],
    baseSellValue: {value:140,unit:"B"},
}),

new Item({
    label:"space probe",
    type:"item",
    unlockCost:"1.00 T",
    baseCraftTime:{hr:6,mn:10,sc:0},
    ingredients:[
        {label:"satellite dish",amount:1},
        {label:"solar panel",amount:25},
        {label:"telescope",amount:1},
    ],
    baseSellValue: {value:180,unit:"B"},
}),

new Item({
    label:"nuclear reactor",
    type:"item",
    unlockCost:"2.00 T",
    baseCraftTime:{hr:6,mn:20,sc:0},
    ingredients:[
        {label:"iridium bar",amount:300},
        {label:"nuclear capsule",amount:1},
    ],
    baseSellValue: {value:1,unit:"T"},
}),

new Item({
    label:"collider",
    type:"item",
    unlockCost:"3.00 T",
    baseCraftTime:{hr:6,mn:25,sc:0},
    ingredients:[
        {label:"inerton alloy",amount:500},
        {label:"quadium alloy",amount:100},
    ],
    baseSellValue: {value:2,unit:"T"},
}),

new Item({
    label:"gravity chamber",
    type:"item",
    unlockCost:"6.00 T",
    baseCraftTime:{hr:6,mn:45,sc:0},
    ingredients:[
        {label:"advanced computer",amount:60},
        {label:"nuclear reactor",amount:1},
    ],
    baseSellValue: {value:15,unit:"T"},
}),

new Item({
    label:"robot",
    type:"item",
    unlockCost:"15.00 T",
    baseCraftTime:{hr:7,mn:5,sc:0},
    ingredients:[
        {label:"scrith alloy",amount:300},
        {label:"accumulator",amount:90},
    ],
    baseSellValue: {value:50,unit:"T"},
}),

new Item({
    label:"fusion capsule",
    type:"item",
    unlockCost:"75.00 T",
    baseCraftTime:{hr:7,mn:17,sc:0},
    ingredients:[
        {label:"uru alloy",amount:200},
        {label:"vibranium alloy",amount:100},
        {label:"nuclear capsule",amount:100},
    ],
    baseSellValue: {value:240,unit:"T"},
}),

new Item({
    label:"teleporter",
    type:"item",
    unlockCost:"500.00 T",
    baseCraftTime:{hr:7,mn:30,sc:0},
    ingredients:[
        {label:"navigation module",amount:250},
        {label:"gravity chamber",amount:1},
    ],
    baseSellValue: {value:1.8,unit:"q"},
}),

new Item({
    label:"fusion reactor",
    type:"item",
    unlockCost:"2.50 q",
    baseCraftTime:{hr:8,mn:20,sc:0},
    ingredients:[
        {label:"collider",amount:40},
        {label:"nuclear reactor",amount:50},
        {label:"fusion capsule",amount:1},
    ],
    baseSellValue: {value:40,unit:"q"},
}),

new Item({
    label:"subspace relay",
    type:"item",
    unlockCost:"15.00 q",
    baseCraftTime:{hr:8,mn:58,sc:0},
    ingredients:[
        {label:"space probe",amount:70},
        {label:"satellite dish",amount:100},
        {label:"teleporter",amount:3},
    ],
    baseSellValue: {value:1,unit:"Q"},
}),

)

/*
new Item({
    label:"",
    type:"item",
    unlockCost:".00 B",
    baseCraftTime:{hr:0,mn:0,sc:0},
    ingredients:[
        {label:"",amount:},
        {label:"",amount:},
        {label:"",amount:},
    ],
    baseSellValue: {value:,unit:""},
}),
*/



function buildItems(){

    let imgSize = 35

    let textSize = 18
    let tabInfos = document.createElement("div")
    right.appendChild(tabInfos)
    tabInfos.setAttribute("id","tabInfos")
    tabInfos.innerHTML = "hover/click for details, Bars & Items with additional tool"
    tabInfos.style = textStyle
    tabInfos.style.fontSize = textSize + "px"
    tabInfos.style.height = textSize + "px"
    tabInfos.style.marginLeft = textSize + "px"

    let itemsContainer = document.createElement("div")
    itemsContainer.style = containerRow
    itemsContainer.style.textAlign = "center"
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

            let itemDisplayMiddle = document.createElement("div")
            itemDisplayMiddle.setAttribute("id","itemDisplayMiddle")
            itemDisplay.appendChild(itemDisplayMiddle)

            let itemDisplayBottom = document.createElement("div")
            itemDisplayBottom.setAttribute("id","itemDisplayBottom")
            itemDisplay.appendChild(itemDisplayBottom)


    let oresTable = document.createElement("table")
    oresColumn.innerHTML = "Ores"
    oresColumn.appendChild(oresTable)
    let barsTable = document.createElement("table")
    barsColumn.innerHTML = "Bars"
    barsColumn.appendChild(barsTable)
    let itemsTable = document.createElement("table")
    itemsColumn.innerHTML = "Items"
    itemsColumn.appendChild(itemsTable)

    buildColumns(oresArray,oresTable,itemDisplayTop,imgSize)
    buildColumns(barsArray,barsTable,itemDisplayTop,imgSize)
    buildColumns(itemsArray,itemsTable,itemDisplayTop,imgSize)
}


function buildColumns(arraySource,targetTable,itemDisplayTop,itemDisplayMiddle,imgSize){

    let tr = document.createElement("tr")
    targetTable.appendChild(tr)
    let td = undefined

    let itemCount = 0
    arraySource.forEach((item)=>{
        itemCount += 1
        td = document.createElement("td")
        tr.appendChild(td)
        let img = new Image(imgSize,imgSize)
        img.src = item.img
        img.style.display = "block"
        img.style.border = "white 2px solid"
        td.appendChild(img)

        if(itemCount ===2){
            itemCount = 0
            tr = document.createElement("tr")
            targetTable.appendChild(tr)
        }

        img.addEventListener("mouseover",()=>{
            cleanParent(itemDisplayTop)

            let thisContainer = document.createElement("div")
            thisContainer.style = containerStyle
            thisContainer.style.textAlign = "left"
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
                    mydiv.innerHTML = "Found on Planet(s) : <br>"
                    for (i=0;i<item.foundOnPlanets.length;i++){
                        if (i===4 && item.foundOnPlanets.length > 4){
                            mydiv.innerHTML += "<br>"    
                        }
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

                    let msg = "Base Smelt/Craft Time : "
                    if (item.baseCraftTime.hr > 0) {msg+= item.baseCraftTime.hr+"h "}
                    if (item.baseCraftTime.mn > 0) {msg+= item.baseCraftTime.mn+"m "}
                    msg+= item.baseCraftTime.sc+"s"
                    mydiv.innerHTML = msg

                    mydiv = document.createElement("div")
                    mydiv.style = textStyle
                    thisContainer.appendChild(mydiv)
                    mydiv.innerHTML = "Required materials to either <br> Smelt OR Craft : (base values)"
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
                mydiv.innerHTML = item.baseSellValue.unit === "" ? 
                "Base Sell Value : $ "+item.baseSellValue.value :
                "Base Sell Value : $ "+item.baseSellValue.value + " " + item.baseSellValue.unit
        })

        img.addEventListener("click",function(){setCrafting(item,tabInfos)})
})}

function setCrafting(item,tabInfos){
    let itemDisplayMiddle = document.getElementById("itemDisplayMiddle")
    cleanParent(itemDisplayMiddle)

    if (item.type !== "ore"){

        let text = item.type === "bar" ? "Smelt" : "Craft"

        let thiscontainer = document.createElement("div")
        itemDisplayMiddle.appendChild(thiscontainer)
        thiscontainer.style = containerRow
        thiscontainer.style.marginLeft = 30 + "px"

            let myDiv = document.createElement("div")
            thiscontainer.appendChild(myDiv)
            myDiv.style = closeButtonStyle
            myDiv.innerHTML = text + " " + item.label + " x "
            myDiv.style.backgroundImage = "linear-gradient(#4C5B5C 90%,grey)"
            myDiv.style.border = "white solid 3px"
            myDiv.style.color = "yellow"
            myDiv.addEventListener("click",function(e){startCrafting(e,item)})

            let rect = myDiv.getBoundingClientRect()
            let myInput = document.createElement("input")
            thiscontainer.appendChild(myInput)
            myInput.style = closeButtonStyle
            let modif = 15
            myInput.style.height = (rect.height -modif) + "px"
            myInput.style.width = (rect.height *2)+ "px"
            myInput.style.backgroundImage = "linear-gradient(#4C5B5C 90%,grey)"
            myInput.style.border = "white solid 3px"
            myInput.value = 1
            myInput.style.color = "yellow"

        }
}

function startCrafting(e,item){
    let tabInfos = document.getElementById("tabInfos")
    e.srcElement.innerHTML = "Under Construction ..."
}