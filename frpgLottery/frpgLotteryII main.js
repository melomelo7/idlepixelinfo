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

const body = document.querySelector("body")
  addEle({dad:body,text:`for page smooth processing all inputs are set 
  to lower case.<br>Example : A Big Cat Named TOM => a big cat named 
  tom`,textC:YG,margin:"5px 10px",fontS:"16px",fontS:"14px"})//,

  const bodyTop = addEle({dad:body,backC:"rgb(38, 38, 38)",setID:"bodyTop"})//padding:"5px 10px"
  const bodyMid = addEle({dad:body,backC:"rgb(64, 64, 64)",setID:"bodyMid"})
  const bodySub = addEle({dad:body,setClass:"contCol",height:"100%",
  backC:"rgb(38, 38, 38)",setID:"bodySub"})
  bodySub.style.height = "max-content"
//  bodySub.style.width = "max-content"

////////////////////////
let last = "10/04 14:05"
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
          case "Lottery": setLottery()
            break
          case "Misc." : setMiscs()
            break
          case "Delete Save" : DelSave()
            break
        }
      }
    }})

    addEle({dad:cr,text:"last up : "+last,marginL:"10px",fontS:"14px",textC:accts[1]})


  /*
  addEle({dad:cont,setClass:"btn",text:"Items list and Rewards",setFunc:itemsMenu})
  addEle({dad:cont,setClass:"btn",text:"Game Pool",setFunc:setGamePool})
  addEle({dad:cont,setClass:"btn",text:"Delete Save",border:"solid red 2px",setFunc:burnSav})
  */

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
  addEle({dad:tgt,what:"option",text:"Lottery"})
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
      document.getElementsByName("arrGrp").forEach(x=>{
        if(x.id!==src.id){x.innerHTML = "🔽"}
      })

      let disp = bodySub
      cleanParent(disp)
      src.innerHTML = src.innerHTML === "🔼" ? "🔽" : "🔼"
      if(src.innerHTML === "🔼"){setMasterPool()}
    }}) // 🔼
    addEle({dad:cr,text:"Set your Giveaway Pool",borderB:"green solid 2px"})
    let txt = "("+ spanText({text:player.masterPool.length,col:YG}) + ")"
    addEle({dad:cr,marginL:"5px",setID:"poolCt1",text:txt})


  cr = addEle({dad:info,setClass:"contRow",alignItems:"center",margin:"10px 0 5px 10px"})
    addEle({dad:cr,setClass:"arrowToggler",text:"🔽",marginR:"5px",setName:"arrGrp",setID:"arr:2",
    setFunc:(e)=>{
      let src = e.srcElement
      document.getElementsByName("arrGrp").forEach(x=>{
        if(x.id!==src.id){x.innerHTML = "🔽"}
      })

      let disp = bodySub
      cleanParent(disp)
      src.innerHTML = src.innerHTML === "🔼" ? "🔽" : "🔼"
      if(src.innerHTML === "🔼"){setPoolRewards()}
    }}) // 🔼
    addEle({dad:cr,text:"Set Rewards from Pool",borderB:"green solid 2px"})
    txt = "("+ spanText({text:player.poolRewards.length,col:YG}) + ")"
    addEle({dad:cr,marginL:"5px",setID:"rwdCt1",text:txt})

}


function setMasterPool(){ // nets bef reset 1416 --- 4514 = 3098
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
    addEle({dad:cr,what:"input",isInput:true,numInput:true,width:"40px",setVal:1,
    textA:"center",setID:"addItmQ"})
  cr = addEle({dad:forkA2,setClass:"contRow",alignItems:"center",justifyC:"center"})
    addEle({dad:cr,setClass:"btn",text:"Save item to Giveaway pool",border:"green solid 2px",
    backC:"darkgreen",marginL:"",setFunc:()=>{
      let nm = getID("addItmN").innerHTML
      let qt = Number(getID("addItmQ").value)
      qt = qt>0 ? qt : 1
      if(!nm.includes("---")){
        console.log(qt+" "+nm)
        player.masterPool.push({
          idx:player.masterPool.length+1,
          lbl:nm,
          val:qt
        })
        getID("addItmQ").value = 1
        player.masterPool = arrSorting(player.masterPool)
        savPlayer()
        getID("poolCt1").innerHTML = "("+ spanText({text:player.masterPool.length,col:YG}) + ")"
        getID("poolCt2").innerHTML = "("+ spanText({text:player.masterPool.length,col:YG}) + ")"
        fillForB3()
        showMaster()
      }
    }})

  cr = addEle({dad:forkA3,setClass:"contRow",alignItems:"center",justifyC:"center"})
    addEle({dad:cr,text:"Filter Items :",marginR:"5px"})
    addEle({dad:cr,setID:"itmCt"})
  cr = addEle({dad:forkA3,setClass:"contRow",alignItems:"center",justifyC:"center"})
    addEle({dad:cr,what:"input",isInput:true,maxLen:25,margin:"5px 5px 5px 0",
    textA:"center",setID:"itmFiltIn",setFunc:(e)=>{
      fillForB3()
      document.getElementsByName("itmRads")[0].click()
    }})



  cr = addEle({dad:forkB1,setClass:"contRow",alignItems:"center",justifyC:"center"})
    addEle({dad:cr,text:"Giveaway Pool",textA:"center",marginR:"5px"})
    addEle({dad:cr,setID:"poolCt2"})

  cr = addEle({dad:forkB2,setClass:"contRow",alignItems:"center",margin:""})
    addEle({dad:cr,textC:"white",textA:"center",setID:"masterItmN",minWidth:"220px",marginL:"",backC:"green"})
  cr = addEle({dad:forkB2,setClass:"contRow",alignItems:"center",margin:"10px 0 5px 0",justifyC:"center"})
    addEle({dad:cr,text:"Adjust Total :",marginR:"5px"})
    addEle({dad:cr,what:"input",isInput:true,numInput:true,width:"40px",setVal:1,
    textA:"center",setID:"masterItmQ"})
  cr = addEle({dad:forkB2,setClass:"contRow",alignItems:"center",justifyC:"center"})
    addEle({dad:cr,setClass:"btn",text:"Save new Total",border:"green solid 2px",
    backC:"darkgreen",marginL:"",setFunc:()=>{
      let txt = getID("masterItmN").innerHTML
      let idx = player.masterPool.findIndex(x=>x.lbl===txt)
      let qt = Number(getID("masterItmQ").value)
      qt = qt > 0 ? qt : 1
      player.masterPool[idx].val = qt
      savPlayer()
      showMaster()
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
          savPlayer()
          getID("poolCt1").innerHTML = "("+ spanText({text:player.masterPool.length,col:YG}) + ")"
          getID("poolCt2").innerHTML = "("+ spanText({text:player.masterPool.length,col:YG}) + ")"
          fillForB3()
          showMaster()
          if(player.masterPool.length>0){document.getElementsByName("masterIRads")[0].click()}
          document.getElementsByName("itmRads")[0].click()
        }})
  }
  if(document.getElementsByName("itmRads")[0]){document.getElementsByName("itmRads")[0].click()}
}


