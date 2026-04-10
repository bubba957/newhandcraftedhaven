
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
        <span className={styles.linkDivider}>|</span>
        <Link href="/seller-profiles">
          Seller Profiles
        </Link>
      </div>
      <h1 className={styles.quintessential}>Frank Romano</h1>
      <div>
          <Image
                src="/frank-romano.png"
                alt="frank romano"
                width={500}
                height={500}
                priority
            />
            <p>Frank is someone who likes creating anything that has to do with the outdoors. His motto is, "If you want it, I can build it." 
                That's just the type of man he is. He created the bee traps.</p>
            <Image
                src="/beeTraps.webp"
                alt="Bee Traps"
                width={75}
                height={75}
                priority
            />
      </div>
    </main>
  );
}