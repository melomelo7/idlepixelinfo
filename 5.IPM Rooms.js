
/* 
rooms from start
=================

Engineering <> Forge
Forge => Engineering <> Aeronotical
Forge => Engineering => Aeronotical <> Astronomy
Forge => Engineering => Astronomy => Aeronotical <> Packaging

*/
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
     bonus : {label : "Decrease costs on all planets (Mining,Speed,Cargo) :<br>start -10% then -4% each new lv",
                base:0,start : -10, every : -4},
     costs : [26,46,74,111,160,224,307,414,522,729,]},

    {label : "Laboratory",
     bonus : {label : "Decrease materials needed to unlock projects :<br>start -10% then -4% each new lv",
                base:0,start : -10, every : -4},
     costs : [26,46,74,111,160,224,307,414,522,729,]},
 
    {label : "Terrarium",
     bonus : {label : "Decrease materials needed for colonizing :<br> start -10% then -4% each new lv",
                base:0,start : -10, every : -4},
     costs : [18,25,34,46,62,82,107,139,180,231,]},

    {label : "Lounge",
     bonus : { label : "Rate of Rewarded Credits per Galaxy Sale Increased :<br>start +0.15 then +0.05 each new lv",
                base:1,start : 0.15, every : 0.05},
     costs : [8,12,18,25,34,46,62,82,107,139,180,231,296,377,479,607,767,966,1215,1524,1908,2385,2976,
            3709,4616,5737,7121,8830,10938,13536,16736,20673,25517,31471,38786,47768,70549,86776,
            106670,131052,160920,197492,242257,297029,436822,535106,655234,802006,981276,]},

    {label : "Robotics",
     bonus : {label : "Decrease Rover trip times : start -10% then -4% each new lv",
                base:0,start : -10, every : -4},
     costs : [53,75,103,139,185,244,319,415,537,690,]},

    {label : "Backup Generator",
     bonus : {label : "Increase Idle time : +30mn each new lv<br>(offline time you carry on cashing the Benefits)",
                base:0,start : 30, every : 30},
     costs : [21,29,39,52,68,89,116,150,193,247,314,399,506,639,805,1012,1270,1590,1987,2480,3091,3846,
            4781,5934,7359,9115,11280,13946,17228,21264,64226,32321,39806,48992,60261,74077,91008,
            111750,137148,168234,206270,252790,309668,]},

    {label: "Underforge",
    bonus : {label : "Decrease materials needed for Smelting(bar/alloys) :<br>start -10% then -4% each new lv",
                base:0,start : -10, every : -4},
    costs : [18,25,34,46,62,82,107,139,180,231,]},

    {label : "Dorms",
     bonus : {label : "Decrease materials needed for Crafting(items) :<br>start -10% then -4% each new lv",
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
    let overall = 119809120
    let textSize = 18
  
    let roomsInfo = `
    Rooms with a Green border are the ones with Max Level 11 <br>
    Though rooms developpement paths are multiple depending each players settings, <br>
    early on elder players will probably agree on these : <br>
    - buy at least 1 lev of every new room as soon as possible (biggest boost at lv1) <br>
    - try to complete low cap(11) rooms early : good boost at low cost <br>
    - then its about balancing what you lack or aim for specific result ....<br>
    ** Robotics lv4+ will also open up missions with better payout **
    <br><br> If you ever wonder how many credits in global you will spend on rooms :` 
    + overall.toLocaleString()+"<br><br>"+spanText("greenyellow",`New mini tool to budget your next
    big credit spending : Shopping list.<br>Click a Room > Display details > click lines ... easy !`)

    let tabInfos = addEle({dad:right,setClass:"texting",fontS:"18px",marginL:"20px",
    textC:"rgb(0,212,250)",text:roomsInfo})

    let rightTop = addEle({dad:right,setClass:"contRow_W"})
    let rightMiddle = addEle({dad:right,setClass:"contCol_W"})
    let rightBottom1 = addEle({dad:right,setClass:"contCol_W"})
    let rightBottom2 = addEle({dad:right,setClass:"contRow_W"})
        let  rightBottom2A = addEle({dad:rightBottom2,setClass:"contCol_W"})
        let  rightBottom2B = addEle({dad:rightBottom2,setClass:"contCol_W",setID:"roomShoppingFr"})

    let tB = addEle({dad:rightMiddle,what:"table",width:"640px"})
        let tR = addEle({dad:tB,what:"tr"})

    for (i=0;i<Rooms.length;i++){
        if(i % 4 === 0){tR = addEle({dad:tB,what:"tr"})}
        let tC = addEle({dad:tR,what:"td"})
            let myC = Rooms[i].costs.length === 10 ? "green" : "blue"
            addEle({dad:tC,setClass:"button1",marginL:"10px",text:Rooms[i].label,
            width:"160px",border:"solid 3px "+myC,setName:"roomSelectBtns",setFunc:(e)=>{
            displayRoom(e,rightBottom2A)}})

        if (i===Rooms.length-1){
            tC = addEle({dad:tR,what:"td"})
            addEle({dad:tC,setClass:"button1",marginL:"10px",text:"cost [ New Room ]",
            width:"160px",border:"solid 3px blueviolet",setFunc:()=>{
            rightBottom1.style.display = rightBottom1.style.display === "none" ? "block" : "none" }})

            tC = addEle({dad:tR,what:"td"})
            let myTxt = "Shopping (" + roomShopping.length + ")"
            addEle({dad:tC,setClass:"button1",marginL:"10px",text:myTxt,setID:"roomShoppingBtn",
            backG:"linear-gradient(to bottom,rgba(220,126,115,1),rgba(0,0,0,1))",textC:"yellow",
            width:"160px",border:"solid 3px blue",setFunc:checkRoomShopping})
        }
    }

    tB = addEle({dad:rightBottom1,what:"table",margin:"0 0 20px 20px"})
    for (i=0;i<newRoom.length;i++){
            if(i===0 || i===9){tR = addEle({dad:tB,what:"tr"})}
            tC = addEle({dad:tR,what:"td",minWidth:"50px",border:"solid 2px blueviolet",textA:"center"})
            let thisC = addEle({dad:tC,setClass:"contCol_W"})
                addEle({dad:thisC,text:"# " + (i+1),borderB:"dotted white 2px"})
                addEle({dad:thisC,text:newRoom[i].toLocaleString()})
    }
    rightBottom1.style.display = "none"
}



function displayRoom(e,rightBottom){
        cleanParent(rightBottom)
        let refNm = e.srcElement.innerHTML
        let refR = Rooms.filter(rm=>rm.label===refNm)[0]

        let mainFr = addEle({dad:rightBottom,setClass:"contCol_W",border:"solid blue 3px",justifyC:"center",marginL:"20px",
        radius:"30px",padding:"30px 10px 30px 10px",alignItems:"center",textA:"center",width:"500px",fontS:"18px"})        
            let frTop = addEle({dad:mainFr,setClass:"contCol_W"})
            let frBtm = addEle({dad:mainFr,setClass:"contCol_W",setID:"roomLv",display:"none"})

        addEle({dad:frTop,what:"img",img2Sizes:"500:142",imgFullSrc:"./IPM Components/" + refNm + ".jpg"})

        let subC = addEle({dad:frTop,setClass:"contRow_W",justifyC:"center"})
        addEle({dad:subC,width:"fit-content",borderB:"yellow solid 3px",
        margin:"20px 0",text:refR.label+", Max Lv " + (refR.costs.length+1)})

        addEle({dad:frTop,text:refR.bonus.label})

        addEle({dad:frBtm,text:refR.label,border:"teal solid 2px",backC:"black",fontS:"18px",
        padding:"5px",borderB:"none",radiusTL:"20px",radiusTR:"20px",margin:"20px 0 -3px 0",setID:"refRoom"})

        let thisBonus = refR.bonus.base + refR.bonus.start
        let fullBonus = refR.bonus.base + refR.bonus.start
        let fullCost = 0

        let tB = addEle({dad:frBtm,what:"table",setID:"roomTable"})
        for (i=0;i<refR.costs.length;i++){
            thisBonus += refR.bonus.every
            fullBonus += refR.bonus.every
            fullCost += refR.costs[i]
            let myC = "teal"
            let myBC = ""
            tR = addEle({dad:tB,what:"tr"})

                if(roomShopping.length>0){
                    let thisIdx = roomShopping.findIndex(rs=>rs.label===refR.label && rs.level===i)
                    if(thisIdx>-1){myBC = "teal"}
                }

                addEle({dad:tR,padding:"5px",border:"solid 2px "+myC,what:"td",cursor:"pointer",backC:myBC,
                minWidth:"60px",text:"Level : " + (i+2),setID:refR.label+":"+i,setFunc:(e)=>{addRoomShopping(e)}})

                addEle({dad:tR,padding:"5px",border:"solid 2px "+myC,what:"td",cursor:"pointer",backC:myBC,
                text:"Cost " + refR.costs[i].toLocaleString(),setID:refR.label+":"+i,setFunc:(e)=>{addRoomShopping(e)}})
                
                let thisTxt = "Bonus "
                thisTxt += thisBonus < 0 ? thisBonus.toFixed(2) + "%" : thisBonus.toFixed(2)
                addEle({dad:tR,padding:"5px",border:"solid 2px "+myC,what:"td",text:thisTxt,backC:myBC,
                cursor:"pointer",setID:refR.label+":"+i,setFunc:(e)=>{addRoomShopping(e)}})
        }

        addEle({dad:frTop,margin:"10px 0",text:"Total Cost to reach Max Level : " + fullCost.toLocaleString()})

        let thisTxt = "Bonus total at Max Level : "
        thisTxt += fullBonus.toFixed(2) < 0 ?
        fullBonus.toFixed(2) + "%" : fullBonus.toFixed(2) 
        addEle({dad:frTop,text:thisTxt})

        subC = addEle({dad:frTop,setClass:"contRow_W",justifyC:"center"})
        addEle({dad:subC,setClass:"button1",width:"80%",text:`Display Cost & Bonus per Level<br>
        `+ spanText("rgb(0,212,250)","Click a line to Add/Remove it from Shopping"),
        setID:"roomDisplayLv",setFunc:()=>{
            getID("roomLv").style.display = getID("roomLv").style.display ==="none" ? "flex" : "none"
        }})

        if(roomShopping.length > 0){getID("roomShoppingBtn").click()}
}

let roomShopping = []
function addRoomShopping(e){
    let refNm = e.srcElement.id.split(":")[0]
    let refR = Rooms.filter(rm=>rm.label===refNm)[0]
    let refLv = Number(e.srcElement.id.split(":")[1])

    let thisIdx = roomShopping.findIndex(itm=>itm.label===refNm && itm.level===refLv)
    
    if(thisIdx < 0){
        roomShopping.push({label:refNm,level:Number(refLv),cost:refR.costs[refLv]})
        getID("roomTable").rows[refLv].cells[0].style.backgroundColor = "teal"
        getID("roomTable").rows[refLv].cells[1].style.backgroundColor = "teal"
        getID("roomTable").rows[refLv].cells[2].style.backgroundColor = "teal"
    } else {
        roomShopping.splice(thisIdx,1)
        getID("roomTable").rows[refLv].cells[0].style.backgroundColor = ""
        getID("roomTable").rows[refLv].cells[1].style.backgroundColor = ""
        getID("roomTable").rows[refLv].cells[2].style.backgroundColor = ""
    }

    getID("roomShoppingBtn").innerHTML = "Shopping (" + roomShopping.length + ")"
    getID("roomShoppingBtn").click()
}

function checkRoomShopping(){
    cleanParent(getID("roomShoppingFr"))
    if(roomShopping.length===0){return}

    let myRoomShopping = addEle({dad:getID("roomShoppingFr"),setClass:"contCol_W",
    border:"3px solid blue",padding:"30px 10px",radius:"30px",fontS:"18px",marginL:"10px"})

    addEle({dad:myRoomShopping,textC:"rgb(0,212,250)",text:"*Click a line to remove it*",
    margin:"10px 0",textA:"center"})

    let tempo = [] ; let newArr = []
    Rooms.forEach(rm=>{
        tempo = roomShopping.filter(rs=>rs.label===rm.label).sort((a,b)=>a.level-b.level)
        tempo.forEach(itm=>newArr.push(itm))
    })

    let roomCost = 0
    let tB = addEle({dad:myRoomShopping,what:"table"})
    for(let i=0;i<newArr.length;i++){
        let itm = newArr[i] ; roomCost+= itm.cost
        let tR = addEle({dad:tB,what:"tr"})
            addEle({dad:tR,what:"td",textA:"right",text:itm.label+" Lv"+(itm.level+2),//,minWidth:"150px"
            setID:itm.label+":"+(itm.level+2),cursor:"pointer",padding:"5px 0",setFunc:(e)=>{
                let myNm = e.srcElement.id.split(":")[0]
                let myLv = Number(e.srcElement.id.split(":")[1])-2
                let thisIdx = roomShopping.findIndex(itm=>itm.label===myNm && itm.level===myLv)
                roomShopping.splice(thisIdx,1)
                let grp = document.getElementsByName("roomSelectBtns")
                for(i=0;i<grp.length;i++){
                    if(grp[i].innerHTML===getID("refRoom").innerHTML){grp[i].click()}
                }
                getID("roomDisplayLv").click()
                checkRoomShopping()
            }})
            addEle({dad:tR,what:"td",textA:"right",minWidth:"100px",text:itm.cost.toLocaleString(),
            setID:itm.label+":"+(itm.level+2),paddingR:"10px",cursor:"pointer",setFunc:(e)=>{
                let myNm = e.srcElement.id.split(":")[0]
                let myLv = Number(e.srcElement.id.split(":")[1])-2
                let thisIdx = roomShopping.findIndex(itm=>itm.label===myNm && itm.level===myLv)
                roomShopping.splice(thisIdx,1)
                let grp = document.getElementsByName("roomSelectBtns")
                for(i=0;i<grp.length;i++){
                    if(grp[i].innerHTML===getID("refRoom").innerHTML){grp[i].click()}
                }
                getID("roomDisplayLv").click()
                checkRoomShopping()
            }})
    }
    addEle({dad:myRoomShopping,paddingR:"10px",text:"Total : "+roomCost.toLocaleString(),
    marginT:"20px",textA:"right"})

    addEle({dad:myRoomShopping,setClass:"button1",text:"Empty List &#9940",marginT:"20px",
    backG:"linear-gradient(to bottom,rgba(220,126,115,1),rgba(0,0,0,1))",textC:"yellow",
    setFunc:()=>{
        roomShopping = []
        getID("roomShoppingBtn").innerHTML = "Shopping (" + roomShopping.length + ")"
        if(getID("refRoom")!==null){
            let grp = document.getElementsByName("roomSelectBtns")
            for(i=0;i<grp.length;i++){
                if(grp[i].innerHTML===getID("refRoom").innerHTML){grp[i].click()}
            }
            getID("roomDisplayLv").click()
        }
        getID("roomShoppingBtn").click()
    }})

    getID("roomShoppingBtn").innerHTML = "Shopping (" + roomShopping.length + ")"


    
}