function setPoolRewards(){

}





























































































function setRewards2(){
  let info = bodyMid
  cleanParent(info)
  let main = bodySub
  cleanParent(main)

  for(let i=0;i<player.rewards.length;i++){
    player.rewards[i].idx = (i+1)
  } savPlayer()

  let minMax = 160
  addEle({dad:main,setClass:"contCol",setID:"rwdLstFr",minHeight:minMax+"px",maxHeight:minMax+"px",overflowX:"auto",
  width:"fit-content",padding:"5px 0 0 5px",width:"320px",borderB:"teal 2px dashed"})

  addEle({dad:main,setClass:"contCol",setID:"mainFr",width:"fit-content",padding:"5px 0 5px 5px"})

  let cont = addEle({dad:info,margin:"5px 0 0 5px"})
    let tb = addEle({dad:cont,what:"table"})
      let tr = addEle({dad:tb,what:"tr"})
        let txt = "in Bank<br>( Total )"
        addEle({dad:tr,what:"td",text:txt,fontS:"14px",padding:"5px",textA:"center",borderB:"teal solid 2px"})
        txt = "Used for<br>Lottery"
        addEle({dad:tr,what:"td",text:txt,fontS:"14px",padding:"5px",textA:"center",border:"teal solid 2px",borderT:"none"})
        txt = "Displayed"
        addEle({dad:tr,what:"td",text:txt,fontS:"14px",padding:"5px",textA:"center",borderB:"teal solid 2px"})

      tr = addEle({dad:tb,what:"tr"})
        txt = player.rewards.length
        addEle({dad:tr,what:"td",text:txt,textC:YG,textA:"center"})
        txt = player.rewards.filter(x=>x.use).length
        addEle({dad:tr,what:"td",text:txt,textC:YG,textA:"center",border:"teal solid 2px",borderT:"none",borderB:"none"})
        addEle({dad:tr,what:"td",setID:"rwdDispC",textC:YG,textA:"center"})

  let cr = addEle({dad:info,setClass:"contRow",alignItems:"center",margin:"0 0 5px 10px"})
    addEle({dad:cr,text:"Filter Name :",marginR:"5px"})
    addEle({dad:cr,what:"input",isInput:true,width:"100px",textA:"center",setID:"inFilRwd",
    marginR:"10px",border:"green solid 3px",radius:"10px",setFunc:(e)=>{
      if(player.rewards.length>0){
        let tgt = getID("rwdLstFr")
        cleanParent(tgt)
        cleanParent(getID("mainFr"))

        let txt = e.srcElement.value.toLowerCase()
        let arr = []
        if(txt.length===0)
             {arr = player.rewards} 
        else {arr = player.rewards.filter(x=>x.lbl.includes(txt))}
        getID("rwdDispC").innerHTML = arr.length
  
        if(arr.length>0){
          let cont = addEle({dad:tgt,margin:""})
          let tb = addEle({dad:cont,what:"table",setID:"tb2"})
            let tr = addEle({dad:tb,what:"tr"})
              let txt2 = "Select"
              addEle({dad:tr,what:"td",text:txt2,fontS:"14px",padding:"5px",textA:"center"})
              txt2 = "Use"
              addEle({dad:tr,what:"td",text:txt2,fontS:"14px",padding:"5px",textA:"center",
              border:"teal solid 2px",borderB:"none",borderT:"none"})
              txt2 = "#Ref"
              addEle({dad:tr,what:"td",text:txt2,fontS:"14px",padding:"5px",textA:"center"
              ,borderR:"teal solid 2px"})
              txt2 = "Name"
              addEle({dad:tr,what:"td",text:txt2,fontS:"14px",padding:"5px",textA:"center"})
              addEle({dad:tr,what:"td",text:"",fontS:"14px",padding:"5px",textA:"center"})
        }

        for(let i=0;i<arr.length;i++){
          let itm = arr[i]

          let tr = addEle({dad:getID("tb2"),what:"tr"})
            let tc = addEle({dad:tr,what:"td",padding:"5px",textA:"center",borderT:"teal solid 2px"})
              addEle({dad:tc,what:"radio",isInput:true,setName:"rwdRads",setID:"rwdRad:"+i,
              width:"18px",height:"18px",accentCol:accts[player.misc.radios],setFunc:(e)=>{ 
              let idx = Number(e.srcElement.id.split(":")[1])
              showRwd(player.rewards[idx]) }})

            tc = addEle({dad:tr,what:"td",padding:"5px",textA:"center",border:"teal solid 2px",borderB:"none"})
              let tog = addEle({dad:tc,what:"checkbox",isInput:true,setID:"togRwd:"+i,
              setClass:"toggle-checkbox",setFunc:(e)=>{
                let idx = Number(e.srcElement.id.split(":")[1])
                player.rewards[idx].use = e.srcElement.checked
                if(player.rewards[idx].use===false){
                  player.rewards[idx].number = undefined
                  player.rewards[idx].winner = undefined
                }
                savPlayer()
                setRewards()
              }})
              addEle({dad:tc,what:"label",setFor:"togRwd:"+i,setClass:"toggle-label",margin:""})
              if(itm.use){tog.checked=true}
      
            addEle({dad:tr,what:"td",text:"#"+itm.idx,padding:"5px",textA:"center",border:"teal solid 2px"
            ,borderL:"none",borderB:"none",fontS:"14px"})

            addEle({dad:tr,what:"td",text:spanText({text:itm.lbl,col:YG}),padding:"5px",textA:"center",
            borderT:"teal solid 2px",fontS:"14px"})
            
            tc = addEle({dad:tr,what:"td",padding:"5px",textA:"center",borderT:"teal solid 2px"})
              addEle({dad:tc,setClass:"arrowToggler",text:"X",border:"red solid 2px",
              padding:"1px 4px",marginR:"5px",setID:"del:"+i,setFunc:(e)=>{
                let idx = Number(e.srcElement.id.split(":")[1])
                player.rewards.splice(idx,1)
                setRewards()       
              }})

            /*
          let cr = addEle({dad:tgt,setClass:"contRow",alignItems:"center",marginB:"10px"})

            addEle({dad:cr,what:"radio",isInput:true,setName:"rwdRads",setID:"rwdRad:"+i,
            width:"18px",height:"18px",accentCol:accts[player.misc.radios],setFunc:(e)=>{ 
            let idx = Number(e.srcElement.id.split(":")[1])
            showRwd(player.rewards[idx]) }})

            addEle({dad:cr,text:"Use :",margin:"0 -5px 0 10px"})
            let tog = addEle({dad:cr,what:"checkbox",isInput:true,setID:"togRwd:"+i,
            setClass:"toggle-checkbox",setFunc:(e)=>{
              let idx = Number(e.srcElement.id.split(":")[1])
              player.rewards[idx].use = e.srcElement.checked
              if(player.rewards[idx].use===false){player.rewards[idx].number = undefined}
              savPlayer()
              setRewards()
            }})
            addEle({dad:cr,what:"label",setFor:"togRwd:"+i,setClass:"toggle-label",margin:"0 10px"})
            if(itm.use){tog.checked=true}

            addEle({dad:cr,text:"#"+itm.idx,minWidth:"40px",textA:"center"})

            addEle({dad:cr,setClass:"arrowToggler",text:"X",border:"red solid 2px",
            padding:"1px 4px",marginR:"5px",setID:"del:"+i,setFunc:(e)=>{
              let idx = Number(e.srcElement.id.split(":")[1])
              console.log(idx)
              player.rewards.splice(idx,1)
              setRewards()       
            }})
            addEle({dad:cr,text:"- " + spanText({text:itm.lbl,col:YG})})
*/


        }

        if(document.getElementsByName("rwdRads")[0]){
          document.getElementsByName("rwdRads")[0].click()
        }

      }
    }})
    addEle({dad:cr,setClass:"btn",border:"green solid 2px",backC:"darkgreen",
    text:"+ Add new Reward",fontS:"14px",setFunc:()=>{showRwd()}})


  let ev = new Event("input") ; getID("inFilRwd").dispatchEvent(ev)
  if(document.getElementsByName("rwdRads")[0]){
    document.getElementsByName("rwdRads")[0].click()
  }
}


