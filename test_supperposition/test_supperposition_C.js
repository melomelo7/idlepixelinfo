
function cleanParent(parent){
    while(parent.children.length >0){
        parent.removeChild(parent.lastChild)
    }}

function getID(id){return document.getElementById(id)}


function spit(label,param=undefined){
    switch(label){
        case "getMisc" : return player.misc.filter(x=>x.label===param)[0] ; break
        case "destMenuObj" : return player.destinations.menu.filter(x=>x.label===param)[0] ; break
        case "destCityObj" : return player.destinations.city.filter(x=>x.label===param)[0] ; break
        case "statusObj" : return player.status.filter(x=>x.label===param)[0] ; break
        case "actionsObj" : return player.actions.filter(x=>x.label===param)[0] ; break
        case "inventoryObj" : return player.inventory.filter(x=>x.label===param)[0] ; break
        case "itemsObj" : return items.filter(x=>x.label===param)[0] ; break
        case "missionsObj" : return missions.filter(x=>x.label===param)[0] ; break
        case "rawLoad" : return spit("statusObj","Strength : ").value*2 ; break
        case "bagValue": return spit("statusObj","Bag Space : ").lvl*spit("statusObj","Bag Space : ").mult.space ; break        
        case "maxLoad" : return (spit("rawLoad") + spit("bagValue")).toFixed(2) ; break
        case "availableLoad" : 
            let myVal1 = undefined
            let myVal2 = undefined
            if(param === "Inventory"){myVal1 = spit("currentLoad","Inventory") ; myVal2 = spit("maxLoad")}
            else {myVal1 = spit("currentLoad") ; myVal2 = player.houseStorage.maxLoad}
            return  Number(myVal2) - Number(myVal1) ; break
        case "inventoryLoad" : return "Inventory Load : " + spit("currentLoad","Inventory") + 
                                "/" + spit("maxLoad") ; break
        case "actionsToMax" : return player.preferences.filter(x=>x.label==="actionsToMax")[0] ; break
        case "currentAction" : return player.actions.filter(x=>x.label === param)[0] ; break
        case "currentPreference" : return player.preferences.filter(x=>x.label === param)[0].setTo ; break
        case "actionTarget" : return player.actions.filter(x=>x.label === param)[0].payout ; break
        case "distanceTo": let dist2 = spit("destMenuObj",param).dist
            let dist1 = spit("statusObj","Current Location : ").value === "Start" ? 0 : 
            spit("destMenuObj",spit("statusObj","Current Location : ").value).dist
            return (dist2 - dist1) > -1 ? (dist2 - dist1) :  ((dist2 - dist1)*-1) ; break
        case "filterActions" : 
            return player.actions.filter(x=>x.destination===spit("statusObj","Current Location : ").goTo && 
                    x.locked===false) ; break
        case "getStatNbt" :
            let refPay = param[0]
            let refStat = param[1]
            if(refStat.value === refStat.cap)
                {return 0}
            else {
                switch(spit("currentPreference","actionsToMax")){
                    case "Eco" : return Math.floor((refStat.cap - refStat.value)/refPay.min) ; break
                    case "Full" : return Math.ceil((refStat.cap - refStat.value)/refPay.min) ; break
                    default : console.log("unknown actionmax type") 
                }} break
        case "itemLoad" :
            val1 = (param.baseLoad * param.canStack.quantity)
            if(param.isFilled.value > 0){val1 += (param.isFilled.value * param.isFilled.unitLoad)}
            return val1 ; break
        case "itemLoad_Details" :
            if(param.isFilled.value > 0){return " (base "+param.baseLoad.toFixed(2)+" + "+
                param.isFilled.value+" "+param.isFilled.label+")"} ; break
        case "currentLoad" :
            let myTtl = 0
            let refInv = undefined
            if(param === "Inventory")
                {refInv = player.inventory}
            else{refInv = player.houseStorage.items}
            refInv.forEach((x)=>{myTtl += spit("itemLoad",x)})
            return myTtl.toFixed(2) ; break
        case "inventoryInfo" :
            switch(param){
               case "Home Storage" :
                   return player.houseStorage.items.length + " Item(s) listed in Storage.<br>Home Storage Load : " 
                   +spit("currentLoad") + "/" + player.houseStorage.maxLoad.toFixed(2)+"<br>"+
                   "(Carry)" + spit("inventoryLoad");
                   break
               case "Inventory" :
                   return player.inventory.length + " Item(s) listed in Inventory" +
                   "(Carry)" + spit("inventoryLoad")
                   break
            }
             
            break
            
        case "fromGrp_X_elemContaining_Y" :
            let thisEl = undefinede
            let thisGrp = document.getElementsByName(param[0])
            thisGrp.forEach((x)=>{if(x.innerHTML.includes(param[1])){thisEl = getID(x.id)}})
            return thisEl ; break
        default : console.log("not found")
    }}

    

