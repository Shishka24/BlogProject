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
          Honestly, if you’re only a bit queasy and not puking out the window,
          you’re lucky. Somehow I actually didn’t feel that unwell, though at
          one point I did need to use the restroom. Luckily, this bus had a
          toilet in the back. Or maybe that was unlucky, because as I walked
          down the aisle, a man stood in the center, blocking me. “Perdóneme?
          Perdóneme?! Perdóneme??!!” I said, asking to be excused multiple
          times. He didn’t budge. Instead, he stared at me with vacant eyes,
          almost like his soul had left his body. As I stood there trying to
          pinpoint what was wrong with this man — and also how I could get him
          to move before I peed my pants — he proceeded to projectile vomit on
          the both of us. On the plus side, he bent his head down at he did it
          so it mainly got on my shoes and pants and not my face…Yay? This is
          one of the many funny crazy stories I have from this trip.
        </p>
        <Link href="/" className={styles.link}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Card;
