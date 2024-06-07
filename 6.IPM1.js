
const creditsArray = [
    {magnitude:"M ( e7~8)",credits:[0,10,30]},
    {magnitude:"B ( e9~11)",credits:[60,101,152]},
    {magnitude:"T (e12~14)",credits:[213,280,367]},
    {magnitude:"q (e15~17)",credits:[459,551,674]},
    {magnitude:"Q (e18~20)",credits:[790,930,1075]},
    {magnitude:"s (e21~23)",credits:[1230,1393,1567]},
    {magnitude:"S (e24~26)",credits:[1753,1947,2154]},
    {magnitude:"O (e27~29)",credits:[2370,2595,2831]},
    {magnitude:"N (e30~32)",credits:[3079,3335,3603]},
    {magnitude:"D (e33~35)",credits:[3881,4168,4466]},
]

const smeltersArray = 
["Free", "50.00 K","500.00 K","10.00 M","5.00 B",
"100.00 B","50.00 T","1.00 q","500.00 q","10.00 Q"]

const craftersArray =
["Free","1.00 M","100.00 M","50.00 B","1.00 T",
"500.00 T","10.00 q","5.00 Q","100.00 Q","50.00 s"]

const challengeRewards = [
    {target : "1.00 M",darkMatter:5,},
    {target : "10.00 M",darkMatter:10,},
    {target : "100.00 M",darkMatter:15,},
    {target : "1.00 B",darkMatter:20,},
    {target : "10.00 B",darkMatter:25,},
    {target : "100.00 B",darkMatter:30,},
    {target : "1.00 T",darkMatter:40,},
    {target : "10.00 T",darkMatter:50,},
    {target : "100.00 T",darkMatter:60,},
    {target : "1.00 q",darkMatter:70,},
    {target : "10.00 q",darkMatter:80,},
    {target : "100.00 q",darkMatter:90,},
    {target : "1.00 Q",darkMatter:100,},
    {target : "10.00 Q",darkMatter:115,},
    {target : "100.00 Q",darkMatter:130,},
    {target : "1.00 s",darkMatter:145,},
    {target : "10.00 s",darkMatter:160,},
    {target : "100.00 s",darkMatter:180,},
    {target : "1.00 S",darkMatter:200,},
    {target : "10.00 S",darkMatter:200,},
    {target : "100.00 S",darkMatter:200,},
    {target : "1.00 O",darkMatter:200,},
    {target : "10.00 O",darkMatter:200,},
    {target : "100.00 O",darkMatter:200,},
    {target : "1.00 N",darkMatter:200,},
    {target : "10.00 N",darkMatter:200,},
    {target : "100.00 N",darkMatter:200,},
    {target : "1.00 D",darkMatter:200,},
]

function formatKMBT(value,revert = false){
    let thisValue = undefined
//    let baseValue = undefined
    let rep = undefined

    if (!revert){
        thisValue = Number(value)

        if (thisValue >= 1000000000000)
            {rep = (thisValue / 1000000000000).toFixed(2) +" T"} 
        else if(thisValue >= 1000000000)
            {rep = (thisValue / 1000000000).toFixed(2) +" B"}
        else if(thisValue >= 1000000)
            {rep = (thisValue / 1000000).toFixed(2) +" M"}
        else if(thisValue >= 1000)
            {rep = (thisValue / 1000).toFixed(2) +" K"}
        else
            {rep = thisValue}
    } else {
        thisValue = value.toString()

        if (thisValue.includes("K") || thisValue.includes("k") )
            {rep = parseFloat(value).toFixed(2) * 1000}
        else if (thisValue.includes("M") || thisValue.includes("m"))
            {rep = parseFloat(value).toFixed(2) * 1000000}
        else if (thisValue.includes("B") || thisValue.includes("b"))
            {rep = parseFloat(value).toFixed(2) * 1000000000}
        else if (thisValue.includes("T") || thisValue.includes("t"))
            {rep = parseFloat(value).toFixed(2) * 1000000000000}
        else {rep = value}

        rep = Number(rep)
    }
        return rep
}

function firstContact(){
    let thisText = `Welcome to IPM Infos, 
    if you cant see any text, <br><br> 
    try zooming the top left corner ..." <br><br>
    (this message will auto-destroy in 3...2...1...) `
    let thisMsg = addEle({dad:body,border:"blue solid 2px",radius:"30px",text:thisText,padding:"20px"})
    centerScreen(thisMsg)
    setTimeout(()=>{body.removeChild(thisMsg)},3000)
}

function construction(){
    info.innerHTML = "Under Construction !!!"
    let thisContainer = document.createElement("div")
    thisContainer.style = containerColumn
    right.appendChild(thisContainer)
    let img = new Image()
    img.src = "./IPM Components/construction.jpg"
    thisContainer.appendChild(img)
    }

