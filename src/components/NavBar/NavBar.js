import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class NavBar extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false;
      }

    render() {
        return (
            <header>
                
           
            <div id = "head-left" style={{transition: '.4s', boxShadow:'3px 3px 9px #00000000', position: 'fixed', zIndex:'1', top:'0px', background: '#fff', height:'100vh',width:'50px'}} >
                <div className = "hamburger" style = {{marginTop: "10px", marginLeft: "15px", transition: ".3s"}}>
                    <div class = "hamburgerLine" style = {{ height: "5px", width: "20px", borderBottom: "3px solid black"}}></div>
                    <div class = "hamburgerLine" style = {{ height: "5px", width: "20px", borderBottom: "3px solid black "}}></div>
                    <div class = "hamburgerLine" style = {{ height: "5px", width: "20px", borderBottom: "3px solid black "}}></div>
                    
                </div>
                <div className = "nameMine" style = {{positon: 'absolute', paddingTop: "20vh", transition: ".3s", marginLeft: '-127px'}}>
                    <p style = {{fontStyle: 'italic', positon: 'absolute', width: '300px',transform: 'rotate(-90deg)'}}>kathryn huff</p>   
                </div>
                <nav id = "nav">
                        <NavLink to ="/projects" id = "projects">projects</NavLink>
                        <NavLink to ="/gallery" id = "gallery">gallery</NavLink>
                        <NavLink to ="/about-me" id = "about">about </NavLink>
                        <i style={{transition: '.4s',position: 'absolute', bottom: '30px', left: '17px'}}className="far fa-envelope-open"></i>
                        <i style={{transition: '.4s',position: 'absolute', bottom: '75px', left: '17px'}}className="fab fa-artstation"></i>
                </nav> 
            </div>
           
        </header>
        );
    }
}

export default NavBar;