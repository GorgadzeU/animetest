import React from 'react';
import './slide.styles.css';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from '../card/card.component';

const Slide = () => {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      
    //   autoplay: true,
      className: 'slideList'
    }

    return (
        <Slider {...settings}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </Slider>
    )
}

export default Slide;