function addEle({
    addToTop = false,
    dad = undefined,
    what = "div",
    text = "",
    setID = "",
    setClass = "none",
    isInput = false,
    disabled = false,
    setName = "",
    setVal = "",
    min = "",
    max = "",
    setFunc = undefined,
    textC = "",
    backC = "",
    backG = "",
    height = "",
    minHeight = "",
    width = "",
    minWidth = "",
    border = "",
    radius = "",
    radiusTL = "",
    radiusTR ="",
    radiusBL = "",
    radiusBR = "",
    padding = "",
    paddingT = "",
    paddingB = "",
    paddingL = "",
    paddingR = "",
    margin = "",
    marginT="",
    marginL="",
    marginR="",
    marginB="",
    display = "",
    justifyR = false,
    alignItems = "",
    textA = "",
    overflowX = "",
    flDir = "",
    justifyC = "",
    log = false}){

    let thisObj = undefined

    if(!isInput){
        thisObj = document.createElement(what)
    } else {
        thisObj = document.createElement("input"); thisObj.setAttribute("type",what)
    }

    if(text!==""){thisObj.innerHTML = text}

    if(setID!==""){thisObj.setAttribute("id",setID)}

    if(setClass!=="none"){thisObj.setAttribute("class",setClass)}

    if(setName!==""){thisObj.setAttribute("name",setName)}

    if(setVal!==""){thisObj.setAttribute("value",setVal)}

    if(min!==""){thisObj.min = min}
    if(max!==""){thisObj.max = max}

    if(setFunc){
        switch(what){
            case "div" : thisObj.addEventListener("click",setFunc) ; break
            case "radio" : case "range" : thisObj.addEventListener("change",setFunc) ; break
            case "input" : thisObj.addEventListener("input",setFunc) ; break

            default : console.log("missing correct addeventlistener here")
            } 
        }

    if(textC!==""){thisObj.style.color = textC}

    if(backC!==""){thisObj.style.backgroundColor = backC}

    if(backG!==""){thisObj.style.background = backG}

    if(height!==""){thisObj.style.height = height}

    if(minHeight!==""){thisObj.style.minHeight = minHeight}

    if(width!==""){thisObj.style.width = width}

    if(minWidth!==""){thisObj.style.minWidth=minWidth}

    if(border!==""){thisObj.style.border = border}

    if(radius!==""){thisObj.style.borderRadius = radius}
    if(radiusTL!==""){thisObj.style.borderTopLeftRadius = radiusTL}
    if(radiusTR!==""){thisObj.style.borderTopRightRadius = radiusTR}
    if(radiusBL!==""){thisObj.style.borderBottomLeftRadius = radiusBL}
    if(radiusBR!==""){thisObj.style.borderBottomRightRadius = radiusBR}

    if(padding!==""){thisObj.style.padding=padding}
    if(paddingT!==""){thisObj.style.paddingTop =paddingT}
    if(paddingB!==""){thisObj.style.paddingBottom =paddingB}
    if(paddingL!==""){thisObj.style.paddingLeft=paddingL}
    if(paddingR!==""){thisObj.style.paddingRight=paddingR}

    if(margin!==""){thisObj.style.margin=margin}
    if(marginT!==""){thisObj.style.marginTop=marginT}
    if(marginL!==""){thisObj.style.marginLeft=marginL}
    if(marginR!==""){thisObj.style.marginRight=marginR}
    if(marginB!==""){thisObj.style.marginBottom=marginB}

    if(display!==""){thisObj.style.display=display}

    if(disabled){thisObj.disabled = true}

    if(justifyR){thisObj.style.justifyContent = "right"}

    if(alignItems!==""){thisObj.style.alignItems = alignItems}

    if(textA!==""){thisObj.style.textAlign = textA}

    if(overflowX !== ""){thisObj.style.overflowX = overflowX}

    if(flDir !== ""){thisObj.style.flexDirection = flDir}

    if(justifyC !== ""){thisObj.style.justifyContent = justifyC}

    if(log){
        console.log(setVal)
        console.log(dad)
        console.log(setClass)
        console.log(isInput)
        }

    if(addToTop)
        {dad.prepend(thisObj)}
    else
        {dad.appendChild(thisObj)}
    
    return thisObj
}


