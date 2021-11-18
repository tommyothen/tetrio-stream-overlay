import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { UserSearch } from '../components/UserSearch'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const router = useRouter();

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

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <p className={styles.description}>
            Get started by entering your Tetr.io username below.
          </p>
          <UserSearch router={router}/>
        </div>
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
