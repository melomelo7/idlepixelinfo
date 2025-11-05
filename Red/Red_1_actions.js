
function removeSav(){
    let win1 = getDialogTopFrame()
    
    let cont = addEle({dad:win1,setClass:"contCol",width:"fit-content",minHeight:"400px",
    textC:"rgb(187, 181, 181)",fontS:"18px"})

        let subC = addEle({dad:cont,setClass:"contRow",marginT:"10px 0",justifyC:"space-between",
            alignItems:"center",minWidth:"200px"})
            addEle({dad:subC,text:"Delete Save",borderB:"2px solid #5A0000",fontS:"22px",marginL:"20px"})

            addEle({dad:subC,setClass:"btn",text:addEmo("❌","emoji red cross"),setFunc:()=>{
                win1.remove()
                lockScroll(false)
                getID("actions").selectedIndex = 0
            }}) 
        
        addEle({dad:cont,text:"⚠️ Warning ⚠️<br><br> Click yes will remove all progress",margin:"30px 0"})

        addEle({dad:cont,setClass:"btn",width:"80%",text:"Y E S",setFunc:()=>{
            removePlayer() ; player = player_back ; location.reload()
        }})


    win1.showModal()
    lockScroll()
}




function setRest(){

    let win1 = getDialogTopFrame()
    
    let cont = addEle({dad:win1,setClass:"contCol",width:"fit-content",minHeight:"400px",
    textC:"rgb(187, 181, 181)",fontS:"18px"})

        let subC = addEle({dad:cont,setClass:"contRow",marginT:"10px 0",justifyC:"space-between",
            alignItems:"center",minWidth:"200px"})
            addEle({dad:subC,text:"Resting ...",borderB:"2px solid #5A0000",fontS:"22px",marginL:"20px"})

            addEle({dad:subC,setClass:"btn",text:addEmo("❌","emoji red cross"),setFunc:()=>{
                clearTimeout(stat.timer)
                win1.remove()
                lockScroll(false)
                getID("actions").selectedIndex = 0
            }})

        subC = addEle({dad:cont,setClass:"contRow",margin:"20px 0 0 20px"})
            addEle({dad:subC,text:"Energy :",fontS:"18px",marginR:"5px"})
            let stat = getStat("Energy")
            addEle({dad:subC,text:stat.val+"/"+stat.cap,fontS:"18px",marginR:"5px",textC:"teal",setID:"restEnergy"})

        addEle({dad:cont,text:"Lay down and close your eyes ...",setClass:"btn",fontS:"18px",minWidth:250+"px",
        margin:"40px 20px",setID:"restBtn",setFunc:(e)=>{
            let btn = e.srcElement
            let txt1 = "Lay down and close your eyes ..."
            let txt2 = "Stop"
            let stat = getStat("Energy")
        
            if(btn.innerHTML === txt1){
                btn.innerHTML = txt2
                runRest()
            } else {
                clearTimeout(stat.timer)
                btn.innerHTML = txt1
                getID("restStatus").innerHTML = ""
            }
        }})

        addEle({dad:cont,setID:"restStatus",fontS:"18px",textC:"teal",margin:"20px",textA:"center"})

    win1.showModal()
    lockScroll()

    console.log("Resting")

}
function runRest(){
    let btn = getID("restBtn")
    let stat = getStat("Energy")

    let pace = stat.pace
    let dt = new Date()
    let pairT = dt.getSeconds() % 2 === 0 ? ".." : "...."
    getID("restStatus").innerHTML = "Resting "+pairT
    if(stat.val >= stat.cap){
        getID("restStatus").innerHTML = "You are fully Rested."
        btn.innerHTML = "Lay down and close your eyes ..."
    } else {
        stat.timer = setTimeout(()=>{
            stat.val = Number((stat.val + stat.inc).toFixed(1))
            stat.val = stat.val > stat.cap ? stat.cap : stat.val
            getID("restEnergy").innerHTML = stat.val+"/"+stat.cap
            runRest()
        }, pace);
    }
    savPlayer()
    dispStats()
}