let btnTxt={
    status:"Status",inventory:"Inventory",city:"City",Forest:"Forest",
    doWhat:"What could I do ? ..",
    stMiss:"Start Mission",
    chkProg:"Check Progress",
    abtMiss:"Abort Mission",
    confAbt:"Confirm Abort ??",
    complMiss: "Complete Mission",
    yes:"Yes",no:"No",
    preferences:"Preferences",
}


let colors = {gray:"gray",brown:"brown",green:"green",black:"black",lime:"lime",
darkslategrey:"darkslategrey",olive:"olive",chocolate:"chocolate",white:"white",
teal:"teal",red:"red",silver:"silver",darkkhaki:"darkkhaki",dodgerblue:"dodgerblue",
royalblue:"royalblue",yellow:"yellow"}


let player = {
    destinations:{
        menu:[
        {label:"Status",color:colors.brown,showBtn:true,showTab:false},
        {label:"Inventory",color:colors.chocolate,showBtn:false,showTab:false},
        {label:"Home",dist:0,color:colors.brown,showBtn:true,showTab:false,
        source:["Water:Well","Food:Fields"]},
        {label:"City",dist:10,color:colors.darkslategrey,showBtn:false,showTab:false,particle:" to the ",
        source:["Water:Fountain"]},
        {label:"Forest",dist:15,color:colors.green,showBtn:false,showTab:false,particle:" to the ",
        source:["Water:River"]},
        {label:"Mine",dist:20,color:colors.green,showBtn:false,showTab:false,particle:" to the ",},        
        {label:"Dark Cave",dist:10,color:colors.green,showBtn:false,showTab:false,particle:" to the ",},
        ],
        city:[
        {label:"Shop",color:colors.darkslategrey,showBtn:true,showTab:false},
        {label:"School",color:colors.darkslategrey,showBtn:false,showTab:true},
        ],
        },
    status:[
        {label:"Current Location : ",value:"Home",goTo:"",traveling:false,},
        {label:"Health : ",value:10,cap:10,},
        {label:"Strength : ",value:5,cap:5,},
        {label:"Vigor : ",value:50,cap:50,},
        {label:"Water : ",value:25,cap:25,},
        {label:"Food : ",value:40,cap:40,},
        {label:"Gold : ",value:0,cap:20,lvl:1,mult:{space:20,cost:50},},
        {label:"Bag Space : ",value:0,lvl:0,mult:{space:20,cost:30},},
        ],
    preferences:[
        {label:"actionsToMax",text:'Actions with "to Max" setting :',setTo:"Eco",
            inputs:[
            {type:"radio",value:"Eco",tip:"repeat closest to max, avoiding waste when 1 more action goes over the cap."},
            {type:"radio",value:"Full",tip:"repeat until cap is reached no matter what"}
            ]} 
        ],
    actions:[
        {destination:"Home",locked:false,label:"Rest",particle:"refill",
        btnColor:colors.brown,
        require:[],
        cost:[{type:"status",label:"Water : ",value:1,max:1},{type:"status",label:"Food : ",value:1,max:1}],
        payout:[{type:"status",label:"Vigor : ",min:5,max:5}],
        time:6,
        customize:[
            {type:"radio",value:"1 Time",},
            {type:"radio",value:"to Max",},
        ],
        setTo:"1 Time",
        clickFunc:restHome,
        },

        {destination:"Home",locked:false,label:"Regen",particle:"refill",
        btnColor:colors.brown,
        require:[],
        cost:[{type:"status",label:"Water : ",value:1,max:1},{type:"status",label:"Food : ",value:1,max:1}],
        payout:[{type:"status",label:"Health : ",min:5,max:7}],
        time:6,
        customize:[
            {type:"radio",value:"1 Time",},
            {type:"radio",value:"to Max",}
        ],
        setTo:"1 Time",
        clickFunc:restHome,
        },



        {destination:"Forest",locked:false,label:"Look For Flowers",particle:"",
        btnColor:colors.green,
        require:[],
        cost:[{type:"status",label:"Water : ",value:1,max:1},{type:"status",label:"Food : ",value:2,max:2}],
        payout:[{type:"inventory",label:"Flower",min:1,max:3}],
        time:5,
        customize:[],
        setTo:""
        }
    ],
    inventory:[],
    houseStorage:{maxLoad:200,items:[],},
    misc:[{label:"start",value:true},],
    missions:{rank:0,label:"Current Mission : ",current:"None",nowOnBtn:btnTxt.doWhat,},
}


