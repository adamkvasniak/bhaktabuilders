// Footer.jsx
import React, { useState, useEffect } from "react";
import styles from './Footer.module.scss';
import logo from '../../assets/images/bhaktabuilders_logo_transparent.png'
import { FaFacebook} from 'react-icons/fa';
import { FaInstagram} from 'react-icons/fa';
import x from '../../assets/images/x-white.png'
import ContactFormWithImage from "../ContactForm/ContactFormWithImage";
import {NavLinks} from '../Navbar/Navbar'

const Footer = () => {

   const [isScrolled, setIsScrolled] = useState(false);

  
 

  return (
    <footer className={styles.footer}>
      <ContactFormWithImage />
      <div className={styles.row}>
        <div className={styles.addressDiv}> 
        
        </div>
        <div className={styles.linksDiv}>
          
          <ul className={styles.socialLinks}>
            <li><a href="https://www.instagram.com/bhaktabuilders/?fbclid=IwY2xjawI-pi1leHRuA2FlbQIxMAABHT50xFyjOiRx-PDjDX3wZ7VN3xmaKAbtQsukdZ-3o4Teyjk1HB1zrl9DLg_aem_B4oq6alqKY9Cg5t_rk6zAQ" target="_blank" rel="noopener noreferrer"><FaInstagram color='#E1306C ' /></a></li>
            <li><a href="https://www.facebook.com/profile.php?id=100039929243286" target="_blank" rel="noopener noreferrer"><FaFacebook color='#1877F2' /></a></li>
            <li><a href="https://x.com/i/flow/login?redirect_after_login=%2FBhaktaLtd" target="_blank" rel="noopener noreferrer"><img src={x} alt="Example Link" className={styles.imageLink} /></a></li>
          </ul>
        </div>

      </div>
         

       

      <a className={styles.author} href="https://adamkvasniak.com/" target="_blank" rel="noopener noreferrer">
       © Adam Kvasniak 2025
      </a>
    </footer>
  );
};

export default Footer;
