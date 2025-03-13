import React from 'react';
import styles from './ServicesGrid.module.scss';
import plumbing from './plumbing.jpeg'
import plastering from './Plastering.jpg'
import decorating from './decorating.jpg'
import electrical from './electrical.jpeg'
import extension from './extension.jpeg'
import carpentry from './carpentry.jpg'
import renovation from './renovation.png'
import loft from './loft.jpg'
import structural from './structural.jpg'
import flooring from './flooring.jpg'
import tilling from './tiling.jpeg'
import basement from './basement.jpeg'
import bathroom from './bathroom1.jpg'
import { Link } from "react-router-dom";

const services = [
  { id: 1, title: "Extension", description: "Professional house cleaning services.", img: extension },
  { id: 2, title: "Loft conv.", description: "Interior and exterior painting.", img: loft  },
  { id: 3, title: "Plastering", description: "Expert plumbing solutions.", img: plastering  },
  { id: 4, title: "Electrical", description: "Certified electrical repair.", img: electrical },
  { id: 5, title: "Structural", description: "Beautiful garden designs.", img: structural },
  { id: 6, title: "Carpentry", description: "Custom woodworking services.", img: carpentry },
  { id: 7, title: "Renovation", description: "Heating and cooling systems.", img: renovation },
  { id: 8, title: "Flooring", description: "Reliable roofing repair.", img: flooring },
  { id: 9, title: "Moving", description: "Stress-free moving assistance.", img: plastering  },
  { id: 10, title: "Basements", description: "Safe pest control services.", img: basement },
  { id: 11, title: "Bathrooms", description: "Modern home security systems.", img: bathroom  },
  { id: 12, title: "Renovation", description: "Home renovation experts.", img:plumbing },
  { id: 13, title: "Tilling", description: "Expert personal tutoring.", img:tilling},
  { id: 15, title: "Decorating", description: "Reliable tech support.", img: decorating  },
];

const ServicesGrid = () => {
  return (
    <div id='services' className={styles.serviceGridDiv}>
      <div className={styles.textDiv}>
        <h2 className={styles.subHeader}>Our services</h2>
        <h1>We do everything</h1>
        <p>Explore our projects and see how we bring ideas to life with innovative solutions.</p>
             <Link to="/projects" className={styles.button}>
               View projects
             </Link>
      </div>
      <div className={styles.gridContainer}>
      {services.map(service => (
        <div key={service.id} className={styles.serviceCard}>
          <img src={service.img} alt={service.title} className={styles.serviceImage} />
            <h3 className={styles.serviceTitle}>{service.title}</h3>
        </div>
      ))}
      </div>
    </div>
  ); 
};

export default ServicesGrid;
