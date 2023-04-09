const newRoom = [3,6,12,21,35,56,87,133,200,298,439,642,934,1351,1946,2932,4402,6586]

const Rooms = [
    {label : "Engineering",
     bonus : {label : "Mining Rate : start +0.25 then +0.15 each new lv",
                base:1,start : 0.25, every : 0.15},
     costs :[5,8,12,18,25,34,46,62,82,107,139,180,231,296,377,479,607,767,966,1215,1524,1908,2385,
            2976,3709,4616,5737,7121,8830,10938,13536,16736,20673,25517,31471,38786,47768,58791,
            72313,102226,125592,154215,189264,232163,355816,436062,534178,654095,800612,]},

    {label : "Aeronautical",
     bonus : {label : "Ship Speed : start +0.5 then +0.25 each new lv",
                base:1,start : 0.5, every : 0.25},
     costs : [5,8,12,18,25,34,46,62,82,107,139,180,231,296,377,479,607,767,966,1215,1524,1908,2385,
            2976,3709,4616,5737,7121,8830,10938,13536,16736,20673,25517,31471,38786,47768,58791,
            72313,102226,125592,154215,189264,232163,355816,436062,534178,654095,800612,]},

    {label : "Packaging",
     bonus : {label : "Cargo : start +0.5 then +0.25 each new lv",
                base:1,start : 0.5, every : 0.25},
     costs : [5,8,12,18,25,34,46,62,82,107,139,180,231,296,377,479,607,767,966,1215,1524,1908,2385,2976,
            3709,4616,5737,7121,8830,10938,13536,16736,20673,25517,31471,38786,47768,58791,72313,
            102226,125592,154215,189264,232163,355816,436062,534178,654095,800612,]},

    {label : "Forge",
     bonus : {label : "Smelting Speed : start +0.2 then +0.1 each new lv",
                base:1,start : 0.2, every : 0.1},
     costs : [5,8,12,18,25,34,46,62,82,107,139,180,231,296,377,479,607,767,966,1215,1524,1908,2385,2976,
            3709,4616,5737,7121,8830,10938,13536,16736,20673,25517,31471,38786,47768,58791,72313,
            124449,152894,187740,230408,282633,554454,679499,832389,1019251,1247593,]},

    {label : "Workshop",
     bonus : {label : "Crafting Speed : start +0.2 then +0.1 each new lv",
                base:1,start : 0.2, every : 0.1},
     costs : [5,8,12,18,25,34,46,62,82,107,139,180,231,296,377,479,607,767,966,1215,1524,1908,2385,2976,
            3709,4616,5737,7121,8830,10938,13536,16736,20673,25517,31471,38786,47768,58791,72313,
            124449,152894,187740,230408,282633,554454,679499,832389,1019251,1247593,]},

    {label : "Astronomy",
     bonus : {label : "Decrease costs on all planets(Mining,Speed,Cargo) : start -10% then -4% each new lv",
                base:0,start : -10, every : -4},
     costs : [26,46,74,111,160,224,307,414,522,729,]},

    {label : "Laboratory",
     bonus : {label : "Decrease materials needed to unlock projects : start -10% then -4% each new lv",
                base:0,start : -10, every : -4},
     costs : [26,46,74,111,160,224,307,414,522,729,]},
 
    {label : "Terrarium",
     bonus : {label : "Decrease materials needed for colonizing : start -10% then -4% each new lv",
                base:0,start : -10, every : -4},
     costs : [18,25,34,46,62,82,107,139,180,231,]},

    {label : "Lounge",
     bonus : { label : "Rate of Rewarded Credits per Galaxy Sale Increased : start +0.15 then +0.05 each new lv",
                base:1,start : 0.15, every : 0.05},
     costs : [8,12,18,25,34,46,62,82,107,139,180,231,296,377,479,607,767,966,1215,1524,1908,2385,2976,
            3709,4616,5737,7121,8830,10938,13536,16736,20673,25517,31471,38786,47768,70549,86776,
            106670,131052,160920,197492,242257,297029,436822,535106,655234,802006,981276,]},

    {label : "Robotics",
     bonus : {label : "Decrease Rover trip times : start -10% then -4% each new lv",
                base:0,start : -10, every : -4},
     costs : [53,75,103,139,185,244,319,415,537,690,]},

    {label : "Backup Generator",
     bonus : {label : "Increase Idle time (offline time you carry on cashing the Benefits) : +30mn each new lv",
                base:0,start : 30, every : 30},
     costs : [21,29,39,52,68,89,116,150,193,247,314,399,506,639,805,1012,1270,1590,1987,2480,3091,3846,
            4781,5934,7359,9115,11280,13946,17228,21264,64226,32321,39806,48992,60261,74077,91008,
            111750,137148,168234,206270,252790,309668,]},

    {label: "Underforge",
    bonus : {label : "Decrease materials needed for Smelting(bar/alloys) : start -10% then -4% each new lv",
                base:0,start : -10, every : -4},
    costs : [18,25,34,46,62,82,107,139,180,231,]},

    {label : "Dorms",
     bonus : {label : "Decrease materials needed for Crafting(items) : start -10% then -4% each new lv",
                base:0,start : -10, every : -4},
     costs : [21,29,39,52,68,89,116,150,193,247,]},

    {label : "Sales",
     bonus : {label : "Increase value of alloys & items : start +0.15 then +0.05 each new lv",
                base:1,start : 0.15, every : 0.05},
     costs : [30,40,53,68,88,114,145,185,235,298,377,474,596,748,937,1171,1462,1822,2267,2817,3497,4337,5372,6648,
            8219,10153,12532,15456,19049,23460,28874,35515,43657,53636,65860,80828,99149,121565,148982,209878,
            256995,314562,384875,470732,661866,808948,988387,1207246,1474110,]},

    {label : "Classroom",
     bonus : {label : "Increase All Managers Bonuses : start +0.15 then +0.05 each new lv",
                base:1,start : 0.15, every : 0.05},
     costs : [97,120,149,184,228,282,348,430,530,653,804,990,1218,1497,1839,2258,2771,3400,4168,5108,6258,7663,9379,
            11475,14035,17160,26218,32032,39125,59718,72898,88958,108530,132370,193687,236113,287762,350628,
            427130,702278,855126,1041026,1267075,1541907,2907775,3537134,4301921,5231136,6359960,]},

    {label : "Marketing",
    bonus : {label : "All positive market change bonus : start +0.30 then +0.10 each new lv",
                base:1,start : 0.30, every : 0.10},
    costs : [69,86,107,134,167,208,259,321,398,493,610,754,932,1150,1418,1748,2153,2650,3259,4007,4922,6044,7418,
            9099,11157,13673,16749,20509,25109,30715,37567,45930,56137,68589,83777,102296,124872,152386,185911,
            306114,373262,455023,554558,675709,1275862,1553884,1892082,2303405,2803573,]},

    {label : "Planet Relations",
     bonus : {label : "Colonizing Bonuses : start +0.25 then +0.10 each new lv",
                base:1,start : 0.25, every : 0.10},
     costs : [139,171,210,258,317,388,476,583,715,875,1071,1311,1603,1960,2396,2927,3575,4365,5329,6503,7934,9676,
            11799,14383,17530,21359,26020,31690,38587,46975,57176,69577,84652,102974,125239,152290,185153,
            225069,273546,448754,545235,662360,804524,977061,1838968,2232725,2710423,3289895,3992736,]},

    {label : "Belt Studies",
     bonus : {label : "Asteroids & Debris Bonuses : start +0.25 then +0.10 each new lv",
                base:1,start : 0.25, every : 0.10},
     costs : [147,181,222,272,334,410,503,616,755,924,1131,1384,1693,2070,2530,3092,3776,4611,5628,6869,8380,10220,
            12462,15192,18515,22560,27483,33471,40756,49616,60390,73489,89411,108763,132280,160852,195562,
            237722,288924,473982,575888,699597,849755,1031991,1942358,2358249,2862804,3474852,4217208,]},
    ]


