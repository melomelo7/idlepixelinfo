
class projectCell {
    constructor({
        label="",
        description="",
        rows=0,
        cell=0,
        component1={label:"",baseCost:0,costWithMaxLab:0},
        component2={label:"",baseCost:0,costWithMaxLab:0},
        component3={label:"",baseCost:0,costWithMaxLab:0},
        comment="",
        prerequisites="",
        highestPlanetRequired="",
    })
{
    this.label=label
    this.description = description
    this.rows= projectsArray[projectsArray.findIndex(x=>x.label===this.label)].rows
    this.cell= projectsArray[projectsArray.findIndex(x=>x.label===this.label)].cell
    this.component1 = component1
    this.component2 = component2
    this.component3 = component3
    this.comment = comment
    this.prerequisites = prerequisites
    this.highestPlanetRequired = highestPlanetRequired
}}


const projectsArray = []
projectsArray.push({label:"telescope 7",rows:3,cell:13})
projectsArray.push({label:"telescope 6",rows:5,cell:13})
projectsArray.push({label:"telescope 5",rows:7,cell:13})
projectsArray.push({label:"telescope 4",rows:9,cell:13})
projectsArray.push({label:"telescope 3",rows:11,cell:13})
projectsArray.push({label:"telescope 2",rows:13,cell:13})
projectsArray.push({label:"telescope 1",rows:15,cell:13})
projectsArray.push({label:"telescope 8",rows:1,cell:13})
projectsArray.push({label:"telescope 9",rows:1,cell:15})
projectsArray.push({label:"telescope 10",rows:1,cell:17})
projectsArray.push({label:"telescope 11",rows:1,cell:19})
projectsArray.push({label:"telescope 12",rows:1,cell:21})
projectsArray.push({label:"telescope 13",rows:1,cell:23})
projectsArray.push({label:"telescope 14",rows:1,cell:25})
projectsArray.push({label:"telescope 15",rows:1,cell:27})
projectsArray.push({label:"telescope 16",rows:1,cell:29})
projectsArray.push({label:"telescope 17",rows:3,cell:29})
projectsArray.push({label:"telescope 18",rows:5,cell:29})
projectsArray.push({label:"telescope 19",rows:7,cell:29})
projectsArray.push({label:"telescope 20",rows:9,cell:29})
projectsArray.push({label:"telescope 21",rows:11,cell:29})
projectsArray.push({label:"telescope 22",rows:13,cell:29})

projectsArray.push({label:"superior leader",rows:1,cell:3})
projectsArray.push({label:"senior leader",rows:1,cell:5})
projectsArray.push({label:"advanced leader",rows:1,cell:7})
projectsArray.push({label:"leader",rows:1,cell:9})
projectsArray.push({label:"superior manager training",rows:1,cell:11})

projectsArray.push({label:"superior specialist university",rows:3,cell:5})
projectsArray.push({label:"advanced specialist university",rows:3,cell:7})
projectsArray.push({label:"specialist university",rows:3,cell:9})
projectsArray.push({label:"advanced manager training",rows:3,cell:11})

projectsArray.push({label:"advanced contract manager",rows:5,cell:7})
projectsArray.push({label:"contract manager",rows:5,cell:9})
projectsArray.push({label:"manager training",rows:5,cell:11})

projectsArray.push({label:"advanced ore targeting",rows:7,cell:7})
projectsArray.push({label:"ore targeting",rows:7,cell:9})
projectsArray.push({label:"cargo logistics",rows:7,cell:11})

projectsArray.push({label:"superior alchemy",rows:9,cell:7})
projectsArray.push({label:"advanced alchemy",rows:9,cell:9})
projectsArray.push({label:"alchemy",rows:9,cell:11})

projectsArray.push({label:"bottleneck optimizations",rows:13,cell:9})
projectsArray.push({label:"resource details",rows:13,cell:11})
projectsArray.push({label:"beacon",rows:15,cell:11})

projectsArray.push({label:"superior thrusters",rows:15,cell:1})
projectsArray.push({label:"advanced thrusters",rows:15,cell:5})
projectsArray.push({label:"superior mining",rows:17,cell:3})
projectsArray.push({label:"advanced mining",rows:17,cell:7})
projectsArray.push({label:"rover",rows:17,cell:9})
projectsArray.push({label:"asteroid miner",rows:17,cell:11})
projectsArray.push({label:"superior cargo handling",rows:19,cell:1})
projectsArray.push({label:"advanced cargo handling",rows:19,cell:5})

projectsArray.push({label:"smelter",rows:19,cell:13})
projectsArray.push({label:"crafter",rows:21,cell:11})
projectsArray.push({label:"advanced crafter",rows:23,cell:11})
projectsArray.push({label:"crafting efficiency",rows:25,cell:11})
projectsArray.push({label:"superior crafting",rows:27,cell:11})
projectsArray.push({label:"advanced item value",rows:25,cell:9})
projectsArray.push({label:"superior item value",rows:25,cell:7})
projectsArray.push({label:"crafting specialist",rows:27,cell:7})

projectsArray.push({label:"advanced furnace",rows:21,cell:15})
projectsArray.push({label:"smelting efficiency",rows:23,cell:15})
projectsArray.push({label:"superior furnace",rows:25,cell:15})
projectsArray.push({label:"preferred vendor",rows:27,cell:15})
projectsArray.push({label:"advanced alloy value",rows:23,cell:17})
projectsArray.push({label:"superior alloy value",rows:23,cell:19})
projectsArray.push({label:"smelting specialist",rows:25,cell:19})
projectsArray.push({label:"furnace overdrive",rows:27,cell:17})
projectsArray.push({label:"furnace overdrive 2",rows:27,cell:19})
projectsArray.push({label:"furnace overdrive 3",rows:27,cell:21})
projectsArray.push({label:"advanced furnace overdrive",rows:29,cell:17})
projectsArray.push({label:"furnace overdrive efficiency",rows:29,cell:19})

projectsArray.push({label:"management",rows:17,cell:15})
projectsArray.push({label:"colonization",rows:17,cell:17})
projectsArray.push({label:"colonization scouting",rows:15,cell:19})
projectsArray.push({label:"colonization advanced scouting",rows:15,cell:21})
projectsArray.push({label:"colonization superior scouting",rows:15,cell:23})

