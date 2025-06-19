const body = document.querySelector("body")

let questions = [
    {text:"Which game has this line : You've met with a terrible fate, haven't you ?"
    ,options:["Ocarina of Time","Majora's Mask","Link's Awakening","Zelda II"],correct:"Majora's Mask"},

    {text:"When did The Legend of Zelda first release ?"
    ,options:["1984","1985","1986","1987"],correct:"1986",answer:undefined},

    {text:"What is the name of the boat in Wind Waker ?"
    ,options:["Prince of Pickled Peppers","Jack of Jaded Monkeys",
    "King of Red Lions","King of Blue Tigers"],correct:"King of Red Lions",answer:undefined},

    {text:"Which game allows Link to transform into a wolf ?"
    ,options:["Twilight Princess","Breath of the Wild",
    "Link to the Past","Oracle of Seasons"],correct:"Twilight Princess",answer:undefined},

    {text:"Which game is exclusive to the 3DS ?"
    ,options:["Link's Awakening","Ocarina of Time","Tears of the Kingdom",
    "Link Between Worlds"],correct:"Link Between Worlds",answer:undefined},

    {text:"In the Ocarina of Time, what item allows Link to travel through time ?"
    ,options:["The Bow of Time","The Ocarina of Time","The Flute of Time",
    "The Clock of Time"],correct:"The Ocarina of Time",answer:undefined},

    {text:"What currency is normally used in a Zelda game ?"
    ,options:["Dollars","Gold","Rupees","Trout"],correct:"Rupees",answer:undefined},

    {text:"What is the name of the floating island in Skyward Sword ?"
    ,options:["Skyloft","Sky Isla","Sky Island","Skyattic"],correct:"Skyloft",answer:undefined},

    {text:"What is the name of Link's horse ?"
    ,options:["Horsa","Charles","Epona","Ponya"],correct:"Epona",answer:undefined},

    {text:"Which Zelda game heavily relied on trains ?"
    ,options:["Ghost Train","Spirit Tracks","Spirit Rails",
    "Link's Tank Engine"],correct:"Spirit Tracks",answer:undefined},

    {text:"What race is Ganondorf ?"
    ,options:["Human","Orc","Hobbit","Gerudo"],correct:"Gerudo",answer:undefined},

    {text:"Who do you normally play as in the Legend of Zelda series ?"
    ,options:["Zelda","Navi","Link","Dark Link"],correct:"Link",answer:undefined},
]

let player = {
    progress : 0,
    answers : "",
    score : 0,
    runs : 0,
    good : 0,
    bad : 0,
    rewards:[]
}

let global = addEle({dad:body,setClass:"contCol",alignItems:"center"})

    lnk = "https://melomelo7.github.io/idlepixelinfo/farmrpg/farmRpg_Bob1_Farm.html"
    addEle({dad:global,setClass:"btn",text:"⇦ Go Back",backC:"rgb(45, 88, 128)",marginT:"20px",
    setFunc:()=>{window.open(lnk,"_self")}})

    addEle({dad:global,text:"Start Zelda Quiz",setClass:"btn",setFunc:startQuiz,
    setID:"startBtn",width:"200px",margin:"20px"})


    let quizzC = addEle({dad:global,setID:"quizzC",setClass:"contCol",alignItems:"center",visibility:"hidden"})

        addEle({dad:quizzC,setID:"questionTxt",fontS:"18px",backC:"teal",padding:"5px",marginL:"5px",
        border:"rgb(212, 212, 74) solid 2px",radius:"5px",width:"300px",minHeight:"80px"})

        let progC = addEle({dad:quizzC,height:"20px",width:"300px",border:"solid 2px yellow",
        radius:"5px",margin:"20px 0 0 20px",setID:"progC"})
            addEle({dad:progC,setID:"progB",height:"100%",width:"0",backC:"green",radius:"3px"})

        cont = addEle({dad:quizzC,setClass:"contRow",fontS:"18px",margin:"20px",alignItems:"center"})
            addEle({dad:cont,what:"select",fontS:"16px",setID:"ansSelect",padding:"5px",
            backC:"teal",border:"rgb(212, 212, 74) solid 2px",radius:"5px",textC:"white",
            width:"fit-content",height:"fit-content",minHeight:"26px",minWidth:"240px"})
        
            addEle({dad:cont,text:"Final Answer !!",setClass:"btn",setFunc:answerQ,setID:"answerBtn",
            fontS:"18px",padding:"5px",marginL:"10px"})
    
    cont = addEle({dad:global,setClass:"contCol",border:"teal solid 3px",padding:"10px",
    setID:"scoring",radius:"20px",minWidth:"300px",minHeight:"80px",marginL:"5px",display:"none"})
        addEle({dad:cont,setID:"dispAns",maxWidth:"300px",minHeight:"40px"})
        addEle({dad:cont,setID:"dispScore",margin:"10px 0",text:"Score : 0"})
        let rewC = addEle({dad:cont,setClass:"contRow",setID:"dispRewards"})
            let isrc = "https://farmrpg.com/img/items/"
            addEle({dad:rewC,text:"Schoolhouse Quiz Rewards :",marginR:"10px"})
            addEle({dad:rewC,setID:"rwd1",what:"img",imgFullSrc:isrc+"sword2.png",imgSize:30})
            addEle({dad:rewC,setID:"rwd2",what:"img",imgFullSrc:isrc+"strangemask1.png",imgSize:30})
            addEle({dad:rewC,setID:"rwd3",what:"img",imgFullSrc:isrc+"5164.png",imgSize:30})

