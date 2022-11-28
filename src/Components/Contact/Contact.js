import React from 'react'

import NavBar from "../Common-Components/NavBar"
import Footer from "../Common-Components/Footer"
import CommonPage from '../Common-Components/CommonPage'
import ContactForm from '../Contact/ContactForm'

const Contact = () => {
  return (
    <div>
     <NavBar />
     <CommonPage heading="CONTACT" text="Let's have a chat"/>
     <ContactForm />
     <Footer />
    </div>
  )
}

export default Contact
