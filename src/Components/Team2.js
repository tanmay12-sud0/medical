import React from 'react'
import './Team1.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Zoom from 'react-reveal/Zoom';
import tanmay from '../Assert/tanmay.jpg'
import Rashi  from '../Assert/4.jpg'
import Pranchal  from '../Assert/5.jpg'
import { Container, Row, Col} from "react-bootstrap";
function Team2() {
    return (
        <div style={footerContainer}>
        <Container className="containertanma">
        <div>
        <Row>
        <Col sm={12} lg={4} md={6} style={colStyle}>
        <div className="card-group">
        <div className="card card-primary text-center">
        <img className="card-img-top" src={Rashi} alt="Card image cap" />
        <div class="card-body">
        
        <p class="card-text" style={{color:"lightblue", fontSize:"19px", fontWeight:"600" , lineHeight:"1"}}>Rashi Bahuguna</p>
        <p style={{lineHeight:"1",fontSize:"13px"}} class="card-text">Medical Research Intern<br />
        Doctor of Pharmacy Intern<br />
        6th Year </p>
        <br />
      </div>
      
        </div>

</div>
        </Col>
        <Col sm={12} lg={4} md={6} style={colStyle}>
        <div className="card-group">
        <div className="card card-primary text-center">
        <img className="card-img-top" src={Pranchal} alt="Card image cap" />
        <div class="card-body">
        
        <p class="card-text" style={{color:"lightblue", fontSize:"19px", fontWeight:"600" , lineHeight:"1"}}>Pranjal Gaur</p>
        <p style={{lineHeight:"1",fontSize:"13px"}} class="card-text">Medical Research & Analytics Intern<br />
        Electronics and Electrical Engineering<br />
        BE (2nd year) </p>
        <br />
      </div>
      
        </div>

</div>
        </Col>
        <Col sm={12} lg={4} md={6} style={colStyle}>
        <div className="card-group">
        <div className="card card-primary text-center">
        <img className="card-img-top" src={tanmay} alt="Card image cap" />
        <div class="card-body">
        
        <p class="card-text" style={{color:"lightblue", fontSize:"19px", fontWeight:"600" , lineHeight:"1"}}>Tanmay goyal</p>
        <p style={{lineHeight:"1",fontSize:"13px"}} class="card-text">Developer Intern<br />
        Information Technology<br />
        BE (2nd year) </p>
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

export default Team2




const footerContainer = {
    minHeight: "210px",
   
    display: "flex",
    alignItems: "center"
    };
    
    const colStyle = {
    display: "flex",
    justifyContent: "center",
    };