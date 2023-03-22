import symbol from "/public/crowdysymbol.png";
import Image from "next/image";
import styles from "./style/Nav.module.css";
export default function Nav() {
  return (
    <nav className="fixed w-full h-8vh bg-ffffff SCoreDreamFont3 bg-ffffff z-50">
      {/* "flex flex-row text-2xl" */}
      <div className={styles.nav}>
        <a href="/" className={styles.symbols}>
          <Image src={symbol} alt="" className={styles.symbolImage} />
          <span className={styles.crowdy}>크라우디</span>
        </a>
        <a href="/" className={styles.homelink}>
          홈
        </a>
        <a href="/magazine" className={styles.magazinelink}>
          매거진
        </a>
        <a href="/inquire" className={styles.inquirelink}>
          문의하기
        </a>
      </div>
    </nav>
  );
}
