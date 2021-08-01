import React from 'react'
import Zoom from 'react-reveal/Zoom';
import './Method.css';
import Method1 from '../Assert/OurMethod1.svg'
import Method2 from '../Assert/OurMethod2.svg'
import Method3 from '../Assert/OurMethod3.svg'
import Method4 from '../Assert/OurMethod4.svg'
import Method5 from '../Assert/OurMethod5.svg'
import {
    Card, CardImg, CardText, CardBody
  } from 'reactstrap';

import { Container, Row, Col} from "react-bootstrap";
function Method() {
    return (
       <div style={footerContainer}>
       
<Container className="containertanm">
<div>
<br />
<div style={{display:"flex", alignItems:"center", justifyContent:"center", color:'#5D5D5D',fontSize:"40px",fontWeight:"700"}} >Our Method</div>
<br />
<Row>
<Col sm={12} lg={1} md={6} style={colStyle}></Col>
<Col sm={12} lg={2} md={6} style={colStyle}>
<div className="flip-cardss">
<div class="flip-card-innerss">
<div class="flip-card-frontss">
<CardImg height="180px" top width="100%" src={Method1} alt="Card image cap" />
<CardBody style={{height:"70px", backgroundColor:"#3787A2"}}>
          <CardText style={{fontWeight:"600",fontSize:"15px",color:"white"}}>
          <Zoom Top>
          Preliminary Test Report
        
        </Zoom>
          </CardText>
        </CardBody>
</div>
<div className="flip-card-backss">
      <p >
        

      

      Preliminary Test Report
We understand your condition and accordingly assist you to generate results! 
With that, providing valuable feedback brings out how things can alter in our favour!

      </p>
    </div>

      </div>
      </div>
</Col>
<Col sm={12} lg={2} md={6} style={colStyle}>

<div className="flip-cardss">
<div class="flip-card-innerss">
<div class="flip-card-frontss">
<CardImg height="180px" top width="100%" src={Method2} alt="Card image cap" />
<CardBody style={{height:"70px", backgroundColor:"#3787A2"}}>
          <CardText style={{fontWeight:"600",fontSize:"11px",color:"white"}}>
          <Zoom Top>
          Difficult to control for diabetics patients
        
        </Zoom>
          </CardText>
        </CardBody>
</div>
<div className="flip-card-backss">
      <p >
        

      
      CGMS sensors attached to your body will help you track glucose level throughout your day! Additionally, an activity tracker watch will recognize the amount of activities a body goes through, within a day!

      </p>
    </div>

      </div>
      </div>
</Col>
<Col sm={12} lg={2} md={6} style={colStyle}>

<div className="flip-cardss">
<div class="flip-card-innerss">
<div class="flip-card-frontss">
<CardImg height="180px" top width="100%" src={Method3} alt="Card image cap" />
<CardBody style={{height:"70px", backgroundColor:"#3787A2"}}>
          <CardText style={{fontWeight:"600",fontSize:"15px",color:"white"}}>
          <Zoom Top>
          Monitoring diet via Mobile App
        
        </Zoom>
          </CardText>
        </CardBody>
</div>
<div className="flip-card-backss">
      <p >
        

      
      With a simple login, you can share your diet and monitor blood sugar level making the system aware of the variations a body experiences in a typical day to get overall analysis!

      </p>
    </div>

      </div>
      </div>
</Col>
<Col sm={12} lg={2} md={6} style={colStyle}>

<div className="flip-cardss">
<div class="flip-card-innerss">
<div class="flip-card-frontss">
<CardImg height="180px" top width="100%" src={Method4} alt="Card image cap" />
<CardBody style={{height:"70px", backgroundColor:"#3787A2"}}>
          <CardText style={{fontWeight:"600",fontSize:"11px",color:"white"}}>
          <Zoom Top>
          Recommend Report via Analytical tools
        
        </Zoom>
          </CardText>
        </CardBody>
</div>
<div className="flip-card-backss">
      <p >
        

      

      Recommend Report via Analytical tools
 Analysing the reports and providing consultation from the experts gives it all to shape a perfect diet and understand the severity of the conditions!

      </p>
    </div>

      </div>
      </div>
</Col>
<Col sm={12} lg={2} md={6} style={colStyle}>

<div className="flip-cardss">
<div class="flip-card-innerss">
<div class="flip-card-frontss">
<CardImg height="180px" top width="100%" src={Method5} alt="Card image cap" />
<CardBody style={{height:"70px", backgroundColor:"#3787A2"}}>
          <CardText style={{fontWeight:"600",fontSize:"13px",color:"white"}}>
          <Zoom Top>
          Post-program Testing & Report
        
        </Zoom>
          </CardText>
        </CardBody>
</div>
<div className="flip-card-backss">
      <p >
        

      

      Post-program Testing & Report
Receiving the results and observing the difference, once you become mindful about your conditions, makes it easier to create a change!

      </p>
    </div>

      </div>
      </div>
</Col>
<Col sm={12} lg={1} md={6} style={colStyle}></Col>
</Row>
</div>
</Container>
</div>
    )
}

export default Method


const footerContainer = {
    minHeight: "210px",
 
    display: "flex",
    alignItems: "center"
    };
    
    const colStyle = {
    display: "flex",
    justifyContent: "center",
    };