class Item {
    constructor({
        label="",
        tip="",
        toDisplay=[],
        canBring="always",
        canStack={value:false,quantity:0},
        durability=1,
        baseLoad=0.1,
        isFilled={value:0,cap:0,unitLoad:0,label:""},
        buy={quantity:1,value:1},
        sell={quantity:1,value:1},
        destinationAction=[],
        inventoryAction=[],
    }){
        this.label=label
        this.tip=tip
        this.toDisplay=toDisplay
        this.canBring=canBring
        this.canStack=canStack
        this.durability=durability
        this.baseLoad=baseLoad
        this.isFilled=isFilled
        this.buy=buy
        this.sell=sell
        this.destinationAction=destinationAction
        this.inventoryAction=inventoryAction
    }

    get Me(){
        return this.label + " > " + this.load 
    }
}

let items = []

items.push(
    /*
    new Item({
        label="",
        canBring=true,
        load=0.1,
        durability=0,
        buy={quantity:1,value:1},
        sell={quantity:1,value:1},
        addAction:[],
        isFilled={filled:false,label:""},
    })
    */

    new Item({
        label:"Small Water Tank",
        tip:"-You can drink from it<br>-Fill items like Pouch<br>-When empty can be moved<br>-Refill it when needed.",
        toDisplay:[{for:"Home",details:["Quantity","Durability","Load"]}],
        canBring:"empty",
        canStack:{value:false,quantity:1},
        durability:500,
        baseLoad:20,
        isFilled:{value:50,cap:50,unitLoad:0.1,label:"Water"},
        buy:{canBuy:true,quantity:1,value:50},
        sell:{canSell:true,quantity:1,value:20},
        destinationAction:[
            {label:"Drink",particle:" from ",require:[{type:"self",condition:"filled",value:true}],},
            {label:"Refill",particle:" from ",require:[{type:"self",condition:"isFilled",value:"<cap"},
            {type:"currentLocation",condition:"misc",label:"Water Source"},]}
        ],
        inventoryAction:[],
    })
    ,
    new Item({
        label:"Small Water Pouch",
        toDisplay:[{for:"Home",details:["Quantity","Durability","Load"]}],
        canBring:"always",
        canStack:{value:false,quantity:1},
        durability:100,
        baseLoad:0.2,
        isFilled:{value:0,cap:25,unitLoad:0.1,label:"Water"},
        buy:{canBuy:true,quantity:1,value:5},
        sell:{canSell:true,quantity:1,value:1},
        destinationAction:[],
        inventoryAction:[
            {label:"Drink",particle:" from ",require:[{type:"self",condition:"isFilled",value:">0"}]},
            {label:"Refill",particle:" from ",require:[{type:"self",condition:"isFilled",value:"<cap"},
                {type:"currentLocation",condition:"misc",label:"Water Source"},]}
        ],
    })
    ,
    new Item({
        label:"Small Food Container",
        toDisplay:[{for:"Home",details:["Quantity","Durability","Load"]}],
        canBring:"empty",
        canStack:{value:false,quantity:1},
        durability:500,
        baseLoad:30,
        isFilled:{value:80,cap:80,unitLoad:0.2,label:"Food"},
        buy:{canBuy:true,quantity:1,value:75},
        sell:{canSell:true,quantity:1,value:30},
        destinationAction:[
            {label:"Eat",particle:" from ",require:[{type:"self",condition:"filled",value:true}],},
            {label:"Refill",particle:" from ",require:[{type:"self",condition:"isFilled",value:"<cap"},
            {type:"currentLocation",condition:"misc",label:"Food Source"},]}
        ],
        inventoryAction:[],
    })
    ,
    new Item({
        label:"Small Food Pack",
        tip:"Used to take out food, need to be refilled.",
        toDisplay:[{for:"Home",details:["Quantity","Durability","Load"]}],
        canBring:"always",
        canStack:{value:false,quantity:1},
        durability:100,
        baseLoad:0.2,
        isFilled:{value:0,cap:25,unitLoad:0.2,label:"Food"},
        buy:{canBuy:true,quantity:1,value:5},
        sell:{canSell:true,quantity:1,value:1},
        destinationAction:[],
        inventoryAction:[
            {label:"Eat",particle:" from ",require:[{type:"self",condition:"isFilled",value:">0"}]},
            {label:"Refill",particle:" from ",require:[{type:"self",condition:"isFilled",value:"<cap"},
                {type:"currentLocation",condition:"source",value:"Water"},]}
        ],
    })
    ,
    new Item({
        label:"Small Health Potion",
        tip:"Will refill your Health +10 (cannot refill more than cap)",
        toDisplay:[{for:"Home",details:["Quantity","Durability","Load"]}],
        canBring:"always",
        canStack:{value:true,quantity:1},
        durability:1,
        baseLoad:0.2,
        isFilled:{value:0,cap:0,unitLoad:0,label:""},
        buy:{canBuy:true,quantity:1,value:10},
        sell:{canSell:true,quantity:1,value:3},
        destinationAction:[],
        inventoryAction:[
            {label:"Drink",type:"Status",target:"Health",value:10},
        ],
    })
    ,
    new Item({
        label:"Flower",
        toDisplay:[{for:"Home",details:["Quantity","Durability","Load"]}],
        canBring:"always",
        canStack:{value:true,quantity:1},
        durability:1,
        baseLoad:0.2,
        isFilled:{value:0,cap:0,unitLoad:0,label:""},
        buy:{canBuy:true,quantity:20,value:2},
        sell:{canSell:true,quantity:20,value:1},
        destinationAction:[],
        inventoryAction:[],
    })
    ,

)



