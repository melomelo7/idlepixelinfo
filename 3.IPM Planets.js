class Planet {
    constructor({
        telescope=0,
        idNumber=0,
        label="",
        ores=[],
        unlockCost="",
        selected = false,
    }){
        this.telescope = telescope
        this.idNumber = idNumber
        this.label = label
        this.ores = ores
        this.unlockCost = unlockCost
        this.imgSrc = "./IPM Planets/"+this.idNumber+".jpg"
        this.selected = selected
    }
}

planetsArray = []

planetsArray.push(

    new Planet({
        telescope:0,
        idNumber : 1,
        label:"Balor",
        ores:[
            {label:"copper ore",yield:100}
        ],
        unlockCost:"$ 100"
    }),

    new Planet({
        telescope:0,
        idNumber : 2,
        label:"Drasta",
        ores:[
            {label:"copper ore",yield:80},
            {label:"iron ore",yield:20}
        ],
        unlockCost:"$ 200"
    }),

    new Planet({
        telescope:0,
        idNumber : 3,
        label:"Anadius",
        ores:[
            {label:"copper ore",yield:50},
            {label:"iron ore",yield:50}
        ],
        unlockCost:"$ 500"
    }),
    
    new Planet({
        telescope:0,
        idNumber : 4,
        label:"Dholen",
        ores:[
            {label:"iron ore",yield:80},
            {label:"lead ore",yield:20}
        ],
        unlockCost:"$ 1.25 K"
    }),

    new Planet({
        telescope:1,
        idNumber : 5,
        label:"Verr",
        ores:[
            {label:"lead ore",yield:50},
            {label:"iron ore",yield:30},
            {label:"copper ore",yield:20},
        ],
        unlockCost:"$ 5.00 K"
    }),

    new Planet({
        telescope:1,
        idNumber : 6,
        label:"Newton",
        ores:[
            {label:"lead ore",yield:100},
        ],
        unlockCost:"$ 9.00 K"
    }),

    new Planet({
        telescope:1,
        idNumber : 7,
        label:"Widow",
        ores:[
            {label:"iron ore",yield:40},
            {label:"copper ore",yield:40},
            {label:"silica ore",yield:20},
        ],
        unlockCost:"$ 15.00 K"
    }),

    new Planet({
        telescope:2,
        idNumber : 8,
        label:"Acheron",
        ores:[
            {label:"silica ore",yield:60},
            {label:"copper ore",yield:40},
        ],
        unlockCost:"$ 25.00 K"
    }),

    new Planet({
        telescope:2,
        idNumber : 9,
        label:"Yangtze",
        ores:[
            {label:"silica ore",yield:80},
            {label:"aluminium ore",yield:20},
        ],
        unlockCost:"$ 40.00 K"
    }),

    new Planet({
        telescope:2,
        idNumber : 10,
        label:"Solveig",
        ores:[
            {label:"aluminium ore",yield:50},
            {label:"silica ore",yield:30},
            {label:"lead ore",yield:20},
        ],
        unlockCost:"$ 75.00 K"
    }),

    new Planet({
        telescope:3,
        idNumber : 11,
        label:"Imir",
        ores:[
            {label:"aluminium ore",yield:100},
        ],
        unlockCost:"$ 150.00 K"
    }),    

    new Planet({
        telescope:3,
        idNumber : 12,
        label:"Relic",
        ores:[
            {label:"lead ore",yield:45},
            {label:"silica ore",yield:35},
            {label:"silver ore",yield:20},
        ],
        unlockCost:"$ 250.00 K"
    }),

    new Planet({
        telescope:3,
        idNumber : 13,
        label:"Nith",
        ores:[
            {label:"silver ore",yield:80},
            {label:"aluminium ore",yield:20},
        ],
        unlockCost:"$ 400.00 K"
    }),

    new Planet({
        telescope:4,
        idNumber : 14,
        label:"Batalla",
        ores:[
            {label:"copper ore",yield:40},
            {label:"iron ore",yield:40},
            {label:"gold ore",yield:20},
        ],
        unlockCost:"$ 800.00 K"
    }),

    new Planet({
        telescope:4,
        idNumber : 15,
        label:"Micah",
        ores:[
            {label:"gold ore",yield:50},
            {label:"silver ore",yield:50},
        ],
        unlockCost:"$ 1.50 M"
    }),

    new Planet({
        telescope:4,
        idNumber : 16,
        label:"Pranas",
        ores:[
            {label:"gold ore",yield:100},
        ],
        unlockCost:"$ 3.00 M"
    }),

    new Planet({
        telescope:5,
        idNumber : 17,
        label:"Castellus",
        ores:[
            {label:"aluminium ore",yield:40},
            {label:"silica ore",yield:35},
            {label:"diamond",yield:25},
        ],
        unlockCost:"$ 6.00 M"
    }),

    new Planet({
        telescope:5,
        idNumber : 18,
        label:"Gorgon",
        ores:[
            {label:"diamond",yield:80},
            {label:"lead ore",yield:20},
        ],
        unlockCost:"$ 12.00 M"
    }),

    new Planet({
        telescope:5,
        idNumber : 19,
        label:"Parnitha",
        ores:[
            {label:"gold ore",yield:70},
            {label:"platinum ore",yield:30},
        ],
        unlockCost:"$ 25.00 M"
    }),

    new Planet({
        telescope:6,
        idNumber : 20,
        label:"Orisoni",
        ores:[
            {label:"platinum ore",yield:70},
            {label:"diamond",yield:30},
        ],
        unlockCost:"$ 50.00 M"
    }),

    new Planet({
        telescope:6,
        idNumber : 21,
        label:"Theseus",
        ores:[
            {label:"platinum ore",yield:100},
        ],
        unlockCost:"$ 100.00 M"
    }),

    new Planet({
        telescope:6,
        idNumber : 22,
        label:"Zelene",
        ores:[
            {label:"silver ore",yield:70},
            {label:"titanium ore",yield:30},
        ],
        unlockCost:"$ 200.00 M"
    }),

    new Planet({
        telescope:7,
        idNumber : 23,
        label:"Han",
        ores:[
            {label:"titanium ore",yield:70},
            {label:"diamond",yield:20},
            {label:"gold ore",yield:10},
        ],
        unlockCost:"$ 400.00 M"
    }),

    new Planet({
        telescope:7,
        idNumber : 24,
        label:"Strennus",
        ores:[
            {label:"titanium ore",yield:70},
            {label:"platinum ore",yield:30},
        ],
        unlockCost:"$ 800.00 M"
    }),

    new Planet({
        telescope:7,
        idNumber : 25,
        label:"Osun",
        ores:[
            {label:"aluminium ore",yield:60},
            {label:"iridium ore",yield:40},
        ],
        unlockCost:"$ 1.60 B"
    }),

    new Planet({
        telescope:8,
        idNumber : 26,
        label:"Ploitari",
        ores:[
            {label:"iridium ore",yield:50},
            {label:"diamond",yield:50},
        ],
        unlockCost:"$ 3.20 B"
    }),

    new Planet({
        telescope:8,
        idNumber : 27,
        label:"Elysta",
        ores:[
            {label:"iridium ore",yield:100},
        ],
        unlockCost:"$ 6.40 B"
    }),

    new Planet({
        telescope:8,
        idNumber : 28,
        label:"Tikkun",
        ores:[
            {label:"iridium ore",yield:40},
            {label:"titanium ore",yield:35},
            {label:"palladium ore",yield:25},
        ],
        unlockCost:"$ 12.50 B"
    }),

    new Planet({
        telescope:9,
        idNumber : 29,
        label:"Satent",
        ores:[
            {label:"palladium ore",yield:60},
            {label:"titanium ore",yield:40},
        ],
        unlockCost:"$ 25.00 B"
    }),

    new Planet({
        telescope:9,
        idNumber : 30,
        label:"Urla Rast",
        ores:[
            {label:"palladium ore",yield:90},
            {label:"diamond",yield:10},
        ],
        unlockCost:"$ 50.00 B"
    }),
    
    new Planet({
        telescope:9,
        idNumber : 31,
        label:"Vulnar",
        ores:[
            {label:"palladium ore",yield:70},
            {label:"osmium ore",yield:30},
        ],
        unlockCost:"$ 100.00 B"
    }),

    new Planet({
        telescope:10,
        idNumber : 32,
        label:"Nibiru",
        ores:[
            {label:"osmium ore",yield:60},
            {label:"iridium ore",yield:40},
        ],
        unlockCost:"$ 250.00 B"
    }),

    new Planet({
        telescope:10,
        idNumber : 33,
        label:"Xena",
        ores:[
            {label:"osmium ore",yield:100},
        ],
        unlockCost:"$ 600.00 B"
    }),

    new Planet({
        telescope:10,
        idNumber : 34,
        label:"Rupert",
        ores:[
            {label:"palladium ore",yield:55},
            {label:"osmium ore",yield:30},
            {label:"rhodium ore",yield:15},
        ],
        unlockCost:"$ 1.50 T"
    }),

    new Planet({
        telescope:11,
        idNumber : 35,
        label:"Pax",
        ores:[
            {label:"rhodium ore",yield:50},
            {label:"platinum ore",yield:50},
        ],
        unlockCost:"$ 4.00 T"
    }),

    new Planet({
        telescope:11,
        idNumber : 36,
        label:"Ivyra",
        ores:[
            {label:"rhodium ore",yield:100},
        ],
        unlockCost:"$ 10.00 T"
    }),

    new Planet({
        telescope:11,
        idNumber : 37,
        label:"Utritis",
        ores:[
            {label:"rhodium ore",yield:100},
            {label:"inerton ore",yield:20},
        ],
        unlockCost:"$ 25.00 T"
    }),

    new Planet({
        telescope:12,
        idNumber : 38,
        label:"Dosie",
        ores:[
            {label:"inerton ore",yield:50},
            {label:"osmium ore",yield:50},
        ],
        unlockCost:"$ 62.00 T"
    }),

    new Planet({
        telescope:12,
        idNumber : 39,
        label:"Zulu",
        ores:[
            {label:"inerton ore",yield:100},
        ],
        unlockCost:"$ 160.00 T"
    }),

    new Planet({
        telescope:12,
        idNumber : 40,
        label:"Unicae",
        ores:[
            {label:"inerton ore",yield:80},
            {label:"quadium ore",yield:20},
        ],
        unlockCost:"$ 400.00 T"
    }),

    new Planet({
        telescope:13,
        idNumber : 41,
        label:"Dune",
        ores:[
            {label:"osmium ore",yield:60},
            {label:"quadium ore",yield:40},
        ],
        unlockCost:"$ 1.00 q"
    }),

    new Planet({
        telescope:13,
        idNumber : 42,
        label:"Naraka",
        ores:[
            {label:"quadium ore",yield:100},
        ],
        unlockCost:"$ 2.50 q"
    }),

    new Planet({
        telescope:13,
        idNumber : 43,
        label:"Daedalus",
        ores:[
            {label:"quadium ore",yield:60},
            {label:"inerton ore",yield:25},
            {label:"scrith ore",yield:15},
        ],
        unlockCost:"$ 6.20 q"
    }),

    new Planet({
        telescope:14,
        idNumber : 44,
        label:"Clovis",
        ores:[
            {label:"scrith ore",yield:50},
            {label:"quadium ore",yield:50},
        ],
        unlockCost:"$ 15.00 q"
    }),

    new Planet({
        telescope:14,
        idNumber : 45,
        label:"Zero",
        ores:[
            {label:"scrith ore",yield:100},
        ],
        unlockCost:"$ 40.00 q"
    }),

    new Planet({
        telescope:14,
        idNumber : 46,
        label:"Sotomi",
        ores:[
            {label:"scrith ore",yield:75},
            {label:"uru ore",yield:25},
        ],
        unlockCost:"$ 100.00 q"
    }),

    new Planet({
        telescope:15,
        idNumber : 47,
        label:"Remidian",
        ores:[
            {label:"uru ore",yield:60},
            {label:"quadium ore",yield:40},
        ],
        unlockCost:"$ 250.00 q"
    }),

    new Planet({
        telescope:15,
        idNumber : 48,
        label:"Muse",
        ores:[
            {label:"uru ore",yield:100},
        ],
        unlockCost:"$ 600.00 q"
    }),

    new Planet({
        telescope:15,
        idNumber : 49,
        label:"Arabis",
        ores:[
            {label:"uru ore",yield:80},
            {label:"vibranium ore",yield:20},
        ],
        unlockCost:"$ 1.50 Q"
    }),

    new Planet({
        telescope:16,
        idNumber : 50,
        label:"Vesna",
        ores:[
            {label:"vibranium ore",yield:60},
            {label:"scrith ore",yield:40},
        ],
        unlockCost:"$ 3.80 Q"
    }),

    new Planet({
        telescope:16,
        idNumber : 51,
        label:"Chandra",
        ores:[
            {label:"vibranium ore",yield:100},
        ],
        unlockCost:"$ 10.00 Q"
    }),

    new Planet({
        telescope:16,
        idNumber : 52,
        label:"Vega",
        ores:[
            {label:"vibranium ore",yield:70},
            {label:"rhodium ore",yield:20},
            {label:"aether ore",yield:10},
        ],
        unlockCost:"$ 25.00 Q"
    }),

    new Planet({
        telescope:17,
        idNumber : 53,
        label:"Crius",
        ores:[
            {label:"aether ore",yield:50},
            {label:"scrith ore",yield:50},
        ],
        unlockCost:"$ 60.00 Q"
    }),

    new Planet({
        telescope:17,
        idNumber : 54,
        label:"Singhana",
        ores:[
            {label:"aether ore",yield:100},
        ],
        unlockCost:"$ 150.00 Q"
    }),

    new Planet({
        telescope:17,
        idNumber : 55,
        label:"Zumbia",
        ores:[
            {label:"aether ore",yield:70},
            {label:"vibranium ore",yield:20},
            {label:"viterium ore",yield:10},
        ],
        unlockCost:"$ 360.00 Q"
    }),

    new Planet({
        telescope:18,
        idNumber : 56,
        label:"Elysium",
        ores:[
            {label:"viterium ore",yield:60},
            {label:"uru ore",yield:40},
        ],
        unlockCost:"$ 900.00 Q"
    }),

    new Planet({
        telescope:18,
        idNumber : 57,
        label:"Nyota",
        ores:[
            {label:"viterium ore",yield:100},
        ],
        unlockCost:"$ 2.60 s"
    }),

    new Planet({
        telescope:18,
        idNumber : 58,
        label:"Doral",
        ores:[
            {label:"viterium ore",yield:40},
            {label:"aether ore",yield:40},
            {label:"xynium ore",yield:20},
        ],
        unlockCost:"$ 7.50 s"
    }),

    new Planet({
        telescope:19,
        idNumber : 59,
        label:"Nikara",
        ores:[
            {label:"xynium ore",yield:70},
            {label:"vibranium ore",yield:30},
        ],
        unlockCost:"$ 21.00 s"
    }),

    new Planet({
        telescope:19,
        idNumber : 60,
        label:"Limbo",
        ores:[
            {label:"xynium ore",yield:100},
        ],
        unlockCost:"$ 59.00 s"
    }),

    new Planet({
        telescope:19,
        idNumber : 61,
        label:"Bob",
        ores:[
            {label:"xynium ore",yield:70},
            {label:"quolium ore",yield:30},
        ],
        unlockCost:"$ 170.00 s"
    }),

    new Planet({
        telescope:20,
        idNumber : 62,
        label:"Midas",
        ores:[
            {label:"quolium ore",yield:55},
            {label:"aether ore",yield:45},
        ],
        unlockCost:"$ 460.00 s"
    }),

    new Planet({
        telescope:20,
        idNumber : 63,
        label:"Antigone",
        ores:[
            {label:"quolium ore",yield:100},
        ],
        unlockCost:"$ 1.30 S"
    }),

    new Planet({
        telescope:20,
        idNumber : 64,
        label:"Hecate",
        ores:[
            {label:"quolium ore",yield:50},
            {label:"xynium ore",yield:25},
            {label:"luterium ore",yield:25},
        ],
        unlockCost:"$ 3.90 S"
    }),

    new Planet({
        telescope:21,
        idNumber : 65,
        label:"Sterop",
        ores:[
            {label:"luterium ore",yield:60},
            {label:"quolium ore",yield:20},
            {label:"viterium ore",yield:17},
        ],
        unlockCost:"$ 11.00 S"
    }),

    new Planet({
        telescope:21,
        idNumber : 66,
        label:"Lavinia",
        ores:[
            {label:"luterium ore",yield:100},
        ],
        unlockCost:"$ 33.00 S"
    }),

    new Planet({
        telescope:21,
        idNumber : 67,
        label:"Ren",
        ores:[
            {label:"luterium ore",yield:70},
            {label:"quolium ore",yield:20},
            {label:"wraith ore",yield:10},
        ],
        unlockCost:"$ 95.00 S"
    }),

    new Planet({
        telescope:22,
        idNumber : 68,
        label:"Gorgons",
        ores:[
            {label:"wraith ore",yield:60},
            {label:"xynium ore",yield:40},
        ],
        unlockCost:"$ 270.00 S"
    }),

    new Planet({
        telescope:22,
        idNumber : 69,
        label:"Pontus",
        ores:[
            {label:"wraith ore",yield:80},
            {label:"luterium ore",yield:20},
        ],
        unlockCost:"$ 800.00 S"
    }),

    new Planet({
        telescope:22,
        idNumber : 70,
        label:"Leto",
        ores:[
            {label:"wraith ore",yield:100},
        ],
        unlockCost:"$ 2.40 O"
    }),

)

