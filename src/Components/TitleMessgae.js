import React from 'react'
import Flip from 'react-reveal/Flip';
// import './TitleMessage.css';

import styled from "styled-components";
function TitleMessage() {
    const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 6rem;
  left:5rem;
  z-index: 1;
  ${'' /* margin-top: -125px; */}
  text-align: left;
  
  strong {
    ${'' /* font-size: 0.4rem; */}
  }
  div {
    color: lightgrey;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 800;
    
    letter-spacing: 1px;
    .main {
      font-size: 40px;
    }
    
  }
`;



    return (
        <div>
             <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <Flip top>
        <div style={{fontFamily:"cursive"}} className="hello">
        Manage your Diabetes!
          </div>
        </Flip>
        
          <button style={{backgroundColor:"transparent",fontSize:"15px",padding:"6px", paddingRight:"10px", paddingLeft:"10px"}} >Go To App</button>
        
       
      </div>
    </div>
  </MyTitleMessage>
        </div>
    )
}

export default TitleMessage;

