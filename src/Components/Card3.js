import React from 'react'
import { Container, Row, Col} from "react-bootstrap";
import Zoom from 'react-reveal/Zoom';
import Fade from "react-reveal/Fade";
import Problem1 from '../Assert/Problem1.svg'
import Problem2 from '../Assert/Problem2.svg'
import Problem3 from '../Assert/Problem3.svg'
import {
    Card, CardImg, CardText, CardBody
  } from 'reactstrap';
import './Crads3.css'
function Card3() {
    return (
        <div   style={footerContainer}>
<Container className="containertan ">
<div>
<Row>
<Col sm={12} lg={4} md={6} style={colStyle}>
<div className="flip-card">
<div class="flip-card-inner">
<div class="flip-card-front">
<CardImg height="280px" top width="100%" src={Problem2} alt="Card image cap" />
<CardBody style={{height:"70px", backgroundColor:"#3787A2"}}>
          <CardText style={{fontWeight:"600",color:"white"}}>
          <Zoom Top>
        No Feedback System Available
        
        </Zoom>
          </CardText>
        </CardBody>
</div>
<div className="flip-card-back">
      <p >
        
In an ever changing <br /> environment, medication <b />does not serve forever.<b /> Changing in lifestyle leads to <b />further change in the levels <br />of glucose and not having <br />proper feedback on that can<br /> be hazardous.
      </p>
    </div>
</div>
      

{/* <Card style={{marginBottom:"25px"}} >
        <CardImg height="250px" top width="100%" src={Problem1} alt="Card image cap" />
        <CardBody style={{height:"70px", backgroundColor:"lightblue"}}>
          <CardText style={{fontWeight:"600"}}>
          <Zoom Top>
        No Feedback System Available
        
        </Zoom>
          </CardText>
        </CardBody>
      </Card> */}
</div>
</Col>
<Col sm={12} lg={4} md={6} style={colStyle}>
<div className="flip-card">
<div class="flip-card-inner">
<div class="flip-card-front">
<CardImg height="280px" top width="100%" src={Problem1} alt="Card image cap" />
<CardBody style={{height:"70px", backgroundColor:"#3787A2"}}>
          <CardText style={{fontWeight:"600",color:"white"}}>
          <Zoom Top>
          General Diet Plan for All
        
        </Zoom>
          </CardText>
        </CardBody>
</div>
<div className="flip-card-back">
      <p >
        

      Offering a general plan for <br /> different body types doesn’t <br /> provide opportunity to cure <br /> the disease in the best <br /> possible manner. Treatment <br />tailored to the underlying <br /> cause, based on different <br />subtypes of patients, helps <br /> in  healing smoothly.<br />

      </p>
    </div>
</div>
{/* <Card style={{marginBottom:"25px"}}>
        <CardImg height="250px" top width="100%" src={Problem2} alt="Card image cap" />
        <CardBody style={{height:"70px", backgroundColor:"lightblue"}}>
          <CardText style={{fontWeight:"600"}}>
          <Zoom Top>
    General Diet Plan for All
    </Zoom>
          </CardText>
        </CardBody>
      </Card> */}
</div>
</Col>
<Col sm={12} lg={4} md={6} style={colStyle}>
<div className="flip-card">
<div class="flip-card-inner">
<div class="flip-card-front">
<CardImg height="280px" top width="100%" src={Problem3} alt="Card image cap" />
<CardBody style={{height:"70px", backgroundColor:"#3787A2"}}>
          <CardText style={{fontWeight:"600",color:"white"}}>
          <Zoom Top>
          Difficult to control for diabetics patients
        
        </Zoom>
          </CardText>
        </CardBody>
</div>
<div className="flip-card-back">
      <p >
        

      Healing works differently for <br />different people. In some <br /> situations, medical <br /> examination takes <br />excessive time and might <br /> not work for some, in <br /> situations might get even <br /> worse making it difficult to <br /> get rid of.<br />

      </p>
    </div>
{/* <Card style={{marginBottom:"25px"}}>
        <CardImg top height="250px" width="100%" src={Problem3} alt="Card image cap" />
        <CardBody style={{height:"70px", backgroundColor:"lightblue"}} >
          <CardText style={{fontWeight:"600"}}  >
          <Zoom Top>
    Difficult to control for diabetics patients
    </Zoom>
          </CardText>
        </CardBody>
      </Card> */}
      </div>
      </div>
</Col>
</Row>
</div>
</Container>
            
        </div>
    )
}

//     )
// }

export default Card3


const footerContainer = {
    
    display: "flex",
    alignItems: "center",
    
    };
    
    const colStyle = {
    display: "flex",
    justifyContent: "center",
    };