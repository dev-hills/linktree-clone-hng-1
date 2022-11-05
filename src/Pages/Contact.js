import React from 'react'
import '../Pages/contact.css'
import zuri from '../assets/zuri internship.png'
import I4G from '../assets/I4G.png'

const Contact = () => {
    return(
<div>
        <div className='heading'>Contact Me</div>
        <div className='subtext'>Hi There, contact me to ask me anything you have in  mind</div>

            <form>
                <div className='name'>
                <div className='firstname'>
                    <label for='first_name'>First Name</label>
                    <input type='text' id='first_name' placeholder='Enter Your First Name' required/>
                </div>
                <div className='lastname'>
                    <label for='last_name'>Last Name</label>
                    <input type='text' id='last_name' placeholder='Enter Your Last Name' required/>
                </div>
                </div>             
                <div className='input_email'>
                    <label for='email'>Email</label>
                    <input type='text' id='email' placeholder='yourname@email.com' required/>
                </div>
                <div className='input'>
                    <label for='message'>Message</label>
                    <textarea id='message' placeholder='Send me a message and i will reply you as soon as possible' required/>
                </div>
                <div className='checkbox'>
                    <input type='checkbox' required/>
                    <div>You agree to providing your data to Hills who may contact you</div>
                </div>
                <button id='btn__submit'>Send Message</button>
            </form> 

            <div id='footer'>
        <div id='zuri-internship'>
          <img src={zuri} alt=''/>
        </div>

        <div classname='footer-text'>HNG Internship 9 Frontend Task</div>

        <div id='ingressive-logo'>
          <img src={I4G} alt=''/>
        </div>
      </div>
    </div>
    );
}

export default Contact