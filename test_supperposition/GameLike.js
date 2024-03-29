

const body = document.querySelector("body")

const menu = addEle({dad:body,minWidth:"100px",borderR:"solid blue 2px"})
const mainFrame = addEle({dad:body,backC:"green",width:"100%",setClass:"contCol"})
    let BottomHeight = 130
    let cellSize = 40
    const displayFr = addEle({dad:mainFrame,text:"A",height:"calc(100% - "+BottomHeight+"px)",setClass:"contCol"})
        const screen = addEle({dad:displayFr,height:(cellSize*9+72)+"px",width:(cellSize*9+72)+"px",
        border:"white solid 2px",margin:"5px",radius:"5px",backC:"black",overflow:"hidden"})
    const actionFr = addEle({dad:mainFrame,backC:"black",height:BottomHeight+"px",setClass:"contRow"})
        
        const dirPad = addEle({dad:actionFr,what:"table",margin:"5px",
        height:(cellSize*3)+"px",width:(cellSize*3)+"px"})
        for(let i=1;i<4;i++){
            let line = addEle({dad:dirPad,what:"tr",maxHeight:cellSize+"px"})
            for(let j=1;j<4;j++){
                addEle({dad:line,what:"td",setID:"dirPadL"+i+":C"+j,
                setFunc:function(e){if(e.srcElement.id !== "dirPadL2:C2"){dirPadClick(e.srcElement.id)}} })
            }
        }
        const dirPadCells = [{id:"dirPadL1:C2",code:"0x23EB"},{id:"dirPadL2:C1",code:"0x23EA"},
            {id:"dirPadL2:C3",code:"0x23E9"},{id:"dirPadL3:C2",code:"0x23EC"},{id:"dirPadL2:C2",code:""}]
        dirPadCells.forEach((x)=>{
            getID(x.id).setAttribute("class","dirPadTile")
            getID(x.id).innerHTML = emC(x.code) })
            

dirPadUse = true
player.location = {layer:"home",row:9,col:8}

function dirPadClick(thisID){
    if(!dirPadUse){return}
    let direction = ""
    switch(thisID){
        case "dirPadL1:C2" : direction = "Up" ; break
        case "dirPadL2:C1" : direction = "Left" ; break
        case "dirPadL2:C3" : direction = "Right" ; break
        case "dirPadL3:C2" : direction = "Down" ; break
    }
    console.log(direction)
}

function setLayer(){
    let myArr = []
    let tileS = 40
    myLayer = layers.filter(x=>x.label = player.location.layer)[0]
    let layerT = addEle({dad:screen,what:"table",width:(myLayer.cols*tileS)+"px", // screen
    height:(myLayer.rows*tileS)+"px",backC:myLayer.backC,tableLayout:"fixed"})
    for(let i=1;i<=myLayer.rows;i++){
        let line = addEle({dad:layerT,what:"tr",})
        for(let j=1;j<=myLayer.cols;j++){
            addEle({dad:line,what:"td",setID:i+":"+j,border:"solid red 2px",setClass:"screenTile"})
            myArr.push(i+":"+j)
        }
    }

    myLayer.build.forEach((build)=>{
        menu.innerHTML = build.tile
        myArr = []
        build.ranges.forEach((range)=>{
            if(range.includes("~")){
                let RsP1 = Number(range.split("~")[0].split(":")[0])
                let RsP2 = Number(range.split("~")[0].split(":")[1])
                let ReP1 = Number(range.split("~")[1].split(":")[0])
                let ReP2 = Number(range.split("~")[1].split(":")[1])
                if(RsP1 === ReP1){// line
                    for(let i=RsP2;i<=ReP2;i++){
                        let myCell = getID(RsP1+":"+i)
                        myCell.innerHTML = emC(build.code)
                        myArr.push(RsP1+":"+i)

                    }
                } 
                else if(RsP2 === ReP2){// column
                    for(let i=RsP1;i<=ReP1;i++){
                        myArr.push(i+":"+RsP2)
                        
                    }
                } else { console.log("unknown range")}
                
            } else {
                console.log("simple : "+range)
            }
            
         })
            
    })



}

setLayer()