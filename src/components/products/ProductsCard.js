import React from 'react'
import './Products.css'


const ProductsCard = (props) => {
    return (
        <div className='row'>
            <div className='img-container'>
                <img src={props.img}></img>
            </div>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default ProductsCard