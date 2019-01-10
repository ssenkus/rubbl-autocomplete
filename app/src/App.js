import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App">
          <div className="Header sticky">
            <div className="headerContainer">
              <div className="logoContainer centeredWithin">
                <a href="/" className="logoLink">
                  <span className="logo">Rubbl Autocomplete</span>
                </a>
              </div>
              <div className="headerBarContainer">
                <div className="headerBar centeredWithin">
                  <div className="leftHeaderContent">
                    <div className="searchForm">
                      <form action="/search/" method="GET" name="search">
                        <div className="searchLogoContainer">
                          <a href="/" className="searchLogoLink">
                            <span className="logo">Rubbl Autocomplete</span>
                          </a>
                        </div>

                        <div className="background">
                          <ul className="searchTray">
                            <li className="searchTokenItem tokenInput">
                              <input autoComplete="off" type="text" name="q" className="field"
                                     data-text="Search or explore categories"
                                     placeholder="Start typing to search"/>

                            </li>
                          </ul>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div className="searchSuggestions">
                <div className="searchSuggestionAligner">
                  <div className="searchSuggestionContainer centeredWithin">
                    <div className="suggestTitle">Suggested</div>

                    <ul className="suggestionTray"></ul>
                  </div>
                </div>

                <div className="suggestGradient"></div>
              </div>
            </div>
          </div>
          <div className="featured">
            <div className="featuredDisplayContainer centeredWithin">
              <div className="featuredDisplay">
                <div className="featuredDisplayScroller">

                  <div className="featuredItem">
                    <img src="https://via.placeholder.com/756x350/FF0000/FFFFFF"
                         width="756" height="350"/>
                  </div>

                  <div className="featuredItem">
                    <img src="https://via.placeholder.com/756x350/00FF00/FFFFFF"
                         width="756" height="350"/>
                  </div>

                  <div className="featuredItem">
                    <img src="https://via.placeholder.com/756x350/0000FF/FFFFFF"
                         width="756" height="350"/>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ComponentManager"></div>
      </div>
    );
  }
}

export default App;
