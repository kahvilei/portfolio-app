import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class DevonGilfillian extends React.Component{
    constructor(props){
        super(props);
        this.state={
            projOpen:false
 
          };
        
    }

    loadImages(){

    }

    shouldComponentUpdate(nextProps,nextState){
      return true;
     }

    componentDidMount(){
        this.setState({
            projOpen:this.props.open
        });
    }

    render(){
        if (!this.props.open){
            return<div id = "devon-gilfillian">
            <div id = "head-top" style={{top:'0px',position: 'fixed', zIndex:'2', background: 'rgba(255, 255, 255)', height:'30px', width:'100%'}} ></div>
            <div id = "head-left-project" style={{position: 'fixed', zIndex:'2', top:'30px', background: 'rgba(255, 255, 255)', height:'100vh',width:'30px'}} >
            </div>
            <a href="#" id = "ex" style={{position: 'fixed', zIndex:'2', left: '40px', top:'40px', background: '#19929B', height:'30px',width:'30px', borderRadius: '50%', textAlign: 'center'}} >
                 <i className="fas fa-times" style = {{ lineHeight: '1.9', color: 'white', paddingTop: '30px;'}}></i>
            </a>
            <div id = "head-right" style={{position: 'fixed', zIndex:'2', top:'30px', right:'0px', background: 'rgba(255, 255, 255)', height:'100vh', width:'30px'}} >
            </div>
            <div id = "head-bottom" style={{position: 'fixed', zIndex:'3', right:'30px', left: '30px', bottom:'0', background: 'rgba(255, 255, 255)', height:'30px'}}></div>
            <img className="project-header-img" src="https://kathrynhuff.com/assets/topbar.jpg"></img>
            <div style= {{position: 'relative', backgroundColor: '#FFF2EBef', width: '100vw', height: '100vh', display: 'block', zIndex: '1', position: 'fixed'}}></div>
            <div className = "devonContent" ref = {this.refs.projContent} style= {{width: '100vw', height: '100vh'}}></div></div>
        }
        else if (this.props.open) {return<div id = "devon-gilfillian">
            <div id = "head-top" style={{top:'0px',position: 'fixed', zIndex:'2', background: 'rgba(255, 255, 255)', height:'30px', width:'100%'}} ></div>
            <div id = "head-left-project" style={{position: 'fixed', zIndex:'2', top:'30px', background: 'rgba(255, 255, 255)', height:'100vh',width:'30px'}} >
            </div>
            <a href="#" id = "ex" style={{position: 'fixed', zIndex:'2', left: '40px', top:'40px', background: '#19929B', height:'30px',width:'30px', borderRadius: '50%', textAlign: 'center'}} >
                 <i className="fas fa-times" style = {{ lineHeight: '1.9', color: 'white', paddingTop: '30px;'}}></i>
            </a>
            <div id = "head-right" style={{position: 'fixed', zIndex:'2', top:'30px', right:'0px', background: 'rgba(255, 255, 255)', height:'100vh', width:'30px'}} >
            </div>
            <div id = "head-bottom" style={{position: 'fixed', zIndex:'3', right:'30px', left: '30px', bottom:'0', background: 'rgba(255, 255, 255)', height:'30px'}}></div>
            
            <img className="project-header-img" src="https://kathrynhuff.com/assets/topbar.jpg"></img>

                <div className = "devonContent">
                    <div className= "project-header-desc-full">
                        <h1 style= {{color: '#5A2727', lineHeight:"0em"}}> Devon Gilfillian</h1>
                        <h1 style= {{color: '#EA9B70', margin:'auto', display: 'inline-block'}}> Single Release Marketing.</h1><h2 style= {{color: '#EA9B70', right:'10vw', textAlign: 'right', position: 'absolute', display: 'inline-block', lineHeight:"0em"}}> Illustration & Branding</h2>
                        
                        <p style= {{ color: '#707070',marginTop: '30px', width: '60%', fontStyle: 'italic', display: 'block'}}>For Devon Gilfillan's release of his single "High", Triple 8 management contracted me to create a cover that encompassed the feel of his music and took inspiration from psychedelic art and collage . After going through many iterations of the main design and finalization, Devon's manager had me create a series of pre-release graphics that incorporated elements of the cover art's design and garnered interest from Devon's followers and fans. </p>
                    </div>
                    <div style= {{position: 'relative', backgroundColor: '#FFF2EBef', width: '100vw', height: '76vw', display: 'block', zIndex: '1'}}>
                        <div style = {{paddingTop: '5vw', maxWidth: '66vw', margin: '0 auto'}}>
                            <img className="promo-img" id = "promo-img-1"src="https://kathrynhuff.com/assets/1.gif"></img>
                            <div className = "promo-desc" id = "promo-desc-1" style= {{padding: '2vw', marginTop: '-20vw', position: 'absolute', transition: '.3s', backgroundColor: '#FFF', width: '14vw', height: '14vw', zIndex: '-1'}}>
                            <i className="fas fa-arrow-left" style = {{ lineHeight: '1.9', color: '#EA9B70', paddingTop: '30px;'}}></i>
                                <h3 style= {{ color: '#5A2727'}}>day one</h3>
                                <p style= {{ color: '#707070'}}>day one had the least detail, just showcasing the subtly shifting pink cloud backdrop</p>
                            </div>
                            <div className="promo-img" ></div>
                            <div className="promo-img" style= {{backgroundColor: '#FFF', marginTop: '-10vw',padding: '2vw', width: '16vw', height: '16vw'}}>
                                <div style= {{ display:'table', postion: 'absolute'}}>
                                    <h3 style= {{ lineHeight:'1px',color: '#5A2727', postion: 'absolute'}}>pre-release</h3>
                                    <h3 style= {{  lineHeight:'1px', color: '#EA9B70', postion: 'absolute'}}>promotionals</h3>
                                    <p style= {{ color: '#707070', postion: 'absolute'}}>day</p>
                                    <p style= {{ color: '#EA9B70', postion: 'absolute'}}>hover on each piece to find out more about it</p>
                                </div>
                            </div>
                            <img className="promo-img" id = "promo-img-2" src="https://kathrynhuff.com/assets/4_1.gif"></img>
                            <div className = "promo-desc" id = "promo-desc-2" style= {{padding: '2vw', marginLeft: '2vw', marginTop: '-20vw', position: 'absolute', transition: '.3s', backgroundColor: '#FFF', width: '14vw', height: '14vw', zIndex: '-1'}}>
                            <i className="fas fa-arrow-up" style = {{ lineHeight: '1.9', color: '#EA9B70', paddingTop: '30px;'}}></i>
                                <h3 style= {{ color: '#5A2727'}}>day two</h3>
                                <p style= {{ color: '#707070'}}>day one had the least detail, just showcasing the subtly shifting pink cloud backdrop</p>
                            </div>
                            <img className="promo-img" id = "promo-img-3" src="https://kathrynhuff.com/assets/3.gif"></img>
                            <div className = "promo-desc" id = "promo-desc-3" style= {{padding: '2vw', marginTop: '-20vw', marginLeft: '24vw', position: 'absolute', transition: '.3s', backgroundColor: '#FFF', width: '14vw', height: '14vw', zIndex: '-1'}}>
                            <i className="fas fa-arrow-down" style = {{ lineHeight: '1.9', color: '#EA9B70', paddingTop: '30px;'}}></i>
                                <h3 style= {{ color: '#5A2727'}}>day three</h3>
                                <p style= {{ color: '#707070'}}>day one had the least detail, just showcasing the subtly shifting pink cloud backdrop</p>
                            </div>
                            <div className="promo-img" ></div>
                            <div className="promo-img" ></div>
                            <img className="promo-img" id = "promo-img-5" src="https://kathrynhuff.com/assets/IG%20Gif%204_2-cropped.gif"></img>
                            <div className = "promo-desc" id = "promo-desc-5" style= {{padding: '2vw', marginTop: '-20vw', marginLeft: '24vw', position: 'absolute', transition: '.3s', backgroundColor: '#FFF', width: '14vw', height: '14vw', zIndex: '-1'}}>
                            <i className="fas fa-arrow-right" style = {{ lineHeight: '1.9', color: '#EA9B70', paddingTop: '30px;'}}></i>
                                <h3 style= {{ color: '#5A2727'}}>day five</h3>
                                <p style= {{ color: '#707070'}}>day one had the least detail, just showcasing the subtly shifting pink cloud backdrop</p>
                            </div>
                            <img className="promo-img" id = "promo-img-6" src="https://kathrynhuff.com/assets/2.gif"></img>
                            <div className = "promo-desc" id = "promo-desc-6" style= {{padding: '2vw', marginTop: '-20vw', marginLeft: '46vw', position: 'absolute', transition: '.3s', backgroundColor: '#FFF', width: '14vw', height: '14vw', zIndex: '-1'}}>
                            <i className="fas fa-arrow-down" style = {{ lineHeight: '1.9', color: '#EA9B70', paddingTop: '30px;'}}></i>
                                <h3 style= {{ color: '#5A2727'}}>day six</h3>
                                <p style= {{ color: '#707070'}}>day one had the least detail, just showcasing the subtly shifting pink cloud backdrop</p>
                            </div>
                        </div>
                    </div>
                    <div style= {{padding: '5vw', backgroundColor: '#FFF', width: '90vw', height: '95vw', display: 'block', zIndex: '1'}}>
                        <div style = {{width: '40vw', height:'auto', marginTop: '10vw', display: 'inline-block', verticalAlign: 'top'}}>   
                            <h1 style= {{color: '#5A2727', lineHeight:"0em", textAlign:'right', paddingRight:'40px'}}> Announcement</h1>
                            <h1 style= {{color: '#EA9B70', margin:'auto', display: 'block', textAlign:'right', paddingRight:'40px'}}> Day</h1>                   
                            <p style= {{alignContent: 'right', color: '#707070',marginTop: '30px', marginRight: '40px', marginLeft: 'calc(50% - 40px)', width: '50%', fontStyle: 'italic', display: 'block', textAlign:'right'}}>On announcement day, all social media banners and advertisements were posted for the single's release date.(which can be found below) </p>
                        </div> 
                        <div style = {{width: '35vw', margin: 'auto', display: 'inline-block'}}>   
                        <img style = {{width: '40vw'}} src="https://kathrynhuff.com/assets/devon_prev.jpg"></img>
                        </div> 
                        <img style = {{ left: '0', rihgt: '0', position: 'absolute', padding: '10vw', width: '80vw', display: 'block'}} src="https://kathrynhuff.com/assets/temp_ckomp.png"></img>
                    </div>
                    <div style= {{padding: '5vw', backgroundColor: '#FFF2EB', width: '90vw', height: '200px', display: 'block', zIndex: '1'}}>
                        
                    </div>
                    <div style= {{paddingLeft: '2vw', paddingRight: '2vw',paddingBottom: '2vw',backgroundColor: '#FFF', width: '96vw', height: 'auto', display: 'block', zIndex: '1'}}>
                        <iframe style = {{width: '55vw', height: '31vw', margin: 'auto', display: 'inline-block'}}
                            src="https://www.youtube.com/embed/-hooon8O8n4">    
                        </iframe>
                        <div style = {{width: '30vw', height:'auto', marginLeft: '2vw', marginTop: '8vw', display: 'inline-block', verticalAlign: 'top'}}>   
                            <h1 style= {{color: '#5A2727', lineHeight:"0em"}}> Audio</h1>
                            <h1 style= {{color: '#EA9B70', margin:'auto', display: 'block'}}> Visualizer</h1>                   
                            <p style= {{ color: '#707070',marginTop: '30px', width: '90%', fontStyle: 'italic', display: 'block'}}>I created this post-release to accompany the music until the music video was produced. </p>
                        </div> 
                    </div>
                </div>
            </div>}
    }
}

export default DevonGilfillian