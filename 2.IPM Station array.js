class stationCell {
    constructor({
        label="",
        rows=0,
        cell=0,
        maxLevel=0,
        bonusPerLevel=0,
        costs=[],
        totalCost,
    })
{
    this.label= label
    this.rows= stationArray[stationArray.findIndex(x=>x.label===this.label)].rows
    this.cell= stationArray[stationArray.findIndex(x=>x.label===this.label)].cell
    this.maxLevel= maxLevel
    this.bonusPerLevel= bonusPerLevel
    this.costs= costs
    this.totalCost = this.costs.reduce(function(a,b){return a+b},0)
}



}

const stationArray = []

stationArray.push(
{label:"production boost duration #2",rows:4,cell:2},
{label:"production boost duration #1",rows:4,cell:4},
{label:"production boost duration #3",rows:4,cell:6},
{label:"production boost duration #4",rows:4,cell:8},

{label:"production boost speed #5",rows:4,cell:10},
{label:"production boost speed #3",rows:4,cell:12},
{label:"production boost speed #4",rows:4,cell:14},
{label:"production boost speed #2",rows:6,cell:8},
{label:"production boost speed #1",rows:8,cell:8},

{label:"colonizing #6",rows:6,cell:4},
{label:"colonizing #5",rows:8,cell:6},
{label:"colonizing #4",rows:8,cell:12},
{label:"colonizing #2",rows:10,cell:4},
{label:"colonizing #3",rows:10,cell:10},
{label:"colonizing #1",rows:12,cell:6},


{label:"asteroids & debris #6",rows:6,cell:12},
{label:"asteroids & debris #4",rows:8,cell:4},
{label:"asteroids & debris #5",rows:8,cell:10},
{label:"asteroids & debris #3",rows:10,cell:6},
{label:"asteroids & debris #2",rows:10,cell:12},
{label:"asteroids & debris #1",rows:12,cell:10},

{label:"managers #1",rows:17,cell:4},
{label:"managers #2",rows:10,cell:18},
{label:"managers #3",rows:10,cell:20},

{label:"credits #1",rows:27,cell:4},
{label:"credits #2",rows:10,cell:14},
{label:"credits #3",rows:10,cell:16},

{label:"crafting #1",rows:27,cell:10},
{label:"crafting #2",rows:24,cell:6},
{label:"crafting #3",rows:20,cell:10},
{label:"crafting #4",rows:17,cell:6},
{label:"crafting #5",rows:20,cell:18},

{label:"smelting #1",rows:27,cell:6},
{label:"smelting #2",rows:24,cell:10},
{label:"smelting #3",rows:20,cell:6},
{label:"smelting #4",rows:17,cell:10},
{label:"smelting #5",rows:20,cell:14},

{label:"ship speed #1",rows:27,cell:8},
{label:"ship speed #2",rows:20,cell:8},
{label:"ship speed #3",rows:27,cell:14},
{label:"ship speed #4",rows:24,cell:14},

{label:"cargo #1",rows:24,cell:8},
{label:"cargo #2",rows:17,cell:8},
{label:"cargo #3",rows:27,cell:18},
{label:"cargo #4",rows:24,cell:18},

{label:"alloy & item #1",rows:24,cell:4},
{label:"alloy & item #2",rows:17,cell:14},
{label:"alloy & item #3",rows:17,cell:16},
{label:"alloy & item #4",rows:14,cell:14},
{label:"alloy & item #5",rows:14,cell:18},
{label:"alloy & item #6",rows:12,cell:14},
{label:"alloy & item #7",rows:12,cell:16},

{label:"market #1",rows:20,cell:4},
{label:"market #2",rows:17,cell:18},
{label:"market #3",rows:17,cell:20},
{label:"market #4",rows:14,cell:16},
{label:"market #5",rows:14,cell:20},
{label:"market #6",rows:12,cell:18},
{label:"market #7",rows:12,cell:20},

{label:"mining #1",rows:29,cell:12},
{label:"mining #2",rows:27,cell:16},

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
    costs:[200,470]}),

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
    bonusPerLevel:0.3,
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
    bonusPerLevel:0.3,
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
    bonusPerLevel:0.2,
    costs:[5,10,21,43]}),

new stationCell({
    label:"mining #2",
    maxLevel:25,
    bonusPerLevel:0.1,
    costs:[26,28,31,34,37,40,44,48,53,58,63,69,76,83,
    91,100,109,119,131,143,156,171,187,205,224]}),
)


const stationConnections = []

