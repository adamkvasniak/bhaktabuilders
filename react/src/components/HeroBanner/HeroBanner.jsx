import React, { useState, useEffect, useRef } from "react";
import styles from "./HeroBanner.module.scss";
import { FaPhone } from "react-icons/fa";
import img1 from "./working_photo.JPG";
import img3 from "./roofing_done.JPG";
import img4 from "./structural.jpg";
import transparent from './mobile1.jpg'
import team from '../../assets/images/team_india.jpg'
import kitchen from "./kitchen.jpg"
import kitchen2 from "./kitchen2.jpg"
import brickWall from "./wall.jpg"


const images = [brickWall,kitchen,kitchen2,transparent,team,img3,img1,img4];

const HeroBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleScrollToForm = () => {
    const formElement = document.getElementById("form-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("❌ Form element not found!");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2200); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className={styles.heroBanner}>
      <div className={styles.heroText}>
        <h1>YOU NAME IT<br /> WE BUILD IT!</h1>
        <p>
        At <span className={styles.bhaktaCredit}>Bhakta Builders Ltd</span>, we combine decades of European construction expertise with London’s building scene. Since our beginnings in the mid-90s and relaunch in 2007, we’ve built a reputation for quality craftsmanship, specializing in refurbishments and extensions with a focus on reliability and client satisfaction.
        </p>
        <div className={styles.buttonsDiv}>
          
          <button className={styles.button} onClick={handleScrollToForm}>Free consultation </button>
          <button className={styles.buttonTransparent} onClick={() => window.location.href = `tel:${"+44 7729 167039"}`}  type="button"> +44 7729 167039</button>
        </div>
      </div>

      <div className={styles.imageContainer}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`${styles.heroImage} ${
              currentImageIndex === index ? styles.active : ""
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroBanner;