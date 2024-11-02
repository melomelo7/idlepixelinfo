
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

let UseR = {
    gameLook:"New",
    credits:{
        lounge:0,
        station:[],
        exodus:false,
    }
}
stationCells.filter(cel=>cel.label.includes("credit")).forEach(it=>UseR.credits.station.push(0))


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


function clickNews(){
    popKiller()
    cleanParent(right)
    buildNews()
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

function clickSettings(){
    popKiller()
    cleanParent(right)
    buildSettings()
}

function buildSettings(){
    popKiller()

    let settings = addEle({dad:right,setClass:"contCol",width:"fit-content",margin:"20px",textA:"center"}) // 

    let subC = addEle({dad:settings,setClass:"contCol",border:"solid blue 2px",radius:"5px",
    padding:"5px",fontS:"20px",textA:"center"})
        addEle({dad:subC,text:"Toggle the game Graphics here<br>(Planets / Items)"})        
        let subC2 = addEle({dad:subC,setClass:"contRow",padding:"3px",justifyC:"center"})
            addEle({dad:subC2,what:"radio",isInput:true,setVal:"New",setName:"radioLook",setFunc:()=>{
                let grp = document.getElementsByName("radioLook")
                grp.forEach(rd=>{
                    if(rd.checked)
                        {getID("lookFromRadio").innerHTML = "now set to ⇒ "+spanText("lime",rd.value) ; UseR.gameLook = rd.value}
                })
            }})
            addEle({dad:subC2,what:"radio",isInput:true,setVal:"Old",setName:"radioLook",setFunc:()=>{
                let grp = document.getElementsByName("radioLook")
                grp.forEach(rd=>{
                    if(rd.checked)
                        {getID("lookFromRadio").innerHTML = "now set to ⇒ "+spanText("lime",rd.value) ; UseR.gameLook = rd.value}
                })
            }})
            addEle({dad:subC2,setID:"lookFromRadio",marginL:"10px"})
            document.getElementsByName("radioLook")[0].click()


    addEle({dad:settings,setClass:"button1",padding:"10px",radius:"10px",
    text:"Set ⇔ Test : Credit Boosters you own<br>(Test future boosters you do not own yet !)",
    backG:"linear-gradient(to bottom left,rgba(255,69,0,0.6) 80%,rgba(255,160,122,1))",textC:"black",
    setFunc:boostersPop})
    addEle({dad:settings,text:spanText("yellow","** Same tool is found under Faq > Credits **")})

}


let wanderers = [
    {label:"Aurora",ref:"aurora shipn.jpg",dates:[
        {dayN:"Friday",month:11,day:8},
    ]},
    {label:"Thunderhorse",ref:"thunderhorsen.jpg",dates:[
        {dayN:"Friday",month:11,day:15},
    ]},
    {label:"Enigma",ref:"enigma.jpg",dates:[
        {dayN:"Friday",month:11,day:22},
    ]},
    {label:"Merchant",ref:"merchant shipn.jpg",dates:[
        {dayN:"Friday",month:11,day:29},
    ]},

]



let wanderers2 = [
    {label:"Aurora",ref:"aurora shipn.jpg",dates:[
        {dayN:"Friday",month:10,day:4},
        //        {dayN:"Friday",month:7,day:26},{dayN:"Friday",month:8,day:30},
 //       {dayN:"Friday*",month:9,day:27},
    ]},
    {label:"Thunderhorse",ref:"thunderhorsen.jpg",dates:[
        {dayN:"Friday",month:10,day:11},
//        {dayN:"Friday",month:6,day:28},{dayN:"Friday",month:8,day:2},
  //      {dayN:"Friday*",month:9,day:6},
    ]},
    {label:"Enigma",ref:"enigma.jpg",dates:[
        {dayN:"Friday",month:10,day:18},
//        {dayN:"Friday",month:7,day:5},{dayN:"Friday",month:8,day:9},
  //      {dayN:"Friday*",month:9,day:13},
    ]},
    {label:"Merchant",ref:"merchant shipn.jpg",dates:[
        {dayN:"Friday",month:10,day:25},
//        {dayN:"Friday",month:7,day:12},{dayN:"Friday",month:8,day:16},
  //      {dayN:"Friday*",month:9,day:20},
    ]},

]

let months = [
"January","February","March","April","May","June","July","August","September","October","November","December"]

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

function buildNews(){

/*    
txt = `
Regarding game current bugs, instability, lost of content etc ...<br>
devs are working on it, until more is know please be patient.<br>
Spamming support will only slow down process. Thanks<br>
`+spanText("lime","Current reworked Update : V2.2.6 stay tuned for more...")

addEle({dad:right,text:txt,textC:"yellow",fontS:"30px",
fontB:"bold", margin:"50px 0 0 50px"})
*/


//addEle({dad:right,what:"img",imgFullSrc:"./IPM Components/announcement.jpg",margin:"50px",
// border:"red solid 10px"})


let greenL = "600px"

let myCont = undefined
let myT = undefined
let myL = undefined

txt=`
`+spanText("yellow","** Prior Modification(s) :<br>")+`
- Faq (modif) > Tournaments<br>
- Items tab > [Used for] also shows in which projects<br>
- News tab (wandering ships) Updating Changed<br>
- Faq (rework) > Early Unlocks <br>
- Faq (creation) > Events | Probes Hangar  <br>
- Top tab "`+spanText("orangered","Events")+`" name changed to "`+spanText("springgreen","News")+`"<br> 
`+spanText("yellow","** Last Modification(s) :<br>")+`
- Faq (updating) > Events | Probes Hangar  <br>
`+spanText("yellow","** Soon to come :<br>")+`
`
addEle({dad:right,text:txt,margin:"30px",border:"teal dashed 4px",
padding:"20px",radius:"30px",width:"fit-content",textA:"left",fontS:"20px"})


addEle({dad:right,border:"lime dashed 2px",width:greenL,marginL:"50px"})

addEle({dad:right,text:"Wandering Ships<br>(IRL Money budget 30~50 $US)",margin:"20px 0 10px 50px",fontS:"30px"})
addEle({dad:right,text:`(showing up in your galaxy if never bought<br>
and available for a limited time only !!)`,margin:"0 50px",fontS:"22px"})
addEle({dad:right,text:"** Faq > Expand Fleet ... for requirements **",textC:"yellow",fontS:"20px",marginL:"50px"})

/*
txt = 
`Due to some "changes" in the discord community,<br>
 the planning of ships rotation cannot be updated<br>
 anymore. Instead I will post when they were <br>`
 +spanText("yellow",`LAST SEEN`)+` for the time being ...<br>`+
 spanText("lime","(If you see ")+spanText("yellow",`"Friday*"`)+
 spanText("lime"," this is only a wild guess)")

addEle({dad:right,text:txt,textC:"brown",fontS:"18px",margin:"10px 0 0 50px",
border:"dotted yellow 2px",width:"fit-content",radius:"10px",padding:"5px"})
*/


/*
addEle({dad:right,text:spanText("yellow",`🟥 23 August No Ship Coming<br>
🟥 instead : double DM tapjoy event`),margin:"50px",fontS:"28px"})
*/

// bef Aurora 1 week off : dbl tapjoy event

myCont = addEle({dad:right,margin:"20px 0 0 50px"})
myT = addEle({dad:myCont,what:"table"})

wanderers.forEach(wa=>{
    myL = addEle({dad:myT,what:"tr"})

    let myC = addEle({dad:myL,what:"td",radius:"5px"})
        addEle({dad:myC,what:"img",imgFullSrc:"./IPM Components/"+wa.ref,img2Sizes:"200:150"})//,width:"100%"
    myC = addEle({dad:myL,what:"td",radius:"5px"})
    
    txt = ""
    let txt2 = ""
    wa.dates.forEach(dt=>{


        /*
        let mdt = new Date()
        console.log(mdt.getMonth()+1 === dt.month)
        console.log(mdt.getDate() <= dt.day)
        if(mdt.getMonth()+1 === dt.month && mdt.getDate() <= dt.day){
            console.log("in1")
            txt2 = "yellow"
            if(mdt.getDate()>=dt.day && mdt.getDate()<=dt.day+2){
                console.log("in2")
                txt2="lime"
            }
        }
//        txt2 = mdt.getMonth()+1 === dt.month && mdt.getDay()+1 <= dt.day ? "lime" : "" 
        txt += spanText(txt2,"- " + dt.dayN+" "+ months[dt.month-1] +" "+dt.day+dtSfx(dt.day)+"<br>")
        */

        let mdt = new Date()
        let wanC = togNot
        if(mdt.getMonth()+1 === dt.month){
            if(mdt.getDate()<= dt.day+1){
                wanC = "linear-gradient(to bottom left,rgba(255,0,0,0.7) 20%,rgba(255,255,0,0.6))"
                if(mdt.getDate()===dt.day || mdt.getDate()===dt.day+1){
                    wanC="linear-gradient(to bottom left,rgba(0,128,0,1),rgba(255,255,0,0.7))"//"green"
                }
            }
        }
        addEle({dad:myC,radius:"5px",padding:"10px",fontS:"20px",marginL:"20px",
        border:"solid 2px orangered",backG:wanC,
        text:dt.dayN+" "+ months[dt.month-1] +" "+dt.day+dtSfx(dt.day)})

    })
//    addEle({dad:myC,radius:"5px",padding:"5px",marginL:"20px",text:txt,fontS:"22px",border:"brown 3px solid"})


})

addEle({dad:right,border:"lime dashed 2px",width:greenL,margin:"10px 0 10px 50px"})

txt = `
Dear IPM Infos Users,<br>
Votes are now closed in the Reddit Poll<br>
Thank you for your participation 🌞 !!<br>
Result as overal % of what Tabs are used the most ⇒<br>
(June 2024)
`
   
let pollFork = addEle({dad:right,setClass:"contRow",margin:"50px 0 20px 50px"})
    addEle({dad:pollFork,text:txt,fontS:"20px"})


myCont = addEle({dad:pollFork,marginL:"20px"})//margin:"20px 0 0 50px"
    myT = addEle({dad:myCont,what:"table",border:"solid 2px orangered",radius:"5px"})
        myL = addEle({dad:myT,what:"tr"})
            addEle({dad:myL,what:"td",radius:"5px",border:"green solid 2px",text:"FAQs",textA:"center",padding:"5px"})
            addEle({dad:myL,what:"td",radius:"5px",border:"green solid 2px",text:"19%",textA:"center",padding:"5px"})
        myL = addEle({dad:myT,what:"tr"})
            addEle({dad:myL,what:"td",radius:"5px",border:"green solid 2px",text:"Planets",textA:"center",padding:"5px"})
            addEle({dad:myL,what:"td",radius:"5px",border:"green solid 2px",text:"30%",textA:"center",padding:"5px"})
        myL = addEle({dad:myT,what:"tr"})
            addEle({dad:myL,what:"td",radius:"5px",border:"green solid 2px",text:"Items",textA:"center",padding:"5px"})
            addEle({dad:myL,what:"td",radius:"5px",border:"green solid 2px",text:"19%",textA:"center",padding:"5px"})
        myL = addEle({dad:myT,what:"tr"})
            addEle({dad:myL,what:"td",radius:"5px",border:"green solid 2px",text:"Projects",textA:"center",padding:"5px"})
            addEle({dad:myL,what:"td",radius:"5px",border:"green solid 2px",text:"7%",textA:"center",padding:"5px"})
        myL = addEle({dad:myT,what:"tr"})
            addEle({dad:myL,what:"td",radius:"5px",border:"green solid 2px",text:"Station",textA:"center",padding:"5px"})
            addEle({dad:myL,what:"td",radius:"5px",border:"green solid 2px",text:"2%",textA:"center",padding:"5px"})
        myL = addEle({dad:myT,what:"tr"})
            addEle({dad:myL,what:"td",radius:"5px",border:"green solid 2px",text:"Rooms",textA:"center",padding:"5px"})
            addEle({dad:myL,what:"td",radius:"5px",border:"green solid 2px",text:"23%",textA:"center",padding:"5px"})

/*
            txt = `
            New poll to evaluate my new tool : 
            <a href="https://www.reddit.com/r/IdlePlanetMiner/comments/1ddeok1/ipm_infos_testers_for_new_tool_please/" 
            target="_blank">Reddit Poll</a><br>
            `            
            addEle({dad:right,text:txt,margin:"30px",border:"yellow dashed 5px",
            padding:"10px",radius:"30px",width:"500px",textA:"center",fontS:"22px"})            
*/          

addEle({dad:right,border:"lime dashed 2px",width:greenL,marginL:"50px"})


addEle({dad:right,text:`
Absolutely not related in any way to Idle Planet Miner...<br><br>
- If you are having a boring time arking<br>
- If you are open to the idea of trying another incremental/clicker game<br>
well a suggestion (some of you may know it already) : `+spanText("crimson","Underworld idle")+`.
<br>There are (to my knowledge) 2 versions available atm. 1 being available<br>
for probably almost anyone, BUT older, and stopped midway developpement ...<br>
⇒ <a href="https://echa.itch.io/underworld-idle" target="_blank">Underworld idle (browser)</a><br>
(try browser version first if you want a glimpse before switching for the other with new graphics)<br><br>
And the final version which very likely will not receive any more content.<br>
Apparently now free to play too (used to be a small fee) <br>
⇒ <a href="https://store.steampowered.com/app/1540960/Underworld_Idle/" 
target="_blank">Underworld idle on Steam</a><br>
`,
margin:"50px",padding:"10px",border:"white dotted 2px",radius:"10px",width:"fit-content"
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
                    addEle({dad:subContainer3,what:"img",imgSize:40,imgFullSrc:UseR.gameLook === "Old" ?
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