function showRwd(rwd=undefined){
  let tgt = getID("mainFr")
  cleanParent(tgt)

  let newId = player.rewards.length+1
  let multi = true

  let newRwd = {
    idx:newId,
    lbl:"reward #"+newId,
    use:true,
    content:[],
    copies:1,
  }

  if(rwd){
    multi = false
    newRwd.idx = rwd.idx
    newRwd.lbl = rwd.lbl
    newRwd.use = rwd.use
    rwd.content.forEach(c=>{newRwd.content.push(c)})
  }

  player.draftRwd = newRwd

  let cr = addEle({dad:tgt,setClass:"contRow",alignItems:"center",margin:"10px"})
    addEle({dad:cr,text:"Reward Name :",marginR:"5px"})
    addEle({dad:cr,what:"input",isInput:true,textA:"center",setVal:player.draftRwd.lbl
    ,border:"solid green 3px",radius:"10px",setID:"inRwdNm"})

  if(multi){
  cr = addEle({dad:tgt,setClass:"contRow",alignItems:"center",margin:"0 0 5px 10px"})
    addEle({dad:cr,marginR:"10px",textC:YG,text:"*Build 1 or more copies of this Reward"})
    addEle({dad:cr,what:"input",isInput:true,width:"30px",numInput:true,textA:"center",
    setVal:player.draftRwd.copies,setFunc:(e)=>{
      player.draftRwd.copies = Number(e.srcElement.value) > 0 ? Number(e.srcElement.value) : 1
    }})
  }

  cr = addEle({dad:tgt,setClass:"contRow",alignItems:"center",borderB:"teal dashed 2px",
  width:"325px",padding:"0 0 10px 10px"})
    txt = "Reward #"+player.draftRwd.idx+" contains " + 
    spanText({text:player.draftRwd.content.length,col:YG}) + " items"
    addEle({dad:cr,text:txt,marginR:"10px",setID:"rwdTxt"})

  addEle({dad:tgt,setClass:"contCol",padding:"5px",borderL:"teal dashed 2px",setID:"draftContent",
  minHeight:"20px",maxHeight:"60px",overflowX:"auto",marginL:"10px",backC:"rgb(64, 64, 64)",width:"315px"})
  if(player.draftRwd.content.length>0){dispDraft()}

  let cc = addEle({dad:tgt,setClass:"contCol",border:"solid 2px teal",padding:"5px",
  width:"320px",radius:"5px",marginL:"5px",setID:"addItmRwdFr"})
    addEle({dad:cc,text:"Add Items to fill the Reward :",borderB:"solid 2px teal",width:"fit-content",margin:"0 0 5px 10px"})

    cr = addEle({dad:cc,setClass:"contRow",alignItems:"center",marginL:"10px"})
      addEle({dad:cr,text:"Filter Items Pick :",marginR:"10px"})
      addEle({dad:cr,what:"input",isInput:true,textA:"center",width:"100px",
      border:"green solid 3px",radius:"10px",setID:"filtItm",setFunc:(e)=>{
        let txt = e.srcElement.value
        let tgt = getID("selRwd")
        cleanParent(tgt)
        addEle({dad:selRwd,what:"option",text:"- Pick an Item -"})
        if(txt.length===0){
          player.items.all.forEach(it=>{addEle({dad:selRwd,what:"option",text:it.lbl})})
        } else {
          let arr = player.items.all.filter(x=>x.lbl.includes(txt))
          arr.forEach(it=>{addEle({dad:selRwd,what:"option",text:it.lbl})})
        }
        txt = "("+ spanText({text:tgt.options.length-1,col:"yellowgreen"}) + ")"
        getID("itmSelCt").innerHTML = txt 
      }})
      addEle({dad:cr,setID:"itmSelCt",marginL:"10px"})
  

    cr = addEle({dad:cc,setClass:"contRow",margin:"",alignItems:"center",marginL:"10px"})
      addEle({dad:cr,what:"input",isInput:true,width:"40px",numInput:true,setVal:1,
      textA:"center",margin:"0 5px 0 0",setID:"itmQt"})

      let selRwd = addEle({dad:cr,what:"select",setClass:"select",textA:"center",
      border:"green solid 2px",setID:"selRwd"})

      let ev = new Event("input") ; getID("filtItm").dispatchEvent(ev)

      addEle({dad:cr,setClass:"btn",text:"Add",width:"50px",border:"solid green 2px"
      ,fontS:"14px",backC:"darkgreen",setFunc:()=>{
        let val1 = getID("selRwd").selectedIndex
        let val2 = Math.ceil(getID("itmQt").value)
        if(val1 > 0 && val2 > 0){
          player.draftRwd.content.push({
            lbl:getID("selRwd").value,
            val:val2
          })
          dispDraft()
        }
      }})

    cc = addEle({dad:tgt,setClass:"contCol",setID:"savdr",marginT:"10px"})
      addEle({dad:cc,text:"When the reward(s) seems ready for use ...",marginL:"10px"})
      let btnTxt = player.draftRwd.idx <= player.rewards.length ?
      "Save any changes to this reward" : "Save the new Reward(s)"
      addEle({dad:cc,setClass:"btn",text:btnTxt,border:"solid green 2px",
      width:"300px",backC:"darkgreen",marginL:"10px",setFunc:()=>{
        let dispInfo = getID("savRwdSt") 
        if(player.draftRwd.content.length > 0){
          dispInfo.innerHTML = ""
          if(player.draftRwd.idx<=player.rewards.length){
            let rwd = player.rewards.filter(x=>x.idx===player.draftRwd.idx)[0]
            let rwdName = getID("inRwdNm").value.length>0 ?
            getID("inRwdNm").value.toLowerCase() :
            "reward #"+player.draftRwd.idx
            rwd.lbl = rwdName
            rwd.content = player.draftRwd.content
            savPlayer()
            dispInfo.innerHTML = "Changes are now Saved !"
            setTimeout(()=>{setRewards()},1500)
          } else {
            for(let i=0;i<player.draftRwd.copies;i++){
              let nextId = player.rewards.length+1
              let rwdName = getID("inRwdNm").value.length>0 ?
              getID("inRwdNm").value.toLowerCase() :
              "reward #"+nextId
              let tempR = {
                idx:nextId,
                lbl:rwdName,
                content:player.draftRwd.content,
                use:true,
                number:undefined,
                winner:undefined,
              }
              player.rewards.push(tempR)
            }
            savPlayer()
            dispInfo.innerHTML = "Saved "+spanText({text:player.draftRwd.copies,col:YG})+" new reward(s) !"
            setTimeout(()=>{setRewards()},1500)
          }
        } else {
          dispInfo.innerHTML = "Reward is empty, Add some items to save it."
          setTimeout(()=>{dispInfo.innerHTML=""},1500)
        }
      }})
      addEle({dad:tgt,setID:"savRwdSt",textC:accts[1],width:"340px",textA:"center"})
}

