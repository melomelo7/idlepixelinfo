
function tableBuilder(container,thisArray,MaxColumn=2){
    // uses an array of class Objects

    let table = document.createElement("table")
    container.appendChild(table)
    table.style = `
    padding:5px;
    border-radius:5px;
    `
//    background-image:linear-gradient(to top right,blue,white);

    let CellStyle=`
    border:1px solid;
    padding:5px;
    border-radius:5px;
    background-color:lightgrey;
    text-align:center;
    `
    let row = document.createElement("tr")
    table.appendChild(row)

    let cell = ""
    let text = ""
    let cpt=0

    let item = Object.entries(thisArray[0])
    for (i=0;i<item.length;i++){
        cell = document.createElement("th")
        row.appendChild(cell)
        text = item[i][0]
        cpt=0
        while(text.indexOf("_") !==-1){
            text = text.replace("_","<br>")
            cpt++
            if(cpt>10){console.log("breaker"); break} }
        cell.innerHTML= text
        cell.style = CellStyle }

    for(i=0;i<thisArray.length;i++){
        item = Object.entries(thisArray[i])
        row = document.createElement("tr")
        table.appendChild(row)
        for(j=0;j<item.length;j++){
            cell = document.createElement("td")
            row.appendChild(cell)
            text = item[j][1]
            cell.innerHTML= text.toLocaleString()
            cell.style = CellStyle } } }


const beasts = 
["chicken","rat","spider","bee","lizard",
"ants","snake","wolf","thief","ent",
"bear","goblin","bat","skeleton",
"fire_hawk","fire_snake","fire_golem","fire_witch",
"ice_hawk","ice_golem","ice_witch","yeti",
"ghost","grandma","exorcist","reaper",
]
            


const expArray=[[1,0],[2,9],[3,28],[4,66],[5,131],
[6,228],[7,368],[8,557],[9,805],[10,1123],
[11,1519],[12,2006],[13,2596],[14,3301],[15,4136],
[16,5114],[17,6251],[18,7565],[19,9073],[20,10795],
[21,12750],[22,14961],[23,17450],[24,20243],[25,23365],
[26,26846],[27,30714],[28,35001],[29,39742],[30,44971],
[31,50728],[32,57053],[33,63988],[34,71580],[35,79876],
[36,88929],[37,98793],[38,109525],[39,121186],[40,133842],
[41,147562],[42,162417],[43,178485],[44,195848],[45,214591],
[46,234806],[47,256589],[48,280041],[49,305272],[50,332394],
[51,361528],[52,392800],[53,426345],[54,462304],[55,500828],
[56,542072],[57,586205],[58,633401],[59,683845],[60,737733],
[61,795271],[62,856676],[63,922177],[64,992014],[65,1066442],
[66,1145728],[67,1230154],[68,1320018],[69,1415632],[70,1517325],
[71,1625444],[72,1740353],[73,1862437],[74,1992099],[75,2129766],
[76,2275884],[77,2430923],[78,2595379],[79,2769772],[80,2954650],
[81,3150588],[82,3358190],[83,3578094],[84,3810967],[85,4057513],
[86,4318468],[87,4594610],[88,4886754],[89,5195754],[90,5522512],
[91,5867972],[92,6233126],[93,6619016],[94,7026737],[95,7457436],
[96,7912321],[97,8392658],[98,8899775],[99,9435068],[100,10000000]]


function fetchXpforLevel(level){
    return expArray[Number(level)-1][1]}


class monsterDrop{
    constructor(Area="Area",Monster="Monster",Drop1="",Drop2="",
                Drop3="",Drop4="",Drop5=""){
        this.Area = Area
        this.Monster = Monster
        this.Drop1 = Drop1
        this.Drop2 = Drop2
        this.Drop3 = Drop3
        this.Drop4 = Drop4
        this.Drop5 = Drop5
    }
}

