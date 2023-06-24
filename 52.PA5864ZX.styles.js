
const grandContainerStyle = `
color: white;
font-size : 14px;
heigt : 100%;
width : 100%;
`

const leftWidth = 150
const leftPadding = 10
const leftMenuStyle = `
position: fixed;
padding: `+(leftPadding*2)+`px `+leftPadding+`px 0 `+leftPadding+`px;
background-color: black;
height: 99%;
width: `+leftWidth+`px;
border-radius: 20px;
border: solid 2px white;
`

const topLeft = 2 + leftWidth + (leftPadding*2)
const topMenuStyle = `
position:fixed;
margin: 0 0 0 `+ (topLeft+5) +`px;
background-color: black;
height: 100px;
width:calc(100% - `+(topLeft+14)+`px);
border-radius: 20px;
border: solid 2px white;
`

const buttonStyle = `
background-color: black;
text-align:center;
border : blue solid 3px;
padding: 5px;
border-radius:5px;
cursor: pointer;
`

const containerRow = `
display:flex;
flex-direction: row;
`

const containerColumn = `
display:flex;
flex-direction:column;
`