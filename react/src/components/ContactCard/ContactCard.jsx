import React from "react";
import styles from "./ContactCard.module.scss";
import logo from '../../assets/images/bhaktabuilders_logo_transparent.png'

const ContactCard = () => {
  return (
    <section className={styles.contactCard}>
      
        <p className={styles.detail}>
        <strong>Registered in England and Wales</strong>
        <br />
        Company No: 6443148
        <br />
        V.A.T. No: 934705419
      </p>

      <p className={styles.detail}>
        <strong>Address:</strong>
        <br />
        1 Spring Court, London, W73BX 
      </p>
  
      <p className={styles.detail}>
        <strong>Contact:</strong>
        <br />
        George: <a href="tel:07729167039">07729 167039</a>
        <br />
        Vladimir: <a href="tel:07939581430">07939 581430</a>
        <br />
        <a href="mailto:bhaktabuilders@gmail.com">bhaktabuilders@gmail.com</a>
      </p>
     
      <p className={styles.email}>
   
      </p>
    </section>
  );
};

export default ContactCard;
