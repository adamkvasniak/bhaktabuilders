import React from "react";
import styles from "./IconButton.module.scss";
import { FaArrowRight } from "react-icons/fa"; // Example icon from react-icons

const IconButton = ({ label, onClick, icon: Icon, to, phoneNumber }) => {
  const handleClick = () => {
    if (to) {
      const targetElement = document.getElementById(to);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }

    if (onClick) {
      onClick();
    }
  };

  return phoneNumber ? (
    <a href={`tel:${phoneNumber}`} className={styles.iconButton}>
      {Icon && <Icon className={styles.icon} />}
      <span>{label}</span>
    </a>
  ) : (
    <a href={to} className={styles.iconButton}>
      {Icon && <Icon className={styles.icon} />}
      <span>{label}</span>
    </a>
  );
};

export default IconButton;
