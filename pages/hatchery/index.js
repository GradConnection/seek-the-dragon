import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Home.module.css'
import Hatching from '../../components/hatchery/hatching';

export default function Hatchery() {

  const [step, setStep] = useState(0);

  console.log("hatchery step", step)

  return (
    <div className={styles.container}>
      <Head>
        <title>Hatchery</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to SEEK The Dragon
        </h1>

        <p className={styles.description}>
          Click on the egg{' '}
        </p>

        <div className={styles.grid}>
          {step <= 3 && <Hatching step={step} setStep={setStep} />}
          {step > 3 && (
            <Link href="/hatchery/welcome/">Continue</Link>
          )}
        </div>
      </main>

    </div>
  )
}