function popKiller(){
    info.innerHTML = infoTitle
    if(projectPop) {body.removeChild(projectPop);projectPop = undefined}
    }


function clickEvent(){
    popKiller()
    cleanParent(right)
    buildEvent()
}

function clickFaqs(){
    popKiller()
    cleanParent(right)
    setFaq()
}

function clickPlanets(){
    popKiller()
    cleanParent(right)
    buildPlanets()
    getID("planetFull").click()  
}

function clickItems(){
    popKiller()
    cleanParent(right)
    buildItems()
//    construction()
}

function clickProjects(){
    popKiller()
    cleanParent(right)
    setProjects()
    }


function clickStation(){
    popKiller()
    cleanParent(right)
    buildProjectsGrid("station",cellSize)
    }

function clickRooms(){
    popKiller()
    cleanParent(right)
    buildRooms()
    }

function clickProcess(){
    popKiller()
    cleanParent(right)
    buildProcess()
}

function clickLook(){
    popKiller()
    cleanParent(right)
    buildLook()
}

 
function buildLook(){
    addEle({dad:right,setClass:"button1",text:toggleOldNewText + gameLook,margin:"0 10px",
    backG:togNot,width:"fit-content",setFunc:(e)=>{
        gameLook = gameLook === "Old" ? "New" : "Old"
//        gameLook = e.srcElement.innerHTML.includes("Old") ? spanText("lime","New") : spanText("lime","Old")
//        let gameLookNow = e.srcElement.innerHTML.split(" ⇒ ")[1]
//        gameLook = gameLookNow === "Old" ? "New" : "Old"
        e.srcElement.innerHTML = toggleOldNewText + spanText("lime",gameLook)}})
}


let wanderers = [
    {label:"Merchant",ref:"merchant shipn.jpg",date:{dayN:"Friday",month:"June",day:7}},
    {label:"Aurora",ref:"aurora shipn.jpg",date:{dayN:"Friday",month:"June",day:21}},
    {label:"Thunderhorse",ref:"thunderhorsen.jpg",date:{dayN:"Friday",month:"June",day:28}},
]

let wandSuff = [
"st","nd","rd","th","th","th","th","th","th","th",
"th","th","th","th","th","th","th","th","th","th","th",]

function dtSfx(day){
    switch(day){
        case 1 : case 21 : case 31 : return "st" ; break
        case 2 : case 22 : return "nd" ; break
        case 3 : case 23 : return "rd" ; break
        default : return "th"
    }
}

function buildEvent(){

txt = `
Dear IPM Infos Users,<br>
If it happens that you do have 2 clicks<br>
to spare, please visit this reddit poll<br>
and cast your vote.<br><br>
<a href="https://www.reddit.com/r/IdlePlanetMiner/comments/1d598uk/comment/l6xyp9g/?context=3" target="_blank">Reddit Poll</a><br><br>
If you want to express something please<br>
add a few words there.<br><br>
Thank you !!<br><br> 

`,


addEle({dad:right,text:txt,margin:"50px 0 10px 50px",fontS:"20px"})

addEle({dad:right,border:"lime dashed 2px",width:"500px",marginL:"50px"})

addEle({dad:right,text:"Wandering Ships (IRL Money)",margin:"20px 0 10px 50px",fontS:"30px"})
addEle({dad:right,text:`(showing up in your galaxy if never bought<br>
and available for a limited time only !!)`,margin:"0 50px",fontS:"22px"})
addEle({dad:right,text:"** Faq > Expand Fleet ... for requirements **",textC:"yellow",fontS:"20px",marginL:"50px"})

let myCont = addEle({dad:right,margin:"20px 0 0 50px"})
let myT = addEle({dad:myCont,what:"table"})

wanderers.forEach(wa=>{


    let myL = addEle({dad:myT,what:"tr"})

    let myC = addEle({dad:myL,what:"td",radius:"5px"})
        addEle({dad:myC,what:"img",imgFullSrc:"./IPM Components/"+wa.ref,img2Sizes:"200:150"})//,width:"100%"
    addEle({dad:myL,what:"td",radius:"5px",paddingL:"20px",fontS:"30px",
    text:wa.date.dayN+" "+wa.date.month+" "+wa.date.day+dtSfx(wa.date.day)})

})






}


function centerScreen(element){
    element.style.position = "absolute"
    let rect = element.getBoundingClientRect()
    let posW = window.innerWidth/2 - rect.width/2
    let posH = window.innerHeight/2 - rect.height/2
    element.style.top = posH + window.scrollY -10 + "px"
    element.style.left = posW + window.scrollX +5 + "px"
}

