import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Intro from './Desktop/Intro'

const Home = () => {
  return (
    <div className=''>
      <Head>
        <title>Ayooluwa Aduwo Portfolio</title>
        <meta name="description" content="Portfolio Website Ayooluwa Aduwo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
        <Intro />
      </main>
{/* 
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}

export default Home
