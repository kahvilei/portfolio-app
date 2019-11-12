import React, { Component } from 'react';

class CollectiveGroup extends React.Component{

    render(){
        return<div id = "collective-group">
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

                <div className = "cgContent">
                    <div className= "project-header-desc-full">
                        <h1 style= {{color: '#FCB61A', lineHeight:"1em"}}> The Collective<br></br>Group</h1>
                        <h1 style= {{color: 'rgb(59, 93, 116)', lineHeight:"0em", margin:'auto', display: 'inline-block'}}>Branding & Marketing</h1><h2 style= {{color: 'rgb(59, 93, 116)', right:'10vw', textAlign: 'right', position: 'absolute', display: 'inline-block', lineHeight:"0em"}}> </h2>
                        
                        <p style= {{ color: '#B3B3B3',marginTop: '30px', width: '60%', fontStyle: 'italic', display: 'block'}}>As an employee of the University of Texas at Dallas, I've experienced firsthand the need for a new Computer Science Department website. The WordPress theme currently being used is outdated and the color scheme creates pages ranging from jarring to in-accessible. My goal is to create a modern, visually appealing landing page that leads the user to want to know more about UTD and contains links to the most commonly visited and searched-for pages currently on the site. </p>
                    </div>
                    <div style= {{padding: '5vw', backgroundColor: '#fff', width: '90vw', height: '40vw', display: 'block', zIndex: '1'}}>
                        <h1 style= {{color: 'rgb(59, 93, 116)', margin:'auto', display: 'block', textAlign: 'center'}}> Redesigned Data Sheets</h1>
                        <p style= {{color: '#bbb',  margin:'auto', marginTop: '30px', width: '25%', contentAlign: 'right', fontStyle: 'italic', display: 'block', textAlign: 'left'}}>I created this post-release to accompany the music until the music video was produced. </p>
                        
                    </div>
                    <div style= {{padding: '5vw', backgroundColor: '#0B1C03EE', width: '90vw', height: '200px', display: 'block', zIndex: '1'}}>
                    </div>
                </div>
            </div>
    }
}

export default CollectiveGroup