import { useState, useEffect } from "react";
import styles from './AboutSection.module.scss';


const AboutSection = () => {
    const [overflowStyle, setOverflowStyle] = useState("auto");

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY === 0) {
          setOverflowStyle("auto");
        } else {
          setOverflowStyle("hidden");
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <section className={styles.root} style={{ overflow: overflowStyle}}>
       
    {/* 1 */}
        <div className={`${styles.row} ${styles.paralaxDiv1}`}>
            <div className={styles.textContainer}>
                <h2 className={styles.subHeader}>From Humble Beginnings to Industry Leaders</h2>
                <h1 className={styles.header}>Building Excellence Since 1996</h1>
            </div>
            <div className={styles.imageContainer}>
                <img className={styles.image}  />
            </div>
        </div>

    {/* 1 */}
        <div className={`${styles.row} ${styles.paralaxDiv1}`}>
            <div className={styles.textContainer}>
                <p>
                Since 1996, we have been building trust and excellence in the UK construction industry. Originally known as <span class={styles.bhaktaCredit}> Decorating Bhakta</span>, 
                we brought our expertise from Slovakia and the Czech Republic to London,
                blending tradition with innovation. In <span class={styles.bhaktaCredit}> 2007</span>, we rebranded as <span class={styles.bhaktaCredit}> Bhakta Builders Ltd</span>, expanding our services and taking on larger projects.
                With a skilled team and a dedication to high standards, we have grown into a company known for quality craftsmanship, reliability, and customer satisfaction.
                </p>
            </div>
            <div className={styles.imageContainer}>
                <img className={styles.image}  />
            </div>
        </div>
       
   {/* 2 */}
        <div className={`${styles.row} ${styles.paralaxDiv2}`}>
            <div className={styles.textContainer}>
                <h1 className={styles.header}>today</h1>                
            </div>
        </div>

   {/* 2 */}
        <div className={`${styles.row} ${styles.paralaxDiv2}`}>
            <div className={styles.textContainer}>
                <p>          
                Today, we offer a full range of construction services, including extensions, structural work, bathrooms, carpentry, tiling, and roofing. 
                Our commitment to excellence has earned us great reviews on Google and Nextdoor,
                with clients appreciating our professionalism and attention to detail. We take pride in turning visions into reality, ensuring every project meets the highest standards.
                </p>
            </div>  
        </div>
    
         {/* 3 */}
         <div className={`${styles.row} ${styles.paralaxDiv3}`}>
            <div className={styles.textContainer}>
                <h2 className={styles.subHeader}>2023</h2>
                <h1 className={styles.header}>India</h1>             
            </div>  
        </div>

         {/* 3 */}
         <div className={`${styles.row} ${styles.paralaxDiv3}`}>
            <div className={styles.textContainer}>
                <p>
                Beyond construction, we are dedicated to giving back through volunteer work in India. Our team actively participates in building temples, schools, and essential facilities,
                providing hands-on help to communities in need. We have contributed to tiling homes, laying concrete floors, and plumbing dozens of bathrooms,
                working alongside local laborers to create lasting change. Helping others is part of who we are, and we continue to support meaningful projects that make a real difference.
                </p>
            </div>  
     
        </div>
         {/* 5 */}
        <div className={`${styles.row} ${styles.paralaxDiv4}`}>
            <div className={styles.textContainer}></div> 
        </div>
         {/* 5 */}
         <div className={`${styles.row} ${styles.paralaxDiv5}`}>
            <div className={styles.textContainer}></div> 
        </div>
         {/* 6 */}
         <div className={`${styles.row} ${styles.paralaxDiv6}`}>
            <div className={styles.textContainer}></div> 
        </div>
    </section>
  )};
    

export default AboutSection;
