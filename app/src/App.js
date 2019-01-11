import React, { Component } from 'react';
import './App.scss';
import Header from './components/layout/Header';
import FeaturedSlider from './components/sliders/FeaturedSlider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


class App extends Component {
  render() {
    return (
        <div>
            <Header/>
            <FeaturedSlider/>
        </div>
    );
  }
}

export default App;
