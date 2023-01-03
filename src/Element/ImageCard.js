import React from "react"
import Image from './Image'
import './ImageCard.scss';

const ImageCard = (props) => {
    return (
        <div className="image-card__wrapper">
            <h3 className="image-card__title">{props.title}</h3>
            <img src={props.src} alt={props.title} />
        </div>
    )
}

export default ImageCard;