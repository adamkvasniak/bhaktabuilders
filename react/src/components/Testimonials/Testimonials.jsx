// Testimonials.jsx
import React from 'react';
import styles from './Testimonials.module.scss';
import {ElfsightWidget} from 'react-elfsight-widget';
import { ReactTyped } from "react-typed";

const Testimonials = () => {


  return (
    <section className={styles.testimonialsContainer}>
      <div className={styles.textDiv}>
        
        <h2 className={styles.subHeader}>Verified quality</h2>
        <h1>People said about us<ReactTyped
      strings={["..."]}
      typeSpeed={50}
      backSpeed={30}
      loop
    /></h1>
        
      </div>    
      <div className={styles.widgetDiv}>
        <ElfsightWidget widgetId='b9ae49bf-013a-4ce7-841b-efb5c1e46635' />
        </div>
    </section>
  )
};

export default Testimonials;