function dispDraft(){
  let tgt = getID("draftContent")
  cleanParent(tgt)

  getID("rwdTxt").innerHTML = "Reward #"+player.draftRwd.idx+" contains "
  +spanText({text:player.draftRwd.content.length,col:"yellowgreen"})+" item(s)"

  for(let i=0;i<player.draftRwd.content.length;i++){
    let itm = player.draftRwd.content[i]
    let cr = addEle({dad:tgt,setClass:"contRow",alignItems:"center"})
      addEle({dad:cr,setClass:"arrowToggler",text:"X",border:"solid 2px red",padding:"1px 4px",
      setID:"del:"+i,margin:"5px",setFunc:(e)=>{
        let idx = Number(e.srcElement.id.split(":")[1])
        player.draftRwd.content.splice(idx,1)
        dispDraft()
      }})
      addEle({dad:cr,text:"- " +spanText({text:itm.val+"x ",col:"yellowgreen"})+itm.lbl})
  }
}































































































function setLottery(){
  let info = bodyMid
  cleanParent(info)
  let main = bodySub
  cleanParent(main)

  let usedA = player.rewards.filter(x=>x.use)
  let usedNumberedA = usedA.filter(x=>x.number!==undefined)

  /*
  let cr = addEle({dad:info,setClass:"contRow",alignItems:"center",marginL:"10px"})
    addEle({dad:cr,text:"Rewards :",marginR:"5px"})
    addEle({dad:cr,text:player.rewards.filter(x=>x.use).length+"/"+player.rewards.length,textC:YG})
    addEle({dad:cr,text:"(Used / Total)",marginL:"10px"})

  cr = addEle({dad:info,setClass:"contRow",alignItems:"center",margin:"0 0 5px 10px"})
    addEle({dad:cr,text:"Rewards with Lottery Numbers :",marginR:"5px"})
    addEle({dad:cr,text:usedNumberedA.length+"/"+usedA.length,textC:YG})
  */

  let cont = addEle({dad:info})
    let tb = addEle({dad:cont,what:"table"})
      let tr = addEle({dad:tb,what:"tr"})
        let txt = "Rewards<br>in Bank"
        addEle({dad:tr,what:"td",text:txt,fontS:"14px",padding:"5px",textA:"center",borderB:"teal solid 2px"})
        txt = "Rewards Used<br>for the Lottery"
        addEle({dad:tr,what:"td",text:txt,fontS:"14px",padding:"5px",textA:"center",border:"teal solid 2px",borderT:"none"})
        txt = "Rewards with<br>Lottery Numbers"
        addEle({dad:tr,what:"td",text:txt,fontS:"14px",padding:"5px",textA:"center",borderB:"teal solid 2px",borderR:"teal solid 2px"})
        txt = "Won<br>Rewards"
        addEle({dad:tr,what:"td",text:txt,fontS:"14px",padding:"5px",textA:"center",borderB:"teal solid 2px"})


      tr = addEle({dad:tb,what:"tr"})
        txt = player.rewards.length
        addEle({dad:tr,what:"td",text:txt,textA:"center"})
        txt = player.rewards.filter(x=>x.use).length
        addEle({dad:tr,what:"td",text:txt,textA:"center",border:"teal solid 2px",borderT:"none",borderB:"none"})
        txt = player.rewards.filter(x=>x.number!==undefined).length
        let txC = player.rewards.filter(x=>x.number!==undefined).length === 
        player.rewards.filter(x=>x.use).length ? YG : accts[6]
        addEle({dad:tr,what:"td",text:txt,textC:YG,textA:"center",textC:txC,setID:"lotNbi",borderR:"teal solid 2px"})
        txt = player.rewards.filter(x=>x.winner!==undefined).length + "/" +
        player.rewards.filter(x=>x.number!==undefined).length
        addEle({dad:tr,what:"td",text:txt,textC:YG,textA:"center",setID:"lotWrew"})



  addEle({dad:info,textC:accts[1],margin:"5px 10px",setID:"warnMsg",fontS:"14px"})

  if(player.rewards.length>0){
    if(usedA.length>0){

      getID("warnMsg").innerHTML = 
      usedA.length===usedNumberedA.length ?  "" :
      `To have a Lottery working well, all used<br>Rewards will need a Lottery Number.`

      let cr = addEle({dad:main,setClass:"contRow",alignItems:"center",margin:"5px 0 0 5px"})
        addEle({dad:cr,setClass:"arrowToggler",text:"🔽",setFunc:(e)=>{
          let src = e.srcElement
          let disp = getID("lotWinNumSet")
          disp.style.display = src.innerHTML === "🔼" ? "none" : "flex"
          src.innerHTML = src.innerHTML === "🔼" ? "🔽" : "🔼"
          if(src.innerHTML === "🔼"){dispLotNb()}
        }}) // 🔼
        addEle({dad:cr,text:"Set Lottery Winning Numbers",margin:"0 0 5px 5px",borderB:"teal solid 2px"})
      let cc = addEle({dad:main,setClass:"contCol",setID:"lotWinNumSet",marginL:"30px",
      borderL:"teal dashed 2px",padding:"",display:"none"})
          cr = addEle({dad:cc,setClass:"contRow",alignItems:"center"})
          addEle({dad:cr,text:"Range :",margin:"0 5px"})
          addEle({dad:cr,what:"input",isInput:true,numInput:true,width:"40px",textA:"center"
          ,setVal:player.poolMin,setID:"bound1",setFunc:getRange})
          addEle({dad:cr,what:"input",isInput:true,numInput:true,width:"40px",textA:"center"
          ,setVal:player.poolMax,setID:"bound2",margin:"0 10px",setFunc:getRange})
          addEle({dad:cr,setClass:"btn",text:"Roll Numbers",setFunc:rollRwd,
          border:"green solid 2px",backC:"darkgreen"})
        addEle({dad:cc,setID:"curRange",marginT:"5px",marginL:"5px",text:"Range used : "
        +player.poolMin+" ~ "+player.poolMax})
        addEle({dad:cc,setID:"curRange",marginT:"5px",marginL:"5px",text:"(All numbers including first and last)"})

        let minMax = 160
        addEle({dad:cc,setClass:"contCol",minHeight:minMax+"px",maxHeight:minMax+"px",
        borderT:"dashed teal 2px",padding:"5px",width:"280px",marginT:"10px",setID:"rolledNb"
        ,overflowX:"auto",borderB:"dashed teal 2px"})



      cr = addEle({dad:main,setClass:"contRow",alignItems:"center",margin:"5px 0 0 5px"})
        addEle({dad:cr,setClass:"arrowToggler",text:"🔽",setFunc:(e)=>{
          let src = e.srcElement
          let disp = getID("manLotFr")
          disp.style.display = src.innerHTML === "🔼" ? "none" : "flex"
          src.innerHTML = src.innerHTML === "🔼" ? "🔽" : "🔼"
        }}) // 🔼
        addEle({dad:cr,text:"Manage Lottery",margin:"0 0 5px 5px",borderB:"teal solid 2px"})
      cc = addEle({dad:main,setClass:"contCol",setID:"manLotFr",marginL:"30px",
      borderL:"teal dashed 2px",padding:"",display:"none"})

        let Lsel = addEle({dad:cc,what:"select",setClass:"select",textA:"center",marginL:"5px",
          border:"green 3px solid",setID:"lotterySel",setFunc:(e)=>{}})
            addEle({dad:Lsel,what:"option",text:"-- Select --"})
            addEle({dad:Lsel,what:"option",text:"Check Player's provided number",setFunc:checkNum})
            addEle({dad:Lsel,what:"option",text:"Check Lottery Progression",setFunc:checkProgress})

        addEle({dad:cc,setClass:"contColl",setID:"manageSub"})


    } else {
      getID("warnMsg").innerHTML = `
      Having Rewards built in your list is good.<br>
      Now, make sure the Rewards you want in your<br>
      Lottery pool are set to : USE.`      
    }
  } else {
    getID("warnMsg").innerHTML = "To run the Lottery you need to build the Rewards first"
  }
}

