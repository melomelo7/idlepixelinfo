
const body = document.querySelector("body")


function addDiv(parent){
    let thisElement = document.createElement("div")
    parent.appendChild(thisElement)
    return thisElement
}

function addImg(parent,ImgSource=""){
    let thisElement = new Image()
    thisElement.src = ImgSource
    parent.appendChild(thisElement)
    return thisElement
}

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

function dayLight(hour=0){
    if(!isNaN(hour) && hour > -1 && hour < 24 ){
        let myItm = dayProgress.filter(x=> x.hour === hour)[0]
        return "rgb(" + myItm.R + "," + myItm.G + "," + myItm.B + ")"
        }}