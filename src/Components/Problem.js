// import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from "react-bootstrap";
  
const Problem = () => {
  return (
    <div style={footerContainer}>
<Container>
<div>
<Row>
<Col sm={12} lg={4} md={6} style={colStyle}>
<div>

<Fade top>
<h4 style={{fontWeight:'600', fontSize:"29px",color:"grey" }}>The Problem <span style={{fontWeight:'800', fontSize:"100px",color:"grey",position:"relative",top:"20px"}}>?</span></h4>
</Fade>


</div>
</Col>
<Col sm={12} lg={4} md={6} style={colStyle}>
<div>
{/* <Button variant="light">Back to top</Button> */}
</div>
</Col>
<Col sm={12} lg={4} md={6} style={colStyles}>
  
</Col>
</Row>
</div>
</Container>
</div>
);
}

export default Problem;




const footerContainer = {
  minHeight: "150px",
//   background: "#f9fafb",
  display: "flex",
  alignItems: "center"
  };
  
  const colStyle = {
  display: "flex",
  justifyContent: "center",
  };
  const colStyles = {
  display: "flex",
  justifyContent: "center",
  flexDirection:"column"
  };