function getRange(){
  let v1 = Number(getID("bound1").value)
  let v2 = Number(getID("bound2").value)
  let min = undefined
  let max = undefined
  if(v1>v2){max = v1 ; min = v2} 
  else     {max = v2 ; min = v1}
  min = min<=0 ? 1 : min
  max = max<player.rewards.filter(x=>x.use).length ?
  player.rewards.filter(x=>x.use).length : max
  if(max-min+1<player.rewards.filter(x=>x.use).length){
    max = min+player.rewards.filter(x=>x.use).length-1
  }
  getID("curRange").innerHTML = "Range used : "+min+"~"+max
  return {min:min,max:max}
}



function rollRwd(){
  let arr = player.rewards.filter(x=>x.use)
  if(arr.length>0){
    player.playersNB = []

    let nbR = getRange()
    player.poolMin = nbR.min
    player.poolMax = nbR.max

    let rolls = []
    let cpt = 0
    while(rolls.length < arr.length){
      cpt++
      let test = rndNB(player.poolMin,player.poolMax)
      let idx = rolls.indexOf(test)
      if(idx===-1){rolls.push(test)}
      if(cpt>100){break}
    }
  
    for(let i=0;i<arr.length;i++){arr[i].number = rolls[i]}
    savPlayer()
    getID("lotNbi").innerHTML = spanText({text:player.rewards.filter(x=>x.number!==undefined).length,col:YG})
    getID("warnMsg").innerHTML = ""
  }
  dispLotNb()
}

