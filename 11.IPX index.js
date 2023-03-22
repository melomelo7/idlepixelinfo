

const body = document.querySelector("body")
const nav = document.querySelector(".navbar")
const navBtns = nav.querySelectorAll("li")
const sections = document.querySelectorAll("section")

navBtns.forEach(x=>x.addEventListener("click",function(e){toggleSections(e.srcElement.innerHTML)}))

function toggleSections(keep="none"){
    sections.forEach(x=>x.style.display="none")
    if(keep !=="none"){
        for (i=0;i<sections.length;i++){
            if (sections[i].id === keep){sections[i].style.display = "block"} } } }

toggleSections("Credits")


const bestiary = document.querySelector("#bestiary")
bestiary.style = `
display:flex;
flex-direction: column;`

const topContainer = document.createElement("div")
topContainer.style = `
    border: black solid 3px;
    border-radius : 5px;
    padding:20px;
    overflow-x: hidden;
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    background-color:rgb(0,76,78);
    justify-content: center;
    width:100%;`
    bestiary.appendChild(topContainer)

const bottomContainer = document.createElement("div")
bottomContainer.style = `
    border: black solid 3px;
    border-radius : 5px;
    padding:20px;
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    background-color:rgb(0,76,78);
    justify-content: center;
    text-align:center;
    width:100%;`
    bestiary.appendChild(bottomContainer)
    bottomContainer.style.display = "none"

function setBestiary(){
    let img1 =""
    for (i=0;i<beasts.length;i++){
    label= beasts[i]+".JPG"
    img1 = document.createElement("img")
    img1.addEventListener("click",clickOn)
    img1.style = `
    border:solid red 2px;
    height:90px;
    width:90px;
    cursor: pointer;
    overflow:hidden;`
    img1.style.backgroundImage = "url('14.IPX images/"+label+"')" 
    img1.setAttribute("name",beasts[i])
    topContainer.appendChild(img1)
} }

function clickOn(e){
    let thisImg = document.querySelector("#loot")
    
    if (thisImg){
        if (thisImg.src.includes(e.srcElement.name)){
            bottomContainer.removeChild(thisImg)
            bottomContainer.style.display = "none"}
        else {
            bottomContainer.removeChild(thisImg)
            displayBeast(e.srcElement.name,e.clientX,e.clientY) } }
    else 
        {displayBeast(e.srcElement.name,e.clientX,e.clientY) } }

function displayBeast(label,Xpos,Ypos){
    bottomContainer.style.display = "block"
    label = label+".JPG"
    let loot = document.createElement("img")
    loot.style = `
    width:300px;
    height:auto;
    margin:20px 0 0 0;`
    window.innerWidth < 500 ?
    loot.style.left = "80px" :
    loot.style.left = Xpos-30+"px"
    loot.style.top = (Math.floor( window.scrollY )+Ypos-20)+"px"
    loot.src ="images/"+label
    loot.setAttribute("id","loot")
    loot.addEventListener("click",function(){
        bottomContainer.style.display = "none"
        bottomContainer.removeChild(document.querySelector("#loot"))})
    bottomContainer.appendChild(loot) }


setBestiary()


const evalReach = document.querySelector("#eval-reach")
const evalNow = document.querySelector("#eval-now")
const evalResult = document.querySelector("#eval-result")

evalReach.addEventListener("input",evalFightPoints)
evalNow.addEventListener("input",evalFightPoints)

function evalFightPoints(){
    if (evalReach.value !=="" && evalNow.value !=="" && 
        !isNaN(evalReach.value) && !isNaN(evalNow.value) &&
        Number(evalReach.value) > Number(evalNow.value)){
        let time = Number(evalReach.value) - Number(evalNow.value)
        let hours = Math.floor(time/3600)
        let minutes = Math.floor(time/60) % 60
        let seconds = time % 60
    
        hours = hours < 10 ? "0" + hours : hours
        seconds = seconds < 10 ? "0" + seconds : seconds
        minutes = minutes < 10 ? "0" + minutes : minutes

        evalResult.innerHTML = "Time needed : "+hours+":"+minutes+":"+seconds
    }
    else
    {evalResult.innerHTML="Incorrect values, try again"}
}


