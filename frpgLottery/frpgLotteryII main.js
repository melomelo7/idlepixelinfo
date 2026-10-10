function setInfoPg(){
  let info = bodyMid
  cleanParent(info)
  let main = bodySub
  cleanParent(main)

  let txt = `
  `+spanText({text:"Infos:",col:YG,underLine:"solid 2px yellow"})+`<br><br>  
  -Q- What is this page meant to be doing ?<br>
  -A- Its meant to help players do giveaway in the form<br>
  of a Lottery system.<br><br>
  -Q- steps to use this page ?<br>
  -A- `+spanText({text:"(step 1)",col:"yellow"})+` Check "`+spanText({text:"Items",col:YG})+`", see if the items you want<br>
  to use are available in the preset listing... if you cant<br>
  find the items add them to the listing.<br><br>
  -A- `+spanText({text:"(step 2)",col:"yellow"})+` Add `+spanText({text:"Rewards",col:YG})+` you plan to give to the players.<br>
  Think of a reward as a bag, inside a bag you can put 1<br>
  ... or more things, same for rewards.<br>
  Example 1 : Reward A = 100 OJ<br>
  Example 2 : Reward B = 50 OJ + 10 AP + ...<br><br>
  Have 10 Rewards with 100 OJ will result to spending<br>
  a total of 1000 OJ between 10 players.<br><br>
  `+spanText({text:
  `Toggle USE on the rewards will decide exactly which<br>
  are the rewards to include or exclude from the Lottery.<br>
  *If you did roll the winning numbers and set OFF the use<br>
  for a reward, it will lose its number.*<br>
  `,col:YG})+`<br>
  -A- `+spanText({text:"(step 3)",col:"yellow"})+` AFTER you flipped ON/OFF all the rewards you<br>
  wish included in your giveaway Lottery, its time to `+spanText({text:"Roll the<br>Winning Numbers.",col:YG})+`
  The system will generate random numbers <br>
  for ALL Used rewards. Roll again if you dont like the result.<br>`
 //+spanText({text:"*All Rewards must have a Number to be included in the Lottery<br>",col:"yellow"})+
  +`<br>-A- `+spanText({text:"(step 4)",col:"yellow"})+` And finaly run your Lottery by asking players<br>
  to send you numbers between the boundaries you have set when<br>
  rolling the numbers. Example : a number betwwen 1 and 100 ...<br>
  `+spanText({text:"Check Player numbers.",col:YG})

  addEle({dad:info,text:txt,margin:"10px"})
}

const savKey = "frpgLotterySav"

function savPlayer(){
  let mySave = JSON.stringify(player)
  localStorage.setItem(savKey,mySave)
}

function loadPlayer(){
    let savStatus = "Save Empty"
    let mySave = localStorage.getItem(savKey)
    if(mySave){
        player = JSON.parse(mySave)
        savStatus = "Save found"
    }
    else {
      restoreDefault()
    }
    console.log(savStatus)
}

function burnSav(){
  localStorage.removeItem(savKey)
  location.reload()
}

/*
function arrSorting(arr){
  let newArr = arr.sort()
  newArr = newArr.sort((a, b) => parseInt(a) - parseInt(b))
  newArr = newArr.map(x=>x.toLowerCase().replace(/[()]/g, ""))
  return newArr
}

function arrSorting2(arr){
  return arr.sort((a, b) => a.lbl.localeCompare(b.lbl))
}
*/

function arrSorting(arr){
  return [...arr].sort((a, b) => {
    const aLabel = String(a.lbl ?? "").trim();
    const bLabel = String(b.lbl ?? "").trim();

    // Match a number at the beginning of the label
    const aNumber = aLabel.match(/^\d+(?:\.\d+)?/);
    const bNumber = bLabel.match(/^\d+(?:\.\d+)?/);

    // Both labels start with numbers: sort numerically
    if (aNumber && bNumber) {
      return Number(aNumber[0]) - Number(bNumber[0]);
    }

    // Numbered labels come before non-numbered labels
    if (aNumber) return -1;
    if (bNumber) return 1;

    // Non-numbered labels: sort alphabetically
    return aLabel.localeCompare(bLabel, undefined, {
      sensitivity: "base",
    });
  });
}