const cellSize = 35
function buildProjectsGrid(whichGrid="",cellSize=0,globalContainer=right){
    globalContainer.style = ""
    let curStat = "(jan.2024)"
    let curVal = "50k"
    let topText = "Click a tile for more infos"
    topText += whichGrid !== "station" ? "" : 
    `<br>*For your information, current `+curStat+`
     <br>station will require more than `+curVal+` energy
     <br>cells to be fully upgraded*`

    let gridHeader = addEle({dad:globalContainer,setClass:"contRow_W"})

    if(whichGrid==="station"){
        addEle({dad:gridHeader,what:"img",imgSize:120,radius:"100px",
        imgFullSrc:"./IPM Components/station.jpg",margin:"10px 0 0 40px"})
    }

    addEle({dad:gridHeader,setClass:"texting",fontS:"20px",paddingL:"40px",
    textC:"rgb(0,212,250)",textA:"left",text:topText,setID:"gridInfos",backG:"",
    minHeight:whichGrid==="projects" ? "24px" : "100px"})

    let table = addEle({dad:globalContainer,what:"table"})
    let cut = 5
    let maxRow = 0
    let maxCol =0
    let refArray1 = undefined
    let refArray2 = undefined

    switch (whichGrid){
        case "projects":
            maxRow = 29
            maxCol = 29
            refArray1 = projectCells
            refArray2 = projectsConnections
            break
        case "station":
            maxRow = 49
            maxCol = 19
            refArray1 = stationCells
            refArray2 = stationConnections
            break
    }

    for (i=1;i<=maxRow;i++){
        let row = addEle({dad:table,what:"tr",height:whichGrid === "projects" 
                    && i % 2 === 0 ? cellSize/cut + "px" : cellSize + "px"})

        for (j=1;j<=maxCol;j++){
            let cell = addEle({dad:row,what:"td",width:whichGrid === "projects" 
            && j % 2 === 0 ? cellSize/cut + "px" : cellSize + "px",setID:"Row:"+i+"|Col:"+j})
            cell.style.minWidth = cell.style.width
        }}


    refArray1.forEach((obj)=>{
        let thisSrc = ""
        if (obj.label.includes("telescope")){
            let txt = obj.label.split(" ")[0]
            let ref = Number(obj.label.split(" ")[1])
            if (ref < 9){thisSrc = "./IPM Projects/"+txt+"1.jpg"} 
            else if (ref > 8 && ref < 13){thisSrc = "./IPM Projects/"+txt+"2.jpg"}
            else {thisSrc = "./IPM Projects/"+txt+"3.jpg"}
            }
        else if (obj.label.includes("#")){thisSrc = "./IPM Components/"+obj.label.split(" #")[0]+".jpg"}
        else {thisSrc = "./IPM Projects/"+obj.label+".jpg"}

        let img = addEle({dad:table.rows[obj.rows-1].cells[obj.cell-1],what:"img",
        imgFullSrc:thisSrc,display:"block",imgSize:cellSize,setFunc:function(){clickCell2(obj,whichGrid)}})
        img.addEventListener("mouseover",()=>{getID("gridInfos").innerHTML=obj.label})
        img.addEventListener("mouseout",()=>{getID("gridInfos").innerHTML=""})

        table.rows[obj.rows-1].cells[obj.cell-1].style="border:solid 1px white; cursor:pointer;"
        
    })

    if (whichGrid === "projects"){
        addEle({dad:table.rows[17-1].cells[13-1],what:"img",imgSize:cellSize,imgFullSrc:"./IPM Projects/origin.png"})
        }

        refArray2.forEach((obj)=>{
        let hr = undefined
        switch(obj.dir){
            case "hor":
                table.rows[obj.rows-1].cells[obj.cell-1].style = `
                    display:flex;
                    flex-direction: column;
                    align-items: center;
                    `
                hr = document.createElement("hr")
                hr.style = hrHorStyle
                table.rows[obj.rows-1].cells[obj.cell-1].appendChild(hr)
                break
            case "ver":
                table.rows[obj.rows-1].cells[obj.cell-1].style = `
                display:flex;
                `
                hr = document.createElement("hr")
                hr.style = hrVerStyle
                table.rows[obj.rows-1].cells[obj.cell-1].appendChild(hr)
                break
            case "dia":
                table.rows[obj.rows-1].cells[obj.cell-1].style.backgroundColor="grey"
                break
            case "sta":
                table.rows[obj.rows-1].cells[obj.cell-1].style.backgroundColor="rgb(37,156,180)"
                //table.rows[obj.rows-1].cells[obj.cell-1].style.backgroundColor="rgb(40,238,91)"
                break
            default :
                table.rows[obj.rows-1].cells[obj.cell-1].style.backgroundColor="red"
            }
        table.rows[obj.rows-1].cells[obj.cell-1]
        .addEventListener("click",()=>{popKiller()})
    })

    

    if (whichGrid ==="projects" ){
        table.rows[9].cells[18].style.backgroundImage = 
            "linear-gradient(to right, rgb(28,21,49) 50%, grey 50%)"
        table.rows[9].cells[19].style.backgroundColor="grey"
        table.rows[9].cells[20].style.backgroundColor="grey"
        table.rows[9].cells[21].style.backgroundColor="grey"
        table.rows[9].cells[22].style.backgroundImage = 
            "linear-gradient(to right, grey 50%, rgb(28,21,49) 50%)"
    }


    table.style.margin = "20px 0 0 40px"

// grid "space" style back color => rgb(28,21,49)


    }


