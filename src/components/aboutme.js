import React from "react";
import mongoLogo from "../Images/mongo db logo.svg";
const Aboutme=()=>{
    return(
        <>
            <div className="about-wrapper">
            <div className="about-img">
            <img style={{ width: 445, height: 450,paddingTop:5  }} src={require('../Images/my photo.jpeg')} alt="my pic " title="My picture "/>
            </div>

            <div className="about-info">
            <div className="stack-name">
                    <div className="mern-stack">
                        <div><img style={{ width: 35, height: 55 }} src={mongoLogo} alt="mongo logo"></img></div>
                        <div><img className="mern-logo" style={{ width: 45, height: 45,paddingTop:5 }} src={require('../Images/express logo.png')} alt="express logo"></img></div>
                        <div><img className="mern-logo" style={{ width: 50, height: 50,paddingTop:5  }} src={require('../Images/react logo.png')} alt="react logo"></img></div>
                        <div><img style={{ width: 40, height: 45 ,paddingTop:5 }} src={require('../Images/node logo.png')} alt="node j s logo"></img></div>
                    </div>
                </div>
                <div className="stack-name">
                    <div className="mern-stack" style={{justifyContent:"space-between",width: 210, paddingLeft:30,paddingTop:0}}>
                        <div className="mern-letter"><p>M</p></div>
                        <div className="mern-letter"><p>E</p></div>
                        <div className="mern-letter"><p>R</p></div>
                        <div className="mern-letter"><p>N</p></div>
                    </div>
                </div>
                <div className="about-para">
                <p>Siddharth Rai is a undergraduate student pursuing his B.Tech in <strong>Computer Science with specialization in Cyber Security and Digital Forensics. </strong>
                He is a hard-working, confident and and diligent individual. He is skilled in React, MongoDB, NodeJS, HTML, CSS and JavaScript.
                Apart form academics he love playing volleyball and watching animes and can go on and on about them. He also love listening to music and it is his favourite thing to do while wokring on a side project.</p>

                </div>
            </div>
            
            </div>

            <hr className="hr" />

        </>
    )
}
export default Aboutme;