const targetLevel = document.querySelector("#targetLevel")
const currentExperience = document.querySelector("#currentExperience")
const expResult = document.querySelector("#experienceResult")
const calculateExperience = document.querySelector("#calculateExperience")
calculateExperience.addEventListener("click",calculateXp)
const moreOptions = document.querySelector("#moreOptions")
moreOptions.addEventListener("click",toggleOptions)
const calcOptions = document.querySelector("#calcOptions")
calcOptions.style.display = "none"
const includeOptions = document.querySelector("#includeOptions")
includeOptions.checked = false
const mediumCrafting = document.querySelector("#medium-crafting")
const hammerOrb = document.querySelector("#hammer-orb")
const pickaxeOrb = document.querySelector("#pickaxe-orb")
const miningOutfit = document.querySelector("#mining-outfit")
const craftingOutfit = document.querySelector("#crafting-outfit")

function toggleOptions(){
    if (calcOptions.style.display === "none"){
        checkType()
        calcOptions.style.display = "block"
        moreOptions.value = "Less ..." 
        includeOptions.checked = true }
    else {
        calcOptions.style.display = "none"
        moreOptions.value = "More ..." 
        includeOptions.checked = false } }

const radioTypes = document.getElementsByName("type")
radioTypes.forEach(function(item){item.addEventListener("click",checkType)})

const radioTools = document.getElementsByName("tool")
radioTools.forEach(function(item){item.addEventListener("click",checkOptions)})

const radioItems = document.getElementsByName("item")
radioItems.forEach(function(item){item.addEventListener("click",checkOptions)})


function checkType(){
    const oreToggle = document.querySelector("#oreToggle")
    oreToggle.style.display = "none"
    let type = document.querySelector("#labelType")
    for(i=0;i<radioTypes.length;i++){
        if (radioTypes[i].checked){
            type.innerHTML = "Type : " + radioTypes[i].value
            if (type.innerHTML.includes("Mining")){
                oreToggle.style.display = "block"}
            else{
                oreToggle.style.display = "none"
                if(radioItems[0].checked){
                    radioItems[1].checked=true} } } } 
    checkOptions() }

function checkOptions(){
    let gem = document.querySelector("#labelGem")
    for(i=0;i<radioTools.length;i++){
        if (radioTools[i].checked)
            {gem.innerHTML = "Gem : " + radioTools[i].value } }            

    let item = document.querySelector("#labelItem")
    for(i=0;i<radioItems.length;i++){
        if (radioItems[i].checked)
            {item.innerHTML = "Item : " + radioItems[i].value } } }



