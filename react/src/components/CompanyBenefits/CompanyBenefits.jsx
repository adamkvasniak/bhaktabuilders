import React from 'react';
import styles from './CompanyBenefits.module.scss';

const benefits = [
  { text: "Expertise and Experience", icon: "🎓" }, // Graduation cap (expertise)
  { text: "Skilled Subcontractor Team", icon: "🤝" }, // Handshake (teamwork)
  { text: "Comprehensive Services", icon: "🛠" }, // Tools (services)
  { text: "Exceptional Quality", icon: "🏆" }, // Trophy (quality)
  { text: "Proven Track Record", icon: "📈" }, // Chart (track record)
  { text: "Client Trust and Satisfaction", icon: "❤️" }, // Heart (trust)
  { text: "Accreditations and Certifications", icon: "📜" }, // Certificate (certifications)
  { text: "Attention to Detail", icon: "🔍" }, // Magnifying glass (detail)
  { text: "Tailored Solutions", icon: "🧩" }, // Puzzle piece (custom solutions)
  { text: "Reliability and Consistency", icon: "⏳" }, // Hourglass (reliability)
];

const CompanyBenefits = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Why Choose Us?</h2>
      <ul className={styles.benefitsList}>
        {benefits.map((benefit, index) => (
          <li key={index} className={styles.benefitItem}>
            <span className={styles.icon}>{benefit.icon}</span> {benefit.text}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CompanyBenefits;
