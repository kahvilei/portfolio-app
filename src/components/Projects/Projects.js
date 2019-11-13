import React, { Component } from 'react';
import DevonGilfillian from './DevonGilfillian';
import JudahAndTheLion from './JudahAndTheLion';
import ComputerScience from './ComputerScience';
import CollectiveGroup from './CollectiveGroup';
import FlipMove from 'react-flip-move';


class ProjectItem extends Component{

    constructor(props){
        super(props);
           this.state={
              projectTitle:"",
              projectImage:"",
              projectDemo:"",
              projectPage:"",
              projectTags:"",
              projectId: ""
   
            };
         }
       componentDidMount(){
           this.setState({
               projectTitle:this.props.title,
               projectImage:this.props.image,
               projectTags:this.props.tags,
               projectDemo:this.props.demo,
               projectPage:this.props.page,
               projectId:this.props.id,
               projectSub:this.props.sub
           });
       }
     componentWillReceiveProps(nextProps,nextState){
       this.setState({
         galleryTitle:nextProps["title"],
         galleryImage:nextProps["image"]
        });
   
       }
       shouldComponentUpdate(nextProps,nextState){
          // your condition if you want to re-render every time on props change
        return true;
       }
    render(){
        return(
        <div className = "project" id= {this.state.projectId}>
            <img draggable="false" className="project-image" src={this.state.projectImage}></img>
            <div className = "project-desc-back"></div>
            <div className = "project-desc">
                <h1 className = "Project-title">{this.state.projectTitle}</h1>
                <h1 className = "project-sub">{this.state.projectSub}</h1>
                <h2 className = "Project-tags">{this.state.projectTags}</h2>
                <p className = "Project-demo">{this.state.projectDemo}</p>
            </div>
            <div clasname = "Project-popup">
                {this.state.projectPage}
            </div>
        </div>
        );
    }
}

class Project extends React.Component{
    constructor(props){
        super(props);
        this.state={
            devonState : false,
            judahState : false,
            csState : false,
            devonOpen : 'inline-block',
            judahOpen : 'inline-block',
            csOpen : 'inline-block',
            galleryOpen : 'inline-block',
            cgOpen : 'inline-block',
          };   
    }
    

    renderItem(image,title,tags,demo,id,sub){ 
        return <ProjectItem image = {image} title = {title} tags={tags} demo={demo} id={id} sub = {sub} page = "o"/>;
    }

    openProject(project){
        if(project == 'devon'){
            this.state.devonState = true;
        }
        if(project == 'judah'){
            this.state.judahState = true;
        }
        if(project == 'cs'){
            this.state.csState = true;
        }
        if(project == 'cg'){
            this.state.cgState = true;
        }
    }

    sortProject(type){
        if(type == 'all'){
            this.state.devonOpen = 'inline-block';
            this.state.judahOpen = 'inline-block';
            this.state.csOpen = 'inline-block';
            this.state.cgOpen = 'inline-block';
            this.state.galleryOpen = 'inline-block';
        }
        if(type == 'web'){
            this.state.devonOpen = 'none';
            this.state.judahOpen = 'none';
            this.state.csOpen = 'inline-block';
            this.state.cgOpen = 'inline-block';
            this.state.galleryOpen = 'none';
        }
        if(type == 'ill'){
            this.state.devonOpen = 'inline-block';
            this.state.judahOpen = 'inline-block';
            this.state.csOpen = 'none';
            this.state.cgOpen = 'none';
            this.state.galleryOpen = 'inline-block';
        }
        if(type == 'mar'){
            this.state.devonOpen = 'inline-block';
            this.state.judahOpen = 'inline-block';
            this.state.csOpen = 'none';
            this.state.cgOpen = 'inline-block';
            this.state.galleryOpen = 'none';
        }
        if(type == 'gra'){
            this.state.devonOpen = 'inline-block';
            this.state.judahOpen = 'inline-block';
            this.state.csOpen = 'inline-block';
            this.state.cgOpen = 'inline-block';
            this.state.galleryOpen = 'none';
        }
    }

