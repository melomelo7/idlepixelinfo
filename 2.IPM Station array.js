class stationCell {
    constructor({
        label="",
        rows=0,
        cell=0,
        maxLevel=0,
        bonusPerLevel=0,
        percentage=false,
        costs=[],
        totalBonus,
        totalCost,
    })
{
    this.label= label
    this.rows= stationArray[stationArray.findIndex(x=>x.label===this.label)].rows
    this.cell= stationArray[stationArray.findIndex(x=>x.label===this.label)].cell
    this.maxLevel= maxLevel
    this.bonusPerLevel= bonusPerLevel
    this.percentage = percentage
    this.costs= costs
    this.totalBonus = this.bonusPerLevel * this.maxLevel
    this.totalCost = this.costs.reduce(function(a,b){return a+b},0)
}

}

const stationArray = []

stationArray.push(

    {label:"production boost duration #2",rows:3,cell:1},
    {label:"production boost duration #1",rows:3,cell:3},
    {label:"production boost duration #3",rows:3,cell:5},
    {label:"production boost duration #4",rows:3,cell:7},
    
    {label:"production boost speed #5",rows:3,cell:9},
    {label:"production boost speed #3",rows:3,cell:11},
    {label:"production boost speed #4",rows:3,cell:13},
    {label:"production boost speed #2",rows:5,cell:7},
    {label:"production boost speed #1",rows:7,cell:7},
    
    {label:"colonizing #6",rows:5,cell:3},
    {label:"colonizing #5",rows:7,cell:5},
    {label:"colonizing #4",rows:7,cell:11},
    {label:"colonizing #2",rows:9,cell:3},
    {label:"colonizing #3",rows:9,cell:9},
    {label:"colonizing #1",rows:11,cell:5},
    
    {label:"asteroids & debris #6",rows:5,cell:11},
    {label:"asteroids & debris #4",rows:7,cell:3},
    {label:"asteroids & debris #5",rows:7,cell:9},
    {label:"asteroids & debris #3",rows:9,cell:5},
    {label:"asteroids & debris #2",rows:9,cell:11},
    {label:"asteroids & debris #1",rows:11,cell:9},
    
    {label:"managers #1",rows:16,cell:3},
    {label:"managers #2",rows:9,cell:17},
    {label:"managers #3",rows:9,cell:19},
    
    {label:"credits #1",rows:26,cell:3},
    {label:"credits #2",rows:9,cell:13},
    {label:"credits #3",rows:9,cell:15},
    
    {label:"crafting #1",rows:26,cell:9},
    {label:"crafting #2",rows:23,cell:5},
    {label:"crafting #3",rows:19,cell:9},
    {label:"crafting #4",rows:16,cell:5},
    {label:"crafting #5",rows:19,cell:17},
    
    {label:"smelting #1",rows:26,cell:5},
    {label:"smelting #2",rows:23,cell:9},
    {label:"smelting #3",rows:19,cell:5},
    {label:"smelting #4",rows:16,cell:9},
    {label:"smelting #5",rows:19,cell:13},
    
    {label:"ship speed #1",rows:26,cell:7},
    {label:"ship speed #2",rows:19,cell:7},
    {label:"ship speed #3",rows:26,cell:13},
    {label:"ship speed #4",rows:23,cell:13},
    
    {label:"cargo #1",rows:23,cell:7},
    {label:"cargo #2",rows:16,cell:7},
    {label:"cargo #3",rows:26,cell:17},
    {label:"cargo #4",rows:23,cell:17},
    
    {label:"alloy & item #1",rows:23,cell:3},
    {label:"alloy & item #2",rows:16,cell:13},
    {label:"alloy & item #3",rows:16,cell:15},
    {label:"alloy & item #4",rows:13,cell:13},
    {label:"alloy & item #5",rows:13,cell:17},
    {label:"alloy & item #6",rows:11,cell:13},
    {label:"alloy & item #7",rows:11,cell:15},
    
    {label:"market #1",rows:19,cell:3},
    {label:"market #2",rows:16,cell:17},
    {label:"market #3",rows:16,cell:19},
    {label:"market #4",rows:13,cell:15},
    {label:"market #5",rows:13,cell:19},
    {label:"market #6",rows:11,cell:17},
    {label:"market #7",rows:11,cell:19},
    
    {label:"mining #1",rows:28,cell:11},
    {label:"mining #2",rows:26,cell:15},



    {label:"planet upgrades price #1",rows:34,cell:5},
    {label:"planet upgrades price #2",rows:34,cell:7},
    {label:"colonization cost #2",rows:34,cell:15},
    {label:"colonization cost #1",rows:34,cell:17},

    {label:"credits #4",rows:37,cell:3},
    {label:"planet upgrades price #3",rows:37,cell:7},
    {label:"rovers scan time #1",rows:37,cell:11},
    {label:"colonization cost #3",rows:37,cell:15},
    {label:"managers #4",rows:37,cell:19},

    {label:"managers #5",rows:40,cell:5},
    {label:"planet upgrades price #4",rows:40,cell:7},
    {label:"planet upgrades price #5",rows:40,cell:9},
    {label:"rovers scan time #2",rows:40,cell:11},
    {label:"colonization cost #5",rows:40,cell:13},
    {label:"colonization cost #4",rows:40,cell:15},
    {label:"credits #5",rows:40,cell:17},

    {label:"credits #6",rows:43,cell:7},
    {label:"managers #7",rows:43,cell:9},
    {label:"rovers scan time #3",rows:43,cell:11},
    {label:"credits #7",rows:43,cell:13},
    {label:"managers #6",rows:43,cell:15},

    {label:"managers #8",rows:46,cell:9},
    {label:"credits #8",rows:46,cell:13},

    {label:"cash windfall #1",rows:49,cell:11},
)


