
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Fade from "react-reveal/Fade";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./Carsouel.css";


// import Swiper core and required modules
import SwiperCore, {
  Parallax,Pagination,Navigation
} from 'swiper/core';
import { Button, Container } from "react-bootstrap";

// install Swiper modules
SwiperCore.use([Parallax,Pagination,Navigation]);


function Carsouel() {
    return (
        <>
        
<Container fluid style={{height:"500px"}}>
        
        <Swiper style={{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}} speed={600} parallax={true} pagination={{
        "clickable": true
        }} navigation={true} className="mySwiper">
        <div slot="container-start" className="parallax-bg" style={{'background-image': 'url(https://static.wixstatic.com/media/6ee100_566d176247ec497f8a07eb3c421c6f69~mv2.jpg/v1/fill/w_1899,h_795,al_c,q_85,usm_0.66_1.00_0.01/6ee100_566d176247ec497f8a07eb3c421c6f69~mv2.webp)'}} data-swiper-parallax="-23%"></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300"></div>
          <br />
         
          <Fade Top>
          <div style={{fontWeight:"550"}} className="title" data-swiper-parallax="-300">Manage your Diabetes!</div>
          <br />
          {'   '}<Button style={{backgroundColor:"grey", border:"solid" ,padding:"6px"}} variant="secondary">Go To App</Button>{' '}
          </Fade>
          {/* <div className="text" data-swiper-parallax="-100">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
              felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet
              magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros
              quis feugiat.</p>
          </div> */}
        </SwiperSlide><SwiperSlide>
          <div className="title" data-swiper-parallax="-300"></div>
          <br />
          <Fade Top>
          <div className="title" style={{fontWeight:"550"}}  data-swiper-parallax="-300">Don't let Diabetes<br />
        in the way!</div>
        <br />
          {'   '}<Button style={{backgroundColor:"grey", border:"solid" ,padding:"6px"}} variant="secondary">Go To App</Button>{' '}
          </Fade>
          {/* <div className="text" data-swiper-parallax="-100">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus
              felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet
              magna nec elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros
              quis feugiat.</p>
          </div> */}
        </SwiperSlide>
        
        </Swiper>
        
        </Container>
       
        </>
    )
}

export default Carsouel