stationConnections.push(
    {rows:2,cell:2,dir:"sta"},
    {rows:2,cell:3,dir:"sta"},
    {rows:2,cell:4,dir:"sta"},
    {rows:2,cell:5,dir:"sta"},
    {rows:2,cell:6,dir:"sta"},

    {rows:2,cell:10,dir:"sta"},
    {rows:2,cell:11,dir:"sta"},
    {rows:2,cell:12,dir:"sta"},
    {rows:2,cell:13,dir:"sta"},
    {rows:2,cell:14,dir:"sta"},

    {rows:3,cell:2,dir:"sta"},
    {rows:3,cell:6,dir:"sta"},
    {rows:3,cell:10,dir:"sta"},
    {rows:3,cell:14,dir:"sta"},

    {rows:4,cell:7,dir:"sta"},
    {rows:4,cell:9,dir:"sta"},

    {rows:5,cell:2,dir:"sta"},
    {rows:5,cell:4,dir:"sta"},
    {rows:5,cell:12,dir:"sta"},
    {rows:5,cell:14,dir:"sta"},

    {rows:6,cell:2,dir:"sta"},
    {rows:6,cell:3,dir:"sta"},
    {rows:6,cell:5,dir:"sta"},
    {rows:6,cell:6,dir:"sta"},

    {rows:6,cell:10,dir:"sta"},
    {rows:6,cell:11,dir:"sta"},
    {rows:6,cell:13,dir:"sta"},
    {rows:6,cell:14,dir:"sta"},

    {rows:7,cell:6,dir:"sta"},
    {rows:7,cell:8,dir:"sta"},
    {rows:7,cell:10,dir:"sta"},

    {rows:8,cell:7,dir:"sta"},
    {rows:8,cell:9,dir:"sta"},

    {rows:9,cell:4,dir:"sta"},
    {rows:9,cell:6,dir:"sta"},
    {rows:9,cell:10,dir:"sta"},
    {rows:9,cell:12,dir:"sta"},

    {rows:10,cell:5,dir:"sta"},
    {rows:10,cell:11,dir:"sta"},

    {rows:11,cell:4,dir:"sta"},
    {rows:11,cell:12,dir:"sta"},

    {rows:11,cell:14,dir:"sta"},
    {rows:11,cell:16,dir:"sta"},
    {rows:11,cell:18,dir:"sta"},
    {rows:11,cell:20,dir:"sta"},

    {rows:12,cell:4,dir:"sta"},
    {rows:12,cell:5,dir:"sta"},
    {rows:12,cell:7,dir:"sta"},

    {rows:12,cell:9,dir:"sta"},
    {rows:12,cell:11,dir:"sta"},
    {rows:12,cell:12,dir:"sta"},

    {rows:13,cell:7,dir:"sta"},
    {rows:13,cell:9,dir:"sta"},
    {rows:13,cell:14,dir:"sta"},
    {rows:13,cell:16,dir:"sta"},
    {rows:13,cell:18,dir:"sta"},
    {rows:13,cell:20,dir:"sta"},

    {rows:14,cell:7,dir:"sta"},
    {rows:14,cell:9,dir:"sta"},

    {rows:15,cell:6,dir:"sta"},
    {rows:15,cell:7,dir:"sta"},
    {rows:15,cell:9,dir:"sta"},
    {rows:15,cell:10,dir:"sta"},

    {rows:15,cell:14,dir:"sta"},
    {rows:15,cell:16,dir:"sta"},
    {rows:15,cell:18,dir:"sta"},
    {rows:15,cell:20,dir:"sta"},

    {rows:16,cell:6,dir:"sta"},
    {rows:16,cell:10,dir:"sta"},

    {rows:16,cell:14,dir:"sta"},
    {rows:16,cell:16,dir:"sta"},
    {rows:16,cell:18,dir:"sta"},
    {rows:16,cell:20,dir:"sta"},

    {rows:17,cell:7,dir:"sta"},
    {rows:17,cell:9,dir:"sta"},

    {rows:18,cell:4,dir:"sta"},
    {rows:18,cell:8,dir:"sta"},

    {rows:18,cell:14,dir:"sta"},
    {rows:18,cell:16,dir:"sta"},
    {rows:18,cell:18,dir:"sta"},
    {rows:18,cell:20,dir:"sta"},

    {rows:19,cell:4,dir:"sta"},
    {rows:19,cell:8,dir:"sta"},

    {rows:19,cell:14,dir:"sta"},
    {rows:19,cell:16,dir:"sta"},
    {rows:19,cell:18,dir:"sta"},
    {rows:19,cell:20,dir:"sta"},

    {rows:19,cell:15,dir:"sta"},
    {rows:19,cell:19,dir:"sta"},

    {rows:20,cell:7,dir:"sta"},
    {rows:20,cell:9,dir:"sta"},

    {rows:21,cell:4,dir:"sta"},
    {rows:21,cell:8,dir:"sta"},

    {rows:21,cell:14,dir:"sta"},
    {rows:21,cell:18,dir:"sta"},

    {rows:22,cell:4,dir:"sta"},
    {rows:22,cell:8,dir:"sta"},

    {rows:22,cell:14,dir:"sta"},
    {rows:22,cell:18,dir:"sta"},

    {rows:22,cell:5,dir:"sta"},
    {rows:22,cell:6,dir:"sta"},
    {rows:22,cell:7,dir:"sta"},

    {rows:23,cell:4,dir:"sta"},
    {rows:23,cell:8,dir:"sta"},

    {rows:23,cell:14,dir:"sta"},
    {rows:23,cell:18,dir:"sta"},

    {rows:24,cell:7,dir:"sta"},
    {rows:24,cell:9,dir:"sta"},

    {rows:25,cell:4,dir:"sta"},
    {rows:25,cell:8,dir:"sta"},

    {rows:25,cell:14,dir:"sta"},
    {rows:25,cell:18,dir:"sta"},

    {rows:26,cell:4,dir:"sta"},
    {rows:26,cell:8,dir:"sta"},

    {rows:26,cell:14,dir:"sta"},
    {rows:26,cell:18,dir:"sta"},

    {rows:27,cell:7,dir:"sta"},
    {rows:27,cell:9,dir:"sta"},

    {rows:27,cell:15,dir:"sta"},
    {rows:27,cell:17,dir:"sta"},

    {rows:28,cell:8,dir:"sta"},
    {rows:28,cell:16,dir:"sta"},

    {rows:29,cell:8,dir:"sta"},
    {rows:29,cell:9,dir:"sta"},
    {rows:29,cell:10,dir:"sta"},
    {rows:29,cell:11,dir:"sta"},
    {rows:29,cell:13,dir:"sta"},
    {rows:29,cell:14,dir:"sta"},
    {rows:29,cell:15,dir:"sta"},
    {rows:29,cell:16,dir:"sta"},
    )

