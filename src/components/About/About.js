import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

class About extends Component {
  render() {
    return<div className= "mobileFullPad" >
      <div className= "mobileFull"  style = {{position: 'relative', width: '50%', height: '47vw', backgroundColor: '#222', display: 'inline-flex', zIndex: '-100'}}>
        <img  data-aos="zoom-in" style = {{width: '25%', margin: '12.5%', marginTop:'5%', backgroundColor: 'white', position: 'fixed'}} src = "https://cdna.artstation.com/p/assets/images/images/020/036/258/large/katie-huff-sketch005.jpg?1566082858"></img>
      </div>
      <div  className= "mobileFull"  style = {{position: 'absolute', top: 0, padding: '10%', backgroundColor: 'white', width: '30%', height: '45vw', display: 'inline-flex'}}>
        <div style = {{textAlign: 'left', display: 'block'}}>
          <h2 style = {{display: 'block'}}>About Me</h2>
          <p style = {{display: 'block'}}>This is a paragraph about me</p>
          <h2 style = {{display: 'block'}}>About Me</h2>
          <p style = {{display: 'block'}}>This is a paragraph about me</p>
        </div>
      </div>
      
      <div data-aos="fade-up" style = {{marginTop: '-10px', width: '100vw', height: '100vh', backgroundColor: '#eee', display: 'block', zIndex: '100'}}></div></div>
  }
}

export default About;