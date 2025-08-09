const body = document.querySelector("body")

let player = {
    start:true,
    stats:[{lbl:"Energy",val:10,cap:10}],
    skills:[{lbl:"hunting",lvl:0,next:10,inc:1}],
    items:[],
}

let popPass = undefined

function setBack(){

    if (player.start){
        let txt = `
        Since that strange beast bit you in the woods last month, 
        you have been sick, so sick ... everyone got scared to come close to you, 
        and you are now alone in that big old castle ... alone and hungry.
        `
  
        popPass = simpleMsg(txt,first)
        popPass.style.visibility = "hidden"
    }


      setTimeout(() => {
        body.style.backgroundImage = "url('imgs/castle3.jpg')";
        body.style.backgroundSize = 'cover';
        body.style.backgroundPosition = 'center';
        popPass.style.visibility = "visible"
      }, 5000);


}

function first(){

    console.log("ok")
    addEle({dad:body,what:"select",setClass:"select",setID:"actions"})
        addEle({dad:getID("actions"),what:"option",setClass:"option",text:"-- Actions --"})
}

setBack()