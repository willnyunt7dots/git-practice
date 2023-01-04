import React from "react";
import './InfoCard.scss';

const InfoCard = props => {
    return(
        <div className="info-card">
            <img className="info-card__image" src={props.src} alt={props.alt} />
            <h3 className="info-card__title">{props.title}</h3>
            <p className="info-card__content">{props.content}</p>
        </div>
    )
}

export default InfoCard;