function clickCell2(obj,whichGrid){
    popKiller()

    projectPop = addEle({dad:body,padding:"15px",border:"blue solid 3px",radius:"30px",
    backG:'url("./IPM Components/bg.jpg")',fontS:"18px",width:"300px"})
    projectPop.style.opacity = 0.9

        let subContainer1 = addEle({dad:projectPop,setClass:"contRow",alignItems:"center"})
            let thisSrc = ""
            if (obj.label.includes("telescope")){
                let txt = obj.label.split(" ")[0]
                let ref = Number(obj.label.split(" ")[1])

                if (ref < 9){thisSrc = "./IPM Projects/"+txt+"1.jpg" }
                else if (ref > 8 && ref < 13){thisSrc = "./IPM Projects/"+txt+"2.jpg"}
                else {thisSrc = "./IPM Projects/"+txt+"3.jpg" }
                }
            else if (obj.label.includes("#")){thisSrc = "./IPM Components/"+obj.label.split(" #")[0]+".jpg"}
            else {thisSrc = "./IPM Projects/"+obj.label+".jpg"}
            addEle({dad:subContainer1,what:"img",imgSize:40,imgFullSrc:thisSrc})

            addEle({dad:subContainer1,fontS:"20px",margin:"10px",
            borderB:"blue solid 3px",text:obj.label})                

        if (obj.description){addEle({dad:projectPop,margin:"10px",text:obj.description})}

        if (obj.comment){addEle({dad:projectPop,margin:"10px",text:obj.comment})}

        if (obj.prerequisites){addEle({dad:projectPop,margin:"10px",text:"Prerequisites :  " + obj.prerequisites})}

        if (obj.highestPlanetRequired){addEle({dad:projectPop,margin:"10px",text:"Highest Planet Required :  " + obj.highestPlanetRequired})}
        
        if(whichGrid === "projects"){

            addEle({dad:projectPop,border:"blue solid 1px"})

            addEle({dad:projectPop,margin:"10px",text:"Base Cost => Cost with Max Lev Lab"})

            let subContainer2 = addEle({dad:projectPop,setClass:"contCol",marginL:"20px"})

            for(let i=0;i<obj.components.length;i++){
                let subContainer3 = addEle({dad:subContainer2,setClass:"contRow",alignItems:"center",marginB:"5px"})
                    addEle({dad:subContainer3,what:"img",imgSize:40,imgFullSrc:gameLook === "Old" ?
                    "./IPM Components/"+obj.components[i].label+".jpg" : 
                    "./IPM Components/"+obj.components[i].label+"n.jpg"})

                    addEle({dad:subContainer3,marginL:"10px",text:obj.components[i].label + " " 
                    + obj.components[i].baseCost + " => " + obj.components[i].costWithMaxLab})
            }
        }
        else if (whichGrid === "station"){
            let popTxt = obj.bonusPerLevel > 0 ? 
            "Bonus per Level + " + obj.bonusPerLevel : "Bonus per Level " + obj.bonusPerLevel
            popTxt += obj.percentage ? "%" : ""
            addEle({dad:projectPop,margin:"10px",text:popTxt})

            addEle({dad:projectPop,margin:"10px",text:"Max Level : " + obj.maxLevel})

            addEle({dad:projectPop,margin:"10px",text:"Costs :"})

            let popTtl = ""
            for(i=0;i<obj.costs.length;i++){
                popTtl += obj.costs[i] + " - "
                if((i+1) % 7 === 0){popTtl += "<br>"}
            } popTtl.slice(0,popTtl.length-2)
            addEle({dad:projectPop,margin:"10px",text:popTtl,
            borderT:"blue solid 3px",borderB:"blue solid 3px"})

            addEle({dad:projectPop,margin:"10px",text:"Buy all for : "+obj.totalCost})

            popTxt = "Bonus at Max Level : "
            popTxt += obj.percentage ? obj.totalBonus + "%" : "x" + (Number(obj.totalBonus) + 1)
            addEle({dad:projectPop,margin:"10px",text:popTxt})
        }

        addEle({dad:projectPop,setClass:"button1",margin:"10px",text:"Close",
        setFunc:()=>{body.removeChild(projectPop) ; projectPop = undefined}})

        centerScreen(projectPop)
}