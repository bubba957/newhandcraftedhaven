// import Image from "next/image";
// import styles from "../page.module.css";
// import { Quintessential, Oswald, Fascinate } from "next/font/google";
// import { Card } from '../ui/cards'
// import ProductChart from '../ui/revinue-chart';
// import LatestInvoices from '../ui/latest-invoices';
// // import { fetchRevenue } from '../lib/data';
// import { fetchProduct } from '../lib/data';
// import { fetchLatestInvoices } from '../lib/data';

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
//       <div className={styles.link}>
//         <a href="/" className={styles.a}>
//         Home
//         </a>
//       </div>
//       <h1 className={styles.quintessential}>Today's Item</h1>
//       <div className={styles.singleItem}>
//         <Image
//           src="/mug.webp"
//           alt="Handmade Mug"
//           width={360}
//           height={360}
//           priority
//         />
//         <div>
//           <p><span className={styles.title}>Handmade Studio Pottery Mug Drip Glaze Earth Tone Artisan Cup</span>
//           <br></br><br></br><br></br>
//           <span className={styles.artist}>Scout and Shore</span>
//           <br></br><br></br><br></br>
//           <span className={styles.price}>Price: $32.00</span></p>
//           <br></br><br></br>
//           <button className={styles.btn}>Add To Cart</button>
//         </div>
//       </div>
//     </main>
//   );
// }

// below is my code for itempage, we will need to incoorate into this page.

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
      <h1 className={`${quintessential} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <ProductChart />
        {/* <LatestInvoices latestInvoices={latestInvoices} /> */}
      </div>
    </main>
  );
}