
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
      <h1 className={styles.quintessential}>Aiden O'Brien</h1>
      <div>
          <Image
                src="/aiden_obrien.png"
                alt="aiden obrien"
                width={272}
                height={500}
                priority
            />
            <p>This man is a very precise worker and it shows in his products. But he's not only a seller on Handcrafted Haven but the site 
                manager as well. He created the rug and the crib.</p>
            <div className={styles.orderSum}>
                <Image
                src="/rug.webp"
                alt="Antique Rug"
                width={75}
                height={75}
                priority
            />
                <Image
                    src="/crib.webp"
                    alt="Wooden Crib"
                    width={75}
                    height={75}
                    priority
                />
            </div>
      </div>
    </main>
  );
}