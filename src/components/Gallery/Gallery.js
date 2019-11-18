
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import panAndZoomHoc from 'react-pan-and-zoom-hoc';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
    offset: -1200,
});

class galleryItem extends Component{

    constructor(props){
        super(props);
           this.state={
              galleryTitle:"",
              galleryImage:"",
              galleryType:""
   
            };
         }
       componentDidMount(){
           this.setState({
               galleryTitle:this.props.title,
               galleryImage:this.props.image,
               galleryType:this.props.type
           });
       }
   
       shouldComponentUpdate(nextProps,nextState){
        return true;
       }
    render(){
        return(
        <div className = "gallery-item" style = {{overflow:"hidden"}}>
            <a href = "#"><div className="light-box" id= {this.state.galleryTitle}><img draggable="false" className="light-image" src={this.state.galleryImage}></img></div></a>
            <a data-aos="zoom-in" data-aos-delay="150"  href = {'#' + this.state.galleryTitle}><img draggable="false" className="gallery-image" src={this.state.galleryImage}></img></a>
        </div>
        );
    }

    
}

var Item = galleryItem;
 
class Gallery extends Component {
    state = {
        x: 1,
        y: 1,
        scale: .3
    };
 
    handlePanAndZoom(x, y, scale) {
        this.setState({x, y, scale});
    }
 
    handlePanMove(x, y) {
        this.setState({x, y});
    }

    renderItem(image,title,type){ 
        return <Item image = {image} title = {title} type={type}/>;
    }
 
    render() {
        const {x, y, scale} = this.state;

        return <div style={{position: 'static', paddingLeft: '60px' , top: '0px'}}>
            <div className = "gallery-collumn" style={{padding: '.25vw', verticalAlign: 'top', position: 'relative', display: "inline-table", width: '29vw', height: '100%'}}> 
                <div style={{paddingBottom:'.5vw', height: '25vw', transition: '0.1s', background: '#fff', position: 'relative', display: 'block', left:'0px'}}>
                <h1 style = {{ margin: '0', userSelect: 'none', padding: "20px", fontSize:"5vw", fontWeight: '200'}}>gallery</h1>
                    <p style = {{ userSelect: 'none', margin: "20px", width:"90%", fontWeight: '200'}}>here is a collection of illustrations that I've completed for personal projects and clients </p>
                </div>
                <div style={{position: 'relative', display: 'block' }}>{this.renderItem("https://kathrynhuff.com/assets/gallery/01.jpg","one","ship")}</div>
                <div style={{position: 'relative', display: 'block'}}>{this.renderItem("https://kathrynhuff.com/assets/gallery/02.jpg","two","2")}</div>
                
            </div>
            <div className = "gallery-collumn" style={{padding: '.25vw',  verticalAlign: 'top',position: 'relative', display: "inline-table", width: '29vw', height: '100%'}}> 
                <div style={{position: 'relative', display: 'block'}}>{this.renderItem("https://kathrynhuff.com/assets/gallery/03.jpg","three","babystorm")}</div>
                <div style={{position: 'relative', display: 'block'}}>{this.renderItem("https://kathrynhuff.com/assets/gallery/04.jpg","four","a dream")}</div>
                <div style={{position: 'relative', display: 'block'}}>{this.renderItem("https://kathrynhuff.com/assets/gallery/05.jpg","five","5")}</div>
                <div style={{position: 'relative', display: 'block'}}>{this.renderItem("https://kathrynhuff.com/assets/gallery/06.jpg","six","6") }</div>
            </div>
            <div className = "gallery-collumn" style={{padding: '.25vw',  verticalAlign: 'top',position: 'relative', display: "inline-table", width: '29vw', height: '100%'}}> 
                <div style={{position: 'relative', display: 'block'}}>{this.renderItem("https://kathrynhuff.com/assets/gallery/07.png","seven","6")}</div>
                <div style={{position: 'relative', display: 'block'}}>{this.renderItem("https://kathrynhuff.com/assets/gallery/08.jpg","eight","6")}</div>
                <div style={{position: 'relative', display: 'block'}}>{this.renderItem("https://kathrynhuff.com/assets/gallery/09.png","nine","6")}</div>
            </div>
            
        </div>;
        
    }
}
/*<div class = "gallery-collumn" style={{position: 'relative', bottom: `${y * 80 * scale-160*scale}%` , right: `${x * 80 * scale-130*scale}%` , width: scale*500, height: scale*500}}></div> 
                <div style={{transition: '0.3s',position: 'relative', display: 'block', marginBottom:scale*540, right:scale*140,width: scale*500, height: scale*500}}>{this.renderItem("https://i1.wp.com/kathrynhuff.com/wp-content/uploads/2019/05/IG-Gif-4-1.gif?zoom=1.5&fit=714%2C714","devon","type")}</div>
                <div style={{transitionTimingFunction: 'ease', transition: '0.1s',position: 'relative', display: 'block', right:scale*140,width: scale*500, height: scale*500}}>{this.renderItem("http://kathrynhuff.com/wp-content/uploads/2019/08/katie-huff-sketch005.jpg","word","type")}</div>
                <div style={{transition: '0.3s',position: 'relative', display: 'block', bottom: `${y * 80 * scale-160*scale}%` , right: `${x * 80 * scale-130*scale}%` ,width: scale*500, height: scale*500}}>{this.renderItem("http://kathrynhuff.com/wp-content/uploads/2019/05/tv_gif.gif","devon","type")}</div>
                <div style={{transition: '0.3s',position: 'relative', display: 'block', top:scale*420, left:scale*400,width: scale*500, height: scale*500}}>{this.renderItem("http://kathrynhuff.com/wp-content/uploads/2019/05/garden-Copy.gif","garden","type")}</div>
                <div style={{transition: '0.3s',position: 'relative', display: 'block', left:scale*405,width: scale*500, height: scale*500}}>{this.renderItem("http://kathrynhuff.com/wp-content/uploads/2019/05/sea-small.jpg","sea","type")}</div>
                <div style={{transition: '0.3s',position: 'relative', display: 'block', top:scale*-380, left:scale*400,width: scale*500, height: scale*500}}>{this.renderItem("https://i0.wp.com/kathrynhuff.com/wp-content/uploads/2019/05/kat-huff-crownew.jpg?w=1920","crow","type") }</div>
                <div style={{transition: '0.3s',position: 'relative', display: 'block', right:scale*100, top:scale*750,width: scale*500, height: scale*500}}>{this.renderItem("http://kathrynhuff.com/wp-content/uploads/2019/07/h-1024x535.png","word","type")}</div> */
export default Gallery;

