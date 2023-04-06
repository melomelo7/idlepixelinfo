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
        {label:"copper ore",amount:1000,min:400},
    ],
    baseSellValue: {value:1.45,unit:"K"},
}),

new Item({
    label:"iron bar",
    type:"bar",
    unlockCost:"$ 3.00 K",
    baseCraftTime:{hr:0,mn:0,sc:30},
    ingredients:[
        {label:"iron ore",amount:1000,min:400},
    ],
    baseSellValue: {value:3,unit:"K"},
}),

new Item({
    label:"lead bar",
    type:"bar",
    unlockCost:"$ 9.00 K",
    baseCraftTime:{hr:0,mn:0,sc:40},
    ingredients:[
        {label:"lead ore",amount:1000,min:400},
    ],
    baseSellValue: {value:6.1,unit:"K"},
}),

new Item({
    label:"silicon bar",
    type:"bar",
    unlockCost:"$ 25.00 K",
    baseCraftTime:{hr:0,mn:1,sc:0},
    ingredients:[
        {label:"silica ore",amount:1000,min:400},
    ],
    baseSellValue: {value:12.5,unit:"K"},
}),

new Item({
    label:"aluminium bar",
    type:"bar",
    unlockCost:"$ 75.00 K",
    baseCraftTime:{hr:0,mn:1,sc:20},
    ingredients:[
        {label:"aluminium ore",amount:1000,min:400},
    ],
    baseSellValue: {value:27.6,unit:"K"},
}),

new Item({
    label:"silver bar",
    type:"bar",
    unlockCost:"$ 225.00 K",
    baseCraftTime:{hr:0,mn:2,sc:0},
    ingredients:[
        {label:"silver ore",amount:1000,min:400},
    ],
    baseSellValue: {value:60,unit:"K"},
}),

new Item({
    label:"gold bar",
    type:"bar",
    unlockCost:"$ 500.00 K",
    baseCraftTime:{hr:0,mn:3,sc:0},
    ingredients:[
        {label:"gold ore",amount:1000,min:400},
    ],
    baseSellValue: {value:120,unit:"K"},
}),

new Item({
    label:"bronze bar",
    type:"bar",
    unlockCost:"$ 1.00 M",
    baseCraftTime:{hr:0,mn:4,sc:0},
    ingredients:[
        {label:"silver bar",amount:2,min:1},  
        {label:"copper bar",amount:10,min:4},
    ],
    baseSellValue: {value:234,unit:"K"},
}),

new Item({
    label:"steel bar",
    type:"bar",
    unlockCost:"$ 2.00 M",
    baseCraftTime:{hr:0,mn:8,sc:0},
    ingredients:[
        {label:"lead bar",amount:15,min:6}, 
        {label:"iron bar",amount:30,min:12},
    ],
    baseSellValue: {value:340,unit:"K"},
}),

new Item({
    label:"platinum bar",
    type:"bar",
    unlockCost:"$ 4.00 M",
    baseCraftTime:{hr:0,mn:10,sc:0},
    ingredients:[
        {label:"gold bar",amount:2,min:1},
        {label:"platinum ore",amount:1000,min:400},
    ],
    baseSellValue: {value:780,unit:"K"},
}),

new Item({
    label:"titanium bar",
    type:"bar",
    unlockCost:"$ 8.00 M",
    baseCraftTime:{hr:0,mn:12,sc:0},
    ingredients:[
        {label:"bronze bar",amount:2,min:1},
        {label:"titanium ore",amount:1000,min:400},
    ],
    baseSellValue: {value:1.63,unit:"M"},
}),

new Item({
    label:"iridium bar",
    type:"bar",
    unlockCost:"$ 15.00 M",
    baseCraftTime:{hr:0,mn:14,sc:0},
    ingredients:[
        {label:"steel bar",amount:2,min:1},
        {label:"iridium ore",amount:1000,min:400},
    ],
    baseSellValue: {value:3.11,unit:"M"},
}),

new Item({
    label:"palladium bar",
    type:"bar",
    unlockCost:"$ 30.00 M",
    baseCraftTime:{hr:0,mn:16,sc:0},
    ingredients:[
        {label:"platinum bar",amount:2,min:1}, 
        {label:"palladium ore",amount:1000,min:400},
    ],
    baseSellValue: {value:7,unit:"M"},
}),

new Item({
    label:"osmium bar",
    type:"bar",
    unlockCost:"$ 60.00 M",
    baseCraftTime:{hr:0,mn:18,sc:0},
    ingredients:[
        {label:"titanium bar",amount:2,min:1},
        {label:"osmium ore",amount:1000,min:400},
    ],
    baseSellValue: {value:14.5,unit:"M"},
}),

new Item({
    label:"rhodium bar",
    type:"bar",
    unlockCost:"$ 120.00 M",
    baseCraftTime:{hr:0,mn:20,sc:0},
    ingredients:[
        {label:"iridium bar",amount:2,min:1}, 
        {label:"rhodium ore",amount:1000,min:400},
    ],
    baseSellValue: {value:31,unit:"M"},
}),

