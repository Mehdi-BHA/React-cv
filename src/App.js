import React, { Component } from 'react';
import Header from './components/Header';
import Knowledges from './components/Knowledges';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import AOS  from 'aos';

export default class App extends Component {
  render() {
    AOS.init({duration:2000,delay:150});
    return (

      <div className="App">
      <Header></Header>
      <Knowledges></Knowledges>
      <div className="seperator"></div>
      <Experience></Experience>
      <div className="seperator"></div>
      <Portfolio></Portfolio>
      <div className="seperator"></div>
      <Contact></Contact>

    </div>
    )
  }
}

