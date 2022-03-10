import React from 'react'
import './Products.css'
import ProductsCard from './ProductsCard'
import Walleldin from '../../assets/face-1.jpg'
import Jerry from '../../assets/face-2.jpg'
import Amer from '../../assets/face-3.jpg'
import Kyle from '../../assets/face-4.jpg'


const Products = () => {
    return (
        <div className='products'>
            <div className='card'>
                <ProductsCard img={Walleldin} title='Walleldin' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis in eu mi bibendum neque. Congue quisque egestas diam in arcu cursus euismod quis viverra.' />
            </div>
            <div className='card'>
                <ProductsCard img={Jerry} title='Jerry' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis in eu mi bibendum neque. Congue quisque egestas diam in arcu cursus euismod quis viverra.' />
            </div>
            <div className='card'>
                <ProductsCard img={Amer} title='Amer' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis in eu mi bibendum neque. Congue quisque egestas diam in arcu cursus euismod quis viverra.' />
            </div>
            <div className='card'>
                <ProductsCard img={Kyle} title='Kyle' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis in eu mi bibendum neque. Congue quisque egestas diam in arcu cursus euismod quis viverra.' />
            </div>
        </div>
    )
}

export default Products