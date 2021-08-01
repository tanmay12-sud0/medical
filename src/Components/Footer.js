// import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SocialIcon }  from 'react-social-icons';
import { Container, Row, Col,Button } from "react-bootstrap";
  
const Footer = () => {
  return (
    <div style={footerContainer}>
<Container>
<div>
<Row>
<Col sm={12} lg={4} md={6} style={colStyle}>
<div>
<img src="https://static.wixstatic.com/media/6ee100_7f1556805bae43ca8b508af1241b95f6~mv2.png/v1/fill/w_76,h_73,al_c,q_85,usm_0.66_1.00_0.01/Logo%201.webp" />
<h4>Dietosure</h4>

<p>The food your body needs</p>
</div>
</Col>
<Col sm={12} lg={4} md={6} style={colStyle}>
<div>
{/* <Button variant="light">Back to top</Button> */}
</div>
</Col>
<Col sm={12} lg={4} md={6} style={colStyles}>
  <h5 style={{fontFamily:"cursive"}}>(+91)8949900643</h5>
  <h5 style={{fontFamily:"cursive"}}>dietosure@gmail.com</h5>
  <div style={{flexDirection:"row"}}>
  <SocialIcon style={{ height: 35, width: 35,marginRight:"4px" }} url="https://linkedin.com/" />
  <SocialIcon url="https://twitter.com/" style={{ height: 35, width: 35,marginRight:"4px" }} network="twitter" bgColor="#ff5a01" />
  <SocialIcon url="https://instagram.com/" style={{ height: 35, width: 35,marginRight:"4px" }} network="instagram" bgColor="pink" />
  <SocialIcon url="https://facebook.com/" style={{ height: 35, width: 35,marginRight:"4px" }} network="facebook" bgColor="lightblue" />
  <SocialIcon url="https://email.com/" style={{ height: 35, width: 35,marginRight:"4px" }} network="email" bgColor="red" />
  </div>
</Col>
</Row>
</div>
</Container>
</div>
);
}

export default Footer;




const footerContainer = {
  minHeight: "210px",
  background: "#f9fafb",
  display: "flex",
  alignItems: "center"
  };
  
  const colStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems:"center"
  };
  const colStyles = {
  display: "flex",
  justifyContent: "center",
  flexDirection:"column",
  alignItems:"center"
  };

