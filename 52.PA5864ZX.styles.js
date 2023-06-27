

const grandContainerStyle = `
color: white;
font-size : 20px;
heigt : 100%;
width : 100%;
`

const bordersColor = "blue"
const leftWidth = 150
const leftPadding = 10
const leftMenuStyle = `
position: fixed;
padding: `+(leftPadding*2)+`px `+leftPadding+`px 0 `+leftPadding+`px;
background-color: black;
height: calc(99% - 25px);
width: `+leftWidth+`px;
border-radius: 20px;
border: solid 2px `+bordersColor+`;
`

const topLeft = 2 + leftWidth + (leftPadding*2)
const topMenuHeight = 100
const topMenuStyle = `
position:fixed;
margin: 0 0 0 `+ (topLeft+5) +`px;
background-color: black;
height: ` + topMenuHeight + `px;
width:calc(99% - `+(topLeft+22)+`px);
border-radius: 20px;
border: solid 2px `+bordersColor+`;
padding:5px 5px 5px 10px;
display:flex;
flex-direction:row;
`

const contentStyle = `
position:fixed;
margin: 115px 0 0 `+ (topLeft+5) +`px;
background-color: black;
width:calc(99% - `+(topLeft+22)+`px);
border-radius: 20px;
border: solid 2px `+bordersColor+`;
padding:5px 5px 5px 10px;
overflow-x: hidden;
`

const buttonStyle = `
background-color: black;
text-align:center;
border : blue solid 3px;
padding: 5px;
border-radius:5px;
cursor: pointer;
`

const borderedContainerRow = `
display:flex;
flex-direction: row;
background-color:black;
border-radius: 20px;
border: solid 2px `+bordersColor+`;
`

const borderedContainerColumn = `
display:flex;
flex-direction:column;
background-color:black;
border-radius: 20px;
border: solid 2px `+bordersColor+`;
`

const containerRow = `
display:flex;
flex-direction:row;
`

const containerColumn = `
display:flex;
flex-direction:column;
`