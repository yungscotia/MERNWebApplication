import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import video from '../assets/testVideo1.mp4';


export default class WelcomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoOn: false,
            videoDone: false
        };

        /*let windowWidth = window.innerWidth;
        let toRender;
        if(windowWidth >= 650) {
            toRender;
        } */

        this.handleClick = this.handleClick.bind(this);
        this.MainPageRender = this.MainPageRender.bind(this);
    }

    MainPageRender() {
        this.setState(state => ({
            videoDone: true
        }));
    }

    handleClick() {
        this.setState(state => ({
            videoOn: true
        }));
        let welcome_video = document.getElementById("welcome_video");
        setTimeout(function() {
            welcome_video.play();
        }, 1000);

        welcome_video.addEventListener('ended', this.MainPageRender, false);
    }

    render() {
        return (
            <div className="App" id="height100"> 
                <div className="row" id="height100">
                    <div className={this.state.videoOn ? "leftside is-active" : "leftside"}> 
                        <div className={this.state.videoOn ? "leftHover is-active" : "leftHover"} onClick={this.handleClick}>
                            <div className="arrow-slide-left">
                                <svg className="bi bi-caret-left arrowleft" width="1.3vw" height="1.3vw" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M10 12.796L4.519 8 10 3.204v9.592zm-.659.753l-5.48-4.796a1 1 0 010-1.506l5.48-4.796A1 1 0 0111 3.204v9.592a1 1 0 01-1.659.753z" clip-rule="evenodd"/>
                                </svg>
                                <div className="leftButton"></div>
                            </div>
                        </div>
                        <video className={this.state.videoOn ? "welcome-video is-active" : "welcome-video"} id="welcome_video" width="100%" height="100%">
                            <source src={video}/>
                        </video>
                        <div className={this.state.videoDone ? "after-video is-active" : "after-video"}>
                            <Link to='/main'>Main Page</Link>
                        </div>
                    </div>
                    <div className={this.state.videoOn ? "rightside is-active" : "rightside"}>
                        <div className ="rightHover">
                            <Link to='/main' className="rightHoverLink"></Link>
                            <div className="arrow-slide-right">
                                <svg class="bi bi-caret-right arrowright" width="1.3vw" height="1.3vw" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M6 12.796L11.481 8 6 3.204v9.592zm.659.753l5.48-4.796a1 1 0 000-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 001.659.753z" clip-rule="evenodd"/>
                                </svg>
                                <div className="rightButton"></div>
                            </div>
                        </div>
                        <div id="rightImage"></div>
                    </div>
                </div> 
            </div>
        )
    }
}