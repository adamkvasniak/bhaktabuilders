import React from "react";
import styles from "./ProjectsWall.module.scss";



const categories = {
  Bathroom: ["bathroom.jpg", "bathroom2.jpg", "bathroom3.jpg", "bathroom4.jpg", "bathroom5.jpg", "bathroom6.jpg"],
  "Brick Work": ["brick_fence.jpg", "brick_wall.jpg", "brick_house.jpg", "brick_house2.jpg"],
  Exteriors: ["garden_house.jpg"],
  Interiors: ["green_room1.jpg", "green_room2.jpg", "interior1.jpg", "interior2.jpg", "interior3.jpg"],
  Kitchen: ["kitchen1.jpg", "kitchen2.jpg", "kitchen3.jpg", "kitchen4.jpg", "kitchen5.jpg", "kitchen6.jpg", "kitchen7.jpg"],
  Roof: ["roof1.jpg", "roof2.jpg", "roof3.jpg", "roof4.jpg", "roof5.JPG"]
};

const ProjectsWall = () => {
  return (
    <div className={styles.gallery}>
      {Object.entries(categories).map(([category, images]) => (
        <div key={category} className={styles.category}>
          <h1 className={styles.categoryTitle}>{category}</h1>
          <div className={styles.imageGrid}>
            {images.map((imgName, index) => (
            <img
            key={index}
            src={`/projects/${imgName}`} // Loads images dynamically from public/
            alt={category}
            className={styles.image}
            loading="lazy" // Improves performance
          />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsWall;