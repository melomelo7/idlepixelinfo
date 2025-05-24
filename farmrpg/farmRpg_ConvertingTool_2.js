
function setPage(){
    let last = "Last up 2025 05/24 21:15"
    let from = userI.visuals.preset

    let contR = addEle({dad:body,setClass:"contRow",alignItems:"center",margin:"5px"})
    lnk = "https://melomelo7.github.io/idlepixelinfo/farmrpg/farmRpg_Bob1_Farm.html"
        addEle({dad:contR,setClass:"btn",text:"⇦ Go Back",backC:from.buttonBackC,setFunc:()=>{window.open(lnk,"_self")}})
        addEle({dad:contR,text:spanText("yellow",last),margin:"10px"})
        addEle({dad:contR,text: "infos 🔽",padding:"3px 10px",setClass:"btn",setID:"dispHelpBtn",backC:"green",setFunc:dispHelp})
    addEle({dad:body,setClass:"contRow",border:"teal solid 2px",radius:"20px",setID:"helpCont",padding:"5px 10px 5px 5px",
        display:"none",width:""})        
    
    let settingsFr = addEle({dad:body,setClass:"contCol",padding:"5px",width:"100%"})
        let setTop = addEle({dad:settingsFr,setClass:"contRow",alignItems:"center",marginL:"5px"})
            addEle({dad:setTop,text: "User Settings "+spanText("yellow","⚙"),fontS:"20px",margin:"0 5px"})
            addEle({dad:setTop,text: spanText("lime","🔽",20),setClass:"arrowToggler",
                    setFunc:(e)=>{arrowContToggler(e,"settingsCont",setSettings)}})
    
            addEle({dad:setTop,text:"Rate Set Currently Used : ",marginL:"10px"})
            addEle({dad:setTop,what:"radio",isInput:true,setVal:"Basic",setName:"rateSets",
            accentCol:"green",setFunc:rateSelection})
            addEle({dad:setTop,what:"radio",isInput:true,setVal:"Custom",setName:"rateSets",
            accentCol:"green",setFunc:rateSelection})
            addEle({dad:setTop,setID:"currentSet",marginL:"5px"})
            
        addEle({dad:settingsFr,setClass:"contCol",borderL:"yellow solid 3px",minHeight:"30px",
        padding:"5px",display:"none",margin:"",setID:"settingsCont"})

    addEle({dad:body,setClass:"contCol",padding:"5px",width:"100%",setID:"advFr"})        

    addEle({dad:body,setClass:"contCol",padding:"5px",width:"100%",setID:"toolsFr"})        
    
    document.getElementsByName("rateSets").forEach(it=>{if(it.value===userI.currentSet){it.click()}})
}