function setHunt(){

    let win1 = getDialogTopFrame()
    
    let cont = addEle({dad:win1,setClass:"contCol",width:"fit-content",minHeight:"400px",textC:"rgb(187, 181, 181)",fontS:"18px"})

        let subC = addEle({dad:cont,setClass:"contRow",marginT:"10px 0",justifyC:"space-between",
            alignItems:"center",minWidth:"200px"})
            addEle({dad:subC,text:"Hunting ...",borderB:"2px solid #5A0000",fontS:"22px",marginL:"20px"})

            addEle({dad:subC,setClass:"btn",text:addEmo("❌","emoji red cross"),setFunc:()=>{
                win1.remove()
                lockScroll(false)
                getID("actions").selectedIndex = 0
            }})

        subC = addEle({dad:cont,setClass:"contRow",margin:"0 20px"})
            addEle({dad:subC,text:"Energy :",fontS:"18px",marginR:"5px"})
            let stat = getStat("Energy")
            addEle({dad:subC,text:stat.val+"/"+stat.cap,fontS:"18px",marginR:"5px",textC:"teal",setID:"huntEnergy"})

        subC = addEle({dad:cont,setClass:"contCol",setID:"huntBtnCont",margin:"10px 20px"})
            addEle({dad:subC,text:"Hunt small animals (1 Energy)",setClass:"btn",fontS:"18px",
            setID:"huntSmall",setFunc:(e)=>{startHunt(e.srcElement,"Small",1)}})

        subC = addEle({dad:cont,setClass:"contCol",setID:"fightCont",minHeight:"30px",justifyC:"center"})

    win1.showModal()
    lockScroll()

    console.log("hunting")
}

function startHunt(btn,size,energyCost){
    if(btn.disabled){console.log("out") ; return}

    let srcE = getStat("Energy")
    if(srcE.val >= energyCost){
        srcE.val -= energyCost
        getID("huntEnergy").innerHTML = srcE.val+"/"+srcE.cap
        dispStats()

        let workC = getID("fightCont")
        cleanParent(workC)
        
        addEle({dad:workC,marginL:"20px",setID:"huntInfo"})

        let cpt = 0
        let txt = ""
        let id = setInterval(() => {
            btn.disabled = true
            cpt++
            txt+=" ."
            getID("huntInfo").innerHTML = txt
            if(cpt>=5){clearInterval(id)}
        }, 400)

        setTimeout(()=>{
            getID("huntInfo").innerHTML = ""
            let skill = getSkill("Hunting")
            let enemy = getEnemy(skill,"Forest",size)
    
            let subC = addEle({dad:workC,setClass:"contCol"})
                let inC = addEle({dad:subC,setClass:"contRow"})
                    addEle({dad:inC,text:"Found",margin:"0 5px 0 20px"})
                    addEle({dad:inC,text:enemy.nbr,setID:"enemyNb"})
                    addEle({dad:inC,text:"x",marginR:"5px"})
                    addEle({dad:inC,text:enemy.lbl,setID:"enemyNm"})
                    addEle({dad:subC,setClass:"btn",text:"Attack !",marginL:"20px",setFunc:()=>{
                        getID("huntBtnCont").style.visibility = "hidden"
                        let enemies = [{lbl:getID("enemyNm").innerHTML,
                        nbr:3}]//Number(getID("enemyNb").innerHTML)
                        startFight(getID("fightCont"),enemies)
                    }})

            btn.disabled = false
        },2500)
    


    } else {
        simpleMsg("not enough Energy")
        let idx = player.actions.findIndex(x=>x==="Rest")
        if(idx===-1){player.actions.push("Rest") ; fillActions()}
    }

    /*

    */
}

function getEnemy(skill,where,type){
    console.log(skill)
    console.log(where)
    console.log(type)
    let enemy = {lbl:undefined,nbr:undefined}
    let area = locations.filter(x=>x.lbl=where)[0]
    let animals = area.animals.filter(x=>x.lbl===type)[0].types
    enemy.lbl = animals[Math.floor(Math.random() * animals.length)]
    enemy.nbr = Math.ceil(Math.random() * (skill.lvl+1))
    return enemy
}




function setLogs(){
    let win1 = getDialogTopFrame()
    
    let cont = addEle({dad:win1,setClass:"contCol",width:"fit-content",minHeight:"400px",
    textC:"rgb(187, 181, 181)",fontS:"18px"})

        let subC = addEle({dad:cont,setClass:"contRow",margin:"10px 0",justifyC:"space-between",
            alignItems:"center",minWidth:"200px"})
            addEle({dad:subC,text:"Logs",borderB:"2px solid #5A0000",fontS:"22px",marginL:"20px"})

            addEle({dad:subC,setClass:"btn",text:addEmo("❌","emoji red cross"),setFunc:()=>{
                win1.remove()
                lockScroll(false)
                getID("actions").selectedIndex = 0
            }}) 

        player.logs.forEach(log=>{addEle({dad:cont,text:log.txt})})

    win1.showModal()
    lockScroll()
}