function buildRooms(){

    let textSize = 18
    let tabInfos = document.createElement("div")
    right.appendChild(tabInfos)
    tabInfos.innerHTML = "Rooms with a Green border are the ones with Max Level 11"
    tabInfos.style = textStyle
    tabInfos.style.fontSize = textSize + "px"
    tabInfos.style.height = textSize + "px"
    tabInfos.style.marginLeft = textSize + "px"
    tabInfos.style.color="yellow"

    let rightTop = document.createElement("div")
    rightTop.style = containerRow
    right.appendChild(rightTop)

    let rightMiddle = document.createElement("div")
    rightMiddle.style = containerRow
    right.appendChild(rightMiddle)

    let rightBottom1 = document.createElement("div")
    rightBottom1.style = containerColumn
    right.appendChild(rightBottom1)

    let rightBottom2 = document.createElement("div")
    rightBottom2.style = containerColumn
    right.appendChild(rightBottom2)

    let table = document.createElement("table")
    table.style.width = 640 + "px"
    rightMiddle.appendChild(table)
    rightMiddle.style = containerColumn

    tableAdd({table:table})

    for (i=0;i<Rooms.length;i++){
        if(i % 4 === 0){tableAdd({table:table})}
        tableAdd({table:table,row:false})

        let myDiv = document.createElement("div")
        myDiv.style = closeButtonStyle
        myDiv.style.marginLeft = 10 + "px"
        myDiv.innerHTML = Rooms[i].label
        myDiv.style.width = 160 + "px"

        if (Rooms[i].costs.length === 10){
                myDiv.style.borderColor = "green"                
        }
        
        let row = table.rows.length-1
        let cel = table.rows[row].cells.length-1
        table.rows[row].cells[cel].appendChild(myDiv)

        myDiv.addEventListener("click",function(e){displayRoom(e,rightBottom2,table.getBoundingClientRect().width)})
        
        if (i===Rooms.length-1){
                tableAdd({table:table,row:false})
                myDiv = document.createElement("div")
                myDiv.style = closeButtonStyle
                myDiv.style.marginLeft = 10 + "px"
                myDiv.innerHTML = "cost [ New Room ]"
                myDiv.style.width = 160 + "px"
                myDiv.style.borderColor = "blueviolet"
                row = table.rows.length-1
                cel = table.rows[row].cells.length-1
                table.rows[row].cells[cel].appendChild(myDiv)

                myDiv.addEventListener("click",()=>{
                        rightBottom1.style.display = 
                        rightBottom1.style.display === "none" ? "block" : "none"
                })
        }
    } 

    table = document.createElement("table")
    tableAdd({table:table})
    for (i=0;i<newRoom.length;i++){
        tableAdd({table:table,row:false})

        row = table.rows.length-1
        cel = table.rows[row].cells.length-1

        thisContainer = document.createElement("div")
        thisContainer.style = containerColumn
        table.rows[row].cells[cel].appendChild(thisContainer)

                myDiv = document.createElement("div")
                thisContainer.appendChild(myDiv)
                myDiv.innerHTML = "#" + (i+1)
                myDiv.style.borderBottom = "dotted white 2px"

                myDiv = document.createElement("div")
                thisContainer.appendChild(myDiv)
                myDiv.innerHTML = newRoom[i].toLocaleString()
                
        table.rows[row].cells[cel].style.minWidth = 40 + "px"
        table.rows[row].cells[cel].style.textAlign = "center"
        table.rows[row].cells[cel].style.border = "solid blueviolet 2px"

        if (i===9){tableAdd({table:table})}
        }

        

    table.style.margin = "0 0 20px 20px"
    rightBottom1.appendChild(table)
    rightBottom1.style.display = "none"

}

