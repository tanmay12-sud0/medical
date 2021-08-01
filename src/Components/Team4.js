import React from 'react'
import './Team1.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Zoom from 'react-reveal/Zoom';
// import tanmay from '../Assert/tanmay.jpg'
import Harshita from '../Assert/10.jpg'
import Anurag from '../Assert/11.jpg'
import { Container, Row, Col} from "react-bootstrap";
function Team4() {
    return (
        <div style={footerContainer}>
        <Container className="containertanma">
        <div>
        <Row>
        <Col sm={12} lg={4} md={6} style={colStyle}>
        <div className="card-group">
        <div className="card card-primary text-center">
        <img className="card-img-top" src={Harshita} alt="Card image cap" />
        <div class="card-body">
        
        <p class="card-text" style={{color:"lightblue", fontSize:"19px", fontWeight:"600" , lineHeight:"1"}}>Harshita Karodiwal</p>
        <p style={{lineHeight:"1",fontSize:"13px"}} class="card-text">Content Creator Intern<br />
        Graduate,<br />
        Electronics and Computers Engineer </p>
        <br />
      </div>
      
        </div>

</div>
        </Col>
        <Col sm={12} lg={4} md={6} style={colStyle}>
        <div className="card-group">
        <div className="card card-primary text-center">
        <img className="card-img-top" src={Anurag} alt="Card image cap" />
        <div class="card-body">
        
        <p class="card-text" style={{color:"lightblue", fontSize:"19px", fontWeight:"600" , lineHeight:"1"}}>Anurag Sharma</p>
        <p style={{lineHeight:"1",fontSize:"13px"}} class="card-text">Advertising Strategist Freelance<br />
        Advertising and Marketing Strategist<br />
        (Third Year)</p>
        <br />
      </div>
      
        </div>

</div>
        </Col>
        <Col sm={12} lg={4} md={6} style={colStyle}>
        {/* <div className="card-group">
        <div className="card card-primary text-center">
        <img className="card-img-top" src="https://static3.avast.com/10001215/web/i/index2/for-home.jpg" alt="Card image cap" />
        <div class="card-body">
        
        <p class="card-text">We protect your privacy </p>
        <br />
      </div>
      
        </div>

</div> */}
        </Col>
        </Row>
        </div>
        </Container>
        </div>
    )
}

export default Team4




const footerContainer = {
    minHeight: "210px",
   
    display: "flex",
    alignItems: "center"
    };
    
    const colStyle = {
    display: "flex",
    justifyContent: "center",
    };