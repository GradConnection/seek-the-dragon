import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from 'next/image';
import Link from "next/link";
import Dragon from '../components/shared/Dragon';
import emptyStar from '../public/star_empty.png'
import filledStar from '../public/star_filled.png'
import animatedStar from '../public/star_animated.gif'

function Profile({level = 1, secretName = "The Future Great Architect", name = "Dragooooo"}) {
  const [animateStar, setAnimateStar] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateStar(false)
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p>Hey, {name}</p>
        <Dragon />
        <p className={'text-lg font-500'}>Level {level}</p>
        <div className="flex justify-center m-3 space-y-6 space-x-4">

          <Image className="p-3" width={40} height={40} src={animateStar ? animatedStar : filledStar} alt={animatedStar}/> 
          <Image className="p-3" width={40} height={40} src={animateStar ? animatedStar : filledStar} alt={animatedStar}/> 
 
        <Image className="p-3" width={40} height={40} src={emptyStar} alt={emptyStar}/>
        <Image className="p-3" width={40} height={40} src={emptyStar} alt={emptyStar}/>
        <Image className="p-3" width={40} height={40} src={emptyStar} alt={emptyStar}/>
       </div>
        <p>{secretName}</p>

      </main>
    </div>
  );
}

export default Profile;
