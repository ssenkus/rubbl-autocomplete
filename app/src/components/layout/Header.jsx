import React, { Component } from 'react';
import SearchForm from '../forms/SearchForm';

export default class Header extends Component {
  render() {
    return (
        <div className="Header sticky">
          <div className="headerContainer">
            <div className="logoContainer centeredWithin">
              <a href="/" className="logoLink">
                <span className="logo">Rubbl Autocomplete</span>
              </a>
            </div>
          </div>
          <SearchForm/>
        </div>
    );
  }
}