projectsArray.push({label:"colony tax incentives",rows:17,cell:21})
projectsArray.push({label:"colony advanced tax incentives",rows:17,cell:23})
projectsArray.push({label:"colony superior tax incentives",rows:17,cell:25})

projectsArray.push({label:"colonization efficiency",rows:19,cell:19})
projectsArray.push({label:"colonization advanced efficiency",rows:19,cell:21})
projectsArray.push({label:"colonization superior efficiency",rows:19,cell:23})

projectsArray.push({label:"colony renegotiation",rows:21,cell:19})
projectsArray.push({label:"terraforming",rows:21,cell:23})
projectsArray.push({label:"advanced terraforming",rows:21,cell:25})

projectsArray.push({label:"asteroid refined drilling",rows:11,cell:15})
projectsArray.push({label:"asteroid harvester",rows:11,cell:17})
projectsArray.push({label:"advanced asteroid harvester",rows:11,cell:19})
projectsArray.push({label:"superior asteroid harvester",rows:11,cell:21})
projectsArray.push({label:"debris scanner",rows:11,cell:23})
projectsArray.push({label:"debris harvester",rows:11,cell:25})
projectsArray.push({label:"advanced debris harvester",rows:9,cell:25})
projectsArray.push({label:"superior debris harvester",rows:7,cell:25})

projectsArray.push({label:"asteroid auto miner",rows:13,cell:17})
projectsArray.push({label:"asteroid scanner",rows:13,cell:19})
projectsArray.push({label:"advanced asteroid scanner",rows:13,cell:21})

projectsArray.push({label:"market insight",rows:9,cell:15})
projectsArray.push({label:"inside trader",rows:9,cell:17})
projectsArray.push({label:"market manipulation",rows:9,cell:19})
projectsArray.push({label:"advanced market manipulation",rows:9,cell:21})

projectsArray.push({label:"rover advanced logistics",rows:7,cell:15})
projectsArray.push({label:"rover scanning module",rows:7,cell:17})
projectsArray.push({label:"market accelerator",rows:7,cell:19})
projectsArray.push({label:"advanced market accelerator",rows:7,cell:21})

projectsArray.push({label:"rover resupply",rows:5,cell:17})
projectsArray.push({label:"advanced rover resupply",rows:5,cell:19})





const projectCells = []
projectCells.push( new projectCell({
    label:"telescope 1",
    component1:{label:"iron ore",baseCost:"1.5k",costWithMaxLab:750},
    component2:{label:"copper bar",baseCost:3,costWithMaxLab:2},
    description:"extends vision to 3 more planets",
    prerequisites:"management",
    highestPlanetRequired:"2-Drasta"
}))

projectCells.push( new projectCell({
    label:"telescope 2",
    component1:{label:"lead bar",baseCost:5,costWithMaxLab:2},
    component2:{label:"silica ore",baseCost:500,costWithMaxLab:250},
    description:"extends vision to 3 more planets",
    prerequisites:"telescope 1",
    highestPlanetRequired:"7-Widow"
}))

projectCells.push( new projectCell({
    label:"telescope 3",
    component1:{label:"iron nail",baseCost:10,costWithMaxLab:5},
    component2:{label:"silicon bar",baseCost:15,costWithMaxLab:8},
    description:"extends vision to 3 more planets",
    prerequisites:"telescope 2",
    highestPlanetRequired:"7-Widow"
}))

projectCells.push( new projectCell({
    label:"telescope 4",
    component1:{label:"hammer",baseCost:5,costWithMaxLab:2},
    component2:{label:"aluminium bar",baseCost:20,costWithMaxLab:10},
    description:"extends vision to 3 more planets",
    prerequisites:"telescope 3",
    highestPlanetRequired:"9-Yangtze"
}))

projectCells.push( new projectCell({
    label:"telescope 5",
    component1:{label:"circuit",baseCost:3,costWithMaxLab:2},
    component2:{label:"gold bar",baseCost:10,costWithMaxLab:5},
    description:"extends vision to 3 more planets",
    prerequisites:"telescope 4",
    highestPlanetRequired:"14-Batalla"
}))

projectCells.push( new projectCell({
    label:"telescope 6",
    component1:{label:"laser",baseCost:3,costWithMaxLab:2},
    component2:{label:"bronze bar",baseCost:25,costWithMaxLab:12},
    description:"extends vision to 3 more planets",
    prerequisites:"telescope 5",
    highestPlanetRequired:"14-Batalla"
}))

projectCells.push( new projectCell({
    label:"telescope 7",
    component1:{label:"solar panel",baseCost:3,costWithMaxLab:2},
    component2:{label:"platinum bar",baseCost:20,costWithMaxLab:10},
    description:"extends vision to 3 more planets",
    prerequisites:"telescope 6",
    highestPlanetRequired:"19-Parnitha"
}))

projectCells.push( new projectCell({
    label:"telescope 8",
    component1:{label:"laser torch",baseCost:3,costWithMaxLab:2},
    component2:{label:"titanium bar",baseCost:10,costWithMaxLab:5},
    description:"extends vision to 3 more planets",
    prerequisites:"telescope 7",
    highestPlanetRequired:"22-Zelene"
}))

projectCells.push( new projectCell({
    label:"telescope 9",
    component1:{label:"advanced battery",baseCost:3,costWithMaxLab:2},
    component2:{label:"iridium bar",baseCost:10,costWithMaxLab:5},
    description:"extends vision to 3 more planets",
    prerequisites:"telescope 8",
    highestPlanetRequired:"25-Osun"
}))

projectCells.push( new projectCell({
    label:"telescope 10",
    component1:{label:"thermal scanner",baseCost:3,costWithMaxLab:2},
    component2:{label:"palladium bar",baseCost:10,costWithMaxLab:5},
    description:"extends vision to 3 more planets",
    prerequisites:"telescope 9",
    highestPlanetRequired:"28-Tikkun"
}))

