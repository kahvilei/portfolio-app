import React, { Component } from 'react';

class ComputerScience extends React.Component{

    render(){
        return<div id = "computer-science">
            <div id = "head-top" style={{top:'0px',position: 'fixed', zIndex:'2', background: 'rgba(255, 255, 255)', height:'30px', width:'100%'}} ></div>
            <div id = "head-left-project" style={{position: 'fixed', zIndex:'2', top:'30px', background: 'rgba(255, 255, 255)', height:'100vh',width:'30px'}} >
            </div>
            <a href="#" id = "ex" style={{position: 'fixed', zIndex:'2', left: '40px', top:'40px', background: '#FCB61A', height:'30px',width:'30px', borderRadius: '50%', textAlign: 'center'}} >
                 <i className="fas fa-times" style = {{ lineHeight: '1.9', color: 'white', paddingTop: '30px;'}}></i>
            </a>
            <div id = "head-right" style={{position: 'fixed', zIndex:'2', top:'30px', right:'0px', background: 'rgba(255, 255, 255)', height:'100vh', width:'30px'}} >
            </div>
            <div id = "head-bottom" style={{position: 'fixed', zIndex:'3', right:'30px', left: '30px', bottom:'0', background: 'rgba(255, 255, 255)', height:'30px'}}></div>
            
            <img className="project-header-img" src="https://kathrynhuff.com/assets/cs_prev.jpg"></img>

                <div className = "csContent">
                    <div className= "project-header-desc-full">
                        <h1 style= {{color: '#FCB61A', lineHeight:"1em"}}> The Department of Computer<br></br> Science</h1>
                        <h1 style= {{color: '#3E6829', lineHeight:"0em", margin:'auto', display: 'inline-block'}}> Website Re-design.</h1><h2 style= {{color: '#3E6829', right:'10vw', textAlign: 'right', position: 'absolute', display: 'inline-block', lineHeight:"0em"}}> Illustration & Branding</h2>
                        
                        <p style= {{ color: '#B3B3B3',marginTop: '30px', width: '60%', fontStyle: 'italic', display: 'block'}}>As an employee of the University of Texas at Dallas, I've experienced firsthand the need for a new Computer Science Department website. The WordPress theme currently being used is outdated and the color scheme creates pages ranging from jarring to in-accessible. My goal is to create a modern, visually appealing landing page that leads the user to want to know more about UTD and contains links to the most commonly visited and searched-for pages currently on the site. </p>
                    </div>
                    <div style= {{position: 'relative', backgroundColor: '#FFF', width: '100vw', height: '50vw', display: 'block', zIndex: '1'}}>
                        <div style = {{paddingTop: '5vw', width: '60vw', marginLeft: '3vw', display: 'inline-block'}}>
                        <iframe style = {{width: '100%', border:'none', height: '33.8vw', boxShadow: '3px 3px 9px grey'}}src="https://xd.adobe.com/embed/df562759-241f-4d09-66f0-05ea28114d32-a967/"></iframe>
                        </div>
                        <div style = {{position: 'absolute', paddingTop: '10vw', width: '37vw', display: 'inline-block'}}>
                            <h1 style= {{marginLeft: '3vw', color: '#5A2727', lineHeight:"0em", textAlign:'left', paddingRight:'40px'}}> Landing Page/</h1>
                            <h1 style= {{marginLeft: '3vw', color: '#EA9B70', textAlign:'left', paddingRight:'40px'}}> Menu</h1>                   
                            <p style= {{width: '25vw', alignContent: 'left', color: '#707070', marginTop: '30px', marginLeft: '3vw', fontStyle: 'italic', display: 'block', textAlign:'left'}}>On announcement day, all social media banners and advertisements were posted for the single's release date.(which can be found below) </p>
                        </div>
                    </div>
                    <div style= {{padding: '5vw', backgroundColor: '#0B1C03EE', width: '90vw', height: '200px', display: 'block', zIndex: '1'}}>
                        
                    </div>
                    <div style= {{paddingLeft: '2vw', paddingRight: '2vw',paddingBottom: '5vw',backgroundColor: '#FFF', width: '96vw', height: 'auto', display: 'block', zIndex: '1'}}>
                        <div style = {{paddingTop: '5vw', width: '50vw', marginLeft: '3vw', display: 'inline-block'}}>
                            <iframe style = {{width: '100%', border:'none', height: '28.2vw', boxShadow: '3px 3px 9px grey'}}src="https://xd.adobe.com/embed/df562759-241f-4d09-66f0-05ea28114d32-a967/screen/a824e8ed-81b8-4b0d-8126-91664ebbd68a/Article-Template"></iframe>
                        </div>
                        <div style = {{width: '30vw', height:'auto', marginLeft: '2vw', marginTop: '8vw', display: 'inline-block', verticalAlign: 'top'}}>   
                            <h1 style= {{color: '#5A2727', lineHeight:"0em"}}> Audio</h1>
                            <h1 style= {{color: '#EA9B70', margin:'auto', display: 'block'}}> Visualizer</h1>                   
                            <p style= {{ color: '#707070',marginTop: '30px', width: '75%', fontStyle: 'italic', display: 'block'}}>I created this post-release to accompany the music until the music video was produced. </p>
                        </div> 
                    </div>
                    <div style= {{padding: '5vw', backgroundColor: '#0B1C03EE', width: '90vw', height: '200px', display: 'block', zIndex: '1'}}>
                        
                    </div>
                    <div style= {{paddingLeft: '2vw', paddingRight: '2vw',paddingBottom: '5vw',backgroundColor: '#FFF', width: '96vw', height: 'auto', display: 'block', zIndex: '1'}}>
                        <div style = {{width: '37vw', height:'auto', marginLeft: '2vw', marginTop: '8vw', display: 'inline-block', verticalAlign: 'top'}}>   
                            <h1 style= {{color: '#5A2727', lineHeight:"0em", textAlign: 'right'}}> Audio</h1>
                            <h1 style= {{color: '#EA9B70', margin:'auto', display: 'block', textAlign: 'right'}}> Visualizer</h1>                   
                            <p style= {{color: '#707070',marginTop: '30px', width: '75%', contentAlign: 'right', fontStyle: 'italic', display: 'block', textAlign: 'right'}}>I created this post-release to accompany the music until the music video was produced. </p>
                        </div> 
                        <div style = {{paddingTop: '5vw', width: '50vw', marginLeft: '3vw', display: 'inline-block'}}>
                            <iframe style = {{width: '100%', border:'none', height: '28.2vw', boxShadow: '3px 3px 9px grey'}}src="https://xd.adobe.com/embed/df562759-241f-4d09-66f0-05ea28114d32-a967/screen/c021d3e2-9901-45ad-aa43-c33a9b7a5a7e/Faculty-Template"></iframe>
                        </div>
                    </div>
                    <div style= {{padding: '5vw', backgroundColor: '#0B1C03EE', width: '90vw', height: '40vw', display: 'block', zIndex: '1'}}>
                    <h1 style= {{color: '#EA9B70', margin:'auto', display: 'block', textAlign: 'center'}}> Visualizer</h1>
                    <p style= {{color: '#eee',  margin:'auto', marginTop: '30px', width: '25%', contentAlign: 'right', fontStyle: 'italic', display: 'block', textAlign: 'left'}}>I created this post-release to accompany the music until the music video was produced. </p>
                    <iframe style = {{margin: '2.5vw', width: '40vw', border:'none', height: '22.8vw', boxShadow: '3px 3px 9px black'}}src="https://xd.adobe.com/embed/df562759-241f-4d09-66f0-05ea28114d32-a967/screen/3c3a5e99-ea19-4ae2-a2f0-f009d4a50d6c/Education-Template"></iframe>
                    <iframe style = {{margin: '2.5vw', width: '40vw', border:'none', height: '22.8vw', boxShadow: '3px 3px 9px black'}}src="https://xd.adobe.com/embed/df562759-241f-4d09-66f0-05ea28114d32-a967/screen/44d1c552-cfbf-47f0-a9a5-2b236370446c/Admissions-Template"></iframe>
                    </div>
                </div>
            </div>
    }
}

export default ComputerScience