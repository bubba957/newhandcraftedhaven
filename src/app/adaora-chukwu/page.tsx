
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
      <h1 className={styles.quintessential}>Adaora Chukwu</h1>
      <div>
          <Image
              src="/adaora-chukwu.png"
              alt="adaora chuckwu"
              width={500}
              height={500}
              priority
          />
            <p>Adaora was born and raised over in Nigeria. And so with that being said she has brought over some handcrafted Nigerian artifacts
              to share with the people of America. She made the mug.
            </p>
            <Image
                src="/mug.webp"
                alt="A Handcrafted Mug"
                width={75}
                height={75}
                priority
            />
      </div>
    </main>
  );
}