projectCells.push( new projectCell({
    label:"telescope 11",
    component1:{label:"advanced computer",baseCost:3,costWithMaxLab:2},
    component2:{label:"osmium bar",baseCost:10,costWithMaxLab:5},
    description:"extends vision to 3 more planets",
    prerequisites:"telescope 10",
    highestPlanetRequired:"31-Vular"
}))

projectCells.push( new projectCell({
    label:"telescope 12",
    component1:{label:"navigation module",baseCost:3,costWithMaxLab:2},
    component2:{label:"rhodium bar",baseCost:10,costWithMaxLab:5},
    description:"extends vision to 3 more planets",
    prerequisites:"telescope 11",
    highestPlanetRequired:"34-Rupert"
}))

projectCells.push( new projectCell({
    label:"telescope 13",
    component1:{label:"radio tower",baseCost:3,costWithMaxLab:2},
    component2:{label:"inerton alloy",baseCost:10,costWithMaxLab:5},
    description:"extends vision to 3 more planets",
    prerequisites:"telescope 12",
    highestPlanetRequired:"37-Utritis"
}))

projectCells.push( new projectCell({
    label:"telescope 14",
    component1:{label:"satellite dish",baseCost:3,costWithMaxLab:2},
    component2:{label:"quadium alloy",baseCost:10,costWithMaxLab:5},
    description:"extends vision to 3 more planets",
    prerequisites:"telescope 13",
    highestPlanetRequired:"40-Unicae"
}))

projectCells.push( new projectCell({
    label:"telescope 15",
    component1:{label:"motor",baseCost:5,costWithMaxLab:2},
    component2:{label:"scrith alloy",baseCost:10,costWithMaxLab:5},
    description:"extends vision to 3 more planets",
    prerequisites:"telescope 14",
    highestPlanetRequired:"43-Daedalus"
}))

projectCells.push( new projectCell({
    label:"telescope 16",
    component1:{label:"accumulator",baseCost:3,costWithMaxLab:2},
    component2:{label:"uru alloy",baseCost:10,costWithMaxLab:5},
    description:"extends vision to 3 more planets",
    prerequisites:"telescope 15",
    highestPlanetRequired:"46-Sotomi"
}))

projectCells.push( new projectCell({
    label:"telescope 17",
    component1:{label:"nuclear capsule",baseCost:3,costWithMaxLab:2},
    component2:{label:"vibranium alloy",baseCost:10,costWithMaxLab:5},
    description:"extends vision to 3 more planets",
    prerequisites:"telescope 16",
    highestPlanetRequired:"49-Arabis"
}))

projectCells.push( new projectCell({
    label:"telescope 18",
    component1:{label:"wind turbine",baseCost:4,costWithMaxLab:2},
    component2:{label:"aether alloy",baseCost:10,costWithMaxLab:5},
    description:"extends vision to 3 more planets",
    prerequisites:"telescope 17",
    highestPlanetRequired:"52-Vega"
}))

projectCells.push( new projectCell({
    label:"telescope 19",
    component1:{label:"nuclear reactor",baseCost:4,costWithMaxLab:2},
    component2:{label:"viterium alloy",baseCost:12,costWithMaxLab:6},
    description:"extends vision to 3 more planets",
    prerequisites:"telescope 18",
    highestPlanetRequired:"55-Zumbia"
}))

projectCells.push( new projectCell({
    label:"telescope 20",
    component1:{label:"collider",baseCost:5,costWithMaxLab:2},
    component2:{label:"xynium alloy",baseCost:15,costWithMaxLab:8},
    description:"extends vision to 3 more planets",
    prerequisites:"telescope 19",
    highestPlanetRequired:"58-Doral"
}))

projectCells.push( new projectCell({
    label:"telescope 21",
    component1:{label:"gravity chamber",baseCost:5,costWithMaxLab:2},
    component2:{label:"quolium alloy",baseCost:20,costWithMaxLab:10},
    description:"extends vision to 3 more planets",
    prerequisites:"telescope 20",
    highestPlanetRequired:"61-Bob"
}))

projectCells.push( new projectCell({
    label:"telescope 22",
    component1:{label:"robot",baseCost:6,costWithMaxLab:3},
    component2:{label:"luterium alloy",baseCost:24,costWithMaxLab:12},
    description:"extends vision to 3 more planets",
    prerequisites:"telescope 21",
    highestPlanetRequired:"64-Hecate"
}))

projectCells.push( new projectCell({
    label:"superior leader",
    component1:{label:"collider",baseCost:50,costWithMaxLab:25},
    component2:{label:"gravity chamber",baseCost:20,costWithMaxLab:10},
    component3:{label:"quolium alloy",baseCost:200,costWithMaxLab:100},
    description:"all leader bonuses x4",
    prerequisites:"senior leader",
    highestPlanetRequired:"61-Bob"
}))

projectCells.push( new projectCell({
    label:"senior leader",
    component1:{label:"robot",baseCost:10,costWithMaxLab:5},
    description:"ability to elect a 2nd leader among 5+ stars managers",
    prerequisites:"advanced leader",
    highestPlanetRequired:"43-Daedalus"
}))

projectCells.push( new projectCell({
    label:"advanced leader",
    component1:{label:"motor",baseCost:10,costWithMaxLab:5},
    component2:{label:"telescope",baseCost:10,costWithMaxLab:5},
    component3:{label:"scrith alloy",baseCost:200,costWithMaxLab:100},
    description:"all leader bonuses x3",
    prerequisites:"leader",
    highestPlanetRequired:"43-Daedalus"
}))

projectCells.push( new projectCell({
    label:"leader",
    component1:{label:"navigation module",baseCost:5,costWithMaxLab:2},
    component2:{label:"rhodium bar",baseCost:60,costWithMaxLab:30},
    description:"ability to elect a leader among managers.All leader bonuses x2",
    prerequisites:"advanced manager training",
    highestPlanetRequired:"34-Rupert"
}))

projectCells.push( new projectCell({
    label:"superior manager training",
    component1:{label:"rhodium bar",baseCost:200,costWithMaxLab:100},
    description:"all managers benefits x1.10",
    prerequisites:"advanced manager training",
    highestPlanetRequired:"34-Rupert"
}))

