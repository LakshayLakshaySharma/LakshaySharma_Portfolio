import React from 'react'


function BriefIntro() {
let styling={
  border : '1px solid black',
  height : '90vh',
  textAlign : 'center',
  // width : '100%',
  margin : 'auto'

}
  return (

    <div style={styling}>
        <div>
            <h1>HI</h1>
            <h2>I AM LAKSHAY SHARMA</h2>
            <h4>FRONT END WEB DEVELOPER</h4>
            <img src='./image/lak.png' alt="" style={{height : '200px', width :"200px", borderRadius : '50%'}}/>
        </div>
    </div>
  )
}

export default BriefIntro