new Item({
    label:"inerton alloy",
    type:"bar",
    unlockCost:"$ 250.00 M",
    baseCraftTime:{hr:0,mn:24,sc:0},
    ingredients:[
        {label:"palladium bar",amount:2,min:1},  
        {label:"inerton ore",amount:1000,min:400},
    ],
    baseSellValue: {value:68,unit:"M"},
}),

new Item({
    label:"quadium alloy",
    type:"bar",
    unlockCost:"$ 500.00 M",
    baseCraftTime:{hr:0,mn:28,sc:0},
    ingredients:[
        {label:"osmium bar",amount:2,min:1},
        {label:"quadium ore",amount:1000,min:400},
    ],
    baseSellValue: {value:152,unit:"M"},
}),

new Item({
    label:"scrith alloy",
    type:"bar",
    unlockCost:"$ 1.00 B",
    baseCraftTime:{hr:0,mn:32,sc:0},
    ingredients:[
        {label:"rhodium bar",amount:2,min:1},
        {label:"scrith ore",amount:1000,min:400},
    ],
    baseSellValue: {value:352,unit:"M"},
}),

new Item({
    label:"uru alloy",
    type:"bar",
    unlockCost:"$ 2.00 B",
    baseCraftTime:{hr:0,mn:36,sc:0},
    ingredients:[
        {label:"inerton alloy",amount:2,min:1},   
        {label:"uru ore",amount:1000,min:400},
    ],
    baseSellValue: {value:832,unit:"M"},
}),

new Item({
    label:"vibranium alloy",
    type:"bar",
    unlockCost:"$ 4.00 B",
    baseCraftTime:{hr:0,mn:40,sc:0},
    ingredients:[
        {label:"quadium alloy",amount:2,min:1},      
        {label:"vibranium ore",amount:1000,min:400},
    ],
    baseSellValue: {value:2.05,unit:"B"},
}),

new Item({
    label:"aether alloy",
    type:"bar",
    unlockCost:"$ 8.00 B",
    baseCraftTime:{hr:0,mn:44,sc:0},
    ingredients:[
        {label:"scrith alloy",amount:2,min:1},
        {label:"aether ore",amount:1000,min:400},
    ],
    baseSellValue: {value:5.12,unit:"B"},
}),

new Item({
    label:"viterium alloy",
    type:"bar",
    unlockCost:"$ 16.00 B",
    baseCraftTime:{hr:0,mn:48,sc:0},
    ingredients:[
        {label:"uru alloy",amount:2,min:1},
        {label:"viterium ore",amount:1000,min:400},
    ],
    baseSellValue: {value:15.5,unit:"B"},
}),

new Item({
    label:"xynium alloy",
    type:"bar",
    unlockCost:"$ 84.00 B",
    baseCraftTime:{hr:0,mn:55,sc:0},
    ingredients:[
        {label:"viterium alloy",amount:5,min:2},  
        {label:"xynium ore",amount:1500,min:600},
    ],
    baseSellValue: {value:48,unit:"B"},
}),

new Item({
    label:"quolium alloy",
    type:"bar",
    unlockCost:"$ 275.00 B",
    baseCraftTime:{hr:1,mn:2,sc:0},
    ingredients:[
        {label:"aether alloy",amount:5,min:2},  
        {label:"quolium ore",amount:1500,min:600},
    ],
    baseSellValue: {value:160,unit:"B"},
}),

new Item({
    label:"luterium alloy",
    type:"bar",
    unlockCost:"$ 1.00 T",
    baseCraftTime:{hr:1,mn:9,sc:0},
    ingredients:[
        {label:"viterium alloy",amount:5,min:2},   
        {label:"luterium ore",amount:1500,min:600},
    ],
    baseSellValue: {value:600,unit:"B"},
}),

new Item({
    label:"wraith alloy",
    type:"bar",
    unlockCost:"$ 4.20 T",
    baseCraftTime:{hr:1,mn:16,sc:0},
    ingredients:[
        {label:"xynium alloy",amount:5,min:2},
        {label:"wraith ore",amount:1500,min:600},
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
        {label:"copper bar",amount:5,min:2},
    ],
    baseSellValue: {value:10,unit:"K"},
}),

new Item({
    label:"iron nail",
    type:"item",
    unlockCost:"20.00 K",
    baseCraftTime:{hr:0,mn:2,sc:0},
    ingredients:[
        {label:"iron bar",amount:5,min:2},
    ],
    baseSellValue: {value:20,unit:"K"},
}),

new Item({
    label:"battery",
    type:"item",
    unlockCost:"50.00 K",
    baseCraftTime:{hr:0,mn:4,sc:0},
    ingredients:[
        {label:"copper wire",amount:2,min:1},
        {label:"copper bar",amount:10,min:4},
    ],
    baseSellValue: {value:70,unit:"K"},
}),

new Item({
    label:"hammer",
    type:"item",
    unlockCost:"100.00 K",
    baseCraftTime:{hr:0,mn:8,sc:0},
    ingredients:[
        {label:"iron nail",amount:2,min:1},
        {label:"lead bar",amount:5,min:2},
    ],
    baseSellValue: {value:135,unit:"K"},
}),

