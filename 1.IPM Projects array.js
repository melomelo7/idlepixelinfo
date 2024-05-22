
class projectCell {
    constructor({
        area = "",
        label="",
        description="",
        rows=0,
        cell=0,
        components=[],
        comment="",
        prerequisites="",
        highestPlanetRequired="",
        selected = false,
    })
{
    this.area = area
    this.label=label
    this.description = description
    this.rows= projectsArray[projectsArray.findIndex(x=>x.label===this.label)].rows
    this.cell= projectsArray[projectsArray.findIndex(x=>x.label===this.label)].cell
    this.components= components
    this.comment = comment
    this.prerequisites = prerequisites
    this.highestPlanetRequired = highestPlanetRequired
    this.selected = selected
}}


const projectsArray = []

projectsArray.push(

    {label:"telescope 7",rows:3,cell:13},
    {label:"telescope 6",rows:5,cell:13},
    {label:"telescope 5",rows:7,cell:13},
    {label:"telescope 4",rows:9,cell:13},
    {label:"telescope 3",rows:11,cell:13},
    {label:"telescope 2",rows:13,cell:13},
    {label:"telescope 1",rows:15,cell:13},
    {label:"telescope 8",rows:1,cell:13},
    {label:"telescope 9",rows:1,cell:15},
    {label:"telescope 10",rows:1,cell:17},
    {label:"telescope 11",rows:1,cell:19},
    {label:"telescope 12",rows:1,cell:21},
    {label:"telescope 13",rows:1,cell:23},
    {label:"telescope 14",rows:1,cell:25},
    {label:"telescope 15",rows:1,cell:27},
    {label:"telescope 16",rows:1,cell:29},
    {label:"telescope 17",rows:3,cell:29},
    {label:"telescope 18",rows:5,cell:29},
    {label:"telescope 19",rows:7,cell:29},
    {label:"telescope 20",rows:9,cell:29},
    {label:"telescope 21",rows:11,cell:29},
    {label:"telescope 22",rows:13,cell:29},

    {label:"superior leader",rows:1,cell:3},
    {label:"senior leader",rows:1,cell:5},
    {label:"advanced leader",rows:1,cell:7},
    {label:"leader",rows:1,cell:9},
    {label:"superior manager training",rows:1,cell:11},

    {label:"superior specialist university",rows:3,cell:5},
    {label:"advanced specialist university",rows:3,cell:7},
    {label:"specialist university",rows:3,cell:9},
    {label:"advanced manager training",rows:3,cell:11},

    {label:"advanced contract manager",rows:5,cell:7},
    {label:"contract manager",rows:5,cell:9},
    {label:"manager training",rows:5,cell:11},

    {label:"advanced ore targeting",rows:7,cell:7},
    {label:"ore targeting",rows:7,cell:9},
    {label:"cargo logistics",rows:7,cell:11},

    {label:"superior alchemy",rows:9,cell:7},
    {label:"advanced alchemy",rows:9,cell:9},
    {label:"alchemy",rows:9,cell:11},

    {label:"bottleneck optimizations",rows:13,cell:9},
    {label:"resource details",rows:13,cell:11},
    {label:"beacon",rows:15,cell:11},

    {label:"superior thrusters",rows:15,cell:1},
    {label:"advanced thrusters",rows:15,cell:5},
    {label:"superior mining",rows:17,cell:3},
    {label:"advanced mining",rows:17,cell:7},
    {label:"rover",rows:17,cell:9},
    {label:"asteroid miner",rows:17,cell:11},
    {label:"superior cargo handling",rows:19,cell:1},
    {label:"advanced cargo handling",rows:19,cell:5},

    {label:"smelter",rows:19,cell:13},
    {label:"crafter",rows:21,cell:11},
    {label:"advanced crafter",rows:23,cell:11},
    {label:"crafting efficiency",rows:25,cell:11},
    {label:"superior crafting",rows:27,cell:11},
    {label:"advanced item value",rows:25,cell:9},
    {label:"superior item value",rows:25,cell:7},
    {label:"crafting specialist",rows:27,cell:7},

    {label:"advanced furnace",rows:21,cell:15},
    {label:"smelting efficiency",rows:23,cell:15},
    {label:"superior furnace",rows:25,cell:15},
    {label:"preferred vendor",rows:27,cell:15},
    {label:"advanced alloy value",rows:23,cell:17},
    {label:"superior alloy value",rows:23,cell:19},
    {label:"smelting specialist",rows:25,cell:19},
    {label:"furnace overdrive",rows:27,cell:17},
    {label:"furnace overdrive 2",rows:27,cell:19},
    {label:"furnace overdrive 3",rows:27,cell:21},
    {label:"advanced furnace overdrive",rows:29,cell:17},
    {label:"furnace overdrive efficiency",rows:29,cell:19},

    {label:"management",rows:17,cell:15},
    {label:"colonization",rows:17,cell:17},
    {label:"colonization scouting",rows:15,cell:19},
    {label:"colonization advanced scouting",rows:15,cell:21},
    {label:"colonization superior scouting",rows:15,cell:23},

    {label:"colony tax incentives",rows:17,cell:21},
    {label:"colony advanced tax incentives",rows:17,cell:23},
    {label:"colony superior tax incentives",rows:17,cell:25},

    {label:"colonization efficiency",rows:19,cell:19},
    {label:"colonization advanced efficiency",rows:19,cell:21},
    {label:"colonization superior efficiency",rows:19,cell:23},

    {label:"colony renegotiation",rows:21,cell:19},
    {label:"terraforming",rows:21,cell:23},
    {label:"advanced terraforming",rows:21,cell:25},

    {label:"asteroid refined drilling",rows:11,cell:15},
    {label:"asteroid harvester",rows:11,cell:17},
    {label:"advanced asteroid harvester",rows:11,cell:19},
    {label:"superior asteroid harvester",rows:11,cell:21},
    {label:"debris scanner",rows:11,cell:23},
    {label:"debris harvester",rows:11,cell:25},
    {label:"advanced debris harvester",rows:9,cell:25},
    {label:"superior debris harvester",rows:7,cell:25},

    {label:"asteroid auto miner",rows:13,cell:17},
    {label:"asteroid scanner",rows:13,cell:19},
    {label:"advanced asteroid scanner",rows:13,cell:21},

    {label:"market insight",rows:9,cell:15},
    {label:"inside trader",rows:9,cell:17},
    {label:"market manipulation",rows:9,cell:19},
    {label:"advanced market manipulation",rows:9,cell:21},

    {label:"rover advanced logistics",rows:7,cell:15},
    {label:"rover scanning module",rows:7,cell:17},
    {label:"market accelerator",rows:7,cell:19},

    {label:"advanced market accelerator",rows:7,cell:21},
    {label:"rover resupply",rows:5,cell:17},
    {label:"advanced rover resupply",rows:5,cell:19}
)




const projectCells = []

