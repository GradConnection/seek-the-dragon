import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/Home.module.css'

export default function Welcome({ name, setName }) {
  const onSaveName = () => {

  }
  return (
    <a href="https://nextjs.org/docs" className={styles.card}>
      <h2>Documentation &rarr;</h2>
      <p>Find in-depth information about Next.js features and API.</p>
    </a>
  )
}
