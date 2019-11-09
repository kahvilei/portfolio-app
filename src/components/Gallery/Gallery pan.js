
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import panAndZoomHoc from 'react-pan-and-zoom-hoc';


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
        <div className = "gallery-item" id= {this.state.galleryTitle}>
            <img draggable="false" className="gallery-image" src={this.state.galleryImage}></img>
            <h3 className = "gallery-title">{this.state.galleryType}</h3>
        </div>
        );
    }

    
}

var Item = galleryItem;
const InteractiveDiv = panAndZoomHoc('div');
 
class Gallery extends Component {
    state = {
        x: 1,
        y: 1,
        scale: .5
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
        //this.state.x = Math.min(Math.max(x, .5), 1.5);
        //this.state.y = Math.min(Math.max(y, .5), 3.0);
        //var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        return <InteractiveDiv
            x={(this.state.x-x)*scale+x}
            y={(this.state.y-y)*scale+y}
            scale={scale}
            scaleFactor={Math.sqrt(1.3)}
            minScale={.5}
            maxScale={1.0}
            disableZoomToMouse = {false}
            onPanAndZoom={(x, y, scale) => this.handlePanAndZoom(x, y, scale)} 
            style={{ background: '#F8F8F8', width: '100vw', height: '100vh', border: '1px solid black', position: 'fixed', overflow: 'hidden',}}
            onPanMove={(x, y) => this.handlePanMove(x, y)}
        >
           
            <div class = "gallery-collumn" style={{/*transition: '.2s ease'*/ position: 'relative', bottom: `${y * 80 * scale-45*scale}%` , right: `${x * 80 * scale-190*scale}%` , width: scale*800, height: scale*800}}> 
                <div style={{height: scale*620, transition: '0.1s', background: '#fff', position: 'relative', display: 'block', top:scale*180, right:scale*1290,}}>
                <h1 style = {{ userSelect: 'none', margin: "20px", fontSize:"5vw", fontWeight: '200'}}>gallery</h1>
                    <p style = {{ userSelect: 'none', margin: "20px", width:"90%px", fontWeight: '200'}}>here is a collection of illustrations that I've completed for personal projects and clients <br></br> <br></br>pan and zoom to interact</p>
                </div>
                <div style={{transition: '0.1s',position: 'relative', display: 'block', bottom:scale*440, right:scale*470,}}>{this.renderItem("https://kathrynhuff.com/assets/gallery/01.jpg","devon","ship")}</div>
                <div style={{transition: '0.1s',position: 'relative', display: 'block', right:scale*470}}>{this.renderItem("https://kathrynhuff.com/assets/gallery/02.jpg","word","2")}</div>
                <div style={{transition: '0.1s',position: 'relative', display: 'block', top:scale*200, right:scale*1290,}}>{this.renderItem("https://kathrynhuff.com/assets/gallery/03.jpg","devon","babystorm")}</div>
                <div style={{transition: '0.1s',position: 'relative', display: 'block', top:scale*-10, left:scale*345,}}>{this.renderItem("https://kathrynhuff.com/assets/gallery/04.jpg","garden","a dream")}</div>
                <div style={{transition: '0.1s',position: 'relative', display: 'block', top:scale*500, right:scale*470,}}>{this.renderItem("https://kathrynhuff.com/assets/gallery/05.jpg","sea","5")}</div>
                <div style={{transition: '0.1s',position: 'relative', display: 'block', top:scale*-440, left:scale*345,}}>{this.renderItem("https://kathrynhuff.com/assets/gallery/06.jpg","crow","6") }</div>
                <div style={{transition: '0.1s',position: 'relative', display: 'block', left:scale*345, top:scale*580}}>{this.renderItem("https://kathrynhuff.com/assets/gallery/07.png","word","6")}</div>
                <div style={{transition: '0.1s',position: 'relative', display: 'block', right:scale*1290, top:scale*805}}>{this.renderItem("https://kathrynhuff.com/assets/gallery/08.jpg","word","6")}</div>
                <div style={{transition: '0.1s',position: 'relative', display: 'block', right:scale*470, top:scale*815}}>{this.renderItem("https://kathrynhuff.com/assets/gallery/09.png","word","6")}</div>
            </div>
            
        </InteractiveDiv>;
        
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