function dispLotNb(){
  let tgt = getID("rolledNb")
  cleanParent(tgt)

  let arr = player.rewards.filter(x=>x.use)
  for(let i=0;i<arr.length;i++){
    let itm = arr[i] 
    let cc = addEle({dad:tgt,setClass:"contCol",border:"solid teal 2px",
    padding:"5px",marginB:"5px"})
      let cr = addEle({dad:cc,setClass:"contRow",marginL:"5px",alignItems:"center"})
        addEle({dad:cr,text:"Number :",marginR:"10px"})
        addEle({dad:cr,text:itm.number,textC:accts[6],marginR:"20px"})
        let txt = itm.content.length > 1 ? 
        "[ "+itm.content.length+" Items ]"  : "[ "+itm.content.length+" Item ]"
        addEle({dad:cr,text:txt,textC:accts[0]})
      cr = addEle({dad:cc,setClass:"contRow",alignItems:"center"})
        addEle({dad:cr,setClass:"arrowToggler",setID:"tog:"+i,text:"🔽",
        margin:"5px 5px 0 0",setFunc:(e)=>{
          let src = e.srcElement
          let idx = Number(src.id.split(":")[1])
          let disp = getID("rwdCont:"+idx)
          disp.style.display = src.innerHTML === "🔼" ? "none" : "flex"
          src.innerHTML = src.innerHTML === "🔼" ? "🔽" : "🔼"
        }}) // 🔼
        addEle({dad:cr,text:"Reward #"+itm.idx,marginR:"10px"})
        addEle({dad:cr,text:itm.lbl,textC:YG})

      let cc2 = addEle({dad:cc,setClass:"contCol",setID:"rwdCont:"+i,
      display:"none",borderL:"dotted 2px teal",padding:"5px",marginL:"10px"})
        itm.content.forEach(c=>{
          let cr = addEle({dad:cc2,setClass:"contRow",alignItems:"center"})
            addEle({dad:cr,text:c.val+"x",textC:YG})
            addEle({dad:cr,text:c.lbl,marginL:"10px"})
        })
  }
}


