
//window.onresize = function(){
//    console.log("window size:"+window.innerWidth)}

function clickTitle(e){
    let car = ""
    e.srcElement.innerHTML.includes("📂") ?
    car = "📂" : car = "📁"

    let text = e.srcElement.innerHTML.replace("&nbsp;"+car,"")
    console.log(text)
    let section = document.querySelector("#"+text)
/*
    section.style.display === "none" ?
    section.style.display = "block" :
    section.style.display = "none"
*/ 
    if (section.style.display === "none"){
        section.style.display = "block"
        e.srcElement.innerHTML = e.srcElement.innerHTML.replace("📁","📂")
    }
    else {
        section.style.display = "none"
        e.srcElement.innerHTML = e.srcElement.innerHTML.replace("📂","📁")
    }


}


console.log("no")

body=document.querySelector(".bloody")
body.innerHTML = "thief  thief    thief"



const bestiary = document.querySelector("#Bestiary")
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


const beasts = 
["chicken","rat","spider","bee","lizard",
"ants","snake","wolf","thief","ent",
"bear","goblin","bat","skeleton",
"fire_hawk","fire_snake","fire_witch"
]

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
    img1.style.backgroundImage = "url('images/"+label+"')"
    img1.setAttribute("name",beasts[i])
    topContainer.appendChild(img1)
} }

function clickOn(e){
    bottomContainer.style.display = "block"
    label = e.srcElement.name+".JPG"
    if (document.querySelector("#loot")){bottomContainer.removeChild(document.querySelector("#loot"))}
    let loot = document.createElement("img")
    loot.style = `
    width:300px;
    height:auto;
    margin:20px 0 0 0;`
    window.innerWidth < 500 ?
    loot.style.left = "80px" :
    loot.style.left = e.clientX-30+"px"
    loot.style.top = (Math.floor( window.scrollY )+e.clientY-20)+"px"
    loot.src ="images/"+label
    loot.setAttribute("id","loot")
    loot.addEventListener("click",function(){
        bottomContainer.style.display = "none"
        bottomContainer.removeChild(document.querySelector("#loot"))})
    bottomContainer.appendChild(loot) }

setBestiary()

expArray=[[1,0],[2,8],[3,27],[4,65],[5,130],
[6,227],[7,367],[8,556],[9,804],[10,1122],
[11,1518],[12,2005],[13,2595],[14,3300],[15,4135],
[16,5113],[17,6250],[18,7564],[19,9072],[20,10794],
[21,12749],[22,14960],[23,17449],[24,20242],[25,23364],
[26,26485],[27,30713],[28,35000],[29,39741],[30,44970],
[31,50727],[32,57052],[33,63987],[34,71579],[35,79875],
[36,88928],[37,98792],[38,109524],[39,121185],[40,133841],
[41,147561],[42,162416],[43,178484],[44,195847],[45,214590],
[46,234805],[47,256588],[48,280040],[49,305271],[50,332393],
[51,361527],[52,392799],[53,426344],[54,462303],[55,500827],
[56,542071],[57,586204],[58,633400],[59,683844],[60,737732],
[61,795270],[62,856675],[63,922176],[64,992013],[65,1066441],
[66,1145727],[67,1230153],[68,1320017],[69,1415631],[70,1517324],
[71,1625443],[72,1740352],[73,1862436],[74,1992098],[75,2129765],
[76,2275883],[77,2430922],[78,2595378],[79,2769771],[80,2954649],
[81,3150587],[82,3358189],[83,3578093],[84,3810966],[85,4057512],
[86,4318467],[87,4594609],[88,4886753],[89,5195753],[90,5522511],
[91,5867971],[92,6233125],[93,6619015],[94,7026736],[95,7457435],
[96,7912320],[97,8392657],[98,8899774],[99,9435067],[100,10000000]]


//.toLocaleString()
function fetchXpforLevel(level){
    return expArray[Number(level)-1][1]
}
/*
let lv = prompt("input level to reach")

console.log("Xp for Lv"+lv+" : "+fetchXpforLevel(lv))
console.log(typeof(fetchXpforLevel(lv)))
console.log(Number(fetchXpforLevel(lv)))
*/



function setLiners(){
    const liners = document.querySelectorAll(".liner")
    for (i=0;i<liners.length;i++){
        liners[i].addEventListener("click",clickTitle)
        liners[i].style.cursor = "pointer"}
    const sections = document.querySelectorAll(".section")
    console.log(sections)
    for (i=0;i<sections.length;i++){
        sections[i].style.display = "none"
    }
    }

setLiners()