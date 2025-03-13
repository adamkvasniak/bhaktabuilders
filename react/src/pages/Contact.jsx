import React from "react";
import ContactCard from "../components/ContactCard/ContactCard";
import CompanyBenefits from "../components/CompanyBenefits/CompanyBenefits"
import styles from './Contact.module.scss'

const Contact= () => {
    return (
        <section className={styles.contactSection}>
            <ContactCard />
            <CompanyBenefits />
        </section>       
    )
}

export default Contact;