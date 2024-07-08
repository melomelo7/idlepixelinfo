
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
                addEle({dad:tr,what:"td",setID:"section1",setClass:"section",rowSpan:2})
                addEle({dad:tr,what:"td",setID:"section2",setClass:"section"})
            tr = addEle({dad:tb0,what:"tr",height:sectionH+"px"})
              //  addEle({dad:tr,what:"td",setID:"section3",setClass:"section"})
                addEle({dad:tr,what:"td",setID:"section4",setClass:"section"})