function startQuiz(){
    player.progress = 1
    player.answers = ""
    player.score = 0
    player.good = 0
    player.bad = 0
    player.runs ++
    player.rewards = []
    let Pr = ((player.progress-1) * (100/questions.length))

    getID("questionTxt").innerHTML = "Q " +player.progress +"/" + 
    questions.length + " :<br>" + questions[player.progress-1].text

    cleanParent(getID("ansSelect"))
    addEle({dad:getID("ansSelect"),what:"option",text:"-- Answer --"})
    questions[player.progress-1].options.forEach(x=>{
        addEle({dad:getID("ansSelect"),what:"option",text:x})
    })

    getID("startBtn").style.visibility = "hidden"
    getID("quizzC").style.visibility = "visible"
    getID("progB").style.width = Pr +"%"
    getID("dispAns").innerHTML = ""
    getID("dispScore").innerHTML = "Score : " + player.score.toFixed(2) + " %"
    getID("rwd1").style.display = "none"
    getID("rwd2").style.display = "none"
    getID("rwd3").style.display = "none"

    getID("scoring").style.display = player.runs > 1 ? "flex" : "none"
}


function answerQ(){

    let Q = getID("questionTxt")
    let Ans = getID("ansSelect")
    let A = getID("answerBtn") 
    let addScore = 100/questions.length
    let col = undefined

    if(Ans.value !== "-- Answer --" && player.progress <= questions.length){
        
        let src = questions[player.progress-1]
        if(src.correct === Ans.value){
            player.good++
            col = "green"
        } else {player.bad++ ; col = "orange"}


        player.answers += spanText(col,Ans.value) +" | "
        getID("dispAns").innerHTML = player.answers

        player.score = player.good * addScore
        getID("dispScore").innerHTML = "Score : " + player.score.toFixed(2) + " %"

        if(player.bad === 0 && player.progress > questions.length){player.score = 100}
        if(player.score>=  80){getID("rwd1").style.display = "block"}
        if(player.score>=  90){getID("rwd2").style.display = "block"}
        if(player.score>= 100){getID("rwd3").style.display = "block"}

        getID("questionTxt").innerHTML = "Q " +player.progress +"/" + 
        questions.length + " : " + questions[player.progress-1].text
    

        player.progress++
        if(player.progress <= questions.length){
            Q.innerHTML = "Q " +player.progress +"/" + 
            questions.length + " :<br>" + questions[player.progress-1].text
            cleanParent(Ans)
            addEle({dad:Ans,what:"option",text:"-- Answer --"})
            questions[player.progress-1].options.forEach(x=>{
                addEle({dad:Ans,what:"option",text:x})
            })

            let Pr = (player.progress * (100/questions.length)) - (100/questions.length)
            getID("progB").style.width = Pr +"%"
        } else {
            getID("dispAns").innerHTML = getID("dispAns").innerHTML.slice(0,getID("dispAns").innerHTML.length-3)
            let Pr = ((player.progress-1) * (100/questions.length))
            getID("progB").style.width = Pr +"%"

            Q.innerHTML = "You have completed the Quiz !!!<br>Starting again will now show your progress"
            getID("startBtn").style.visibility = "visible"
            getID("scoring").style.display = "flex"
        }
    }
}

addEle({dad:global,text:spanText("orange","T*E*S*T",24)})
addEle({dad:global,text:spanText("tomato","T*E*S*T",24)})