import React from "react"


const Image = (props) => {
    <>
        <img className={`${props.className}`} src={props.src} alt={props.alt}/>
    </>
}

export default Image;