function calculateXp(){

    let target = targetLevel.value
    let current = currentExperience.value
    let needed = 0
    let msg = ""
    let goodInput = true
    let type = document.querySelector("#labelType")
    let other = false

    if (isNaN(target) || isNaN(current)|| target < 2 || current < 1 || fetchXpforLevel(target) < Number(current)){
        goodInput = false
        if (isNaN(target) || target < 2 ){ 
            msg = "Level to reach is not a valid number ..."}        
        if (isNaN(current) || current < 1){
            msg += "Current Exp is not a valid number ..."}
        if (fetchXpforLevel(target) < Number(current)){
        msg += "Target Level AND/OR Current Experience is/are wrong here ..."}            
        }
    else {
        target = Number(target)
        current = Number(current)
        needed = fetchXpforLevel(target)-current
        msg = "You need " + needed.toLocaleString()
        + "  more Experience points to reach Lv " + target
        }
    
    if(includeOptions.checked && goodInput ){
        let base = 13
        let toolBonus = 0
        let mining = ""
        let SdMult = 0
        let itemExp = 0
        let thisItem = ""
        let itemQuantity = 0

        let ItemS = [
            {text : "Stone", mining : 0.1,crafting : 0.1},
            {text : "Copper",mining : 1,crafting : 5},
            {text : "Iron",  mining : 5,crafting : 25},
            {text : "Silver",mining : 10,crafting : 50},
            {text : "Gold",  mining : 20,crafting : 100},
            {text : "Promethium",mining : 100,crafting : 500},
            {text : "Titanium",mining : 300,crafting : 2000}
        ]

        let skill = document.querySelector("#labelType")
        skill.innerHTML.includes("Mining") ?
        mining = true : mining = false

        for(i=0;i<radioTools.length;i++){
            if(radioTools[i].checked){toolBonus = i}}
        SdMult = base-toolBonus

        if (type.innerHTML.split(": ")[1] === "Crafting" && mediumCrafting.checked )
            {SdMult -= 1 ; other = true}

        if (type.innerHTML.split(": ")[1] === "Crafting" && craftingOutfit.checked )
            {SdMult -= 1 ; other = true}

        if (type.innerHTML.split(": ")[1] === "Mining" && miningOutfit.checked )
            {SdMult -= 1 ; other = true}

        if (type.innerHTML.split(": ")[1] === "Crafting" && hammerOrb.checked )
            {SdMult -= 2 ; other = true}

        if (type.innerHTML.split(": ")[1] === "Mining" && pickaxeOrb.checked )
            {SdMult -= 2 ; other = true}


        msg+= "<br> Current tool provides -" + toolBonus + " on Star Dust per Experience conversion"
        if (other) {msg+= "<br>( up to "+ (SdMult-base) + " with other cheked options )"}
        msg+= "<br> so for this configuration : 1 Exp will cost " + SdMult + " Star Dusts."
    
        for(i=0;i<radioItems.length;i++){
            if(radioItems[i].checked){thisItem = radioItems[i].value}}
        msg+= "<br> using " + thisItem + " for the conversion result as :" 

        thisItem = ItemS.filter(x => x.text === thisItem)[0]
        mining ? itemExp = thisItem.mining : itemExp = thisItem.crafting

        thisItem.text === "Stone" ?
        itemQuantity = needed * 10 : itemQuantity = Math.ceil(needed/itemExp)

        msg+= "<br>" + itemQuantity.toLocaleString() + " " + thisItem.text +
        " needed here for a total of " + (itemQuantity * itemExp).toLocaleString() +
        " Exp <br> which will cost " + ((itemQuantity * itemExp)*SdMult).toLocaleString() + 
        " Star Dust for the conversion."
    }
   expResult.innerHTML = msg
}




const quests = document.querySelectorAll(".quest")
quests.forEach(x=>x.addEventListener("click", function(e){toggleQuestDisplay(e.srcElement.innerHTML)} ))
const startQuest = true
toggleQuestDisplay()

function  toggleQuestDisplay(quest=""){
    let status = ""
    let questDiv = ""
    let allQuests = document.querySelectorAll(".quest-content")

    if (quest){
        let cpt = 0
        while (quest.indexOf(" ")>0){
            quest = quest.replace(" ","_")
            cpt++ ; if(cpt>50){break}}
            
        questDiv = document.querySelector("#"+quest)
        status =  questDiv.style.display
        status === "none" ? status = "block" : status = "none" }

    allQuests.forEach(x=>x.style.display="none")
    if (status && questDiv) {questDiv.style.display = status} }
      
const dropsTable = document.querySelector("#dropsTable")
tableBuilder(dropsTable,monsterDrops)

const dropsTableBtn = document.querySelector("#dropsTableBtn")
dropsTableBtn.style.cursor = "pointer"
dropsTableBtn.addEventListener("click",function(){
    if(dropsTable.style.display ==="" || dropsTable.style.display === "block")
        {dropsTable.style.display ="none"}
    else
        {dropsTable.style.display ="block"} })

dropsTableBtn.click()

const toolTable = document.querySelector("#toolTable")
tableBuilder(toolTable,Tools)

const brewingTable = document.querySelector("#brewingTable")
tableBuilder(brewingTable,Potions)

const fishingTable = document.querySelector("#fishingTable")
tableBuilder(fishingTable,Fishes)

//window.onresize = function(){
//    console.log("window size:"+window.innerWidth)}



