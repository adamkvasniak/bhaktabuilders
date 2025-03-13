import styles from "./CTAtoAboutUs.module.scss";
import { Link } from "react-router-dom";
import teamImage from "./gallery_large_bhakta_team.jpg";

const CTAtoAboutUs = () => {
  return (
    <section className={styles.heroDiv}>
      <div className={styles.textDiv}>
        <h2>Since 1996</h2>
        <h1>Discover Our Story</h1>
        <p>Learn how Bhakta Builders started and what drives our passion.</p>
        <Link to="/about" className={styles.ctaButton}>
          Read Our Story
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <img src={teamImage} alt="Our Team" className={styles.teamImage} />
      </div>
    </section>
  );
};

export default CTAtoAboutUs;