new Item({
    label:"glass",
    type:"item",
    unlockCost:"200.00 K",
    baseCraftTime:{hr:0,mn:12,sc:0},
    ingredients:[
        {label:"silicon bar",amount:10,min:4},
    ],
    baseSellValue: {value:220,unit:"K"},
}),

new Item({
    label:"circuit",
    type:"item",
    unlockCost:"400.00 K",
    baseCraftTime:{hr:0,mn:20,sc:0},
    ingredients:[
        {label:"silicon bar",amount:5,min:2},
        {label:"aluminium bar",amount:5,min:2},
        {label:"copper wire",amount:10,min:4},
    ],
    baseSellValue: {value:620,unit:"K"},
}),

new Item({
    label:"lens",
    type:"item",
    unlockCost:"1.00 M",
    baseCraftTime:{hr:0,mn:40,sc:0},
    ingredients:[
        {label:"glass",amount:1,min:1},
        {label:"silver bar",amount:5,min:2},
    ],
    baseSellValue: {value:1.1,unit:"M"},

}),

new Item({
    label:"laser",
    type:"item",
    unlockCost:"2.00 M",
    baseCraftTime:{hr:1,mn:0,sc:0},
    ingredients:[
        {label:"gold bar",amount:5,min:2},
        {label:"lens",amount:1,min:1},
        {label:"iron bar",amount:10,min:4},
    ],
    baseSellValue: {value:3.2,unit:"M"},
}),

new Item({
    label:"basic computer",
    type:"item",
    unlockCost:"5.00 M",
    baseCraftTime:{hr:1,mn:20,sc:0},
    ingredients:[
        {label:"circuit",amount:5,min:2},
        {label:"silver bar",amount:5,min:2},
    ],
    baseSellValue: {value:7.6,unit:"M"},
}),

new Item({
    label:"solar panel",
    type:"item",
    unlockCost:"10.00 M",
    baseCraftTime:{hr:1,mn:40,sc:0},
    ingredients:[
        {label:"circuit",amount:5,min:2},
        {label:"glass",amount:10,min:4},
    ],
    baseSellValue: {value:12.5,unit:"M"},
}),

new Item({
    label:"laser torch",
    type:"item",
    unlockCost:"20.00 M",
    baseCraftTime:{hr:2,mn:0,sc:0},
    ingredients:[
        {label:"bronze bar",amount:5,min:2},
        {label:"laser",amount:2,min:1},
        {label:"lens",amount:5,min:2},
    ],
    baseSellValue: {value:31,unit:"M"},
}),

new Item({
    label:"advanced battery",
    type:"item",
    unlockCost:"30.00 M",
    baseCraftTime:{hr:2,mn:30,sc:0},
    ingredients:[
        {label:"steel bar",amount:20,min:8},
        {label:"battery",amount:30,min:12},
    ],
    baseSellValue: {value:35,unit:"M"},
}),

new Item({
    label:"thermal scanner",
    type:"item",
    unlockCost:"50.00 M",
    baseCraftTime:{hr:3,mn:0,sc:0},
    ingredients:[
        {label:"platinum bar",amount:5,min:2},
        {label:"laser",amount:2,min:1},
        {label:"glass",amount:5,min:2},
    ],
    baseSellValue: {value:71.5,unit:"M"},
}),

new Item({
    label:"advanced computer",
    type:"item",
    unlockCost:"120.00 M",
    baseCraftTime:{hr:3,mn:30,sc:0},
    ingredients:[
        {label:"basic computer",amount:5,min:2},
        {label:"titanium bar",amount:5,min:2},
    ],
    baseSellValue: {value:180,unit:"M"},
}),

new Item({
    label:"navigation module",
    type:"item",
    unlockCost:"250.00 M",
    baseCraftTime:{hr:3,mn:45,sc:0},
    ingredients:[
        {label:"laser torch",amount:2,min:1},
        {label:"thermal scanner",amount:1,min:1},
    ],
    baseSellValue: {value:1,unit:"B"},
}),

new Item({
    label:"plasma torch",
    type:"item",
    unlockCost:"550.00 M",
    baseCraftTime:{hr:4,mn:10,sc:0},
    ingredients:[
        {label:"iridium bar",amount:15,min:6},
        {label:"laser torch",amount:5,min:2},
    ],
    baseSellValue: {value:1.15,unit:"B"},
}),

new Item({
    label:"radio tower",
    type:"item",
    unlockCost:"1.50 B",
    baseCraftTime:{hr:4,mn:20,sc:0},
    ingredients:[
        {label:"platinum bar",amount:75,min:30},
        {label:"aluminium bar",amount:150,min:60},
        {label:"titanium bar",amount:50,min:20},
    ],
    baseSellValue: {value:1.45,unit:"B"},
}),

new Item({
    label:"telescope",
    type:"item",
    unlockCost:"5.00 B",
    baseCraftTime:{hr:4,mn:40,sc:0},
    ingredients:[
        {label:"lens",amount:20,min:8},
        {label:"advanced computer",amount:1,min:1},
    ],
    baseSellValue: {value:2.7,unit:"B"},
}),

