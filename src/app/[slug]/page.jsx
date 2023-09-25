import Image from "next/image";
import Menu from "../components/Menu/Menu";
import styles from "./singlePage.module.css";
import Comments from "../components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1>Title Title Title</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Vlad Sischin</span>
              <span className={styles.date}>24.09.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              One of these craziest experiences took place when I was riding
              from Cuzco to Lima in Peru. Now, if you’ve ever ridden this windy
              bus leg, you know it’s almost impossible not at least feel a
              little ill. Honestly...
            </p>
            <h2>One of these craziest experiences</h2>
            <p>
              One of these craziest experiences took place when I was riding
              from Cuzco to Lima in Peru. Now, if you’ve ever ridden this windy
              bus leg, you know it’s almost impossible not at least feel a
              little ill. Honestly...
            </p>
            <p>
              One of these craziest experiences took place when I was riding
              from Cuzco to Lima in Peru. Now, if you’ve ever ridden this windy
              bus leg, you know it’s almost impossible not at least feel a
              little ill. Honestly...
            </p>
            <p>
              One of these craziest experiences took place when I was riding
              from Cuzco to Lima in Peru. Now, if you’ve ever ridden this windy
              bus leg, you know it’s almost impossible not at least feel a
              little ill. Honestly...
            </p>
            <p>
              One of these craziest experiences took place when I was riding
              from Cuzco to Lima in Peru. Now, if you’ve ever ridden this windy
              bus leg, you know it’s almost impossible not at least feel a
              little ill. Honestly...
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
