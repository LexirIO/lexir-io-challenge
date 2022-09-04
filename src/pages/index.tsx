// import Head from "next/head";
// import styles from "../styles/Home.module.css";

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Lexir Frontend Assessment!</title>
//         <meta name="description" content="Lexir Frontend Assessment!" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Lexir Frontend Assessment!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{" "}
//           <code className={styles.code}>pages/index.tsx</code>
//         </p>
//       </main>
//     </div>
//   );
// }

import Head from "next/head";
import Layout from "@components/Layout";

export default function Home() {
  return (
    <Layout
      head={
        <Head>
          <title>Lexir Frontend Assessment!</title>
          <meta name="description" content="Lexir Frontend Assessment!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      }
    >
      <div>Hello World</div>
    </Layout>
  );
}
