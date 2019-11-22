import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  anchorPlacement: "bottom-middle",
  once: false
});

class About extends Component {
  render() {
    return<div className= "mobileFullPad" >
            <div className= {"mobileFull", "mobileAuto"}  style = {{position: 'relative', width: '50%', height: '47vw', backgroundColor: '#222', display: 'inline-flex', zIndex: '-100'}}>
              <img className= {"mobileFullPad"}  data-aos="zoom-in" style = {{width: '25%', marginLeft: 'calc(12.5% + 25px)', marginTop:'5%', backgroundColor: 'white', position: 'fixed'}} src = "https://kathrynhuff.com/assets/profile.jpg"></img>
            </div>
            <div  className= {"mobileFull"}  style = {{position: 'absolute', top: 0, padding: '10%', backgroundColor: 'white', width: '30%', minHeight: '45vw', display: 'inline-flex', zIndex: '-100'}}>
              <div style = {{textAlign: 'left', display: 'block'}}>
                <h2 style = {{display: 'block'}}>About Me</h2>
                <p style = {{display: 'block'}}>Hello, I’m a recent graduate of the University of Texas at Dallas with a Bachelors in Arts & Technology and a minor in Computer Science. I work part-time as a web designer and a freelance illustrator.</p>
                <h4 style = {{color: '#000', display: 'block'}}>Contact & More Info</h4>
                <a href = "mailto:kat@kathrynhuff.com"><i data-aos="fade-up" data-aos-delay="50"style={{color: 'rgb(187, 106, 106)', position: 'relative', display:'inline-block', padding: '2%'}}className="far fa-envelope-open"></i></a>
                <a href = "https://www.artstation.com/katvile"><i data-aos="fade-up" data-aos-delay="150"style={{color: 'rgb(187, 106, 106)', position: 'relative', display:'inline-block', padding: '2%'}}className="fab fa-artstation"></i></a>
                <a href = "mailto:kat@kathrynhuff.com"><i data-aos="fade-up" data-aos-delay="250"style={{color: 'rgb(187, 106, 106)', position: 'relative', display:'inline-block', padding: '2%'}}className="fab fa-linkedin"></i></a>
                <a href = "mailto:kat@kathrynhuff.com"><i data-aos="fade-up" data-aos-delay="350"style={{color: 'rgb(187, 106, 106)', position: 'relative', display:'inline-block', padding: '2%'}}className="fab fa-github"></i></a>
              </div>
            </div>
            
            <div  style = {{padding: '10%', paddingTop: '9%', marginTop: '-10px', width: '80%', height: 'auto', backgroundColor: 'rgb(248, 248, 248)', display: 'block', zIndex: '100'}}>
              <div  data-aos="fade-right" className= "mobileFull" style = {{position: 'relative', width: '30%', display: 'inline-table'}}>
                <h2 style = {{position: 'relative', display: 'block'}}>Education</h2>
                <div data-aos="fade-up" style = {{width: '3%', margin: '3%', borderTop: '1px solid black',display: 'inline-table'}}></div>
                <div  className= "mobileFull"  data-aos="fade-up" style = {{paddingBottom: '5vw', width: '70%', position: 'relative', display: 'inline-table'}}>
                  <h4  style = {{marginTop: '-15px !important', display: 'block'}}>The University of Texas at Dallas</h4>
                  <p>2015 - 2019</p>  <p style = {{fontStyle: 'italic'}}>Degree in Arts and Technology (focus in
design and production) with a minor in
Computer Science</p>
                </div>
              </div>
              <div  className= "mobileFull"  style = {{float: 'top', borderLeft: '1px solid grey', paddingLeft: "5%", position: 'relative', width: 'calc(65% - 1px)', display: 'inline-table'}}>
                <h2 style = {{display: 'block'}}>Experience</h2>
                <div data-aos="fade-up" style = {{borderRadius: '100%',width: '3%', height: '1.5vw', margin: '3%', border: '1px solid black',display: 'inline-table'}}></div>
                <div data-aos="fade-up" style = {{ paddingBottom: '2vw', width: '90%', position: 'relative', display: 'inline-table'}}>
                  <h4  style = {{color: '#3E6829', marginTop: '-15px !important', display: 'block'}}>Web Developer</h4>
                  <p>2018 - Current  <span style = {{color: '#3E6829'}}>Eric Jonsson School of Computer Science</span></p>
                  <p style = {{fontStyle: 'italic'}}>Managed the UTD Computer Science
Department website and designed new
webpages for individual departments.</p>
                </div>
                <div data-aos="fade-up" style = {{borderRadius: '100%',width: '3%', height: '1.5vw', margin: '3%', border: '1px solid black',display: 'inline-table'}}></div>
                <div data-aos="fade-up" style = {{ paddingBottom: '2vw', width: '90%', position: 'relative', display: 'inline-table'}}>
                  <h4  style = {{color: 'rgb(73, 131, 207)', marginTop: '-15px !important', display: 'block'}}>Graphic Designer</h4>
                  <p>2018 - Current  <span style = {{color: 'rgb(73, 131, 207)'}}>The Collective Group</span></p>
                  <p style = {{fontStyle: 'italic'}}>Managed the UTD Computer Science
Department website and designed new
webpages for individual departments.</p>
                </div>
                <div data-aos="fade-up" style = {{borderRadius: '100%',width: '3%', height: '1.5vw', margin: '3%', border: '1px solid black',display: 'inline-table'}}></div>
                <div data-aos="fade-up" style = {{ paddingBottom: '2vw', width: '90%', position: 'relative', display: 'inline-table'}}>
                  <h4  style = {{color: 'rgb(187, 106, 106)', marginTop: '-15px !important', display: 'block'}}>Illustrator</h4>
                  <p >2018 - 2019  <span style = {{color: 'rgb(187, 106, 106)'}}>Triple 8 Management</span></p>
                  <p style = {{fontStyle: 'italic'}}>Work ranging from collaboration on
fellow colleagues projects to the creation
of promotional illustrations for artists like
Devon GIlfillian and Judah & The Lion.</p>
                </div>

                <div data-aos="fade-up" style = {{borderRadius: '100%',width: '3%', height: '1.5vw', margin: '3%', border: '1px solid black',display: 'inline-table'}}></div>
                <div data-aos="fade-up" style = {{ paddingBottom: '2vw', width: '90%', position: 'relative', display: 'inline-table'}}>
                  <h4  style = {{color: 'rgb(187, 106, 106)', marginTop: '-15px !important', display: 'block'}}>Graphic Design Intern</h4>
                  <p >2018  <span style = {{color: 'rgb(187, 106, 106)'}}>Triple 8 Management</span></p>
                  <p style = {{fontStyle: 'italic'}}>Created social media graphics / videos
and worked closely with the managers of
several bands. (Eli Young Band, Whiskey
Myers, Pat Green,Scotty Mcreery, etc.)</p>
                </div>
                
              </div>
              <h2 style = {{borderBottom: '1px solid black', paddingTop: '5vw', paddingBottom: '2vw', display: 'block'}}>Skills</h2>

              <div  className= {"mobileFullPad"} data-aos="fade-right" data-aos-delay="50" className= "mobileFull" style = {{position: 'relative', width: '33%', display: 'inline-table'}}>
                <h4 style = {{position: 'relative', display: 'block'}}>Languages</h4>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Java</li>
                <li>C++</li>
                <li>HTML/CSS</li>
                
              </div>

              <div  className= {"mobileFullPad"} data-aos="fade-right" data-aos-delay="150" className= "mobileFull" style = {{position: 'relative', width: '33%', display: 'inline-table'}}>
                <h4 style = {{position: 'relative', display: 'block'}}>Software</h4>
                <li>Adobe Photoshop</li>
                <li>Adobe Illustrator</li>
                <li>Adobe XD</li>
                <li>Adobe After Effects</li>
                <li>Maya</li>
                <li>Unreal</li>
                <li>Wordpress</li>
                
              </div>

              <div  className= {"mobileFullPad"} data-aos="fade-right" data-aos-delay="250" className= "mobileFull" style = {{position: 'relative', width: '33%', display: 'inline-table'}}>
                <h4 style = {{position: 'relative', display: 'block'}}>General</h4>
                <li>Graphic Design</li>
                <li>Prototyping</li>
                <li>Web Management</li>
                <li>Web Design</li>
                <li>Illustration</li>
                
              </div>
            </div>
        </div>
  }
}

export default About;