new Item({
    label:"satellite dish",
    type:"item",
    unlockCost:"17.50 B",
    baseCraftTime:{hr:5,mn:0,sc:0},
    ingredients:[
        {label:"steel bar",amount:150,min:60},
        {label:"palladium bar",amount:30,min:12},
    ],
    baseSellValue: {value:3.4,unit:"B"},
}),

new Item({
    label:"motor",
    type:"item",
    unlockCost:"60.00 B",
    baseCraftTime:{hr:5,mn:20,sc:0},
    ingredients:[
        {label:"bronze bar",amount:500,min:200},
        {label:"hammer",amount:200,min:80},
    ],
    baseSellValue: {value:7,unit:"B"},
}),

new Item({
    label:"accumulator",
    type:"item",
    unlockCost:"100.00 B",
    baseCraftTime:{hr:5,mn:40,sc:0},
    ingredients:[
        {label:"osmium bar",amount:20,min:8},
        {label:"advanced battery",amount:3,min:1},
    ],
    baseSellValue: {value:12,unit:"B"},
}),

new Item({
    label:"nuclear capsule",
    type:"item",
    unlockCost:"200.00 B",
    baseCraftTime:{hr:5,mn:50,sc:0},
    ingredients:[
        {label:"rhodium bar",amount:5,min:2},
        {label:"plasma torch",amount:1,min:1},
    ],
    baseSellValue: {value:26,unit:"B"},
}),

new Item({
    label:"wind turbine",
    type:"item",
    unlockCost:"500.00 B",
    baseCraftTime:{hr:6,mn:0,sc:0},
    ingredients:[
        {label:"aluminium bar",amount:300,min:120},
        {label:"motor",amount:1,min:1},
    ],
    baseSellValue: {value:140,unit:"B"},
}),

new Item({
    label:"space probe",
    type:"item",
    unlockCost:"1.00 T",
    baseCraftTime:{hr:6,mn:10,sc:0},
    ingredients:[
        {label:"satellite dish",amount:1,min:1},
        {label:"solar panel",amount:25,min:10},
        {label:"telescope",amount:1,min:1},
    ],
    baseSellValue: {value:180,unit:"B"},
}),

new Item({
    label:"nuclear reactor",
    type:"item",
    unlockCost:"2.00 T",
    baseCraftTime:{hr:6,mn:20,sc:0},
    ingredients:[
        {label:"iridium bar",amount:300,min:120},
        {label:"nuclear capsule",amount:1,min:1},
    ],
    baseSellValue: {value:1,unit:"T"},
}),

new Item({
    label:"collider",
    type:"item",
    unlockCost:"3.00 T",
    baseCraftTime:{hr:6,mn:25,sc:0},
    ingredients:[
        {label:"inerton alloy",amount:500,min:200},
        {label:"quadium alloy",amount:100,min:40},
    ],
    baseSellValue: {value:2,unit:"T"},
}),

new Item({
    label:"gravity chamber",
    type:"item",
    unlockCost:"6.00 T",
    baseCraftTime:{hr:6,mn:45,sc:0},
    ingredients:[
        {label:"advanced computer",amount:60,min:24},
        {label:"nuclear reactor",amount:1,min:1},
    ],
    baseSellValue: {value:15,unit:"T"},
}),

new Item({
    label:"robot",
    type:"item",
    unlockCost:"15.00 T",
    baseCraftTime:{hr:7,mn:12,sc:0},
    ingredients:[
        {label:"scrith alloy",amount:300,min:120},
        {label:"accumulator",amount:90,min:36},
    ],
    baseSellValue: {value:50,unit:"T"},
}),

new Item({
    label:"fusion capsule",
    type:"item",
    unlockCost:"75.00 T",
    baseCraftTime:{hr:7,mn:30,sc:0},
    ingredients:[
        {label:"uru alloy",amount:200,min:80},
        {label:"vibranium alloy",amount:100,min:40},
        {label:"nuclear capsule",amount:100,min:40},
    ],
    baseSellValue: {value:240,unit:"T"},
}),

new Item({
    label:"teleporter",
    type:"item",
    unlockCost:"500.00 T",
    baseCraftTime:{hr:8,mn:02,sc:0},
    ingredients:[
        {label:"navigation module",amount:250,min:100},
        {label:"gravity chamber",amount:1,min:1},
    ],
    baseSellValue: {value:1.8,unit:"q"},
}),

new Item({
    label:"fusion reactor",
    type:"item",
    unlockCost:"2.50 q",
    baseCraftTime:{hr:8,mn:36,sc:0},
    ingredients:[
        {label:"collider",amount:40,min:16},
        {label:"nuclear reactor",amount:50,min:20},
        {label:"fusion capsule",amount:1,min:1},
    ],
    baseSellValue: {value:40,unit:"q"},
}),