let helpArr =[
    {label:"For a basic simple use of this webpage",text:
    `all you need for a converting is to :<br>
     - input the "Order" amount (3rd white input area)<br>
     - read the "payout" that will show on next line<br>
     - and send payout to the customer<br>
     everything else is additional tools and infos 🤠
    `},
    {label:"Tool Sets",text:
    `The basic tool set gives the current options to allow every type of conversions at standard<br>
     rates common to all players. If its too many tools to see at once OR if you would rather use<br>
     a different rate than the usuals, make your own custom tool set under :<br>
     "User Settings" > "Rates/Ratios" > "Custom Rates"<br><br>
     You can Also try changing the Tools per Line under Settings ...`},
     {label:"Use Tools : Advertise",text:
     `Click one or more "Advertise" will generate a message you can bring in game chat.<br><br>
      (Saved to clipboard, only need to paste in chat. Modify content if needed in any text tool<br>
       or by opening a new message in your ingame message box, paste info and change it there ...<br>
       then copy-paste again into the chat)`},
    {label:"Use Tools : Reset/all",text:
    `Use the reset buttons to clean inputs rather than reloading (F5)<br>
    the webpage, as reloading the webpage will wipe out the Memos.
    `},
    {label:"Use Tools : Customer MB size",text:
    `optional (part of Memo), when you need to pay goods back to customer, how<br>
     many full MailBoxes and how much remaining on the final mailbox sending<br>
     will be displayed in the "Payout Details" IF you provided the Customer MB size.
    `},
    {label:"Use Tools : Customer Name",text:
    `optional (part of Memo), like advertising its another information that can be saved<br>
    into the clipboard and then used with the "PING" to msg your customer in chat.
    `},
    {label:"Use Tools : Memo & Order",text:
    `Memo/History is auto-saved after 3 seconds you start typing the Order ( = amount sent by customer )<br>
     change speed of memo and max memos saved under "Settings" if you need more or if speed doesnt fit<br>
     your typing speed. Memo taken includes : Date/Hour/Order Amount/customer Name/customer MB size.<br><br>
     ** Memos are wiped out when you reload the webpage, use the reset buttons if you need clean inputs**<br><br>
     Practical use ? If you see several people asking a convertion now, you put information for every one<br>
     MB size + Name + Order (order is when the memo is saved so always type at the end)<br><br>
     Remember to use the settings if more memos are needed or if speed is not good for you.<br><br>
     ** IF auto-Memos does not respond well enough you can switch to manual memos anytime. **<br>
     ** (New update from 05/07 you might need to [Delete user settings] & reload to have this working) ** )
    `},
    {label:"Settings : Rates / Ratios",text:
    `Basic Rates :<br> Only for display cannot be modified<br><br>
     Custom Rates :<br> Set your own tools at your own rates in the display order you like.
    `},
    {label:"Settings : User Details",text:
    `Optional, used to display informations in middle and bottom part of tools.<br>
     (example stone needed for LN conversions ... or masteries related informations)
    `},
       /*
       {label:"",text:
       `
       `},
       */

]

function dispHelp(){
    let workC = getID("helpCont")
    if(workC.style.display==="none"){
        cleanParent(workC) 
        workC.style.display = "flex"
        let helpFork = addEle({dad:workC,setClass:"contRow"})
            let helpForkA = addEle({dad:helpFork,setClass:"contCol"})
            let helpForkB = addEle({dad:helpFork,setClass:"contCol"})
                            addEle({dad:helpForkB,setID:"helpContFr",margin:"20px 10px"})
                            helpArr.forEach(itm=>{addEle({dad:helpForkA,setClass:"btn",text:itm.label,backC:"green",
                            minWidth:"260px",setFunc:()=>{getID("helpContFr").innerHTML=itm.text}}) })
                            getID("dispHelpBtn").innerHTML = "Infos 🔼"
    } else {workC.style.display = "none" ; getID("dispHelpBtn").innerHTML = "Infos 🔽" }
    console.log("disp help")
}