projectCells.push( new projectCell({
    label:"superior specialist university",
    component1:{label:"viterium alloy",baseCost:800,costWithMaxLab:400},
    description:"all managers second benefits x1.05",
    prerequisites:"advanced specialist university",
    highestPlanetRequired:"55-Zumbia"
}))

projectCells.push( new projectCell({
    label:"advanced specialist university",
    component1:{label:"accumulator",baseCost:2,costWithMaxLab:1},
    component2:{label:"scrith alloy",baseCost:100,costWithMaxLab:50},
    description:"all managers second benefits x1.05",
    prerequisites:"specialist university",
    highestPlanetRequired:"43-Daedalus"
}))

projectCells.push( new projectCell({
    label:"specialist university",
    component1:{label:"motor",baseCost:3,costWithMaxLab:2},
    component2:{label:"inerton alloy",baseCost:300,costWithMaxLab:150},
    description:"all managers second benefits x1.05",
    prerequisites:"advanced manager training",
    highestPlanetRequired:"37-Utritis"
}))

projectCells.push( new projectCell({
    label:"advanced manager training",
    component1:{label:"advanced computer",baseCost:2,costWithMaxLab:1},
    component2:{label:"advanced battery",baseCost:10,costWithMaxLab:5},
    description:"all managers second benefits x1.10",
    prerequisites:"manager training",
    highestPlanetRequired:"22-Zelene"
}))

projectCells.push( new projectCell({
    label:"advanced contract manager",
    component1:{label:"advanced computer",baseCost:10,costWithMaxLab:5},
    component2:{label:"thermal scanner",baseCost:10,costWithMaxLab:5},
    description:"increases manager slots by 1",
    prerequisites:"contract manager",
    highestPlanetRequired:"22-Zelene"
}))

projectCells.push( new projectCell({
    label:"contract manager",
    component1:{label:"basic computer",baseCost:20,costWithMaxLab:10},
    component2:{label:"circuit",baseCost:20,costWithMaxLab:10},
    component3:{label:"titanium bar",baseCost:25,costWithMaxLab:12},
    description:"increases manager slots by 1",
    prerequisites:"manager training",
    highestPlanetRequired:"22-Zelene"
}))

projectCells.push( new projectCell({
    label:"manager training",
    component1:{label:"laser torch",baseCost:1,costWithMaxLab:1},
    component2:{label:"steel bar",baseCost:50,costWithMaxLab:25},
    description:"all managers benefits x1.10",
    prerequisites:"telescope 6",
    highestPlanetRequired:"12-Relic"
}))

projectCells.push( new projectCell({
    label:"advanced ore targeting",
    component1:{label:"basic computer",baseCost:100,costWithMaxLab:50},
    component2:{label:"thermal scanner",baseCost:15,costWithMaxLab:8},
    description:"prioritized ore on each planet receives +30% yield bonus",
    comment:"(total will be 130%)",
    prerequisites:"ore targeting",
    highestPlanetRequired:"19-Parnitha"
}))

projectCells.push( new projectCell({
    label:"ore targeting",
    component1:{label:"hammer",baseCost:100,costWithMaxLab:50},
    component2:{label:"battery",baseCost:50,costWithMaxLab:25},
    description:"prioritized ore on each planet receives +15% yield bonus",
    comment:"(total will be 115%)",
    prerequisites:"cargo logistics",
    highestPlanetRequired:"4-Dolen"
}))

projectCells.push( new projectCell({
    label:"cargo logistics",
    component1:{label:"aluminium bar",baseCost:10,costWithMaxLab:5},
    component2:{label:"circuit",baseCost:3,costWithMaxLab:2},
    description:"ability to prioritize which ore to pick up first",
    comment:"even if it isn't the most valuable",
    prerequisites:"telescope 4",
    highestPlanetRequired:"9-Yangtze"
}))

projectCells.push( new projectCell({
    label:"superior alchemy",
    component1:{label:"palladium bar",baseCost:400,costWithMaxLab:200},
    component2:{label:"osmium bar",baseCost:200,costWithMaxLab:100},
    component3:{label:"advanced computer",baseCost:5,costWithMaxLab:2},
    description:"convert an ore on a planet to an ore worth 3 levels higher ",
    prerequisites:"advanced alchemy",
    highestPlanetRequired:"31-Vular"
}))

projectCells.push( new projectCell({
    label:"advanced alchemy",
    component1:{label:"silver ore",baseCost:"50k",costWithMaxLab:"25k"},
    component2:{label:"basic computer",baseCost:6,costWithMaxLab:3},
    component3:{label:"titanium ore",baseCost:"25k",costWithMaxLab:"12.5k"},
    description:"convert an ore on a planet to an ore worth 2 levels higher ",
    prerequisites:"alchemy",
    highestPlanetRequired:"22-Zelene"
}))

projectCells.push( new projectCell({
    label:"alchemy",
    component1:{label:"gold bar",baseCost:50,costWithMaxLab:25},
    component2:{label:"lens",baseCost:6,costWithMaxLab:3},
    description:"convert an ore on a planet to an ore worth 1 levels higher ",
    prerequisites:"cargo logistics",
    highestPlanetRequired:"14-Batalla"
}))

projectCells.push( new projectCell({
    label:"bottleneck optimizations",
    component1:{label:"titanium bar",baseCost:5,costWithMaxLab:2},
    component2:{label:"platinum bar",baseCost:25,costWithMaxLab:12},
    component3:{label:"steel bar",baseCost:50,costWithMaxLab:25},
    description:"adds visual clue to planet upgrades to show what",
    comment:"upgrade is bottlenecking production",
    prerequisites:"resource details",
    highestPlanetRequired:"22-Zelene"
}))

projectCells.push( new projectCell({
    label:"resource details",
    component1:{label:"battery",baseCost:3,costWithMaxLab:2},
    description:"adds a detail panel with resource stats",
    comment:"accessed from resource panel",
    prerequisites:"telescope 2",
    highestPlanetRequired:"1-Balor"
}))

projectCells.push( new projectCell({
    label:"beacon",
    component1:{label:"iron bar",baseCost:15,costWithMaxLab:8},
    description:"constructs a beacon providing bonuses to planet clusters",
    prerequisites:"telescope 1",
    highestPlanetRequired:"2-Drasta"
}))