const stationCells = []
stationCells.push(

new stationCell({
    label:"production boost duration #2",
    maxLevel:3,
    bonusPerLevel:0.01,
    costs:[200,201,204]}),

new stationCell({
    label:"production boost duration #1",
    maxLevel:4,
    bonusPerLevel:0.01,
    costs:[200,201,204,206]}),

new stationCell({
    label:"production boost duration #3",
    maxLevel:2,
    bonusPerLevel:0.025,
    costs:[240,470]}),

new stationCell({
    label:"production boost duration #4",
    maxLevel:10,
    bonusPerLevel:0.013,
    costs:[50,62,79,100,126,158,200,252,317,400]}),

new stationCell({
    label:"production boost speed #5",
    maxLevel:2,
    bonusPerLevel:0.025,
    costs:[240,671]}),

new stationCell({
    label:"production boost speed #3",
    maxLevel:4,
    bonusPerLevel:0.01,
    costs:[200,209,220,231]}),

new stationCell({
    label:"production boost speed #4",
    maxLevel:3,
    bonusPerLevel:0.01,
    costs:[240,300,375]}),

new stationCell({
    label:"production boost speed #2",
    maxLevel:4,
    bonusPerLevel:0.01,
    costs:[150,154,159,163]}),

new stationCell({
    label:"production boost speed #1",
    maxLevel:4,
    bonusPerLevel:0.01,
    costs:[80,80,81,82]}),

new stationCell({
    label:"colonizing #6",
    maxLevel:5,
    bonusPerLevel:0.08,
    costs:[200,240,288,345,414]}),

new stationCell({
    label:"colonizing #5",
    maxLevel:5,
    bonusPerLevel:0.06,
    costs:[150,180,216,259,311]}),

new stationCell({
    label:"colonizing #4",
    maxLevel:5,
    bonusPerLevel:0.04,
    costs:[80,88,96,106,117]}),        

new stationCell({
    label:"colonizing #2",
    maxLevel:6,
    bonusPerLevel:0.025,
    costs:[20,20,20,20,20,20]}),

new stationCell({
    label:"colonizing #3",
    maxLevel:5,
    bonusPerLevel:0.02,
    costs:[50,54,58,62,68]}),

new stationCell({
    label:"colonizing #1",
    maxLevel:5,
    bonusPerLevel:0.01,
    costs:[15,18,23,28,35]}),

new stationCell({
    label:"asteroids & debris #6",
    maxLevel:5,
    bonusPerLevel:0.08,
    costs:[200,240,288,345,414]}),

new stationCell({
    label:"asteroids & debris #4",
    maxLevel:5,
    bonusPerLevel:0.04,
    costs:[80,88,96,106,117]}),

new stationCell({
    label:"asteroids & debris #5",
    maxLevel:5,
    bonusPerLevel:0.06,
    costs:[150,180,216,259,311]}),        

new stationCell({
    label:"asteroids & debris #3",
    maxLevel:5,
    bonusPerLevel:0.02,
    costs:[50,54,58,62,68]}),

new stationCell({
    label:"asteroids & debris #2",
    maxLevel:6,
    bonusPerLevel:0.025,
    costs:[20,20,20,20,20,20]}),

new stationCell({
    label:"asteroids & debris #1",
    maxLevel:5,
    bonusPerLevel:0.01,
    costs:[15,18,23,28,35]}),

new stationCell({
    label:"managers #1",
    maxLevel:5,
    bonusPerLevel:0.012,
    costs:[15,15,15,16,16]}),

new stationCell({
    label:"managers #2",
    maxLevel:4,
    bonusPerLevel:0.055,
    costs:[250,275,302,332]}),

new stationCell({
    label:"managers #3",
    maxLevel:4,
    bonusPerLevel:0.055,
    costs:[250,275,302,332]}),

new stationCell({
    label:"credits #1",
    maxLevel:5,
    bonusPerLevel:0.036,
    costs:[15,15,15,16,16]}),

new stationCell({
    label:"credits #2",
    maxLevel:4,
    bonusPerLevel:0.04,
    costs:[250,275,302,332]}),

new stationCell({
    label:"credits #3",
    maxLevel:4,
    bonusPerLevel:0.04,
    costs:[250,275,302,332]}),
    
new stationCell({
    label:"crafting #1",
    maxLevel:5,
    bonusPerLevel:0.01,
    costs:[5,8,12,20,32]}),

new stationCell({
    label:"crafting #2",
    maxLevel:10,
    bonusPerLevel:0.01,
    costs:[6,8,11,16,23,32,45,63,88,123]}),

new stationCell({
    label:"crafting #3",
    maxLevel:15,
    bonusPerLevel:0.01,
    costs:[10,11,13,15,17,20,23,26,30,35,40,46,53,61,70]}),

new stationCell({
    label:"crafting #4",
    maxLevel:20,
    bonusPerLevel:0.02,
    costs:[15,16,17,18,20,22,23,25,27,29,32,34,37,40,44,47,51,55,59,64]}),

new stationCell({
    label:"crafting #5",
    maxLevel:20,
    bonusPerLevel:0.04,
    costs:[30,30,31,32,33,34,35,36,38,39,40,41,42,44,45,46,48,49,51,52]}),

new stationCell({
    label:"smelting #1",
    maxLevel:5,
    bonusPerLevel:0.01,
    costs:[5,8,12,20,32]}),

new stationCell({
    label:"smelting #2",
    maxLevel:10,
    bonusPerLevel:0.01,
    costs:[6,8,11,16,23,32,45,63,88,123]}),

new stationCell({
    label:"smelting #3",
    maxLevel:15,
    bonusPerLevel:0.01,
    costs:[10,11,13,15,17,20,23,26,30,35,40,46,53,61,70]}),

new stationCell({
    label:"smelting #4",
    maxLevel:20,
    bonusPerLevel:0.02,
    costs:[15,16,17,18,20,22,23,25,27,29,32,34,37,40,44,47,51,55,59,64]}),

new stationCell({
    label:"smelting #5",
    maxLevel:20,
    bonusPerLevel:0.04,
    costs:[30,30,31,32,33,34,35,36,38,39,40,41,42,44,45,46,48,49,51,52]}),

new stationCell({
    label:"ship speed #1",
    maxLevel:9,
    bonusPerLevel:0.1,
    costs:[2,2,3,4,6,8,12,16,22]}),

new stationCell({
    label:"ship speed #2",
    maxLevel:16,
    bonusPerLevel:0.06,
    costs:[5,5,6,6,7,8,8,9,10,11,12,14,15,17,18,20]}),

new stationCell({
    label:"ship speed #3",
    maxLevel:30,
    bonusPerLevel:0.03,
    costs:[15,15,15,15,15,15,15,16,16,16,16,16,16,
    17,17,17,17,17,17,18,18,18,18,18,19,19,19,19,19,20]}),

new stationCell({
    label:"ship speed #4",
    maxLevel:50,
    bonusPerLevel:0.04,
    costs:[20,20,20,21,21,22,22,22,23,23,24,24,25,25,26,26,27,28,28,
    29,29,30,30,31,32,32,33,34,34,35,36,36,37,38,39,39,40,41,42,43,
    44,45,45,46,47,48,49,50,51,52]}),

new stationCell({
    label:"cargo #1",
    maxLevel:9,
    bonusPerLevel:0.1,
    costs:[2,2,3,4,6,8,12,16,22]}),

new stationCell({
    label:"cargo #2",
    maxLevel:16,
    bonusPerLevel:0.06,
    costs:[5,5,6,6,7,8,8,9,10,11,12,14,15,17,18,20]}),

new stationCell({
    label:"cargo #3",
    maxLevel:30,
    bonusPerLevel:0.03,
    costs:[15,15,15,15,15,15,15,16,16,16,16,16,16,
    17,17,17,17,17,17,18,18,18,18,18,19,19,19,19,19,20]}),

new stationCell({
    label:"cargo #4",
    maxLevel:50,
    bonusPerLevel:0.04,
    costs:[20,20,20,21,21,22,22,22,23,23,24,24,25,25,26,26,27,28,28,
    29,29,30,30,31,32,32,33,34,34,35,36,36,37,38,39,39,40,41,42,43,
    44,45,45,46,47,48,49,50,51,52]}),

new stationCell({
    label:"alloy & item #1",
    maxLevel:5,
    bonusPerLevel:0.036,
    costs:[10,12,15,19,23]}),

new stationCell({
    label:"alloy & item #2",
    maxLevel:5,
    bonusPerLevel:0.08,
    costs:[50,54,58,62,68]}),

new stationCell({
    label:"alloy & item #3",
    maxLevel:5,
    bonusPerLevel:0.08,
    costs:[50,54,58,62,68]}),

new stationCell({
    label:"alloy & item #4",
    maxLevel:4,
    bonusPerLevel:0.02,
    costs:[100,110,121,133]}),

new stationCell({
    label:"alloy & item #5",
    maxLevel:4,
    bonusPerLevel:0.02,
    costs:[100,110,121,133]}),

new stationCell({
    label:"alloy & item #6",
    maxLevel:2,
    bonusPerLevel:0.075,
    costs:[200,205]}),

new stationCell({
    label:"alloy & item #7",
    maxLevel:2,
    bonusPerLevel:0.075,
    costs:[200,205]}),

new stationCell({
    label:"market #1",
    maxLevel:5,
    bonusPerLevel:0.04,
    costs:[10,12,15,19,23]}),

new stationCell({
    label:"market #2",
    maxLevel:5,
    bonusPerLevel:0.05,
    costs:[50,54,58,62,68]}),

new stationCell({
    label:"market #3",
    maxLevel:5,
    bonusPerLevel:0.05,
    costs:[50,54,58,62,68]}),

new stationCell({
    label:"market #4",
    maxLevel:4,
    bonusPerLevel:0.05,
    costs:[100,110,121,133]}),

new stationCell({
    label:"market #5",
    maxLevel:4,
    bonusPerLevel:0.05,
    costs:[100,110,121,133]}),

new stationCell({
    label:"market #6",
    maxLevel:2,
    bonusPerLevel:0.175,
    costs:[200,205]}),

new stationCell({
    label:"market #7",
    maxLevel:2,
    bonusPerLevel:0.175,
    costs:[200,205]}),

new stationCell({
    label:"mining #1",
    maxLevel:4,
    bonusPerLevel:0.02,
    costs:[5,10,21,43]}),

new stationCell({
    label:"mining #2",
    maxLevel:25,
    bonusPerLevel:0.1,
    costs:[26,28,31,34,37,40,44,48,53,58,63,69,76,83,
    91,100,109,119,131,143,156,171,187,205,224]}),


// before 120420 [+10]
// after 

new stationCell({
    label:"planet upgrades price #1",
    maxLevel:1,
    bonusPerLevel:-0.5,
    percentage:true,
    costs:[150]}),
    
new stationCell({
    label:"planet upgrades price #2",
    maxLevel:2,
    bonusPerLevel:-0.25,
    percentage:true,
    costs:[75,75]}),

new stationCell({
    label:"colonization cost #2",
    maxLevel:2,
    bonusPerLevel:-0.25,
    percentage:true,
    costs:[75,75]}),

new stationCell({
    label:"colonization cost #1",
    maxLevel:1,
    bonusPerLevel:-0.5,
    percentage:true,
    costs:[150]}),

new stationCell({
    label:"credits #4",
    maxLevel:4,
    bonusPerLevel:0.005,
    costs:[30,39,53,70]}),
    
new stationCell({
    label:"planet upgrades price #3",
    maxLevel:3,
    bonusPerLevel:-0.5,
    percentage:true,
    costs:[100,160,256]}),

new stationCell({
    label:"rovers scan time #1",
    maxLevel:4,
    bonusPerLevel:-0.25,
    percentage:true,
    costs:[40,55,78,109]}),
    
new stationCell({
    label:"colonization cost #3",
    maxLevel:3,
    bonusPerLevel:-0.5,
    percentage:true,
    costs:[100,160,256]}),

new stationCell({
    label:"managers #4",
    maxLevel:4,
    bonusPerLevel:0.005,
    costs:[30,39,53,70]}),

new stationCell({
    label:"managers #5",
    maxLevel:6,
    bonusPerLevel:0.005,
    costs:[25,33,44,58,78,104]}),
            
new stationCell({
    label:"planet upgrades price #4",
    maxLevel:4,
    bonusPerLevel:-0.5,
    percentage:true,
    costs:[150,157,165,173]}),

new stationCell({
    label:"planet upgrades price #5",
    maxLevel:4,
    bonusPerLevel:-0.75,
    percentage:true,
    costs:[230,241,253,266]}),

new stationCell({
    label:"rovers scan time #2",
    maxLevel:8,
    bonusPerLevel:-0.25,
    percentage:true,
    costs:[60,66,72,79,87,96,106,116]}),
            
new stationCell({
    label:"colonization cost #5",
    maxLevel:4,
    bonusPerLevel:-0.75,
    percentage:true,
    costs:[230,241,253,266]}),
    
new stationCell({
    label:"colonization cost #4",
    maxLevel:4,
    bonusPerLevel:-0.50,
    percentage:true,
    costs:[150,157,165,173]}),

new stationCell({
    label:"credits #5",
    maxLevel:6,
    bonusPerLevel:0.005,
    costs:[25,33,44,58,78,104]}),
            
new stationCell({
    label:"credits #6",
    maxLevel:8,
    bonusPerLevel:0.005,
    costs:[20,26,35,47,62,83,110,147]}),

new stationCell({
    label:"managers #7",
    maxLevel:1,
    bonusPerLevel:0.06,
    costs:[600]}),

new stationCell({
    label:"rovers scan time #3",
    maxLevel:6,
    bonusPerLevel:-0.75,
    percentage:true,
    costs:[250,250,250,250,250,250]}),
        
new stationCell({
    label:"credits #7",
    maxLevel:1,
    bonusPerLevel:0.06,
    costs:[600]}),
    
new stationCell({
    label:"managers #6",
    maxLevel:8,
    bonusPerLevel:0.005,
    costs:[20,26,35,47,62,83,110,147]}),

new stationCell({
    label:"managers #8",
    maxLevel:10,
    bonusPerLevel:0.005,
    costs:[15,19,26,35,46,62,83,110,146,195]}),    

new stationCell({
    label:"credits #8",
    maxLevel:10,
    bonusPerLevel:0.005,
    costs:[15,19,26,35,46,62,83,110,146,195]}),
    
new stationCell({
    label:"cash windfall #1",
    maxLevel:10,
    bonusPerLevel:0.05,
    costs:[25,36,53,78,115,168,247,362,531,779,]}),

)


