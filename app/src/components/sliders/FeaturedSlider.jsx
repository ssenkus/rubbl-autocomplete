import Slider from 'react-slick';
import React, { Component } from 'react';
import './FeaturedSlider.scss';

export default class FeaturedSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      className: 'center',
      centerMode: true,
      centerPadding: '60px'
    };

    return (
        <Slider {...settings}>
          <div>
            <img src="https://via.placeholder.com/756x350/AA0000/FFFFFF"
                 width="756" height="350"/>
          </div>
          <div>
            <img src="https://via.placeholder.com/756x350/AA7700/FFFFFF"
                 width="756" height="350"/>
          </div>
          <div>
            <img src="https://via.placeholder.com/756x350/777700/FFFFFF"
                 width="756" height="350"/>
          </div>
          <div>
            <img src="https://via.placeholder.com/756x350/FF0000/FFFFFF"
                 width="756" height="350"/>
          </div>
        </Slider>
    );
  }
}
