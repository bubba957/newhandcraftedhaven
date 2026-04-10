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
      </div>
      <h1 className={styles.quintessential}>Shopping Cart</h1>
      <div className={styles.shoppingCart}>
        <div>
          <h2>Pay With</h2>
          <br></br>
          <label className={styles.payment}>
            <input type="radio" name="radio"></input>
            Paypal
          </label>
          <br></br><br></br>
          <label className={styles.payment}>
            <input type="radio" name="radio"></input>
            Venmo
          </label>
          <br></br><br></br>
          <label className={styles.payment}>
            <input type="radio" name="radio"></input>
            Visa XXXX
          </label>
          <br></br><br></br>
          <label className={styles.payment}>
            <input type="radio" name="radio"></input>
            Add a new card
          </label>
        </div>
        <div className={styles.box}>
          <h2>Order Summary</h2>
          <div className={styles.orderSum}>
            <p>Items</p>
            <p>$3200</p>
            <p>Shipping</p>
            <p>$10 (Flat rate)</p>
            <p>Tax</p>
            <p>$5</p>
          </div>
        </div>
      </div>
      <div className={styles.whitespace}></div>
      <hr></hr>
      <div className={styles.whitespace}>
        <h2>Ship To</h2>
        <p>Cody Smith</p>
        <p>1000 Chestnut Blvd</p>
        <p>Brooklyn, NY 12345</p>
        <p>(XXX)XXX-XXXX</p>
      </div>
    </main>
  );
}