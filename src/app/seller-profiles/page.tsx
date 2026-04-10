
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
        <Link href="/products">
          Our Products
        </Link>
        <span className={styles.linkDivider}>|</span>
        <Link href="/shopping-cart">
          Shopping Cart
        </Link>
      </div>
      <h1 className={styles.quintessential}>Seller Profiles</h1>
      <div className={styles.profiles}>
        <div>
          <Link href="/frank-romano">
          <Image
                src="/frank-romano.png"
                alt="frank romano"
                width={250}
                height={250}
                priority
            />
            </Link>
          <h2>Frank Romano</h2>
        </div>
        <div>
          <Link href="/aiden-obrian">
          <Image
                src="/aiden_obrien.png"
                alt="aiden obrian"
                width={136}
                height={250}
                priority
            />
            </Link>
          <h2>Aiden O'Brian</h2>
        </div>
        <div>
          <Link href="/adaora-chukwu">
          <Image
                src="/adaora-chukwu.png"
                alt="adaora chuckwu"
                width={250}
                height={250}
                priority
            />
            </Link>
            <h2>Adaora Chukwu</h2>
        </div>
      </div>
    </main>
  );
}