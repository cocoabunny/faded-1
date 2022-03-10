import React from 'react'
import './Book.css'



const Book = () => {
    return (
        <div className='book'>
            <div className='info'>
                <h2 className='title'>Appointments</h2>
                <p className='availability'>If you'd like to book a haircut, please enter your email, and I will get back to you ASAP</p>
            </div>
            <div className='form-container'>
                <form action='https://getform.io/f/e30025fb-f4b3-4514-8482-623594a19a3c' method='POST'>
                    <input className='email' type="email" name='email' placeholder='Enter your email'></input>
                    <p>By clicking submit, you agree to recieve email communication from Faded Barber llc</p>
                    <button className='btn' type='submit'>Submit</button>
                </form>

            </div>
        </div>
    )
}


export default Book