let monsterDrops = []
monsterDrops.push(new monsterDrop("Fields","Chicken","Feathers","Raw Chicken"))
monsterDrops.push(new monsterDrop("Fields","Rat","Cheese"))
monsterDrops.push(new monsterDrop("Fields","Spider","String"))
monsterDrops.push(new monsterDrop("Fields","Bee","Honey","Stinger"))
monsterDrops.push(new monsterDrop("Fields","Lizard","Lizard Armor Parts","Lizard Skin"))

monsterDrops.push(new monsterDrop("Forest","Ants","Needles"))
monsterDrops.push(new monsterDrop("Forest","Snake","Poison"))
monsterDrops.push(new monsterDrop("Forest","Wolf","Meat","Heart Crystal"))
monsterDrops.push(new monsterDrop("Forest","Thief","Iron Dagger"))
monsterDrops.push(new monsterDrop("Forest","Ent","Strange Leaves","Strange Leaves Fertilizer"))

monsterDrops.push(new monsterDrop("Caves","Bear","Bear Armor Parts","Bear Fur"))
monsterDrops.push(new monsterDrop("Caves","Goblin","Lantern","Mask","**Goblin Toe Nails**"))
monsterDrops.push(new monsterDrop("Caves","Bat","Bat Armor Parts","Bat Skin"))
monsterDrops.push(new monsterDrop("Caves","Skeleton","Sword","Shield","Skull","Train Cart","Bone Amulet"))

monsterDrops.push(new monsterDrop("Volcano","Fire Snake","Fire Spell","**Lava / Molten Glass**"))
monsterDrops.push(new monsterDrop("Volcano","Fire Golem","Bomb","**Lava / Molten Glass**"))
monsterDrops.push(new monsterDrop("Volcano","Fire Hawk","Fire Feathers","**Lava / Molten Glass**"))
monsterDrops.push(new monsterDrop("Volcano","Fire Witch","String","3rd story Crystal","Heart Crystal","**Lava / Molten Glass**"))

monsterDrops.push(new monsterDrop("Northern Fields","Ice Hawk","Ice Feathers"))
monsterDrops.push(new monsterDrop("Northern Fields","Ice Golem","Long Bow Frame"))
monsterDrops.push(new monsterDrop("Northern Fields","Ice Witch","Heart Crystal","Magic Crystal"))
monsterDrops.push(new monsterDrop("Northern Fields","Yeti","Club","4th story Crystal"))

monsterDrops.push(new monsterDrop("Haunted Mansion","Ghost","Invisibility Spell"))
monsterDrops.push(new monsterDrop("Haunted Mansion","Grandma","Heal Spell Upgrade"))
monsterDrops.push(new monsterDrop("Haunted Mansion","Exorcist","Oxygen Mask","Oxygen Tank"))
monsterDrops.push(new monsterDrop("Haunted Mansion","Reaper","Scythe","Robe Parts"))


class Fish {
    constructor(
        Fish="Fish",Fishing_Exp=0,Cooking_Exp=0,Rec_Cooking_Level,
        Energy_Gain=0,Heat=0,Sell_Raw_Min=1,Sell_Raw_Max=2,
        Sell_Cooked_Min=0,Sell_Cooked_Max=0){
    this.Fish = Fish
    this.Fishing_Exp = Fishing_Exp
    this.Cooking_Exp = Cooking_Exp
    this.Rec_Cooking_Level = Rec_Cooking_Level
    this.Energy_Gain = Energy_Gain
    this.Heat = Heat
    this.Sell_Raw_Min = Sell_Raw_Min
    this.Sell_Raw_Max = Sell_Raw_Max
    this.Sell_Cooked_Min = Sell_Cooked_Min
    this.Sell_Cooked_Max = Sell_Cooked_Max
} }

let Fishes = []