projectCells.push(

    new projectCell({
        area:"Telescopes",
        label:"telescope 1",
        components:[{label:"iron ore",baseCost:"1.5k",costWithMaxLab:750},
        {label:"copper bar",baseCost:3,costWithMaxLab:2},],
        description:"extends vision to 3 more planets",
        prerequisites:"management",
        highestPlanetRequired:"2-Drasta"}),
    
    new projectCell({
        area:"Telescopes",
        label:"telescope 2",
        components:[{label:"lead bar",baseCost:5,costWithMaxLab:2},
        {label:"silica ore",baseCost:500,costWithMaxLab:250},],
        description:"extends vision to 3 more planets",
        prerequisites:"telescope 1",
        highestPlanetRequired:"7-Widow"}),
    
    new projectCell({
        area:"Telescopes",
        label:"telescope 3",
        components:[{label:"iron nail",baseCost:10,costWithMaxLab:5},
        {label:"silicon bar",baseCost:15,costWithMaxLab:8},],
        description:"extends vision to 3 more planets",
        prerequisites:"telescope 2",
        highestPlanetRequired:"7-Widow"}),
    
    new projectCell({
        area:"Telescopes",
        label:"telescope 4",
        components:[{label:"hammer",baseCost:5,costWithMaxLab:2},
        {label:"aluminium bar",baseCost:20,costWithMaxLab:10},],
        description:"extends vision to 3 more planets",
        prerequisites:"telescope 3",
        highestPlanetRequired:"9-Yangtze"}),
    
    new projectCell({
        area:"Telescopes",
        label:"telescope 5",
        components:[{label:"circuit",baseCost:3,costWithMaxLab:2},
        {label:"gold bar",baseCost:10,costWithMaxLab:5},],
        description:"extends vision to 3 more planets",
        prerequisites:"telescope 4",
        highestPlanetRequired:"14-Batalla"}),
    
    new projectCell({
        area:"Telescopes",
        label:"telescope 6",
        components:[{label:"laser",baseCost:3,costWithMaxLab:2},
        {label:"bronze bar",baseCost:25,costWithMaxLab:12},],
        description:"extends vision to 3 more planets",
        prerequisites:"telescope 5",
        highestPlanetRequired:"14-Batalla"}),
    
    new projectCell({
        area:"Telescopes",
        label:"telescope 7",
        components:[{label:"solar panel",baseCost:3,costWithMaxLab:2},
        {label:"platinum bar",baseCost:20,costWithMaxLab:10},],
        description:"extends vision to 3 more planets",
        prerequisites:"telescope 6",
        highestPlanetRequired:"19-Parnitha"}),
    
    new projectCell({
        area:"Telescopes",
        label:"telescope 8",
        components:[{label:"laser torch",baseCost:3,costWithMaxLab:2},
        {label:"titanium bar",baseCost:10,costWithMaxLab:5},],
        description:"extends vision to 3 more planets",
        prerequisites:"telescope 7",
        highestPlanetRequired:"22-Zelene"}),
    
    new projectCell({
        area:"Telescopes",
        label:"telescope 9",
        components:[{label:"advanced battery",baseCost:3,costWithMaxLab:2},
        {label:"iridium bar",baseCost:10,costWithMaxLab:5},],
        description:"extends vision to 3 more planets",
        prerequisites:"telescope 8",
        highestPlanetRequired:"25-Osun"}),
    
    new projectCell({
        area:"Telescopes",
        label:"telescope 10",
        components:[{label:"thermal scanner",baseCost:3,costWithMaxLab:2},
        {label:"palladium bar",baseCost:10,costWithMaxLab:5},],
        description:"extends vision to 3 more planets",
        prerequisites:"telescope 9",
        highestPlanetRequired:"28-Tikkun"}),
    
    new projectCell({
        area:"Telescopes",
        label:"telescope 11",
        components:[{label:"advanced computer",baseCost:3,costWithMaxLab:2},
        {label:"osmium bar",baseCost:10,costWithMaxLab:5},],
        description:"extends vision to 3 more planets",
        prerequisites:"telescope 10",
        highestPlanetRequired:"31-Vular"}),
    
    new projectCell({
        area:"Telescopes",
        label:"telescope 12",
        components:[{label:"navigation module",baseCost:3,costWithMaxLab:2},
        {label:"rhodium bar",baseCost:10,costWithMaxLab:5},],
        description:"extends vision to 3 more planets",
        prerequisites:"telescope 11",
        highestPlanetRequired:"34-Rupert"}),
    
    new projectCell({
        area:"Telescopes",
        label:"telescope 13",
        components:[{label:"radio tower",baseCost:3,costWithMaxLab:2},
        {label:"inerton alloy",baseCost:10,costWithMaxLab:5},],
        description:"extends vision to 3 more planets",
        prerequisites:"telescope 12",
        highestPlanetRequired:"37-Utritis"}),
    
    new projectCell({
        area:"Telescopes",
        label:"telescope 14",
        components:[{label:"satellite dish",baseCost:3,costWithMaxLab:2},
        {label:"quadium alloy",baseCost:10,costWithMaxLab:5},],
        description:"extends vision to 3 more planets",
        prerequisites:"telescope 13",
        highestPlanetRequired:"40-Unicae"}),
    
    new projectCell({
        area:"Telescopes",
        label:"telescope 15",
        components:[{label:"motor",baseCost:5,costWithMaxLab:2},
        {label:"scrith alloy",baseCost:10,costWithMaxLab:5},],
        description:"extends vision to 3 more planets",
        prerequisites:"telescope 14",
        highestPlanetRequired:"43-Daedalus"}),
    
    new projectCell({
        area:"Telescopes",
        label:"telescope 16",
        components:[{label:"accumulator",baseCost:3,costWithMaxLab:2},
        {label:"uru alloy",baseCost:10,costWithMaxLab:5},],
        description:"extends vision to 3 more planets",
        prerequisites:"telescope 15",
        highestPlanetRequired:"46-Sotomi"}),
    
    new projectCell({
        area:"Telescopes",
        label:"telescope 17",
        components:[{label:"nuclear capsule",baseCost:3,costWithMaxLab:2},
        {label:"vibranium alloy",baseCost:10,costWithMaxLab:5},],
        description:"extends vision to 3 more planets",
        prerequisites:"telescope 16",
        highestPlanetRequired:"49-Arabis"}),
    
    new projectCell({
        area:"Telescopes",
        label:"telescope 18",
        components:[{label:"wind turbine",baseCost:4,costWithMaxLab:2},
        {label:"aether alloy",baseCost:10,costWithMaxLab:5},],
        description:"extends vision to 3 more planets",
        prerequisites:"telescope 17",
        highestPlanetRequired:"52-Vega"}),
    
    new projectCell({
        area:"Telescopes",
        label:"telescope 19",
        components:[{label:"nuclear reactor",baseCost:4,costWithMaxLab:2},
        {label:"viterium alloy",baseCost:12,costWithMaxLab:6},],
        description:"extends vision to 3 more planets",
        prerequisites:"telescope 18",
        highestPlanetRequired:"55-Zumbia"}),
    
    new projectCell({
        area:"Telescopes",
        label:"telescope 20",
        components:[{label:"collider",baseCost:5,costWithMaxLab:2},
        {label:"xynium alloy",baseCost:15,costWithMaxLab:8},],
        description:"extends vision to 3 more planets",
        prerequisites:"telescope 19",
        highestPlanetRequired:"58-Doral"}),
    
    new projectCell({
        area:"Telescopes",
        label:"telescope 21",
        components:[{label:"gravity chamber",baseCost:5,costWithMaxLab:2},
        {label:"quolium alloy",baseCost:20,costWithMaxLab:10},],
        description:"extends vision to 3 more planets",
        prerequisites:"telescope 20",
        highestPlanetRequired:"61-Bob"}),
    
    new projectCell({
        area:"Telescopes",
        label:"telescope 22",
        components:[{label:"robot",baseCost:6,costWithMaxLab:3},
        {label:"luterium alloy",baseCost:24,costWithMaxLab:12},],
        description:"extends vision to 3 more planets",
        prerequisites:"telescope 21",
        highestPlanetRequired:"64-Hecate"}),
    
    new projectCell({
        area:"Production",
        label:"smelter",
        components:[{label:"copper ore",baseCost:600,costWithMaxLab:300},
        {label:"iron ore",baseCost:250,costWithMaxLab:125},],
        description:"refines ore into more valuable materials",
        prerequisites:"asteroid miner",
        highestPlanetRequired:"2-Drasta"}),
    
    new projectCell({
        area:"Production",
        label:"advanced furnace",
        components:[{label:"glass",baseCost:3,costWithMaxLab:2},
        {label:"aluminium bar",baseCost:10,costWithMaxLab:5},],
        description:"all smelters speed x1.20",
        prerequisites:"smelter",
        highestPlanetRequired:"9-Yangtze"}),
    
    new projectCell({
        area:"Production",
        label:"smelting efficiency",
        components:[{label:"bronze bar",baseCost:200,costWithMaxLab:100},],
        description:"decreases ingredients required by 20% for all smelters",
        prerequisites:"advanced furnace",
        highestPlanetRequired:"12-Relic"}),
    
    new projectCell({
        area:"Production",
        label:"advanced alloy value",
        components:[{label:"circuit",baseCost:3,costWithMaxLab:2},
        {label:"silver bar",baseCost:10,costWithMaxLab:5},],
        description:"a x1.20 increase to all alloys value",
        prerequisites:"advanced furnace",
        highestPlanetRequired:"12-Relic"}),
    
    new projectCell({
        area:"Production",
        label:"superior alloy value",
        components:[{label:"diamond",baseCost:"250k",costWithMaxLab:"125k"},
        {label:"laser",baseCost:30,costWithMaxLab:15},],
        description:"a x1.20 increase to all alloys value",
        prerequisites:"advanced alloy value",
        highestPlanetRequired:"17-Castellus"}),
    
    new projectCell({
        area:"Production",
        label:"superior furnace",
        components:[{label:"iridium bar",baseCost:5,costWithMaxLab:2},
        {label:"titanium bar",baseCost:20,costWithMaxLab:10},
        {label:"platinum bar",baseCost:50,costWithMaxLab:25},],
        description:"all smelters speed x1.20",
        prerequisites:"smelting efficiency OR advanced alloy value",
        highestPlanetRequired:"25-Osun"}),
    
    new projectCell({
        area:"Production",
        label:"smelting specialist",
        components:[{label:"basic computer",baseCost:5,costWithMaxLab:2},
        {label:"advanced battery",baseCost:2,costWithMaxLab:1},],
        description:"a 10% chance to smelt double of an alloy",
        prerequisites:"advanced alloy value",
        highestPlanetRequired:"12-Relic"}),
    
    new projectCell({
        area:"Production",
        label:"preferred vendor",
        components:[{label:"iron nail",baseCost:200,costWithMaxLab:100},
        {label:"hammer",baseCost:75,costWithMaxLab:38},{label:"circuit",baseCost:40,costWithMaxLab:20},],
        description:"price for building remaining smelters<br>& crafters reduced by 50%",
        prerequisites:"superior furnace",
        highestPlanetRequired:"9-Yangtze"}),
    
    new projectCell({
        area:"Production",
        label:"furnace overdrive",
        components:[{label:"osmium bar",baseCost:20,costWithMaxLab:10},
        {label:"plasma torch",baseCost:1,costWithMaxLab:1},],
        description:"ability to put 1 furnace into overdrive",
        comment:"smelt speed x2 BUT ingredients costs +50%",
        prerequisites:"superior furnace",
        highestPlanetRequired:"31-Vular"}),
    
    new projectCell({
        area:"Production",
        label:"furnace overdrive 2",
        components:[{label:"uru alloy",baseCost:200,costWithMaxLab:100},
        {label:"plasma torch",baseCost:20,costWithMaxLab:10},
        {label:"nuclear capsule",baseCost:2,costWithMaxLab:1},],
        description:"ability to put a 2nd furnace into overdrive",
        comment:"",
        prerequisites:"furnace overdrive",
        highestPlanetRequired:"46-Sotomi"}),
    
    new projectCell({
        area:"Production",
        label:"furnace overdrive 3",
        components:[{label:"aether alloy",baseCost:300,costWithMaxLab:150},
        {label:"plasma torch",baseCost:100,costWithMaxLab:50},
        {label:"fusion capsule",baseCost:2,costWithMaxLab:1},],
        description:"ability to put a 3rd furnace into overdrive",
        comment:"",
        prerequisites:"furnace overdrive 2",
        highestPlanetRequired:"52-Vega"}),
    
    new projectCell({
        area:"Production",
        label:"advanced furnace overdrive",
        components:[{label:"rhodium bar",baseCost:40,costWithMaxLab:20},
        {label:"inerton alloy",baseCost:20,costWithMaxLab:10},
        {label:"thermal scanner",baseCost:10,costWithMaxLab:5},],
        description:"increases furnace overdrive smelt speed to x4",
        comment:"",
        prerequisites:"furnace overdrive",
        highestPlanetRequired:"37-Utritis"}),
    
    new projectCell({
        area:"Production",
        label:"furnace overdrive efficiency",
        components:[{label:"iridium bar",baseCost:200,costWithMaxLab:100},
        {label:"motor",baseCost:1,costWithMaxLab:1},],
        description:"decreases furnace overdrive extra ingredients cost to +20%",
        comment:"",
        prerequisites:"furnace overdrive",
        highestPlanetRequired:"25-Osun"}),
    
    new projectCell({
        area:"Production",
        label:"crafter",
        components:[{label:"lead ore",baseCost:"5k",costWithMaxLab:"2.5k"},
        {label:"iron bar",baseCost:5,costWithMaxLab:2},],
        description:"crafts items from raw materials",
        comment:"",
        prerequisites:"smelter",
        highestPlanetRequired:"4-Drasta"}),
    
    new projectCell({
        area:"Production",
        label:"advanced crafter",
        components:[{label:"lens",baseCost:5,costWithMaxLab:2},
        {label:"gold bar",baseCost:50,costWithMaxLab:25},],
        description:"all crafters speed x1.20",
        comment:"",
        prerequisites:"crafter",
        highestPlanetRequired:"14-Batalla"}),
    
    new projectCell({
        area:"Production",
        label:"crafting efficiency",
        components:[{label:"solar panel",baseCost:30,costWithMaxLab:15},],
        description:"decreases ingredients required by 20% for all crafters",
        comment:"",
        prerequisites:"advanced crafter",
        highestPlanetRequired:"9-Yangtze"}),
    
    new projectCell({
        area:"Production",
        label:"advanced item value",
        components:[{label:"lens",baseCost:1,costWithMaxLab:1},
        {label:"silver bar",baseCost:5,costWithMaxLab:2},],
        description:"a x1.20 increase to all items value",
        comment:"",
        prerequisites:"advanced crafter",
        highestPlanetRequired:"12-Relic"}),
    
    new projectCell({
        area:"Production",
        label:"superior item value",
        components:[{label:"palladium bar",baseCost:200,costWithMaxLab:100},
        {label:"laser torch",baseCost:25,costWithMaxLab:12},],
        description:"a x1.20 increase to all items value",
        comment:"",
        prerequisites:"advanced item value",
        highestPlanetRequired:"28-Tikkun"}),
    
    new projectCell({
        area:"Production",
        label:"superior crafting",
        components:[{label:"thermal scanner",baseCost:2,costWithMaxLab:1},
        {label:"advanced battery",baseCost:10,costWithMaxLab:5},
        {label:"laser torch",baseCost:20,costWithMaxLab:10},],
        description:"all crafters speed x1.20",
        comment:"",
        prerequisites:"crafting efficiency OR advanced item value",
        highestPlanetRequired:"19-Parnitha"}),
    
    new projectCell({
        area:"Production",
        label:"crafting specialist",
        components:[{label:"advanced battery",baseCost:3,costWithMaxLab:2},
        {label:"advanced computer",baseCost:2,costWithMaxLab:1},],
        description:"a 10% chance to craft double of an item",
        comment:"",
        prerequisites:"advanced item value",
        highestPlanetRequired:"22-Zelene"}),
    
    new projectCell({
        area:"Alchemy and Logistics",
        label:"advanced mining",
        components:[{label:"battery",baseCost:5,costWithMaxLab:2},
        {label:"aluminium bar",baseCost:20,costWithMaxLab:10},],
        description:"all planet mine rates x1.25",
        comment:"",
        prerequisites:"rover",
        highestPlanetRequired:"9-Yangtze"}),
    
    new projectCell({
        area:"Alchemy and Logistics",
        label:"advanced thrusters",
        components:[{label:"glass",baseCost:2,costWithMaxLab:1},
        {label:"gold bar",baseCost:10,costWithMaxLab:5},],
        description:"all ship speed x1.25",
        comment:"",
        prerequisites:"advanced mining",
        highestPlanetRequired:"14-Batalla"}),
    
    new projectCell({
        area:"Alchemy and Logistics",
        label:"advanced cargo handling",
        components:[{label:"hammer",baseCost:5,costWithMaxLab:2},
        {label:"silver bar",baseCost:25,costWithMaxLab:12},],
        description:"all ship cargo x1.25",
        comment:"",
        prerequisites:"advanced mining",
        highestPlanetRequired:"12-Relic"}),
    
    new projectCell({
        area:"Alchemy and Logistics",
        label:"superior mining",
        components:[{label:"laser torch",baseCost:10,costWithMaxLab:5},
        {label:"platinum bar",baseCost:25,costWithMaxLab:12},],
        description:"all planet mine rates x1.25",
        comment:"",
        prerequisites:"advanced thrusters OR advanced cargo handling",
        highestPlanetRequired:"19-Parnitha"}),
    
    new projectCell({
        area:"Alchemy and Logistics",
        label:"superior thrusters",
        components:[{label:"advanced battery",baseCost:4,costWithMaxLab:2},],
        description:"all ship speed x1.25",
        comment:"",
        prerequisites:"superior mining",
        highestPlanetRequired:"4-Dholen"}),
    
    new projectCell({
        area:"Alchemy and Logistics",
        label:"superior cargo handling",
        components:[{label:"titanium bar",baseCost:50,costWithMaxLab:25},],
        description:"all ship cargo x1.25",
        comment:"",
        prerequisites:"superior mining",
        highestPlanetRequired:"22-Zelene"}),
    
    new projectCell({
        area:"Alchemy and Logistics",
        label:"beacon",
        components:[{label:"iron bar",baseCost:15,costWithMaxLab:8},],
        description:"constructs a beacon providing bonuses to planet clusters",
        comment:"",
        prerequisites:"telescope 1",
        highestPlanetRequired:"2-Drasta"}),
    
    new projectCell({
        area:"Alchemy and Logistics",
        label:"resource details",
        components:[{label:"battery",baseCost:3,costWithMaxLab:2},],
        description:"adds a detail panel with resource stats",
        comment:"accessed from resource panel",
        prerequisites:"telescope 2",
        highestPlanetRequired:"1-Balor"}),
    
    new projectCell({
        area:"Alchemy and Logistics",
        label:"bottleneck optimizations",
        components:[{label:"titanium bar",baseCost:5,costWithMaxLab:2},
        {label:"platinum bar",baseCost:25,costWithMaxLab:12},
        {label:"steel bar",baseCost:50,costWithMaxLab:25},],
        description:"adds visual clue to planet upgrades to show what",
        comment:"upgrade is bottlenecking production",
        prerequisites:"resource details",
        highestPlanetRequired:"22-Zelene"}),
    
    new projectCell({
        area:"Alchemy and Logistics",
        label:"alchemy",
        components:[{label:"gold bar",baseCost:50,costWithMaxLab:25},
        {label:"lens",baseCost:6,costWithMaxLab:3},],
        description:`convert an ore on a planet to an ore worth 1 level higher<br>`
        + spanText("crimson","**1x Planet <=> 1x Alchemy**"),
        comment:"upgrade is bottlenecking production",
        prerequisites:"cargo logistics",
        highestPlanetRequired:"14-Batalla"}),
    
    new projectCell({
        area:"Alchemy and Logistics",
        label:"advanced alchemy",
        components:[{label:"silver ore",baseCost:"50k",costWithMaxLab:"25k"},
        {label:"basic computer",baseCost:6,costWithMaxLab:3},
        {label:"titanium ore",baseCost:"25k",costWithMaxLab:"12.5k"},],
        description:`convert an ore on a planet to an ore worth 2 levels higher<br>`
        + spanText("crimson","**1x Planet <=> 1x Alchemy**"),
        comment:"upgrade is bottlenecking production",
        prerequisites:"alchemy",
        highestPlanetRequired:"22-Zelene"}),
    
    new projectCell({
        area:"Alchemy and Logistics",
        label:"superior alchemy",
        components:[{label:"palladium bar",baseCost:400,costWithMaxLab:200},
        {label:"osmium bar",baseCost:200,costWithMaxLab:100},
        {label:"advanced computer",baseCost:5,costWithMaxLab:2},],
        description:`convert an ore on a planet to an ore worth 3 levels higher<br>`
        + spanText("crimson","**1x Planet <=> 1x Alchemy**"),
        comment:"upgrade is bottlenecking production",
        prerequisites:"advanced alchemy",
        highestPlanetRequired:"31-Vular"}),
    
    new projectCell({
        area:"Alchemy and Logistics",
        label:"cargo logistics",
        components:[{label:"aluminium bar",baseCost:10,costWithMaxLab:5},
        {label:"circuit",baseCost:3,costWithMaxLab:2},],
        description:"ability to prioritize which ore to pick up first",
        comment:"even if it isn't the most valuable",
        prerequisites:"telescope 4",
        highestPlanetRequired:"9-Yangtze"}),
    
    new projectCell({
        area:"Alchemy and Logistics",
        label:"ore targeting",
        components:[{label:"hammer",baseCost:100,costWithMaxLab:50},
        {label:"battery",baseCost:50,costWithMaxLab:25},],
        description:"prioritized ore on each planet receives +15% yield bonus",
        comment:"(total will be 115%)",
        prerequisites:"cargo logistics",
        highestPlanetRequired:"4-Dolen"}),
    
    new projectCell({
        area:"Alchemy and Logistics",
        label:"advanced ore targeting",
        components:[{label:"basic computer",baseCost:100,costWithMaxLab:50},
        {label:"thermal scanner",baseCost:15,costWithMaxLab:8},],
        description:"prioritized ore on each planet receives +30% yield bonus",
        comment:"(total will be 130%)",
        prerequisites:"ore targeting",
        highestPlanetRequired:"19-Parnitha"}),
    
    new projectCell({
        area:"Management",
        label:"management",
        components:[{label:"copper ore",baseCost:400,costWithMaxLab:200},
        {label:"iron ore",baseCost:50,costWithMaxLab:25},],
        description:"hire and assign managers to planets",
        comment:"",
        prerequisites:" - ",
        highestPlanetRequired:"2-Drasta"}),
    
    new projectCell({
        area:"Management",
        label:"manager training",
        components:[{label:"laser torch",baseCost:1,costWithMaxLab:1},
        {label:"steel bar",baseCost:50,costWithMaxLab:25},],
        description:"all managers benefits x1.10",
        comment:"",
        prerequisites:"telescope 6",
        highestPlanetRequired:"12-Relic"}),
    
    new projectCell({
        area:"Management",
        label:"contract manager",
        components:[{label:"basic computer",baseCost:20,costWithMaxLab:10},
        {label:"circuit",baseCost:20,costWithMaxLab:10},
        {label:"titanium bar",baseCost:25,costWithMaxLab:12},],
        description:"increases manager slots by 1",
        comment:"",
        prerequisites:"manager training",
        highestPlanetRequired:"22-Zelene"}),
    
    new projectCell({
        area:"Management",
        label:"advanced contract manager",
        components:[{label:"advanced computer",baseCost:10,costWithMaxLab:5},
        {label:"thermal scanner",baseCost:10,costWithMaxLab:5},],
        description:"increases manager slots by 1",
        comment:"",
        prerequisites:"contract manager",
        highestPlanetRequired:"22-Zelene"}),
    
    new projectCell({
        area:"Management",
        label:"advanced manager training",
        components:[{label:"advanced computer",baseCost:2,costWithMaxLab:1},
        {label:"advanced battery",baseCost:10,costWithMaxLab:5},],
        description:"all managers second benefits x1.10",
        comment:"",
        prerequisites:"manager training",
        highestPlanetRequired:"22-Zelene"}),
    
    new projectCell({
        area:"Management",
        label:"specialist university",
        components:[{label:"motor",baseCost:3,costWithMaxLab:2},
        {label:"inerton alloy",baseCost:300,costWithMaxLab:150},],
        description:"all managers second benefits x1.05",
        comment:"",
        prerequisites:"advanced manager training",
        highestPlanetRequired:"37-Utritis"}),
    
    new projectCell({
        area:"Management",
        label:"advanced specialist university",
        components:[{label:"accumulator",baseCost:2,costWithMaxLab:1},
        {label:"scrith alloy",baseCost:100,costWithMaxLab:50},],
        description:"all managers second benefits x1.05",
        comment:"",
        prerequisites:"specialist university",
        highestPlanetRequired:"43-Daedalus"}),
    
    new projectCell({
        area:"Management",
        label:"superior specialist university",
        components:[{label:"viterium alloy",baseCost:800,costWithMaxLab:400},],
        description:"all managers second benefits x1.05",
        comment:"",
        prerequisites:"advanced specialist university",
        highestPlanetRequired:"55-Zumbia"}),
    
    new projectCell({
        area:"Management",
        label:"superior manager training",
        components:[{label:"rhodium bar",baseCost:200,costWithMaxLab:100},],
        description:"all managers benefits x1.10",
        comment:"",
        prerequisites:"advanced manager training",
        highestPlanetRequired:"34-Rupert"}),
    
    new projectCell({
        area:"Management",
        label:"leader",
        components:[{label:"navigation module",baseCost:5,costWithMaxLab:2},{label:"rhodium bar",baseCost:60,costWithMaxLab:30},],
        description:"ability to elect a leader among managers.All leader bonuses x2",
        comment:"",
        prerequisites:"advanced manager training",
        highestPlanetRequired:"34-Rupert"}),
    
    new projectCell({
        area:"Management",
        label:"advanced leader",
        components:[{label:"motor",baseCost:10,costWithMaxLab:5},{label:"telescope",baseCost:10,costWithMaxLab:5},{label:"scrith alloy",baseCost:200,costWithMaxLab:100},],
        description:"all leader bonuses x3",
        comment:"",
        prerequisites:"leader",
        highestPlanetRequired:"43-Daedalus"}),
    
    new projectCell({
        area:"Management",
        label:"senior leader",
        components:[{label:"robot",baseCost:10,costWithMaxLab:5},],
        description:"ability to elect a 2nd leader among 5+ stars managers",
        comment:"",
        prerequisites:"advanced leader",
        highestPlanetRequired:"43-Daedalus"}),
    
    new projectCell({
        area:"Management",
        label:"superior leader",
        components:[{label:"collider",baseCost:50,costWithMaxLab:25},{label:"gravity chamber",baseCost:20,costWithMaxLab:10},{label:"quolium alloy",baseCost:200,costWithMaxLab:100},],
        description:"all leader bonuses x4",
        comment:"",
        prerequisites:"senior leader",
        highestPlanetRequired:"61-Bob"}),
    
    new projectCell({
        area:"Rover, Asteroids and Marketing ",
        label:"rover",
        components:[{label:"copper wire",baseCost:10,costWithMaxLab:5},],
        description:"ability to scan planets for valuable items",
        comment:"(unlock access to rover[s])",
        prerequisites:"asteroid miner",
        highestPlanetRequired:"1-Balor"}),
    
    new projectCell({
        area:"Rover, Asteroids and Marketing ",
        label:"rover advanced logistics",
        components:[{label:"bronze bar",baseCost:20,costWithMaxLab:10},{label:"battery",baseCost:20,costWithMaxLab:10},{label:"lens",baseCost:10,costWithMaxLab:5},],
        description:"unlocks an additional mission choice for new scans",
        comment:"(unlock access to rover[s])",
        prerequisites:"telescope 5",
        highestPlanetRequired:"12-Relic"}),
    
    new projectCell({
        area:"Rover, Asteroids and Marketing ",
        label:"rover resupply",
        components:[{label:"solar panel",baseCost:1,costWithMaxLab:1},{label:"laser torch",baseCost:1,costWithMaxLab:1},{label:"platinum bar",baseCost:6,costWithMaxLab:3},],
        description:"planet being scanned by a rover receive a x2.5 bonus",
        comment:"(mine, speed and cargo)",
        prerequisites:"rover advanced logistics",
        highestPlanetRequired:"19-Parnitha"}),
    
    new projectCell({
        area:"Rover, Asteroids and Marketing ",
        label:"advanced rover resupply",
        components:[{label:"advanced battery",baseCost:10,costWithMaxLab:5},{label:"plasma torch",baseCost:6,costWithMaxLab:3},{label:"rhodium bar",baseCost:25,costWithMaxLab:12},],
        description:"planet being scanned by a rover receive a x5 bonus",
        comment:"(instead of a x2.5)",
        prerequisites:"rover resupply",
        highestPlanetRequired:"34-Rupert"}),
    
    new projectCell({
        area:"Rover, Asteroids and Marketing ",
        label:"rover scanning module",
        components:[{label:"aluminium bar",baseCost:100,costWithMaxLab:50},{label:"basic computer",baseCost:1,costWithMaxLab:1},],
        description:"+5% chance of rovers finding all rewards",
        comment:"(instead of a x2.5)",
        prerequisites:"rover advanced logistics",
        highestPlanetRequired:"12-Relic"}),
    
    new projectCell({
        area:"Rover, Asteroids and Marketing ",
        label:"asteroid miner",
        components:[{label:"copper ore",baseCost:400,costWithMaxLab:200},{label:"iron ore",baseCost:100,costWithMaxLab:50},],
        description:"ability to mine asteroids for ore<br>"+ spanText("lime","Frequency : 10mn"),
        comment:"(instead of a x2.5)",
        prerequisites:" - ",
        highestPlanetRequired:"2-Drasta"}),
    
    new projectCell({
        area:"Rover, Asteroids and Marketing ",
        label:"asteroid refined drilling",
        components:[{label:"silicon bar",baseCost:40,costWithMaxLab:20},{label:"lead bar",baseCost:80,costWithMaxLab:40},],
        description:"10% chance of an asteroid containing 20x normal value worth of alloy",
        comment:"(instead of a x2.5)",
        prerequisites:"telescope 3",
        highestPlanetRequired:"7-Widow"}),
    
    new projectCell({
        area:"Rover, Asteroids and Marketing ",
        label:"asteroid harvester",
        components:[{label:"iron bar",baseCost:400,costWithMaxLab:200},{label:"circuit",baseCost:5,costWithMaxLab:2},],
        description:"all asteroid value x1.3",
        comment:"(instead of a x2.5)",
        prerequisites:"asteroid refined drilling",
        highestPlanetRequired:"9-Yangtze"}),
    
    new projectCell({
        area:"Rover, Asteroids and Marketing ",
        label:"advanced asteroid harvester",
        components:[{label:"space probe",baseCost:1,costWithMaxLab:1},{label:"plasma torch",baseCost:50,costWithMaxLab:25},],
        description:"all asteroid value x1.3",
        comment:"(multiplicative with asteroid harvester)",
        prerequisites:"asteroid harvester",
        highestPlanetRequired:"28-Tikkun"}),
    
    new projectCell({
        area:"Rover, Asteroids and Marketing ",
        label:"superior asteroid harvester",
        components:[{label:"nuclear reactor",baseCost:10,costWithMaxLab:5},{label:"scrith alloy",baseCost:300,costWithMaxLab:150},{label:"inerton alloy",baseCost:600,costWithMaxLab:300},],
        description:"all asteroid value x1.3",
        comment:"(multiplicative with both other harvester upgrades)",
        prerequisites:"advanced asteroid harvester",
        highestPlanetRequired:"43-Daedalus"}),
    
    new projectCell({
        area:"Rover, Asteroids and Marketing ",
        label:"debris scanner",
        components:[{label:"collider",baseCost:1,costWithMaxLab:1},{label:"gravity chamber",baseCost:8,costWithMaxLab:4},],
        description:"allow discovery of debris fields providing valuable items",
        comment:"[frequency fixed, roughly 22mn]",
        prerequisites:"advanced asteroid harvester",
        highestPlanetRequired:"40-Unicae"}),
    
    new projectCell({
        area:"Rover, Asteroids and Marketing ",
        label:"debris harvester",
        components:[{label:"uru alloy",baseCost:250,costWithMaxLab:125},{label:"quadium alloy",baseCost:"1.2k",costWithMaxLab:600},],
        description:"all debris value x1.3",
        comment:"[frequency fixed, roughly 22mn]",
        prerequisites:"debris scanner",
        highestPlanetRequired:"46-Sotomi"}),
    
    new projectCell({
        area:"Rover, Asteroids and Marketing ",
        label:"advanced debris harvester",
        components:[{label:"vibranium alloy",baseCost:250,costWithMaxLab:125},{label:"scrith alloy",baseCost:"1.2k",costWithMaxLab:600},],
        description:"all debris value x1.3",
        comment:"(multiplicative with previous upgrade)",
        prerequisites:"debris harvester",
        highestPlanetRequired:"49-Arabis"}),
    
    new projectCell({
        area:"Rover, Asteroids and Marketing ",
        label:"superior debris harvester",
        components:[{label:"viterium alloy",baseCost:300,costWithMaxLab:150},{label:"aether alloy",baseCost:"1.4k",costWithMaxLab:700},],
        description:"all debris value x1.3",
        comment:"(multiplicative with previous upgrade)",
        prerequisites:"advanced debris harvester",
        highestPlanetRequired:"55-Zumbia"}),
    
    new projectCell({
        area:"Rover, Asteroids and Marketing ",
        label:"asteroid auto miner",
        components:[{label:"advanced computer",baseCost:20,costWithMaxLab:10},{label:"solar panel",baseCost:100,costWithMaxLab:50},],
        description:"automatically mine asteroids<br>(& debris) even when idle",
        comment:"[asteroid base "+spanText("lime","frequency 10mn")+"]",
        prerequisites:"asteroid harvester",
        highestPlanetRequired:"22-Zelene"}),
    
    new projectCell({
        area:"Rover, Asteroids and Marketing ",
        label:"asteroid scanner",
        components:[{label:"thermal scanner",baseCost:30,costWithMaxLab:15},{label:"navigation module",baseCost:5,costWithMaxLab:2},],
        description:"frequency of asteroids increased by 30%",
        comment:"["+spanText("lime","new")+" asteroid "+spanText("lime","frequency 7mn")+"]",
        prerequisites:"asteroid harvester",
        highestPlanetRequired:"19-Parnitha"}),
    
    new projectCell({
        area:"Rover, Asteroids and Marketing ",
        label:"advanced asteroid scanner",
        components:[{label:"telescope",baseCost:150,costWithMaxLab:75},],
        description:"frequency of asteroids increased by another 30%",
        comment:"["+spanText("lime","new")+" asteroid "+spanText("lime","frequency 5mn")+"]",
        prerequisites:"asteroid scanner",
        highestPlanetRequired:"22-Zelene"}),
    
    new projectCell({
        area:"Rover, Asteroids and Marketing ",
        label:"market insight",
        components:[{label:"silver bar",baseCost:20,costWithMaxLab:10},{label:"hammer",baseCost:10,costWithMaxLab:5},],
        description:"ability to forecast upcoming market changes",
        comment:"["+spanText("lime","new")+" asteroid "+spanText("lime","frequency 5mn")+"]",
        prerequisites:"telescope 4",
        highestPlanetRequired:"12-Relic"}),
    
    new projectCell({
        area:"Rover, Asteroids and Marketing ",
        label:"inside trader",
        components:[{label:"steel bar",baseCost:25,costWithMaxLab:12},{label:"lens",baseCost:10,costWithMaxLab:5},],
        description:"a +15% chance of positive market fluctuations",
        comment:"(on all future changes)",
        prerequisites:"market insight",
        highestPlanetRequired:"12-Relic"}),
    
    new projectCell({
        area:"Rover, Asteroids and Marketing ",
        label:"market manipulation",
        components:[{label:"gold bar",baseCost:"15k",costWithMaxLab:"7.5k"},{label:"diamond",baseCost:"30k",costWithMaxLab:"15k"},{label:"basic computer",baseCost:10,costWithMaxLab:5},],
        description:"chance of a 4x positive market",
        comment:"(on all future changes)",
        prerequisites:"inside trader",
        highestPlanetRequired:"17-Castellus"}),
    
    new projectCell({
        area:"Rover, Asteroids and Marketing ",
        label:"advanced market manipulation",
        components:[{label:"telescope",baseCost:5,costWithMaxLab:2},{label:"advanced computer",baseCost:10,costWithMaxLab:5},{label:"quadium alloy",baseCost:100,costWithMaxLab:50},],
        description:"chance of a 5x positive market",
        comment:"(on all future changes)",
        prerequisites:"market manipulation",
        highestPlanetRequired:"40-Unicae"}),
    
    new projectCell({
        area:"Rover, Asteroids and Marketing ",
        label:"market accelerator",
        components:[{label:"motor",baseCost:1,costWithMaxLab:1},{label:"iridium bar",baseCost:400,costWithMaxLab:200},],
        description:"ability to replace the current market with the following one",
        comment:"(cool down 8H)",
        prerequisites:"inside trader",
        highestPlanetRequired:"25-Osun"}),
    
    new projectCell({
        area:"Rover, Asteroids and Marketing ",
        label:"advanced market accelerator",
        components:[{label:"gravity chamber",baseCost:1,costWithMaxLab:1},{label:"inerton alloy",baseCost:115,costWithMaxLab:58},],
        description:"ability to replace the current market with the following one again",
        comment:"(cool down 8H)",
        prerequisites:"market accelerator",
        highestPlanetRequired:"37-Utritis"}),
    
    new projectCell({
        area:"Colonization",
        label:"colonization",
        components:[{label:"copper bar",baseCost:20,costWithMaxLab:10},{label:"iron bar",baseCost:10,costWithMaxLab:5},],
        description:"complete planet requests to colonize them and earn bonuses",
        comment:"(cool down 8H)",
        prerequisites:"management",
        highestPlanetRequired:"2-Drasta"}),
    
    new projectCell({
        area:"Colonization",
        label:"colonization scouting",
        components:[{label:"iron nail",baseCost:15,costWithMaxLab:8},],
        description:"increases max colonization tasks from 3 to 4",
        comment:"(cool down 8H)",
        prerequisites:"colonization",
        highestPlanetRequired:"2-Drasta"}),
    
    new projectCell({
        area:"Colonization",
        label:"colonization advanced scouting",
        components:[{label:"silver bar",baseCost:60,costWithMaxLab:30},],
        description:"increases max colonization tasks from 4 to 5",
        comment:"(cool down 8H)",
        prerequisites:"colonization scouting",
        highestPlanetRequired:"12-Relic"}),
    
    new projectCell({
        area:"Colonization",
        label:"colonization superior scouting",
        components:[{label:"diamond",baseCost:"50k",costWithMaxLab:"25k"},],
        description:"increases max colonization tasks from 5 to 6",
        comment:"(cool down 8H)",
        prerequisites:"colonization advanced scouting",
        highestPlanetRequired:"17-Castellus"}),
    
    new projectCell({
        area:"Colonization",
        label:"colony tax incentives",
        components:[{label:"aluminium bar",baseCost:60,costWithMaxLab:30},],
        description:"planet upgrade prices reduced by 5% per colony level",
        comment:"(mine,speed,cargo)",
        prerequisites:"colonization scouting OR colonization efficiency",
        highestPlanetRequired:"9-Yangtze"}),
    
    new projectCell({
        area:"Colonization",
        label:"colony advanced tax incentives",
        components:[{label:"bronze bar",baseCost:60,costWithMaxLab:30},],
        description:"planet upgrade prices reduced by 5% per colony level",
        comment:"(mine,speed,cargo)",
        prerequisites:"colony tax incentives",
        highestPlanetRequired:"12-Relic"}),
    
    new projectCell({
        area:"Colonization",
        label:"colony superior tax incentives",
        components:[{label:"palladium bar",baseCost:60,costWithMaxLab:30},],
        description:"planet upgrade prices reduced by 5% per colony level",
        comment:"(mine,speed,cargo)",
        prerequisites:"colony advanced tax incentives",
        highestPlanetRequired:"28-Tikkun"}),
    
    new projectCell({
        area:"Colonization",
        label:"colonization efficiency",
        components:[{label:"silver bar",baseCost:15,costWithMaxLab:8},{label:"hammer",baseCost:10,costWithMaxLab:5},],
        description:"colonization cost 20% less resources",
        comment:"(mine,speed,cargo)",
        prerequisites:"colonization",
        highestPlanetRequired:"12-Relic"}),
    
    new projectCell({
        area:"Colonization",
        label:"colonization advanced efficiency",
        components:[{label:"steel bar",baseCost:40,costWithMaxLab:20},{label:"laser",baseCost:10,costWithMaxLab:5},],
        description:"colonization cost 20% less resources",
        comment:"(mine,speed,cargo)",
        prerequisites:"colonization efficiency",
        highestPlanetRequired:"14-Batalla"}),
    
    new projectCell({
        area:"Colonization",
        label:"colonization superior efficiency",
        components:[{label:"palladium bar",baseCost:50,costWithMaxLab:25},{label:"laser torch",baseCost:15,costWithMaxLab:8},],
        description:"colonization cost 20% less resources",
        comment:"(mine,speed,cargo)",
        prerequisites:"colonization advanced efficiency",
        highestPlanetRequired:"28-Tikkun"}),
    
    new projectCell({
        area:"Colonization",
        label:"colony renegotiation",
        components:[{label:"bronze bar",baseCost:100,costWithMaxLab:50},{label:"hammer",baseCost:400,costWithMaxLab:200},],
        description:"allows you to renegociate colony requests of planets",
        comment:"(24h cooldown)",
        prerequisites:"colonization efficiency",
        highestPlanetRequired:"12-Relic"}),
    
    new projectCell({
        area:"Colonization",
        label:"terraforming",
        components:[{label:"diamond",baseCost:"20k",costWithMaxLab:"10k"},{label:"thermal scanner",baseCost:10,costWithMaxLab:5},],
        description:"pick any unlocked planet and increase<br>its colonization level by 2 instantly",
        comment:spanText("crimson","**1x Planet <=> 1x Terraforming**"),
        prerequisites:"colonization advanced efficiency",
        highestPlanetRequired:"19-Parnitha"}),
    
    new projectCell({
        area:"Colonization",
        label:"advanced terraforming",
        components:[{label:"satellite dish",baseCost:10,costWithMaxLab:5},],
        description:"pick any unlocked planet and increase<br>its colonization level by 3 instantly",
        comment:spanText("crimson","**1x Planet <=> 1x Terraforming**"),
        prerequisites:"terraforming",
        highestPlanetRequired:"28-Tikkun"}),
)

