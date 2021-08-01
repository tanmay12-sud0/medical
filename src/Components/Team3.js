import React from 'react'
import './Team1.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Zoom from 'react-reveal/Zoom';

import Rumpa from '../Assert/7.jpg'
import Riddhi from '../Assert/8.jpg'
import ankita from '../Assert/9.jpg'
import { Container, Row, Col} from "react-bootstrap";
function Team3() {
    return (
        <div style={footerContainer}>
        <Container className="containertanma">
        <div>
        <Row>
        <Col sm={12} lg={4} md={6} style={colStyle}>
        <div className="card-group">
        <div className="card card-primary text-center">
        <img className="card-img-top" src={Rumpa} alt="Card image cap" />
        <div class="card-body">
        
        <p class="card-text" style={{color:"lightblue", fontSize:"19px", fontWeight:"600" , lineHeight:"1"}}>Rumpa Pramanik</p>
        <p style={{lineHeight:"1",fontSize:"13px"}} class="card-text">Market Research Intern<br />
        (Part Time)
MBA<br />
Marketing </p>
        <br />
      </div>
      
        </div>

</div>
        </Col>
        <Col sm={12} lg={4} md={6} style={colStyle}>
        <div className="card-group">
        <div className="card card-primary text-center">
        <img className="card-img-top" src={Riddhi} alt="Card image cap" />
        <div class="card-body">
        
        <p class="card-text" style={{color:"lightblue", fontSize:"19px", fontWeight:"600" , lineHeight:"1"}}>Riddhi Dubey</p>
        <p style={{lineHeight:"1",fontSize:"13px"}} class="card-text">Legal Intern<br />
        B.com, pursuing<br />
        LL.B and C.S Executive </p>
        <br />
      </div>
      
        </div>

</div>
        </Col>
        <Col sm={12} lg={4} md={6} style={colStyle}>
        <div className="card-group">
        <div className="card card-primary text-center">
        <img className="card-img-top" src={ankita} alt="Card image cap" />
        <div class="card-body">
        
        <p class="card-text" style={{color:"lightblue", fontSize:"19px", fontWeight:"600" , lineHeight:"1"}}>Ankita Chaudhary</p>
        <p style={{lineHeight:"1",fontSize:"13px"}} class="card-text">Medical Content Creator & Reviewer<br />
        Faculty of Dentistry<br />
        BDS- 3rd year </p>
        <br />
      </div>
      
        </div>

</div>
        </Col>
        </Row>
        </div>
        </Container>
        </div>
    )
}

export default Team3




const footerContainer = {
    minHeight: "210px",
   
    display: "flex",
    alignItems: "center"
    };
    
    const colStyle = {
    display: "flex",
    justifyContent: "center",
    };