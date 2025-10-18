// ContactFormWithImage.js
import React from "react";
import styles from "./ContactForm.module.scss";
import Form from "./Form";

import CompanyMap from "../GoogleMapComponent/GoogleMapComponent";

const ContactFormWithImage = () => {

  return (
    <section className={styles.container} id='consultation'>
        <Form />
        <div className={styles.imageContainer}>
          <CompanyMap />
         </div>
    </section>
  );
};

export default ContactFormWithImage;