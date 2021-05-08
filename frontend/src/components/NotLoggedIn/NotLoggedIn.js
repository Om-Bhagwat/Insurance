/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import BarChart from '../Charts/BarChart';
import PieChart from '../Charts/PieChart';
import Chatbot from 'react-chatbot-kit';
import Fade from 'react-reveal';
// import Typist from 'react-typist';
import './NotLoggedIn.css';
import ActionProvider from '../ChatBot/ActionProvider';
import MessageParser from '../ChatBot/MessageParser';
import config from '../ChatBot/config';
const NotLoggedIn=()=>{


    const[show,setShow] = useState(false);
    
    const showChat=()=>{
        if(show){
            setShow(false);
        }else{
            setShow(true);
        }
    }
    
    return (
        <div>
            <div className="chat">
                    <button onClick={showChat}>ChatBot</button>
            </div>
            {show?(
                <>
                    <div className="chatb">
                        <Chatbot config={config} actionProvider={ActionProvider}  messageParser={MessageParser} />
                    </div>
                </>
            ):(
                <>
                </>
            )}
            <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
                <div className="container"><a className="navbar-brand" href="#">InsureIt</a><button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#">Your Applications</a></li>
                            <li className="nav-item dropdown"><a className="dropdown-toggle nav-link" aria-expanded="false" data-toggle="dropdown" href="#">Claims </a>
                                <div className="dropdown-menu"><a className="dropdown-item" href="#">Auto Claim</a><a className="dropdown-item" href="#">Home Claim</a></div>
                            </li>
                        </ul><span className="navbar-text actions ty"><Link to="/login" style={{textDecoration:"none",color:"white"}}>Login</Link></span>
                    </div>
                </div>
            </nav>
            <div data-bss-parallax-bg="true" className="ok" ></div>
                <div className="features">
                    <section className="features-boxed">
                        <div className="container">
                            <div className="intro">
                                <h2 className="text-center">Features </h2>
                                <p className="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.</p>
                            </div>
                                <div className="row justify-content-center features">
                                    <Fade bottom>
                                    <div className="col-sm-6 col-md-5 col-lg-4 item">
                                        <div className="box"><i className="fa fa-map-marker icon"></i>
                                            <h3 className="name">Works everywhere</h3>
                                            <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p><a className="learn-more" href="#">Learn more »</a>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-5 col-lg-4 item">
                                        <div className="box"><i className="fa fa-clock-o icon"></i>
                                            <h3 className="name">Always available</h3>
                                            <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p><a className="learn-more" href="#">Learn more »</a>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-5 col-lg-4 item">
                                        <div className="box"><i className="fa fa-list-alt icon"></i>
                                            <h3 className="name">Customizable </h3>
                                            <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p><a className="learn-more" href="#">Learn more »</a>
                                        </div>
                                    </div>
                                    </Fade>
                                    <Fade bottom>
                                    <div className="col-sm-6 col-md-5 col-lg-4 item">
                                        <div className="box"><i className="fa fa-leaf icon"></i>
                                            <h3 className="name">Organic </h3>
                                            <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p><a className="learn-more" href="#">Learn more »</a>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-5 col-lg-4 item">
                                        <div className="box"><i className="fa fa-plane icon"></i>
                                            <h3 className="name">Fast </h3>
                                            <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p><a className="learn-more" href="#">Learn more »</a>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-5 col-lg-4 item">
                                        <div className="box"><i className="fa fa-phone icon"></i>
                                            <h3 className="name">Mobile-first</h3>
                                            <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p><a className="learn-more" href="#">Learn more »</a>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                        </div>
                    </section>
                </div>
                <div className="ench">

            </div>
            <div className="graphs">
                <Fade left>
                    <div className="myCard">
                                <BarChart/>
                    </div>
                    <div className="myCard1">
                            <PieChart/>
                    </div>
                </Fade>
            </div>
            <div className="ench">

            </div>
            <footer className="footer-basic">
                <div className="social"><a href="#"><i className="icon ion-social-instagram"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-facebook"></i></a></div>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="#">Home</a></li>
                        <li className="list-inline-item"><a href="#">Services</a></li>
                        <li className="list-inline-item"><a href="#">About</a></li>
                        <li className="list-inline-item"><a href="#">Terms</a></li>
                        <li className="list-inline-item"><a href="#">Privacy Policy</a></li>
                    </ul>
                    <p className="copyright">Company Name © 2021</p>
            </footer>
        </div>
    )
}

export default NotLoggedIn;