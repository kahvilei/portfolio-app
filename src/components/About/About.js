import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

class About extends Component {
  render() {
    return<div>
      <div style = {{width: '50%', height: '100vh', backgroundColor: '#fcded9', display: 'inline-flex', zIndex: '-100'}}>
        <img data-aos="flip" style = {{width: '25%', margin: '12.5%', marginTop:'5%', backgroundColor: 'white', position: 'fixed'}} src = "https://cdna.artstation.com/p/assets/images/images/020/036/258/large/katie-huff-sketch005.jpg?1566082858"></img>
      </div>
      <div style = {{backgroundColor: 'white', width: '50%', height: '100vh', display: 'inline-flex'}}></div>
      
      <div data-aos="fade-up" style = {{marginTop: '-10px', width: '100vw', height: '100vh', backgroundColor: '#eee', display: 'block', zIndex: '100'}}></div></div>
  }
}

export default About;