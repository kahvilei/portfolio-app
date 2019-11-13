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
                        
                        <p style= {{ color: '#B3B3B3',marginTop: '30px', width: '60%', display: 'block'}}>Overhall of company marketing assets done while under the employment of The Collective Group; including the creation of new customizeable datasheet templates, a set color scheme, a library of graphics representing company services, and a powerpoint theme with accompanying graphic templates.</p>
                    </div>
                    <div style= {{animation:'.3s ease-out 0s 1 slideInFromBottom', padding: '10vw', backgroundColor: '#eee', width: '80vw', height: 'auto', display: 'block', zIndex: '1'}}>
                        <h1 style= {{color: 'rgb(59, 93, 116)', margin:'auto', display: 'block', textAlign: 'center'}}>Redesigned Data Sheets</h1>
                        <p style= {{color: '#999',  margin:'auto', marginTop: '30px', width: '40%', contentAlign: 'right', display: 'block', textAlign: 'left'}}>I created templates to account for all needed areas from a company overview to color-coded, service specific sheets.</p>
                        <img style = {{marginTop: '5vw', marginLeft: '5vw', width: '30vw', border:'none', display: 'inline-table'}} src="https://kathrynhuff.com/assets/cg/cg_before_Page_1.jpg"></img>
                        <div style= {{width: '10vw', zIndex: '1', display: 'inline-table'}}> <img style = {{width: '60%', margin: '20%', marginBottom: '150%'}}src="https://kathrynhuff.com/assets/cg/arrow.svg"></img></div>
                        <img style = {{marginTop: '5vw', marginRight: '5vw', width: '30vw', border:'none', display: 'inline-table'}} src="https://kathrynhuff.com/assets/cg/cg_overview_Page_1.jpg"></img>
                        <div style = {{margin: '5vw', width: '20vw', border:'none', display: 'inline-block'}} ><h3 style= {{color: 'rgb(59, 93, 116)'}}>Service Overview Template</h3><img style = {{width: '100%'}}src="https://kathrynhuff.com/assets/cg/cg_specificService_2.jpg"></img></div>
                        <div style = {{marginBottom: '5vw', width: '20vw', border:'none', display: 'inline-block'}} ><h3 style= {{color: 'rgb(59, 93, 116)'}}>Specific Service Template</h3><img style = {{width: '100%'}}src="https://kathrynhuff.com/assets/cg/cg_specificService_Page_1.jpg"></img></div>
                        <div style = {{margin: '5vw', width: '20vw', border:'none', display: 'inline-block'}} ><h3 style= {{color: 'rgb(59, 93, 116)'}}>Technology Overview Template</h3><img style = {{width: '100%'}}src="https://kathrynhuff.com/assets/cg/cg_specificService_3.jpg"></img></div>
                    </div>
                    <div style= {{padding: '5vw', backgroundColor: 'rgb(14, 14, 20, 90%)', width: '90vw', height: 'auto', display: 'block', zIndex: '1'}}>
                    <h1 style= {{color: '#FCB61A', margin:'auto', display: 'block', textAlign: 'center'}}> Color Scheme and Graphics Library</h1>
                    <p style= {{color: '#eee',  margin:'auto', marginTop: '30px', width: '40%', contentAlign: 'right', display: 'block', textAlign: 'left'}}>For each of Collective's business branches I assigned a set color and graphic to be used in marketing/datasheets and created a library of graphics to represent sub-services and features.</p>
                    <img style = {{width: '60%', margin: '20%', marginTop: '5%'}}src="https://kathrynhuff.com/assets/cg/library.svg"></img>
                    </div>
                </div>
            </div>
    }
}

export default CollectiveGroup