import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Founder.css";


const Founder = () => {




  return (
    <div id="about">
      <div className="about">
      
      <h1 style={{color:'grey'}} className="pt-3 text-center font-details pb-3">The Founders</h1>
    
        
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6} sm={6}>
            
            <Row className="justify-content-center mb-2 mr-2 ">
                
                <div className="cardss">

                </div>
              </Row>

              
            </Col>
            <Col xs={12} md={6} sm={6}>
            
            <Row className=" justify-content-center align-items-start p-2 my-details rounded">
                
<div>
<span style={{fontSize:"22px", fontWeight:"800"}} >
Abhinav Pareek:
</span>

<br />
<br />
    
<p  style={{lineHeight:"1.2"}} >Concentrated upon user experience initiatives <br /> emphasizing on the outlook of smooth <br />adaptability. A part of a development team  <br /> with good exposure in the tech industry.<br /> Obtained recognition for building an ,<br /> application of locating the user without <br />internet access.</p>
</div>
                
              </Row>
        
            {/*  */}
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6} sm={6}>
            
            <Row className=" align-items-center justify-content-center   p-2 my-details rounded">
                
                <div>
                <span style={{fontSize:"22px", fontWeight:"800"}} >
                
                Saurabh Pandey:
                </span>
                
                <br />
                <br />
                    
                
<p style={{lineHeight:"1.2"}}>
Motivates the effective collaboration of <br/> engineering and medical industry to impact the <br/>society. Accompanied by the leadership skills,<br/> manages product execution. Having ingenious <br/>skills, got recognized multiple times and won <br/> the Start-up competition organized by <br/> Techstars.
</p>
                </div>
                                
                              </Row>

              
            </Col>
            <Col xs={12} md={6} sm={6}>
            
      
              <Row className="justify-content-center mb-2 mr-4 ">
                
                <div className="cardsss">

                </div>
              </Row>
        
            {/*  */}
            </Col>
          </Row>
        </Container>

        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
            
            <Row className="justify-content-center mb-2 mr-2 ">
                
                <div className="cardssss">

                </div>
              </Row>

              
            </Col>
            <Col xs={12} md={6}>
            
            <Row className=" align-items-start p-2 my-details rounded justify-content-center">
                
<div>
<span style={{fontSize:"22px", fontWeight:"800"}} >

Yogesh Choudhary: 
</span>

<br />
<br />
 
<p style={{lineHeight:"1.2"}}>
One of the core product developers,<br /> exploring the unexplored mysteries in <br /> medical sciences and also <br /> contributing back to the developer <br /> community as an author and editor at <br /> raywenderlich.com. Well recognized <br /> winner of Startup in JAZBAA 1.0 <br /> Hackathon.
</p>
</div>
                
              </Row>
        
            {/*  */}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Founder;