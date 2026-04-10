import Link from "next/link";
import styles from "../page.module.css";
import { Card } from '../ui/cards'
import ProductChart from '../ui/revinue-chart';
import LatestInvoices from '../ui/latest-invoices';
import {  } from '../../app/page';
import { fetchProduct } from '../lib/data';
import { quintessential } from '../ui/fonts';
import { fetchLatestInvoices } from '../lib/data';
 
export default async function Page() {
    const product = await fetchProduct();
    //   const latestInvoices = await fetchLatestInvoices();
  return (
    <main>
      <div className={styles.link}>
        <Link href="/" className={styles.a}>
          Home
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
      <h1 className={styles.quintessential}>Today's Item</h1>
      {/* <div className={styles.singleItem}> */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <ProductChart />
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
      </div>
      {/* </div> */}
      <a href="/bought">
        <button className={styles.btn}>Add To Cart</button>
      </a>
    </main>
  );
}
//  below is my code with yours:

// import Link from "next/link";
// import styles from "../page.module.css";
// import { Card } from '../ui/cards'
// import ProductChart from '../ui/revinue-chart';
// import LatestInvoices from '../ui/latest-invoices';
// import {  } from '../../app/page';
// import { fetchProduct } from '../lib/data';
// import { quintessential } from '../ui/fonts';
// import { fetchLatestInvoices } from '../lib/data';
// import { ProductItem } from "../ui/revinue-chart";

// export default async function Page() {
//     const product = await fetchProduct();
//     //   const latestInvoices = await fetchLatestInvoices();
//   return (
//     <main>
//       <div className={styles.link}>
//         <Link href="/" className={styles.a}>
//           Home
//         </Link>
//         <span className={styles.linkDivider}>|</span>
//         <Link href="/products">
//           Our Products
//         </Link>
//         <span className={styles.linkDivider}>|</span>
//         <Link href="/shopping-cart">
//           Shopping Cart
//         </Link>
//       </div>
//       <h1 className={styles.quintessential}>Today's Item</h1>
//       {/* <div className={styles.singleItem}> */}
//       <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
//         <ProductItem id={'d6e15727-9fe1-4961-8c5b-ea44a9bd81aa'} />
//         {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
//       </div>
//       {/* </div> */}
//       <a href="/bought">
//         <button className={styles.btn}>Add To Cart</button>
//       </a>
//     </main>
//   );
// }