new Item({
    label:"subspace relay",
    type:"item",
    unlockCost:"15.00 q",
    baseCraftTime:{hr:8,mn:58,sc:0},
    ingredients:[
        {label:"space probe",amount:70,min:28},
        {label:"satellite dish",amount:100,min:40},
        {label:"teleporter",amount:3,min:1},
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
    tabInfos.innerHTML = `
    Depending used device hover is displaying infos as you move your mouse <br> 
    OR a click is needed. When clicking on a Bar or Item the selection is set <br>
    on the grey Button. Change the number if you want more and click to display <br>
    the smelting/crafting steps ...`

    tabInfos.style = textStyle
    tabInfos.style.fontSize = textSize + "px"
    tabInfos.style.height = textSize + "px"
    tabInfos.style.marginLeft = textSize + "px"
    tabInfos.style.marginBottom = 70 + "px"

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
            thisContainer.style.width = 300 + "px"
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
                    mydiv.innerHTML = "Required materials to either <br> Smelt OR Craft : <br>(base=> min. values)"
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
                            mydiv.innerHTML = 
                            item.ingredients[i].amount + " => " + item.ingredients[i].min + " " + item.ingredients[i].label
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

        let topContainer = document.createElement("div")
        itemDisplayMiddle.appendChild(topContainer)
        topContainer.style = containerColumn
        topContainer.style.marginLeft = 30 + "px"        

            let thisContainer = document.createElement("div")
            topContainer.appendChild(thisContainer)
            thisContainer.style = containerRow

                let myDiv = document.createElement("div")
                thisContainer.appendChild(myDiv)
                myDiv.style = closeButtonStyle
                myDiv.innerHTML = text + " " + item.label + " x "
                myDiv.style.backgroundImage = "linear-gradient(#4C5B5C 90%,grey)"
                myDiv.style.border = "white solid 3px"
                myDiv.style.color = "yellow"
                myDiv.addEventListener("click",function(e){startCrafting(e,item)})
                let width1 = myDiv.getBoundingClientRect().width 

                let rect = myDiv.getBoundingClientRect()
                let myInput = document.createElement("input")
                thisContainer.appendChild(myInput)
                myInput.style = closeButtonStyle
                let modif = 15
                myInput.style.height = (rect.height -modif) + "px"
                myInput.style.width = (rect.height *2)+ "px"
                myInput.style.backgroundImage = "linear-gradient(#4C5B5C 90%,grey)"
                myInput.style.border = "white solid 3px"
                myInput.value = 1
                myInput.style.color = "yellow"
                myInput.setAttribute("id","craftQuantity")
                let width2 = myInput.getBoundingClientRect().width

            thisContainer = document.createElement("div")
            topContainer.appendChild(thisContainer)
            thisContainer.style = containerRow
            thisContainer.style.backgroundImage = "linear-gradient(#4C5B5C 90%,grey)"
            thisContainer.style.border = "white solid 3px"
            thisContainer.style.color = "yellow"
            thisContainer.style.width = 340 + "px"
            thisContainer.style.borderRadius = "5px"
            thisContainer.style.marginBottom = "10px"

                let thisItem = document.createElement("div")
                thisContainer.appendChild(thisItem)
                thisItem.innerHTML = "Display : as Components List"
                thisItem.style = textStyle

                let thisRadio = document.createElement("input")
                thisContainer.appendChild(thisRadio)
                thisRadio.type = "radio"
                thisRadio.name = "displayType"
                thisRadio.value = "list"
                thisRadio.checked = true

                thisItem = document.createElement("div")
                thisContainer.appendChild(thisItem)
                thisItem.innerHTML = "OR as Tree"
                thisItem.style = textStyle

                thisRadio = document.createElement("input")
                thisContainer.appendChild(thisRadio)
                thisRadio.type = "radio"
                thisRadio.setAttribute("name","displayType")
                thisRadio.name = "displayType"
                thisRadio.value = "tree"

        }
}

function getItemsArray(label){
    if (barsArray.findIndex(x=>x.label === label) !== -1)
        {return barsArray}
    else if (itemsArray.findIndex(x=>x.label === label) !== -1)
        {return itemsArray}
    else 
        {return undefined}
}


class Links {constructor (father = undefined)
    {this.father = father}
    get kids(){
        let thisArray = []
        let targetArray = undefined
        for (i=0;i<this.father.ingredients.length;i++){
            console.log( this.father.ingredients[i].label )

            targetArray = getItemsArray(this.father.ingredients[i].label)
            if (targetArray) {
                thisArray.push (targetArray[targetArray.findIndex(x=>x.label===this.father.ingredients[i].label)])
            }
        }
        console.log(thisArray)
        return thisArray
    }

}


function fork(thisArray){

    let mainArray = []
    let subArray = []
    let thisItem = undefined
    let source = undefined
    let subItem = undefined

    for (i=0;i<thisArray.length;i++){

        mainArray.push(thisArray[i])

        thisItem = thisArray[i].item

        for (j=0;j<thisItem.ingredients.length;j++){
            
            source = getItemsArray(thisItem.ingredients[j].label)

            if (source){
                subItem = source[source.findIndex(x=>x.label === thisItem.ingredients[j].label)]

                subArray.push(
                    {idx : thisArray[0].idx+1,
                    father : thisArray[i].item,
                    item : subItem, 
                    quantity : Number(thisArray[i].quantity) * Number(thisItem.ingredients[j].amount),
                    min : Number(thisArray[i].quantity) * Number(thisItem.ingredients[j].min),
                    position : undefined,
                    })}

        }
    }
    return {mainArray : mainArray,subArray : subArray}
}


function startCrafting(e,item,type){

    let craftQuantity = document.getElementById("craftQuantity")
    let itemDisplayBottom = document.getElementById("itemDisplayBottom")

    cleanParent(itemDisplayBottom)

    if(!Number(craftQuantity.value)){ return }
    
    let row = 0
    let cel = 0
    let thisSet = undefined
    let queue = []
    let Idx = 1
    let passArray = undefined
    let myArray = []
    let totalColumns = 0
    let tempArray = []
    let filteredArray = []

    let starterItem = {idx : Idx,father : undefined ,item : item, quantity : craftQuantity.value,position : undefined}

    queue.push([starterItem])

    while (queue.length > 0){
        passArray = queue[0]
        queue.shift()
        thisSet = fork(passArray)
        myArray.push(thisSet.mainArray)
        if (thisSet.subArray.length>0){queue.push(thisSet.subArray)}
    }


    let displayChosen = undefined
    let radios = document.getElementsByName("displayType")
    for (i=0;i<radios.length;i++){
        if (radios[i].checked){displayChosen = radios[i].value}    
    }

    if (displayChosen === "list"){
        let myArray2 = myArray
        let itemsList = []
        let thisIndex = undefined
        let thisLabel = undefined

        for(i=1;i<myArray2.length;i++){
            for(j=0;j<myArray2[i].length;j++){


                if(itemsList.length === 0){
                    itemsList.push({
                        type : myArray2[i][j].item.type,
                        label : myArray2[i][j].item.label,
                        quantity : myArray2[i][j].quantity,
                        min : myArray2[i][j].min
                    })
                } else {
                    thisIndex = itemsList.findIndex(x=>x.label === myArray2[i][j].item.label )
                    
                    if (thisIndex === -1){
                        itemsList.push({
                            type : myArray2[i][j].item.type,
                            label : myArray2[i][j].item.label,
                            quantity : myArray2[i][j].quantity,
                            min : myArray2[i][j].min
                        })  
                    } else {
                        itemsList[thisIndex].quantity += myArray2[i][j].quantity
                        itemsList[thisIndex].min += myArray2[i][j].min
                    }
                }

                for (k=0;k<myArray2[i][j].item.ingredients.length;k++){
                    thisLabel = myArray2[i][j].item.ingredients[k].label

                    if (!getItemsArray(thisLabel)){
                        thisIndex = itemsList.findIndex(x=>x.label === thisLabel)

                        if (thisIndex === -1){
                            itemsList.push({
                                type : "ore",
                                label : thisLabel,
                                quantity : myArray2[i][j].item.ingredients[k].amount * myArray2[i][j].quantity,
                                min : myArray2[i][j].item.ingredients[k].min * myArray2[i][j].min,
                            })  
                        } else {
                            itemsList[thisIndex].quantity += myArray2[i][j].item.ingredients[k].amount * myArray2[i][j].quantity
                            itemsList[thisIndex].min += myArray2[i][j].item.ingredients[k].min * myArray2[i][j].min
                        }
                    }
                }
                

            }
        }

        tempArray = itemsList.filter(x=>x.type === "item")
        for (i=0;i<tempArray.length;i++){
            filteredArray.push(tempArray[i])
        }
        tempArray = itemsList.filter(x=>x.type === "bar")
        for (i=0;i<tempArray.length;i++){
            filteredArray.push(tempArray[i])
        }
        tempArray = itemsList.filter(x=>x.type === "ore")
        for (i=0;i<tempArray.length;i++){
            filteredArray.push(tempArray[i])
        }

        let thisContainer = document.createElement("div")
        itemDisplayBottom.appendChild(thisContainer)
        thisContainer.style = containerStyle
        thisContainer.style.marginLeft = 20 + "px"
            
            let subContainer = document.createElement("div")
            subContainer.style = containerRow
            subContainer.style.alignItems = "center"
            thisContainer.appendChild(subContainer)
    
                let img = new Image (40,40)
                img.src = "./IPM Components/" + myArray[0][0].item.label + ".jpg"
                img.style = textStyle
                subContainer.appendChild(img)
    
                let thisItem = document.createElement("div")
                thisItem.style = textStyle
                subContainer.appendChild(thisItem)
                thisItem.innerHTML = myArray[0][0].item.label + " x " + formatKMBT(myArray[0][0].quantity)
    
            subContainer = document.createElement("div")
            subContainer.style.borderBottom = "blue solid 3px"
            thisContainer.appendChild(subContainer)        
    
            thisItem = document.createElement("div")
            thisItem.style = textStyle
            thisContainer.appendChild(thisItem)
            thisItem.innerHTML = "(base value => minimum value)"        
    
            let switchItem = ""
            for (i=0;i<filteredArray.length;i++){

                

                subContainer = document.createElement("div")
                subContainer.style = containerRow
                thisContainer.appendChild(subContainer)
    
                if (switchItem === ""){switchItem = filteredArray[i].type }
                if (switchItem !== filteredArray[i].type){
                    switchItem = filteredArray[i].type
                    subContainer.style.borderTop = "yellow solid 2px"
                }


                    img = new Image (40,40)
                    img.src = "./IPM Components/" + filteredArray[i].label + ".jpg"
                    img.style = textStyle
                    subContainer.appendChild(img)
    
                    thisItem = document.createElement("div")
                    thisItem.style = textStyle
                    thisItem.style.textAlign = "left"
                    subContainer.appendChild(thisItem)
                    thisItem.innerHTML = filteredArray[i].label + 
                    "<br> " + formatKMBT(filteredArray[i].quantity) +
                    " => " + formatKMBT(filteredArray[i].min)
            }
        }
    else {

        table = document.createElement("table")
        itemDisplayBottom.appendChild(table)

        for (i=0;i<myArray.length;i++){
            /*
            if (i>0){

                for (g=0;g<3;g++){
                    tableAdd({table:table})

                    totalColumns = 
                    (myArray[i].length*2-1) > (myArray[i-1].length*2-1) ? 
                    (myArray[i].length*2-1) : (myArray[i-1].length*2-1)

                    for (h=0;h<totalColumns;h++){
                        tableAdd({row:false, table:table})
                        row = table.rows.length-1
                        cel = table.rows[row].cells.length-1
                        table.rows[row].cells[cel].style.height = 5 + "px"
                        table.rows[row].cells[cel].setAttribute("id","R"+row+"|C"+cel)

                    table.rows[row].cells[cel].addEventListener("click",(e)=>{info.innerHTML = e.srcElement.id})
                    table.rows[row].cells[cel].style.border = "solid white 1px"
                }}}
            */

            tableAdd({table:table})
        
            for(j=0;j<myArray[i].length;j++){

                if (j>0){
            /*
                tableAdd({row:false, table:table})
                row = table.rows.length-1
                cel = table.rows[row].cells.length-1
                table.rows[row].cells[cel].style.minWidth = 10 + "px"
                table.rows[row].cells[cel].setAttribute("id","R"+row+"|C"+cel)

            table.rows[row].cells[cel].addEventListener("click",(e)=>{info.innerHTML = e.srcElement.id})
            table.rows[row].cells[cel].style.border = "solid white 1px"
            */
                }

                tableAdd({row:false, table:table})
                row = table.rows.length-1
                cel = table.rows[row].cells.length-1
                
                table.rows[row].cells[cel].setAttribute("id","R"+row+"|C"+cel)
                table.rows[row].cells[cel].addEventListener("click",(e)=>{info.innerHTML = e.srcElement.id})

                myArray[i][j].position = table.rows[row].cells[cel].id
                craftDiv(myArray[i][j],table,row,cel)
            }
        }

        let childPosition = undefined
        let childC = undefined
        let fatherPosition = undefined
        let fatherC = undefined
        let Coords = undefined
        let thisPosition = undefined
        let hr = undefined
        let fill = undefined

        let newArray=[]

        for (i=1;i<myArray.length;i++){
            for(j=0;j<myArray[i].length;j++){
    /*
                childPosition = myArray[i][j].position
                fatherPosition = myArray[i-1][ myArray[i-1].findIndex(x=> x.item.label===myArray[i][j].father.label)].position

                childC = Number(childPosition.split("|")[1].slice(1))
                fatherC = Number(fatherPosition.split("|")[1].slice(1))

                console.log(childC)
                console.log(fatherC)

                if (childC === fatherC) {
                    Coords = childPosition.split("|")
                    thisPosition = "R"+(Number(Coords[0].slice(1))-1)+"|"+Coords[1]
                    hr = document.createElement("hr")
                    hr.style = hrHorStyle2
                    document.getElementById(thisPosition).appendChild(hr)
                }
                else {
                    Coords = childPosition.split("|")
                    thisPosition = "R"+(Number(Coords[0].slice(1))-1)+"|"+Coords[1]
                    fill = document.createElement("div")
                    document.getElementById(thisPosition).appendChild(fill)

                    fill.style = childC < fatherC ? fillLeftHalf : fillRightHalf

                    Coords = fatherPosition.split("|")
                    thisPosition = "R"+(Number(Coords[0].slice(1))+1)+"|"+Coords[1]
                    fill = document.createElement("div")
                    document.getElementById(thisPosition).appendChild(fill)

                    fill.style = childC < fatherC ? fillRightHalf : fillLeftHalf 

                    if ( childC < fatherC && fatherC-childC > 0){
                        for(k=childC+1;k<fatherC;k++){
                            thisPosition = "R"+k+"|"+Coords[1]
                            fill = document.createElement("div")
                            document.getElementById(thisPosition).appendChild(fill)
                            fill.style = fillMiddle
                        }
                    }
                    else if ( fatherC < childC && childC - fatherC > 0){
                        for(k=fatherC+1;k<childC;k++){
                            thisPosition = "R"+k+"|"+Coords[1]
                            fill = document.createElement("div")
                            document.getElementById(thisPosition).appendChild(fill)
                            fill.style = fillMiddle
                        }

                    }

                }

    */


    /*            
                let fill = document.createElement("div")
                table.rows[2].cells[0].appendChild(fill)
                fill.style = fillLeftHalf

                fill = document.createElement("div")
                table.rows[2].cells[2].appendChild(fill)
                fill.style = fillRightHalf

                fill = document.createElement("div")
                table.rows[2].cells[1].appendChild(fill)
                fill.style = fillMiddle


                childPosition = myArray[i][j].position
                fatherPosition = myArray[i-1][ myArray[i-1].findIndex(x=> x.item.label===myArray[i][j].father.label)].position

                Coords = childPosition.split("|")
                thisPosition = "R"+ (Number(Coords[0].slice(1))-1)+"|"+Coords[1]

                console.log(thisPosition)

                hr = document.createElement("hr")
                hr.style = hrHorStyle2
                document.getElementById(thisPosition).appendChild(hr)

                Coords = fatherPosition.split("|")
                thisPosition = "R"+ (Number(Coords[0].slice(1))+1)+"|"+Coords[1]
                
                console.log(thisPosition)
                
                hr = document.createElement("hr")
                hr.style = hrHorStyle2
                cleanParent(document.getElementById(thisPosition))
                document.getElementById(thisPosition).appendChild(hr)
    */
                
            }
        }
    }

}

function tableAdd({row = true,table=undefined,}){
    let size = 5
    let thisItem = undefined
    if (row) {
        thisItem = document.createElement("tr")
        table.appendChild(thisItem)
        if (table.rows.length % 2 === 0){
            thisItem.style.height = size + "px"
            }
    }
    else {
        thisItem = document.createElement("td")
        table.rows[table.rows.length-1].appendChild(thisItem)
        if(table.rows[table.rows.length-1].cells.length % 2 === 0){
            thisItem.style.width = size + "px"
            }}}


function craftDiv(thisCraft,table,row,cel){

    let thisContainer = document.createElement("div")
    thisContainer.style = containerStyle
    thisContainer.style.height = 300 + "px"
        
        let subContainer = document.createElement("div")
        subContainer.style = containerRow
        subContainer.style.alignItems = "center"
        thisContainer.appendChild(subContainer)

            let img = new Image (40,40)
            img.src = "./IPM Components/" + thisCraft.item.label + ".jpg"
            img.style = textStyle
            subContainer.appendChild(img)

            let thisItem = document.createElement("div")
            thisItem.style = textStyle
            subContainer.appendChild(thisItem)
            thisItem.innerHTML = thisCraft.item.label + " x " + formatKMBT(thisCraft.quantity)

        if (thisCraft.father){
            subContainer = document.createElement("div")
            subContainer.style = containerRow
            thisContainer.appendChild(subContainer)

                let thisItem = document.createElement("div")
                thisItem.style = textStyle
                subContainer.appendChild(thisItem)
                thisItem.innerHTML = "(materials for "
                    let thisSpan = document.createElement("span")
                    thisItem.appendChild(thisSpan)
                    thisSpan.innerHTML = thisCraft.father.label
                    thisSpan.style.color = "red"
                thisItem.innerHTML += ")"
        }

        subContainer = document.createElement("div")
        subContainer.style.borderBottom = "blue solid 3px"
        thisContainer.appendChild(subContainer)        

        thisItem = document.createElement("div")
        thisItem.style = textStyle
        thisContainer.appendChild(thisItem)
        thisItem.innerHTML = "(base cost => minimum cost)"        

        for (k=0;k<thisCraft.item.ingredients.length;k++){
            subContainer = document.createElement("div")
            subContainer.style = containerRow
            thisContainer.appendChild(subContainer)

                img = new Image (40,40)
                img.src = "./IPM Components/" + thisCraft.item.ingredients[k].label + ".jpg"
                img.style = textStyle
                subContainer.appendChild(img)

                thisItem = document.createElement("div")
                thisItem.style = textStyle
                thisItem.style.textAlign = "left"
                subContainer.appendChild(thisItem)
                thisItem.innerHTML = thisCraft.item.ingredients[k].label + 
                "<br> " + formatKMBT(thisCraft.item.ingredients[k].amount * thisCraft.quantity) +
                " => " + formatKMBT(thisCraft.item.ingredients[k].min * thisCraft.quantity)
        }

    table.rows[row].cells[cel].appendChild(thisContainer)
    table.rows[row].cells[cel].style.minWidth = 300+ "px"
    table.rows[row].cells[cel].style.verticalAlign = "top"
    table.style.marginLeft = 20 + "px"

    table.rows[row].cells[cel].style.border = "white solid 1px"
    
    
//   console.log(thisContainer.getBoundingClientRect())

}