projectCells.push( new projectCell({
    label:"superior thrusters",
    component1:{label:"advanced battery",baseCost:4,costWithMaxLab:2},
    description:"all ship speed x1.25",
    prerequisites:"superior mining",
    highestPlanetRequired:"4-Dholen"
}))

projectCells.push( new projectCell({
    label:"advanced thrusters",
    component1:{label:"glass",baseCost:2,costWithMaxLab:1},
    component2:{label:"gold bar",baseCost:10,costWithMaxLab:5},
    description:"all ship speed x1.25",
    prerequisites:"advanced mining",
    highestPlanetRequired:"14-Batalla"
}))

projectCells.push( new projectCell({
    label:"superior mining",
    component1:{label:"laser torch",baseCost:10,costWithMaxLab:5},
    component2:{label:"platinum bar",baseCost:25,costWithMaxLab:12},
    description:"all planet mine rates x1.25",
    prerequisites:"advanced thrusters OR advanced cargo handling",
    highestPlanetRequired:"19-Parnitha"
}))

projectCells.push( new projectCell({
    label:"superior cargo handling",
    component1:{label:"titanium bar",baseCost:50,costWithMaxLab:25},
    description:"all ship cargo x1.25",
    prerequisites:"superior mining",
    highestPlanetRequired:"22-Zelene"
}))

projectCells.push( new projectCell({
    label:"advanced cargo handling",
    component1:{label:"hammer",baseCost:5,costWithMaxLab:2},
    component2:{label:"silver bar",baseCost:25,costWithMaxLab:12},
    description:"all ship cargo x1.25",
    prerequisites:"advanced mining",
    highestPlanetRequired:"12-Relic"
}))

projectCells.push( new projectCell({
    label:"advanced mining",
    component1:{label:"battery",baseCost:5,costWithMaxLab:2},
    component2:{label:"aluminium bar",baseCost:20,costWithMaxLab:10},
    description:"all planet mine rates x1.25",
    prerequisites:"rover",
    highestPlanetRequired:"9-Yangtze"
}))

projectCells.push( new projectCell({
    label:"rover",
    component1:{label:"copper wire",baseCost:10,costWithMaxLab:5},
    description:"ability to scan planets for valuable items",
    comment:"(unlock access to rover[s])",
    prerequisites:"asteroid miner",
    highestPlanetRequired:"1-Balor"
}))

projectCells.push( new projectCell({
    label:"asteroid miner",
    component1:{label:"copper ore",baseCost:400,costWithMaxLab:200},
    component2:{label:"iron ore",baseCost:100,costWithMaxLab:50},
    description:"ability to mine asteroids for ore",
    prerequisites:" - ",
    highestPlanetRequired:"2-Drasta"
}))

projectCells.push( new projectCell({
    label:"smelter",
    component1:{label:"copper ore",baseCost:600,costWithMaxLab:300},
    component2:{label:"iron ore",baseCost:250,costWithMaxLab:125},
    description:"refines ore into more valuable materials",
    prerequisites:"asteroid miner",
    highestPlanetRequired:"2-Drasta"
}))

projectCells.push( new projectCell({
    label:"crafter",
    component1:{label:"lead ore",baseCost:"5k",costWithMaxLab:"2.5k"},
    component2:{label:"iron bar",baseCost:5,costWithMaxLab:2},
    description:"crafts items from raw materials",
    prerequisites:"smelter",
    highestPlanetRequired:"4-Drasta"
}))

projectCells.push( new projectCell({
    label:"advanced crafter",
    component1:{label:"lens",baseCost:5,costWithMaxLab:2},
    component2:{label:"gold bar",baseCost:50,costWithMaxLab:25},
    description:"all crafters speed x1.20",
    prerequisites:"crafter",
    highestPlanetRequired:"14-Batalla"
}))

projectCells.push( new projectCell({
    label:"crafting efficiency",
    component1:{label:"solar panel",baseCost:30,costWithMaxLab:15},
    description:"decreases ingredients required by 20% for all crafters",
    prerequisites:"advanced crafter",
    highestPlanetRequired:"9-Yangtze"
}))

projectCells.push( new projectCell({
    label:"superior crafting",
    component1:{label:"thermal scanner",baseCost:2,costWithMaxLab:1},
    component2:{label:"advanced battery",baseCost:10,costWithMaxLab:5},
    component3:{label:"laser torch",baseCost:20,costWithMaxLab:10},
    description:"all crafters speed x1.20",
    prerequisites:"crafting efficiency OR advanced item value",
    highestPlanetRequired:"19-Parnitha"
}))

projectCells.push( new projectCell({
    label:"advanced item value",
    component1:{label:"lens",baseCost:1,costWithMaxLab:1},
    component2:{label:"silver bar",baseCost:5,costWithMaxLab:2},
    description:"a x1.20 increase to all items value",
    prerequisites:"advanced crafter",
    highestPlanetRequired:"12-Relic"
}))

projectCells.push( new projectCell({
    label:"superior item value",
    component1:{label:"palladium bar",baseCost:200,costWithMaxLab:100},
    component2:{label:"laser torch",baseCost:25,costWithMaxLab:12},
    description:"a x1.20 increase to all items value",
    prerequisites:"advanced item value",
    highestPlanetRequired:"28-Tikkun"
}))

projectCells.push( new projectCell({
    label:"crafting specialist",
    component1:{label:"advanced battery",baseCost:3,costWithMaxLab:2},
    component2:{label:"advanced computer",baseCost:2,costWithMaxLab:1},
    description:"a 10% chance to craft double of an item",
    prerequisites:"advanced item value",
    highestPlanetRequired:"22-Zelene"
}))



projectCells.push( new projectCell({
    label:"advanced furnace",
    component1:{label:"glass",baseCost:3,costWithMaxLab:2},
    component2:{label:"aluminium bar",baseCost:10,costWithMaxLab:5},
    description:"all smelters speed x1.20",
    prerequisites:"smelter",
    highestPlanetRequired:"9-Yangtze"
}))

projectCells.push( new projectCell({
    label:"smelting efficiency",
    component1:{label:"bronze bar",baseCost:200,costWithMaxLab:100},
    description:"decreases ingredients required by 20% for all smelters",
    prerequisites:"advanced furnace",
    highestPlanetRequired:"12-Relic"
}))