    render(){
        return<div id = "content" style = {{marginTop: '0px',paddingTop: '0px', width: '100vw'}}>
                <div id = "projects-title" style = {{ position: 'fixed', paddingTop: '0vw', margin: '0 0 1vw 4vw'}}>
                    <h1 style = {{ userSelect: 'none', fontSize:"5vw", fontWeight: '200'}}>projects</h1>
                    <a href="#all" onClick = {() => this.sortProject('all') }><h3>All</h3></a>
                    <a href="#web"onClick = {() => this.sortProject('web') }><h3>Web Design</h3></a>
                    <a href="#ill" onClick = {() => this.sortProject('ill') }><h3>Illustration</h3></a>
                    <a href="#mar" onClick = {() => this.sortProject('mar') }><h3>Marketing</h3></a>
                    <a href="#mar" onClick = {() => this.sortProject('gra') }><h3>Graphic Design</h3></a>
                </div>
                <FlipMove id = "projects-wrapper" style = {{paddingTop: '0vw', margin: '0 0 2vw 25vw'}}>
               
                <a key = "a" onClick = {() => this.openProject('cs')} href="#computer-science"style = {{transition: '.3s'}}><div style = {{position: 'relative', display: this.state.csOpen}} className = "project-wrapper">{this.renderItem("https://kathrynhuff.com/assets/cs_prev.jpg","The Computer Science Department","Web Design & Branding","As an employee of the University of Texas at Dallas, I've experienced firsthand the need for a new Computer Science Department website...","cs", "Website Re-design")}</div></a>
                <a key = "b" onClick = {() => this.openProject('devon')} href="#devon-gilfillian" style = {{transition: '.3s'}}><div style = {{position: 'relative', zIndex: '1', display: this.state.devonOpen}} className = "project-wrapper">{this.renderItem("http://kathrynhuff.com/assets/devon_prev.jpg","Devon Gilfillian","Illustration & Branding","For Devon Gilfillan's release of his single \"High\", Triple 8 management contracted me to create a cover that encompassed the feel of his music and took inspiration from psychedelic art and collage... ", "devon", "Single Release Marketing")}</div></a>
                <a key = "c" href="../gallery" style = {{transition: '.3s'}}><div  style = {{position: 'relative', zIndex: '1', display: this.state.galleryOpen}}className = "project-wrapper">{this.renderItem("https://kathrynhuff.com/assets/gall_prev.jpg","Art Gallery","","a collection of illustrations that I've completed for personal projects and clients","gallery-p", "Illustration & Painting")}</div></a>
                <a key = "d" onClick = {() => this.openProject('judah')} href="#judah-and-the-lion" style = {{transition: '.3s'}}><div  style = {{position: 'relative', zIndex: '1', display: this.state.judahOpen}}className = "project-wrapper">{this.renderItem("https://kathrynhuff.com/assets/judah_prev.jpg","Judah & The Lion","Illustration & Branding","For Judah and The Lion's rollout leading up to the release of their album \"Pep Talks\", I was contracted to create a series of promotional animations that teased the release of the single \"Over My Head...\"","judah", "Album Release Marketing")}</div></a>
                <a key = "e" onClick = {() => this.openProject('cg')} href="#collective-group" style = {{transition: '.3s'}}><div  style = {{transition: '.3s', position: 'relative', zIndex: '1', display: this.state.cgOpen}}className = "project-wrapper">{this.renderItem("https://kathrynhuff.com/assets/gall_prev.jpg","The Collective Group","","Overhall of company marketing assets done while under the employment of The Collective Group; including the creation of new customizeable datasheet templates, a set color scheme, a library of graphics representing company services, and a powerpoint theme with accompanying graphic templates...","cg", "Branding & Marketing")}</div></a>

                </FlipMove>
                <div style = {{ backgroundColor: "#eee", marginTop: '.6vw', height: "35vw", width: "65vw", margin: '0 0 0vw 25vw'}}></div>

                <DevonGilfillian open = {this.state.devonState}/>
                <JudahAndTheLion open = {this.state.judahState}/>
                <ComputerScience open = {this.state.csState}/>
                <CollectiveGroup open = {this.state.cgState}/>
                
            </div> 
    }
}