function rndNB(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getNm(){
  let nm = undefined
  if(player.rewards.length===0){
    nm = "reward #"+(player.rewards.length+1)
  } else {
    let cpt = 0
    let bad = true
    while(bad){
      cpt++
      let test = "reward #"+cpt
      let idx = player.rewards.findIndex(x=>x.lbl.includes(test))
      if(idx===-1){bad = false ; nm = test}
      if(cpt>500){bad = false ; console.log("Name issue to generate for new reward name")}
    }
  }
  return nm
}


let itemsList = ["acorn pie","apple pie","breakfast boost","cabbage stew","cat's meow",
"cookie set","crunchy omelette","friendship bag 01","happy cookies","hickory omelette",
"lemon cream pie","lovely cookies","mushroom stew","neigh","onion soup","over the moon",
"protein bar","sea pincher special","quandary chowder","shrimp-a-plenty","spooky cookies",
"spooky pie","5 gold","10 gold","25 gold","50 gold","100 gold","orange juice",
"arnold palmer","Large Net","((Mug of Beer))","((Lemonade))"]

let ItmDefArr = []
for(let i=0;i<itemsList.length;i++){
  ItmDefArr.push({idx:undefined, default:true, lbl:itemsList[i].toLowerCase().replace(/[()]/g, ""), })
}
ItmDefArr = arrSorting(ItmDefArr)
for(let i=0;i<ItmDefArr.length;i++){ItmDefArr[i].idx = "d"+(i+1)}


let accts = ["#FFD166","#2196F3","#FF4D4D","#9C27B0","#FF9800","#7CFC00","#E91E63","#009688",
"#708090","#A89F91"]

function restoreDefault(){
  player.items.default = []
  let tpO = undefined
  ItmDefArr.forEach(it=>{
    tpO = {idx:it.idx, default:it.default, lbl:it.lbl,}
    player.items.default.push(tpO)
  })
  joinItems()
}

function joinItems(){
  let arr = [] ; let tpO = undefined

  player.items.default.forEach(it=>{
    tpO = {idx:it.idx, default:it.default, lbl:it.lbl,}
    arr.push(tpO)
  })
  
  player.items.custom.forEach(it=>{
    tpO = {idx:it.idx, default:it.default, lbl:it.lbl,}
    arr.push(tpO)
  })

  player.items.all = arrSorting(arr)
}

let player = {
  items :{
    default:[],
    custom:[],
    all:[]
  },
  masterPool:[],
  poolRewards:[],
  playerPool:[],
  rwdRefID:undefined,
  poolMin:1,
  poolMax:100,
  playersNB:[],
  draftRwd:undefined,
  misc:{
    radios:4,
    radiosdef:4,
    custom:[],
  },
  mailbox:{
    lookforBack:undefined,
    lookforNew:undefined
  }
}

let YG = "yellowgreen" 

loadPlayer()
player.rwdRefID = undefined

const body = document.querySelector("body")
  addEle({dad:body,text:`for page smooth processing all inputs are set 
  to lower case.<br>Example : A Big Cat Named TOM => a big cat named 
  tom`,textC:YG,margin:"5px 10px",fontS:"16px",fontS:"14px"})//,

  const bodyTop = addEle({dad:body,backC:"rgb(38, 38, 38)",setID:"bodyTop"})//padding:"5px 10px"
  const bodyMid = addEle({dad:body,backC:"rgb(64, 64, 64)",setID:"bodyMid",display:"inline-block",width:"100%"})
  bodyMid.style.overflowWrap = "anywhere"
  bodyMid.style.boxSizing = "border-box"
  const bodySub = addEle({dad:body,setClass:"contCol",height:"100%",setID:"bodySub"})//backC:"rgb(38, 38, 38)",
//  bodySub.style.height = "max-content"
//  bodySub.style.width = "max-content"

////////////////////////
let last = "10/10 19:05"
////////////////////////


function setPage(){
  let cr = addEle({dad:bodyTop,setClass:"contRow",alignItems:"center"})
    lnk = "https://melomelo7.github.io/idlepixelinfo/farmrpg/farmRpg_Bob1_Farm.html"
    addEle({dad:cr,setClass:"btn",text:"⇦ Go Back",backG:"",backC:"rgb(49,75,134)",
    fontS:"16px",setFunc:()=>{window.open(lnk,"_self")}})
  
    addEle({dad:cr,what:"select",setClass:"select",textA:"center",marginL:"10px",
    border:"green 3px solid",setID:"topSelA",setFunc:(e)=>{
      let src = e.srcElement
      if(src.selectedIndex>0){
        switch(src.options[src.selectedIndex].innerHTML){
          case "Infos" : setInfoPg()
            break
          case "Items" : setItems()
            break
          case "Rewards": setRewards()
            break
          case "Players": setPlayers()
            break
          case "Misc." : setMiscs()
            break
          case "Delete Save" : DelSave()
            break
        }
      }
    }})

    addEle({dad:cr,text:"last up : "+last,marginL:"10px",fontS:"14px",textC:accts[1]})


  setTopSel()
}
setPage()

function setTopSel(){
  let tgt = getID("topSelA")
  cleanParent(tgt)
  addEle({dad:tgt,what:"option",text:"-- Select --"})
  addEle({dad:tgt,what:"option",text:"Infos"})
  addEle({dad:tgt,what:"option",text:"Items"})
  addEle({dad:tgt,what:"option",text:"Rewards"})
  addEle({dad:tgt,what:"option",text:"Players"})
  addEle({dad:tgt,what:"option",text:"Misc."})
  addEle({dad:tgt,what:"option",text:"Delete Save"})
}

function DelSave(){
  cleanParent(bodyMid)
  cleanParent(bodySub)
  addEle({dad:bodyMid,setClass:"btn",border:"solid red 4px",text:"Confirm (ALL data Reset)",
  margin:"40px",setFunc:()=>{burnSav()}})
}

function setMiscs(){
  let info = bodyMid
  cleanParent(info)
  let main = bodySub
  cleanParent(main)

  addEle({dad:info,text:`When a Radio element is used<br>
  Pick the color you want to use :`,margin:"5px 10px",textC:YG})

  let cr = addEle({dad:main,setClass:"contRow",alignItems:"center",margin:"10px 0 0 40px",
  maxWidth:"180px",flWrap:"wrap"})
    for(let i=0;i<accts.length;i++){
      addEle({dad:cr,backC:accts[i],height:"20px",width:"30px",margin:"0 5px 10px 0",
      setID:"radcol:"+i,text:(i+1),textA:"center",textC:"black",setFunc:(e)=>{
        let idx = Number(e.srcElement.id.split(":")[1])
        getID("tstRad").style.accentColor = accts[idx]
        getID("colNb").innerHTML = (idx+1)
        getID("tstRad").click()
        player.misc.radios = idx
        savPlayer()
      }})
    }
  
  cr = addEle({dad:main,setClass:"contRow",alignItems:"center",marginL:"10px"})
    addEle({dad:cr,text:"Test Radio Element Color :",marginR:"10px"})
    addEle({dad:cr,what:"radio",isInput:true,height:"18px",width:"18px",setID:"tstRad"})
    addEle({dad:cr,textC:YG,marginL:"10px",setID:"colNb"})

  addEle({dad:main,text:"(base color setting is "+player.misc.radiosdef+
  ", changes are saved)",marginL:"5px"})

 getID("radcol:"+ player.misc.radios).click() 

}






function setItems(){
  let info = bodyMid
  cleanParent(info)
  let main = bodySub
  cleanParent(main)

  addEle({dad:main,setClass:"contCol",setID:"mainFr",height:"700px",overflowX:"auto",
  width:"fit-content",padding:"5px 0 5px 10px"})

  let cont = addEle({dad:info,margin:"5px 0 0 5px"})
    let tb = addEle({dad:cont,what:"table"})
      let tr = addEle({dad:tb,what:"tr"})
        let txt = "in Bank<br>( Total )"
        addEle({dad:tr,what:"td",text:txt,fontS:"14px",padding:"5px",textA:"center",borderB:"teal solid 2px"})
        txt = "Default ("+ItmDefArr.length+")"
        let tc = addEle({dad:tr,what:"td",padding:"5px",border:"teal solid 2px",borderT:"none"
          ,display:"flex",flDir:"column",alignItems:"center"})
          addEle({dad:tc,text:txt,fontS:"14px"})
          addEle({dad:tc,setClass:"btn",margin:"5px 0 0 0",text:"Restore",border:"solid 2px green",
          backC:"darkgreen",fontS:"14px",setFunc:()=>{restoreDefault() ; setItems()}})
        txt = "Custom"
        addEle({dad:tr,what:"td",text:txt,fontS:"14px",padding:"5px",textA:"center",border:"teal solid 2px",
        borderT:"none",borderL:"none"})
        txt = "Displayed"
        addEle({dad:tr,what:"td",text:txt,fontS:"14px",padding:"5px",textA:"center",borderB:"teal solid 2px"})

      tr = addEle({dad:tb,what:"tr"})
        txt = player.items.all.length
        addEle({dad:tr,what:"td",text:txt,textC:YG,textA:"center"})
        txt = player.items.default.length
        addEle({dad:tr,what:"td",text:txt,textC:YG,textA:"center",border:"teal solid 2px",borderB:"none",borderT:"none"})
        txt = player.items.custom.length
        addEle({dad:tr,what:"td",text:txt,textC:YG,textA:"center",borderR:"teal solid 2px"})
        addEle({dad:tr,what:"td",setID:"itmArr",textC:YG,textA:"center",textC:"yellow"})

  let cr = addEle({dad:info,setClass:"contRow",alignItems:"center",margin:"10px 0 5px 10px"})
    addEle({dad:cr,text:"Filter Name :",marginR:"5px"})
    addEle({dad:cr,what:"input",isInput:true,textA:"center",setID:"inFilItm",
    marginR:"10px",border:"green solid 3px",radius:"10px",maxLen:25,setFunc:(e)=>{
      let dispFr = getID("mainFr") 
      if(!dispFr){return}
      cleanParent(dispFr)
      getID("lenlen1").innerHTML = e.srcElement.value.length
      let txt = e.srcElement.value.toLowerCase()
      let arr = []
      if(txt.length===0)
           {arr = player.items.all} 
      else {arr = player.items.all.filter(x=>x.lbl.includes(txt))}
      getID("itmArr").innerHTML = arr.length
      for(let i=0;i<arr.length;i++){
        let itm = arr[i]
        let cr = addEle({dad:dispFr,setClass:"contRow",alignItems:"center",margin:"5px"})
          addEle({dad:cr,setClass:"arrowToggler",text:"X",border:"red solid 2px",
          padding:"1px 4px",setID:"del:"+itm.idx,setFunc:(e)=>{
            let itmID = e.srcElement.id.split(":")[1]
            if(itmID.includes("d")){
              let idx = player.items.default.findIndex(x=>x.idx===itmID)
              player.items.default.splice(idx,1)
            } else {
              let idx = player.items.custom.findIndex(x=>x.idx===itmID)
              player.items.custom.splice(idx,1)
            }
            joinItems()
            savPlayer()
            setItems()            
          }})
          addEle({dad:cr,text:"- "+itm.lbl,margin:"0 10px",backC:"green",width:"200px",paddingL:"5px"})
      }
    }})
    addEle({dad:cr,setID:"lenlen1"})

  cr = addEle({dad:info,setClass:"contRow",alignItems:"center",margin:"5px"})
      addEle({dad:cr,text:"Didnt find it ? Add your Custom Item",borderB:"green solid 2px",margin:"0 5px"})
      addEle({dad:cr,setClass:"arrowToggler",text:"🔽",setFunc:(e)=>{
        let src = e.srcElement
        let disp = getID("AddItmFr")
        disp.style.display = src.innerHTML === "🔼" ? "none" : "flex"
        src.innerHTML = src.innerHTML === "🔼" ? "🔽" : "🔼"
        if(src.innerHTML === "🔼"){
          if(getID("inFilItm").value.length>0){getID("newItmNm").value = getID("inFilItm").value}
          getID("newItmNm").focus()
        }
      }}) // 🔼
  
  let itmAddFr = addEle({dad:info,setClass:"contCol",setID:"AddItmFr",margin:"5px 10px",
  border:"green solid 2px",radius:"5px",padding:"5px",width:"fit-content",display:"none"})
    cr = addEle({dad:itmAddFr,setClass:"contRow",alignItems:"center",margin:"5px"})
      addEle({dad:cr,text:"Name :",margin:"0 5px 0 10px"})
      addEle({dad:cr,what:"input",isInput:true,textA:"center",setID:"newItmNm",
      marginR:"10px",border:"green solid 3px",radius:"10px",maxLen:25,
      setFunc:(e)=>{getID("lenlen2").innerHTML = e.srcElement.value.length}})
      addEle({dad:cr,setID:"lenlen2",text:"0"})
    cr = addEle({dad:itmAddFr,setClass:"contRow",alignItems:"center",margin:"5px"})
      addEle({dad:cr,setClass:"btn",text:"Save this new Item",border:"green solid 2px",
      backC:"darkgreen",minWidth:"190px",setFunc:()=>{
        let txt = getID("newItmNm").value.toLowerCase().replace(/[()]/g, "")

        if(txt.length>0){
          player.items.custom.push({
            idx:"c"+(player.items.custom.length+1),
            default:false,
            lbl:txt,
          })
        }
        joinItems()
        savPlayer()
        setItems()
      }})
      addEle({dad:cr,setClass:"arrowToggler",text:"X",border:"red solid 2px",
      padding:"1px 4px",marginL:"10px",fontS:"18px",setFunc:(e)=>{setItems()}})

    addEle({dad:itmAddFr,text:`Copy an item name from the game is<br>possible :
    ((Stone)) will be saved as stone.`,textC:YG,fontS:"16px"})



  let ev = new Event("input") ; getID("inFilItm").dispatchEvent(ev)
}





function setRewards(){
  let info = bodyMid
  cleanParent(info)
  let main = bodySub
  cleanParent(main)

  let cr = addEle({dad:info,setClass:"contRow",alignItems:"center",margin:"10px 0 5px 10px"})
    addEle({dad:cr,setClass:"arrowToggler",text:"🔽",marginR:"5px",setName:"arrGrp",setID:"arr:1",
    setFunc:(e)=>{
      let src = e.srcElement
      document.getElementsByName("arrGrp").forEach(x=>{if(x.id!==src.id){x.innerHTML = "🔽"}})
      player.rwdRefID = undefined

      let disp = bodySub
      cleanParent(disp)
      src.innerHTML = src.innerHTML === "🔼" ? "🔽" : "🔼"
      if(src.innerHTML === "🔼"){setMasterPool()}
    }}) // 🔼
    addEle({dad:cr,text:"Set your Giveaway Pool",borderB:"green solid 2px"})
    addEle({dad:cr,marginL:"5px",setID:"poolCt1"})

  cr = addEle({dad:info,setClass:"contRow",alignItems:"center",margin:"10px 0 5px 10px"})
    addEle({dad:cr,setClass:"arrowToggler",text:"🔽",marginR:"5px",setName:"arrGrp",setID:"arr:2",
    setFunc:(e)=>{
      let src = e.srcElement
      document.getElementsByName("arrGrp").forEach(x=>{if(x.id!==src.id){x.innerHTML = "🔽"}})
      player.rwdRefID = undefined

      let disp = bodySub
      cleanParent(disp)
      src.innerHTML = src.innerHTML === "🔼" ? "🔽" : "🔼"
      if(src.innerHTML === "🔼"){setPoolRewards()}
    }}) // 🔼
    addEle({dad:cr,text:"Set Rewards from the Pool",borderB:"green solid 2px"})
    addEle({dad:cr,marginL:"5px",setID:"rwdCt1"})
    updDispTtls()
}


function setMasterPool(){
  let tgt = bodySub
  let bds = "green dotted 2px"
  let fork = addEle({dad:tgt,setClass:"contRow"})
    let forkA = addEle({dad:fork,setClass:"contCol",margin:"5px 0 0 5px"})
      let forkA1 = addEle({dad:forkA,setClass:"contCol",border:"green solid 2px",radiusTL:"5px",
      radiusTR:"5px"})
      let forkA2 = addEle({dad:forkA,setClass:"contCol",border:"green solid 2px",borderT:"none",
      padding:"5px"})
      let forkA3 = addEle({dad:forkA,setClass:"contCol",border:"green solid 2px",borderT:"none",
      padding:"5px"})
      let forkA4 = addEle({dad:forkA,setClass:"contCol",border:bds,radius:"5px",
      padding:"5px",setID:"forkA4",maxHeight:"500px",overflowX:"auto"})

    let forkB = addEle({dad:fork,setClass:"contCol",margin:"5px 0 0 5px"})
      let forkB1 = addEle({dad:forkB,setClass:"contCol",border:"green solid 2px",radiusTL:"5px",
      radiusTR:"5px",padding:""})

      let forkB2 = addEle({dad:forkB,setClass:"contCol",border:"green solid 2px",borderT:"none",
      padding:"5px",setID:"forkB2"})

      let forkB3 = addEle({dad:forkB,setClass:"contCol",border:"green solid 2px",padding:"5px",
      setID:"forkB3",borderT:"none",radiusBL:"5px",radiusBR:"5px",maxHeight:"500px",overflowX:"auto"})
    


  let txt = "Item Bank (" + spanText({text:player.items.all.length,col:"yellow"}) + ")"
  addEle({dad:forkA1,text:txt,textA:"center"})

  cr = addEle({dad:forkA2,setClass:"contRow",alignItems:"center",margin:""})
    addEle({dad:cr,textC:"white",textA:"center",setID:"addItmN",minWidth:"220px",marginL:"",backC:"green"})
  cr = addEle({dad:forkA2,setClass:"contRow",alignItems:"center",margin:"10px 0 5px 0",justifyC:"center"})
    addEle({dad:cr,text:"Total :",marginR:"5px"})
    let inQ = addEle({dad:cr,what:"input",isInput:true,numInput:true,width:"40px",setVal:1,
    textA:"center",setID:"addItmQ"})
    inQ.addEventListener('keydown', function(event) 
    {if (event.key === 'Enter'){  getID("savtoPool").click()}})

  cr = addEle({dad:forkA2,setClass:"contRow",alignItems:"center",justifyC:"center"})
    addEle({dad:cr,setClass:"btn",text:"Save item to Giveaway pool",border:"green solid 2px",
    backC:"darkgreen",marginL:"",setID:"savtoPool",setFunc:()=>{
      let nm = getID("addItmN").innerHTML
      let qt = Number(getID("addItmQ").value)
      qt = qt>0 ? qt : 1
      if(!nm.includes("---")){
        player.masterPool.push({
          idx:crypto.randomUUID(),
          lbl:nm,
          val:qt,
          selected:false,
        })
        getID("addItmQ").value = 1
        player.masterPool = arrSorting(player.masterPool)
//        for(let i=0;i<player.masterPool.length;i++){player.masterPool[i].idx=(i+1)}
//        console.log(player.masterPool)
        savPlayer()
        getID("poolCt1").innerHTML = "("+ spanText({text:player.masterPool.length,col:YG}) + ")"
        getID("poolCt2").innerHTML = "("+ spanText({text:player.masterPool.length,col:YG}) + ")"
        fillForB3()
        showMaster()
        document.getElementsByName("masterIRads")[0].click()
      }
    }})

  cr = addEle({dad:forkA3,setClass:"contRow",alignItems:"center",justifyC:"center"})
    addEle({dad:cr,text:"Filter Items :",marginR:"5px"})
    addEle({dad:cr,setID:"itmCt"})
  cr = addEle({dad:forkA3,setClass:"contRow",alignItems:"center",justifyC:"center"})
    addEle({dad:cr,what:"input",isInput:true,maxLen:25,margin:"5px 5px 5px 0",
    textA:"center",setID:"itmFiltIn",setFunc:(e)=>{
      fillForB3()
      if(document.getElementsByName("itmRads")[0]){document.getElementsByName("itmRads")[0].click()}
//      document.getElementsByName("itmRads")[0].click()
    }})



  cr = addEle({dad:forkB1,setClass:"contRow",alignItems:"center",justifyC:"center"})
    addEle({dad:cr,text:"Giveaway Pool",textA:"center",marginR:"5px"})
    addEle({dad:cr,setID:"poolCt2"})

  cr = addEle({dad:forkB2,setClass:"contRow",alignItems:"center",margin:""})
    addEle({dad:cr,textC:"white",textA:"center",setID:"masterItmN",minWidth:"220px",
    marginL:"",backC:"green",text:spanText({text:"---",col:accts[6]})})
  cr = addEle({dad:forkB2,setClass:"contRow",alignItems:"center",margin:"10px 0 5px 0",justifyC:"center"})
    addEle({dad:cr,text:"Adjust Total :",marginR:"5px"})
    addEle({dad:cr,what:"input",isInput:true,numInput:true,width:"40px",setVal:1,
    textA:"center",setID:"masterItmQ"})
  cr = addEle({dad:forkB2,setClass:"contRow",alignItems:"center",justifyC:"center"})
    addEle({dad:cr,setClass:"btn",text:"Save new Total",border:"green solid 2px",
    backC:"darkgreen",marginL:"",setFunc:()=>{
      if(!getID("masterItmN").innerHTML.includes("---")){
        let txt = getID("masterItmN").innerHTML
        let idx = player.masterPool.findIndex(x=>x.lbl===txt)
        let qt = Number(getID("masterItmQ").value)
        qt = qt > 0 ? qt : 1
        player.masterPool[idx].val = qt
        savPlayer()
        showMaster()
        if(player.masterPool.length>0){document.getElementsByName("masterIRads")[0].click()}
      }
    }})


  showMaster()
  let ev = new Event("input") ; getID("itmFiltIn").dispatchEvent(ev)
  document.getElementsByName("itmRads")[0].click()
  if(player.masterPool.length>0){document.getElementsByName("masterIRads")[0].click()}
  getID("itmFiltIn").focus()

  
}
function getItmArr(){
  let txt = getID("itmFiltIn").value.toLowerCase()
  let arr = []
  if(txt.length === 0)
       {player.items.all.forEach(x=>{arr.push(x.lbl)})}
  else {player.items.all.filter(x=>x.lbl.includes(txt)).forEach(x=>arr.push(x.lbl))}
  if(player.masterPool.length>0){
    player.masterPool.forEach(m=>{
      let idx = arr.findIndex(x=>x===m.lbl)
      if(idx!==-1){
        arr.splice(idx,1)
      }
    })
  }
  return arr
}

function fillForB3(){
  let tgt = getID("forkA4")
  cleanParent(tgt)
  let tb = addEle({dad:tgt,what:"table"})
  let arr = getItmArr()
  for(let i=0;i<arr.length;i++){
    let itm = arr[i]
    let tr = addEle({dad:tb,what:"tr"})
      let tc = addEle({dad:tr,what:"td"})
        addEle({dad:tc,what:"radio",isInput:true,setID:"itmRad:"+i,setName:"itmRads",
        marginR:"5px",accentCol:accts[player.misc.radios],setFunc:(e)=>{
          let idx = Number(e.srcElement.id.split(":")[1])
          let arr = getItmArr()
          getID("addItmN").innerHTML = arr[idx]
        }})
      addEle({dad:tr,what:"td",text:itm})
  }
  getID("itmCt").innerHTML = "(" + spanText({text:getItmArr().length,col:"yellow"}) + ")"
}

function showMaster(){
  let tgt = getID("forkB3")
  cleanParent(tgt)
  let tb = addEle({dad:tgt,what:"table"})
  for(let i=0;i<player.masterPool.length;i++){
    let itm = player.masterPool[i]
    let tr = addEle({dad:tb,what:"tr"})
      let tc = addEle({dad:tr,what:"td"})
        addEle({dad:tc,what:"radio",isInput:true,setID:"masterIRad:"+i,setName:"masterIRads",
        marginR:"5px",accentCol:accts[player.misc.radios],setFunc:(e)=>{
          let idx = Number(e.srcElement.id.split(":")[1])
          let itm = player.masterPool[idx]
          getID("masterItmN").innerHTML = itm.lbl
          getID("masterItmQ").value = itm.val
          getID("poolCt2").innerHTML = "("+ spanText({text:player.masterPool.length,col:YG}) + ")"
        }})
      addEle({dad:tr,what:"td",text:itm.val.toLocaleString(),textC:YG,padding:"0 5px"})
      addEle({dad:tr,what:"td",text:itm.lbl})
    tc = addEle({dad:tr,what:"td",paddingL:"10px"})
        addEle({dad:tc,setClass:"arrowToggler",text:"X",border:"red solid 2px",
        padding:"1px 4px",width:"fit-content",setID:"delMas:"+i,margin:"3px 0",setFunc:(e)=>{
          let idx = e.srcElement.id.split(":")[1]
          player.masterPool.splice(idx,1)
          getID("masterItmN").innerHTML = spanText({text:"---",col:accts[6]})
          getID("masterItmQ").value = 1
          savPlayer()
          getID("poolCt1").innerHTML = "("+ spanText({text:player.masterPool.length,col:YG}) + ")"
          getID("poolCt2").innerHTML = "("+ spanText({text:player.masterPool.length,col:YG}) + ")"
          fillForB3()
          showMaster()
          if(player.masterPool.length>0){document.getElementsByName("masterIRads")[0].click()}
          if(document.getElementsByName("itmRads")[0]){document.getElementsByName("itmRads")[0].click()}
//          document.getElementsByName("itmRads")[0].click()
        }})
  }
  if(document.getElementsByName("itmRads")[0]){document.getElementsByName("itmRads")[0].click()}
}








function setPoolRewards(){
  let tgt = bodySub
  if(player.masterPool.length>0){

    player.masterPool.forEach(x=>x.selected =false)

    let bds = "green dotted 2px"
    let fork = addEle({dad:tgt,setClass:"contRow"})
      let forkA = addEle({dad:fork,setClass:"contCol",margin:"5px 0 0 5px"})
        let forkA1 = addEle({dad:forkA,setClass:"contCol",border:"green solid 2px",radiusTL:"5px",
        radiusTR:"5px",setID:"forkA1"})
        let forkA2 = addEle({dad:forkA,setClass:"contCol",border:"green solid 2px",borderT:"none",
        padding:"5px",setID:"forkA2"})
        let forkA3 = addEle({dad:forkA,setClass:"contCol",border:"green solid 2px",borderT:"none",
        padding:"5px",setID:"forkA3"})
        let forkA4 = addEle({dad:forkA,setClass:"contCol",border:bds,radius:"5px",
        padding:"5px",setID:"forkA4",maxHeight:"500px",overflowX:"auto"})
  
      let forkB = addEle({dad:fork,setClass:"contCol",margin:"5px 0 0 5px"})
        let forkB1 = addEle({dad:forkB,setClass:"contCol",border:"green solid 2px",radiusTL:"5px",
        radiusTR:"5px",setID:"forkB1"})
  
        let forkB2 = addEle({dad:forkB,setClass:"contCol",border:"green solid 2px",borderT:"none",
        padding:"5px",setID:"forkB2"})
  
        let forkB3 = addEle({dad:forkB,setClass:"contCol",border:"green solid 2px",padding:"5px",
        setID:"forkB3",borderT:"none",radiusBL:"5px",radiusBR:"5px",maxHeight:"500px",overflowX:"auto"})

        
        cr = addEle({dad:forkA1,setClass:"contRow",alignItems:"center",justifyC:"center",padding:"0 5px"})
          addEle({dad:cr,text:"Pool Bank",textA:"center",marginR:"5px"})
          let txt = "(" + spanText({text:player.masterPool.length,col:"yellow"}) + ")"
          addEle({dad:cr,text:txt,textA:"center",setID:"poolBCt"})

        addEle({dad:forkA2,text:"Pick Items to include<br>in the next Reward",textA:"center"})

        cr = addEle({dad:forkA3,setClass:"contRow",alignItems:"center",justifyC:"center",padding:"2px"})
          addEle({dad:cr,setClass:"btn",text:"Clear",border:"red solid 2px",backC:"darkgreen",width:"80%",
          setFunc:()=>{
            player.rwdRefID = undefined
            player.masterPool.forEach(x=>x.selected = false)
            showPoolBank()
            showNextRwd()
          }})

        cr = addEle({dad:forkB1,setClass:"contRow",alignItems:"center",justifyC:"center",padding:"0 5px"})
          addEle({dad:cr,text:"Rewards Bank",textA:"center",marginR:"5px"})
          txt = "(" + spanText({text:player.poolRewards.length,col:"yellow"}) + ")"
          addEle({dad:cr,text:txt,textA:"center",setID:"rwdBCt"})

        showPoolBank()
        showNextRwd()
  } else {
    addEle({dad:tgt,text:"You need to Set your Giveaway Pool first",textC:accts[1],margin:"5px 0 0 5px"})
  }
}


function dispatchedVal(itm){
  let sum = 0
  player.poolRewards.forEach(x=>{
    x.content.forEach(c=>{
      if(c.itmID === itm.idx){sum += c.val}
    })
  })
  return sum
}

function showPoolBank(){
  let tgt = getID("forkA4")
  cleanParent(tgt)

  let tb = addEle({dad:tgt,what:"table"})
  let arr = player.masterPool
  for(let i=0;i<arr.length;i++){
    let itm = arr[i]
    let tr = addEle({dad:tb,what:"tr"})
      let tc = addEle({dad:tr,what:"td"})
        let cbx = addEle({dad:tc,what:"checkbox",isInput:true,setID:"poolBCheck:"+i,setName:"poolBChecks",
        setFunc:(e)=>{
          let idx = Number(e.srcElement.id.split(":")[1])
          player.masterPool[idx].selected = e.srcElement.checked
          if(player.rwdRefID !== undefined){
            let srcI = player.masterPool[idx]
            let rwd = player.poolRewards.filter(x=>x.idx === player.rwdRefID)[0]
            if(!e.srcElement.checked){
              let idx2 = rwd.content.findIndex(x=>x.itmID === srcI.idx)
              rwd.content.splice(idx2,1)
            } else {
              rwd.content.push({itmID:srcI.idx,lbl:srcI.lbl,val:0})
            }
          }
          showNextRwd()
        }})
        if(itm.selected){cbx.checked = true}
      addEle({dad:tr,what:"td",text:itm.lbl,padding:"0 5px",setID:"poolBCheckT:"+i,setFunc:(e)=>{
        let idx = Number(e.srcElement.id.split(":")[1])
        getID("poolBCheck:"+idx).click()
      }})
      addEle({dad:tr,what:"td",textC:YG,textA:"right",setName:"grpMasterBk"})
  }
  updDispTtls()
}



function updDispTtls(){
  let grp = document.getElementsByName("grpMasterBk")
  for(let i=0;i<player.masterPool.length;i++){
    if(grp[i]){
      let itm = player.masterPool[i]
      grp[i].innerHTML = (itm.val - dispatchedVal(itm)).toLocaleString() + "/" + itm.val.toLocaleString()
    }
  }

  grp = document.getElementsByName("grpRwdBk")
  let arr = player.masterPool.filter(x=>x.selected)
  for(let i=0;i<arr.length;i++){
    if(grp[i]){
      let itm = arr[i]
      let cap = Number(document.getElementsByName("itmQts")[i].value)
      let dispo = itm.val - dispatchedVal(itm)
      if(player.rwdRefID !== undefined){
        let srcR = player.poolRewards.filter(x=>x.idx === player.rwdRefID)[0]
        let srcI = srcR.content.filter(x=>x.itmID === itm.idx)[0]
        dispo += srcI.val
      }
      let tcol = cap > dispo ? accts[6] : YG
      grp[i].innerHTML = "/"+spanText({text:dispo,col:tcol})
    }
  }

  let txt = "("+ spanText({text:player.masterPool.length,col:YG}) + ")"
  getID("poolCt1").innerHTML = txt
  txt = "(" + spanText({text:player.poolRewards.length,col:"yellow"}) + ")"
  getID("rwdCt1").innerHTML = txt
  if(getID("rwdBCt")){getID("rwdBCt").innerHTML = txt}
}



function showNextRwd(){
  let tgt = getID("forkB2")
  cleanParent(tgt)

  let refRwd = undefined
  if(player.rwdRefID !==undefined){
    refRwd = player.poolRewards.filter(x=>x.idx === player.rwdRefID)[0]
    player.masterPool.forEach(x=>{x.selected = false})
    refRwd.content.forEach(c=>{
      player.masterPool.filter(x=>x.idx===c.itmID)[0].selected = true
    })
    showPoolBank()
  }

  cr = addEle({dad:tgt,setClass:"contRow",alignItems:"center",marginB:"5px"})
    let txt = refRwd === undefined ? "next Reward :" : "Reward :"
    addEle({dad:cr,text:txt,borderB:"green dotted 2px",width:"fit-content"})
    txt = refRwd === undefined ? "#"+(player.poolRewards.length+1) : refRwd.title
    addEle({dad:cr,text:txt,marginL:"5px",setID:"nextRwdT"})

  let arr = player.masterPool.filter(x=>x.selected)
  if(arr.length > 0){
    let tb = addEle({dad:tgt,what:"table"})
    for(let i=0;i<arr.length;i++){
      let itm = arr[i]
      let tr = addEle({dad:tb,what:"tr"})
        addEle({dad:tr,what:"td",text:itm.lbl})
      let tc = addEle({dad:tr,what:"td",padding:"0 5px 5px 5px"})
        txt = refRwd === undefined ? 1 : refRwd.content.filter(x=>x.itmID === itm.idx)[0].val
        let inQ = addEle({dad:tc,what:"input",isInput:true,numInput:true,width:"40px",textA:"center",
        setVal:txt,setID:"itmQt:"+itm.idx,setName:"itmQts",setFunc:(e)=>{
          let idx= e.srcElement.id.split(":")[1]
          let itm = player.masterPool.filter(x=>x.idx===idx)[0]
          let max = itm.val - dispatchedVal(itm)
          let nb = Number(e.srcElement.value)
          if(player.rwdRefID !== undefined){
            let srcR = player.poolRewards.filter(x=>x.idx === player.rwdRefID)[0]
            let srcI = srcR.content.filter(x=>x.itmID === itm.idx)[0]
            max += srcI.val
          }
          if(nb<1){nb=1}
          if(nb>max){nb=max}
          e.srcElement.value = nb
        }})
        inQ.addEventListener('keydown', function(event) 
        {if (event.key === 'Enter'){getID("savRwd").click()}})
      addEle({dad:tr,what:"td",setID:"itmQtM:"+itm.idx,setName:"grpRwdBk"})
      let ev = new Event("input") ; inQ.dispatchEvent(ev)
    }

    cr = addEle({dad:tgt,setClass:"contRow",alignItems:"center",justifyC:"center"})
      txt = refRwd === undefined ? "Save new Reward" : "Save Reward changes"
      addEle({dad:cr,setClass:"btn",text:txt,border:"green solid 2px",
      backC:"darkgreen",width:"80%",setID:"savRwd",setFunc:()=>{
        let savGood = true
        let dispatcher = []

        let grp = document.getElementsByName("itmQts")
        grp.forEach(inp=>{
          let itmID = inp.id.split(":")[1]
          let val = Number(inp.value)
          let itm = player.masterPool.filter(x=>x.idx===itmID)[0]

          dispatcher.push({id:itmID,val:val})
          let cap = itm.val - dispatchedVal(itm)
          if(player.rwdRefID !== undefined){
            let srcR = player.poolRewards.filter(x=>x.idx === player.rwdRefID)[0]
            let srcI = srcR.content.filter(x=>x.itmID === itm.idx)[0]
            cap += srcI.val
          }
          if(cap < val){savGood = false}
        })

        let thisID = player.rwdRefID === undefined ? crypto.randomUUID() : player.rwdRefID
        if (savGood){

          console.log("good")

          let newRwd = {
            title:undefined,
            idx:thisID,
            content:[],
            winner:undefined,
          }

          dispatcher.forEach(obj=>{
            let itm = player.masterPool.filter(x=>x.idx === obj.id)[0]
            newRwd.content.push({
              itmID:itm.idx,
              lbl:itm.lbl,
              val:obj.val,
          })})

          if(player.rwdRefID !==undefined){
            let idx = player.poolRewards.findIndex(x=>x.idx === player.rwdRefID)
            player.poolRewards[idx] = newRwd
          } else {
            player.poolRewards.push(newRwd)
            getID("nextRwdT").innerHTML = "#"+(player.poolRewards.length+1)
          }

          console.log(player.poolRewards)

          for(let i=0;i<player.poolRewards.length;i++){player.poolRewards[i].title = "#"+(i+1)}
          savPlayer()
        }
        showRwdINbank()
        updDispTtls()
    }})
  } else {
    addEle({dad:tgt,text:spanText({text:"---",col:accts[6]})})
  }
  showRwdINbank()
  updDispTtls()
}


function showRwdINbank(){
  let tgt = getID("forkB3")
  cleanParent(tgt)

  let tb = addEle({dad:tgt,what:"table"})
  for(let i=0;i<player.poolRewards.length;i++){
    let itm = player.poolRewards[i]
    let tr = addEle({dad:tb,what:"tr"})
      let tc = addEle({dad:tr,what:"td"})
        let radE = addEle({dad:tc,what:"radio",isInput:true,setID:"rwdINbk:"+i,setName:"rwdINbks",
        accentCol:accts[player.misc.radios],setFunc:(e)=>{
          let idx = Number(e.srcElement.id.split(":")[1])
          player.rwdRefID = player.poolRewards[idx].idx
          showNextRwd()
        }})
        if(itm.idx === player.rwdRefID){radE.checked = true}

      addEle({dad:tr,what:"td",text:itm.title,padding:"0 10px 0 5px"})
      addEle({dad:tr,what:"td",text:"item(s) : " + spanText({text:itm.content.length,col:YG})})
      tc = addEle({dad:tr,what:"td",paddingL:"10px"})
        addEle({dad:tc,setClass:"arrowToggler",text:"X",border:"red solid 2px",
        padding:"1px 4px",width:"fit-content",setID:"delRwd:"+i,margin:"3px 0",setFunc:(e)=>{
          let idx = Number(e.srcElement.id.split(":")[1])
          if(player.poolRewards[idx].idx === player.rwdRefID){player.rwdRefID = undefined}
          player.poolRewards.splice(idx,1)
          for(let i=0;i<player.poolRewards.length;i++){player.poolRewards[i].title = "#"+(i+1)}
          savPlayer()
          showNextRwd()
        }})
  }
}





function setPlayers(){
  let info = bodyMid
  cleanParent(info)
  let main = bodySub
  cleanParent(main)

  addEle({dad:info,text:"behave baby" })
}










/*
console.log(crafts.length)
console.log(crafts[0])

cleanParent(bodySub)

let maxCC = 0
let maxCCN = ""
crafts.forEach(c=>{
  if(c.lbl.length>maxCC){maxCC = c.lbl.length ; maxCCN = c.lbl}
  addEle({dad:bodySub,text:c.lbl+" ["+c.lbl.length+"]"})
})
addEle({dad:bodySub,text:"longest : "+maxCC,marginT:"20px"})
addEle({dad:bodySub,text:"is : "+maxCCN,marginT:"20px"})
*/

// [ buying ((Heart-shaped Gem)) ] 150g

// [ selling ((Large Net)) ] 2k 25g (few times) **small inventory players : split-pause is possible so you use the nets and get next round, tell me your inventory size**
// [ selling ((Large Net)) ] 2k 25g (last 2k) **small inventory players : split-pause is possible so you use the nets and get next round, tell me your inventory size**

/// [ selling ((Large Net)) ] 2k 25g (few times) **Closing shop when advertising is off chat

// [ selling ((Large Net)) ] 2k for 25g (or 5 for 60) *10k remaining atm

//af 208 251 1906 
// 1722 0259 6016