const projectsConnections = []

projectsConnections.push(
{rows:1,cell:4,dir:"hor"},
{rows:1,cell:6,dir:"hor"},
{rows:1,cell:8,dir:"hor"},
{rows:1,cell:14,dir:"hor"},
{rows:1,cell:16,dir:"hor"},
{rows:1,cell:18,dir:"hor"},
{rows:1,cell:20,dir:"hor"},
{rows:1,cell:22,dir:"hor"},
{rows:1,cell:24,dir:"hor"},
{rows:1,cell:26,dir:"hor"},
{rows:1,cell:28,dir:"hor"},

{rows:3,cell:6,dir:"hor"},
{rows:3,cell:8,dir:"hor"},
{rows:3,cell:10,dir:"hor"},

{rows:5,cell:8,dir:"hor"},
{rows:5,cell:10,dir:"hor"},
{rows:5,cell:12,dir:"hor"},
{rows:5,cell:18,dir:"hor"},

{rows:7,cell:8,dir:"hor"},
{rows:7,cell:10,dir:"hor"},
{rows:7,cell:14,dir:"hor"},
{rows:7,cell:16,dir:"hor"},
{rows:7,cell:20,dir:"hor"},

{rows:9,cell:8,dir:"hor"},
{rows:9,cell:10,dir:"hor"},
{rows:9,cell:12,dir:"hor"},
{rows:9,cell:14,dir:"hor"},
{rows:9,cell:16,dir:"hor"},
{rows:9,cell:18,dir:"hor"},
{rows:9,cell:20,dir:"hor"},

{rows:11,cell:14,dir:"hor"},
{rows:11,cell:16,dir:"hor"},
{rows:11,cell:18,dir:"hor"},
{rows:11,cell:20,dir:"hor"},
{rows:11,cell:22,dir:"hor"},
{rows:11,cell:24,dir:"hor"},

{rows:13,cell:10,dir:"hor"},
{rows:13,cell:12,dir:"hor"},
{rows:13,cell:20,dir:"hor"},

{rows:15,cell:12,dir:"hor"},
{rows:15,cell:20,dir:"hor"},
{rows:15,cell:22,dir:"hor"},

{rows:17,cell:8,dir:"hor"},
{rows:17,cell:10,dir:"hor"},
{rows:17,cell:12,dir:"hor"},
{rows:17,cell:14,dir:"hor"},
{rows:17,cell:16,dir:"hor"},
{rows:17,cell:22,dir:"hor"},
{rows:17,cell:24,dir:"hor"},

{rows:19,cell:20,dir:"hor"},
{rows:19,cell:22,dir:"hor"},

{rows:21,cell:24,dir:"hor"},

{rows:23,cell:18,dir:"hor"},

{rows:25,cell:8,dir:"hor"},

{rows:27,cell:18,dir:"hor"},
{rows:27,cell:20,dir:"hor"},


{rows:2,cell:11,dir:"ver"},
{rows:4,cell:11,dir:"ver"},
{rows:2,cell:13,dir:"ver"},
{rows:4,cell:13,dir:"ver"},
{rows:6,cell:13,dir:"ver"},
{rows:8,cell:13,dir:"ver"},
{rows:10,cell:13,dir:"ver"},
{rows:12,cell:13,dir:"ver"},
{rows:14,cell:13,dir:"ver"},

{rows:22,cell:11,dir:"ver"},
{rows:24,cell:11,dir:"ver"},
{rows:26,cell:11,dir:"ver"},

{rows:22,cell:15,dir:"ver"},
{rows:24,cell:15,dir:"ver"},
{rows:26,cell:15,dir:"ver"},

{rows:12,cell:17,dir:"ver"},
{rows:28,cell:17,dir:"ver"},

{rows:20,cell:19,dir:"ver"},

{rows:8,cell:25,dir:"ver"},
{rows:10,cell:25,dir:"ver"},

{rows:2,cell:29,dir:"ver"},
{rows:4,cell:29,dir:"ver"},
{rows:6,cell:29,dir:"ver"},
{rows:8,cell:29,dir:"ver"},
{rows:10,cell:29,dir:"ver"},
{rows:12,cell:29,dir:"ver"},


{rows:6,cell:16,dir:"dia"},
{rows:2,cell:10,dir:"dia"},
{rows:8,cell:12,dir:"dia"},
{rows:12,cell:18,dir:"dia"},
{rows:16,cell:2,dir:"dia"},
{rows:16,cell:4,dir:"dia"},
{rows:16,cell:6,dir:"dia"},
{rows:18,cell:2,dir:"dia"},
{rows:18,cell:4,dir:"dia"},
{rows:18,cell:6,dir:"dia"},
{rows:16,cell:18,dir:"dia"},
{rows:18,cell:18,dir:"dia"},
{rows:16,cell:20,dir:"dia"},
{rows:18,cell:20,dir:"dia"},
{rows:16,cell:14,dir:"dia"},
{rows:18,cell:12,dir:"dia"},
{rows:20,cell:22,dir:"dia"},
{rows:20,cell:12,dir:"dia"},
{rows:20,cell:14,dir:"dia"},
{rows:22,cell:16,dir:"dia"},
{rows:24,cell:16,dir:"dia"},
{rows:24,cell:18,dir:"dia"},
{rows:26,cell:16,dir:"dia"},
{rows:8,cell:18,dir:"dia"},
{rows:28,cell:18,dir:"dia"},
{rows:24,cell:10,dir:"dia"},
{rows:26,cell:10,dir:"dia"},
{rows:26,cell:8,dir:"dia"}, )

