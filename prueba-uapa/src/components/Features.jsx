import React from 'react';
import styles from '../styles/Features.module.css';

const Features = () => {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <h2 className={styles.title}>Features</h2>
          <p className={styles.subtitle}>
            Most calendars are designed for teams. 
            <span className={styles.hideMobile}><br />Slate is designed for freelancers</span>
          </p>
        </div>

        <div className={styles.featuresGrid}>
          <div className={styles.featureItem}>
            <div className={styles.iconWrapper}>
              <img src="/icon_1.png" alt="OpenType features" />
            </div>
            <h3 className={styles.featureTitle}>
              OpenType features <br /> Variable fonts
            </h3>
            <p className={styles.featureDescription}>
              Slate helps you see how many more days you need to work to reach your financial goal.
            </p>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.iconWrapper}>
              <img src="/icon_2.png" alt="Design with real data" />
            </div>
            <h3 className={styles.featureTitle}>
              Design with real data
            </h3>
            <p className={styles.featureDescription}>
              Slate helps you see how many more days you need to work to reach your financial goal.
            </p>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.iconWrapper}>
              <img src="/icon_3.png" alt="Fastest way to take action" />
            </div>
            <h3 className={styles.featureTitle}>
              Fastest way to <br /> take action
            </h3>
            <p className={styles.featureDescription}>
              Slate helps you see how many more days you need to work to reach your financial goal.
            </p>
          </div>
        </div>

        <div className={styles.videoContainer}>
          <picture>
            <source srcSet="/video_mobile.png" media="(max-width: 768px)" />
            <img 
              src="/video_prev.png" 
              alt="Video Preview" 
              className={styles.videoImage} 
            />
          </picture>
          <button className={styles.playButton}>
            <img src="/play_button.png" alt="Play Video" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Features;