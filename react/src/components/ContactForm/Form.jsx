import React,{useState} from "react";
import styles from "./ContactForm.module.scss";

const Form = () =>   {
  const [formData, setFormData] = useState({ name: "", email: "", message: "", honeypot: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Honeypot Check - If this field is filled, it's a bot
    if (formData.honeypot) {
      console.warn("🛑 Spam bot detected! Form submission blocked.");
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert("✅ Email sent successfully!");
      } else {
        alert("⚠️ Failed to send email.");
      }
    } catch (error) {
      alert("❌ Error sending email.");
    }
  };

  return (
    <div className={styles.formContainer} >
      <form className={styles.form} onSubmit={handleSubmit} id="form-section">
        <h2 className={styles.subHeader}>Get in touch</h2>
        <h2 className={styles.header}>Contact Us</h2>
        <p className={styles.formDescription}>
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            className={styles.input}
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Describe your project: location, size, budget, and specific requirements."
            className={styles.textarea}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* ✅ Hidden Honeypot Field to Catch Bots */}
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          style={{ display: "none" }} // ✅ Hidden from real users
          tabIndex="-1"
          autoComplete="off"
        />

        
          <button className={styles.button} type="submit">Submit</button>
       
      </form>
    </div>
  );
};

export default Form;