//let togSel = "linear-gradient(to bottom left,rgba(173,185,47,0.5) 70%,rgba(169,169,169,1))"

function setProjects(){
    let containerA = addEle({dad:right,setClass:"contRow_W",paddingL:"20px"})
    let containerB = addEle({dad:right,setID:"containerB"})
        addEle({dad:containerA,setClass:"projectTogglerL",height:"50px",
        backG:togSel,
        text:"Display<br>as Tree",setID:"toggletree",setFunc:()=>{
            getID("projectsListsInfo").innerHTML = ""
            cleanParent(getID("containerB"))
            getID("togglelist").style.background = togNot
            getID("toggletree").style.background = togSel
            containerB.style = containerColumn
            buildProjectsGrid("projects",cellSize,containerB) }})

        addEle({dad:containerA,setClass:"projectTogglerR",
        backG:togNot,
        text:"Display<br>as List",setID:"togglelist",setFunc:()=>{
            getID("projectsListsInfo").innerHTML = 
            `Project Tree as Full List or Filtered ... Special tool here being<br>
             a Private List you may customize by `+spanText("yellow","clicking")+` on Projects `+spanText("yellow","Titles/Names")+`.<br>
             From whatever list you may Add/Remove and Filter the new batch again.`
            cleanParent(getID("containerB"))
            getID("togglelist").style.background = togSel
            getID("toggletree").style.background = togNot
            setProjectsAreas(getID("containerB"))
            getID("fullProjects").click() }})
        addEle({dad:containerA,marginL:"20px",textC:"rgb(0,212,250)",fontS:"18px",setID:"projectsListsInfo"})
    buildProjectsGrid("projects",cellSize,containerB)
}

