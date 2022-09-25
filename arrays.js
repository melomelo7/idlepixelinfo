
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
Fishes.push (new Fish("Crab","?",1000,35,500,-75,5000,30000,5000,45000))
Fishes.push (new Fish("Piranha","?","?",50,1000,-120,10000,40000,10000,60000))

Fishes.push (new Fish("Salmon",100,200,10,100,-20,1000,6000,1000,9000))
Fishes.push (new Fish("Trout",300,600,20,300,-40,3000,18000,3000,27000))
Fishes.push (new Fish("Pike",600,2000,35,1000,-110,10000,60000,10000,90000))
Fishes.push (new Fish("Eel","?","?",55,3000,-280,30000,120000,30000,180000))
Fishes.push (new Fish("Rainbow Fish","?","?","?",10000,"?",100000,400000,300000,1800000))

Fishes.push (new Fish("Tuna","?","?",10,500,-75,5000,30000,5000,45000))
Fishes.push (new Fish("Swordfish","?","?","?","?","?",30000,120000,30000,180000))
Fishes.push (new Fish("Manta Ray","?","?","?","?","?",90000,245000,90000,375000))
Fishes.push (new Fish("Shark","?","?","?","?","?",200000,500000,200000,750000))
Fishes.push (new Fish("Whale","?","?","?","?","?",400000,1000000,400000,1500000))

function tableBuilder(container,thisArray,MaxColumn=2){
    // uses an array of class Objects

    let table = document.createElement("table")
    container.appendChild(table)
    table.style = `
    background-image:linear-gradient(to top right,blue,white);
    padding:5px;
    border-radius:5px;
    `

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


// tableBuilder(body,Fishes)
