import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import { Quintessential, Oswald, Fascinate } from "next/font/google";

const quintessential = Quintessential({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

const oswald = Oswald({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

const fascinate = Fascinate({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <main>
      <div className={styles.link}>
        <Link href="/">
        Home
        </Link>
        <span className={styles.linkDivider}>|</span>
        <Link href="/single-item">
            Todays Item
        </Link>
      </div>
      <h1 className={styles.quintessential}>Products</h1>
      <Link href="/" className={styles.noDecoration}>
        <div className={styles.productBox}>
            <p>Semi Antique Pictorial Rug</p>
            <p>Jewel Rugs Collection</p>
            <p>Price: $15750</p>
        </div>
      </Link>
      <Link href="/" className={styles.noDecoration}>
        <div className={styles.productBox}>
            <p>Antique Wooden Baby Crib</p>
            <p>Belltowerhouse</p>
            <p>Price: $95</p>
        </div>
      </Link>
      <Link href="/" className={styles.noDecoration}>
        <div className={styles.productBox}>
            <p>Set Of 2 Carpenter Bee Traps</p>
            <p>ledi_6595</p>
            <p>Price: $28</p>
        </div>
      </Link>
    </main>
  );
}