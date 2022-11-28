import "./ContactForm.css";

import React from 'react'

const ContactForm = () => {
  // Function for form submitting and preventing reload of the page
  function formSubmitted(event){
    event.preventDefault()
    console.log("Form Submitted")
  }


  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text"></input>

        <label>Email</label>
        <input type="text"></input>

        <label>Subject</label>
        <input type="text"></input>
        
        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here" />
        <button className="btn" onClick={formSubmitted}>Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
