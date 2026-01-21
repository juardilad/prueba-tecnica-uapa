import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.mainTitle}>Contact Us</h2>
          <p className={styles.subtitle}>
            Most calendars are designed for teams. <br />
            <span className={styles.hideMobile}>Slate is designed for freelancers</span>
          </p>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Contact Us</h3>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.inputGroup}>
                <input type="text" placeholder="Your Name" className={styles.input} />
              </div>
              <div className={styles.inputGroup}>
                <input type="email" placeholder="Your Email" className={styles.input} />
              </div>
              <div className={styles.inputGroup}>
                <textarea placeholder="Your Message" className={styles.textarea}></textarea>
              </div>
              <button type="submit" className={styles.sendButton}>Send</button>
            </form>
          </div>

          <div className={styles.infoColumn}>
            <div className={styles.socialIcons}>
              <a href="#twitter"><img src="/twitter_blue.png" alt="Twitter" /></a>
              <a href="#facebook"><img src="/facebook_blue.png" alt="Facebook" /></a>
              <a href="#linkedin"><img src="/linkedin_blue.png" alt="LinkedIn" /></a>
            </div>

            <div className={styles.contactDetails}>
              <div className={styles.infoItem}>
                <img src="/map_blue.png" alt="Address" className={styles.infoIcon} />
                <p>6386 Spring St undefined Anchorage, <br /> Georgia 12473 United States</p>
              </div>
              <div className={styles.infoItem}>
                <img src="/phone_blue.png" alt="Phone" className={styles.infoIcon} />
                <p>(843) 555-0130</p>
              </div>
              <div className={styles.infoItem}>
                <img src="/mail_blue.png" alt="Email" className={styles.infoIcon} />
                <p>willie.jennings@example.com</p>
              </div>
            </div>

            <div className={styles.mapWrapper}>
              <img src="/map_image.png" alt="Location Map" className={styles.mapImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;