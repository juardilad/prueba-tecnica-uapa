import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const pages = ["Home", "Product", "Pricing", "About", "Contact"];
  const tomothy = ["Eleanor Edwards", "Ted Robertson", "Annette Russell", "Jennie Mckinney", "Gloria Richards"];
  const janeBlack = ["Philip Jones", "Product", "Colleen Russell", "Marvin Hawkins", "Bruce Simmmons"];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.column}>
          <h3 className={styles.title}>Pages</h3>
          <ul className={styles.list}>
            {pages.map((item, index) => (
              <li key={index}><a href={`#${item.toLowerCase()}`}>{item}</a></li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.title}>Tomothy</h3>
          <ul className={styles.list}>
            {tomothy.map((item, index) => (
              <li key={index}><a href="#!">{item}</a></li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.title}>Jane Black</h3>
          <ul className={styles.list}>
            {janeBlack.map((item, index) => (
              <li key={index}><a href="#!">{item}</a></li>
            ))}
          </ul>
        </div>

        <div className={styles.contactColumn}>
          <div className={styles.contactItem}>
            <img src="/map_white.png" alt="Location" className={styles.icon} />
            <span>7480 Mockingbird Hill undefined</span>
          </div>
          <div className={styles.contactItem}>
            <img src="/phone_white.png" alt="Phone" className={styles.icon} />
            <span>(239) 555-0108</span>
          </div>
          
          <div className={styles.socialRow}>
            <a href="#twitter"><img src="/twitter_white.png" alt="Twitter" /></a>
            <a href="#facebook"><img src="/facebook_white.png" alt="Facebook" /></a>
            <a href="#linkedin"><img src="/linkedin_white.png" alt="LinkedIn" /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;