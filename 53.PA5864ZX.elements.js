const body = document.querySelector("body")

let thisItm = undefined
let logTop = undefined

const grandContainer = addDiv(body)
grandContainer.style = grandContainerStyle
    const left = addDiv(grandContainer)
    left.style = leftMenuStyle

    const right = addDiv(grandContainer)
    right.style = containerColumn

        const topMenu = addDiv(right)
        topMenu.style = topMenuStyle
            const topMenuLeft = addDiv(topMenu)
            topMenuLeft.style = borderedContainerColumn
            topMenuLeft.style.height = 90 + "px"
            topMenuLeft.style.width = 200 + "px"
            topMenuLeft.style.margin ="3px 10px 3px 0"
            topMenuLeft.style.alignItems = "center"

            thisItm = topMenuLeft.getBoundingClientRect().width
            const topMenuRight = addDiv(topMenu)
            topMenuRight.style = borderedContainerRow
            topMenuRight.style.height = 90 + "px"
            topMenuRight.style.width = "calc(100% - " + (thisItm + 20) + "px)"
            topMenuRight.style.margin ="3px 0 3px 0"
            
        const content = addDiv(right)
        content.style = contentStyle
        thisItm = topMenu.getBoundingClientRect().height
        content.style.height = "calc(99% - " + (thisItm + 15) + "px)"

let playerDetails = {
    Name : "Skit Roger",
    Health : {now:60,max:60},
    Time : {year:4661,month:12,day:27,hour:7},
    SERCchat : 1,
    runTimeChunk : 1,

}



function cleanParent(parent){
    while(parent.children.length >0){
        parent.removeChild(parent.lastChild)
    }}

function addDiv(parent){
    let ObjX = document.createElement("div")
    parent.appendChild(ObjX)
    return ObjX
}

function addImg(parent,ImgSource=""){
    let ObjX = new Image()
    ObjX.src = ImgSource
    parent.appendChild(ObjX)
    return ObjX
}

function dayLight(hour=0){
    if(!isNaN(hour) && hour > -1 && hour < 24 ){
        let ObjX = dayProgress.filter(x=> x.hour === hour)[0]
        return "rgb(" + ObjX.R + "," + ObjX.G + "," + ObjX.B + ")"
        }}


class dayHour{
    constructor(hour,R,G,B,energyIncome){
        this.hour = hour
        this.R = R
        this.G = G
        this.B = B
        this.energyIncome = energyIncome
    }}

const dayProgress = []

dayProgress.push(
    new dayHour(0,1,34,83,0),
    new dayHour(1,0,54,107,0),
    new dayHour(2,0,53,105,0),
    new dayHour(3,0,63,107,0),
    new dayHour(4,0,63,108,0),
    new dayHour(5,1,95,135,0),
    new dayHour(6,7,106,149,0),
    new dayHour(7,17,153,184,0),
    new dayHour(8,105,204,200,0),
    new dayHour(9,207,235,184,0),
    new dayHour(10,244,225,98,0),
    new dayHour(11,251,200,89,0),
    new dayHour(12,255,178,110,0),
    new dayHour(13,253,173,92,0),
    new dayHour(14,253,166,90,0),
    new dayHour(15,243,141,76,0),
    new dayHour(16,241,114,121,0),
    new dayHour(17,207,95,141,0),
    new dayHour(18,105,50,132,0),
    new dayHour(19,63,30,123,0),
    new dayHour(20,43,23,109,0),
    new dayHour(21,29,39,99,0),
    new dayHour(22,8,16,67,0),
    new dayHour(23,4,14,64,0),
    )

class menuButton{
    constructor(label="",clickFunction=undefined){
        this.label = label
        this.clickFunction = clickFunction
    }}

const menuButtons = []

const allLogs = []
const playerLogs = []
const SERCtalk = []
allLogs.push(
    {label:"Start",text:`
    4657.06.18<br>
    Discovery PA5864ZX : ready for launch<br>
    Destination : New Sector behind the "Dark Rift"<br>
    Crew : <br>
    - Captain Deluca (military Pilot)<br>
    - Skit Roger (civilian Engineer)<br>
    - Oscar (4650 Series Gynoid)<br>
    Mission difficulty : Average<br>
    Mission Type : Exploration / Documentation<br>
    Paygrade : 5<br>
    Danger Evaluation : Unkown<br>
    ETA : 5 years 3~4 monthes<br><br>
    4657.06.19<br>
    Discovery PA5864ZX : launched at 07:50<br>
    Status :<br> 
    - Material => "green"<br>
    - Crew => "orange" (captain light fever)<br><br>
    4661.12.02<br>
    approaching the Dark Rift, a rain of Meteor was<br>
    spot incoming. Deluca tried his best to avoid<br>
    collision, unfortunately too many Meteors were<br>
    impossible to avoid completely.<br>
    The ship suffered high damages, multiple fires<br>
    started and the very security of the crew was<br>
    threaten. Oscar uploaded its full Databank in the<br>
    [S]urvival [E]mergency [R]ooms [C]omputers and<br>
    managed to set the evacuation sequence for both<br>
    rooms of Roger & Deluca.<br><br>
    4661.12.05<br>
    3 days now that the SER is derivating in space, all<br>
    communications lost. The SERC simulation conclusion<br>
    being "deep sleep" as the best option, hoping for a<br>
    rescue or in the event of a planet discovery, you closed<br>
    your eyes.<br><br>
    4661.12.25<br>
    The SERC was able to locate a close enough unknown<br>
    planet to try a landing.<br><br>
    4661.12.26<br>
    Landing was successfull on the new planet, almost<br>
    without any damages. Current problem : even being<br>
    close to full capacity, resources wont last long...<br>
    `}
)

SERCtalk.push(
    {id:2,
        text : `
        Hello skit,
        As you just woke up from a deep sleep, your body<br>
        is still very weak, you should just spend some<br>
        time recovering some VIGOR today.
        `},
    {id:1,
    text : `
    Hello ` + playerDetails.Name + `,<br>
    As you just woke up from a deep sleep, your body<br>
    is still very weak, you should just spend some<br>
    time recovering your VIGOR for now.
    `},
)