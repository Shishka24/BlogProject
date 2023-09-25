import Image from "next/image";
import styles from "./comments.module.css";
import Link from "next/link";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="write a comment..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.avatar}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Vlad Sischin</span>
              <span className={styles.date}> 24.09.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            One of these craziest experiences took place when I was riding from
            Cuzco to Lima in Peru. Now, if you’ve ever ridden this windy bus
            leg, you know it’s almost impossible not at least feel a little ill.
            Honestly...
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.avatar}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Vlad Sischin</span>
              <span className={styles.date}> 24.09.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            One of these craziest experiences took place when I was riding from
            Cuzco to Lima in Peru. Now, if you’ve ever ridden this windy bus
            leg, you know it’s almost impossible not at least feel a little ill.
            Honestly...
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.avatar}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Vlad Sischin</span>
              <span className={styles.date}> 24.09.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            One of these craziest experiences took place when I was riding from
            Cuzco to Lima in Peru. Now, if you’ve ever ridden this windy bus
            leg, you know it’s almost impossible not at least feel a little ill.
            Honestly...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
