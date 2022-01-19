import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className='subscribe'>

            <div className='content'>

                <h2>Join our DeFi community</h2>
                {/* https://app.getform.io/ - make your own form on this website*/}
                <form action='https://getform.io/f/dca02e7e-afff-4d0f-98a4-7ccc66ea5d33' method='POST'>
                         <div className='form-container display-col'>
                        <input type='email' 
                               name='email'
                               placeholder='Enter your email'
                        />
                        <button className='btn'>Sign up</button>
                        </div>

                        <div className='form-container'>
                            <input type='checkbox'/>
                             <p>Yes, I agree to receive an email from your team.</p>
                        </div>

                </form>

            </div>   {/* className='content' */}

        </div> // className='subscribe'
    )
}

export default Subscribe
