import React, { useEffect, useContext, useState } from "react";
import { ContextApp } from "../reducers";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Dragon from "../components/shared/Dragon";
import emptyStar from "../public/star_empty.png";
import filledStar from "../public/star_filled.png";
import animatedStar from "../public/star_animated.gif";

function Profile() {
  const { state } = useContext(ContextApp);
  let name = state.profile.name;
  let level = state.profile.level;
  let secretName = "The Future Great Architech";
  const [animateStar, setAnimateStar] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateStar(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className="text-2xl">Hey, {name}</h1>
        <Dragon width={700} height={700} />
        <p className={"text-lg font-500"}>Level {level}</p>
        <div className="flex justify-center m-4">
          <Image
            className="p-3"
            width={40}
            height={40}
            src={animateStar ? animatedStar : filledStar}
            alt={animatedStar}
          />
          <Image
            className="p-3"
            width={40}
            height={40}
            src={animateStar ? animatedStar : filledStar}
            alt={animatedStar}
          />
          <Image
            className="p-3"
            width={40}
            height={40}
            src={emptyStar}
            alt={emptyStar}
          />
          <Image
            className="p-3"
            width={40}
            height={40}
            src={emptyStar}
            alt={emptyStar}
          />
          <Image
            className="p-3"
            width={40}
            height={40}
            src={emptyStar}
            alt={emptyStar}
          />
        </div>
        <p>{secretName}</p>
      </main>
    </div>
  );
}

export default Profile;
