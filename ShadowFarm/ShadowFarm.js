
const body = document.querySelector("body")
const globalFr = addEle({dad:body,setClass:"globalFr",})

const mainFork = addEle({dad:globalFr,setClass:"mainFork"})
    const leftF = addEle({dad:mainFork,setClass:"leftF"})
        const menuA = addEle({dad:leftF,setClass:"menuBlock",text:"A"})
        const menuB = addEle({dad:leftF,setClass:"menuBlock",text:"B"})
    const rightF = addEle({dad:mainFork,setClass:"rightF"})

        const infos = addEle({dad:rightF,setClass:"infos"})
        const main  = addEle({dad:rightF,setClass:"main"})
        const tb0 = addEle({dad:main,what:"table"})
        console.log(main.getBoundingClientRect().height)
        let sectionH = Math.floor((main.getBoundingClientRect().height -30)/2)
        let sectionW = Math.floor((main.getBoundingClientRect().width -10)/2)
        let tr = addEle({dad:tb0,what:"tr",height:sectionH+"px",})
                addEle({dad:tr,what:"td",setID:"sectionA",setClass:"section",rowSpan:2})
                addEle({dad:tr,what:"td",setID:"sectionB1",setClass:"section"})
            tr = addEle({dad:tb0,what:"tr",height:sectionH+"px"})
              //  addEle({dad:tr,what:"td",setID:"section3",setClass:"section"})
                addEle({dad:tr,what:"td",setID:"sectionB2",setClass:"section"})


                console.log(getComputedStyle(menuA).getPropertyValue("font-size"))

                addEle({dad:getID("sectionA"),text:"Gold",fontS:"16px"})
                addEle({dad:getID("sectionA"),text:"Gold",fontS:"18px"})
                addEle({dad:getID("sectionA"),text:"Gold",fontS:"20px"})
                addEle({dad:getID("sectionA"),text:"Gold",fontS:"22px"})
                addEle({dad:getID("sectionA"),text:"Gold",fontS:"24px"})
                addEle({dad:getID("sectionA"),text:"Gold",fontS:"26px"})
                addEle({dad:getID("sectionA"),text:"Gold",fontS:"28px"})
                addEle({dad:getID("sectionA"),text:"Gold",fontS:"30px"})
                addEle({dad:getID("sectionA"),text:"Gold",fontS:"32px"})
                addEle({dad:getID("sectionA"),text:"Gold",fontS:"34px"})
                addEle({dad:getID("sectionA"),text:"Gold",fontS:"36px"})
                addEle({dad:getID("sectionA"),text:"Gold",fontS:"38px"})
                addEle({dad:getID("sectionA"),text:"Gold",fontS:"40px"})