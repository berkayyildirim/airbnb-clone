import React from 'react'
import "./Card.css"

// We need props which is a functional component.
// When we add props, we need to destructure it to use.
// Since we will use a lot of card component, we use props like src and we minimize time consuming as well as the number of folders in a file.
 
function Card({src, title, description, price}) {
    return (
        <div className="card">
             <img src={src} alt="description"/>
             <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
             </div>
        </div>
    )
}

export default Card