function checkNum(){
  let tgt = getID("manageSub")
  cleanParent(tgt)

  if(getID("winnerN")){getID("winnerN").style.display = "none"}
  if(getID("winnerY")){getID("winnerY").style.display = "none"}

  /*
  cr = addEle({dad:tgt,setClass:"contRow",alignItems:"center",margin:"5px 10px"})
    addEle({dad:cr,text:"Rewards Won :",marginR:"5px"})
    let txt = player.rewards.filter(x=>x.winner!==undefined).length+"/"+
    player.rewards.filter(x=>x.number!==undefined).length
    addEle({dad:cr,text:txt,marginR:"5px",minWidth:"220px",setID:"rwdSts",textC:YG})
  */

  cr = addEle({dad:tgt,setClass:"contRow",alignItems:"center",margin:"10px 0 5px 10px"})
    addEle({dad:cr,text:"Range for Number : "+player.poolMin+" ~ "+player.poolMax,marginR:"5px"})

  cr = addEle({dad:tgt,setClass:"contRow",alignItems:"center",margin:"10px 0 5px 10px"})
    addEle({dad:cr,text:"Number :",marginR:"5px"})
    addEle({dad:cr,what:"input",isInput:true,numInput:true,width:"40px",
    textA:"center",border:"green solid 3px",radius:"10px",setID:"inNB"})
    addEle({dad:cr,setClass:"btn",border:"green solid 2px",backC:"darkgreen",
    text:"Check",setFunc:()=>{
      getID("winnerN").style.display = "none"
      getID("winnerY").style.display = "none"
      let src = getID("inNB")
      if(src.value === ""){src.focus() ; return}
      let nb = Number(src.value)
      if(nb<player.poolMin || nb>player.poolMax){src.focus() ; return}

      let idx = player.playersNB.indexOf(nb)
      if(idx === -1){player.playersNB.push(nb)}

      let rwd = player.rewards.filter(x=>x.number === nb)[0]
      cleanParent(getID("rwdDet"))

      let arrow = getID("togRwdDet")
      if(arrow.innerHTML = "🔼"){arrow.click()} ;

      if(rwd){
        getID("rwdYN").innerHTML = spanText({text:"Yes",col:YG})
        getID("togRwdDet").style.display = "block"
        getID("rwdWd").style.borderBottom = "green dotted 2px" 
        rwd.content.forEach(c=>{
          addEle({dad:getID("rwdDet"),marginL:"10px",
          text:"- "+spanText({text:c.val+"x ",col:YG})+c.lbl})
        })
        if(rwd.winner!==undefined){
          getID("winYN").innerHTML = spanText({text:"Yes",col:YG})

          getID("winnerN").style.display = "none"
          getID("winnerY").style.display = "flex"
          getID("winNm").innerHTML = rwd.winner

        } else {
          getID("winYN").innerHTML = spanText({text:"No",col:accts[6]})

          getID("winnerN").style.display = "flex"
          getID("winnerY").style.display = "none"
          getID("inWin").focus()

        }

      } else {
        getID("rwdYN").innerHTML = spanText({text:"No",col:accts[6]})
        getID("winYN").innerHTML = spanText({text:"---",col:accts[6]})
        getID("togRwdDet").style.display = "none"
        getID("rwdWd").style.borderBottom = ""
      }
      let txt = player.rewards.filter(x=>x.winner!==undefined).length+"/"+
      player.rewards.filter(x=>x.number!==undefined).length
      getID("lotWrew").innerHTML = txt

    }})
 
  cr = addEle({dad:tgt,setClass:"contRow",alignItems:"center",margin:"5px 10px 0 10px"})
    addEle({dad:cr,text:"Reward",setID:"rwdWd"})
    addEle({dad:cr,text:"for this Number ?",margin:"0 5px",minWidth:"140px"})
    addEle({dad:cr,text:"---",textC:accts[6],setID:"rwdYN"})
    addEle({dad:cr,setClass:"arrowToggler",setID:"togRwdDet",text:"🔽",
    display:"none",marginL:"5px",setFunc:(e)=>{
      let src = e.srcElement
      let disp = getID("rwdDet")
      disp.style.display = src.innerHTML === "🔼" ? "none" : "flex"
      src.innerHTML = src.innerHTML === "🔼" ? "🔽" : "🔼"
    }}) // 🔼
  addEle({dad:tgt,setClass:"contCol",borderL:"green dotted 2px",
  display:"none",setID:"rwdDet",marginL:"20px"})


  cr = addEle({dad:tgt,setClass:"contRow",alignItems:"center",margin:"5px 10px"})
    addEle({dad:cr,text:"Reward already won ?",marginR:"5px",minWidth:"200px"})
    addEle({dad:cr,text:"---",textC:accts[6],setID:"winYN"})
  
  let cc = addEle({dad:tgt,setClass:"contCol",margin:"5px 5px",setID:"winnerY",
  border:"green solid 2px",radius:"5px",padding:"5px",width:"fit-content",display:"none"}) 
    cr = addEle({dad:cc,setClass:"contRow",alignItems:"center",})
      addEle({dad:cr,text:"Winner Name :",margin:"0 5px 0 10px"})
      addEle({dad:cr,text:"---",textC:YG,setID:"winNm"})
    addEle({dad:cc,setClass:"btn",border:accts[6]+" solid 2px",backC:"darkgreen",
    text:"Remove Winner",width:"200px",setFunc:()=>{
      let nb = Number(getID("inNB").value)
      let rwd = player.rewards.filter(x=>x.number === nb)[0]
      if(rwd){rwd.winner = undefined}
      getID("lotWrew").innerHTML = player.rewards.filter(x=>x.winner!==undefined).length + "/" +
      player.rewards.filter(x=>x.number!==undefined).length
      savPlayer()
      checkNum()
    }})

  cc = addEle({dad:tgt,setClass:"contCol",margin:"5px 5px",setID:"winnerN",
  border:"green solid 2px",radius:"5px",padding:"5px",width:"fit-content",display:"none"}) 
    addEle({dad:cc,text:"Set reward's Winner Name :",marginL:"10px"})
    addEle({dad:cc,what:"input",isInput:true,width:"190px",margin:"5px 0 5px 10px",
    textA:"center",border:"green solid 3px",radius:"10px",setID:"inWin"})
    addEle({dad:cc,setClass:"btn",border:"green solid 2px",backC:"darkgreen",
    text:"Save",width:"180px",margin:"0 20px 0 10px",setFunc:()=>{
      let nb = Number(getID("inNB").value)
      let nm = getID("inWin").value
      let rwd = player.rewards.filter(x=>x.number === nb)[0]
      if(rwd && nm!==undefined){rwd.winner = nm}
      getID("lotWrew").innerHTML = player.rewards.filter(x=>x.winner!==undefined).length + "/" +
      player.rewards.filter(x=>x.number!==undefined).length
      savPlayer()
      checkNum()
    }})

}


