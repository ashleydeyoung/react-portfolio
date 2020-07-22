import React from 'react';

import CardInfo from '../components/CardInfo';


function Card(props) {

    return(
        <div className=" g-card p-1" onClick={(e) => props.click(props.item)}>
            <img height="150" width="250" className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} github= {props.item.github} technologies= {props.item.technologies} /> }
        </div>
    );

}

export default Card;