const stationConnections = []

stationConnections.push(

    {rows:1,cell:1,dir:"sta"},
    {rows:1,cell:2,dir:"sta"},
    {rows:1,cell:3,dir:"sta"},
    {rows:1,cell:4,dir:"sta"},
    {rows:1,cell:5,dir:"sta"},

    {rows:1,cell:9,dir:"sta"},
    {rows:1,cell:10,dir:"sta"},
    {rows:1,cell:11,dir:"sta"},
    {rows:1,cell:12,dir:"sta"},
    {rows:1,cell:13,dir:"sta"},

    {rows:2,cell:1,dir:"sta"},
    {rows:2,cell:5,dir:"sta"},
    {rows:2,cell:9,dir:"sta"},
    {rows:2,cell:13,dir:"sta"},

    {rows:3,cell:6,dir:"sta"},
    {rows:3,cell:8,dir:"sta"},

    {rows:4,cell:1,dir:"sta"},
    {rows:4,cell:3,dir:"sta"},
    {rows:4,cell:11,dir:"sta"},
    {rows:4,cell:13,dir:"sta"},

    {rows:5,cell:1,dir:"sta"},
    {rows:5,cell:2,dir:"sta"},
    {rows:5,cell:4,dir:"sta"},
    {rows:5,cell:5,dir:"sta"},

    {rows:5,cell:9,dir:"sta"},
    {rows:5,cell:10,dir:"sta"},
    {rows:5,cell:12,dir:"sta"},
    {rows:5,cell:13,dir:"sta"},

    {rows:6,cell:5,dir:"sta"},
    {rows:6,cell:7,dir:"sta"},
    {rows:6,cell:9,dir:"sta"},

    {rows:7,cell:6,dir:"sta"},
    {rows:7,cell:8,dir:"sta"},

    {rows:8,cell:3,dir:"sta"},
    {rows:8,cell:5,dir:"sta"},
    {rows:8,cell:9,dir:"sta"},
    {rows:8,cell:11,dir:"sta"},

    {rows:9,cell:4,dir:"sta"},
    {rows:9,cell:10,dir:"sta"},

    {rows:10,cell:3,dir:"sta"},
    {rows:10,cell:11,dir:"sta"},

    {rows:10,cell:13,dir:"sta"},
    {rows:10,cell:15,dir:"sta"},
    {rows:10,cell:17,dir:"sta"},
    {rows:10,cell:19,dir:"sta"},

    {rows:11,cell:3,dir:"sta"},
    {rows:11,cell:4,dir:"sta"},
    {rows:11,cell:6,dir:"sta"},

    {rows:11,cell:8,dir:"sta"},
    {rows:11,cell:10,dir:"sta"},
    {rows:11,cell:11,dir:"sta"},

    {rows:12,cell:6,dir:"sta"},
    {rows:12,cell:8,dir:"sta"},
    {rows:12,cell:13,dir:"sta"},
    {rows:12,cell:15,dir:"sta"},
    {rows:12,cell:17,dir:"sta"},
    {rows:12,cell:19,dir:"sta"},

    {rows:13,cell:6,dir:"sta"},
    {rows:13,cell:8,dir:"sta"},

    {rows:14,cell:5,dir:"sta"},
    {rows:14,cell:6,dir:"sta"},
    {rows:14,cell:8,dir:"sta"},
    {rows:14,cell:9,dir:"sta"},

    {rows:14,cell:13,dir:"sta"},
    {rows:14,cell:15,dir:"sta"},
    {rows:14,cell:17,dir:"sta"},
    {rows:14,cell:19,dir:"sta"},

    {rows:15,cell:5,dir:"sta"},
    {rows:15,cell:9,dir:"sta"},

    {rows:15,cell:13,dir:"sta"},
    {rows:15,cell:15,dir:"sta"},
    {rows:15,cell:17,dir:"sta"},
    {rows:15,cell:19,dir:"sta"},

    {rows:16,cell:6,dir:"sta"},
    {rows:16,cell:8,dir:"sta"},

    {rows:17,cell:3,dir:"sta"},
    {rows:17,cell:7,dir:"sta"},

    {rows:17,cell:13,dir:"sta"},
    {rows:17,cell:15,dir:"sta"},
    {rows:17,cell:17,dir:"sta"},
    {rows:17,cell:19,dir:"sta"},

    {rows:18,cell:3,dir:"sta"},
    {rows:18,cell:7,dir:"sta"},

    {rows:18,cell:13,dir:"sta"},
    {rows:18,cell:15,dir:"sta"},
    {rows:18,cell:17,dir:"sta"},
    {rows:18,cell:19,dir:"sta"},

    {rows:18,cell:14,dir:"sta"},
    {rows:18,cell:18,dir:"sta"},

    {rows:19,cell:6,dir:"sta"},
    {rows:19,cell:8,dir:"sta"},

    {rows:20,cell:3,dir:"sta"},
    {rows:20,cell:7,dir:"sta"},

    {rows:20,cell:13,dir:"sta"},
    {rows:20,cell:17,dir:"sta"},

    {rows:21,cell:3,dir:"sta"},
    {rows:21,cell:7,dir:"sta"},

    {rows:21,cell:13,dir:"sta"},
    {rows:21,cell:17,dir:"sta"},

    {rows:21,cell:4,dir:"sta"},
    {rows:21,cell:5,dir:"sta"},
    {rows:21,cell:6,dir:"sta"},

    {rows:22,cell:3,dir:"sta"},
    {rows:22,cell:7,dir:"sta"},

    {rows:22,cell:13,dir:"sta"},
    {rows:22,cell:17,dir:"sta"},

    {rows:23,cell:6,dir:"sta"},
    {rows:23,cell:8,dir:"sta"},

    {rows:24,cell:3,dir:"sta"},
    {rows:24,cell:7,dir:"sta"},

    {rows:24,cell:13,dir:"sta"},
    {rows:24,cell:17,dir:"sta"},

    {rows:25,cell:3,dir:"sta"},
    {rows:25,cell:7,dir:"sta"},

    {rows:25,cell:13,dir:"sta"},
    {rows:25,cell:17,dir:"sta"},

    {rows:26,cell:6,dir:"sta"},
    {rows:26,cell:8,dir:"sta"},

    {rows:26,cell:14,dir:"sta"},
    {rows:26,cell:16,dir:"sta"},

    {rows:27,cell:7,dir:"sta"},
    {rows:27,cell:15,dir:"sta"},

    {rows:28,cell:7,dir:"sta"},
    {rows:28,cell:8,dir:"sta"},
    {rows:28,cell:9,dir:"sta"},
    {rows:28,cell:10,dir:"sta"},
    {rows:28,cell:12,dir:"sta"},
    {rows:28,cell:13,dir:"sta"},
    {rows:28,cell:14,dir:"sta"},
    {rows:28,cell:15,dir:"sta"},

    {rows:29,cell:11,dir:"sta"},
    {rows:30,cell:11,dir:"sta"},


    {rows:31,cell:5,dir:"sta"},
    {rows:31,cell:6,dir:"sta"},
    {rows:31,cell:7,dir:"sta"},
    {rows:31,cell:8,dir:"sta"},
    {rows:31,cell:9,dir:"sta"},
    {rows:31,cell:10,dir:"sta"},
    {rows:31,cell:11,dir:"sta"},
    {rows:31,cell:12,dir:"sta"},
    {rows:31,cell:13,dir:"sta"},
    {rows:31,cell:14,dir:"sta"},
    {rows:31,cell:15,dir:"sta"},
    {rows:31,cell:16,dir:"sta"},
    {rows:31,cell:17,dir:"sta"},
    
    {rows:32,cell:5,dir:"sta"},
    {rows:33,cell:5,dir:"sta"},
    {rows:32,cell:17,dir:"sta"},
    {rows:33,cell:17,dir:"sta"},

    {rows:32,cell:11,dir:"sta"},
    {rows:33,cell:11,dir:"sta"},

    {rows:35,cell:5,dir:"sta"},
    {rows:36,cell:5,dir:"sta"},
    {rows:35,cell:17,dir:"sta"},
    {rows:36,cell:17,dir:"sta"},

    {rows:35,cell:7,dir:"sta"},
    {rows:36,cell:7,dir:"sta"},
    {rows:35,cell:15,dir:"sta"},
    {rows:36,cell:15,dir:"sta"},

    {rows:34,cell:8,dir:"sta"},
    {rows:34,cell:9,dir:"sta"},
    {rows:34,cell:10,dir:"sta"},
    {rows:34,cell:11,dir:"sta"},
    {rows:34,cell:12,dir:"sta"},
    {rows:34,cell:13,dir:"sta"},
    {rows:34,cell:14,dir:"sta"},

    {rows:37,cell:4,dir:"sta"},
    {rows:37,cell:5,dir:"sta"},
    {rows:37,cell:6,dir:"sta"},

    {rows:37,cell:16,dir:"sta"},
    {rows:37,cell:17,dir:"sta"},
    {rows:37,cell:18,dir:"sta"},

    {rows:37,cell:8,dir:"sta"},
    {rows:37,cell:9,dir:"sta"},
    {rows:37,cell:10,dir:"sta"},

    {rows:37,cell:12,dir:"sta"},
    {rows:37,cell:13,dir:"sta"},
    {rows:37,cell:14,dir:"sta"},

    {rows:38,cell:5,dir:"sta"},
    {rows:39,cell:5,dir:"sta"},

    {rows:38,cell:7,dir:"sta"},
    {rows:39,cell:7,dir:"sta"},

    {rows:38,cell:15,dir:"sta"},
    {rows:39,cell:15,dir:"sta"},

    {rows:38,cell:17,dir:"sta"},
    {rows:39,cell:17,dir:"sta"},

    {rows:41,cell:7,dir:"sta"},
    {rows:42,cell:7,dir:"sta"},

    {rows:41,cell:9,dir:"sta"},
    {rows:42,cell:9,dir:"sta"},

    {rows:41,cell:13,dir:"sta"},
    {rows:42,cell:13,dir:"sta"},

    {rows:41,cell:15,dir:"sta"},
    {rows:42,cell:15,dir:"sta"},

    {rows:40,cell:8,dir:"sta"},
    {rows:40,cell:10,dir:"sta"},
    {rows:40,cell:12,dir:"sta"},
    {rows:40,cell:14,dir:"sta"},

    {rows:43,cell:10,dir:"sta"},
    {rows:43,cell:12,dir:"sta"},

    {rows:44,cell:9,dir:"sta"},
    {rows:45,cell:9,dir:"sta"},
    {rows:44,cell:13,dir:"sta"},
    {rows:45,cell:13,dir:"sta"},

    {rows:44,cell:11,dir:"sta"},
    {rows:45,cell:11,dir:"sta"},
    {rows:46,cell:11,dir:"sta"},
    {rows:47,cell:11,dir:"sta"},
    {rows:48,cell:11,dir:"sta"},
)

