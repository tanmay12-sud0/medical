import React from 'react'
import './Team1.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Zoom from 'react-reveal/Zoom';
import tanmay from '../Assert/tanmay.jpg'
import sourabh from '../Assert/2.jpg'
import Rishita from '../Assert/Rishita.jpeg'
import aastha from '../Assert/hello.jpeg'
import { Container, Row, Col} from "react-bootstrap";
function Team1() {
    return (
        <div style={footerContainer}>
        <Container className="containertanma">
        <div>
        <Row>
        <Col sm={12} lg={4} md={6} style={colStyle}>
        <div className="card-group">
        <div className="card card-primary text-center">
        <img className="card-img-top" src={Rishita} alt="Card image cap" />
        <div class="card-body">
        
        <p class="card-text" style={{color:"lightblue", fontSize:"19px", fontWeight:"600" , lineHeight:"1"}}>Rishita Sindhwani</p>
        <p style={{lineHeight:"1",fontSize:"13px"}} class="card-text">UI/UX Design Intern<br />
        B.Des. CAC<br />
        2nd Year </p>
        <br />
      </div>
      
        </div>

</div>
        </Col>
        <Col sm={12} lg={4} md={6} style={colStyle}>
        <div className="card-group">
        <div className="card card-primary text-center">
        <img className="card-img-top" src={sourabh} alt="Card image cap" />
        <div class="card-body">
        
        <p class="card-text" style={{color:"lightblue", fontSize:"19px", fontWeight:"600" , lineHeight:"1"}}>Saurabh Singh</p>
        <p style={{lineHeight:"1",fontSize:"13px"}} class="card-text">UI/UX Design Intern<br />
Computer Science<br />
B.Tech, 3rd Year </p>
        <br />
      </div>
      
        </div>

</div>
        </Col>
        <Col sm={12} lg={4} md={6} style={colStyle}>
        <div className="card-group">
        <div className="card card-primary text-center">
        <img className="card-img-top" src={aastha} alt="Card image cap" />
        <div class="card-body">
        
        <p class="card-text" style={{color:"lightblue", fontSize:"19px", fontWeight:"600" , lineHeight:"1"}}>Aastha Kumari</p>
        <p style={{lineHeight:"1",fontSize:"13px"}} class="card-text">UI/UX Design Intern<br />
Computer Science<br />
B.Tech, 3rd Year </p>
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

export default Team1




const footerContainer = {
    minHeight: "210px",
   
    display: "flex",
    alignItems: "center"
    };
    
    const colStyle = {
    display: "flex",
    justifyContent: "center",
    };