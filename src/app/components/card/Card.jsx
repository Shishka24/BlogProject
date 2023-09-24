import Link from "next/link";
import styles from "./card.module.css";
import Image from "next/image";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>16.09.2023 - </span>
          <span className={styles.category}> Travel</span>
        </div>
        <Link href="/">
          <h1>Title Title Title</h1>
        </Link>
        <p className={styles.desc}>
          One of these craziest experiences took place when I was riding from
          Cuzco to Lima in Peru. Now, if you’ve ever ridden this windy bus leg,
          you know it’s almost impossible not at least feel a little ill.
          Honestly...
        </p>
        <Link href="/" className={styles.link}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Card;