function setProjectsAreas(container){
    container.style = containerRow
    let areas = []
    let found = false

    addEle({dad:container,setID:"containerB1",marginL:"10px"})
    addEle({dad:container,setID:"containerB2"})
    addEle({dad:container,setID:"containerB3"})
    addEle({dad:getID("containerB1"),setClass:"button1",fontS:"18px",
    backG:togNot,
    text:"Full List",setID:"fullProjects",setFunc:clickProjectsAreas})

    for(i=0;i<projectCells.length;i++)
        {found = false
        for(j=0;j<areas.length;j++)
            {if(areas[j] === projectCells[i].area){found = true}}
        if(!found)
            {areas.push(projectCells[i].area)
            addEle({dad:getID("containerB1"),setClass:"button1",fontS:"18px",
            backG:togNot,
            text:projectCells[i].area,setFunc:clickProjectsAreas}) }
        }

    addEle({dad:getID("containerB1"),setClass:"button1",fontS:"18px",
    backG:"linear-gradient(to bottom,rgba(220,126,115,1),rgba(0,0,0,1))",textC:"yellow",
    text:"Filtered Private List",setID:"projectsPrivateList",setFunc:clickProjectsAreas})
}


function clickProjectsAreas(e){
    let container = getID("containerB2")
    let listFrame = getID("containerB3")
    cleanParent(container)
    cleanParent(listFrame)
    container.style.marginLeft = 20 + "px"
    container.style.minWidth = 360 + "px"
    listFrame.style.marginLeft = 20 + "px"
    listFrame.style.border = "blue solid 2px"
    listFrame.style.borderRadius = 20 + "px"
    listFrame.style.padding = 10 + "px"
    listFrame.style.fontSize = 18 + "px"
    listFrame.style.width = 505 + "px"
    let thisText = e.srcElement.innerHTML
    let thisArray = []
    let costs = []
    let thisIdx = 0
    let subContainer = undefined
    let item = undefined
    let img = undefined
    let focusElement = undefined
    let projectIcon = ""
    let starterItem = undefined

    for(i=0;i<projectCells.length;i++){
        if( thisText === "Full List" || thisText === projectCells[i].area || 
            thisText.includes("Filtered Private List") && projectCells[i].selected ){
            thisArray.push(projectCells[i])
        }
    }

    for (i=0;i<thisArray.length;i++){
        for(j=0;j<thisArray[i].components.length;j++){
            thisIdx = costs.findIndex(x=> x.label === thisArray[i].components[j].label)
            if (thisIdx === -1){
                costs.push({
                    idx : getItemIdx(thisArray[i].components[j].label),
                    label : thisArray[i].components[j].label,
                    baseCost : formatKMBT(thisArray[i].components[j].baseCost,true),
                    minCost : formatKMBT(thisArray[i].components[j].costWithMaxLab,true), })
            } else { 
                costs[thisIdx].baseCost += formatKMBT(thisArray[i].components[j].baseCost,true)
                costs[thisIdx].minCost += formatKMBT(thisArray[i].components[j].costWithMaxLab,true)
            }
        }
    }

    costs = sortArrayByObjectIdx(costs)

    let costFrame = addEle({dad:container,setClass:"contCol_W",textA:"center",
    fontS:"18px",border:"blue solid 2px",radius:"20px",padding:"10px"})
        addEle({dad:costFrame,text:`Global Costs for this List<br>[Full costs 
        ⇒ Rooms/Projects reduced costs]<br>(Lab, Underforge, Dorms,2x Efficiencies)`})

        subContainer = addEle({dad:costFrame,setClass:"contCol_W",marginT:"20px"})
            addEle({dad:subContainer,setClass:"projectTogglerT",text:"Raw Projects Costs",
            setID:"projectsRawCosts",setFunc:(e)=>{
                e.srcElement.style.background = togSel
                getID("projectsAsComponents").style.background = togNot
                subCostFrameA.style.display = "block"
                subCostFrameB.style.display = "none" }})

            addEle({dad:subContainer,setClass:"projectTogglerB",text:`Projects Costs as<br>
            Crafting Components`,setID:"projectsAsComponents",setFunc:(e)=>{
                e.srcElement.style.background = togSel
                getID("projectsRawCosts").style.background = togNot
                subCostFrameB.style.display = "block"
                subCostFrameA.style.display = "none" }})

        addEle({dad:costFrame,borderB:"solid yellow 2px",margin:"20px 0 10px 0"})

    let subCostFrameA = addEle({dad:costFrame})
    let subCostFrameB = addEle({dad:costFrame})

    for (i=0;i<costs.length;i++){
        subContainer = addEle({dad:subCostFrameA,setClass:"contRow_W",alignItems:"center"})
            addEle({dad:subContainer,what:"img",imgFullSrc:gameLook === "Old" ? 
            "./IPM Components/" + costs[i].label + ".jpg" : "./IPM Components/" + costs[i].label + "n.jpg"})

            addEle({dad:subContainer,marginL:"10px",text:formatKMBT(costs[i].baseCost) + 
            " ⇒ " + formatKMBT(costs[i].minCost)})

            addEle({dad:subContainer,marginL:"10px",text:costs[i].label})
        }

    let costComponents = []
    let componentsFlow = []
    let queue = []
    let thisSet = []

    costs = sortArrayByObjectIdx(costs,false)

    for (i=0;i<costs.length;i++){
        let focusElement = costs[i]
        if(focusElement.idx < 26){
            let thisIdx = costComponents.findIndex(x=>x.label === focusElement.label)
            if(thisIdx === -1) 
                {costComponents.push(focusElement)}
            else {
                costComponents[thisIdx].baseCost += focusElement.baseCost
                costComponents[thisIdx].minCost += focusElement.minCost
                }
        } else {
            starterItem = {
                idx:1,
                itemIdx:focusElement.idx,
                label:focusElement.label, 
                father:undefined,
                origin:true,
                item:getItem(focusElement.label),
                quantityMax:focusElement.baseCost,
                quantityMin:focusElement.minCost,
                }
            queue.push([starterItem])
            while(queue.length > 0){
                thisSet = ProjectsFork(queue[0])
                queue.shift()
                componentsFlow.push(thisSet.mainArray)
                if(thisSet.subArray.length>0)
                    {queue.push(thisSet.subArray)}
            }
        }
    }

    getID("projectsRawCosts").click()

    componentsFlow = switchComponentsFlow(componentsFlow)

    for(i=0;i<componentsFlow.length;i++){
        let focusElement = componentsFlow[i]
        let thisIdx = costComponents.findIndex(x=>x.label === focusElement.label)
        if(thisIdx === -1) 
            {costComponents.push(focusElement)}
        else {
            costComponents[thisIdx].baseCost += focusElement.baseCost
            costComponents[thisIdx].minCost += focusElement.minCost
            }
    }

    costComponents = sortArrayByObjectIdx(costComponents)

    for (i=0;i<costComponents.length;i++){
        subContainer = addEle({dad:subCostFrameB,setClass:"contRow_W",alignItems:"center"})
            addEle({dad:subContainer,what:"img",imgFullSrc:gameLook === "Old" ? "./IPM Components/" +
            costComponents[i].label + ".jpg" : "./IPM Components/" + costComponents[i].label + "n.jpg"})

            addEle({dad:subContainer,marginL:"10px",text:formatKMBT(costComponents[i].baseCost) + " ⇒ " 
            + formatKMBT(costComponents[i].minCost)})

            addEle({dad:subContainer,marginL:"10px",text:costComponents[i].label})
    }

    let myBack = togNot
    let myCol = "white"
    if(!thisText.includes("Filtered")) 
        {thisText += " (" + thisArray.length + ")"}
    else 
        {myCol = "yellow" ; myBack = "linear-gradient(to bottom,rgba(220,126,115,1),rgba(0,0,0,1))"}

    addEle({dad:listFrame,setID:"projectsChosenList",text:thisText,textA:"center",
    backG:myBack,textC:myCol,border:"solid white 1px",radius:"10px",padding:"3px"})

    for(i=0;i<thisArray.length;i++){
        addEle({dad:listFrame,border:"solid blue 2px",margin:"10px 0"})
        myBack = thisArray[i].selected===true ? 
        "linear-gradient(to bottom,rgba(220,126,115,1),rgba(0,0,0,1))" : togNot
        myCol = thisArray[i].selected===true ? "yellow" : "white"
        addEle({dad:listFrame,setClass:"button1",backG:myBack,textC:myCol,
        text:thisArray[i].label.slice(0,1).toUpperCase()+thisArray[i].label.slice(1)  ,
        
        setFunc:(e)=>{
            focusElement = projectCells.findIndex(x=> x.label === e.srcElement.innerHTML.toLowerCase() )
            focusElement = projectCells[focusElement]
            if(!focusElement.selected){
                    e.srcElement.style.color = "yellow"
                    e.srcElement.style.background = "linear-gradient(to bottom,rgba(220,126,115,1),rgba(0,0,0,1))"
                    focusElement.selected = true
                } else {
                    e.srcElement.style.color = "white"
                    e.srcElement.style.background = togNot
                    focusElement.selected = false
                }
            let chosen = getID("projectsPrivateList") 
            chosen.innerHTML = "Filtered Private List (" + projectCells.filter(x=>x.selected).length + ")"
            chosen = getID("projectsChosenList")
            if (chosen.innerHTML.includes("Filtered Private List")){
                chosen.innerHTML = "Filtered Private List (" + projectCells.filter(x=>x.selected).length + ")"
                getID("projectsPrivateList").click()
            }
        }})

        subContainer = addEle({dad:listFrame,setClass:"contRow_W",alignItems:"center",justifyC:"center"})
            if(thisArray[i].label.includes("telescope")){
                let thisNumber = Number(thisArray[i].label.replace("telescope",""))
                if(thisNumber < 9) {projectIcon = "./IPM Projects/telescope1.jpg"}
                else if(thisNumber > 8 && thisNumber < 13 ) {projectIcon = "./IPM Projects/telescope2.jpg"}
                else {projectIcon = "./IPM Projects/telescope3.jpg"}
            } else { projectIcon = "./IPM Projects/" + thisArray[i].label + ".jpg" }
            addEle({dad:subContainer,what:"img",imgFullSrc:projectIcon})
            addEle({dad:subContainer,setClass:"texting",marginL:"20px",text:"Member of List :<br>"+thisArray[i].area})
        addEle({dad:listFrame,borderB:"solid yellow 2px",margin:"10px 0"})

        subContainer = addEle({dad:listFrame,setClass:"contCol_W",alignItems:"center",justifyC:"center"})
        let subC = addEle({dad:subContainer,setClass:"contCol"})
           let myTxt = "Description : " + thisArray[i].description
            if(thisArray[i].comment){myTxt += "<br>" + thisArray[i].comment}
            addEle({dad:subC,setClass:"texting",text:myTxt})
            addEle({dad:subC,setClass:"texting",text:"Prerequisites : " + thisArray[i].prerequisites})
            addEle({dad:subC,setClass:"texting",text:"Highest planet required : " + thisArray[i].highestPlanetRequired})
        addEle({dad:listFrame,borderB:"solid yellow 2px",margin:"10px 0"})
        addEle({dad:listFrame,setClass:"texting",text:"Base cost ⇒ cost with max lv Lab",textA:"center"})

        subContainer = addEle({dad:listFrame,setClass:"contCol_W",alignItems:"center",justifyC:"center"})
        subC = addEle({dad:subContainer,setClass:"contCol"})
        for(j=0;j<thisArray[i].components.length;j++){
            let subContainer2 = addEle({dad:subC,setClass:"contRow_W"})
                addEle({dad:subContainer2,what:"img",imgFullSrc:gameLook === "Old" ? 
                "./IPM Components/" + thisArray[i].components[j].label + ".jpg" :
                "./IPM Components/" + thisArray[i].components[j].label + "n.jpg"})
                addEle({dad:subContainer2,setClass:"texting",paddingL:"10px",text:thisArray[i].components[j].baseCost
                .toLocaleString() + " ⇒ " + thisArray[i].components[j].costWithMaxLab.toLocaleString()})
                addEle({dad:subContainer2,setClass:"texting",text:thisArray[i].components[j].label})
        }
    }
}


