import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./button.module.sass";

const button = (props) => {
  if (props.href) {
    return (
      <Link className={styles.button} href={props.href}>
        {props.children}
        <FontAwesomeIcon icon={faArrowRight} className={styles.button_icon} />
      </Link>
    );
  }

  return <button className={styles.button}>{props.children}</button>;
};

export default button;
