import CardList from "./components/CardList/CardList";
import CategoryList from "./components/CategoryList/CategoryList";
import Menu from "./components/Menu/Menu";
import Featured from "./components/featured/Featured";
import styles from "./homepage.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}