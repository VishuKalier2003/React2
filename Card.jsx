import React from 'react';
import './card.css';

// Card component...

function Card(props) {
    // Ternary Operator (Conditional) used in Variety...
    return (
        <div className="outer">
            <img className="photo" src={props.image} alt=""></img>
            <p className="number">{props.id}</p>
            <h4 className="text">{props.name}</h4>
            <div className="row">
            <p className="pricing">Rs. {props.price} /-</p>
            { props.variety == "Veg" ?
            <h6 className="pricing1">{props.variety}</h6> :
            <h6 className="pricing2">{props.variety}</h6>
            }
            <p className="pricing">D: {props.discount}</p>
            </div>
        </div>
    )
}

export default Card;