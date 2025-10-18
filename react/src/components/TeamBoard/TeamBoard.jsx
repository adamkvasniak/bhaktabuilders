import React from "react";
import styles from "./TeamBoard.module.scss";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import vladimir from "./vladimir.jpg"
import kiran from './kiran.jpg'
import maros from './maros.jpg'
import natasha from './natasha.png'
import george from './george.jpg'

const TeamBoard = () => {
  const teamMembers = [
    { id: 1, name: "George", role: "Co-Founder / CEO",bio:"Leads company strategy and operations with 15+ years of experience in driving business growth and innovation.", image: george, fb:"https://www.facebook.com/george.j.vanek"},
    { id: 2, name: "Vladimir", role: "Co-Founder / CEO", bio:"Directs technical strategy and architecture, specializing in scalable systems and cloud infrastructure.",image: vladimir },
    { id: 3, name: "Kiran", role: "IT",bio: "Leads digital marketing and IT resources.", image: kiran, fb: "https://www.facebook.com/kiran.vanek" },
    { id: 4, name: "Natasha", role: "Lead Engineer", bio:"Manages talent acquisition and development while fostering a strong workplace culture.", image: natasha },
    { id: 5, name: "Maros", role: "Interior Designer",bio:"Oversees business operations and strategic initiatives to drive organizational efficiency and growth.", image: maros },

  ];

  return (
    <section className={styles.teamBoard}>
      <h2 className={styles.subHeader}>Meet our team</h2>
      <h1 className={styles.header}>Who we are?</h1>
      <div className={styles.grid}>
        {teamMembers.map((member) => (
          <div className={styles.card} key={member.id}>
            <div className={styles.cardImageContainer}>
                <img
                src={member.image}
                alt={`${member.name}`}
                className={styles.image}
              />
            </div>
            
            <h3 className={styles.name}>{member.name}</h3>
           
            <p className={styles.role}>{member.role}</p> 
            <div className={styles.socialIcons}> 
              <a href={member.fb} target="_blank" rel="noopener noreferrer">
              <FaFacebook color="black" size="1.3rem" />
              </a>
</div>
             
           
            <p className={styles.bio}>{member.bio}</p>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamBoard;