function buildPlanets(){
    let textSize = 18
    let tabInfos = addEle({dad:right,setClass:"texting",fontS:textSize+"px",
    height:textSize *2 + "px",marginL:textSize+"px",textC:"rgb(0,212,250)"})

    let rightTop = addEle({dad:right,setClass:"contRow_W"})
    let rightMiddle = addEle({dad:right,setClass:"contRow_W",setID:"rightMiddle"})
    let rightBottom = addEle({dad:right,setClass:"contCol_W",width:"fit-content"})


    let thisBt = addEle({dad:rightTop,setClass:"button1",marginL:"10px",text:"Full List",
    backG:togNot,setID:"planetFull",setFunc:()=>{
        info.innerHTML = infoTitle
        cleanParent(rightMiddle) 
        cleanParent(rightBottom)
        displayPlanets(rightBottom,planetsArray)
    }})
    thisBt.addEventListener("mouseover",()=>{tabInfos.innerHTML = "Displays all 70 planets"})
    thisBt.addEventListener("mouseout",()=>{tabInfos.innerHTML = ""})


    thisBt = addEle({dad:rightTop,setClass:"button1",marginL:"10px",text:"Telescope",
    backG:togNot,setID:"planetFull",setFunc:()=>{
        info.innerHTML = infoTitle
        cleanParent(rightMiddle) 
        cleanParent(rightBottom)
        let lineCount = 0
        let lineMax = 10

        let tabFr = addEle({dad:rightMiddle,margin:"0 0 10px 10px"})
        let table = addEle({dad:tabFr,what:"table"})
            let tr = addEle({dad:table,what:"tr"})

        for (i=0;i<=22;i++){
            lineCount+=1
            if(lineCount > 1 && (lineCount-1) % lineMax === 0)
                {tr = addEle({dad:table,what:"tr"})}

            td = addEle({dad:tr,what:"td",border:"white solid 2px",radius:"5px",text:i,
            backG:togNot,textA:"center",padding:"5px",cursor:"pointer",setFunc:(e)=>{
                cleanParent(rightBottom) ; let refId = Number(e.srcElement.innerHTML)
                displayPlanets(rightBottom,planetsArray.filter(x=>x.telescope === refId)) }})
        }
    }})
    thisBt.addEventListener("mouseover",()=>{tabInfos.innerHTML = "Displays a 1 specific telescope of your choosing"})
    thisBt.addEventListener("mouseout",()=>{tabInfos.innerHTML = ""})


    thisBt = addEle({dad:rightTop,setClass:"button1",marginL:"10px",text:"Find Ore",
    backG:togNot,setID:"planetFull",setFunc:()=>{

        info.innerHTML = infoTitle
        cleanParent(rightMiddle) 
        cleanParent(rightBottom)
        lineCount = 0
        lineMax = 9

        let subCont = addEle({dad:rightMiddle,setClass:"contCol"})
            let subCont2 = addEle({dad:subCont,setClass:"contRow",margin:"0 0 10px 10px",border:"solid white 2px",
                radius:"5px",padding:"5px",justifyC:"center"})
                addEle({dad:subCont2,text:"Yield :",marginR:"10px"})
                addEle({dad:subCont2,what:"radio",isInput:true,setName:"findOreRadio",setVal:"best => worst",radioCol:"lime",
                setFunc:()=>{
                    if(getID("seekOreSelection").innerHTML !=="- none -"){getID(getID("seekOreSelection").innerHTML).click()}
                }})
                addEle({dad:subCont2,text:"best => worst"})
                addEle({dad:subCont2,what:"radio",isInput:true,setName:"findOreRadio",setVal:"worst => best",marginL:"40px",
                radioCol:"lime",setFunc:()=>{
                    if(getID("seekOreSelection").innerHTML !=="- none -"){getID(getID("seekOreSelection").innerHTML).click()}
                }})
                addEle({dad:subCont2,text:"worst => best"})
                addEle({dad:subCont2,text:"Ore Selected : ",margin:"0 20px"})
                addEle({dad:subCont2,text:"- none -",setID:"seekOreSelection",textC:"lime",marginR:"10px"})
                subCont2.children[1].click()
            
            let tabFr = addEle({dad:subCont,margin:"0 0 10px 10px"})
            let table = addEle({dad:tabFr,what:"table"})
                let tr = addEle({dad:table,what:"tr"})

        for (i=0;i<oresArray.length;i++){
            if(oresArray[i].type==="ore"){
                lineCount+=1
                if(lineCount > 1 && (lineCount-1) % lineMax === 0)
                    {tr = addEle({dad:table,what:"tr"})}
                td = addEle({dad:tr,what:"td"})
                let tdc = addEle({dad:td,setClass:"contCol",border:"solid 2px white",radius:"5px",})
                let thisImgSrc = gameLook === "Old" ? oresArray[i].img : oresArray[i].img.split(".jpg")[0]+"n.jpg"
                let thisImg = addEle({dad:tdc,what:"img",imgSize:30,imgFullSrc:thisImgSrc,
                setID:oresArray[i].label,setFunc:(e)=>{
                        cleanParent(rightBottom)
                        let getItem = e.srcElement.id
                        let newArray = planetsArray.filter(x=>x.ores.some(function(x){return x.label===getItem}))
                        getID("seekOreSelection").innerHTML = getItem

                        document.getElementsByName("findOreRadio").forEach(el=>{
                            if(el.checked===true){
                                if(el.value==="best => worst"){
                                    newArray.sort((a,b)=> b.ores.filter(x=>x.label===getItem)[0].yield - a.ores.filter(x=>x.label===getItem)[0].yield)
                                } else {
                                    newArray.sort((a,b)=> a.ores.filter(x=>x.label===getItem)[0].yield - b.ores.filter(x=>x.label===getItem)[0].yield)
                                } } })

                        displayPlanets(rightBottom,newArray)
                    }
                })
                thisImg.addEventListener("mouseover",(e)=>{tabInfos.innerHTML = e.srcElement.id })
                thisImg.addEventListener("mouseout",()=>{tabInfos.innerHTML = ""})
            }
        }
    }})    
    thisBt.addEventListener("mouseover",()=>{tabInfos.innerHTML = "Pick 1 ore, see which planets provide it (result by % yield)"})
    thisBt.addEventListener("mouseout",()=>{tabInfos.innerHTML = ""})


    thisBt = addEle({dad:rightTop,setClass:"button1",marginL:"10px",text:"Find Planet",backG:togNot,setFunc:()=>{
        info.innerHTML = infoTitle
        cleanParent(rightMiddle) 
        cleanParent(rightBottom)

        let thisContainer = addEle({dad:rightMiddle,setClass:"contRow_W",margin:"10px 0 20px 20px",alignItems:"center"})

            addEle({dad:thisContainer,margin:"0 10px",fontS:"20px",text:"Planet name / id# (1~70) ?"})
            addEle({dad:thisContainer,what:"input",isInput:true,setFunc:(e)=>{
                cleanParent(rightBottom)
                let newArray = []
                let myText = e.srcElement.value.toUpperCase()
                for(i=0;i<planetsArray.length;i++){
                    if(isNaN(myText))
                        {let myText2 = planetsArray[i].label.slice(0,myText.length).toUpperCase()
                         if(myText === myText2 && myText.length > 0){newArray.push(planetsArray[i])}}
                    else
                        {if(Number(myText) === planetsArray[i].idNumber && myText.length > 0){newArray.push(planetsArray[i])}}
                    }
                displayPlanets(rightBottom,newArray)
            }})
    }})
    thisBt.addEventListener("mouseover",()=>{tabInfos.innerHTML = "Input Planet's name/id to find it"})
    thisBt.addEventListener("mouseout",()=>{tabInfos.innerHTML = ""})


    thisBt = addEle({dad:rightTop,setClass:"button1",marginL:"10px",text:"Private List",
    backG:"linear-gradient(to bottom,rgba(220,126,115,1),rgba(0,0,0,1))",textC:"yellow",
    setID:"privatePlanets",setFunc:()=>{
        info.innerHTML = infoTitle
        cleanParent(rightMiddle) 
        cleanParent(rightBottom)
        displayPlanets(rightBottom,planetsArray.filter(x=>x.selected))
        txt = `( you may click on planets from any list : Full,Telescope or Finds )<br>
        ** Hint : this Private List might help you chose Rover mission **`
        addEle({dad:rightMiddle,margin:"0 0 10px 20px",fontS:"20px",text:txt})
    }})
    thisBt.addEventListener("mouseover",()=>{tabInfos.innerHTML = 
        `Click on a Planet Image to Add/Remove it from YOUR list<br>
         then click on the Private List to filter your own selection`})
    thisBt.addEventListener("mouseout",()=>{tabInfos.innerHTML = ""})
    }


