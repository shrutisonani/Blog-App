import Button from "../button/button";
import styles from "./card.module.sass";
import ConditionalRender from "../conditional-render";

const Card = (props) => (
  <div className={styles.card_wrap}>
    <div className={styles.card}>
      {/* blog image wrapper */}
      <div className={styles.card_imageWrap}>
        <div className={styles.card_image}>
          <ConditionalRender condition={props.thumbnail}>
            <img src={props.thumbnail} alt="thumbnail" />
          </ConditionalRender>
        </div>
      </div>
      {/* blog content */}
      <div className={styles.card_content}>
        <ConditionalRender condition={props.category}>
          <div className={`${styles.card_lable} h6 mb-10 c-orange`}>
            {props.category}
          </div>
        </ConditionalRender>

        <ConditionalRender condition={props.title}>
          <div className={`${styles.card_title} h3 mb-20`}>{props.title}</div>
        </ConditionalRender>

        <ConditionalRender condition={props.summary}>
          <p className={`${styles.card_summary} fw-600`}>{props.summary}</p>
        </ConditionalRender>

        <ConditionalRender condition={props.slug}>
          <Button href={props.slug}>Read More</Button>
        </ConditionalRender>
      </div>
    </div>
  </div>
);

export default Card;
