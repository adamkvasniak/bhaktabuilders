import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import styles from './Statistics.module.scss';

import { FaHeart } from 'react-icons/fa'
import { FaRegStar } from "react-icons/fa";

import whichBadge from "../../assets/images/WhichTrustedTraders.svg"
import googleBadge from '../../assets/images/google-review-badge.webp'
import nextdoorBadge from '../../assets/images/transparent_neighborhood_fave.png'



import roof from './roof.jpeg'
import wall from './brick_wall.jpg'
import heating from './heating.jpg'
import Testimonials from '../Testimonials/Testimonials';



const images = [roof,wall,heating];
const googleLink = "https://www.google.com/search?client=firefox-b-d&sca_esv=aac09e88d3bc5d88&tbm=lcl&sxsrf=AHTn8zqc5j2pZNBz0lYNUz_QiTi3GR18UQ:1739028114195&q=Bhakta+Builders+Ltd.+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIyNDG1NDYzMTcztTAzNjY1MDfawMj4ilHGKSMxuyRRwak0MycltahYwackRU8hKLUsM7W8eBErXmkAFVQUMVcAAAA&rldimm=145936476586335072&hl=en-SK&sa=X&ved=2ahUKEwj10IDIsLSLAxXwgf0HHVprLSAQ9fQKegQITxAH&biw=1920&bih=995&dpr=1#lkt=LocalPoiReviews"
const nextdoorLink = "https://nextdoor.de/pages/bhakta-builders-ltd-london-gb-eng/"
const whichLink = "https://trustedtraders.which.co.uk/businesses/bhakta-builders-ltd/"

const Statistic = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.9, // Adjust this to control when the counting starts
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2200); // Change image every 3 seconds
      return () => clearInterval(interval); // Cleanup on unmount
    }, []);

  return ( 
  <section className={styles.statisticContainer}>
    
      <div className={styles.textDiv}>
        <div className={styles.headersDiv}>
           <h2 className={styles.subHeader}>Why choose us?</h2> 
           <h1 className={styles.header} >Proven Quality, Verified Excellence</h1> 
        </div>
        <div className={styles.descDiv}>
          <p className={styles.description}>At <span className={styles.bhaktaCredit}>Bhakta Builders Ltd</span>,
          our reputation is built on the trust and satisfaction of our clients. 
          We take pride in our top ratings across multiple platforms, including 
        <a href={googleLink} target="_blank" rel="noopener"> Google Reviews</a>, 
        <a href={nextdoorLink}  target="_blank" rel="noopener"> Nextdoor</a>, and 
        <a href={whichLink} target="_blank" rel="noopener"> Which? Trusted Trader</a>
          
        </p>
        <Link to="/projects" className={styles.button}>
           Visit the gallery 
        </Link>   
        </div>
        
   

      </div>
      {/* {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`${styles.image} ${
              currentImageIndex === index ? styles.active : ""
            }`}
          />
        ))} */}
      
    
   
    <div className={styles.items}>
      <a href={googleLink} target="_blank" rel="noopener noreferrer">
        <div ref={ref} className={styles.statisticItem}>
            <p class={styles.itemDescription}>Google reviews</p>
            
              <img src={googleBadge} className={styles.badge} alt="Google Reviews Badge" />
           
          {inView && <h1><CountUp start={1} end={5.0} decimals={1}duration={2.5} delay={0.9} />/5.0 <FaRegStar /> </h1>}
        </div> </a>


        <a href={whichLink} target="_blank" rel="noopener noreferrer">
        <div className={styles.statisticItem}> 
          <p className={styles.itemDescription}>Rating on Which</p>
          
          <img src={whichBadge} className={`${styles.badge} ${styles.whichBadge}`} alt="Which? Trusted Trader Badge" />
         
          {inView && <h1><CountUp start={0.0} end={4.9} decimals={1} duration={2.5} delay={0.9} />/5 <FaRegStar /> </h1>}
        </div> </a>


       <a href={nextdoorLink} target="_blank" rel="noopener noreferrer">
        <div className={styles.statisticItem}>
          <p className={styles.itemDescription}>Nextdoor</p> 
          
            <img src={nextdoorBadge} className={styles.badge} alt="Nextdoor Favorite Badge" />
           
          {inView && <h1><CountUp start={1} end={44} duration={2.5} delay={0.9} /> <FaHeart color='red'/></h1>}
        </div> </a>

    </div>
    <Testimonials />
  </section>
   
  );
};

export default Statistic;