function displayPlanets(rightBottom,listArray){
    listArray.forEach(item => {
        let thisContainer = addEle({dad:rightBottom,setClass:"contRow_W",borderT:"blue solid 3px",alignItems:"center"})        
            addEle({dad:thisContainer,setClass:"texting",margin:"0 10px 0 10px",text:item.idNumber,
            setID:"PIN"+item.idNumber,border:item.selected ? "solid 2px #BB482E":""})

            getID("privatePlanets").innerHTML = "Private List (" + planetsArray.filter(x=>x.selected).length + ")"

            let thisBox = addEle({dad:thisContainer,setClass:"planetBoxStyle"})
                addEle({dad:thisBox,what:"img",cursor:"pointer",imgFullSrc:gameLook === "Old" ? item.imgSrc : 
                item.imgSrc.split(".jpg")[0]+"n.jpg",setFunc:()=>{
                    if (item.selected){item.selected = false ; getID("PIN"+item.idNumber).style.border = ""}
                    else { item.selected = true ; getID("PIN"+item.idNumber).style.border = "solid 2px #BB482E"}

                    getID("privatePlanets").innerHTML = "Private List (" + planetsArray.filter(x=>x.selected).length + ")"
                    if(rightMiddle.innerHTML.includes("Hint")) {getID("privatePlanets").click()}
                } })

            let thisContainer2 = addEle({dad:thisContainer,setClass:"contCol_W",margin:"0 20px"})        
                addEle({dad:thisContainer2,setClass:"texting",text:"Name : " + item.label})
                addEle({dad:thisContainer2,setClass:"texting",text:"Telescope : " + item.telescope})
                addEle({dad:thisContainer2,setClass:"texting",text:"Unlock Cost : " + item.unlockCost})

            let thisContainer3 = addEle({dad:thisContainer,setClass:"contCol_W"})
            for (i=0;i<item.ores.length;i++){
                let subContainer = addEle({dad:thisContainer3,setClass:"contRow_W",alignItems:"center"})
                    addEle({dad:subContainer,what:"img",imgSize:30,marginR:"10px",imgFullSrc:gameLook === "Old"?
                    "./IPM Components/"+item.ores[i].label+".jpg" : "./IPM Components/"+item.ores[i].label+"n.jpg"})

                    addEle({dad:subContainer,setClass:"texting",marginT:"-1px",
                    text:item.ores[i].label + " " + item.ores[i].yield + "%"})
            }
        })
    }