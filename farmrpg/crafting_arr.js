
let blackList = [
    "gumpygazebo"
]

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
    fontS = "",
    fontB = "",
    backC = "",
    backG = "",
    height = "",
    minHeight = "",
    maxHeight = "",
    width = "",
    minWidth = "",
    maxWidth = "",
    border = "",
    borderL = "",
    borderR = "",
    borderT = "",
    borderB = "",
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
    visibility = "",
    justifyR = false,
    alignItems = "",
    textA = "",
    overflow = "",
    overflowX = "",
    flDir = "",
    flWrap = "",
    justifyC = "",
    cursor = "",
    tableLayout = "",
    imgSize = "",
    img2Sizes = "",
    imgSrc = "",
    imgFullSrc = "",
    accentCol = "",
    position = "",
    top = "",
    left = "",
    zIdx = "",
    userSelect = "",
    colSpan = "",
    rowSpan = "",
    url = "",
    log = false}){

    let thisObj = undefined

    if(!isInput){
        if(what==="img" || what==="image"){
            if(img2Sizes!==""){thisObj = 
                new Image(Number(img2Sizes.split(":")[0]),Number(img2Sizes.split(":")[1]))}
            else if(imgSize!==""){thisObj = new Image(imgSize,imgSize)}
            else{thisObj = new Image()}
            
            if(imgFullSrc!==""){thisObj.src = imgFullSrc}
            else{thisObj.src = path1 + imgSrc + path2}
            }
        else
            {thisObj = document.createElement(what)}
    } else {
        thisObj = document.createElement("input"); thisObj.setAttribute("type",what)
    }

    if(url!==""){
        thisObj = document.createElement("a")
        thisObj.setAttribute("href","mailto:"+url)
        thisObj.innerHTML = url
    }

    if(accentCol!==""){thisObj.style.accentColor = accentCol}

    if(text!==""){thisObj.innerHTML = text}

    if(setID!==""){thisObj.setAttribute("id",setID)}

    if(setClass!=="none"){thisObj.setAttribute("class",setClass)}

    if(setName!==""){thisObj.setAttribute("name",setName)}

    if(setVal!==""){thisObj.setAttribute("value",setVal)}

    if(min!==""){thisObj.min = min}
    if(max!==""){thisObj.max = max}

    if(setFunc){
        switch(what){
            case "div" : case "td" : thisObj.addEventListener("click",setFunc) ; break
            case "radio" : case "range" : case "checkbox" : thisObj.addEventListener("change",setFunc) ; break
            case "input" : thisObj.addEventListener("input",setFunc) ; break
            case "img" : thisObj.addEventListener("click",setFunc) ; break
            default : console.log("missing correct addeventlistener here")
            } 
        }

    if(textC!==""){thisObj.style.color = textC}

    if(fontS!==""){thisObj.style.fontSize = fontS}

    if(fontB!==""){thisObj.style.fontWeight = fontB}

    if(backC!==""){thisObj.style.backgroundColor = backC}

    if(backG!==""){thisObj.style.background = backG}

    if(height!==""){thisObj.style.height = height}
    if(minHeight!==""){thisObj.style.minHeight = minHeight}
    if(maxHeight!==""){thisObj.style.maxHeight = maxHeight}

    if(width!==""){thisObj.style.width = width}
    if(minWidth!==""){thisObj.style.minWidth=minWidth}
    if(maxWidth!==""){thisObj.style.maxWidth=maxWidth}

    if(border!==""){thisObj.style.border = border}
    if(borderL!==""){thisObj.style.borderLeft = borderL}
    if(borderR!==""){thisObj.style.borderRight = borderR}
    if(borderT!==""){thisObj.style.borderTop = borderT}
    if(borderB!==""){thisObj.style.borderBottom = borderB}

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

    if(visibility!==""){thisObj.style.visibility = visibility}

    if(disabled){thisObj.disabled = true}

    if(justifyR){thisObj.style.justifyContent = "right"}

    if(alignItems!==""){thisObj.style.alignItems = alignItems}

    if(textA!==""){thisObj.style.textAlign = textA}

    if(overflow !== ""){thisObj.style.overflow = overflow}
    if(overflowX !== ""){thisObj.style.overflowX = overflowX}

    if(flDir !== ""){thisObj.style.flexDirection = flDir}

    if(flWrap !== ""){thisObj.style.flexWrap = flWrap}

    if(justifyC !== ""){thisObj.style.justifyContent = justifyC}

    if(cursor !== ""){thisObj.style.cursor = cursor}

    if(tableLayout!==""){thisObj.style.tableLayout = tableLayout}

    if(position !==""){thisObj.style.position = position}

    if(top !==""){thisObj.style.top = top}
    if(left !==""){thisObj.style.left = top}

    if(zIdx!==""){thisObj.style.zIndex = zIdx}

    if(userSelect!==""){thisObj.style.userSelect = userSelect}

    if(colSpan!==""){thisObj.colSpan = colSpan}
    if(rowSpan!==""){thisObj.rowSpan = rowSpan}

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

function spanText(spanColor,spanTxt){return `<span style="color:`+spanColor+`;">`+spanTxt+"</span>"}

function getID(id){return document.getElementById(id)}

function cleanParent(parent){while(parent.children.length >0){parent.removeChild(parent.lastChild)}}

function nBr(text){return text.includes(",") ? Number(text.replace(",","")) : Number(text)}

const romans = [
    "I","II","III","IV","V","VI","VII","VIII","IX","X",
   "XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX",
   "XXI","XXII","XXIII","XXIV","XXV","XXVI","XXVII","XXVIII","XXIX","XXX",
   "XXXI","XXXII","XXXIII","XXXIV","XXXV","XXXVI","XXXVII","XXXVIII","XXXIX","XL",
   "XLI","XLII","XLIII","XLIV","XLV","XLVI","XLVII","XLVIII","XLIX","L",
   "LI","LII","LIII","LIV","LV","LVI","LVII","LVIII","LIX","LX",
   "LXI","LXII","LXIII","LXIV","LXV","LXVI","LXVII","LXVIII","LXIX","LXX",
   "LXXI","LXXII","LXXIII","LXXIV","LXXV","LXXVI","LXXVII","LXXVIII","LXXIX","LXXX",
   "LXXXI","LXXXII","LXXXIII","LXXXIV","LXXXV","LXXXVI","LXXXVII","LXXXVIII","LXXXIX","XC",
   "XCI","XCII","XCIII","XCIV","XCV","XCVI","XCVII","XCVIII","XCIX","C"
   ]
   


let crafts = [
    {label:"Board",silver:1,exp:25,lvl:1,sell:undefined,pet:true,
    components:[{label:"Wood",quantity:5},],},
    
    {label:"Bucket",silver:5,exp:250,lvl:1,sell:90,pet:true,give:[],
    components:[{label:"Board",quantity:5},{label:"Iron",quantity:1},],},
    
    {label:"Grape Juice",silver:500,exp:100,lvl:1,sell:60000,pet:true,
    components:[{label:"Glass Bottle",quantity:1},{label:"Grapes",quantity:200},],},
    
    {label:"Iron Cup",silver:15,exp:100,lvl:1,sell:165,pet:true,give:[],
    components:[{label:"Iron",quantity:3},{label:"Stone",quantity:1},],},
    
    {label:"Leather",silver:25,exp:250,lvl:1,sell:250,pet:true,give:[],
    components:[{label:"Hide",quantity:2},],},
    
    {label:"Nailed Board",silver:1,exp:1,lvl:1,sell:10,
    components:[{label:"Board",quantity:1},{label:"Nails",quantity:1},],},
    
    {label:"Wine",silver:250,exp:2000,lvl:1,sell:1000,pet:true,
    components:[{label:"Glass Bottle",quantity:1},{label:"Grapes",quantity:100},],},
    
    {label:"Wooden Box",silver:10,exp:200,lvl:1,sell:165,give:[],
    components:[{label:"Nails",quantity:6},{label:"Wooden Plank",quantity:6},],},
    
    {label:"Wooden Plank",silver:2,exp:50,lvl:1,sell:2,
    components:[{label:"Board",quantity:4},{label:"Nails",quantity:4},],},
    
    {label:"Green Parchment",silver:2,exp:100,lvl:2,sell:50,give:[],
    components:[{label:"Fern Leaf",quantity:3},],},
    
    {label:"Hammer",silver:10,exp:350,lvl:2,sell:150,pet:true,give:[],
    components:[{label:"Board",quantity:1},{label:"Iron",quantity:1},{label:"Mushroom Paste",quantity:1},],},
    
    {label:"Purple Parchment",silver:2,exp:100,lvl:2,sell:50,give:[],
    components:[{label:"Purple Flower",quantity:3},],},
    
    {label:"White Parchment",silver:2,exp:100,lvl:2,sell:50,
    components:[{label:"Feathers",quantity:3},],},
    
    {label:"Axe",silver:25,exp:450,lvl:3,sell:200,pet:true,give:[],
    components:[{label:"Board",quantity:1},{label:"Iron",quantity:1},{label:"Mushroom Paste",quantity:1},
    {label:"Nails",quantity:2},{label:"Stone",quantity:1},],},
    
    {label:"Broom",silver:15,exp:250,lvl:3,sell:300,
    components:[{label:"Board",quantity:1},{label:"Straw",quantity:1},],},
    
    {label:"Mushroom Paste",silver:2,exp:25,lvl:3,sell:50,pet:true,give:[],
    components:[{label:"Mushroom",quantity:3},],},
    
    {label:"Iron Ring",silver:10,exp:25,lvl:4,sell:110,pet:true,
    components:[{label:"Iron",quantity:2},{label:"Stone",quantity:1},],},
    
    {label:"Shimmer Stone",silver:5,exp:250,lvl:4,sell:25,pet:true,give:[],
    components:[{label:"Unpolished Shimmer Stone",quantity:2},],},
    
    {label:"Shovel",silver:45,exp:550,lvl:4,sell:300,pet:true,give:[],
    components:[{label:"Board",quantity:1},{label:"Iron",quantity:2},{label:"Mushroom Paste",quantity:1},
    {label:"Stone",quantity:1},],},
    
    {label:"Amethyst Necklace",silver:50,exp:1000,lvl:5,sell:800,
    components:[{label:"Amethyst",quantity:1},{label:"Iron Ring",quantity:2},],},
    
    {label:"Aquamarine Ring",silver:50,exp:1000,lvl:5,sell:750,
    components:[{label:"Aquamarine",quantity:1},{label:"Iron Ring",quantity:1},{label:"Mushroom Paste",quantity:1},],},
    
    {label:"Glass Bottle",silver:25,exp:150,lvl:5,sell:10,pet:true,
    components:[{label:"Glass Orb",quantity:1},{label:"Stone",quantity:1},],},
    
    {label:"Glass Orb",silver:10,exp:300,lvl:5,sell:60,pet:true,give:[],
    components:[{label:"Shimmer Stone",quantity:2},{label:"Stone",quantity:1},],},
    
    {label:"Green Dye",silver:2,exp:500,lvl:5,sell:35,pet:true,give:[],
    components:[{label:"Fern Leaf",quantity:6},{label:"Glass Bottle",quantity:1},],},
    
    {label:"Lemonade",silver:2,exp:500,lvl:5,sell:35,pet:true,give:[],
    components:[{label:"Glass Bottle",quantity:1},{label:"Lemon",quantity:6},],},
    
    {label:"Orange Juice",silver:2,exp:500,lvl:5,sell:35,pet:true,give:[],
    components:[{label:"Glass Bottle",quantity:1},{label:"Orange",quantity:6},],},
    
    {label:"Twine",silver:10,exp:250,lvl:5,sell:150,pet:true,give:[],
    components:[{label:"Straw",quantity:2},{label:"Wood",quantity:1},],},
    
    {label:"Green Diary",silver:10,exp:200,lvl:6,sell:150,
    components:[{label:"Green Parchment",quantity:1},{label:"Mushroom Paste",quantity:1},
    {label:"White Parchment",quantity:1},],},
    
    {label:"Purple Diary",silver:10,exp:200,lvl:6,sell:150,
    components:[{label:"Mushroom Paste",quantity:1},{label:"Purple Parchment",quantity:1},
    {label:"White Parchment",quantity:1},],},
    
    {label:"Lemon Quartz Ring",silver:75,exp:1000,lvl:7,sell:1500,
    components:[{label:"Iron Ring",quantity:1},{label:"Lemon Quartz",quantity:1},
    {label:"Mushroom Paste",quantity:1},],},
    
    {label:"Sturdy Box",silver:15,exp:500,lvl:7,sell:275,
    components:[{label:"Iron",quantity:2},{label:"Nails",quantity:6},{label:"Wooden Plank",quantity:6},],},
    
    {label:"Coin Purse",silver:25,exp:750,lvl:8,sell:250,pet:true,
    components:[{label:"Iron Ring",quantity:1},{label:"Leather",quantity:2},],},
    
    {label:"Leather Diary",silver:25,exp:250,lvl:8,sell:250,give:[],
    components:[{label:"Leather",quantity:1},{label:"Mushroom Paste",quantity:1},{label:"White Parchment",quantity:1},],},
    
    {label:"Looking Glass",silver:50,exp:2500,lvl:8,sell:250,
    components:[{label:"Board",quantity:3},{label:"Glass Orb",quantity:1},{label:"Iron",quantity:1},],},
    
    {label:"Ruby",silver:50,exp:350,lvl:8,sell:1500,
    components:[{label:"Stone",quantity:1},{label:"Unpolished Ruby",quantity:2},],},
    
    {label:"Wooden Table",silver:10,exp:225,lvl:8,sell:250,give:[],
    components:[{label:"Board",quantity:8},{label:"Nails",quantity:12},{label:"Wooden Plank",quantity:1},],},
    
    {label:"Ladder",silver:10,exp:500,lvl:9,sell:500,pet:true,give:[],
    components:[{label:"Board",quantity:6},{label:"Nails",quantity:8},],},
    
    {label:"Bouquet of Flowers",silver:25,exp:225,lvl:10,sell:undefined,give:[],
    components:[{label:"Blue Flowers",quantity:2},{label:"Orange Flowers",quantity:2},{label:"Red Flowers",quantity:2},
    {label:"Twine",quantity:1},{label:"White Flowers",quantity:2},{label:"White Parchment",quantity:1},
    {label:"Yellow Flowers",quantity:2},],},
    
    {label:"Emerald",silver:100,exp:450,lvl:10,sell:2000,
    components:[{label:"Stone",quantity:2},{label:"Unpolished Emerald",quantity:2},],},
    
    {label:"Ruby Ring",silver:100,exp:1500,lvl:10,sell:2000,pet:true,
    components:[{label:"Iron Ring",quantity:1},{label:"Mushroom Paste",quantity:1},{label:"Ruby",quantity:1},],},
    
    {label:"Wooden Barrel",silver:25,exp:350,lvl:10,sell:315,
    components:[{label:"Board",quantity:10},{label:"Iron",quantity:4},{label:"Nails",quantity:10},],},
    
    {label:"Awl",silver:50,exp:500,lvl:11,sell:500,
    components:[{label:"Iron",quantity:1},{label:"Iron Ring",quantity:2},{label:"Wood",quantity:1},],},
    
    {label:"Wooden Button",silver:10,exp:250,lvl:11,sell:550,give:[],
    components:[{label:"Awl",quantity:1},{label:"Wood",quantity:1},],},
    
    {label:"Black Powder",silver:50,exp:1500,lvl:12,sell:60,give:[],
    components:[{label:"Coal",quantity:3},],},
    
    {label:"Bottle Rocket",silver:100,exp:300,lvl:12,sell:150,
    components:[{label:"Black Powder",quantity:1},{label:"Feathers",quantity:2},{label:"Wood",quantity:3},],},
    
    {label:"Wooden Shield",silver:75,exp:450,lvl:13,sell:500,
    components:[{label:"Iron",quantity:1},{label:"Nails",quantity:4},{label:"Wooden Plank",quantity:1},],},
    
    {label:"Explosive",silver:100,exp:350,lvl:14,sell:300,pet:true,give:[{sender:50},{receiver:50}],
    components:[{label:"Black Powder",quantity:2},{label:"Board",quantity:3},{label:"Feathers",quantity:1},
    {label:"Nails",quantity:6},],},
    
    {label:"Emerald Ring",silver:300,exp:2500,lvl:15,sell:2500,pet:true,
    components:[{label:"Emerald",quantity:1},{label:"Iron Ring",quantity:1},{label:"Mushroom Paste",quantity:1},],},
    
    {label:"Steel",silver:250,exp:100,lvl:15,sell:800,pet:true,
    components:[{label:"Carbon Sphere",quantity:1},{label:"Glass Orb",quantity:1},{label:"Iron",quantity:10},],},
    
    {label:"Horn Canteen",silver:150,exp:2500,lvl:16,sell:2500,
    components:[{label:"Horn",quantity:1},{label:"Iron Ring",quantity:2},{label:"Twine",quantity:1},
    {label:"Wood",quantity:1},],},
    
    {label:"Pearl Necklace",silver:100,exp:1000,lvl:16,sell:1000,
    components:[{label:"Iron Ring",quantity:1},{label:"Pearl",quantity:1},{label:"Twine",quantity:1},],},
    
    {label:"Leather Bag",silver:250,exp:3000,lvl:17,sell:3000,
    components:[{label:"Iron Ring",quantity:4},{label:"Leather",quantity:2},{label:"Twine",quantity:2},],},
    
    {label:"Wizard Hat",silver:300,exp:3300,lvl:17,sell:3300,pet:true,
    components:[{label:"Leather",quantity:2},{label:"Purple Flower",quantity:10},{label:"Twine",quantity:3},],},
    
    {label:"Leather Waterskin",silver:275,exp:3250,lvl:18,sell:3250,
    components:[{label:"Iron Ring",quantity:1},{label:"Leather",quantity:2},{label:"Twine",quantity:2},],},
    
    {label:"Rope",silver:50,exp:1500,lvl:18,sell:100,pet:true,give:[],
    components:[{label:"Twine",quantity:3},],},
    
    {label:"Fishing Net",silver:100,exp:1500,lvl:19,sell:undefined,pet:true,give:[{sender:50},{receiver:1}],
    components:[{label:"Antler",quantity:1},{label:"Iron",quantity:4},{label:"Rope",quantity:2},],},
    
    {label:"Shimmer Topaz",silver:500,exp:2500,lvl:19,sell:2500,pet:true,//pet:true,give:[{sender:50},{receiver:50}],
    components:[{label:"Shimmer Quartz",quantity:3},],},
    
    {label:"Sturdy Shield",silver:500,exp:4000,lvl:20,sell:4000,pet:true,
    components:[{label:"Iron",quantity:6},{label:"Nails",quantity:6},{label:"Wooden Plank",quantity:1},],},
    
    {label:"Magicite",silver:5000,exp:3000,lvl:21,sell:25000,
    components:[{label:"Prism Shard",quantity:3},],},
    
    {label:"Inferno Sphere",silver:1000000,exp:50000,lvl:22,sell:2000000,pet:true,
    components:[{label:"Runestone 01",quantity:1},{label:"Runestone 02",quantity:1},{label:"Runestone 03",quantity:1},
    {label:"Runestone 04",quantity:1},{label:"Runestone 05",quantity:1},{label:"Runestone 06",quantity:1},
    {label:"Runestone 07",quantity:1},{label:"Runestone 08",quantity:1},{label:"Runestone 09",quantity:1},
    {label:"Runestone 10",quantity:1},],},
    
    {label:"Mystic Ring",silver:600,exp:5000,lvl:23,sell:5000,pet:true,
    components:[{label:"Aquamarine",quantity:1},{label:"Emerald",quantity:2},{label:"Iron Ring",quantity:1},
    {label:"Mushroom Paste",quantity:3},{label:"Stone",quantity:1},],},
    
    {label:"Horseshoe",silver:100,exp:1000,lvl:24,sell:1000,pet:true,
    components:[{label:"Iron",quantity:5},{label:"Nails",quantity:7},{label:"Stone",quantity:2},],},
    
    {label:"Leather Belt",silver:150,exp:4000,lvl:25,sell:5500,
    components:[{label:"Awl",quantity:1},{label:"Leather",quantity:3},{label:"Steel Buckle",quantity:1},],},
    
    {label:"Magnifying Glass",silver:300,exp:5250,lvl:25,sell:5250,
    components:[{label:"Board",quantity:1},{label:"Glass Orb",quantity:1},{label:"Iron",quantity:3},
    {label:"Iron Ring",quantity:1},],},
    
    {label:"Pitchfork",silver:500,exp:450,lvl:25,sell:2500,
    components:[{label:"Board",quantity:1},{label:"Emberstone",quantity:1},{label:"Iron Ring",quantity:1},
    {label:"Mushroom Paste",quantity:1},{label:"Steel",quantity:2},],},
    
    {label:"Steel Buckle",silver:100,exp:500,lvl:25,sell:2250,
    components:[{label:"Emberstone",quantity:2},{label:"Hammer",quantity:1},{label:"Steel",quantity:1},],},
    
    {label:"Shimmer Ring",silver:1000,exp:5000,lvl:26,sell:5000,pet:true,
    components:[{label:"Iron Ring",quantity:1},{label:"Mushroom Paste",quantity:1},{label:"Shimmer Topaz",quantity:1},],},
    
    {label:"Wooden Sword",silver:250,exp:1750,lvl:27,sell:1750,
    components:[{label:"Board",quantity:1},{label:"Iron",quantity:2},{label:"Twine",quantity:4},],},
    
    {label:"Wooden Spear",silver:100,exp:1750,lvl:28,sell:1800,
    components:[{label:"Arrowhead",quantity:1},{label:"Twine",quantity:2},{label:"Wood",quantity:1},],},
    
    {label:"Apple Cider",silver:5000,exp:100,lvl:30,sell:undefined,pet:true,give:[{sender:50},{receiver:1}],
    components:[{label:"Apple",quantity:40},{label:"Glass Bottle",quantity:1},{label:"Orange",quantity:1},],},
    
    {label:"Green Scarf",silver:1000,exp:1750,lvl:30,sell:3200,
    components:[{label:"Green Dye",quantity:1},{label:"Yarn",quantity:2},],},
    
    {label:"Green Shield",silver:500,exp:5500,lvl:30,sell:5500,pet:true,
    components:[{label:"Green Dye",quantity:1},{label:"Iron",quantity:3},{label:"Wooden Shield",quantity:1},],},
    
    {label:"Wooden Bow",silver:400,exp:2500,lvl:30,sell:2500,
    components:[{label:"Fern Leaf",quantity:1},{label:"Iron",quantity:2},{label:"Twine",quantity:2},{label:"Wood",quantity:4},],},
    
    {label:"Wagon Wheel",silver:250,exp:1750,lvl:31,sell:1750,
    components:[{label:"Board",quantity:12},{label:"Nails",quantity:14},],},
    
    {label:"Treasure Chest",silver:1000,exp:7500,lvl:32,sell:7500,
    components:[{label:"Iron",quantity:12},{label:"Nails",quantity:22},{label:"Wooden Plank",quantity:6},],},
    
    {label:"Jade",silver:500,exp:3000,lvl:33,sell:5000,pet:true,
    components:[{label:"Stone",quantity:1},{label:"Unpolished Jade",quantity:2},],},
    
    {label:"Iced Tea",silver:2500,exp:100,lvl:34,sell:1000,pet:true,give:[],
    components:[{label:"Glass Bottle",quantity:1},{label:"Tea Leaves",quantity:3},],},
    
    {label:"Lava Sphere",silver:2000000,exp:150000,lvl:35,sell:4000000,pet:true,
    components:[{label:"Runestone 11",quantity:1},{label:"Runestone 12",quantity:1},{label:"Runestone 13",quantity:1},
    {label:"Runestone 14",quantity:1},{label:"Runestone 15",quantity:1},{label:"Runestone 16",quantity:1},
    {label:"Runestone 17",quantity:1},{label:"Runestone 18",quantity:1},{label:"Runestone 19",quantity:1},
    {label:"Runestone 20",quantity:1},],},
    
    {label:"Acorn Butter",silver:100,exp:1500,lvl:36,sell:6000,
    components:[{label:"Acorn",quantity:75},{label:"Glass Bottle",quantity:1},],},
    
    {label:"Scissors",silver:250,exp:1750,lvl:37,sell:1750,
    components:[{label:"Iron Ring",quantity:1},{label:"Nails",quantity:1},{label:"Steel",quantity:2},
    {label:"Stone",quantity:1},{label:"Wood",quantity:2},],},
    
    {label:"Jade Charm",silver:1000,exp:8000,lvl:42,sell:15000,
    components:[{label:"Iron Ring",quantity:1},{label:"Jade",quantity:1},{label:"Steel",quantity:2},
    {label:"Stone",quantity:6},],},
    
    {label:"Garnet",silver:750,exp:15000,lvl:43,sell:15000,
    components:[{label:"Stone",quantity:1},{label:"Unpolished Garnet",quantity:2},],},
    
    {label:"Sand",silver:750,exp:250,lvl:44,sell:500,
    components:[{label:"Leather",quantity:1},{label:"Sandstone",quantity:5},],},
    
    {label:"Sturdy Sword",silver:1500,exp:11000,lvl:45,sell:11000,
    components:[{label:"Iron",quantity:2},{label:"Leather",quantity:1},{label:"Mushroom Paste",quantity:1},
    {label:"Steel",quantity:1},],},
    
    {label:"Fancy Pipe",silver:150,exp:5000,lvl:46,sell:5000,
    components:[{label:"Iron",quantity:1},{label:"Iron Ring",quantity:3},{label:"Wood",quantity:2},],},
    
    {label:"Flywheel",silver:50000,exp:2500,lvl:50,sell:10000,
    components:[{label:"Small Gear",quantity:1},{label:"Small Screw",quantity:7},{label:"Steel",quantity:20},],},
    
    {label:"Steel Wire",silver:100,exp:1000,lvl:50,sell:2000,pet:true,
    components:[{label:"Carbon Sphere",quantity:1},{label:"Iron",quantity:10},{label:"Stone",quantity:1},],},
    
    {label:"Yarn",silver:100,exp:1750,lvl:50,sell:100,give:[],
    components:[{label:"Twine",quantity:4},],},
    
    {label:"Garnet Ring",silver:1500,exp:30000,lvl:51,sell:30000,
    components:[{label:"Garnet",quantity:1},{label:"Iron Ring",quantity:1},{label:"Mushroom Paste",quantity:1},],},
    
    {label:"Chum",silver:50,exp:25,lvl:52,sell:5000,
    components:[{label:"Bucket",quantity:1},{label:"Grubs",quantity:7},{label:"Minnows",quantity:4},
    {label:"Worms",quantity:10},],},
    
    {label:"Butter Churn",silver:10,exp:500,lvl:53,sell:500,
    components:[{label:"Board",quantity:1},{label:"Wooden Barrel",quantity:1},],},
    
    {label:"Green Cloak",silver:2500,exp:125000,lvl:55,sell:125000,pet:true,
    components:[{label:"Cotton",quantity:1},{label:"Green Dye",quantity:10},{label:"Leather",quantity:5},
    {label:"Twine",quantity:10},],},
    
    {label:"Hourglass",silver:2000,exp:25000,lvl:59,sell:25000,
    components:[{label:"Glass Bottle",quantity:2},{label:"Mushroom Paste",quantity:2},{label:"Sand",quantity:1},
    {label:"Wood",quantity:6},],},
    
    {label:"Magna Core",silver:500000,exp:50000,lvl:60,sell:undefined,
    components:[{label:"Cogwheel",quantity:3},{label:"Flywheel",quantity:2},{label:"Magna Quartz",quantity:25},
    {label:"Seeing Stone",quantity:1},{label:"Small Screw",quantity:10},{label:"Small Spring",quantity:5},
    {label:"Steel",quantity:40},],},
    
    {label:"Sturdy Bow",silver:25000,exp:40000,lvl:60,sell:80000,
    components:[{label:"Mushroom Paste",quantity:2},{label:"Oak",quantity:4},{label:"Steel",quantity:1},
    {label:"Stone",quantity:2},{label:"Twine",quantity:2},],},
    
    {label:"Peach Juice",silver:200,exp:500,lvl:61,sell:3500,give:[],
    components:[{label:"Glass Bottle",quantity:1},{label:"Peach",quantity:10},],},
    
    {label:"Essence of Slime",silver:1500,exp:500,lvl:62,sell:5500,
    components:[{label:"Glass Orb",quantity:1},{label:"Hammer",quantity:1},{label:"Iron Ring",quantity:1},
    {label:"Slimestone",quantity:2},],},
    
    {label:"Unpolished Shimmer Stone",silver:10,exp:50,lvl:65,sell:10,pet:true,give:[],
    components:[{label:"Emberstone",quantity:1},{label:"Sandstone",quantity:1},],},
    
    {label:"Compass",silver:250000,exp:50000,lvl:70,sell:undefined,
    components:[{label:"Aquamarine",quantity:1},{label:"Glass Orb",quantity:1},{label:"Iron Ring",quantity:1},
    {label:"Magna Core",quantity:1},{label:"Ruby",quantity:1},{label:"Small Screw",quantity:4},
    {label:"Twine",quantity:1},{label:"Wood",quantity:2},],},
    
    {label:"Lantern",silver:4000,exp:40000,lvl:70,sell:40000,pet:true,
    components:[{label:"Coal",quantity:1},{label:"Glass Bottle",quantity:1},{label:"Iron",quantity:3},
    {label:"Iron Ring",quantity:1},{label:"Twine",quantity:2},],},
    
    {label:"Salt",silver:10000,exp:5000,lvl:70,sell:50000,pet:true,
    components:[{label:"Hammer",quantity:1},{label:"Salt Rock",quantity:50},],},
    
    {label:"Blue Dye",silver:250,exp:4000,lvl:73,sell:2500,pet:true,give:[{sender:75},{receiver:75}],
    components:[{label:"Blue Feathers",quantity:3},{label:"Glass Bottle",quantity:1},],},
    
    {label:"Purple Dye",silver:250,exp:4000,lvl:73,sell:2500,give:[{sender:75},{receiver:75}],
    components:[{label:"Glass Bottle",quantity:1},{label:"Purple Flower",quantity:10},],},
    
    {label:"Red Dye",silver:250,exp:4000,lvl:73,sell:2500,give:[{sender:75},{receiver:75}],
    components:[{label:"Glass Bottle",quantity:1},{label:"Striped Feather",quantity:2},],},
    
    {label:"Blue Diary",silver:250,exp:3000,lvl:74,sell:5000,
    components:[{label:"Blue Parchment",quantity:1},{label:"Mushroom Paste",quantity:1},
    {label:"White Parchment",quantity:1},],},
    
    {label:"Blue Parchment",silver:75,exp:2750,lvl:74,sell:3000,
    components:[{label:"Blue Feathers",quantity:3},],},
    
    {label:"Blue Twine",silver:10,exp:2500,lvl:74,sell:3000,
    components:[{label:"Blue Dye",quantity:1},{label:"Twine",quantity:1},],},
    
    {label:"Green Twine",silver:10,exp:2500,lvl:74,sell:3000,
    components:[{label:"Green Dye",quantity:1},{label:"Twine",quantity:1},],},
    
    {label:"Purple Twine",silver:10,exp:2500,lvl:74,sell:3000,
    components:[{label:"Purple Dye",quantity:1},{label:"Twine",quantity:1},],},
    
    {label:"Red Diary",silver:250,exp:3000,lvl:74,sell:5000,
    components:[{label:"Mushroom Paste",quantity:1},{label:"Red Parchment",quantity:1},
    {label:"White Parchment",quantity:1},],},
    
    {label:"Red Parchment",silver:75,exp:2750,lvl:74,sell:3000,
    components:[{label:"Striped Feather",quantity:3},],},
    
    {label:"Red Twine",silver:10,exp:2500,lvl:74,sell:3000,
    components:[{label:"Red Dye",quantity:1},{label:"Twine",quantity:1},],},
    
    {label:"Block of Wood",silver:10000,exp:10000,lvl:75,sell:50000,
    components:[{label:"Axe",quantity:1},{label:"Handsaw",quantity:1},{label:"Pine Tree",quantity:1},],},
    
    {label:"Cooking Pot",silver:15000,exp:25000,lvl:75,sell:40000,pet:true,
    components:[{label:"Emberstone",quantity:25},{label:"Iron",quantity:25},{label:"Moonstone",quantity:1},],},
    
    {label:"Fruit Punch",silver:500,exp:500,lvl:75,sell:3500,give:[],
    components:[{label:"Apple",quantity:25},{label:"Glass Bottle",quantity:1},{label:"Grapes",quantity:25},
    {label:"Lemon",quantity:25},{label:"Orange",quantity:25},{label:"Peach",quantity:5},],},
    
    {label:"Handsaw",silver:2300,exp:10000,lvl:75,sell:10000,
    components:[{label:"Awl",quantity:1},{label:"Hammer",quantity:1},{label:"Mushroom Paste",quantity:2},
    {label:"Steel",quantity:2},{label:"Wooden Plank",quantity:1},],},
    
    {label:"Steel Plate",silver:1000,exp:5000,lvl:75,sell:7000,
    components:[{label:"Emberstone",quantity:2},{label:"Small Bolt",quantity:4},{label:"Steel",quantity:2},],},
    
    {label:"Wrench",silver:1000,exp:5000,lvl:75,sell:7000,
    components:[{label:"Emberstone",quantity:5},{label:"Steel",quantity:1},],},
    
    {label:"Corn Husk Doll",silver:50,exp:2500,lvl:76,sell:30000,
    components:[{label:"Corn",quantity:3},{label:"Red Twine",quantity:5},{label:"Wooden Button",quantity:2},],},
    
    {label:"Spoon",silver:750,exp:5500,lvl:76,sell:7500,
    components:[{label:"Axe",quantity:1},{label:"Bone",quantity:1},{label:"Twine",quantity:1},],},
    
    {label:"Pie Pan",silver:5000,exp:25000,lvl:77,sell:50000,pet:true,
    components:[{label:"Emberstone",quantity:25},{label:"Moonstone",quantity:2},{label:"Steel",quantity:10},],},
    
    {label:"Step Ladder",silver:100,exp:5000,lvl:78,sell:30000,
    components:[{label:"Ladder",quantity:2},{label:"Small Bolt",quantity:2},{label:"Steel Plate",quantity:2},],},
    
    {label:"Cannon",silver:8900,exp:27000,lvl:79,sell:110000,
    components:[{label:"Black Powder",quantity:10},{label:"Board",quantity:12},{label:"Emberstone",quantity:10},
    {label:"Machine Part",quantity:6},{label:"Scrap Metal",quantity:25},{label:"Steel",quantity:25},
    {label:"Wagon Wheel",quantity:4},],},
    
    {label:"Fancy Guitar",silver:8550,exp:55000,lvl:80,sell:65000,
    components:[{label:"Iron",quantity:4},{label:"Mushroom Paste",quantity:3},{label:"Oak",quantity:5},
    {label:"Steel Wire",quantity:6},],},
    
    {label:"Linked Lantern",silver:8000,exp:5750,lvl:80,sell:100000,
    components:[{label:"Amethyst",quantity:1},{label:"Aquamarine",quantity:1},{label:"Lantern",quantity:1},
    {label:"Magicite",quantity:1},{label:"Ruby",quantity:1},],},
    
    {label:"Y73841 Detector",silver:250000000,exp:50000,lvl:80,sell:undefined,
    components:[{label:"Compass",quantity:1},{label:"Pocket Watch",quantity:1},{label:"Runestone 17",quantity:1},
    {label:"Scrap Wire",quantity:50},{label:"Small Gear",quantity:3},{label:"Transistor",quantity:50},
    {label:"Y73841 Blueprint",quantity:1},],},
    
    {label:"Corn Oil",silver:1500,exp:25000,lvl:81,sell:83500,pet:true,
    components:[{label:"Corn",quantity:8},{label:"Glass Bottle",quantity:1},{label:"Machine Press",quantity:1},],},
    
    {label:"Machine Press",silver:5000,exp:60000,lvl:81,sell:50000,
    components:[{label:"Board",quantity:10},{label:"Bucket",quantity:1},{label:"Machine Part",quantity:6},
    {label:"Nails",quantity:5},{label:"Steel Plate",quantity:1},],},
    
    {label:"Butter",silver:100,exp:3000,lvl:82,sell:60000,pet:true,
    components:[{label:"Butter Churn",quantity:1},{label:"Milk",quantity:25},{label:"Salt",quantity:1},],},
    
    {label:"Sunflower Oil",silver:125000,exp:50000,lvl:82,sell:2100000,
    components:[{label:"Glass Bottle",quantity:1},{label:"Sunflower",quantity:6},{label:"Twine",quantity:1},],},
    
    {label:"Belt Drive",silver:100,exp:6000,lvl:83,sell:10000,
    components:[{label:"Pulley",quantity:2},{label:"Purple Dye",quantity:1},{label:"Rope",quantity:1},],},
    
    {label:"Metal Spool",silver:100,exp:6500,lvl:83,sell:11000,
    components:[{label:"Broken Pipe",quantity:1},{label:"Coal",quantity:5},{label:"Nails",quantity:2},
    {label:"Scrap Metal",quantity:12},],},
    
    {label:"Spool of Copper",silver:10,exp:6500,lvl:83,sell:50000,
    components:[{label:"Copper Wire",quantity:10},{label:"Metal Spool",quantity:1},],},
    
    {label:"Control Box",silver:800,exp:10000,lvl:84,sell:100000,
    components:[{label:"Broken Pipe",quantity:3},{label:"Machine Part",quantity:10},{label:"Moonstone",quantity:3},
    {label:"Small Screw",quantity:2},{label:"Small Spring",quantity:3},{label:"Steel Plate",quantity:2},],},
    
    {label:"Energy Coil",silver:5000,exp:10000,lvl:84,sell:100000,
    components:[{label:"Glass Orb",quantity:1},{label:"Scrap Wire",quantity:8},{label:"Spool of Copper",quantity:1},
    {label:"Steel",quantity:2},{label:"Transistor",quantity:25},{label:"Wrench",quantity:1},],},
    
    {label:"Kill Switch",silver:250,exp:3000,lvl:84,sell:25000,
    components:[{label:"Broken Pipe",quantity:1},{label:"Emberstone",quantity:3},{label:"Red Dye",quantity:1},
    {label:"Scrap Metal",quantity:5},{label:"Scrap Wire",quantity:2},],},
    
    {label:"Pear Grease",silver:500,exp:3000,lvl:84,sell:10000,
    components:[{label:"Blue Gel",quantity:5},{label:"Glass Bottle",quantity:1},{label:"Prickly Pear",quantity:30},],},
    
    {label:"Power Monitor",silver:900,exp:4500,lvl:85,sell:15000,
    components:[{label:"Broken Pipe",quantity:1},{label:"Copper Wire",quantity:1},{label:"Iron",quantity:10},
    {label:"Pocket Watch",quantity:1},{label:"Transistor",quantity:5},],},
    
    {label:"Fancy Drum",silver:20000,exp:2500,lvl:90,sell:100000,
    components:[{label:"Leather",quantity:2},{label:"Mushroom Paste",quantity:2},{label:"Oak",quantity:15},
    {label:"Yarn",quantity:4},],},
    
    {label:"Arnold Palmer",silver:100,exp:3500,lvl:92,sell:undefined,give:[{sender:99},{receiver:99}],
    components:[{label:"Iced Tea",quantity:1},{label:"Lemonade",quantity:20},],},
    
    {label:"Large Net",silver:100,exp:3500,lvl:92,sell:undefined,pet:true,give:[{sender:99},{receiver:99}],
    components:[{label:"Fishing Net",quantity:25},{label:"Iron Ring",quantity:25},],},
    
    {label:"Polished Boot",silver:500,exp:2500,lvl:93,sell:100000,
    components:[{label:"Corn Oil",quantity:1},{label:"Old Boot",quantity:1},],},
    
    {label:"Pair of Boots",silver:5,exp:2500,lvl:94,sell:210000,
    components:[{label:"Polished Boot",quantity:2},],},
    
    {label:"Blue Purse",silver:850,exp:5500,lvl:95,sell:110000,pet:true,
    components:[{label:"Blue Dye",quantity:1},{label:"Coin Purse",quantity:1},],},
    
    {label:"Purple Bag",silver:1500,exp:5500,lvl:95,sell:105000,
    components:[{label:"Leather Bag",quantity:1},{label:"Purple Dye",quantity:1},],},
    
    {label:"Red Shield",silver:2500,exp:5500,lvl:95,sell:100000,
    components:[{label:"Red Dye",quantity:1},{label:"Steel",quantity:3},{label:"Wooden Shield",quantity:1},],},
    
    {label:"Fancy Chair",silver:25000,exp:3500,lvl:96,sell:750000,
    components:[{label:"Cotton",quantity:6},{label:"Green Dye",quantity:1},{label:"Leather",quantity:4},
    {label:"Nails",quantity:8},{label:"Oak",quantity:50},{label:"Red Dye",quantity:1},{label:"Twine",quantity:8},],},
    
    {label:"Fancy Pan Flute",silver:8000,exp:2750,lvl:96,sell:125000,
    components:[{label:"Blue Dye",quantity:1},{label:"Leather",quantity:1},{label:"Twine",quantity:5},
    {label:"Wood",quantity:9},],},
    
    {label:"Potato Battery",silver:750,exp:4000,lvl:97,sell:55000,
    components:[{label:"Nails",quantity:4},{label:"Potato",quantity:8},{label:"Spool of Copper",quantity:1},
    {label:"Steel Wire",quantity:4},{label:"Transistor",quantity:8},],},
    
    {label:"Red Trunk",silver:7500,exp:6500,lvl:97,sell:200000,
    components:[{label:"Leather",quantity:3},{label:"Nails",quantity:16},{label:"Red Dye",quantity:4},
    {label:"Steel",quantity:8},{label:"Wooden Plank",quantity:6},],},
    
    {label:"Steel Vise",silver:4750,exp:4250,lvl:97,sell:75000,
    components:[{label:"Blue Dye",quantity:2},{label:"Broken Pipe",quantity:1},{label:"Glass Orb",quantity:2},
    {label:"Small Bolt",quantity:2},{label:"Steel",quantity:50},{label:"Wooden Plank",quantity:1},],},
    
    {label:"Amber Cane",silver:50000,exp:17000,lvl:98,sell:300000,
    components:[{label:"Amber",quantity:1},{label:"Bone",quantity:1},{label:"Iron Ring",quantity:2},
    {label:"Mushroom Paste",quantity:1},{label:"Oak",quantity:1},{label:"Sand",quantity:3},],},
    
    {label:"Fancy Table",silver:45000,exp:10000,lvl:98,sell:1250000,
    components:[{label:"Corn Oil",quantity:1},{label:"Glass Orb",quantity:8},{label:"Nails",quantity:32},
    {label:"Oak",quantity:80},{label:"Steel Vise",quantity:1},],},
    
    {label:"Ship in a Bottle",silver:250000,exp:17000,lvl:98,sell:500000,
    components:[{label:"Glass Bottle",quantity:1},{label:"Model Ship",quantity:1},{label:"Mushroom Paste",quantity:3},
    {label:"Oak",quantity:2},{label:"Sand",quantity:2},],},
    
    {label:"Canoe",silver:45000,exp:5000,lvl:99,sell:200000,pet:true,
    components:[{label:"Blue Gel",quantity:10},{label:"Board",quantity:4},{label:"Mushroom Paste",quantity:5},
    {label:"Nails",quantity:10},{label:"Oak",quantity:100},{label:"Rope",quantity:2},],},
    
    {label:"Crossbow",silver:28000,exp:2500,lvl:99,sell:125000,
    components:[{label:"Arrowhead",quantity:1},{label:"Iron",quantity:2},{label:"Iron Ring",quantity:2},
    {label:"Oak",quantity:3},{label:"Steel Wire",quantity:2},],},
    
    {label:"Engine",silver:250000,exp:15000,lvl:99,sell:1000000,
    components:[{label:"Belt Drive",quantity:1},{label:"Control Box",quantity:1},{label:"Energy Coil",quantity:1},
    {label:"Flywheel",quantity:1},{label:"Kill Switch",quantity:1},{label:"Magicite",quantity:1},
    {label:"Pear Grease",quantity:1},{label:"Power Monitor",quantity:1},{label:"Steel",quantity:20},
    {label:"Steel Plate",quantity:1},{label:"Steel Wire",quantity:50},{label:"Transistor",quantity:12},],},
    
    {label:"Fancy Violin",silver:25000,exp:12000,lvl:99,sell:1500000,
    components:[{label:"Moonstone",quantity:4},{label:"Mushroom Paste",quantity:8},{label:"Pine Board",quantity:5},
    {label:"Purple Dye",quantity:3},{label:"Steel",quantity:4},{label:"Steel Plate",quantity:1},
    {label:"Steel Wire",quantity:4},],},
    
    {label:"Flying Machine",silver:350000,exp:17500,lvl:99,sell:1500000,
    components:[{label:"Leather",quantity:10},{label:"Magna Quartz",quantity:4},{label:"Nailed Board",quantity:10},
    {label:"Power Monitor",quantity:1},{label:"Pulley",quantity:4},{label:"Rope",quantity:10},
    {label:"Small Gear",quantity:4},{label:"Small Spring",quantity:6},{label:"Steel Buckle",quantity:2},
    {label:"Steel Wire",quantity:10},],},
    
    {label:"Frost Shield",silver:5000,exp:6500,lvl:99,sell:250000,
    components:[{label:"Blue Gel",quantity:3},{label:"Frost Snapper Shell",quantity:1},{label:"Hammer",quantity:1},
    {label:"Nails",quantity:3},{label:"Red Shield",quantity:1},],},
    
    {label:"Heart Container",silver:1000000000,exp:0,lvl:99,sell:undefined,give:[{sender:99},{receiver:25}],
    components:[{label:"Piece of Heart",quantity:4},],},
    
    {label:"Pair of Gold Boots",silver:10,exp:25000,lvl:99,sell:2000000,
    components:[{label:"Gold Boot",quantity:2},],},
    
] 





let countryStore = [
    {label:"Pepper Seeds",time:1,exp:10,cost:9},
    {label:"Carrot Seeds",time:2,exp:20,cost:18},
    {label:"Pea Seeds",time:3,exp:30,cost:29},
    {label:"Cucumber Seeds",time:4,exp:40,cost:38},
    {label:"Eggplant Seeds",time:5,exp:50,cost:47},
    {label:"Radish Seeds",time:10,exp:100,cost:100},
    {label:"Onion Seeds",time:15,exp:150,cost:159},
    {label:"Hops Seeds",time:20,exp:200,cost:212},
    {label:"Potato Seeds",time:25,exp:250,cost:267},
    {label:"Tomato Seeds",time:30,exp:300,cost:330},
    {label:"Leek Seeds",time:60,exp:600,cost:680},
    {label:"Watermelon Seeds",time:120,exp:840,cost:1400},
    {label:"Corn Seeds",time:240,exp:1680,cost:2960},
    {label:"Cabbage Seeds",time:480,exp:3360,cost:6080},
    {label:"Pine Seeds",time:480,exp:5000,cost:9000},
    {label:"Pumpkin Seeds",time:720,exp:5040,cost:9360},
    {label:"Wheat Seeds",time:1440,exp:10080,cost:19440},
    {label:"Mushroom Seeds",time:90,exp:100,cost:3000},
    {label:"Broccoli Seeds",time:2880,exp:20160,cost:42880},
    {label:"Cotton Seeds",time:5760,exp:40320,cost:84000},
    {label:"Sunflower Seeds",time:8640,exp:60480,cost:126000},
    {label:"Beet Seeds",time:12960,exp:90720,cost:189000},
    {label:"Rice Seeds",time:14400,exp:100000,cost:200000},
    {label:"Nails",cost:1},
    {label:"Iron",cost:50},
    {label:"Welcome Card",cost:1500},
    {label:"Worms",cost:3},
]


let recipes = [
    {folk:"Cecil",recipe:"Shrimp-a-Plenty",level:60,owned:false},
    {folk:"Charles Horsington III",recipe:"Neigh",level:40,owned:false},
    {folk:"George",recipe:"Onion Soup",level:10,owned:false},
    {folk:"Holger",recipe:"Mushroom Stew",level:40,owned:false},
    {folk:"Jill",recipe:"Quandary Chowder",level:50,owned:false},
    {folk:"Lorn",recipe:"Breakfast Boost",level:40,owned:false},
    {folk:"Mariya",recipe:"Breakfast Boost",level:40,owned:false},
    {folk:"ROOMBA",recipe:"Over The Moon",level:20,owned:false},
    {folk:"Rosalie",recipe:"Bone Broth",level:0,owned:false},
    {folk:"Rosalie",recipe:"Red Berry Pie",level:40,owned:false},
    {folk:"Rosalie",recipe:"Concord Grape Pie",level:50,owned:false},
    {folk:"Thomas",recipe:"Cat's Meow",level:30,owned:false},
    {folk:"Vincent",recipe:"Sea Pincher Special",level:50,owned:false},
    {folk:"Mariya",recipe:"Crunchy Omelette",level:50,owned:false,special:"Limited time quest reward. Finish Eggstremely Delicious II"},
    {folk:"Baba Gec",recipe:"Cabbage Stew",level:"?",owned:false,special:"Quest reward. Finish My Cabbages XX(20)"},

//    {folk:"",recipe:"",level:0},
]

let folkGifts = [
    {label:"Beatrix",
    love:["Black Powder","Explosive","Iced Tea","Fireworks"],
    like:["Hops","Coal","Bird Egg","Carbon Sphere","Hammer","Oak"],
    hate:["Worms","Grubs","Horned Beetle","Fire Ant"]},
    
    {label:"Borgen",
    love:["Wooden Box","Cheese","Gold Catfish"],
    like:["Glass Orb","Milk","Gold Carrot","Gold Peas","Gold Cucumber","Slimestone"],
    hate:["Worms","Purple Flower","Old Boot","Grubs","Green Dye","Valentines Card"]},
    
    {label:"Buddy",
    love:["Purple Flower","Pirate Flag","Pirate Bandana","Valentines Card"],
    like:["Bucket","Mushroom","Bone","Gold Peppers","Gummy Worms","Snail","Giant Centipede","Spider"],
    hate:["Peppers","Drum","Worms","Crappie","Lemon","Lemonade","Grubs","Snowball"]},
    
    {label:"Captain Thomas",
    love:["Fishing Net","Gold Trout","Gold Catfish","Gold Drum","Large Net"],
    like:["Blue Crab","Minnows"],
    hate:["Worms","Radish","Spider"]},
        
    {label:"Cecil",
    love:["Leather","MIAB","Old Boot","Shiny Beetle","Horned Beetle","Grasshopper","Yarn"],
    like:["Aquamarine","Grapes","Ladder","Snail","Giant Centipede","Slimestone"],
    hate:["Worms","Feathers","Mushroom","Milk"],},
        
    {label:"Charles Horsington III",
    love:["Apple","Gold Carrot","Apple Cider","Box of Chocolate 01","Valentines Card","Peach"],
    like:["Carrot","3-leaf Clover","Twine","Grasshopper"],
    hate:["Worms","Stone","Green Chromis","Blue Crab","Lemon","Lemonade","Bone","Cheese","Grubs","Snail","Spider"],},

    {label:"Frank",
    love:["Carrot","Gold Carrot"],
    like:["Bucket","Feathers","Blue Feathers","Caterpillar","Grasshopper","Blue Dye"],
    hate:["Worms","Eggs","Peas","Mushroom","Trout","Fire Ant"]},
        
    {label:"Gary Bearson V",
    love:["Yarn","Gold Trout","Apple Cider","You Rock Card"],
    like:["Feathers","Oak","Trout"],
    hate:["Radish","Tomato","Bucket","Black Powder","Worms"]},
        
    {label:"Geist",
    love:["Gold Catfish","Goldgill","Sea Pincher","SpecialShrimp-a-Plenty"],
    like:["Blue Crab","Green Chromis","Stingray","Yellow Perch"],
    hate:["Axe","Black Powder","Explosive","Gummy Worms","Worms"]},
        
    {label:"George",
    love:["Hide","Carbon Sphere","Spider","Apple Cider","Mug of Beer"],
    like:["Hops","Glass Orb","Orange Juice","Arrowhead","Bird Egg","Mushroom Stew"],
    hate:["Worms","Fish Bones","Bone","Cheese"],},
    
    {label:"Holger",
    love:["Potato","Gold Trout","Mug of Beer","Wooden Table"],
    like:["Largemouth Bass","Peas","Trout","Arrowhead","Bluegill","Carp","Horn","Cheese","Apple Cider","Peach","Mushroom Stew"],
    hate:["Worms","Aquamarine","Milk","Valentines Card"],},

    {label:"Jill",
    love:["Yellow Perch","Mushroom Paste","Leather","Peach","MIAB"],
    like:["Tomato","Milk","Old Boot","Grapes","Cheese","Scrap Metal"],
    hate:["Worms","Hops","Stingray","Grubs","Spider","Snowball"],},
    
    {label:"Lorn",
    love:["Small Prawn","Glass Orb","Milk","Shrimp","Gold Peas"],
    like:["Bucket","Peas","Purple Parchment","Green Parchment","Iron Cup","Iced Tea","3-leaf Clover","Apple Cider"],
    hate:["Worms","Crappie","Old Boot","Snail","Spider"],},

    {label:"Mariya",
    love:["Leather Diary","Mushroom Stew","Onion Soup","Cat's Meow","Quandary Chowder","Sea Pincher Special","Shrimp-a-Plenty","Over The Moon"],
    like:["Eggplant","Eggs","Cucumber","Radish","Milk","Iced Tea","Peach"],
    hate:["Worms","Black Powder","Explosive","Spider"],},
        
    {label:"Mummy",
    love:["Bone","Spider","Valentines Card"],
    like:["Fish Bones","Hammer","Treat Bag 02","Yarn"],
    hate:["Drum","Worms","Coal","Cheese","Snowball","Box of Chocolate 01"]},
    
    {label:"Ric Ryph",
    love:["Mushroom Paste","Hammer","Shovel","5 Gold"],
    like:["Bucket","Green Parchment","Unpolished Shimmer Stone","Coal","Black Powder","Arrowhead","Old Boot","Carbon Sphere"],
    hate:["Worms","Aquamarine","Milk","Cheese","Ladder","Caterpillar","Valentines Card"]},
            
    {label:"ROOMBA",
    love:["Carbon Sphere","Scrap Metal"],
    like:["Glass Orb","Hammer","Scrap Wire"],
    hate:["Worms","Milk","Acorn","Arrowhead","Bird Egg","3-leaf Clover","Snowball"],},

    {label:"Rosalie",
    love:["Gold Carrot","Green Dye","Box of Chocolate 01","Valentines Card","Blue Dye","Red Dye","Purple Dye"],
    like:["Carrot","Aquamarine","Apple","Purple Flower","Iced Tea","Caterpillar","Apple Cider","Fireworks"],
    hate:["Worms","Fish Bones","Coal","Old Boot","Iron Cup","Carp","Grubs","Horned Beetle","Fire Ant","Spider"],},
    
    {label:"Star Meerif",
    love:["Blue Feathers","Gold Feather"],
    like:["Eggs","Feathers"],
    hate:["Worms","Lemon","Lemonade","Bone","Iron Cup","Cheese","Grubs"]},
        
    {label:"Thomas",
    love:["Flier","Fishing Net","Gold Trout","Gold Catfish","Goldgill"],
    like:["Drum","Largemouth Bass","Carp","Iced Tea","Minnows","Gummy Worms","Mealworms"],
    hate:["Worms","Eggs","Leek","Green Dye"],},

    {label:"Vincent",
    love:["Mushroom Paste","Orange Juice","Lemonade","Axe","Apple Cider","5 Gold","Onion Soup"],
    like:["Wooden Box","Apple","Hops","Acorn","Leather Diary","Horn","Cheese","Shovel"],
    hate:["Worms","Aquamarine","Purple Flower","Purple Parchment","Shrimp","Valentines Card"],},
    
    /*
    {label:,
    love:[],
    like:[],
    hate:[]},
    */
    
    ]

let petsText =`Magpie Cat	Drum Crappie Feathers Carp	Blue Catfish Blue Shell Bluegill Blue Feathers	Pearl Gold Feather Globber Shinefish
Siberian Husky	Wood Stone Fish Bones Bone	Unpolished Shimmer Stone Horn Antler Rope	Amethyst Cogwheel Small Spring Large Clam Shell
Red Squirrel	Mushroom Fern Leaf Purple Flower Acorn	Arrowhead Leather Coin Purse Ancient Coin	4-leaf Clover Dice Runestone 20 Gold Crab
Tawny Owl	Apple Orange Lemon Hide	Eggs Bird Egg Grapes Honey	Prism Shard Gold Cucumber Runestone 11 Goldfish
Wild Boar	Coal Carbon Sphere 3-leaf Clover Green Dye	Hammer Axe Shovel Ladder	Steak Steel Moonstone Jade
Green Python	Iron Hops Glass Orb Horseshoe	Bucket Shimmer Quartz Steel Wizard Hat	Wine Gold Carrot Runestone 15 Skull Coin
Ring-Tailed Lemur	Snail Caterpillar Fire Ant Giant Centipede	Shiny Beetle Horned Beetle Spider Ruby Scorpion	Amber Dragonfly Cyclops Spider Grasshopper
Mandrill Baboon	Corn Glass Bottle Sturdy Shield Shimmer Topaz	Lemonade Bone Fish Cotton Gold Eggplant	Grape Juice Runestone 03 Gold Peppers Redgill
Tree Frog	Peas Cucumber Hops Cabbage	Green Chromis Puffer Green Jellyfish Skipjack	Runestone 05 Gold Feather Runestone 19 Gold Leaf
Gray Hedgehog	Cabbage Explosive Straw Cheese	Orange Juice Twine Gold Cucumber Broccoli	Runestone 07 Gold Peas Green Shield Torch Fish
Banded Armadillo	Board Feathers Iron Ring Iron Cup	Mushroom Paste Leather Steel Magna Quartz	Small Spring Small Screw Small Gear Steel Wire
Cobalt Tarantula	Eggplant Amethyst Emberstone Giant Centipede	Ruby Ring Emerald Ring Mystic Ring Shimmer Ring	Runestone 05 Runestone 10 Runestone 15 Runestone 20
Pet Rock	Unpolished Ruby Unpolished Emerald Unpolished Jade Unpolished Garnet	Amethyst Lemon Quartz Shimmer Topaz Jade	Shimmer Stone Glass Orb Carbon Sphere Diamond
Frigate Macaw	Clownfish Fishing Net Eye Patch Plumbfish	Pirate Flag Pirate Bandana Large Chest 02 Blue Dye	Skeleton Key Crab Claw Large Net Anglerfish
Emperor Penguin	Marlin Skipjack Seahorse Octopus	Giant Squid Blue Tiger Fish Fluorifish Barracuda	Swordfish Sea Catfish Serpent Eel Ruby Coral
Green Dragon	Runestone 01 Runestone 02 Runestone 03 Runestone 04	Runestone 05 Runestone 06 Runestone 07 Runestone 08	Runestone 09 Runestone 10 Runestone 11 Runestone 12
Red Dragon	Runestone 13 Slimestone Unpolished Garnet Sour Root	Runestone 14 Runestone 16 Green Cloak Lantern	Runestone 17 Runestone 18 Salt Herbs
Blue Dragon	Runestone 01 Runestone 02 Runestone 04 Runestone 06	Runestone 08 Runestone 09 Runestone 13 Runestone 14	Lava Sphere Runestone 16 Runestone 18 Runestone 19
Brown Bear	Crappie Trout Honey Small Key	Square Key Medium Chest 02 Sunflower Grab Bag 04	Inferno Sphere Treasure Key Large Chest 01 Grab Bag 05
Greater Capybara	Cabbage Gold Peas Broccoli Beet	Orange Juice Lemonade Water Lily Apple Cider	Herbs Grab Bag 04 Grab Bag 05 Grab Bag 07
Strange Onion	Tomato Onion Hops Potato	Leek Watermelon Corn Cabbage	Pumpkin Broccoli Mega Sunflower Seeds Mega Beet Seeds
Red Fox	Lemon Quartz Leather Cotton Green Cloak	Runestone 12 Pine Tree Peach Canoe	Diamond Runestone 17 Treasure Key Skeleton Key
Spotted Seal	Runestone 06 Moonstone Snowball Blue Purse	Iced Tea Seaweed Mittens Rice	Blue Gel Gold Sea Crest Frost Snapper Shell Glacierstone
Stinky Skunk	Onion Leek Herbs Cooking Pot	Sweet Root Flour Salt Pie Pan	Peach Corn Oil Bone Broth Butter`





let bbbbb = `
Rosalie
Level	Rewards
10	10x Cooking Pot & 50x Glass Bottle
20	50x Apple & 50x Orange
30	50x Orange Juice & 5x Fruit Punch
40	1x Rosalie's Red Berry Pie & 100x Red Berries
50	1x Rosalie's Concord Grape Pie & 50x Grapes
60	3x Red Berry Pie & 3x Concord Grape Pie
99	1x Rosalie Bobblehead
*
Holger
Level	Rewards
10	100x Peas & 100x Mushroom
20	10x Steak & 25x Steak Kabob
30	25x Shiny Beetle & 5x Orange Gecko
40	1x Holger's Mushroom Stew & 500x Mushroom
50	1x Mushroom Stew & 10x Spiked Shell
99	1x Holger Bobblehead
*
Beatrix
Level	Rewards
10	25x Emberstone & 5x Moonstone
20	50x Sturdy Shield & 25x Sturdy Sword
30	30x Bottle Rocket & 10x Fireworks
40	50x Explosive & 15x Wooden Barrel
99	1x Beatrix Bobblehead
*
Thomas
Level	Rewards
10	25x Gummy Worms & 5x Blue Catfish
20	50x Mealworms & 10x Globber
25	Chums Questline
30	1x Thomas's Cat's Meow & 10x Essence of Slime
40	1x Cat's Meow & 250x Fish Bones
99	1x Thomas Bobblehead
*
Cecil
Level	Rewards
10	50x Shrimp & 100x Small Prawn
20	50x Grapes & 1x Wine
30	1x Clubs & 10x Fancy Pipe
40	10x Small Bolt & 10x Small Chest 02
50	3x Skeleton Key & 5x Treasure Key
60	1x Cecil's Shrimp-a-Plenty & 500x Shrimp
70	20x Rice & 1x Shrimp-a-Plenty
99	1x Holger Bobblehead
*
George
Level	Rewards
10	1x George's Onion Soup & 100x Onion
20	1x Mug of Beer & 1x Blue Purse
30	10x Green Shield & 2x Red Shield
40	1x Onion Soup & 200x Coal
99	1x George Bobblehead
*
Jill
Level	Rewards
10	1x Popcorn & 10x Corn Seeds
20	10x Grab Bag 01 & 5x Gouda
30	25x Grab Bag 02 & 5x Square Key
40	25x Corn Oil & 1x Corn Prize Bag
50	1x Jill's Quandary Chowder & 100x Corn
60	1x Quandary Chowder & 25x Salt
99	1x Jill Bobblehead
*
Vincent
Level	Rewards
10	10x Wooden Sword & 25x Wooden Barrel
20	10x Bacon & 10x Frog
30	1x Gold Horseshoe & 5x Gouda
40	5x Grab Bag 07 & 5x Grab Bag 08
50	1x Vincent's Sea Pincher Special & 25x Large Net
60	1x Sea Pincher Special & 100x Honey
99	1x Vincent Bobblehead
*
Lorn
Level	Rewards
10	1x 10 Gold & 10x Iron Cup
20	3x Cutlass & 3x Crab Claw
30	10x Sea Dragon & 25x Gold Feather
40	1x Lorn's Breakfast Boost & 10x Butter
50	1x Bouquet of Flowers & 1x Congratulations Card
60	1x Breakfast Boost & 50x Flour
99	1x Lorn Bobblehead
*
Buddy
Level	Rewards
10	100x Ancient Coin & 1x Pirate Bandana
20	100x Mushroom & 1x Pirate Flag
30	5x Arnold Palmer & 5x Large Net
40	50x Orange Juice & 1x Buddy Loves You Card
50	1x Dice & 1x Diamonds & Secretly A Society Summons You (SASSY) Questline for House of Cards
99	1x Buddy Bobblehead
*
Borgen
Level	Rewards
10	5x Gold Flier & 5x Gold Catfish
20	5x Gold Carrot & 5x Gold Cucumber
30	5x Gold Coral & 5x Gold Sea Bass
40	1x Borgen Buck & 5x Gold Sea Crest
50	1x Velocity Belt & 5x Gold Jelly
60	3x Gold Crab & 3x Large Clam Shell
99	1x Borgen Bobblehead
*
Ric Ryph
Level	Rewards
10	10x Black Powder & 15x Explosive
20	25x Unpolished Jade & 10x Honey
30	3x Fancy Drum & 3x Fancy Guitar
40	3x Fancy Chair & 3x Fancy Table
99	1x Ric Ryph Bobblehead
*
Mummy
Level	Rewards
10	5x Toilet Paper & 1x Treat Bag 01
20	5x Candy Corn & 5x Candy Roll
30	1x Treat Bag 02 & 1x Treat Bag 03
40	10x Cyclops Spider & 100x Candy
99	1x Mummy Bobblehead
*
Star Meerif
Level	Rewards
10	100x Feathers & 3x Gold Feather
20	25x Blue Feathers & 100x Mushroom Paste
30	25x Steel & 25x Steel Wire
40	10x Gold Feather & 100x Orange Juice
99	1x Star Bobblehead
*
Charles Horsington III
Level	Rewards
10	50x Carrot & 25x Apple
15	Friends With Charles Questline
20	5x Gold Carrot & 10x Blue Catfish
30	10x Broccoli & 1x Hot Potato
40	1x Charles's Neigh & 50x Apple Cider
50	1x Neigh & 40x Bone Broth
99	1x Charles Bobblehead
*
ROOMBA
Level	Rewards
10	5x Small Gear & 5x Small Screw & Tales From The Great Logs Questline
20	1x Roomba's Over The Moon & 10x Herbs
30	10x Small Bolt & 10x Salt
40	1x Over The Moon & 100x Corn
99	1x Roomba Bobblehead
*
Captain Thomas
Level	Rewards
10	50x Trout & 3x Gold Trout
20	50x Fishing Net & 50x Gummy Worms
30	50x Iced Tea & 10x Large Net
40	100x Minnows & 5x Gold Flier
99	1x CptThomas Bobblehead
*
frank
Level	Rewards
10	5x Cabbage & 5x Broccoli
20	50x Hops & 50x Potato
30	10x Large Chest 02 & 10x Grab Bag 07
40	10x 4-leaf Clover & 1x Good Luck Card
50	30x Wheat & 1x Mystical Chest 02
99	1x frank Bobblehead
*
Mariya
Level	Rewards
10	25x Potato & 5x Arnold Palmer
20	25x Cooking Pot & 10x Peach Juice
30	100x Flour & 100x Soap
40	1x Mariya's Hickory Omelette & 100x Bird Egg
50	1x Crunchy Omelette & 100x Butter
99	1x Mariya Bobblehead
*
Geist
Level	Rewards
10	10x Fish Bones & 10x Bone
20	5x Sea Pincher Special & 50x Emberstone
25	The Wind Beneath My Wings Questline
30	10x Grab Bag 07 & 25x Tea Leaves
40	50x Sweet Root & 10x Herbs
99	1x Geist Bobblehead
*
Gary Bearson V
Level	Rewards
10	25x Apple & 5x Breakfast Boost
20	10x Apple Cider & 5x Cat's Meow
30	10x Honey & 10x Gold Feather
40	10x Gold Leaf & 10x Gold Trout
99	1x Gary Bobblehead
`