function checkProgress(){
  let tgt = getID("manageSub")
  cleanParent(tgt)

  let rwdA = arrSorting(getRwdSt())

  let minMax = 160
  let cc = addEle({dad:tgt,setClass:"contCol",minHeight:minMax+"px",
  maxHeight:minMax+"px",overflowX:"auto",width:"fit-content",padding:"5px 0 0 5px",
  width:"280px",borderB:"teal 2px dashed"})

  let cont = addEle({dad:cc,margin:"10px 0 0 5px"})
    let tb = addEle({dad:cont,what:"table"})
      let tr = addEle({dad:tb,what:"tr"})
        let txt = "Items"
        addEle({dad:tr,what:"td",text:txt,fontS:"14px",padding:"5px",textA:"center",borderB:"teal solid 2px"})
        txt = "Won / Total"
        addEle({dad:tr,what:"td",text:txt,fontS:"14px",padding:"5px",textA:"center",border:"teal solid 2px",borderT:"none"})
        txt = "Remaining"
        addEle({dad:tr,what:"td",text:txt,fontS:"14px",padding:"5px",textA:"center",borderB:"teal solid 2px"})

      for(let i = 0;i<rwdA.length;i++){
        let itm = rwdA[i]
        tr = addEle({dad:tb,what:"tr"})
          txt = itm.lbl
          addEle({dad:tr,what:"td",text:txt,textC:YG,textA:"center",padding:"5px"})
          txt = spanText({text:itm.won,col:YG}) + " / " + itm.total
          addEle({dad:tr,what:"td",text:txt,textA:"center",border:"teal solid 2px",borderT:"none",borderB:"none"})
          txt = itm.total - itm.won
          addEle({dad:tr,what:"td",text:txt,textA:"center"})
      }

  addEle({dad:tgt,text:`
  Next step is Publishing the Lottery status<br>
  in your Mailbox Lookfor. To make it clean,<br>
  maybe have other`})

  let cr = addEle({dad:tgt,setClass:"contRow",alignItems:"center",margin:"10px 0 0 5px"})
    addEle({dad:cr,text:"Save / Restore Mailbox Look For",borderB:"teal solid 2px"})
      addEle({dad:cr,setClass:"arrowToggler",setID:"togRwdDet",text:"🔽",
      marginL:"5px",setFunc:(e)=>{
        let src = e.srcElement
        let disp = getID("savLFfr")
        disp.style.display = src.innerHTML === "🔼" ? "none" : "flex"
        src.innerHTML = src.innerHTML === "🔼" ? "🔽" : "🔼"
      }}) // 🔼
  cc = addEle({dad:tgt,setClass:"contCol",border:"teal solid 2px",radius:"5px",
    display:"none",setID:"savLFfr",padding:"5px",margin:"5px 0 0 10px",width:"fit-content"})
      addEle({dad:cc,text:`** To avoid any loss of information<br>make sure to save also in a text<br>
      document of your choice on your device`,textC:"yellow",marginB:"10px"})
      addEle({dad:cc,text:"* Ingame copy the text from :",textC:YG,marginB:"5px"})
      addEle({dad:cc,text:"* My Settings ><br> Change Bio / Looking For"})
      addEle({dad:cc,text:"* and paste inside this white field :",textC:YG,margin:"5px 0"})
      addEle({dad:cc,what:"textarea",setID:"lookforinfo",overflow:"scroll",
      })

    cr = addEle({dad:cc,setClass:"contRow",alignItems:"center",margin:"5px 0"})
      addEle({dad:cr,setClass:"btn",border:"green solid 2px",backC:"darkgreen",
      text:"Save Text",minWidth:"40%",setFunc:()=>{
        if(getID("lookforinfo").value.length>0){
//          player.mailbox.lookforBack = JSON.stringify(getID("lookforinfo").value)
          player.mailbox.lookforBack = getID("lookforinfo").value
          savPlayer()
        }
      }})

      addEle({dad:cr,setClass:"btn",border:"green solid 2px",backC:"darkgreen",
      text:"Restore Text",minWidth:"40%",setFunc:()=>{
//        let txt = JSON.parse(player.mailbox.lookforBack)
        let txt = player.mailbox.lookforBack
        getID("lookforinfo").value = txt 
        navigator.clipboard.writeText(txt)
      }})
  
    addEle({dad:cc,text:"* Restore Text saves the text in the clipboard<br>so you just need to paste it back.",textC:YG,marginB:"5px"})
    

}


function getRwdSt(){
  let newA = []
  player.rewards.forEach(r=>{
    r.content.forEach(c=>{
      let idx = newA.findIndex(x=>x.lbl===c.lbl)
      if(idx===-1){
        let tpI = {lbl:c.lbl,won:0,total:0}
        tpI.total += c.val
        if(r.winner!==undefined){tpI.won += c.val}
        newA.push(tpI)
      } else {
        newA[idx].total += c.val
        if(r.winner!==undefined){newA[idx].won += c.val}
      }
    })
  })
  return newA
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

/// [ selling ((Large Net)) ] 2k 25g (few times) **Closing shop when advertising is off chat