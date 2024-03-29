import { useState, useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import Dragon from "../../components/shared/Dragon";
import { ContextApp } from "../../reducers";

export default function Hatchery() {
  const [name, setName] = useState("Dragon");
  const { state, dispatch } = useContext(ContextApp);
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "updateName",
      payload: {
        profile: { ...state.profile, name, level: 1 },
      },
    });
    router.push("/map/");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Setup your name</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome</h1>

        <Dragon level={0} />

        <div className={styles.grid}>
          <div className={styles.card}>
            <form onSubmit={onSubmit} className="flex flex-col items-center">
              <div className="text-base font-bold pb-1">
                What is your dragon's name?
              </div>
              <input
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-lg text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2"
                type="text"
                value={name}
              />
              <button type="submit">Continue</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