let faintScroll = [
    "Your Health dropped to 0, you Fainted",
    "During your time out some thieves found you and took your possessions",
    "Later a hunter found you and returned you to your house",
    "He helped you recover. You thanked him and he left.",
    ""
]

function restHome(e){
    focus = e.srcElement.innerHTML
    console.log(focus)
}


function youFainted(){
    getID("tabTravel").style.display = "none"
    getID("tab"+spit("statusObj","Current Location : ").value).style.display = "none"
    getID("tab"+spit("statusObj","Current Location : ").goTo).style.display = "none"
    thisEl = spit("statusObj","Current Location : ")
    info.innerHTML = ""
    info.style.backgroundColor = colors.black
    info.style.color = colors.red
    let nbt = 0
    info.innerHTML = faintScroll[nbt]
    thisIdx = setInterval(()=>{
        nbt++
        if(nbt < faintScroll.length )
            {info.innerHTML = faintScroll[nbt]}
        else {
            clearInterval(thisIdx)
            info.style.backgroundColor = colors.gray
            info.style.color = colors.black
            info.innerHTML = "Now resting at Home ..."
            thisEl.value = "Home"
            thisEl.goTo = "Home"
            let thisGrp = document.getElementsByName("statusGrp")
            thisGrp[0].innerHTML = thisEl.label + thisEl.value

            thisEl = spit("statusObj","Health : ")
            thisEl.value = thisEl.cap
            thisGrp[1].innerHTML = thisEl.label + thisEl.value + "/" + thisEl.cap

            thisEl = spit("statusObj","Vigor : ")
            thisEl.value = thisEl.cap
            thisGrp[3].innerHTML = thisEl.label + thisEl.value + "/" + thisEl.cap

            thisEl = spit("statusObj","Water : ")
            thisEl.value = thisEl.cap
            thisGrp[4].innerHTML = thisEl.label + thisEl.value + "/" + thisEl.cap

            thisEl = spit("statusObj","Food : ")
            thisEl.value = thisEl.cap
            thisGrp[5].innerHTML = thisEl.label + thisEl.value + "/" + thisEl.cap

            thisEl = spit("statusObj","Gold : ")
            thisEl.value = 0
            thisGrp[6].innerHTML = thisEl.label + thisEl.value + "/" + thisEl.cap

            player.inventory = []
        }
        },4000)
}

let missions = [
    {rank:0,
    label:"Meet mother Nature",
    status:"available",
    job:[
        {type:"inventory",label:"Get Flower",quantity:20,text:"find 20 flowers in the Forest",}
    ],
    reward:[
        {type:"unlock",value:true,refID:"menuCity",text:"unlock access to the City",}
    ],
    startWith:[
        {type:"unlock",value:true,refID:"menuForest",text:"Access to the Forest",}
    ],
    required:[

    ]},

    {rank:0,
    label:"For a few coins",
    status:"available",
    job:[
        {type:"inventory",label:"Get Gold",quantity:1,text:"sell your flowers in the City Shop",}
    ],
    reward:[
        {type:"unlock",refID:"menuCity",text:"unlock some more ...",}
    ],
    startWith:[

    ],
    required:[
        {type:"inventory",label:"Flower",quantity:20,text:"Have 20 Flowers in Inventory",},
    ]},

]