function setSettings(){
    let workC = getID("settingsCont")
    cleanParent(workC)
    let subC = undefined
    let inC = undefined
    let cont = undefined

    let from = userI.visuals.preset
    addEle({dad:workC,setClass:"contRow",alignItems:"center",margin:"5px",
    borderL:"dotted 3px teal",setID:"toolsCont"})
        addEle({dad:getID("toolsCont"),text:"Tools per Line",margin:"5px 10px"})
        addEle({dad:getID("toolsCont"),what:"input",isInput:true,setVal: userI.toolPerLine,
                width:"10px",setFunc:(e)=>{changeToolsCount(e)}})

        subC = addEle({dad:getID("toolsCont"),setClass:"contRow",border:"teal solid 2px",
        radius:"10px",marginL:"10px",paddingR:"10px"})
            addEle({dad:subC,text:"Order<br>Memos",backC:"rgb(45, 88, 128)",radiusTL:"7px",radiusBL:"7px",
            padding:"5px",display:"flex",alignItems:"center",textA:"center",borderR:"teal solid 2px"})

            cont = addEle({dad:subC,setClass:"contRow",alignItems:"center"})
                inC = addEle({dad:cont,setClass:"contRow",marginL:"10px",alignItems:"center",
                border:"teal dotted 2px",radius:"10px",height:"fit-content",paddingR:"10px"})
                    addEle({dad:inC,text:"History<br>Count :",padding:"5px",display:"flex",alignItems:"center",
                    textA:"center",marginL:"10px"})
                    addEle({dad:inC,what:"input",isInput:true,setVal: userI.memoCap,textA:"center",height:"20px",
                    width:"30px",setFunc:(e)=>{changeMemoCap(e)}})

            cont = addEle({dad:subC,setClass:"contCol",marginL:"10px",borderL:"teal dotted 2px",paddingL:"5px"})
                inC = addEle({dad:cont,setClass:"contRow",alignItems:"center"})
                    addEle({dad:inC,what:"radio",isInput:true,setName:"memoType",setVal:"auto",accentCol:"green",
                    setFunc:(e)=>{userI.memoType = e.srcElement.value ; setTools()}})
                    addEle({dad:inC,text:"Auto-Memo after X seconds<br>you started typing Order, X =",
                    margin:"5px 10px",textA:"center"})
                    addEle({dad:inC,what:"input",isInput:true,setVal: userI.memoTimer,textA:"center",
                    width:"20px",height:"20px",setFunc:(e)=>{changeMemoTime(e)}})

                inC = addEle({dad:cont,setClass:"contRow"})
                    addEle({dad:inC,what:"radio",isInput:true,setName:"memoType",setVal:"manual",accentCol:"green",
                    setFunc:(e)=>{userI.memoType = e.srcElement.value ; setTools()}})
                    addEle({dad:inC,text:"Add a button to Manualy Save Memos",margin:"5px 10px",textA:"center"})
            document.getElementsByName("memoType").forEach(el=>{if(el.value === userI.memoType){el.checked = true}})

    addEle({dad:workC,setClass:"contRow",alignItems:"center",marginB:"10px",setID:"ratesTgl"})
            subC = addEle({dad:getID("ratesTgl"),setClass:"contRow",minWidth:"95px",justifyC:"right",
            padding:"5px"})
            addEle({dad:subC,text: "Rates / Ratios",borderB:purple+" 2px dotted"})
        addEle({dad:getID("ratesTgl"),text: spanText("lime","🔽",16),setClass:"arrowToggler",
        border:purple+" solid 2px",margin:"0 10px",setFunc:(e)=>{arrowContToggler(e,"ratesCont",setRatesCont)}})
    addEle({dad:workC,setClass:"contCol",alignItems:"center",margin:"5px",borderL:"dotted 3px teal",
    display:"none",setID:"ratesCont",width:"fit-content"})

    
    addEle({dad:workC,setClass:"contRow",alignItems:"center",marginL:"",setID:"userDTgl"})
        subC = addEle({dad:getID("userDTgl"),setClass:"contRow",minWidth:"95px",justifyC:"right",
            padding:"5px"})
            addEle({dad:subC,text: "User Details",borderB:purple+" 2px dotted"})
        addEle({dad:getID("userDTgl"),text: spanText("lime","🔽",16),setClass:"arrowToggler",
        border:purple+" solid 2px",margin:"0 10px",setFunc:(e)=>{arrowContToggler(e,"userDcont",setUserDetails)}})
    addEle({dad:workC,setClass:"contCol",margin:"5px",borderL:"dotted 3px teal",
    display:"none",setID:"userDcont",width:"fit-content"})

        cont = addEle({dad:workC,setClass:"contRow",alignItems:"center",width:"fit-content"})
        addEle({dad:cont,setClass:"btn",text:"Check / Save User Settings 🔽",margin:"10px 0",
        backC:from.buttonBackC,setID:"checkSavBtn",setFunc:setUserSav})

        addEle({dad:cont,setClass:"btn",text:"Delete User Settings",minWidth:"160px",marginL:"50px",backC:from.buttonBackC,
        setFunc:removeKey})
    
        addEle({dad:cont,marginL:"20px",textC:purple,setID:"info"})


    addEle({dad:workC,setClass:"contCol",marginL:"10px",padding:"5px",height:"fit-content",
    width:"fit-content",display:"none",setID:"savCont",alignItems:"center"})
}

setPage()