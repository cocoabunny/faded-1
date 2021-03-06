import React from 'react'
import './About.css'
import Banner from '../../assets/banner.jpg'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <div className='banner'>
                    <img src={Banner} alt='image of a barber shop' id='banner'></img>
                    <h1 className='header'> From San Jose, to the Melbourne Bay</h1>
                    <p className='body'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                    <h1 className='header'> Testimonials from past Clients</h1>
                </div>
            </div>
        </div>
    )
}

export default About