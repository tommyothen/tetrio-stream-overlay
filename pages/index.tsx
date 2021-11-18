import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tetrio Stream Overlay</title>
        <meta name="description" content="Display your Tetrio rank dynamically for your stream." />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome!
        </h1>

        <p className={styles.description}>
          Get started by entering your Tetrio username below.
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/dasushiasian"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fan made with ♡ by Sushi{' '}
        </a>
        <a
          href="https://osk.sh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Game, Rank Icons and Fonts by{' '}
          <Image src="/res/images/osk.svg" alt="osk Logo" width={45} height={14} />
        </a>
      </footer>
    </div>
  )
}

export default Home
