import React, { Component } from 'react';
import SVGElement from 'react';

class JudahAndTheLion extends React.Component{

    render(){
        return<div id = "judah-and-the-lion">
            <div id = "head-top" style={{top:'0px',position: 'fixed', zIndex:'2', background: 'rgba(255, 255, 255)', height:'30px', width:'100%'}} ></div>
            <div id = "head-left-project" style={{position: 'fixed', zIndex:'2', top:'30px', background: 'rgba(255, 255, 255)', height:'100vh',width:'30px'}} >
            </div>
            <a href="#" id = "ex" style={{position: 'fixed', zIndex:'2', left: '40px', top:'40px', background: '#000', height:'30px',width:'30px', borderRadius: '50%', textAlign: 'center'}} >
                 <i className="fas fa-times" style = {{ lineHeight: '1.9', color: 'white', paddingTop: '30px;'}}></i>
            </a>
            <div id = "head-right" style={{position: 'fixed', zIndex:'2', top:'30px', right:'0px', background: 'rgba(255, 255, 255)', height:'100vh', width:'30px'}} >
            </div>
            <div id = "head-bottom" style={{position: 'fixed', zIndex:'3', right:'30px', left: '30px', bottom:'0', background: 'rgba(255, 255, 255)', height:'30px'}}></div>
            
            <img className="project-header-img" src="https://kathrynhuff.com/assets/topbar-judah.jpg"></img>

                <div className = "judahContent">
                    <div className= "project-header-desc-full">
                        <h1 style= {{color: '#5E6166', lineHeight:"0em"}}> Judah & The Lion</h1>
                        <h1 style= {{color: '#FF7065', margin:'auto', display: 'inline-block'}}> Album Release Marketing.</h1><h2 style= {{color: '#FF7065', right:'10vw', textAlign: 'right', position: 'absolute', display: 'inline-block', lineHeight:"0em"}}> Illustration & Branding</h2>
                        
                        <p style= {{ color: '#5E6166',marginTop: '30px', width: '60%', fontStyle: 'italic', display: 'block'}}>For Devon Gilfillan's release of his single "High", Triple 8 management contracted me to create a cover that encompassed the feel of his music and took inspiration from psychedelic art and collage . After going through many iterations of the main design and finalization, Devon's manager had me create a series of pre-release graphics that incorporated elements of the cover art's design and garnered interest from Devon's followers and fans. </p>
                    </div>
                    <div style= {{position: 'relative', backgroundColor: '#000000df', width: '100vw', height: '56vw', display: 'block', zIndex: '1'}}>
                        <div style = {{paddingTop: '5vw', maxWidth: '66vw', margin: '0 auto'}}>
                            <img className="promo-img" id = "promo-img-1"src="https://kathrynhuff.com/assets/judah/gif_1.gif"></img>
                            <div className = "promo-desc" id = "promo-desc-1" style= {{padding: '2vw', marginTop: '-20vw', position: 'absolute', transition: '.3s', backgroundColor: '#343434', width: '14vw', height: '14vw', zIndex: '-1'}}>
                            <i className="fas fa-arrow-left" style = {{ lineHeight: '1.9', color: '#FF7065', paddingTop: '30px;'}}></i>
                                <h3 style= {{ color: '#FF7065'}}>day one</h3>
                                <p style= {{ color: '#5E6166'}}>day one had the least detail, just showcasing the subtly shifting pink cloud backdrop</p>
                            </div>
                            <div className="promo-img" ></div>
                            <div className="promo-img" style= {{backgroundColor: '#343434', marginTop: '-10vw',padding: '2vw', width: '16vw', height: '16vw'}}>
                                <div style= {{ display:'table', postion: 'absolute'}}>
                                    <h3 style= {{ lineHeight:'1px',color: '#FF7065', postion: 'absolute'}}>pre-release</h3>
                                    <h3 style= {{  lineHeight:'1px', color: '#FF7065', postion: 'absolute'}}>promotionals</h3>
                                    <p style= {{ color: '#5E6166', postion: 'absolute'}}>day</p>
                                    <p style= {{ color: '#FF7065', postion: 'absolute'}}>hover on each piece to find out more about it</p>
                                </div>
                            </div>
                            <img className="promo-img" id = "promo-img-2" src="https://kathrynhuff.com/assets/judah/gif_2.gif"></img>
                            <div className = "promo-desc" id = "promo-desc-2" style= {{padding: '2vw', marginLeft: '2vw', marginTop: '-20vw', position: 'absolute', transition: '.3s', backgroundColor: '#343434', width: '14vw', height: '14vw', zIndex: '-1'}}>
                            <i className="fas fa-arrow-up" style = {{ lineHeight: '1.9', color: '#FF7065', paddingTop: '30px;'}}></i>
                                <h3 style= {{ color: '#FF7065'}}>day two</h3>
                                <p style= {{ color: '#5E6166'}}>day one had the least detail, just showcasing the subtly shifting pink cloud backdrop</p>
                            </div>
                            <img className="promo-img" id = "promo-img-3" src="https://kathrynhuff.com/assets/judah/gif_3.gif"></img>
                            <div className = "promo-desc" id = "promo-desc-3" style= {{padding: '2vw', marginTop: '-20vw', marginLeft: '24vw', position: 'absolute', transition: '.3s', backgroundColor: '#343434', width: '14vw', height: '14vw', zIndex: '-1'}}>
                            <i className="fas fa-arrow-down" style = {{ lineHeight: '1.9', color: '#FF7065', paddingTop: '30px;'}}></i>
                                <h3 style= {{ color: '#FF7065'}}>day three</h3>
                                <p style= {{ color: '#5E6166'}}>day one had the least detail, just showcasing the subtly shifting pink cloud backdrop</p>
                            </div>
                            <img className="promo-img" id = "promo-img-5" src="https://kathrynhuff.com/assets/judah/gif_4.gif"></img>
                            <div className = "promo-desc" id = "promo-desc-5" style= {{padding: '2vw', marginTop: '-20vw', marginLeft: '46vw', position: 'absolute', transition: '.3s', backgroundColor: '#343434', width: '14vw', height: '14vw', zIndex: '-1'}}>
                            <i className="fas fa-arrow-right" style = {{ lineHeight: '1.9', color: '#FF7065', paddingTop: '30px;'}}></i>
                                <h3 style= {{ color: '#FF7065'}}>day five</h3>
                                <p style= {{ color: '#5E6166'}}>day one had the least detail, just showcasing the subtly shifting pink cloud backdrop</p>
                            </div>
                        </div>
                    </div>
                    <div style= {{padding: '5vw', backgroundColor: '#FFF', width: '90vw', height: '40vw', display: 'block', zIndex: '1'}}>
                        <div style = {{width: '40vw', height:'auto', marginTop: '10vw', display: 'inline-block', verticalAlign: 'top'}}>   
                            <h1 style= {{color: '#5E6166', lineHeight:"0em", textAlign:'right', paddingRight:'40px'}}> Announcement</h1>
                            <h1 style= {{color: '#FF7065', margin:'auto', display: 'block', textAlign:'right', paddingRight:'40px'}}> Day</h1>                   
                            <p style= {{alignContent: 'right', color: '#5E6166',marginTop: '30px', marginRight: '40px', marginLeft: 'calc(50% - 40px)', width: '50%', fontStyle: 'italic', display: 'block', textAlign:'right'}}>On announcement day, all social media banners and advertisements were posted for the single's release date.(which can be found below) </p>
                        </div> 
                        <div style = {{width: '35vw', backgroundColor: '#000', margin: 'auto', display: 'inline-block'}}>   
                        <img style = {{width: '40vw'}} src="https://kathrynhuff.com/assets/judah/over_my_head_cover.jpg"></img>
                        </div> 
                    </div>
                    <div style= {{padding: '5vw', backgroundColor: '#000000df', width: '90vw', height: '90vw', display: 'block', zIndex: '1'}}>
                    <embed style = {{ left: '0', right: '0', position: 'absolute', padding: '20vw', paddingTop: '5vw', paddingBottom: '5vw', width: '60vw', display: 'block'}} src="https://kathrynhuff.com/assets/judah/preview.svg"></embed>
                    </div>
                </div>
            </div>
    }
}

export default JudahAndTheLion