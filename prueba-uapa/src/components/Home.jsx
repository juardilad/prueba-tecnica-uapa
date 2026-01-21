import React from 'react';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <div className={styles.overlay}>
        <header className={styles.navbar}>
          {/* Contenedor del Logo (ahora a la izquierda en móvil) */}
          <div className={styles.logoContainer}>
            <img 
              src="/figma_logo.png" 
              alt="Figma Land Logo" 
              className={styles.logo} 
            />
          </div>

          {/* Links: se ocultarán en móvil */}
          <nav className={styles.navLinks}>
            <a href="#home" className={styles.link}>Home</a>
            <a href="#product" className={styles.link}>Product</a>
            <a href="#pricing" className={styles.link}>Pricing</a>
            <a href="#about" className={styles.link}>About</a>
            <a href="#contact" className={styles.link}>Contact</a>
          </nav>

          {/* Iconos sociales: se ocultarán en móvil */}
          <div className={styles.socialIcons}>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img src="/twitter_white.png" alt="Twitter" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src="/facebook_white.png" alt="Facebook" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <img src="/linkedin_white.png" alt="LinkedIn" />
            </a>
          </div>

          <div className={styles.menuIcon}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </header>

        <main className={styles.heroContent}>
          <h1 className={styles.title}>
            The best products <br /> start with Figma
          </h1>
          <p className={styles.subtitle}>
            Most calendars are designed for teams.
          </p>
          <button className={styles.ctaButton}>
            Try For Free
          </button>
        </main>
      </div>
    </div>
  );
};

export default Home;