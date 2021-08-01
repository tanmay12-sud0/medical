import React, { useRef, useState } from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import './Paper.css'
import Paper1 from "../Assert/paper1.jpg"
import Paper2 from "../Assert/paper2.jpg"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/swiper.min.css";
// import "swiper/components/navigation/navigation.min.css"


import SwiperCore, {
    Navigation
  } from 'swiper/core';
  
  // install Swiper modules
  SwiperCore.use([Navigation]);



function Paper() {
    return (
        <Container className="containertanmays">
            <Row>
                <Col>
                <Swiper navigation={true} className="mySwiper">
  <SwiperSlide>
      <img alt="not found" src={Paper2} />
  </SwiperSlide>
  <SwiperSlide>
  <img alt="not found" src={Paper1} />
  </SwiperSlide>

  </Swiper>
  
            </Col>
            </Row>
        </Container>
    )
}

export default Paper
