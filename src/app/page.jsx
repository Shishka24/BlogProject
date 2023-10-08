import CardList from "./components/CardList/CardList";
import CategoryList from "./components/CategoryList/CategoryList";
import Menu from "./components/Menu/Menu";
import Featured from "./components/featured/Featured";
import Footer from "./components/footer/Footer";
import styles from "./homepage.module.css";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  );
}
