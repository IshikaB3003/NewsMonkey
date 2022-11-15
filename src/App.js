import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
//  c='Hey peeps';
  pageSize=25;
  render() {
    return (
      <div>
        {/* <div>This is a class based compnent {this.c}</div> */}
      <Router>
      <NavBar/>
      {/* <Switch> */}
      <Routes>
      
        {/* <Route path="/"><News pageSize={15} country="in" category="general"/></Route>
        <Route path="/business"><News pageSize={15} country="in" category="business"/></Route>
        <Route path="/entertainment"><News pageSize={15} country="in" category="entertainment"/></Route>
        <Route path="/general"><News pageSize={15} country="in" category="general"/></Route>
        <Route path="/health"><News pageSize={15} country="in" category="health"/></Route>
        <Route path="/science"><News pageSize={15} country="in" category="science"/></Route>
        <Route path="/sports"><News pageSize={15} country="in" category="sports"/></Route>
        <Route path="/technology"><News pageSize={15} country="in" category="technology"/></Route> */}

        <Route exact path="/" element = {<News key="general" pageSize = {this.pageSize} country = "in" category = "general"/>}/>
        <Route exact path="/business" element = {<News key="business" pageSize = {this.pageSize} country = "in" category = "business"/>}/>
        <Route exact path="/general" element = {<News key="general" pageSize = {this.pageSize} country = "in" category = "general"/>}/>
        <Route exact path="/entertainment" element = {<News key="entertainment" pageSize = {this.pageSize} country = "in" category = "entertainment"/>}/>
        <Route exact path="/health" element = {<News key="health" pageSize = {this.pageSize} country = "in" category = "health"/>}/>
        <Route exact path="/science" element = {<News key="science" pageSize = {this.pageSize} country = "in" category = "science"/>}/>
        <Route exact path="/sports" element = {<News key="sports" pageSize = {this.pageSize} country = "in" category = "sports"/>}/>
        <Route exact path="/technology" element = {<News key="technology" pageSize = {this.pageSize} country = "in" category = "technology"/>}/>


        </Routes>
      {/* </Switch> */}
      </Router>
      </div>
    )
  }
}


//So those who are getting error please note: 1.replace Switch tag with Routes tag(add it in import statement too) 2. the Route tag is like img tag, hence there is no ending tag, replace it with /> at the end, and enclose the news tag with-  element ={ <News../> }.
// e.g: <Route path="/" element = {<News pageSize = {this.pageSize} country = "in" category = "general"/>}/>. Use for others.

