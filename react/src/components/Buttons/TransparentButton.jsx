import React from "react";
import styles from "./IconButton.module.scss";
import { FaArrowRight } from "react-icons/fa"; // Example icon from react-icons

const TransparentButton = ({ label, onClick, icon: Icon, phoneNumber }) => {
  return phoneNumber ? (
    <a 
      href={`tel:${phoneNumber}`} 
      className={`${styles.iconButton} ${styles.transparentButton}`}
    >
      {Icon && <Icon className={styles.icon} />}
      <span>{label}</span>
    </a>
  ) : (
    <button 
      className={`${styles.iconButton} ${styles.transparentButton}`} 
      onClick={onClick}
    >
      {Icon && <Icon className={styles.icon} />}
      <span>{label}</span>
    </button>
  );
};

export default TransparentButton;
