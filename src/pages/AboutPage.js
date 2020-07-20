import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

import photo from '../assets/images/photo.jpg';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <img height="200" width="250" className="img-fluid float-left m-2 mx-4" src={photo} alt="ashleydeyoung" />
            <p>Hello, my name is Ashley. I'm a full stack web developer with experience in HTML, JavaScript, CSS, Express JS, Node JS, mySQL, MongoDB, and React.</p>

            <p>My dream is to continue to develop useful applications for everyone to enjoy.</p>

            <p>I have always had a passion for creating content and solving problems.</p>

            <p>I'm constantly learning new things. currently those things include gaining more experience with React, Express JS, and Node JS</p>

            <p>You can checkout all my latest projects here <a href="https://github.com/ashleydeyoung" target="_blank" rel="noopener noreferrer">here</a>, or on the homepage.</p>
            
            <p>Feel Free to <a href="/contact" rel="noopener noreferrer">contact me</a>, with any questions! I look forward to hearing from you soon!</p>
            </Content>
        </div>
    );

}

export default AboutPage;