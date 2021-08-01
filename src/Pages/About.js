import React from 'react';
import { Parallax } from "react-parallax";
import { Container, Col, Row, Card } from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import Bounce from 'react-reveal/Bounce';
import './About.css';
import Team1 from '../Components/Team1';
import Team2 from '../Components/Team2';
import Team3 from '../Components/Team3';
import Team4 from '../Components/Team4';
import Founder from '../Components/Founder';
// import Paper from '../Components/Paper';
import Footer from '../Components/Footer';
function About() {
    return (
        <div>
             <div>
             <div class="parallaxsss">
      <Bounce right>
      <div className="d-flex flex-row-reverse bd-highlight align-items-center " style={{height:"400px"}}>
      
      <h6 style={{fontSize:"23px",color:'#FFFFFF'}} className=' hellos position-relative ml-auto mr-4 text-right '  >
      "The doctor of the future will give<br/> no medication  but will interest his patients in<br/> the care of the human frame, diet and in the<br/> cause and prevention of disease"<br/>
      <h2 className="hellos" style={{color:'#000000',fontSize:"23px"}} >- Thomas Alva Edison</h2>
      </h6>
      
      </div>
      </Bounce>
      </div>
</div>

<br />
<div className="container"  style={{color:"#FFFFFFF"}}>
<div className="row justify-content-center" >
<div className="col-lg-9 col-sm-12 " >
<h2 style={{color:"#5D5D5D"}}  className="quest" >Vision
</h2>

<div style={{color:"#5D5D5D"}} className="quest_child" >
At Dietosure, we intend to introduce a system which helps humankind to transform the current model of <br />sick care to a revolutionized healthcare model. Through our advanced blend of technology and medical <br /> management program, we desire to bring about that change into lives of all in need and create a thriving <br /> environment.
</div>
</div>

</div>
</div>
<br />

<div  style={{backgroundColor:"#F5FFFA"}}>
  <h1 style={{color:'grey'}} className="pt-3 text-center font-details pb-3">
Our Team</h1>


        <Team1 />
        <br />
        <Team2 />
        <br />
        <Team3 />
        <br />
        <Team4 />
        <br />
        <br />
        <br />
</div>

 <br />
 <Founder />

        <br />
        <Container className="containertanmay">
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={8} sm={6}>
            
            <Row className=" align-items-center justify-content-center   p-2 my-details rounded">
                
                <div>
                <span style={{fontSize:"28px", fontWeight:"800", color:"#5D5D5D"}} >
                
                Our Recognition
                </span>
                
                
                <br />
                    
               <p style={{color:"#5D5D5D"}}> Among the top 15 Medtech startup recognized  and  incubated by</p>
                <Container>
  <Row>
    {/* <Col xs={2} md={4} lg={4}>
      
    </Col> */}
    <Col  xs={12} md={12} lg={12}>
      <img  src="https://static.wixstatic.com/media/6ee100_0e044021f42341cdb6f6bfde81130fa9~mv2.jpg/v1/fill/w_806,h_173,al_c,lg_1,q_80/2021-06-05_edited.webp" class="img-fluid" alt="Responsive image" />
    </Col>
   
  </Row>
</Container>
              
                </div>
                                
                              </Row>

              
            </Col>
            <Col xs={12} md={6} sm={6}>
            
      
              <Row className="justify-content-center mb-2 mr-4 ">
                
                
              </Row>
        
            {/*  */}
            </Col>
          </Row>
        </Container>

         {/* <Paper /> */}
        
        <Footer /> 



        </div>
    )
}

export default About
