import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
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
      <h1 className={styles.quintessential}>Handcrafted Haven</h1>
      <Image className={styles.picture}
        src="/single-handmade-pot.avif"
        alt="Next.js logo"
        width={250}
        height={250}
        priority
      />
      <p>Come one come all to our fantabulous site where you can
        not only look at but also buy the wonderfully handcrafted 
        item of your choice. That's right. And if you have any old
        junk that is just cluttering up the insides of your place
        then one day YOU may see those items here on this magnificent
        website where they'll be sold according to the price YOU want.</p>

      <p className={styles.underlying}>(These items can only be sold after they have 
        been created. Also a portion of the profits will be going to us
        after everything is said and done.)</p>

      <div className={styles.link}>
        <Link href="/single-item">
          Today's Item
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
    </main>
  );
}

// import Image from "next/image";
// import styles from "./page.module.css";
// import { Quintessential, Oswald, Fascinate } from "next/font/google";

// const quintessential = Quintessential({
//   weight: ['400'],
//   subsets: ['latin'],
//   display: 'swap',
// })

// const oswald = Oswald({
//   weight: ['400'],
//   subsets: ['latin'],
//   display: 'swap',
// });

// const fascinate = Fascinate({
//   weight: ['400'],
//   subsets: ['latin'],
//   display: 'swap',
// });

// export default function Home() {
//   return (
//     <main>
//       <h1 className={styles.quintessential}>Handcrafted Haven</h1>
//       <Image className={styles.picture}
//         src="/single-handmade-pot.avif"
//         alt="Next.js logo"
//         width={250}
//         height={250}
//         priority
//       />
//       <p>Come one come all to our fantabulous site where you can
//         not only look at but also buy the wonderfully handcrafted 
//         item of your choice. That's right. And if you have any old
//         junk that is just cluttering up the insides of your place
//         then one day YOU may see those items here on this magnificent
//         website where they'll be sold according to the price YOU want.</p>

//         <p className={styles.underlying}>(These items can only be sold after they have 
//         been created. Also a portion of the profits will be going to us
//         after everythings said and done.)</p>
//     </main>
//   );
// }

// const fascinate = Fascinate({
//   weight: ['400'],
//   subsets: ['latin'],
//   display: 'swap',
// });

// export default function Home() {
//   return (
//     <main>
//       <h1 className={styles.quintessential}>Handcrafted Haven</h1>
//       <Image className={styles.picture}
//         src="/single-handmade-pot.avif"
//         alt="Next.js logo"
//         width={250}
//         height={250}
//         priority
//       />
//       <p>Come one come all to our fantabulous site where you can
//         not only look at but also buy the wonderfully handcrafted 
//         item of your choice. That's right. And if you have any old
//         junk that is just cluttering up the insides of your place
//         then one day YOU may see those items here on this magnificent
//         website where they'll be sold according to the price YOU want.</p>

//         <p className={styles.underlying}>(These items can only be sold after they have 
//         been created. Also a portion of the profits will be going to us
//         after everythings said and done.)</p>
//     </main>
//   );
// }

