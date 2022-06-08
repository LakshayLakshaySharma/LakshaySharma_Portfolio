import React from 'react'


function BriefIntro() {
let styling={
  border : '1px solid black',
  height : '100vh',
  textAlign : 'center',
  margin : 'auto',
 
}
 

  return (

    <div style={styling}>
        <div style={{border:'1px solid red', marginTop:'25vh'}}>
            <h1 style={{fontSize : '60px' , marginTop:'70px'}}>HI</h1>
            <h2 style={{fontSize : '40px'}}>I AM LAKSHAY SHARMA</h2>
            <h4 style={{fontSize : '30px'}}>FRONT END WEB DEVELOPER</h4>
 
        </div>
    </div>
  )
}

export default BriefIntro