
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
            


const expArray=[[1,0],[2,8],[3,27],[4,65],[5,130],
[6,227],[7,367],[8,556],[9,804],[10,1122],
[11,1518],[12,2005],[13,2595],[14,3300],[15,4135],
[16,5113],[17,6250],[18,7564],[19,9072],[20,10794],
[21,12749],[22,14960],[23,17449],[24,20242],[25,23364],
[26,26485],[27,30713],[28,35000],[29,39741],[30,44970],
[31,50727],[32,57052],[33,63987],[34,71579],[35,79875],
[36,88928],[37,98792],[38,109524],[39,121185],[40,133841],
[41,147561],[42,162416],[43,178484],[44,195847],[45,214590],
[46,234805],[47,256588],[48,280040],[49,305271],[50,332393],
[51,361527],[52,392799],[53,426344],[54,462303],[55,500827],
[56,542071],[57,586204],[58,633400],[59,683844],[60,737732],
[61,795270],[62,856675],[63,922176],[64,992013],[65,1066441],
[66,1145727],[67,1230153],[68,1320017],[69,1415631],[70,1517324],
[71,1625443],[72,1740352],[73,1862436],[74,1992098],[75,2129765],
[76,2275883],[77,2430922],[78,2595378],[79,2769771],[80,2954649],
[81,3150587],[82,3358189],[83,3578093],[84,3810966],[85,4057512],
[86,4318467],[87,4594609],[88,4886753],[89,5195753],[90,5522511],
[91,5867971],[92,6233125],[93,6619015],[94,7026736],[95,7457435],
[96,7912320],[97,8392657],[98,8899774],[99,9435067],[100,10000000]]

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
Tools.push(new Tool("Cooks Book","Cooking","Gathering (Lv45) Dirty Kitchen","**atm not upgradable** teach recipes on cooking tab"))

// tableBuilder(body,Fishes)
