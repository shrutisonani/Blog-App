import Button from "../button/button";
import styles from "./card.module.sass";

const Card = () => (
  <div className={styles.card_wrap}>
    <div className={styles.card}>
      {/* blog image wrapper */}
      <div className={styles.card_imageWrap}>
        <div className={styles.card_image}>
          <img src="/blog-thumbnail.png" alt="thumbnail" />
        </div>
      </div>
      {/* blog content */}
      <div className={styles.card_content}>
        <div className={`${styles.card_lable} h6 mb-10 c-orange`}>
          Product Review
        </div>
        <div className={`${styles.card_title} h3 mb-20`}>
          How to add featured images in wordpress
        </div>
        <p className={`${styles.card_summary} fw-600`}>
          Framer Motion is a versatile animation library for React, known for
          its simplicity and powerful animations.
        </p>
        <Button href="#">Read More</Button>
      </div>
    </div>
  </div>
);

export default Card;