Fishes.push (new Fish("Shrimp",50,50,1,25,-10,250,1500,400,2250))
Fishes.push (new Fish("Anchovy",100,200,5,100,-20,1000,6000,1000,9000))
Fishes.push (new Fish("Sardine",150,400,10,200,-40,2000,12000,2000,18000))
Fishes.push (new Fish("Crab",300,1000,35,500,-75,5000,30000,5000,45000))
Fishes.push (new Fish("Piranha",1000,2000,50,1000,-120,10000,40000,10000,60000))

Fishes.push (new Fish("Salmon",100,200,10,100,-20,1000,6000,1000,9000))
Fishes.push (new Fish("Trout",300,600,20,300,-40,3000,18000,3000,27000))
Fishes.push (new Fish("Pike",600,2000,35,1000,-110,10000,60000,10000,90000))
Fishes.push (new Fish("Eel",1200,6000,55,3000,-280,30000,120000,30000,180000))
Fishes.push (new Fish("Rainbow Fish",3000,"?",70,30000,-840,100000,400000,300000,1800000))

Fishes.push (new Fish("Tuna",360,1000,35,500,-75,5000,30000,5000,45000))
Fishes.push (new Fish("Swordfish",1250,6000,50,3000,-220,30000,120000,30000,180000))
Fishes.push (new Fish("Manta Ray",2000,"?",75,9000,-1200,90000,245000,90000,375000))
Fishes.push (new Fish("Shark",4500,"?",82,20000,-3000,200000,500000,200000,750000))
Fishes.push (new Fish("Whale",5000,"?",90,40000,-5000,400000,1000000,400000,1500000))

Fishes.push (new Fish("Stardust Fish(S)","-",2000,50,1000,-300,"-","-","-","-"))
Fishes.push (new Fish("Stardust Fish(M)","-","?",60,2500,-600,"-","-","-","-"))
Fishes.push (new Fish("Stardust Fish(L)","-","?","?","?","?","-","-","-","-"))

class Tool {
    constructor(Tool="tool",Type="Mining",Source="Gathering",Effect = "none"){
    this.Tool = Tool
    this.Type = Type
    this.Source = Source
    this.Effect = Effect
} }

let Tools = []

Tools.push(new Tool("Pickaxe","Mining","Game Shop","Reduce amount of Stardust required when converting ores into Exp"))
Tools.push(new Tool("Hammer","Crafting","Game Shop","Reduce amount of Stardust required when converting bars into Exp"))
Tools.push(new Tool("Rake","Farming","Gathering (Lv3) Desert Mines","Each upgrade increases your chance at finding seeds by +5%"))
Tools.push(new Tool("Watering Can","Farming","Gathering (Lv75) Fields","??? not yet coded ..."))
Tools.push(new Tool("Axe","Woodcutting","Gathering (Lv20) Friendly Forest","Each upgrade increases logs received when cutting a tree by +5units"))
Tools.push(new Tool("Fishing Net","Fishing","Craft/Buy => Quest related content","Each upgrade increase catched fishing Exp by +5%"))
Tools.push(new Tool("Fishing Rod","Fishing","Gathering (Lv30) Quiet Pond","Each upgrade increase catched fishing Exp by +5%"))
Tools.push(new Tool("Harpoon","Fishing","Gathering (Lv60) Quiet Pond","Each upgrade increase catched fishing Exp by +5%"))
Tools.push(new Tool("Brewing Kit","Brewing","Crafting","Each upgrade increases potion duration by 25%"))
Tools.push(new Tool("Needle","Crafting","Crafting","Each upgrade opens higher type of armour : undo armor to get back half skin cost"))
Tools.push(new Tool("Chisel","Mining","Gathering (Lv50) Desert Mines","Each upgrade allows to find next tier of Geodes"))
Tools.push(new Tool("Machete","Woodcutting","Gathering (Lv70) Forest","not confirmed but probably yield more fruits per level"))
Tools.push(new Tool("Cooks Book","Cooking","Gathering (Lv45) Dirty Kitchen","**atm not upgradable** teach recipes lv30+ on cooking tab"))

// tableBuilder(body,Fishes)
