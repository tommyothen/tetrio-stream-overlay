import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { UserSearch } from "../components/UserSearch";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Tetrio Stream Overlay</title>
        <meta name="description" content="Display your Tetrio rank dynamically for your stream." />
      </Head>

      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>Welcome!</h1>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p className={styles.description}>
              Get started by entering your TETR.IO username below.
            </p>
            <UserSearch router={router} />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/tommyothen/tetrio-stream-overlay"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fan made with ♡ by Sushi{" "}
        </a>
        <a href="https://osk.sh/" target="_blank" rel="noopener noreferrer">
          Game, Rank Icons and Fonts by{" "}
          <Image src="/res/images/osk.svg" alt="osk Logo" width={45} height={14} />
        </a>
        <p>Not affiliated with TETR.IO or osk.</p>
      </footer>
    </div>
  );
};

export default Home;