export default Project

/*<div style = {{ overflow: 'invisible', position: 'absolute', right: '2vw', height: "13vw", width: "36vw", }}>
                    <img src = "https://kathrynhuff.com/assets/3.gif" style ={{zIndex: '-1', position: 'fixed', width: '36vw', top: '-10vw'}}></img>
                    <div style = {{backgroundColor: '#e08f8933', marginTop: '0vw', height: '13vw', width: '36vw'}}><h1 style = {{display: "inline-block", margin: "20px", fontSize:"6vw", textAlign: 'right', color: 'white'}}>Projects</h1></div>
                    <div id = "cover" style = {{backgroundColor: '#f8f8f8', marginTop: '0vw', height: '62.3vw', width: '36vw'}}></div>
                </div>
                
                
                
                
                
                <a key = "a" onClick = {() => this.openProject('cs')} href="#computer-science"style = {{transition: '.3s'}}><div style = {{position: 'relative', display: this.state.csOpen}} className = "project-wrapper">{this.renderItem("https://kathrynhuff.com/assets/cs_prev.jpg","The Computer Science Department","Web Design & Branding","As an employee of the University of Texas at Dallas, I've experienced firsthand the need for a new Computer Science Department website...","cs", "Website Re-design")}</div></a>
                <a key = "b" onClick = {() => this.openProject('devon')} href="#devon-gilfillian" style = {{transition: '.3s'}}><div style = {{position: 'relative', zIndex: '1', display: this.state.devonOpen}} className = "project-wrapper">{this.renderItem("http://kathrynhuff.com/assets/devon_prev.jpg","Devon Gilfillian","Illustration & Branding","For Devon Gilfillan's release of his single \"High\", Triple 8 management contracted me to create a cover that encompassed the feel of his music and took inspiration from psychedelic art and collage... ", "devon", "Single Release Marketing")}</div></a>
                <a key = "c" href="../gallery" style = {{transition: '.3s'}}><div  style = {{position: 'relative', zIndex: '1', display: this.state.galleryOpen}}className = "project-wrapper">{this.renderItem("https://kathrynhuff.com/assets/gall_prev.jpg","Art Gallery","","a collection of illustrations that I've completed for personal projects and clients","gallery-p", "Illustration & Painting")}</div></a>
                <a key = "d" onClick = {() => this.openProject('judah')} href="#judah-and-the-lion" style = {{transition: '.3s'}}><div  style = {{position: 'relative', zIndex: '1', display: this.state.judahOpen}}className = "project-wrapper">{this.renderItem("https://kathrynhuff.com/assets/judah_prev.jpg","Judah & The Lion","Illustration & Branding","For Devon Gilfillan's release of his single \"High\", Triple 8 management contracted me to create a cover that encompassed the feel of his music and took inspiration from psychedelic art and collage . After going through many iterations of the main design and finalization, Devon's manager had me create a series of pre-release graphics that incorporated elements of the cover art's design and garnered interest from Devon's followers and fans. ","judah", "Album Release Marketing")}</div></a>
                <a key = "e" href="../gallery" style = {{transition: '.3s'}}><div  style = {{transition: '.3s', position: 'relative', zIndex: '1', display: this.state.cgOpen}}className = "project-wrapper">{this.renderItem("https://kathrynhuff.com/assets/gall_prev.jpg","The Collective Group","","a collection of illustrations that I've completed for personal projects and clients","cg", "Branding & Marketing")}</div></a>*/