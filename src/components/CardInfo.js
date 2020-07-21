import React from 'react';
import { useSpring, animated } from 'react-spring';

function CardInfo(props) {

    const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <animated.div className="g-card-info text-center" style={style}>
            <h5 className="g-card-title">{props.title}</h5>
            <p className="g-card-sub-title">{props.subTitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">Deployed Link</a>
            <br/>
            <a href={props.github} target="_blank" rel="noopener noreferrer">Github</a>
        </animated.div>
    );

}

export default CardInfo;