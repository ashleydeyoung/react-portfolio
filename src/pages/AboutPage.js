import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import "../App.css";

import photo from '../assets/images/photo.jpg';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle} />
            <Content>
            <img height="200" width="250" className="round img-fluid float-left m-2 mx-4" src={photo} alt="ashleydeyoung" />
            <p className="font1">I am a full stack web developer based in Charlotte, North Carolina with experience in HTML, JavaScript, CSS, Express JS, Node JS, mySQL, MongoDB and React.</p>

            <p className="font1">As a developer, I am able to use my passion for solving problems to create applications that make a difference in people's lives.</p>

            <p className="font1">Currently, I am expanding my knowledge with React, as well as gaining more experience with Express JS and Node JS.</p>

            <p className="font1">You can checkout all my latest projects <a href="https://github.com/ashleydeyoung" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage.</p>

            <p className="font1">Feel free to <a href="/contact" rel="noopener noreferrer">contact me</a> with any questions! I look forward to hearing from you soon!</p>
            </Content>
        </div>
    );

}

export default AboutPage;