projectCells.push( new projectCell({
    label:"superior furnace",
    component1:{label:"iridium bar",baseCost:5,costWithMaxLab:2},
    component2:{label:"titanium bar",baseCost:20,costWithMaxLab:10},
    component3:{label:"platinum bar",baseCost:50,costWithMaxLab:25},
    description:"all smelters speed x1.20",
    prerequisites:"smelting efficiency OR advanced alloy value",
    highestPlanetRequired:"25-Osun"
}))

projectCells.push( new projectCell({
    label:"advanced alloy value",
    component1:{label:"circuit",baseCost:3,costWithMaxLab:2},
    component2:{label:"silver bar",baseCost:10,costWithMaxLab:5},
    description:"a x1.20 increase to all alloys value",
    prerequisites:"advanced furnace",
    highestPlanetRequired:"12-Relic"
}))

projectCells.push( new projectCell({
    label:"superior alloy value",
    component1:{label:"diamond",baseCost:"250k",costWithMaxLab:"125k"},
    component2:{label:"laser",baseCost:30,costWithMaxLab:15},
    description:"a x1.20 increase to all alloys value",
    prerequisites:"advanced alloy value",
    highestPlanetRequired:"17-Castellus"
}))

projectCells.push( new projectCell({
    label:"smelting specialist",
    component1:{label:"basic computer",baseCost:5,costWithMaxLab:2},
    component2:{label:"advanced battery",baseCost:2,costWithMaxLab:1},
    description:"a 10% chance to smelt double of an alloy",
    prerequisites:"advanced alloy value",
    highestPlanetRequired:"12-Relic"
}))

projectCells.push( new projectCell({
    label:"preferred vendor",
    component1:{label:"iron nail",baseCost:200,costWithMaxLab:100},
    component2:{label:"hammer",baseCost:75,costWithMaxLab:38},
    component3:{label:"circuit",baseCost:40,costWithMaxLab:20},
    description:"price for building new smelters & crafters reduced by 50%",
    prerequisites:"superior furnace",
    highestPlanetRequired:"9-Yangtze"
}))

projectCells.push( new projectCell({
    label:"furnace overdrive",
    component1:{label:"osmium bar",baseCost:20,costWithMaxLab:10},
    component2:{label:"plasma torch",baseCost:1,costWithMaxLab:1},
    description:"ability to put 1 furnace into overdrive",
    comment:"smelt speed x2 BUT ingredients costs +50%",
    prerequisites:"superior furnace",
    highestPlanetRequired:"31-Vular"
}))

projectCells.push( new projectCell({
    label:"furnace overdrive 2",
    component1:{label:"uru alloy",baseCost:200,costWithMaxLab:100},
    component2:{label:"plasma torch",baseCost:20,costWithMaxLab:10},
    component3:{label:"nuclear capsule",baseCost:2,costWithMaxLab:1},
    description:"ability to put a 2nd furnace into overdrive",
    prerequisites:"furnace overdrive",
    highestPlanetRequired:"46-Sotomi"
}))

projectCells.push( new projectCell({
    label:"furnace overdrive 3",
    component1:{label:"aether alloy",baseCost:300,costWithMaxLab:150},
    component2:{label:"plasma torch",baseCost:100,costWithMaxLab:50},
    component3:{label:"fusion capsule",baseCost:2,costWithMaxLab:1},
    description:"ability to put a 3rd furnace into overdrive",
    prerequisites:"furnace overdrive 2",
    highestPlanetRequired:"52-Vega"
}))

projectCells.push( new projectCell({
    label:"advanced furnace overdrive",
    component1:{label:"rhodium bar",baseCost:40,costWithMaxLab:20},
    component2:{label:"inerton alloy",baseCost:20,costWithMaxLab:10},
    component3:{label:"thermal scanner",baseCost:10,costWithMaxLab:5},
    description:"increases furnace overdrive smelt speed to x4",
    prerequisites:"furnace overdrive",
    highestPlanetRequired:"37-Utritis"
}))

projectCells.push( new projectCell({
    label:"furnace overdrive efficiency",
    component1:{label:"iridium bar",baseCost:200,costWithMaxLab:100},
    component2:{label:"motor",baseCost:1,costWithMaxLab:1},
    description:"decreases furnace overdrive extra ingredients cost to +20%",
    prerequisites:"furnace overdrive",
    highestPlanetRequired:"25-Osun"
}))

projectCells.push( new projectCell({
    label:"management",
    component1:{label:"copper ore",baseCost:400,costWithMaxLab:200},
    component2:{label:"iron ore",baseCost:50,costWithMaxLab:25},
    description:"hire and assign managers to planets",
    prerequisites:" - ",
    highestPlanetRequired:"2-Drasta"
}))

projectCells.push( new projectCell({
    label:"colonization",
    component1:{label:"copper bar",baseCost:20,costWithMaxLab:10},
    component2:{label:"iron bar",baseCost:10,costWithMaxLab:5},
    description:"complete planet requests to colonize them and earn bonuses",
    prerequisites:"management",
    highestPlanetRequired:"2-Drasta"
}))

projectCells.push( new projectCell({
    label:"colonization scouting",
    component1:{label:"iron nail",baseCost:15,costWithMaxLab:8},
    description:"increases max colonization tasks from 3 to 4",
    prerequisites:"colonization",
    highestPlanetRequired:"2-Drasta"
}))

projectCells.push( new projectCell({
    label:"colonization advanced scouting",
    component1:{label:"silver bar",baseCost:60,costWithMaxLab:30},
    description:"increases max colonization tasks from 4 to 5",
    prerequisites:"colonization scouting",
    highestPlanetRequired:"12-Relic"
}))

projectCells.push( new projectCell({
    label:"colonization superior scouting",
    component1:{label:"diamond",baseCost:"50k",costWithMaxLab:"25k"},
    description:"increases max colonization tasks from 5 to 6",
    prerequisites:"colonization advanced scouting",
    highestPlanetRequired:"17-Castellus"
}))