function displayRoom(e,rightBottom,width){

        cleanParent(rightBottom)

        let thisItem = Rooms[Rooms.findIndex(x=>x.label === e.srcElement.innerHTML)]

        let fullCost = 0
        let fullBonus = thisItem.bonus.base + thisItem.bonus.start
        let table = document.createElement("table")
        table.style.display = "none"
        table.style.marginLeft = 50 + "px"
        let row = 0
        let cel = 0
        let thisBonus = thisItem.bonus.base + thisItem.bonus.start

        for (i=0;i<thisItem.costs.length;i++){
                thisBonus+= thisItem.bonus.every
                fullBonus += thisItem.bonus.every
                fullCost += thisItem.costs[i]
                tableAdd({table:table})
                tableAdd({table:table,row:false})
                row = table.rows.length-1
                cel = table.rows[row].cells.length-1
                table.rows[row].cells[cel].innerHTML =
                "Level " + (i+2) + " : Cost " + thisItem.costs[i].toLocaleString() + " --- Bonus "
                table.rows[row].cells[cel].innerHTML += 
                thisBonus < 0 ? thisBonus.toFixed(2) + "%" : thisBonus.toFixed(2)
        }

        let thisContainer = document.createElement("div")
        rightBottom.appendChild(thisContainer)
        thisContainer.style = containerStyle
        thisContainer.style.marginLeft = 12 + "px"
        thisContainer.style.width = 550 + "px"

                let subContainer = document.createElement("div")
                thisContainer.appendChild(subContainer)
                subContainer.style = containerColumn
                subContainer.style.marginLeft = "0"

                        let img = new Image(550,157)
                        img.src = "./IPM Components/" + e.srcElement.innerHTML + ".jpg"
                        subContainer.appendChild(img)
                
                        let myDiv = document.createElement("div")
                        subContainer.appendChild(myDiv)
                        myDiv.style = textStyle
                        myDiv.style.borderBottom = "yellow 3px solid"
                        myDiv.style.marginLeft = 10 + "px"
                        myDiv.innerHTML = thisItem.label + ", Max Lv " + (thisItem.costs.length +1)
                        myDiv.style.width = myDiv.innerHTML.length *9 + "px" 

                        myDiv = document.createElement("div")
                        subContainer.appendChild(myDiv)
                        myDiv.style = textStyle
                        myDiv.style.marginLeft = 10 + "px"
                        myDiv.innerHTML = thisItem.bonus.label + "<br>"

                        myDiv.innerHTML += "Total Cost to reach Max Level : " + fullCost.toLocaleString() + "<br>"

                        myDiv.innerHTML += "Bonus total at Max Level : "
                        myDiv.innerHTML += fullBonus.toFixed(2) < 0 ?
                        fullBonus.toFixed(2) + "%" : fullBonus.toFixed(2) 

                        myDiv = document.createElement("div")
                        subContainer.appendChild(myDiv)
                        myDiv.style = closeButtonStyle
                        myDiv.style.marginLeft = 20 + "px"
                        myDiv.innerHTML = "Display Cost & Bonus per Level"
                        myDiv.style.width = myDiv.innerHTML.length * 10 + "px"
                        myDiv.addEventListener("click",()=>{
                                table.style.display = 
                                table.style.display === "none" ? "block" : "none"
                        })

                        thisContainer.appendChild(table)


}