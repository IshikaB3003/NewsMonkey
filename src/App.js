import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';

export default class App extends Component {
//  c='Hey peeps';
  render() {
    return (
      <>
      {/* <div>This is a class based compnent {this.c}</div> */}
      <NavBar/>
      <News pageSize={15} country="in" category="sports"/>
      </>
    )
  }
}