projectCells.push( new projectCell({
    label:"colony tax incentives",
    component1:{label:"aluminium bar",baseCost:60,costWithMaxLab:30},
    description:"planet upgrade prices reduced by 5% per colony level",
    comment:"(mine,speed,cargo)",
    prerequisites:"colonization scouting OR colonization efficiency",
    highestPlanetRequired:"9-Yangtze"
}))

projectCells.push( new projectCell({
    label:"colony advanced tax incentives",
    component1:{label:"bronze bar",baseCost:60,costWithMaxLab:30},
    description:"planet upgrade prices reduced by 5% per colony level",
    comment:"(mine,speed,cargo)",
    prerequisites:"colony tax incentives",
    highestPlanetRequired:"12-Relic"
}))

projectCells.push( new projectCell({
    label:"colony superior tax incentives",
    component1:{label:"palladium bar",baseCost:60,costWithMaxLab:30},
    description:"planet upgrade prices reduced by 5% per colony level",
    comment:"(mine,speed,cargo)",
    prerequisites:"colony advanced tax incentives",
    highestPlanetRequired:"28-Tikkun"
}))

projectCells.push( new projectCell({
    label:"colonization efficiency",
    component1:{label:"silver bar",baseCost:15,costWithMaxLab:8},
    component2:{label:"hammer",baseCost:10,costWithMaxLab:5},
    description:"colonization cost 20% less resources",
    prerequisites:"colonization",
    highestPlanetRequired:"12-Relic"
}))

projectCells.push( new projectCell({
    label:"colonization advanced efficiency",
    component1:{label:"steel bar",baseCost:40,costWithMaxLab:20},
    component2:{label:"laser",baseCost:10,costWithMaxLab:5},
    description:"colonization cost 20% less resources",
    prerequisites:"colonization efficiency",
    highestPlanetRequired:"14-Batalla"
}))

projectCells.push( new projectCell({
    label:"colonization superior efficiency",
    component1:{label:"palladium bar",baseCost:50,costWithMaxLab:25},
    component2:{label:"laser torch",baseCost:15,costWithMaxLab:8},
    description:"colonization cost 20% less resources",
    prerequisites:"colonization advanced efficiency",
    highestPlanetRequired:"28-Tikkun"
}))

projectCells.push( new projectCell({
    label:"colony renegotiation",
    component1:{label:"bronze bar",baseCost:100,costWithMaxLab:50},
    component2:{label:"hammer",baseCost:400,costWithMaxLab:200},
    description:"allows you to renegociate colony requests of planets",
    comment:"(24h cooldown)",
    prerequisites:"colonization efficiency",
    highestPlanetRequired:"12-Relic"
}))

projectCells.push( new projectCell({
    label:"terraforming",
    component1:{label:"diamond",baseCost:"20k",costWithMaxLab:"10k"},
    component2:{label:"thermal scanner",baseCost:10,costWithMaxLab:5},
    description:"pick any unlocked planet and increase its colonization",
    comment:"level by 2 instantly",
    prerequisites:"colonization advanced efficiency",
    highestPlanetRequired:"19-Parnitha"
}))

projectCells.push( new projectCell({
    label:"advanced terraforming",
    component1:{label:"satellite dish",baseCost:10,costWithMaxLab:5},
    description:"pick any unlocked planet and increase its colonization",
    comment:"level by 3 instantly",
    prerequisites:"terraforming",
    highestPlanetRequired:"28-Tikkun"
}))

projectCells.push( new projectCell({
    label:"asteroid refined drilling",
    component1:{label:"silicon bar",baseCost:40,costWithMaxLab:20},
    component2:{label:"lead bar",baseCost:80,costWithMaxLab:40},
    description:"10% of an asteroid containing 20x normal value worth of alloy",
    prerequisites:"telescope 3",
    highestPlanetRequired:"7-Widow"
}))

projectCells.push( new projectCell({
    label:"asteroid harvester",
    component1:{label:"iron bar",baseCost:400,costWithMaxLab:200},
    component2:{label:"circuit",baseCost:5,costWithMaxLab:2},
    description:"all asteroid value x1.3",
    prerequisites:"asteroid refined drilling",
    highestPlanetRequired:"9-Yangtze"
}))

projectCells.push( new projectCell({
    label:"advanced asteroid harvester",
    component1:{label:"space probe",baseCost:1,costWithMaxLab:1},
    component2:{label:"plasma torch",baseCost:50,costWithMaxLab:25},
    description:"all asteroid value x1.3",
    comment:"(multiplicative with asteroid harvester)",
    prerequisites:"asteroid harvester",
    highestPlanetRequired:"28-Tikkun"
}))

projectCells.push( new projectCell({
    label:"superior asteroid harvester",
    component1:{label:"nuclear reactor",baseCost:10,costWithMaxLab:5},
    component2:{label:"scrith alloy",baseCost:300,costWithMaxLab:150},
    component3:{label:"inerton alloy",baseCost:600,costWithMaxLab:300},
    description:"all asteroid value x1.3",
    comment:"(multiplicative with both other harvester upgrades)",
    prerequisites:"advanced asteroid harvester",
    highestPlanetRequired:"43-Daedalus"
}))

projectCells.push( new projectCell({
    label:"debris scanner",
    component1:{label:"collider",baseCost:1,costWithMaxLab:1},
    component2:{label:"gravity chamber",baseCost:8,costWithMaxLab:4},
    description:"allow discovery of debris fields providing valuable items",
    comment:"(frequency fixed, roughly 23mn)",
    prerequisites:"advanced asteroid harvester",
    highestPlanetRequired:"40-Unicae"
}))

projectCells.push( new projectCell({
    label:"debris harvester",
    component1:{label:"uru alloy",baseCost:250,costWithMaxLab:125},
    component2:{label:"quadium alloy",baseCost:"1.2k",costWithMaxLab:600},
    description:"all debris value x1.3",
    prerequisites:"debris scanner",
    highestPlanetRequired:"46-Sotomi"
}))

projectCells.push( new projectCell({
    label:"advanced debris harvester",
    component1:{label:"vibranium alloy",baseCost:250,costWithMaxLab:125},
    component2:{label:"scrith alloy",baseCost:"1.2k",costWithMaxLab:600},
    description:"all debris value x1.3",
    comment:"(multiplicative with previous upgrade)",
    prerequisites:"debris harvester",
    highestPlanetRequired:"49-Arabis"
}))

