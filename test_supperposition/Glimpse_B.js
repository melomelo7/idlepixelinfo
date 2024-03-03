
itemList = [
    {label:"Workers",sell:0,buy:300,time:{base:300,discount:0},cost:["Silver Coins:300"],lock:[]},
    {label:"Grains",sell:200,buy:800,time:{base:1200,discount:0},cost:[],lock:[]},
    {label:"Wood",sell:200,buy:800,time:{base:1200,discount:0},cost:[],lock:[]},
    {label:"Stone",sell:200,buy:800,time:{base:1200,discount:0},cost:[],lock:[]},
    {label:"Fish",sell:200,buy:800,time:{base:1200,discount:0},cost:[],lock:[]},
    {label:"Horse",sell:200,buy:800,time:{base:1200,discount:0},cost:[],lock:[]},
    {label:"Iron",sell:200,buy:800,time:{base:1200,discount:0},cost:[],lock:[]},
    {label:"Fur",sell:200,buy:800,time:{base:1200,discount:0},cost:[],lock:[]},
    {label:"Ore",sell:200,buy:800,time:{base:1200,discount:0},cost:[],lock:[]},
    {label:"Cloth",sell:200,buy:800,time:{base:1200,discount:0},cost:[],lock:[]},
    ]

upgrades = [
    {label:"Common Pasture", baseCost:["Silver Coins:400","Grains:1"], baseLock:[], cap:5,
    bonus:{type:"time",location:"Village Center",targets:"Stone:Horse",rate:2},
    text:"Reduce production time by 2% per level for Stone & Horse"},

    {label:"Mill", baseCost:["Silver Coins:400","Iron:1"], baseLock:[], cap:5,
    bonus:{type:"time",location:"Village Center",targets:"Fish:Ore",rate:2},
    text:"Reduce production time by 2% per level for Fish & Ore"},

    {label:"Storehouse", baseCost:["Silver Coins:400","Wood:1"], baseLock:[], cap:5,
    bonus:{type:"time",location:"Village Center",targets:"Iron:Wood",rate:2},
    text:"Reduce production time by 2% per level for Iron & Wood"},

    {label:"Tannery", baseCost:["Silver Coins:400","Fur:1"], baseLock:[], cap:5,
    bonus:{type:"time",location:"Village Center",targets:"Fur:Cloth",rate:2},
    text:"Reduce production time by 2% per level for Fur & Cloth"},

    {label:"Bakery", baseCost:["Silver Coins:400","Stone:1"], baseLock:[], cap:5,
    bonus:{type:"time",location:"Village Center",targets:"Grains",rate:2},
    text:"Reduce production time by 2% per level for Grains"},

    {label:"Brewhouse", baseCost:["Silver Coins:1000"],baseLock:["Gold Coins:5"], cap:5,
    bonus:{type:"permanent",location:"Village Center",targets:"Quantity",rate:1},
    text:"Production +1 resource per level in Village Center<>*Gold spending unlocks are permanent<br>others costs remains."},
]



