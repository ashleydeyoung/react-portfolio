import React from 'react';
import { useSpring, animated } from 'react-spring';
import "../App.css"

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div className="card-info text-center wrap text-white" style={style}>
            <h5 className="card-title font-weight-bolder">{props.title}</h5>
            <div className="card-text font-italic p-2">{props.subTitle}</div>
            <div className="card-text tech">Technologies used:</div>
            <p className="card-text tech">{props.technologies}</p>
            <a href={props.link}  target="_blank" className= "fontPink" rel="noopener noreferrer">Deployed Link</a>
            <br/>
            <a href={props.github}  target="_blank" className= "fontGreen"  rel="noopener noreferrer">Github</a>
        </animated.div>
    );

}

export default CardInfo;