function ProjectsFork(thisArray){
    let mainArray = []
    let subArray = []
    let thisItem = undefined
    let subItem = undefined

    for (bcl1=0;bcl1<thisArray.length;bcl1++){
        if(!thisArray[bcl1].origin){mainArray.push(thisArray[bcl1])}
        thisItem = thisArray[bcl1].item
        for (bcl2=0;bcl2<thisItem.ingredients.length;bcl2++){
            subItem = getItem(thisItem.ingredients[bcl2].label)
            subArray.push(
                {idx : thisArray[0].idx+1,
                itemIdx : subItem.index,
                label : subItem.label,
                father : thisArray[bcl1].item,
                item : subItem, 
                quantityMax : Number(thisArray[bcl1].quantityMax) * Number(thisItem.ingredients[bcl2].amount),
                quantityMin : Number(thisArray[bcl1].quantityMin) * Number(thisItem.ingredients[bcl2].min),
                })
        }
    }
    return {mainArray : mainArray,subArray : subArray}
}

function switchComponentsFlow(thisArray){
    let newFlow = []
    let flowIdx = -1
    let focusItem = undefined

    for (bcl1=1;bcl1<thisArray.length;bcl1++){
        for (bcl2=0;bcl2<thisArray[bcl1].length;bcl2++){
            focusItem = thisArray[bcl1][bcl2]
            flowIdx = newFlow.findIndex(x=>x.label === focusItem.label)

            if (flowIdx === -1){
                newFlow.push({
                    idx : focusItem.itemIdx,
                    label : focusItem.label,
                    baseCost : focusItem.quantityMax,
                    minCost : focusItem.quantityMin,})
            } else {
                newFlow[flowIdx].baseCost += focusItem.quantityMax
                newFlow[flowIdx].minCost += focusItem.quantityMin
            }}}

    return newFlow
}









function getItemIdx(itemLabel){
    let res = -1
    let ItmIdx = undefined
    let AddIdx = 0
    ItmIdx = oresArray.findIndex(x=> x.label === itemLabel)

    if(ItmIdx === -1){
        AddIdx += oresArray.length
        ItmIdx = barsArray.findIndex(x=> x.label === itemLabel)
    }

    if(ItmIdx === -1){
        AddIdx += barsArray.length
        ItmIdx = itemsArray.findIndex(x=> x.label === itemLabel)
    }
    return (ItmIdx + AddIdx + 1)
}

function sortArrayByObjectIdx(myArray,ascending = true){
    let thisArray = []
    let val = undefined
    let pass = undefined

    while(myArray.length > 0){
        if (ascending) {val = 1000}
        else {val = 0 }

        for (let idxx = 0;idxx<myArray.length;idxx++){
            if(ascending){
                if( val > myArray[idxx].idx )
                    {val = myArray[idxx].idx ; pass = idxx} 
                }
            else {
                if( val < myArray[idxx].idx )
                    {val = myArray[idxx].idx ; pass = idxx} 
            }}

        thisArray.push(myArray[pass])
        myArray.splice(pass,1)
    }
    return thisArray
}