projectCells.push( new projectCell({
    label:"superior debris harvester",
    component1:{label:"viterium alloy",baseCost:300,costWithMaxLab:150},
    component2:{label:"aether alloy",baseCost:"1.4k",costWithMaxLab:700},
    description:"all debris value x1.3",
    comment:"(multiplicative with previous upgrade)",
    prerequisites:"advanced debris harvester",
    highestPlanetRequired:"55-Zumbia"
}))

projectCells.push( new projectCell({
    label:"asteroid auto miner",
    component1:{label:"advanced computer",baseCost:20,costWithMaxLab:10},
    component2:{label:"solar panel",baseCost:100,costWithMaxLab:50},
    description:"automatically mine asteroids even when idle",
    comment:"(if debris unlocked will also work)",
    prerequisites:"asteroid harvester",
    comment:"(asteroid base frequency 10mn)",
    highestPlanetRequired:"22-Zelene"
}))

projectCells.push( new projectCell({
    label:"asteroid scanner",
    component1:{label:"thermal scanner",baseCost:30,costWithMaxLab:15},
    component2:{label:"navigation module",baseCost:5,costWithMaxLab:2},
    description:"frequency of asteroids increased by 30%",
    comment:"(new asteroid frequency 7mn)",
    prerequisites:"asteroid harvester",
    highestPlanetRequired:"19-Parnitha"
}))

projectCells.push( new projectCell({
    label:"advanced asteroid scanner",
    component1:{label:"telescope",baseCost:150,costWithMaxLab:75},
    description:"frequency of asteroids increased by another 30%",
    comment:"(new asteroid frequency 5mn)",
    prerequisites:"asteroid scanner",
    highestPlanetRequired:"22-Zelene"
}))

projectCells.push( new projectCell({
    label:"market insight",
    component1:{label:"silver bar",baseCost:20,costWithMaxLab:10},
    component2:{label:"hammer",baseCost:10,costWithMaxLab:5},
    description:"ability to forecast upcoming market changes",
    prerequisites:"telescope 4",
    highestPlanetRequired:"12-Relic"
}))

projectCells.push( new projectCell({
    label:"inside trader",
    component1:{label:"steel bar",baseCost:25,costWithMaxLab:12},
    component2:{label:"lens",baseCost:10,costWithMaxLab:5},
    description:"a +15% chance of positive market fluctuations",
    comment:"(on all future changes)",
    prerequisites:"market insight",
    highestPlanetRequired:"12-Relic"
}))

projectCells.push( new projectCell({
    label:"market manipulation",
    component1:{label:"gold bar",baseCost:"15k",costWithMaxLab:"7.5k"},
    component2:{label:"diamond",baseCost:"30k",costWithMaxLab:"15k"},
    component3:{label:"basic computer",baseCost:10,costWithMaxLab:5},
    description:"chance of a 4x positive market",
    prerequisites:"inside trader",
    highestPlanetRequired:"17-Castellus"
}))

projectCells.push( new projectCell({
    label:"advanced market manipulation",
    component1:{label:"telescope",baseCost:5,costWithMaxLab:2},
    component2:{label:"advanced computer",baseCost:10,costWithMaxLab:5},
    component3:{label:"quadium alloy",baseCost:100,costWithMaxLab:50},
    description:"chance of a 5x positive market",
    prerequisites:"market manipulation",
    highestPlanetRequired:"40-Unicae"
}))

projectCells.push( new projectCell({
    label:"rover advanced logistics",
    component1:{label:"bronze bar",baseCost:20,costWithMaxLab:10},
    component2:{label:"battery",baseCost:20,costWithMaxLab:10},
    component3:{label:"lens",baseCost:10,costWithMaxLab:5},
    description:"unlocks an additional mission choice for new scans",
    prerequisites:"telescope 5",
    highestPlanetRequired:"12-Relic"
}))

projectCells.push( new projectCell({
    label:"rover resupply",
    component1:{label:"solar panel",baseCost:1,costWithMaxLab:1},
    component2:{label:"laser torch",baseCost:1,costWithMaxLab:1},
    component3:{label:"platinum bar",baseCost:6,costWithMaxLab:3},
    description:"planet being scanned by a rover receive a x2.5 bonus",
    comment:"(mine, speed and cargo)",
    prerequisites:"rover advanced logistics",
    highestPlanetRequired:"19-Parnitha"
}))

projectCells.push( new projectCell({
    label:"advanced rover resupply",
    component1:{label:"advanced battery",baseCost:10,costWithMaxLab:5},
    component2:{label:"plasma torch",baseCost:6,costWithMaxLab:3},
    component3:{label:"rhodium bar",baseCost:25,costWithMaxLab:12},
    description:"planet being scanned by a rover receive a x5 bonus",
    comment:"(instead of a x2.5)",
    prerequisites:"rover resupply",
    highestPlanetRequired:"34-Rupert"
}))

projectCells.push( new projectCell({
    label:"rover scanning module",
    component1:{label:"aluminium bar",baseCost:100,costWithMaxLab:50},
    component2:{label:"basic computer",baseCost:1,costWithMaxLab:1},
    description:"+5% chance of rovers finding all rewards",
    prerequisites:"rover advanced logistics",
    highestPlanetRequired:"12-Relic"
}))

projectCells.push( new projectCell({
    label:"market accelerator",
    component1:{label:"motor",baseCost:1,costWithMaxLab:1},
    component2:{label:"iridium bar",baseCost:400,costWithMaxLab:200},
    description:"ability to replace the current market with the following one",
    comment:"(cool down 8H)",
    prerequisites:"inside trader",
    highestPlanetRequired:"25-Osun"
}))

projectCells.push( new projectCell({
    label:"advanced market accelerator",
    component1:{label:"gravity chamber",baseCost:1,costWithMaxLab:1},
    component2:{label:"inerton alloy",baseCost:115,costWithMaxLab:58},
    description:"ability to replace the current market with the following one again",
    comment:"(cool down 8H)",
    prerequisites:"market accelerator",
    highestPlanetRequired:"37-Utritis"
}))


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