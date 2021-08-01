import React from 'react'
import Carsouel from '../Components/Carsouel';
import {Route, Switch} from 'react-router-dom'
import './Home.css';
// import {Fade} from 
import Navbarr from '../Components/Navbarr';
import { Parallax } from "react-parallax";
import Problem from '../Components/Problem';
import Card3 from '../Components/Card3';

import Fade from "react-reveal/Fade";
import Method from '../Components/Method';
import Footer from '../Components/Footer';
import Blog from './Blog';
import About from './About';
function Home() {
    return (
        <div>
            <Navbarr />
            <Switch>
      <Route exact path="/about" >
            <About />
        </Route>
      <Route exact path="/blog" >
            <Blog />
        </Route>
      <Route exact path="/newpost2" >
            {/* <Newpost2 /> */}
        </Route>
      <Route exact path="/newpost" >
            {/* <Newpost /> */}
        </Route>
      <Route exact path="/" >
      <Carsouel />
            <Parallax
          // blur={{ min: -30, max: 30 }}
          bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQMWZaTerz29jaac1-3qCSYS_W0bhVnmKs7w&usqp=CAU"
          
          bgImageAlt=""
          strength={200}
        >
        <Problem />
        <Card3 />
     
          <br />
          <br />
        
        </Parallax> 
  
        <div class="parallaxss">
         <div  className="position-absolute" style={{fontSize:40, color:"white", fontFamily:"cursive", left:"100px" }} >
       
        "Eat <br/> 
         &nbsp;&nbsp; Better!"
    </div> 

    <br />

  













 {/* <Parallax
          
          bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGuEQ_8SxZUqgH8nv7I6-g0SrRbVLIqsKUMg&usqp=CAU"
          bgImageAlt=""
          strength={-200}
        >
            <div>
            <div className="container"  >
              <Fade duration={500}>
                <div className="text-center" style={{fontSize:30 }} >
                    The Products
                  <br /> */}
                  {/* <Phone /> */}
                  <br />
        {/* <br />
        <br />
        
                </div>
              </Fade>
            </div>
          </div>
        </Parallax> */}
    {/* <div class="parallaxssszz">
    <div  className="position-absolute" style={{fontSize:40, color:"white", fontFamily:"cursive", left:"100px" }} >
       
       "Take a <br/> 
        &nbsp;&nbsp; Step Forward"
   </div> 
        {/* <div className="text" >
        "Take a  <br/> 
         &nbsp;&nbsp; Step Forward"
    </div> */}
  
{/* // </div>  */}
  
        
</div>

<br />


<Parallax
          
        //   bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGuEQ_8SxZUqgH8nv7I6-g0SrRbVLIqsKUMg&usqp=CAU"
          bgImageAlt=""
          strength={-200}
        >
            <div>
            <div className="container"  >
              <Fade duration={500}>
                <div className="text-center" style={{fontSize:30 }} >
                    The Products
                  <br /> 
                
                  <br />
         <br />
        <br />
        
                </div>
              </Fade>
            </div>
          </div>
        </Parallax> 












<br />
<br />

  <div class="parallaxssszz">
    <div  className="position-absolute" style={{fontSize:40, color:"white", fontFamily:"cursive", left:"100px" }} >
       
       "Take a <br/> 
        &nbsp;&nbsp; Step Forward"
   </div> 
      
</div> 

<Parallax
          
          bgImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQMWZaTerz29jaac1-3qCSYS_W0bhVnmKs7w&usqp=CAU"
          bgImageAlt=""
          strength={200}
        >
            <Method />
            <br />
<br />
        </Parallax>

        <Footer />
      </Route>
      </Switch>
            

        </div>
    )
}

export default Home
