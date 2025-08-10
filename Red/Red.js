const body = document.querySelector("body")
const loadT = 4000 

addEle({dad:body,setClass:"btn",text:"del Sav",setFunc:removePlayer,setID:"delsav"})

addEle({dad:body,setClass:"contRow",setID:"topLine"})
    const statsCont = addEle({dad:getID("topLine"),setClass:"contCol",margin:"10px"})
    const actionsCont = addEle({dad:getID("topLine")})
        addEle({dad:actionsCont,what:"select",setClass:"select",setID:"actions",display:"none"})

let player = {
    start:true,
    stats:[
        {lbl:"Level",disp:true,val:0,next:10},
        {lbl:"Exp",disp:true,val:0},
        {lbl:"Energy",disp:true,val:5,cap:10},
        {lbl:"HP",disp:false,val:5,cap:5}],
    skills:[{lbl:"hunting",lvl:0,next:10,inc:1}],
    items:[],
}

// save load delete player save /////////////////////////
const savKey = "shadow7_Red"
function savPlayer(){localStorage.setItem(savKey,JSON.stringify(player))}
function loadPlayer(){let mySave = localStorage.getItem(savKey)
                      if(mySave){console.log("found"); player = JSON.parse(mySave)}}
function removePlayer(){localStorage.removeItem(savKey)}
/////////////////////////////////////////////////////////


let popPass = undefined

function setBack(){

    if (player.start){
        let txt = `
        Since that strange beast bit you in the woods last month, 
        you have been sick, so sick ... everyone got scared to come close to you, 
        and you are now alone in that big old castle ... 
        alone and hungry, as no food is remaining.<br>
        You should try hunt animals in the woods now...
        `
        popPass = simpleMsg(txt,()=>{player.start = false;savPlayer(),setPg(false)})
        popPass.style.visibility = "hidden"
        
    } else {setPg()}


      setTimeout(() => {
        body.style.backgroundImage = "url('imgs/castle3.jpg')";
        body.style.backgroundSize = 'cover';
        body.style.backgroundPosition = 'center';
        if(popPass){popPass.style.visibility = "visible"}
      }, loadT);

}

function setPg(wait=true){

    if(wait){
        setTimeout(() => {
            dispStats()
            fillActions()
        }, loadT);
    } else {
        dispStats()
        fillActions()
    }
    console.log("ok")
//    addEle({dad:body,what:"select",setClass:"select",setID:"actions"})
  //      addEle({dad:getID("actions"),what:"option",text:"-- Actions --"})



}

function dispStats(){

}

function fillActions(){
    let tgt = getID("actions")
    cleanParent(tgt)
    

    tgt.style.display = "block"
}

loadPlayer()
setBack()


//removePlayer()

console.log(player)

//getID("delsav").style.display="none"

