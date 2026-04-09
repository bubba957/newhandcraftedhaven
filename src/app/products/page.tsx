
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
        <span className={styles.linkDivider}>|</span>
        <Link href="/shopping-cart">
          Shopping Cart
        </Link>
      </div>
      <h1 className={styles.quintessential}>Products</h1>
      <Link href="/" className={styles.noDecoration}>
        <div className={styles.productBox}>
            <Image
                src="/rug.webp"
                alt="Antique Rug"
                width={135}
                height={135}
                priority
            />
            <div>
                <p>Semi Antique Pictorial Rug</p>
                <p>Jewel Rugs Collection</p>
                <p>Price: $15750</p>
            </div>
        </div>
      </Link>
      <Link href="/" className={styles.noDecoration}>
        <div className={styles.productBox}>
            <Image
                src="/crib.webp"
                alt="Wooden Crib"
                width={135}
                height={135}
                priority
            />
            <div>
                <p>Antique Wooden Baby Crib</p>
                <p>Belltowerhouse</p>
                <p>Price: $95</p>
            </div>
        </div>
      </Link>
      <Link href="/" className={styles.noDecoration}>
        <div className={styles.productBox}>
            <Image
                src="/beeTraps.webp"
                alt="Bee Traps"
                width={135}
                height={135}
                priority
            />
            <div>
                <p>Set Of 2 Carpenter Bee Traps</p>
                <p>ledi_6595</p>
                <p>Price: $28</p>
            </div>
        </div>
      </Link>
    </main>
  );
}