import "./Footer.css";

import React from 'react'
import {FaHome, FaPhone, FaMailBulk, FaLinkedin, FaTwitter, FaGithub} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
                <FaHome size={20} style={{color:"white", marginRight:"2rem"}} />
            <div>
                <p>Vinod Kirana Store, Brahma Road, Ambikapur, Chhattisgarh</p>
                <p>India</p>
            </div>
          </div>

          <div className="phone">
                <h4>
                {/* <FaPhone size={20} style={{color:"white", marginRight:"2rem"}} /> */}
                 <p> </p>
                 </h4>
          </div>

           <div className="email">
              <h4>
                <FaMailBulk size={20} style={{color:"white", marginRight:"2rem"}} />
                <p>adarsh.sujoriya083@gmail.com</p>
              </h4>
   
          </div>
        </div>

        <div className="right">
           <h4>About The Company</h4>
           <p>This is a website builder website.Clients can purchase the kind of service he/she wants and compensate the amount accordingly.</p>
           <div className="social">
           <FaLinkedin size={20} style={{color:"white", marginRight:"2rem"}} />
           <FaTwitter size={20} style={{color:"white", marginRight:"2rem"}} />
           <FaGithub size={20} style={{color:"white", marginRight:"2rem"}} />
           </div>
        </div>
        </div>
    </div>
  )
}

export default Footer
