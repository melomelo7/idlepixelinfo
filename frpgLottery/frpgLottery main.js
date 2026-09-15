/*
let itemsBase2 = ["Acorn Pie","Apple Pie","Breakfast Boost","Cabbage Stew","Cat's Meow",
"Cookie Set","Crunchy Omelette","Friendship Bag 01","Happy Cookies",
"Hickory Omelette","Lemon Cream Pie","Lovely Cookies","Mushroom Stew","Neigh",
"Onion Soup","Over The Moon","Protein Bar","Sea Pincher Special","Quandary Chowder",
"Shrimp-a-Plenty","Spooky Cookies","Spooky Pie",]
*/

/*
let itemsBase = ["acorn pie","apple pie","breakfast boost","cabbage stew","cat's meow",
"cookie set","crunchy omelette","friendship bag 01","happy cookies",
"hickory omelette","lemon cream pie","lovely cookies","mushroom stew","neigh",
"onion soup","over the moon","protein bar","sea pincher special","quandary chowder",
"shrimp-a-plenty","spooky cookies","spooky pie",] 
*/

/*
let txt = "let itemsList = ["
player.items.forEach(i=>{
  txt+=`"`+i+`",`
})
txt+="]"

body.innerHTML = txt
*/

const savKey = "frpgLotterySave"

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
        itemsList.forEach(i=>{player.items.push(i)})
    }
    console.log(savStatus)
}

function burnSav(){
  localStorage.removeItem(savKey)
  location.reload()
}

function arrSorting(arr){
  let newArr = arr.sort()
  newArr = newArr.sort((a, b) => parseInt(a) - parseInt(b))
  newArr = newArr.map(x=>x.toLowerCase().replace(/[()]/g, ""))
  return newArr
}

function rndNB(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min
}


let itemsList = ["acorn pie","apple pie","breakfast boost","cabbage stew","cat's meow",
"cookie set","crunchy omelette","friendship bag 01","happy cookies","hickory omelette",
"lemon cream pie","lovely cookies","mushroom stew","neigh","onion soup","over the moon",
"protein bar","sea pincher special","quandary chowder","shrimp-a-plenty","spooky cookies",
"spooky pie","5 gold","10 gold","25 gold","50 gold","100 gold","orange juice",
"arnold palmer","Large Net","((Mug of Beer))","((Lemonade))"] 
itemsList = arrSorting(itemsList)


let player = {
    items :[],
    rewards:[],
    pool:[],
}

loadPlayer()

let draftRwd = undefined

const body = document.querySelector("body")
const bodyTop = addEle({dad:body,padding:"5px 10px"})
const bodyMenu = addEle({dad:body,})
const bodySub = addEle({dad:body,padding:"0 10px"})

function setNumberPool(){

}



function setPage(){
  addEle({dad:bodyTop,text:`for page smooth processing all inputs are set to lower case.<br>
  Example : A Big Cat Named TOM => a big cat named tom`,textC:"teal"})
  let cont = addEle({dad:bodyMenu,setClass:"contRow"})
  addEle({dad:cont,setClass:"btn",text:"Items list and Rewards",setFunc:itemsMenu})
  addEle({dad:cont,setClass:"btn",text:"Game Pool",setFunc:setGamePool})
  addEle({dad:cont,setClass:"btn",text:"Delete Save",border:"solid red 2px",setFunc:burnSav})
//  addEle({dad:cont,setClass:"btn",text:"Delete Pool",border:"solid red 2px",setFunc:()=>{player.pool=[] ; savPlayer() }})
}
setPage()

function itemsMenu(){
  let tgt = bodySub
  cleanParent(tgt)

  let btW = 140
  let c1 = addEle({dad:tgt,setID:"itmTop",setClass:"contCol"})
    addEle({dad:c1,text:"Items list will be used to set Rewards"})
    let cr = addEle({dad:c1,setClass:"contRow"})
      addEle({dad:cr,setClass:"btn",minWidth:btW+"px",setID:"revItm",setFunc:listItems})
      addEle({dad:cr,setClass:"btn",minWidth:btW+"px",setID:"revRwd",setFunc:listRewards})
    cr = addEle({dad:c1,setClass:"contRow"})
      addEle({dad:cr,setClass:"btn",minWidth:btW+"px",text:"Add new Item",setFunc:addNewItem})
      addEle({dad:cr,setClass:"btn",minWidth:btW+"px",text:"Add new Reward",setFunc:addNewRwd})

  addEle({dad:tgt,setClass:"contCol",setID:"itmSub",maxHeight:"300px",overflowX:"auto",maxWidth:"340px",alignItems:"center"})
 
  updBtns()
}


