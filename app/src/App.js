import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import SearchForm from './components/forms/SearchForm';
import FeaturedSlider from './components/sliders/FeaturedSlider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


class App extends Component {
  render() {
    const divStyle = {
      color: 'blue',
      marginTop: '100px'
    };
    return (
        <div className="App">
          <div className="App">
            <Header/>
            <SearchForm/>
          </div>
          <div style={divStyle}>
            <FeaturedSlider/>
          </div>
        </div>
    );
  }
}

export default App;