function updBtns(){
  getID("revItm").innerHTML = "Review Items ["+spanText({text:player.items.length,col:"yellowgreen",})+"]"
  getID("revRwd").innerHTML = "Review Rewards ["+spanText({text:player.rewards.length,col:"yellowgreen",})+"]"
}


function listItems(){
  let tgt = getID("itmSub")
  cleanParent(tgt)
  let cpt = -1
  let arr = arrSorting(player.items)
  arr.forEach(i=>{
    cpt++
    let cont = addEle({dad:tgt,setClass:"contRow",margin:"0",alignItems:"center"})
      addEle({dad:cont,text:i,backC:"green",minWidth:"200px",paddingL:"5px"})
      addEle({dad:cont,setClass:"btn",text:"Delete Item",border:"red solid 2px",
      setID:"itm:"+cpt,fontS:"16px",setFunc:(e)=>{
        let idx = Number(e.srcElement.id.split(":")[1])
        player.items.splice(idx,1)
        savPlayer()
        listItems()
      }})
  })

  updBtns()
}


function addNewItem(){
  let tgt = getID("itmSub")
  cleanParent(tgt)

  let cr = addEle({dad:tgt,setClass:"contRow",margin:"10px"})
    addEle({dad:cr,text:"Item Name :",marginR:"10px"})
    addEle({dad:cr,what:"input",isInput:true,textA:"center",setID:"newItm",
    setFunc:(e)=>{e.srcElement.value = e.srcElement.value.toLowerCase()}})

    getID("newItm").addEventListener("keydown", (event) => {
      if (event.key === "Enter") {getID("addItmBtn").click()}
    })
    addEle({dad:cr,minWidth:"24px",setID:"itmGood",marginL:"5px"})

  addEle({dad:tgt,text:`Copy an item name from the game is possible<br>Example : ((Stone)) will be saved as stone.`,textC:"yellowgreen"})

  cr = addEle({dad:tgt,setClass:"contRow",margin:"10px"})
    addEle({dad:cr,setClass:"btn",text:"Add this new Item",width:"200px",
    border:"green solid 2px",setID:"addItmBtn",setFunc:()=>{
      let itm = getID("newItm").value
      if(itm.length>0){
        let idx = player.items.indexOf(itm)
        if(idx===-1){
          let disp = getID("itmGood")
          player.items.push(itm)
          player.items = arrSorting(player.items)
          savPlayer()
          updBtns()
          disp.innerHTML = "✅"
          setTimeout(()=>{disp.innerHTML = ""},1000)
        }
      }
    }})

  getID("newItm").focus()
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


function addNewRwd(){
  let tgt = getID("itmSub")
  cleanParent(tgt)

  draftRwd = {
    idx:undefined,
    lbl:getNm(),
    content:[],
    use:true,
  }

  let cr = addEle({dad:tgt,setClass:"contRow",margin:"",alignItems:"center"})
    addEle({dad:cr,text:"Build Rwd",width:"fit-content",borderB:"green solid 2px"})
    addEle({dad:cr,setClass:"infoBtn",text:"i",setFunc:()=>{

      let togl = getID("checkBC")
      let disp = getID("rwdInfo")
      cleanParent(disp)

      let show = undefined
      if(disp.style.display === "none"){show = true}
      else {
        show = (disp.style.display === "none" && togl.checked) ||
        (disp.style.display === "flex" && !togl.checked) ? true : false
      }

      togl.checked = true 

      if(show){
        disp.style.display = "flex"
        disp.style.border = "green solid 2px"
        disp.innerHTML = `
        Name Reward : change name if you wish, then add items to your reward.<br>
        1 or more items to include in this reward, with quantity for each item.<br>
        Example : 600 OJ (+ 5 gold , + ... , + ... )`
      } else {
        disp.style.display = "none"
      }

    }})
    addEle({dad:cr,setClass:"btn",text:"Copy Rwd",border:"solid 2px chocolate",setFunc:()=>{

      let togl = getID("checkBC")
      let disp = getID("rwdInfo")
      cleanParent(disp)
      disp.innerHTML = ""

      let show = undefined
      if(disp.style.display === "none"){show = true}
      else {
        show = (disp.style.display === "none" && !togl.checked) ||
        (disp.style.display === "flex" && togl.checked) ? true : false
      }

      togl.checked = false

      if(show){
        if(player.rewards.length===0){return}
        disp.style.display = "flex"
        disp.style.border = "chocolate solid 2px"

        disp.innerHTML = `Use previously built Reward, 
        modify its content to make a new Reward out of it.`

        let cr = addEle({dad:disp,setClass:"contRow",alignItems:"center",justifyC:"center"})
          let selCop = addEle({dad:cr,what:"select",setClass:"select",textA:"center",
          border:"chocolate 2px solid",setID:"selCop",setFunc:(e)=>{
            let fr = getID("rwdCFr")
            cleanParent(fr)
            let itm = player.rewards.filter(x=>x.lbl===getID("selCop").value)[0]
            console.log(itm)
            let frc = addEle({dad:fr,setClass:"contCol",paddingL:"20px",alignItems:"left"})
            itm.content.forEach(c=>{
              addEle({dad:frc,text:spanText({text:c.val+"x ",col:"yellowgreen"})+c.lbl})
            })
          }})
            player.rewards.forEach(r=>{addEle({dad:selCop,what:"option",text:r.lbl})})
          addEle({dad:cr,setClass:"btn",border:"chocolate 2px solid",fontS:"16px",text:"Copy",
          setFunc:()=>{
            let itm = player.rewards.filter(x=>x.lbl===getID("selCop").value)[0]
            console.log(itm)
            draftRwd = {
              idx:undefined,
              lbl:getNm()+"(copy)",
              content:[],
              use:true,
            }
            itm.content.forEach(x=>{draftRwd.content.push(x)})
            getID("rwdNm").value = draftRwd.lbl
            dispDraft()
          }})
          addEle({dad:disp,setClass:"contCol",setID:"rwdCFr"})

          let ev = new Event("change") ; getID("selCop").dispatchEvent(ev)
      } else {
        disp.style.display = "none"
      }

    }})
    addEle({dad:cr,setClass:"btn",border:"red solid 2px",text:"Clear",setFunc:addNewRwd})
    addEle({dad:cr,what:"checkbox",isInput:true,setID:"checkBC",visibility:"hidden"}).click()
  
  addEle({dad:tgt,setClass:"contCol",border:"green solid 2px",radius:"10px",padding:"3px 5px",
  display:"none",setID:"rwdInfo"})

  let ccfr = addEle({dad:tgt,setClass:"contCol"})

    cr = addEle({dad:ccfr,setClass:"contRow",margin:"5px 0"})
      addEle({dad:cr,text:"Name Reward :",marginR:"10px"})
      addEle({dad:cr,what:"input",isInput:true,textA:"center",setID:"rwdNm",setVal:draftRwd.lbl,
      setFunc:(e)=>{
        let txt = e.srcElement.value 
        e.srcElement.value = txt.toLowerCase()
        if(txt.length>1){draftRwd.lbl = txt}
      }})

    cr = addEle({dad:ccfr,setClass:"contRow",alignItems:"center",margin:"5px 0"})
      let txt = "Build "+spanText({text:1,col:"yellowgreen"})+" or more copies of this reward :"
      addEle({dad:cr,text:txt,marginR:"5px"})
      addEle({dad:cr,what:"input",isInput:true,textA:"center",width:"20px",setID:"rwdBulk",
      numInput:true,setVal:1,setFunc:(e)=>{}})

    cr = addEle({dad:ccfr,setClass:"contRow",alignItems:"center"})
      addEle({dad:cr,text:"Reward contains "+spanText({text:draftRwd.content.length,col:"yellowgreen"})+
      " item(s)",setID:"rwdTxt"})
      addEle({dad:cr,setClass:"btn",border:"green solid 2px",text:"Add Item(s)",marginL:"10px",fontS:"14px",
      setFunc:()=>{getID("addI").style.display = getID("addI").style.display === "none" ? "flex" : "none"}})


    cr = addEle({dad:ccfr,setClass:"contRow",margin:"",alignItems:"center",display:"none",setID:"addI"})
      addEle({dad:cr,what:"input",isInput:true,width:"40px",numInput:true,setVal:1,
      textA:"center",margin:"0 5px 0 0",setID:"itmQt"})

      let selRwd = addEle({dad:cr,what:"select",setClass:"select",textA:"center",border:"green solid 2px",setID:"selRwd"})
        addEle({dad:selRwd,what:"option",text:"- Pick an Item -"})
        player.items.forEach(it=>{addEle({dad:selRwd,what:"option",text:it})})

        addEle({dad:cr,setClass:"btn",text:"OK",width:"50px",border:"solid green 2px",fontS:"14px",
        setFunc:()=>{
          let val1 = getID("selRwd").selectedIndex
          let val2 = Math.ceil(getID("itmQt").value)
          if(val1 > 0 && val2 > 0){
            draftRwd.content.push({
              lbl:getID("selRwd").value,
              val:val2
            })
            dispDraft()
          }
        }})

    addEle({dad:tgt,setClass:"contCol",padding:"5px",border:"teal solid 2px",paddingL:"20px",
    setID:"draftContent",display:"none",marginT:"5px",radius:"5px",minWidth:"240px"})

    let cc = addEle({dad:tgt,setClass:"contCol",display:"none",setID:"savdr",marginT:"10px",alignItems:"center"})
      addEle({dad:cc,text:"When the reward(s) seems ready for use ...",marginT:"10px"})
      addEle({dad:cc,setClass:"btn",text:"Save the Reward(s) !",border:"solid green 2px",width:"200px",
      setFunc:()=>{
        if(draftRwd.content.length > 0){
          let copies = getID("rwdBulk").value
          copies = copies < 1 ? 1 : copies
          console.log("copies "+copies)
          for(let i=0;i<copies;i++){
            player.rewards.push(structuredClone(draftRwd))
          }
          savPlayer()
          updBtns()
          addNewRwd()
        }
      }})
}


function dispDraft(){
  let tgt = getID("draftContent")
  cleanParent(tgt)

  getID("rwdTxt").innerHTML = "Reward contains "
  +spanText({text:draftRwd.content.length,col:"yellowgreen"})+" item(s)"

  if(draftRwd.content.length > 0){
    tgt.style.display = "flex"

    for(let i=0;i<draftRwd.content.length;i++){
      let itm = draftRwd.content[i]
      let cr = addEle({dad:tgt,setClass:"contRow",alignItems:"center"})
        addEle({dad:cr,setClass:"btn",text:"Delete",border:"solid 2px red",fontS:"14px",
        setID:"del:"+i,setFunc:(e)=>{
          let idx = Number(e.srcElement.id.split(":")[1])
          draftRwd.content.splice(idx,1)
          dispDraft()
        }})
        addEle({dad:cr,text:"- " +spanText({text:itm.val+"x ",col:"yellowgreen"})+itm.lbl})
    }
    getID("savdr").style.display = "flex"
  } else {
    tgt.style.display = "none"
    getID("savdr").style.display = "none"
  }
}


function listRewards(){
  let tgt = getID("itmSub")
  cleanParent(tgt)

  if(player.rewards.length<1){return}

  let arr = player.rewards

  let cc = addEle({dad:tgt,setClass:"contCol"})
    let cr = addEle({dad:cc,setClass:"contRow",alignItems:"center",marginB:"5px"})
      addEle({dad:cr,setClass:"arrowToggler",text:"X",border:"red solid 2px",padding:"1px 4px"})
      addEle({dad:cr,text:"Delete on-line item / full reward",marginL:"5px"})
    cr = addEle({dad:cc,setClass:"contRow",alignItems:"center",marginB:"5px"})
      addEle({dad:cr,setClass:"btn",text:"Change",marginL:"0",fontS:"16px"})
      addEle({dad:cr,text:"saves both Name / Quantity"})
    addEle({dad:cc,text:"( Deleting the last item in a reward will Delete the Reward in full )",marginB:"5px"})

  for(let i=0;i<arr.length;i++){
    let itm = arr[i]
    let fr = addEle({dad:tgt,setClass:"contCol",border:"teal 2px solid",radius:"10px",padding:"2px",marginB:"5px"})
      let cr = addEle({dad:fr,setClass:"contRow",alignItems:"center"})
        addEle({dad:cr,setClass:"arrowToggler",text:"🔼",setID:"arrow:"+i,setFunc:(e)=>{
          let src = e.srcElement
          let idx = Number(src.id.split(":")[1])
          let disp = getID("contFr:"+idx)
          disp.style.display = src.innerHTML === "🔼" ? "none" : "flex"
          src.innerHTML = src.innerHTML === "🔼" ? "🔽" : "🔼"
        }}) // 🔽
        addEle({dad:cr,minWidth:"24px",setID:"chg:"+i})
        addEle({dad:cr,what:"input",isInput:true,setVal:itm.lbl,margin:"",setID:"rwdNm:"+i})//
        addEle({dad:cr,setClass:"btn",fontS:"14px",text:"Change",setID:"chgBtn:"+i,setFunc:(e)=>{
          let idx = Number(e.srcElement.id.split(":")[1])
          let upd = false

          let txt = getID("rwdNm:"+idx).value.toLowerCase()
          if( player.rewards[idx].lbl !== txt && txt.length>1){
            upd = true
            getID("chg:"+idx).innerHTML = "✅"
            player.rewards[idx].lbl = txt
            savPlayer()
          }

          console.log(player.rewards[idx])
          for(let i=0;i<player.rewards[idx].content.length;i++){
            let valO = player.rewards[idx].content[i].val
            let valN = Number(getID("itmElval:"+idx+":"+i).value)
            if(valO !== valN && valN > 0 ){
              upd = true
              player.rewards[idx].content[i].val = valN
              getID("itmElvalC:"+idx+":"+i).innerHTML = "✅"
              savPlayer()
            }
          }

          if(upd){
            setTimeout(()=>{
              getID("chg:"+idx).innerHTML = ""
              for(let i=0;i<player.rewards[idx].content.length;i++){
                getID("itmElvalC:"+idx+":"+i).innerHTML = ""
              }
              listRewards()
            },1000)
          }
        }})
        addEle({dad:cr,setClass:"arrowToggler",text:"X",border:"red solid 2px",padding:"1px 4px",
        setID:"delR:"+i,marginL:"10px",setFunc:(e)=>{
          let idx = Number(e.srcElement.id.split(":")[1])
          player.rewards.splice(idx,1)
          savPlayer()
          updBtns()
          listRewards()
        }})

      let cfr = addEle({dad:fr,setClass:"contCol",setID:"contFr:"+i})
        for(let j=0;j<itm.content.length;j++){
          let itm2 = itm.content[j]
          let cr = addEle({dad:cfr,setClass:"contRow",alignItems:"center",marginB:"5px"})
          addEle({dad:cr,setClass:"arrowToggler",text:"X",border:"red solid 2px",padding:"1px 4px",
          setID:"del:"+i+":"+j,marginR:"5px",setFunc:(e)=>{
            let srcId = e.srcElement.id
            let itmIdx = Number(srcId.split(":")[1])
            let itmElIdx = Number(srcId.split(":")[2])
            let itm = player.rewards[itmIdx]

            itm.content.splice(itmElIdx,1)
            if(itm.content.length===0){
              player.rewards.splice(itmIdx,1)
              updBtns()
            }
            savPlayer()
            listRewards()
          }})
          addEle({dad:cr,minWidth:"24px",setID:"itmElvalC:"+i+":"+j})
          addEle({dad:cr,what:"input",isInput:true,width:"40px",textA:"center",
          numInput:true,setVal:itm2.val,marginR:"5px",setID:"itmElval:"+i+":"+j})
          addEle({dad:cr,text:"x "+itm2.lbl})
        }
  }
}




function setGamePool(){
  let tgt = bodySub
  cleanParent(tgt)

  for(let i=0;i<player.rewards.length;i++){player.rewards[i].idx = (i+1)}

  let cc = addEle({dad:tgt,setClass:"contCol"})
    let cr = addEle({dad:cc,setClass:"contRow",alignItems:"center"})
      addEle({dad:cr,setClass:"btn",setID:"poolBtn1",minWidth:"180px",setFunc:showPoolRwd})
      addEle({dad:cr,what:"checkbox",isInput:true,setID:"togRwdPick",setClass:"toggle-checkbox"
      ,setFunc:(e)=>{
        getID("togRwdPickLbl").innerHTML = e.srcElement.checked ? "Total" : "Selection"
        showPoolRwd()
      }})
      addEle({dad:cr,what:"label",setFor:"togRwdPick",setClass:"toggle-label",margin:"0 5px"})
      addEle({dad:cr,setID:"togRwdPickLbl"})


    addEle({dad:cc,setClass:"btn",text:"Manage Pool",minWidth:"180px",setFunc:managePool})


  addEle({dad:tgt,setClass:"contCol",setID:"poolSub",maxHeight:"300px",overflowX:"auto",
  maxWidth:"340px",alignItems:"center"})

  let ev = new Event("change") ; getID("togRwdPick").dispatchEvent(ev)


  updBtns2()
}

function updBtns2(){
  let val = spanText({text:player.rewards.filter(x=>x.use).length,col:"yellowgreen"})
  getID("poolBtn1").innerHTML = "Rewards used in Pool " + val + " /" +player.rewards.length
  getID("togRwdPickLbl").innerHTML = getID("togRwdPick").checked ? "Total" : "Selection"
}

function showPoolRwd(){
  let tgt = getID("poolSub")
  cleanParent(tgt)


  if(!getID("togRwdPick").checked){

    let arr = player.rewards
    for(let i=0;i<arr.length;i++){
      let itm = arr[i]
      let cc = addEle({dad:tgt,setClass:"contCol",border:"teal solid 2px",radius:"10px",
      padding:"5px"})
        let cr = addEle({dad:cc,setClass:"contRow",alignItems:"center"})
          addEle({dad:cr,setClass:"arrowToggler",text:"🔽",setID:"arrow:"+i,setFunc:(e)=>{
            let src = e.srcElement
            let idx = Number(src.id.split(":")[1])
            let disp = getID("itmD:"+idx)
            disp.style.display = src.innerHTML === "🔼" ? "none" : "flex"
            src.innerHTML = src.innerHTML === "🔼" ? "🔽" : "🔼"
          }}) // 🔼
          addEle({dad:cr,text:itm.lbl,margin:"0 10px",minWidth:"140px"})
          let use = addEle({dad:cr,what:"checkbox",isInput:true,setID:"use:"+i,setFunc:(e)=>{
            let idx = Number(e.srcElement.id.split(":")[1])
            player.rewards[idx].use = e.srcElement.checked
            savPlayer()
            updBtns2()
          }})
          if(itm.use){use.checked=true}
          addEle({dad:cr,text:"Used in Pool",setID:"useLbl:"+i,setFunc:(e)=>{
            let idx = Number(e.srcElement.id.split(":")[1])
            getID("use:"+idx).click()
          }})
  
      cc = addEle({dad:cc,setClass:"contCol",setID:"itmD:"+i,display:"none"})
        itm.content.forEach(c=>{
          let txt = spanText({text:c.val+"x ",col:"yellowgreen"})
          addEle({dad:cc,text:txt+c.lbl,marginL:"30px"})
        })
    }

  } else {
    let fr = addEle({dad:tgt,setClass:"contCol",width:"300px",paddingL:"20px"})
      addEle({dad:fr,text:"Total per items :",borderB:"green solid 2px",marginB:"5px",
      width:"fit-content"})

    let ar1 = player.rewards.filter(x=>x.use)
    let ar2 = []

    ar1.forEach(r=>{
      r.content.forEach(c=>{
        let idx = ar2.findIndex(x=>x.lbl===c.lbl)
        console.log(c.lbl)
        console.log(idx)
        if(idx===-1)
             {ar2.push({lbl:c.lbl,val:c.val})}
        else {ar2[idx].val += c.val}
      })
    })

    ar2 = ar2.sort((a,b)=>a.lbl.localeCompare(b.lbl))

    ar2.forEach(it=>{
      let cr = addEle({dad:fr,setClass:"contRow"})
      addEle({dad:cr,text:"- " + spanText({text:it.val+"x ",col:"yellowgreen"}),minWidth:"60px"})
      addEle({dad:cr,text:it.lbl})
    })

  }

}


function managePool(){
  let tgt = getID("poolSub")
  cleanParent(tgt)
 

  if(player.rewards.length > 0){
    if(player.rewards.filter(x=>x.use).length>0){

      let cr = addEle({dad:tgt,setClass:"contRow",alignItems:"center"})
      addEle({dad:cr,text:"Roll / re-Roll Winning numbers",marginR:"5px",
      borderB:"teal 2px dotted",width:"fit-content"})
      addEle({dad:cr,setClass:"arrowToggler",text:"🔽",setID:"rollArrow",setFunc:(e)=>{
        let src = e.srcElement
        let disp = getID("reRollFr")
        disp.style.display = src.innerHTML === "🔼" ? "none" : "flex"
        src.innerHTML = src.innerHTML === "🔼" ? "🔽" : "🔼"
      }}) // 🔼
    let cc = addEle({dad:tgt,setClass:"contCol",border:"teal solid 2px",radius:"5px",
    width:"fit-content",setID:"reRollFr",display:"none",padding:"10px",margin:"5px 0"})
      addEle({dad:cc,text:"Number Range : Min < Max"})
      cr = addEle({dad:cc,setClass:"contRow",alignItems:"center",justifyC:"center"})
        addEle({dad:cr,what:"input",isInput:true,numInput:true,width:"40px",textA:"center"
        ,setVal:"1",setID:"bound1"})
        addEle({dad:cr,text:"<",margin:"0 10px"})
        addEle({dad:cr,what:"input",isInput:true,numInput:true,width:"40px",textA:"center"
        ,setVal:"100",setID:"bound2",marginR:"20px"})
        addEle({dad:cr,setClass:"btn",text:"OK",setFunc:rollRwd})
  
    addEle({dad:tgt,setClass:"contCol",setID:"rollRwd",marginT:"10px"})
  
    if(player.pool.length>0){dispLottery()}

    } else {
      addEle({dad:tgt,text:`** Use more Rewards in your pool`,textC:"yellowgreen"})
    }
  } else {
    addEle({dad:tgt,text:`** You will need to Add some rewards<br>
    Click on [Items list and Rewards]`,textC:"yellowgreen"})
  }




}

function rollRwd(){
  let arr = player.rewards.filter(x=>x.use)

  if(arr.length>0){
    let dispFr = getID("rollRwd")
    cleanParent(dispFr)

    let v1 = Number(getID("bound1").value)
    let v2 = Number(getID("bound2").value)
    let min = undefined
    let max = undefined
    if(v1>v2){max = v1 ; min = v2} 
    else     {max = v2 ; min = v1}
  
    let rolls = []
  
    let cpt = 0
    while(rolls.length < arr.length){
      cpt++
      let test = rndNB(min,max)
      let idx = rolls.indexOf(test)
      if(idx===-1){rolls.push(test)}
      if(cpt>100){break}
    }
  
    player.pool = []
  
    for(let i=0;i<arr.length;i++){
      player.pool.push({
        idx:arr[i].idx,
        number:rolls[i],
        won:false,
        winner:undefined,
      })
    }
    savPlayer()
    dispLottery()
  }
}

function dispLottery(){
  let dispFr = getID("rollRwd")
  cleanParent(dispFr)

  console.log(player.pool)
  console.log(player.rewards)

  for(let i=0;i<player.pool.length;i++){
    let rwd = player.pool[i]
    let itm = player.rewards.filter(x=>x.idx===rwd.idx)[0]

    let cr = addEle({dad:dispFr,setClass:"contRow",alignItems:"center"})
      addEle({dad:cr,setClass:"arrowToggler",text:"🔽",setID:"rollArrow:"+i,setFunc:(e)=>{
        let src = e.srcElement
        let idx = Number(src.id.split(":")[1])
        let disp = getID("rwdFr:"+idx)
        disp.style.display = src.innerHTML === "🔼" ? "none" : "flex"
        src.innerHTML = src.innerHTML === "🔼" ? "🔽" : "🔼"
      }}) // 🔼
      addEle({dad:cr,text:"Number : ",marginL:"5px"})
      addEle({dad:cr,text:rwd.number,textA:"center",minWidth:"40px",
      margin:"0 10px 0 5px",textC:"#F28123"})
      addEle({dad:cr,text:itm.lbl})
    let cc = addEle({dad:dispFr,setClass:"contCol",display:"none",setID:("rwdFr:"+i)})
    itm.content.forEach(c=>{
      addEle({dad:cc,text:"- "+spanText({text:c.val+"x ",col:"yellowgreen"})+c.lbl,
      marginL:"5px",paddingL:"5px",borderL:"yellowgreen dotted 2px"})
    })
    console.log(itm)

//      cr = addEle({dad:dispFr,setClass:"contRow"})
  }

}


// [ selling ((Large Net)) ] 4k 35g
// [ selling ((Large Net)) ] 3k 25g (x2)

// remain to sell 1k ((Large Net)) for 10g if anyone interested ...